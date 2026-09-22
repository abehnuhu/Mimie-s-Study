// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — WARD WATCH DATA
// Rounds for the animated spot-the-danger vitals monitor game.
// Medically anchored to WHO ETAT / IMCI early-warning standards:
//   post-op haemorrhage rising pulse + falling BP · ACS chest
//   pressure · IMCI fast-breathing thresholds by age (≥60 / ≥50 /
//   ≥40) · sepsis fever + tachypnoea + new confusion ·
//   hypoglycaemia rule of 15 · stroke FAST · child hypothermia
//   <35.5°C · asthma sentence test · DKA Kussmaul breathing ·
//   post-ictal airway care. Pure data — no client/server deps.
// ─────────────────────────────────────────────────────────────

export type VitalsTone = "normal" | "danger";

export interface PatientVitals {
  name: string;
  /** short ward context line under the name */
  context: string;
  tone: VitalsTone;
  hr: number; // heart rate / pulse bpm
  bp: string; // "120/80"
  spo2: number; // %
  rr: number; // respiratory rate
  temp: number; // °C
  note?: string; // extra clue shown as a monitor alert line
}

export interface WardWatchRound {
  /** 1–10, escalating difficulty */
  level: number;
  /** seconds on the round clock */
  seconds: number;
  /** the monitor bank shown this round */
  patients: PatientVitals[];
  /** index into patients of the deteriorating one */
  dangerIndex: number;
  /** the correct next action (must match one of actions) */
  correctActionIndex: number;
  actions: { text: string; feedback: string }[];
  /** shown after the round resolves — the teaching moment */
  debrief: string;
}

export const wardWatchRounds: WardWatchRound[] = [
  {
    level: 1,
    seconds: 40,
    patients: [
      {
        name: "Surgical Ward A · Bed 3",
        context: "Mr. Tetteh · day 2 after hernia repair",
        tone: "normal",
        hr: 76, bp: "120/78", spo2: 98, rr: 16, temp: 36.7,
      },
      {
        name: "Surgical Ward A · Bed 7",
        context: "Mr. Boateng · day 2 after prostate surgery",
        tone: "danger",
        hr: 124, bp: "88/54", spo2: 97, rr: 24, temp: 37.1,
        note: "dressing soaked with fresh blood · drain filling fast",
      },
      {
        name: "Surgical Ward A · Bed 9",
        context: "Mr. Okai · day 3 after appendicectomy",
        tone: "normal",
        hr: 80, bp: "118/74", spo2: 98, rr: 18, temp: 36.9,
      },
    ],
    dangerIndex: 1,
    correctActionIndex: 0,
    actions: [
      {
        text: "Call for help, apply firm pressure over the site, raise the legs and monitor vital signs continuously",
        feedback: "Exactly right — post-operative bleeding with shock signs needs help, pressure and a rising review, now.",
      },
      { text: "Change the dressing and recheck in one hour", feedback: "One hour is far too long — the pulse is climbing and the pressure is falling." },
      { text: "Give his evening analgesia and let him rest", feedback: "Rest will not replace the blood he is losing." },
    ],
    debrief:
      "Rising pulse with falling blood pressure after surgery is the classic shock pattern of post-operative haemorrhage — the body compensates quietly before it collapses. A soaked dressing and a fast-filling drain mean volume is leaving the body: call for help, firm pressure, legs up, two wide-bore cannulas per protocol and a rising review. Blood pressure is a late sign — by the time it falls, a large part of the volume may already be gone. This is why the pulse and the breathing rate are watched first.",
  },
  {
    level: 2,
    seconds: 38,
    patients: [
      {
        name: "Medical Ward · Room 2",
        context: "Mr. Asante · 61 · admitted with 'gastritis'",
        tone: "danger",
        hr: 96, bp: "150/94", spo2: 96, rr: 20, temp: 36.6,
        note: "heavy chest pressure for 20 minutes · pale and sweating",
      },
      {
        name: "Medical Ward · Room 4",
        context: "Madam Efua · recovering from malaria",
        tone: "normal",
        hr: 84, bp: "118/76", spo2: 99, rr: 16, temp: 36.6,
      },
    ],
    dangerIndex: 0,
    correctActionIndex: 0,
    actions: [
      {
        text: "Sit him up, give oxygen per protocol, attach the monitor and call the doctor now — treat as a heart attack until proven otherwise",
        feedback: "Perfect — chest pressure with sweating is an acute coronary syndrome until the ECG says otherwise.",
      },
      { text: "Give an antacid and review on the morning round", feedback: "Crushing chest pressure with sweating is never 'just acid' until the ECG says so." },
      { text: "Walk him gently to the toilet to settle his stomach", feedback: "Walking a possible heart attack is how a collapse happens." },
    ],
    debrief:
      "Heavy central chest pressure lasting more than fifteen minutes, with sweating, nausea or radiation to arm or jaw, is a heart attack until the ECG proves otherwise — and the ECG belongs in the first ten minutes. Older patients, women and people living with diabetes often feel it as 'gas', jaw or back discomfort, which is exactly how it gets mislabelled gastritis. Sit up, oxygen per protocol, monitor, stay with him, escalate. Time is muscle.",
  },
  {
    level: 3,
    seconds: 36,
    patients: [
      {
        name: "Children's Ward · Cot 5",
        context: "Yaw · 3 years · finishing malaria treatment",
        tone: "normal",
        hr: 112, bp: "96/62", spo2: 98, rr: 24, temp: 36.9,
      },
      {
        name: "Children's Ward · Cot 8",
        context: "Adjoa · 2 years · cough for 3 days",
        tone: "danger",
        hr: 162, bp: "88/58", spo2: 90, rr: 58, temp: 38.6,
        note: "grunting · lower chest drawing in",
      },
      {
        name: "Children's Ward · Cot 12",
        context: "Kobi · 4 years · recovering well",
        tone: "normal",
        hr: 104, bp: "98/64", spo2: 98, rr: 22, temp: 36.8,
      },
    ],
    dangerIndex: 1,
    correctActionIndex: 0,
    actions: [
      {
        text: "Recognise fast breathing with chest indrawing — give oxygen per protocol and refer urgently",
        feedback: "Yes — a rate of 58 with grunting and indrawing in a 2-year-old is pneumonia territory. Move fast.",
      },
      { text: "It is a normal childhood cough — chart and observe", feedback: "Fast breathing with indrawing at rest is never a simple cough after the age of two months." },
      { text: "Wrap warmer and feed in two hours", feedback: "Feeding can wait — the breathing cannot." },
    ],
    debrief:
      "WHO counts fast breathing as a danger sign by age: 60 breaths or more under 2 months, 50 or more from 2 to 12 months, 40 or more from 1 to 5 years. Adjoa's 58 with grunting and chest indrawing means pneumonia — oxygen per protocol, keep her calm (crying deepens the distress), and refer urgently. Chest indrawing at rest is never normal in a child older than two months.",
  },
  {
    level: 4,
    seconds: 34,
    patients: [
      {
        name: "Medical Ward · Bed 2",
        context: "Madam Comfort · day 5 on the ward",
        tone: "danger",
        hr: 112, bp: "96/58", spo2: 95, rr: 24, temp: 39.2,
        note: "confused since morning · eating and drinking little",
      },
      {
        name: "Medical Ward · Bed 6",
        context: "Madam Dede · recovering well",
        tone: "normal",
        hr: 76, bp: "116/72", spo2: 98, rr: 16, temp: 36.8,
      },
      {
        name: "Medical Ward · Bed 11",
        context: "Mr. Kofi · awaiting discharge",
        tone: "normal",
        hr: 82, bp: "120/78", spo2: 99, rr: 18, temp: 37.1,
      },
    ],
    dangerIndex: 0,
    correctActionIndex: 1,
    actions: [
      { text: "Encourage fluids and review at the weekly check", feedback: "New confusion with fever and a racing pulse will not wait for a weekly check." },
      {
        text: "Suspect sepsis — escalate now and start the sepsis response pathway per protocol",
        feedback: "Correct — fever with a rising pulse, fast breathing, falling pressure and new confusion is sepsis until proven otherwise.",
      },
      { text: "Treat as malaria and give paracetamol only", feedback: "Without a full assessment you may treat the fever and miss the sepsis." },
    ],
    debrief:
      "Sepsis is the body's overwhelming response to infection, and it kills quickly and quietly. The pattern: fever (or a chilling low temperature), heart rate above 100, breathing above 22, new confusion, urine falling, pressure drifting down. Track-and-trigger charts exist so these crossings are caught the moment they happen — a rising respiratory rate is often the very first sign. Escalate now: cultures, antibiotics and fluids all run per protocol, and speed is the treatment.",
  },
  {
    level: 5,
    seconds: 32,
    patients: [
      {
        name: "Ward B · Bed 1",
        context: "Mr. Mensah · type 2 diabetes · stable",
        tone: "normal",
        hr: 82, bp: "128/78", spo2: 98, rr: 16, temp: 36.7,
        note: "bedtime glucose 8.2 mmol/L",
      },
      {
        name: "Ward B · Bed 3",
        context: "Madam Yaa · on evening insulin",
        tone: "danger",
        hr: 104, bp: "108/70", spo2: 97, rr: 20, temp: 36.5,
        note: "sweaty and trembling · glucose meter reads 2.4 mmol/L",
      },
    ],
    dangerIndex: 1,
    correctActionIndex: 0,
    actions: [
      {
        text: "Recognise hypoglycaemia — give fast-acting oral sugar per protocol, stay with her and recheck in 15 minutes",
        feedback: "Exactly — the rule of 15: about 15 g of fast sugar, recheck in 15 minutes, then a sustaining snack.",
      },
      { text: "Let her sleep it off and chart the reading", feedback: "A glucose of 2.4 with sweating and confusion can deepen into a seizure — sleep is not safe." },
      { text: "Withhold her food since she is confused", feedback: "Her brain needs sugar now — fast sugar per protocol first, then review." },
    ],
    debrief:
      "Sweating, trembling and sudden confusion in a patient on insulin or sulfonylureas is hypoglycaemia until proven otherwise. Confirm with the meter, but never let a working meter delay the first sugar if she can swallow safely. The rule of 15: about 15 g of fast-acting sugar, recheck in 15 minutes, then a snack that sustains. If swallowing is not safe, nothing goes in the mouth — escalate and follow the protocol. Hypoglycaemia kills brain cells fast; 'she will be fine after sleep' is the sentence that precedes a seizure.",
  },
  {
    level: 6,
    seconds: 30,
    patients: [
      {
        name: "Ward B · Bed 4",
        context: "Mr. Hammond · day 2 · hypertension, stable",
        tone: "normal",
        hr: 80, bp: "132/82", spo2: 98, rr: 17, temp: 36.7,
      },
      {
        name: "Ward B · Bed 8",
        context: "Madam Amina · walking well with physiotherapy",
        tone: "normal",
        hr: 84, bp: "118/72", spo2: 98, rr: 16, temp: 36.9,
      },
      {
        name: "Ward B · Bed 2",
        context: "Mr. Antwi · 72 · known hypertension",
        tone: "danger",
        hr: 64, bp: "158/106", spo2: 97, rr: 14, temp: 36.6,
        note: "right arm suddenly weak · face drooping · speech slurred",
      },
      {
        name: "Ward B · Bed 12",
        context: "Madam Vida · awaiting discharge",
        tone: "normal",
        hr: 78, bp: "118/74", spo2: 99, rr: 18, temp: 36.8,
      },
    ],
    dangerIndex: 2,
    correctActionIndex: 0,
    actions: [
      {
        text: "Call for urgent review — suspected stroke; note the exact time symptoms began and check the glucose",
        feedback: "Yes — sudden one-sided weakness with facial droop and slurred speech is FAST positive: a stroke until proven otherwise.",
      },
      { text: "Give his blood pressure medicine immediately to bring the pressure down", feedback: "Never chase the blood pressure first — the pressure may be the brain's way of perfusing itself. Time and the stroke pathway come first." },
      { text: "Chart the weakness and review on the evening round", feedback: "Face droop with one-sided weakness and slurred speech is a minutes-count emergency." },
    ],
    debrief:
      "FAST: Face drooping, Arm weakness, Speech slurred — Time to call. Sudden one-sided weakness or speech change is a stroke until proven otherwise, and the moment the symptoms began decides the treatment options, so it must be asked and recorded. Check the glucose — a low sugar can mimic a stroke. Do not lower the blood pressure yourself; perfusion of the injured brain is a specialist calculation. Time is brain: every minute costs nerve cells.",
  },
  {
    level: 7,
    seconds: 28,
    patients: [
      {
        name: "Children's Ward · Cot 1",
        context: "Adel · 18 months · brought from home",
        tone: "danger",
        hr: 132, bp: "78/50", spo2: 94, rr: 30, temp: 34.8,
        note: "feels cold to touch · refusing feeds · very lethargic",
      },
      {
        name: "Children's Ward · Cot 3",
        context: "Nhyira · 2 years · day 1 after surgery",
        tone: "normal",
        hr: 124, bp: "90/58", spo2: 98, rr: 26, temp: 36.8,
      },
    ],
    dangerIndex: 0,
    correctActionIndex: 1,
    actions: [
      { text: "Give a warm bath to raise her temperature", feedback: "Bathing strips away more heat — never bathe a hypothermic child." },
      {
        text: "Warm immediately — skin-to-skin under a blanket, warm the room, offer feeds if able, and refer if not improving",
        feedback: "Correct — hypothermia with poor feeding and lethargy is a danger sign: warm, feed, assess, refer.",
      },
      { text: "Keep the fan on to avoid a fever", feedback: "34.8°C is hypothermia, not a fever on the way." },
    ],
    debrief:
      "A child is hypothermic below 35.5°C, and cold stress burns the glucose the brain and breathing need — hypothermia, lethargy and poor feeding travel together. Warm the child, warm the room, warm the feeds, and never bathe a cold child. Any child found cold must also be assessed for infection, because sepsis hides inside hypothermia. The wrist and back may feel warm while the core is cold — feel the tummy, or better, measure.",
  },
  {
    level: 8,
    seconds: 26,
    patients: [
      {
        name: "Medical Ward · Bed 5",
        context: "Madam Serwaa · recovering from pneumonia",
        tone: "normal",
        hr: 92, bp: "118/74", spo2: 97, rr: 18, temp: 36.8,
      },
      {
        name: "Medical Ward · Bed 1",
        context: "Elikem · 24 · known asthmatic",
        tone: "danger",
        hr: 132, bp: "126/82", spo2: 91, rr: 28, temp: 36.8,
        note: "wheeze audible across the room · cannot finish a sentence",
      },
      {
        name: "Medical Ward · Bed 10",
        context: "Mr. Quaye · stable on treatment",
        tone: "normal",
        hr: 88, bp: "122/78", spo2: 98, rr: 17, temp: 36.7,
      },
    ],
    dangerIndex: 1,
    correctActionIndex: 0,
    actions: [
      {
        text: "Sit him upright, give the reliever inhaler per protocol, give oxygen per protocol and call for urgent review",
        feedback: "Exactly — too breathless to finish a sentence is a severe asthma attack: sit up, reliever and oxygen per protocol, escalate.",
      },
      { text: "Lie him flat to rest the chest muscles", feedback: "Lying flat makes an asthma attack worse — upright is the breathing position." },
      { text: "Tell him to slow his breathing and wait for the morning round", feedback: "A patient too breathless for sentences is minutes from trouble, not hours." },
    ],
    debrief:
      "An asthma emergency is written in sentences: a patient who cannot finish a sentence, sits upright, uses neck and shoulder muscles to breathe, with a rising pulse and breathing rate, is in severe distress — and a chest that goes SILENT is pre-arrest, not improvement. Reliever per protocol, oxygen per protocol, sit upright, stay with him, escalate. Harmattan dust and cold nights are Ghana's classic triggers — teach patients on discharge to start their reliever early and to come before the sentences shorten.",
  },
  {
    level: 9,
    seconds: 24,
    patients: [
      {
        name: "Ward C · Bed 4",
        context: "Esi · 19 · type 1 diabetes · unwell for 2 days",
        tone: "danger",
        hr: 128, bp: "106/70", spo2: 94, rr: 30, temp: 37.0,
        note: "deep sighing breaths · vomiting · glucose meter reads 'Hi'",
      },
      {
        name: "Ward C · Bed 2",
        context: "Madam Adjoa · diabetes · eating well",
        tone: "normal",
        hr: 84, bp: "118/74", spo2: 98, rr: 18, temp: 36.7,
        note: "glucose chart steady",
      },
      {
        name: "Ward C · Bed 5",
        context: "Mr. Fuseini · day 3 on antibiotics",
        tone: "normal",
        hr: 92, bp: "124/78", spo2: 98, rr: 20, temp: 36.9,
      },
      {
        name: "Ward C · Bed 7",
        context: "Madam Vida · awaiting discharge",
        tone: "normal",
        hr: 78, bp: "118/74", spo2: 99, rr: 18, temp: 36.8,
      },
    ],
    dangerIndex: 0,
    correctActionIndex: 0,
    actions: [
      {
        text: "Recognise diabetic ketoacidosis — escalate immediately and start the DKA pathway per protocol",
        feedback: "Correct — sighing breathing with vomiting and a meter that cannot read the sugar is DKA until proven otherwise.",
      },
      { text: "Give extra insulin from the ward tray and let her rest", feedback: "DKA is not a simple high sugar — fluids, potassium and monitoring are half the treatment. This is protocol territory, never a bedside guess." },
      { text: "Give oral fluids and recheck in the morning", feedback: "Deep sighing breathing with vomiting and an unreadable glucose is an emergency tonight." },
    ],
    debrief:
      "The DKA picture: deep, sighing (Kussmaul) breathing, vomiting and stomach pain, dehydration, a fruity odour on the breath, and a meter that reads 'Hi'. It can be the first sign of type 1 diabetes in a young person. Treatment is a protocol — fluids, insulin, potassium and monitoring — owned by the team; the nurse's power is recognising it fast and never delaying escalation. And the sick-day teaching before every discharge: never stop insulin because you cannot eat.",
  },
  {
    level: 10,
    seconds: 22,
    patients: [
      {
        name: "Ward B · Bed 9",
        context: "Mr. Dogbe · known epilepsy · seized in bed",
        tone: "danger",
        hr: 98, bp: "138/88", spo2: 94, rr: 14, temp: 36.8,
        note: "drowsy after seizure · tongue bitten · slept off",
      },
      {
        name: "Ward B · Bed 3",
        context: "Madam Dede · day 1 · mild anaemia",
        tone: "normal",
        hr: 88, bp: "106/66", spo2: 98, rr: 17, temp: 36.7,
      },
      {
        name: "Ward B · Bed 6",
        context: "Mr. Kofi · progressing with physiotherapy",
        tone: "normal",
        hr: 74, bp: "118/72", spo2: 99, rr: 16, temp: 36.8,
      },
    ],
    dangerIndex: 0,
    correctActionIndex: 2,
    actions: [
      { text: "Force a mouth gag between his teeth to protect the tongue", feedback: "Nothing is ever forced into the mouth — broken teeth and aspiration follow." },
      { text: "Restrict his fluids since he is too drowsy to drink", feedback: "Drowsiness is not a fluid instruction — he needs assessment and positioning, not dehydration on top." },
      {
        text: "Recovery position, airway watch, note the seizure duration, check the glucose, monitor closely and call for review",
        feedback: "Perfect — after a seizure: position, airway, timing, glucose, monitoring, escalation.",
      },
    ],
    debrief:
      "Ten rounds of pure pattern recognition — the core of nursing vigilance. After a seizure: recovery position (never flat), airway watch, time the event, check the glucose — a low sugar causes seizures — monitor closely and escalate. If another seizure begins, protect from injury and call for help, never restraining or forcing the mouth. Even 'known epilepsy' deserves a cause-check for this event: missed doses, fever, alcohol. Trust the monitor, but trust your eyes more.",
  },
];
