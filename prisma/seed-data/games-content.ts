import type { MatchPair, TimelineEvent, SortGameItem, GcsScenario, PrioritySet, DetectiveCase, LabelItem } from "./types";

// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — GAMES CONTENT
// Educational game data: infection control, medications, newborn findings,
// the nursing process (ADPIE) timeline, Glasgow Coma Scale scenarios,
// clinical priority, case detective, memory match and anatomy labels.
// Recognition + referral focus, no doses.
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
    text: "A splash of blood reaches a nurse's uncovered eye during an emergency procedure",
    bin: "action",
    feedback: "Requires further action — rinse the eye immediately, report the exposure and follow the facility's post-exposure protocol."
  },
  {
    text: "The indicator strip on an autoclave pack fails to change colour after a cycle",
    bin: "action",
    feedback: "Requires further action — the load is not confirmed sterile, so reprocess it and report the failed cycle before any instrument is used."
  },
  {
    text: "A nurse notices a rash developing on her hands under her gloves",
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
    left: "Antibiotics",
    right: "Follow the five rights and complete the prescribed course — never save or share tablets"
  },
  {
    left: "Insulin",
    right: "High-alert ward medicine — verify the dose, the timing and the blood glucose, and watch for hypoglycaemia afterwards"
  },
  {
    left: "Metformin",
    right: "Give with meals to protect the stomach, and flag the sick days when eating and drinking stop"
  },
  {
    left: "IV fluids (e.g. normal saline)",
    right: "Confirm the prescribed rate, check the drip and the infusion site, and watch the limb for swelling"
  },
  {
    left: "Adrenaline (epinephrine)",
    right: "The anaphylaxis emergency medicine — know where the emergency tray keeps it and check its expiry"
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
    left: "Oral rehydration salts (ORS)",
    right: "Start early at the first sign of diarrhoea, mix the sachet in the correct amount of water and keep feeding"
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

// ── GAME 3 · NURSING PROCESS TIMELINE (ADPIE) ────────────────
// Events listed in the CORRECT order: assessment → diagnosis → planning →
// implementation → evaluation, with the real ward steps between them
export const nursingProcessTimeline: TimelineEvent[] = [
  {
    text: "Assessment — collect the data: the history, the head-to-toe examination and the vital signs",
    feedback: "Assessment gathers every subjective and objective clue — what the patient tells you and what you measure. It is continuous, not a one-time entrance."
  },
  {
    text: "Cluster the cues — group the wound drainage, the fever and the rising pulse into meaningful patterns",
    feedback: "Clustering links related data so problems can be named — one wound infection, not three separate findings."
  },
  {
    text: "State the nursing diagnosis — 'Risk for infection related to impaired skin integrity'",
    feedback: "The nursing diagnosis names the patient's actual or potential response to the health problem — it is about the patient, not the disease label alone."
  },
  {
    text: "Prioritise — life-threatening problems first, then safety, then teaching and comfort",
    feedback: "Prioritising with ABC logic (airway, breathing, circulation) means the infection and the pain are addressed before discharge teaching."
  },
  {
    text: "Set the goals with the patient — 'the wound will show healthy granulation within seven days'",
    feedback: "SMART goals — specific, measurable, achievable, relevant and time-bound — are written with the patient, not about them."
  },
  {
    text: "Choose the interventions — wound care technique, the prescribed medicines, positioning and education",
    feedback: "Every intervention flows directly from the nursing diagnosis and the goal — each one has a reason you can state out loud."
  },
  {
    text: "Implement — carry out the care with five-rights checks, aseptic technique and teach-back",
    feedback: "Implementation loops assessment again: check the patient before, during and after each intervention, and document in real time."
  },
  {
    text: "Evaluate — measure the wound and compare today's findings against the goals that were set",
    feedback: "Evaluation compares outcomes with goals — is the wound smaller, the fever settled, the patient able to explain the dressing?"
  },
  {
    text: "Revise the plan — reassess what changed, keep what worked, change what did not, and document",
    feedback: "The nursing process is a cycle: a revised plan restarts the journey with better data — that is what makes it a process and not a checklist."
  }
];

// ── GAME 2 · GCS CHALLENGE (GLASGOW COMA SCALE) ──────────────
export const gcsScenarios: GcsScenario[] = [
  {
    scenario: "Madam Akua, 70, was found on the floor of her room at dawn after a night fall, and her daughter has brought her to the district hospital. She does not open her eyes to your voice, but when you press her nail bed her eyes open. She talks with you in sentences, but she is confused — she calls you her daughter and asks whether the market is over. When you keep the pressure on her nail bed, she reaches up with her hand and firmly pushes your fingers away.",
    eye: "Opens eyes to pain — E2",
    verbal: "Confused conversation — V4",
    motor: "Localises pain — M5",
    options: {
      eye: ["Opens eyes spontaneously — E4", "Opens eyes to voice — E3", "Opens eyes to pain — E2", "No eye opening — E1"],
      verbal: ["Oriented conversation — V5", "Confused conversation — V4", "Inappropriate words — V3", "Incomprehensible sounds — V2"],
      motor: ["Obeys commands — M6", "Localises pain — M5", "Withdraws from pain — M4", "Abnormal extension — M2"]
    },
    explanation: "Eyes that open only to a painful stimulus score E2 — spontaneous would be E4, to voice E3, none E1. She converses in sentences but is disoriented, which is V4, one step below the V5 of a fully oriented person. Reaching up to push your hand away is purposeful removal of the stimulus — localising pain, M5. The sum: 2 + 4 + 5 = GCS 11 out of 15 — a moderate injury. Chart it exactly as E2 V4 M5 = 11/15, because the components, not just the total, let the next nurse score her the same way — and a falling trend on your scheduled observations is the loudest early warning a head injury gives."
  },
  {
    scenario: "Mr. Mensah, 34, struck his head on a door frame when the lights went out during a dumsor night, and his neighbours have walked him in. As you call his name his eyes open, and they stay open while you speak with him. He tells you correctly that he is at the district hospital, what day it is, and how the injury happened — though he speaks slowly and repeats himself. When you ask him to raise both arms and squeeze your fingers, he does both without hesitation.",
    eye: "Opens eyes to voice — E3",
    verbal: "Oriented conversation — V5",
    motor: "Obeys commands — M6",
    options: {
      eye: ["Opens eyes spontaneously — E4", "Opens eyes to voice — E3", "Opens eyes to pain — E2", "No eye opening — E1"],
      verbal: ["Oriented conversation — V5", "Confused conversation — V4", "Inappropriate words — V3", "Incomprehensible sounds — V2"],
      motor: ["Obeys commands — M6", "Localises pain — M5", "Withdraws from pain — M4", "Abnormal extension — M2"]
    },
    explanation: "Eyes opening when called — rather than waiting for pain — is E3; they would be E4 only if they were already open as you approached. He knows person, place, time and event: oriented conversation, V5. Obeying your commands exactly is M6, the top of the motor scale. The sum: 3 + 5 + 6 = GCS 14 out of 15 — mild. But 'mild' on paper is not 'safe' in practice: every head injury, however small, goes onto scheduled observations, because bleeding inside the skull can whisper before it shouts — and the GCS trend is how you hear it early. Teach him and his neighbours the danger signs before he goes home."
  },
  {
    scenario: "Mr. Fuseini, 45, was thrown from an okada on the main road and brought in lying across a taxi seat. He does not open his eyes to your voice. When you press his nail bed his eyes open, but he speaks no words — only deep, wordless moans each time the pressure comes. His arm does not reach for your hand: it pulls away and turns from the stimulus, but never rises to stop it.",
    eye: "Opens eyes to pain — E2",
    verbal: "Incomprehensible sounds — V2",
    motor: "Withdraws from pain — M4",
    options: {
      eye: ["Opens eyes spontaneously — E4", "Opens eyes to voice — E3", "Opens eyes to pain — E2", "No eye opening — E1"],
      verbal: ["Oriented conversation — V5", "Confused conversation — V4", "Inappropriate words — V3", "Incomprehensible sounds — V2"],
      motor: ["Obeys commands — M6", "Localises pain — M5", "Withdraws from pain — M4", "Abnormal extension — M2"]
    },
    explanation: "Eyes opening only to pain is E2. Wordless moaning — sounds without any recognisable word — is V2; V3 would be occasional inappropriate words, and V5 and V4 both need conversation. An arm that escapes the stimulus without ever reaching to remove it is withdrawal, M4 — one step below the purposeful localisation of M5, and far above the stiffness of M3 and M2. The sum: 2 + 2 + 4 = GCS 8 out of 15 — severe, and sitting exactly on the most famous line in trauma teaching: a GCS of 8 or below means the patient cannot be trusted to protect their own airway. Position, suction readiness, oxygen per protocol and urgent help — this is the score that moves everything."
  },
  {
    scenario: "Mr. Darko, 60, was found unresponsive at home and rushed in by his sons. He does not open his eyes to your voice, to a firm nail-bed press, or to the painful squeeze of the trapezius muscle. No words or conversation come from him — only a low, wordless groan that rises with each stimulation. When the nail-bed pressure continues, both arms stiffen and stretch out straight beside him, wrists bent inward.",
    eye: "No eye opening — E1",
    verbal: "Incomprehensible sounds — V2",
    motor: "Abnormal extension — M2",
    options: {
      eye: ["Opens eyes spontaneously — E4", "Opens eyes to voice — E3", "Opens eyes to pain — E2", "No eye opening — E1"],
      verbal: ["Oriented conversation — V5", "Confused conversation — V4", "Inappropriate words — V3", "Incomprehensible sounds — V2"],
      motor: ["Obeys commands — M6", "Localises pain — M5", "Withdraws from pain — M4", "Abnormal extension — M2"]
    },
    explanation: "No eye opening even to pain is E1, the floor of the eye scale. Only groans, never words — V2 again, but now paired with the deepest motor sign: arms stretched straight out and stiff with wrists bent inward is abnormal extension, M2 — the decerebrate pattern that points to pressure on the brainstem itself, deeper than the bent-inward flexion of M3. The sum: 1 + 2 + 2 = GCS 5 out of 15 — severe. The lowest possible score is 3 (E1 V1 M1). At this depth your precision matters most of all: the pattern of extension tells the team where the injury presses, the trend tells them which way it is moving, and your repeated, exact scoring is the patient's voice until he recovers his own."
  }
];

// ── GAME 4 · CLINICAL PRIORITY ───────────────────────────────
// Each set: 4 findings, exactly ONE urgent
export const clinicalPrioritySets: PrioritySet[] = [
  {
    scenario: "You are doing the evening round on a male medical ward. Four patients call for your attention.",
    findings: [
      {
        text: "Mr. Owusu, 62, pressing his fist to his chest — a crushing central pain for the last 10 minutes, pale and sweating",
        urgent: true,
        feedback: "Urgent — crushing central chest pain with sweating is a heart attack until proven otherwise: stay with him, alert the nurse in charge and get the ECG pathway moving now."
      },
      {
        text: "Mr. Boakye asking whether his evening tablets can come early because visitors have arrived",
        urgent: false,
        feedback: "Not urgent — a timing request; medicines go by prescription times, and a polite explanation with his routine care will do."
      },
      {
        text: "Mr. Nkrumah reporting a mild headache after his afternoon nap, blood pressure 128/78 on re-check",
        urgent: false,
        feedback: "Not urgent — a normal reading with a mild post-nap headache calls for comfort and observation, not alarm."
      },
      {
        text: "Mr. Quaye whose intravenous cannula site is slightly tender, with no redness, swelling or warmth",
        urgent: false,
        feedback: "Not urgent — a cannula site with no phlebitis signs is checked at the scheduled times; document what you saw."
      }
    ]
  },
  {
    scenario: "Four patients with diabetes share the end of the ward. It is 06:00 and breakfast is late.",
    findings: [
      {
        text: "Madam Yaa, on evening insulin, is sweating, trembling and suddenly confused — the glucose meter reads 2.4 mmol/L",
        urgent: true,
        feedback: "Urgent — hypoglycaemia with confusion: give fast-acting sugar per protocol now, stay with her and recheck in 15 minutes."
      },
      {
        text: "Mr. Mensah, whose bedtime glucose was 8.2 mmol/L, asking for extra tea because he feels hungry",
        urgent: false,
        feedback: "Not urgent — hunger with a stable glucose is breakfast territory, not an emergency."
      },
      {
        text: "Madam Adjoa complaining of a dry mouth since the fan has been on all night",
        urgent: false,
        feedback: "Not urgent — offer water and mouth care; a dry mouth alone in a stable patient is comfort care."
      },
      {
        text: "Mr. Tetteh, due for his morning insulin, waiting calmly for the meal tray to arrive before eating",
        urgent: false,
        feedback: "Not urgent — insulin is timed to food; a patient correctly waiting for his meal is doing it right."
      }
    ]
  },
  {
    scenario: "You are checking four patients during the fever round on a medical ward.",
    findings: [
      {
        text: "Madam Comfort, day 5 on the ward: temperature 39.4°C, pulse 118, breathing 26, blood pressure 92/58 — and newly confused about where she is",
        urgent: true,
        feedback: "Urgent — the sepsis picture: fever, racing pulse, fast breathing, falling pressure and new confusion. Escalate now and start the sepsis pathway per protocol."
      },
      {
        text: "Mr. Darko with a temperature of 37.4°C after his evening tea, pulse 84, breathing 18",
        urgent: false,
        feedback: "Not urgent — these numbers sit in the safe range; continue routine observations and watch the trend."
      },
      {
        text: "Mr. Fuseini whose wound dressing is due for change today — the wound is clean and dry",
        urgent: false,
        feedback: "Not urgent — a clean wound due for a routine dressing change is scheduled care, not a crisis."
      },
      {
        text: "Madam Afia reporting a mild sore throat with no fever, swallowing normally",
        urgent: false,
        feedback: "Not urgent — comfort measures, fluids and observation; escalate if swallowing becomes painful or fever joins in."
      }
    ]
  },
  {
    scenario: "Four patients are on their first day after surgery. You do the 22:00 round.",
    findings: [
      {
        text: "Mr. Boateng's dressing is soaked with fresh blood and his drain has filled again — pulse 112, blood pressure 96/60, skin pale and cool",
        urgent: true,
        feedback: "Urgent — post-operative bleeding with shock signs: call for help, apply firm pressure and monitor continuously while the team is summoned."
      },
      {
        text: "Mr. Okai asking for a position change because his wound aches when he lies on that side",
        urgent: false,
        feedback: "Not urgent — positioning and prescribed analgesia are the routine answers to wound ache after surgery."
      },
      {
        text: "Madam Eshun passing flatus and sipping water happily after her appendicectomy",
        urgent: false,
        feedback: "Not urgent — flatus and tolerated sips are the bowel announcing its return; chart and encourage."
      },
      {
        text: "Mr. Tetteh with mild nausea that has not stopped him taking oral sips",
        urgent: false,
        feedback: "Not urgent — mild post-operative nausea is common; observe, comfort per instruction, and watch that it does not progress to vomiting."
      }
    ]
  },
  {
    scenario: "In the children's ward, four beds need your evening check.",
    findings: [
      {
        text: "Elikem, 6, wheezing so hard he cannot finish a sentence, sitting upright and using his neck and shoulder muscles to breathe",
        urgent: true,
        feedback: "Urgent — a severe asthma attack sits upright and cannot speak in sentences: give the reliever per protocol, oxygen per protocol and call for urgent review now."
      },
      {
        text: "Adjoa, 4, with a runny nose and mild cough, playing with her toys in bed",
        urgent: false,
        feedback: "Not urgent — a runny nose with an active, playing child is the common cold, watched with routine care."
      },
      {
        text: "Kwabena, 2, drinking oral rehydration salts happily between episodes of loose stool",
        urgent: false,
        feedback: "Not urgent — a child drinking well and playing between stools is managing his diarrhoea exactly as taught; continue ORS and feeding."
      },
      {
        text: "Nhyira, 5 months, sleeping peacefully, due for her vaccination tomorrow morning",
        urgent: false,
        feedback: "Not urgent — a sleeping, well baby awaiting a scheduled vaccination is routine care; let her sleep."
      }
    ]
  }
];

// ── GAME 9 · CASE DETECTIVE ──────────────────────────────────
export const detectiveCases: DetectiveCase[] = [
  {
    title: "The Quiet Danger: Sepsis on Ward B",
    intro: "You are a final-year student nurse on the male surgical ward of a busy district hospital in the Eastern Region. The ward is full and the night is long, so your eyes and your voice matter. Work through the case and see whether you can spot the danger before it shouts.",
    steps: [
      {
        vignette: "Mr. Kwabena Mensah, 68, is on day three after hernia repair. Yesterday he was chatting with you about his grandchildren and walking to the window. At your 20:00 round he is strangely quiet. He asks twice where he is, his breathing seems a little quick, and his observations read: temperature 38.9°C, pulse 112, blood pressure 98/60, breathing rate 24. The ward is busy, and the evening nurse says he was 'fine at lunch'.",
        question: "What is the most important first recognition?",
        options: [
          "Recognise possible sepsis now and escalate — the clock has already started",
          "Attribute it to normal post-operative tiredness, since he walked to the window yesterday",
          "Wait until the morning review to see whether the pattern is real",
          "Treat it as malaria and give paracetamol, since harmattan fevers are common"
        ],
        correctIndex: 0,
        explanation: "Sepsis is the body's overwhelming response to infection, and it rarely announces itself with drama — it whispers first. New confusion, a fever, a pulse above 110, breathing above 22 and a blood pressure drifting down: that whisper is the whole picture. On track-and-trigger charts these crossings would already have rung the alert line — and the respiratory rate is often the very first vital sign to change, long before the blood pressure falls. 'He was fine at lunch' is exactly how deterioration stories begin; the trend is the truth, not a single reassuring memory. Recognition and the call for help come first, and they cost nothing but attention."
      },
      {
        vignette: "The senior nurse arrives and reviews him with you. The wound looks clean and closed, but a urinary catheter placed during surgery is still in situ, day three now. His urine is dark, scanty and slightly cloudy, his mouth is dry, and he has drunk little today. Repeat observations: temperature 39.2°C, pulse 118, breathing 26, blood pressure 92/58.",
        question: "Which source of infection best fits this picture?",
        options: [
          "A urinary tract infection from the catheter — fever, confusion and cloudy urine in an older man with a device in place",
          "The surgical wound — because the fever started after surgery",
          "Simple dehydration — because his mouth is dry and he has not drunk",
          "A reaction to the evening medication — because he became confused at night"
        ],
        correctIndex: 0,
        explanation: "Fever with new confusion in an older man whose catheter has stayed in place points strongly to a catheter-associated urinary tract infection — one of the commonest hospital-acquired infections, and one that hides below the sheet. A clean, closed wound makes a wound source less likely, dehydration is real but is a consequence rather than the cause, and confusion after evening medication does not explain fever, fast breathing and falling blood pressure together. Naming the likeliest source directs the team's next moves — cultures per protocol, the doctor's review, and a conversation about whether the catheter still earns its place. The nurse's question, 'does this device still need to be here?', prevents more sepsis than any single medicine."
      },
      {
        vignette: "The senior nurse allocates tasks clearly: one nurse calls the doctor, another prepares the emergency trolley and takes the blood samples for culture per protocol, another starts the prescribed intravenous fluids. She turns to you: 'Stay with Mr. Mensah. Watch his breathing, his pressure and his urine output, and report to me every few minutes.'",
        question: "What is YOUR correct role as the student, under supervision?",
        options: [
          "Stay at the bedside, monitor his observations and urine output, keep him calm and safe, and report upward using SBAR",
          "Give the first dose of antibiotics from the ward stock yourself, since speed matters most",
          "Step out to phone his family about what is happening",
          "Write the full notes now and leave the bedside once the page is finished"
        ],
        correctIndex: 0,
        explanation: "A student's contribution in an emergency is presence, hands and voice — not independent prescribing. Staying at the bedside means someone is continuously watching the breathing, the blood pressure and the urine output while reporting upward, and keeping a frightened, confused patient calm and safe. Medicines, fluids and cultures are given and taken by authorised staff under the facility's protocol — speed lives in the team, not in shortcuts. Family communication comes after the emergency is under way, and notes are written in brief, legible fragments without abandoning the man. If his breathing rises or his pressure drops again, you are the one who will see it first — that is the job."
      },
      {
        vignette: "By midnight Mr. Mensah has been reviewed, the sepsis pathway is running, and his observations are settling: temperature 37.8°C, pulse 96, breathing 20, blood pressure 104/62. He recognises you and asks for water. The senior nurse tells you his observations must now be scheduled, documented and handed over carefully.",
        question: "What is the most appropriate follow-up?",
        options: [
          "Continue scheduled observations and urine output monitoring, document fully, and hand over clearly — including the catheter conversation",
          "Relax the monitoring, since the antibiotics have started and he is improving",
          "Plan his discharge home tomorrow, since the fever settled overnight",
          "Skip the documentation because the emergency has passed and the night is busy"
        ],
        correctIndex: 0,
        explanation: "Sepsis can relapse, and a patient who has been septic once is watched more closely, not less — scheduled observations, strict fluid balance and urine output, and a clear handover so the morning shift inherits the whole story, not a summary of one good moment. The catheter that probably started it all must be reviewed for removal, not silently left in place — and that conversation belongs in the notes. Discharge on the day after sepsis began settling removes the safety net, and undocumented care is invisible care: what is not written did not happen. Finally, a debrief with the team turns the emergency into learning — for you, and for the next quiet man on the ward."
      }
    ],
    debrief: "Sepsis remains one of the fastest, quietest killers on any ward — and most of those deaths are preventable with exactly what you practised here: notice the trend (new confusion, a climbing breathing rate, fever, a falling blood pressure), escalate early, hunt the source (including the devices we ourselves placed — catheters, cannulas, lines), and never leave the patient unwatched while the protocol runs. The respiratory rate is your earliest sentinel — it rises before everything else. Trust the quiet ones: the patient who suddenly becomes confused, drowsy or 'not himself' is talking to you in the only voice sepsis allows him. Document, hand over, and let every case sharpen the next one."
  },
  {
    title: "The Warning Signs: A Chest Pain Case",
    intro: "You are a final-year student on a busy female medical ward at night in a district hospital in the Ashanti Region. A market trader was admitted this afternoon with 'stomach upset'. The story you are about to follow is one you must be able to recognise from the first clue. Educational simulation: recognition and escalation are your tools.",
    steps: [
      {
        vignette: "Madam Akosua, 58, was admitted with 'gastritis' after two days of upper abdominal discomfort following market day. At 22:10 she presses the call bell. She is sitting forward, pale and sweaty, one hand pressed to her chest: a heavy, pressing pain across the front of her chest for the last twenty minutes, with nausea and a tingling down her left arm. She apologises for bothering you.",
        question: "What should your recognition be?",
        options: [
          "Treat this as a possible heart attack now — call for help while she stays still; this is not 'gastritis' until an ECG says so",
          "Acid reflux from her evening meal — antacid and let her sleep",
          "Wait fifteen minutes to see whether the pain passes before calling anyone",
          "Anxiety about being in hospital — reassure her and dim the lights"
        ],
        correctIndex: 0,
        explanation: "Heavy, pressing central chest pain lasting more than fifteen minutes, with sweating, nausea or radiation to the arm, is a heart attack — a myocardial infarction — until an ECG proves otherwise. Women, older adults and people living with diabetes often present atypically: pressure rather than stabbing pain, 'gas', jaw or back discomfort, or simply sudden tiredness — which is exactly how a heart attack dresses up as gastritis. Her polite apology is the most dangerous symptom in the room: women minimise their own emergencies. Recognition is free and instant, and the ECG belongs in the first ten minutes of it."
      },
      {
        vignette: "You call the nurse in charge. Together you settle her upright, and the observations read: pulse 96, blood pressure 152/94, oxygen saturation 95%. She is still pale and sweaty, and the pain has not eased. Her folder shows hypertension diagnosed two years ago — and a note that she stops her tablets whenever she 'feels fine', because 'hospital medicine is for sick people'. Her blood sugar tonight is normal.",
        question: "Which feature makes this an emergency rather than routine chest discomfort?",
        options: [
          "Prolonged heavy pressure with sweating and arm tingling in a hypertensive woman — the acute coronary syndrome picture",
          "The pain is above the navel, which always means the heart",
          "Her history of stomach upset, which explains everything",
          "The blood pressure reading alone, since it is high tonight"
        ],
        correctIndex: 0,
        explanation: "The emergency pattern is the combination: twenty minutes of heavy central pressure, autonomic signs — pallor, sweating, nausea — radiation to the arm, in a 58-year-old woman with untreated hypertension: her risk engine has been running for years. Pain location alone never settles the question, because the heart and the stomach share nerve pathways — which is exactly why 'gastritis' mislabels so many hearts. A single high blood pressure reading is a number, not a diagnosis. Untreated hypertension quietly damages the coronary arteries for years before the day it presents as 'gas' after market. Tonight the ECG, the troponin pathway and the doctor decide; your part is to recognise and not explain away."
      },
      {
        vignette: "The nurse in charge calls the doctor and turns to you with clear instructions. You note the exact time the pain began — 21:50 — and record that she has received nothing for it.",
        question: "What is YOUR correct role as the student, under supervision?",
        options: [
          "Keep her still and calm, prepare the ECG machine and the emergency trolley, monitor her observations, and report any change immediately",
          "Walk her slowly to the nurses' station for closer observation",
          "Give her the glyceryl trinitrate from the trolley yourself to see whether the pain responds",
          "Tell her to breathe deeply and push through the pain while the doctor travels"
        ],
        correctIndex: 0,
        explanation: "Time is muscle: every minute of a blocked coronary artery costs surviving heart muscle — which is why the time of pain onset (21:50) is charted and why the ECG and the doctor's pathway begin the moment recognition does. A patient with a possible infarction stays still and calm, because activity raises the heart's oxygen demand; walking her anywhere is the opposite of care. Preparing the ECG machine and the emergency trolley is exactly a student's hands doing useful work; medicines that affect blood pressure and the heart are given by authorised staff under prescription, never tested by a student. And 'pushing through' chest pain is the sentence that turns a salvageable heart into a memorial."
      },
      {
        vignette: "The ECG shows changes confirming injury; the doctor arrives, the pathway runs, and Madam Akosua is stabilised and prepared for transfer to the regional hospital. Before the ambulance leaves, the ward sister asks you to sit with her for a short teaching conversation, because she will be back on this ward one day.",
        question: "Which teaching point is most accurate for that conversation?",
        options: [
          "Her blood pressure medicine is for life — never stopped when she feels fine — and any new chest discomfort means come at once",
          "One treated heart attack means the heart is now cured; ordinary care is enough",
          "She should avoid all walking and exertion for the rest of her life",
          "The attack was caused by the pepper in her evening soup, so diet alone will prevent another"
        ],
        correctIndex: 0,
        explanation: "Hypertension is silent — that is its cruelty: she felt fine precisely while her arteries were being damaged, so the tablets are for life and 'feeling fine' is never a reason to stop them. After a heart attack the heart is scarred, not cured: follow-up, protective medicines and gradual guided walking — cardiac rehabilitation — are the lifelong plan, and the heart strengthens with gentle exercise, not with bed rest forever. Any new chest pressure, at rest or with market loads, means come at once — time is muscle again. Pepper did not do this; years of untreated pressure did. Teach the family too: the person who cooks controls the salt and oil of the whole house."
      }
    ],
    debrief: "Heart disease is now one of Ghana's leading causes of death, and it arrives on medical wards dressed as 'gastritis', 'gas' or 'tiredness' — especially in women and in people living with diabetes. Your tools are recognition and escalation: new heavy chest pressure lasting more than fifteen minutes, with sweating, nausea or radiation to the arm or jaw, is an acute coronary syndrome until the ECG says otherwise; the ECG belongs in the first ten minutes; the patient stays still, calm and monitored; and the time of onset is charted because the whole treatment pathway is timed from it. Then teach: pressure medicines are for life, salt is a family decision, and chest discomfort is never 'bothering the nurse'. She apologised for calling you. Your recognition is the reason that apology did not cost her heart."
  }
];

// ── GAME 10 · MEMORY MATCH ───────────────────────────────────
// condition → hallmark symptom
export const memoryMatchPairs: MatchPair[] = [
  {
    left: "Myocardial infarction (heart attack)",
    right: "Crushing central chest pain with sweating, radiating to the arm"
  },
  {
    left: "Stroke",
    right: "Sudden face droop, one-sided weakness and slurred speech"
  },
  {
    left: "Sepsis",
    right: "Fever with fast breathing, a racing pulse and new confusion"
  },
  {
    left: "Hypoglycaemia",
    right: "Sweating, trembling and sudden confusion in a patient on insulin"
  },
  {
    left: "Diabetic ketoacidosis (DKA)",
    right: "Deep sighing breathing, vomiting and a fruity smell on the breath"
  },
  {
    left: "Severe asthma attack",
    right: "Sitting upright, wheezing, too breathless to finish a sentence"
  },
  {
    left: "Anaphylaxis",
    right: "Swelling of the lips and throat with an itchy rash after a medicine or sting"
  },
  {
    left: "Wound infection",
    right: "A red, hot, tender surgical wound with fever and discharge"
  },
  {
    left: "Hypovolaemic shock",
    right: "A rising pulse with falling blood pressure and cold, clammy skin"
  },
  {
    left: "Pressure injury (stage 1)",
    right: "A reddened area over a bony point that does not turn pale when pressed"
  }
];

// ── GAME 1 · ANATOMY LABEL CHALLENGE ─────────────────────────
export const anatomyLabels: LabelItem[] = [
  {
    label: "Fundus",
    description: "The rounded upper part of the uterus, above the tube openings; its height above the pubis in pregnancy is used to follow the baby's growth."
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
    description: "The muscular, elastic canal between the cervix and the vulva, which stretches during birth and returns to shape afterwards."
  },
  {
    label: "Endometrium",
    description: "The inner lining of the uterus that thickens each cycle for implantation and is shed as menstruation if no pregnancy occurs."
  },
  {
    label: "Myometrium",
    description: "The thick middle muscle layer of the uterine wall; its contractions deliver the baby and clamp the vessels to prevent bleeding afterwards."
  }
];
