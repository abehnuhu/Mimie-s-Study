// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 3, Semester 2 — Batch A (Medical & Surgical Nursing IV)
// 20 lessons anchored to prisma/seed-data/curriculum.ts
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-4",
    moduleTitle: "The Brain & Nerves",
    lessonTitle: "Neurological Assessment: The Conscious Patient",
    description:
      "The brain speaks through eyes, words and movement — this is the bedside exam that finds what the scan confirms, and the trend that shouts before the patient does.",
    difficulty: "Hard",
    durationMin: 12,
    objectives: [
      "Perform a structured bedside neurological assessment of a conscious patient using level of consciousness, pupils, limb power, speech and vital signs.",
      "Score the Glasgow Coma Scale correctly, always recording the patient's best response on each component.",
      "Explain why the trend in neurological observations matters more than any single number, and escalate a falling score immediately.",
    ],
    tags: ["neurological assessment", "glasgow coma scale", "pupils", "deterioration"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "On a Ghanaian ward you will rarely have a CT scanner at the end of the corridor. What you always have is your eyes, your voice, your hands and a watch — and in neurology those are the original instruments. The brain reports on itself constantly: through how awake it is, how the pupils behave, how each limb moves, how speech flows. Your job is to read that report systematically, write it down so the next shift can compare, and notice the moment it changes.\n\nThis lesson teaches the neurological assessment of the conscious patient — the same patient who will later be found face-down after a fall, or drowsy after a bang on the head, or weak on one side after a stroke. Master it here, where the stakes are gentle, so it is already in your hands when they are not.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Work from the top of the brain downwards — the same order every time, so you never skip a part.\n\n**Level of consciousness** comes first, because it outranks everything else. Use AVPU for speed — **A**lert, responds to **V**oice, responds to **P**ain, **U**nresponsive — and the Glasgow Coma Scale for precision. The GCS scores three components: **Eye** opening (4 down to 1), **V**erbal response (5 down to 1) and **M**otor response (6 down to 1), for a maximum of 15. Record the three components, not only the total — 'E3 V4 M6 = 13' tells the next nurse a story that '13' alone does not.\n\n**Pupils** next: size, equality and reaction to light. Pinpoint, blown wide, or unequal — the two eyes telling different stories is always a finding to report. Then **limb power**: compare right against left, upper against lower. Ask the patient to lift both arms off the bed, hold them steady, squeeze your fingers, push and pull against you. One arm drifting down or pronating while the other holds is a quiet announcement of a one-sided brain problem. Then **speech**: is it slurred, word-finding, or jumbled? Finally, run through **orientation** — name, place, roughly what day it is — and always close with vital signs, because a fever, a rising pulse or a climbing blood pressure belongs to the same story.\n\nOne rule binds the whole exam: **score the best response, never the worst**. If the right arm obeys and the left drifts, the motor score comes from the arm that obeys — you record the weakness separately in your notes.",
      },
      {
        type: "table",
        title: "The Glasgow Coma Scale at a glance",
        body: "| Component | Best response | Score |\n|---|---|---|\n| Eye opening (E) | Spontaneous | 4 |\n| | To voice | 3 |\n| | To pain | 2 |\n| | None | 1 |\n| Verbal (V) | Oriented, converses | 5 |\n| | Confused conversation | 4 |\n| | Inappropriate words | 3 |\n| | Incomprehensible sounds | 2 |\n| | None | 1 |\n| Motor (M) | Obeys commands | 6 |\n| | Localises to pain | 5 |\n| | Withdraws from pain | 4 |\n| | Abnormal flexion | 3 |\n| | Extension | 2 |\n| | None | 1 |\n\nMaximum 15, minimum 3. A fall of 2 or more points from the patient's baseline is a reportable change — today, not at the next round.",
      },
      {
        type: "clinical_pearl",
        body: "Treat 'GCS 8' as a boundary your spine straightens at: at 8 or below the airway is at risk and the patient needs urgent escalation. And remember that level of consciousness is the earliest mover in brain trouble — pupils and blood pressure change later. A patient who stops asking for water is already telling you something.",
      },
      {
        type: "quiz_prompt",
        title: "Score it yourself",
        body: "A patient opens her eyes when you call her name, holds a confused conversation, and obeys your request to lift both arms. What is her GCS, written properly?\n\nAnswer: Eyes to voice = 3, verbal confused = 4, motor obeys = 6, so E3 V4 M6 = 13/15. Write all three components — the pattern, not just the total, is what the next shift needs to compare against.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Kojo, 58, was admitted overnight with a severe headache and a long history of hypertension. At admission the night nurse recorded GCS 15. During your morning round he answers slowly, opens his eyes to your voice only, and when you ask him to raise both arms, the right one drifts down and turns inward. His wife says he was 'fine and joking at 6 a.m.'\n\nWhat do you record, and what do you do?\n\nAnswer: He is now around E3 V4 M5 — a fall of at least 2 points with a new one-sided weakness, and an unequal morning story. This is a brain event or rising pressure until proven otherwise. Re-check pupils, keep him nil by mouth and positioned safely, take full vital signs, call the medical team immediately, and document the time of the change. The trend you report — 15 to 13 over hours — is the single most valuable piece of information on that ward this morning.",
      },
      {
        type: "memory_trick",
        body: "E-V-M: **E**yes open, **V**oice answers, **M**otor obeys — three doors into the brain, and you always knock in that order. Score each at its BEST, write the three numbers, and compare with the last shift. The Glasgow scale is a trend-line, not a single photograph.",
      },
      {
        type: "summary",
        body: "- Assess top-down: level of consciousness (AVPU, then GCS), pupils, limb power, speech, orientation, vital signs.\n- GCS = Eyes (4–1) + Verbal (5–1) + Motor (6–1), maximum 15. Record components, not just the total.\n- Always score the best response on each component; describe the weakness separately in the notes.\n- A drop of 2 or more points from baseline is an urgent report — trends beat single numbers.\n- Level of consciousness changes before pupils and vital signs do; GCS 8 or below means the airway is at risk.",
      },
    ],
    questions: [
      {
        topic: "Neurological Assessment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient opens his eyes only to painful stimulation, utters incomprehensible sounds, and localises pain with his hand. What is his GCS?",
        options: [
          "E2 V2 M5 = 9",
          "E3 V3 M5 = 11",
          "E2 V3 M4 = 9",
          "E1 V2 M6 = 9",
        ],
        correctIndex: 0,
        explanation:
          "Eyes to pain scores 2, incomprehensible sounds score 2 on the verbal scale, and localising pain scores 5 on motor — E2 V2 M5 = 9. Writing the components shows exactly which doors into the brain are closing.",
        whyOthers: {
          B: "Eyes to pain is 2, not 3 (3 is opening to voice), and incomprehensible sounds are verbal 2, not 3.",
          C: "The motor response of localising pain is 5, not 4 (4 is withdrawal), and the sounds are verbal 2.",
          D: "If he opens his eyes to pain, eye opening is 2, not 1, and localising pain is motor 5, not 6 (6 requires obeying commands).",
        },
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Neurological Assessment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During your evening round, a head-injured patient's GCS has fallen from 15 at noon to 13 now. He is not on any sedation. What is the correct action?",
        options: [
          "Re-chart at midnight and mention it at handover if it has fallen further",
          "Document the new score and continue, because 13 is still a 'good' GCS",
          "Report the fall immediately to the nurse in charge and medical team, and increase the frequency of neurological observations",
          "Reassure him with tea and observe quietly, since a single point on each component is not significant",
        ],
        correctIndex: 2,
        explanation:
          "A fall of 2 or more points is a significant change in brain function — the number is less important than the direction. A falling GCS after a head injury signals possible bleeding or swelling and needs urgent review, with observations done more often so the trend is visible.",
        whyOthers: {
          A: "Waiting until midnight loses hours the brain cannot spare — deterioration after head injury is fastest in the first hours.",
          B: "13 is only 'good' compared with nothing; compared with this patient's own baseline of 15, it is a fall of 2 points and a warning.",
          D: "Offering oral fluids to a patient whose consciousness is falling adds aspiration risk — he should stay nil by mouth until reviewed.",
        },
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Neurological Assessment",
        type: "MCQ",
        difficulty: "Easy",
        stem: "When scoring the motor component of the GCS in a patient whose right arm is weak but whose left arm obeys commands, which response do you score?",
        options: [
          "The weakest limb, because it reflects the true brain injury",
          "The best response — the arm that obeys — while describing the weakness separately in your notes",
          "An average of both arms",
          "Neither arm, because unequal responses make the scale unusable",
        ],
        correctIndex: 1,
        explanation:
          "The GCS is always scored at the patient's best response, because it measures overall level of consciousness, not focal weakness. The one-sided weakness is real and important — but it belongs in your narrative notes and your report, not in the scale itself.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Neurological Assessment",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which observation usually changes FIRST when a patient's brain function begins to deteriorate?",
        options: [
          "Blood pressure",
          "Pupil size and reaction",
          "Level of consciousness",
          "Deep tendon reflexes",
        ],
        correctIndex: 2,
        explanation:
          "Level of consciousness is the most sensitive early marker — a patient who becomes quietly drowsy or slow to answer is already in trouble, while pupil changes and the blood-pressure rise of Cushing's triad arrive late. This is exactly why AVPU and GCS are checked so often.",
        whyOthers: {
          A: "A rising blood pressure with a slowing pulse is a LATE sign of critically raised intracranial pressure — by then the brain is desperate.",
          B: "Pupillary changes occur later than consciousness changes; they often signal the same pressure that has been building for hours.",
          D: "Reflex testing is not part of routine bedside neurological monitoring and changes unreliably late.",
        },
        courseSlug: "medical-surgical-nursing-4",
      },
    ],
    flashcards: [
      {
        topic: "Neurological Assessment",
        front: "What are the three components of the GCS and their maximum scores?",
        back: "Eye opening (max 4), Verbal response (max 5), Motor response (max 6) — total maximum 15, minimum 3.",
      },
      {
        topic: "Neurological Assessment",
        front: "Why record E3 V4 M6 instead of just 'GCS 13'?",
        back: "The components show which functions are failing — the pattern tells the next shift what changed, while the total alone hides the story.",
      },
      {
        topic: "Neurological Assessment",
        front: "What rule governs scoring when the two sides of the body respond differently?",
        back: "Score the BEST response on each component; describe the one-sided weakness separately in the notes and your report.",
      },
      {
        topic: "Neurological Assessment",
        front: "What GCS drop from baseline must be reported immediately?",
        back: "A fall of 2 or more points — the trend matters more than the absolute number. Also act on GCS 8 or below: the airway is at risk.",
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
        title: "Standard Treatment Guidelines",
        year: "2017",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "15th edition",
        note: "Educational source — verify current edition against your course texts.",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-4",
    moduleTitle: "The Brain & Nerves",
    lessonTitle: "Stroke: The Blocked & Burst Brain",
    description:
      "FAST recognition, the golden hours and the long rehabilitation after — every minute of a stroke is brain you cannot get back.",
    difficulty: "Hard",
    durationMin: 13,
    objectives: [
      "Explain the difference between ischaemic and haemorrhagic stroke and why long-standing hypertension drives both in Ghana.",
      "Apply the FAST tool to recognise a possible stroke and act on the time-critical pathway.",
      "Deliver the essential early nursing care of the stroke patient — swallow assessment, positioning, skin safety and family education.",
    ],
    tags: ["stroke", "fast", "hypertension", "rehabilitation"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Stroke is one of the commonest adult emergencies on our medical wards, and behind most of them stands the same quiet villain: hypertension that was never controlled, because it never hurt. Years of untreated high blood pressure harden and narrow the brain's arteries, or weaken their walls until they burst. Then, in a single moment at breakfast or in the market, one half of the body goes silent.\n\nThis lesson is about that moment: recognising it with FAST, understanding why the clock matters, and the nursing care that decides whether the survivor walks out of the ward or is carried out.",
      },
      {
        type: "text",
        title: "Two strokes, one name",
        body: "About **85%** of strokes are **ischaemic** — a clot blocks an artery and the brain downstream starves. The rest are **haemorrhagic** — a weakened vessel, usually battered by years of hypertension, bursts into the brain tissue itself. Either way, brain cells begin dying within minutes, and the area of dying tissue grows like a puddle under a leaking pipe.\n\nThat is why stroke treatment is a race. In equipped centres, clot-dissolving treatment (thrombolysis) can reopen a blocked artery — but only within the first few hours (roughly 4.5 hours from onset for eligible patients), and only for strokes that imaging proves are ischaemic, because dissolving nothing while a vessel is already bleeding is catastrophe. Ghana's regional hospitals increasingly have CT scanning; your district-level job is not the scan or the drug — it is speed: recognise, record the exact time symptoms began, protect the airway, and move the patient.\n\nBefore anything oral — tablets, water, food — remember that half of acute stroke patients have an unsafe swallow, and a mouthful of water given with kindness can still end in aspiration pneumonia. And check the blood glucose: severe hypoglycaemia is the great stroke mimic, fully reversible in minutes.",
      },
      {
        type: "table",
        title: "Ischaemic versus haemorrhagic stroke",
        body: "| Feature | Ischaemic (about 85%) | Haemorrhagic (about 15%) |\n|---|---|---|\n| What happens | Clot blocks a brain artery | Weakenened vessel bursts into brain tissue |\n| Typical background | Atrial fibrillation, diabetes, smoking, narrowed arteries | Long-standing untreated hypertension |\n| Onset picture | Sudden one-sided weakness, facial droop, speech loss | Often sudden severe headache, vomiting, rapid drowsiness with one-sided signs |\n| CT scan | May look near-normal early | Shows blood immediately |\n| Clot-dissolving drugs | Possible within hours in selected patients | Absolutely not — bleeding is the problem |\n| First nursing response identical | FAST recognition, time of onset, airway, nil by mouth, urgent referral | The same — the CT decides, not you |",
      },
      {
        type: "callout",
        title: "Why time is brain",
        body: "Brain tissue lost to stroke does not regrow — the earlier the blockage is cleared, the smaller the damage. When the family tells you symptoms began at 7 a.m., write '7 a.m.' in the notes, not 'this morning'. The patient who arrives at 9 a.m. is a potential thrombolysis candidate; the one who arrives at 4 p.m. with the same story is not. The clot does not rest while the family debates — and neither should the referral.",
      },
      {
        type: "text",
        title: "After the stroke: the nursing that decides recovery",
        body: "Once the acute phase settles, the ward becomes a rehabilitation workshop, and you are the workshop supervisor.\n\n**Swallowing comes before eating.** A speech therapist or trained clinician should screen swallowing; until then the patient stays nil by mouth, including their antihypertensive tablets (the team will choose another route). Watch for the quiet signs: coughing on a sip, a wet gurgly voice, pocketing food in the weak cheek.\n\n**Positioning is therapy.** Sit the patient up at about 30 degrees to protect the airway and reduce pressure on the brain; support the weak arm on a pillow — an unsplinted, hanging arm swells, subluxes at the shoulder and becomes painful. Change position regularly: the stroke patient is a high pressure-ulcer risk. Roll toward the strong side so the weak arm is on top and visible, never tucked underneath.\n\n**Move early, gently, daily.** With the physiotherapist, begin passive movements of weak limbs to keep joints supple; teach the family the same exercises — in Ghana, the relatives who sit by the bed all day are an unpaid rehabilitation team waiting for instructions. This is also your best defence against contractures, which within weeks can lock a recovering limb into a permanent claw.\n\n**Speak to the whole person.** Aphasia after a stroke is loss of language, not loss of intelligence — speak simply, allow time, use gestures, and never discuss the patient in their presence as if they were absent. Emotional lability — sudden tears or laughter that the patient cannot control — is a symptom of the injury; meet it with calm, not mockery. Depression after stroke is common and treatable, and rehabilitation stalls when it is ignored.\n\n**Prevent the next one.** Before discharge, walk the family through the medicines: blood pressure tablets are taken every day for life, even when the patient feels perfectly well — the stroke was the announcement of a debt that never went away. Sugar control, stopping smoking, walking, and a follow-up appointment complete the prescription.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Madam Adjoa, 62, a market trader, has been hypertensive for ten years. She stopped her tablets last year because 'they finished and I was feeling fine.' This morning at breakfast her husband watched her drop her spoon, her mouth twisted to one side, and her right arm would not lift. It is now 9:30 a.m. The family is debating whether to 'wait till evening to see if it passes', and a well-meaning daughter is offering her water from a flask.\n\nWhat must happen now?\n\nAnswer: This is FAST positive — facial droop, arm weakness, speech disturbance — with onset at about 7 a.m., and stroke is presumed until imaging says otherwise. Tell the family clearly: waiting is how strokes become permanent, and the hospital hours are now. Stop the oral fluids kindly (the swallow is unsafe until assessed), sit her safely upright supported on the strong side, check her glucose if possible, and arrange immediate transfer to the district or regional hospital with a written note of the onset time. At the hospital, the CT will separate the blocked from the burst brain — your job was to get her there in time.",
      },
      {
        type: "clinical_pearl",
        body: "Two faces, two lessons. First: the facial droop of stroke spares the forehead — the forehead receives nerve supply from both sides of the brain, so if the whole half of the face including the forehead is limp, think a nerve problem below the brain; if only the lower face droops, think stroke. Second: the fastest reversible stroke mimic is hypoglycaemia — check the sugar before you conclude anything in a diabetic patient who arrives weak and confused.",
      },
      {
        type: "memory_trick",
        body: "F.A.S.T. — **F**ace drooping on one side, **A**rm weakness (ask her to raise both — one drifts), **S**peech difficulty (slurred or jumbled or absent), **T**ime to act — note the exact onset time and move. Any single sign is enough. And on the ward, remember the three supports: swallow screened, weak arm pillowed, family turned into therapists.",
      },
      {
        type: "summary",
        body: "- About 85% of strokes are ischaemic (clot), the rest haemorrhagic (burst vessel); untreated hypertension is Ghana's commonest driver of both.\n- FAST: Face, Arm, Speech, Time — any one sign means stroke until proven otherwise; record the exact onset time.\n- Clot-dissolving treatment works only within hours and only for proven ischaemic stroke — speed and CT decide.\n- Nil by mouth until swallowing is assessed; sit up at about 30 degrees; support and passively move the weak limbs.\n- Rehabilitation starts on day one: positioning, skin care, physiotherapy, communication with patience — involve the family as the therapy team.\n- Secondary prevention: daily antihypertensives for life, glucose control, no smoking, follow-up.",
      },
    ],
    questions: [
      {
        topic: "Stroke",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which of the following is NOT part of the FAST stroke recognition tool?",
        options: [
          "Facial drooping on one side",
          "Arm weakness or drift",
          "Speech difficulty",
          "Fever above 38 °C",
        ],
        correctIndex: 3,
        explanation:
          "FAST is Face, Arm, Speech and Time. Fever is not part of stroke recognition — though it may complicate a stroke later, waiting for fever before acting would waste the golden hours.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Stroke",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A suspected stroke patient reaches your facility 2 hours after onset. Which nursing action is correct before transfer to the regional hospital?",
        options: [
          "Give her a drink of water and her blood pressure tablet so she does not miss her dose",
          "Keep her nil by mouth, support her safely sitting up, record the onset time, and arrange urgent transfer",
          "Lay her completely flat to increase blood flow to the brain",
          "Wait for the facial droop to spread to both sides before referring",
        ],
        correctIndex: 1,
        explanation:
          "The swallow is unsafe until assessed (so nothing oral — the team will give medicines by another route if needed), sitting at about 30 degrees protects the airway, the onset time is the most valuable single fact for the receiving hospital, and speed preserves the treatment window.",
        whyOthers: {
          A: "Oral fluids risk aspiration pneumonia, and a swallowed tablet may go into a weak lung — nil by mouth until swallow screening.",
          C: "Flat positioning worsens airway protection and, in haemorrhagic stroke, pressure inside the skull; sitting up about 30 degrees is the safer default.",
          D: "Bilateral weakness is not a marker of stroke progression to wait for — unilateral signs are the classic picture, and waiting costs brain.",
        },
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Stroke",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is the exact time of stroke symptom onset recorded so carefully?",
        options: [
          "So the ward can plan the night shift roster around the admission",
          "Because clot-dissolving treatment is only possible within a few hours of onset, in selected patients with proven ischaemic stroke",
          "Because insurance forms require it for bed allocation",
          "Because the duration of symptoms predicts the patient's blood group needs",
        ],
        correctIndex: 1,
        explanation:
          "Thrombolysis is a time-boxed treatment — roughly within 4.5 hours of onset for eligible patients, after imaging excludes bleeding. A stroke patient without a recorded onset time may lose the chance of that treatment entirely.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Stroke",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "On day 3, a stroke patient with left-sided weakness and no swallow screen is being fed orally by relatives. What is the greatest immediate danger?",
        options: [
          "Weight gain from overfeeding",
          "Aspiration of food or fluid into the lungs, causing pneumonia",
          "Diarrhoea from unfamiliar hospital food",
          "Nosebleeds from the effort of swallowing",
        ],
        correctIndex: 1,
        explanation:
          "Up to half of acute stroke patients have an unsafe swallow, and silent aspiration — food entering the lungs without an obvious cough — is the classic killer. Nothing oral until a swallow screen says it is safe; then supervised, upright, small-mouthful feeding begins.",
        courseSlug: "medical-surgical-nursing-4",
      },
    ],
    flashcards: [
      {
        topic: "Stroke",
        front: "What does FAST stand for?",
        back: "Face drooping, Arm weakness, Speech difficulty, Time to act — note the exact onset time and get the patient to hospital immediately.",
      },
      {
        topic: "Stroke",
        front: "Roughly what share of strokes are ischaemic, and what causes them?",
        back: "About 85% — a clot blocking a brain artery; the remainder are haemorrhagic, a burst vessel, usually on the background of long-standing hypertension.",
      },
      {
        topic: "Stroke",
        front: "Why is a stroke patient kept nil by mouth on arrival?",
        back: "The swallow may be unsafe — silent aspiration causes pneumonia. Nothing oral until a swallow screen or assessment is done.",
      },
      {
        topic: "Stroke",
        front: "Name three nursing actions that protect the weak limb after stroke.",
        back: "Support the arm on a pillow (never let it hang), begin gentle passive movements with physiotherapy to prevent contractures, and position changes to protect the skin — the weak side is a pressure-ulcer hotspot.",
      },
      {
        topic: "Stroke",
        front: "What is the fastest reversible stroke mimic to exclude?",
        back: "Hypoglycaemia — check the blood glucose in any diabetic patient presenting with sudden one-sided weakness or confusion.",
      },
    ],
    sources: [
      {
        organization: "Centers for Disease Control and Prevention",
        title: "F.A.S.T. — Know the Signs and Symptoms of Stroke",
      },
      {
        organization: "World Health Organization",
        title: "Hypertension — Key Facts",
      },
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        year: "2017",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "15th edition",
        note: "Educational source — verify current edition against your course texts.",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-4",
    moduleTitle: "The Brain & Nerves",
    lessonTitle: "Seizures & Epilepsy",
    description:
      "The electrical storm — protecting the patient mid-seizure, and coaching a full, unstigmatised life between them.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Apply correct first aid for a seizure in progress, including the timing rule that defines status epilepticus.",
      "Explain the principles of living safely and adherently with epilepsy, from triggers and safety to clinic follow-up.",
      "Address the Ghanaian realities of epilepsy — stigma, spiritual explanations and the treatment gap — with respectful patient education.",
    ],
    tags: ["seizures", "epilepsy", "first aid", "status epilepticus"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A seizure is an electrical storm in the brain — a sudden, disorganised discharge that switches the body to autopilot for a minute or two. Up to one person in ten worldwide will experience a seizure at some time in their life, and epilepsy — a tendency to recurrent unprovoked seizures — touches more than 50 million people. Yet in much of Africa, WHO reports, most people with epilepsy receive no treatment at all, and the seizures are surrounded by more myths than almost any other condition.\n\nThis lesson is about two different moments: the sixty seconds of the seizure itself, where your actions protect a body that cannot protect itself, and the years between seizures, where your teaching decides whether a young person stays on treatment, stays in school, and stays whole.",
      },
      {
        type: "text",
        title: "During the storm: your sixty seconds",
        body: "**Time it.** Look at the clock the moment you see the rhythm begin — duration is the single most useful fact, and it decides whether this is a seizure that ends or an emergency that escalates. A seizure that lasts **5 minutes or more**, or repeated seizures without waking between them, is **status epilepticus** — a medical emergency needing urgent treatment, because the longer a seizure runs, the harder it is to stop.\n\n**Protect, do not restrain.** Move the furniture away from the patient rather than the patient away from the furniture; slide something soft — a folded cloth, a jacket, a pillow — under the head; loosen tight collars. Never hold the limbs down: fighting a convulsing body causes fractures and shoulder injuries, and helps nothing. **Nothing in the mouth — ever.** The old belief that a person having a seizure will 'swallow their tongue' is false: the tongue cannot be swallowed. The real dangers are the objects forced between the teeth — the household spoon, the tradition of pouring palm oil — which chip teeth, block the airway and are themselves aspiration risks.\n\n**After the shaking stops, the job continues.** The patient is in the post-ictal phase: confused, exhausted, sometimes incontinent, breathing heavily. Turn them into the **recovery position** so the tongue and any secretions drain forward, stay with them until fully awake and oriented, check for injuries (tongue bites, shoulder injuries, head trauma from the fall), clean and cover with dignity, allow sleep, and reorient gently. Then **document what you saw** — which limb or side moved first, how the eyes behaved, how long each phase lasted, whether there was a warning (an aura) beforehand. That description is often worth more to the doctor than any test.",
      },
      {
        type: "table",
        title: "Seizure first aid: do and don't",
        body: "| Do | Don't |\n|---|---|\n| Time the seizure from the start | Guess the duration afterwards |\n| Clear hard objects out of reach | Restrain or pin the limbs |\n| Cushion the head with something soft | Force a spoon, stick or liquid into the mouth |\n| Loosen tight clothing around the neck | Give water, tablets or palm oil during or immediately after |\n| Recovery position after the convulsion | Walk away before the patient is fully awake |\n| Stay, reassure, reorient, keep the crowd back | Gather a circle of spectators or shout over the patient |\n| Call for urgent help at 5 minutes or repeated seizures | Wait 'to see if it stops on its own' |",
      },
      {
        type: "clinical_pearl",
        body: "You cannot swallow your tongue — but you can choke on the things people put in your mouth during a seizure. The greatest first-aid danger in a Ghanaian seizure is rarely the seizure itself; it is the crowd's remedies. Calm authority in those sixty seconds is a clinical skill: 'Everybody step back, thank you. Madam, I am staying with him.'",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Kwabena, 24, a known epileptic, seizes in the ward corridor during visiting hours. A crowd gathers instantly; a visitor shouts for a spoon and another for palm oil; an auntie starts praying loudly over his chest. The convulsion has lasted about 90 seconds and is slowing.\n\nWhat do you do — during, and afterwards?\n\nAnswer: Send one person to move the crowd back while you stay — protect his head with your folded jacket, check the time, hold the spoon line with a calm voice. Once the shaking stops: recovery position, airway watched, stay until awake. Examine for injuries and document onset, pattern and duration. Then the essential conversation: he admits stopping his tablets two months ago because 'I had not fitted in a while.' The teaching point: epilepsy medicines work by keeping a steady level in the blood; they are taken daily whether or not a seizure has happened recently, and stopping them is precisely what invites the next storm. Book his clinic follow-up, and involve the auntie — her prayers and his tablets can work together; it is not either/or.",
      },
      {
        type: "text",
        title: "Between the storms: the life around epilepsy",
        body: "The person with epilepsy lives 99% of their life between seizures, and that is where most of your nursing happens.\n\n**Adherence is the treatment.** Anti-epileptic medicines take weeks to reach steady protective levels; missed doses quietly lower the guard. Teach the patient to anchor the tablet to something daily — brushing teeth, morning devotion — and to never stop because months have passed quietly. Arrange clinic review; if a woman of childbearing age, planning pregnancy with the team matters, because some epilepsy medicines can harm a fetus and changing them is a specialist job, never a self-made decision.\n\n**Know the triggers.** Sleep deprivation, missed meals, alcohol, fever, and emotional stress are the common ones — for a student writing exams, 'sleep is part of the prescription' is a sentence worth saying out loud.\n\n**Safety without a cage.** Sensible adjustments, not house arrest: avoid open fires and cooking alone with flames, do not swim alone or bathe in a deep river alone, avoid working at heights or driving until seizures are controlled (driving regulations require a seizure-free period — counsel honestly). At home, showers are safer than deep baths; a family member who knows the first-aid drill is worth more than any charm.\n\n**Fight the stigma — it is often worse than the disease.** Epilepsy is not contagious, not a spiritual attack, and not the patient's fault. It is an electrical problem with a medical answer. Correct the myths warmly and repeatedly — in the market, at the clinic, at the school gate: people with epilepsy who take their treatment study, trade, marry and raise families like everyone else. The WHO mhGAP guide exists precisely because this condition is treatable at first-contact level everywhere, including Ghana.",
      },
      {
        type: "memory_trick",
        body: "The four C's of seizure first aid: **C**ushion the head, **C**lear the space, **C**lock the time, **C**ompany until fully awake. And the escalation rule fits on one line: five minutes of shaking means the storm is not stopping itself — call for help.",
      },
      {
        type: "quiz_prompt",
        title: "Five minutes and counting",
        body: "A known epileptic on your ward has been convulsing for six minutes with no recovery. Name the emergency and your response.\n\nAnswer: Status epilepticus — a seizure of 5 minutes or more, or repeated seizures without waking between them. This is a medical emergency: call the team urgently, maintain the airway and safety measures while help comes, and prepare for the emergency treatment the team will order. A seizure that will not stop can kill; it never deserves a wait-and-see.",
      },
      {
        type: "summary",
        body: "- First aid: time it, cushion the head, clear the space, never restrain, nothing in the mouth, recovery position after, stay until fully awake.\n- Status epilepticus = 5 minutes or more, or repeated seizures without recovery — an emergency requiring urgent treatment.\n- Document the story: which side first, the eyes, the duration, any aura — your description guides diagnosis.\n- Between seizures: daily adherence (steady drug levels protect), trigger avoidance (sleep, meals, alcohol, fever), safety adjustments, clinic follow-up.\n- Epilepsy is not contagious and not spiritual — respectful education against stigma is part of the treatment; WHO mhGAP brings care to first-contact level.",
      },
    ],
    questions: [
      {
        topic: "Seizures & Epilepsy",
        type: "MCQ",
        difficulty: "Easy",
        stem: "You find a patient convulsing in bed. Which action is correct?",
        options: [
          "Hold his arms and legs firmly still to stop the shaking",
          "Slide a folded cloth under his head, check the time, and clear the area of hard objects",
          "Force a wrapped spoon between his teeth to protect the tongue",
          "Give him a cup of water immediately so he does not dehydrate",
        ],
        correctIndex: 1,
        explanation:
          "Protect and time — cushion the head, clear the space, and start counting minutes. Restraining injures, objects in the mouth chip teeth and block the airway, and anything by mouth during or right after a seizure risks aspiration.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Seizures & Epilepsy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "When does a seizure become status epilepticus, and what does that mean?",
        options: [
          "Any seizure in a known epileptic — it always means the medicines must be increased",
          "A seizure lasting 5 minutes or more, or repeated seizures without recovery between them — a medical emergency",
          "A seizure occurring during sleep — it requires admission for monitoring only",
          "Any seizure with tongue-biting — it requires antibiotics",
        ],
        correctIndex: 1,
        explanation:
          "The 5-minute rule is the practical definition taught worldwide: a seizure that runs on, or serial seizures without regaining consciousness, is status epilepticus and needs urgent medical treatment, because the longer it runs the harder it is to stop and the greater the risk to the brain.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Seizures & Epilepsy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A student with well-controlled epilepsy stopped his medicines three months ago because he had not had a seizure in a long time. What is the key teaching point?",
        options: [
          "It was reasonable, since the medicines clearly cured him",
          "He should restart the medicines only on the days he feels an aura",
          "The medicines work by maintaining steady blood levels and are taken daily for years; stopping them is what invites the next seizure — restart only with the clinic team",
          "Herbal preparations can safely replace the tablets between seizures",
        ],
        correctIndex: 2,
        explanation:
          "Anti-epileptic drugs protect by staying at a steady level, not by reacting to symptoms. Feeling well is the medicine working, not the disease leaving. Restarting after a gap should also be guided by the clinic team, and the conversation should explore why he stopped — cost, side-effects, stigma — so the real problem is solved.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Seizures & Epilepsy",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which observation during a witnessed seizure is most valuable to document?",
        options: [
          "The patient's blood pressure during the convulsion",
          "Which side or limb was involved first, the duration, eye behaviour and any warning before the event",
          "The exact number of onlookers in the room",
          "The dose of paracetamol given afterwards",
        ],
        correctIndex: 1,
        explanation:
          "The onset pattern — first limb, first movement, head or eye turn — localises the storm's origin and often changes the diagnosis. Duration decides escalation. An aura may give the patient a future warning. A nurse's clear eyewitness description is frequently the most diagnostic piece of information in epilepsy care.",
        courseSlug: "medical-surgical-nursing-4",
      },
    ],
    flashcards: [
      {
        topic: "Seizures & Epilepsy",
        front: "Define status epilepticus.",
        back: "A seizure lasting 5 minutes or more, or repeated seizures without recovery of consciousness between them — a medical emergency requiring urgent treatment.",
      },
      {
        topic: "Seizures & Epilepsy",
        front: "Can a person swallow their tongue during a seizure?",
        back: "No — it is anatomically impossible. The real dangers are forced objects (chipped teeth, blocked airway) and restraint injuries. Nothing in the mouth, ever.",
      },
      {
        topic: "Seizures & Epilepsy",
        front: "The four C's of seizure first aid?",
        back: "Cushion the head, Clear the space, Clock the time, Company until fully awake — then recovery position and documentation.",
      },
      {
        topic: "Seizures & Epilepsy",
        front: "Why must anti-epileptic medicines be taken daily even when no seizures have occurred for months?",
        back: "They protect by maintaining steady blood levels; the quiet months are the medicine working. Stopping treatment is the commonest cause of seizure recurrence.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Epilepsy: A Public Health Imperative",
        year: "2019",
      },
      {
        organization: "World Health Organization",
        title: "mhGAP Intervention Guide for Mental, Neurological and Substance Use Disorders — Version 2.0",
        year: "2016",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-4",
    moduleTitle: "The Brain & Nerves",
    lessonTitle: "Meningitis & Encephalitis",
    description:
      "The infected brain — the stiff neck that must never wait, especially in Ghana's meningitis-belt harmattan season.",
    difficulty: "Hard",
    durationMin: 12,
    objectives: [
      "Recognise meningitis and encephalitis early using the classic triad, the meningococcal rash and the infant's quieter signs.",
      "Explain Ghana's place in the African meningitis belt and why the dry season changes your suspicion threshold.",
      "Apply the nursing response: droplet precautions, supporting the lumbar puncture pathway, safe aftercare and outbreak awareness.",
    ],
    tags: ["meningitis", "encephalitis", "meningitis belt", "infection control"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Between December and June, when the harmattan dust dries the air of Ghana's north and the whole meningitis belt of Africa, hospital staff change the way they think about fever and headache. Bacterial meningitis in the belt moves like a bushfire: a young person healthy at breakfast can be critically ill by nightfall. The disease is an infection of the **meninges** — the membranes wrapping the brain and spinal cord — and its cousin **encephalitis** infects the brain tissue itself, announcing itself with confusion, seizures and drowsiness rather than a stiff neck.\n\nThis lesson teaches you to spot both quickly, to act on the finding that must never wait — a fever with headache and a neck that cannot bend — and to protect the people around the patient, including yourself.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The classic picture of **bacterial meningitis** in an older child or adult is fever, severe headache ('the worst of my life'), and **neck stiffness** — a neck so irritated that it cannot be bent toward the chest, with the patient often lying still, lights hurting their eyes (**photophobia**), vomiting, and in meningococcal disease a spreading rash of tiny dark spots. Two older clinical signs — Kernig's and Brudzinski's — belong to the medical examination; your bedside gift is to notice the patient who flinches from light, lies rigidly still and winces when the head is lifted with the shoulders.\n\nThe **meningococcal rash** deserves its own paragraph: it begins as small dark pinpricks that do **not** fade when pressed — test with a clear glass or your fingers. A non-blanching rash in a feverish patient means bacteria in the bloodstream: this is sepsis, and minutes count. The rash is a late sign; never wait for it to appear before acting.\n\n**Babies and young children tell a different story**: fever with poor feeding, vomiting, irritability that peaks into an unconsolable high-pitched cry, a bulging fontanelle in infants, unusual drowsiness — and often NO neck stiffness. An infant who is irritable and then suddenly becomes 'quiet and good' is not improving; quietness is deterioration.\n\nDiagnosis is confirmed by **lumbar puncture** — sampling the fluid around the spinal cord — and treatment is urgent antibiotics given by the medical team. Viral meningitis is usually milder; encephalitis brings the altered brain itself — confusion, behaviour change, seizures, drowsiness — and needs urgent hospital care too.",
      },
      {
        type: "table",
        title: "Bacterial versus viral meningitis, versus encephalitis",
        body: "| Feature | Bacterial meningitis | Viral meningitis | Encephalitis |\n|---|---|---|---|\n| Main target | The meninges | The meninges | The brain tissue itself |\n| Onset | Hours, often dramatic | Days, usually milder | Days, often subtle |\n| Hallmarks | Fever, severe headache, neck stiffness, photophobia, possible non-blanching rash | Fever, headache, mild neck stiffness, usually self-limiting | Fever with confusion, behaviour change, seizures, drowsiness |\n| Treatment | Urgent antibiotics — minutes matter | Supportive care | Urgent hospital care, specific antivirals for some causes |\n| Prevention | Vaccines (pneumococcus, Hib, meningococcus), droplet precautions | Hygiene, handwashing | Vector control, some vaccines |",
      },
      {
        type: "callout",
        title: "The belt-season rule",
        body: "In Ghana's meningitis-belt regions, from December to June, fever plus headache plus neck stiffness equals meningitis until the lumbar puncture proves otherwise. Escalate immediately. In the belt, waiting for a rash, a full set of blood tests, or the morning round is how outbreaks bury young people. The rash, when it comes, is already late.",
      },
      {
        type: "text",
        title: "The nursing response — and the outbreak lens",
        body: "For suspected bacterial meningitis, especially meningococcal, **droplet precautions** start immediately: mask on for anyone within about a metre of the patient (surgical mask on the staff; the patient masked when feasible and tolerated), a single room or cohorted area if available, and strict hand hygiene. Precautions continue until **24 hours of effective antibiotic therapy** have passed. Standard precautions protect you against hepatitis B on every patient — this is different: droplets travel short distances through coughs and sneezes, so distance and masks are the tools.\n\nSupport the diagnostic path: the team will perform the **lumbar puncture** — position and assist per protocol, send the samples with correct labelling, and afterwards care for the patient: flat bed rest as your facility directs, encouragement of fluids, analgesia per prescription, and observation for post-LP headache (positional — worse sitting, eased lying). Monitor neurological observations closely — GCS trends can change over hours in this disease.\n\nFinally, widen your lens to the **outbreak**. Meningitis in the belt clusters in schools, dormitories, camps and crowded compounds; report suspected cases through the channels your facility and the Ghana Health Service define, and expect the team to arrange preventive treatment for close household contacts and, where campaigns run, vaccination. One recognised case reported promptly can protect a whole dormitory.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Fuseini, 19, a boarding student in the northern harmattan, is carried in by two roommates: three days of 'malaria treatment' at home, and since last night fever, crushing headache, and a neck that cannot bend toward his chest. He winces violently when light from the open door crosses his face. His roommates are deciding whether to take him to a herbalist after evening prayers.\n\nWhat do you suspect, and what happens in the next thirty minutes?\n\nAnswer: In belt season this is meningitis until the lumbar puncture says otherwise — fever, severe headache, neck stiffness and photophobia in a young student. Within the next half hour: mask up and move him to an appropriate area, full vital signs and neurological observations, alert the medical team immediately, prepare for the lumbar puncture pathway and the first antibiotic dose (the team's prescription), check every centimetre of skin for a non-blanching rash, and start the droplet-precaution conversation with the roommates — who are close contacts and will need the team's advice on preventive treatment. The herbalist can wait; Fuseini's brain cannot. Report upward through the outbreak channels — his dormitory has three hundred more students who are easier to protect today than to treat tomorrow.",
      },
      {
        type: "clinical_pearl",
        body: "The tumbler test: press a clear glass (or your fingertip) over a feverish rash. If the spots stay dark and do not blanch, treat it as meningococcal sepsis and escalate immediately. And in infants, read the fontanelle and the cry, not the neck: bulging fontanelle plus a high-pitched unconsolable cry plus poor feeding in a feverish baby is meningitis wearing its infant disguise.",
      },
      {
        type: "memory_trick",
        body: "Fever + Headache + a Neck that cannot Kiss the chest = meningitis tonight, not tomorrow. Add Light hurting the eyes and Vomiting, and the picture is complete. For infants, swap the neck for the F-C-R: **F**ontanelle bulging, **C**ry high-pitched, **R**efusing feeds.",
      },
      {
        type: "quiz_prompt",
        title: "The infant version",
        body: "A 7-month-old has had fever for a day, is feeding poorly, cries with a high pitch that cannot be consoled, and the fontanelle is full and bulging. What must you suspect, and what is absent here that adults usually show?\n\nAnswer: Meningitis — infants present with fever, poor feeding, irritability or a high-pitched cry, and a bulging fontanelle; classic neck stiffness is usually ABSENT at this age. This baby needs urgent referral and the team's diagnostic pathway now, whatever the hour.",
      },
      {
        type: "summary",
        body: "- Meningitis = infected meninges; the classic triad is fever, severe headache and neck stiffness, with photophobia and vomiting; encephalitis = infected brain tissue, showing confusion, seizures and drowsiness.\n- Meningococcal rash: tiny dark spots that do NOT blanch under pressure — sepsis, minutes count; the rash is a late sign.\n- Ghana lies in the African meningitis belt: December–June lowers your threshold — fever with headache and stiff neck is meningitis until proven otherwise.\n- Infants: no neck stiffness — look for bulging fontanelle, high-pitched cry, poor feeding, irritability or abnormal quietness.\n- Droplet precautions for suspected meningococcal disease until 24 hours of effective antibiotics; lumbar puncture confirms; report suspected cases — outbreak protection is nursing's public-health face.",
      },
    ],
    questions: [
      {
        topic: "Meningitis & Encephalitis",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A feverish patient has a crop of small dark spots on the trunk. You press a clear glass over them and the spots do not fade. What does this mean?",
        options: [
          "Simple heat rash from the harmattan — reassure and recheck tomorrow",
          "Measles that will fade without treatment",
          "A non-blanching petechial rash — treat as meningococcal sepsis and escalate immediately",
          "A reaction to the antimalarial given at home — observe for 6 hours",
        ],
        correctIndex: 2,
        explanation:
          "A rash that does not blanch under pressure means blood is leaking from small vessels into the skin — in a feverish patient this is the classic sign of meningococcaemia. This is sepsis in progress: urgent escalation, antibiotics within minutes of the team's assessment, and full precautions.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Meningitis & Encephalitis",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "For how long must droplet precautions continue for a patient with suspected meningococcal meningitis once treatment has begun?",
        options: [
          "For the entire hospital stay, whatever the treatment",
          "For 24 hours of effective antibiotic therapy",
          "Until the rash has completely faded",
          "For 48 hours after the fever settles",
        ],
        correctIndex: 1,
        explanation:
          "After 24 hours of effective antibiotics, the patient is no longer considered infectious to close contacts — this is the widely taught duration for droplet precautions in meningococcal disease. Continuing longer adds isolation without benefit; stopping earlier exposes contacts.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Meningitis & Encephalitis",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A 7-month-old infant has fever, poor feeding, a bulging fontanelle and a high-pitched unconsolable cry. Why is this presentation of meningitis easy to miss?",
        options: [
          "Because the fontanelle always bulges in healthy infants when crying",
          "Because infants with meningitis typically show neck stiffness that is hard to detect on a small neck",
          "Because infants often show poor feeding, irritability and a bulging fontanelle WITHOUT the classic neck stiffness, so the signs read as ordinary illness until the child deteriorates",
          "Because fever in infants rules out meningitis, which requires a normal temperature",
        ],
        correctIndex: 2,
        explanation:
          "Infants cannot mount the meningeal signs of older children and adults — the neck stiffness and photophobia are typically absent. Fever, poor feeding, irritability or a high-pitched cry, and a full fontanelle are the quiet signals; drowsiness and 'becoming quiet' mean deterioration, not improvement.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Meningitis & Encephalitis",
        type: "MCQ",
        difficulty: "Hard",
        stem: "A student from a boarding school in northern Ghana presents in February with fever, severe headache and neck stiffness. Which response best reflects belt-season thinking?",
        options: [
          "Complete a full malaria work-up first, since malaria is the commonest cause of fever in Ghana",
          "Treat as suspected bacterial meningitis: immediate escalation, droplet precautions, and the team's urgent antibiotic and lumbar puncture pathway — and report through outbreak channels",
          "Observe overnight on antipyretics and reassess the neck in the morning",
          "Discharge with antimalarials and advice to drink more water",
        ],
        correctIndex: 1,
        explanation:
          "In the meningitis belt during the dry season (December–June), fever with headache and neck stiffness is meningitis until excluded — hours change outcomes, and one case in a dormitory is a public-health event. Escalate, protect contacts, treat urgently, and report: the laboratory work-up and malaria tests happen in parallel, not instead.",
        whyOthers: {
          A: "Malaria is common, but this combination of signs in this season is meningitis until proven otherwise — testing can run alongside, but the response cannot wait for it.",
          C: "Meningitis declares itself over hours, not mornings; overnight observation without antibiotics is how young people die of it.",
          D: "Sending home a suspected meningococcal case exposes the whole school and removes the patient from the treatment that is running out of time.",
        },
        courseSlug: "medical-surgical-nursing-4",
      },
    ],
    flashcards: [
      {
        topic: "Meningitis & Encephalitis",
        front: "The classic triad of bacterial meningitis in older children and adults?",
        back: "Fever, severe headache and neck stiffness — with photophobia, vomiting, and possibly a non-blanching rash in meningococcal disease.",
      },
      {
        topic: "Meningitis & Encephalitis",
        front: "What is the tumbler (glass) test and what does a positive result mean?",
        back: "Press a clear glass over the rash; spots that do NOT blanch mean petechiae from bloodstream invasion — treat as meningococcal sepsis and escalate immediately.",
      },
      {
        topic: "Meningitis & Encephalitis",
        front: "Where and when is Ghana's meningitis-belt risk highest?",
        back: "The northern belt regions, during the dry harmattan season from roughly December to June — when the threshold for suspecting meningitis drops sharply.",
      },
      {
        topic: "Meningitis & Encephalitis",
        front: "How do infants with meningitis present?",
        back: "Poor feeding, fever, vomiting, irritability or a high-pitched cry, bulging fontanelle, and abnormal drowsiness — neck stiffness is usually absent.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Defeating Meningitis by 2030: A Global Road Map",
        year: "2021",
      },
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        year: "2017",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "15th edition",
        note: "Educational source — verify current edition against your course texts.",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-4",
    moduleTitle: "The Brain & Nerves",
    lessonTitle: "Head Injury & Raised Intracranial Pressure",
    description:
      "The skull is a closed box that cannot stretch — monitoring the quiet slide after the blow, from okada crashes to the lucid interval.",
    difficulty: "Clinical Reasoning",
    durationMin: 12,
    objectives: [
      "Distinguish primary from secondary brain injury and explain why nursing care targets the second one.",
      "Recognise deterioration after head injury early — falling GCS, lateralising signs and the late Cushing's triad — and escalate without delay.",
      "Apply the head-injured patient's care bundle: head-up positioning, oxygenation, seizure precautions, CSF leak rules and a family watch-list for discharge.",
    ],
    tags: ["head injury", "raised intracranial pressure", "road traffic injury", "cushings triad"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Ghana's roads give our hospitals a steady, tragic supply of head injuries: the okada rider without a helmet, the trotro passenger thrown at speed, the child who falls from the mango tree, the elder who slips on the wet bathhouse floor. The initial blow — the **primary injury** — is finished before the patient ever reaches you. Almost everything that happens afterwards is in the hands of the people caring for him.\n\nThat is this lesson's core idea: **secondary brain injury** — swelling, bleeding, hypoxia, hypotension, fever, seizures — develops over hours and is largely preventable. The skull is a closed box of fixed volume: brain, blood and fluid. When something swells or bleeds inside a box that cannot stretch, the pressure inside rises (**raised intracranial pressure**, ICP), and the brain begins to be squeezed. Your neurological observations and your positioning are the box's pressure monitor and relief valve.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Head injuries come in shapes worth knowing. A **concussion** briefly stuns the brain: short loss of consciousness, headache, maybe vomiting, then recovery — observation and a watch-list are the treatment. An **extradural haematoma** bleeds from an artery outside the brain's covering, classically after a blow to the temple: the patient may be briefly knocked out, then wake and appear well — the **lucid interval** — then slide into drowsiness as the bleed grows. This pattern is the trap that kills. A **subdural haematoma** tears veins and seeps over days to weeks — think of the elderly patient or the person who drinks heavily, whose slow forgetfulness began after a fall weeks ago.\n\nWhatever the shape, the signs of rising pressure follow the same script: a **falling GCS** (the earliest and most important), new **vomiting**, headache that deepens, and **lateralising signs** — one pupil blowing wide, one side weakening — meaning the brain is being pushed sideways. The famous late warning is **Cushing's triad**: blood pressure climbing (with a widening pulse pressure), pulse slowing, and breathing turning irregular. By the time you see it, the brain is screaming — call for help at the first signs, never wait for the trio to complete.\n\nYour care bundle: head of bed **up at about 30 degrees** with the neck straight (a twisted neck or a tight collar kinks the veins draining the head, raising the pressure you are fighting), oxygen as prescribed, nil by mouth until fully alert with a safe swallow, seizure precautions, neurological observations at the frequency the team sets — every 15 to 30 minutes in the risky hours — and fever treated promptly, because a fevered brain swells. Guard the whole patient: hypoxia and low blood pressure double the damage; a head injury never travels alone.",
      },
      {
        type: "table",
        title: "The head-injury watch-list — teach it, write it, send it home",
        body: "| Sign after head injury | What it may mean | Action |\n|---|---|---|\n| Repeated vomiting | Rising intracranial pressure | Return immediately |\n| Worsening headache, drowsy or hard to wake | Bleeding or swelling | Return immediately |\n| One pupil larger than the other | Pressure pushing the brain sideways | Return immediately |\n| New weakness, slurred speech or confusion | Same — lateralising sign | Return immediately |\n| A seizure | Brain irritation | Return immediately |\n| Clear fluid or blood from nose or ear with dark rings around the eyes | Possible skull-base fracture with CSF leak | Return immediately; do not pack |\n\nAny one of these in the first 48 hours means back to hospital, tonight. The family that knows the list is the night shift that saves the patient.",
      },
      {
        type: "callout",
        title: "The lucid interval — the trap in the quiet hour",
        body: "The patient who 'looks fine' one hour after a bang on the head is not discharged by looking fine. The classic extradural bleed has a quiet hour exactly like this — talking, joking, apologising for the trouble — before the drowsiness begins. Observation for at least several hours after any significant head injury, and a written watch-list for whoever takes the patient home, are not bureaucracy. They are the difference between a drill in the skull at midnight and a funeral.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Yaw, 28, an okada rider with no helmet, hits a pothole at speed and is brought to the district hospital walking and joking, with a small cut over his left temple. GCS 15. The team sutures the wound and plans observation. Two hours later you find him dozing; he opens his eyes to voice but not spontaneously, his answers are confused, he has vomited once, and he complains that the headache is 'now really bad.' His last recorded GCS was 15.\n\nWhat is happening, and what do you do in the next ten minutes?\n\nAnswer: A falling GCS with vomiting and deepening headache two hours after a temporal blow is a bleeding brain until imaging says otherwise — the lucid interval is ending. Now: full neurological observations including pupils (left pupil size is now critical), head of bed up about 30 degrees with the neck straight, oxygen as prescribed, nil by mouth, ensure IV access, and call the medical team immediately with the trend in your mouth: 'GCS 15 at 14:00, now 12 and falling.' Prepare for urgent referral to a CT-capable centre — the team will decide transfer and any treatment en route. Document the times. Yaw's brain is spending minutes; your speed is the currency.",
      },
      {
        type: "clinical_pearl",
        body: "Clear fluid dripping from the nose or ear after a head injury may be cerebrospinal fluid from a skull-base fracture. Do NOT pack the nose or ear, and stop the patient from blowing the nose — both push infection toward the brain. Document the leak, keep the draining side positioned downward, and report it. Dark 'spectacle' bruises around both eyes or bruising behind the ear complete the same skull-base picture.",
      },
      {
        type: "memory_trick",
        body: "Cushing's triad, the brain's last broadcast: **Pressure up, Pulse down, Pattern of breathing wrong.** And for the box: the skull is a box that cannot stretch — brain, blood, fluid; when one grows, the others must yield. Head up, neck straight, oxygen on, obs tight: four ways to buy the box time.",
      },
      {
        type: "quiz_prompt",
        title: "Why head-up 30 degrees?",
        body: "Explain in one breath why the head-injured patient lies with the head of the bed raised about 30 degrees and the neck midline.\n\nAnswer: An upright, straight neck lets the veins of the brain drain freely by gravity; draining blood out of the skull lowers the pressure inside the box. A twisted neck, a tight collar, or lying flat kinks the drainage and lets pressure climb. One pillow-fold and a straight neck is real medicine.",
      },
      {
        type: "summary",
        body: "- Primary injury is the impact — done before you arrive; secondary injury (swelling, bleeding, hypoxia, hypotension, fever, seizures) is largely preventable and is the nurse's battlefield.\n- The skull is a fixed box: rising pressure shows first as a falling GCS, then vomiting, lateralising signs (one pupil, one weak side); Cushing's triad is late and desperate.\n- Extradural bleed: the lucid interval that ends in collapse; subdural: the slow story over days–weeks; concussion: observe and discharge with a written watch-list.\n- Care bundle: head up about 30° with neck midline, oxygen per prescription, nil by mouth until alert, seizure precautions, frequent neuro obs, treat fever, guard oxygenation and blood pressure.\n- CSF leak from nose/ear: never pack, no nose-blowing, draining side down, report immediately.",
      },
    ],
    questions: [
      {
        topic: "Head Injury & Raised ICP",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient with rising intracranial pressure develops a blood pressure of 190/100 with a pulse of 48. What is this pattern called, and what does it mean?",
        options: [
          "Cushing's triad component pattern — a late, pre-arrest sign of critically raised intracranial pressure; call for urgent help",
          "A normal pain response to headache; give analgesia and recheck in an hour",
          "Septic shock from a wound infection; start cooling measures",
          "A medication side-effect from the tetanus injection; observe",
        ],
        correctIndex: 0,
        explanation:
          "Cushing's triad — hypertension with widening pulse pressure, bradycardia and irregular respirations — appears late, when the brain is being forced downward through the skull's exit. It is the body's last protest. Escalate immediately; do not wait for the full trio in a patient already deteriorating.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Head Injury & Raised ICP",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A young man briefly lost consciousness after a fall, then woke and was 'perfectly fine' for an hour, and has now become drowsy with a headache. Which bleeding pattern fits this story best?",
        options: [
          "A subdural haematoma from torn veins, growing over weeks",
          "An extradural haematoma from a torn artery, classically after a lucid interval",
          "A simple concussion with expected deepening sleep",
          "A spinal cord injury at the neck level",
        ],
        correctIndex: 1,
        explanation:
          "Brief unconsciousness, a clear lucid interval, then sliding drowsiness is the textbook story of an extradural haematoma — an arterial bleed between the skull and the brain's covering. It is surgical until scanned otherwise; the window between talking and coma is measured in minutes to hours.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Head Injury & Raised ICP",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Six hours after a motorbike crash, a patient has a steady trickle of clear fluid from the right ear. What is the correct nursing action?",
        options: [
          "Pack the ear firmly with gauze to stop the leak and prevent infection entering",
          "Allow the patient to blow the nose gently to clear the pressure",
          "Do not pack and do not allow nose-blowing; position the draining side downward, document and report — suspected CSF leak from a skull-base fracture",
          "Instil antibiotic drops into the ear and recheck in the morning",
        ],
        correctIndex: 2,
        explanation:
          "Clear fluid from the nose or ear after head trauma suggests cerebrospinal fluid leaking through a skull-base fracture. Packing and nose-blowing can push germs up toward the brain; drops add infection risk. Let the leak drain on the downward side, keep the site clean, and report urgently.",
        whyOthers: {
          A: "Packing a CSF leak blocks the exit and invites infection tracking toward the brain — the opposite of what is needed.",
          B: "Nose-blowing raises pressure in the head and can force contaminated air and fluid through the fracture — explicitly forbidden.",
          D: "Drops into a possibly fractured ear canal are infection risk, and this finding needs reporting now, not in the morning.",
        },
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Head Injury & Raised ICP",
        type: "MCQ",
        difficulty: "Clinical Reasoning",
        stem: "Why does nursing care obsess over oxygen levels, blood pressure, temperature and head positioning after head injury — none of which touch the broken skull itself?",
        options: [
          "Because these measures comfort the family during a frightening admission",
          "Because primary brain injury is treated by maintaining oxygenation and perfusion",
          "Because they all prevent or limit SECONDARY brain injury — the swelling, hypoxia, hypotension and fever that damage the brain after the impact is over",
          "Because the chart requires full vital signs every four hours by policy",
        ],
        correctIndex: 2,
        explanation:
          "The impact is finished on arrival; what follows is the preventable half. A brain in a swollen, pressurised box is exquisitely vulnerable to low oxygen and low blood pressure — each insult multiplies the damage — while fever adds swelling and the head-up, straight-neck position drains the box. Nursing observations and positioning are literally the treatment of secondary injury.",
        courseSlug: "medical-surgical-nursing-4",
      },
    ],
    flashcards: [
      {
        topic: "Head Injury & Raised ICP",
        front: "Primary versus secondary brain injury?",
        back: "Primary = the mechanical damage of the impact itself, done before arrival. Secondary = the preventable aftermath: swelling, bleeding, hypoxia, hypotension, fever, seizures — the target of all nursing care.",
      },
      {
        topic: "Head Injury & Raised ICP",
        front: "Name Cushing's triad and its meaning.",
        back: "Hypertension with widening pulse pressure, bradycardia, irregular respirations — a late, critical sign of raised intracranial pressure; call for urgent help.",
      },
      {
        topic: "Head Injury & Raised ICP",
        front: "What is the lucid interval and which bleed causes it?",
        back: "A period of apparent wellness between brief unconsciousness and later collapse — the classic signature of an extradural (arterial) haematoma. Never discharge a head-injured patient during it.",
      },
      {
        topic: "Head Injury & Raised ICP",
        front: "The CSF leak rule — nose or ear after head injury?",
        back: "Do not pack it, do not allow nose-blowing, position the draining side down, document and report — a possible skull-base fracture with infection risk.",
      },
      {
        topic: "Head Injury & Raised ICP",
        front: "Four nursing actions that lower pressure inside the skull's box?",
        back: "Head of bed up about 30 degrees, neck kept midline (free venous drainage), oxygenation and blood pressure protected, fever treated — plus frequent neurological observations to catch the trend.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Global Status Report on Road Safety",
        year: "2023",
      },
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        year: "2017",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "15th edition",
        note: "Educational source — verify current edition against your course texts.",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-4",
    moduleTitle: "Sugar, Thyroid & Hormones",
    lessonTitle: "Diabetes Mellitus: The Modern Epidemic",
    description:
      "Type 1, type 2 and the rising Ghanaian tide — how the body loses control of sugar, and the silent damage done while nobody feels a thing.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Explain the insulin problem in type 1 and type 2 diabetes in words a patient can understand.",
      "Recognise the classical symptoms, the silent presentation of type 2, and the WHO diagnostic thresholds.",
      "Describe the long-term complications of diabetes and connect them to the daily screening and care that delay them.",
    ],
    tags: ["diabetes", "insulin", "screening", "complications"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Diabetes is one of the fastest-rising chronic diseases in Ghana, riding the wave of a changing life: fried rice where there was walking, sugary drinks where there was water, chairs and steering wheels where there was work in the sun. WHO counts more than 400 million adults living with diabetes worldwide, and Africa's numbers are climbing faster than any other region's — while our wards already see the endings: strokes, kidney failure, blind eyes, amputated feet.\n\nThis lesson builds the foundation: what insulin is, what its failure looks like in type 1 and type 2, how the diagnosis is made with WHO numbers, and the years of silent damage that make diabetes a disease of today's prevention, not just today's glucose.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Every cell needs glucose for fuel, but glucose cannot pass through the cell wall on its own. **Insulin is the key** that unlocks the door. In **type 1 diabetes**, the pancreas is destroyed by its own immune system (usually early in life) — the factory that makes the keys burns down. Without injected insulin, the body cannot use sugar at all: glucose rises in the blood while cells starve, fat is burned for fuel, and acid ketones accumulate — the emergency of DKA you will meet in the next lesson.\n\nIn **type 2 diabetes** — more than 9 in 10 cases — the keys exist but the locks go stiff: **insulin resistance**. The pancreas works overtime for years to force the doors open, and gradually tires. Weight, inactivity, family history and age stiffen the locks further. This is the diabetes of the Ghanaian epidemic: it grows slowly, quietly, often for years before the first symptom — and WHO estimates roughly half of adults with diabetes worldwide do not yet know they have it.\n\nWhen glucose climbs high enough, the kidneys spill it into the urine, and sugar draws water with it like salt draws soup. Hence the classic symptoms: **polyuria** (passing large amounts of urine, including at night), **polydipsia** (constant thirst), **weight loss** (the body burns fat and muscle because it cannot reach glucose), plus fatigue, blurred vision, repeated boils and skin infections, itching in the genitals (sugar feeds yeast), and wounds that heal slowly. But remember: a person with type 2 may have NONE of these — the first 'symptom' can be a stroke. That is why we screen people at risk: anyone overweight, over about 40, with a family history, with hypertension, or with diabetes in a past pregnancy.",
      },
      {
        type: "table",
        title: "Type 1 versus type 2 diabetes",
        body: "| Feature | Type 1 | Type 2 |\n|---|---|---|\n| The problem | No insulin — the pancreas stops making it (autoimmune) | Insulin resistance — the body responds poorly, then the pancreas tires |\n| Typical onset | Children, young adults — abrupt, often dramatic | Adults (and increasingly the young) — slow, often silent for years |\n| Typical body | Often thin | Often overweight or with central (belly) fat |\n| Presentation | The 3 Ps plus weight loss; DKA may be the first sign | Often found on screening; may present with a complication |\n| Treatment core | Insulin from day one — no insulin, no life | Lifestyle first, then tablets, insulin later when needed |\n| Watch out for | DKA if insulin missed | Long silent years — eyes, kidneys, nerves, feet, heart |",
      },
      {
        type: "text",
        title: "Diagnosis and the three-month memory",
        body: "WHO's diagnostic numbers: **fasting plasma glucose 7.0 mmol/L or above**, **2-hour value of 11.1 mmol/L or above** in an oral glucose tolerance test, **HbA1c of 6.5% (48 mmol/mol) or above**, or a **random glucose of 11.1 mmol/L or above with classic symptoms**. Without clear symptoms, the team confirms with a second test.\n\nUnderstand what you are measuring. The fingerstick glucose you take on the ward is a photograph — the sugar of this minute. **HbA1c** is the album: glucose slowly sticks to haemoglobin inside red cells, which live about three months, so the HbA1c reports the average sugar of the whole season. That is why the clinic follows it — a patient may smile at you with a normal fasting sugar on the morning of the clinic and still have had months of high nights. Both numbers matter; neither tells the whole story alone.",
      },
      {
        type: "text",
        title: "The silent years: what high sugar damages",
        body: "Picture sugar slowly caramelising the pipes. In the **large vessels** it speeds hardening and narrowing: the heart (heart attack), the brain (stroke), the legs (poor circulation that turns small foot wounds into disasters). In the **small vessels** it does quieter work: in the **eyes** (retinopathy — a leading cause of blindness; the fundus must be checked at least yearly), in the **kidneys** (nephropathy — protein appears in the urine years before the creatinine rises; urine testing finds it early), and along the **nerves** (neuropathy — burning feet that later go numb, silent stomachs and bladders, and hearts that no longer feel angina properly).\n\nThen the foot, where it all converges: a nerve that cannot feel a stone in the shoe, an artery that cannot feed the skin, and a wound that cannot heal — the diabetic foot ulcer, one of the commonest reasons people with diabetes occupy our surgical wards, and the beginning of most amputations. The complication clock starts years before diagnosis — which is why screening, and the daily care you will learn in this module, matter as much as any tablet.",
      },
      {
        type: "callout",
        title: "Diabetes is silent until it shouts",
        body: "The first shout is rarely 'high sugar' — it is a stroke, a heart attack, a blind eye, a black toe, or a wound that will not close. Half of the damage is done before the diagnosis is written. This is why the nurse who checks a random glucose at a health screening durbar, or persuades one overweight uncle to test, is practising real secondary prevention.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Auntie Efua, 52, was found to have diabetes six months ago at a church screening: fasting glucose 12 mmol/L. She was given tablets and a diet sheet. Today her daughter brings her for 'something else' — and you learn she stopped attending clinic after the second visit because 'I feel completely fine,' and takes her tablets 'only when the sugar is worrying me,' which is never.\n\nHow do you counsel her?\n\nAnswer: Start where she is — she genuinely feels fine, and that is exactly the trap. Explain the silent years in her own language: the sugar is quietly stiffening pipes in her eyes, kidneys, nerves and feet, the way termites eat the roof beam quietly — the house only shakes when the damage is deep. The tablet is daily, like sweeping the compound; the clinic visits are the inspections that catch trouble early when it is still cheap to fix. Involve the daughter as an ally, check her feet and arrange an eye review, set one small food goal (the sugary drinks first), and book the next visit before she leaves. One honest conversation at a time — this is chronic disease nursing.",
      },
      {
        type: "memory_trick",
        body: "The **3 Ps** spill sugar: **P**eeing often (including at night), **P**arched always, **P**ounds dropping without trying. And remember the clock: **'HbA1c is the three-month memory'** — the blood glucose photograph fades by evening, but the album remembers every meal of the season.",
      },
      {
        type: "quiz_prompt",
        title: "Who to screen?",
        body: "A 45-year-old market woman, overweight, whose mother has diabetes and whose blood pressure runs high, feels completely well. Should she be tested?\n\nAnswer: Yes — she carries several type 2 risk factors (age, weight, family history, hypertension), and type 2 can be entirely silent for years. A fasting glucose or HbA1c costs little; a late diagnosis costs a stroke. Screening is for the well; that is the whole point.",
      },
      {
        type: "summary",
        body: "- Insulin is the key that lets glucose into cells: type 1 = keys no longer made (autoimmune pancreas failure, young, abrupt); type 2 = stiff locks and a tiring pancreas (over 90% of the epidemic).\n- Symptoms: polyuria, polydipsia, unexplained weight loss, fatigue, blurred vision, recurrent infections, slow healing — but type 2 is often silent; screen those at risk.\n- WHO numbers: fasting ≥ 7.0 mmol/L; 2-h OGTT ≥ 11.1; HbA1c ≥ 6.5% (48 mmol/mol); random ≥ 11.1 with symptoms; confirm if asymptomatic.\n- HbA1c = the three-month average (glucose stuck on haemoglobin); fingerstick = this minute's photo.\n- Complications: large vessels (heart, brain, legs) and small vessels (eyes, kidneys, nerves) — plus the diabetic foot, where neuropathy, poor blood flow and infection converge.\n- Screening and daily care are treatment: the complication clock starts before symptoms.",
      },
    ],
    questions: [
      {
        topic: "Diabetes Mellitus",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which description best captures the core problem in type 2 diabetes?",
        options: [
          "The pancreas is destroyed and no insulin is produced at all",
          "The body responds poorly to insulin (resistance) and the pancreas gradually tires from overworking",
          "The kidneys excrete insulin too quickly in the urine",
          "The stomach absorbs glucose too fast for the pancreas to respond",
        ],
        correctIndex: 1,
        explanation:
          "Type 2 is insulin resistance — stiff locks — with a pancreas that compensates for years before declining. Type 1 is the destroyed factory. This distinction drives everything: type 1 cannot live without injected insulin; type 2 begins with lifestyle and tablets.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Diabetes Mellitus",
        type: "MCQ",
        difficulty: "Easy",
        stem: "The classic symptom triad of uncontrolled diabetes is:",
        options: [
          "Polyuria, polydipsia and unexplained weight loss",
          "Constipation, hair loss and night sweats",
          "Cough, chest pain and ankle swelling",
          "Rash, joint pain and mouth ulcers",
        ],
        correctIndex: 0,
        explanation:
          "When glucose exceeds the kidneys' threshold, it spills into the urine and drags water with it — polyuria; the lost water drives thirst — polydipsia; and cells unable to use glucose burn fat and muscle — weight loss. The 3 Ps are the body's open announcement of high sugar.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Diabetes Mellitus",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A clinic patient's HbA1c result is 9.2% (about 77 mmol/mol). What does this number actually represent?",
        options: [
          "The blood glucose at this exact moment",
          "The average blood glucose exposure over roughly the past three months",
          "The kidney's ability to filter glucose",
          "The amount of insulin the pancreas is currently producing",
        ],
        correctIndex: 1,
        explanation:
          "Glucose attaches slowly to haemoglobin inside red blood cells, which circulate for about three months — so HbA1c reports the season's average, not the moment. A patient can walk into clinic with a normal fasting glucose and a high HbA1c; the album does not lie about the season.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Diabetes Mellitus",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why does the nurse place so much emphasis on screening overweight adults over 40 for diabetes, even when they feel completely well?",
        options: [
          "Because WHO requires it for facility certification",
          "Because type 2 diabetes can remain silent for years while it damages the eyes, kidneys, nerves and vessels — early diagnosis changes the whole story",
          "Because symptomatic patients refuse treatment more often",
          "Because the diabetes test is cheaper than any other laboratory test",
        ],
        correctIndex: 1,
        explanation:
          "The defining danger of type 2 is silence: complications develop for years before the first symptom, and the first symptom is often a stroke or an ulcer. WHO estimates roughly half of adults with diabetes are undiagnosed — screening the at-risk well is how the story is changed early, while prevention is still cheap.",
        courseSlug: "medical-surgical-nursing-4",
      },
    ],
    flashcards: [
      {
        topic: "Diabetes Mellitus",
        front: "Type 1 versus type 2 in one line each?",
        back: "Type 1: the pancreas stops making insulin (autoimmune, young, abrupt — insulin from day one). Type 2: the body resists insulin and the pancreas tires (over 90% of cases, silent for years).",
      },
      {
        topic: "Diabetes Mellitus",
        front: "WHO diagnostic thresholds for diabetes?",
        back: "Fasting ≥ 7.0 mmol/L; 2-hour OGTT ≥ 11.1 mmol/L; HbA1c ≥ 6.5% (48 mmol/mol); or random ≥ 11.1 mmol/L with classic symptoms.",
      },
      {
        topic: "Diabetes Mellitus",
        front: "What does HbA1c measure and why is it useful?",
        back: "Glucose bound to haemoglobin over the red cell's ~3-month life — the season's average sugar; it reveals control that single fingersticks can hide.",
      },
      {
        topic: "Diabetes Mellitus",
        front: "The classic 3 Ps of hyperglycaemia?",
        back: "Polyuria (sugar drags water out), polydipsia (the lost water is replaced), and pounds dropping (starving cells burn fat and muscle).",
      },
      {
        topic: "Diabetes Mellitus",
        front: "Name the small-vessel and large-vessel complications of diabetes.",
        back: "Small: retinopathy (blindness), nephropathy (kidney failure), neuropathy (numb burning feet). Large: heart attack, stroke, poor leg circulation — converging on the diabetic foot.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Global Report on Diabetes",
        year: "2016",
      },
      {
        organization: "World Health Organization",
        title: "Package of Essential Noncommunicable (PEN) Disease Interventions for Primary Health Care",
        year: "2020",
      },
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        year: "2017",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "15th edition",
        note: "Educational source — verify current edition against your course texts.",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-4",
    moduleTitle: "Sugar, Thyroid & Hormones",
    lessonTitle: "Diabetic Emergencies: DKA & Hypoglycaemia",
    description:
      "The two crises every nurse must know cold — the deep sighing breath of DKA and the trembling confusion of the low sugar.",
    difficulty: "Clinical Reasoning",
    durationMin: 13,
    objectives: [
      "Recognise and respond to hypoglycaemia, applying the rule of 15 for the conscious patient and the nothing-by-mouth rule for the unconscious one.",
      "Recognise diabetic ketoacidosis from its bedside signatures — Kussmaul breathing, fruity breath, dehydration — and support the treatment pathway.",
      "Teach the sick-day rule that saves lives: illness never means stopping insulin.",
    ],
    tags: ["hypoglycaemia", "dka", "emergency", "insulin"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Diabetes has two emergencies that sit at opposite ends of one seesaw: **hypoglycaemia** — sugar too low, the brain starving — and **diabetic ketoacidosis (DKA)** — sugar locked out of the cells while the body burns fat into acid. Both kill. Both announce themselves clearly at the bedside, if you know the faces. And both, disturbingly, can be the first appearance of a diabetes nobody knew was there — the young student 'tired from exams' who is actually in ketoacidosis, the elder on tablets found 'acting drunk' on the floor who is simply low.\n\nThis lesson is pure recognition-and-response, the kind of nursing that happens before any doctor has seen the patient.",
      },
      {
        type: "text",
        title: "Hypoglycaemia: the brain is starving",
        body: "The brain runs on glucose and keeps no stores. Below about **3.9 mmol/L** the warning lights come on; below about **3.0 mmol/L** the situation is dangerous. The face of a low sugar has two phases. First the **adrenaline flush**: pale, cold sweating, trembling hands, hunger, pounding heart, anxiety — the body's alarm. Then, as the brain itself runs dry, the **neuroglycopenic signs**: confusion, slurred speech, blurred vision, strange behaviour (the sudden aggression of a normally gentle man, the patient found 'drunk' at midday), seizures, and unconsciousness.\n\nFix the causes and you prevent the next one: insulin or sulfonylurea tablets taken without eating, unusual exercise without extra food, alcohol, missed meals during illness, kidney decline that slows medicine clearance. **The rule of 15** for the conscious patient who can swallow: give about **15 g of fast-acting sugar** — half a cup (about 150 mL) of regular soft drink, 3 level teaspoons of sugar in water, glucose gel or tablets — **wait 15 minutes, recheck**, repeat once if still low, then follow with a proper starchy meal or snack once recovered, and document.\n\nFor the patient who is **unconscious or cannot swallow safely: nothing by mouth — ever.** No pouring soft drink into a half-conscious mouth: that is how lungs fill. Keep the airway open, position on the side, call for help urgently, and let the team give intravenous dextrose or glucagon per protocol; continue glucose monitoring because the rebound can swing. Afterwards, the real work: find out WHY, and adjust the regimen with the team.",
      },
      {
        type: "text",
        title: "DKA: the body burning fat",
        body: "Remove insulin and the cells cannot reach glucose, so the body burns fat instead — and fat burning leaves **ketones**, which are acids. Three things now happen together: **hyperglycaemia** (glucose climbing in the blood), **ketosis** (acids accumulating) and **acidosis** (the blood's chemistry souring). That triangle defines DKA.\n\nThe bedside signatures are unforgettable. **Breathing: deep, sighing, relentless** — Kussmaul breathing, the lungs blowing off acid; family often report the patient 'cannot catch breath' though the lungs are healthy. **Breath: fruity, like nail-polish remover** — acetone on the breath. **Body: dry** — glucose dragged through the kidneys takes litres of water with it: dry tongue, sunken eyes, poor skin pinch, rapid weak pulse, oliguria; add abdominal pain and vomiting, and a drowsy patient. The story is often: a young person with fever or a 'flu', vomiting for two days — or an insulin user who halved the dose because 'I am not eating' — then the breathing changed.\n\nTreatment belongs to the team: IV fluids in serious quantity, insulin infusion, potassium watched closely (insulin drives potassium into cells, and a falling potassium can stop the heart), the trigger hunted — infection above all (urine, chest, skin). Nursing runs the monitor room: hourly glucose, hourly vitals, strict fluid balance, cardiac monitoring per unit protocol, the falling potassium flagged, the drip that must never disconnect, mouth and skin care, and the gentle explanation to a frightened family. DKA is a marathon of monitoring — the patient who arrives awake survives because someone watched every hour.",
      },
      {
        type: "table",
        title: "The two emergencies side by side",
        body: "| Feature | Hypoglycaemia | Diabetic ketoacidosis |\n|---|---|---|\n| Sugar level | Low (below about 3.9 warning, below 3.0 dangerous) | High (often very high) |\n| Onset | Minutes | Hours to a day or more |\n| Skin | Pale, cold sweat | Dry, flushed, dehydrated |\n| Breathing | Normal or shallow | Deep, sighing, rapid — Kussmaul |\n| Breath smell | Nothing special | Fruity, acetone, nail-polish remover |\n| Mind | Confusion, odd behaviour, slurred speech; can look drunk | Progressive drowsiness, abdominal pain, vomiting |\n| First response | Check glucose; sugar NOW if conscious (rule of 15); nothing by mouth if unconscious — airway, side, urgent IV dextrose per team | Check glucose and urine ketones; urgent referral; IV fluids and insulin per team; hunt the trigger |",
      },
      {
        type: "callout",
        title: "The sick-day rule that saves lives",
        body: "When a person with type 1 diabetes is ill — fever, vomiting, not eating — insulin is NEVER stopped. Illness RAISES the body's need for insulin; the dose is adjusted by the team, fluids continue, and monitoring tightens. The classic fatal mistake is skipping insulin 'because the patient is not eating.' Similarly, never let a steroid-treated or diabetic patient drift without their clinic's sick-day plan. Write the rule where families can see it: sickness changes the dose; it never cancels the insulin.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Nana Yaa, 19, a first-year university student, has had 'the flu' for three days with vomiting. Her roommate brings her to the campus clinic: she is drowsy, breathing deeply and rapidly, her breath smells faintly of nail-polish remover, her tongue is cracked dry, and her pulse is fast and weak. Urine dipstick: glucose +++, ketones large. Nobody in the family has ever heard the word diabetes.\n\nWhat is happening, and what do the next thirty minutes look like?\n\nAnswer: This is DKA — the triangle of high glucose, heavy ketones and the dry, deep-breathing, drowsy picture — most likely the first presentation of type 1 diabetes, triggered by infection. Next thirty minutes: alert the medical team immediately, IV access and fluids per protocol, position her safely with airway watched (she is drowsy — nothing by mouth), monitor vitals, arrange urgent transfer once stabilised as the team directs, and stay with her — this patient is spending litres of water she does not have. Then comes your second job, when she wakes: the teaching of a lifetime of insulin, and the reminder that vomiting with type 1 means MORE vigilance, never less. The roommate who brought her in tonight deserves the honest credit.",
      },
      {
        type: "clinical_pearl",
        body: "A confused patient on insulin or diabetes tablets is hypoglycaemic until proven otherwise — check the glucose BEFORE you conclude stroke, alcohol or 'madness'. The reversal takes minutes and saves the brain; the missed diagnosis does the opposite. And its mirror: every 'diabetic coma' is not high sugar — some are low. The fingerstick takes sixty seconds; the assumption can cost the patient everything.",
      },
      {
        type: "memory_trick",
        body: "Hypo = **Sweaty, Shaky, Slurring — Sugar Now** (and if they cannot swallow: nothing by mouth — airway, side, call). DKA = **D**ry patient, **K**etone breath, **A**cid breathing — deep sighs that smell like polish. The rule of 15: fifteen grams of sugar, fifteen minutes of patience, recheck.",
      },
      {
        type: "quiz_prompt",
        title: "Nothing by mouth — why?",
        body: "An insulin-treated patient is found unconscious; the family is tipping soft drink into his mouth 'to raise the sugar.' Why must you stop them?\n\nAnswer: A patient who cannot protect their airway can aspirate fluid into the lungs — the treatment becomes the drowning. Keep the airway open, roll him on his side, call urgently, and let the team give IV dextrose or glucagon per protocol. Oral rescue is only for the conscious, swallowing patient.",
      },
      {
        type: "summary",
        body: "- Hypoglycaemia: below ~3.9 warning, below ~3.0 dangerous — adrenaline signs (sweat, tremor, hunger, pallor) then brain signs (confusion, odd behaviour, slurred speech, seizures, coma).\n- Rule of 15: 15 g fast sugar, wait 15 minutes, recheck, repeat once, then starchy food; unconscious patient = NOTHING by mouth — airway, side position, urgent IV dextrose/glucagon per team.\n- Confused diabetic on insulin or tablets = hypoglycaemia until proven otherwise; check glucose first.\n- DKA: hyperglycaemia + ketosis + acidosis — dry patient, Kussmaul deep sighing breathing, fruity/acetone breath, abdominal pain, vomiting, drowsiness; often the first presentation of type 1, usually triggered by infection or missed insulin.\n- Sick-day rule: illness never stops insulin — doses are adjusted, never cancelled; fluids continue, monitoring tightens.\n- Nursing in DKA: hourly glucose and vitals, strict fluid balance, potassium watch, hunt the trigger, protect skin and mouth — the marathon of monitoring.",
      },
    ],
    questions: [
      {
        topic: "Diabetic Emergencies",
        type: "MCQ",
        difficulty: "Clinical Reasoning",
        stem: "A 68-year-old on morning insulin is found on the floor, confused and aggressive, sweating heavily. He had skipped breakfast. What is your FIRST action?",
        options: [
          "Assume a stroke and arrange urgent CT scanning",
          "Check his capillary blood glucose immediately — this is likely hypoglycaemia",
          "Restrain him and call security before he injures himself",
          "Give his morning insulin dose since it is due and he seems agitated",
        ],
        correctIndex: 1,
        explanation:
          "Sweating, confusion and odd behaviour in a patient on insulin who has not eaten is hypoglycaemia until proven otherwise — a sixty-second fingerstick decides. If low and he can swallow safely, the rule of 15 begins; if he cannot swallow, airway, side position and urgent team response. Giving more insulin (option D) would deepen the crisis.",
        whyOthers: {
          A: "Stroke is a possibility, but the glucose check takes one minute and is reversible in minutes — check it first, always.",
          C: "The 'aggression' is brain starvation, not misconduct; restraint delays the sugar and risks injury.",
          D: "Administering insulin to a hypoglycaemic, fasting patient is the exact opposite of the treatment — it can be fatal.",
        },
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Diabetic Emergencies",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A young patient with suspected new-onset type 1 diabetes is drowsy, breathing deeply and rapidly, and has a fruity smell on the breath. What is this breathing pattern called and what is it doing?",
        options: [
          "Kussmaul breathing — the lungs blowing off acid in diabetic ketoacidosis",
          "Cheyne-Stokes breathing — a brainstem failure pattern",
          "Biot's breathing — a meningitis signature",
          "Panting — a response to abdominal pain",
        ],
        correctIndex: 0,
        explanation:
          "Deep, sighing, relentless Kussmaul respirations are the body's attempt to excrete ketoacids through the breath. The fruity odour is acetone — the same story told by the nose. Together with a dry, dehydrated patient and heavy ketones on dipstick, they define DKA and demand urgent treatment.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Diabetic Emergencies",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient with type 1 diabetes has been vomiting with fever for two days. The family has stopped her insulin 'because she is not eating.' What is the danger of this decision?",
        options: [
          "None — insulin is only needed with food",
          "Insulin can be safely replaced with fruit juice during illness",
          "Illness raises insulin needs; stopping insulin invites ketoacidosis — the dose is adjusted with the team's sick-day plan, never cancelled",
          "Stopping insulin only matters in type 2 diabetes",
        ],
        correctIndex: 2,
        explanation:
          "The sick-day rule: infection and fever raise the body's demand for insulin precisely when intake falls. Insulin is continued (adjusted per the team's guidance), fluids and monitoring intensified, and ketones checked. 'No food, no insulin' is one of the classic fatal errors in type 1 diabetes.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Diabetic Emergencies",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which patients may receive oral sugar treatment for hypoglycaemia?",
        options: [
          "Any diabetic patient, regardless of consciousness, since sugar is harmless",
          "Only patients who are conscious and able to swallow safely",
          "Only patients whose glucose is below 2.0 mmol/L",
          "Only patients on insulin, never those on tablets",
        ],
        correctIndex: 1,
        explanation:
          "The rule of 15 (about 15 g fast sugar, recheck in 15 minutes) applies to the conscious, safely swallowing patient. In the drowsy or unconscious, oral fluids risk aspiration — the treatment becomes the danger. Airway, side positioning and urgent team treatment replace the sweet drink.",
        courseSlug: "medical-surgical-nursing-4",
      },
    ],
    flashcards: [
      {
        topic: "Diabetic Emergencies",
        front: "The rule of 15 in hypoglycaemia?",
        back: "Give about 15 g of fast-acting sugar (half a cup of regular soft drink, 3 teaspoons sugar in water, glucose tablets), wait 15 minutes, recheck — repeat once if still low, then a starchy snack once recovered.",
      },
      {
        topic: "Diabetic Emergencies",
        front: "Why must an unconscious hypoglycaemic patient receive NOTHING by mouth?",
        back: "An unprotected airway aspirates fluid — the rescue drink becomes lung water. Airway open, side position, urgent IV dextrose or glucagon per team protocol instead.",
      },
      {
        topic: "Diabetic Emergencies",
        front: "The deadly triangle of DKA?",
        back: "Hyperglycaemia + ketosis + acidosis — the body without insulin burns fat into acids while glucose climbs: dry patient, Kussmaul breathing, acetone breath, vomiting, drowsiness.",
      },
      {
        topic: "Diabetic Emergencies",
        front: "Why does DKA treatment include careful potassium monitoring?",
        back: "Insulin drives potassium from the blood into cells — a falling potassium can trigger fatal cardiac rhythms; the team monitors and replaces it, and the nurse watches the cardiac monitor and rhythm reports.",
      },
      {
        topic: "Diabetic Emergencies",
        front: "The sick-day rule in one sentence?",
        back: "Illness raises insulin needs — the dose is adjusted with the team, fluids continue, ketones are checked; insulin is NEVER stopped because the patient is not eating.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Package of Essential Noncommunicable (PEN) Disease Interventions for Primary Health Care",
        year: "2020",
      },
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        year: "2017",
      },
      {
        organization: "Centers for Disease Control and Prevention",
        title: "Hypoglycemia (Low Blood Glucose)",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "15th edition",
        note: "Educational source — verify current edition against your course texts.",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-4",
    moduleTitle: "Sugar, Thyroid & Hormones",
    lessonTitle: "Living With Diabetes: Daily Nursing Care",
    description:
      "Feet, food, medicine and feelings — the coaching and the check-ups that keep sugars steady and lives whole between hospital visits.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Teach the daily self-care package for diabetes — foot care, food balance, medicine adherence and monitoring — in language a Ghanaian household can live with.",
      "Apply the structured annual review (eyes, feet, kidneys, blood pressure and HbA1c) as a nursing checklist.",
      "Support safe insulin use in a hot climate: storage, site rotation and technique.",
    ],
    tags: ["diabetes care", "foot care", "patient education", "insulin"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The patient with diabetes lives at home, not on your ward. Between clinic visits there are one thousand ordinary days, and what happens in them — the shoes, the meals, the tablet taken or forgotten, the foot glanced at or ignored — decides whether diabetes stays a quiet companion or becomes the emergency and the amputation. WHO designed its PEN package for exactly this reality: simple, affordable chronic-disease care delivered by nurses at the first point of contact.\n\nThis lesson is your coaching manual: the foot, the food, the medicine, the monitoring — and the structured review that catches trouble while it is still small.",
      },
      {
        type: "text",
        title: "The foot: where diabetes bites hardest",
        body: "The diabetic foot is the meeting of three failures: nerves that no longer feel, arteries that no longer feed, and infection that no longer clears. The recipe for disaster is ordinary: a stone in a shoe that a numb foot never reported, a small crack from dry harmattan skin, a barefoot walk across a hot yard, or a blade from the roadside pedicure — then two weeks of 'small wound' at home with herbs, and a black toe in your triage chair.\n\nTeach the five daily habits. **Look** at both feet every night — top, sole, between the toes; the person who cannot bend uses a mirror on the floor or the eyes of a spouse. **Wash** with mild soap and lukewarm (never hot) water — test with the elbow, not a foot that cannot judge. **Dry** carefully between the toes, where damp breeds fungus and soft skin splits. **Cover** every crack and dry area with moisturiser — but NOT between the toes. **Shoes** always outdoors AND indoors, with socks — a closed shoe before a walking day, never a barefoot market trip. Add the clinic rules: nails cut straight across and filed, never dug at the corners; corns and calluses never carved by blades or 'corn caps' from the chemical seller — that is a job for the clinic; and any break in the skin, blister, colour change, or hot swollen area reported the SAME day, not after market.\n\nEvery clinic visit, the feet come OUT of the shoes: you look, you feel pulses where trained, you test sensation per protocol, and you dry the skin between the toes yourself if needed. The unwrapped foot is the examined foot; the examined foot keeps its toes.",
      },
      {
        type: "text",
        title: "Food, movement, medicine and monitoring",
        body: "**Food is treatment, not punishment.** No Ghanaian family needs a forbidden-foods exile; they need balance and spacing. Spread carbohydrate across the day instead of one heavy evening banku; prefer fibre-rich versions where possible — plantain with the skin? kontomire stews, beans, brown rice over white when available; make protein (fish, eggs, beans, groundnut soups) a steady guest; and attack the single biggest win first: **sugary drinks** — the daily mineral and the heavily sugared tea are pure glucose arriving at speed. Water first, small portions of treats occasionally, cooking methods favouring stews and boiling over deep frying.\n\n**Movement is medicine too**: about 30 minutes of brisk walking most days — the walk to market counts; an after-meal stroll visibly flattens the sugar curve. **Medicines anchor the day**: tablets at consistent times, tied to a habit like morning devotion; when insulin is prescribed, teach technique with care — rotate injection sites within one region (the abdomen absorbs fastest; the thigh, arm each their own pace) because a favourite over-used spot swells fat and stops absorbing properly; store insulin away from direct heat and sunlight in our climate — a cool dark corner or refrigerator door shelf — and discard insulin that has frozen or clumped.\n\n**Monitoring tells the truth**: where glucose meters exist, teach the patient or a family member the technique and a simple written log; where they do not, teach the urine dipstick as a rough signal and lean harder on symptoms, foot checks and clinic HbA1c. Whatever the tool, the record belongs in a booklet the patient brings to clinic — numbers the team can act on.",
      },
      {
        type: "table",
        title: "The yearly review — a checklist the patient owns",
        body: "| Check | Why | How often |\n|---|---|---|\n| HbA1c | The three-month truth about control | Each clinic season, per team |\n| Blood pressure | Half of the damage equation; usually raised in type 2 | Every visit |\n| Eyes (fundus) | Retinopathy blinds silently; laser treatment works early | At least yearly |\n| Feet: skin, pulses, sensation | Neuropathy and ischaemia precede every ulcer | Every visit, properly |\n| Urine protein / kidney tests | Nephropathy whispers years before it shouts | At least yearly |\n| Weight and waist | The lever the patient controls daily | Every visit |\n| Vaccines and sick-day plan | Illness is the emergency's open door | Review yearly |\n\nPrint it, read it with the patient, tick it together. A checklist in the hand is worth ten lectures in the air.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Uncle Kwesi, 61, a taxi driver with type 2 diabetes for eight years, arrives with a 'small sore' under his left big toe that has been open for five weeks. Home treatment: herbs and a bandage. The toe is now dark at the tip, the smell is unmistakable, and today's random glucose is 16 mmol/L. He is embarrassed and quiet; his wife does the talking.\n\nWhat does this foot need, and what does this man need?\n\nAnswer: The foot needs hospital care today — a diabetic foot ulcer with dark tissue, odour and high glucose is infection plus dead tissue plus uncontrolled disease: urgent referral for wound care, debridement and treatment decisions, with tight glucose control alongside. The man needs, without a single word of blame: the explanation of why the foot felt nothing (neuropathy — the warning system that never reported five weeks of damage), a future foot plan his wife co-owns (nightly inspection, closed shoes, nothing carved at home, same-day reporting), his medicines and meals rebuilt with him, and a follow-up appointment before discharge. Amputations in Ghana usually begin exactly here — a small wound, a numb foot, a busy man, five quiet weeks. Your nursing is the interruption of that story.",
      },
      {
        type: "clinical_pearl",
        body: "The second-best instrument in diabetes care is the patient's shoes, and the best is their eyes — the feet come out of the shoes at every visit, and a household member learns to look nightly. A foot that is never seen is an amputation waiting its turn. And remember: never moisturise between the toes — the one place you deliberately leave dry.",
      },
      {
        type: "memory_trick",
        body: "The nightly five for the foot: **LOOK, WASH, DRY, COVER, SHOES.** For the clinic: 'no visit ends until the feet leave the sandals.' And for the whole life: **E-F-M-M** — Eat balanced and spaced, Move daily, Medicines on schedule, Monitor and record.",
      },
      {
        type: "quiz_prompt",
        title: "The tablets question",
        body: "A patient asks: 'When I feel fine, can I take my diabetes tablets only when the sugar feels high?' What is your answer?\n\nAnswer: No — diabetes tablets work by keeping a steady level in the blood, like salt in soup; the days you feel fine are the medicine quietly protecting your eyes, kidneys and feet. Skipping waits for the complication to announce itself — and complications do not whisper. Daily, same time, for life, with clinic reviews.",
      },
      {
        type: "summary",
        body: "- Daily foot package: LOOK nightly (mirror or family eyes), WASH lukewarm, DRY between toes, COVER cracks (never between toes), SHOES always — indoors too; report any break same-day.\n- Never carve corns or dig nails at home; clinic handles nails, calluses and wounds.\n- Food: balance and spacing, fibre-rich carbohydrate spread across the day, steady protein, sugary drinks first to go; movement 30 minutes daily.\n- Medicines: tablets tied to daily habits; insulin sites rotated, stored away from heat, technique taught and checked.\n- Monitoring: written logs brought to clinic; urine dipsticks or meters per availability; HbA1c as the season's truth.\n- Yearly review owned by the patient: HbA1c, BP, eyes, feet, kidneys, weight — and a sick-day plan reviewed.",
      },
    ],
    questions: [
      {
        topic: "Diabetes Daily Care",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which piece of foot-care advice to a patient with diabetic neuropathy is DANGEROUS and must be corrected?",
        options: [
          "Look at both feet every night, including between the toes",
          "Cut corns and calluses at home with a clean new blade to save clinic fees",
          "Wash with lukewarm water, testing the temperature with the elbow",
          "Report any blister or break in the skin the same day",
        ],
        correctIndex: 1,
        explanation:
          "Blades and 'corn caps' on a numb foot are how ulcers are born: the blade creates the wound the nerves never report, and diabetic wounds do not announce themselves until infected. Corns and calluses are clinic work. The other three habits are core prevention.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Diabetes Daily Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is barefoot walking particularly dangerous for a patient with diabetic neuropathy?",
        options: [
          "Bare feet sweat more, which raises the blood glucose",
          "The neuropathy means stones, hot surfaces and cuts cause no pain warning — injuries go unnoticed and unwashed for days",
          "Barefoot walking weakens the ankle joints specifically",
          "It is only dangerous outdoors, never inside the house",
        ],
        correctIndex: 1,
        explanation:
          "Pain is the foot's security system; neuropathy disarms it. A stone in the sole, a nail on the compound floor, or a hot harmattan surface can injure for days without a single report — by the time the wound is seen, infection has moved in. Shoes indoors AND outdoors, always with socks.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Diabetes Daily Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient on insulin injects into the same small patch of the abdomen every day because 'that spot never hurts.' What problem is this creating?",
        options: [
          "Faster absorption, which the clinic will welcome",
          "Lipodystrophy — the swollen scarred site absorbs insulin unpredictably, making control erratic",
          "Nothing — the site simply becomes tougher over time",
          "It only matters if the site becomes visibly red",
        ],
        correctIndex: 1,
        explanation:
          "Repeated injections into one favourite spot cause fat swelling (lipohypertrophy) that both absorbs insulin slowly and unpredictably and hides the true dose. Rotation within regions keeps absorption steady — and the painless spot is painless for the same nerve reasons the rest of the foot is quiet.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Diabetes Daily Care",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which dietary change usually gives the biggest single glucose benefit in a Ghanaian household?",
        options: [
          "Banning all carbohydrate foods completely",
          "Replacing regular sugary drinks (minerals and heavily sugared tea) with water, and spreading carbohydrate across the day",
          "Eating only once daily, in the evening",
          "Doubling fruit juice because it is natural",
        ],
        correctIndex: 1,
        explanation:
          "Liquid sugar arrives at blood speed — the daily mineral and the sugar-loaded tea are the cheapest calories to remove and often the fastest visible win on the sugar readings. Balance means spaced, fibre-rich carbohydrate, not exile; one huge daily meal and 'natural' juices both backfire.",
        courseSlug: "medical-surgical-nursing-4",
      },
    ],
    flashcards: [
      {
        topic: "Diabetes Daily Care",
        front: "The nightly five for the diabetic foot?",
        back: "LOOK at both feet (mirror/family eyes), WASH lukewarm, DRY between the toes, COVER cracks with moisturiser (never between toes), SHOES always — and report any break the same day.",
      },
      {
        topic: "Diabetes Daily Care",
        front: "Why must feet come out of the shoes at every clinic visit?",
        back: "The unwrapped foot is the examined foot — neuropathy hides damage, so the eyes of the nurse are the foot's remaining warning system.",
      },
      {
        topic: "Diabetes Daily Care",
        front: "Why rotate insulin injection sites?",
        back: "Over-used favourite spots develop lipodystrophy — swollen tissue that absorbs insulin unpredictably and wrecks glucose control; rotation keeps absorption steady.",
      },
      {
        topic: "Diabetes Daily Care",
        front: "The yearly review checklist for every patient with diabetes?",
        back: "HbA1c, blood pressure, eye fundus, full foot examination (skin, pulses, sensation), urine protein/kidney tests, weight — plus a sick-day plan.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Package of Essential Noncommunicable (PEN) Disease Interventions for Primary Health Care",
        year: "2020",
      },
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        year: "2017",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "15th edition",
        note: "Educational source — verify current edition against your course texts.",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-4",
    moduleTitle: "Sugar, Thyroid & Hormones",
    lessonTitle: "Thyroid Disorders: Fast & Slow",
    description:
      "The butterfly gland that sets the body's speed — the racing engine of hyperthyroidism, the idling engine of hypothyroidism, and the goitre between.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Contrast the clinical pictures of hyperthyroidism and hypothyroidism using speed, weight, temperature tolerance, pulse and behaviour.",
      "Recognise the two thyroid emergencies — thyroid storm and myxoedema coma — and the post-thyroidectomy red flags.",
      "Teach lifelong levothyroxine adherence and connect iodine deficiency to Ghana's goitre story.",
    ],
    tags: ["thyroid", "hyperthyroidism", "hypothyroidism", "goitre"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "At the front of the neck, below the voice box, sits a small butterfly-shaped gland whose only job is to set the speed of every cell in the body — the metabolic thermostat. When the thyroid is overactive, the whole body runs hot and fast; when it is underactive, everything cools and slows. Neither extreme announces itself with a signboard: the patient says 'I am always weak' or 'I cannot bear this heat', and the years pass with malaria treatment, iron tablets and prayers, while the true culprit — a thumb-sized gland — quietly sets the pace.\n\nThis lesson gives you the two faces of thyroid disease, the emergencies, the neck you will sometimes prepare for theatre, and the one-tablet-a-day transformation of hypothyroid care.",
      },
      {
        type: "text",
        title: "Fast: hyperthyroidism — the engine racing",
        body: "The commonest cause is **Graves' disease** — the immune system stimulating the thyroid into overdrive, often with eye changes. The picture is an engine at full throttle in neutral: **weight loss despite eating MORE** (the burning is real), **heat intolerance** — the patient fans herself while everyone else is comfortable, sweating, **fine tremor** of the outstretched hands, **a fast pulse** (and over time an irregular one — atrial fibrillation, which invites stroke), palpitations, anxiety, irritability and insomnia, loose stools, scanty or absent periods, and sometimes the staring eyes and lid lag of Graves' that cannot fully close at night. A swelling at the front of the neck — **goitre** — may accompany any thyroid state.\n\n**Thyroid storm** is the runaway version: fever, a very rapid pulse, agitation or delirium, vomiting and dehydration — classically after infection, surgery or abrupt treatment changes. It is an emergency: urgent referral and antithyroid treatment per the team.\n\nNursing the overactive thyroid: a calm, cool corner of the ward, fluids, pulse and rhythm monitoring, weight weekly (the honest scale), and eye protection for the patient whose lids no longer close — moisture drops or shields per prescription, so the exposed cornea does not dry and ulcerate. Treatment is the team's: antithyroid tablets (weeks to take effect — teach patience and adherence, and the rare sore-throat warning that must be reported at once), radioactive iodine at referral centres, or surgery.",
      },
      {
        type: "text",
        title: "Slow: hypothyroidism — the engine idling",
        body: "The underactive thyroid is the great impersonator of 'ordinary tiredness' and is missed for years. The picture: **fatigue** that sleep does not repair — the patient 'sleeps too much' and wakes unrefreshed; **cold intolerance** — shivering quietly in harmattan while others are fine; **weight gain without eating more** (the engine burns less); **constipation**; **dry, flaky skin** and coarse hair; a **puffy face** with baggy eyelids; a **slow, hoarse voice**; heavy or absent periods; slowed thinking and a flat, low mood that is treated for depression while the gland goes untested; **bradycardia**; and the classic examination tell — **ankle reflexes that hang too long**, slow to relax. In Ghana, a further cause adds to the picture: iodine deficiency goitre in some inland districts — the reason iodised salt became national policy.\n\nThe transformation of treatment is one of the most satisfying in medicine: a daily **levothyroxine** tablet, taken in the morning before food with water and a consistent gap from breakfast (absorption is fussy — iron and calcium tablets should not sit beside it). It is for LIFE: the patient who stops it when 'energy returned' has simply stopped refilling the fuel the energy runs on; relapse returns quietly in weeks. Rare and deadly is **myxoedema coma** — hypothermia, drowsiness and slowing everything, an emergency needing hospital care.",
      },
      {
        type: "table",
        title: "Fast gland versus slow gland",
        body: "| Feature | Hyperthyroidism | Hypothyroidism |\n|---|---|---|\n| Engine speed | Racing | Idling |\n| Weight | Falls, appetite increased | Rises, appetite unchanged or low |\n| Temperature tolerance | Heat intolerance, sweating | Cold intolerance |\n| Pulse | Fast, may become irregular (AF) | Slow |\n| Bowels | Loose | Constipated |\n| Skin | Warm, moist | Dry, flaky, puffy face |\n| Mind | Anxious, irritable, sleepless | Slow, flat, sleepy |\n| Mirror feature | Staring eyes, fine tremor | Slow-relaxing ankle reflexes |\n| Treatment direction | Antithyroid, radioactive iodine, surgery | Daily levothyroxine, lifelong |",
      },
      {
        type: "text",
        title: "The neck that goes to theatre",
        body: "Some thyroids — large goitres, suspicious nodules, overactive glands — come to thyroidectomy, and the nurse watching that neck afterwards is guarding a surgical corridor where four tiny parathyroid glands and two voice nerves live among the vessels. In the first hours after thyroid surgery, watch and report: **breathing difficulty or neck swelling** (bleeding or haematoma under the wound — an airway emergency, call immediately), **hoarseness or voice change** (nerve irritation — report), and the parathyroid signature: **tingling around the mouth or in the fingers, or muscle cramps** — low calcium from bruised or borrowed parathyroids, which the team treats urgently. Keep the patient sat comfortably supported, watch the wound drain if one is placed, and calm the family — most thyroid surgery heals beautifully; your job is to be the sentinel for the few who need help in the first night.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Madam Serwaa, 44, has spent two years being 'treated for anaemia and malaria' — courses of iron and antimalarials that never held. She has gained 10 kg 'while eating less than before', sleeps in the afternoons, is constipated, complains that the harmattan cold goes into her bones when others are comfortable, and her voice has gone low and slow. Her eyelids look puffy; her skin is dry like harmattan itself.\n\nWhat do you suspect, and how will you advocate for her?\n\nAnswer: This is textbook hypothyroidism — weight gain with reduced intake, cold intolerance, constipation, dry skin, puffy eyelids, slow voice, and the fatigue repeatedly mislabelled as anaemia. Advocate for thyroid function testing before the next course of anything: the treatment is a single daily tablet that can return her whole pace of life within months, taken for life. If the test confirms it, your teaching becomes the treatment's long half: morning tablet before food, lifelong, never stopped because energy returned — and booked review for dose adjustment.",
      },
      {
        type: "clinical_pearl",
        body: "The thyroid reads opposite to the appetite: weight FALLING while eating MORE — think fast gland; weight RISING while eating LESS — think slow gland. And the humble ankle reflex is a free thyroid test: a reflex that returns slowly, hanging in the down position, whispers hypothyroidism before any laboratory does.",
      },
      {
        type: "memory_trick",
        body: "Hyper = **Hot, Hungry, Hurrying** (heat, weight loss despite appetite, racing heart and mind). Hypo = **Cold, Costive, Crawling** (cold, constipated, slow in body and thought). The neck after theatre: **Breath, Bleed, Breath of voice, and the tingle around the mouth** — swelling, bleeding, hoarseness, low calcium.",
      },
      {
        type: "quiz_prompt",
        title: "The tingle after theatre",
        body: "Six hours after thyroidectomy, your patient reports tingling around the mouth and in the fingertips. What do you suspect and what do you do?\n\nAnswer: Possible hypocalcaemia — the parathyroid glands that regulate calcium sit on the back of the thyroid and can be bruised or disturbed in surgery. Report it immediately with the vital signs; the team will check calcium and treat. Untreated severe low calcium can progress to cramps, spasms (tetany) and dangerous rhythm disturbances.",
      },
      {
        type: "summary",
        body: "- The thyroid sets the body's speed: hyperthyroidism = racing engine (weight loss despite appetite, heat intolerance, tremor, fast/irregular pulse, anxiety, staring eyes); hypothyroidism = idling engine (weight gain despite low intake, cold intolerance, constipation, dry skin, puffy face, slow voice, flat mood, slow-relaxing reflexes).\n- Thyroid storm (fever, very fast pulse, agitation) and myxoedema coma (hypothermia, drowsiness) are the emergencies — urgent referral.\n- After thyroidectomy watch: breathing/neck swelling (bleeding), hoarseness (nerve), peri-oral and finger tingling (low calcium) — report immediately.\n- Levothyroxine: one daily tablet, morning before food, separated from iron/calcium, for LIFE — stopping when energy returns is the classic relapse.\n- Goitre in Ghana is often iodine deficiency — iodised salt is public health in action.",
      },
    ],
    questions: [
      {
        topic: "Thyroid Disorders",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which cluster of findings best fits hypothyroidism?",
        options: [
          "Weight loss with increased appetite, sweating, and a fast pulse",
          "Weight gain with reduced intake, cold intolerance, constipation, and a slow hoarse voice",
          "Fever, agitation, and a very rapid irregular pulse",
          "Post-meal sweating with trembling hands",
        ],
        correctIndex: 1,
        explanation:
          "The idling engine stores what it no longer burns: weight rises while appetite falls, the patient feels cold, the bowels slow, and the voice and thinking flatten. Option A describes hyperthyroidism, and C describes thyroid storm.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Thyroid Disorders",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient with known hyperthyroidism develops fever, extreme restlessness, a pulse of 160, and vomiting. What is this and what does it need?",
        options: [
          "A simple febrile reaction to antithyroid tablets — continue and observe",
          "Thyroid storm — an emergency requiring urgent team treatment and referral",
          "Ordinary malaria coinciding with thyroid disease — start antimalarials alone",
          "An anxiety attack — reassure and dim the lights",
        ],
        correctIndex: 1,
        explanation:
          "Fever, marked tachycardia, agitation and vomiting in a hyperthyroid patient is thyroid storm — decompensated thyrotoxicosis, often triggered by infection, surgery or treatment interruption. It is life-threatening: urgent escalation, cooling, fluids and the team's antithyroid treatment. Infection can be treated alongside, but the response is not antimalarials alone.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Thyroid Disorders",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Six hours after thyroidectomy, the patient complains of tingling around the mouth and in the fingers. Which complication fits best?",
        options: [
          "Bleeding under the wound",
          "Damage to the voice nerves",
          "Low calcium from bruised parathyroid glands",
          "Thyroid storm",
        ],
        correctIndex: 2,
        explanation:
          "Peri-oral and fingertip tingling after thyroid surgery is the classic signature of hypocalcaemia — the four rice-grain parathyroids on the thyroid's back can be bruised or temporarily stunned. Report immediately for calcium testing and treatment; watch for cramps and tetany. Bleeding shows as neck swelling and breathing difficulty; nerve injury shows as hoarseness.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Thyroid Disorders",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient with hypothyroidism started levothyroxine three months ago and feels completely restored. She asks whether she can stop now. What is your teaching?",
        options: [
          "Yes — feeling restored means the thyroid has healed and the tablet can stop",
          "Stop and restart the tablet whenever the fatigue returns",
          "Take it every other day to 'give the gland a chance'",
          "Continue daily for life — the tablet replaces what the gland cannot make; stopping invites the quiet relapse of symptoms within weeks",
        ],
        correctIndex: 3,
        explanation:
          "Levothyroxine is replacement, not cure: the gland's own output does not return because the medicine worked. The restored energy IS the tablet working. Stopping reliably brings the weight, cold, constipation and fatigue back — and each relapse is another mislabelled season of 'weakness'.",
        courseSlug: "medical-surgical-nursing-4",
      },
    ],
    flashcards: [
      {
        topic: "Thyroid Disorders",
        front: "The two faces of thyroid disease in one contrast?",
        back: "Hyperthyroid = Hot, Hungry, Hurrying (weight loss despite appetite, heat intolerance, fast pulse, anxiety). Hypothyroid = Cold, Costive, Crawling (weight gain despite low intake, cold, constipation, slow voice and thought).",
      },
      {
        topic: "Thyroid Disorders",
        front: "What is thyroid storm?",
        back: "Decompensated hyperthyroidism: fever, very rapid pulse, agitation or delirium, vomiting — often triggered by infection, surgery or interruption of treatment. An emergency requiring urgent team response.",
      },
      {
        topic: "Thyroid Disorders",
        front: "Three post-thyroidectomy red flags and their meanings?",
        back: "Breathing difficulty/neck swelling = bleeding under the wound; hoarseness = voice nerve involvement; tingling of mouth and fingers = low calcium from bruised parathyroids. Report all immediately.",
      },
      {
        topic: "Thyroid Disorders",
        front: "How is levothyroxine taken and for how long?",
        back: "One tablet each morning before food, separated from iron and calcium, with water — for LIFE. It replaces the hormone the gland cannot make; stopping it invites relapse.",
      },
    ],
    sources: [
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        year: "2017",
      },
      {
        organization: "World Health Organization",
        title: "Guideline: Fortification of Food-Grade Salt with Iodine for the Prevention and Control of Iodine Deficiency Disorders",
        year: "2014",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "15th edition",
        note: "Educational source — verify current edition against your course texts.",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-4",
    moduleTitle: "Sugar, Thyroid & Hormones",
    lessonTitle: "Adrenal & Pituitary Problems",
    description:
      "The two glands that run the body's stress budget and water taps — Addison's dark exhaustion, Cushing's round face, and the pituitary's strange floods and droughts.",
    difficulty: "Hard",
    durationMin: 11,
    objectives: [
      "Recognise adrenal insufficiency (Addison's disease) and respond to the Addisonian crisis, including the steroid safety rules every patient must own.",
      "Identify the clinical picture of Cushing syndrome and the commonest way it arrives in Ghana — bought steroids stopped abruptly.",
      "Distinguish diabetes insipidus from SIADH at the bedside using urine volume, urine concentration and serum sodium.",
    ],
    tags: ["adrenal", "pituitary", "steroids", "addisons crisis"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Two gland systems, small and rarely discussed, hold enormous power. The **adrenals** — two caps riding the kidneys — make **cortisol**, the stress budget hormone that keeps blood pressure and sugar steady through illness and fasting, plus **aldosterone**, which holds the body's salt and water. The **pituitary** — a pea beneath the brain — is the conductor of the whole hormone orchestra, sending signals to the thyroid, the adrenals and the gonads, while its neighbourhood runs the body's water taps.\n\nThis lesson tours the important failures: the adrenal that gives out, the adrenal drowned in steroids, the pituitary that grows where it should not, and the water system stuck open or stuck closed.",
      },
      {
        type: "text",
        title: "Adrenal insufficiency: the stress budget is empty",
        body: "**Addison's disease** is primary adrenal failure — usually autoimmune, sometimes tuberculosis in our setting. The patient presents like a battery gone flat: deep fatigue, weight loss, nausea and abdominal pain, and **postural dizziness** — blood pressure that falls on standing because the salt-and-water budget cannot hold the vessels up. The giveaway is **hyperpigmentation**: the skin darkens at the palmar creases, the gums and mouth, old scars and pressure points, as the pituitary pumps a signal hormone that also darkens skin. Salt craving is real and telling.\n\nThe danger is the **Addisonian crisis**, usually triggered by infection, surgery, vomiting, or missed medication: vomiting and diarrhoea, collapse, shock, confusion — a patient who can die within hours. Treatment is the team's urgent hydrocortisone and IV fluids; your job is recognition and speed. Any known adrenal-insufficient patient who arrives vomiting is in crisis until reviewed — do not wait for the collapse to complete.\n\nThe related trap is bigger in Ghana: the patient who has taken steroid tablets — prednisolone bought from the chemical seller for a rash, an inhalation of a 'fat-making' tonic, dexamethasone injections for 'body pain' — for months or years. Those doses put the adrenals to sleep. **Stopped abruptly, the body is left with no stress response: crisis.** Long-term steroids must be tapered under the team's guidance, never stopped overnight; every long-term steroid patient should ideally carry a steroid card and know the sick-day rule — extra steroid cover when illness, surgery or injury arrives, per the team's plan.",
      },
      {
        type: "text",
        title: "Cushing syndrome: too much of the stress hormone",
        body: "Excess cortisol draws a portrait you can learn once and never forget: the **moon face** — round and red; the **heavy trunk with thin arms and legs** (cortisol moves muscle protein into sugar); **purple striae** — wide bruise-purple stretch marks on the belly and flanks; the **buffalo hump** of fat at the base of the neck; **easy bruising** and thin skin; acne; raised blood pressure and raised blood glucose (steroid diabetes); muscle weakness — particularly difficulty rising from a chair; and mood disturbance. The commonest cause is the one you can prevent: **long-term steroid treatment** — iatrogenic Cushing. Rarer causes are pituitary or adrenal tumours, investigated by the team. Nursing: protect skin from knocks and bruising, monitor glucose and blood pressure, teach safe steroid tapering, and never judge — the round face is the medicine, not the patient's greed.",
      },
      {
        type: "text",
        title: "The pituitary: conductor, flood and drought",
        body: "The pituitary sits just below the brain, behind the bridge of the nose. When it enlarges — most often a benign **adenoma** — two groups of problems appear. **Mass effects**: pressure on the visual pathway above it causes slowly tunneling vision (the outer fields go first), and headaches. **Hormone stories**: an adenoma may itself pump hormone — growth hormone in adults causes **acromegaly**: hands growing so rings no longer fit, feet, jaw and lips thickening, sweating, snoring, hypertension and diabetes arriving together; a **prolactinoma** stops periods, brings milky nipple discharge (galactorrhoea) and, in men, low libido and vision loss late.\n\nAfter pituitary surgery or head injury, the body's water system is where nurses earn their pay. **Diabetes insipidus (DI)** — too little anti-diuretic hormone — is a tap stuck OPEN: floods of **dilute** urine (litres a day, pale as water) with raging thirst and creeping dehydration; the patient must drink to survive, and after surgery the output chart becomes the monitoring instrument. **SIADH** — too much anti-diuretic hormone — is the tap stuck CLOSED: the body hoards water, diluting its own sodium; the patient passes small volumes of paradoxically **concentrated** urine while blood sodium falls — headache, nausea, confusion, drowsiness, seizures in severe cases. It appears with pneumonia, head conditions, some medicines and after surgery; the team manages it with careful fluid handling. The bedside discriminator you can hold in one sentence: **DI = water everywhere (dilute urine, high sodium); SIADH = water hoarded (concentrated urine, low sodium).** Chart urine output and have urine and blood checked when you suspect either — the measuring jug is the diagnostic instrument.",
      },
      {
        type: "table",
        title: "Diabetes insipidus versus SIADH",
        body: "| Feature | Diabetes insipidus (ADH too little) | SIADH (ADH too much) |\n|---|---|---|\n| Water tap | Stuck open | Stuck closed |\n| Urine volume | Floods — litres daily | Small |\n| Urine concentration | Dilute, pale | Concentrated |\n| Blood sodium | Rises (water lost) | Falls (water hoarded, diluted) |\n| Patient's complaint | Raging thirst, drinking litres, urinating all night | Headache, nausea, confusion, drowsiness — little urine passed |\n| Typical setting | After pituitary/head surgery, head injury | Pneumonia, brain disease, some medicines |\n| Core nursing action | Strict intake/output chart, daily weights, report | Intake/output chart, watch mental state, safety — report falls in sodium |",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Brother Mensah, 38, has taken prednisolone tablets bought from a roadside drug store for a chronic skin rash for nearly three years. The rash finally cleared last month; when the tablets finished, he simply did not buy more. Ten days later his wife brings him in: he has been vomiting for two days, cannot stand without the room spinning, his pulse is thin and fast, his blood pressure 84/50 lying and far less standing — and you notice his palmar creases are strikingly darker than the rest of his hands.\n\nWhat is happening, and what must happen now?\n\nAnswer: This is adrenal suppression meeting the real world — three years of borrowed steroids put his adrenals to sleep, and the abrupt stop has left him without a stress response: vomiting, postural collapse and shock with darkened creases is an Addisonian picture needing urgent treatment today (IV fluids and hydrocortisone per the team, after their review). After recovery, the education is the lasting treatment: steroids are a debt repaid slowly (tapered by a team, never stopped overnight), illness needs extra cover, a steroid card worn, and his rash treated by prescription — not by the roadside. And a quiet systems lesson for you: always ask patients what they buy when the pharmacy closes.",
      },
      {
        type: "callout",
        title: "The steroid safety rules",
        body: "Three sentences every long-term steroid patient must own: 1) 'I never stop my steroid tablets suddenly — they are reduced slowly by my clinic.' 2) 'When I am seriously ill — fever, vomiting, surgery, accident — my body needs MORE steroid, and I carry a card saying so.' 3) 'Other people's steroids are never my medicine.' Abrupt withdrawal after prolonged use is one of the quietest ways to end up in shock on a ward.",
      },
      {
        type: "memory_trick",
        body: "Addison's = **DARK, DIZZY, DROPPED** — dark creases, dizzy on standing, dropped pressure. Cushing's = **ROUND face, ROUND middle, RIPPED purple skin**. The water pair: **DI = Drinks and Drains** (dilute floods, sodium up); **SIADH = Soaked Inside** (concentrated trickle, sodium down).",
      },
      {
        type: "quiz_prompt",
        title: "Flood or drought?",
        body: "A patient on day two after pituitary surgery has passed 4 litres of pale urine in 24 hours and drinks continuously. Name the likely problem and the missing hormone.\n\nAnswer: Diabetes insipidus — anti-diuretic hormone is not being produced or released after pituitary surgery, so the kidney's water tap stays open. Chart strictly, report the volumes, weigh daily; the team will confirm and treat. The opposite picture — scanty concentrated urine with a falling sodium and confusion — would be SIADH.",
      },
      {
        type: "summary",
        body: "- Adrenals: cortisol keeps blood pressure and sugar steady through stress; aldosterone holds salt and water.\n- Addison's disease: flat-battery fatigue, weight loss, postural hypotension, salt craving, and hyperpigmentation of creases, gums and scars; crisis (vomiting, shock) on infection/surgery/missed doses is an emergency — urgent fluids and hydrocortisone per team.\n- Long-term bought steroids: adrenals sleep — abrupt withdrawal causes crisis; taper under guidance, carry a steroid card, extra cover when ill.\n- Cushing syndrome: moon face, central obesity with thin limbs, purple striae, easy bruising, high BP and glucose — commonest cause is long-term steroid treatment.\n- Pituitary mass: headaches and tunneling vision; acromegaly (growing hands, jaw, feet), prolactinoma (amenorrhoea, galactorrhoea).\n- DI = ADH too little: dilute floods, thirst, sodium rises. SIADH = ADH too much: concentrated scanty urine, sodium falls, confusion. The intake/output chart is your diagnostic instrument.",
      },
    ],
    questions: [
      {
        topic: "Adrenal & Pituitary Problems",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A man who has taken bought prednisolone for three years stopped the tablets abruptly when they finished. He now has vomiting, postural dizziness and shock. What is the mechanism behind his collapse?",
        options: [
          "Allergic reaction to the stopped tablets",
          "His own adrenal glands were suppressed by the steroids and cannot produce the cortisol he needs under stress",
          "The skin rash has returned with systemic spread",
          "Withdrawal of steroids causes a temporary rise in blood pressure that strains the heart",
        ],
        correctIndex: 1,
        explanation:
          "External steroids switch off the body's own production. Stopping abruptly after prolonged use leaves no reserve — an Addisonian crisis triggered by withdrawal itself. Treatment is replacement (hydrocortisone) and fluids per the team; prevention is a slow, supervised taper with sick-day cover education.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Adrenal & Pituitary Problems",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which set of features best describes Cushing syndrome?",
        options: [
          "Moon face, central obesity with thin limbs, purple striae, easy bruising, raised blood pressure",
          "Dark palmar creases, postural hypotension and salt craving",
          "Raging thirst with litres of pale urine daily",
          "Heat intolerance, weight loss and staring eyes",
        ],
        correctIndex: 0,
        explanation:
          "Cortisol excess redraws the body: fat gathered on face and trunk while limbs thin, skin tears and bruises with purple stretch marks, and sugar and pressure rise. Option B is Addison's, C is diabetes insipidus, D is hyperthyroidism.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Adrenal & Pituitary Problems",
        type: "MCQ",
        difficulty: "Hard",
        stem: "A patient after pituitary surgery passes scanty, dark, concentrated urine while her blood sodium is low and she is increasingly confused. What is the likely diagnosis?",
        options: [
          "Diabetes insipidus",
          "SIADH — excess anti-diuretic hormone causing water retention and dilutional hyponatraemia",
          "Addisonian crisis",
          "Diabetic ketoacidosis",
        ],
        correctIndex: 1,
        explanation:
          "SIADH locks the water tap closed: concentrated urine in small volumes while retained water dilutes the serum sodium — falling sodium explains the headache, confusion and risk of seizures. DI is the mirror image: dilute floods of urine with high sodium. Report urine volumes and mental state changes; management (fluid strategy, correction pace) belongs to the team.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Adrenal & Pituitary Problems",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which finding is the classic giveaway of primary adrenal insufficiency (Addison's disease) on examination?",
        options: [
          "Purple stretch marks on the abdomen",
          "Hyperpigmentation of the palmar creases, gums and old scars",
          "A rapidly swelling neck mass",
          "Pale urine with low specific gravity",
        ],
        correctIndex: 1,
        explanation:
          "When the adrenals fail, the pituitary pours out ACTH to stimulate them; that hormone darkens skin at the creases, gums, scars and pressure points — a visible diary of the disease. Purple striae belong to Cushing (the opposite problem); polyuria belongs to DI and diabetes.",
        courseSlug: "medical-surgical-nursing-4",
      },
    ],
    flashcards: [
      {
        topic: "Adrenal & Pituitary Problems",
        front: "The three steroid safety rules for long-term steroid patients?",
        back: "Never stop suddenly (taper with the clinic); carry a steroid card and get extra cover when ill, injured or facing surgery; never use another person's steroids.",
      },
      {
        topic: "Adrenal & Pituitary Problems",
        front: "Addison's disease in three words and its emergency?",
        back: "Dark (creases, gums, scars), Dizzy (postural hypotension), Dropped (weight and pressure). Emergency: Addisonian crisis — vomiting, collapse, shock; urgent fluids and hydrocortisone per team.",
      },
      {
        topic: "Adrenal & Pituitary Problems",
        front: "DI versus SIADH in one sentence?",
        back: "DI = ADH too little — dilute floods of urine, raging thirst, serum sodium rises; SIADH = ADH too much — scanty concentrated urine, retained water, serum sodium falls with confusion.",
      },
      {
        topic: "Adrenal & Pituitary Problems",
        front: "What is acromegaly, and what is its first change patients notice?",
        back: "Growth hormone excess in adults from a pituitary adenoma — slowly enlarging hands (rings no longer fit), feet, jaw and lips, with sweating, snoring, hypertension and diabetes.",
      },
    ],
    sources: [
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        year: "2017",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "15th edition",
        note: "Educational source — verify current edition against your course texts.",
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-4",
    moduleTitle: "The Gut & Liver",
    lessonTitle: "Hepatitis: The Inflamed Liver",
    description:
      "The viruses from A to E — how they travel, the yellow flag they raise, and why hepatitis B is the Ghanaian nurse's own personal business.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Classify the hepatitis viruses by route of transmission, chronicity and vaccine availability.",
      "Recognise acute viral hepatitis at the bedside and support its care, including the danger signs that demand referral.",
      "Apply the prevention package — hepatitis B vaccination of health workers, standard precautions and post-exposure action.",
    ],
    tags: ["hepatitis", "jaundice", "vaccination", "standard precautions"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The liver is the body's chemical hub — processing every absorbed meal, filtering the blood, making the clotting factors that keep us whole and the bile that digests fat. When viruses inflame it, the whole factory slows, and the patient turns the colour of the disease: **jaundice**, dark 'coca-cola' urine, pale stools, a tender right upper belly, nausea and a fatigue like wet cement.\n\nHepatitis matters doubly in Ghana. WHO counts this country among the highly endemic for **hepatitis B** — the virus that smoulders silently for decades and then presents as the cirrhosis and liver cancer that fill our medical wards — and **hepatitis C** travels the same blood routes more quietly. This lesson is about the whole family, A to E, and the prevention that is literally the nurse's own business: hepatitis B is a vaccine-preventable occupational disease, and you are the exposed worker.",
      },
      {
        type: "text",
        title: "The core ideas: one illness, five letters, two routes",
        body: "The hepatitis family splits cleanly by how it travels.\n\n**By the gut (faecal–oral): hepatitis A and E.** Contaminated water and food — flood seasons, unwashed vegetables, chop-barrow hygiene, unwashed hands after the toilet. They cause acute hepatitis: a miserable fortnight that almost always resolves fully, leaving immunity behind. There is no chronic disease. The two exceptions worth memorising: **hepatitis A** occasionally darkens a whole household via shared food, and **hepatitis E is dangerous in PREGNANCY** — a pregnant woman with acute hepatitis E can deteriorate with frightening speed; she is a referral, not a wait-and-see.\n\n**By the blood and body fluids: hepatitis B, C and D.** Unsafe injections, unsterile instruments, needlestick injuries, unscreened blood (Ghana's transfusion services now screen), sharing of razors and toothbrushes, sexual transmission, and — critically for Africa — **mother-to-child transmission at birth**, the engine room of chronic infection. **Hepatitis B** and **C** can both become chronic and silent: decades of quiet inflammation that harden into cirrhosis and liver cancer. Hepatitis B is a leading driver of liver cancer seen in Ghanaian hospitals — one reason the hepatitis B story is also a cancer-prevention story. **Hepatitis D** is a parasite of B: it only infects people who already carry hepatitis B, and makes their disease worse.\n\n**The vaccine line matters**: safe, effective vaccines exist for **hepatitis B** (routinely given in Ghana's childhood immunisation schedule, with a birth dose that protects the newborn against mother-to-child transmission) and for hepatitis A where available. There is **no vaccine for hepatitis C** — its prevention is entirely behaviour and blood safety.",
      },
      {
        type: "table",
        title: "The hepatitis family at a glance",
        body: "| Virus | Route | Becomes chronic? | Vaccine? | Special notes |\n|---|---|---|---|---|\n| Hepatitis A | Faecal–oral (food, water, hands) | No | Yes, where available | Households can share it via food |\n| Hepatitis E | Faecal–oral (water) | No | Limited availability | DANGEROUS IN PREGNANCY — refer |\n| Hepatitis B | Blood and body fluids; birth | Yes — the cirrhosis/liver cancer road | Yes — birth dose + series; health workers | Highly endemic in Ghana; the occupational threat |\n| Hepatitis C | Blood (unsafe injections, sharps) | Yes — often silent | No | Prevention = blood safety, sterile equipment |\n| Hepatitis D | Blood; only with hepatitis B | Worsens B | B vaccine protects | rides on B's back |",
      },
      {
        type: "text",
        title: "Recognising and nursing the inflamed liver",
        body: "Acute hepatitis typically arrives in two acts. First the **prodrome** — days of fatigue, appetite loss, nausea, right upper abdominal ache, low fever, muscle aches — read at home as 'malaria' or 'the flu.' Then the **yellow flag**: the whites of the eyes turn yellow first (examine in daylight — under a warm bulb, early jaundice hides), the urine darkens, the stools pale to the colour of clay (bile is not reaching the gut), and the skin may itch. The liver edge is tender under the right ribs. Laboratory liver enzymes rise, and the team's serology identifies the letter.\n\nCare is largely supportive and largely yours: rest paced to the patient's energy (not strict bed imprisonment), hydration, **small frequent meals** (a big plate defeats a nauseated liver; breakfast often goes down best — encourage the morning meal), no **alcohol** in any quantity, and caution with every medicine — the inflamed liver struggles to process them; watch especially for paracetamol overdosing and the 'liver-cleansing' herbal concoctions that so often arrive with the family, which can add insult to injury. Monitor for the **danger signs of fulminant hepatitis**: deepening drowsiness or confusion, bleeding or bruising (clotting factors failing), worsening jaundice, and a shrinking liver — any of these means urgent referral, because a failing acute liver is an emergency.\n\nPrecautions follow the route: for suspected A and E, **enteric precautions and rigorous hand hygiene**; for B and C, **standard precautions** — gloves, careful sharps handling, no shared razors or toothbrushes, and no stigma: these patients eat, talk and live with everyone.",
      },
      {
        type: "callout",
        title: "Your vaccine, your needlestick",
        body: "Hepatitis B is the one blood-borne virus you can be vaccinated against — as a student nurse handling sharps and blood, complete the full series and know your status. And build the reflex now: after ANY needlestick or splash to eyes/mucous — wash immediately, then REPORT the same shift, without delay, to the senior nurse or supervisor so post-exposure care can begin. A needlestick reported late is prevention lost; shame reported is infection contracted. No pricked finger is too small to mention.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Atta, 24, presents with a week of yellow eyes, dark urine and no appetite. His girlfriend, frightened, whispers that the family believes he has been 'poisoned by an enemy' and a traditional healer has prepared a cleansing concoction. Atta himself is more worried about missing work.\n\nHow do you assess, and what do you say?\n\nAnswer: This is acute viral hepatitis until the team's tests say otherwise — the yellow eyes, dark urine and anorexia paint the picture. Explore exposures gently: unsafe injections? shared razors or barber instruments? tattooing? previous transfusion? sexual history? Supportive care: rest, hydration, small frequent meals, strictly no alcohol, no new medicines or herbal concoctions without the team's knowledge — the 'cleansing' drink can injure the liver it claims to rescue. Teach the danger signs (drowsiness, confusion, bleeding, deepening yellow) that mean immediate return. Then the prevention conversation: if this is hepatitis B, his household and girlfriend need counselling, testing and vaccination; his razor and toothbrush stop being communal; and if it settles into a chronic infection, he joins the decades-long monitoring story that protects his future. Counter the poison narrative kindly — the illness has a scientific face, and faces can be read.",
      },
      {
        type: "clinical_pearl",
        body: "Read the eyes in daylight: scleral jaundice appears before skin jaundice, and the yellow that hides under a warm bulb at night is unmistakable at the window in the morning. The full triad — yellow eyes, dark urine, pale stools — means bile is not reaching the gut, and the liver's plumbing is in the story.",
      },
      {
        type: "memory_trick",
        body: "**A and E travel by the gut** (faeces, food, floodwater); **B, C and D ride the blood** (blades, birth, bedside sharps). Vowels from the bowel, consonants from the cut — and E in Expectant mothers is the emergency of the family.",
      },
      {
        type: "quiz_prompt",
        title: "The pregnancy exception",
        body: "A woman at 34 weeks of pregnancy has three days of yellow eyes, vomiting and deepening drowsiness, in a community with a recent flood. Which virus must you think of FIRST, and what is the response?\n\nAnswer: Hepatitis E — faecal–oral, waterborne after flooding, and uniquely lethal in pregnancy. This is an urgent referral, not oral rehydration at home: transport her today, with the notes flagging possible hepatitis E in pregnancy.",
      },
      {
        type: "summary",
        body: "- Hepatitis = liver inflammation; the yellow flag: scleral jaundice (daylight exam), dark urine, pale stools, tender right upper quadrant, nausea, profound fatigue.\n- A and E: faecal–oral, acute, self-limiting, hygiene-prevented; hepatitis E is dangerous in pregnancy — refer.\n- B, C, D: blood and body fluids — injections, sharps, razors, sex, and mother-to-child at birth; B and C become chronic, smouldering toward cirrhosis and liver cancer.\n- Ghana is highly endemic for hepatitis B: childhood immunisation with birth dose; health workers vaccinated and status known; needlestick = wash and report the same shift.\n- Nursing: rest, hydration, small frequent meals, no alcohol, medicine caution (paracetamol, herbal concoctions), enteric precautions for A/E and standard precautions for B/C, and watch for fulminant danger signs (drowsiness, bleeding, deepening jaundice).",
      },
    ],
    questions: [
      {
        topic: "Hepatitis",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which hepatitis viruses are transmitted by the faecal–oral route?",
        options: [
          "A and E",
          "B and C",
          "C and D",
          "B and D",
        ],
        correctIndex: 0,
        explanation:
          "Hepatitis A and E travel through contaminated food, water and hands — hygiene, sanitation and safe water are their prevention. B, C and D ride blood and body fluids: sharps, blades, birth and sex.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Hepatitis",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is hepatitis B vaccination described as 'the nurse's own personal business'?",
        options: [
          "Because nurses are the only group the vaccine works in",
          "Because health workers handle blood and sharps daily — an exposed workforce — and hepatitis B is a vaccine-preventable occupational disease",
          "Because nurses must receive the vaccine instead of using gloves",
          "Because the vaccine also protects against hepatitis C",
        ],
        correctIndex: 1,
        explanation:
          "Every shift brings needles and blood; hepatitis B is far more infectious than HIV by the blood route, and a complete vaccine series protects the worker for life. Gloves and precautions still apply — the vaccine is the private armour behind the public ones. It does not cross-protect against C, for which no vaccine exists.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Hepatitis",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A pregnant woman at 34 weeks develops acute jaundice after recent flooding in her community. Which hepatitis virus is the greatest immediate concern?",
        options: [
          "Hepatitis A",
          "Hepatitis B",
          "Hepatitis E",
          "Hepatitis C",
        ],
        correctIndex: 2,
        explanation:
          "Hepatitis E, spread by contaminated water in flood seasons, carries a high risk of fulminant, deadly hepatitis in pregnancy — particularly the third trimester. She needs urgent referral. A and B matter too, but E is the pregnancy emergency.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Hepatitis",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient with acute hepatitis B is on your ward. His family shares his room, food and basin. Which advice is correct?",
        options: [
          "Isolate the patient completely — hepatitis B spreads by casual contact and shared food",
          "Standard precautions: no sharing of razors, toothbrushes or sharp items; gloves for blood contact; normal shared meals and conversation are safe",
          "The family should stop touching him entirely until the jaundice clears",
          "No precautions are needed at all because he is already jaundiced",
        ],
        correctIndex: 1,
        explanation:
          "Hepatitis B travels in blood and body fluids — not in food, handshakes or shared conversation. Standard precautions plus the personal-items rule protect the household, while the household's testing and vaccination is arranged. Panic isolation adds stigma to illness and prevents nothing.",
        courseSlug: "medical-surgical-nursing-4",
      },
    ],
    flashcards: [
      {
        topic: "Hepatitis",
        front: "Which hepatitis viruses travel by the gut, and which by the blood?",
        back: "Gut (faecal–oral): A and E. Blood and body fluids: B, C and D — D only rides alongside B.",
      },
      {
        topic: "Hepatitis",
        front: "The yellow-flag triad of hepatitis?",
        back: "Yellow sclera (daylight exam), dark 'coca-cola' urine, pale clay-coloured stools — bile is inflamed out of the gut's reach.",
      },
      {
        topic: "Hepatitis",
        front: "Why does the Ghanaian nurse care personally about hepatitis B?",
        back: "Ghana is highly endemic; health workers are exposed daily to blood and sharps; the vaccine is personal armour — complete the series, know your status, report needlesticks the same shift.",
      },
      {
        topic: "Hepatitis",
        front: "The pregnancy emergency of the hepatitis family?",
        back: "Hepatitis E — waterborne after floods, and fulminant in pregnancy, especially the third trimester. Refer urgently.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Global Hepatitis Report",
        year: "2024",
      },
      {
        organization: "Ghana Health Service",
        title: "Expanded Programme on Immunization — Immunisation Schedule",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "15th edition",
        note: "Educational source — verify current edition against your course texts.",
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-4",
    moduleTitle: "The Gut & Liver",
    lessonTitle: "Cirrhosis & Liver Failure",
    description:
      "The liver that healed wrongly — the water belly, the bursting veins, the fogging mind, and the nursing that steadies them all.",
    difficulty: "Hard",
    durationMin: 12,
    objectives: [
      "Explain how chronic inflammation (hepatitis B, alcohol) rebuilds the liver into cirrhosis and produces portal hypertension and liver failure.",
      "Recognise and respond to the four major complications: ascites, variceal bleeding, hepatic encephalopathy and spontaneous bacterial peritonitis.",
      "Apply the nursing measurements and daily care that make deterioration visible early — weight, girth, mental state, urine output and glucose.",
    ],
    tags: ["cirrhosis", "ascites", "encephalopathy", "varices"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Cirrhosis is the liver's badly healed scar. Years of inflammation — in Ghana most often chronic hepatitis B, with alcohol as the great amplifier, and the two frequently together — kill liver cells in waves; the surviving tissue regenerates in nodules wrapped in fibrous scar, until the organ is hard, lumpy and shrunken, its internal plumbing squeezed. Blood that once flowed gently through the liver now meets resistance — **portal hypertension** — and finds detours; the factory functions (clotting factors, albumin, detoxification, sugar storage) all decline at once.\n\nWhat follows is a disease of consequences: the belly fills with water, veins stretch until they burst, the mind fogs, and the fluid that accumulates becomes a garden for infection. This lesson walks the four complications, because they — not the scar itself — are what bring patients through the ward door.",
      },
      {
        type: "text",
        title: "The failing liver: signs on the body",
        body: "Learn the stigmata of chronic liver disease once and you will see them forever: **jaundice**; **spider naevi** — little red spiders with legs on shoulders and chest; **palmar erythema** — red palms; **gynaecomastia** in men, because a liver that cannot clear oestrogens lets them accumulate; **easy bruising** — the clotting-factor factory is closing; **swollen legs** and a **distended, shifting-dullness belly** of ascites — albumin has fallen and portal pressure pushes fluid out; **dilated veins** fanning around the umbilicus — caput medusae, the visible detours of portal hypertension; and often an **enlarged spleen** beneath the left ribs, and wasting of the temples and shoulders despite the swollen belly.\n\nBut the true business of this lesson is the four complications, each with a first-response nurse's answer.",
      },
      {
        type: "table",
        title: "The four complications and the first response",
        body: "| Complication | What it looks like | First nursing response |\n|---|---|---|\n| Ascites | Growing tight belly, breathlessness, weight gain, shifting fluid | Daily weight + girth at a marked point; salt restriction per plan; report; prepare for paracentesis |\n| Variceal bleeding | Haematemesis (fresh or coffee-ground), melaena, faintness, tachycardia | Vital signs, IV access, nil by mouth, urgent team call and referral — treat as major bleed |\n| Hepatic encephalopathy | Reversed day–night sleep, confusion, drowsiness, flapping tremor, musty breath | Mental-state charting, safety, identify triggers (constipation, infection, bleeding, dehydration), report — the team adjusts treatment |\n| Spontaneous bacterial peritonitis | Fever or new confusion in an ascitic patient, abdominal pain | Report urgently — ascitic fluid must be sampled and tested; never treat as malaria |\n\nThe table is the lesson's spine: recognising which door the patient came through is half the response.",
      },
      {
        type: "text",
        title: "The nursing that makes deterioration visible",
        body: "Cirrhosis is a condition of trends — the nurses who chart faithfully are the ones who catch the turn. **Weigh daily** (same scale, same time, after toileting) and **measure abdominal girth at the same marked point** each morning — a rising girth with a falling urine output is ascites collecting; a kilogram gained overnight is a litre of water, not a meal. Chart **mental state** — and take the sleep pattern seriously: the patient who sleeps all day and grows confused at midnight is showing the earliest whisper of **encephalopathy**, before any flapping tremor (extend the wrists, fingers spread — the flap looks like a bird trying to take off). Check **urine output**, because the kidney is the liver's partner in failure, and check **glucose** — a cirrhotic liver stores little sugar, and these patients drift into hypoglycaemia quietly, especially overnight.\n\nCare details with outsized dignity value: small frequent meals with adequate calories and protein (the team adjusts protein when the mind fogs — otherwise malnutrition accelerates everything), a **late-evening snack** (overnight fasting is hard for a liver with no stores), meticulous skin care over stretched ascitic skin, mouth care, gentle mobilization, alcohol history taken kindly and without contempt — judgement heals nobody; the drinker with cirrhosis is a patient with a disease. When **paracentesis** (fluid drainage from the belly) is performed: the patient empties the bladder first, positioning and sterile field per the team, watch blood pressure afterwards (fluid shifts can drop it), and if the patient is febrile, the fluid goes to the laboratory, not the bucket. And for the bleeding varix: nothing oral, vitals, two IV accesses if the team wants them, blood for grouping per protocol, and calm — these bleeds terrify families, and the nurse's steadiness is part of the treatment.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Mr. Okai, 54, has chronic hepatitis B he 'forgot about years ago' and a daily drink he describes as 'only a little.' He arrives with a belly like a drum, swollen legs, and — his wife's main complaint — 'he is fine all day but confused at night, calling out to people who are not there.' His outstretched wrists flap like a startled bird. Last week at home the family gave him a course of 'malaria medicine' for fever.\n\nLay out your priorities for the first 24 hours.\n\nAnswer: This is decompensated cirrhosis — ascites, oedema and encephalopathy on a background of hepatitis B and alcohol. First day: baseline vitals, weight and girth at a marked point; a mental-state and sleep chart; safety for his night-time wandering (bed low, family informed, bell within reach); glucose checked; triggers hunted — ask about constipation, check for fever (febrile ascites needs a tap today, not malaria treatment); fluid, salt and protein plan per the team; nothing by mouth is unnecessary unless bleeding is suspected; NPO only if variceal bleeding appears. Then the long work: hepatitis B treatment engagement, alcohol counselling that treats him as a man and not a diagnosis, nutrition with the late-night snack, and an honest, kind conversation with the wife about what recovery of compensation looks like — and why the clinic visits are now part of their marriage.",
      },
      {
        type: "clinical_pearl",
        body: "Day–night reversal is the earliest whisper of encephalopathy — chart sleep like a vital sign. And in a febrile patient with ascites, the diagnosis is spontaneous bacterial peritonitis until the fluid is tapped and cultured — 'malaria treatment' in this patient is how sepsis hides until the multi-organ failure is complete.",
      },
      {
        type: "memory_trick",
        body: "The failing liver's four troubles: **the Belly swells, the Veins burst, the Mind fogs, and the Fluid gets infected.** Track them with the four numbers that matter: weight, girth, mental state chart, urine output — plus the sugar, because the shrunken liver has no pantry.",
      },
      {
        type: "quiz_prompt",
        title: "The overnight kilogram",
        body: "Your cirrhotic patient's morning weight is 1.2 kg above yesterday's, girth 3 cm greater, urine output falling. What is happening, and what do you do?\n\nAnswer: Ascites is collecting — over a kilogram gained overnight is roughly a litre and more of retained fluid, not food. Report the trend with the girth and urine numbers, expect the team to review the fluid and salt plan and possibly arrange paracentesis, and keep the daily measurements unbroken — same scale, same time, same mark on the abdomen.",
      },
      {
        type: "summary",
        body: "- Cirrhosis = scarred, nodular, shrunken liver from chronic injury (hepatitis B above all in Ghana, amplified by alcohol) → portal hypertension + failing factory functions.\n- Stigmata: jaundice, spider naevi, palmar erythema, gynaecomastia, easy bruising, caput medusae, splenomegaly, wasted temples with a swollen belly.\n- Four complications: ascites (daily weight + girth), variceal bleeding (vitals, IV access, NPO, urgent referral), encephalopathy (day–night reversal first, asterixis, trigger hunt — constipation, infection, bleeding, dehydration), and SBP (fever or new confusion in ascites = tap the fluid, never 'malaria').\n- Cirrhotic nursing numbers: weight, girth, mental state, urine output, glucose — small frequent meals, late-evening snack, skin and mouth care, kind alcohol history.\n- Paracentesis: bladder empty, sterile, watch blood pressure after, febrile = fluid to the laboratory.",
      },
    ],
    questions: [
      {
        topic: "Cirrhosis & Liver Failure",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient with cirrhosis sleeps most of the day and becomes confused and restless at night. What does this pattern most likely represent?",
        options: [
          "Ordinary boredom from prolonged admission",
          "The earliest stage of hepatic encephalopathy — disturbed sleep rhythm precedes obvious confusion",
          "Normal ageing behaviour in an older patient",
          "A side-effect of salt restriction",
        ],
        correctIndex: 1,
        explanation:
          "Reversal of the day–night rhythm is the classic opening act of hepatic encephalopathy, arriving before asterixis or deep confusion. Chart it, make the environment safe, hunt the triggers (constipation, infection, bleeding, dehydration) and report — early recognition lets the team correct the precipitating cause.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Cirrhosis & Liver Failure",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient with known ascites develops fever and new abdominal pain. The family requests 'malaria treatment' as given at home. What is the correct response?",
        options: [
          "Give antimalarials — fever with abdominal signs in Ghana is malaria until proven otherwise",
          "Suspect spontaneous bacterial peritonitis: report urgently — the ascitic fluid needs sampling and testing, with antibiotics guided by results",
          "Reassure and observe — fever is expected with ascites",
          "Increase the diuretic and restrict fluids further",
        ],
        correctIndex: 1,
        explanation:
          "Fever, pain or new confusion in an ascitic patient means infection of the fluid until a tap proves otherwise. SBP is silent, lethal and treatable — the fluid must be sampled and cultured. Empiric malaria treatment in this patient is a well-travelled road to missed sepsis.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Cirrhosis & Liver Failure",
        type: "MCQ",
        difficulty: "Easy",
        stem: "The outstretched wrists of a patient with liver disease show a coarse irregular flapping movement. What is this sign called?",
        options: [
          "Asterixis (liver flap) — seen in hepatic encephalopathy",
          "Chorea — seen in rheumatic fever",
          "Pill-rolling tremor — seen in parkinsonism",
          "Trousseau's sign — seen in low calcium",
        ],
        correctIndex: 0,
        explanation:
          "Asterixis, the liver flap: have the patient extend the wrists with fingers spread for 30 seconds; the lapses of posture look like a bird trying to launch. It signals metabolic brain disturbance from the failing liver. Trousseau's carpal spasm belongs to hypocalcaemia.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Cirrhosis & Liver Failure",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A cirrhotic patient vomits fresh blood on the ward. Which bundle of nursing actions comes first?",
        options: [
          "Vital signs, IV access, nil by mouth, and urgent call to the team — treating it as a major gastrointestinal bleed with likely variceal origin",
          "Offer sips of cold water to calm the stomach",
          "Clean up quietly and observe — variceal bleeds usually stop by themselves",
          "Give the morning tablets orally since breakfast is now missed",
        ],
        correctIndex: 0,
        explanation:
          "A haematemesis in a cirrhotic patient is a variceal bleed until the team says otherwise: it is a major bleed — vitals, IV access, nil by mouth, urgent escalation and likely transfer for endoscopic treatment. Nothing oral, no casual observation, no tablets by mouth: speed and access are the treatment's head start.",
        courseSlug: "medical-surgical-nursing-4",
      },
    ],
    flashcards: [
      {
        topic: "Cirrhosis & Liver Failure",
        front: "The four major complications of cirrhosis?",
        back: "The Belly swells (ascites), the Veins burst (variceal bleeding), the Mind fogs (hepatic encephalopathy), and the Fluid gets infected (spontaneous bacterial peritonitis).",
      },
      {
        topic: "Cirrhosis & Liver Failure",
        front: "The earliest clinical whisper of hepatic encephalopathy?",
        back: "Day–night reversal — sleeping by day, confused at midnight — before asterixis and deep drowsiness. Chart sleep like a vital sign.",
      },
      {
        topic: "Cirrhosis & Liver Failure",
        front: "What does fever in a patient with ascites demand?",
        back: "A tap: spontaneous bacterial peritonitis until the fluid is sampled and cultured — never empiric malaria treatment.",
      },
      {
        topic: "Cirrhosis & Liver Failure",
        front: "Which daily measurements track a cirrhotic patient's course?",
        back: "Weight and abdominal girth at the same mark (fluid), mental-state/sleep chart (encephalopathy), urine output (the kidney partner), and glucose (a liver without stores).",
      },
      {
        topic: "Cirrhosis & Liver Failure",
        front: "Why does the cirrhotic patient bruise and bleed easily?",
        back: "The liver manufactures clotting factors — a failing factory cannot stock the shelves, so bruises, bleeds and prolonged clotting appear.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Global Hepatitis Report",
        year: "2024",
      },
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        year: "2017",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "15th edition",
        note: "Educational source — verify current edition against your course texts.",
      },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-4",
    moduleTitle: "The Gut & Liver",
    lessonTitle: "Peptic Ulcer & Upper GI Bleeding",
    description:
      "The ulcer that erodes a vessel — coffee-ground vomit, tarry stool and the response they demand, plus the roadside pain-killers that quietly start it all.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Explain how Helicobacter pylori and NSAIDs (including self-purchased pain powders) create peptic ulcers in the Ghanaian context.",
      "Recognise the three ulcer complications — bleeding, perforation and obstruction — and apply the first-response nursing bundle.",
      "Teach the recurrence-prevention package: completed H. pylori treatment, NSAID avoidance and regular meals.",
    ],
    tags: ["peptic ulcer", "gi bleeding", "h pylori", "nsaids"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The stomach is a bag of acid strong enough to digest meat, which somehow avoids digesting itself — because a mucus-bicarbonate shield lines its walls. A peptic ulcer is what happens when the shield fails and the acid wins: a raw crater in the stomach or duodenal lining, which in Ghana has two great sculptors. One is **Helicobacter pylori**, the spiral bacterium that colonises the shield and quietly wrecks it — common in our environment, spread through contaminated food, water and household contact. The other is **NSAIDs** — diclofenac, ibuprofen, aspirin — which strip the protective prostaglandins from the stomach wall. And in Ghana, NSAIDs have a uniquely dangerous delivery system: the roadside drug store, where pain powders are bought for every headache, joint ache and 'malaria feelings' — without prescription, without warning, sometimes for years.\n\nAdd smoking and alcohol, skip meals all day at the market, then eat one heavy late meal — and the ulcer has everything it asked for.",
      },
      {
        type: "text",
        title: "The pain story and the three complications",
        body: "The classic pain is a burning or gnawing ache in the epigastrium — the little pit below the breastbone. Teaching-level patterns: **duodenal** ulcer pain classically eases with food and returns hungrily a few hours later (the night pain that wakes at 2 a.m. and is calmed by a glass of milk); **gastric** ulcer pain is often worsened by eating. Bloating, nausea, water brash (the sudden mouthful of sour water) and relief from antacids complete the picture. Many patients endure this story for years, 'managing' with roadside antacids and ulcer mixes.\n\nThe complications are what actually frighten. **BLEEDING**: the crater erodes a vessel — vomiting fresh blood or dark 'coffee-ground' material, or passing **melaena**: black, sticky, tarry, unmistakably foul-smelling stool. Bleeding may also be a slow whisper: the patient who becomes pale, tired and iron-deficient over months with no visible blood — which is why every anaemia work-up asks about black stools. **PERFORATION**: the ulcer eats through the wall — sudden, catastrophic abdominal pain; the belly goes rigid like a board; the patient lies perfectly still because any movement is agony; this is a surgical emergency measured in hours. **OBSTRUCTION**: chronic scarring narrows the stomach's exit — projectile vomiting of undigested food eaten hours (or a day) before, bloating, visible stomach peristalsis, weight loss.\n\nYour first-response bundle for bleeding: vitals (tachycardia is the early sign; a falling blood pressure is late and serious), lie the patient safely flat, **two wide-bore IV accesses** if the team wants them, nil by mouth, oxygen as prescribed, document what was vomited and what was passed (a photo or sample speaks), urine output, blood for grouping and crossmatch per team, and the urgent call — endoscopy where available stops many of these bleeds. For perforation: nil by mouth, IV access, the patient positioned as most comfortable (often still, knees drawn), urgent surgical referral NOW.",
      },
      {
        type: "table",
        title: "The three complications at a glance",
        body: "| Complication | Signature | First response |\n|---|---|---|\n| Bleeding | Haematemesis, coffee-ground vomit, melaena; or silent pallor and anaemia | Vitals, IV access, NPO, urgent team call, crossmatch per protocol; document vomitus/stool |\n| Perfusion (perforation) | Sudden severe pain, board-hard rigid abdomen, patient lies motionless | NPO, IV access, urgent surgical referral — hours decide |\n| Obstruction | Projectile vomiting of old food, bloating, weight loss | NPO, IV fluids, decompression and referral per team |",
      },
      {
        type: "callout",
        title: "Black stool is never nothing",
        body: "Melaena — black, tarry, sticky stool that smells of old blood — means a bleed from the upper gut. It is not 'something I ate' (unless the patient has genuinely taken iron or bismuth), and it never deserves a home remedy week. Ask every pale, anaemic patient about black stools, and every chronic ulcer patient about the roadside pain powders they take. Two questions, one diagnosis, sometimes a life.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Auntie Dede, 48, a kenkey seller, has wrapped her knees in 'pain powders' from the drug store for months — the small sachets she dissolves in water whenever the market floor aches her bones. This morning she fainted at the stall and passed a black tarry stool; she is pale, her pulse is 112, BP 96/60, and she complains the 'ulcer' is back. Her daughter has brought a bottle of the familiar white ulcer medicine.\n\nWhat is happening, and what is your sequence?\n\nAnswer: This is an upper GI bleed, most likely NSAID-induced, on top of a chronic ulcer story — pallor, tachycardia, postural fainting and melaena are the body's honest report. Sequence: vitals with postural check per team practice, safe positioning flat, IV access (two, wide-bore, per team), nil by mouth — the ulcer medicine can wait in the daughter's bag, not in the stomach — urgent medical review, blood for grouping/crossmatch per protocol, monitor vomitus and stools and chart them, urine output. Then the aftercare that prevents round two: a full honest pain-medicine history (how many sachets, how long), the team's safer pain plan (paracetamol-based, per prescriber), testing and completing H. pylori treatment if present, meals that do not skip nine market hours, no alcohol or smoking, and iron per team for the lost blood. Her knees deserve care — but through a prescription, not a sachet.",
      },
      {
        type: "clinical_pearl",
        body: "Coffee above, tar below: vomit that looks like coffee-grounds and stool like road tar are the same blood at two stages of digestion — an upper GI bleed announcing itself at both exits. And a rigid, board-like abdomen that makes the patient lie perfectly still is never dyspepsia; that is a hole in the stomach, and the clock is running.",
      },
      {
        type: "memory_trick",
        body: "The ulcer's three exits: **it Bleeds, it Bursts, it Blocks.** Bleeding = coffee and tar; Bursting = the board belly (hours matter); Blocking = old food coming back up. And the two sculptors: **the bug (H. pylori) and the powders (NSAIDs)** — treat the bug to the last tablet, retire the powders to the prescription.",
      },
      {
        type: "quiz_prompt",
        title: "The board belly",
        body: "A known ulcer patient suddenly screams with abdominal pain and then lies absolutely still, refusing to move; the abdomen is rigid like wood. What is this, and what happens next?\n\nAnswer: Suspected perforation — the ulcer has eaten through the stomach wall. This is a surgical emergency: nil by mouth, IV access, urgent referral NOW; comfort positioning without moving the patient around; no tablets, no fluids, no 'waiting to see'. Hours decide between repair and peritonitis.",
      },
      {
        type: "summary",
        body: "- Ulcer = acid winning over a broken shield; Ghana's sculptors: H. pylori and self-purchased NSAIDs (pain powders), plus smoking, alcohol, skipped meals.\n- Pain patterns: epigastric burning; duodenal eased by food and returning at night; gastric worsened by food — but complications matter far more than patterns.\n- Bleeding: haematemesis or coffee-ground vomit, melaena (black tarry stool), or silent anaemia — vitals, IV access, NPO, urgent review, crossmatch per protocol.\n- Perforation: sudden pain, board-rigid abdomen, motionless patient — NPO, IV, immediate surgical referral; hours decide.\n- Obstruction: projectile vomiting of old food, bloating — NPO, decompression and referral per team.\n- Prevention of round two: complete the full H. pylori course, stop roadside NSAIDs (safer pain plan with the prescriber), regular meals, no alcohol or smoking.",
      },
    ],
    questions: [
      {
        topic: "Peptic Ulcer & GI Bleeding",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A patient describes passing 'black, sticky, tarry stool that smells terrible' for two days. What does this finding represent?",
        options: [
          "Diarrhoea from contaminated food",
          "Melaena — digested blood from an upper gastrointestinal bleed",
          "A side-effect of eating dark garden eggs",
          "Bile-stained stool from gallbladder disease",
        ],
        correctIndex: 1,
        explanation:
          "Melaena is blood that has travelled through the gut and been digested — black, sticky, tarry and characteristically foul. Iron tablets and bismuth can mimic the colour, but the true stool of a bleed demands urgent assessment.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Peptic Ulcer & GI Bleeding",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which nursing sequence is correct for a patient who has just vomited fresh blood from a suspected ulcer?",
        options: [
          "Give oral fluids to 'wash the stomach', then observe for one hour",
          "Vital signs, IV access, nil by mouth, urgent call to the team — with blood for grouping and crossmatch per protocol",
          "Encourage a soft meal to 'coat the ulcer'",
          "Ambulate the patient to the laboratory personally for tests",
        ],
        correctIndex: 1,
        explanation:
          "An upper GI bleed is a volume emergency first: vitals for the trend, IV access while veins are still easy, nil by mouth for likely endoscopy, urgent escalation, and blood prepared per protocol. Oral fluids and food are contraindicated; a staggering walk to the lab is how syncopal patients fall.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Peptic Ulcer & GI Bleeding",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient with a long-standing ulcer develops sudden, severe abdominal pain and lies motionless with a rigid, board-like abdomen. What has most likely happened?",
        options: [
          "Simple indigestion from a heavy meal",
          "Perforation of the ulcer — a surgical emergency",
          "Gastroenteritis beginning",
          "A normal ulcer pain flare",
        ],
        correctIndex: 1,
        explanation:
          "Perforation is the classic surgical catastrophe of ulcer disease: the acid and gastric contents spill into the peritoneal cavity, the belly guards and hardens into a board, and the patient lies still because movement is agony. Nil by mouth, IV access and immediate surgical referral — hours decide.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Peptic Ulcer & GI Bleeding",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which teaching point best prevents ulcer recurrence after treatment in Ghana?",
        options: [
          "Complete the full Helicobacter pylori course exactly as prescribed, stop buying NSAID pain powders, eat regular meals, avoid alcohol and smoking",
          "Take antacids whenever pain comes, then stop when comfortable",
          "Continue the roadside pain powders but add the white ulcer medicine on top",
          "Eat one large meal at night to keep the stomach 'covered' while sleeping",
        ],
        correctIndex: 0,
        explanation:
          "Recurrence prevention is a package: the H. pylori infection must be fully cleared (finishing a multi-drug course — stopping early breeds failure and resistance), the NSAID habit retired for a safer pain plan, the meal rhythm steadied, and the irritants dropped. Symptom-driven antacid snacking and stacked roadside medicines are how the next bleed is arranged.",
        courseSlug: "medical-surgical-nursing-4",
      },
    ],
    flashcards: [
      {
        topic: "Peptic Ulcer & GI Bleeding",
        front: "The two great sculptors of peptic ulcers in Ghana?",
        back: "Helicobacter pylori (the bug that wrecks the mucus shield) and NSAIDs (the pain powders that strip the stomach's protection) — often on a background of skipped meals, alcohol and smoking.",
      },
      {
        topic: "Peptic Ulcer & GI Bleeding",
        front: "The three exits of an ulcer?",
        back: "It Bleeds (coffee-ground vomit, melaena), it Bursts (perforation — board-hard abdomen, surgical emergency), it Blocks (obstruction — projectile vomiting of old food).",
      },
      {
        topic: "Peptic Ulcer & GI Bleeding",
        front: "First-response bundle for haematemesis?",
        back: "Vitals with trend, IV access early, nil by mouth, urgent team call, blood grouping/crossmatch per protocol, document what is vomited and passed, monitor urine output.",
      },
      {
        topic: "Peptic Ulcer & GI Bleeding",
        front: "What is melaena and what does it mean?",
        back: "Black, sticky, tarry, foul stool — digested blood from an upper GI bleed. Never dismiss it as food; ask every anaemic patient about it.",
      },
    ],
    sources: [
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        year: "2017",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "15th edition",
        note: "Educational source — verify current edition against your course texts.",
      },
    ],
  },

  // ── 14 ─────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-4",
    moduleTitle: "The Gut & Liver",
    lessonTitle: "Nutritional Support in Illness",
    description:
      "Feeding the patient who cannot eat — the quiet malnutrition of hospitals, the fortified family stew, and the tube that keeps the gut alive.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Screen for malnutrition risk on admission and weekly using weight history, intake, appetite and illness burden.",
      "Apply the feeding route hierarchy — oral, enteral, parenteral — and the practical skills of each at ward level.",
      "Deliver safe nasogastric feeding and recognise the refeeding danger signs in the severely malnourished patient.",
    ],
    tags: ["nutrition", "malnutrition", "nasogastric feeding", "refeeding"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "There is a quiet epidemic inside our hospitals. Patients arrive nourished and leave thinner: the illness burns more, the appetite falls, the tray arrives cold or not at all, the family brings food the disease forbids or nothing while they travel, and 'feeding' slips below 'real treatment' in the day's priorities. Yet wounds heal out of protein, immune systems run on vitamins, and muscles walk out of hospital on calories. Food is treatment — delivered by mouth, tube or vein — and the nurse is its custodian.\n\nThis lesson covers the eyes that spot malnutrition, the hierarchy of feeding routes, the practical craft of nasogastric feeding, and the one danger (refeeding syndrome) that humility before food demands.",
      },
      {
        type: "text",
        title: "Finding the quiet malnutrition",
        body: "Screen at admission and re-screen weekly: ask about **unplanned weight loss** (clothes looser? belt a hole tighter? rings sliding?) and over what time; ask what the patient has actually **eaten** this week, not what is served; note **acute illness** — fever, infection, surgery — which raises needs while cutting appetite; and examine: **temporal hollowing** (the temples sink), wasting of the shoulders and thighs, loose skin folds, dry fragile skin, a swollen belly with thin limbs, and — always — **look inside the mouth**: sores, thrush (the white patches that scrape off sorely), broken teeth and ill-fitting dentures quietly starve patients who 'just don't feel like eating.' Weight and height with a BMI calculation complete the picture where scales exist.\n\nThe hands-on principle: **report the poor eater as a clinical finding, not a personality.** 'Diet taken: two spoons of porridge all day' on day three is a fact with consequences, exactly like a fever.",
      },
      {
        type: "table",
        title: "The feeding route hierarchy",
        body: "| Route | When it is chosen | The nurse's focus |\n|---|---|---|\n| Oral (always first) | Swallow safe, gut working, intake possible | Positioning upright, assistance with unhurried feeding, fortified foods, mouth care before and after, record actual intake |\n| Enteral — nasogastric tube | Swallow unsafe (stroke, head injury) or intake impossible for days | Position confirmation per protocol, head elevated 30–45° during and after feeding, rate and residuals per team, mouth care every shift, nose pressure checks |\n| Parenteral — IV | The gut cannot be used at all (obstruction, prolonged ileus) — team decision | Strict asepsis per protocol, line care, monitoring — and remember: IV fluid is not food |\n\nRule of thumb: **if the gut works, use it.** The gut that is fed defends itself; the gut that is starved translocates its own bacteria into the blood.",
      },
      {
        type: "text",
        title: "Oral first: the craft of feeding a tired patient",
        body: "Make the food worth eating: **energy- and protein-dense and small-frequent** — six small servings beat three impossible plates. Fortify what the family already cooks: a spoon of milk powder or groundnut paste stirred into the porridge or soup; an egg beaten into rice or koko before serving; small fish, beans, milk and groundnut soup are the ward's protein allies. Serve the **main meal when the patient's energy is highest** — for most, breakfast. **Assist, don't hurry**: sit the patient up (never feed a flat patient), allow time between spoonfuls, engage the family attendant as the feeder they already are — with instructions (small spoonfuls, chin slightly down? encourage, never pour). **Mouth care before and after** — a clean, moist mouth makes food possible; a mouth with thrush makes every meal torture (report for treatment). **Record actual intake** honestly on the food chart — 'diet taken: little' must change the plan. And weigh weekly, same scale, same time, and treat a falling weight as a result worth investigating: pain, nausea, constipation, depression, money, dentures — feeding problems always have a reason.",
      },
      {
        type: "text",
        title: "The nasogastric route: feeding with respect for the airway",
        body: "When the swallow is unsafe (think of the stroke patient from your Brain & Nerves lessons) or intake impossible for days, the team will order nasogastric feeding. The ward-level disciplines: **confirm tube position per your facility's protocol before every feed** (aspiration of gastric content with pH testing, or x-ray after initial placement — never assume, never rely on 'it was fine this morning'); **head of bed up 30–45 degrees during and for a while after feeding** — feeding a flat patient is pouring food toward the lungs; check **residual volumes and rates per the team's plan**; **flush the tube** as directed; **mouth care every shift** — the tube-fed mouth still needs cleaning, and the nose needs checking for pressure damage from the fixation tape. Watch for **bloating, diarrhoea and regurgitation** — report them rather than adjusting alone. And remember what the family sees: a tube is frightening; explain it as a bridge ('the food goes in until the swallow returns'), never as a surrender.",
      },
      {
        type: "callout",
        title: "Fluids are not food",
        body: "A week on 'IV fluids only' is a week of starvation with a cannula in it — 5% dextrose is sugar water, not nutrition; it cannot hold a wound together or defend a lung. The patient who cannot eat for days needs a feeding decision, not a drip to soothe the chart. Escalate the question: 'Doctor, this is day five of fluids only — what is the feeding plan?'",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Mr. Boadi, 67, day four after a stroke, has a weak swallow not yet formally assessed. He has been on IV fluids since admission, no NG tube, no diet plan. The family brings thin porridge 'so at least he takes something small' and tips spoonfuls into a mouth that coughs on them. He is drowsy, his temples are hollowing, and the pressure over his sacrum is beginning to redden.\n\nWhat is going wrong, and what do you do?\n\nAnswer: Three quiet failures are stacking: starvation (fluids are not food), aspiration risk (feeding an unassessed weak swallow by loving hands), and pressure damage (malnutrition plus immobility). Actions: escalate today — the swallow needs formal assessment and the team a feeding decision (NG placement if the swallow is unsafe); kindly stop the family's oral feeding and explain the lungs, replacing their help with a real role (mouth care, positioning, hand grooming); start the pressure-care package; chart intake and weight; once the route is set, feed early, feed enough, and re-check the mouth. The family's porridge is love — redirect it, don't discard it: porridge fortified with milk and groundnut, delivered by tube if needed, is the same love with a safer road.",
      },
      {
        type: "clinical_pearl",
        body: "Refeeding syndrome is the trap of generosity: the severely malnourished patient fed suddenly and richly shifts minerals (phosphate, potassium, magnesium) into cells and can develop weakness, palpitations, ankle swelling, confusion, and dangerous rhythms in the first days. The principle is start low, go slow, with the team's monitoring — report any new weakness, swelling or irregular pulse in the first week of refeeding. The body that has starved must be reintroduced to abundance gradually, like a long faster to the noonday sun.",
      },
      {
        type: "memory_trick",
        body: "The route hierarchy: **Mouth before Machine, Tube before Vein.** For the oral craft: **F-F-M-M** — Fortify the family food, Feed at the patient's best hour, Mouth care before and after, Measure what is actually eaten. The NG trio: **confirm, elevate, flush** — position, 30–45°, care.",
      },
      {
        type: "quiz_prompt",
        title: "The five-day question",
        body: "Why does 'the patient is on IV fluids' not answer the question 'what is the patient being fed'?\n\nAnswer: Because intravenous dextrose and saline are water, a little salt and a little sugar — no protein, no meaningful energy, no vitamins. They keep a vein busy while the body quietly burns its own muscle. Beyond a few days, a real feeding decision — oral, nasogastric, or parenteral — has to be made, and the nurse is usually the one who has to ask for it.",
      },
      {
        type: "summary",
        body: "- Screen on admission and weekly: unplanned weight loss, actual intake, appetite, illness burden, mouth examination, BMI where possible; report the poor eater as a finding.\n- Route hierarchy: oral first (fortify family foods, small frequent, best-hour feeding, mouth care, honest intake records); enteral NG for unsafe swallow or impossible intake; parenteral only when the gut cannot work — a team decision.\n- NG discipline: confirm position per protocol before feeding, head elevated 30–45°, rate and residuals per plan, flushes, mouth and nose care every shift.\n- IV fluids are not food — escalate a feeding plan when intake has been impossible for days.\n- Refeeding awareness in the severely malnourished: start low, go slow; report new weakness, palpitations, swelling or confusion in the first week.\n- Involve the family attendant as a trained ally — redirect their feeding energy to the safe route.",
      },
    ],
    questions: [
      {
        topic: "Nutritional Support",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which feeding route is preferred whenever the gut works and the swallow is safe?",
        options: [
          "Intravenous nutrition, because it is most precise",
          "Oral feeding — it is safest, most physiological and social, and supports the gut's own defences",
          "Nasogastric feeding, to guarantee measured volumes",
          "No feeding until all investigations are complete",
        ],
        correctIndex: 1,
        explanation:
          "Mouth before machine: oral feeding keeps the gut defensive, the patient human, and the family involved — and it is free. Tubes and veins exist for the gut or swallow that has failed, not for convenience or precision theatre.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Nutritional Support",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is the head of the bed elevated 30–45 degrees during and after nasogastric feeding?",
        options: [
          "To speed the flow of the feed through the tube",
          "To prevent reflux and aspiration of feed into the lungs",
          "To make the patient more visible to staff",
          "To reduce the patient's appetite and prevent nausea",
        ],
        correctIndex: 1,
        explanation:
          "A reclined, head-up patient keeps gravity pulling feed toward the stomach, away from the airway. Feeding a flat patient pours the meal toward the lungs — aspiration pneumonia is the classic, preventable complication of careless tube feeding.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Nutritional Support",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A severely malnourished patient begins feeding and on day 3 develops new weakness, palpitations and ankle swelling. Which complication should you report immediately?",
        options: [
          "Refeeding syndrome — mineral shifts into cells with possible dangerous rhythm disturbance",
          "Simple overfeeding that will settle on its own",
          "Expected adjustment to hospital diet",
          "A reaction to the feeding tube itself",
        ],
        correctIndex: 0,
        explanation:
          "Refeeding syndrome strikes the long-starved once abundance returns: phosphate, potassium and magnesium pour into cells as metabolism restarts, producing weakness, oedema, confusion and arrhythmias that can kill. The answer is not stopping food but reporting urgently — the team monitors and corrects electrolytes while feeding 'low and slow'.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Nutritional Support",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which admission findings point most strongly to malnutrition risk?",
        options: [
          "Loose clothes and belt tightened a hole further, eating 'very little' for weeks, sinking temples, and painful mouth sores",
          "A good appetite with a recent heavy cold",
          "Occasional heartburn after fried food",
          "Mild ankle swelling after a long trotro journey",
        ],
        correctIndex: 0,
        explanation:
          "Unplanned weight loss (the belt and wardrobe are the honest scales where numbers are missing), poor intake, temporal and shoulder wasting, and mouth problems that make eating painful — together they are the screen for quiet malnutrition. Screening weekly turns 'poor eater' into a treatable clinical problem.",
        courseSlug: "medical-surgical-nursing-4",
      },
    ],
    flashcards: [
      {
        topic: "Nutritional Support",
        front: "The feeding route hierarchy?",
        back: "Oral first, then enteral (nasogastric) when the swallow is unsafe or intake impossible, then parenteral (IV) only when the gut cannot work — a team decision.",
      },
      {
        topic: "Nutritional Support",
        front: "Three disciplines of safe NG feeding?",
        back: "Confirm tube position per protocol before feeding; head of bed 30–45 degrees during and after; rate/residuals per plan with flushes — plus mouth and nose care every shift.",
      },
      {
        topic: "Nutritional Support",
        front: "How can family foods be fortified at ward level?",
        back: "Milk powder or groundnut paste stirred into porridge and soups, an egg beaten into rice or koko, small frequent protein-rich servings — fish, beans, milk, groundnut soup.",
      },
      {
        topic: "Nutritional Support",
        front: "What is refeeding syndrome and its warning signs?",
        back: "Mineral shifts (phosphate, potassium, magnesium) into cells when the starved patient feeds — watch for new weakness, palpitations, ankle swelling, confusion in the first week; report and feed low and slow.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "e-Library of Evidence for Nutrition Actions (eLENA)",
      },
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        year: "2017",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "15th edition",
        note: "Educational source — verify current edition against your course texts.",
      },
    ],
  },

  // ── 15 ─────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-4",
    moduleTitle: "Cells Out of Control",
    lessonTitle: "Cancer: When Cells Forget the Rules",
    description:
      "The biology in one honest lesson — how growth goes rogue, how it travels, and the warning signs that deserve an assessment, not a proverb.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Explain cancer as accumulated rule-breaking by one cell line — growth that ignores stop signals, death and boundaries.",
      "Distinguish benign from malignant tumours, and describe the lymph, blood and direct routes of spread.",
      "Outline the treatment modalities and their nursing implications, and list the warning signs that call for assessment.",
    ],
    tags: ["cancer", "oncology", "metastasis", "warning signs"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every healthy cell lives by three house rules: divide only when instructed, stop when crowded, and die when damaged or too old. Cancer begins when one cell's instruction manual gains errors — **mutations** — that jam the accelerator (oncogenes stuck 'on') and cut the brakes (tumour suppressor genes stuck 'off'). Its descendants inherit the errors and multiply into a **tumour**: a clone of citizens that no longer obey the community.\n\nA Ghanaian anchor makes this biology personal: sickle cell disease is also a story of misbehaving cells, but of a completely different kind — a single inherited instruction written into every cell from birth. Cancer's rule-breaking is **acquired**, cell by cell, over years — which is precisely why early detection, and the removal of habits and infections that write errors into genes (tobacco, alcohol, hepatitis B, HPV), can change the story.",
      },
      {
        type: "text",
        title: "Benign versus malignant: the two kinds of rule-breaking",
        body: "A **benign** tumour grows slowly, keeps to itself inside a capsule, pushes neighbours aside like a well-behaved crowd, and stays where it began — a fibroadenoma of the breast, a lipoma under the skin. It is dangerous only by position or size (a benign tumour closing an airway is not harmless), but it does not travel.\n\nA **malignant** tumour — cancer — breaks the third rule too: it **invades** through tissue boundaries and sends settlers into the **lymph** vessels (breast cancer's first station is usually the armpit nodes), into the **blood** (favorite distant fields: liver, lungs, bone, brain), and sometimes across body cavities (ovarian cancer seeding the peritoneum). That spread is **metastasis**, and it is why a lump in the breast can announce itself years later as back pain, breathlessness or jaundice.\n\nTwo complementary scales describe what you meet: **grading** — how wild the cells look under the microscope — and **staging** — how far the disease has travelled, classically the **TNM** system: size/depth of the **T**umour, node involvement (**N**), and distant **M**etastases. Staging is the sentence that decides the story: early and contained disease can often be cured; late spread shifts the goal toward prolonging life and relieving suffering — which is why the next lesson, on the cancers that Ghana sees late, matters so much.",
      },
      {
        type: "table",
        title: "Benign versus malignant",
        body: "| Feature | Benign | Malignant |\n|---|---|---|\n| Growth | Slow, steady | Often faster, uncontrolled |\n| Boundaries | Encapsulated — a wall | Invasive — crosses into neighbours |\n| Spread | None | Lymph, blood, cavities — metastasis |\n| Recurrence after removal | Rare | Possible, especially if incompletely removed |\n| Effect on the body | Pressure and position effects | Local destruction, bleeding, obstruction, weight loss, distant organ failure |\n| Management | Often observation or simple removal | Surgery, chemotherapy, radiotherapy, palliative care — staged by TNM |",
      },
      {
        type: "text",
        title: "Treatment and the nurse's lane",
        body: "**Surgery** removes the contained disease — your perioperative module covers the theatre craft; on the ward it means wound care, body-image grief (a breast removed, a colostomy created) and honest recovery support. **Chemotherapy** poisons fast-dividing cells — cancer's weakness, but also the marrow's and the gut's: expect **nausea** (antiemetics per team, small frequent meals), **hair loss** (usually reversible — say so, and let the patient grieve it), **marrow suppression** — the nadir of white cells days after each cycle: **hand hygiene becomes clinical treatment, and any fever is an emergency to report**, not a waiting game; and handle the patient's excretions with gloves for the period your protocol defines after each dose, protecting yourself and others. **Radiotherapy** treats a local field: fatigue, and skin in the field needing mild washing, nothing scraped, no unprescribed lotions or herbal paints; head-and-neck fields add mouth soreness — soft food and gentle mouth care become the day's real medicine. **Palliative care** runs alongside, not after — you will meet it properly in a few lessons.\n\nAnd the word itself: in Ghana, 'cancer' arrives wrapped in fear, secrecy and spiritual interpretation — which is part of why patients arrive late. Your words at the bedside can open the door to early treatment or push a family toward a nine-month herbal detour. Listen first, name gently, and always point toward what can be done.",
      },
      {
        type: "callout",
        title: "The warning signs that deserve assessment",
        body: "Unexplained and persistent: a LUMP anywhere; WEIGHT LOSS (a dress size without trying); a SORE that will not heal; unusual BLEEDING (after sex, between periods, in urine or stool, from a nipple); a CHANGE in bowel or bladder habit; a COUGH or HOARSENESS lasting beyond a few weeks; a MOLE that changes shape, colour or size. None of these is a diagnosis — but every one of them, lasting more than a few weeks, is an assessment, not a proverb, not a fast, not a herbal course. The body writes its warnings politely; the tragedy is in ignoring the letter.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Madam Yaa, 58, noticed a breast lump ten months ago. It did not pain, so she 'managed' it with a herbal paste and prayer. Now the skin over it has broken, the mass is fixed to the chest wall, and she has lost a dress size. Her son, angry and grieving, demands to know 'what stage this is and whose fault it is.'\n\nWhat is your role in this conversation?\n\nAnswer: Truth with kindness, and no blame in either direction. The late-presentation story is a system's story (and the lesson for your community work — cancer usually does NOT pain early, so pain is a late visitor, and 'no pain' never means 'no problem'). Now: gentle wound care for the fungating area (odour, drainage, comfort — palliative skills), pain assessment and escalation, facilitation of the surgical and oncology referral with honest staging conversations, and support for the son — his anger is grief looking for an address. And when you next run a health talk, this is the story that teaches the painless-lump lesson better than any flip chart.",
      },
      {
        type: "clinical_pearl",
        body: "A painless lump deserves MORE suspicion than a painful one, not less — pain arrives late in cancer's story. The woman who says 'it doesn't hurt so I didn't come' is speaking the exact sentence this lesson exists to retire.",
      },
      {
        type: "memory_trick",
        body: "**Benign is fenced; Malignant marches.** And the warning-sign list fits a Ghanaian image: watch the **L-W-S-B-C-C-M** — Lump, Weight, Sore, Bleeding, Change of habit, Cough, Mole. One letter lasting weeks = one appointment.",
      },
      {
        type: "quiz_prompt",
        title: "Where do breast cancer settlers go first?",
        body: "A breast lump is diagnosed as malignant. Which lymph node station does the examining clinician check first, and why?\n\nAnswer: The axillary (armpit) nodes on the same side — the breast's lymph drains there first, so it is the earliest relay of spread; enlarged, hard, fixed axillary nodes reshape both staging and treatment. It is why every breast examination includes the armpits.",
      },
      {
        type: "summary",
        body: "- Cancer = one cell line with accumulated mutations: growth 'on', brakes 'off', death ignored — acquired, unlike inherited cell disorders such as sickle cell.\n- Benign: slow, encapsulated, no spread; malignant: invasive, spreading by lymph (nodes), blood (liver, lung, bone, brain) and across cavities — metastasis.\n- Grading = how wild the cells look; staging = how far the disease has travelled (TNM — tumour, nodes, metastases) — staging decides the story's direction.\n- Treatment: surgery (wound, body image), chemotherapy (nausea, hair loss, marrow suppression — fever = emergency; gloves with excretions per protocol), radiotherapy (skin and mouth care in the field, fatigue).\n- Warning signs: unexplained lump, weight loss, non-healing sore, unusual bleeding, habit change, persistent cough/hoarseness, changing mole — assessment, not assumption.\n- Words matter: the nurse's framing opens or closes the door to early treatment.",
      },
    ],
    questions: [
      {
        topic: "Cancer Biology",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What feature most fundamentally separates a malignant tumour from a benign one?",
        options: [
          "Its size at discovery",
          "Its ability to invade surrounding tissues and spread to distant sites",
          "The fact that it causes pain while benign tumours never do",
          "Its colour on imaging",
        ],
        correctIndex: 1,
        explanation:
          "Malignancy is defined by invasion and metastasis — malignant cells cross tissue boundaries, enter lymph and blood, and seed distant organs. Size, pain and appearance can overlap in both kinds; the march beyond the capsule is the dividing line.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Cancer Biology",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient on chemotherapy develops a fever of 38.5 °C during the nadir after a cycle. Why is this treated as an emergency rather than observed?",
        options: [
          "Fever is expected after chemotherapy and always self-limiting",
          "Chemotherapy suppresses the bone marrow, leaving too few neutrophils to fight infection — sepsis can race ahead untreated",
          "The fever means the cancer has already spread",
          "It only matters if the patient also has a rash",
        ],
        correctIndex: 1,
        explanation:
          "Febrile neutropenia is an oncological emergency: the marrow's defensive cells are at their lowest just after a cycle, so a modest fever can be the first and only sign of a sepsis that will not be contained without urgent treatment. Report immediately — hand hygiene in these weeks is literally protective medicine.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Cancer Biology",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What does the TNM staging system describe?",
        options: [
          "The aggressiveness of individual cancer cells under the microscope",
          "The extent of disease — the size/depth of the primary tumour, lymph node involvement, and distant metastases",
          "The patient's nutritional and performance status",
          "The number of chemotherapy cycles completed",
        ],
        correctIndex: 1,
        explanation:
          "TNM answers 'how far has it travelled?': Tumour (size and depth of invasion), Nodes (regional lymph involvement), Metastases (distant spread). Grading, not staging, describes how wild the cells themselves look; staging decides between curative and palliative paths.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Cancer Biology",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A woman reports a breast lump she has watched for two months. 'It doesn't pain at all,' she says, reassured. What is the correct teaching?",
        options: [
          "Painless lumps are almost always harmless",
          "Pain is a late visitor in cancer — a painless lump that persists deserves assessment without delay",
          "She should wait and only report if it begins to pain",
          "Painlessness means it is already too late for treatment",
        ],
        correctIndex: 1,
        explanation:
          "The painless persistent lump is the classic early cancer presentation — which is why it is so often ignored. Assess it: most lumps prove benign, but the ones that matter are found precisely because someone refused to be reassured by silence. 'Too late' is decided by staging, never by the presence or absence of pain.",
        courseSlug: "medical-surgical-nursing-4",
      },
    ],
    flashcards: [
      {
        topic: "Cancer Biology",
        front: "Benign versus malignant in one line?",
        back: "Benign is fenced — slow, encapsulated, no spread; malignant marches — it invades boundaries and metastasises via lymph, blood and body cavities.",
      },
      {
        topic: "Cancer Biology",
        front: "What does TNM stand for?",
        back: "Tumour (size/depth of the primary), Nodes (regional lymph spread), Metastases (distant spread) — the staging answer to 'how far has it travelled?'",
      },
      {
        topic: "Cancer Biology",
        front: "Why is fever in a chemotherapy patient an emergency?",
        back: "Febrile neutropenia: marrow suppression leaves few defenders, so a modest fever can be sepsis racing ahead — report immediately.",
      },
      {
        topic: "Cancer Biology",
        front: "List the persistent warning signs that demand assessment.",
        back: "Unexplained lump, weight loss, non-healing sore, unusual bleeding, change in bowel or bladder habit, cough/hoarseness over weeks, and a changing mole.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Cancer Control: Knowledge into Action — WHO Guide for Effective Programmes",
        year: "2007",
      },
      {
        organization: "Ghana Health Service",
        title: "National Strategy for Cancer Control in Ghana",
        year: "2012",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "15th edition",
        note: "Educational source — verify current edition against your course texts.",
      },
    ],
  },

  // ── 16 ─────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-4",
    moduleTitle: "Cells Out of Control",
    lessonTitle: "Common Cancers in Ghana",
    description:
      "Breast, cervix, prostate, liver and the child with the swelling jaw — the five stories Ghana tells too late, and the screening that rewrites them.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the commonest cancers in Ghana and their early whispers versus the pictures they present late.",
      "Explain the screening and prevention tools available in Ghana — breast self-examination, clinical breast examination, VIA and Pap smear, HPV vaccination, and hepatitis B vaccination.",
      "Analyse the late-presentation problem in Ghana and the nurse's community role in changing it.",
    ],
    tags: ["breast cancer", "cervical cancer", "screening", "ghana"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Ask any Ghanaian oncology nurse for the one pattern that repeats, and the answer is the same: **late presentation**. The breast lump arrives with the skin already broken; the cervical cancer arrives with a fungating mass and a fistula; the liver cancer arrives with weeks left. Why? A lump that does not pain feels ignorable; the word 'cancer' carries fear and secrecy — some families hide a diagnosis like a disgrace, others read it as a spiritual attack and route the patient to the herbalist first; distance and cost stretch the journey; and screening simply has not reached most women.\n\nThis lesson takes the five cancers Ghana sees most — **breast, cervix, prostate, liver, and childhood Burkitt lymphoma** — and pairs each with its early whisper and its detection tool. These are the stories where your health talks, your clinic vigilance and your community nursing literally move patients from one column to the other.",
      },
      {
        type: "text",
        title: "Breast cancer: the painless lump that waits",
        body: "The commonest cancer in Ghanaian women. Its early whisper is a **painless, hard, irregular lump** — often in the upper outer quadrant — noticed by chance in the bath. Its late picture is the fixed mass, skin dimpling, nipple retraction or bloody discharge, 'orange-peel' skin (peau d'orange — lymph drainage blocked), ulceration, and swollen armpit nodes. The detection tools are beautifully layered: **monthly breast self-examination** (look in the mirror for shape and skin changes, then feel with the finger-pads in circles over each breast and armpit — a few days after the period ends, or the same date monthly after menopause); **clinical breast examination** at the clinic (the professional set of hands); and **imaging** — ultrasound for the young, dense breast, and mammography from the forties where available. Teach it in plain Ghanaian English: **'every woman from her twenties should know her own breasts the way she knows her own kitchen floor — anything new, come.'** Most lumps are benign (fibroadenomas in the young, cysts, fibrocystic change) — but 'most' is not a diagnosis, and every persistent lump is a clinic visit.",
      },
      {
        type: "text",
        title: "Cervical cancer: the cancer a vaccine can prevent",
        body: "Cervical cancer is caused by a virus — **human papillomavirus (HPV)**, transmitted sexually, with infection common and usually silent. Two preventions make it unique among the common cancers. **HPV vaccination of girls before exposure** — the programme targets ages 9–14, ideally before sexual debut, in line with WHO guidance. **Screening of adult women** from the mid-twenties: the **Pap smear** (cells taken from the cervix for the laboratory) and, closer to the Ghanaian frontline, **VIA — visual inspection with acetic acid**: the nurse cleans the cervix with ordinary vinegar (dilute acetic acid); pre-cancer turns **white** and can be **treated the same visit** with cryotherapy — 'see and treat,' a low-technology triumph that district facilities can run. Early whispers: bleeding between periods, **bleeding after sex**, persistent watery or foul discharge. Late picture: pain, foul fungating mass, weight loss. The destigmatising sentence worth teaching everywhere: **HPV is an infection, not a moral verdict** — it is caught by ordinary sexual life, and it is screened and treated like any other health problem. Treatment for established disease is surgical and radiotherapeutic — Ghana's radiotherapy centres serve the nation from Accra and Kumasi.",
      },
      {
        type: "text",
        title: "Prostate, liver, and the child with the jaw",
        body: "**Prostate cancer** is the commonest cancer in Ghanaian men. Its trap is that urinary symptoms — weak stream, hesitancy, nocturia — are usually BENIGN enlargement at this age; prostate cancer announces itself later, sometimes first as **bone pain in the back and hips** (metastases to bone). Older men with urinary changes deserve assessment, and men with persistent back or hip pain deserve the question behind the question. Screening with PSA and digital rectal examination is a team-level discussion — your job is the symptom vigilance and the referral.\n\n**Liver cancer** in Ghana stands largely on the shoulders of **chronic hepatitis B** (lesson 11's smouldering story), with alcohol as the amplifier. It presents late: weight loss, right upper abdominal pain and a mass, jaundice, rapid wasting. The prevention is the one already invented: **hepatitis B vaccination is literally an anti-cancer vaccine** — the first vaccine in history that prevents a human cancer — plus alcohol care and surveillance of the chronically infected.\n\nAnd the child: **Burkitt lymphoma** — the fastest-growing human tumour, endemic in Ghana's savannah belt, presenting as a rapidly **swelling jaw or cheek** (loose displaced teeth), an abdominal mass, or both. The rule that saves children: **a jaw or facial swelling in a child is cancer until proven otherwise** — and here speed is everything, because Burkitt is also among the most chemotherapy-responsive of all cancers. The child who reaches treatment early is very often the child who is cured; the child who waits a month at the herbalist's is very often not.",
      },
      {
        type: "table",
        title: "The Ghana five: early whisper, tool, prevention",
        body: "| Cancer | Early whisper | Detection tool | Prevention |\n|---|---|---|---|\n| Breast (women) | Painless hard lump; skin or nipple change | Monthly self-exam, clinical breast exam, ultrasound/mammography | Breast awareness from the twenties; prompt assessment of any change |\n| Cervix (women) | Bleeding between periods or after sex; watery discharge | Pap smear; VIA see-and-treat | HPV vaccination of girls 9–14; screening from mid-twenties |\n| Prostate (men) | Urinary changes; unexplained back/hip bone pain | Assessment, PSA and rectal examination per team | Symptom vigilance in older men; early referral |\n| Liver (both) | Weight loss, right upper abdominal pain, mass | Ultrasound, AFP per team; surveillance of chronic hepatitis B | Hepatitis B vaccination; alcohol care |\n| Burkitt lymphoma (children) | Rapidly swelling jaw or cheek; abdominal mass | Urgent referral and biopsy | Speed: a child's facial swelling is cancer until proven otherwise |",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Akosua, 34, a teacher, attends your CHPS health talk because an aunt died of breast cancer. She asks two questions: how does she check herself — and is 'the injection' (the HPV vaccine) for her 12-year-old daughter?\n\nWhat do you teach?\n\nAnswer: First, breast awareness: know her normal; monthly self-examination a few days after each period (mirror for shape, dimpling, nipple change; finger-pads in circles over breast and armpit); any new lump or change — even a painless one — is a clinical breast examination the same month, with imaging arranged as the team directs; most lumps prove benign, and the visit that proves it is the visit well made. Second: yes — the HPV vaccine is designed for girls before exposure to the virus, and 12 sits squarely in the 9–14 window WHO and the national programme target; vaccinating her daughter is one of the few acts in medicine that prevents a cancer outright. Third, for Akosua herself: invite cervical screening (Pap or VIA) — at 34 she is squarely in the screening years — and mention that HPV is a virus, not a verdict. She leaves with a plan for three generations' worth of prevention in her handbag.",
      },
      {
        type: "clinical_pearl",
        body: "Screening is for people WITHOUT symptoms; symptoms need diagnosis, not screening. The well woman's Pap and the well woman's self-examination are prevention; the woman bleeding after sex needs a clinical examination today. Two different doors, both opened by your questions.",
      },
      {
        type: "memory_trick",
        body: "The Ghana five in one breath: **one lump (breast), one bleed (cervix), one stream (prostate), one silence (liver), one jaw (child).** And the two teaching sentences that save the most lives: 'a painless lump still needs the clinic' and 'a child's jaw swelling is an emergency.'",
      },
      {
        type: "quiz_prompt",
        title: "See and treat",
        body: "What happens during VIA screening, and why is it celebrated in frontline settings?\n\nAnswer: Dilute acetic acid (simple vinegar) is applied to the cervix; abnormal pre-cancerous areas turn white and are visible to the trained eye — and pre-cancer can be frozen (cryotherapy) in the same visit. No laboratory, no long wait, no lost-to-follow-up: see and treat, in one afternoon, in a district facility.",
      },
      {
        type: "summary",
        body: "- Ghana's repeated pattern is late presentation: painless early disease, fear and secrecy, spiritual framing, distance and cost — the nurse's community voice is the counterweight.\n- Breast: painless hard lump is the classic early sign; monthly self-exam + clinical exam + imaging by age; peau d'orange and fixation are late.\n- Cervix: HPV-caused, vaccine-preventable (girls 9–14 before exposure) and screen-detectable (Pap, VIA see-and-treat from the mid-twenties); early whispers are inter-menstrual and post-coital bleeding.\n- Prostate: urinary changes are usually benign, but unexplained back/hip pain in an older man is a metastatic whisper; assessment, not reassurance.\n- Liver: chronic hepatitis B + alcohol; presents late; hepatitis B vaccination is the anti-cancer vaccine.\n- Burkitt lymphoma: a child's rapidly swelling jaw is cancer until proven otherwise — and treatment speed decides the ending.",
      },
    ],
    questions: [
      {
        topic: "Common Cancers in Ghana",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is HPV vaccination recommended for girls aged 9–14 rather than later?",
        options: [
          "Because the vaccine stops working after age 15",
          "Because it works best when given BEFORE exposure to the virus — ideally before sexual debut — in line with WHO guidance",
          "Because schools only admit girls in that age range",
          "Because cervical cancer only affects teenagers",
        ],
        correctIndex: 1,
        explanation:
          "The vaccine teaches the immune system to recognise HPV before the body ever meets it; after exposure, that teaching arrives too late for the strains already acquired. Targeting girls 9–14, before sexual debut, is the WHO-aligned national design — one of the few interventions in medicine that prevents a cancer outright.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Common Cancers in Ghana",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A 9-year-old in the northern belt has a jaw and cheek that have visibly swollen over three weeks, with a loosening molar. What must this be treated as?",
        options: [
          "A dental abscess to be drained at home",
          "A jaw fracture from play",
          "Suspected Burkitt lymphoma — urgent referral, because it is cancer until proven otherwise and treatment speed decides the outcome",
          "Normal molar eruption changes",
        ],
        correctIndex: 2,
        explanation:
          "A rapidly progressive jaw or facial swelling in a child from the endemic belt is Burkitt lymphoma until excluded — the fastest-growing human tumour, and among the most chemotherapy-responsive. Urgent referral gives that child the realistic chance of cure; a dental detour at home costs the weeks that decide.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Common Cancers in Ghana",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A 32-year-old woman reports bleeding after sexual intercourse over recent months. What is the appropriate response?",
        options: [
          "Reassure her that this is common and review in six months",
          "Symptoms need diagnosis, not screening — arrange clinical examination with cervical screening per the team's pathway today",
          "Tell her it is certainly cancer and prepare her for the worst",
          "Advise her to abstain and observe",
        ],
        correctIndex: 1,
        explanation:
          "Post-coital bleeding is the classic early whisper of cervical cancer — and it converts a 'screening' situation into a 'diagnostic' one. Clinical examination with the team's screening and diagnostic pathway happens now; reassurance-with-a-date is how a stage 1 becomes a stage 3. Kindness means the same visit, not the same sentence as panic.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Common Cancers in Ghana",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which pair of primary prevention tools is most relevant to liver cancer in Ghana?",
        options: [
          "Monthly breast self-examination and mammography",
          "Hepatitis B vaccination and alcohol reduction",
          "PSA testing and rectal examination",
          "VIA screening and cryotherapy",
        ],
        correctIndex: 1,
        explanation:
          "Chronic hepatitis B is the engine of Ghana's liver cancer, with alcohol as the amplifier — so the hepatitis B vaccine (including its birth dose) is a true anti-cancer vaccine, and alcohol care is its partner. The other options are detection or surveillance tools for other cancers.",
        courseSlug: "medical-surgical-nursing-4",
      },
    ],
    flashcards: [
      {
        topic: "Common Cancers in Ghana",
        front: "The Ghana five, in one breath?",
        back: "One lump (breast), one bleed (cervix), one stream (prostate), one silence (liver), one jaw (child — Burkitt lymphoma, urgent).",
      },
      {
        topic: "Common Cancers in Ghana",
        front: "What is VIA and why does it suit frontline facilities?",
        back: "Visual inspection of the cervix after dilute acetic acid — pre-cancer turns white and can be treated the same visit with cryotherapy: see-and-treat without a laboratory.",
      },
      {
        topic: "Common Cancers in Ghana",
        front: "The two teaching sentences that save the most Ghanaian lives?",
        back: "'A breast lump that does not pain still needs the clinic' and 'a child's jaw swelling is an emergency.'",
      },
      {
        topic: "Common Cancers in Ghana",
        front: "Why does Ghana present cancers so late, and what is the nurse's counterweight?",
        back: "Painless early disease, fear and secrecy, spiritual framing, herbal-first routes, distance and cost — countered by health talks, screening invitation, symptom vigilance and referral speed at every contact.",
      },
    ],
    sources: [
      {
        organization: "Ghana Health Service",
        title: "National Strategy for Cancer Control in Ghana",
        year: "2012",
      },
      {
        organization: "World Health Organization",
        title: "Human Papillomavirus Vaccines: WHO Position Paper",
        year: "2022",
      },
      {
        organization: "Centers for Disease Control and Prevention",
        title: "Bring Your Brave — Breast Cancer Campaign",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "15th edition",
        note: "Educational source — verify current edition against your course texts.",
      },
    ],
  },

  // ── 17 ─────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-4",
    moduleTitle: "Cells Out of Control",
    lessonTitle: "Palliative Care: Comfort as a Goal",
    description:
      "When cure is no longer the goal, care is — the pain ladder, the clock, the truth-telling in the Ghanaian way, and the dignity of the last days.",
    difficulty: "Clinical Reasoning",
    durationMin: 12,
    objectives: [
      "Explain palliative care as defined by WHO — quality of life for patient and family, physical, psychosocial and spiritual, beginning early.",
      "Apply the WHO pain ladder and its administration rules, including the opioid truths (by mouth, by the clock, bowel care) that patients and families must hear.",
      "Care for the dying patient and family with competence: symptom comfort, honest communication, and dignity after death.",
    ],
    tags: ["palliative care", "pain management", "end of life", "communication"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "There is a moment in serious illness when the question quietly changes — from 'how do we remove this disease?' to 'how do we keep this person whole while it does its work?' WHO defines **palliative care** as the approach that improves the quality of life of patients AND their families facing life-threatening illness, through the prevention and relief of suffering — physical, psychosocial and spiritual — beginning early in the illness, alongside cure-directed treatment, not only at its end. Palliative is not 'giving up': a patient on chemotherapy can be on a palliative pathway, and the earlier it starts, the better the symptom control.\n\nIn Ghana this discipline is growing against heavy weather: morphine myths ('it kills patients'), families who ask you to hide the diagnosis, pain treated as a test of faith, and patients who arrive at the end of a long herbal road with untreated agony. This lesson is your toolkit for that weather — the ladder, the clock, the words, and the last days done well.",
      },
      {
        type: "text",
        title: "Total pain and the WHO ladder",
        body: "Dame Cicely Saunders, the founder of palliative care, gave us the phrase **total pain**: pain with physical, emotional, social and spiritual roots. The abandoned patient hurts more; the patient whose family owes hospital bills hurts more; the patient who believes illness is punishment hurts more. Treating only the body treats half the pain — so your listening, your presence and your practical help (a phone call to the son abroad, a chaplain's visit arranged, the bill's social review) are analgesics of a real kind.\n\nThe **WHO analgesic ladder** organises the medicines. **Step 1**: non-opioids — paracetamol, with NSAIDs used carefully (ulcers, kidneys, bleeding — lesson 13 taught you their temper). **Step 2**: mild opioids for moderate pain — codeine or tramadol. **Step 3**: strong opioids for severe pain — **morphine**, whose oral solution sits on WHO's essential medicines list and is available through Ghana's palliative programmes. Move up when a step genuinely fails; step down sometimes when causes are treated.\n\nThe administration rules are the ones families and even colleagues get wrong. **BY MOUTH**: oral medicines work and keep the patient human — injections are not the badge of serious pain. **BY THE CLOCK**: regular, scheduled dosing, not 'when it becomes bad' — pain that is allowed to build is far harder to bring down than pain prevented; between scheduled doses, **breakthrough doses** are prescribed for spikes. **BY THE LADDER**. **FOR THE INDIVIDUAL**: there is no standard 'cancer dose' — the team titrates to the patient's pain, and your documentation of pain scores and effect is the titration's steering wheel. And **with attention to details**: the one to burn into memory is **constipation — opioids constipate everyone, always**, so bowel care is prescribed from day one alongside the pain plan. Finally, the myths: in genuine pain control, fear of 'addiction' must not withhold relief — patients whose pain is treated take what they need to function, and untreated pain does its own killing (exhaustion, immobility, chest infection); properly titrated morphine relieves pain without the respiratory disaster the rumours describe.",
      },
      {
        type: "table",
        title: "The WHO ladder with the rules attached",
        body: "| Ladder step | Medicines | Nursing notes |\n|---|---|---|\n| Step 1 — mild pain | Paracetamol; NSAIDs with caution | Check ulcer, kidney and bleeding history; clock-based dosing from the start |\n| Step 2 — moderate pain | Codeine or tramadol | Constipation care continues; assess effect honestly |\n| Step 3 — severe pain | Morphine (oral solution) | Titration per team; bowel regimen from day one; breakthrough doses prescribed; document scores and effect |\n\nThe rules beside the ladder: **by mouth, by the clock, by the ladder, for the individual, with attention to details.**",
      },
      {
        type: "text",
        title: "Beyond pain: symptoms, words and the last days",
        body: "Pain is rarely the only problem. **Breathlessness** is feared almost as much — a fan moving air across the face, upright positioning, calm presence and explanation do more than they sound; oxygen per prescription where it helps. **The dry mouth** of the dying needs swabs, sips and lip care — mouth care is dignity itself. **Nausea, constipation, insomnia, anxiety, terminal restlessness** — each has its care, and the team's treatments; your constant is assessment and honest reporting. **Pressure care** continues to matter until the last hour; the dying patient is still your patient. And throughout, the Ghanaian context of truth: families often receive the diagnosis first and ask staff to shield the patient ('don't tell her'). Navigate with respect: escalate to the senior team for how much is shared; ask permission-based questions ('if this were her own results, would she want to know? can we plan how to tell her together?'); never lie, never ambush. Sitting down, warning, pausing, allowing silence — these are clinical skills in breaking bad news.\n\nThe **last days** have their own honest signs: eating and drinking lessen naturally as the body withdraws (families feeding a dying patient cause distress and aspiration — counsel kindly: the body is not starving, it is finishing; keep the mouth moist instead); sleep deepens; breathing changes — noisy secretions respond to side-positioning, and your calm explanation that this is not choking or suffocation spares the family years of memory; limbs cool and mottle. After death: **care of the body with dignity** — closing eyes and mouth, gentle washing, respecting the family's religious and cultural wishes about timing and ritual; unhurried presence; allowing the family to grieve properly, and a follow-up word or visit later, which in Ghanaian communities is both expected and healing. The sentence that retires at the end of this lesson is the most dangerous in medicine: 'there is nothing more we can do.' There is always more comfort, more presence, more dignity — those are the 'more.'",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Madam Asabea, 48, has advanced cervical cancer. She has not slept properly for two nights — deep lower abdominal and back pain — and has oral thrush making even porridge misery. The family, exhausted, says 'the medicines finished and the pharmacy said there is nothing stronger,' and asks you whether morphine 'would not finish her quickly.' The patient next to her — a young man with sickle cell disease in chronic pain — is listening to everything.\n\nWhat is your plan?\n\nAnswer: Assess the total pain: site, character, severity score, what eases it, what it steals (sleep — already answered). Escalate for ladder review: two nights of uncontrolled severe pain on step 1 medicines is a step 3 conversation — oral morphine solution via the team and programme access, scheduled by the clock, with breakthrough dosing prescribed and bowel care from day one. Treat the thrush today (it is ruining her nutrition and her comfort — mouth care, per the team). Then the teaching, done with the family present and the young man in mind: the clock rule (pain prevented is pain half-treated), the constipation rule, and the morphine truth — titrated morphine relieves suffering and does not 'finish' patients; untreated pain is what grinds people away. Position her, plan her sleep, promise your presence at the dose changes. And notice your second patient: chronic sickle pain deserves the same clock-based, believed, treated respect — the principles of this lesson are not owned by cancer alone.",
      },
      {
        type: "clinical_pearl",
        body: "'By the clock' is the sentence that changes the most lives in the ward: pain medicines are scheduled like antibiotics, because pain allowed to climb is pain that doubles its price. And every opioid patient starts bowel care the same day — constipation is the one side effect you can promise.",
      },
      {
        type: "memory_trick",
        body: "The ladder rules: **Mouth, Clock, Ladder, Person, Details** — oral first, scheduled always, step up when a step fails, individual doses, bowel care from day one. The dying signs: **Less food, deep sleep, changing breath, cooling limbs** — the body's orderly withdrawal, not a medical emergency to reverse.",
      },
      {
        type: "quiz_prompt",
        title: "The family's shield",
        body: "The family of a woman with advanced cancer begs you: 'Please don't tell her it is cancer — it will finish her.' How do you respond?\n\nAnswer: With respect for their love and no lie to the patient: bring the request to the senior team, and explore it with the family — 'does she want to know her results? how shall we tell her, together, gently?' Protect her from brutality, not from truth: patients almost always suspect, and untreated suspicion in silence is lonelier than a kindly shared truth. Ask permission before speaking; let her lead; never ambush, never deceive.",
      },
      {
        type: "summary",
        body: "- Palliative care (WHO): quality of life for patient AND family, physical-psychosocial-spiritual relief of suffering, early and alongside treatment — never only the last days.\n- Total pain: body, feelings, finances, faith — presence and practical help are analgesia.\n- The WHO ladder: paracetamol/NSAIDs → codeine/tramadol → morphine; rules: by mouth, by the clock (with breakthrough doses), by the ladder, for the individual, with attention to details.\n- Opioid truths: constipation always — bowel care from day one; addiction fear must not withhold relief; titrated morphine does not 'finish' patients — untreated pain harms.\n- Beyond pain: fan and positioning for breathlessness, mouth care as dignity, pressure care to the end, honest permission-based communication in the family-first Ghanaian way.\n- The last days: natural reduced eating and drinking (mouth care, not forced feeding), changing breathing (position and explain), cooling limbs — then dignified body care, family ritual, and bereavement follow-up.\n- 'There is nothing more we can do' is retired: there is always more comfort, presence and dignity.",
      },
    ],
    questions: [
      {
        topic: "Palliative Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why are pain medicines in palliative care given 'by the clock' rather than only 'when the pain is bad'?",
        options: [
          "Because scheduled dosing is easier for the pharmacy to supply",
          "Because pain allowed to build is far harder to bring down than pain prevented — regular dosing keeps it ahead, with breakthrough doses for spikes",
          "Because families prefer a fixed timetable for visitors",
          "Because painkillers are only absorbed at set times of day",
        ],
        correctIndex: 1,
        explanation:
          "Chronic pain control works like a fence, not a fire brigade: steady scheduled levels hold the pain below the cliff-edge, and prescribed breakthrough doses catch the spikes. Waiting for agony also means patients live braced, sleepless and afraid — the clock is a kindness disguised as a timetable.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Palliative Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient is starting regular morphine for severe cancer pain. Which nursing measure must begin the SAME day?",
        options: [
          "A fluid restriction",
          "A bowel regimen — opioids constipate every patient, always, so prevention starts with the first dose",
          "Complete bed rest to prevent falls",
          "Stopping all oral intake in case of sedation",
        ],
        correctIndex: 1,
        explanation:
          "Opioid-induced constipation is universal and dose-dependent — the one side effect you can promise. The bowel regimen (laxatives per prescription, fluids, activity as tolerated, toilet access) starts with day one of morphine; untreated, it becomes abdominal pain on top of everything else.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Palliative Care",
        type: "MCQ",
        difficulty: "Clinical Reasoning",
        stem: "A family withholds the prescribed oral morphine solution from a dying relative, fearing it 'will hasten her death.' What is the best response?",
        options: [
          "Respect their wish — the family knows best at the end of life",
          "Explain that properly titrated morphine relieves suffering and does not hasten death, while untreated pain harms her sleep, breathing and dignity — and review the plan with the team and family together",
          "Administer the dose secretly without telling them",
          "Stop the morphine and switch to paracetamol alone to avoid the argument",
        ],
        correctIndex: 1,
        explanation:
          "The morphine myth is one of the great preventable cruelties at the end of life. Titration to the individual's pain is safe; the evidence of palliative practice worldwide is that untreated pain — not its treatment — shortens and ruins lives. Teach it warmly with the team present, document the plan, and reframe: relieving her pain is part of the family's love, not in tension with it.",
        whyOthers: {
          A: "Family authority does not license avoidable suffering — the duty is to their loved one's comfort, and they deserve the teaching that lets them choose it",
          C: "Secret administration destroys trust and the family's dignity in decision-making",
          D: "Abandoning the prescribed plan to avoid conflict leaves the patient in severe pain and confirms the myth by silence",
        },
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Palliative Care",
        type: "MCQ",
        difficulty: "Clinical Reasoning",
        stem: "A dying patient is taking only a few sips of fluid each day. The family anxiously asks whether they should keep feeding her. What is your counsel?",
        options: [
          "Yes — feeding and hydrating aggressively will prolong her life",
          "No — appetite and thirst fade naturally as the body withdraws; forced feeding causes distress and aspiration risk. Keep her mouth clean and moist, her lips cared for, and be present",
          "No — remove all care, as nothing helps now",
          "Ask the pharmacy for appetite stimulants immediately",
        ],
        correctIndex: 1,
        explanation:
          "In the last days, the body is finishing, not starving: reduced intake is natural and not distressing, while forced feeding brings aspiration, discomfort and guilt. The care that matters is mouth care, positioning, dry-lip care, comfort of every kind — and honest words that relieve the family of the feeling that they are letting her starve.",
        courseSlug: "medical-surgical-nursing-4",
      },
    ],
    flashcards: [
      {
        topic: "Palliative Care",
        front: "WHO's definition of palliative care, in essence?",
        back: "An approach improving quality of life of patients AND families facing life-threatening illness — preventing and relieving suffering, physical, psychosocial and spiritual — begun early, alongside treatment.",
      },
      {
        topic: "Palliative Care",
        front: "The WHO pain ladder and its five administration rules?",
        back: "Ladder: paracetamol/NSAIDs → codeine/tramadol → morphine. Rules: by Mouth, by the Clock, by the Ladder, for the Individual, with attention to Details — bowel care from day one.",
      },
      {
        topic: "Palliative Care",
        front: "What is total pain?",
        back: "Pain with physical, emotional, social and spiritual roots — the abandoned patient, the indebted family and the guilt-ridden patient hurt more; treating the whole tree is the discipline.",
      },
      {
        topic: "Palliative Care",
        front: "The natural signs of the last days?",
        back: "Less eating and drinking, deepening sleep, changing (sometimes noisy) breathing, cooling and mottling limbs — the body's orderly withdrawal: mouth care and presence, not forced feeding.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Integrating Palliative Care and Symptom Relief into Primary Health Care",
        year: "2018",
      },
      {
        organization: "World Health Organization",
        title: "Planning and Implementing Palliative Care Services: A Guide for Programme Managers",
        year: "2021",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "15th edition",
        note: "Educational source — verify current edition against your course texts.",
      },
    ],
  },

  // ── 18 ─────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-4",
    moduleTitle: "Bones, Joints & Mobility",
    lessonTitle: "Fractures: The Broken Story",
    description:
      "From the okada crash to the mango-tree fall — recognising the break, splinting it as it lies, and out-watching the cast that can bite.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Recognise fractures clinically, distinguish closed from open, and apply first-response care: immobilise as found, cover, analgesia and referral.",
      "Monitor the injured limb for compartment syndrome and fat embolism — the two complications that outrank the break itself.",
      "Deliver plaster and traction care with the cast danger signs that patients and families must own before discharge.",
    ],
    tags: ["fractures", "splinting", "compartment syndrome", "cast care"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Ghana's fractures arrive by road and by tree: the okada rider without a helmet, the trotro crash on a wet highway, the child who falls from the mango branch, the grandmother who slips on the soapy bathhouse floor. Some bones are already weakened before the fall — by osteoporosis in the elderly, and in sickle cell disease, whose bones suffer silent infarctions and are simply easier to break (remember, too, that a child with sickle cell presenting with limb pain is usually in a painful crisis, not a fracture — but the two can coexist, and an x-ray settles it).\n\nA **fracture** is a break in the continuity of bone. Your business is three-layered: recognise it and immobilise it well, protect the limb through the danger hours (compartment syndrome, fat embolism), and send the patient home with a cast and a family who know the signs that mean return-today.",
      },
      {
        type: "text",
        title: "Recognising and first-responding",
        body: "The clinical picture: **pain** — pointed and specific, worse on any movement; **swelling** and bruising; **deformity** — compare with the other limb, your cheapest diagnostic tool; **loss of function** (cannot bear weight, cannot lift); sometimes shortening or abnormal rotation; **crepitus** — the grating of bone ends — exists but is never something you set out to elicit: move a limb gently once, and let the x-ray (district level upward) confirm what the story already says.\n\n**Closed fracture**: skin intact. **Open (compound) fracture**: the bone has pierced the skin — or the wound communicates with the fracture — which upgrades everything: infection, tetanus and urgent surgery. First response, in order: **immobilise the limb AS FOUND** — never 'straighten it'; splint to include the joints above and below the fracture, padded with cloth (a rolled newspaper, cardboard, a stick padded with a wrapper are honest field splints; an arm can be slung); handle gently and support under the limb. For an **open** fracture: cover the wound with a clean sterile dressing, light bandage, **no probing, no pushing the bone back**, nothing poured in. **Analgesia per protocol BEFORE movement** — moving an unsplinted fracture without pain relief is cruelty, and pain can shock on its own. Keep the patient **nil by mouth** (surgery is likely), establish IV access per team, and give tetanus prophylaxis and antibiotics for open fractures per the team's plan. Then referral with the story: mechanism, time, findings, what you applied.",
      },
      {
        type: "text",
        title: "The two complications that outrank the break",
        body: "**Compartment syndrome** is the one that keeps orthopaedic nurses awake. Muscles live in fixed-volume compartments wrapped in tough fascia; a fracture (or a tight cast, or crush) swells the compartment, pressure climbs, and the small vessels and nerves inside are crushed. The early signature is **PAIN OUT OF PROPORTION** to the injury — and, the most reliable single test, **pain on gentle passive stretch of the fingers or toes**. Follow the 6 Ps as the cascade builds: **P**ain (disproportionate), **P**araesthesia (pins and needles), **P**allor, **P**ulselessness, **P**aralysis, **P**oikilothermia (cold). But internalise this: pallor and pulselessness are LATE — by then muscle is dying. Escalate at disproportionate pain, especially under a fresh cast; the treatment (splitting the cast, surgical decompression) is the team's, and the window is hours. A limp is better than a leg lost to necrosis.\n\n**Fat embolism** arrives 24–72 hours after long-bone fractures: fat from the marrow enters the blood and lands in the lungs and brain — **breathlessness, falling oxygen saturation, confusion and drowsiness, and a pinpoint petechial rash** across the chest, armpits and neck. Any deteriorating chest or mind in the days after a femur fracture is fat embolism until excluded: report with the saturation and the rash's description.",
      },
      {
        type: "table",
        title: "Cast and traction care: the danger signs",
        body: "| Sign under a cast | What it may mean | Action |\n|---|---|---|\n| Pain out of proportion, or pain on gentle toe/finger stretch | Compartment pressure rising | Escalate immediately — the cast may need splitting; hours matter |\n| Numbness, pins and needles | Nerve compression | Report today |\n| Toes/fingers pale, cold, or slow to pink up | Circulation squeezed | Report immediately |\n| Smell, fever, discharge at the wound site | Infection (especially after open fracture) | Report immediately |\n| An object dropped into the cast | Pressure sore forming | Report — never dig for it |\n| Swelling of the exposed digits that will not settle with elevation | Cast too tight | Report |",
      },
      {
        type: "text",
        title: "Living with plaster and traction",
        body: "The patient carries the cast home, so the teaching leaves with them. **Keep it DRY** — a wet plaster softens and stops splinting (double plastic bags taped at bath time; no paddling in the sea or the stream); **keep it HIGH** — elevate the limb above heart level in the first days so swelling drains (a pillow under the leg, a sling for the arm); **WIGGLE the fingers or toes** regularly — the joint movement that the cast cannot stop; **never scratch** with a pen, knitting needle or stick (harmattan itch is real — a hair-dryer on cool blown down the cast edges eases it safely); check **edges** for rubbing and report broken or cracked plaster. Healing runs its own calendar: the haematoma organises, soft callus forms, hard callus calcifies over weeks, and remodelling continues for months — children remodel beautifully, adults slowly. Support it: protein, calcium (milk, small fish eaten with bones, beans, dark greens), vitamin D from honest sunlight — the free Ghanaian supplement — and **no smoking**, which measurably slows bone healing. For patients on **traction**: keep the weights hanging free (never resting on the floor), the ropes and pulleys running, alignment as the team set it, the counter-traction intact — and the skin at pressure points protected and inspected.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Kwame, 19, okada passenger in a crash, has a closed tibial fracture splinted and put in a backslab at the district hospital. Six hours later he rings the bell: 'the plaster itself is paining me — it gets worse every hour', and his toes feel 'as if they have fallen asleep.' When you gently wiggle his big toe he cries out. The toes are still pink and warm.\n\nWhat is happening, and what must you do?\n\nAnswer: This is compartment syndrome knocking — pain out of proportion to the injury, paraesthesia, and severe pain on passive toe-stretch, hours after a tibial fracture in a fresh backslab. The pink warm toes are exactly why it is missed: pulses and colour survive until late. Keep the limb at heart level (do not raise further), do not wrap anything tighter, and escalate NOW for the team to review and split the cast — this is a limb-saving call, not a comfort one. Document the times, keep neurovascular checks running, and prepare for possible urgent transfer. If the team has gone to theatre, the notes you kept and the hour you called are the leg.",
      },
      {
        type: "clinical_pearl",
        body: "The most dangerous sentence in the fracture room is 'the pain is just from the break.' Pain that outruns its injury, or that passive toe-stretch turns into a cry, is compartment syndrome until the team says otherwise — and pink toes do not acquit. Similarly: the object poked into a cast is lost the moment it drops — report it, never fish for it.",
      },
      {
        type: "memory_trick",
        body: "The cast motto: **DRY, HIGH, WIGGLE, WATCH** — keep it dry, keep it elevated early, wiggle the far digits, watch for the 6 Ps. Compartment syndrome in one line: **pain first, pulses last.** Fat embolism's triad: **Lungs, Mind, Pinpoint rash** — days after the long-bone break.",
      },
      {
        type: "quiz_prompt",
        title: "The dropped pen",
        body: "A bored teenager on your ward has dropped a pen inside his full-leg cast and asks you to 'fish it out quickly before anyone sees.' What is the correct response?\n\nAnswer: Report it and leave it for proper removal by the team — never dig. An object lying against skin under an unforgiving cast manufactures exactly the unrelieved pressure that necroses into a deep sore; the quiet removal today is the wound of next week. Fishing is how curiosity amputates.",
      },
      {
        type: "summary",
        body: "- Recognise: pointed pain, swelling, deformity (compare sides), loss of function; x-ray confirms; never chase crepitus.\n- First response: immobilise AS FOUND (joints above and below), splint padded, sling; open fracture = sterile cover, no probing, no reduction; analgesia before movement; nil by mouth; tetanus cover for open per team; refer with the story.\n- Compartment syndrome: pain out of proportion and pain on passive stretch EARLY; pallor and pulselessness LATE — escalate on pain; the cast may need splitting.\n- Fat embolism 24–72 h after long-bone fracture: breathlessness, desaturation, confusion, petechial rash on chest/axillae/neck — report.\n- Cast care: DRY, HIGH, WIGGLE, WATCH; no scratching with objects; report smell, fever, numbness, colour change, dropped objects; traction: weights free, alignment kept, skin protected.\n- Healing: haematoma → soft callus → hard callus → remodelling; feed it protein, calcium and sunlight; smoking slows it.",
      },
    ],
    questions: [
      {
        topic: "Fractures",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Six hours after a backslab is applied for a tibial fracture, a patient has pain out of proportion to the injury and cries when you gently stretch his toes. The toes are pink and warm with good pulses. What should you do?",
        options: [
          "Reassure him and give more analgesia — pink toes with pulses exclude a problem",
          "Elevate the leg above the heart to reduce the pain and review in two hours",
          "Escalate immediately for suspected compartment syndrome — disproportionate pain and pain on passive stretch are the early signs; colour and pulses change late",
          "Loosen the cast yourself with scissors and wait for the morning round",
        ],
        correctIndex: 2,
        explanation:
          "Compartment syndrome declares itself with pain out of proportion and pain on passive stretch while pulses and pinkness still persist — by the time pulses vanish, muscle is already dying. Escalate immediately: the team will split the cast and assess pressure; elevation above heart level is actually discouraged in suspected compartment syndrome; cutting casts is the team's call with the right tools.",
        whyOthers: {
          A: "'Pink with pulses' is the classic false reassurance — the small vessels are crushed long before the big pulse disappears.",
          B: "Elevation above the heart in suspected compartment syndrome can drop perfusion of the already-pressured compartment further; keep the limb at heart level and escalate.",
          D: "Self-cutting a cast without the team's assessment and proper equipment risks both alignment and skin — the call, and the splitting, belong to the escalation.",
        },
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Fractures",
        type: "MCQ",
        difficulty: "Easy",
        stem: "You arrive at the scene of a motorbike crash with an obvious open (compound) fracture of the forearm. Which first-response action is correct?",
        options: [
          "Push the protruding bone back under the skin and then bandage",
          "Cover the wound with a clean sterile dressing, immobilise the limb as found including the joints above and below, and arrange urgent transfer",
          "Wash the wound thoroughly with water from the nearest standpipe to remove dirt",
          "Straighten the arm to a normal position before splinting",
        ],
        correctIndex: 1,
        explanation:
          "Open fractures are covered, not corrected: a sterile dressing and light bandage protect the wound, immobilisation as found stops further damage, and urgent transfer brings surgical debridement, antibiotics and tetanus cover. Pushing bone ends back, field irrigation with unclean water and enthusiastic realignment all add infection and injury.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Fractures",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Two days after a femoral shaft fracture, a patient becomes breathless, confused, and develops a pinpoint rash over the chest and armpits. What complication fits?",
        options: [
          "Compartment syndrome of the thigh",
          "Fat embolism — marrow fat landing in the lungs and brain after a long-bone fracture",
          "A allergic reaction to the pain injection",
          "Malaria acquired in hospital",
        ],
        correctIndex: 1,
        explanation:
          "The 24–72 hour window, the respiratory distress, the altered mentation and the petechial rash on chest, axillae and neck are the classic signature of fat embolism. Report with oxygen saturation; the team will support breathing and circulation. Compartment syndrome is a local limb pain story, not a rash-breathing-mind story.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Fractures",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why does a splint immobilise the joints ABOVE and BELOW the fracture?",
        options: [
          "Because fractured bones cannot be splinted directly",
          "Because movement of either joint transmits motion across the broken bone — stilling both ends is what actually stills the fracture",
          "Because joints are always dislocated with fractures",
          "To make the limb look symmetrical with the other side",
        ],
        correctIndex: 1,
        explanation:
          "A fracture's fragments move when the joints they span move; immobilising both joints stills both ends of the broken bone. It also eases pain, limits further soft-tissue injury and bleeding, and eases safe transport — which is why even improvised newspaper splints are taught to cross two joints.",
        courseSlug: "medical-surgical-nursing-4",
      },
    ],
    flashcards: [
      {
        topic: "Fractures",
        front: "Closed versus open fracture, and the response difference?",
        back: "Closed: skin intact. Open (compound): bone pierced the skin — cover with sterile dressing, no probing or reduction, urgent surgery-bound referral, tetanus and antibiotics per team.",
      },
      {
        topic: "Fractures",
        front: "The 6 Ps of compartment syndrome — and which come first and last?",
        back: "Pain (out of proportion), Paraesthesia, Pallor, Pulselessness, Paralysis, Poikilothermia — pain first, pulses last: escalate on disproportionate pain, never wait for pallor.",
      },
      {
        topic: "Fractures",
        front: "The fat embolism triad and its timing?",
        back: "Breathlessness with falling saturation, confusion, and pinpoint petechial rash on chest/axillae/neck — 24 to 72 hours after a long-bone fracture.",
      },
      {
        topic: "Fractures",
        front: "The four-word cast motto?",
        back: "DRY, HIGH, WIGGLE, WATCH — keep the plaster dry, elevate the limb early, wiggle the exposed digits, and watch for numbness, colour change, pain out of proportion, smell, fever, and dropped objects.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Global Status Report on Road Safety",
        year: "2023",
      },
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        year: "2017",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "15th edition",
        note: "Educational source — verify current edition against your course texts.",
      },
    ],
  },

  // ── 19 ─────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-4",
    moduleTitle: "Bones, Joints & Mobility",
    lessonTitle: "Osteoarthritis & Rheumatoid Arthritis",
    description:
      "Wear versus war — the hinge that wears out under Ghana's market loads, and the immune system that attacks both hands at once.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Distinguish osteoarthritis from rheumatoid arthritis using joint distribution, morning stiffness duration and systemic features.",
      "Apply the nursing management of osteoarthritic knees — quadriceps exercise, weight, heat, aids and joint-sparing habits.",
      "Explain why early referral in suspected rheumatoid arthritis protects joints, and teach the between-flare and flare care patients need.",
    ],
    tags: ["osteoarthritis", "rheumatoid arthritis", "joint pain", "mobility"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Two joint diseases confuse students and patients alike because both 'ache in the joints.' They are different diseases wearing similar clothes. **Osteoarthritis (OA)** is the hinge wearing out: the smooth cartilage cap thins under decades of load, until bone grinds on bone. **Rheumatoid arthritis (RA)** is the immune system declaring war on the joint lining, destroying it from within. In Ghana, OA owns the knees of the nation — the markets, the head-loads, the hauling, the kneeling, the squatting — especially in older women; RA arrives in young adults, disproportionately women, and is the one whose early months decide the shape of the rest of life.\n\nLearn the one-hour rule in this lesson and you will never confuse the two at triage again.",
      },
      {
        type: "text",
        title: "Osteoarthritis: the hinge that wore out",
        body: "OA is wear-and-tear of hyaline cartilage in the joints that carry us: knees first in Ghana, then hips, spine, and the base of the thumb. The story is mechanical: pain **worsening with use through the day**, stiffness that eases quickly after rest (**under 30 minutes** in the morning), grating **crepitus** — the knee that 'sounds like grinding pepper' — bony hard swelling (the knuckle nodes of the fingers, Heberden's nodes at the fingertips), and no fever, no weight loss, no systemic illness. One joint or a few; asymmetry common. The x-ray shows narrowed joint space and bony spurs; the blood tests are calm — the quiet exam that separates it from inflammation.\n\nManagement without theatre: **weight reduction** — the teaching arithmetic every knee patient should hear: each kilogram of body weight loads the knees with roughly four kilograms of force on stairs — losing 5 kg relieves the knees of some 20; **exercise** — the counter-intuitive core: strong quadriceps brace the knee (straight-leg raises, sit-to-stand practice, walking within comfort) — movement is oil, not injury, and rest is only for flares; **heat** — the warm water bottle or cloth on a stiff morning knee; **walking aids** — a stick held on the side **OPPOSITE** the painful knee, so it shares the load with the good side's stride pattern; **joint-sparing habits** — a raised stool in the kitchen and market where squatting is the culture, load carried split between both hands or on the back? (not one hip), fewer stairs per day. Analgesia steps per the team — paracetamol first, topical anti-inflammatory gels where available, NSAIDs with lesson 13's cautions; and when the joint finally fails, referral for surgical opinion (joint replacement exists in Ghana's teaching centres).",
      },
      {
        type: "text",
        title: "Rheumatoid arthritis: the war on the lining",
        body: "RA is a systemic autoimmune disease whose main battlefield is the **synovium** — the joint's living lining — which swells with inflammation, grows inward and erodes cartilage and bone. The picture a nurse should catch: **symmetrical** involvement of the **small joints** — both hands, wrists, knuckles, feet — with **soft, spongy, warm swelling** (not the bony lumps of OA); **morning stiffness lasting over ONE HOUR** — often two or three, improving as the day warms; and systemic illness: fatigue like a flu that never leaves, low-grade fever, weight loss, sometimes nodules under the skin of the forearms. Over untreated years the hands deform — fingers drifting toward the little-finger side (**ulnar deviation**), swan-neck and boutonnière shapes — and the disease reaches eyes, lungs and elsewhere.\n\nThe single most important sentence in this lesson: **early referral changes everything.** Disease-modifying antirheumatic drugs (DMARDs), prescribed by the team, can switch off the erosion — but the window is the first months, before joints are permanently sculpted. The patient with 'three months of both hands stiff and puffy every morning' is an urgent referral, not a herbal-rub customer. Between flares: gentle daily range-of-motion exercise (rest only during flares, splinting per team), **joint protection** — bigger grips, two-handed lifts, avoiding tight pinch and prolonged one position; heat for stiffness, ice per team preference for hot swollen joints; energy pacing. And the invisible burden: young women with old-looking hands face pity, 'rheumatism' jokes and family impatience — the nurse who explains that RA is real, systemic and treatable is doing therapeutic work with words alone.",
      },
      {
        type: "table",
        title: "OA versus RA: the triage table",
        body: "| Feature | Osteoarthritis | Rheumatoid arthritis |\n|---|---|---|\n| Essence | Wear of cartilage | Autoimmune war on synovium |\n| Typical patient | Older, knees loaded by work and weight | Young–middle-aged adults, women predominantly |\n| Joints | Weight-bearing: knees, hips, spine, thumb base | Small joints, symmetrical: hands, wrists, feet |\n| Morning stiffness | Under 30 minutes | Over one hour |\n| Swelling | Bony, hard | Soft, spongy, warm |\n| Pattern of pain | Worse with use through the day | Stiff on waking, eases with warmth, flares |\n| Systemic features | None | Fatigue, low fever, weight loss, nodules |\n| Direction of treatment | Exercise, weight, aids, analgesia — surgery late | EARLY DMARD referral — the window is months |",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Auntie Mansa, 61, a market trader for thirty years, describes knees that 'grind like pepper' after a day at her stall, stiff for 'a small time' each morning, no fever, sleeps well, and — she jokes — 'my knees only complain when I spend.' She manages with menthol rubs and occasional pain powders. Her daughter, 33, sits beside her flexing her own fingers: for four months BOTH hands (knuckles and wrists) have been puffy and painful, stiff 'from waking till midday', and she is 'tired like a pregnancy without a baby.' The family has advised her to use her mother's rub and 'wait for it to pass, it is the family rheumatism.'\n\nWhat is your assessment and advice for each woman?\n\nAnswer: The mother is classic osteoarthritis — use-related pain, brief stiffness, grinding, no systemic signs; her plan: weight talk (kindly — market food and knee arithmetic), quadriceps exercises daily, a warm bottle in the morning, a stool for the stall, a stick opposite the worse knee, paracetamol per protocol (retire the pain powders — lesson 13's ulcer story), and a surgical opinion pathway if function collapses. The daughter is a suspected early rheumatoid arthritis case — symmetrical small-joint swelling, >1-hour morning stiffness, systemic fatigue — and the family's 'wait for it to pass' is exactly the advice that loses the DMARD window: she needs referral now, with the explanation that today's puffy months become tomorrow's deformed years if untreated. The rub that serves the mother's worn hinges cannot stop an immune war — but the right tablets, started early, can.",
      },
      {
        type: "clinical_pearl",
        body: "The one-hour rule: morning stiffness under 30 minutes points to wear; over one hour — especially symmetric, in small joints, with fatigue — points to inflammation and a referral. And the stick goes on the side OPPOSITE the painful knee, so it pushes when the bad leg needs the help — a small biomechanical fact that patients remind their relatives of for years.",
      },
      {
        type: "memory_trick",
        body: "**OA is the WORN hinge; RA is the WAR on the lining.** Wear = worse with use, brief stiffness, bony knobs, one side, no fever. War = waking stiff over an hour, both hands, soft swelling, feverish fatigue — and the early DMARD window that never reopens.",
      },
      {
        type: "quiz_prompt",
        title: "The young woman's morning",
        body: "A 33-year-old has three months of symmetrical knuckle and wrist swelling with morning stiffness until midday and fatigue. What do you suspect, and why is this week better than next year for the referral?\n\nAnswer: Early rheumatoid arthritis — and the referral is urgent because DMARDs can stop joint destruction when started in the first months; the deformities of RA are sculpted by untreated time, and no rub or rub-heritage advice reopens the window once the shape is set.",
      },
      {
        type: "summary",
        body: "- OA = cartilage wear in loaded joints (Ghana's market knees): use-related pain, morning stiffness under 30 min, crepitus, bony swelling, no systemic signs.\n- OA management: weight loss (each kg ≈ four on the knees in stairs), quadriceps strengthening, heat, raised stool over squatting, stick opposite the painful knee, analgesia per team; surgical referral late.\n- RA = autoimmune symmetrical synovitis of small joints: soft warm swelling, morning stiffness over one hour, fatigue, low fever, weight loss; deformities over untreated years.\n- Early RA referral is the treatment: the DMARD window is the first months — the puffy hands of today are the deformed hands of an untreated decade.\n- Between flares: gentle daily motion, joint protection (bigger grips, two-handed lifts), pacing; rest and splints only in flares; heat for stiffness.\n- Both diseases deserve belief: chronic joint pain patients are often dismissed — your validation is part of the treatment.",
      },
    ],
    questions: [
      {
        topic: "Arthritis",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A 34-year-old woman has four months of swelling in BOTH wrists and knuckles, morning stiffness lasting two hours, fatigue and low-grade fever. Which diagnosis fits best?",
        options: [
          "Osteoarthritis of the hands",
          "Early rheumatoid arthritis — symmetrical small-joint synovitis with prolonged morning stiffness and systemic features",
          "Gout of both hands",
          "Simple muscle strain from market work",
        ],
        correctIndex: 1,
        explanation:
          "The three fingerprints of RA together: symmetry, small joints, and morning stiffness beyond an hour — with the systemic fatigue and fever OA never shows. Osteoarthritis of the hands is asymmetric, bony, non-inflammatory and appears decades later; gout is abrupt, single-joint and podiatric first; strain does not swell both hands symmetrically for four months.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Arthritis",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which teaching bundle best suits a 62-year-old trader with osteoarthritic knees?",
        options: [
          "Strict bed rest for two weeks, then gradual walking only",
          "Quadriceps strengthening exercises, weight reduction, heat for stiffness, a raised stool instead of squatting at the stall, and a walking stick held opposite the painful knee",
          "Full daily squats to ' lubricate' the knees, plus pain powders from the drug store",
          "Avoiding all walking and sending for joint replacement immediately",
        ],
        correctIndex: 1,
        explanation:
          "The non-surgical core of knee OA: strong thigh muscles brace the joint, lost kilograms unload it (about four-fold in stairs), heat eases stiffness, joint-sparing habits remove the grinding positions, and the opposite-side stick shares the load. Rest beyond flares stiffens and weakens; deep squat 'lubrication' and roadside pain powders both damage; replacement is the late option, not the first word.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Arthritis",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is early referral so strongly emphasised for suspected rheumatoid arthritis?",
        options: [
          "Because RA is contagious in the early months",
          "Because disease-modifying drugs can stop joint erosion when started early — before irreversible deformity is sculpted",
          "Because only hospital physiotherapists are allowed to examine swollen joints",
          "Because RA always resolves on its own within the first year",
        ],
        correctIndex: 1,
        explanation:
          "RA's destructive window is early: synovial inflammation erodes cartilage and bone in the first months to years, and DMARDs switch off that erosion when started in time. Every month of 'waiting for it to pass' trades future joint shape for present patience.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Arthritis",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which feature most quickly separates a swollen osteoarthritic knee from an inflamed rheumatoid joint at the bedside?",
        options: [
          "The osteoarthritic knee belongs to an older patient, always",
          "Morning stiffness in OA is brief (under 30 minutes) and pain worsens with use; in RA, stiffness exceeds an hour, swelling is soft and warm, and systemic fatigue accompanies it",
          "Osteoarthritic knees never swell at all",
          "Rheumatoid joints only affect the knees",
        ],
        correctIndex: 1,
        explanation:
          "The one-hour stiffness rule plus the character of the swelling (bony and grating vs soft and warm) and the company it keeps (none vs systemic fatigue and fever) do more triage work than any single feature. Age helps statistically but decides nothing alone.",
        courseSlug: "medical-surgical-nursing-4",
      },
    ],
    flashcards: [
      {
        topic: "Arthritis",
        front: "The one-hour rule of morning stiffness?",
        back: "Under 30 minutes points to wear (osteoarthritis); over one hour — especially symmetrical small joints — points to inflammation (rheumatoid arthritis) and referral.",
      },
      {
        topic: "Arthritis",
        front: "Why is weight loss such potent medicine for arthritic knees?",
        back: "Each kilogram of body weight loads the knees with roughly four kilograms of force on stairs — modest losses multiply into real relief.",
      },
      {
        topic: "Arthritis",
        front: "Which side does the walking stick go on, and why?",
        back: "The side OPPOSITE the painful knee — it pushes through the good side exactly when the bad leg needs the shared load during its stance phase.",
      },
      {
        topic: "Arthritis",
        front: "Three joint-protection habits for the RA patient between flares?",
        back: "Bigger grips and two-handed lifts instead of tight pinches; gentle daily range-of-motion (rest only in flares, splints per team); energy pacing with rest breaks before exhaustion.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Musculoskeletal Conditions — Fact Sheet",
      },
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        year: "2017",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "15th edition",
        note: "Educational source — verify current edition against your course texts.",
      },
    ],
  },

  // ── 20 ─────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-4",
    moduleTitle: "Bones, Joints & Mobility",
    lessonTitle: "Immobility, Falls & Pressure Ulcers",
    description:
      "The bed that becomes its own disease — the systems that fail quietly, the fall that waits for the dark toilet trip, and the red that stays when you press.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe the system-by-system hazards of immobility and the prevention that answers each.",
      "Stage pressure ulcers and deliver the prevention bundle — repositioning, skin inspection, heel offloading, moisture care and nutrition — including the dark-skin nuance.",
      "Assess fall risk and apply the ward-level interventions that matter most in Ghanaian facilities, and respond to a fall as a symptom, not an accident.",
    ],
    tags: ["immobility", "falls", "pressure ulcers", "patient safety"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The bed is meant to rest a patient — but rest beyond its need becomes a disease in its own right. The immobile patient declines on a schedule measured in days: muscle strength begins falling within days of bed rest, calcium drains from idle bones, secretions pool in unexpanded lungs, blood crawls in static legs, the skin over bony points dies between the bone and the mattress — and the mind fogs. WHO counts falls as the second leading cause of unintentional injury death worldwide, with older adults suffering most; and pressure injuries remain one of healthcare's most persistent, most preventable harms — a quality flag on the whole ward.\n\nThree problems, born together in the quiet ward: deconditioning, falls and pressure ulcers. This is the lesson that makes 'bed rest' a prescription you question, and every two hours a promise you keep.",
      },
      {
        type: "table",
        title: "The hazards of bed rest, system by system",
        body: "| System | What immobility does | The prevention that answers it |\n|---|---|---|\n| Muscles | Strength and bulk fall within days | Early, progressive mobilization; active exercises; passive range for the weak |\n| Bones | Calcium drains — weakened bone, kidney stones | Weight-bearing as able; hydration; nutrition |\n| Lungs | Shallow breathing → pooled secretions, hypostatic pneumonia | Deep-breathing exercises, coughing, sitting out, early walking |\n| Circulation | Stasis → deep vein thrombosis and embolism | Leg exercises, early ambulation, hydration; pharmacological prophylaxis per team |\n| Skin | Pressure + moisture + shear → ulcers | The repositioning bundle below |\n| Gut and bladder | Constipation, appetite loss, retention and infection | Fibre, fluids, routine toileting, activity |\n| Mind | Confusion (especially older patients) and low mood | Orientation, daylight, conversation, family presence, activity |",
      },
      {
        type: "text",
        title: "Pressure ulcers: the red that stays",
        body: "A pressure ulcer is tissue death between a bony prominence and an unyielding surface — pressure closing the small vessels, worsened by friction, shear (being dragged up the bed rather than lifted) and moisture. The favourite sites: **sacrum, heels, hips, elbows, ankles, occiput** — every point where bone lies near skin.\n\n**Staging**: Stage 1 — intact skin with redness that does **NOT blanch** when pressed; Stage 2 — partial-thickness loss: a blister or shallow open sore; Stage 3 — full-thickness loss into fat; Stage 4 — exposed bone, tendon or muscle; a wound covered with slough or eschar is 'unstageable' until the base is visible. The staging is one-directional: even a healed Stage 3 remains a Stage 3 (healed) for documentation purposes.\n\n**The Ghanaian nuance deserves its own paragraph**: on darker skin, the early red of Stage 1 can be nearly invisible. Do not rely on colour alone — look and FEEL for the change: an area **warmer or cooler** than surrounding skin, **firmer or boggy** in texture, a different shade (darker or dusky) than the patient's own baseline. Press, release, judge — and where vision fails, the hand and the comparison with the other side succeed.\n\nThe prevention bundle — cheap, ancient, effective: **repositioning at least every two hours**, with the turning chart documented honestly (a chart with no gaps that is never acted on is theatre), using the **30° side-tilt** rather than the old flat 90° roll that grinds the trochanter; **heels floated** — a pillow under the calves, heels clear of the mattress (the thinnest padding in the body between heaven and bone); head of bed as low as the condition tolerates; **skin inspection every shift and after every transfer** — especially the sacrum and heels; **moisture managed** — prompt hygiene after incontinence, dry linen, barrier cream per protocol (moist skin macerates and fails); **nutrition and hydration** — an ulcer eats protein and heals with it (link to lesson 14); and **movement as early and as often as the disease allows** — every walk to the window is prophylaxis. One retired habit to leave behind forever: **never massage a reddened pressure point** — the old ward tradition squeezes the already dying tissue and deepens the injury.",
      },
      {
        type: "text",
        title: "Falls: the trip that should never be a surprise",
        body: "Ward falls are rarely random: they gather around predictable moments and medicines. The risks: age and frailty; **sedatives, antihypertensives, diuretics** (the 3 a.m. diuretic-urgency trip down a dark corridor); **postural hypotension** — check lying AND standing blood pressures in the older patient on the first day and after any new medicine; unfamiliar surroundings; wet floors after mopping; poor lighting (the power outage hour deserves a working torch at the bedside); loose slippers on polished floors; the urge to toilet alone rather than 'disturb' the nurses. The Ghanaian ward adds its own cast: the relative who steps out 'for just five minutes', the bed without rails, the crowded floor space.\n\nThe interventions that actually work: **the call bell within reach EVERY time** (a bell left on the table is the fall waiting to happen — reposition it after every single task); **scheduled toileting rounds** — offer the toilet or bedpan at regular times including before the night settles, because most falls happen en route to the toilet in the dark; **bed low and locked**; non-slip footwear; a night light; cleared walkways; rails where available and appropriate; and the family attendant **trained as a partner** — 'if you must step out, tell us; never leave the restless one alone.' After ANY fall: assess before lifting (conscious? injured? — then help up safely with assistance), examine, comfort, report and DOCUMENT — and then ask the only useful question: **why did this patient fall?** A fall is a symptom of something (a new medicine, a fever, a drop in pressure, an unwitnessed event needing investigation), not merely an accident to be regretted. In the community, the same lens guides your older-adult advice: strength and balance exercise, home hazards, vision and footwear — the CDC's STEADI approach was built for exactly this.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Madam Abena, 78, three days after a stroke, has been lying mostly on her back. At 04:00 her attendant slipped out to buy porridge; determined and unattended, she set off alone for the toilet in the dark, slipped, and was found on the wet, freshly-mopped corridor floor — unhurt but shaken. On your morning skin check, the skin over her sacrum shows a darker patch that does not fade when pressed and feels warmer than the skin around it; her heels are intact. The family asks whether to rub the back with hot water and balm 'to bring the blood.'\n\nWhat is happening, and what is your plan?\n\nAnswer: The sacral patch is a Stage 1 pressure injury — on dark skin, found by pressure, warmth and texture rather than colour alone. The plan: **offloading starts NOW** — two-hourly repositioning with the 30° tilt, the turning chart filled honestly, heels floated on a calf pillow, skin inspected every shift, moisture and hygiene managed, nutrition and fluids pushed with the family (lesson 14's porridge can be fortified, not just bought), and the patch observed for progression — reported and documented. The balm and the hot-water rub are refused kindly: massaging a pressure injury adds injury. And the fall gets its own root-cause work: she must not travel to the toilet alone at night — bell repositioned after every task, scheduled toileting including before sleep, night light arranged, bed kept low, the attendant included in a real plan ('tell us before you step out — even for porridge'), lying/standing blood pressure checked, and her medicines reviewed with the team for sedatives and diuretics. Nobody is blamed; the system is fixed.",
      },
      {
        type: "clinical_pearl",
        body: "On dark skin, the earliest pressure injury speaks in temperature and texture, not colour: warmer, firmer, or a dusky shade unlike the patient's own — press, release, compare with the other side. And the heels are the ulcers nobody watches: a pillow under the calves costs nothing and floats them clear of the mattress — heels are the cheapest prevention on the ward.",
      },
      {
        type: "memory_trick",
        body: "The two-hour question — every two hours the clock asks five things: **TURNED? TOUCHED (inspected)? DRY? DRINKING? — and does the BELL still reach her hand?** Pressure sites roll downhill: **heels, hips, sacrum, elbows** — the points that press the bed; and 'the red that stays' is Stage 1, and massage of it is retired forever.",
      },
      {
        type: "quiz_prompt",
        title: "Why two blood pressures?",
        body: "Why do you check both lying AND standing blood pressure in an older patient after a new antihypertensive or on admission after a fall?\n\nAnswer: Postural (orthostatic) hypotension — a pressure that looks respectable lying down but collapses on standing is a major cause of falls; the standing value reveals the dizziness the patient has been calling 'weakness'. Check after a minute of lying, then after one and three minutes standing, and report the drop with both numbers.",
      },
      {
        type: "summary",
        body: "- Immobility is a multi-system disease: muscles waste in days, bones drain calcium, lungs pool secretions, blood clots in static legs, skin dies over bony points, bowels and minds slow — every prevention begins with movement as early as the illness allows.\n- Pressure ulcers: pressure + shear + moisture over sacrum, heels, hips, elbows, occiput. Stage 1 = non-blanching redness; on dark skin read temperature, texture and shade, not colour alone.\n- Prevention bundle: two-hourly repositioning (30° tilt, charted honestly), heels floated, skin every shift, moisture care, nutrition, early mobilization — and NEVER massage a reddened point.\n- Stages: 1 non-blanching redness → 2 blister/shallow ulcer → 3 full thickness → 4 bone/tendon exposed; slough-covered = unstageable.\n- Falls: predict and prevent — bell in reach always, scheduled toileting, low locked bed, night light, non-slip footwear, trained family attendant, lying-and-standing BP, medicine review. After a fall: assess, comfort, document — then ask WHY; the fall is a symptom.\n- WHO: falls are the second leading cause of unintentional injury death worldwide, older adults most — this is patient safety, not housekeeping.",
      },
    ],
    questions: [
      {
        topic: "Immobility, Falls & Pressure Ulcers",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During a skin check on a dark-skinned patient, the skin over the sacrum does not blanch with pressure and feels warmer and firmer than the surrounding skin. What is this, and what is the correct action?",
        options: [
          "A Stage 1 pressure injury — begin offloading immediately: two-hourly repositioning, heel floating, skin inspection every shift, and report; do NOT massage the area",
          "Ordinary warmth from lying on the back — massage it with balm to restore circulation",
          "A bruise from the fall — observe only, as bruising fades on its own",
          "A fungal infection — apply antifungal cream and recheck in a week",
        ],
        correctIndex: 0,
        explanation:
          "On darker skin, Stage 1 is found with pressure, temperature and texture — the non-blanching, warmer, firmer patch is the earliest pressure injury. The treatment is offloading and prevention, not massage: the old balm-and-hot-water tradition compresses dying tissue further. Document, report, and start the bundle today — Stage 1 is the cheapest stage to treat.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Immobility, Falls & Pressure Ulcers",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A patient with a full leg cast must have his heels protected. Which intervention floats the heels correctly?",
        options: [
          "A firm pillow placed under the CALVES so the heels lift clear of the mattress",
          "Rolling a towel directly UNDER the heels",
          "Tucking the blanket tightly over the feet",
          "Elevating the whole bed at the knees only",
        ],
        correctIndex: 0,
        explanation:
          "Heel offloading means pressure OFF the heel: support the calf with a pillow and let the heel hang free of the mattress. A towel under the heel concentrates pressure exactly where the ulcer would form, and tight bedding adds friction and shear.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Immobility, Falls & Pressure Ulcers",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Most in-hospital falls happen during one specific activity. Which, and which prevention answers it directly?",
        options: [
          "During physiotherapy sessions — answered by fewer sessions",
          "On unaccompanied trips to the toilet, often at night — answered by scheduled toileting rounds, the call bell always within reach, and a night light",
          "During ward rounds — answered by shorter rounds",
          "In the outpatient department — answered by more ushers",
        ],
        correctIndex: 1,
        explanation:
          "The classic fall story is the determined patient setting off alone for the toilet in the dark rather than 'disturbing' the staff. Scheduled toileting (including settling the patient before sleep), a bell that is repositioned within reach after every task, a night light and a low locked bed answer the story at its source — dignity is preserved and gravity is not consulted.",
        courseSlug: "medical-surgical-nursing-4",
      },
      {
        topic: "Immobility, Falls & Pressure Ulcers",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "An older patient has been on bed rest for a week. Which combination of nursing actions best addresses the chest and circulation hazards of immobility?",
        options: [
          "Deep-breathing and coughing exercises, early sitting out and assisted walking, leg exercises, and hydration — with the team's pharmacological prophylaxis where prescribed",
          "Strict supine positioning to conserve energy",
          "Limiting fluids to reduce the need to move to the toilet",
          "Painkillers alone, since discomfort is what prevents movement",
        ],
        correctIndex: 0,
        explanation:
          "The lungs and veins of the idle patient are saved by expansion and flow: breathing exercises and coughing clear pooled secretions; sitting and walking re-open lungs and push venous blood; leg exercises pump the calves; hydration keeps blood from sludging — and the team's clot-prevention medicines ride on top where prescribed. The other options each quietly manufacture the complications they claim to avoid.",
        courseSlug: "medical-surgical-nursing-4",
      },
    ],
    flashcards: [
      {
        topic: "Immobility, Falls & Pressure Ulcers",
        front: "What defines a Stage 1 pressure injury, and how is it found on dark skin?",
        back: "Intact skin with non-blanching redness over a pressure point; on darker skin, judge by pressure test plus temperature, texture and shade change versus the patient's baseline — then offload immediately and never massage.",
      },
      {
        topic: "Immobility, Falls & Pressure Ulcers",
        front: "The pressure sites to inspect every shift?",
        back: "Sacrum, heels, hips (trochanters), elbows, ankles, and the occiput — wherever bone lies near skin and the mattress is unyielding.",
      },
      {
        topic: "Immobility, Falls & Pressure Ulcers",
        front: "The prevention bundle for pressure ulcers?",
        back: "Two-hourly repositioning with 30° tilt (chart honestly), heels floated on a calf pillow, skin inspection every shift, moisture care, nutrition and hydration, early mobilization — and no massaging of reddened points.",
      },
      {
        topic: "Immobility, Falls & Pressure Ulcers",
        front: "After a patient falls, what question turns the event into care?",
        back: "'Why did this patient fall?' — assess before lifting, examine, comfort, report and document, then investigate the cause: new medicines, postural hypotension, unwitnessed symptoms. A fall is a symptom, not just an accident.",
      },
      {
        topic: "Immobility, Falls & Pressure Ulcers",
        front: "The four-bed-rest complications for the lungs, veins, bones and skin?",
        back: "Hypostatic pneumonia, deep vein thrombosis, calcium loss/weakened bone, and pressure ulcers — each answered by the same prescription: early, repeated, supported movement.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Falls — Key Facts",
      },
      {
        organization: "World Health Organization",
        title: "Global Patient Safety Action Plan 2021–2030",
        year: "2021",
      },
      {
        organization: "Centers for Disease Control and Prevention",
        title: "STEADI — Older Adult Fall Prevention",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "15th edition",
        note: "Educational source — verify current edition against your course texts.",
      },
    ],
  },
];
