// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 3, Semester 1 — Batch C (Clinical Pharmacology & Medication Safety)
// 9 lessons for courseSlug "pharmacology-3"
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "pharmacology-3",
    moduleTitle: "Everyday Medicines on the Ward",
    lessonTitle: "Antimicrobials in Daily Practice",
    description:
      "The antibiotics you will give every single shift — what each family does, what to watch for, and the checks that keep these powerful medicines working.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the major antimicrobial families used on a Ghanaian ward and their typical uses.",
      "Explain the nursing checkpoints around antimicrobials — allergy history, cultures before the first dose, timing and adherence teaching.",
      "Recognise the common adverse effects of each major family and the actions they demand.",
    ],
    tags: ["antimicrobials", "antibiotics", "penicillin allergy", "medication safety", "ward medicines"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Antimicrobials are the most-given — and most-borrowed — medicines in the country. On your ward they fight sepsis, pneumonia, wound infection and malaria; in the community they are shared between neighbours, sold without prescription and stopped the moment the fever settles.\n\nThe nurse stands at the last checkpoint before every dose reaches a patient: the allergy question, the sample before the first dose, the timing of each round, and the teaching that follows the patient home. This lesson walks the families you will meet daily and the vigilance each one asks of you.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Penicillins** (amoxicillin, ampicillin, benzylpenicillin) weaken the bacterial cell wall — workhorses for chest, throat, skin and urinary infections. Their shadow is **allergy**: ask every patient about rash, swelling or breathing trouble with penicillin before giving the first dose, and document the answer. **Cephalosporins** (ceftriaxone, cefuroxime) cover a broader range; give intravenous doses slowly, well diluted, and observe after the first dose. **Metronidazole** hunts anaerobic and amoebic infection; it brings a metallic taste, and the iron rule is **no alcohol during and for days after treatment** — the combination causes flushing, pounding heart and vomiting.\n\n**Aminoglycosides** (gentamicin) are powerful against severe infection but can injure the **kidneys and the inner ear** — monitor urine output, report any new ringing in the ears or hearing change, and ensure hydration. **Fluoroquinolones** (ciprofloxacin) treat urinary and gut infections; tendons and sun-exposed skin complain, and they are generally avoided in children and pregnancy. **Tetracyclines** stain growing teeth and are avoided in children and pregnancy. **Macrolides** (azithromycin, erythromycin) are the classic alternative for the penicillin-allergic patient, at the price of stomach upset. Alongside antibiotics sit the **antimalarials** — in Ghana, artemisinin-based combination therapy — where the nursing rule is the same: every dose, to the end, even when the fever has gone.",
      },
      {
        type: "table",
        title: "The ward families at a glance",
        body: "| Family | Ward examples | Watch for | Your role |\n|---|---|---|---|\n| Penicillins | Amoxicillin, ampicillin, benzylpenicillin | Allergy — rash, swelling, breathing difficulty | Ask and document allergy history before the first dose; observe after it |\n| Cephalosporins | Ceftriaxone, cefuroxime | Rash; vein irritation | Give well diluted and slowly; observe after the first dose |\n| Metronidazole | IV or oral metronidazole | Metallic taste; reaction with alcohol | Teach no alcohol during treatment and for days after |\n| Aminoglycosides | Gentamicin | Kidney injury; ringing in ears, hearing loss | Monitor urine output and hydration; report hearing symptoms at once |\n| Fluoroquinolones | Ciprofloxacin | Tendon pain; photosensitivity; avoided in children and pregnancy | Teach sun protection; question orders in restricted groups |\n| Macrolides | Azithromycin, erythromycin | Stomach upset, nausea | Give with or after food where the formulation allows |\n| Antimalarials | Artemisinin combination therapy | Fever returning, vomiting doses | Teach full completion; report vomiting within the hour |",
      },
      {
        type: "text",
        title: "The five checkpoints of every antimicrobial",
        body: "**Ask.** Allergy history — rash, swelling, breathing trouble with this family — before the first dose, every admission. **Sample.** Where guidelines advise it, blood, urine, pus or swab cultures are taken **before** the first dose, so the laboratory can identify the culprit — but never delay emergency treatment of sepsis to wait for a sample.\n\n**Time.** Antibiotics work by keeping steady levels in the blood: 'three times a day' means roughly every eight hours, not three doses between breakfast and supper. Plan the round so doses keep their spacing. **Observe.** Stay with a patient for the first minutes after a new intravenous antimicrobial — anaphylaxis rarely waits politely. **Teach.** The course is finished as prescribed even when the patient feels well, because stopped-early courses breed resistance; leftover tablets are never shared with relatives or saved 'for next time'. If severe, watery diarrhoea begins during or after a course, that is a report-the-same-day event, not a nuisance to manage at home.",
      },
      {
        type: "clinical_pearl",
        body: "Never give a first dose of a new antimicrobial and walk away. Rash, itch or breathlessness in the first minutes is yours to catch — observation is part of the dose.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Twenty minutes after her first intravenous dose of ceftriaxone, a woman on your ward develops an itchy rash over her chest and arms and says her throat feels tight. The infusion is still running.\n\nWhat are your immediate actions, in order?\n\nAnswer: Stop the infusion at once — the driver of the reaction is still entering her. Call for senior help immediately, keep her positioned and observed, and support her breathing while treatment per protocol (adrenaline, fluids, oxygen as prescribed) is prepared. Document the time, the drug, the batch and the reaction; mark her chart and folder with the allergy clearly; and report the reaction through the pharmacovigilance system afterwards. A throat that 'feels tight' is an emergency until someone experienced says otherwise.",
      },
      {
        type: "memory_trick",
        body: "The five fingers of antimicrobial safety: Ask allergy, Sample before, keep Time, Observe the first dose, Teach to the finish. Five fingers — one hand, every dose.",
      },
      {
        type: "summary",
        body: "- Penicillins: workhorses with an allergy shadow — ask and document before the first dose, observe after it.\n- Metronidazole: no alcohol during treatment and for days after.\n- Gentamicin: watch urine output, hydration and hearing.\n- Fluoroquinolones and tetracyclines are generally avoided in children and pregnancy; macrolides are the penicillin-allergic alternative.\n- Cultures before the first dose where advised — without delaying emergency sepsis treatment.\n- Doses keep their spacing; courses are finished; leftovers are never shared. Severe watery diarrhoea during or after a course is a same-day report.",
      },
    ],
    questions: [
      {
        topic: "Antimicrobials in Practice",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A patient starting metronidazole asks whether she can take her usual alcoholic drink at the weekend. What do you tell her?",
        options: [
          "Alcohol is fine as long as she takes the tablet first",
          "One drink is safe after the third day of treatment",
          "No alcohol during treatment and for several days after the last dose",
          "Alcohol only matters with the injection, not the tablets",
        ],
        correctIndex: 2,
        explanation:
          "Metronidazole with alcohol triggers a flushing, vomiting, pounding-heart reaction. The rule is no alcohol during the course and for several days after finishing — the drug needs time to clear.",
        courseSlug: "pharmacology-3",
      },
      {
        topic: "Antimicrobials in Practice",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient on gentamicin for severe infection reports new ringing in his ears since the morning. What is the correct nursing action?",
        options: [
          "Reassure him that ringing is normal with strong antibiotics",
          "Document it in the notes for the doctor to see on the next round",
          "Report it the same day — it may signal inner-ear injury from the medicine",
          "Encourage him to rinse his ears with clean water",
        ],
        correctIndex: 2,
        explanation:
          "Aminoglycosides can injure the inner ear and the kidneys. New tinnitus or hearing change is an early warning that the medicine is harming him — report immediately so levels and treatment can be reviewed, alongside urine output and hydration checks.",
        courseSlug: "pharmacology-3",
      },
      {
        topic: "Antimicrobials in Practice",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient on day 3 of a five-day amoxicillin course says he will stop today because he feels completely well. What is your best response?",
        options: [
          "Agree — finishing early saves tablets for the next illness",
          "Advise him to store the leftovers carefully for future infections",
          "Tell him to take double doses for the last two days instead",
          "Explain that stopping early lets surviving bacteria multiply and return stronger, and encourage him to complete the course",
        ],
        correctIndex: 3,
        explanation:
          "Feeling well means the medicine is winning — not that the battle is over. Stopped-early courses leave the strongest bacteria alive to regrow, causing relapse and breeding resistance. Completing the prescribed course is the protection; sharing or saving leftovers never is.",
        courseSlug: "pharmacology-3",
      },
      {
        topic: "Antimicrobials in Practice",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why are cultures and samples ideally taken BEFORE the first dose of an antimicrobial?",
        options: [
          "Because the needle hurts less before treatment",
          "Because the law requires it in every case",
          "Because the laboratory refuses samples from treated patients",
          "Because antibiotics can kill or suppress the organisms the laboratory is trying to identify",
        ],
        correctIndex: 3,
        explanation:
          "Once antibiotics are on board, the germs they target may be killed or suppressed, leaving the culture falsely empty and the laboratory guessing. Sample first — but never delay emergency treatment of suspected sepsis to get the sample.",
        courseSlug: "pharmacology-3",
      },
    ],
    flashcards: [
      {
        topic: "Antimicrobials in Practice",
        front: "Which families are generally avoided in children and pregnancy, and why?",
        back: "Tetracyclines (stain growing teeth, slow bone growth) and fluoroquinolones (tendon and joint concerns) — both also avoided in pregnancy.",
      },
      {
        topic: "Antimicrobials in Practice",
        front: "What are the two organ systems to monitor during gentamicin therapy?",
        back: "The kidneys (urine output, hydration, renal function results) and the inner ear (new tinnitus or hearing loss — report the same day).",
      },
      {
        topic: "Antimicrobials in Practice",
        front: "What is the alcohol rule with metronidazole?",
        back: "None during treatment and for several days after the last dose — the combination causes flushing, pounding heart and vomiting.",
      },
      {
        topic: "Antimicrobials in Practice",
        front: "Name the five fingers of antimicrobial safety.",
        back: "Ask allergy, Sample before, keep Time, Observe the first dose, Teach to the finish.",
      },
    ],
    sources: [
      {
        organization: "Ministry of Health, Ghana",
        title: "Standard Treatment Guidelines",
        note: "Ghana national treatment guidance — verify current edition at your facility.",
      },
      {
        organization: "World Health Organization",
        title: "WHO Model List of Essential Medicines",
        year: "2023",
        note: "Includes the AWaRe classification of antibiotics — verify current version.",
      },
      {
        organization: "Elsevier",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "pharmacology-3",
    moduleTitle: "Everyday Medicines on the Ward",
    lessonTitle: "Pain & Fever Medicines",
    description:
      "Paracetamol, NSAIDs and opioids — the three-step logic of pain relief, the fever rules, and the assessment that decides what a patient truly needs.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe the three families of pain and fever medicines with their uses, cautions and side effects.",
      "Apply pain assessment before treatment and reassessment after — treating the patient, not only the number.",
      "Recognise opioid adverse effects, including respiratory depression, and the emergency response.",
    ],
    tags: ["analgesia", "paracetamol", "nsaids", "opioids", "fever management"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Pain is the commonest reason a person seeks care, and fever is the commonest reason a Ghanaian parent carries a child through the night to your facility. Between them, paracetamol, ibuprofen and the opioids will pass through your hands on every shift you will ever work.\n\nThe skill is matching the medicine to the pain, watching what follows, and never letting the fever medicine replace the search for the fever's cause. That last sentence is the whole discipline of this lesson in miniature.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Paracetamol** is the workhorse: it eases mild to moderate pain and lowers fever, is gentle on the stomach, and is safe in pregnancy when used as advised. Its danger is the **liver** — overdose (often staggered, several small overdoses over a day or two) destroys the liver silently, and the antidote, N-acetylcysteine, works best when given early. The adult daily ceiling of **4 grams** is a line you teach, not a suggestion. **NSAIDs** — ibuprofen, diclofenac, aspirin — add anti-inflammatory power for injuries, period pain and arthritis. They irritate the stomach, can injure the kidneys (especially in dehydration, elderly patients or chronic kidney disease), increase bleeding risk, and are avoided in late pregnancy; **aspirin is never given to children** with fever or viral illness because of **Reye's syndrome**.\n\n**Opioids** — codeine and tramadol for moderate pain; morphine and pethidine for severe and post-operative pain — are indispensable and demanding. Their side effects are a package: **respiratory depression** (the killer), sedation, nausea, itching and **constipation** (so regular opioids always come with a bowel plan). **Naloxone** reverses opioid respiratory depression — know where it lives on your ward. The WHO pain ladder logic: match strength to severity, give **by mouth** when possible, **by the clock** for persistent pain rather than chasing it, and combine families (paracetamol + a step appropriate opioid) so each dose works harder.",
      },
      {
        type: "text",
        title: "Fever: treat the patient, hunt the cause",
        body: "Fever is a sign, not a diagnosis. Your response: assess the whole patient, unwrap and cool with tepid sponging, encourage fluids, give an antipyretic such as paracetamol per guideline, and **hunt the cause** — in Ghana that means malaria testing comes early, alongside searching for the chest, urinary or wound source. A fever that resolves with paracetamol has been soothed, not solved; the toddler who looks limp, refuses feeds, breathes fast or has convulsed is a referral, whatever the thermometer says. And after every analgesic dose, **reassess**: return in half an hour, ask the patient to score the pain again, and let the response guide the next step. Assess → treat → reassess is the loop that keeps analgesia safe and honest.",
      },
      {
        type: "table",
        title: "The three families side by side",
        body: "| Family | Best for | Main cautions | After giving, watch |\n|---|---|---|---|\n| Paracetamol | Mild to moderate pain, fever; pregnancy-safe as advised | Liver injury in overdose — ceiling 4 g daily in adults; watch staggered overdoses | Fever curve, pain score, and in overdose: the antidote N-acetylcysteine is time-critical |\n| NSAIDs (ibuprofen, diclofenac, aspirin) | Inflammatory pain, injuries, period pain | Stomach irritation and bleeding, kidney risk in dehydration and elderly, avoided late pregnancy; no aspirin in children (Reye's) | Dyspepsia, black stools, urine output, swelling |\n| Opioids (codeine, tramadol, morphine, pethidine) | Moderate to severe and post-operative pain | Respiratory depression, sedation, constipation, dependence with misuse | Respiratory rate and consciousness (rate falling is the alarm), pain score, bowel motions |",
      },
      {
        type: "clinical_pearl",
        body: "Pain is the fifth vital sign: score it before you medicate and score it again afterwards. A treatment that is never reassessed is not a treatment — it is a guess.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A man on his first day after surgery refuses his prescribed morphine, telling you quietly that he does not want to 'become an addict'. He has not slept, his breathing is shallow from guarding the wound, and he refuses to cough.\n\nHow do you counsel him — and what do you watch for after he accepts?\n\nAnswer: Explain honestly: pain that is unrelieved harms recovery — shallow breathing and a refused cough invite chest infection after surgery, and a patient who cannot move collects complications. Dependence from a short, supervised post-operative course taken exactly as prescribed is rare; the greater danger on day one is the untreated pain. Agree to give it, teach him it is timed, not begged for, and watch afterwards: respiratory rate, sedation level, pain score and a bowel plan, since constipation travels with every regular opioid. Reassess together, and step the medicines down as the pain settles.",
      },
      {
        type: "memory_trick",
        body: "By mouth, by the clock, by the ladder — and never forget the bowel. Opioids without a bowel plan are only half a prescription.",
      },
      {
        type: "summary",
        body: "- Paracetamol: the workhorse for mild pain and fever; the liver is the ceiling — 4 g daily in adults, and staggered overdose is still overdose.\n- NSAIDs: anti-inflammatory power with stomach, kidney and bleeding cautions; avoided late in pregnancy; aspirin never in children with fever (Reye's syndrome).\n- Opioids: the respiratory rate is the alarm — falling rate or deepening sedation means hold the next dose and call; naloxone reverses it.\n- WHO ladder logic: match strength to severity, by mouth when possible, by the clock for persistent pain, and combine families.\n- Fever: cool, hydrate, antipyretic — and hunt the cause; in Ghana, test for malaria early. Reassess every treatment you give.",
      },
    ],
    questions: [
      {
        topic: "Pain and Fever Medicines",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient with severe dehydration from vomiting is prescribed diclofenac for body pains. What is your main concern to raise with the prescriber before giving it?",
        options: [
          "Diclofenac is too weak for body pains",
          "Diclofenac causes dependence after three days",
          "Diclofenac cannot be given with oral rehydration fluids",
          "NSAIDs can injure the kidneys — especially in a dehydrated patient",
        ],
        correctIndex: 3,
        explanation:
          "NSAIDs reduce blood flow to the kidneys; in a volume-depleted patient this can precipitate acute kidney injury. Flag the dehydration, suggest review of the analgesic choice, and prioritise rehydration — paracetamol is usually the safer option here.",
        courseSlug: "pharmacology-3",
      },
      {
        topic: "Pain and Fever Medicines",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Two hours after a morphine injection, a patient's respiratory rate has fallen from 16 to 8 per minute and she is difficult to rouse. What is the immediate priority?",
        options: [
          "Give the next scheduled dose early to keep her comfortable",
          "Document the finding and recheck in one hour",
          "Hold the next dose, stimulate her, call for urgent help, and prepare naloxone per protocol",
          "Turn her onto her side and leave her to sleep",
        ],
        correctIndex: 2,
        explanation:
          "A falling respiratory rate with deepening sedation after an opioid is respiratory depression — an emergency. Stop further doses, keep her rousable with stimulation, summon urgent help, and have naloxone ready per protocol; documentation follows the rescue.",
        courseSlug: "pharmacology-3",
      },
      {
        topic: "Pain and Fever Medicines",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A mother asks for aspirin to bring down her 6-year-old's fever. What is the correct teaching?",
        options: [
          "Aspirin is the strongest fever medicine, so half a tablet is fine",
          "Crush the adult tablet and mix it in porridge",
          "Alternate aspirin with paracetamol every two hours",
          "Aspirin is not given to children with fever because of the risk of Reye's syndrome — use paracetamol dosed for the child's weight",
        ],
        correctIndex: 3,
        explanation:
          "Aspirin in children with fever or viral illness is linked to Reye's syndrome — brain and liver damage. Paracetamol, dosed by weight, is the child's antipyretic; the fever's cause also needs hunting, including a malaria test.",
        courseSlug: "pharmacology-3",
      },
      {
        topic: "Pain and Fever Medicines",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient on regular paracetamol at home tells you she takes 'a few extra tablets whenever the pain is bad' on top of her prescribed doses. What must she understand?",
        options: [
          "Extra paracetamol is harmless because it is sold without prescription",
          "Extra paracetamol only risks stomach ulcers",
          "The danger only exists if she takes the whole packet at once",
          "Paracetamol has a daily ceiling — exceeding it, even slowly over the day, can destroy the liver",
        ],
        correctIndex: 3,
        explanation:
          "Paracetamol overdose can be staggered — several small overdoses across the day accumulate and injure the liver just as surely as one large overdose, often presenting late. Teach the daily ceiling (4 grams in adults), the exact dosing schedule, and to report early nausea, right-upper pain or unusual tiredness.",
        courseSlug: "pharmacology-3",
      },
    ],
    flashcards: [
      {
        topic: "Pain and Fever Medicines",
        front: "What is the adult daily ceiling for paracetamol, and why does it matter?",
        back: "4 grams in 24 hours — beyond it the liver is injured, and staggered small overdoses are just as dangerous as one large one.",
      },
      {
        topic: "Pain and Fever Medicines",
        front: "Why is aspirin never given to children with fever?",
        back: "Reye's syndrome — rare but devastating brain and liver damage linked to aspirin in children with viral illness; paracetamol by weight is the child's antipyretic.",
      },
      {
        topic: "Pain and Fever Medicines",
        front: "What alarm sign demands action after an opioid dose, and what reverses it?",
        back: "A falling respiratory rate with deepening sedation (respiratory depression) — hold the dose, stimulate, call for help; naloxone reverses it per protocol.",
      },
      {
        topic: "Pain and Fever Medicines",
        front: "State the WHO analgesic ladder logic in one line.",
        back: "By mouth when possible, by the clock for persistent pain, by the ladder matching strength to severity — with combined families so each dose works harder, and a bowel plan beside every regular opioid.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Guidelines on the Pharmacological Treatment of Persisting Pain in Children",
        year: "2012",
        note: "Pain ladder principles and paediatric analgesia — verify current guidance.",
      },
      {
        organization: "Ministry of Health, Ghana",
        title: "Standard Treatment Guidelines",
        note: "Ghana national treatment guidance — verify current edition at your facility.",
      },
      {
        organization: "Elsevier",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "pharmacology-3",
    moduleTitle: "Everyday Medicines on the Ward",
    lessonTitle: "Cardiovascular & Respiratory Medicines",
    description:
      "Blood pressure, rhythm, clotting and breath — the everyday cardiorespiratory medicines and the pre-dose checks that keep every one of them safe.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe the common antihypertensives, diuretics, anticoagulants, digoxin and bronchodilators, and what each demands from the nurse.",
      "Apply the pre-dose checks: pulse before digoxin and beta blockers, blood pressure before antihypertensives, bleeding watch for anticoagulants.",
      "Teach inhaler technique and escalate when a reliever inhaler is being overused.",
    ],
    tags: ["antihypertensives", "diuretics", "digoxin", "anticoagulants", "inhalers"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Hypertension, heart failure, asthma and chronic lung disease fill the beds and clinics of every district in Ghana — which means cardiovascular and respiratory medicines fill your drug round. These are medicines with narrow margins: the dose that controls a rhythm is close to the dose that stops it.\n\nThe saving discipline is simple and it is yours: **check before you give, watch after you give.** This lesson walks the common medicines and the one or two observations each of them demands from you on every round.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Antihypertensives**: amlodipine works smoothly and commonly swells ankles; ACE inhibitors like lisinopril bring a dry cough and are **contraindicated in pregnancy**; beta blockers (atenolol, metoprolol) slow the heart — **count the pulse before every dose** and never let a patient stop them abruptly; methyldopa and hydralazine hold a special place in pregnancy care. **Diuretics**: hydrochlorothiazide and furosemide pull water out — monitor urine output, weight and **potassium** (weakness, cramps), give intravenous furosemide slowly (rapid injection can harm hearing), and check blood pressure sitting **and standing** in patients who report dizziness, because postural drops cause falls.\n\n**Digoxin** for heart failure and rhythm has the narrowest margin of all: before each dose, count the **apical pulse for a full minute** — a rate below 60 in an adult means hold the dose and report; toxicity announces itself as nausea, appetite loss, confusion, slowed pulse and **yellow-green vision**. **Anticoagulants**: heparin and enoxaparin come by injection (abdominal or thigh skin fold, no rubbing after); warfarin comes by mouth with **INR** monitoring — the dose is a conversation with the laboratory. Watch every anticoagulated patient for bleeding gums, blood in urine, black stools and new bruising, and remember that vitamin K-rich greens and a long list of other medicines shift warfarin's effect.",
      },
      {
        type: "text",
        title: "The breath medicines",
        body: "**Salbutamol** is the reliever that opens tight airways in minutes — by inhaler or nebuliser. It trembles the hands and quickens the heart (expected and usually harmless), but a reliever needed more and more often is not tolerance, it is a **worsening illness**: escalate the same day. Inhaler technique decides whether the medicine reaches the lungs at all: shake, breathe out fully, seal the lips, press and breathe in slowly and deeply, hold for about ten seconds, wait before the second puff — and use a **spacer** for young children. **Aminophylline** infusions have a narrow margin (arrhythmia, seizures); infuse exactly as prescribed and observe. **Prednisolone** is taken with food, in the morning, and **never stopped abruptly** after longer courses. And oxygen is a medicine too: a prescribed flow rate, never self-adjusted, with fire safety beside every cylinder.",
      },
      {
        type: "table",
        title: "The pre-dose checks and the watch",
        body: "| Medicine | Check BEFORE the dose | Watch AFTER |\n|---|---|---|\n| Beta blockers (atenolol, metoprolol) | Pulse — hold and report if unusually slow | Dizziness, fatigue, wheeze |\n| Digoxin | Apical pulse for one full minute — hold and report below 60 in adults | Nausea, appetite loss, confusion, yellow-green vision, slowed pulse |\n| Antihypertensives | Blood pressure; in dizzy patients, sitting AND standing | Postural dizziness, falls, ankle swelling (amlodipine), dry cough (lisinopril) |\n| Diuretics (furosemide, thiazides) | Recent urine output, weight trend | Weakness and cramps (potassium), dehydration, hearing change after rapid IV furosemide |\n| Warfarin / heparin | Today's INR where due; last dose timing | Bleeding gums, bruising, black stools, blood in urine; injection-site technique |\n| Salbutamol inhaler | How often used this week | Tremor and fast pulse (expected), frequency climbing (escalate) |",
      },
      {
        type: "clinical_pearl",
        body: "The five Ps of cardiorespiratory safety: Pulse, Pressure, Potassium, Platelets-and-bleeding, Peak symptoms — check the P that belongs to the medicine, before every dose.",
      },
      {
        type: "case",
        title: "In the chronic care clinic",
        body: "A 66-year-old man on amlodipine and furosemide for hypertension and mild heart failure comes for review. He mentions feeling faint when he stands in church, and his legs 'feel weak like rubber' this week. His blood pressure sitting is 138/82.\n\nWhat do you check before he leaves, and what do you suspect?\n\nAnswer: Measure his blood pressure **standing as well as sitting** — a drop on standing confirms postural hypotension from his antihypertensives and diuretic, a common cause of falls. His rubbery legs suggest **potassium loss** from the diuretic — report it for a laboratory check. Weigh him and review his urine output and fluid intake; in harmattan, quiet dehydration makes both problems worse. Then teach: rise slowly in three stages (sit, stand, pause), keep fluids up, and report dizziness or weakness rather than enduring them. None of this changes his prescription — that is the prescriber's conversation — but every bit of it is nursing, and it is what keeps him out of a fall.",
      },
      {
        type: "memory_trick",
        body: "Digoxin: below sixty, be thrifty — hold the dose and report. And for every cardiorespiratory medicine: check before, watch after.",
      },
      {
        type: "summary",
        body: "- Beta blockers and digoxin: count the pulse first; digoxin apical for a full minute, hold below 60 in adults and report toxicity signs (nausea, confusion, yellow-green vision).\n- Antihypertensives: check pressure; in dizzy patients check sitting AND standing; lisinopril contraindicated in pregnancy; amlodipine swells ankles.\n- Diuretics: urine output, weight, potassium (weakness, cramps); intravenous furosemide goes in slowly.\n- Anticoagulants: injection technique, INR for warfarin, and a standing bleeding watch — gums, urine, black stools, bruising.\n- Salbutamol: teach inhaler technique with a spacer for children; escalating reliever use is a worsening illness — escalate the same day. Steroids are never stopped abruptly; oxygen is a prescribed medicine.",
      },
    ],
    questions: [
      {
        topic: "Cardiovascular Medicines",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Before giving a scheduled digoxin dose, what must the nurse do?",
        options: [
          "Check the temperature",
          "Ask the patient to walk to the door and back",
          "Measure the blood pressure only",
          "Count the apical pulse for a full minute and hold the dose if it is below 60 in an adult",
        ],
        correctIndex: 3,
        explanation:
          "Digoxin slows the heart, and its margin is narrow: the apical pulse is counted for one full minute before each dose; below 60 in an adult, the dose is held and reported, alongside watching for toxicity signs.",
        courseSlug: "pharmacology-3",
      },
      {
        topic: "Cardiovascular Medicines",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient on amlodipine and furosemide reports feeling faint on standing, and this week his legs feel weak. What is the correct nursing response?",
        options: [
          "Measure blood pressure sitting AND standing, review urine output and weight, and report the weakness for a potassium check",
          "Reassure him that this is normal ageing",
          "Advise him to double his water intake and review next month",
          "Tell him to skip the furosemide until he feels stronger",
        ],
        correctIndex: 0,
        explanation:
          "Postural blood pressure measurement exposes the fall risk from antihypertensives and diuretics, while new weakness and rubbery legs suggest potassium loss — report it for a laboratory check, review fluids and weight, and teach rise-slowly technique. Never advise stopping or skipping prescribed medicines yourself.",
        courseSlug: "pharmacology-3",
      },
      {
        topic: "Respiratory Medicines",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient with asthma tells you she has been using her salbutamol inhaler four times daily for the past week instead of rarely. What does this pattern mean?",
        options: [
          "Her body has adapted and the inhaler is now less effective",
          "This is normal for asthma — no change is needed",
          "Her asthma control is worsening and she needs same-day review of her treatment",
          "She should switch to a second inhaler puff whenever she likes",
        ],
        correctIndex: 2,
        explanation:
          "Escalating reliever use is a recognised warning sign of worsening asthma — the reliever is treating symptoms while the underlying control slips. The correct move is same-day review of her treatment plan, not tolerance of the pattern.",
        courseSlug: "pharmacology-3",
      },
      {
        topic: "Respiratory Medicines",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which technique point is correct when teaching an inhaler to a patient?",
        options: [
          "Breathe out fully, seal lips around the mouthpiece, press and breathe in slowly and deeply, then hold the breath about ten seconds",
          "Take quick shallow breaths immediately after pressing",
          "Use two puffs back-to-back with no pause",
          "Inhalers work the same whether or not the patient breathes out first",
        ],
        correctIndex: 0,
        explanation:
          "Full exhalation, a slow deep inhalation coordinated with the press, and a ten-second hold deposit the medicine in the airways instead of the mouth. Puffs are spaced, and young children use a spacer.",
        courseSlug: "pharmacology-3",
      },
    ],
    flashcards: [
      {
        topic: "Cardiovascular Medicines",
        front: "What pre-dose check belongs to digoxin, and what is the threshold?",
        back: "Apical pulse counted for one full minute; below 60 beats per minute in an adult, hold the dose and report.",
      },
      {
        topic: "Cardiovascular Medicines",
        front: "List three digoxin toxicity signs.",
        back: "Nausea and appetite loss, confusion, slowed pulse, and yellow-green vision — any of them means hold and report.",
      },
      {
        topic: "Cardiovascular Medicines",
        front: "Why check blood pressure sitting AND standing in a dizzy patient on antihypertensives?",
        back: "A drop on standing (postural hypotension) reveals fall risk from the medicines — it changes the teaching (rise slowly) and the prescriber conversation, and it is invisible on a sitting reading alone.",
      },
      {
        topic: "Anticoagulants",
        front: "What is the daily bleeding watch for a patient on anticoagulants?",
        back: "Gums when brushing, blood in urine, black tarry stools, and new unexplained bruising — plus injection technique (skin fold, no rubbing) and INR results for warfarin.",
      },
      {
        topic: "Respiratory Medicines",
        front: "What does climbing salbutamol reliever use signal, and what is the move?",
        back: "Worsening underlying control, not tolerance — arrange same-day review of the treatment plan and re-teach technique.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Package of Essential Noncommunicable Disease Interventions (PEN)",
        year: "2020",
        note: "Protocols for hypertension and chronic respiratory care — verify current version.",
      },
      {
        organization: "Ministry of Health, Ghana",
        title: "Standard Treatment Guidelines",
        note: "Ghana national treatment guidance — verify current edition at your facility.",
      },
      {
        organization: "Elsevier",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "pharmacology-3",
    moduleTitle: "Special Patients, Careful Rules",
    lessonTitle: "Medicines for Children",
    description:
      "Small bodies, big responsibility — weight-based dosing, age-restricted medicines, safe measuring at home, and the teaching that turns caregivers into partners.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Explain why children are not small adults and how paediatric dosing differs from adult practice.",
      "Identify the medicines that are restricted or dangerous in children, and the reason for each restriction.",
      "Apply double-checking of paediatric dose calculations and caregiver teaching for safe home administration.",
    ],
    tags: ["paediatric dosing", "weight-based dosing", "children", "caregiver teaching", "medication safety"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A child is not a small adult. The liver that metabolises medicines is still maturing, the kidneys filter differently, body water and fat shift with every month of growth — and a dose that is gentle in a grown man can be dangerous in a baby. Every paediatric dose is a calculation, and every calculation is a place where harm can hide.\n\nThis lesson is about the discipline that keeps children safe: dosing by weight, checking twice, respecting the age restrictions, and teaching the person at home who will hold the syringe at midnight.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Paediatric doses are calculated **per kilogram of body weight** — the child is weighed at every visit, the weight is written, and the dose is computed from it. Weigh without shoes and heavy clothes, in kilograms, and record it; a weight guessed in 'years of age' is a dose guessed twice. After calculating, the rule is **double**: recalculate the dose yourself, and for high-alert medicines have a **second nurse check the calculation independently** — from the order, through the arithmetic, to the drawn dose. The decimal point is where children die: 0.5 and 5.0 differ by tenfold, so doses are always written with a **leading zero (0.5) and never a trailing one (never 5.0 mg)**.\n\nAt home, the measuring tool decides the dose too: syrups are measured with an **oral syringe or the measuring cup that came with the medicine — never a household serving spoon**, whose '5 mL' is whatever the kitchen decides. Taste matters: a bitter syrup is spat out, so mixing with a small amount of porridge or breastmilk is acceptable if the whole portion is taken. And storage is a safety issue of its own: paracetamol syrup is sweet and coloured, children climb, and **childhood poisoning at home is almost always an unlocked cupboard.**",
      },
      {
        type: "table",
        title: "The age-restricted list",
        body: "| Medicine | The restriction | The reason |\n|---|---|---|\n| Aspirin | Not for children with fever or viral illness | Reye's syndrome — brain and liver damage |\n| Tetracyclines | Avoided in young children | Permanent staining of developing teeth, slowed bone growth |\n| Chloramphenicol | Avoided in newborns | Grey baby syndrome — the newborn liver cannot clear it; collapse and cardiovascular failure |\n| Codeine | Not for children under 12 | Some children convert it rapidly to morphine — breathing depression |\n| Fluoroquinolones | Generally avoided in children | Concerns for growing joints and tendons — reserved for specific cases |\n| Fluorinated steroids / adult-strength creams | Use paediatric strengths | Thinner skin absorbs more — systemic effects |",
      },
      {
        type: "callout",
        title: "The calculation discipline",
        body: "Weigh the child in kilograms and write it down. Calculate the dose from the order. Recalculate it yourself. For high-alert medicines, have a second nurse check independently — from the order, through the arithmetic, to the drawn dose. Then ask the sanity question: does this volume look right for THIS child? A dose that surprises you is a dose to re-check.",
      },
      {
        type: "clinical_pearl",
        body: "The decimal point is where tenfold errors live: always write 0.5 mg, never .5; never write 5.0 mg, always 5 mg.",
      },
      {
        type: "case",
        title: "In the weighing room",
        body: "An 8-month-old baby with fever is weighed at 7.4 kg and prescribed paracetamol syrup by weight, to be given at home every six hours as needed. The mother mentions she usually 'just pours to the line of the serving spoon' and gives 'a bit extra when the fever is high'.\n\nWhat must she leave the clinic understanding?\n\nAnswer: Exactly which measuring device to use — the oral syringe or cup supplied — and which mark corresponds to her baby's dose; that the dose is fixed by weight and 'a bit extra' is how livers get injured, especially with repeated doses; that spacing (every six hours, with a maximum per day) is part of the prescription; when to return — poor feeding, fast breathing, convulsions, or fever persisting beyond the expected course; and where the bottle lives at home: high, locked, out of a climbing toddler's reach. Demonstrate the measurement, then have her do it while you watch — teach-back works for medicines too.",
      },
      {
        type: "memory_trick",
        body: "The no-go list for children — Aspirin, Tetracyclines, Codeine, Chloramphenicol in newborns: All These Can be Catastrophic.",
      },
      {
        type: "summary",
        body: "- Children are dosed per kilogram: weigh in kilograms at every visit, record it, calculate, then recalculate; high-alert doses get an independent second check.\n- Decimal discipline: leading zero always (0.5), trailing zero never (write 5 mg, not 5.0).\n- No aspirin in feverish children (Reye's), no tetracyclines in young children (teeth), no chloramphenicol in newborns (grey baby syndrome), no codeine under 12 (breathing).\n- Syrups are measured with the supplied oral syringe or cup — never a household serving spoon; mixtures must be fully taken if mixed with food.\n- Sweet syrups in unlocked cupboards are the classic childhood poisoning — teach storage, and teach the caregiver with teach-back before discharge.",
      },
    ],
    questions: [
      {
        topic: "Medicines for Children",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why are paediatric medicine doses calculated per kilogram of body weight rather than as a fixed amount?",
        options: [
          "Because kilograms are easier to measure than age",
          "Because children's sizes vary enormously for the same age, and their organs handle medicines differently from adults",
          "Because fixed doses are only legal in adults",
          "Because children refuse fixed doses",
        ],
        correctIndex: 1,
        explanation:
          "Two children of the same age can differ hugely in size, and maturing livers and kidneys process medicines differently — weight-based dosing matches the dose to the actual body handling it, which is why the weight is measured and recorded at every visit.",
        courseSlug: "pharmacology-3",
      },
      {
        topic: "Medicines for Children",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A grandmother asks whether she can give her 5-year-old grandson half an aspirin for fever, 'the way it was done in our time'. What is the danger you must explain?",
        options: [
          "Aspirin is too weak for children's fever",
          "Aspirin in children with fever or viral illness is linked to Reye's syndrome, a devastating brain and liver injury",
          "Half tablets are always unsafe because they crumble",
          "Aspirin causes tooth staining in children",
        ],
        correctIndex: 1,
        explanation:
          "Aspirin in feverish children is linked to Reye's syndrome — vomiting, confusion, liver damage and brain swelling. Paracetamol dosed by weight is the child's antipyretic; tooth staining belongs to tetracyclines.",
        courseSlug: "pharmacology-3",
      },
      {
        topic: "Medicines for Children",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother has been giving her baby's syrup with a household serving spoon. What is the core teaching point?",
        options: [
          "Household spoons vary widely in volume — the dose must be measured with the supplied oral syringe or cup",
          "Serving spoons are fine if she fills them to the brim",
          "The spoon matters only for antibiotics, not paracetamol",
          "She should switch to a dessert spoon for accuracy",
        ],
        correctIndex: 0,
        explanation:
          "Household spoons hold wildly different volumes, so each spoonful is a different dose — under-dosing that fails to treat, or overdosing that injures. The supplied oral syringe or measuring cup, read at eye level, is the only accurate home tool.",
        courseSlug: "pharmacology-3",
      },
      {
        topic: "Medicines for Children",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which medicine is specifically dangerous in NEWBORNS because of their immature liver?",
        options: [
          "Amoxicillin",
          "Paracetamol",
          "Chloramphenicol",
          "Oral rehydration salts",
        ],
        correctIndex: 2,
        explanation:
          "The newborn liver cannot conjugate chloramphenicol, so the drug accumulates and causes grey baby syndrome — collapse, a grey colour, cardiovascular failure. The restriction is age-specific and absolute in neonates.",
        courseSlug: "pharmacology-3",
      },
    ],
    flashcards: [
      {
        topic: "Medicines for Children",
        front: "Why is the child's weight, in kilograms, written at every visit before dosing?",
        back: "Paediatric doses are calculated per kilogram — the weight is the denominator of every dose, and a guessed weight is a guessed dose.",
      },
      {
        topic: "Medicines for Children",
        front: "State the decimal-point rules for writing doses.",
        back: "Always a leading zero (0.5 mg, never .5); never a trailing zero (5 mg, never 5.0) — misplaced decimals create tenfold errors.",
      },
      {
        topic: "Medicines for Children",
        front: "Name the four medicines on the children's no-go list and their reasons.",
        back: "Aspirin (Reye's syndrome in feverish children), tetracyclines (stain developing teeth), codeine under 12 (rapid converters get morphine-level breathing depression), chloramphenicol in newborns (grey baby syndrome).",
      },
      {
        topic: "Medicines for Children",
        front: "What home-measuring and storage teaching belongs with every paediatric syrup?",
        back: "Measure with the supplied oral syringe or cup, never a household spoon; teach the dose and spacing with teach-back; store the bottle high and locked — sweet syrups are the classic childhood poisoning.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Model List of Essential Medicines for Children",
        year: "2023",
        note: "Paediatric formulations and age guidance — verify current version.",
      },
      {
        organization: "Ministry of Health, Ghana",
        title: "Standard Treatment Guidelines",
        note: "Ghana national treatment guidance — verify current edition at your facility.",
      },
      {
        organization: "Elsevier",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "pharmacology-3",
    moduleTitle: "Special Patients, Careful Rules",
    lessonTitle: "Medicines in Older Adults",
    description:
      "Many medicines, slower kidneys, thinner margins — the pharmacology of ageing, the falls and confusion that medicines cause, and the review visit that keeps grandma safe.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe the pharmacokinetic changes of ageing that alter how medicines behave in older adults.",
      "Recognise medicines and combinations that raise fall, confusion and bleeding risk in older patients.",
      "Apply adherence support and the medicine-review habit, including raising deprescribing conversations with the prescriber.",
    ],
    tags: ["older adults", "polypharmacy", "falls risk", "pharmacokinetics", "medicine review"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The grandmother on eight medicines is one of the most complex patients you will ever care for — and one of the most likely to be harmed by her treatment. Her kidneys filter more slowly, her liver is smaller, her body water is down and her fat is up, so the same tablet that a young nurse clears overnight can linger in her for days.\n\nThis lesson is about the pharmacology of ageing, the traps of polypharmacy, and the quiet nursing superpower that protects her: the medicine review, every visit, every time.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**What ageing changes.** Kidney clearance falls with age — even a 'normal' creatinine can hide a big drop, and in harmattan, quiet dehydration accelerates it. Liver mass and blood flow shrink. Body water falls while body fat rises, so fat-soluble sedatives linger longer — the 'hangover' that fells a woman in her kitchen at dawn. Albumin drops, leaving more free drug in the blood — a 'usual' warfarin dose behaves like a bigger one.\n\n**What the medicine list changes.** Polypharmacy — conventionally five or more medicines — multiplies interactions and feeds the **prescribing cascade**: a side effect is diagnosed as a new disease and treated with a new medicine, whose side effect joins the list. The classic traps for falls: sedatives and sleeping tablets, blood pressure medicines (postural drop — check sitting AND standing), and anticholinergic medicines with their dry mouth, blurred vision, confusion and urinary retention. Anticoagulants plus NSAIDs is a bleeding combination; antidiabetic medicines plus missed meals is hypoglycaemia — the sweating, confusion or 'strange behaviour' that families often blame on witchcraft before anyone checks a glucose.",
      },
      {
        type: "text",
        title: "What you do about it",
        body: "**Gather the whole truth.** Ask her to bring every medicine she takes — tablets in envelopes, containers from the chemical seller, herbal tonics — the 'brown-bag review' reveals the real list, which is nearly always longer than the folder's. **Make the list work for her**: one page, large writing, each medicine with its ONE purpose in her own words and its timing anchored to a daily habit — 'the white one with breakfast, the small one with the evening meal'. Pill organisers with labelled compartments and a family member who understands the plan are the difference between treatment and ritual.\n\n**Watch the trend**: weight, hydration, renal function results, and any new symptom. And raise what you find: a new confusion, a fall, a urinary change is a medication-review question **first** — before it becomes another prescription. With the prescriber, ask the deprescribing questions: which medicines can be reduced, spaced or retired? Simplifying is not giving up on her — it is giving her back her margin.",
      },
      {
        type: "table",
        title: "The classic traps and your counter-move",
        body: "| Risk | Common culprits | Your counter-move |\n|---|---|---|\n| Falls | Sedatives, sleeping tablets, antihypertensives | Check sitting AND standing blood pressure; teach rise-in-three-stages; report dizziness |\n| Confusion | Sedatives, anticholinergics, hypoglycaemia | Any new confusion — review the medicine list and check glucose before blaming age |\n| Bleeding | Anticoagulant + NSAID combinations, pain tablets bought at the market | Ask what she buys herself; watch gums, stools, bruises |\n| Accumulation (dose hangover) | Fat-soluble sedatives, kidney-cleared medicines in dehydration | Encourage fluids, monitor renal results, report morning drowsiness |\n| Hypoglycaemia | Antidiabetics + missed or late meals | Teach meal-medicine timing; families learn the sweating-confusion warning and what to do |",
      },
      {
        type: "clinical_pearl",
        body: "In an older adult, any new symptom is a medicine side effect until proven otherwise. New confusion, new falls, new incontinence — read the drug chart first, then investigate the body.",
      },
      {
        type: "case",
        title: "At the chronic care clinic",
        body: "A 78-year-old woman on eight medicines arrives with her daughter: two days of dizziness and confusion. The daughter reports that she 'could not sleep last week so she took two of her sleeping tablets instead of one', and that she has started a new herbal 'joint tonic' from the chemical seller for knee pains.\n\nWhat are your moves at this visit?\n\nAnswer: Assess first — hydration, glucose (confusion in a diabetic elderly woman is hypoglycaemia until excluded), blood pressure sitting and standing, temperature and urine (confusion in older adults is also infection until excluded). Gather the full list: all eight prescribed medicines, the doubled sleeping tablet, and the new herbal tonic — the tonic is now on the interaction list whether or not anyone likes it. Hold the extra sedative and report for review rather than adjusting yourself, flag the tonic for the prescriber's assessment, hydrate her, and treat any infection found. Then rebuild the safety net: one-page list, pill organiser, the one-tablet rule with teach-back to the daughter, and a follow-up appointment with a stated date. Confusion in an older adult is a crossword with medicine names in half the boxes.",
      },
      {
        type: "memory_trick",
        body: "Older, slower, smaller, thinner: kidneys slower, body water smaller, margins thinner. New symptom? Blame the bottle before the body.",
      },
      {
        type: "summary",
        body: "- Ageing pharmacokinetics: kidney clearance falls (watch renal results and hydration), liver mass shrinks, fat-soluble medicines linger, albumin drop frees more drug.\n- Polypharmacy (five or more) multiplies interactions and feeds the prescribing cascade — side effects diagnosed as new diseases.\n- Falls: sedatives and postural drops — check sitting and standing blood pressure; confusion: check the chart and glucose before blaming age.\n- Anticoagulant + NSAID is bleeding; antidiabetic + missed meal is hypoglycaemia.\n- The brown-bag review, a one-page list with purposes, pill organisers and family teach-back, plus deprescribing conversations with the prescriber, keep the older patient's margin wide.",
      },
    ],
    questions: [
      {
        topic: "Medicines in Older Adults",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A 79-year-old woman on several medicines becomes confused over two days, with no fever. After checking her glucose, what is your next priority in the assessment?",
        options: [
          "Reassure the family that confusion is normal at her age",
          "Review every medicine she is taking — including what she buys herself — for sedatives, anticholinergics and interactions",
          "Arrange a traditional ceremony to settle the confusion",
          "Increase her fluid intake and review in one month",
        ],
        correctIndex: 1,
        explanation:
          "New confusion in an older adult is hypoglycaemia, medicine effect or infection until excluded — and medicines are the most common culprit. The brown-bag review (including self-bought and herbal medicines) plus infection screening come before any talk of 'normal ageing', which is never a diagnosis.",
        courseSlug: "pharmacology-3",
      },
      {
        topic: "Medicines in Older Adults",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why is blood pressure checked both sitting AND standing in an older patient on antihypertensives?",
        options: [
          "Because sitting readings are always wrong in older adults",
          "Because a postural drop on standing reveals fall risk that a sitting reading alone will miss",
          "Because standing readings are needed for the file only",
          "Because two readings double the workload of the clinic",
        ],
        correctIndex: 1,
        explanation:
          "Antihypertensives and diuretics can drop the pressure further on standing — the fall that happens between the chair and the kitchen door. Postural measurement exposes it, changes the teaching (rise in three stages), and informs the prescriber's review.",
        courseSlug: "pharmacology-3",
      },
      {
        topic: "Medicines in Older Adults",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is a 'prescribing cascade' in an older adult?",
        options: [
          "A side effect of one medicine being diagnosed as a new disease and treated with another medicine",
          "Writing prescriptions quickly to clear the queue",
          "Prescribing only from one family of medicines",
          "The order in which medicines appear on the chart",
        ],
        correctIndex: 0,
        explanation:
          "The cascade begins when a medicine's adverse effect — say ankle swelling or confusion — is read as a new illness and prescribed for. Each new medicine adds its own effects; the antidote is the medicine review and the deprescribing question: which of these can be reduced or retired?",
        courseSlug: "pharmacology-3",
      },
      {
        topic: "Medicines in Older Adults",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "An older patient on warfarin tells you he buys ibuprofen from the chemical seller for his knee. What is the core risk to explain and act on?",
        options: [
          "Ibuprofen will make the warfarin stop working",
          "The combination raises bleeding risk — stomach and other bleeds",
          "Ibuprofen is illegal for older adults",
          "The two medicines cancel each other out harmlessly",
        ],
        correctIndex: 1,
        explanation:
          "NSAIDs irritate the stomach and add an antiplatelet effect on top of anticoagulation — a classic bleeding combination. Report it for a safer pain plan (often paracetamol-based), teach the bleeding watch, and involve the prescriber before the next dose.",
        courseSlug: "pharmacology-3",
      },
    ],
    flashcards: [
      {
        topic: "Medicines in Older Adults",
        front: "What four body changes of ageing alter medicine behaviour?",
        back: "Kidney clearance falls, liver mass and blood flow shrink, body water falls while fat rises (fat-soluble drugs linger), and albumin drops — freeing more active drug.",
      },
      {
        topic: "Medicines in Older Adults",
        front: "Define polypharmacy and the prescribing cascade.",
        back: "Polypharmacy: five or more regular medicines. The cascade: a side effect is diagnosed as a new disease and treated with a new medicine, adding its own side effects to the list.",
      },
      {
        topic: "Medicines in Older Adults",
        front: "What is the brown-bag review?",
        back: "Asking the patient to bring ALL medicines — prescribed tablets, containers from the chemical seller, herbal tonics — so the real list, always longer than the folder's, can be seen, named and reconciled.",
      },
      {
        topic: "Medicines in Older Adults",
        front: "New confusion in an older adult: what three causes are excluded FIRST?",
        back: "Hypoglycaemia (check glucose), medicine effects (review the whole list including self-bought), and infection (temperature and urine) — long before blaming age itself.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Integrated Care for Older People (ICOPE): Guidance for Person-Centred Assessment and Pathways",
        year: "2017",
        note: "WHO guidance on integrated care of older adults — verify current version.",
      },
      {
        organization: "Ministry of Health, Ghana",
        title: "Standard Treatment Guidelines",
        note: "Ghana national treatment guidance — verify current edition at your facility.",
      },
      {
        organization: "Elsevier",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "pharmacology-3",
    moduleTitle: "Special Patients, Careful Rules",
    lessonTitle: "Medicines in Pregnancy & Breastfeeding",
    description:
      "Two patients, one dose — how medicines reach the baby in the womb and at the breast, the reasoning that keeps both safe, and the counselling that keeps mothers treated.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Explain the risk-versus-benefit logic of medicines in pregnancy and the trimester windows of risk.",
      "Describe the drug properties that determine placental transfer and exposure through breast milk.",
      "Apply counselling to pregnant and breastfeeding women, including when to check a reliable source before advising.",
    ],
    tags: ["pregnancy", "breastfeeding", "teratogens", "placental transfer", "counselling"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "When a pregnant woman swallows a tablet, two patients receive it. For nine months everything the mother takes travels toward her baby through a membrane thinner than a page; at birth the placenta is cut, and the newborn must clear alone whatever the last doses left behind. When she breastfeeds, a new route opens — small, but not zero.\n\nThe nurse's job in all of this is rarely to choose the medicine: it is to spot the pregnancy, ask the question, counsel the fear, and check the source before anyone tells a mother to stop treating herself — because far more often than students expect, the untreated disease is the greater danger to both patients.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Timing shapes the harm in pregnancy.** In the first two weeks after conception, damage tends to be all-or-none. **Weeks 3 to 8 are organogenesis** — the most teratogenic window. From week 9 to term, medicines threaten growth and function (the brain keeps developing; fetal kidney injury from ACE inhibitors proves it). Near birth, medicines act on the newborn directly: opioids depress breathing, SSRIs make babies jittery, magnesium makes them floppy.\n\n**The placenta is a sieve, not a wall.** Small, fat-soluble, unionised, loosely bound medicines cross almost freely — alcohol and most small drugs. Large molecules like **heparin and insulin stay behind**, which is why heparin is the anticoagulant of pregnancy. **The classic offenders** to know by name: warfarin (nasal and bone abnormalities), valproate (neural tube defects), isotretinoin (multiple severe anomalies), tetracyclines (discoloured teeth, slowed bone growth) and later-trimester ACE inhibitors (fetal kidney injury). The rules of thumb: lowest effective dose, shortest necessary time, well-studied medicines over new ones, and a review at booking of **everything** she takes, herbal preparations included. Never let fear stop an essential medicine abruptly — an uncontrolled seizure or hypertensive crisis endangers both patients at once.",
      },
      {
        type: "text",
        title: "Breastfeeding: traces, not torrents",
        body: "Most medicines reach breast milk in **tiny amounts** — a fraction of the maternal dose — and most common ones are compatible: **paracetamol and ibuprofen barely register**; amoxicillin, and the antibiotics of mastitis treatment, are compatible with feeding (and in mastitis, keeping the baby at the breast is part of the cure, because feeding drains the blocked milk). The cautions worth memorising: **codeine** — in some mothers it converts rapidly to morphine, and the baby becomes drowsy and feeds poorly, so watch the baby, not just the mother; **combined oestrogen-containing contraceptive pills** are avoided in the early weeks while milk is establishing — progestogen-only pills, implants and IUDs are the feeding-friendly choices; and **chloramphenicol** is not for newborns themselves (grey baby syndrome).\n\nThe counselling rule that protects the most: **check before you stop.** An abrupt switch to formula harms more babies than most medicines ever do — so before a mother stops feeding or stops treatment, check a reliable source such as LactMed or the national guideline, and involve the prescriber. And the three questions before any prescription near a baby: how much crosses, who will metabolise it, and when was the last dose relative to birth or the feed?",
      },
      {
        type: "table",
        title: "The quick reference",
        body: "| Situation | The safe backbone | The caution or avoidance |\n|---|---|---|\n| Pain or fever in pregnancy | Paracetamol per guideline | NSAIDs avoided late; opioids only per prescription |\n| Infection in pregnancy | Penicillins; nationally recommended antimalarials for the stage | Tetracyclines; always involve the prescriber |\n| Clot prevention in pregnancy | Heparin (too large to cross the placenta) | Warfarin — crosses and harms the fetus |\n| Seizure control in pregnancy | Continue prescribed antiepileptic with urgent review | Never stop abruptly — uncontrolled seizures endanger both |\n| Pain while breastfeeding | Paracetamol, ibuprofen | Codeine — watch the baby for drowsiness and poor feeding |\n| Contraception while feeding | Progestogen-only pill, implant, IUD | Combined oestrogen pills in the early milk-establishing weeks |",
      },
      {
        type: "clinical_pearl",
        body: "A pregnancy test is cheap and a question is free. Before giving any medicine to a woman of childbearing age, ask — could she be pregnant? One sentence prevents most fetal medicine disasters.",
      },
      {
        type: "case",
        title: "At the postnatal clinic",
        body: "A breastfeeding mother with a painful, red, tender right breast is prescribed amoxicillin and paracetamol. Her neighbour has told her that 'medicine passes into the milk and will spoil the baby', and she plans to stop breastfeeding and switch to formula while she takes the tablets.\n\nHow do you counsel her?\n\nAnswer: She can treat herself and keep feeding — that is the clinical truth. Amoxicillin and paracetamol enter milk in tiny, safe amounts, and in mastitis, continued feeding actually drains the blocked milk and speeds recovery: stopping feeds makes the condition worse. Teach positioning and complete emptying of the affected side, the full antibiotic course (mastitis relapses when courses are stopped early), pain control with paracetamol, warmth and support. Ask her to return if a fluctuant swelling, fever or worsening appears — an abscess needs review. And thank her for asking before deciding: the instinct to check is exactly what protects babies.",
      },
      {
        type: "memory_trick",
        body: "The sieve rule: Small, Fat and Free slips through the placenta — Big and sticky stays with the mother (heparin, insulin). At the breast: most medicines arrive by the trace — check before you stop.",
      },
      {
        type: "summary",
        body: "- Prescribing in pregnancy weighs medicine risk against untreated disease — often the disease is worse; treat the mother properly.\n- Weeks 0 to 2 all-or-none; weeks 3 to 8 organogenesis (most teratogenic); later, growth and function; near birth, direct newborn effects.\n- Placental transfer: small, fat-soluble, unionised, unbound cross easily — heparin and insulin are too large, making heparin the anticoagulant of pregnancy.\n- Classic offenders: warfarin, valproate, isotretinoin, tetracyclines, later-trimester ACE inhibitors.\n- Breastfeeding: paracetamol, ibuprofen and the mastitis antibiotics are compatible; watch codeine (drowsy, poorly feeding baby); avoid combined oestrogen pills early; check LactMed or the guideline before advising a mother to stop anything.",
      },
    ],
    questions: [
      {
        topic: "Medicines in Pregnancy",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why is heparin the anticoagulant of choice in pregnancy?",
        options: [
          "It is cheaper than the alternatives",
          "Its molecule is too large to cross the placenta, so the fetus is protected while the mother's blood is thinned",
          "It works faster than warfarin in the fetus",
          "It strengthens the placenta",
        ],
        correctIndex: 1,
        explanation:
          "Large, water-soluble molecules do not cross the placental sieve — heparin protects the mother from clots without reaching the fetus. Warfarin crosses freely and causes fetal nasal and bone abnormalities.",
        courseSlug: "pharmacology-3",
      },
      {
        topic: "Medicines in Pregnancy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman with long-standing hypertension is 30 weeks pregnant and has been taking lisinopril throughout. What fetal risk does this later-trimester exposure carry?",
        options: [
          "Neural tube defects",
          "Grey-brown tooth discolouration with slowed bone growth",
          "Nasal and bone abnormalities",
          "Fetal kidney injury with reduced amniotic fluid",
        ],
        correctIndex: 3,
        explanation:
          "ACE inhibitors such as lisinopril injure the fetal kidneys in later pregnancy, reducing urine output and amniotic fluid. Involve the prescriber the same day for a pregnancy-safe antihypertensive plan — but never advise her to stop abruptly on her own, because an uncontrolled hypertensive crisis endangers both patients at once. Neural tube defects belong to valproate, tooth and bone effects to tetracyclines, and nasal and bone abnormalities to warfarin.",
        courseSlug: "pharmacology-3",
      },
      {
        topic: "Medicines in Breastfeeding",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A breastfeeding mother on a codeine-containing cough syrup notices her two-week-old baby is unusually sleepy and feeding poorly. What is the concern?",
        options: [
          "The baby is reacting to the mother's illness, not the medicine",
          "Some mothers convert codeine rapidly to morphine, which concentrates in milk and sedates the baby",
          "Codeine turns the milk sour, so the baby refuses it",
          "The baby is protected by the milk and cannot be affected",
        ],
        correctIndex: 1,
        explanation:
          "In ultra-rapid metabolisers, codeine becomes morphine quickly and reaches the baby through milk — drowsiness and poor feeding are the warning signs. Stop the syrup, advise a safer alternative through the prescriber, and watch the baby until feeding normalises.",
        courseSlug: "pharmacology-3",
      },
      {
        topic: "Medicines in Breastfeeding",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother with mastitis is prescribed amoxicillin and told by a relative to stop breastfeeding while on treatment. What is the correct advice?",
        options: [
          "Stop breastfeeding completely and pump and discard until the course ends",
          "Stop both the antibiotics and breastfeeding until the breast heals",
          "Switch to formula for one month to protect the baby",
          "Continue breastfeeding — the antibiotics are compatible, and feeding drains the blocked milk and aids recovery",
        ],
        correctIndex: 3,
        explanation:
          "Amoxicillin enters milk in tiny, safe amounts, and continued feeding is part of mastitis treatment — it empties the blocked duct. Stopping feeds worsens engorgement and can lead to abscess; stopping the antibiotic relapses the infection.",
        courseSlug: "pharmacology-3",
      },
    ],
    flashcards: [
      {
        topic: "Medicines in Pregnancy",
        front: "Which drug properties cross the placenta most easily?",
        back: "Small, fat-soluble, unionised and loosely protein-bound — which is why heparin and insulin (large, water-soluble) stay on the mother's side.",
      },
      {
        topic: "Medicines in Pregnancy",
        front: "Name three classic teratogens and their signatures.",
        back: "Warfarin (nasal and bone abnormalities), valproate (neural tube defects), isotretinoin (multiple severe anomalies); tetracyclines stain teeth and slow bone growth; later-trimester ACE inhibitors injure fetal kidneys.",
      },
      {
        topic: "Medicines in Breastfeeding",
        front: "What are the breastfeeding-safe pain relief pair, and the one opioid caution?",
        back: "Paracetamol and ibuprofen — negligible in milk. Codeine: rapid metabolisers pass morphine-level amounts; watch for a drowsy baby feeding poorly.",
      },
      {
        topic: "Medicines in Breastfeeding",
        front: "What contraception is preferred while breastfeeding, and what is avoided early?",
        back: "Progestogen-only pills, implants and IUDs are feeding-friendly; combined oestrogen-containing pills are avoided in the early weeks while milk supply is establishing.",
      },
    ],
    sources: [
      {
        organization: "U.S. National Library of Medicine",
        title: "Drugs and Lactation Database (LactMed)",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK501922/",
        note: "Free, evidence-based reference for drugs in breast milk.",
      },
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Antenatal Care for a Positive Pregnancy Experience",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549912",
      },
      {
        organization: "Ministry of Health, Ghana",
        title: "Standard Treatment Guidelines",
        note: "Ghana national treatment guidance — verify current edition at your facility.",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "pharmacology-3",
    moduleTitle: "Stewardship & Vigilance",
    lessonTitle: "Adverse Drug Reactions & Reporting",
    description:
      "Every medicine meets the real world only after it reaches patients — and you are the sensor. Ghana's reporting system and the short form that turns suspicion into protection.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Distinguish side effects, adverse drug reactions and adverse events.",
      "Describe Ghana's pharmacovigilance pathway, from the ward to the global database.",
      "Apply the reporting habit to a suspected reaction — and the no-blame culture that makes it possible.",
    ],
    tags: ["pharmacovigilance", "adverse drug reactions", "reporting", "fda ghana", "patient safety"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A new medicine looks safe in its trials, then meets the real world in a district hospital — in an underweight patient, on an empty stomach, beside three other medicines and a herbal tonic. The surprises that follow are invisible unless someone writes them down. That writing-down system is **pharmacovigilance**, and at the bedside, the sensor is you.\n\nThis lesson shows you what to report, what a report contains, and where a report travels in Ghana — from your ward through the Food and Drugs Authority into a database shared by the whole world. It is the quiet work that makes every future patient safer.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "First, the vocabulary. A **side effect** is a known, usually mild consequence of the medicine's normal action — the metronidazole metallic taste, the amoxicillin loose stool. An **adverse drug reaction (ADR)** is a harmful, unintended response at **normal doses** — the ceftriaxone rash, the gentamicin hearing loss. An **adverse event** is any harm during treatment, whether or not the medicine caused it. You report suspected ADRs and adverse events, plus **poor-quality or falsified medicines**, **therapeutic failures** (the medicine simply did not work) and **medication errors**. Adverse events following immunisation flow through the same channels (EPI and IDSR).\n\nIn Ghana, the **National Pharmacovigilance Centre lives inside the Food and Drugs Authority (FDA Ghana)**, which is a member of WHO's Programme for International Drug Monitoring. Reports travel onward into **VigiBase**, the world's largest adverse reaction database, run by the Uppsala Monitoring Centre. A good report is short: the patient's initials, the **suspect medicine with its batch number**, what happened, when it started, the treatment given, the outcome, and your contact. Causality is judged centrally with the WHO-UMC criteria — **you need only a suspicion, never proof, to file.** And the culture is no-blame: the aim is to learn, not to punish.",
      },
      {
        type: "table",
        title: "What deserves a report",
        body: "| Category | Example | Report it? |\n|---|---|---|\n| Side effect | Metallic taste with metronidazole | Document and teach; report if severe or unusual |\n| Suspected ADR | Itchy rash 20 minutes after a first ceftriaxone dose | Yes — always, with the batch number |\n| Therapeutic failure | Full malaria course taken, fever persists | Yes — resistance, poor quality or falsified medicine may be the cause |\n| Poor-quality medicine | Tablets crumbling, discoloured, or packets with broken seals | Yes — through pharmacovigilance and the FDA Ghana |\n| Medication error (or near-miss) | Dose given late, wrong syringe drawn, tenfold error caught in time | Yes — near-misses are free lessons |\n| Adverse event after immunisation | Fever and swelling after a vaccine dose | Yes — through EPI/IDSR channels as well |",
      },
      {
        type: "clinical_pearl",
        body: "A suspicion on paper is data; a suspicion in your head is nothing. When in doubt, fill it out — report even when you are unsure the medicine was to blame.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Twenty minutes after her first intravenous dose of ceftriaxone, a post-surgical patient develops a generalised itchy rash over her chest and arms. The infusion is stopped, she is treated per protocol, and the rash settles. The prescriber notes 'mild allergy' in the file — and no form is filed.\n\nWhat has been missed, and what do you do?\n\nAnswer: A suspected adverse drug reaction has gone unreported, which means the national system never learns of it. Document the reaction fully in the notes, record the medicine and its **batch number** in the allergy field and on the report form, file an ADR report through your district to the FDA Ghana's National Pharmacovigilance Centre, and make sure the woman and her folder carry the allergy clearly so the medicine is avoided next time. Single mild reports from many facilities are exactly how safety signals are born — one clinic's 'just a mild allergy' is the country's missing data point.",
      },
      {
        type: "memory_trick",
        body: "A good report is six lines: the patient, the medicine and its batch, what happened, when it started, what was done, and how it ended — six lines that protect a nation.",
      },
      {
        type: "summary",
        body: "- Side effect: expected and mild. Adverse drug reaction: harmful, unintended, at normal doses. Adverse event: any harm during treatment.\n- Report suspected ADRs, therapeutic failures, poor-quality or falsified medicines, medication errors and near-misses, and adverse events after immunisation.\n- Ghana's pathway: your ward → district → FDA Ghana National Pharmacovigilance Centre → WHO's VigiBase (Uppsala Monitoring Centre).\n- The six lines: patient initials, suspect medicine with batch number, the reaction, onset, treatment, outcome — plus your contact.\n- Suspicion is enough; proof is not required; the culture is no-blame.",
      },
    ],
    questions: [
      {
        topic: "Adverse Drug Reactions",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the difference between a side effect and an adverse drug reaction?",
        options: [
          "There is no difference at all",
          "Side effects only happen in pregnancy",
          "A side effect is a known, usually mild effect; an adverse drug reaction is a harmful, unintended response at normal doses",
          "Adverse reactions only occur with overdose",
        ],
        correctIndex: 2,
        explanation:
          "Side effects are expected consequences of a medicine's normal action — mild and predictable. Adverse drug reactions are unintended, harmful responses at normal doses, and they deserve a report.",
        courseSlug: "pharmacology-3",
      },
      {
        topic: "Adverse Drug Reactions",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which detail on an ADR report form turns an isolated rash into a traceable national signal?",
        options: [
          "The suspect medicine's batch number",
          "The reporter's years of experience",
          "The patient's full address",
          "The hospital's electricity bill",
        ],
        correctIndex: 0,
        explanation:
          "The batch number links the reaction to a specific manufacturing lot — the detail that reveals whether a problem lies with the medicine itself rather than the patient. It is why the form asks for it every time.",
        courseSlug: "pharmacology-3",
      },
      {
        topic: "Adverse Drug Reactions",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In Ghana, where does a suspected adverse drug reaction report ultimately travel?",
        options: [
          "To the FDA Ghana's National Pharmacovigilance Centre, then into VigiBase, the WHO-linked global database",
          "To the drug company's marketing department only",
          "To the patient's insurance provider",
          "Nowhere — reports are kept only in the ward drawer",
        ],
        correctIndex: 0,
        explanation:
          "Ghana's National Pharmacovigilance Centre, hosted by the FDA Ghana, is part of WHO's Programme for International Drug Monitoring and feeds reports into VigiBase, maintained by the Uppsala Monitoring Centre, where global safety signals are detected.",
        courseSlug: "pharmacology-3",
      },
      {
        topic: "Adverse Drug Reactions",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You suspect a patient's new rash was caused by a medicine, but you are not certain. What should you do?",
        options: [
          "Say nothing until you have proof of causation",
          "Report only if the patient complains formally",
          "Wait to see whether the same reaction happens in three more patients first",
          "File the report — suspicion is enough, and causality is assessed centrally",
        ],
        correctIndex: 3,
        explanation:
          "The reporting threshold is suspicion, not proof — causality is judged centrally with the WHO-UMC criteria. Patterns emerge from many uncertain single reports; waiting for certainty is how signals die in ward drawers.",
        courseSlug: "pharmacology-3",
      },
    ],
    flashcards: [
      {
        topic: "Adverse Drug Reactions",
        front: "Define pharmacovigilance in one line.",
        back: "The science and activities of detecting, assessing, understanding and preventing medicine-related harm — the world's early-warning system for medicines.",
      },
      {
        topic: "Adverse Drug Reactions",
        front: "Which six details carry the weight of an ADR report?",
        back: "Patient's initials, the suspect medicine with batch number, the reaction with its onset, the treatment given, the outcome, and the reporter's contact.",
      },
      {
        topic: "Adverse Drug Reactions",
        front: "Where does Ghana's pharmacovigilance sit, and where do reports flow?",
        back: "The National Pharmacovigilance Centre at the FDA Ghana — a member of WHO's Programme for International Drug Monitoring — sending reports into VigiBase, run by the Uppsala Monitoring Centre.",
      },
      {
        topic: "Adverse Drug Reactions",
        front: "What four things besides ADRs also deserve a pharmacovigilance report?",
        back: "Therapeutic failures, poor-quality or falsified medicines, medication errors and near-misses, and adverse events following immunisation.",
      },
    ],
    sources: [
      {
        organization: "Food and Drugs Authority, Ghana",
        title: "Pharmacovigilance and Adverse Event Reporting",
        url: "https://fdaghana.gov.gh",
        note: "Ghana's national reporting system — verify current procedures and forms.",
      },
      {
        organization: "World Health Organization",
        title: "The Safety of Medicines in Public Health Programmes: Pharmacovigilance, an Essential Tool",
        year: "2006",
        note: "Educational source — verify the current link.",
      },
      {
        organization: "Uppsala Monitoring Centre",
        title: "WHO Programme for International Drug Monitoring and VigiBase",
        url: "https://www.who-umc.org",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "pharmacology-3",
    moduleTitle: "Stewardship & Vigilance",
    lessonTitle: "Antimicrobial Stewardship: The Long Game",
    description:
      "Resistance is built one careless course at a time — what it is, how it grows, and the daily nursing moves that keep antibiotics working for the next generation.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Explain how antimicrobial resistance emerges and spreads in communities and hospitals.",
      "Describe the nurse's stewardship moves: cultures before doses, on-time dosing, completed courses and patient education.",
      "Apply the 'antibiotics do not treat colds' conversation to real clinic encounters.",
    ],
    tags: ["antimicrobial stewardship", "resistance", "antibiotic education", "infection prevention"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Antibiotics are one of medicine's few genuine bargains with history: infections that killed children a century ago became treatable in days. But the bargain has a condition — use them well, or lose them. Every unnecessary course, every stopped-early treatment and every shared tablet trains the bacteria, and the bacteria never forget.\n\nStewardship is the discipline of keeping antibiotics working. It is not a committee in Accra — it is what happens at your drug round, your teaching corner and your clinic bench, every shift, for the rest of your career.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Resistance is survival of the survivable.** Within any infection, a few bacteria are naturally less susceptible. An incomplete course kills the weak and leaves the strong to multiply — the next infection is harder, needs stronger medicines, costs more, and in sepsis can be lethal. Resistance then **travels**: between people on unwashed hands, through hospitals on equipment, and through the food chain where antibiotics are used in farming.\n\n**The behaviours that build it** are everyday Ghanaian scenes: antibiotics bought from the chemical seller without a prescription; courses stopped when the fever settles ('save the rest'); tablets shared with a sick relative; leftover capsules from last year's drawer; 'antibiotic injections' demanded for every runny nose. On the ward, your counter-moves are equally everyday: **cultures before the first dose** where advised (without delaying emergency treatment); **doses given exactly on time** so blood levels never dip; the **full course taught and completed**; and honest education — antibiotics treat bacterial infection, not colds, most coughs, or every fever. Supporting the prescriber's choices matters too: WHO's **AWaRe** framework sorts antibiotics into Access, Watch and Reserve — first-line medicines first, the Watch group watched closely, and Reserve medicines protected for the infections that truly need them.",
      },
      {
        type: "text",
        title: "Prevention is stewardship",
        body: "Every infection prevented is an antibiotic course avoided. Hand hygiene at WHO's Five Moments, sterile technique for procedures, clean water and sanitation teaching, safe waste disposal, vaccination delivered and promoted — all of it is resistance control. The infection that never happens cannot teach any bacterium anything.\n\nAnd when infection does happen, the quality of your nursing decides how much medicine is needed: wounds cleaned and dressed well, catheters avoided or removed early, patients fed and hydrated so their own defences work, glucose controlled in the diabetic patient. Stewardship sounds like a pharmacology word; in practice it is mostly hygiene, technique and teaching wearing a white coat.",
      },
      {
        type: "table",
        title: "Everyday stewardship",
        body: "| Everyday situation | The stewardship move |\n|---|---|\n| Patient with a cold of two days demands 'an injection' | Explain: viral illness, fluids and rest, danger signs to watch — no antibiotic |\n| Fever before the malaria test is back | Test and assess first; treat what the test and guideline say |\n| First dose of antibiotics about to be given | Sample for culture first where advised — without delaying sepsis treatment |\n| Patient improving on day 3 of 5, wants to stop | Teach completion — the strong bacteria survive stopped courses |\n| Leftover antibiotics at home | Teach: never share, never save — return or discard safely |\n| The drug round is behind schedule | Doses keep their spacing — 'roughly' is where levels dip and resistance breeds |",
      },
      {
        type: "clinical_pearl",
        body: "The course stopped early today teaches the bacteria; the infection prevented tomorrow never needs the lesson.",
      },
      {
        type: "case",
        title: "At the OPD bench",
        body: "A father arrives at the outpatient bench holding his 2-year-old, who has had a runny nose and mild cough for two days, feeding well and playing. He asks firmly for 'the antibiotic injection, the one that worked last time', because he is travelling for work tomorrow.\n\nHow do you hold the line kindly — and what do you offer instead?\n\nAnswer: Take the father's concern seriously and examine the child: fever, breathing rate, chest signs, ears and throat, feeding and activity — the serious causes are excluded, not assumed. Then explain honestly: a runny nose with a playing, feeding child is a viral cold; antibiotics do not touch viruses, and giving them adds rash, diarrhoea and — over years — resistance, which is exactly what takes the 'injection that works' out of the future. Offer what actually helps: fluids, saline nose drops, fever guidance, and the danger signs that mean return today — fast breathing, poor feeding, fever that persists, or the child becoming unusually quiet. Ask the father to name a caregiver who knows the signs before he travels. Holding the line with warmth is stewardship in its purest form.",
      },
      {
        type: "memory_trick",
        body: "Stewardship in one line: Culture first, complete the course, share never, wash always — and protect the last-line medicines like the family silver.",
      },
      {
        type: "summary",
        body: "- Resistance emerges when incomplete or unnecessary courses select the strongest bacteria — and it travels on hands, equipment and food chains.\n- Community drivers: buying without prescription, stopped courses, shared tablets, leftover capsules, antibiotic demands for viral illness.\n- Ward stewardship: cultures before the first dose (without delaying sepsis treatment), doses exactly on time, full courses taught and completed.\n- WHO's AWaRe framework: Access first-line, Watch closely, Reserve protected for true need.\n- Prevention is stewardship — every infection prevented is an antibiotic course avoided: hand hygiene, sterile technique, vaccination, clean care.",
      },
    ],
    questions: [
      {
        topic: "Antimicrobial Stewardship",
        type: "MCQ",
        difficulty: "Easy",
        stem: "How does stopping an antibiotic course early breed resistance?",
        options: [
          "It kills the weakest bacteria and leaves the strongest to multiply and return harder to treat",
          "It makes the body allergic to the antibiotic",
          "It causes the antibiotic to expire faster",
          "It has no effect on resistance at all",
        ],
        correctIndex: 0,
        explanation:
          "A partial course removes the susceptible bacteria and selects the survivors — the next infection is built from the resistant remainder. Completing the prescribed course clears the whole population.",
        courseSlug: "pharmacology-3",
      },
      {
        topic: "Antimicrobial Stewardship",
        type: "CLINICAL_SCENARIO",
        difficulty: "Moderate",
        stem: "A father demands an antibiotic injection for his 2-year-old with two days of runny nose and mild cough. The child has no fever, is feeding and playing. What is the best nursing response?",
        options: [
          "Give the injection — the father knows his child best",
          "Refuse abruptly and tell him antibiotics are for serious people only",
          "Assess the child to exclude serious causes, then explain the cold is viral, offer symptom care, and teach the danger signs that mean return today",
          "Prescribe oral antibiotics instead, to compromise with the father",
        ],
        correctIndex: 2,
        explanation:
          "Stewardship holds the line with warmth: examine first (excluding the serious causes), then explain honestly that viral colds do not respond to antibiotics, offer what helps, and leave the family with clear danger signs. Neither giving in nor dismissing serves the child.",
        courseSlug: "pharmacology-3",
      },
      {
        topic: "Antimicrobial Stewardship",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which everyday practice is itself a form of antimicrobial stewardship?",
        options: [
          "Hand hygiene at WHO's Five Moments, preventing infections that would need treatment",
          "Saving leftover antibiotics for the next illness",
          "Buying antibiotics in advance for the harmattan season",
          "Giving antibiotics slightly late so the body rests between doses",
        ],
        correctIndex: 0,
        explanation:
          "Every infection prevented is an antibiotic course avoided — hand hygiene is resistance control in its purest form. Sharing, storing and delaying doses all breed resistance instead.",
        courseSlug: "pharmacology-3",
      },
      {
        topic: "Antimicrobial Stewardship",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What does the WHO AWaRe framework ask of clinical teams?",
        options: [
          "To use the newest antibiotics first in every infection",
          "To treat Access first-line antibiotics as the default, watch the Watch group closely, and protect Reserve medicines for infections that truly need them",
          "To avoid antibiotics entirely in district hospitals",
          "To rotate all antibiotics weekly regardless of the infection",
        ],
        correctIndex: 1,
        explanation:
          "AWaRe sorts antibiotics by stewardship value: Access medicines cover most common infections safely; Watch medicines need closer justification; Reserve medicines are guarded for multi-resistant infections — so the last line stays sharp.",
        courseSlug: "pharmacology-3",
      },
    ],
    flashcards: [
      {
        topic: "Antimicrobial Stewardship",
        front: "Explain resistance selection in one sentence.",
        back: "An incomplete or unnecessary course kills the weakest bacteria and leaves the strongest to multiply — the next infection is harder, costlier and sometimes untreatable.",
      },
      {
        topic: "Antimicrobial Stewardship",
        front: "What are the ward stewardship moves for every antibiotic course?",
        back: "Culture before the first dose where advised (never delaying sepsis treatment), doses exactly on time, and the full course taught and completed.",
      },
      {
        topic: "Antimicrobial Stewardship",
        front: "What does AWaRe stand for, and what is the rule?",
        back: "Access (first-line default), Watch (use with closer justification), Reserve (protect for true multi-resistant need) — keep the last line sharp.",
      },
      {
        topic: "Antimicrobial Stewardship",
        front: "Why is infection prevention part of stewardship?",
        back: "Every infection prevented is an antibiotic course avoided — hand hygiene, sterile technique, vaccination and clean care are all resistance control.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Global Action Plan on Antimicrobial Resistance",
        year: "2015",
      },
      {
        organization: "Ministry of Health, Ghana",
        title: "Ghana National Action Plan on Antimicrobial Resistance",
        year: "2017",
        note: "Ghana's national AMR strategy — verify current version.",
      },
      {
        organization: "World Health Organization",
        title: "WHO Model List of Essential Medicines (AWaRe classification)",
        year: "2023",
        note: "Verify current version.",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "pharmacology-3",
    moduleTitle: "Stewardship & Vigilance",
    lessonTitle: "Medication Errors: How They Happen, How They Stop",
    description:
      "A hurried hand, an unlabelled syringe, a look-alike vial at 2 am — how errors are born, and the rights, checks and reporting culture that stop them reaching patients.",
    difficulty: "Clinical Reasoning",
    durationMin: 12,
    objectives: [
      "Describe the common types and root causes of medication errors on the ward.",
      "Apply the rights of administration, the three checks and independent double-checks to high-alert medicines.",
      "Explain near-miss and error reporting as a system-learning, no-blame discipline.",
    ],
    tags: ["medication errors", "medication safety", "high-alert medicines", "reporting culture", "rights of administration"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Medication errors rarely come from ignorance. They come from interruption, haste and fatigue — a syringe drawn early and left unlabelled, a vial grabbed because it stood where the right one should have been, a dose charted at the end of a frantic shift from memory. The defences against these are famously unglamorous: rights, checks, questions and immediate notes.\n\nThis lesson walks the anatomy of an error, then builds the reflexes that stop one — yours and the system's. Because the final truth of medication safety is this: the error you catch is a gift to the next patient; the error you hide is a rehearsal.",
      },
      {
        type: "text",
        title: "How errors happen",
        body: "The classic types: the **wrong patient**, the **wrong medicine** (look-alike, sound-alike — hydralazine and hydroxyzine, metronidazole and methylergometrine in rushed handwriting), the **wrong dose** (the tenfold decimal: 0.5 misread as 5, or 5.0 read as 50), the **wrong route** (an intravenous preparation given intramuscularly), the **wrong time** (three doses squeezed into the evening because the morning was busy), and the **omitted dose** that the next shift then repeats.\n\nThe root causes live in the system, not the person: interruptions during preparation, fatigue at the end of a night shift, unclear prescriptions, verbal orders shouted across a corridor, unlabelled syringes drawn in batches, medicines stored together because their boxes look friendly. High-alert medicines — **insulin, heparin, opioids, concentrated potassium, magnesium** — carry the smallest margins, so the same error with them becomes harm rather than embarrassment.",
      },
      {
        type: "text",
        title: "The habits that stop them",
        body: "The **five rights** remain the skeleton: right patient, right medicine, right dose, right route, right time. Nursing extends them: right **documentation** (chart it at once), right **reason** (why this medicine, today?), right **response** (did it work?), right **education** (does the patient know what to watch for?) and right **refusal** (respect and record it). The **three checks** follow the label: read it when you take the medicine, when you prepare it, and when you return it to storage.\n\n**Identify with an open question** — 'Tell me your full name, please?' — matched to the wristband and folder; a tired patient will agree to any name you suggest. **High-alert medicines get an independent double-check**: two clinicians check separately, from the order to the prepared syringe, and only then compare. **Prepare without interruption** — a 'do not disturb' signal during the medication round is a safety device, not an attitude. **Verbal orders** survive only in emergencies: repeat them back, write them, and have them signed as soon as possible. **Label every syringe at the moment it is drawn.** **Chart immediately** — a dose that exists only in memory invites a duplicate. And store medicines as the label demands: in Ghana's heat, a medicine left on a sunny windowsill quietly loses its power.",
      },
      {
        type: "table",
        title: "The trap and the habit that defeats it",
        body: "| Error trap | The habit that defeats it |\n|---|---|\n| Look-alike, sound-alike medicines | Store them apart; tall-man lettering on labels; read the label three times |\n| The tenfold decimal error | Leading zero always (0.5), trailing zero never (5 mg) — question any dose that surprises you |\n| Interruption during preparation | A do-not-disturb signal during the round; prepare in one unbroken sequence |\n| Unlabelled syringes drawn in batches | Label at the moment of drawing — one patient, one syringe, at the bedside |\n| Wrong patient | Open-question identification, wristband and folder match — never a closed 'Are you Mrs Mensah?' |\n| Verbal orders | Repeat back, write down, signed as soon as the emergency allows |\n| Late or omitted doses | Dose timings planned into the round; chart immediately so the next shift sees the truth |\n| High-alert medicines (insulin, heparin, opioids, concentrated KCl, magnesium) | Independent double-check — two clinicians, separately, then compare |",
      },
      {
        type: "clinical_pearl",
        body: "Chart it while your hands still smell of the ampoule. Memory is a poor syringe label — and the next shift cannot see what you remember.",
      },
      {
        type: "case",
        title: "At a busy outreach clinic",
        body: "At a busy outreach clinic, a colleague has drawn five syringes at once — injections for five different women waiting on the bench. Only one syringe carries a handwritten label, and the colleague asks you to give 'the one in the middle' to the next mother.\n\nWhat is wrong here, and how do you rescue the situation safely?\n\nAnswer: Unlabelled syringes and giving medicines by position rather than by identity break several rights at once — the medicine, dose and patient are all unverified. Refuse politely and start over: check each order, label every syringe at the moment of drawing, identify each woman with an open question matched to her folder, and chart each dose immediately after giving it. Then raise the pattern at the next staff meeting, because the system — not the colleague — allowed the trap: five simultaneous preparations, time pressure and no labels. And report the near-miss: it harmed no one, which is exactly why it is a free lesson for every other clinic.",
      },
      {
        type: "text",
        title: "The reporting culture: why near-misses are gifts",
        body: "When an error happens, the instinct is to hide; the profession asks you to report. Not because anyone enjoys blame — because the pattern stays dangerous while it stays invisible. A near-miss reported is a trap removed for the next nurse and the next patient; an error reported honestly gets the patient monitored, the system corrected and the staff supported. The no-blame posture protects the reporting, and the reporting protects the patients.\n\nThe professional discipline is the same at every level: recognise what happened, care for the patient first, document honestly, tell the senior nurse, report through the system — pharmacovigilance or the facility's incident channel — and let the correction aim at the system, not the person. The nurse who reports her own near-miss is not confessing weakness; she is holding the door for everyone behind her.",
      },
      {
        type: "memory_trick",
        body: "Five rights ride on your five fingers — patient, medicine, dose, route, time — and documentation is the thumb that grips the hand together. No chart, no dose.",
      },
      {
        type: "summary",
        body: "- Errors are born of interruption, haste, fatigue and system traps — not ignorance: wrong patient, medicine, dose, route, time, or the omitted-then-repeated dose.\n- Five rights plus documentation, reason, response, education and refusal; three label checks; open-question identification; label syringes at the moment of drawing.\n- High-alert medicines — insulin, heparin, opioids, concentrated potassium, magnesium — get independent double-checks: two clinicians, separately, then compare.\n- Decimal discipline: leading zero always (0.5), trailing zero never (5 mg); question any dose that surprises you.\n- Verbal orders: emergency only — repeat back, write, sign. Chart immediately; store per label in the heat.\n- Report near-misses and errors — no-blame, system-focused. The error you catch is a gift; the one you hide is a rehearsal.",
      },
    ],
    questions: [
      {
        topic: "Medication Errors",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A colleague asks you to give 'the middle syringe' from a tray of five unlabelled syringes drawn for different patients. What is the correct action?",
        options: [
          "Give it — the colleague drew them in order, so position is reliable",
          "Refuse politely, restart with one patient at a time, label each syringe at the moment of drawing, and report the near-miss afterwards",
          "Give it, but write the patient's name on the syringe first",
          "Ask the patients which injection is theirs",
        ],
        correctIndex: 1,
        explanation:
          "Position is not identity, and unlabelled syringes mean the medicine and dose are unverified — multiple rights broken at once. Restart the process safely, then report the near-miss so the system (batch preparation under time pressure) is corrected, not just the moment.",
        courseSlug: "pharmacology-3",
      },
      {
        topic: "Medication Errors",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which prescription writing habit prevents tenfold dosing errors?",
        options: [
          "Always write a leading zero (0.5 mg) and never a trailing zero (write 5 mg, not 5.0 mg)",
          "Use decimal points wherever possible to look precise",
          "Write doses in fractions only (1/2 tablet)",
          "Abbreviate units to save chart space",
        ],
        correctIndex: 0,
        explanation:
          "A missed decimal point turns 0.5 into 5, and an unnoticed trailing zero turns 5 into 50 — leading zero always, trailing zero never, and any surprising dose gets re-checked with the prescriber.",
        courseSlug: "pharmacology-3",
      },
      {
        topic: "Medication Errors",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What makes a double-check of a high-alert medicine 'independent'?",
        options: [
          "Two clinicians read the label together at the same time, in silence",
          "The senior nurse checks everything alone after the shift",
          "Two clinicians check separately — from the order to the prepared syringe — and only then compare",
          "The patient watches while the nurse prepares the dose",
        ],
        correctIndex: 2,
        explanation:
          "Independence breaks the pattern where one person's assumption guides the other's eyes. Both check alone, from order to prepared dose, and only then compare findings — which is why it works for insulin, heparin, opioids, concentrated potassium and magnesium.",
        courseSlug: "pharmacology-3",
      },
      {
        topic: "Medication Errors",
        type: "MCQ",
        difficulty: "Clinical Reasoning",
        stem: "You discover you gave a patient half the prescribed dose of a morning medicine. The patient feels fine. What is the correct sequence of actions?",
        options: [
          "Say nothing — the dose was small and the patient is unaffected",
          "Give the other half secretly at the next round to balance the day",
          "Document the error honestly, inform the senior nurse, monitor the patient, and report it so the system learns",
          "Wait to see whether the patient deteriorates before documenting anything",
        ],
        correctIndex: 2,
        explanation:
          "Patient first (monitor), honesty always: document what was actually given so the next decision is made on truth, inform the senior nurse immediately for clinical guidance, and report through the system. Hidden errors cannot be corrected for the patient and stay dangerous for the next one.",
        courseSlug: "pharmacology-3",
      },
    ],
    flashcards: [
      {
        topic: "Medication Errors",
        front: "Name the classic five rights, and the extension nursing adds.",
        back: "Patient, medicine, dose, route, time — extended by documentation, reason, response, education and refusal.",
      },
      {
        topic: "Medication Errors",
        front: "What are the three checks of administration?",
        back: "Read the label when taking the medicine, when preparing it, and when returning it to storage — so the right medicine travels with the dose at every step.",
      },
      {
        topic: "Medication Errors",
        front: "List four high-alert medicines and the safeguard each requires.",
        back: "Insulin, heparin, opioids and concentrated potassium (magnesium too) — each needs an independent double-check: two clinicians separately, then compare.",
      },
      {
        topic: "Medication Errors",
        front: "Why report a near-miss that harmed no one?",
        back: "A near-miss is a free lesson: the trap is still loaded for the next patient. Reporting removes it — and the no-blame culture only survives if honest reports keep coming.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Patient Safety Curriculum Guide: Multi-professional Edition",
        year: "2011",
        url: "https://apps.who.int/iris/handle/10665/44641",
      },
      {
        organization: "Institute for Safe Medication Practices",
        title: "High-Alert Medications List",
        url: "https://www.ismp.org/recommendations/high-alert-medications-list",
        note: "Educational source — verify the current list version.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses",
        note: "Professional accountability and documentation — verify current edition.",
      },
    ],
  },
];
