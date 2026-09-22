// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 4, Semester 1 — Batch B (Perioperative Nursing)
// 10 lessons anchored to prisma/seed-data/curriculum.ts
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "perioperative-nursing",
    moduleTitle: "Before the Knife",
    lessonTitle: "Pre-operative Assessment & Preparation",
    description:
      "The safest surgery begins days before the knife: assessing fitness, correcting what can be corrected, and preparing the patient's body and mind for the journey through theatre.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Perform a structured pre-operative assessment covering history, examination and baseline investigations, and explain what each element contributes to safety.",
      "Recognise the patient factors — anaemia, uncontrolled hypertension, herbal medicines, poor nutrition — that commonly postpone or complicate elective surgery in Ghana.",
      "Apply pre-operative preparation: fasting rules, skin and body preparation, education on breathing and early walking, and the honest talk that calms fear.",
    ],
    tags: ["surgery preparation", "preoperative assessment", "patient education"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Elective surgery in a Ghanaian district hospital runs on a list — hernia repairs on Monday, hydroceles on Tuesday, the occasional open gallbladder or prostate case when the visiting surgeon comes. The list only works when every patient on it was checked, corrected and prepared before the day itself.\n\n**Perioperative nursing** covers the whole journey: **pre-operative** (from the decision for surgery to the theatre doors), **intra-operative** (the operation itself) and **post-operative** (recovery and beyond). This lesson is about the first and longest phase — the one where you, the nurse, hold the most power to change the outcome. A patient who arrives in theatre anaemic, frightened, dehydrated or full of undeclared herbal bitters has already been set up for trouble. A patient who was assessed, optimised and taught what to expect arrives with physiology and courage intact.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The pre-operative assessment answers three questions. Is this patient **fit for anaesthesia and surgery**? What can be **improved before the day**? And what does this patient **need to know and do** to come out safely on the other side?\n\nFitness is judged from history and examination: the presenting condition, of course, but also the **comorbidities** that colour everything — hypertension, diabetes, asthma, epilepsy, sickle cell disease, heart or kidney disease, and any previous problems with anaesthesia in the patient or the family. Ask about **medicines** (anticoagulants, steroids, insulin and oral hypoglycaemics all need planning), **allergies** (drugs, latex, chlorhexidine, food), smoking and alcohol, and **loose teeth or dental crowns** — a tooth dislodged during airway instrumentation is a classic aspiration disaster. In Ghana, ask about **herbal preparations and 'bitters'** with real respect and zero judgement: several contain compounds that affect bleeding or anaesthesia, and patients hide them only when they expect a scolding.\n\nExamination focuses on the **airway**, the **cardiovascular and respiratory systems**, the **skin over the operative site** (infection, abrasions or dermatitis are a postponement waiting to happen), baseline vital signs, nutrition (a thin, malnourished patient heals slowly and wounds break down) and — always — signs of **anaemia**: pallor of the conjunctivae and palms in a patient whose haemoglobin may be borderline.",
      },
      {
        type: "table",
        title: "What to gather before an elective case",
        body: "| Area | What to check | Why it matters |\n|---|---|---|\n| History | Comorbidities, drugs, allergies, previous anaesthesia, family problems, herbs and bitters, smoking, alcohol | Predicts risk and shapes the anaesthetic plan |\n| Examination | Airway, heart and chest, skin at the site, nutrition, baseline vitals, pallor | Establishes fitness and catches postponable problems early |\n| Investigations | Haemoglobin, urinalysis, sickling screen where relevant, blood group and cross-match for major cases, ECG and other tests as indicated | Anaemia is common in Ghana; a cross-match takes time to arrange |\n| Fasting | Clear fluids up to 2 hours, light meal about 6 hours before, exactly as the anaesthetist directs | Prevents aspiration under anaesthesia |\n| Consent and site | Consent signed after a real explanation; operative site marked with the patient awake | The legal and safety spine of the whole journey |\n| Body preparation | Jewellery and piercings removed, nail varnish and make-up off, bath or shower, theatre gown, dentures and prostheses removed and labelled | Metal heats and burns with diathermy; varnish blocks the pulse oximeter |\n| Education | Deep breathing, supported coughing, early walking, what to expect on waking | Prevents chest complications and clots; fear is a complication too |",
      },
      {
        type: "text",
        title: "Reading the risk, fixing what can be fixed",
        body: "Anaesthetists grade physical fitness with the **ASA classification** — from ASA I, a healthy patient, up to ASA V, a patient not expected to survive without surgery. You do not assign the grade, but you should understand it: it tells you who needs senior eyes and closer watching.\n\nSome findings mean elective surgery should **wait**. A haemoglobin well below the safe threshold for the planned operation should be investigated and corrected — in Ghana, anaemia is the commonest reason a list gets trimmed. Uncontrolled hypertension, a poorly controlled diabetic, an active chest infection, an infected operative site or malaria on the morning of surgery are all postponements, not inconveniences. Sickle cell patients need special perioperative planning — hydration, oxygenation and vigilance — decided with the team. None of this is about refusing people surgery; it is about refusing to let surgery harm them.",
      },
      {
        type: "clinical_pearl",
        body: "The pre-operative visit is your best chance to prevent a complication. Two minutes spent teaching deep breathing and early walking prevents more post-operative fever and thrombosis than any drug on the shelf — and ten minutes of honest, calm explanation prevents the fear that keeps patients awake and hypertensive the night before.",
      },
      {
        type: "callout",
        title: "Fasting: the 2 and 6 rule",
        body: "Starving patients for a full day is old medicine and real cruelty. Modern practice, as directed by the anaesthetist, allows **clear fluids up to 2 hours** and a **light meal about 6 hours** before anaesthesia; fried, fatty food needs longer. Clear means water, plain tea without milk, clear juice — anything you could read a newspaper through. Milo, porridge and orange juice with pulp are not clear. Confirm the exact instructions on each order and write the 'nothing by mouth from' time where night staff will see it — the commonest pre-operative error on a busy ward is a well-meaning cup of tea at 5 am.",
      },
      {
        type: "quiz_prompt",
        title: "The hidden anaemia",
        body: "A 42-year-old trader is booked for elective hernia repair. She looks well, but at the pre-operative check her conjunctivae are pale and her haemoglobin returns at 7.4 g/dL. She asks you to 'just let them do it — I have closed my shop for this.'\n\nWhat should happen, and how do you explain it to her?\n\nAnswer: Elective surgery is postponed; the anaemia is investigated and treated — iron therapy, nutrition and management of the underlying cause with the medical team, with the blood group and cross-match plan agreed well before any new date. Explain with respect: anaesthesia and surgery will cost blood, and a haemoglobin that is tolerated on the street can collapse on the table. Correcting it first protects the operation she has already sacrificed for — it is not a cancellation of her plans, it is the reason her plans will succeed.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 58-year-old teacher is first on Friday's list for open prostate surgery. He is hypertensive, takes his tablets 'when I remember', and has been drinking a popular herbal 'bitters' for prostate strength. The evening before surgery you review him: blood pressure 158/98, he ate his supper at 10 pm, his consent form is unsigned, and his wedding ring will not come off.\n\nWhat do you do with each of these before morning?\n\nAnswer: Report the blood pressure and the adherence honestly — the team may re-check, treat or postpone; never hide it to save the list. Document the herbal use and inform the surgeon and anaesthetist — bleeding interactions are theirs to judge, but only if they know. Fasting: a 10 pm light meal fits the 6-hour rule only if surgery starts after 4 am — confirm the list order, keep him nil by mouth for solids from the instructed time and allow clear fluids until 2 hours before. Consent: the surgeon must discuss the operation and sign with him tonight — a signature rushed in the theatre holding area is not informed consent. The ring: try soap and string or a cutter per policy, and if it will not come off, declare it loudly before anyone touches the diathermy — metal on the finger is a burn waiting for its chance. Finish with warmth: teach breathing exercises, confirm which morning medicines he should take, and let him sleep.",
      },
      {
        type: "memory_trick",
        body: "PREP the patient: **P**ast and present history — including herbs, never judgmentally; **R**isks found and corrected — anaemia, blood pressure, infection; **E**xplanation and consent — the surgeon explains, you check and reinforce; **P**reparation of body and mind — fasting, skin, jewellery off, breathing taught, fear calmed.",
      },
      {
        type: "summary",
        body: "- Perioperative nursing = pre-operative, intra-operative and post-operative phases; your greatest leverage is pre-operative.\n- Assess history (comorbidities, drugs, allergies, herbs, teeth), examine (airway, chest, skin, nutrition, pallor) and investigate as indicated.\n- Correct what can be corrected — anaemia, blood pressure, infection — before the knife; postponement is protection, not failure.\n- Fasting: clear fluids to 2 hours, light meal to 6 hours, exactly as directed — and write the times where night staff will see them.\n- Jewellery off, nail varnish off, site marked with the patient awake, consent signed after a real explanation.\n- Teach breathing, supported coughing and early walking — cheap prevention of fever, chest complications and clots.",
      },
    ],
    questions: [
      {
        topic: "Pre-operative Assessment",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the main purpose of the pre-operative assessment?",
        options: [
          "To identify risks to anaesthesia and surgery and correct what can be corrected before the day",
          "To complete the paperwork the theatre office requires before a patient can be listed",
          "To give the patient a tour of the operating theatre and meet the team",
          "To select the anaesthetic drugs the patient will receive",
        ],
        correctIndex: 0,
        explanation:
          "The assessment exists to make surgery safer: it predicts risk, flags what can be optimised — anaemia, blood pressure, infection — and drives the anaesthetic plan. Paperwork is a by-product, and drug choice belongs to the anaesthetist.",
        courseSlug: "perioperative-nursing",
      },
      {
        topic: "Pre-operative Fasting",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient is scheduled for elective surgery under general anaesthesia at 8 am. Per modern fasting guidance, as directed by the anaesthetist, what is generally acceptable?",
        options: [
          "A full breakfast at 5 am to keep up strength",
          "Absolutely nothing after midnight the previous day, including water",
          "A light meal about 6 hours before, and clear fluids up to 2 hours before",
          "Milo and bread at 6 am, because Milo is 'light'",
        ],
        correctIndex: 2,
        explanation:
          "Modern practice allows clear fluids until 2 hours and a light meal until about 6 hours before anaesthesia: the stomach empties liquids fast, and aspiration risk is controlled without dehydration or cruelty.",
        whyOthers: {
          A: "A full breakfast 3 hours before anaesthesia is an aspiration risk — the stomach has not emptied.",
          B: "Total starvation from midnight including water is old practice — dehydration and misery without extra safety; clear fluids to 2 hours are permitted.",
          D: "Milo and bread is a light meal needing about 6 hours — it is neither clear nor 2-hour-safe.",
        },
        courseSlug: "perioperative-nursing",
      },
      {
        topic: "Pre-operative Assessment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During pre-assessment a patient admits taking herbal 'bitters' every day. What is the nurse's best response?",
        options: [
          "Tell him to stop at once and warn him the surgeon will cancel the operation",
          "Thank him for his honesty, document it clearly, and inform the surgeon and anaesthetist so they can judge bleeding and interaction risks",
          "Note it in your personal notebook but keep it out of the notes to spare the patient embarrassment",
          "Reassure him that herbal medicines never interact with anaesthesia",
        ],
        correctIndex: 1,
        explanation:
          "Herbal preparations can affect clotting and anaesthesia. The safe path is open, respectful documentation and escalation to the team — patients hide herbs only when they expect judgement, and hidden herbs are the dangerous ones.",
        courseSlug: "perioperative-nursing",
      },
      {
        topic: "Pre-operative Assessment",
        type: "MCQ",
        difficulty: "Hard",
        stem: "A patient for elective surgery has a haemoglobin of 7.4 g/dL but no symptoms and insists on proceeding. Why is this a postponement rather than a nuisance?",
        options: [
          "It is not — asymptomatic anaemia is safe as long as the patient consents",
          "Low haemoglobin only matters in children and pregnant women",
          "The main concern is that the patient may faint during the consent signing",
          "Anaesthesia and surgical blood loss will steal oxygen-carrying capacity that a patient at 7.4 g/dL does not have — reserve must be built and the cause corrected first",
        ],
        correctIndex: 3,
        explanation:
          "A haemoglobin that is tolerated at rest on the street may decompensate under anaesthesia and surgical bleeding, when oxygen delivery is already stressed. For elective surgery the anaemia is corrected and its cause found first — that is protection, not obstruction.",
        courseSlug: "perioperative-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Perioperative Phases",
        front: "Name the three phases of perioperative nursing.",
        back: "Pre-operative (from decision for surgery to the theatre doors), intra-operative (the operation itself), post-operative (recovery and after) — the nurse's leverage is greatest pre-operative.",
      },
      {
        topic: "Pre-operative Fasting",
        front: "State the modern elective fasting guidance.",
        back: "Clear fluids up to 2 hours and a light meal about 6 hours before anaesthesia, exactly as the anaesthetist directs — never a full day of starvation.",
      },
      {
        topic: "Pre-operative Assessment",
        front: "Why must loose teeth be flagged at pre-assessment?",
        back: "Airway instrumentation can dislodge them — aspiration of a tooth is a classic disaster; the anaesthetist plans the airway knowing.",
      },
      {
        topic: "Herbal Medicines",
        front: "How should the nurse ask about herbal medicines and bitters?",
        back: "Respectfully and without judgement, documenting exactly what is taken — patients hide them only when they expect a scolding; the team must judge bleeding and interaction risks.",
      },
      {
        topic: "Pre-operative Assessment",
        front: "Why does anaemia commonly trim Ghanaian surgical lists?",
        back: "Anaesthesia and surgical blood loss demand oxygen-carrying reserve; a low haemoglobin tolerated on the street can decompensate on the table — correct it first for elective cases.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022 (15th edition)",
        note: "Chapters on perioperative nursing and pre-operative assessment. Verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "WHO Guidelines for Safe Surgery 2009: Safe Surgery Saves Lives",
        year: "2009",
        note: "Foundation of the WHO Surgical Safety Checklist and pre-operative preparation standards.",
      },
      {
        organization: "AORN",
        title: "Guidelines for Perioperative Practice",
        year: "2023",
        note: "Verify current edition — includes pre-operative patient preparation recommendations.",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "perioperative-nursing",
    moduleTitle: "Before the Knife",
    lessonTitle: "Consent, Checklists & Patient Safety",
    description:
      "Two quiet systems — a real conversation called consent, and a checklist that makes the whole team stop — stand between every surgical patient and the errors that happen when humans rush.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Explain the elements of informed consent and describe the nurse's role as witness, verifier and advocate — never as the person who obtains it.",
      "Apply the three phases of the WHO Surgical Safety Checklist (Sign In, Time Out, Sign Out) and the nurse's part in each.",
      "Recognise how hierarchy, hurry and silence cause surgical harm, and practise speaking up in a way the whole team can hear.",
      "Describe consent in special situations: children, language barriers and true emergencies.",
    ],
    tags: ["patient safety", "surgical checklist", "informed consent"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Surgery is a strange bargain: an unconscious human being entrusts their body to a room full of strangers with knives. Two systems make that bargain safe. The first is **informed consent** — a real conversation in which the patient understands what will be done, what it risks and what the alternatives are. The second is the **surgical safety checklist** — a short, stubborn ritual that forces the whole team to stop and confirm the same facts out loud, three times, before harm can find a gap.\n\nBoth systems fail in the same way: people perform them with their mouths while their minds are elsewhere. This lesson is about doing them for real — and about the nurse's unique power to make them real.",
      },
      {
        type: "text",
        title: "Informed consent: the conversation, not the signature",
        body: "Valid consent rests on three pillars. **Capacity** — the patient can understand, retain and weigh the information; adults are presumed to have it, while intoxication, severe illness and confusion can remove it. **Disclosure** — the surgeon explains the **nature** of the procedure, its **benefits**, its **material risks**, the **alternatives** (including doing nothing) and the **right to refuse**. **Voluntariness** — the choice is made free of pressure or manipulation.\n\nThe person who obtains consent is the **surgeon or doctor performing the procedure** — it is their conversation, their disclosure, their responsibility. The nurse's role is different and no less important: you **witness** the signature, you **confirm the patient actually understood** (ask them, in their own language, to tell you what operation they are having — a blank face means the conversation never happened), you **answer questions within your scope** honestly, and you **escalate** any unanswered question to the doctor rather than smoothing it over. A signature on a form is evidence of a process; it is not the process. For children, a parent or legal guardian consents — with the child's own assent sought — and a genuine language barrier demands an interpreter, not gestures and hope.",
      },
      {
        type: "callout",
        title: "The last three questions before theatre",
        body: "Whatever else happens in the holding area, three questions from you are the patient's final safety net: 'What operation are you having?' 'Which side — can you point with your hand?' 'Do you have any questions you still want answered?' If the answers wobble, the operation waits. Better ninety seconds of delay than a lifetime of regret — and the patient who feels free to ask questions is the patient who has truly consented.",
      },
      {
        type: "text",
        title: "The WHO Surgical Safety Checklist",
        body: "Born from the WHO **Safe Surgery Saves Lives** campaign, the checklist runs the entire team through three pauses. **Sign In** — before induction of anaesthesia, with the patient still awake: confirm identity, procedure, site and consent; check the site is marked, the anaesthesia machine and pulse oximeter work, allergies are known, and difficult-airway or heavy-blood-loss risks are declared. **Time Out** — before skin incision, with everyone stopped: the whole team confirms out loud the patient, site and procedure; confirms antibiotic prophylaxis was given within the required window (commonly within the last 60 minutes); agrees the anticipated critical events and who will lead them; and confirms imaging is displayed if needed. **Sign Out** — before the patient leaves theatre: the procedure as actually performed is recorded, instrument, swab and needle counts are confirmed correct, specimens are labelled and read aloud, equipment problems are noted, and the key concerns for recovery are spoken to whoever receives the patient.\n\nThe checklist is not the paper — it is the **stop**. A Time Out performed while the surgeon is already painting the skin is theatre, not safety.",
      },
      {
        type: "table",
        title: "The checklist and the nurse",
        body: "| Phase | When | The heart of it | The nurse's voice |\n|---|---|---|---|\n| Sign In | Before induction, patient awake | Identity, procedure, site, consent, site mark, equipment, allergies, airway and bleeding risk | You are usually the one holding the form — read it with the patient's own words, not a mumble |\n| Time Out | Before skin incision, all activity stops | Patient, site, procedure confirmed aloud; antibiotic timing; critical events anticipated; imaging up | If anyone keeps working, say 'Time Out, please' — and wait; making the stop real is your job |\n| Sign Out | Before the patient leaves theatre | Procedure recorded, counts correct, specimens labelled and read aloud, recovery concerns handed over | You confirm the counts and read the specimen label aloud, with the scrub nurse verifying the name |",
      },
      {
        type: "clinical_pearl",
        body: "The commonest checklist failure in the world is a team that says the words without doing the stop — a silent checklist is a missed checklist. The second commonest is hierarchy: the junior nurse who saw the problem but assumed 'the doctor must know'. In the checklist's own design, every member of the team, from the newest nurse to the chief surgeon, is expected to speak — and speak they must. If you see something, say something. Nobody was ever harmed by a stopped operation.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Morning list at a regional hospital. At Sign In, the patient — a quiet 50-year-old farmer — says he is here 'for the doctor to fix my hernia'. The notes and consent form say RIGHT inguinal hernia repair, but there is a skin mark over the LEFT groin.\n\nYou are the nurse completing Sign In. What do you do?\n\nAnswer: You stop the list — no induction, no exceptions. Call the surgeon, re-verify against the original outpatient notes, the patient's own words and, where possible, the family waiting outside. The correct side is confirmed and the mark corrected in theatre with the patient still awake, before anything else happens. The discrepancy, the verification and the correction are documented. A patient too shy to say 'left' is exactly the patient the checklist exists for: identity, site and procedure are confirmed with words from the patient's own mouth, checked against the mark on the skin, and never assumed.",
      },
      {
        type: "quiz_prompt",
        title: "The unconscious emergency",
        body: "2 am. A man is brought in unconscious with a perforated appendix and generalised peritonitis. His phone is locked, no family has arrived, and the theatre team is scrubbing.\n\nCan surgery proceed without consent — and how is it handled?\n\nAnswer: Yes. When a patient lacks capacity, no authorised person is reachable, and delay would cause death or serious harm, emergency life-saving treatment proceeds under the principle of necessity. Document the clinical urgency, the attempts to reach family and the senior clinicians' decision, and keep trying to contact relatives — the family is informed honestly the moment they arrive. The principle of necessity is a narrow door: it never covers convenience, and it closes the instant a patient with capacity, or a reachable guardian, says no.",
      },
      {
        type: "memory_trick",
        body: "The checklist's three stops in one breath: **Sign In before Sleep. Time Out before Touch. Sign Out before Shift.** Sign In with the patient awake, Time Out before the knife touches skin, Sign Out before the patient leaves the room — three S-T pairs, and the whole safety of surgery between them.",
      },
      {
        type: "summary",
        body: "- Consent = capacity + disclosure (nature, benefits, risks, alternatives, right to refuse) + voluntariness; the surgeon's conversation, the nurse's witness and verification.\n- A signature is evidence, not the process — test understanding by asking the patient to say the operation in their own words.\n- WHO checklist: Sign In (before induction, patient awake), Time Out (everyone stops, before incision), Sign Out (before the patient leaves theatre).\n- The stop is the safety — a mumbled checklist is decoration; anyone on the team may call it.\n- Children consent through parents or guardians with the child's assent; language barriers need an interpreter, not gestures.\n- True emergencies proceed under the principle of necessity — documented, with family sought throughout.",
      },
    ],
    questions: [
      {
        topic: "Surgical Safety Checklist",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What are the three phases of the WHO Surgical Safety Checklist, in order?",
        options: [
          "Anaesthesia check, operation check, recovery check",
          "Admission, procedure, discharge",
          "Sign In (before induction), Time Out (before incision), Sign Out (before the patient leaves theatre)",
          "Pre-op, intra-op and post-op assessment",
        ],
        correctIndex: 2,
        explanation:
          "Sign In happens before induction with the patient awake, Time Out is the whole-team stop before skin incision, and Sign Out closes the case before the patient leaves theatre — three pauses that catch errors at the only moments they can still be corrected.",
        courseSlug: "perioperative-nursing",
      },
      {
        topic: "Informed Consent",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "The surgeon has explained a procedure and the patient has signed the form. As the nurse, what is your part in this consent?",
        options: [
          "Repeat the full risk disclosure yourself so the surgeon does not have to",
          "Witness the signature, confirm the patient genuinely understood, answer questions within your scope and escalate the rest",
          "Ensure the form is filed correctly — your role ends with the paperwork",
          "Refuse to witness any consent obtained by another professional",
        ],
        correctIndex: 1,
        explanation:
          "Disclosing risks and obtaining consent is the surgeon's duty; the nurse witnesses, verifies real understanding, answers what is within nursing scope, and escalates unanswered questions. A witnessed signature on an uninformed patient protects no one.",
        courseSlug: "perioperative-nursing",
      },
      {
        topic: "Surgical Safety Checklist",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During a Time Out, the surgeon continues painting the skin while the team mumbles the checklist. What is the safest response?",
        options: [
          "Call 'Time Out, please' and wait for a genuine stop — every team member is empowered to make the pause real",
          "Say nothing — the surgeon's pace signals urgency and seniority",
          "Leave the theatre and report the surgeon to the matron after the case",
          "Complete the checklist form silently so it is on record",
        ],
        correctIndex: 0,
        explanation:
          "A Time Out that overlaps with work is a checklist in name only. The power of the pause comes from the stop itself — and the checklist design explicitly empowers every team member, whatever their rank, to demand it.",
        whyOthers: {
          B: "Silence in the face of hierarchy is exactly the failure mode the checklist was built to break.",
          C: "Reporting later does not protect this patient — the pause must happen before the incision.",
          D: "A form completed silently documents a stop that never happened; the record becomes fiction.",
        },
        courseSlug: "perioperative-nursing",
      },
      {
        topic: "Informed Consent",
        type: "MCQ",
        difficulty: "Clinical Reasoning",
        stem: "An unconscious emergency patient needs life-saving surgery and no family member can be reached. What is the correct course?",
        options: [
          "Delay surgery until a relative arrives to sign, whatever the cost",
          "Have the nurse sign the form on the patient's behalf",
          "Obtain consent from the security officer or any visitor who accompanied the patient",
          "Proceed under the principle of necessity, documenting urgency and attempts to reach family, and inform them the moment they arrive",
        ],
        correctIndex: 3,
        explanation:
          "When delay would kill or seriously harm an incapacitated patient with no reachable authorised person, emergency treatment proceeds under the principle of necessity — carefully documented, with the search for family continuing. Nurses do not consent for patients, and strangers cannot.",
        courseSlug: "perioperative-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Informed Consent",
        front: "Name the three pillars of valid informed consent.",
        back: "Capacity, full disclosure (nature, benefits, risks, alternatives, right to refuse) and voluntariness — obtained by the surgeon, witnessed and verified by the nurse.",
      },
      {
        topic: "Surgical Safety Checklist",
        front: "When does each checklist phase happen?",
        back: "Sign In before induction (patient awake), Time Out before skin incision (everyone stops), Sign Out before the patient leaves theatre.",
      },
      {
        topic: "Informed Consent",
        front: "What is the nurse's role in surgical consent?",
        back: "Witness the signature, verify real understanding, answer questions within scope and escalate unanswered ones — never obtain consent or disclose risks on the surgeon's behalf.",
      },
      {
        topic: "Informed Consent",
        front: "How is consent handled for a child?",
        back: "A parent or legal guardian consents, the child's own assent is sought, and a genuine refusal of non-urgent procedures by an older child is taken seriously.",
      },
      {
        topic: "Emergency Consent",
        front: "What is the principle of necessity?",
        back: "Emergency life-saving treatment of an incapacitated patient with no reachable authorised person — documented, family sought throughout, and never used for convenience.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Surgical Safety Checklist and Implementation Manual",
        year: "2009",
        note: "Safe Surgery Saves Lives programme — Sign In, Time Out and Sign Out structure.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
      {
        organization: "AORN",
        title: "Guidelines for Perioperative Practice",
        year: "2023",
        note: "Verify current edition — includes team communication and patient verification recommendations.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022 (15th edition)",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "perioperative-nursing",
    moduleTitle: "Before the Knife",
    lessonTitle: "Theatre Setup & Instrument Preparation",
    description:
      "A theatre that is ready before the patient arrives — zones respected, machines checked, instruments truly sterile and indicator-verified — is the invisible half of every safe operation.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe theatre zones and attire rules, and explain how traffic control protects the sterile field.",
      "Organize the room and equipment checks that must be completed before the patient enters theatre.",
      "Classify surgical instruments into their working families and match them to surgical tasks.",
      "Apply sterilization quality control: autoclave cycles, chemical and biological indicators, and the discipline of event-related sterility.",
    ],
    tags: ["surgical instruments", "sterilization", "operating theatre"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Walk into a well-run theatre at 7 am and you will feel it before you can name it: the room is arranged, the machines hum, the instruments lie in counted order, and nobody is hunting for anything. That calm was built — mostly by nurses — starting long before the patient. In Ghana's theatres, where a single autoclave may serve a whole suite and a list can change at a moment's notice, the discipline of preparation is the difference between a safe day and a chaotic one.\n\nThis lesson walks the setup from the door inwards: the zones and their rules, the room and equipment checks, the instruments themselves, and the sterilization science that keeps every item on the trolley genuinely safe to put inside a human body.",
      },
      {
        type: "text",
        title: "Zones, attire and the war on traffic",
        body: "Theatres are zoned like a fortress. The **outer zone** — reception, offices, stores — accepts street clothes. The **semi-restricted zone** — the corridors surrounding theatre — demands **theatre attire**: a dedicated scrub suit, theatre slippers that never leave the theatre area, and a cap covering all hair. The **restricted zone** — the operating rooms themselves — adds the **mask**, worn whenever a case is running or a sterile field exists, plus sterile gown and gloves for the scrubbed team. Ghanaian realities put constant pressure on these rules — cramped changing rooms, storerooms that spill into corridors, colleagues who 'just want to pass through' — and that is exactly why they matter: every unmasked face and every street-dust uniform that passes is bacteria travelling toward the field.\n\n**Traffic control** is the other half: doors kept closed, entries limited and counted, no theatre doubling as a shortcut, meeting room or drying yard. Between cases the room is cleaned — surfaces wiped with detergent then disinfectant, floor wet-mopped, waste and linen removed — and at day's end a **terminal clean** resets the whole room. And keep the **patient warm**: theatres run cool for the gowned team, so plan blankets, warmed fluids and warmed drapes from the start — a hypothermic patient bleeds more and infects more.",
      },
      {
        type: "text",
        title: "The room and machine checks",
        body: "Before any patient crosses the door, a nurse's eyes run a circuit. The **anaesthesia machine** is checked by the anaesthesia provider — but you confirm suction works with a spare catheter at hand, and that oxygen is available from more than one source. In many Ghanaian theatres that means a functioning cylinder whose gauge you have actually read, plus a concentrator or wall supply where it exists — the power cut that teaches you the cylinder level was empty is a lesson nobody wants. The **diathermy** machine is present, tested and has a patient return pad ready. The **operating table** moves smoothly and takes the accessories today's position will need. The **lights** focus and hold. Suction, tourniquet, instrument tables, waste bins, sharps containers, sutures and dressings — all in place. Keep a **checklist on the wall** for the first case of the day; memory is not a machine.",
      },
      {
        type: "text",
        title: "Instruments: the working families",
        body: "Learn instruments as families, not strangers. **Cutting**: scalpel handles holding blades — the slim 15 for delicate work, the broad 10 and the longer 20s for long incisions — and scissors, from heavy **Mayo** for sutures and tough tissue to fine **Metzenbaum** for delicate dissection. **Grasping**: tissue forceps — toothed **Adsons** for skin, fine **DeBakeys** for vascular work, **Allis** for gripping tissue edges, soft **Babcocks** for bowel. **Clamping**: **mosquito** forceps for small vessels, **Kelly/Crile** for medium, toothed **Kochers** for structures that must not slip. **Retracting**: handheld **Langenbecks** for shallow wounds, deep right-angled **Deavers** for the abdomen, self-retaining **Balfours** that hold a laparotomy open on their own. **Suturing**: needle holders that grip curved needles at exactly the right point on their curve. Add **sponge-holding (ring) forceps** — which double as the skin-prep instrument — plus swabs, packs and the sutures themselves.",
      },
      {
        type: "table",
        title: "Instrument families at a glance",
        body: "| Family | Job | Members you will meet | Theatre note |\n|---|---|---|---|\n| Cutting | Divide tissue | Scalpel blades 10, 15, 20; Mayo and Metzenbaum scissors | Blades counted separately — the sharpest thing in the room |\n| Grasping | Hold and manipulate | Adson, DeBakey, Allis, Babcock forceps | Toothed for skin and tough tissue; smooth for delicate and bowel work |\n| Clamping | Occlude vessels and structures | Mosquito, Kelly/Crile, Kocher | Chosen by vessel size and grip needed — the toothed Kocher holds what slips |\n| Retracting | Hold the wound open | Langenbeck, Deaver, Balfour | Protect edges where you can; pad what you cannot |\n| Suturing | Close and repair | Needle holders, suture packets | Needles are counted like swabs — every single one |",
      },
      {
        type: "text",
        title: "Sterilization: making instruments truly safe",
        body: "An instrument's journey is **clean → decontaminate → inspect → pack → sterilize → store → use**. Cleaning comes first — blood and debris are washed off wearing heavy gloves; never scrub blind in murky water, because sharps injuries happen exactly there — since sterilization cannot penetrate dirt. Items are inspected: broken forcep jaws and cracked insulation on diathermy instruments are dangers, not inconveniences. Then they are wrapped in double layers with an **indicator strip inside** and sterilized.\n\nThe workhorse is the **autoclave** — steam under pressure. Standard cycles run about **121°C for 15–30 minutes** (gravity displacement) or **134°C for 3–4 minutes** (pre-vacuum, for porous loads). But the clock is not proof — **the indicators are the proof**. The external **chemical indicator tape** shows the pack met steam; the internal **multi-variable strip** — which the scrub nurse checks before opening a pack — confirms the conditions were met inside, where it matters; the daily **Bowie-Dick test** proves air removal in pre-vacuum autoclaves; and weekly **biological indicators** (spore tests) prove killing power outright. Where supply chains are irregular, the discipline bends towards the inner strip — but never away from it.",
      },
      {
        type: "clinical_pearl",
        body: "Check the indicator before a pack touches the field — the tape outside AND the strip inside. And remember that sterility is **event-related, not calendar-related**: a perfectly autoclaved set stored damp, crushed or in a torn wrapper is contaminated, whatever the date on the label. The wrapper protects, the shelf stores, the indicator proves, the handling decides.",
      },
      {
        type: "callout",
        title: "Wet packs and 'flash' shortcuts",
        body: "A **wet pack** is a contaminated pack: moisture wicks bacteria through the wrapper, so it goes back for full re-processing, never onto the field. **Immediate-use ('flash') sterilization** — a fast cycle at the theatre door — exists for one reason only: a dropped, urgently-needed instrument in an emergency. It is never acceptable as routine, never for implants, and never a workaround for a broken autoclave. The pressure to 'just flash it' is constant in a busy theatre; the nurse who redirects that pressure towards fixing the sterilization problem is protecting every patient on the list.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "7:15 am, first case of a busy list. The theatre officer hands you the wrapped major set, but the tape has barely changed colour and the internal strip, when you look, has not turned at all. 'The machine beeped and the timer ran — it must be fine. Do you want the list to delay?'\n\nWhat do you do?\n\nAnswer: The set is not sterile until the indicators say so — a completed timer is not proof of a completed cycle. Return the set for full re-processing and open a verified spare from stock. Then work the problem with the theatre officer: cycle selected, steam pressure, water level, how the load was packed, door seal — and run a Bowie-Dick or chemical test cycle if the fault is not obvious. Report the fault to whoever owns theatre equipment and document the event and your actions. A defective autoclave discovered at 7:15 costs the list an hour; the same defect discovered at 9 am costs a patient a deep wound infection.",
      },
      {
        type: "quiz_prompt",
        title: "Which family?",
        body: "Deep in an appendicectomy, the surgeon calls for 'a Kocher'. In your tray you picture three forceps: a fine DeBakey, a toothed Kocher, a small mosquito. Which family does the Kocher belong to, and what is its gift?\n\nAnswer: Clamping — the Kocher is a heavy, toothed forcep that grips structures which must not slip. The DeBakey is a delicate grasper, the mosquito a small-vessel clamp: three forceps, three jobs, three families. Learn the family and the member names themselves.",
      },
      {
        type: "memory_trick",
        body: "The instrument families live on five fingers: **Cut** (scalpel, thumb), **Clamp** (Kocher, index), **Grasp** (Allis, middle), **Retract** (Deaver, ring), **Sew** (needle holder, little finger). Five fingers, five jobs — and for sterility, one rhyme: 'the tape outside, the strip inside; wet means worried, torn means gone.'",
      },
      {
        type: "summary",
        body: "- Zones: outer (street clothes), semi-restricted (theatre attire and cap), restricted (mask; sterile gown when scrubbed) — with doors closed and traffic counted.\n- Room setup = machines, suction, oxygen cylinders actually read, table, lights and stock — on a wall checklist, not memory; patient warmth planned.\n- Instruments: cutting, grasping, clamping, retracting and suturing families — learn by family and job, not by trivia.\n- Autoclave: steam under pressure (121°C × 15–30 min gravity; 134°C × 3–4 min pre-vacuum) — but indicators are the proof: outer tape, inner strip, Bowie-Dick daily, biological weekly.\n- Sterility is event-related: damp, torn or crushed packs are contaminated whatever the date; wet packs are re-processed; flash cycles are for emergencies only, never implants.",
      },
    ],
    questions: [
      {
        topic: "Sterilization",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What do the indicator tape outside, and the indicator strip inside, an autoclaved pack actually tell you?",
        options: [
          "The date by which the pack must be used",
          "That the pack met steam under the right cycle conditions — the strip confirming conditions inside the pack, where it matters",
          "Which theatre the pack belongs to",
          "That the instruments inside are the correct set for the operation",
        ],
        correctIndex: 1,
        explanation:
          "Indicators are the proof of the process: the external tape shows the package met steam, and the internal multi-variable strip confirms the conditions were achieved inside the pack — a completed timer proves nothing by itself.",
        courseSlug: "perioperative-nursing",
      },
      {
        topic: "Sterilization",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A wrapped major set comes out of the autoclave with the external tape unchanged and the internal strip pale. The theatre officer says the timer completed. What is your action?",
        options: [
          "Reject the set, re-process it fully, investigate the autoclave and use a verified spare set",
          "Use the set for minor cases only, since some steam must have entered",
          "Dry the pack in the sun and re-check the tape in an hour",
          "Ask the surgeon to decide — sterility is the surgeon's responsibility",
        ],
        correctIndex: 0,
        explanation:
          "Without indicator change there is no evidence of sterilization: the set is treated as unsterile, fully re-processed, and the autoclave fault investigated and reported. Patient safety never rides on a hopeful assumption.",
        courseSlug: "perioperative-nursing",
      },
      {
        topic: "Theatre Zones",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which combination correctly matches attire to theatre zone?",
        options: [
          "Street clothes in the operating room; masks in reception",
          "Theatre attire in reception; street clothes in the corridors",
          "Caps only for scrubbed staff; masks only during recovery",
          "Street clothes in the outer zone, theatre attire with cap in the semi-restricted zone, mask (plus sterile gown when scrubbed) in the restricted zone",
        ],
        correctIndex: 3,
        explanation:
          "Each zone steps up protection as you approach the field: street clothes outside, scrub suit and cap in the corridors, and mask — with sterile gown and gloves for the scrubbed team — inside the operating rooms themselves.",
        courseSlug: "perioperative-nursing",
      },
      {
        topic: "Sterilization",
        type: "MCQ",
        difficulty: "Hard",
        stem: "A pack autoclaved yesterday is found in a damp store room, its outer wrapper creased and slightly torn. What is its status?",
        options: [
          "Sterile, because it was autoclaved less than 24 hours ago",
          "Sterile, provided the inner wrapper looks intact",
          "Contaminated — sterility is event-related: moisture and wrapper damage have broken the barrier, so it must be re-processed",
          "Safe if passed through a flash cycle before use",
        ],
        correctIndex: 2,
        explanation:
          "Sterility is determined by events, not dates: moisture wicks microorganisms through fabric (strike-through) and a torn wrapper no longer protects. The pack goes back for full re-processing — and a flash cycle never rescues a compromised pack.",
        whyOthers: {
          A: "The calendar is the weakest proof of sterility — a fresh date on a damp, torn pack means nothing.",
          B: "The inner wrapper depends on the outer barrier; once the outer is soaked or torn, the chain is broken.",
          D: "Flash (immediate-use) cycles are for emergency dropped instruments, never a rescue for damaged packs, and never for implants.",
        },
        courseSlug: "perioperative-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Sterilization",
        front: "State the standard autoclave cycles.",
        back: "Steam under pressure: about 121°C for 15–30 minutes (gravity displacement) or 134°C for 3–4 minutes (pre-vacuum) — but indicators, not timers, prove sterility.",
      },
      {
        topic: "Sterilization",
        front: "What does the Bowie-Dick test tell you, and when is it run?",
        back: "It proves air removal and steam penetration in a pre-vacuum autoclave — run daily, ideally with the first cycle of the day.",
      },
      {
        topic: "Sterilization",
        front: "Why is a wet pack treated as contaminated?",
        back: "Moisture wicks microorganisms through the wrapper — strike-through defeats the barrier even though the cycle itself succeeded; wet packs are fully re-processed.",
      },
      {
        topic: "Surgical Instruments",
        front: "Name the five instrument families with one member each.",
        back: "Cutting (No. 10 blade), grasping (Allis forcep), clamping (Kocher), retracting (Deaver), suturing (needle holder).",
      },
      {
        topic: "Sterilization",
        front: "What is event-related sterility?",
        back: "Sterility is decided by what happens to the package — integrity, dryness, handling and storage — not by a calendar date; a damaged or damp pack is contaminated whenever it was processed.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Global Guidelines for the Prevention of Surgical Site Infection",
        year: "2016",
        note: "Sterilization, skin preparation and normothermia recommendations for surgical safety.",
      },
      {
        organization: "AORN",
        title: "Guidelines for Perioperative Practice",
        year: "2023",
        note: "Verify current edition — sterilization, packaging and traffic-control recommendations.",
      },
      {
        organization: "Ghana Health Service",
        title: "Infection Prevention and Control Guidelines for Health Care Facilities",
        note: "Ghana national IPC guidance for sterilization and theatre practice; verify current edition.",
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
    courseSlug: "perioperative-nursing",
    moduleTitle: "The Theatre World",
    lessonTitle: "Sterile Technique in Theatre",
    description:
      "One unbreakable law — only sterile touches sterile — and a handful of small rules that keep it true for hours, even when the case is long and the room is busy and nobody is watching.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Define surgical asepsis and explain the one principle from which every sterile-field rule flows.",
      "Apply the rules of the sterile field: gown zones, the margin of safety, strike-through, and continuous monitoring.",
      "Describe correct surgical hand scrub, gowning and closed gloving, including what to do when contamination happens.",
      "Demonstrate surgical conscience: recognising and honestly reporting breaks in technique without blame or concealment.",
    ],
    tags: ["sterile technique", "asepsis", "surgical gown"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Under general anaesthesia a patient's skin — the fortress they were born with — is cut open. From that moment until the wound is closed, the only thing standing between the operating room's air and the patient's peritoneum is your discipline. **Surgical asepsis** means keeping everything that touches the open wound free of every microorganism; **sterile technique** is the set of behaviours that makes it possible, hour after hour, in a room full of moving people.\n\nEvery rule in this lesson is one sentence long. The skill is not knowing them — it is keeping them while sweaty, rushed and deep into a long case. That skill has a name: **surgical conscience** — the quiet voice that says 'tell them, change it, start again' even when nobody saw.",
      },
      {
        type: "text",
        title: "The one law and its children",
        body: "The master law: **only sterile touches sterile**. Everything else is commentary. If a sterile glove touches a non-sterile object, both are contaminated. From this law flow the field rules you must be able to recite half-asleep: the sterile field is created **as close as possible to the time of use** and is **never left unattended** — an unattended field is an unverified field; anything **below table level** is non-sterile, so a swab or suture that dips over the edge is gone; the **margin of safety** — roughly the outer **2.5 cm (one inch)** of every draped table and the edges where drapes meet the wound — is treated as non-sterile, so nothing rests there; and gowns are sterile only **in front, from chest down to the level of the sterile field, and on the sleeves from above the elbow to the cuff** — the back, neckline, shoulders and axillae are not.\n\nThen the movement rules: **hands above the waist and in view**; never turn your back on the sterile field; never reach over it — pass around; keep talking and traffic near the field to a minimum; and when in any doubt about an item's sterility, the item is not sterile. Doubt resolves to no.",
      },
      {
        type: "text",
        title: "Strike-through and the wet field",
        body: "Moisture is sterility's enemy. A gown sleeve that leans on a wet table edge, a drape that soaks through with blood or irrigation fluid, a pack set down on a damp surface — all are **strike-through** contamination: fluid carries bacteria from the unsterile side through the fabric to the sterile side. The answer is not mopping: it is adding fresh drapes and changing the affected items, because the soaked fabric itself has become a highway. The same physics is why alcohol-based skin prep must **dry completely before draping** — pooled antiseptic under drapes is both a contamination route and, with diathermy, a fire.",
      },
      {
        type: "table",
        title: "Sterile or not? The quick map",
        body: "| Item or area | Status | Why |\n|---|---|---|\n| Gown front, chest to field level | Sterile | Faces the field; protected by the gowning technique |\n| Gown back, neckline, shoulders, axillae | NOT sterile | Cannot be seen or controlled — the gapping zones of the gown |\n| Sleeves from above elbow to cuff | Sterile | The working corridor — keep it above the waist and in view |\n| Top surface of a draped table | Sterile | Draped at setup — but the outer 2.5 cm edge is not |\n| Anything below table level | NOT sterile | Out of the team's sight means unverified |\n| Edges where drapes meet the wound | NOT sterile | The margin of safety — nothing is placed along it |\n| The whole patient under the drapes | NOT sterile | Only the prepped, draped operative area is inside the field |",
      },
      {
        type: "text",
        title: "Scrubbing, gowning, gloving",
        body: "The **surgical hand scrub** reduces the resident flora of hands and arms: nails get the brush — nails are the reservoir — skin gets systematic strokes from fingertips upward, for the duration your unit's policy and agent require, with the first scrub of the day the longest. Dry each arm with its own towel, hand first, working up — and once the towel travels back down it is dead. **Closed gloving** keeps the hands inside the gown cuffs as the gloves go on, so no bare skin ever meets the glove's outer surface. When **gowning a colleague**, you offer the gown by its inside surface and assist without ever touching the outside of their gown. If a glove punctures — felt or seen — it is **changed at once**: through that puncture the patient's own flora colonize the field. **Double-gloving** is standard practice in many theatres, with the outer glove changed between phases and after obvious contamination; it measurably protects both the patient and you.",
      },
      {
        type: "callout",
        title: "The prep and the field",
        body: "Skin prep is painted from the **cleanest point — the incision site — outward**, in expanding circles that never double back over cleaner skin; contaminated or infected areas are prepped last. **Allow the antiseptic to dry completely** before draping and before anyone touches the diathermy pedal — pooled alcohol under drapes has started theatre fires. And if prep solution pools anywhere — umbilicus, sacrum, a skin fold — dry it: a pool is a puddle of bacteria and of fuel.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "During a long open case you look up and see the circulating nurse lean across the corner of the back table to steady a falling swab packet — her sleeve brushed the field, and she carries on. Nobody else saw it. What happens next is yours.\n\nWhat do you do — and what do you say?\n\nAnswer: The brushed area of the field is contaminated by rule, not by opinion; doubt resolves to no. The swab packet and whatever shared that corner are discarded or replaced, the drape corner is covered with fresh sterile drapes, and the case continues safely. Say it without theatre and without blame: 'Your sleeve touched the corner — let us cover that area and swap the swabs.' Afterwards, in the changing room, comes the kinder conversation: what made her reach? A packet placed too near the edge. Fix the placement and the next nurse will not have to choose between silence and embarrassment. Surgical conscience reports itself; a learning team fixes the system that tempted her.",
      },
      {
        type: "quiz_prompt",
        title: "The itch test",
        body: "An hour into a difficult case your brow itches above your mask. You are scrubbed, and the surgeon is waiting for the next suture. Can you scratch it — and how does a scrubbed person handle anything above the neck?\n\nAnswer: Above the neck is outside sterile territory — and a gloved hand must never go there. The circulating nurse can adjust your cap, or you declare the contamination and change the glove. Sweat dripping onto a field is a genuine contamination event in a hot theatre: absorbent caps and a cool room are safety equipment, not comfort.",
      },
      {
        type: "memory_trick",
        body: "Field rules in one breath: **Front is fine, back is bare. Hands above the waist and in sight. An inch from the edge, and nothing below the table. Wet means worry. Unattended means unverified. Doubt means NO.** Six lines — and every sterile field on earth obeys them.",
      },
      {
        type: "summary",
        body: "- One law: only sterile touches sterile — everything else is commentary, and doubt always resolves to 'not sterile'.\n- Gown: front chest to field level and sleeves above elbow to cuff are sterile; back, neckline, shoulders and axillae are not.\n- The 2.5 cm (one inch) margin of safety at table and drape edges; nothing below table level; fields are never left unattended.\n- Strike-through: soaked drapes, wet gowns and damp packs are contaminated — change them; alcohol prep must be fully dry before draping or diathermy.\n- Scrub the nails, dry hand-first, glove closed, change punctured gloves immediately, double-glove where policy advises.\n- Surgical conscience means reporting your own breaks — no blame, no hiding; fix the field, then fix the system that allowed it.",
      },
    ],
    questions: [
      {
        topic: "Sterile Technique",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A gauze swab slips off the scrub table and hangs below the table's edge; the scrub nurse catches it before it reaches the floor. Is it still sterile?",
        options: [
          "Yes — it never touched anything unsterile",
          "Yes, as long as the nurse's glove stayed sterile throughout",
          "No — anything that goes below table level is out of the team's sight and is contaminated by rule",
          "Only if the theatre floor had just been mopped",
        ],
        correctIndex: 2,
        explanation:
          "Below table level means below the line of continuous observation — the field's guarantee is gone, so the item is discarded by rule. Catching it skilfully does not restore sterility that cannot be verified.",
        courseSlug: "perioperative-nursing",
      },
      {
        topic: "Sterile Technique",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which areas of a scrubbed person's gown are considered sterile?",
        options: [
          "The front from chest to the level of the sterile field, and sleeves from above the elbow to the cuff",
          "The entire gown except the neckline",
          "The back and sleeves only",
          "The whole gown, as long as the hands remain above the waist",
        ],
        correctIndex: 0,
        explanation:
          "Only what faces the field and can be kept in view counts: the front from chest to field level and the sleeves from above the elbow to the cuff. The back, neckline, shoulders and axillae cannot be seen or protected, so they are treated as unsterile.",
        courseSlug: "perioperative-nursing",
      },
      {
        topic: "Sterile Technique",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Halfway through an abdominal case, the drape beside the wound becomes soaked through with irrigation fluid. What is the problem and the action?",
        options: [
          "None — wet drapes are expected in long cases",
          "It only matters if the fluid is infected",
          "The fluid should be mopped off the drape with a sterile swab",
          "Strike-through contamination — moisture carries bacteria through fabric, so the area is re-draped with fresh sterile drapes",
        ],
        correctIndex: 3,
        explanation:
          "Wet fabric is no longer a barrier: fluid travelling through it brings microorganisms from the unsterile side to the sterile side. Soaked drapes are covered or replaced with fresh sterile drapes, not mopped and hoped over.",
        whyOthers: {
          A: "Soaked drapes are common in long cases — and dangerous every single time, for the same strike-through reason.",
          B: "The fluid itself does not need to be infected — bacteria from the unsterile side of the fabric travel with any moisture.",
          C: "Mopping the surface leaves the soaked fabric — the highway — in place; the area is re-draped.",
        },
        courseSlug: "perioperative-nursing",
      },
      {
        topic: "Sterile Technique",
        type: "MCQ",
        difficulty: "Hard",
        stem: "During gowning, a new scrub nurse feels her bare finger pass through the gown cuff as she pushes her hand into the glove. She is not sure whether it touched the glove's outer surface. What must she do?",
        options: [
          "Continue — the uncertainty is minor and the case is urgent",
          "Regard the glove as contaminated — doubt resolves to 'not sterile' — and re-glove correctly before touching the field",
          "Wipe the finger with alcohol and carry on",
          "Ask the surgeon whether sterility matters for this particular case",
        ],
        correctIndex: 1,
        explanation:
          "Sterile technique runs on rules, not probabilities: any doubt about contamination is treated as contamination. She discards the glove, re-gloves with correct closed technique, and only then joins the field — urgency never outranks the one law.",
        courseSlug: "perioperative-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Sterile Technique",
        front: "State the master law of sterile technique.",
        back: "Only sterile touches sterile — if a sterile item touches anything unsterile, both are contaminated, and any doubt resolves to 'not sterile'.",
      },
      {
        topic: "Sterile Technique",
        front: "What is strike-through?",
        back: "Moisture carrying microorganisms through fabric from the unsterile to the sterile side — soaked drapes, wet gowns and damp packs are contaminated and must be changed.",
      },
      {
        topic: "Sterile Technique",
        front: "What is the margin of safety?",
        back: "The outer ~2.5 cm (one inch) of every draped table and the drape edges at the wound are treated as non-sterile — nothing is placed there, and items below table level are discarded.",
      },
      {
        topic: "Sterile Technique",
        front: "What is surgical conscience?",
        back: "The discipline to recognise, report and correct breaks in sterile technique — including your own — immediately and honestly, even when nobody saw; then fix the system that allowed it.",
      },
    ],
    sources: [
      {
        organization: "AORN",
        title: "Guidelines for Perioperative Practice",
        year: "2023",
        note: "Verify current edition — sterile technique, gowning and gloving recommendations.",
      },
      {
        organization: "World Health Organization",
        title: "Global Guidelines for the Prevention of Surgical Site Infection",
        year: "2016",
      },
      {
        organization: "Ghana Health Service",
        title: "Infection Prevention and Control Guidelines for Health Care Facilities",
        note: "Ghana national IPC guidance; verify current edition.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022 (15th edition)",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "perioperative-nursing",
    moduleTitle: "The Theatre World",
    lessonTitle: "The Scrub Nurse's Role",
    description:
      "Scrubbed in, you become the surgeon's second brain — a step ahead on instruments, a guardian of sharps, and the keeper of the count that no patient should ever have to need.",
    difficulty: "Hard",
    durationMin: 12,
    objectives: [
      "Describe the scrub nurse's duties across the timeline of an operation — setup, anticipation, passing, counts and closure.",
      "Apply safe sharps handling and the neutral zone in theatre, including the correct response to a needlestick injury.",
      "Conduct instrument, swab and needle counts with the circulating nurse, and manage a count discrepancy before closure.",
      "Explain specimen care: correct labelling, reading identifiers aloud and safe handling.",
    ],
    tags: ["scrub nurse", "surgical counts", "sharps safety"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The scrub nurse is the sterile member of the team who lives with the operation from the inside: setting up the tables, building the field, putting instruments into hands before they are asked for, and knowing — at every moment — where every needle, swab and blade in that room is. It is the most physically demanding role in theatre, and the one where 'anticipation' stops being a word and becomes a personality.\n\nIn Ghana's theatres the scrub nurse often also carries the institution's memory: which tray holds the Kochers, how the visiting surgeon likes her Mayo table arranged, which blade fits the handles in stock. That knowledge is the difference between a case that flows and a case where fifteen minutes evaporate hunting for the second right-angled retractor.",
      },
      {
        type: "text",
        title: "Before the patient arrives: building the world",
        body: "The scrub starts before scrubbing — by reading the case: the surgical approach, the expected stages, the instruments each stage will want, the surgeon's habits. After scrubbing and gowning, the tables are built. The **Mayo stand** — the workbench under the surgeon's hands — holds the instruments of the current stage: knife and blade, toothed forceps, scissors, the clamps of the moment. The **back table** holds the deep trays: self-retainers, vascular clamps, the sutures of the case, spare swabs and packs. Instruments are arranged in **families and order of use**, sharps pointing one way, and counted aloud with the circulating nurse as each tray is opened — the **baseline count**. Everything that joins the field is announced — 'Mayo on', 'swabs in, five', 'suture in, one packet' — so the field and the count sheet agree from the first minute.",
      },
      {
        type: "text",
        title: "During the case: anticipation and economy",
        body: "Good passing is a language. The instrument arrives **in the surgeon's palm with the working end oriented for use** — scalpel handle-first, needle holder armed with the needle held at the right point on its curve, forceps ready to grip. It is announced only when useful ('knife'), handed with confidence — never thrown, never snatched. Between requests you stay a step ahead: watching the stage of the dissection, preparing the next sutures before the wound is ready for them, clearing used instruments, and keeping the field dry — pooled blood is both contamination and diathermy risk. You are also the **field's guardian**: when sterility breaks — a drape soaks, a glove punctures, a sleeve strays — yours is usually the voice that names it, and it is always the duty.",
      },
      {
        type: "text",
        title: "The count: the patient's last line of defence",
        body: "Retained surgical items — the swab, needle or instrument left inside — are among the most feared never-events in surgery, and the count is the system built against them. Counts are performed by the scrub and circulating nurse **together, aloud**: the scrub touches and calls each item, the circulator records it — in many Ghanaian theatres on a **paper count sheet pinned where both can see it**. **When**: the baseline count before incision; a repeat count **before closure of any body cavity** (peritoneum, uterus, bladder); and the **final count before skin closure** — plus a fresh count whenever a relief scrub or circulator takes over, whenever anyone doubts the count, and whenever the count sheet and the field disagree. Items added mid-case are announced and recorded. And nothing leaves the field or the room — into a bin, a pocket, the laundry — without being counted and accounted for.\n\nIf a count is wrong: **re-count calmly, then search systematically** — field, Mayo, back table, floor under the drapes, kick bucket, laundry bag, the whole path from theatre to recovery. Tell the surgeon **before closure** — 'count incorrect, one swab missing' — and keep looking. Swabs are radiopaque and many instruments show on imaging, so an x-ray settles it if the item is not found — though in a district hospital at night you may be searching until it is found the hard way. A surgeon closing over an unresolved count is not saving the list; it is scheduling a return trip to theatre for a patient who has already suffered once.",
      },
      {
        type: "clinical_pearl",
        body: "Never distract a counting nurse. The count demands exactly the concentration that the room's hurry attacks — conversation, questions, the phone at the door. 'Counting — silence, please' is not rudeness; it is the sound of a patient being protected. And when the count stands between the team and the end of a long day, remember who is not in the conversation: the patient who would carry the missing swab for weeks.",
      },
      {
        type: "text",
        title: "Sharps and the neutral zone",
        body: "Needlestick injuries in theatre are common, under-reported and preventable. The rules: **hand-to-hand passing of sharps is banned** — a **neutral zone** (a small kidney dish or magnetic pad on the Mayo) receives and returns every blade and needle, and every exchange is announced: 'blade back through the basin'. Blades are mounted and removed from handles **with a needle holder, never fingers**; needles are never bent by hand, never recapped, and counted individually — a needle broken mid-case is announced and every fragment hunted. **Double gloving** cuts the blood contact of a needlestick substantially and is standard for scrubbed staff.\n\nAnd when a needlestick happens despite everything: wash the wound at once and report immediately — post-exposure prophylaxis against HIV works best started within hours, and both the source patient and the injured staff member need follow-up. The nurse who hides a needlestick protects nobody, least of all themselves.",
      },
      {
        type: "table",
        title: "The scrub nurse's clock",
        body: "| Stage | What you are doing | The quiet skill |\n|---|---|---|\n| Setup, before the patient | Build Mayo and back tables, baseline count with the circulator, check indicators, load the first blade | Reading the case and the surgeon — arrange for flow, not for beauty |\n| Skin and approach | Pass knife and toothed forceps, swap blades, announce items in | Orientation into the palm; economy of words |\n| The depths | Deep retractors, cavity swabs and packs announced, suction ready, field kept dry | Anticipation — the instrument ready before the request |\n| Counts and closure | Cavity count, then final count with the circulator; pass closure sutures; protect the wound edges | Calm, audible, undistracted counting |\n| End of case | Specimen care, blade removal with the needle holder, safe stripping of the tables | The count sheet and the story of the case agree |",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Eleventh case of an emergency-filled evening — a late laparotomy for a perforation. The final swab count is one missing. The surgeon, elbow-deep and exhausted at 2 am, says 'close — it is always in the laundry.'\n\nWhat happens next?\n\nAnswer: The count is not closed until the item is found or imaged. Re-count aloud together — miscounts happen to tired people, and the first re-count often finds it. Then search in order: the field and wound edges, the Mayo and back tables, the drapes and the floor beneath them, the kick bucket and linen bags, the route to recovery — including the pockets of anyone who left the room early. Inform the surgeon plainly and respectfully that closure waits, and request an x-ray if the search fails, since swabs are radiopaque. Document the discrepancy, the search, the outcome and the time. Only the item in hand — or on film — closes the count. If it truly cannot be resolved, the decision and its reasoning belong to the senior surgeon, recorded in the notes, with the patient flagged and followed — never to a shrug.",
      },
      {
        type: "quiz_prompt",
        title: "The quiet specimen",
        body: "The surgeon hands you a piece of tissue in a basin — 'send this for histology.' What must happen before it leaves the room?\n\nAnswer: Labelling and verification, in the room, by two people. The container is labelled with the patient's identifiers; the scrub confirms aloud ('specimen for Miss Ama Mensah, right breast lump'); the circulating nurse checks the label against the notes; the correct fixative or transport medium is used per the pathology request; and the request form is completed before anything moves. A specimen that leaves theatre unlabelled is lost — and in cancer surgery, what is lost cannot be treated.",
      },
      {
        type: "memory_trick",
        body: "The scrub role runs on **PASS**: **P**repare the field and read the case; **A**nticipate every stage before it arrives; **S**afeguard the sharps — neutral zone, needle-holder mounting, counts; **S**peak — announce every item in, count aloud, name every break. And the golden sentence of the job: **the count beats the clock.**",
      },
      {
        type: "summary",
        body: "- The scrub nurse is the sterile architect of the case: build the tables, run the baseline count, arrange by stage, know the surgeon's next move.\n- Passing: the right instrument, oriented into the palm, announced, never thrown; sharps move only through the neutral zone.\n- Counts: baseline before incision, before closure of any cavity, before skin — aloud, together, on the count sheet; items announced in; nothing leaves unaccounted.\n- Discrepancy: re-count, search systematically, tell the surgeon before closure, x-ray if unresolved, document everything.\n- Sharps: blades mounted and removed with needle holders, needles counted individually, double gloves; a needlestick is washed and reported at once — PEP works within hours.\n- Specimens: labelled in the room, identifiers read aloud, verified by two people, correct medium, request form complete.",
      },
    ],
    questions: [
      {
        topic: "Surgical Counts",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "When must full counts (instruments, swabs and needles) be performed?",
        options: [
          "Only once, at the end of the case, if the surgeon asks",
          "Baseline before incision, again before closure of any body cavity, and before skin closure — plus after relief handover and whenever the count is questioned",
          "At the start of the list and at the end of the list",
          "Only for cases lasting more than two hours",
        ],
        correctIndex: 1,
        explanation:
          "Counts guard the moments a retained item can happen: the baseline sets the reference, cavity closure is the last retrieval point, and skin closure is the final gate. Relief handovers and doubt trigger fresh counts because tired teams and unverified sheets are exactly where items vanish.",
        whyOthers: {
          A: "A single end-of-case count leaves the entire case unverified — by the time it is asked for, the cavity may already be closed.",
          C: "List-level counts miss every intermediate cavity closure and every item added mid-case.",
          D: "Even a twenty-minute case can retain a swab — duration has never been the risk factor.",
        },
        courseSlug: "perioperative-nursing",
      },
      {
        topic: "Sharps Safety",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the purpose of the neutral zone (kidney dish or magnetic pad) on the Mayo stand?",
        options: [
          "To hold clean swabs ready for the surgeon",
          "To keep instruments warm before use",
          "A place for the circulating nurse to leave notes",
          "A hands-free transfer point for sharps — blades and needles pass through it, eliminating hand-to-hand passing and its injuries",
        ],
        correctIndex: 3,
        explanation:
          "Most theatre needlesticks happen during hand-to-hand transfers. The neutral zone makes every sharp exchange hands-free and announced — the injury rate falls because the dangerous moment is engineered out.",
        courseSlug: "perioperative-nursing",
      },
      {
        topic: "Surgical Counts",
        type: "MCQ",
        difficulty: "Hard",
        stem: "During the final count of an emergency laparotomy, one swab cannot be found. The surgeon wants to close. What is the correct sequence?",
        options: [
          "Re-count together, search field, tables, drapes, floor, bins and laundry systematically, inform the surgeon that closure waits, and request an x-ray if the search fails — documenting all of it",
          "Allow closure and inform the ward to monitor the patient for fever",
          "Ask the anaesthetist to deepen anaesthesia while everyone looks in the theatre store",
          "Sign the count sheet as correct to avoid delaying the exhausted team",
        ],
        correctIndex: 0,
        explanation:
          "The count beats the clock: closure waits for a resolved count — re-count, systematic search, honest escalation, imaging if needed, full documentation. Everything else trades minutes for the risk of a retained surgical item and a second laparotomy.",
        courseSlug: "perioperative-nursing",
      },
      {
        topic: "Sharps Safety",
        type: "MCQ",
        difficulty: "Hard",
        stem: "You need to mount a fresh blade on the scalpel handle. Which technique is correct?",
        options: [
          "Hold the blade in your fingers and press it onto the slot until it clicks",
          "Ask the surgeon to mount it for you",
          "Lock the blade to the handle with a needle holder engaging the blade's slot — never with fingers",
          "Pass the blade loose to the surgeon — mounting is the surgeon's habit to decide",
        ],
        correctIndex: 2,
        explanation:
          "Blades are mounted and removed with a needle holder engaging the slot — fingers on a blade edge are the classic theatre laceration. Blades are counted like needles and announced when in and out.",
        courseSlug: "perioperative-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Surgical Counts",
        front: "When are counts performed?",
        back: "Baseline before incision; before closure of any body cavity; before skin closure; after relief handover; and any time the count or the field is questioned.",
      },
      {
        topic: "Sharps Safety",
        front: "How is a blade mounted and removed safely?",
        back: "With a needle holder engaging the blade's slot — never fingers; blades are counted like needles and announced when they go in and out.",
      },
      {
        topic: "Sharps Safety",
        front: "What is the response to a theatre needlestick injury?",
        back: "Wash at once and report immediately — post-exposure prophylaxis against HIV works best started within hours; both source patient and staff need follow-up. Never hide it.",
      },
      {
        topic: "Specimen Care",
        front: "Why must a specimen be labelled and verified inside the theatre room?",
        back: "Once it leaves, an unlabelled specimen cannot be identified — two-person verification, read aloud against the notes, prevents the wrong-patient disaster.",
      },
      {
        topic: "Surgical Counts",
        front: "What does 'the count beats the clock' mean?",
        back: "Closing over an unresolved count risks a retained surgical item; the search and x-ray cost minutes, while a retained swab costs a second laparotomy and weeks of illness.",
      },
    ],
    sources: [
      {
        organization: "AORN",
        title: "Guidelines for Perioperative Practice",
        year: "2023",
        note: "Verify current edition — counts, specimen management and sharps safety recommendations.",
      },
      {
        organization: "World Health Organization",
        title: "Global Guidelines for the Prevention of Surgical Site Infection",
        year: "2016",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022 (15th edition)",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "perioperative-nursing",
    moduleTitle: "The Theatre World",
    lessonTitle: "The Circulating Nurse's Role",
    description:
      "Unscrubbed but never uninvolved — the circulating nurse is the patient's advocate while they sleep, the sterile team's hands in the unsterile world, and the keeper of the record that tells the true story of every case.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe the circulating nurse's duties across the whole case — from room check to handover — and their unsterile contribution to the sterile field.",
      "Apply correct technique for opening sterile supplies onto the field, and the checks made before anything joins the field.",
      "Conduct theatre documentation: times, personnel, counts, specimens, implants, drains and equipment events.",
      "Explain patient advocacy during anaesthesia, including verification before induction and traffic control during the case.",
    ],
    tags: ["circulating nurse", "operating theatre", "documentation"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The circulating nurse — 'the runner', in every Ghanaian theatre's vocabulary — is the only team member who can be everywhere: inside the sterile conversation and out in the unsterile world, at the patient's head and at the autoclave. While the patient sleeps, the circulator is their **advocate** — the eyes that watch what the anaesthetist cannot see from behind the airway, the hands that fetch what the scrubbed cannot touch, the pen that records what the room will have forgotten by tomorrow.\n\nThe role begins before the patient arrives — with the room and machine checks of the last lesson — and ends only at handover into recovery. In a district theatre the circulator may also be the one who fixes the suction, chases the missing suture from the store and coaxes the oxygen cylinder key from the porter; the role absorbs the building. That is exactly why its structure matters.",
      },
      {
        type: "text",
        title: "Receiving the patient: the last gate",
        body: "The patient enters the theatre to you. Before they meet the anaesthetist's drugs, you verify: **identity** — name, age and folder number, from the patient's own mouth where possible, checked against the wristband, the notes and the consent form; **procedure and site** — the patient points, the mark is confirmed; **consent**, signed and real; **fasting** status; **allergies**, asked aloud and checked against the band and notes; **jewellery, dentures, prostheses and hair pins** — off, labelled and given to family or stored per policy; **nail varnish and make-up** removed for the pulse oximeter; the **skin over the operative site** clean and unbroken; **pre-medication** given; and the last urine passed or the catheter in situ. You also confirm the **notes and imaging** travel with the patient — a surgeon operating without the films is flying blind. This is the last place in the building where the patient can still correct an error with their own voice. Guard it.",
      },
      {
        type: "text",
        title: "Serving the sterile field from the outside",
        body: "Everything the sterile team uses but cannot touch passes through your hands, and there are rules. **Opening sterile supplies**: check the **external indicator**, the **wrapper's integrity** — no tears, dampness or staining — and that the item is the right one for the case, all before it comes near the field; open with the wrapper held away from you and away from the field, so your unsterile hands never cross the sterile plane; drop or present contents onto the field without reaching over it. Solutions are poured into the basin the scrub holds at a safe distance — bottle low, no splash, nothing touching the inside of the basin. You never turn your back on the field, never reach across it, and never lean on anything sterile. When the scrub needs something mid-case, it is served with the same discipline as the first item: **unsterile hand serves, sterile hand receives.**",
      },
      {
        type: "table",
        title: "The circulator's clock",
        body: "| When | What you do |\n|---|---|\n| Before the case | Room and machine checks, positioning aids ready, warm blankets, count sheets pinned, stock laid out |\n| Patient in | The verification gate: identity, procedure, site and mark, consent, fasting, allergies, jewellery, notes and imaging; assist induction |\n| During the case | Open supplies onto the field with indicator and integrity checks; record times — arrival, anaesthesia, incision, closure, departure — plus drugs, fluids and estimated blood loss; run every count aloud with the scrub; label and verify specimens together; manage traffic and doors; watch the return pad, suction and diathermy; keep the patient warm |\n| Counts and closure | Be the second voice of every count; record the results; raise any discrepancy immediately |\n| End of case | Sign Out items: procedure recorded as performed, counts confirmed, specimens named aloud, equipment events noted; prepare and give the recovery handover; escort the patient and never leave them alone in transit |",
      },
      {
        type: "callout",
        title: "The register is the defence",
        body: "In Ghanaian district theatres the theatre register or record book is the legal spine of every case. What belongs in it: the patient's identifiers; the procedure **as actually performed**; the names of surgeon, anaesthetist, scrub and circulator; arrival, anaesthesia, incision, closure and departure times; drugs given with routes; fluids and estimated blood loss; counts and their outcomes; specimens sent; implants used; drains and packings; equipment failures; and the condition in which the patient left theatre. A case that is not documented is a case that cannot be defended — for the patient, for the team, or for you.",
      },
      {
        type: "clinical_pearl",
        body: "You are the only one who sees the whole room. The scrub watches the field; the surgeon watches the wound; the anaesthetist watches the monitors. Nobody but you watches the door, the traffic, the temperature, the return pad and the clock all at once — and nobody but you can say, mid-case, 'the field is getting crowded' or 'this patient is getting cold' and be heard by everyone. Use that voice early: problems named early are solved; problems named late are managed.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A young man is wheeled in for left inguinal hernia repair. At your gate he says 'they said it is this side' — pointing to the right — but the notes and the consent form both say left.\n\nWhat do you do next?\n\nAnswer: Nobody proceeds on a pointing finger against paper. The anaesthetist holds; the surgeon is called; the original outpatient findings are re-read with the patient still awake; the groin is examined by the surgeon — a reducible hernia should declare itself, but that is the surgeon's call, not the room's; the correct side is confirmed and marked now, in theatre, with the patient watching; and the discrepancy is documented. If any doubt survives all of that, the case is postponed — a hernia repaired on the wrong side is a never-event, and the wrong side of doubt is always the side of caution.",
      },
      {
        type: "quiz_prompt",
        title: "Opening the packet",
        body: "The scrub calls for a fresh suture packet. You fetch one from the store shelf. What do you check — and do — before it reaches the field?\n\nAnswer: Check the wrapper for tears, dampness or staining; check the external indicator has changed; check it is the right suture for the case. Then open it away from your body and away from the field, presenting the contents to the scrub without your hands crossing the sterile plane. And if any check fails, it never leaves your hands: a fresh packet is fetched and the failed one set aside and reported.",
      },
      {
        type: "memory_trick",
        body: "The circulator runs a **CIRCLE**: **C**heck the room and the patient at the gate; **O**pen supplies with indicator, integrity and technique; **R**ecord everything — times, drugs, counts, specimens; **I**nsist on the checklist stops — Sign In, Time Out, Sign Out; **C**ount aloud with the scrub, every count; **L**imit traffic, doors closed, patient warm; **E**scort and hand over with a spoken SBAR. Seven spokes, one wheel — and the wheel turns around the patient.",
      },
      {
        type: "summary",
        body: "- The circulator is the patient's advocate while they sleep and the sterile team's hands in the unsterile world.\n- The verification gate before induction: identity, procedure, site and mark, consent, fasting, allergies, jewellery and prostheses, notes and imaging — errors here are still correctable by the patient's own voice.\n- Supplies join the field only after indicator, integrity and correctness checks, opened away from body and field — never by reaching over.\n- Document the case as it happens: times, personnel, drugs, fluids, blood loss, counts, specimens, implants, drains, equipment events.\n- The circulator's whole-room view — doors, traffic, warmth, pad, clock — is a safety function; speak early.\n- The handover into recovery is clinical communication: structured, face to face, questions answered before the anaesthetist leaves.",
      },
    ],
    questions: [
      {
        topic: "Circulating Nurse",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which team member is responsible for documenting the course of the operation — times, drugs, counts, specimens — while watching the room as a whole?",
        options: [
          "The circulating nurse",
          "The scrub nurse",
          "The theatre porter",
          "The surgeon's assistant",
        ],
        correctIndex: 0,
        explanation:
          "The circulator records the case as it happens and is the only team member with the whole room in view — doors, traffic, temperature, equipment and the patient's dignity alike.",
        courseSlug: "perioperative-nursing",
      },
      {
        topic: "Sterile Supplies",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Before opening a suture packet onto the sterile field, the circulating nurse checks the wrapper and the external indicator. Why does this small ritual matter so much?",
        options: [
          "It identifies which company to invoice",
          "It confirms the packet is the cheapest available option",
          "It is only required for implantable items",
          "It is the last barrier before an unsterile or compromised item joins the field — a torn, damp or failed-indicator pack contaminates everything it touches",
        ],
        correctIndex: 3,
        explanation:
          "The circulator is the final filter between the store shelf and the sterile field: wrapper integrity, indicator change and the right item, checked every single time, are what keep the field's guarantee true.",
        whyOthers: {
          A: "Stock and billing matter to the store, not to the patient's safety — this check is about sterility.",
          B: "Cost has nothing to do with contamination — the correct item, properly processed, is the safe one.",
          C: "Every item that joins the field, implantable or not, gets the same indicator and integrity checks.",
        },
        courseSlug: "perioperative-nursing",
      },
      {
        topic: "Patient Verification",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "At the verification gate the patient points to the opposite groin from the side written in the notes and on the consent. What is the correct action?",
        options: [
          "Trust the notes — the patient is nervous and confused",
          "Hold the list, call the surgeon, re-examine and reconfirm the correct side with the patient awake, mark it in theatre, and postpone if doubt remains — documenting everything",
          "Trust the patient — tear up the consent form and let the surgeon start over",
          "Ask the family to choose which side they were told",
        ],
        correctIndex: 1,
        explanation:
          "A discrepancy between the patient's words and the paper is a stop, not a selection between the two: the surgeon re-verifies against the original findings with the patient awake, the correct side is marked in theatre, and unresolved doubt postpones the case. Wrong-site surgery is a never-event.",
        courseSlug: "perioperative-nursing",
      },
      {
        topic: "Circulating Nurse",
        type: "MCQ",
        difficulty: "Hard",
        stem: "Which description best captures the circulating nurse's relationship to the sterile field?",
        options: [
          "Sterile whenever standing within one metre of the field",
          "Free to reach across the field when the scrub is busy",
          "Unsterile at all times — supplies are passed in with indicator, integrity and technique checks, never by reaching over the field",
          "Sterile while wearing a mask, regardless of gowning",
        ],
        correctIndex: 2,
        explanation:
          "The circulator is permanently unsterile — that is the design, not a limitation. Everything the field needs is served in through disciplined checks and transfers; crossing the plane would contaminate both the field and the item.",
        courseSlug: "perioperative-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Patient Verification",
        front: "List the verification-gate checks before induction of anaesthesia.",
        back: "Identity (patient's own words vs band and notes), procedure and site with the mark, consent, fasting, allergies, jewellery, dentures and prostheses off, skin at the site, notes and imaging present.",
      },
      {
        topic: "Sterile Supplies",
        front: "How does the circulator open sterile supplies onto the field?",
        back: "Check the external indicator and wrapper integrity, confirm the right item, open away from body and field, and present contents without crossing the sterile plane; any failed check means the item never reaches the field.",
      },
      {
        topic: "Documentation",
        front: "What must the theatre record of every case include?",
        back: "Identifiers, procedure as performed, personnel, times (arrival, anaesthesia, incision, closure, departure), drugs, fluids and blood loss, counts, specimens, implants, drains, equipment events, and the patient's condition on leaving theatre.",
      },
      {
        topic: "Patient Advocacy",
        front: "Why is the circulating nurse called the patient's advocate during surgery?",
        back: "The anaesthetised patient cannot speak or protect themselves; the circulator watches the whole room — verification, warmth, traffic, counts, dignity — and raises concerns on the patient's behalf.",
      },
    ],
    sources: [
      {
        organization: "AORN",
        title: "Guidelines for Perioperative Practice",
        year: "2023",
        note: "Verify current edition — circulating nurse duties, specimen labelling and documentation recommendations.",
      },
      {
        organization: "World Health Organization",
        title: "WHO Surgical Safety Checklist and Implementation Manual",
        year: "2009",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022 (15th edition)",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "perioperative-nursing",
    moduleTitle: "The Theatre World",
    lessonTitle: "Positioning, Diathermy & Theatre Hazards",
    description:
      "The sleeping patient cannot say 'my arm is numb' or 'this pad is burning' — positioning, diathermy and the theatre's quieter hazards are all guarded by the person still paying attention: you.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Position patients for surgery with nerve, vessel and skin safety — padding pressure points, protecting eyes and respecting the physics of each position.",
      "Explain how monopolar and bipolar diathermy work, and apply safe practice for the patient return electrode, jewellery and alcohol-based skin prep.",
      "Identify the main theatre hazards — fire, radiation, sharps, chemicals, electrical and transfer injuries — and the nurse's defences against each.",
      "Recognise the early signs of positioning injury and theatre-acquired pressure damage, and know what to do when they occur.",
    ],
    tags: ["patient positioning", "diathermy", "theatre safety"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "General anaesthesia removes the patient's protective reflexes and their voice. Their arm can hang off the table for four hours and they will not shift it; their heel can press a hard table edge and they will not feel the skin dying; a poorly seated diathermy pad can heat quietly under the drapes and they will not cry out. Every hazard in this lesson has the same root: **an unconscious body cannot protect itself.** Every defence has the same shape: a nurse who looks after the details while everyone else looks at the operation.",
      },
      {
        type: "text",
        title: "Positioning: anatomy under the drapes",
        body: "Positioning serves two masters — the surgeon needs **access**, the anaesthetist needs the **airway** and monitoring — but it is judged by a third: the patient's **nerves, vessels, joints and skin**. The common positions: **supine** (flat on the back, the default), **Trendelenburg** (head-down for pelvic surgery, with the patient tending to slide toward the head — strap and guard), **lithotomy/Lloyd-Davies** (legs raised for pelvic and perineal work), **prone** (face-down for the spine and back), **lateral** (on the side for chest and kidney surgery).\n\nThe safety principles never change: move slowly, because a suddenly repositioned anaesthetised patient can crash their blood pressure; secure with a **safety strap** about two finger-breadths above the knees; put arm boards at **less than 90 degrees of abduction** with palms up — over-abduction stretches the **brachial plexus**; pad the **ulnar nerve groove at the elbow** and the **heels**; in lithotomy, two people lift both legs **together** — uneven lifting strains the hips and lumbar spine; in prone, cushion the face and **protect the eyes** — taped closed, head neutral, no pressure on the eyeballs, because corneal abrasion and pressure-related eye injury are real complications. And never let a limb touch bare metal. The pressure map to memorise for supine: **sacrum, heels, occiput, elbows and shoulder blades** — every bony prominence is a pressure sore planning its day. Cases over two hours on a thin, elderly, dehydrated or malnourished patient — the classic Ghanaian surgical patient — deserve planned padding and a documented position check.",
      },
      {
        type: "text",
        title: "Diathermy: controlled lightning",
        body: "**Electrosurgery** — 'diathermy', or simply 'the machine', in every Ghanaian theatre — uses high-frequency current to cut and coagulate. In **monopolar** mode the current runs from the active instrument through the patient's body to the **patient return electrode** — the pad — and back to the generator. The pad is the hinge of the whole safety: it must have **full, dry, uniform contact** over a large, **well-vascularized muscle mass** (thigh, buttock or upper arm), never over a **bony prominence** (poor contact concentrates current), scar tissue, or metal implants, and never on a poorly perfused limb. Place it before draping, re-check it after every position change, and answer its alarm: a return-pad alarm means contact has failed and the current is hunting for another exit — usually through a small, burning contact point. **Bipolar** instruments pass current only **between their two tips** — no pad needed — which is why they are chosen for patients with pacemakers and for surgery near delicate structures.\n\nJewellery, piercings and rings concentrate current and heat — everything comes off (that stubborn wedding ring from the pre-op lesson now matters in earnest). **Alcohol-based skin prep is fuel**: it must be totally dry before draping and before diathermy use, with no pooling under the patient or the drapes — prep pooled under the sacrum of a draped patient is the classic hidden theatre fire. The smoke plume from burning tissue carries chemicals and fine particles — evacuate it where the machine allows. The machine's settings are the surgeon's to call; the pad, the patient and the fire safety are yours.",
      },
      {
        type: "table",
        title: "Theatre hazards and the nurse's defence",
        body: "| Hazard | The danger | The defence |\n|---|---|---|\n| Diathermy burns | Current exits through a poor pad contact or a metal contact point | Full-contact pad on muscle, re-checked after position changes; all metal and jewellery off; pad alarms answered, never silenced |\n| Fire | Alcohol prep vapour + oxygen-enriched drapes + diathermy spark | Prep fully dry and un-pooled before draping; diathermy holstered when idle; everyone knows the fire plan and extinguisher location |\n| Radiation (intra-operative x-ray) | Scatter dose to staff | Lead aprons for all in the room, maximum practical distance, dosimeter badges worn, the shot announced before firing |\n| Sharps | Needlestick and blade injuries, blood-borne exposure | Neutral zone, needle-holder blade mounting, double gloves, immediate reporting |\n| Chemicals (glutaraldehyde and disinfectants) | Sensitisation, asthma, burns | Covered containers, gloves, ventilation, agents never mixed |\n| Transfer falls | Patient falls from table or trolley at induction or reversal | No unattended patient on any raised surface; straps, side rails, enough hands, wheels locked |\n| Pressure injuries | Skin death over bony points in long cases | Padding of pressure points, position checks, warmth, documentation and a post-operative pressure-care plan |",
      },
      {
        type: "callout",
        title: "The fire triangle in theatre",
        body: "Fire needs three things: **fuel** (drapes, gauze, alcohol prep vapour), **oxygen** (enriched air leaking around the airway and drapes) and **ignition** (the diathermy spark, fibre-optic light cables). Keep the three apart and theatre fire becomes nearly impossible: prep dry and un-pooled, drapes that do not trap vapour, the active electrode holstered when not in use, and minimal oxygen leak around the head and chest during head and neck work.",
      },
      {
        type: "clinical_pearl",
        body: "After any position change — and during any long case — re-check the return pad and the pressure points. A pad that sat perfectly in supine has half peeled off the thigh of a patient who has been turned or slid; heels that were padded at 9 am have migrated off their gel by noon. Alarms are questions, not noise: the diathermy machine beeping about its pad is asking you to look, and the correct answer is never the silence button.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A thin 66-year-old woman undergoes a four-hour laparotomy in a district theatre. She was positioned supine without heel padding; the case ran long, the theatre ran cold, and she was hypotensive for part of it. On the ward round the next morning there are two purple-black blisters over the sacrum and a blistered right heel.\n\nWhat has happened, what happens now, and what happens for the rest of the list?\n\nAnswer: Theatre-acquired pressure injuries — deep tissue damage over the sacrum and heel, deepened by cold, hypotension, age, thinness and time. Now: stage and document the wounds honestly, start a pressure-care bundle — offloading, two-hourly repositioning, inspection, nutrition and wound care per orders — inform the surgeon and family with candour, and report it as an incident. For the rest of the list: heel and sacral padding for every long case, warmth planned before draping (blankets and warmed fluids where available), blood pressure concerns raised with the anaesthetist early, and position checks written into the routine between counts. A pressure injury found on day one is a teaching moment; the same blister found on every list next month is a decision.",
      },
      {
        type: "quiz_prompt",
        title: "The prep pour",
        body: "The surgeon calls for the skin prep. You have an alcohol-based antiseptic in one hand and a live diathermy machine in the room. State three safety actions before the drapes go on.\n\nAnswer: Pour with control — from a low height, no splashing. Let the prep **dry completely** — the vapour is the fuel, not the puddle alone. And check for **pooling** — under the patient, in the umbilicus, in skin folds, along the drapes' edge — and dry any pool before draping and before anyone touches the diathermy pedal.",
      },
      {
        type: "memory_trick",
        body: "Positioning means **PADS the patient**: **P**oints — pad every bony prominence (sacrum, heels, elbows, occiput); **A**lignment — natural joints, arms under 90 degrees, palms up; **D**evices — safety strap, arm boards, eye protection, nothing touching metal; **S**kin — inspect before and after, and document. And after any turn, do it all again.",
      },
      {
        type: "summary",
        body: "- An anaesthetised patient cannot protect their own nerves, skin or airway — positioning safety is nursing safety.\n- Arms abducted less than 90 degrees palm up, ulnar grooves padded, safety strap above the knees, lithotomy legs moved together by two people, eyes protected in prone.\n- Sacrum and heels are the classic theatre pressure points; thin, cold, hypotensive patients on long lists need planned padding and warmth.\n- Monopolar diathermy exits through the return pad — full dry contact on muscle, re-checked after position changes; jewellery and metal off; bipolar passes tip-to-tip and suits pacemaker patients.\n- Alcohol prep is fuel: fully dry and un-pooled before draping; fire triangle kept apart; radiation = lead aprons, distance and dosimeter badges.\n- Transfer, sharps and chemical hazards are theatre nursing too — hands, straps, containers and discipline.",
      },
    ],
    questions: [
      {
        topic: "Diathermy Safety",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Where should the monopolar diathermy return pad be placed?",
        options: [
          "Over the sternum, close to the heart",
          "Over a bony prominence, for firm anchoring",
          "On a large, well-vascularized muscle mass with full dry contact — avoiding bone, scars and implants — and re-checked after position changes",
          "Anywhere convenient under the drapes, since current distributes itself evenly",
        ],
        correctIndex: 2,
        explanation:
          "The pad must offer a large, low-resistance path out of the body: full dry contact over muscle. Over bone or with partial contact, current concentrates through a small area and burns — which is why contact is re-verified whenever the patient moves.",
        courseSlug: "perioperative-nursing",
      },
      {
        topic: "Theatre Fire Safety",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Alcohol-based skin prep has just been applied and the surgeon wants to drape immediately and start with diathermy. Why do you ask for full drying first?",
        options: [
          "Alcohol vapour is flammable — pooled or trapped vapour, oxygen and a diathermy spark are the classic theatre fire triangle",
          "Wet prep dilutes the anaesthetic",
          "Drying improves the surgeon's grip on the instruments",
          "It is only a delay — alcohol does not burn at body temperature",
        ],
        correctIndex: 0,
        explanation:
          "Alcohol vapour ignites readily from a diathermy spark, especially where oxygen has collected under drapes. Complete drying — and checking for pooling under the patient and in folds — removes the fuel before the ignition arrives.",
        whyOthers: {
          B: "Skin prep acts on the skin surface and is unrelated to the anaesthetic drugs.",
          C: "Instrument grip has nothing to do with the fire risk — this is about vapour, oxygen and spark.",
          D: "It is the vapour that burns, and it burns fiercely with a spark near oxygen — body temperature is irrelevant.",
        },
        courseSlug: "perioperative-nursing",
      },
      {
        topic: "Patient Positioning",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which positioning practice protects the brachial plexus during supine surgery?",
        options: [
          "Arms abducted as widely as the table allows",
          "Placing the safety strap around the upper arm",
          "Padding under the ankles only",
          "Arm boards at less than 90 degrees of abduction, with the palms rotated up",
        ],
        correctIndex: 3,
        explanation:
          "Over-abduction beyond 90 degrees stretches the brachial plexus against the shoulder; keeping arms under 90 degrees with palms up keeps the nerve slack and the anatomy neutral. Elbow padding protects its neighbour, the ulnar nerve.",
        courseSlug: "perioperative-nursing",
      },
      {
        topic: "Radiation Safety",
        type: "MCQ",
        difficulty: "Hard",
        stem: "An intra-operative x-ray is about to be taken. Which combination best protects the theatre staff?",
        options: [
          "Standing close to assist, wrapped in a sterile drape",
          "Lead aprons for everyone in the room, maximum practical distance from the tube, dosimeter badges worn, and the shot announced before firing",
          "Leaving the room is forbidden — the team must remain for the patient",
          "Only the anaesthetist needs protection, since the beam stays on that side",
        ],
        correctIndex: 1,
        explanation:
          "Scatter is the staff hazard, and it falls steeply with distance: lead aprons for everyone present, stepping back where possible, badges that record cumulative dose, and a warning before every exposure so nobody is caught unprotected.",
        courseSlug: "perioperative-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Diathermy Safety",
        front: "Monopolar versus bipolar diathermy — the current's path?",
        back: "Monopolar: active instrument → through the patient → return pad → generator (all pad rules apply). Bipolar: current passes only between the two forceps tips — no pad needed, preferred with pacemakers.",
      },
      {
        topic: "Patient Positioning",
        front: "Name the classic theatre pressure points in the supine patient.",
        back: "Sacrum, heels, occiput, elbows and shoulder blades — in prone add the chest, iliac crests, knees and feet; every bony prominence gets padding in long cases.",
      },
      {
        topic: "Theatre Fire Safety",
        front: "What is the theatre fire triangle?",
        back: "Fuel (drapes, gauze, alcohol prep vapour) + oxygen (enriched air around the airway) + ignition (diathermy spark, light cables) — keep them apart: dry and un-pooled prep, no trapped vapour, holstered electrodes.",
      },
      {
        topic: "Diathermy Safety",
        front: "Why must jewellery and piercings be removed before electrosurgery?",
        back: "Metal concentrates current and heats at contact points — burns under rings, chains and piercings are classic electrosurgery injuries; they also create pressure points.",
      },
    ],
    sources: [
      {
        organization: "AORN",
        title: "Guidelines for Perioperative Practice",
        year: "2023",
        note: "Verify current edition — electrosurgery, positioning and fire-safety recommendations.",
      },
      {
        organization: "World Health Organization",
        title: "Global Guidelines for the Prevention of Surgical Site Infection",
        year: "2016",
        note: "Includes skin antisepsis and perioperative normothermia recommendations.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022 (15th edition)",
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
    courseSlug: "perioperative-nursing",
    moduleTitle: "Recovery & After",
    lessonTitle: "The Recovery Room: PACU Nursing",
    description:
      "The first hour after anaesthesia is the most closely watched in the hospital — airways relax, breathing slows, blood pressure drifts, and one nurse's observations stand between the patient and disaster.",
    difficulty: "Hard",
    durationMin: 12,
    objectives: [
      "Receive a post-anaesthesia patient with a structured theatre handover and perform a systematic ABCDE recovery assessment.",
      "Apply the recovery observation schedule — airway, breathing, circulation, consciousness, temperature, pain and surgical site — and interpret the trends.",
      "Manage the common recovery emergencies: airway obstruction, opioid-induced respiratory depression, hypotension, haemorrhage and shivering.",
      "Apply discharge criteria from the recovery area and hand the patient safely back to the ward.",
    ],
    tags: ["recovery room", "postanaesthesia care", "vital signs"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Anaesthesia does not end when the last suture is tied. The drugs are still aboard — sedatives, opioids, residual muscle relaxation — as the patient is wheeled to recovery, and they will spend the next hour or two metabolising their way back to themselves. The **post-anaesthesia care unit (PACU)**, or recovery room, exists because this hour is statistically the most dangerous outside theatre: airways obstruct, breathing slows, blood pressure drifts, wounds bleed, and shivering patients consume oxygen like sprinters.\n\nIn many Ghanaian district hospitals there is no purpose-built PACU — the patient recovers in a **side room beside theatre** or a screened bay, watched by the theatre nurse, often one nurse for several patients, sometimes with a single oxygen outlet and a cylinder for backup. The room may be humble. The standard of watching is not.",
      },
      {
        type: "text",
        title: "The handover that starts everything",
        body: "The patient arrives attached to the anaesthetist or anaesthesia provider — do not let them leave until you have received: **the procedure performed**; the **anaesthetic technique** (general, spinal or block, with drugs and any reversal given); **airway events** (difficult intubation, laryngospasm, vomiting); **fluids given and estimated blood loss**; **analgesia and anti-emetics with their times** — so you do not repeat doses; **antibiotics given**; **drains, catheters and packs, with their outputs**; the patient's **comorbidities and medications** (the diabetic needs glucose checks; the asthmatic needs her inhaler within reach); and **the team's concerns for recovery** — the sentence that begins 'watch out for…' is the most valuable one you will hear all shift. If your theatre uses an SBAR-style structure, use it; if not, ask the same questions in the same order every time and write the answers down. And the anaesthetist should see the patient stable — airway open, breathing, circulation observed — before walking out. That is a standard, not a favour.",
      },
      {
        type: "text",
        title: "The ABCDE of recovery, again and again",
        body: "**A — Airway.** The tongue of a half-awake patient falls back and obstructs — the commonest recovery emergency of all. Listen for snoring and stridor; look for chest recession and see-saw breathing. Respond with chin lift or jaw thrust, an oral or nasal airway if the patient tolerates it (coughing it out often means they no longer need it), and the **recovery position** for any patient drifting back to sleep without a nurse at the head.\n\n**B — Breathing.** Rate, depth, pattern and oximetry, with oxygen as prescribed. Slow, shallow breathing in a sleepy patient is **opioid-induced respiratory depression** until proven otherwise: call the anaesthetist, stimulate the patient by voice and touch, give oxygen and prepare the reversal agent they order.\n\n**C — Circulation.** Pulse, blood pressure and capillary refill. Early post-operative hypotension has three usual suspects: **bleeding** (visible or hidden), the **vasodilation of residual spinal anaesthesia** — the classically warm, pink, comfortable hypotension — and **hypovolemia** from fasting and losses. Hypertension usually means pain or a full bladder.\n\n**D — Disability.** Consciousness level — AVPU: alert, responds to voice, responds to pain, unresponsive — plus glucose checks for the diabetic.\n\n**E — Exposure.** Temperature — anaesthesia, cold fluids and open body cavities make hypothermia near-universal, and shivering can multiply oxygen demand, a real threat to elderly and ischaemic hearts: warm blankets, aggressively and repeatedly. Then the **surgical site**: look UNDER the dressing — soakage, its spread and its pattern — check drains and measure outputs, and inspect the bed under the patient for blood tracking from a hidden site.",
      },
      {
        type: "table",
        title: "The recovery observation rhythm",
        body: "| Domain | What you measure | The rhythm |\n|---|---|---|\n| Airway and breathing | Patency, respiratory rate, oxygen saturation, oxygen flow | Every 5 minutes while unstable, stretching to 15 as the patient stabilises |\n| Circulation | Pulse, blood pressure, capillary refill | Every 5–15 minutes, more often if bleeding is suspected |\n| Consciousness | AVPU, response to name | Every check — the trend shows the anaesthetic wearing off |\n| Temperature | Tympanic or axillary | On arrival and whenever shivering appears; warmth is active, not passive |\n| Pain and nausea | Score 0–10, vomiting episodes | On arrival, after every intervention, and before discharge |\n| Surgical site and drains | Dressing, swelling, drain output | On arrival and every round — look under dressings, not at them |",
      },
      {
        type: "text",
        title: "Discharge from recovery: criteria, not clocks",
        body: "The patient leaves recovery when physiology says so, not when the ward calls. The classic **Aldrete score** grades five domains — **activity** (moves limbs on command), **respiration** (deep breathing and cough), **circulation** (blood pressure near baseline), **consciousness** (fully awake) and **oxygenation** (saturation maintained on room air or prescribed support) — each scored 0 to 2. A patient scoring 9 or 10 out of 10, with pain and nausea controlled, the surgical site dry and drains stable, plus a written handover, is ready for the ward; a patient scoring 7 is not, whatever the clock or the ward pressure says. Spinal anaesthesia adds its own gates — movement returning to the legs and blood pressure stable without support; a spinal patient who cannot lift the knees goes nowhere. Document the discharge score, the observations, and hand over face to face with the receiving nurse, the same structured discipline as the handover in.",
      },
      {
        type: "clinical_pearl",
        body: "The patient who looks perfect at minute five can obstruct at minute twenty, and the patient who was obstructing at minute ten can be drinking tea at minute forty. Recovery is judged by **trends and scores, not snapshots** — which is why the observation record is a clinical instrument, not a chore. And the oldest rule in recovery stands: a patient who has just arrived is never left alone — arrange your seat, the suction, the oxygen and the call signal before the trolley's wheels stop.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "It is the side room of a district theatre, 11 pm, and you are the recovery nurse for the last case of the evening. Twenty minutes after arrival, a 54-year-old man after a laparotomy becomes drowsy; his respiratory rate falls to six and his oxygen saturation slides. He had morphine in theatre and again on arrival.\n\nWhat is happening, and what are your actions?\n\nAnswer: Opioid-induced respiratory depression — deepening sedation with a falling respiratory rate is its signature, and the saturation drops late. Call the anaesthetist immediately — send a colleague, never leave the patient — while you act: open the airway with chin lift, turn the oxygen up, stimulate him firmly by voice and touch, and have the reversal agent the anaesthetist prescribes drawn up and ready. If breathing stops, bag-mask ventilation bridges until help arrives. After the crisis: re-score and document, hold further opioids pending review, and examine the analgesia plan — this is exactly why sedation level is charted with every pain score. Then hand the event to the ward explicitly: what happened, what was given, what to watch for tonight.",
      },
      {
        type: "quiz_prompt",
        title: "The shivering patient",
        body: "A young woman arrives in recovery shivering violently after a long case in a cool theatre. Another nurse says to ignore it — 'everyone shakes after anaesthesia.'\n\nWhy is the shivering worth treating, not ignoring?\n\nAnswer: Shivering can multiply the body's oxygen consumption — a genuine threat to elderly and ischaemic hearts — and it signals hypothermia, which also impairs coagulation and wound healing. Warm her actively: blankets layered and changed as they cool, a warmed infusion where available, and continued oxygen. 'Everyone shakes' is a reason to expect it, never a reason to neglect it.",
      },
      {
        type: "callout",
        title: "The side-room realities",
        body: "Recovering patients in a side room without monitors is not automatically substandard care — unwatched recovery is. The workarounds are the craft: your seat positioned to see face and monitor both; a manual blood pressure machine within reach and the willingness to use it; a working suction and an oxygen cylinder you have personally checked; the anaesthetist's number where your hand knows it; and a low threshold to call. In a district theatre at night, the difference between a bad outcome and a near-miss is usually the number of minutes between noticing and calling.",
      },
      {
        type: "memory_trick",
        body: "Aldrete counts on five fingers: **A**ctivity, **R**espiration, **C**irculation, **C**onsciousness, **O**xygenation — two points each, ten for the whole hand. Ready for the ward = the whole hand. And for the hour itself, the sentence every recovery nurse keeps under the pillow: **trends, not snapshots; scores, not clocks.**",
      },
      {
        type: "summary",
        body: "- The recovery hour is the highest-risk hour outside theatre: residual anaesthesia, opioids, blood loss and cold all work against the patient.\n- Take a structured handover — procedure, anaesthesia, airway events, fluids and blood loss, drugs with times, drains, comorbidities, concerns — before the anaesthetist leaves.\n- Work ABCDE in loops: tongue obstruction is the commonest emergency; slow breathing plus sedation means opioids; hypotension means bleeding, spinal vasodilation or hypovolemia; shivering means warm the patient.\n- Observe on a rhythm — 5 to 15 minutes — look UNDER dressings, and chart trends.\n- Discharge on criteria: Aldrete 9–10, pain and nausea controlled, site dry, drains stable, spinal legs returning — with a face-to-face handover.\n- One nurse, one side room: seat, suction, oxygen, phone numbers, and a low threshold to call.",
      },
    ],
    questions: [
      {
        topic: "PACU Nursing",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A patient in recovery becomes drowsy and starts snoring, with see-saw chest movement. What is the most likely problem and the first action?",
        options: [
          "Wound pain — give analgesia at once",
          "The tongue obstructing the airway — chin lift or jaw thrust, consider an airway adjunct, and stay with the patient",
          "Hypoglycaemia — send for a glucose check",
          "A reaction to the antibiotic — call for adrenaline",
        ],
        correctIndex: 1,
        explanation:
          "Snoring with paradoxical chest movement in a half-awake patient is the classic picture of the tongue falling back — the commonest recovery emergency. Airway manoeuvres come before everything else, and the patient is not left alone.",
        courseSlug: "perioperative-nursing",
      },
      {
        topic: "PACU Nursing",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Twenty minutes after arrival, a post-laparotomy patient's respiratory rate falls to six and his sedation deepens. He received morphine on arrival. What is your sequence?",
        options: [
          "Call the anaesthetist immediately, open and support the airway, give oxygen, stimulate the patient and prepare the reversal agent for the anaesthetist to prescribe — never leaving the patient",
          "Wait ten minutes — opioids wear off on their own",
          "Give the next dose of opioid to keep him comfortable and resting",
          "Turn off the lights and let him sleep deeply",
        ],
        correctIndex: 0,
        explanation:
          "Deepening sedation with a slowing rate is opioid-induced respiratory depression: help is summoned while the airway is opened, oxygen given, the patient stimulated, and the reversal prepared — the patient is never left alone.",
        whyOthers: {
          B: "Waiting is how a slow rate becomes apnoea — this is a call-now situation, not a wait-and-see one.",
          C: "Another opioid deepens the very depression that is already strangling his breathing.",
          D: "Deep sleep here is the disease, not the treatment — he needs airway support and reversal, not darkness.",
        },
        courseSlug: "perioperative-nursing",
      },
      {
        topic: "PACU Discharge",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which finding best supports readiness for discharge from the recovery area?",
        options: [
          "The ward has called twice asking for the bed",
          "The patient has slept quietly for the last thirty minutes",
          "The nurse on the next shift has arrived early",
          "Aldrete score 9–10, pain and nausea controlled, surgical site dry, drains stable — handed over face to face",
        ],
        correctIndex: 3,
        explanation:
          "Discharge from recovery is a physiological decision: a near-maximal Aldrete score with controlled symptoms, a dry wound and stable drains — communicated in a structured handover. Quiet sleep alone is not a criterion; a waiting bed is not a criterion.",
        courseSlug: "perioperative-nursing",
      },
      {
        topic: "PACU Nursing",
        type: "MCQ",
        difficulty: "Hard",
        stem: "Why is shivering after general anaesthesia treated as a finding worth acting on rather than a harmless nuisance?",
        options: [
          "It is harmless — all patients shake after anaesthesia",
          "It only matters after spinal anaesthesia",
          "Shivering can multiply oxygen consumption — a threat to ischaemic and elderly hearts — and signals hypothermia, which impairs coagulation and healing; the patient is warmed actively",
          "Shivering is the first sign of wound infection and needs antibiotics",
        ],
        correctIndex: 2,
        explanation:
          "Violent shivering can multiply the body's oxygen demand — dangerous for hearts with limited reserve — and it marks hypothermia, itself linked to coagulopathy and surgical site infection. Active warming, layered and repeated, is the treatment.",
        courseSlug: "perioperative-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Aldrete Score",
        front: "Name the five Aldrete domains and the discharge standard.",
        back: "Activity, Respiration, Circulation, Consciousness, Oxygenation — each 0–2, total 10; the classic ward-ready patient scores 9–10 with pain, nausea, wound and drains settled.",
      },
      {
        topic: "PACU Nursing",
        front: "The commonest early airway emergency in recovery, and the response?",
        back: "The tongue falling back and obstructing — chin lift or jaw thrust, airway adjunct if tolerated, recovery position for the drifting sleeper, and never leave the patient.",
      },
      {
        topic: "PACU Nursing",
        front: "What is the signature of opioid-induced respiratory depression?",
        back: "Deepening sedation with a falling respiratory rate — saturation drops late. Call the anaesthetist, open the airway, oxygen, stimulate, prepare reversal; never leave the patient.",
      },
      {
        topic: "PACU Nursing",
        front: "The three usual suspects for early post-operative hypotension?",
        back: "Bleeding (visible or hidden), the vasodilation of residual spinal anaesthesia, and hypovolemia from fasting and fluid losses — treated per protocol, with the anaesthetist informed early.",
      },
      {
        topic: "Theatre Handover",
        front: "What must the theatre-to-recovery handover include before the anaesthetist leaves?",
        back: "Procedure, anaesthetic technique and drugs, airway events, fluids and estimated blood loss, analgesia and anti-emetics with times, antibiotics, drains and outputs, comorbidities, and the team's specific concerns.",
      },
    ],
    sources: [
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022 (15th edition)",
        note: "Post-anaesthesia care and recovery assessment chapters.",
      },
      {
        organization: "AORN",
        title: "Guidelines for Perioperative Practice",
        year: "2023",
        note: "Verify current edition — includes post-anaesthesia handover and monitoring recommendations.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
      {
        organization: "Ghana Health Service",
        title: "Infection Prevention and Control Guidelines for Health Care Facilities",
        note: "Ghana national IPC guidance; verify current edition.",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "perioperative-nursing",
    moduleTitle: "Recovery & After",
    lessonTitle: "Post-operative Complications",
    description:
      "From the first hour to the second week, every post-operative patient runs on a timeline of possible troubles — this lesson teaches you to think in days and catch complications while they are still small.",
    difficulty: "Hard",
    durationMin: 12,
    objectives: [
      "Classify post-operative complications by timing — immediate, early and late — and name the classics in each window.",
      "Apply the day-based triage of post-operative fever (the 5 Ws) and the focused assessment each cause demands.",
      "Recognise primary and secondary haemorrhage, surgical site infection, dehiscence and evisceration, and the nursing response to each.",
      "Apply the surveillance that prevents pulmonary and thromboembolic complications — breathing exercises, early mobilisation and hydration — starting before the operation.",
    ],
    tags: ["postoperative complications", "wound care", "postoperative fever"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Surgery does not end at the skin. Every operation opens a period of vulnerability measured in days and weeks, and the complications that fill it arrive with a rough schedule — the nurse who knows the schedule knows what to look for on Tuesday. The classic frame sorts complications into **immediate** (the first minutes and hours — mainly the recovery-room territory of the last lesson), **early** (the first days: bleeding, atelectasis, ileus, urinary retention) and **late** (day 4 onward: wound infection, venous thrombosis, secondary haemorrhage, dehiscence).\n\nPost-operative nursing is surveillance: looking, asking, measuring — and catching trouble while it is still small enough to catch. The ward round is the surgeon's hour; the other twenty-three are yours.",
      },
      {
        type: "text",
        title: "Bleeding: primary, reactive and secondary",
        body: "**Primary haemorrhage** is bleeding during and immediately after surgery — from the operation site, a slipped tie or an unsecured vessel. Your signs are the body's shock language: a **rising pulse** (the earliest and most faithful), falling blood pressure (a late sign), pallor, cool sweat and restlessness — and, if a drain is in place, output turning brisk. Remember the hidden bleeder: a wound dressing can look innocent while blood collects inside a closed abdomen — distension, rising pain and a rising pulse tell the true story. Nursing response: look UNDER the dressing, inform early, secure IV access, monitor vitals and urine output, and prepare for what the patient usually needs — a return to theatre with resuscitation running.\n\n**Secondary haemorrhage** is the sneak: it arrives around **day 7 to 10**, when infection erodes a vessel at the operative site, and it announces itself as fresh bleeding from a wound that had been settled for a week. Any late bleed from a wound, drain or operative site is an emergency — pressure, inform, escalate; the patient usually goes back to theatre. A wound that bleeds on day eight is not a dressing problem.",
      },
      {
        type: "text",
        title: "The chest and the legs",
        body: "**Atelectasis** — collapsed alveoli from shallow, guarded breathing — is the classic day-one to day-two fever: a low-grade temperature, poor air entry at the lung bases and a patient protecting the incision. The prevention started pre-operatively, in the breathing and coughing you taught; the treatment is the same: sit the patient up, coach deep breaths and supported coughing, and walk them early. Neglected, it ripens into **pneumonia** — now with a productive cough, a higher fever and a genuinely ill patient needing escalation and antibiotics per orders.\n\nOn the legs, **deep vein thrombosis** classically announces itself in the first week: calf pain, swelling, warmth, one leg visibly fuller than the other — but clinical signs are unreliable, so suspicion after pelvic surgery, long immobility, dehydration or a long journey to hospital earns an urgent referral for imaging. **Pulmonary embolism** is the killer the clot threatens: sudden breathlessness, pleuritic chest pain, tachycardia, faintness — an emergency; call for help and stay with the patient. And your prevention arsenal is gloriously cheap: **early walking, leg exercises, hydration** and graduated compression stockings where prescribed. The patient who walks on the evening of surgery is the patient who does not clot.",
      },
      {
        type: "table",
        title: "Post-operative fever: the day-based search",
        body: "| The window | The classic cause | Where you look | What you find |\n|---|---|---|---|\n| Days 1–3 — 'Wind' | Atelectasis, then pneumonia | The chest — listen, ask about cough | Low fever, poor air entry at the bases, shallow breathing |\n| Days 3–5 — 'Water' | Urinary infection | The catheter, the urine sample | Cloudy or smelly urine, dysuria, frequency, suprapubic discomfort |\n| Days 4–6 — 'Wound' | Surgical site infection | The wound — look under the dressing | Increasing pain, spreading redness, heat, discharge |\n| Days 5–7 — 'Walk' | Deep vein thrombosis / embolism | The legs, then the chest | One swollen calf; sudden breathlessness is embolism until proven otherwise |\n| Any day — 'Wonder drug' | Drug fever | The chart — recently added drugs | Fever without a focus, sometimes with a rash |\n\nThe 5 Ws — **Wind, Water, Wound, Walk, Wonder drug** — are a thinking scaffold, not a cage. A real day-3 fever needs the urine checked AND the chest heard AND the wound looked at; a day-2 fever is not automatically harmless; and the first post-operative fever of any patient deserves full vital signs and a medical review rather than a paracetamol and a hope.",
      },
      {
        type: "text",
        title: "The wound: infection, dehiscence, evisceration",
        body: "**Surgical site infection** — the complication this whole course works to prevent — typically declares itself from **day 4 onward**, though it can appear up to 30 days after surgery (longer with implants): increasing pain, heat, spreading redness, swelling and discharge. Deep and organ-space infections are the dangerous subset — fever spikes, deep pain, a deceptively innocent wound — and they belong to the surgeon. Nursing: inspect under the dressing with clean technique, culture where available before antibiotics per orders, and report every suspicious wound the same day.\n\n**Dehiscence** — the wound layers tearing open — favours **day 5 to 10** and the risk patients: malnourished, anaemic, diabetic, coughing, distended, or those whose sutures were removed too early. Its classic herald is a sudden trickle or gush of **pink, watery fluid** from an apparently stable wound — often after a cough. **Evisceration** is dehiscence's catastrophe: the wound opens and abdominal contents are visible. The response is a drill: stay with the patient, call the surgeon, cover the exposed contents with **sterile towels moistened with saline**, keep the patient nil by mouth, reassure them (awake patients remember evisceration by how the team behaved), and prepare for theatre. Never push anything back.",
      },
      {
        type: "clinical_pearl",
        body: "Three sentences worth painting on the ward wall: **a rising pulse in a post-operative patient is haemorrhage until proven otherwise. Look UNDER the dressing, not at it.** And a wound that leaks pink fluid on day six is opening — say so early, and the patient gets re-sutured calmly rather than eviscerating at 3 am.",
      },
      {
        type: "text",
        title: "The quiet ones: gut and bladder",
        body: "**Paralytic ileus** — the bowel's post-operative sulk — is common and expected in the first two or three days after abdominal surgery: no flatus, a distending abdomen, absent or quiet bowel sounds, nausea and vomiting. It is managed with supportive patience: nil by mouth or sips per orders, nasogastric decompression if prescribed, IV fluids, and walking — and it is your measurements (abdominal girth, vomit, flatus) that tell the team whether it is resolving or becoming a prolonged ileus, which after day three or four needs escalation for obstruction or leak.\n\n**Urinary retention** is common after pelvic surgery, spinal anaesthesia and in older men: the patient who has not passed urine within **six to eight hours** post-operatively needs a bladder assessment — palpate the suprapubic dome, note the discomfort — and a report; a catheter per order relieves it. And watch every catheterised patient for the day 3–5 urinary infection: cloudy, smelly urine and fever — the catheter that stays a day longer than needed is the infection's invitation, so removal discipline is treatment too.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Day 6 after open abdominal surgery, an elderly diabetic man — the ward is called about him at evening rounds: temperature 38.6, the wound red and hot with a bead of yellow discharge, and while you are re-dressing it, a trickle of pink fluid runs from the lower end of the incision. He says the wound 'gave a way' when he coughed.\n\nWhat is happening, and what happens next?\n\nAnswer: Two findings, one trajectory. A surgical site infection on day 6 — fever, spreading inflammation, discharge: inspect with clean technique, clean and dress per wound protocol, culture where possible, inform the team, antibiotics per orders. And the pink leak — the classic herald of **dehiscence**, with the cough as the final insult. He needs the surgeon now, before the wound opens fully: supported bed rest sitting up, nil by mouth in case theatre comes, the wound covered with a sterile dressing, vitals and glucose checked (his diabetes colours both healing and infection), and calm preparation for re-suturing under anaesthesia. If the wound does open with contents visible — evisceration: stay, call, sterile saline-moistened towels over the contents, nil by mouth, reassure, theatre. The diabetic elder with a cough is exactly the patient this whole lesson is about: yesterday, when the wound was merely hot, was a far better day to be caught.",
      },
      {
        type: "quiz_prompt",
        title: "Day three, 38.4 degrees",
        body: "A woman on day 3 after pelvic surgery spikes 38.4. Her chest is clear, the wound is clean — but the urine in the catheter bag is cloudy and smelly, and she has had the catheter since theatre.\n\nWhat is the likely cause, and what is the focused assessment?\n\nAnswer: 'Water' — a catheter-associated urinary infection in its classic day 3–5 window. Assess the urine's appearance and smell, bladder symptoms, the vital signs for deterioration, and the catheter itself: which day it is, and whether it can come out today. Send a urine sample per protocol, inform the team for antibiotics per orders — and push for catheter removal the moment it is no longer needed, because the bag is the reservoir feeding the infection.",
      },
      {
        type: "memory_trick",
        body: "Fever after surgery, by the days: **Wind, Water, Wound, Walk, Wonder drug** — early days the chest, middle days the urine and the wound, late days the legs, and the chart can be guilty on any day. And for the worst two: **de-his-cence opens the seam; e-viscer-ation shows the contents** — saline-soaked towels, stay, call, theatre.",
      },
      {
        type: "summary",
        body: "- Complications run on a clock: immediate (hours — recovery territory), early (days 1–3: bleeding, atelectasis, ileus, retention), late (day 4+: infection, thrombosis, secondary haemorrhage, dehiscence).\n- A rising pulse with pallor and cool sweat is haemorrhage until proven otherwise; look UNDER dressings; secondary haemorrhage (day 7–10, infection-eroded vessel) is an emergency.\n- Fever triage by the 5 Ws — Wind (1–3), Water (3–5), Wound (4–6), Walk (5–7), Wonder drug (any) — a scaffold that still demands the whole patient each time.\n- Surgical site infection: pain, heat, redness, discharge from day 4 (up to 30); inspect with clean technique, culture and report.\n- Dehiscence (day 5–10, heralded by pink fluid) → inform and prepare; evisceration → stay, sterile saline-moistened cover, nil by mouth, theatre, never push back.\n- Prevention is nursing: pre-taught breathing and coughing, day-one walking, hydration, catheter-removal discipline, leg watch.",
      },
    ],
    questions: [
      {
        topic: "Post-operative Fever",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient on post-operative day 3 has a fever of 38.4. Following the classic day-based triage, which site deserves your first focused assessment?",
        options: [
          "The legs, for deep vein thrombosis",
          "The surgical wound, for dehiscence",
          "The urine and catheter — urinary infection is the classic day 3–5 cause — alongside hearing the chest and inspecting the wound",
          "The throat, for a respiratory virus",
        ],
        correctIndex: 2,
        explanation:
          "Day 3 is the classic window for catheter-related urinary infection — but the 5 Ws are a search order, not a diagnosis: the urine leads, the chest and wound are still checked, and the first fever earns a full assessment.",
        courseSlug: "perioperative-nursing",
      },
      {
        topic: "Secondary Haemorrhage",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "On day 7, a wound that has been dry for days starts bleeding fresh blood. What is this, and what is the response?",
        options: [
          "Primary haemorrhage — apply pressure and observe for four hours",
          "Secondary haemorrhage — infection eroding a vessel: pressure, inform and escalate immediately; this patient usually returns to theatre",
          "Normal wound healing — increase the dressing frequency",
          "A reaction to the suture material — remove the sutures at the bedside",
        ],
        correctIndex: 1,
        explanation:
          "Fresh bleeding around day 7–10 from a settled wound is secondary haemorrhage — classically infection eroding a vessel. It is an inform-and-escalate emergency, usually ending back in theatre, never a dressing schedule change.",
        courseSlug: "perioperative-nursing",
      },
      {
        topic: "Wound Complications",
        type: "MCQ",
        difficulty: "Clinical Reasoning",
        stem: "Day 6 after laparotomy, an elderly diabetic man coughs and his wound starts leaking pink fluid; minutes later the wound opens and bowel is visible. What is your sequence?",
        options: [
          "Gently push the bowel back and tape the wound closed",
          "Irrigate the wound with antiseptic and apply a dry dressing",
          "Transfer him to the ward immediately to inform the surgeon there",
          "Stay with the patient, call the surgeon, cover the contents with sterile saline-moistened towels, keep him nil by mouth, reassure him and prepare for theatre",
        ],
        correctIndex: 3,
        explanation:
          "This is evisceration: the drill is stay, call, cover with sterile saline-moistened towels, nil by mouth, reassurance and theatre. Nothing is pushed back, antiseptics are never poured on exposed bowel, and the patient is not walked to another unit.",
        whyOthers: {
          A: "Never push contents back — outside the body, bowel is contaminated and easily injured; repair belongs in theatre.",
          B: "Antiseptic irrigation chemically injures exposed bowel and delays the definitive care the patient needs.",
          C: "Walking him to the ward delays the emergency call and moves an unstable patient — the surgeon is called from where you stand.",
        },
        courseSlug: "perioperative-nursing",
      },
      {
        topic: "Post-operative Haemorrhage",
        type: "MCQ",
        difficulty: "Hard",
        stem: "Which observation most reliably signals early post-operative haemorrhage, often before the blood pressure falls?",
        options: [
          "A steadily rising pulse, with pallor, restlessness and a cool sweat — look under the dressing and inform early",
          "A rising blood pressure with a flushed face",
          "Deep red urine",
          "A falling temperature",
        ],
        correctIndex: 0,
        explanation:
          "Compensating shock shows first as a rising pulse with pallor and restlessness; blood pressure holds until late. The nurse who acts on the early pulse pattern, and looks under the dressing, catches the bleed before the collapse.",
        courseSlug: "perioperative-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Post-operative Fever",
        front: "The 5 Ws of post-operative fever, with their day windows?",
        back: "Wind (days 1–3, atelectasis then pneumonia), Water (3–5, urinary infection), Wound (4–6, surgical site infection), Walk (5–7, DVT/embolism), Wonder drug (any day, drug fever).",
      },
      {
        topic: "Haemorrhage",
        front: "Primary versus secondary post-operative haemorrhage?",
        back: "Primary: during or soon after surgery, mechanical cause (slipped tie, unsecured vessel). Secondary: typically day 7–10, infection eroding a vessel — fresh bleeding from a settled wound. Both are escalate-now emergencies.",
      },
      {
        topic: "Evisceration",
        front: "State the evisceration drill.",
        back: "Stay with the patient, call the surgeon, cover visible contents with sterile saline-moistened towels, nil by mouth, reassure the patient, prepare for theatre — and never push anything back.",
      },
      {
        topic: "Wound Complications",
        front: "What is the classic herald of wound dehiscence?",
        back: "A sudden leak of pink, serosanguinous fluid from a wound, typically day 5–10, often after coughing — inform the surgeon before the wound opens fully.",
      },
      {
        topic: "Prevention",
        front: "The prevention bundle for chest and thromboembolic complications?",
        back: "Pre-operatively taught deep breathing and supported coughing, sitting up, early walking, hydration, leg exercises, compression stockings where prescribed — and catheters removed as soon as unneeded.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Global Guidelines for the Prevention of Surgical Site Infection",
        year: "2016",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022 (15th edition)",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
      {
        organization: "Ghana Health Service",
        title: "Infection Prevention and Control Guidelines for Health Care Facilities",
        note: "Ghana national IPC guidance; verify current edition.",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "perioperative-nursing",
    moduleTitle: "Recovery & After",
    lessonTitle: "Pain Management After Surgery",
    description:
      "Pain after surgery is not a trial to be endured — it is a vital sign of recovery to be measured, treated and re-measured, with the patient as the judge and you as the one who returns to check.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Assess post-operative pain systematically — score at rest and on movement, character, and behaviour for those who cannot score — and re-assess after every intervention.",
      "Apply the WHO analgesic ladder concept and multimodal analgesia as daily ward practice.",
      "Apply opioid safety: the observations before every dose, the side effects to prevent, and the myths to answer with truth.",
      "Integrate non-drug analgesia and honest patient education into routine post-operative care.",
    ],
    tags: ["pain management", "analgesia", "postoperative care"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "There is an old ward culture, not unique to Ghana, that treats post-operative pain as a character test: the patient who asks too often is 'just weak', and the nurse who treats quickly is 'spoiling them'. This lesson dismantles that culture with physiology. **Unrelieved pain is not stoicism — it is harm**: shallow breathing that grows into atelectasis and fever, immobility that breeds clots and pressure sores, a gut that refuses to move, sleepless nights that slow healing, and a nervous system that learns pain and keeps playing it after the wound has healed.\n\nPain management is nursing work. It starts with the oldest and most honest definition in the field, and it runs on a cycle you can perform with a watch: **assess, treat, re-assess, document.**",
      },
      {
        type: "text",
        title: "Assessment: the patient is the instrument",
        body: "Pain is whatever the patient says it is, happening whenever they say it is — you cannot see it on a monitor, and a smiling patient may be guarding a wound with every breath. Assess with the **numerical rating scale** (0 = no pain, 10 = the worst imaginable) — and always in **two conditions**: **at rest** and **on movement** (sitting up, coughing, walking), because the score on movement is the one that predicts complications, and the gap between the two is the one that guides care. For patients who cannot count their pain — small children, the confused — read behaviour with the same seriousness: crying, guarding, restlessness, refusing to move.\n\nAsk the character too: **sharp and localised** pain suggests the incision; **deep, aching or colicky** pain suggests the viscera; **burning or shooting** pain suggests nerve involvement, which answers poorly to the usual ladder. And know your culture honestly: many Ghanaian patients under-report — not wanting to 'disturb the nurse', fearing injections, or taught that endurance is dignity. Your counter-move is to be the one who asks, warmly and specifically, at set times — 'out of ten, on movement' — so that telling the truth becomes the easy, normal thing to do.",
      },
      {
        type: "text",
        title: "The ladder and the multimodal web",
        body: "The **WHO analgesic ladder** — built for cancer pain, taught everywhere because its logic is universal — steps up: **non-opioids** (paracetamol; NSAIDs such as ibuprofen or diclofenac) for mild pain; **weak opioids** (codeine or tramadol — the backbone of post-operative relief in many Ghanaian facilities) for moderate; and **strong opioids** (morphine, oral or injectable) for severe — with the non-opioids continuing at every step, because they are partners, not juniors. Two paracetamol facts belong in your head: the adult daily ceiling is **4 g in 24 hours** (lower for the frail, the elderly and liver disease), and exceeding it is the quiet liver killer — 'it seems weak' is how overdoses begin. NSAIDs are powerful partners, but respect their cautions — bleeding risk with fresh surgical wounds, gastric irritation, kidney strain in the dehydrated patient and asthma in some — the team's decision, your vigilance.\n\n**Multimodal analgesia** is the modern spine: attack pain through several small doors — scheduled paracetamol, an NSAID where suitable, a smaller opioid dose, and local infiltration or a regional block where the team provides it — instead of one big door with big side effects. The scheduled paracetamol is the quiet hero: given **regularly, by the clock**, it holds the baseline down so the opioids handle only the spikes. In a resource-limited pharmacy, multimodal thinking is not a luxury — it is how you build decent relief from paracetamol, tramadol and a block on the day the morphine shelf is empty.",
      },
      {
        type: "table",
        title: "Score, then act (per prescription and protocol)",
        body: "| Pain score | What it means | The typical plan (per prescription) | Your role |\n|---|---|---|---|\n| 0–3, mild | Annoying; sleeps and moves | Scheduled non-opioid; non-drug comfort | Ask on movement too; keep the schedule honest |\n| 4–6, moderate | Interferes with cough, walking, sleep | Step up per prescription — a weak opioid added; reassess | Give in time, not after begging; re-score within the interval |\n| 7–10, severe | Cannot move, cough or rest | Strong opioid per prescription; urgent review | Fast-track comfort and review; watch the opioid pair |\n\nWhatever the step, the cycle is the same: score → treat → wait the right interval (re-scoring about 30–60 minutes after an injectable dose) → document. A score written after the intervention is the only proof the treatment worked.",
      },
      {
        type: "text",
        title: "Opioids: powerful, safe in disciplined hands",
        body: "Opioids are excellent drugs wrapped in real risks, and the discipline is simple. Before **every** dose — especially intravenously — observe the pair that predicts trouble: **respiratory rate** and **sedation level**. A patient too sleepy to hold a conversation does not get the next dose until the team reviews them — respiratory depression announces itself as sleep with a slowing rate, long before the saturation falls. Then the preventable miseries: **constipation** is near-universal — mobilise, hydrate and give the stool softener the routine orders carry, never waiting for day four; **nausea** — an anti-emetic per prescription, and honesty that it usually settles within days. If the ward runs **patient-controlled analgesia (PCA)**, the rule is absolute: **only the patient presses the button** — a well-meaning relative pressing for a sleeping patient has killed patients. If the team has placed an **epidural or regional catheter**: watch the blood pressure (the block vasodilates), check the legs' movement and the insertion site, keep the infusion labelled and running only what is prescribed, and guard the catheter.\n\nAnd answer the big myth out loud, where patients and relatives can hear: **opioids used for genuine acute pain, at prescribed doses, for days, rarely cause addiction** — the fear that withholds treatment harms far more patients than the treatment ever has. The truth has two halves: addiction is not the realistic outcome of a week of post-operative morphine; unobserved intravenous dosing is the realistic danger. Both halves are yours.",
      },
      {
        type: "clinical_pearl",
        body: "'PRN' means when the **patient** needs it — not as rarely as the nurse likes. In hesitant hands the PRN prescription becomes under-treatment; in disciplined hands it becomes flexibility with safety. Chart the score, the drug and the re-score — and treat a request for analgesia as data: a patient asking at every round is telling you the baseline plan is not holding.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Day 1 after open surgery, a 45-year-old trader refuses to cough or sit up. Her score is 8 on movement; she has taken nothing since theatre because 'I don't want to trouble you, and I fear the injection.' Her chest is already quiet at the bases.\n\nWhat is your plan?\n\nAnswer: Treat the fear and the pain together. Give the prescribed analgesia now — the scheduled paracetamol plus the opioid she is due — and explain in plain words that moving and coughing are the treatment, not the risk. Offer back some control: a pillow to splint the wound, an oral route where her prescription allows it, and a fixed time you will return. Add the non-drug layer — sit her up once the medicine is working, warmth for the tense muscles, unhurried conversation — then return on time, re-score at rest and on movement, and chart both. Fix the system too: put her scheduled paracetamol honestly on the drug round, and flag her pattern at handover so the night staff ask before she has to admit pain. Tonight she should sleep; tomorrow morning she should walk.",
      },
      {
        type: "quiz_prompt",
        title: "The pair before the push",
        body: "Before you give intravenous morphine per prescription, what two observations do you take — and what finding stops the dose pending review?\n\nAnswer: Respiratory rate and sedation level. A patient who is deeply drowsy or drifting off between sentences — or whose respiratory rate has fallen below what your protocol defines as safe — does not receive the dose until the team reviews them; you call, and you observe closely meanwhile. 'Too sleepy to be safe' is a real contraindication that no pain score overrides.",
      },
      {
        type: "callout",
        title: "The analgesia you already own",
        body: "Non-drug measures are not decoration; they are synergy. Positioning that takes tension off the incision; a pillow pressed to the wound during cough — splinting; warmth for aching muscles; distraction — conversation, a radio, family nearby; care clustered so sleep happens in blocks; and the deep pharmacology of being taken seriously: a nurse who says 'I will come back at 2 to check you' — and comes back. Use them all, and every drug dose works better.",
      },
      {
        type: "memory_trick",
        body: "P.A.I.N. — **P**robe (score it, at rest AND on movement), **A**ct (multimodal, by the clock), **I**nspect (re-score after 30–60 minutes, and watch the opioid pair), **N**ote (chart everything — the score after the dose is the proof). And two sentences to keep for your whole career: 'PRN means when the patient needs it.' 'Pain is whatever the patient says it is.'",
      },
      {
        type: "summary",
        body: "- Unrelieved post-operative pain is a complication factory: atelectasis, immobility and clots, ileus, sleepless non-healing — treat it as a vital sign of recovery.\n- Assess with 0–10 at rest AND on movement; for those who cannot score, behaviour is the instrument; ask warmly and on a schedule — many patients under-report.\n- Ladder: non-opioid → weak opioid → strong opioid, with non-opioids continuing throughout; multimodal plus scheduled paracetamol holds the baseline (adult ceiling 4 g/day).\n- Opioid discipline: respiratory rate + sedation before every dose; too sleepy = hold and review; prevent constipation and nausea; PCA — only the patient presses; regional catheters monitored.\n- The addiction fear for a week of acute treatment is a myth worth correcting out loud; the unobserved intravenous dose is the real danger.\n- Re-assess and chart after every intervention — the cycle (probe, act, inspect, note) is the treatment.",
      },
    ],
    questions: [
      {
        topic: "Pain Assessment",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which statement about post-operative pain assessment is correct?",
        options: [
          "Pain is whatever the patient says it is — scored 0–10 at rest AND on movement, and re-assessed after treatment",
          "Pain is whatever the nurse judges from the size of the wound",
          "Patients who are smiling cannot be having severe pain",
          "The only valid pain score is taken while the patient sleeps",
        ],
        correctIndex: 0,
        explanation:
          "Self-report is the gold standard: the patient's number, at rest and on movement, guides care — and the re-score after treatment is the proof it worked. Smiles mask pain; wounds do not measure it.",
        courseSlug: "perioperative-nursing",
      },
      {
        topic: "Multimodal Analgesia",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is scheduled, by-the-clock paracetamol called the backbone of post-operative analgesia?",
        options: [
          "It replaces opioids entirely in all patients",
          "It is the fastest-acting analgesic available",
          "Regular dosing holds the baseline pain down so opioids handle only the spikes — a synergistic, multimodal effect at low side-effect cost, with the 4 g/day adult ceiling respected",
          "It prevents the constipation caused by opioids",
        ],
        correctIndex: 2,
        explanation:
          "Paracetamol given by the clock maintains a steady baseline effect; combined with an NSAID and smaller opioid doses, it produces better relief with fewer side effects than any single big dose — within the well-known daily ceiling.",
        courseSlug: "perioperative-nursing",
      },
      {
        topic: "Opioid Safety",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Before giving intravenous morphine per prescription, you find the patient drifting off between sentences. What do you do?",
        options: [
          "Give the dose — she needs sleep to heal",
          "Hold the dose, observe closely, and call for review — deepening sedation is the warning sign of respiratory depression, and 'too sleepy' is not safe to dose",
          "Give a double dose since she cannot score her pain",
          "Ask the family to keep her awake until the next round",
        ],
        correctIndex: 1,
        explanation:
          "Sedation level and respiratory rate are the pair checked before every opioid dose: a patient too drowsy to converse is at risk of respiratory depression — the dose is held, the team called, and the patient observed. No pain score overrides 'too sleepy to be safe'.",
        courseSlug: "perioperative-nursing",
      },
      {
        topic: "PCA Safety",
        type: "MCQ",
        difficulty: "Hard",
        stem: "A patient on patient-controlled analgesia (PCA) is asleep. Her mother presses the button 'so she doesn't wake up in pain'. What is the issue and the teaching?",
        options: [
          "It is fine — family know the patient best",
          "It is fine provided the nurse supervises each press",
          "The button should be pressed by whoever is nearest",
          "Only the patient may press the PCA button — a sedated patient cannot signal overdose, and family or staff pressing for a sleeping patient has caused fatal respiratory depression. Teach the rule warmly and post the reminder",
        ],
        correctIndex: 3,
        explanation:
          "The PCA's safety is the patient's own waking hand: a sleeping patient cannot demand more, so anyone else pressing removes the only brake. Families press with love — teach the rule warmly, clearly and before the first dose.",
        whyOthers: {
          A: "Knowing the patient does not replace the patient's own awake signal — the device's safety is the patient's alertness.",
          B: "Supervision does not transfer the safety — the sleeping patient still cannot signal that the dose was too much.",
          C: "Proximity is not authority — the press belongs to the patient alone, by design.",
        },
        courseSlug: "perioperative-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Pain Assessment",
        front: "State the pain cycle of post-operative nursing.",
        back: "Probe (score at rest and on movement) → Act (multimodal, by the clock) → Inspect (re-score about 30–60 minutes after an injectable dose) → Note (chart the response).",
      },
      {
        topic: "Analgesic Ladder",
        front: "Name the WHO analgesic ladder steps.",
        back: "Non-opioids (paracetamol, NSAIDs) → weak opioids (codeine, tramadol) → strong opioids (morphine) — with the non-opioids continuing at every step.",
      },
      {
        topic: "Opioid Safety",
        front: "The observation pair before every opioid dose, and the rule that stops it?",
        back: "Respiratory rate and sedation level — a deeply drowsy patient or a falling rate means hold, observe and call; 'too sleepy to be safe' stops the dose.",
      },
      {
        topic: "PCA Safety",
        front: "Why must only the patient press a PCA button?",
        back: "The sleeping patient cannot signal overdose — pressers for sleeping patients (family or staff) have caused fatal respiratory depression; the patient's own waking press is the built-in safety.",
      },
      {
        topic: "Multimodal Analgesia",
        front: "What is multimodal analgesia, and why does it suit resource-limited pharmacies?",
        back: "Combining several small analgesic doors — scheduled paracetamol, an NSAID if suitable, smaller opioid doses, local or regional blocks — for better relief with fewer side effects from each drug.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Cancer Pain Relief",
        year: "1996 (2nd edition)",
        note: "Origin of the WHO analgesic ladder — its stepwise logic is applied worldwide to acute post-operative pain.",
      },
      {
        organization: "Ministry of Health, Ghana",
        title: "Ghana Standard Treatment Guidelines",
        year: "2017",
        note: "National prescribing reference including analgesics; verify current edition.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022 (15th edition)",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
    ],
  },
];
