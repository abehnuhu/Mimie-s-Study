// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — WARD WATCH DATA
// Rounds for the animated spot-the-danger vitals monitor game.
// Medically anchored to WHO MCPC / PCPNC danger-sign standards:
//   severe pre-eclampsia BP ≥160/110 · newborn danger RR>60,
//   temp <35.5°C · puerperal sepsis fever + offensive lochia ·
//   PPH rising pulse + falling BP · fetal distress FHR <110 or
//   >160. Pure data — no client/server deps.
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
        name: "Ward A · Bed 3",
        context: "Madam Adjoa · 6 hrs postpartum",
        tone: "normal",
        hr: 78, bp: "112/70", spo2: 99, rr: 16, temp: 36.8,
      },
      {
        name: "Ward A · Bed 7",
        context: "Madam Fatima · day 2 postpartum",
        tone: "danger",
        hr: 124, bp: "88/54", spo2: 97, rr: 24, temp: 37.2,
        note: "heavy dark red bleeding · uterus soft and boggy",
      },
      {
        name: "Ward A · Bed 9",
        context: "Madam Esi · day 1 postpartum",
        tone: "normal",
        hr: 74, bp: "118/74", spo2: 98, rr: 18, temp: 36.9,
      },
    ],
    dangerIndex: 1,
    correctActionIndex: 0,
    actions: [
      {
        text: "Call for help, massage the fundus, empty the bladder and give uterotonics per protocol",
        feedback: "Exactly right — that is the first-line response to a PPH with a boggy uterus.",
      },
      { text: "Reassure her and recheck in one hour", feedback: "One hour is far too long — shock can deepen in minutes." },
      { text: "Give paracetamol and a drink of water", feedback: "Comfort measures will not stop the bleeding." },
    ],
    debrief:
      "Rising pulse with falling blood pressure after birth is the classic shock pattern of postpartum haemorrhage — the body compensates quietly before it collapses. A soft, boggy uterus means atony: massage it, empty the bladder, give uterotonics, and always call for help first. WHO MCPC treats any bleeding that makes the mother's condition unstable as PPH, whatever the estimated volume.",
  },
  {
    level: 2,
    seconds: 38,
    patients: [
      {
        name: "ANC · Room 2",
        context: "Afua · 33 weeks · primigravida",
        tone: "danger",
        hr: 96, bp: "164/112", spo2: 98, rr: 20, temp: 36.7,
        note: "severe headache · flashing lights · protein 3+",
      },
      {
        name: "ANC · Room 4",
        context: "Abena · 34 weeks",
        tone: "normal",
        hr: 84, bp: "118/76", spo2: 99, rr: 16, temp: 36.6,
      },
    ],
    dangerIndex: 0,
    correctActionIndex: 0,
    actions: [
      {
        text: "Refer urgently, keep her on her left side in a quiet dim room and never leave her alone",
        feedback: "Perfect — she has severe features; escalation and constant watching are the treatment pathway.",
      },
      { text: "Send her home with paracetamol for the headache", feedback: "She is hours from a seizure — home is the one place she must not go." },
      { text: "Repeat the BP next week at routine visit", feedback: "Severe features demand action today, not next week." },
    ],
    debrief:
      "Pre-eclampsia with severe features is BP ≥160/110, or ≥140/90 with proteinuria plus headache, visual disturbance or epigastric pain. Flashing lights and brisk reflexes are premonitory signs of eclampsia. The only cure is delivery — a specialist decision — and until then: left lateral position, dim and quiet surroundings, magnesium sulphate per protocol, and never leave her alone.",
  },
  {
    level: 3,
    seconds: 36,
    patients: [
      {
        name: "NICU · Cot 5",
        context: "Baby of Adjoa · 18 hours old",
        tone: "normal",
        hr: 138, bp: "70/45", spo2: 97, rr: 46, temp: 36.9,
      },
      {
        name: "NICU · Cot 8",
        context: "Baby of Fatima · 20 hours old",
        tone: "danger",
        hr: 176, bp: "62/40", spo2: 90, rr: 72, temp: 36.4,
        note: "grunting · lower chest drawing in",
      },
      {
        name: "NICU · Cot 12",
        context: "Baby of Esi · day 2",
        tone: "normal",
        hr: 142, bp: "72/48", spo2: 98, rr: 48, temp: 37.0,
      },
    ],
    dangerIndex: 1,
    correctActionIndex: 0,
    actions: [
      {
        text: "Recognise fast breathing plus grunting and refer urgently for care",
        feedback: "Yes — grunting with RR above 60 is a newborn emergency sign. Move fast.",
      },
      { text: "It is normal newborn breathing — chart and observe", feedback: "RR above 60 with grunting is never normal." },
      { text: "Wrap warmer and feed in two hours", feedback: "Feeding can wait — the breathing cannot." },
    ],
    debrief:
      "WHO PCPNC counts fast breathing (RR >60), grunting, severe chest indrawing, temperature ≥37.5 or <35.5, not feeding, and reduced movement as newborn danger signs. Grunting is the baby fighting to keep the lungs open. Keep the baby warm on the way — a cold baby deteriorates faster — and refer.",
  },
  {
    level: 4,
    seconds: 34,
    patients: [
      {
        name: "Postnatal · Bed 2",
        context: "Madam Baby · day 4 postpartum",
        tone: "danger",
        hr: 112, bp: "104/66", spo2: 96, rr: 22, temp: 39.2,
        note: "lochia offensive-smelling · tender uterus",
      },
      {
        name: "Postnatal · Bed 6",
        context: "Madam Dede · day 4 postpartum",
        tone: "normal",
        hr: 76, bp: "116/72", spo2: 98, rr: 16, temp: 36.8,
      },
      {
        name: "Postnatal · Bed 11",
        context: "Madam Afia · day 3 postpartum",
        tone: "normal",
        hr: 82, bp: "120/78", spo2: 99, rr: 18, temp: 37.1,
      },
    ],
    dangerIndex: 0,
    correctActionIndex: 1,
    actions: [
      { text: "Encourage fluids and review at the 6-week check", feedback: "Fever with offensive lochia will not wait for six weeks." },
      {
        text: "Suspect puerperal sepsis — start treatment per protocol and refer",
        feedback: "Correct — fever ≥38.5 after birth with offensive lochia and a tender uterus is puerperal sepsis.",
      },
      { text: "Treat as malaria and give paracetamol only", feedback: "Without examining the source you may treat the fever and miss the sepsis." },
    ],
    debrief:
      "Puerperal sepsis is infection of the genital tract after birth: fever (≥38.5 or two readings ≥38), offensive lochia, uterine tenderness, sometimes abdominal pain. It kills quickly and quietly. Hand hygiene and clean delivery prevent it; antibiotics per WHO MCPC treat it. Never dismiss day-4 fever as 'malaria until proven otherwise' without examining the uterus and lochia.",
  },
  {
    level: 5,
    seconds: 32,
    patients: [
      {
        name: "Labour room · Bed 1",
        context: "Ongoing labour · 6 cm",
        tone: "normal",
        hr: 88, bp: "122/78", spo2: 98, rr: 20, temp: 36.8,
        note: "FHR 140 · baseline steady",
      },
      {
        name: "Labour room · Bed 3",
        context: "Ongoing labour · 5 cm",
        tone: "danger",
        hr: 102, bp: "126/82", spo2: 95, rr: 24, temp: 37.4,
        note: "FHR 178 · meconium-stained liquor",
      },
    ],
    dangerIndex: 1,
    correctActionIndex: 0,
    actions: [
      {
        text: "Reposition her, give oxygen, stop oxytocin if running and call for urgent review",
        feedback: "Exactly — FHR above 160 with meconium is fetal distress until proven otherwise.",
      },
      { text: "Chart the FHR and review in two hours", feedback: "A tachycardic baby in meconium may not have two hours." },
      { text: "Tell her to push now to finish quickly", feedback: "Pushing at 5 cm harms both mother and baby." },
    ],
    debrief:
      "Fetal distress signals: FHR persistently <110 or >160, meconium-stained liquor, and loss of variability. First moves are intra-uterine resuscitation: change position, hydrate, stop the oxytocin, give oxygen, and call for urgent review. The partograph exists so that these crossings are caught the moment they happen.",
  },
  {
    level: 6,
    seconds: 30,
    patients: [
      {
        name: "Postnatal · Bed 4",
        context: "Madam Grace · 1 hr postpartum",
        tone: "normal",
        hr: 80, bp: "114/72", spo2: 98, rr: 17, temp: 36.7,
        note: "fundus firm · bleeding minimal",
      },
      {
        name: "Postnatal · Bed 8",
        context: "Madam Amina · 2 hrs postpartum",
        tone: "normal",
        hr: 84, bp: "110/70", spo2: 98, rr: 16, temp: 36.9,
        note: "fundus firm · lochia moderate",
      },
      {
        name: "Ward B · Bed 2",
        context: "Madam Serwaa · day 3 · pre-eclampsia watch",
        tone: "danger",
        hr: 64, bp: "158/106", spo2: 97, rr: 14, temp: 36.6,
        note: "sudden epigastric pain · hyperreflexia",
      },
      {
        name: "Postnatal · Bed 12",
        context: "Madam Vida · day 2 postpartum",
        tone: "normal",
        hr: 78, bp: "118/74", spo2: 99, rr: 18, temp: 36.8,
      },
    ],
    dangerIndex: 2,
    correctActionIndex: 0,
    actions: [
      {
        text: "Escalate now — premonitory signs of eclampsia; magnesium sulphate per protocol and call the doctor",
        feedback: "Yes — epigastric pain with hyperreflexia and a climbing BP means a seizure may be minutes away.",
      },
      { text: "Give antacid for the epigastric pain", feedback: "This pain is her liver and her brain talking — not indigestion." },
      { text: "Chart the BP and review on the evening round", feedback: "Premonitory signs never wait for the evening round." },
    ],
    debrief:
      "Even after birth, pre-eclampsia can strike (it peaks in the first 72 hours postpartum). Epigastric pain, hyperreflexia, headache and visual disturbance are premonitory signs of eclampsia. Magnesium sulphate per WHO MCPC is the anticonvulsant of choice. Postpartum women are watched, not discharged early.",
  },
  {
    level: 7,
    seconds: 28,
    patients: [
      {
        name: "SCBU · Radiant warmer",
        context: "Baby of Ataa · 2 hours old",
        tone: "danger",
        hr: 118, bp: "58/36", spo2: 94, rr: 40, temp: 34.8,
        note: "feels cold to touch · not feeding",
      },
      {
        name: "SCBU · Cot 3",
        context: "Baby of Naa · 3 hours old",
        tone: "normal",
        hr: 136, bp: "68/44", spo2: 98, rr: 46, temp: 36.8,
      },
    ],
    dangerIndex: 0,
    correctActionIndex: 1,
    actions: [
      { text: "Bathe the baby to warm the skin", feedback: "Bathing a cold newborn strips away more heat — never bath a hypothermic baby." },
      {
        text: "Warm immediately skin-to-skin, feed if able, and refer if not improving",
        feedback: "Correct — hypothermia with poor feeding is a danger sign: warm, feed, assess, refer.",
      },
      { text: "Keep in a cold room to avoid overheating", feedback: "Overheating is not the risk here — 34.8°C is hypothermia." },
    ],
    debrief:
      "A newborn is hypothermic below 35.5°C. Cold stress burns glucose the baby needs for breathing and feeding, so hypothermia and poor feeding travel together. The warm chain: dry and wrap at birth, skin-to-skin, hat on the head, feed early and often, keep the room warm, and never bath a cold baby. The wrist feels warm while the core is cold — feel the tummy (or better, measure).",
  },
  {
    level: 8,
    seconds: 26,
    patients: [
      {
        name: "Ward A · Bed 5",
        context: "Madam Poku · anaemic postpartum",
        tone: "normal",
        hr: 92, bp: "108/68", spo2: 97, rr: 18, temp: 36.8,
      },
      {
        name: "Ward A · Bed 1",
        context: "Madam Tiwaa · 1 hr postpartum",
        tone: "danger",
        hr: 132, bp: "82/50", spo2: 95, rr: 28, temp: 36.5,
        note: "pale, clammy · trickle of bright red blood · fundus firm",
      },
      {
        name: "Ward A · Bed 10",
        context: "Madam Adjoa · day 2 postpartum",
        tone: "normal",
        hr: 76, bp: "118/72", spo2: 99, rr: 16, temp: 36.7,
      },
    ],
    dangerIndex: 1,
    correctActionIndex: 0,
    actions: [
      {
        text: "Shock with a firm uterus — examine for genital tract trauma per protocol",
        feedback: "Exactly — with the uterus firm, the bleeding source is likely a tear. Examine with good light and help.",
      },
      { text: "Continue fundal massage since it must be atony", feedback: "A firm uterus is not atony — massaging it will not find the tear." },
      { text: "Document and observe for one hour", feedback: "Her pressure is falling — observation without examination wastes her blood." },
    ],
    debrief:
      "PPH with a firm, well-contracted uterus points away from atony (Tone) toward the other Ts: Trauma — tears of the perineum, vagina or cervix — or Tissue and Thrombin. A trickle that continues can still cost her life when she was anaemic to start with. Two IV lines, call for help, examine systematically: perineum and vagina first, then with speculum, and the doctor explores higher. Every anaemic woman decompensates faster.",
  },
  {
    level: 9,
    seconds: 24,
    patients: [
      {
        name: "Labour room · Bed 4",
        context: "Obstructed labour · 10 hours",
        tone: "danger",
        hr: 128, bp: "136/88", spo2: 93, rr: 28, temp: 38.6,
        note: "contractions stopped · bandl ring · FHR 96",
      },
      {
        name: "Labour room · Bed 2",
        context: "Latent phase · calm",
        tone: "normal",
        hr: 84, bp: "118/74", spo2: 99, rr: 18, temp: 36.7,
        note: "FHR 142",
      },
      {
        name: "Labour room · Bed 5",
        context: "Active phase · 7 cm",
        tone: "normal",
        hr: 92, bp: "124/78", spo2: 98, rr: 20, temp: 36.9,
        note: "FHR 136 · good progress",
      },
      {
        name: "Labour room · Bed 7",
        context: "Second stage · pushing",
        tone: "normal",
        hr: 104, bp: "130/84", spo2: 97, rr: 24, temp: 37.0,
        note: "FHR 150 · head visible",
      },
    ],
    dangerIndex: 0,
    correctActionIndex: 0,
    actions: [
      {
        text: "Suspect uterine rupture — emergency referral for laparotomy, cross-match blood, call the team",
        feedback: "Correct — contractions stopping with a rising Bandl ring, fever and a slow FHR is rupture until excluded.",
      },
      { text: "Increase the oxytocin drip to restart contractions", feedback: "Never — with rupture suspected, oxytocin tears the uterus apart." },
      { text: "Give antibiotics for the fever and wait", feedback: "Waiting is how a ruptured uterus becomes a lost mother and baby." },
    ],
    debrief:
      "Threatened rupture announces itself: contractions that stop, a Bandl ring rising, agitation, scar or labour-history risk factors, fetal bradycardia, and maternal tachycardia with shock signs. Once rupture happens, pain may transiently ease and the fetal parts may rise. Response is theatre — resuscitate, cross-match, and refer immediately. Oxytocin in obstructed labour is the classic driver of this catastrophe: the partograph's alert and action lines exist to stop you reaching this monitor screen at all.",
  },
  {
    level: 10,
    seconds: 22,
    patients: [
      {
        name: "Ward B · Bed 9",
        context: "Eclampsia watch · 4 hrs postpartum",
        tone: "danger",
        hr: 58, bp: "172/118", spo2: 94, rr: 12, temp: 36.8,
        note: "drowsy after seizure · urine output 15 ml/hr",
      },
      {
        name: "Ward B · Bed 3",
        context: "Day 1 · mild anaemia",
        tone: "normal",
        hr: 88, bp: "106/66", spo2: 98, rr: 17, temp: 36.7,
      },
      {
        name: "Ward B · Bed 6",
        context: "Day 2 · breastfeeding well",
        tone: "normal",
        hr: 74, bp: "118/72", spo2: 99, rr: 16, temp: 36.8,
      },
    ],
    dangerIndex: 0,
    correctActionIndex: 2,
    actions: [
      { text: "Give another dose of magnesium sulphate and put her flat and quiet", feedback: "Never flat — she can aspirate; and dosing needs reassessment." },
      { text: "Restrict her fluids since urine output is low", feedback: "Low urine output is a sign, not a fluid instruction — she needs assessment." },
      {
        text: "Recovery position, airway watch, continue magnesium per protocol, monitor urine output hourly and call for urgent review",
        feedback: "Perfect — after a seizure: position, airway, magnesium, strict monitoring, escalation.",
      },
    ],
    debrief:
      "Ten rounds of pure pattern recognition — the core of midwifery vigilance. After an eclamptic seizure the priorities are airway and position (never flat), magnesium sulphate per WHO MCPC, hourly urine output as the early warning of magnesium toxicity and renal strain, and continuous company. Watch for the quiet patterns everywhere: a slow pulse can mean magnesium toxicity, a fast one can mean shock. Trust the monitor, but trust your eyes more.",
  },
];
