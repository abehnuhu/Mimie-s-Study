import type { MatchPair, TimelineEvent, SortGameItem, FetalPositionScenario, PrioritySet, DetectiveCase, LabelItem } from "./types";

// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — GAMES CONTENT
// Educational game data: infection control, medications, newborn findings,
// labour timeline, fetal position, clinical priority, case detective,
// memory match and anatomy labels. Recognition + referral focus, no doses.
// ─────────────────────────────────────────────────────────────

// ── GAME 5 · INFECTION CONTROL SORT ──────────────────────────
// Bins: safe | unsafe | action (requires further action)
export const infectionSortItems: SortGameItem[] = [
  {
    text: "Washing hands with soap and running water for at least 40 seconds when hands are visibly soiled",
    bin: "safe",
    feedback: "Correct — visible dirt needs soap and water, as alcohol rub cannot clean soiled hands."
  },
  {
    text: "Performing hand hygiene before and after every client contact",
    bin: "safe",
    feedback: "Correct — before and after care is the heartbeat of the WHO 5 Moments."
  },
  {
    text: "Wearing clean gloves for contact with blood or body fluids, then performing hand hygiene after removing them",
    bin: "safe",
    feedback: "Correct — gloves protect, but hands are still cleaned after removal because gloves are never perfect."
  },
  {
    text: "Placing used sharps directly into a puncture-proof container at the point of use",
    bin: "safe",
    feedback: "Correct — the sharps container belongs at the bedside so the needle never travels."
  },
  {
    text: "Washing and reusing single-use examination gloves for the next client",
    bin: "unsafe",
    feedback: "Unsafe — single-use gloves lose their barrier quality once worn; reuse transfers microbes between clients."
  },
  {
    text: "Recapping a needle after drawing blood",
    bin: "unsafe",
    feedback: "Unsafe — recapping is a leading cause of needlestick injury; drop sharps straight into the container."
  },
  {
    text: "Leaving soiled dressings on the bedside for relatives to clear away later",
    bin: "unsafe",
    feedback: "Unsafe — infectious waste is handled by trained staff into the correct colour-coded bag, never by families."
  },
  {
    text: "Throwing sharps and general waste into the same black bin bag",
    bin: "unsafe",
    feedback: "Unsafe — sharps need a puncture-proof container and infectious waste its own colour-coded bag; mixing endangers everyone downstream."
  },
  {
    text: "A puncture-proof sharps container is three-quarters full",
    bin: "action",
    feedback: "Requires further action — seal it and bring a new container; overfilled sharps bins cause the injuries they exist to prevent."
  },
  {
    text: "A splash of amniotic fluid reaches a midwife's uncovered eye during a birth",
    bin: "action",
    feedback: "Requires further action — rinse the eye immediately, report the exposure and follow the facility's post-exposure protocol."
  },
  {
    text: "The indicator strip on an autoclave pack fails to change colour after a cycle",
    bin: "action",
    feedback: "Requires further action — the load is not confirmed sterile, so reprocess it and report the failed cycle before any instrument is used."
  },
  {
    text: "A midwife notices a rash developing on her hands under her gloves",
    bin: "action",
    feedback: "Requires further action — report to the supervisor and occupational health; damaged skin is a doorway for infection."
  }
];

// ── GAME 6 · MEDICATION MATCH ────────────────────────────────
// left = class/concept · right = safety principle (principles, never doses)
export const medicationMatchPairs: MatchPair[] = [
  {
    left: "Antipyretics (fever medicines)",
    right: "Confirm when the last dose was given before repeating, and re-check the temperature afterwards"
  },
  {
    left: "Oxytocin (uterotonic)",
    right: "High-alert medicine of labour and birth — verify the indication and stay with the mother"
  },
  {
    left: "Antibiotics",
    right: "Follow the five rights and complete the prescribed course — never save or share tablets"
  },
  {
    left: "Antihypertensives",
    right: "Check the blood pressure before giving and afterwards, and report dangerous readings at once"
  },
  {
    left: "Controlled drugs (e.g. opioids)",
    right: "Double-check with a second nurse, record in the register and keep them under lock"
  },
  {
    left: "Iron supplements",
    right: "Space away from tea and coffee, and pair with vitamin C sources to aid absorption"
  },
  {
    left: "Antiretrovirals (ARVs)",
    right: "Adherence is everything — counsel without judgement and protect confidentiality"
  },
  {
    left: "Antimalarials",
    right: "Confirm the diagnosis and current local treatment guidance — never treat with leftover tablets from home"
  }
];

// ── GAME 7 · NEWBORN CHALLENGE ───────────────────────────────
// Bins: normal | concern | danger
export const newbornFindings: SortGameItem[] = [
  {
    text: "Moulding of the skull bones after a vertex birth",
    bin: "normal",
    feedback: "Normal — the skull bones overlap naturally during birth and settle within days."
  },
  {
    text: "Milia — tiny white spots across the nose",
    bin: "normal",
    feedback: "Normal — blocked sebaceous glands that vanish on their own within weeks."
  },
  {
    text: "Peeling skin on the hands and feet on day two",
    bin: "normal",
    feedback: "Normal — term skin sheds its outer layer after birth; no treatment is needed."
  },
  {
    text: "A salmon-pink 'stork bite' mark on the eyelid",
    bin: "normal",
    feedback: "Normal — a benign capillary mark that fades through the first year."
  },
  {
    text: "A term baby weighing 2.3 kg at birth",
    bin: "concern",
    feedback: "Concern — low birth weight needs vigilant feeding, warmth and weight monitoring to thrive."
  },
  {
    text: "A slightly moist cord stump with a 2 mm rim of redness at the base",
    bin: "concern",
    feedback: "Concern — early local infection; keep it clean and dry and watch closely for spreading redness or pus."
  },
  {
    text: "A yellow tinge on the face only, on day four, in a well, feeding baby",
    bin: "concern",
    feedback: "Concern — likely physiological jaundice, but track the trend: spread to the chest, palms or soles means escalation."
  },
  {
    text: "A soft heart murmur on day one in a pink, feeding baby",
    bin: "concern",
    feedback: "Concern — most day-one murmurs fade as fetal circulation closes, but every murmur needs review and follow-up."
  },
  {
    text: "Grunting with every breath and chest recession",
    bin: "danger",
    feedback: "Danger — respiratory distress: keep the baby warm, minimise handling and escalate immediately."
  },
  {
    text: "Central cyanosis of the lips and tongue",
    bin: "danger",
    feedback: "Danger — central cyanosis is never normal; assess breathing now and call for urgent help."
  },
  {
    text: "Convulsions or jerky abnormal movements",
    bin: "danger",
    feedback: "Danger — any seizure in a newborn is an emergency requiring immediate escalation."
  },
  {
    text: "The baby has fed nothing at all in the 12 hours since birth",
    bin: "danger",
    feedback: "Danger — poor or absent feeding is how newborn sepsis most often presents; urgent assessment is needed."
  }
];

// ── GAME 3 · LABOUR TIMELINE ─────────────────────────────────
// Events listed in the CORRECT order: onset of labour → birth → immediate postpartum
export const labourTimeline: TimelineEvent[] = [
  {
    text: "Show — the blood-streaked mucus plug is passed",
    feedback: "The show signals the cervix is beginning to efface and dilate; labour is usually hours away."
  },
  {
    text: "Contractions become regular and progressively stronger",
    feedback: "Regular, strengthening contractions mark true labour, unlike the irregular practice contractions of late pregnancy."
  },
  {
    text: "The membranes rupture with clear amniotic fluid",
    feedback: "Clear liquor is reassuring — meconium-stained fluid at this point would change the whole plan."
  },
  {
    text: "The cervix becomes fully dilated",
    feedback: "Ten centimetres — the first stage ends and the second stage, the bearing-down stage, begins."
  },
  {
    text: "The woman feels an overwhelming involuntary urge to bear down",
    feedback: "The Ferguson reflex — pushing with the urge is more effective and less exhausting than being told to push."
  },
  {
    text: "Crowning — the scalp becomes visible at the introitus and stays visible",
    feedback: "Crowning means birth is imminent: controlled delivery of the head, perineal support and no rushing."
  },
  {
    text: "The head is born, restitutes, and the anterior shoulder delivers",
    feedback: "Restitution aligns the shoulders; the anterior shoulder comes first, then the posterior, slowly and gently."
  },
  {
    text: "The baby is thoroughly dried, assessed for breathing and colour on the mother's abdomen",
    feedback: "Drying stimulates breathing — warmth and assessment come before any cord care."
  },
  {
    text: "The cord is clamped and cut after pulsation stops, and the baby is placed skin-to-skin, covered",
    feedback: "Delayed clamping transfers iron-rich blood to the baby; skin-to-skin warms, calms and primes breastfeeding."
  },
  {
    text: "The placenta is delivered, the fundus is massaged until firm, and the first breastfeed is supported",
    feedback: "A firm fundus is the shield against postpartum haemorrhage — fourth-stage checks follow every 15 minutes."
  }
];

// ── GAME 2 · FETAL POSITION CHALLENGE ────────────────────────
export const fetalPositionScenarios: FetalPositionScenario[] = [
  {
    scenario: "At 34 weeks you palpate a smooth, round head in the fundus with small, irregular parts just above the pubis. A long firm plane — the back — lies along the mother's left side, and the fetal heart is loudest above the umbilicus on the left.",
    lie: "Longitudinal",
    presentation: "Breech",
    position: "Left sacro-anterior",
    options: {
      lie: ["Longitudinal", "Oblique", "Transverse"],
      presentation: ["Cephalic", "Breech", "Shoulder"],
      position: ["Left sacro-anterior", "Right sacro-posterior", "Direct occipito-posterior", "Left occipito-anterior"]
    },
    explanation: "The long axis of the fetus runs with the mother's, so the lie is longitudinal. A round head in the fundus and small parts below mean the breech leads — a breech presentation. With the back along the mother's left front, the sacrum points to the left and forward: left sacro-anterior. The fetal heart heard loudest above the umbilicus confirms a breech, since the heart is best heard at the level of the fetal chest."
  },
  {
    scenario: "In established labour you feel a hard, round head deeply engaged in the pelvis. The back lies along the mother's right flank with small parts on the left, and the fetal heart is loudest below the umbilicus on the right. Vaginal examination finds the occiput in the right anterior quadrant with a well-flexed vertex.",
    lie: "Longitudinal",
    presentation: "Cephalic",
    position: "Right occipito-anterior",
    options: {
      lie: ["Longitudinal", "Oblique", "Transverse"],
      presentation: ["Cephalic", "Breech", "Shoulder"],
      position: ["Left occipito-anterior", "Right occipito-posterior", "Right occipito-anterior", "Left sacro-anterior"]
    },
    explanation: "The fetal spine parallels the mother's spine, giving a longitudinal lie. A hard round head leading into the pelvis is a cephalic — vertex — presentation. When the back is on the mother's right and the occiput lies in the right anterior quadrant of the pelvis, the position is right occipito-anterior, the mirror image of the most common LOA. A well-flexed vertex in an anterior position is the favourable arrangement labour hopes for."
  },
  {
    scenario: "At 32 weeks of antenatal palpation, the fetal head lies in the mother's right flank and the breech in her left flank. No presenting part can be felt above the inlet, and the fetal heart is loudest near the umbilicus. The small scapula is palpable anteriorly on the right of the midline.",
    lie: "Transverse",
    presentation: "Shoulder",
    position: "Right acromion-anterior",
    options: {
      lie: ["Longitudinal", "Oblique", "Transverse"],
      presentation: ["Cephalic", "Breech", "Shoulder"],
      position: ["Right acromion-anterior", "Left occipito-anterior", "Direct occipito-anterior", "Left sacro-anterior"]
    },
    explanation: "The head and breech lying in opposite flanks mean the long axis crosses the mother's abdomen — a transverse lie. The part over the inlet is the shoulder, so the presentation is shoulder. The shoulder's position is named by the acromion process of the presenting shoulder, which lies on the same side as the head: here the head and the palpable scapula are both on the right, giving a right acromion-anterior. A transverse lie beyond term cannot deliver vaginally, so it must be identified and referred in good time."
  },
  {
    scenario: "In early labour the head is engaged, but you struggle to feel the fetal back anywhere. Small parts are present on both sides of the midline, the fetal heart is loudest in the right flank, and vaginal examination finds the occiput directed toward the mother's sacrum on the right, with the sagittal suture in the right oblique diameter.",
    lie: "Longitudinal",
    presentation: "Cephalic",
    position: "Right occipito-posterior",
    options: {
      lie: ["Longitudinal", "Oblique", "Transverse"],
      presentation: ["Cephalic", "Breech", "Shoulder"],
      position: ["Direct occipito-anterior", "Right occipito-posterior", "Direct occipito-posterior", "Left sacro-anterior"]
    },
    explanation: "The fetal spine still runs parallel to the mother's, so the lie is longitudinal, and the vertex presenting means cephalic. With the back pressed against the mother's spine, small limbs fill the front on both sides of the midline — the classic silhouette of a posterior position. An occiput in the posterior quadrant with the sagittal suture in the right oblique diameter gives a right occipito-posterior position — the commonest of the occipito-posterior arrangements. These labours tend to be longer with deep backache, though most rotate to anterior as labour advances."
  }
];

// ── GAME 4 · CLINICAL PRIORITY ───────────────────────────────
// Each set: 4 findings, exactly ONE urgent
export const clinicalPrioritySets: PrioritySet[] = [
  {
    scenario: "You are checking four term babies in the newborn nursery of a district hospital two hours after birth.",
    findings: [
      {
        text: "A baby grunting with every breath, with chest recession and a rate of 70 per minute",
        urgent: true,
        feedback: "Urgent — respiratory distress in a newborn can deteriorate within minutes: keep warm, minimise handling and escalate now."
      },
      {
        text: "A baby with moulding of the skull bones after a vertex birth",
        urgent: false,
        feedback: "Not urgent — moulding is the normal overlap of skull bones and settles within days."
      },
      {
        text: "A baby with a salmon-pink birthmark on the eyelid",
        urgent: false,
        feedback: "Not urgent — a benign capillary mark that fades during the first year; just note it in the record."
      },
      {
        text: "A baby who sneezes occasionally when dust drifts through the window",
        urgent: false,
        feedback: "Not urgent — sneezing helps a newborn clear the airway; it is not a danger sign on its own."
      }
    ]
  },
  {
    scenario: "Four women attend the antenatal clinic on the same morning. You triage their findings.",
    findings: [
      {
        text: "Blood pressure 160/110 mmHg on repeat, with a severe headache and 'flashes' in her vision",
        urgent: true,
        feedback: "Urgent — severe pre-eclampsia features: she needs immediate escalation and review before eclampsia strikes."
      },
      {
        text: "Trace swelling of both ankles present for a week, unchanged",
        urgent: false,
        feedback: "Not urgent — dependent ankle oedema is common in late pregnancy unless sudden, gross, or involving face and hands."
      },
      {
        text: "Fundal height 2 cm below dates at 32 weeks with a lively fetus",
        urgent: false,
        feedback: "Not urgent today — possible growth concern needing follow-up and ultrasound, but not an emergency."
      },
      {
        text: "Heartburn at night relieved by posture changes",
        urgent: false,
        feedback: "Not urgent — heartburn is a routine discomfort of late pregnancy from uterine pressure on the stomach."
      }
    ]
  },
  {
    scenario: "You are monitoring four women in the first stage of labour in the same room.",
    findings: [
      {
        text: "A fetal heart rate of 96 beats per minute, persisting on re-check after repositioning",
        urgent: true,
        feedback: "Urgent — persistent fetal bradycardia means compromise: stay with the woman and call the midwife in charge immediately."
      },
      {
        text: "Contractions every 3 minutes lasting 45 seconds, moderate to strong",
        urgent: false,
        feedback: "Not urgent — this is effective established labour; contractions like these are exactly what progress requires."
      },
      {
        text: "A blood-stained mucus show on the pad",
        urgent: false,
        feedback: "Not urgent — the show is a normal event of labour, not a bleeding complication."
      },
      {
        text: "Deep constant backache in a known occipito-posterior position",
        urgent: false,
        feedback: "Not urgent — backache is expected with occipito-posterior positions; comfort measures and position changes help."
      }
    ]
  },
  {
    scenario: "Four postnatal women are on the ward on day one after birth. You do your evening round.",
    findings: [
      {
        text: "A pad fully soaked within 20 minutes, twice in the last hour, fundus soft",
        urgent: true,
        feedback: "Urgent — postpartum haemorrhage until proven otherwise: massage the fundus, call for help, and escalate now."
      },
      {
        text: "Afterpains during breastfeeding, relieved by simple comfort measures",
        urgent: false,
        feedback: "Not urgent — afterpains are normal uterine contractions sharpened by suckling, strongest in multigravidae."
      },
      {
        text: "Temperature of 37.2°C on the evening chart",
        urgent: false,
        feedback: "Not urgent — this is within normal limits; watch the trend rather than reacting to a single reading."
      },
      {
        text: "Moderate red lochia, smaller than a normal period pad, changing normally",
        urgent: false,
        feedback: "Not urgent — lochia rubra of this amount on day one is exactly what the puerperium should look like."
      }
    ]
  },
  {
    scenario: "At a CHPS compound child-welfare clinic, you assess four one-week-old babies.",
    findings: [
      {
        text: "A baby who feels cold to touch, has not fed in 10 hours and is floppy",
        urgent: true,
        feedback: "Urgent — hypothermia with poor feeding and floppiness is a neonatal emergency: warm, feed or refer urgently."
      },
      {
        text: "A dry, clean, blackening cord stump with no redness",
        urgent: false,
        feedback: "Not urgent — a drying, darkening stump without redness or discharge is healthy healing."
      },
      {
        text: "Yellow colour of face and chest persisting into week two, baby feeding well",
        urgent: false,
        feedback: "Not urgent yet — prolonged jaundice needs assessment and follow-up, so arrange review, but the well-feeding baby is not collapsing."
      },
      {
        text: "A baby sleeping 3-hour stretches, waking to feed 8 times a day",
        urgent: false,
        feedback: "Not urgent — this pattern of sleep and waking feeds is what healthy newborns do."
      }
    ]
  }
];

// ── GAME 9 · CASE DETECTIVE ──────────────────────────────────
export const detectiveCases: DetectiveCase[] = [
  {
    title: "The Quiet Danger: Postpartum Haemorrhage",
    intro: "You are a final-year student midwife on the postnatal side of a busy district hospital in the Eastern Region. Births are many and hands are few, so your eyes and your voice matter. Work through the case and see whether you can spot the danger before it shouts.",
    steps: [
      {
        vignette: "Madam Adjoa, 28, G3P2, gives birth to a healthy boy at 14:05 with the community midwife. At 14:25 you are asked to check on her. She is lying quietly and says she feels 'fine, just tired' — but the sheet beneath her is soaked, and the pad you are replacing was fresh ten minutes ago.",
        question: "What is the most important first recognition?",
        options: [
          "Recognise primary postpartum haemorrhage now and call for help while assessing — the clock has already started",
          "Estimate the loss as 'about normal' because she is alert and pain-free",
          "Wait thirty minutes to see whether the bleeding slows before calling anyone",
          "Assume it is a perineal tear bleeding and apply pressure to the wound site only"
        ],
        correctIndex: 0,
        explanation: "Primary postpartum haemorrhage is significant bleeding within 24 hours of birth — commonly defined as blood loss of 500 ml or more, or any loss that makes the mother's condition unstable. Visual estimation is notoriously unreliable, so soaked pads within minutes and a soaked sheet must be treated as PPH. A quiet, tired mother who 'feels fine' is how PPH hides in its early stage — shock signs arrive late. Recognition and the call for help always come first, before any single cause is assumed."
      },
      {
        vignette: "The senior midwife arrives. Together you assess: the uterus is soft and boggy, at the level of the umbilicus, and the bleeding is dark red and steady. The placenta was delivered intact ten minutes ago and looks complete on inspection. The perineum and vagina show no visible tears.",
        question: "Which cause best fits this picture?",
        options: [
          "Uterine atony — the uterus has lost its muscle tone and cannot clamp its own vessels",
          "Retained placental fragments — since the placenta was incomplete",
          "Genital tract trauma — since the bleeding is dark red",
          "A pre-existing clotting disorder of the mother"
        ],
        correctIndex: 0,
        explanation: "Remember the four Ts: Tone, Tissue, Trauma and Thrombin. A soft, boggy fundus with steady dark-red bleeding in the first hour is the signature of uterine atony — by far the commonest cause, because the contracting muscle layer normally compresses the spiral arteries like living ligatures. Retained tissue would require an incomplete placenta, and this one was intact. Trauma typically bleeds bright red even while the uterus is firm, and clotting disorders are rare and usually announced by oozing from puncture sites. Naming the cause quickly directs the whole team's response."
      },
      {
        vignette: "The senior midwife allocates tasks clearly: one nurse calls the doctor, another prepares the emergency trolley and intravenous access. She turns to you: 'You are with the mother. Report to me every few minutes.'",
        question: "What is YOUR correct role as the student, under supervision?",
        options: [
          "Massage the fundus to keep the uterus firm, stay with the mother, and report her pulse, colour, breathing and blood loss",
          "Administer the uterotonics from the emergency tray yourself, since speed matters most",
          "Step out to phone the woman's family about what is happening",
          "Write the notes in real time and leave the bedside whenever you have finished a line"
        ],
        correctIndex: 0,
        explanation: "A student's contribution in an emergency is presence, hands and voice — not independent prescribing. Rubbing up the fundus keeps the uterus contracted, emptying the bladder helps it stay so, and staying at the bedside means someone is continuously watching the mother's pulse, colour and blood loss while reporting upward. Medicines are given by authorised staff under the facility's protocol, and family communication comes after the emergency is under way. Notes are vital but written in brief, legible fragments without abandoning the woman."
      },
      {
        vignette: "Twenty minutes later the uterus is firm, bleeding has slowed to a moderate trickle, pulse is 96, blood pressure 108/66, and her colour is returning. She is tired but awake, with her baby skin-to-skin. The doctor is reviewing her now.",
        question: "What is the most appropriate follow-up?",
        options: [
          "Continue fourth-stage monitoring — vital signs, fundal tone and pad checks at frequent scheduled intervals — and document and debrief fully",
          "Discharge her home tonight since the bleeding has stopped",
          "Remove all monitoring to let her rest undisturbed until morning",
          "Skip the documentation because the emergency has passed and everyone is busy"
        ],
        correctIndex: 0,
        explanation: "The fourth stage of labour — the first 1–2 hours after birth — demands scheduled checks of vital signs, fundal tone and blood loss, because a uterus that firmed once can relax again. A woman who has had one PPH is at raised risk of recurrence, so her observations stay frequent and her status is clearly handed over. Discharging on the day of a PPH, or relaxing all monitoring, removes the safety net. Finally, thorough documentation and a debrief turn the emergency into learning, and into a flag on her record for the next birth."
      }
    ],
    debrief: "Postpartum haemorrhage is the world's leading cause of maternal death, and most of those deaths are preventable by exactly what you practised here: recognise early — remembering that visual blood loss is always underestimated — call for help immediately, then work the four Ts: Tone (massage, bladder emptying, uterotonics per protocol), Tissue (check the placenta), Trauma (examine the tract once the uterus is firm) and Thrombin (watch for failing clotting). As a student, your power is in noticing, reporting and staying present — the quiet mother on a soaked sheet is the one who needed your voice. Debrief, document, and let every case sharpen the next one."
  },
  {
    title: "The Warning Signs: A Pre-eclampsia Case",
    intro: "You are a final-year student at an antenatal clinic attached to a district hospital. Today a young first-time mother arrives for her routine visit — and the story you are about to follow is one you must be able to recognise from the first clue. Educational simulation: recognition and escalation are your tools.",
    steps: [
      {
        vignette: "Afua, 22, primigravida at 33 weeks, attends her visit. Her blood pressure is 148/96 mmHg, confirmed on repeat after rest. Her urine dipstick reads protein 2+. She mentions, almost apologetically, that her face and hands have been swollen for two days and that she has a 'stubborn headache' that rest has not touched.",
        question: "What should your recognition be?",
        options: [
          "These findings suggest pre-eclampsia with severe features — an emergency that needs immediate escalation and referral",
          "Normal pregnancy swelling and headache — she can go home and return at her next routine visit",
          "Probably malaria — treat and review next week",
          "First-time-mother anxiety — reassure her and let her wait outside"
        ],
        correctIndex: 0,
        explanation: "Pre-eclampsia is new hypertension with proteinuria after 20 weeks of gestation, and this woman has both. Facial and hand swelling, a severe headache unrelieved by rest — these are severe features, meaning the disease is moving toward eclampsia, its seizure phase. The only cure is delivery of the baby and placenta, which makes the timing a specialist decision taken in hospital. Missing the signs at this visit could cost both lives; recognising them makes you the reason she arrives in time."
      },
      {
        vignette: "As you arrange the referral, Afua's sister pulls you aside: 'Last night she was pressing her eyes and saying lights were flashing.' You re-check: blood pressure now 158/104 mmHg, brisk reflexes at the knees, urine protein 3+.",
        question: "Which finding signals she is moving toward eclampsia?",
        options: [
          "Visual disturbance with brisk reflexes and a climbing blood pressure — premonitory signs of seizures",
          "Proteinuria alone, because protein in urine always means eclampsia",
          "Brisk reflexes, because exaggerated reflexes are normal in every pregnancy",
          "Her sister's anxiety, since relatives always dramatise symptoms"
        ],
        correctIndex: 0,
        explanation: "The premonitory signs of imminent eclampsia are severe headache, visual disturbance such as flashing lights, epigastric pain, and hyperreflexia — the jittery nervous system just below its seizure threshold. A climbing pressure with rising proteinuria completes the picture of a disease accelerating. Proteinuria defines the disease but does not by itself foretell seizures, brisk reflexes are not normal in pregnancy, and a relative's report is clinical data, not noise — families often notice the change before the chart does. These signs demand escalation now, with the woman never left alone."
      },
      {
        vignette: "The referral van will take twenty minutes. Afua is placed on her left side in a quiet, dim corner of the observation room, and you are told to stay with her and keep talking to her calmly while recording her observations.",
        question: "Why the left lateral position and continuous presence?",
        options: [
          "Lying on her left side lifts the heavy uterus off the great vessels, improving blood flow to the placenta and kidneys — and someone must be watching the moment a seizure begins",
          "The left side is simply to prevent pressure sores during the wait",
          "Dim lighting and quiet are only for her comfort and have no clinical purpose",
          "Continuous presence is required just so a witness can sign the notes"
        ],
        correctIndex: 0,
        explanation: "In late pregnancy the uterus compresses the inferior vena cava when the woman lies flat, reducing venous return and placental blood flow — the left lateral position relieves that pressure and also helps her kidneys perfuse. Quiet, dim surroundings reduce the sensory stimulation that can trigger a seizure in a pre-eclamptic woman. Staying with her means the moment of eclampsia, if it comes, is met instantly: protect from injury, do not force anything into the mouth, turn her to the side, note the time and call for help. An unattended seizure is where head injury, aspiration and delay are born."
      },
      {
        vignette: "Afua reaches the district hospital and is stabilised. Two days later the team, weighing all the risks, delivers her by caesarean section. The baby is small but vigorous. On discharge, the midwife sits with Afua to explain what happened and what it means for her future.",
        question: "Which teaching point is most accurate for the discharge conversation?",
        options: [
          "She has a raised risk of pre-eclampsia in a future pregnancy — book early for antenatal care, attend every visit, and report danger signs immediately",
          "Pre-eclampsia never recurs, so ordinary care is enough next time",
          "She must avoid all future pregnancies altogether",
          "The condition was caused by her drinking too little water during pregnancy"
        ],
        correctIndex: 0,
        explanation: "A woman who has had pre-eclampsia faces a raised risk of recurrence — roughly one in six or seven in a next pregnancy — and also deserves awareness of her long-term cardiovascular health, because hypertensive disease of pregnancy marks a woman for life. The practical prescription is behavioural: book early, attend every visit, report headache, visual changes, swelling or upper abdominal pain at once, and keep a healthy blood pressure for life. Pre-eclampsia is not caused by drinking too little water, and never means future pregnancy is forbidden — it means future pregnancy is watched."
      }
    ],
    debrief: "Pre-eclampsia travels a spectrum — gestational hypertension, then pre-eclampsia, then eclampsia — and it remains a leading cause of maternal death in Ghana and worldwide. Your tools as a midwife are recognition and escalation: measure the blood pressure properly, test the urine, listen for headache, flashing lights and epigastric pain, and never normalise facial swelling in a pregnant woman. Refer early, keep the woman on her left side, keep her calm and never leave her alone, and manage any seizure by protecting the airway and calling for help. Finally, teach: early booking in the next pregnancy and lifelong blood-pressure awareness are her inheritance from this illness. You did not just pass a case today — you rehearsed the reflexes of a lifesaver."
  }
];

// ── GAME 10 · MEMORY MATCH ───────────────────────────────────
// condition → hallmark symptom
export const memoryMatchPairs: MatchPair[] = [
  {
    left: "Ectopic pregnancy",
    right: "Sharp unilateral lower abdominal pain with amenorrhoea and fainting"
  },
  {
    left: "Placenta praevia",
    right: "Painless bright vaginal bleeding after mid-pregnancy"
  },
  {
    left: "Placental abruption",
    right: "Abdominal pain with dark vaginal bleeding and a tense, woody uterus"
  },
  {
    left: "Severe pre-eclampsia",
    right: "Severe headache with blurred vision and upper abdominal pain"
  },
  {
    left: "Postpartum haemorrhage",
    right: "Heavy bleeding within 24 hours of birth, often with a soft uterus"
  },
  {
    left: "Obstructed labour",
    right: "Contractions continue but the presenting part descends no further"
  },
  {
    left: "Eclampsia",
    right: "Convulsions in a woman with high blood pressure"
  },
  {
    left: "Omphalitis (cord infection)",
    right: "Red, swollen, foul-smelling umbilical stump in a newborn"
  },
  {
    left: "Mastitis",
    right: "A painful, red, wedge-shaped area of the breast with fever"
  },
  {
    left: "Uterine rupture",
    right: "Sudden severe abdominal pain, contractions stop, and the fetal heart is lost"
  }
];

// ── GAME 1 · ANATOMY LABEL CHALLENGE ─────────────────────────
export const anatomyLabels: LabelItem[] = [
  {
    label: "Fundus",
    description: "The rounded upper part of the uterus, above the tube openings; its height above the pubis in pregnancy is used to track the baby's growth."
  },
  {
    label: "Uterine cavity",
    description: "The potential space inside the uterus that receives the implanting pregnancy and stretches as the baby grows — from a slender slit to a roomy chamber by term."
  },
  {
    label: "Fallopian tube",
    description: "The tube that carries the ovum toward the uterus; fertilisation normally happens in its widened ampulla."
  },
  {
    label: "Ovary",
    description: "The almond-shaped organ that stores and releases ova and produces the hormones oestrogen and progesterone."
  },
  {
    label: "Cervix",
    description: "The narrow, lower neck of the uterus opening into the vagina; it dilates in labour and produces cycle-changing mucus."
  },
  {
    label: "Vagina",
    description: "The muscular, elastic birth canal between the cervix and the vulva, which stretches during birth and returns to shape afterwards."
  },
  {
    label: "Endometrium",
    description: "The inner lining of the uterus that thickens each cycle for implantation and is shed as menstruation if no pregnancy occurs."
  },
  {
    label: "Myometrium",
    description: "The thick middle muscle layer of the uterine wall; its contractions birth the baby and clamp the vessels to prevent bleeding afterwards."
  }
];
