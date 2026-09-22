// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 3, Semester 2 — Batch E (Clinical Practice III)
// 7 lessons anchored to courseSlug clinical-practice-3
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "clinical-practice-3",
    moduleTitle: "On the Medical Ward",
    lessonTitle: "A Day on the Medical Ward",
    description:
      "Handover to lights-out — the rhythm of a Ghanaian medical ward, the patients you will meet, and how you grow from visitor to team member.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe the flow of a shift on a medical ward, from handover to night rounds.",
      "Explain the observations and checks that structure a patient's day and why their timing matters.",
      "Apply first-day orientation habits that make you safe and useful from the first hour.",
    ],
    tags: ["medical ward", "ward routine", "placement", "observations"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The medical ward is where your nursing identity finishes forming. Unlike specialist rotations, this is general nursing at full volume: malaria and severe anaemia in one bed, a stroke in the next, diabetic ketoacidosis opposite, tuberculosis down the row — and you, learning to hold all of it in one day.\n\nThe ward has its own rhythm, and the students who thrive are the ones who learn the rhythm early. This lesson maps the day from handover to lights-out, and the habits that turn you from a polite visitor into a member the team is glad to have.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**The day begins at handover** — the night nurse reading the ward aloud, bed by bed: name, diagnosis, condition, medications due, results awaited, what to watch. Listen with a pen and write the beds you inherit; a handover heard half-asleep becomes a medication error by lunchtime.\n\n**Then the observation round** — temperature, pulse, respiratory rate, blood pressure, oxygen saturation and conscious level for every patient on your allocation, charted in real time. This is the ward's early-warning system: the patients whose observations are quietly drifting are the ones who will crash at midnight if nobody notices at 8am. Respiratory rate is the most honest of the vitals and the most often skipped — count it for a full minute, every time.\n\n**Then the medication round** — the rights of administration patient by patient: right patient, right drug, right dose, right route, right time, right documentation. Ask about allergies, watch the patient actually swallow, never pre-label cups, never give a drug another nurse drew up without checking it together.\n\n**Then the doctors' round**, where plans are made — follow it for your patients and write the changes down before you forget them. **Then the work of the ward**: admissions (a feverish traveller from a tro-tro journey, an asthmatic worse in the harmattan dust, an elderly stroke, a diabetic foot), discharges and teaching, turns and pressure-area care for the bed-bound, feeding and mouthcare for those who cannot feed themselves, fluids charted, drains and catheters monitored, referrals and transfers. **Evening and night** bring the last medication round, the settle-down round, and — the night nurse's truth — the deterioration that always seems to arrive at 2am. The day ends as it began: with a handover that survives because you wrote things down.",
      },
      {
        type: "clinical_pearl",
        body: "In your first week, learn three things before anything else: where the emergency trolley is, where the oxygen cylinders and suction are, and who to call when a patient crashes. Everything else in the orientation folder can wait a day. Emergencies do not wait for you to finish orienting.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "It is 9am on your first week. Bed 6, admitted overnight with 'fever and weakness', has not been reviewed on the morning round yet. You take his observations for the second time today: temperature 39.2 C, pulse 118, respiratory rate 28, blood pressure 96/60, and he is now drowsy where he was talkative at 6am.\n\nWhat do you do with these numbers?\n\nAnswer: Do not chart them and walk on. A rising pulse with a falling pressure, fast breathing, fever and a falling conscious level in a malaria-endemic district is severe illness announcing itself — possibly severe malaria with the malaria test and treatment already ordered, possibly sepsis. Recheck the respiratory rate to be sure, then report to the nurse in charge immediately with the numbers and the trend since 6am, stay with the patient, and prepare for the team's arrival: emergency observations, IV access if delegated, and the notes and drug chart open at the bedside. Your value is not a diagnosis — it is the trend, reported fast.",
      },
      {
        type: "memory_trick",
        body: "The medical ward day runs H-O-M-A-D-E: Handover, Observations, Medications, Doctors' round, Admissions and discharges, Evening settle round. Say it each morning and you always know where you are — and what is still owed to whom.",
      },
      {
        type: "summary",
        body: "- The shift is structured: handover → observation round → medication round → doctors' round → admissions, discharges and nursing care → evening rounds and handover out.\n- Observations are the early-warning system — count the respiratory rate for a full minute every time; trends matter more than single readings.\n- Medication rounds run on the rights: right patient, drug, dose, route, time, documentation — checked and charted, never rushed.\n- Know from day one: emergency trolley, oxygen and suction, and who to call. Then the rest of orientation.\n- Write everything down at the time it happens — a handover is only as good as the notes that survive the shift.",
      },
    ],
    questions: [
      {
        topic: "Medical Ward Practice",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the first structured event of a medical ward shift, and how should you receive it?",
        options: [
          "The medication round — received by checking the drug cupboard",
          "Handover — received with a pen, writing the beds you inherit and their watch-points",
          "The doctors' round — received by standing quietly at the back",
          "Breakfast — received before the ward wakes up",
        ],
        correctIndex: 1,
        explanation:
          "Handover is the shift's foundation: condition, medications, results and watch-points for every bed, read aloud by the outgoing nurse. Inheriting beds with notes taken is what keeps care continuous through shift changes.",
        whyOthers: {
          A: "Medications come after handover — and they depend on it.",
          C: "The doctors' round comes later; a student who only follows doctors misses the nursing plan.",
          D: "Breakfast is not a clinical event — however tempting at 7am.",
        },
        courseSlug: "clinical-practice-3",
      },
      {
        topic: "Medical Ward Practice",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which observation is most often charted carelessly, yet among the most valuable for spotting early deterioration?",
        options: [
          "Temperature",
          "Blood pressure",
          "Respiratory rate counted for a full minute",
          "Weight",
        ],
        correctIndex: 2,
        explanation:
          "The respiratory rate rises early in sepsis, pneumonia, heart failure and metabolic crises — before blood pressure falls — but it is the vital sign most often guessed rather than counted. Count it for a full minute, every time, for every patient.",
        whyOthers: {
          A: "Temperature is easy and useful but rises late compared to breathing in many deteriorations.",
          B: "Blood pressure is a late sign in young patients, who compensate until they collapse.",
          D: "Weight matters for fluid balance and dosing but is not an early warning sign.",
        },
        courseSlug: "clinical-practice-3",
      },
      {
        topic: "Medical Ward Practice",
        type: "CLINICAL_SCENARIO",
        difficulty: "Moderate",
        stem: "On the observation round, your patient's pulse has climbed from 84 to 118 over six hours, his blood pressure has drifted from 118/74 to 96/60, and he has become drowsy. What is the correct nursing response?",
        options: [
          "Chart the observations and repeat them on the next routine round in four hours",
          "Wait for the doctors' round to mention it",
          "Recheck the respiratory rate, then report the trend to the nurse in charge immediately and stay with the patient",
          "Give paracetamol for the fever and reassess after one hour",
        ],
        correctIndex: 2,
        explanation:
          "A rising pulse with falling blood pressure and a dropping conscious level is deterioration — possibly sepsis or severe malaria — demanding immediate escalation with the trend in your hand. The nurse is the frontline assessor here: your fast, accurate report is the patient's best chance.",
        whyOthers: {
          A: "Four more hours of waiting is how a compensating young patient becomes a crashed one.",
          B: "The doctors' round may be hours away — escalation cannot wait for it.",
          D: "Symptomatic treatment without escalation delays the care that matters.",
        },
        courseSlug: "clinical-practice-3",
      },
    ],
    flashcards: [
      {
        topic: "Medical Ward Practice",
        front: "Name the sequence of a medical ward shift.",
        back: "Handover → observation round → medication round → doctors' round → admissions, discharges and nursing care (turns, feeding, mouthcare, fluid charts) → evening settle round → handover out. H-O-M-A-D-E.",
      },
      {
        topic: "Medical Ward Practice",
        front: "Why does the respiratory rate deserve a full minute, every time?",
        back: "It rises earliest in deterioration — sepsis, pneumonia, heart failure, metabolic crisis — before pressure falls in a compensating patient, and it is the vital sign most often guessed. Counted honestly, it is the ward's best early warning.",
      },
      {
        topic: "Medical Ward Practice",
        front: "What three things do you learn first on a new ward?",
        back: "Where the emergency trolley is, where oxygen and suction are, and who to call when a patient deteriorates. Emergencies do not wait for orientation to finish.",
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
        title: "Standards and Protocols for Clinical Nursing Practice",
      },
      {
        organization: "World Health Organization",
        title: "Integrated Management of Adult Illness (IMAI) District Clinician Manual",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "clinical-practice-3",
    moduleTitle: "On the Medical Ward",
    lessonTitle: "Managing Your Patient Load",
    description:
      "Six beds, one nurse, twelve hours — the prioritisation habits that keep every patient safe when all of them need you at once.",
    difficulty: "Clinical Reasoning",
    durationMin: 11,
    objectives: [
      "Apply a structured framework to prioritise patient care across a whole allocation.",
      "Explain how to recognise and escalate the deteriorating patient early, including SBAR.",
      "Apply workload strategies — batching, delegation, asking for help — without dropping safety.",
    ],
    tags: ["prioritisation", "workload", "escalation", "sbar"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "One day you will hold six beds, and at 11am all six will need you: one due for IV antibiotics, one climbing a fever, one off to theatre, one incontinent, one arriving from casualty, one whose family wants answers. Nursing workload is not heavy — it is simultaneous. The skill that separates a safe senior student from an overwhelmed one is not speed; it is sequence.\n\nThis lesson gives you a framework for choosing who comes first, the habits that buy back time, and the sentences that get help moving before you need it.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Triage your beds with ABC in mind.** Anything threatening the **Airway, Breathing or Circulation** comes before everything — a patient with stridor or a respiratory rate of 32 outranks a medication due and a family meeting. Next, **acuity by change**: the patient whose condition has moved since the last observation outranks the stable patient whose care is routine. Third, **time-critical treatments** — antibiotics for suspected sepsis, insulin for a sliding-scale diabetic, analgesia with a fixed timing — where delay has a pharmacological cost. Fourth, **comfort and hygiene** — real care, never optional, but sequenced after the first three when the ward is on fire.\n\n**Use the track-and-trigger discipline.** Many GHS wards use early-warning charts where abnormal vitals score points; learn your ward's system and treat any climb as a summons, not a statistic. The golden habit is **comparing**: a pulse of 102 means one thing in a febrile patient and another in the post-operative patient whose baseline was 64. The trend is the trigger.\n\n**Buy back time honestly.** Batch the tasks — do all your observations in one sweep, all your medications in one round, all your documentation at the bedside as you go rather than in a pile at the desk. Delegate what is delegable to ward assistants — feeding, walking, linen — while assessments and medications stay yours. And ask for help at the right moment: early, specific and unembarrassed. 'Sister, I am concerned about bed 4 — her breathing has risen since morning and I need you to see her now' is a sentence that saves lives. Package it with **SBAR** — Situation, Background, Assessment, Recommendation — when you call a doctor, and write your concern in the notes with the time. A worry documented is a worry shared; a worry kept in your head is a worry you carry alone at 2am.",
      },
      {
        type: "clinical_pearl",
        body: "Never end a shift carrying an unreported worry. The sentence 'I am concerned about bed 4' costs five seconds — and concerns spoken early are called good nursing; concerns spoken after the collapse are called inquiries.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You have six beds at 10am. Bed 2 is due for IV antibiotics now. Bed 4, admitted overnight with fever, has a respiratory rate of 30 (was 22 at 6am) and looks anxious. Bed 6's family is asking when the doctor will come. Bed 1 needs turning and is due for a wash. A new admission from casualty is waiting in the corridor with a folder.\n\nOrder your next hour, and justify it.\n\nAnswer: Bed 4 first — the rising respiratory rate is the track-and-trigger alarm, and this patient may be developing severe illness: full observations, then report to the nurse in charge with SBAR and stay until seen. Bed 2 second — time-critical antibiotics, ideally after your escalation so treatment begins while the review is arranged; check the prescription first so the drug is ready when you return. The new admission third — baseline observations and a first look, because an unassessed patient is an unknown risk. Bed 1's turn and wash come next, and can be delegated to a ward assistant with clear instructions while you chart. Bed 6's family is answered last — but honestly, and not forgotten: an estimate and an acknowledgement cost nothing and are part of care. Chart as you go; handover depends on it.",
      },
      {
        type: "quiz_prompt",
        body: "Four patients call at once: one with chest pain, one whose IV bag has finished, one needing the bedpan, one asking about discharge. Rank them and name the framework you used.\n\nAnswer: Chest pain first (possible circulation threat — assess now, oxygen, call), then the discharge question and IV in whichever order (time-critical but stable), then the bedpan — dignity matters, but ABC and acuity rank it last in this moment. The framework: ABC first, acuity and change second, time-critical treatments third, comfort fourth — reassessing constantly.",
      },
      {
        type: "memory_trick",
        body: "Order your day by A-C-T-C: Airway-Breathing-Circulation first, Change since the last observation second, Time-critical treatments third, Comfort and cleanliness fourth. And remember the honest ladder: batch, delegate, escalate — never skip safety to save time.",
      },
      {
        type: "summary",
        body: "- Prioritise with ABC first, then change from baseline, then time-critical treatments, then comfort — reassess the order whenever anything changes.\n- Track-and-trigger: learn your ward's early-warning chart; a climbing score or a moving trend is a summons, not a statistic.\n- Buy time by batching tasks, documenting at the bedside, and delegating feeding, walking and linen to assistants — assessments and medications stay with you.\n- Ask early and specifically: 'I am concerned about bed 4' — packaged with SBAR to doctors and written in the notes with the time.\n- A worry documented is a worry shared; never carry an unreported concern through a shift.",
      },
    ],
    questions: [
      {
        topic: "Prioritisation",
        type: "CLINICAL_SCENARIO",
        difficulty: "Moderate",
        stem: "You have four patients needing attention simultaneously: bed 3 with new chest pain, bed 1 whose antibiotic is due now, bed 5 needing the bedpan, and bed 2 asking about discharge. Which order is correct?",
        options: [
          "Antibiotic, bedpan, discharge, chest pain — work down the ward in bed order",
          "Chest pain first (assess, call for help), then the antibiotic, then the discharge question, then the bedpan",
          "Bedpan first — comfort always precedes everything",
          "Discharge first — families who wait get angry and complain",
        ],
        correctIndex: 1,
        explanation:
          "New chest pain is a possible circulation emergency — it is assessed immediately with vitals and a call for help, before anything routine. The antibiotic is time-critical but stable; discharge information is important but not urgent; the bedpan is real care, but dignity outranked by danger waits a few minutes. Reassess continuously.",
        whyOthers: {
          A: "Bed order is not a clinical framework — danger beats numbers every time.",
          C: "Comfort is genuine care, but ABC outranks it when circulation is threatened.",
          D: "Family satisfaction matters — after the patient with chest pain is safe.",
        },
        courseSlug: "clinical-practice-3",
      },
      {
        topic: "Prioritisation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Bed 4's pulse has risen from 84 to 118 since the morning round and her respiratory rate from 18 to 28. She says she 'just feels unwell'. What does the trend demand?",
        options: [
          "Repeat the observations in four hours to confirm the pattern",
          "Treat her anxiety and chart the findings",
          "Full reassessment and immediate escalation to the nurse in charge with the trend",
          "Give the next due analgesia early and see if she settles",
        ],
        correctIndex: 2,
        explanation:
          "Two moving vital signs plus a subjective change is a track-and-trigger alarm — possible sepsis or haemorrhage in evolution. The nursing role is full reassessment, immediate escalation with the trend, and staying with the patient until seen.",
        whyOthers: {
          A: "Confirming the pattern four hours later confirms it on a much sicker patient.",
          B: "'Anxiety' is what early deterioration looks like to the untrained eye — charting without escalating is abandonment with paperwork.",
          D: "Analgesia may mask the picture and delays the assessment that matters.",
        },
        courseSlug: "clinical-practice-3",
      },
      {
        topic: "Prioritisation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which task may a senior student appropriately delegate to a ward assistant on a busy round?",
        options: [
          "Assessing a patient's new confusion",
          "Administering oral medications",
          "Feeding a stable patient who needs help",
          "Deciding a patient's discharge readiness",
        ],
        correctIndex: 2,
        explanation:
          "Feeding a stable patient is delegable care with clear instructions — while assessment, medication administration and discharge decisions are regulated nursing activities that stay with the nurse. Delegate tasks, never judgement.",
        whyOthers: {
          A: "New confusion is a change in condition — an assessment demanding the nurse.",
          B: "Medication administration is not delegable to a ward assistant under any circumstances.",
          D: "Discharge decisions require nursing and medical judgement.",
        },
        courseSlug: "clinical-practice-3",
      },
    ],
    flashcards: [
      {
        topic: "Prioritisation",
        front: "Give the four-level framework for ordering a busy ward round.",
        back: "A-C-T-C: ABC threats first (airway, breathing, circulation); Change from baseline second; Time-critical treatments third; Comfort and hygiene fourth — with constant reassessment as conditions move.",
      },
      {
        topic: "Prioritisation",
        front: "What does SBAR stand for, and when do you use it?",
        back: "Situation, Background, Assessment, Recommendation — used when escalating to the nurse in charge or calling a doctor, so the listener hears a story with a clear ask in under a minute.",
      },
      {
        topic: "Prioritisation",
        front: "Name three honest ways to buy back time on a heavy shift.",
        back: "Batch similar tasks (one observation sweep, one medication round), document at the bedside as you go, and delegate delegable care (feeding, walking, linen) to ward assistants with clear instructions.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Midwives",
      },
      {
        organization: "Ghana Health Service",
        title: "Standards and Protocols for Clinical Nursing Practice",
      },
      {
        organization: "World Health Organization",
        title: "Patient Safety Curriculum Guide: Multi-Professional Edition",
        year: "2011",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "clinical-practice-3",
    moduleTitle: "On the Medical Ward",
    lessonTitle: "Learning From Real Patients",
    description:
      "Every patient is a page — bedside learning, honest reflection and the habits that turn raw shifts into clinical judgement.",
    difficulty: "Easy",
    durationMin: 10,
    objectives: [
      "Describe how to link classroom theory to real patients at the bedside.",
      "Explain structured reflection and the debrief after difficult shifts.",
      "Apply portfolio and logbook habits that document growth and guide next steps.",
    ],
    tags: ["reflection", "bedside learning", "portfolio", "student growth"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The medical ward is the best textbook you will ever own — and it updates daily. The patient with heart failure in bed 3 will teach you more about fluid balance than three lectures, if you know how to read him. The trick is that experience alone teaches nothing: ten shifts can become ten days of tiredness, or ten pages of real learning, depending on the habits you bring.\n\nThis lesson is about those habits — looking things up, asking better questions, reflecting honestly, and writing it down — and about looking after your own mind while you do it.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Follow the thread.** When a patient arrives with a diagnosis you half-remember, the ward becomes a tutorial: read his notes and results, watch his response to treatment, and look up the condition that evening — five minutes with a real patient attached to it beats an hour of abstract reading. Each morning, pick one patient and ask: what should happen to him today, and why? Then check at night whether it did. Being wrong in prediction is how judgement grows.\n\n**Ask questions at the right moments.** Seniors answer best when the ward is calm and the question is specific: not 'how does diabetes work?' but 'why did the team choose this fluid for bed 7's ketoacidosis?' Carry a small notebook of unanswered questions — the ward teaches on its own schedule, and the notebook collects the lessons until they come.\n\n**Reflect with structure.** After a shift, ten minutes and three questions: **What? So what? Now what?** — what happened, why it matters, and what you will do differently. For the heavy cases — a death, a resuscitation, a family's grief — ask your mentor for a **debrief** within days, not months: sequencing the event out loud separates what you controlled from what you never could. Watch yourself too: sleeplessness, replaying, or avoiding the ward that persists for weeks is distress that has outgrown self-help — the professional move is to speak to your supervisor or the counselling service early. Nurses who look after their own minds look after patients longer.\n\n**Keep the portfolio honestly.** Your logbook and portfolio are not decoration: they are the record of what you have seen, done and learned, and the evidence your final year assessments will stand on. Log skills attempted and observed — including the attempts that went badly; those teach fastest. Write one reflection per week at minimum, and bring the portfolio to your placement reviews.",
      },
      {
        type: "clinical_pearl",
        body: "Prediction is the fastest teacher: each morning, write what you expect to happen to your sickest patient by evening — then check. Being surprised is the feeling of your clinical judgement being upgraded.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 58-year-old teacher with a stroke has been on your ward for two weeks. You have turned him, fed him, suctioned him, and watched his family learn to do the same. On your last day of the rotation, he aspirates during a feed at dinner and is reviewed urgently. You go home numb, sleep badly, and spend the weekend telling yourself you should have fed him more slowly.\n\nWhat is the healthiest thing you can do now?\n\nAnswer: Name it as a difficult case and ask your mentor for a debrief within days: sequence the event, hear what the team found and decided, and place your part in proportion — aspiration risk in stroke is a known and guarded-against danger, and one incident after two weeks of careful care is not proof you failed. Use What-So what-Now what in your notebook: write one concrete action — for you, perhaps your swallowing-assessment knowledge — into your portfolio. Allow the sadness: caring is the job. And watch the clock: if the sleeplessness and replaying persist for weeks, tell your supervisor and accept support. The students who last are the ones who ask early.",
      },
      {
        type: "memory_trick",
        body: "Three questions, ten minutes, same week: What? So what? Now what? If the feelings outlive the questions, the next step is a person, not another page.",
      },
      {
        type: "summary",
        body: "- Read the ward like a textbook: follow one patient's thread each day, predict, check, and look up the condition with the patient attached to it.\n- Ask specific questions in calm moments, and keep a notebook of unanswered ones.\n- Reflect with What-So what-Now what; debrief the hard cases with a mentor within days, and separate what you controlled from what you never could.\n- Persisting sleeplessness, replaying or avoidance needs a supervisor and support — early, not after burnout.\n- Keep the logbook and portfolio honest and current: skills observed and attempted, weekly reflections, one action point per case — your final year stands on this evidence.",
      },
    ],
    questions: [
      {
        topic: "Reflective Practice",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the purpose of structured reflection after a clinical shift?",
        options: [
          "To prove you handled everything correctly",
          "To fill the portfolio with pages for their own sake",
          "To compare yourself with classmates",
          "To turn experience into planned learning and better practice",
        ],
        correctIndex: 3,
        explanation:
          "Structured reflection converts experience into action: what happened, why it matters, what you will do differently. It is not self-justification, paperwork or competition — it is how the same mistake stops repeating.",
        whyOthers: {
          A: "Reflection that only defends your actions teaches nothing.",
          B: "Pages without insight decorate a folder and change no practice.",
          C: "Comparison breeds anxiety, not competence.",
        },
        courseSlug: "clinical-practice-3",
      },
      {
        topic: "Reflective Practice",
        type: "CLINICAL_SCENARIO",
        difficulty: "Moderate",
        stem: "Weeks after a distressing ward death, a student still cannot sleep, replays the scene, and avoids the ward. What does this call for?",
        options: [
          "Another reflective essay, written alone",
          "More shifts, to toughen up",
          "Speaking with a supervisor and accepting professional support",
          "Waiting for the feelings to fade on their own",
        ],
        correctIndex: 2,
        explanation:
          "Distress persisting beyond a few weeks — with sleeplessness, replaying and avoidance — has outgrown self-help. The professional move is to tell a supervisor and accept counselling: support early, not rehabilitation after burnout.",
        whyOthers: {
          A: "Writing alone deepens rumination when the distress has lasted this long.",
          B: "Immersion without support reinforces trauma, not toughness.",
          D: "Waiting is how treatable distress becomes lasting harm.",
        },
        courseSlug: "clinical-practice-3",
      },
      {
        topic: "Bedside Learning",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which bedside learning habit most efficiently builds clinical judgement?",
        options: [
          "Predicting each morning what will happen to your sickest patient, then checking in the evening",
          "Memorising the ward's admission numbers each week",
          "Reading the whole drug formulary cover to cover",
          "Copying seniors' notes word for word",
        ],
        correctIndex: 0,
        explanation:
          "Prediction forces you to commit to a mental model of the patient's illness; checking it against reality shows you exactly where your model was wrong — which is the fastest known route from knowledge to judgement.",
        whyOthers: {
          B: "Statistics describe the ward, not your judgement.",
          C: "Formularies are references to search with a patient in mind, not novels to read.",
          D: "Copying notes practises handwriting, not reasoning.",
        },
        courseSlug: "clinical-practice-3",
      },
    ],
    flashcards: [
      {
        topic: "Reflective Practice",
        front: "What are the three questions of quick reflection?",
        back: "What? (the facts of what happened) — So what? (why it matters) — Now what? (what changes tomorrow). Ten minutes, within the same week.",
      },
      {
        topic: "Reflective Practice",
        front: "Why debrief difficult cases with a mentor within days?",
        back: "Sequencing the event aloud separates what you controlled from what you never could, closes the loop, and prevents months of private rumination. Suppression and silence prolong distress.",
      },
      {
        topic: "Bedside Learning",
        front: "How does the prediction habit work?",
        back: "Each morning, write what you expect for your sickest patient by evening — then check. The gap between prediction and reality is the exact shape of what your judgement needs to learn next.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
      {
        organization: "World Health Organization",
        title: "Patient Safety Curriculum Guide: Multi-Professional Edition",
        year: "2011",
      },
      {
        organization: "Ghana College of Nurses and Midwives",
        title: "Continuing Professional Development Framework",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "clinical-practice-3",
    moduleTitle: "Theatre, Clinic & Community",
    lessonTitle: "The Theatre Experience",
    description:
      "Sterile fields, counts and choreographed roles — the operating theatre as a senior student sees it, from the changing room to the recovery bay.",
    difficulty: "Moderate",
    durationMin: 10,
    objectives: [
      "Describe theatre etiquette, zones and the discipline of the sterile field.",
      "Explain the WHO Surgical Safety Checklist and the counts that protect patients.",
      "Apply the recovery-room observations that a nurse monitors after an operation.",
    ],
    tags: ["theatre", "perioperative", "surgical safety", "recovery care"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The operating theatre is the most choreographed room in the hospital. Everyone moves in a rehearsed pattern, speaks in half-sentences, and treats a rectangle of blue drapes as if it were sacred — because it is: inside that field, everything is counted, everything is intentional, and one unsterile thumb can turn a clean operation into a wound infection.\n\nAs a senior student you are there to watch, assist where allowed, and absorb the culture. Your contribution on this rotation is not suturing — it is understanding the system well enough to keep it safe, and to receive its patients back onto the ward in recovery, which is very much your work.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Etiquette and zones.** Enter only in theatre attire — the clean wraparound top and trousers, the cap covering all hair, the mask over nose and mouth, and dedicated footwear. No jewellery, no nail polish, no watches. The theatre has zones: the outer zone for street clothes and cases, the semi-restricted zone for attire and preparation, the restricted zone — the operating rooms themselves — for sterile team members and their escorted guests. The rule that governs your whole rotation: **sterile team members are sterile from chest to table-level in front, and you never come between them and the table.** If in doubt, keep your hands clasped behind your back and ask before you touch anything.\n\n**The roles.** The surgeon leads the operation; the anaesthetist owns the airway, the drugs and the monitors; the **scrub nurse** is gowned and gloved, guards the sterile field, and knows every instrument; the **circulating nurse** stays unsterile, fetches, records and runs the room. Watch the count ritual with respect: before the incision, before closure of a cavity, and at the end — every swab, needle and instrument counted aloud by two people. A missing count stops the closure. Nothing — nothing — is closed until the count is right, and nothing discarded on the floor until it is accounted for.\n\n**The checklist.** Before every operation, the team runs the **WHO Surgical Safety Checklist**: **Sign in** before anaesthesia — patient identity, site, procedure, consent, allergies, airway risks; **Time out** before incision — the whole team confirms patient, site and procedure aloud, antibiotics and imaging in place; **Sign out** before the patient leaves the room — the procedure named and recorded, counts complete, equipment issues noted, and the recovery plan stated. It takes two minutes and measurably saves lives. **Recovery (the PACU)** is where nursing takes the baton: airway open and awake, breathing and oxygen saturation, circulation and blood pressure, bleeding at the site, pain scored and treated, temperature, and conscious level — checked at set intervals, charted, and only discharged to the ward when criteria are met and the handover is given with the operation, the drugs given and the plan. Ghanaian realities complete the picture: generators that hum during power cuts, instruments re-sterilised and reused to a strict discipline, and a count culture that exists precisely because consumables are precious.",
      },
      {
        type: "clinical_pearl",
        body: "If you hear a count called and the numbers disagree, the room stops. That is not bureaucracy — somewhere in that patient may be a swab. The count is the last, cheap, perfect safeguard, and no one's hurry outranks it.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are observing a hernia repair when the circulating nurse announces the closing count: one swab missing. The surgeon pauses; the scrub nurse re-counts the field; someone checks under the drapes and the kick bucket; the missing swab is found on the floor where it had been thrown earlier, and the count is corrected and recorded before closure proceeds.\n\nWhy did the whole room stop for one swab, and what would have happened without the count?\n\nAnswer: A retained swab is a never-event — infection, a second operation, and harm that was entirely preventable. The stop demonstrates the system working exactly as designed: counts are performed and verified by two people before closure precisely so a missing item cannot silently remain inside. Your lesson as a future ward or theatre nurse: never discard anything into a bucket or onto the floor during a case without announcing it, because every item on that floor is one that must be found before the patient is closed.",
      },
      {
        type: "memory_trick",
        body: "Theatre runs on three S's: Sterile field discipline, Safety checklist (sign in, time out, sign out), and Swab counts (three times per case). And recovery runs A-B-C-B-P-T: Airway, Breathing, Circulation, Bleeding, Pain, Temperature — until the patient is awake, stable and safely handed over.",
      },
      {
        type: "summary",
        body: "- Theatre zones: outer, semi-restricted, restricted — entered only in full attire: cap, mask, wraparound top and trousers, dedicated footwear, no jewellery.\n- Sterile discipline: sterile from chest to table-level in front; never come between a sterile team member and the table; when unsure, hands behind your back and ask.\n- Roles: surgeon, anaesthetist, scrub nurse (sterile, guards the field), circulating nurse (unsterile, runs the room and records).\n- WHO Surgical Safety Checklist: sign in before anaesthesia, time out before incision, sign out before leaving — identity, site, procedure, allergies, antibiotics, counts, recovery plan.\n- Counts of swabs, needles and instruments happen three times per case; a missing count stops closure — nothing discarded unannounced.\n- Recovery nursing: airway, breathing, circulation, bleeding, pain, temperature and conscious level, charted at set intervals, discharge to the ward only when criteria are met and handover given.",
      },
    ],
    questions: [
      {
        topic: "Perioperative Care",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What are the three checkpoints of the WHO Surgical Safety Checklist?",
        options: [
          "Sign in before anaesthesia, time out before incision, sign out before the patient leaves the room",
          "Count in, count during, count out",
          "Consent, anaesthesia, suturing",
          "Admission, operation, billing",
        ],
        correctIndex: 0,
        explanation:
          "The checklist runs Sign in (identity, site, consent, allergies, airway), Time out (whole team confirms patient, site and procedure; antibiotics in place) and Sign out (procedure recorded, counts complete, recovery plan stated). Two minutes, proven to save lives.",
        whyOthers: {
          B: "The counts are a separate, complementary ritual — the checklist is broader.",
          C: "Consent belongs inside sign in, but anaesthesia and suturing are procedures, not checkpoints.",
          D: "Billing is not a safety checkpoint.",
        },
        courseSlug: "clinical-practice-3",
      },
      {
        topic: "Perioperative Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During a case, the scrub nurse asks you to hand her an item from the trolley behind you. As a student in theatre attire but not gowned, what is your correct response?",
        options: [
          "Reach over the sterile field and place it in her hand",
          "Hand it to the circulating nurse, who passes it to the sterile field the correct way",
          "Refuse and leave the theatre",
          "Gown and glove yourself quickly and assist directly",
        ],
        correctIndex: 1,
        explanation:
          "You are unsterile — your touch contaminates whatever you deliver. Items reach the sterile field through the circulating nurse using the no-touch transfer discipline. Reaching over the field is how theatre-acquired infections and count errors are born.",
        whyOthers: {
          A: "An unsterile hand crossing the field contaminates the drapes, the item and everything beneath.",
          C: "Politeness is not required — refusal without explanation abandons the team; ask and route it correctly.",
          D: "Gowning mid-case without invitation breaks the room's choreography; students are gowned only when the team plans it.",
        },
        courseSlug: "clinical-practice-3",
      },
      {
        topic: "Perioperative Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In the recovery room, which observations do you monitor at set intervals before a patient returns to the ward?",
        options: [
          "Only the surgical dressing",
          "Airway, breathing, circulation, bleeding, pain, temperature and conscious level",
          "Only blood pressure and heart rate",
          "Nothing — recovery is the anaesthetist's job alone",
        ],
        correctIndex: 1,
        explanation:
          "Recovery nursing monitors the whole picture — airway patency and wakefulness, breathing and saturation, circulation, bleeding at the site, pain scores, temperature and level of consciousness — charted at set intervals, with discharge to the ward only when criteria are met and a full handover given.",
        whyOthers: {
          A: "The dressing is one part of one observation — bleeding and perfusion matter beyond it.",
          C: "Vitals alone miss the airway, pain, temperature and conscious level that define readiness.",
          D: "Recovery is a nursing-led phase with anaesthetic support — the monitoring and handover are nursing work.",
        },
        courseSlug: "clinical-practice-3",
      },
    ],
    flashcards: [
      {
        topic: "Perioperative Care",
        front: "Who is sterile in the theatre, and where does their sterility live?",
        back: "The gowned and gloved team — surgeon, scrub nurse, sterile assistants. Sterility extends from chest to table-level in front; never come between a sterile person and the table, and never reach across the field.",
      },
      {
        topic: "Perioperative Care",
        front: "When are swab and instrument counts performed?",
        back: "Three times: before the incision, before closure of a cavity, and at the end of the case — counted aloud by two people. A missing count stops closure until the item is found.",
      },
      {
        topic: "Perioperative Care",
        front: "What does the circulating nurse own?",
        back: "The unsterile running of the room: fetching and opening supplies, the checklist, the record, the counts with the scrub nurse, and communication with the ward and family — the room's conductor.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Guidelines for Safe Surgery and the Surgical Safety Checklist",
        year: "2009",
      },
      {
        organization: "Ghana Health Service",
        title: "National Infection Prevention and Control Policy and Guidelines",
        year: "2015",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "clinical-practice-3",
    moduleTitle: "Theatre, Clinic & Community",
    lessonTitle: "The Clinic Experience",
    description:
      "Running the chronic disease clinic — the flow, the records, the refills, and the waiting-time teaching that turns three hours on a bench into health education.",
    difficulty: "Moderate",
    durationMin: 10,
    objectives: [
      "Describe the flow of a chronic disease clinic day and the nurse's stations within it.",
      "Explain accurate measurement and recording for hypertension and diabetes reviews.",
      "Apply waiting-time teaching, defaulter tracing and confidentiality in a busy outpatient setting.",
    ],
    tags: ["clinic", "chronic disease", "health education", "records"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The medical ward saves the acutely ill; the chronic clinic keeps the rest alive for decades. On hypertension and diabetes review days, the district clinic fills with patients who mostly feel well, whose folders hold years of blood pressures and prescriptions, and whose futures depend on the numbers being taken accurately and the teaching landing at all.\n\nClinic nursing is its own craft: flow management, honest measurement, records that survive, and education delivered to a room of thirty people with time to spare — because on a clinic day, waiting time is teaching time.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**The flow.** A clinic day runs five stations: **Register** — folders pulled from the records room, attendance marked, the day's list built; **Measure** — the triage sweep of weight, blood pressure, and fasting or random glucose per the clinic's protocol, plus urine dips where indicated, all recorded in the folder; **Review** — the nurse or clinician reads the trend, examines, adjusts treatment; **Refill** — the pharmacy issues the months' medicines, and the nurse confirms the patient knows what each is for; **Reinforce** — the group health talk before patients leave, and the next appointment written in the book. Students are usually welcomed at Measure and Reinforce first — the stations where accuracy and teaching matter most.\n\n**Honest measurement is clinical care.** Blood pressure only means something if it is taken right: seated five minutes, cuff on the bare upper arm at heart level, correct cuff size, feet flat, no conversation, and repeated if the first reading is high. A clumsy 160/95 becomes a doubled antihypertensive dose; the patient takes a drug he may not need because the measurement lied. Glucose checks follow their own discipline — fasting means fasting, and timing is recorded with the reading.\n\n**Records and continuity.** The folder is the patient's memory: today's numbers beside last month's, so the trend is visible at a glance. Missing folders, unmarked defaulters and unfiled results break continuity quietly — part of clinic nursing is guarding the paper as fiercely as the patient. **Defaulter tracing** is the clinic's safety net: appointment books reviewed weekly, community health nurses and volunteers following up at home. Default is usually poverty, distance or feeling well — not neglect — and the outreach is a visit, not a scolding.\n\n**Confidentiality is geography.** Weighing a patient while announcing her glucose across the room breaches it as surely as a leaked file. Behind the screen, low voice, one patient at a time. And waiting-time teaching is the clinic's gift: fifteen minutes on salt and hypertension, or foot care in diabetes, or the signs of a crisis, delivered while the queue ripens — with teach-back at the end so the day leaves knowledge behind, not just prescriptions.",
      },
      {
        type: "table",
        title: "The clinic day in five stations",
        body: "| Station | What happens | The nurse's discipline |\n| --- | --- | --- |\n| Register | Folders pulled, attendance marked | Build the day's list; flag the defaulters from last month |\n| Measure | Weight, blood pressure, glucose, urine dips | Five minutes seated, correct cuff, no talking, record with time |\n| Review | Trend read, examination, treatment adjusted | Your accurate numbers make this station honest |\n| Refill | Medicines issued and explained | Confirm the patient knows each drug and its timing |\n| Reinforce | Health talk and next appointment | Teach-back before they leave; write the return date clearly |",
      },
      {
        type: "clinical_pearl",
        body: "Take the blood pressure as if a dose depends on it — because it does. Five minutes seated, the right cuff, the bare arm at heart level, silence, and a recheck if it reads high. The cheapest way to ruin a clinic day is to prescribe against a measurement that lied.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Diabetes clinic day, and the queue is forty deep. At the Measure station, a man's blood pressure reads 168/98 — but you notice the cuff was placed over his thick shirt sleeve and he arrived straight from an argument with a taxi driver. At the same moment, the waiting bench is loud with patients who have been seated two hours.\n\nWhat do you do about the reading — and about the two hours?\n\nAnswer: The reading is not the patient's blood pressure yet: seat him for five minutes in a quiet corner, apply the correct cuff to his bare arm at heart level, and repeat — if it remains high, report it for review as a possible treatment change. One honest recheck has just prevented a dose being doubled on a false number. Then turn to the bench: two waiting hours are two teaching hours — run a fifteen-minute talk on diet and medication timing in the language the bench speaks, with teach-back questions and leaflets where available. The queue shortens at its own pace; the waiting time becomes the clinic's best-attended classroom.",
      },
      {
        type: "memory_trick",
        body: "The clinic day runs R-M-R-R-R: Register, Measure, Review, Refill, Reinforce. And the measurement creed: five minutes, bare arm, right cuff, heart level, silence, repeat if high — because a dose follows the number.",
      },
      {
        type: "summary",
        body: "- Clinic flow: Register, Measure, Review, Refill, Reinforce — with students most valuable at Measure and Reinforce.\n- Blood pressure discipline: seated five minutes, bare arm at heart level, correct cuff size, no conversation, recheck highs before they drive prescribing.\n- Records are continuity: file results, mark attendance, review the appointment book weekly — and trace defaulters with a visit, not a scolding, since default is usually poverty, distance or feeling well.\n- Confidentiality is geography: one patient at a time, behind the screen, in a low voice.\n- Waiting time is teaching time: a fifteen-minute talk with teach-back turns a long queue into a healthier community.",
      },
    ],
    questions: [
      {
        topic: "Clinic Practice",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the correct technique for a clinic blood pressure reading that will guide prescribing?",
        options: [
          "Cuff over the sleeve, taken while the patient chats, immediately on arrival",
          "Patient seated five minutes, cuff on the bare upper arm at heart level, correct cuff size, in silence, repeating any high reading",
          "Standing, taken quickly between two patients",
          "Any arm, any cuff, as long as it is written in the folder",
        ],
        correctIndex: 1,
        explanation:
          "Prescribing follows the number, so the number must be honest: seated rest, bare arm at heart level, the right cuff, silence during measurement, and a recheck of highs. Sleeves, chatter, standing and rushing all inflate readings — and then the dose.",
        whyOthers: {
          A: "Sleeves and conversation both falsely raise the reading; arrival blood pressure is not resting blood pressure.",
          C: "Standing and haste distort the measurement in both directions.",
          D: "An inaccurate number carefully filed is still an inaccurate number.",
        },
        courseSlug: "clinical-practice-3",
      },
      {
        topic: "Clinic Practice",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A regular patient has missed her last two clinic appointments. What is the appropriate chronic-clinic response?",
        options: [
          "Strike her from the register permanently",
          "Scold her thoroughly at the next visit she makes",
          "Defaulter tracing — follow up at home through community nurses or volunteers, to find the barrier and bring her back",
          "Wait quietly — patients return when they feel like it",
        ],
        correctIndex: 2,
        explanation:
          "Defaulters are the clinic's safety net at work: reviewing the appointment book weekly and tracing through community health nurses or volunteers finds the real barrier — cost, distance, or feeling well — and brings the patient back before the complication arrives. The response is a visit, not a punishment.",
        whyOthers: {
          A: "Striking a hypertensive or diabetic patient from care guarantees her complication.",
          B: "Scolding at the next visit teaches her not to come back at all.",
          D: "Silence lets a treatable disease progress to a stroke or a crisis.",
        },
        courseSlug: "clinical-practice-3",
      },
      {
        topic: "Clinic Practice",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Thirty patients are waiting for review, and the queue will take two hours. What is the best use of the waiting time?",
        options: [
          "Let patients chat among themselves and keep the room quiet",
          "A group health talk — salt and hypertension, foot care in diabetes — with teach-back before patients leave",
          "Close the clinic early to relieve the pressure",
          "Announce each patient's results loudly so everyone hears",
        ],
        correctIndex: 1,
        explanation:
          "Waiting time is teaching time: a short, practical talk in the language the bench speaks, ending with teach-back questions, turns two captive hours into the clinic's most effective education — for exactly the population whose futures depend on it.",
        whyOthers: {
          A: "Wasted hours in the exact people whose behaviour change matters most.",
          C: "Closing early deprives the sick of review and breaks continuity.",
          D: "Announcing results aloud breaches confidentiality — results are discussed one patient at a time, behind the screen.",
        },
        courseSlug: "clinical-practice-3",
      },
    ],
    flashcards: [
      {
        topic: "Clinic Practice",
        front: "Name the five stations of a chronic disease clinic day.",
        back: "Register (folders and attendance), Measure (weight, blood pressure, glucose, urine dips), Review (trend and treatment), Refill (medicines explained), Reinforce (health talk and next appointment).",
      },
      {
        topic: "Clinic Practice",
        front: "Why is defaulter tracing done gently?",
        back: "Default is usually poverty, distance, or feeling well — not neglect. A home follow-up through community nurses or volunteers finds the barrier and brings the patient back before the complication does; scolding only keeps them away.",
      },
      {
        topic: "Clinic Practice",
        front: "What is waiting-time teaching, and how do you end it?",
        back: "A short group health talk delivered while the queue waits — salt in hypertension, foot care in diabetes, danger signs — ended with teach-back questions so the day leaves knowledge behind, not only prescriptions.",
      },
    ],
    sources: [
      {
        organization: "Ghana Health Service",
        title: "National Policy for the Prevention and Control of Chronic Non-Communicable Diseases",
      },
      {
        organization: "World Health Organization",
        title: "Package of Essential Noncommunicable Disease Interventions (WHO PEN)",
        year: "2020",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Midwives",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "clinical-practice-3",
    moduleTitle: "Growing Into the Team",
    lessonTitle: "Working With the Whole Team",
    description:
      "Doctors, pharmacists, porters, cleaners and records clerks — the team the patient never sees whole, and the nurse who stands at its centre.",
    difficulty: "Easy",
    durationMin: 9,
    objectives: [
      "Describe the members of the healthcare team and what each contributes to patient care.",
      "Explain clear, respectful communication and escalation between team members.",
      "Apply teamwork habits — speaking up for safety, gratitude, and reliability — as a senior student.",
    ],
    tags: ["teamwork", "communication", "roles", "professionalism"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Patients meet one nurse at the bedside and one doctor on the round. They never see the whole machine: the laboratory scientist whose result changes the treatment, the pharmacist who catches the double prescription, the porter who carries the stretcher, the cleaner whose mop keeps the ward from becoming an outbreak, the records clerk who keeps the folders findable. Every recovery is a relay with a dozen runners — and the nurse, present at every hour, holds the baton more often than anyone.\n\nThis lesson is about knowing the whole team, speaking its language, and behaving like the colleague you are becoming.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Know the cast.** The ward sister or nurse-in-charge runs the ward's clinical nursing and is your first escalation for anything; staff nurses hold the allocations. The doctors run from house officers (new, tireless, and on the ward at 3am) through medical officers and physician assistants to the consultant who owns the medical plan. The **pharmacist** dispenses — and is the last wall against prescribing errors, so take their calls about a query seriously. The **laboratory scientist** produces the numbers you act on; treat a phoned critical result as urgent and write it down. The **physiotherapist** rebuilds the stroke patient's walking; the **dietitian** plans the diabetic's plate; the **records clerk** guards the folder's journey; **porters** move the patients; **cleaners** break the chain of infection; the **ward assistant** feeds, walks and turns. None of these is support staff — they are the team.\n\n**Speak the language.** Escalation travels best in **SBAR** — Situation, Background, Assessment, Recommendation — whether calling a house officer at night or handing over at shift change: a story, not a scatter. Two rules of respectful escalation: first, go to the right person in order — the nurse in charge before the house officer, the house officer before the registrar — and only jump the chain when the patient is in danger and the chain is silent. Second, when you disagree with a plan, voice the concern directly and in the patient's interest: 'Doctor, I am worried that bed 3's breathing has worsened since the last review — could you see him again?' Speaking up for safety is a professional duty, not a breach of hierarchy.\n\n**Practise the habits.** Learn names — every porter and cleaner on your ward — and greet them; a nurse who is kind to the whole machine is trusted by it. Say thank you and mean it, especially after nights and emergencies. Do what you said you would do, on time, and say early when you cannot — reliability is the student's signature. Bring the patient back to the centre when the team drifts: rounds are busy, but everything the machine does exists for the person in the bed, and the family standing beside it. And be generous with your own thanks when others carry you through your first cardiac arrest: the students who survive placements are the ones who know they were carried.",
      },
      {
        type: "clinical_pearl",
        body: "The cleaner's mop and the records clerk's filing do more to prevent your patients' next infection and next medication error than any single clever act of yours. Gratitude is not just manners — it is an accurate understanding of where safety actually comes from.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At 11pm, you are worried about bed 9: respiratory rate 30 and rising, and he has become confused. You tell the night nurse in charge, who agrees he needs review. The house officer, deep in casualty, says he will come 'after the next admission'. Twenty minutes later, the patient's oxygen saturation has fallen further.\n\nWhat are your options as the senior student, and where are the limits?\n\nAnswer: Escalate again — clearly and specifically: 'Doctor, bed 9 is deteriorating now: respiratory rate 30, saturations falling, new confusion. I believe he needs to be seen immediately.' Worsening observations justify firmness. If the house officer cannot come, ask the nurse in charge to call the registrar — the chain exists exactly for this moment. Stay with the patient, keep observations running, have the notes and drug chart ready, and prepare what the team will need on arrival. The line you do not cross: you make no diagnosis and start no treatment beyond delegated or emergency protocols — your power is the trend, the voice and the persistence. A nurse who politely refuses to be quiet is often the reason a patient sees the morning.",
      },
      {
        type: "memory_trick",
        body: "The team's initials run the ward's day: **N**urse-in-charge, **D**octors, **P**harmacist, **L**ab, **P**hysio, **D**ietitian, **R**ecords, **P**orter, **C**leaner — 'No Day Passes, Lives Depend on Real People's Cleaning.' And escalation is one sentence with a spine: 'I am concerned about bed 9, and I need him seen now.'",
      },
      {
        type: "summary",
        body: "- The team: nurse-in-charge and staff nurses; house officers, medical officers, physician assistants, consultants; pharmacist, laboratory scientist, physiotherapist, dietitian, records clerk, porters, cleaners, ward assistants — none of them 'just support'.\n- Communicate in SBAR — a story with a recommendation, on the phone and at handover.\n- Escalate in order — nurse in charge, house officer, registrar — and jump the chain only for a silent chain and a patient in danger.\n- Speaking up for safety is a duty: voice concerns directly, in the patient's interest, without apology.\n- Reliability is the student's signature: do what you said, say early when you cannot, learn every name, and keep the patient and family at the centre of the machine.",
      },
    ],
    questions: [
      {
        topic: "Teamwork",
        type: "MCQ",
        difficulty: "Easy",
        stem: "You are concerned about a patient's rising respiratory rate late at night. Who is your first escalation?",
        options: [
          "The consultant at home",
          "The nurse in charge of the shift",
          "The ward cleaner",
          "The patient's family",
        ],
        correctIndex: 1,
        explanation:
          "Escalation travels in order: the nurse in charge first — she can review with you and mobilise the medical chain. Calling the consultant at home before the ward's own leadership skips every step the team depends on.",
        whyOthers: {
          A: "The consultant is the end of the chain, not its beginning.",
          C: "The cleaner is a valued team member — but not a clinical escalation.",
          D: "The family must be informed honestly, but they are not the clinical escalation route.",
        },
        courseSlug: "clinical-practice-3",
      },
      {
        topic: "Teamwork",
        type: "CLINICAL_SCENARIO",
        difficulty: "Moderate",
        stem: "You have reported a deteriorating patient to the house officer, who says he will come 'soon' — but twenty minutes later the saturations are falling and he has not appeared. What is the professionally correct next step?",
        options: [
          "Say nothing more — the doctor knows best",
          "Write your complaint in the diary and continue routine work",
          "Escalate again firmly — tell the nurse in charge and ask that the registrar be called, while you stay with the patient",
          "Begin treating the patient yourself with whatever drugs you can find",
        ],
        correctIndex: 2,
        explanation:
          "A deteriorating patient justifies persistent, firm escalation: repeat the concern with the numbers, and use the chain — nurse in charge to registrar. Staying with the patient and keeping observations running is the nurse's power; starting treatment beyond your scope is not.",
        whyOthers: {
          A: "Politeness that lets a patient deteriorate silently is not respect — it is abandonment.",
          B: "A diary complaint after the fact protects no one tonight.",
          D: "Acting beyond scope replaces one danger with a larger one; escalation, documentation and presence are the correct tools.",
        },
        courseSlug: "clinical-practice-3",
      },
      {
        topic: "Teamwork",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which team member is often described as the last line of defence against prescribing errors?",
        options: [
          "The porter",
          "The pharmacist",
          "The records clerk",
          "The physiotherapist",
        ],
        correctIndex: 1,
        explanation:
          "The pharmacist reviews the prescription at dispensing — doses, interactions, duplications — and is frequently the one who catches an error before it reaches the patient. Take pharmacy query calls seriously; they have saved more wards than they can count.",
        whyOthers: {
          A: "Porters move patients — essential work, but not prescribing safety.",
          C: "Records clerks protect continuity of the folder, not the prescription.",
          D: "Physiotherapists restore function, not medication accuracy.",
        },
        courseSlug: "clinical-practice-3",
      },
    ],
    flashcards: [
      {
        topic: "Teamwork",
        front: "Name six members of the ward team beyond the doctors and staff nurses.",
        back: "Pharmacist, laboratory scientist, physiotherapist, dietitian, records clerk, porter and cleaner — plus the ward assistant. Every one of them changes patient outcomes.",
      },
      {
        topic: "Teamwork",
        front: "What is the escalation order for a deteriorating patient, and when may you skip it?",
        back: "Nurse in charge → house officer → registrar/consultant. Jump the chain only when the patient is in immediate danger and the chain is silent — then speak up loudly and document.",
      },
      {
        topic: "Teamwork",
        front: "Why is gratitude to cleaners, porters and clerks clinically intelligent?",
        back: "Their work — breaking infection chains, moving patients safely, keeping folders findable — prevents more harm than any single clever act; gratitude reflects an accurate map of where safety actually comes from.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Midwives",
      },
      {
        organization: "World Health Organization",
        title: "Patient Safety Curriculum Guide: Multi-Professional Edition",
        year: "2011",
      },
      {
        organization: "Ghana Health Service",
        title: "Quality Assurance Framework for Clinical Care",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "clinical-practice-3",
    moduleTitle: "Growing Into the Team",
    lessonTitle: "Your Senior Placement Review",
    description:
      "Taking stock in the middle of the journey — reading your own growth honestly, hearing your mentor's feedback, and planning the final year deliberately.",
    difficulty: "Easy",
    durationMin: 9,
    objectives: [
      "Describe a structured self-assessment of clinical skills and professional growth.",
      "Explain how to receive and use mentor feedback, including criticism.",
      "Apply SMART goal-setting to build a development plan for the final year.",
    ],
    tags: ["review", "professional development", "feedback", "goals"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Somewhere in the middle of this placement, your preceptor will sit you down for your senior review — the formal checkpoint between the student you were and the professional you are becoming. Done well, it is one of the most valuable hours of your education. Done passively — arriving, nodding, leaving — it is a wasted ritual.\n\nThe difference is preparation. This lesson teaches you to walk into that room with your own honest map of your strengths and gaps, to hear feedback without flinching, and to leave with a plan that shapes your final year.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Map yourself first.** Before the review, audit your logbook honestly: which skills have you performed under supervision, which observed, which never yet encountered? Where are you confident — taking observations, talking with families, running a medication round — and where do you still hesitate — catheterisation, wound care, the deteriorating patient, leading a handover? Write three strengths and three gaps with evidence for each: not 'I need to improve communication' but 'I have not yet led a discharge teaching session unaided — I have observed four.'\n\n**Receive feedback like data.** The review will include your mentor's observations — some proud, some stinging. Feedback about your practice is information about your future patients, not judgement of your worth: write it down, ask for the specific example behind it, and thank the giver. The habit that separates growing professionals from stuck ones is hearing 'your documentation is thin' as a to-do list rather than an insult. And if the feedback is vague — 'you are doing fine' — ask for specifics: 'What is the one thing I should do differently on my next shift?' Mentors give the gold to the students who ask for it.\n\n**Plan with SMART.** Turn the gaps into goals that are Specific, Measurable, Achievable, Relevant and Time-bound: 'By the end of the next month, I will have performed five supervised catheterisations and documented each in my logbook' beats 'practise more procedures.' Book the opportunities — volunteer for the chest drain review, the diabetic foot clinic, the night shift where the crashes come — and gather the evidence as you go: portfolio entries, signed skills, one reflection per week. **Close the loop** on professionalism too: punctuality, uniform, name badge, the state of your charting, the way you speak to porters and cleaners — because the review assesses the colleague you will be next year, when the word 'student' stops protecting you. And end the review with three questions: What should I keep doing? What should I stop doing? What opportunity can you give me next month? Then book the next review date before you leave the room.",
      },
      {
        type: "clinical_pearl",
        body: "Ask for the specific example behind every piece of feedback — and for the one thing you should change, every time. 'You are doing fine' is feedback wasted; the gold goes to students who ask for it by name.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At your senior review, your preceptor praises your bedside manner and reliability — then says, 'But your documentation is thin, and you hesitate to escalate. Twice I saw you worried about a patient and you waited for me to notice.'\n\nHow do you turn this review into a plan?\n\nAnswer: First, treat both criticisms as data and ask for the examples — which entries were thin, which patients, which shifts. Then build SMART goals: 'By the end of next month, every observation I chart will include the time and a one-line comment on the trend, and I will escalate one finding to the nurse in charge per shift when I have any concern — recording what I reported.' Ask for opportunities that force the growth: an allocation with the sickest bay, a week of nights, a supervised handover lead. Write the exchange in your portfolio with a dated action plan, and book the follow-up review before leaving the room. Two months from now, 'hesitant to escalate' should be a sentence someone cannot say about you.",
      },
      {
        type: "quiz_prompt",
        body: "Your mentor says your documentation is 'thin'. Convert this into a SMART goal.\n\nAnswer: For example — 'Every charting entry I make this month will carry the time, the observation set, and one line on the trend; my preceptor will audit five entries per week, and by the review date my entries will meet the ward standard.' Specific, measurable, achievable, relevant, time-bound.",
      },
      {
        type: "summary",
        body: "- Prepare for the review with an honest self-audit: skills performed, observed, or never met — three strengths and three gaps, each with evidence.\n- Receive feedback as data about your future patients: write it down, ask for the specific example, and ask 'what one thing should I change?'\n- Turn gaps into SMART goals — specific, measurable, achievable, relevant, time-bound — and book the opportunities that force growth.\n- Professionalism is reviewed too: punctuality, uniform, charting, and how you treat every member of the team.\n- Close every review with three questions — keep, stop, next opportunity — and book the follow-up date before you leave the room.",
      },
    ],
    questions: [
      {
        topic: "Professional Development",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which goal is written in a SMART form?",
        options: [
          "I want to be a better nurse",
          "I will practise more procedures this year",
          "By the end of next month, I will have performed five supervised catheterisations, each documented in my logbook",
          "I will try to be more confident someday",
        ],
        correctIndex: 2,
        explanation:
          "Specific (five supervised catheterisations), Measurable (logbook entries), Achievable (supervised, one month), Relevant (core skill), Time-bound (by month's end) — the exact anatomy of a goal a mentor can help you hit and a review can verify.",
        whyOthers: {
          A: "Aspiration without actions — nothing to practise or measure.",
          B: "'More procedures' names neither which, nor how many, nor by when.",
          D: "Confidence is an outcome of practice, not a plan.",
        },
        courseSlug: "clinical-practice-3",
      },
      {
        topic: "Professional Development",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Your mentor's feedback includes criticism of your charting. What is the professionally strongest response in the room?",
        options: [
          "Explain that the ward was short-staffed every shift",
          "Nod silently and hope the topic moves on",
          "Ask for the specific examples, write them down, and ask what the standard looks like",
          "Compare your charting with another student's",
        ],
        correctIndex: 2,
        explanation:
          "Feedback about your practice is data about your future patients. Asking for the examples converts a general criticism into a specific, fixable habit — and signals the professionalism the review exists to grow.",
        whyOthers: {
          A: "Context may be true, but defending prevents learning — it can be discussed after the fix.",
          B: "Silent nodding discards the most valuable information in the review.",
          D: "Comparison is rivalry, not development.",
        },
        courseSlug: "clinical-practice-3",
      },
      {
        topic: "Professional Development",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which three questions best close a senior placement review?",
        options: [
          "What is my grade? When is my next placement? Can I leave early?",
          "What should I keep doing? What should I stop doing? What opportunity can you give me next month?",
          "Did you hear what the night nurses said about me? Who reported me? Why?",
          "Nothing — reviews end when the mentor finishes speaking",
        ],
        correctIndex: 1,
        explanation:
          "Keep, stop, next opportunity: three questions that convert a review into a development plan — and signal to your mentor that their feedback has somewhere to land. Booking the follow-up date before leaving the room completes the loop.",
        whyOthers: {
          A: "Grades and logistics are the least of what a review offers.",
          C: "Defensiveness burns the relationship that would carry you through the final year.",
          D: "A review you only endure teaches nothing; the questions are yours to ask.",
        },
        courseSlug: "clinical-practice-3",
      },
    ],
    flashcards: [
      {
        topic: "Professional Development",
        front: "How do you prepare a self-assessment for your senior review?",
        back: "Audit your logbook honestly — skills performed, observed, never met — and write three strengths and three gaps, each with evidence: not 'improve communication' but 'I have not yet led a discharge teaching session unaided; I have observed four.'",
      },
      {
        topic: "Professional Development",
        front: "How should you receive critical feedback?",
        back: "As data about your future patients, not judgement of your worth: write it down, ask for the specific example behind it, thank the giver — and if feedback is vague, ask for the one thing you should change.",
      },
      {
        topic: "Professional Development",
        front: "What are the SMART criteria, and why do they matter for goals?",
        back: "Specific, Measurable, Achievable, Relevant, Time-bound — they turn 'practise more' into goals a mentor can enable and a review can verify, converting feedback into planned growth for the final year.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
      {
        organization: "Ghana College of Nurses and Midwives",
        title: "Continuing Professional Development Framework",
      },
      {
        organization: "World Health Organization",
        title: "State of the World's Nursing",
        year: "2020",
      },
    ],
  },
];
