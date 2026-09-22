import type { SeedQuestion } from "./types";

// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — QUESTION BANK
// 48 exam-grade questions covering the full 4-year BSc Nursing journey (Ghana).
// Style: prioritization, interpretation, exception and scenario questions — no "What is X?" drilling.
// Safety: no doses; recognition + escalation focus; Ghanaian district-hospital context.
// Mix: 18 MCQ · 16 CLINICAL_SCENARIO · 6 TRUE_FALSE · 4 MULTI_SELECT · 4 ORDERING
// ─────────────────────────────────────────────────────────────

export const questionBank: SeedQuestion[] = [
  // ── YEAR 1 · ANATOMY & PHYSIOLOGY (4) ───────────────────────
  {
    topic: "Pelvic Anatomy",
    type: "MCQ",
    difficulty: "Easy",
    stem: "During a health talk at a community clinic on preventing falls and hip injuries, a student nurse is explaining the hip region to a group of market women. Which of the following is NOT part of the bony pelvis?",
    options: ["Ilium", "Ischium", "Pubis", "Femur"],
    correctIndex: 3,
    explanation: "The bony pelvis is formed by the two hip bones — each a fusion of ilium, ischium and pubis — together with the sacrum and coccyx at the back. The femur is the long thigh bone; it forms the hip joint with the acetabulum of the pelvis but is not part of the pelvis itself. Knowing the pelvic bones matters daily in general nursing: the iliac crest guides safe injection sites, the sacrum and heels are the landmarks checked during pressure-area care, and a broken femur at the hip is the classic injury of elderly women who fall. The three hip-bone components in the other options are all genuinely pelvic bones.",
    whyOthers: {
      "A": "The ilium is the large, flared upper portion of each hip bone and is very much part of the bony pelvis — its crest is a landmark for injections and examinations.",
      "B": "The ischium forms the lower, posterior part of the hip bone — the part that bears weight when a person sits — so it belongs to the pelvis.",
      "C": "The pubis is the front portion of each hip bone, meeting its partner at the pubic symphysis in the midline of the lower abdomen."
    },
    courseSlug: "anatomy-physiology-1"
  },
  {
    topic: "Apex Beat Location",
    type: "CLINICAL_SCENARIO",
    difficulty: "Easy",
    stem: "On a medical ward in a district hospital, a student nurse is asked to locate and mark a patient's apex beat before the evening round. She places her flat fingers below the patient's right clavicle and feels nothing pulsing. Her preceptor corrects her. Where should she be palpating, and why does the spot matter?",
    options: [
      "At the fifth intercostal space on the left, at the mid-clavicular line — where the tip of the left ventricle taps the chest wall, and where a displaced beat signals a strained or enlarged heart",
      "Anywhere along the left side of the chest, since the whole heart has a pulse",
      "Over the middle of the sternum, where all four heart chambers meet",
      "Below the right clavicle, where the aorta begins its journey to the body"
    ],
    correctIndex: 0,
    explanation: "The apex beat is the lowest, outermost point at which the heart's contraction strikes the chest wall — normally at the fifth intercostal space on the left, at the mid-clavicular line, at the tip of the left ventricle. Finding it needs only fingers: count down from the sternal angle or feel just below the left nipple line. Its value is as a free bedside monitor: a beat displaced downwards and outwards suggests an enlarged or failing heart, and a weak or impalpable apex adds to a shock picture. She felt nothing on the right because the heart's apex lives on the left — the right chest holds the chambers' edges, not their beat.",
    whyOthers: {
      "B": "'Anywhere on the left' wastes the precision that makes the apex beat useful — it is one defined point, and tracking its displacement is the clinical point.",
      "C": "The sternum overlies the heart's midline structures; the apex — the part you can actually feel tapping — sits to the left of it.",
      "D": "The aorta arches behind the sternum towards the left; no pulsing apex beat lives below the right clavicle."
    },
    courseSlug: "anatomy-physiology-1"
  },
  {
    topic: "Kidney Position",
    type: "TRUE_FALSE",
    difficulty: "Easy",
    stem: "The right kidney normally sits slightly lower in the abdomen than the left kidney. True or False?",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "This is true. The large right lobe of the liver pushes the right kidney down a little, so it sits slightly lower than the left, which tucks up under the spleen. Nurses meet this anatomy at the bedside: the costovertebral angle — the corner between the twelfth rib and the spine — is where kidney tenderness is checked with gentle percussion, and knowing which kidney lives where explains right-sided versus left-sided flank findings on examination and on ultrasound reports. Expecting perfect symmetry misreads a normal body.",
    whyOthers: {
      "B": "'False' is incorrect — the liver's bulk makes the right kidney the lower of the pair; the asymmetry is normal, not a disorder."
    },
    courseSlug: "anatomy-physiology-1"
  },
  {
    topic: "Cardiac Circulation",
    type: "ORDERING",
    difficulty: "Moderate",
    stem: "A tutor at a nursing college asks a Year 1 class to trace the path of blood through the heart, starting where deoxygenated blood enters the heart. Arrange the steps in the correct order.",
    options: [
      "Deoxygenated blood enters the right atrium from the superior and inferior vena cava",
      "It passes through the tricuspid valve into the right ventricle",
      "The right ventricle pumps it through the pulmonary valve into the pulmonary artery to the lungs",
      "Oxygenated blood returns through the pulmonary veins into the left atrium",
      "The left ventricle pumps it through the aortic valve into the aorta to the body"
    ],
    explanation: "The correct sequence is: vena cava → right atrium → tricuspid valve → right ventricle → pulmonary valve → pulmonary artery → lungs → pulmonary veins → left atrium → left ventricle → aorta. Remember that the right side of the heart handles deoxygenated blood while the left side handles oxygenated blood, which makes the pulmonary artery the only artery carrying deoxygenated blood and the pulmonary veins the only veins carrying oxygenated blood. Nurses need this circuit because anaemia, fluid overload and shock test every station of it — and because the pulses felt at the wrist and neck are this circuit's most accessible windows. Arranging the steps in order cements the one-way flow through the valves that keeps the circuit honest.",
    courseSlug: "anatomy-physiology-1"
  },

  // ── YEAR 1 · FOUNDATIONS OF NURSING (5) ─────────────────────
  {
    topic: "Vital Signs Interpretation",
    type: "CLINICAL_SCENARIO",
    difficulty: "Easy",
    stem: "A student is reviewing four post-operative patients on the surgical ward of a district hospital. Which of these observations should concern her most as an early sign of deterioration?",
    options: [
      "Respiratory rate of 28 breaths per minute in a patient who had an appendicectomy this morning",
      "Blood pressure of 118/76 mmHg in a patient two days after an appendicectomy",
      "Oral temperature of 36.8°C in a patient on his first post-operative day",
      "Pulse of 72 beats per minute in a patient who is sleeping soundly"
    ],
    correctIndex: 0,
    explanation: "A rising respiratory rate is one of the earliest and most sensitive warning signs of deterioration — from sepsis, bleeding, pain or chest complications — and it usually changes before blood pressure or temperature do. A rate of 28 per minute is above the normal adult range and must be re-checked, the patient examined and the finding reported to a senior nurse. The other three values sit comfortably within normal post-operative ranges. Learning to notice the quiet, early numbers is what makes observations worth taking at all.",
    whyOthers: {
      "B": "118/76 mmHg is a normal adult blood pressure and expected two days after an uncomplicated operation.",
      "C": "36.8°C is within the normal range and reassuring on day one.",
      "D": "A pulse of 72 beats per minute is normal, and sleep naturally slows the pulse — transient rises occur with pain or anxiety, but this value is unremarkable."
    },
    courseSlug: "foundations-nursing-1"
  },
  {
    topic: "Recognising Shock",
    type: "MCQ",
    difficulty: "Clinical Reasoning",
    stem: "A patient on the surgical ward, six hours after an appendicectomy, has a pulse of 118 beats per minute and a blood pressure of 88/54 mmHg, when his baseline was 124/78. What is the priority interpretation?",
    options: [
      "He may be developing hypovolaemic shock — possibly from concealed internal bleeding — and needs immediate assessment and escalation",
      "This is a normal cardiovascular response to walking about early after surgery",
      "He is probably just anxious about his family and needs reassurance",
      "He should be re-monitored after four hours before anyone is informed"
    ],
    correctIndex: 0,
    explanation: "A rising pulse combined with a falling blood pressure after surgery suggests significant blood loss or shock until proven otherwise — and post-operative bleeding can be concealed, pooling inside the abdomen with little visible in the drain or dressing. The safe response is to stay with the patient, call for help and have him reviewed immediately. Waiting four hours, or explaining the finding away as anxiety or a response to activity, risks missing a life-threatening emergency. Systematic interpretation of paired vital signs against the patient's baseline is a habit that saves lives on surgical wards.",
    whyOthers: {
      "B": "Early ambulation causes mild, transient changes — never a tachycardia of 118 with a 36-point systolic drop.",
      "C": "Anxiety alone does not lower blood pressure — settling on reassurance delays emergency care.",
      "D": "Four hours of waiting turns a treatable emergency into a catastrophe; immediate review is the only safe interval."
    },
    courseSlug: "foundations-nursing-1"
  },
  {
    topic: "Nursing Process",
    type: "TRUE_FALSE",
    difficulty: "Easy",
    stem: "Assessment is not only the first step of the nursing process but also continues throughout every other phase. True or False?",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "This is true. The nursing process moves through assessment, diagnosis, planning, implementation and evaluation — and assessment runs through all of them, because evaluation feeds fresh assessment data back into the cycle. Clients' conditions change, especially on busy wards, so every encounter is a new opportunity to observe, listen and re-assess. This is why nurses are taught to keep watching their clients between formal observations rather than relying solely on the admission assessment.",
    whyOthers: {
      "B": "'False' treats assessment as a single admission event — a dangerous habit in clinical care, where a patient's condition can change within the hour."
    },
    courseSlug: "foundations-nursing-1"
  },
  {
    topic: "Hand Hygiene",
    type: "MULTI_SELECT",
    difficulty: "Moderate",
    stem: "A tutor asks a Year 1 class which moments belong to the WHO '5 Moments for Hand Hygiene'. Select ALL that apply.",
    options: [
      "Before touching a client",
      "After removal of gloves following contact with body fluids",
      "After touching a client's surroundings",
      "While taking a break in the staff common room"
    ],
    correctIndexes: [0, 1, 2],
    explanation: "The WHO 5 Moments are: before touching a client; before a clean or aseptic procedure; after body fluid exposure risk (which includes immediately after removing soiled gloves); after touching a client; and after touching the client's surroundings. Hand hygiene is the simplest, cheapest and most powerful infection prevention tool available in any Ghanaian clinic, protecting clients and staff alike. Staff breaks are outside the 5 Moments framework, which maps care around the client, even though general hygiene always remains good practice.",
    whyOthers: {
      "D": "Lunch in the common room is not one of the 5 Moments — the framework describes moments of care surrounding the client, not staff break times."
    },
    courseSlug: "foundations-nursing-1"
  },
  {
    topic: "Nursing Process Steps",
    type: "ORDERING",
    difficulty: "Moderate",
    stem: "A nurse is using the nursing process to care for a newly admitted patient with uncontrolled diabetes. Arrange the steps in the order they are first carried out.",
    options: [
      "Assessment — take the history, examine the patient and review her records",
      "Nursing diagnosis — state the patient's problems in measurable nursing language",
      "Planning — set goals with the patient and choose the interventions to reach them",
      "Implementation — carry out the planned care",
      "Evaluation — check whether the goals were met and revise the plan"
    ],
    explanation: "The nursing process runs assessment, diagnosis, planning, implementation and evaluation. The order is logical: you cannot state problems before gathering data, cannot plan before stating problems, and cannot evaluate before implementing. Crucially, the last step feeds the first — evaluation findings become fresh assessment data, which is why the process is a cycle rather than a straight line, and why assessment never really stops at any phase. Every step is documented as it happens: the chart is the process made visible, and the next nurse's shift starts wherever the cycle now stands.",
    courseSlug: "foundations-nursing-1"
  },

  // ── YEAR 1 · MICROBIOLOGY (3) ───────────────────────────────
  {
    topic: "Chain of Infection",
    type: "MCQ",
    difficulty: "Moderate",
    stem: "During a cholera awareness campaign in a rural district, the environmental health officer promotes safe drinking water, proper latrine use and food hygiene. Which link of the chain of infection is this mainly interrupting?",
    options: ["Mode of transmission", "Portal of entry", "Susceptible host", "Infectious agent"],
    correctIndex: 0,
    explanation: "Cholera spreads mainly through the faecal–oral route via contaminated water and food, so safe water, sanitation and food hygiene attack the mode of transmission. The chain of infection runs from infectious agent, through reservoir, portal of exit, mode of transmission and portal of entry, to a susceptible host — and breaking any single link stops disease. Handwashing, water treatment and vector control are all transmission-focused interventions, whereas vaccination strengthens the susceptible host. Knowing which link each intervention attacks helps students reason about outbreaks instead of memorising lists.",
    whyOthers: {
      "B": "The portal of entry for cholera is the mouth — hygiene interrupts the journey before entry, at the transmission stage.",
      "C": "Strengthening the susceptible host means immunity and nutrition, through vaccination and health promotion — not water safety.",
      "D": "The infectious agent is Vibrio cholerae itself; the campaign does not eliminate the bacterium but blocks its route between people."
    },
    courseSlug: "microbiology-1"
  },
  {
    topic: "Surgical Asepsis",
    type: "CLINICAL_SCENARIO",
    difficulty: "Moderate",
    stem: "A student nurse is assisting in the treatment room of a district hospital while a trader's deep forearm laceration is being sutured, when a sterile tissue forcep falls from the trolley onto the floor. Which action is most appropriate?",
    options: [
      "Do not use it — obtain a new sterile instrument, and report the break in technique if the pattern keeps repeating",
      "Rinse the forcep under the tap and put it back on the field",
      "Wipe it with an alcohol swab and continue with it",
      "Use it, reasoning that the wound is not sterile anyway"
    ],
    correctIndex: 0,
    explanation: "Once a sterile item touches a non-sterile surface, both the item and the area of the field it landed on are considered contaminated — the only safe response is to discard the item and replace it from a newly opened sterile supply. A tap rinse adds microbes rather than removing them, and a quick alcohol swab disinfects but does not sterilise an instrument. A wound being sutured is a direct route into tissue and bloodstream, and infection — including tetanus from roadside and market injuries — remains a real danger in our setting. Patient safety beats convenience every single time, and speaking up about repeated breaks is part of a student's professional duty.",
    whyOthers: {
      "B": "Tap water is not sterile and recontaminates the instrument instantly — this makes things worse, not better.",
      "C": "Alcohol swabbing disinfects but does not achieve sterilisation, and the brief contact time on a dropped instrument is unreliable.",
      "D": "The goal is always to introduce the fewest possible microbes into an open wound — deliberate use of a contaminated instrument is never acceptable."
    },
    courseSlug: "microbiology-1"
  },
  {
    topic: "Antimicrobial Use",
    type: "TRUE_FALSE",
    difficulty: "Moderate",
    stem: "Antibiotics are an effective treatment for common viral illnesses such as measles and the common cold. True or False?",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "False. Antibiotics act on structures unique to bacteria — cell walls, bacterial ribosomes and bacterial enzymes — none of which viruses possess, because viruses are parasites of human cells. Viral illnesses such as measles, colds and most sore throats are managed supportively while the immune system clears the virus. Using antibiotics for viral illness wastes medicine, causes side effects and fuels antimicrobial resistance, already one of the biggest threats to health systems worldwide, including in Ghana. Guarding antibiotics is therefore a clinical skill, not just a pharmacy rule.",
    whyOthers: {
      "A": "'True' is incorrect — antibiotics have no target inside a virus, so they cannot cure measles or a cold; prescribing them anyway only breeds resistance."
    },
    courseSlug: "microbiology-1"
  },

  // ── YEAR 1 · HEALTH PROMOTION (2) ───────────────────────────
  {
    topic: "Malaria Prevention",
    type: "CLINICAL_SCENARIO",
    difficulty: "Moderate",
    stem: "A student nurse is giving a health talk at a community durbar organised by a CHPS compound on protecting families from malaria. Which message should she emphasise first for the community members most at risk?",
    options: [
      "Sleep under an insecticide-treated bed net every night — especially pregnant women and children under five",
      "Take a weekly herbal cleansing remedy to drive out 'fever blood'",
      "Avoid all fresh fruit during the rainy season",
      "Stay indoors all day to avoid mosquito bites"
    ],
    correctIndex: 0,
    explanation: "Malaria hits hardest at the groups every guideline flags for priority protection — pregnant women and children under five. In pregnancy, malaria causes severe anaemia, miscarriage, preterm birth and low birth weight, and it remains a leading killer of mothers and babies in Ghana. Consistent use of an insecticide-treated bed net is among the most effective protective measures a family can control itself, which is why it heads the teaching list. Additional preventive medicines are offered at antenatal visits under national guidelines, but the durbar's daily actionable message is the treated net. The remaining options are harmful folklore, needless dietary fear, or simply bad mosquito biology.",
    whyOthers: {
      "B": "Unregulated herbal preparations may harm a pregnant woman or a child and have no proven protective effect — and self-medication can delay proper care.",
      "C": "Fresh fruit provides vitamins that support immunity and nutrition, and has nothing to do with malaria transmission.",
      "D": "The Anopheles mosquitoes that transmit malaria feed mainly at night, so daytime confinement is pointless — night-time protection with a treated net is the key behaviour."
    },
    courseSlug: "health-promotion-1"
  },
  {
    topic: "Levels of Prevention",
    type: "MCQ",
    difficulty: "Easy",
    stem: "A community health nurse in Ghana is planning her activities for the year. Which of the following is an example of SECONDARY prevention rather than primary prevention?",
    options: [
      "Screening adults for high blood pressure and anaemia at a community outreach clinic",
      "Health education on handwashing at the market square",
      "Immunising children against measles",
      "Providing a borehole for clean drinking water to a village"
    ],
    correctIndex: 0,
    explanation: "Primary prevention stops disease before it starts — education, immunisation, sanitation and clean water all belong here. Secondary prevention detects existing disease early while it is easiest to treat, so screening for anaemia, hypertension, HIV or cervical changes at outreach clinics is the classic example. Tertiary prevention limits the damage of established disease, such as physiotherapy after stroke. Sorting activities into these levels helps a nurse decide where limited community resources will do the most good.",
    whyOthers: {
      "B": "Handwashing education prevents infection before it ever occurs — textbook primary prevention.",
      "C": "Immunisation protects children before exposure — the flagship example of primary prevention.",
      "D": "A borehole removes the cause of waterborne disease before anyone is infected — primary prevention at community level."
    },
    courseSlug: "health-promotion-1"
  },

  // ── YEAR 2 · MEDICAL-SURGICAL NURSING (2) ───────────────────
  {
    topic: "Post-operative Fever",
    type: "MCQ",
    difficulty: "Moderate",
    stem: "A patient two days after an appendicectomy in a district hospital has an oral temperature of 38.6°C. What should the student's FIRST action be?",
    options: [
      "Perform a focused assessment — wound, chest, urine, IV site — and report the findings",
      "Give an antipyretic immediately and chart 'fever resolved' when the temperature falls",
      "Remove all blankets, wait thirty minutes, and decide then",
      "Document the finding only, because fever is routine after surgery"
    ],
    correctIndex: 0,
    explanation: "Fever after surgery has a long differential — wound infection, chest infection, urinary infection, IV-site complications or malaria — and each is managed differently, so the first step is a focused assessment to find the source, followed by reporting and management under medical review. Simply lowering the number with an antipyretic masks the picture while the cause advances. Passive waiting or mere charting delays diagnosis of infection, which can progress to sepsis. Finding the source is what turns a fever from a number into a diagnosis.",
    whyOthers: {
      "B": "Suppressing the temperature does not treat the cause and may hide a deepening infection behind a normal-looking chart.",
      "C": "Cooling measures can play a role later, but assessment comes first — and 38.6°C on day two is far beyond 'low grade'.",
      "D": "Mild fever within the first 24 hours can reflect the stress of surgery, but fever at 38.6°C on day two demands active investigation."
    },
    courseSlug: "medical-surgical-nursing-1"
  },
  {
    topic: "Early Signs of Shock",
    type: "MCQ",
    difficulty: "Hard",
    stem: "Which of these observations would the nurse expect to see EARLIEST in a client developing hypovolaemic shock?",
    options: [
      "Tachycardia with a still-normal blood pressure",
      "Falling blood pressure with a still-normal pulse",
      "Cold, clammy skin with an absent radial pulse",
      "Deep sighing respirations with flushed, warm skin"
    ],
    correctIndex: 0,
    explanation: "In early compensated shock, the sympathetic nervous system raises the heart rate and constricts blood vessels, so tachycardia appears while blood pressure is still normal — which is exactly why a rising pulse must never be dismissed as anxiety. Blood pressure falls only when compensation fails, by which point the client is gravely ill. Cold, clammy skin with a weak or absent radial pulse is a late sign of advanced vasoconstriction. This physiology is why pulse and respiratory rate, humble as they are, remain among the most valuable routine observations.",
    whyOthers: {
      "B": "Hypotension is a late, decompensated sign — waiting for the pressure to fall means waiting too long.",
      "C": "Absent radial pulses and cold clammy skin indicate advanced shock, not its beginning.",
      "D": "Sighing respirations with flushed warm skin point towards metabolic problems such as diabetic emergencies, not volume loss."
    },
    courseSlug: "medical-surgical-nursing-1"
  },

  // ── YEAR 2 · PATHOLOGY (3) ──────────────────────────────────
  {
    topic: "Acute Inflammation",
    type: "MCQ",
    difficulty: "Moderate",
    stem: "A tutor lists the classic findings of acute inflammation and asks the class to spot the impostor. Which option does NOT belong with the cardinal signs of inflammation?",
    options: [
      "Increased hair growth over the inflamed area",
      "Redness of the overlying skin",
      "Swelling of the tissue",
      "Loss of function of the part"
    ],
    correctIndex: 0,
    explanation: "The five cardinal signs of inflammation are redness, heat, swelling, pain and loss of function — rubor, calor, tumour, dolor and functio laesa — described since antiquity. They arise from arteriolar vasodilation, increased vessel permeability and the arrival of fluid and white cells in the injured tissue. Increased hair growth has no place among them; if anything, inflammation and poor perfusion reduce hair growth on a limb. Distinguishing inflammation, a protective response, from infection, which needs specific treatment, is a daily clinical task.",
    whyOthers: {
      "B": "Redness is a cardinal sign produced by vasodilation of the arterioles supplying the injured area.",
      "C": "Swelling reflects fluid and protein leaking into the tissues through more permeable vessel walls.",
      "D": "Loss of function — sparing the part because of pain and swelling — was the fifth sign added to the classical four, so it belongs on the list."
    },
    courseSlug: "pathology-1"
  },
  {
    topic: "Wound Healing",
    type: "CLINICAL_SCENARIO",
    difficulty: "Moderate",
    stem: "Two patients are on the surgical ward of a district hospital with wounds. Patient A has a clean, closely approximated appendicectomy incision sutured immediately after surgery. Patient B is a farmer whose diabetic foot ulcer was gaping and contaminated when he first presented, and has been left open to heal after cleaning. Which comparison is correct?",
    options: [
      "A heals by first intention; B heals by second intention with a higher risk of infection",
      "Both heal by first intention because both wounds were treated in hospital",
      "A heals by second intention; B heals by first intention",
      "Both heal identically, because all surgical wounds behave the same"
    ],
    correctIndex: 0,
    explanation: "Healing by first intention occurs in clean, well-approximated wounds with minimal tissue loss, whose edges knit together quickly with minimal scarring. Healing by second intention occurs in gaping, contaminated or infected wounds with more tissue loss: the wound fills with granulation tissue from the base, contracts slowly and scars more. Patient B's diabetes, contamination and tissue loss further raise his infection risk and slow his healing, so he needs closer observation for spreading redness, discharge and fever, plus offloading and meticulous foot-care teaching. Understanding the two pathways explains why apparently similar wounds can recover at very different speeds.",
    whyOthers: {
      "B": "Hospital treatment does not guarantee first-intention healing — contamination, delay and tissue loss can still force slow second-intention healing.",
      "C": "This reverses the definitions: the clean, approximated wound is the textbook first-intention case.",
      "D": "Healing depends on cleanliness, approximation, blood supply, nutrition and infection, all of which clearly differ between these two patients."
    },
    courseSlug: "pathology-1"
  },
  {
    topic: "Wound Healing Phases",
    type: "ORDERING",
    difficulty: "Moderate",
    stem: "A tutor asks a Year 2 class to arrange the phases of wound healing in their usual order, starting immediately after injury.",
    options: [
      "Haemostasis — blood vessels constrict and a clot seals the damaged vessels",
      "Inflammation — the wound becomes red, swollen, hot and painful as white cells and fluid arrive",
      "Proliferation — granulation tissue fills the gap, new vessels grow and skin edges creep inwards",
      "Maturation (remodelling) — collagen reorganises and strengthens, and the scar shrinks and softens"
    ],
    explanation: "Wound healing classically runs through four phases: haemostasis, inflammation, proliferation and maturation — sealing, cleaning, filling and strengthening. Each phase explains what you see at the bedside: a clean surgical wound moving quietly towards a pale, soft scar, versus a chronic diabetic foot ulcer stuck red and oozing because cleaning never completes. It also explains the nursing: protein, vitamin C and iron feed the proliferating tissue, warmth and moisture support it, and unnecessary disturbance of a healing wound sets the clock back. Complications such as dehiscence and hypertrophic scarring are failures of specific phases, so the phases are the mental map for preventing them.",
    courseSlug: "pathology-1"
  },

  // ── YEAR 2 · PHARMACOLOGY PRINCIPLES (3) ────────────────────
  {
    topic: "Medication Safety",
    type: "MCQ",
    difficulty: "Moderate",
    stem: "A student nurse is preparing a medication but finds the prescriber's handwriting illegible, and the name on the ward shelf looks confusingly similar to another drug. What should she do FIRST?",
    options: [
      "Contact the prescriber to clarify the order before anything is given",
      "Ask the most senior colleague on duty to guess the most likely drug",
      "Administer the medicine whose name is closest to what is written",
      "Skip the dose and document 'medication unavailable'"
    ],
    correctIndex: 0,
    explanation: "An unclear order is a near-miss waiting to happen, and look-alike, sound-alike drug names are among the commonest causes of medication error worldwide. The only safe action is to stop and confirm the order with the prescriber, then verify the five rights — right client, right drug, right dose, right route, right time — before administration. Guessing by seniority or by name similarity is precisely how wrong-drug errors reach patients. Silently omitting the dose both leaves the client untreated and hides the communication problem instead of fixing it.",
    whyOthers: {
      "B": "Even an experienced colleague's guess remains a guess — verification must come from the person who wrote the order.",
      "C": "Choosing by name similarity is the exact mechanism of look-alike, sound-alike drug errors, one of the most dangerous habits in medication practice.",
      "D": "Silently skipping the dose undertreats the client and conceals a systems problem the prescriber needs to know about."
    },
    courseSlug: "pharmacology-1"
  },
  {
    topic: "Safe Medication Practice",
    type: "MULTI_SELECT",
    difficulty: "Moderate",
    stem: "Which of the following are SAFE medication practices for a student nurse? Select ALL that apply.",
    options: [
      "Checking the five rights against the original order before administration",
      "Documenting immediately after giving the medicine, not before",
      "Leaving medicines at the bedside so relatives can give the next dose early",
      "Declining to administer a medicine she has not been trained and authorised to handle"
    ],
    correctIndexes: [0, 1, 3],
    explanation: "Verifying the five rights against the written order, documenting only after administration, and declining tasks beyond one's training and authorisation are all hallmarks of safe medication practice. Medicines must be stored securely — controlled drugs under double lock with a register — because unsecured stock invites theft, misuse and dosing errors by untrained hands. Documenting before administration is falsification, since it records care that has not yet happened. The NMC Ghana Code of Conduct expects students to practise within their competence and to raise concerns rather than stay silent.",
    whyOthers: {
      "C": "Unsecured medicines at the bedside invite missed double-checks, theft and dosing errors by relatives — medicines are always stored under lock per ward policy."
    },
    courseSlug: "pharmacology-1"
  },
  {
    topic: "Medication Safety Culture",
    type: "TRUE_FALSE",
    difficulty: "Easy",
    stem: "If a student is unsure about a medication order, the safest approach is to administer about half of it first and observe the client closely. True or False?",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "False. Inventing a 'half dose' is guessing with a client's life, and half of a wrong medicine is still the wrong medicine. The safe response when unsure is to stop, check and clarify with the prescriber, the pharmacist or the supervising nurse before anything is given. Giving nothing is always safer than giving something you do not understand. Asking questions early is exactly the habit supervisors want to see in a student — it is professionalism, not weakness.",
    whyOthers: {
      "A": "'True' normalises guessing: an unverified medicine can harm even at a reduced amount, and no amount of observation can undo an error already given."
    },
    courseSlug: "pharmacology-1"
  },

  // ── YEAR 2 · FIRST AID (2) ──────────────────────────────────
  {
    topic: "Control of External Bleeding",
    type: "CLINICAL_SCENARIO",
    difficulty: "Easy",
    stem: "At a busy market in Tamale, a trader slips and sustains a deep cut to the forearm, with bright red blood spurting in time with her pulse. Which action should a first-aider take first?",
    options: [
      "Apply firm direct pressure over the wound with a clean cloth and elevate the limb",
      "Apply a tight tourniquet above the elbow immediately",
      "Rinse the wound under the nearest tap for ten minutes",
      "Offer her water and pain relief while waiting for the bleeding to stop"
    ],
    correctIndex: 0,
    explanation: "Spurting, pulsatile bright-red bleeding indicates arterial bleeding, which can become life-threatening within minutes. Firm direct pressure with a clean pad, plus elevating the limb above heart level, controls the vast majority of external bleeding and is always the first move. Tourniquets are reserved for catastrophic haemorrhage that pressure cannot control, and require proper training, timing and documentation. The next priority after control is arranging transport to the nearest clinic or hospital for definitive wound care, tetanus prevention and review — not fluids or medicines at the scene.",
    whyOthers: {
      "B": "A tourniquet is a last-resort tool for bleeding unresponsive to pressure and can damage the limb if applied wrongly or left too long.",
      "C": "Rinsing washes away the forming clot and delays pressure — pressure comes first, wound cleaning comes later at the facility.",
      "D": "Nothing about drinking or pain relief stops arterial blood loss; she can exsanguinate while someone fetches water."
    },
    courseSlug: "first-aid"
  },
  {
    topic: "Primary Survey",
    type: "ORDERING",
    difficulty: "Easy",
    stem: "A young man is found unconscious at a roadside near a clinic. Arrange the primary survey steps in the order the rescuer should follow them.",
    options: [
      "Check for Danger to yourself, bystanders and the casualty",
      "Check for a Response — shout and gently shake the shoulders",
      "Open the Airway with a head tilt and chin lift",
      "Check Breathing — look, listen and feel for up to ten seconds",
      "Check Circulation and control any severe bleeding"
    ],
    explanation: "The primary survey follows the fixed sequence D-R-A-B-C: Danger first, because a rescuer who becomes a second casualty helps nobody, then Response, Airway, Breathing and Circulation. The order never changes because each step depends on the one before it — checking breathing before opening the airway is meaningless. Life-threatening problems are treated the moment they are found, so catastrophic bleeding is controlled as soon as it is seen. Only after the primary survey is complete does the rescuer move to the secondary survey — the head-to-toe examination and history.",
    courseSlug: "first-aid"
  },

  // ── YEAR 2 · NUTRITION & DIETETICS (2) ──────────────────────
  {
    topic: "Iron Nutrition",
    type: "MCQ",
    difficulty: "Moderate",
    stem: "A student nurse is counselling a 24-year-old woman with mild iron-deficiency anaemia on diet at a district clinic. Which advice is the most useful and accurate about iron absorption in a Ghanaian setting?",
    options: [
      "Pair iron-rich meals with vitamin C sources like oranges or pawpaw, and keep tea away from mealtimes",
      "Take iron-rich foods together with strong tea to settle the stomach",
      "Eat iron-rich foods only at supper and never in the morning",
      "Boil all leafy greens for several hours until completely soft"
    ],
    correctIndex: 0,
    explanation: "Vitamin C strongly enhances absorption of the non-haem iron in plant foods such as dark green leaves, beans and fortified cereals, while the tannins in tea and coffee bind iron and block its absorption — a real issue in Ghana, where tea is often taken with meals. Practical advice is to pair meals with fruit and to move tea drinking at least an hour away from iron-rich foods. Time of day does not change absorption, and prolonged boiling destroys the very vitamin C and folate the body needs, so greens should be lightly cooked. Simple food pairing is one of the most powerful nutritional tools a nurse carries.",
    whyOthers: {
      "B": "Tea contains tannins that bind dietary iron in the gut — taking it with food directly blocks the absorption she needs.",
      "C": "The time of day has no effect on iron absorption; this advice adds nothing and may reduce adherence.",
      "D": "Hours of boiling leach out and destroy vitamin C and folate — light cooking preserves the nutrients in leafy greens."
    },
    courseSlug: "nutrition-dietetics"
  },
  {
    topic: "Diabetes Diet Counselling",
    type: "CLINICAL_SCENARIO",
    difficulty: "Moderate",
    stem: "At a nutrition clinic in a district hospital, a student nurse is counselling a 52-year-old trader newly diagnosed with type 2 diabetes, whose usual day is one large evening meal of banku with heavy soup and frequent sugary drinks through the market day. Which advice best fits her reality?",
    options: [
      "Cut the sugary drinks, spread food across smaller regular meals built around beans, fish, garden eggs and leafy greens with measured portions of banku, and lighten the evening meal",
      "Ban all traditional Ghanaian foods — she should eat only imported 'diabetic' foods from the pharmacy",
      "Skip breakfast entirely to cut the day's sugar, and keep the one large evening meal as it is",
      "Replace her meals with palm wine in the evening, since it is natural and unprocessed"
    ],
    correctIndex: 0,
    explanation: "The highest-yield changes for a newly diagnosed Ghanaian trader are cutting sugar-sweetened drinks, restructuring the single heavy evening meal into smaller regular meals, and building plates around vegetables, beans and fish with controlled starch portions — practical, affordable and culturally familiar. Regular meal spacing also protects patients on glucose-lowering medicines from dangerous lows. Imported 'diabetic' foods are expensive marketing, not medicine; skipping breakfast promotes glucose swings and evening overeating; and palm wine carries its own sugar and alcohol load. Counselling that fits the patient's real day is the diet therapy she will actually follow.",
    whyOthers: {
      "B": "Banning familiar foods buys neither adherence nor health — portion quality and regularity matter far more, and imported 'diabetic' foods are costly substitutes for skills she can learn.",
      "C": "Skipping breakfast invites glucose swings and a ravenous evening meal — the exact pattern that needs unwinding, not reinforcing.",
      "D": "Palm wine is a sugar- and alcohol-containing drink, not a meal replacement — 'natural' does not mean neutral for blood glucose."
    },
    courseSlug: "nutrition-dietetics"
  },

  // ── YEAR 3 · MEDICAL & SURGICAL NURSING III (3) ─────────────
  {
    topic: "Sickle Cell Crisis",
    type: "CLINICAL_SCENARIO",
    difficulty: "Clinical Reasoning",
    stem: "A 21-year-old student known with sickle cell disease arrives at the district hospital casualty area with three days of worsening back and leg pain after a cold, rainy overnight journey from campus. He is pale, obviously in severe pain, and has drunk nothing since morning. What is the priority nursing response?",
    options: [
      "Recognise a vaso-occlusive crisis: keep him warm, help him start fluids and pain relief as prescribed, monitor for fever and complications, and escalate for review",
      "Give him a hot drink and send him home — sickle cell pain is something patients learn to live with",
      "Treat it as ordinary travelling body pain and hand him simple analgesia from the counter without further assessment",
      "Wait for the pain to settle by itself before involving senior staff, to avoid an unnecessary referral"
    ],
    correctIndex: 0,
    explanation: "Sudden severe bone and joint pain in a patient with sickle cell disease is a vaso-occlusive crisis until proven otherwise — sickled cells trapping in small vessels and starving the tissue of oxygen. Cold, rain, dehydration and infection are classic triggers in Ghana, and this young man collected several on one journey. Management rests on warmth, fluids, pain relief and treating any trigger found — started promptly and monitored; fever, chest pain, breathlessness or falling oxygen saturation must be escalated urgently because acute chest syndrome kills. Dismissing the pain as 'something they live with' is the oldest error in sickle cell care: his pain is real, treatable and an emergency in its own right.",
    whyOthers: {
      "B": "Crisis pain is severe, escalating and treatable — sending him home cold and dehydrated walks him into the next crisis or a complication.",
      "C": "Counter analgesia without assessment misses the crisis pattern, its triggers and its complications — and undertreating sickle pain is itself a standard-of-care failure.",
      "D": "Waiting on an evolving crisis risks acute chest syndrome and sepsis; early review is the safe and expected pathway."
    },
    courseSlug: "medical-surgical-nursing-3"
  },
  {
    topic: "TB Treatment Adherence",
    type: "TRUE_FALSE",
    difficulty: "Moderate",
    stem: "A patient with pulmonary tuberculosis, two months into treatment, tells the student nurse he feels completely well and wants to stop his medicines now that his cough is gone. Stopping at this point is safe. True or False?",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "False. Feeling well and losing the cough means the medicines are working — not that the bacteria are gone. TB treatment must run its full course under Ghana's National Tuberculosis Programme; stopping early leaves surviving bacteria to multiply again, causing relapse and breeding drug resistance, which transforms a curable six-month course into longer, costlier, more toxic treatment for the patient and a resistant strain in the community. Adherence support — treatment supporters, reminder systems, honest discussion of side effects and barriers — is core nursing work, because the hardest month of TB care is the month the patient feels fine.",
    whyOthers: {
      "A": "'True' mistakes symptom relief for cure — the fading of the cough at two months is exactly the danger zone where adherence lapses and resistance is bred."
    },
    courseSlug: "medical-surgical-nursing-3"
  },
  {
    topic: "Oxygen Therapy in COPD",
    type: "TRUE_FALSE",
    difficulty: "Moderate",
    stem: "A patient with chronic obstructive pulmonary disease has an oxygen saturation of 86 per cent on room air and is breathing fast. The nurse should withhold oxygen because it will stop his breathing. True or False?",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "False. Hypoxia is the immediate threat, and a hypoxic patient should never be denied oxygen. The modern teaching is to give controlled oxygen — targeting the range your guideline sets for COPD, commonly about 88–92 per cent — and then monitor closely: rising drowsiness, confusion or slowing respirations signal carbon dioxide retention and are the cue to call for review and adjustment, not reasons to have withheld oxygen from the start. The old folklore that oxygen 'stops the COPD patient breathing' arose from uncontrolled high-flow oxygen, and it still causes the opposite error — nurses withholding a treatment the patient's body is starving for.",
    whyOthers: {
      "A": "'True' turns a monitorable, adjustable treatment decision into untreated hypoxia — by far the more dangerous mistake."
    },
    courseSlug: "medical-surgical-nursing-3"
  },

  // ── YEAR 3 · CLINICAL NURSING SKILLS III (1) ────────────────
  {
    topic: "Fluid Balance",
    type: "MCQ",
    difficulty: "Moderate",
    stem: "A patient on the medical ward has a 24-hour fluid chart showing intake of 1,000 mL and urine output of 300 mL. His ankles have become noticeably more swollen since yesterday, and he says his slippers are tight. How should the student nurse interpret and act on this?",
    options: [
      "He is in positive fluid balance — output far below intake — so the finding must be reported, the chart continued honestly including 'hidden' fluids, and daily weights started",
      "This is normal, as long as he is passing any urine at all",
      "The chart is meaningless, because tea, porridge and pap do not count as fluid intake",
      "He is dehydrated, because 300 mL of urine means the kidneys are conserving water — so push fluids rapidly by mouth"
    ],
    correctIndex: 0,
    explanation: "Intake of 1,000 mL against 300 mL of urine is a strongly positive balance, and a urine output that low — well under roughly 0.5 mL per kilogram per hour — suggests the kidneys are struggling, with heart failure or kidney injury the leading explanations when oedema is growing. The nursing response is to report the pattern, complete the chart honestly (tea, pap, porridge and medicines taken with water all count as intake), weigh him daily at the same time (about one kilogram equals one litre of retained fluid), and watch for breathlessness as fluid builds. Positive balance is not a paperwork observation — it is a trajectory, and the nurse who reports it early changes where it ends.",
    whyOthers: {
      "B": "'Any urine at all' is a dangerous threshold — 300 mL in 24 hours is oliguria territory, and the widening gap between intake and output is the actual finding.",
      "C": "Everything that enters the mouth counts on the chart — porridge, tea, pap and oral medicines in water are exactly the intake a balance can hide.",
      "D": "The pattern is fluid retention, not dehydration — pushing fluids into a struggling heart or kidneys worsens the overload and the swelling."
    },
    courseSlug: "clinical-nursing-skills-3"
  },

  // ── YEAR 3 · MEDICAL & SURGICAL NURSING IV (3) ──────────────
  {
    topic: "Glasgow Coma Scale",
    type: "MCQ",
    difficulty: "Moderate",
    stem: "A patient with a head injury opens his eyes only when the nurse calls his name loudly, answers with confused words, and obeys the command 'squeeze my fingers'. What is his Glasgow Coma Scale score, and what should the student do with it?",
    options: [
      "13 — reduced from a maximum of 15, so it must be charted with its components, reported, and re-checked at set intervals, because falling scores signal rising pressure",
      "15 — normal, because he eventually responds to everything asked of him",
      "8 — severe coma, so he needs immediate airway support now",
      "The score cannot be calculated at the bedside without a brain scan"
    ],
    correctIndex: 0,
    explanation: "Eyes opening to voice scores 3, confused verbal response scores 4, and obeying commands scores 6 — a GCS of 13, often written E3 V4 M6. The number itself matters less than its parts and its trend: chart all three components, report a reduced or falling score, and re-check at the frequency your ward sets, because a dropping GCS is the bedside signature of rising pressure inside the skull. The calculation needs only eyes, ears and a command — no scan, no machine — which is exactly why nurses, not imaging, are the early warning system for head injuries.",
    whyOthers: {
      "B": "Eventual response is not full response — eyes opening to voice rather than spontaneously, and confused speech, each cost points against the maximum of 15.",
      "C": "A score of 8 describes a patient who opens his eyes to pain at most and speaks no words — deeply comatose. This patient is far better than that, though still impaired and needing close monitoring.",
      "D": "GCS is a bedside clinical score built from eyes, voice and movement; imaging may explain a low score but never calculates it."
    },
    courseSlug: "medical-surgical-nursing-4"
  },
  {
    topic: "Hypoglycaemia Recognition",
    type: "CLINICAL_SCENARIO",
    difficulty: "Clinical Reasoning",
    stem: "At 03:00 on a medical ward, a 68-year-old woman with diabetes, admitted after a mild stroke, becomes sweaty, trembling and mildly confused. She was too unwell to eat supper, though her evening medicines went ahead as charted. What is the student nurse's priority?",
    options: [
      "Recognise probable hypoglycaemia: check her glucose if a meter is available, give fast-acting sugar per protocol while she can swallow safely, stay with her, and call for review",
      "Let her sleep — confusion at 3 a.m. is normal in elderly patients and the morning round can sort it out",
      "Document 'mild confusion' in the notes and continue the round",
      "Withhold her breakfast and all diabetes medicines tomorrow, and give nothing by mouth until the doctors round at 08:00"
    ],
    correctIndex: 0,
    explanation: "Cold sweat, trembling and new confusion in a treated diabetic patient — especially one who missed a meal — is hypoglycaemia until proven otherwise, and untreated hypoglycaemia causes seizures, brain injury and death far faster than high glucose ever does. The response is immediate: check glucose if a meter is available, give fast-acting sugar per your ward protocol while she can still swallow safely, re-check after about fifteen minutes, stay with her, and call for review — patients who cannot swallow or remain confused need the team's alternative pathway, not repeated oral attempts. In a patient recovering from a stroke the confusion is easy to misattribute; the sweating and tremor are the clues that the sugar, not the stroke, is speaking.",
    whyOthers: {
      "B": "Sleeping through hypoglycaemia is how it deepens — the brain quietly runs out of fuel, and the morning may find her fitting or unrousable.",
      "C": "Documenting the confusion without acting records the deterioration while allowing it to continue — assessment findings demand response.",
      "D": "Withholding food from a now-hypoglycaemic patient starves the treatment: the priority is sugar in, help called, cause reported — meal planning belongs to the review that follows."
    },
    courseSlug: "medical-surgical-nursing-4"
  },
  {
    topic: "Pressure Injury Staging",
    type: "MCQ",
    difficulty: "Hard",
    stem: "A 68-year-old woman, two days after a stroke, has been lying mostly on her right side. The skin over her right hip is intact, but it is darker than the skin beside it, does not turn pale when pressed, and feels firmer and warmer than the left hip. How should the student nurse classify and respond?",
    options: [
      "An early pressure injury — intact skin with non-blanching colour change over a pressure point: reposition her off the hip now, begin scheduled position changes and skin care, document precisely and report",
      "No problem at all — the skin is unbroken, so there is no pressure damage until a wound appears",
      "A stage 4 ulcer — the bone must already be exposed underneath the dark patch",
      "A heat rash — apply powder and leave her positioned as she is comfortable"
    ],
    correctIndex: 0,
    explanation: "Intact skin over a bony prominence that does not blanch — and in darker skin, that is darker, firmer or warmer than the surrounding skin — is an early pressure injury, the stage before the skin breaks. It is the moment prevention still works fully: reposition off the hip immediately, begin scheduled two-hourly position changes, relieve pressure with cushions as your ward directs, attend to skin moisture and nutrition, document exactly what was seen, and report it. Pressure injuries in dark skin are routinely missed because nurses look for redness; the firmness, warmth and colour difference are the early signatures. Left in position, the next stage is an open ulcer — painful, months-long and vastly harder to heal.",
    whyOthers: {
      "B": "Unbroken skin at the non-blanching stage is damage already begun — waiting for a wound means waiting until prevention has failed.",
      "C": "Stage 4 means exposed bone or muscle through full-thickness tissue loss — nothing here suggests that depth, and the mislabel would still demand the same nursing now, plus far more later.",
      "D": "Heat rash does not sit over pressure points with firmness and non-blanching colour change — and 'leave her as she is comfortable' is the one position guaranteed to worsen it."
    },
    courseSlug: "medical-surgical-nursing-4"
  },

  // ── YEAR 3 · MATERNAL & CHILD HEALTH I (3) ──────────────────
  {
    topic: "Blood Physiology in Pregnancy",
    type: "MCQ",
    difficulty: "Moderate",
    stem: "A routine antenatal laboratory report for a well, non-pale woman at 32 weeks shows a haemoglobin of 10.5 g/dL, down from 12.8 g/dL in the first trimester. How should the student nurse interpret this result?",
    options: [
      "As the physiological haemodilution of pregnancy, interpreted together with clinical signs and the overall trend",
      "As definite iron-deficiency anaemia requiring immediate treatment on the number alone",
      "As concealed internal bleeding requiring urgent ultrasound",
      "As a laboratory error, because haemoglobin should rise during pregnancy"
    ],
    correctIndex: 0,
    explanation: "In pregnancy, plasma volume expands by roughly 40–50% while red cell mass rises only about 20–30%, so haemoglobin and haematocrit fall slightly — the well-known physiological anaemia or haemodilution of pregnancy. A value around 10.5 g/dL in late pregnancy in a well woman fits this picture, and the dilution actually improves blood flow to the placenta. Decisions about iron supplementation follow local guidelines and the woman's clinical state, not one number in isolation. Interpreting laboratory results with the woman in front of you — pale or not, breathless or not — is a core nursing habit.",
    whyOthers: {
      "B": "Treating on a single number without pallor, symptoms or a falling trend is premature — mild dilutional drops are expected and screening plus clinical assessment guide decisions.",
      "C": "Concealed bleeding in pregnancy typically announces itself with pain, contractions, fetal compromise or shock signs — none of which this woman has.",
      "D": "Haemoglobin normally falls rather than rises in pregnancy because of dilution, so this report is exactly what physiology predicts at 32 weeks."
    },
    courseSlug: "maternal-child-health-1"
  },
  {
    topic: "Fetal Movement Awareness",
    type: "CLINICAL_SCENARIO",
    difficulty: "Moderate",
    stem: "A 19-year-old primigravida at 19 weeks attends ANC at a district hospital, worried because she has not yet felt her baby move. She has no pain or bleeding, the fetal heartbeat is present, and fundal height matches her dates. Which response is most appropriate?",
    options: [
      "Reassure her that first movements are usually felt between 18 and 20 weeks in a first pregnancy, and to report if nothing is felt by about 24 weeks",
      "Tell her the baby has most likely died and arrange an urgent scan today",
      "Explain that every woman feels movement by 16 weeks at the latest",
      "Dismiss the concern because a first-time mother's perception of movement has no clinical meaning"
    ],
    correctIndex: 0,
    explanation: "Quickening — the mother's first perception of fetal movement — is typically felt at about 18–20 weeks in a primigravida and 16–18 weeks in a multigravida, because a first-time mother is still learning what the fluttering feels like. At 19 weeks, with a fetal heartbeat and a fundal height matching dates, this pregnancy is progressing normally. Kind reassurance paired with clear safety-net advice — return if no movements are felt by about 24 weeks or if movements reduce once established — is both humane and safe, and it plants the fetal-movement awareness that later becomes a danger sign she must act on. Announcing probable fetal death without a single supporting sign is as wrong as it is cruel.",
    whyOthers: {
      "B": "Nothing in the findings supports fetal death — a present heartbeat and a fundus grown to dates indicate a live, growing baby.",
      "C": "Many first-time mothers feel movement only after 18 weeks; this statement would create needless alarm.",
      "D": "Fetal movement awareness helps confirm gestational age and later serves as a danger sign — and any worried mother deserves a real answer, not a brush-off."
    },
    courseSlug: "maternal-child-health-1"
  },
  {
    topic: "Antenatal Triage",
    type: "MCQ",
    difficulty: "Moderate",
    stem: "At a routine antenatal visit, four women present with the following findings. Which one requires the most urgent attention today?",
    options: [
      "Blood pressure 150/96 mmHg with headache and blurred vision at 34 weeks",
      "Fundal height 2 cm below dates at 32 weeks with a lively fetus",
      "Weight gain of 0.4 kg per week with trace ankle oedema",
      "Mild morning nausea at 18 weeks"
    ],
    correctIndex: 0,
    explanation: "A blood pressure of 150/96 with headache and visual disturbance at 34 weeks suggests severe pre-eclampsia, which can progress to eclamptic seizures or placental abruption with little warning. This combination is a referral trigger: urgent review today, with admission or transfer per local protocol and the nurse staying with the woman in the meantime. Fundal height slightly below dates deserves follow-up and ultrasound, but with a lively fetus it is not today's emergency. The remaining two findings sit within the normal range for pregnancy.",
    whyOthers: {
      "B": "Possible growth faltering needs follow-up and ultrasound, but a lively fetus makes this important rather than emergent.",
      "C": "This weight gain pattern with trace oedema is normal in late pregnancy.",
      "D": "Morning nausea at 18 weeks is uncomfortable but common and non-urgent."
    },
    courseSlug: "maternal-child-health-1"
  },

  // ── YEAR 3 · MATERNAL & CHILD HEALTH II (3) ─────────────────
  {
    topic: "Intrapartum Fetal Monitoring",
    type: "CLINICAL_SCENARIO",
    difficulty: "Clinical Reasoning",
    stem: "During the first stage of labour at a district hospital, a student listens to the fetal heart rate for a full minute after a contraction and counts 96 beats per minute. After turning the woman onto her left side, she re-counts 100 beats per minute. What should she do first?",
    options: [
      "Recognise persistent fetal bradycardia, stay with the woman, call the nurse in charge and prepare for urgent action",
      "Document the rate as within normal limits because 100 is a round number",
      "Continue routine two-hourly monitoring and re-listen at the next interval",
      "Tell her the baby is just sleeping and encourage her to walk around to speed things up"
    ],
    correctIndex: 0,
    explanation: "A fetal heart rate persistently below about 110 beats per minute is fetal bradycardia — a danger sign of fetal compromise, often from cord compression or placental insufficiency. Two readings in this zone even after repositioning mean the student's job is to escalate now: call the nurse in charge, keep the woman on her side, stay with her and prepare for possible expedited birth. Charting it as normal, waiting for the next routine check or sending the mother walking all abandon the baby to ongoing hypoxia. Intermittent auscultation saves lives only when abnormal findings are acted on immediately.",
    whyOthers: {
      "B": "Neither 96 nor 100 is within normal fetal limits — rounding a number does not make distress disappear.",
      "C": "Two-hourly re-checking is the routine for a normal trace, not the response to repeated bradycardia.",
      "D": "Walking cannot fix a bradycardic fetus and 'the baby is sleeping' is not an interpretation — escalation with continuous presence is required."
    },
    courseSlug: "maternal-child-health-2"
  },
  {
    topic: "Newborn Danger Signs",
    type: "MULTI_SELECT",
    difficulty: "Moderate",
    stem: "Which of the following are recognised danger signs in a newborn that require urgent assessment? Select ALL that apply.",
    options: [
      "Poor feeding or no feeding since birth",
      "Calm baby breathing 70 breaths per minute",
      "Convulsions or abnormal jerky movements",
      "Passing meconium within the first 24 hours"
    ],
    correctIndexes: [0, 1, 2],
    explanation: "Poor or absent feeding, fast breathing (above 60 per minute counted on a calm baby) and convulsions are core newborn danger signs requiring urgent assessment, taught consistently across WHO young-infant guidelines. Not feeding is how newborn sepsis most often presents; tachypnoea signals respiratory distress or infection; and any seizure in a newborn is an emergency. Passing meconium within the first 24 hours, by contrast, is normal and reassuring — it is the failure to pass meconium within 24 hours that raises concern. Every mother should be taught these danger signs before discharge so she can act at home.",
    whyOthers: {
      "D": "Passing meconium on day one is normal and expected — it is failure to pass meconium within 24 hours that warrants attention."
    },
    courseSlug: "maternal-child-health-2"
  },
  {
    topic: "Partner Management in STIs",
    type: "CLINICAL_SCENARIO",
    difficulty: "Moderate",
    stem: "A woman treated for a cervical infection at a reproductive health clinic in Accra asks whether her husband, working in another region, needs any treatment. Which advice is most appropriate?",
    options: [
      "Explain that partners are treated together, and help her plan how to inform him and attend, with condom use until both complete treatment",
      "Tell her that because she is already treated, her husband is automatically protected too",
      "Suggest she dissolve some of her tablets in his food so he gets some medicine unknowingly",
      "Reassure her that an untreated partner cannot re-infect a treated woman"
    ],
    correctIndex: 0,
    explanation: "Most sexually transmitted infections pass back and forth between partners, so an untreated partner re-infects the treated one — which is why partner notification and treatment are part of standard STI management. The respectful, practical approach is to explain this, support her in notifying her husband despite the distance, and stress condom use until both complete treatment and are reviewed. Secretly medicating someone is unethical, unsafe and undertreats them both. Untreated infection in either partner also drives onward transmission and complications such as pelvic infection, infertility and ectopic pregnancy.",
    whyOthers: {
      "B": "Treating one partner does not treat the other — the infection returns at the very next exposure.",
      "C": "Medicating anyone secretly is unethical and dangerous, and sharing a limited course undertreats them both while risking harm.",
      "D": "Re-infection of a treated woman by an untreated partner is precisely the reason partner treatment exists."
    },
    courseSlug: "maternal-child-health-2"
  },

  // ── YEAR 3 · HIGH-RISK MATERNAL & NEWBORN (2) ───────────────
  {
    topic: "Ectopic Pregnancy",
    type: "CLINICAL_SCENARIO",
    difficulty: "Clinical Reasoning",
    stem: "A 26-year-old woman attends a district clinic with 7 weeks of amenorrhoea, sudden sharp right-sided lower abdominal pain, and fainting when she stood this morning. She is pale, with a pulse of 112 and a blood pressure of 86/54 mmHg. What should the student nurse do first?",
    options: [
      "Recognise a probable ruptured ectopic pregnancy with shock and arrange immediate emergency referral, keeping her warm and monitored",
      "Give her an iron tablet and advise a week of rest at home",
      "Manage her as a stomach upset and send her to the pharmacy",
      "Book a routine ultrasound appointment for next week"
    ],
    correctIndex: 0,
    explanation: "Amenorrhoea with sudden unilateral lower abdominal pain and fainting in early pregnancy is the classic triad of ectopic pregnancy, and the rising pulse with falling pressure indicates bleeding into the peritoneal cavity — rupture — which can kill within hours. The only correct action is immediate emergency referral: alert the receiving facility, arrange transport with a trained escort, keep the woman warm and monitored, and inform the clinical team now. Iron tablets, antacids or next-week scans squander the minutes that separate survival from death. Ectopic pregnancy remains a leading cause of first-trimester maternal death, so this pattern should be drilled until it is reflexive.",
    whyOthers: {
      "B": "Oral iron cannot replace circulating volume, and rest at home delays the emergency surgery this woman needs now.",
      "C": "Calling a collapsed pregnant woman a stomach upset is exactly how ruptured ectopics are missed — her vital signs are screaming emergency.",
      "D": "A routine scan next week is meaningless for a woman who may bleed to death today."
    },
    courseSlug: "high-risk-maternal-newborn"
  },
  {
    topic: "Severe Pre-eclampsia",
    type: "MULTI_SELECT",
    difficulty: "Hard",
    stem: "A woman at 36 weeks with pregnancy-induced hypertension is being monitored at a district hospital. Which findings require IMMEDIATE escalation as features of severe pre-eclampsia? Select ALL that apply.",
    options: [
      "Severe headache not relieved by rest",
      "Flashes of light and blurred vision",
      "Pain in the upper abdomen beneath the ribs",
      "Mild swelling of the ankles in the evening"
    ],
    correctIndexes: [0, 1, 2],
    explanation: "Severe headache, visual disturbance and epigastric or right-upper-quadrant pain are premonitory signs of imminent eclampsia, each of which demands immediate escalation, closer monitoring and medical review. The epigastric pain reflects liver involvement and is easily mistaken for ordinary heartburn, which is why its location and severity matter so much. Mild dependent ankle swelling in the evening, by contrast, is a normal feature of late pregnancy unless it is sudden, gross, or involves the face and hands. Any of these warning signs combined with a rising blood pressure should trigger referral decisions without delay — seizures can follow within hours.",
    whyOthers: {
      "D": "Evening ankle oedema is common and benign in late pregnancy — sudden facial and hand swelling or gross oedema is the warning version."
    },
    courseSlug: "high-risk-maternal-newborn"
  },

  // ── YEAR 3 · COMMUNITY HEALTH NURSING (1) ───────────────────
  {
    topic: "Cervical Cancer Prevention",
    type: "MCQ",
    difficulty: "Hard",
    stem: "A 34-year-old mother of three attends a community health outreach in Ghana and asks how she can protect herself from cervical cancer. Which advice is MOST appropriate?",
    options: [
      "Attend regular cervical screening where available, and support eligible girls to receive HPV vaccination — screening finds treatable early changes",
      "Nothing can be done to prevent it, so she should simply watch for late symptoms",
      "Rely on annual abdominal ultrasound scans, which show cervical cells directly",
      "Use herbal douches monthly to cleanse the cervix"
    ],
    correctIndex: 0,
    explanation: "Cervical cancer is caused by persistent infection with high-risk human papillomavirus, and prevention works on two fronts: HPV vaccination of girls before exposure, and regular screening of women — by visual inspection with acetic acid (VIA) or Pap smear — which detects precancerous changes that can be treated simply and affordably. Ghana's cervical cancer strategy depends on nurses in clinics and communities encouraging women to come for screening, so this counselling moment is itself prevention work. The tragedy of cervical cancer is that most deaths occur in women who were never screened at all.",
    whyOthers: {
      "B": "Cervical cancer is among the most preventable cancers — fatalism costs lives that screening and vaccination save.",
      "C": "Ultrasound images organs but cannot see the cellular changes of precancer — screening is a direct visual or cytology test of the cervix.",
      "D": "Douching has no protective effect, disturbs healthy vaginal flora and may push infection upward toward the uterus."
    },
    courseSlug: "community-health-nursing-1"
  },

  // ── YEAR 4 · CRITICAL CARE & EMERGENCY (4) ──────────────────
  {
    topic: "Early Warning Signs",
    type: "CLINICAL_SCENARIO",
    difficulty: "Clinical Reasoning",
    stem: "On a night shift, a patient admitted with severe malaria has a respiratory rate of 26, pulse 112, temperature 37.9 °C and new mild confusion; her blood pressure is still 118/74, and her observations three hours ago were normal. What does the track-and-trigger principle of early warning systems require?",
    options: [
      "Immediate escalation — the combined pattern of raised respiratory rate, tachycardia, low-grade fever and new confusion crosses the trigger threshold, so the nurse in charge and clinical team are called now and she is kept under close observation",
      "Reassurance — because the blood pressure is normal, the patient is stable and observations can continue at routine intervals",
      "Wait and re-check at the 06:00 round, since fever is expected in malaria",
      "Documentation only — chart the numbers and escalate only if the blood pressure falls"
    ],
    correctIndex: 0,
    explanation: "Early warning scores exist because deterioration announces itself in exactly this pattern: rising respiratory rate, rising pulse, fever and new confusion each score points, and together they cross the trigger threshold that obliges the nurse to call for help now — not to wait for blood pressure to fall, which is the last and latest sign. New confusion alone is a high-scoring parameter because it reflects the brain's oxygenation and perfusion. The system works precisely so that 'she looks stable' cannot hide a trajectory: three hours ago she was normal, and the direction of travel is the finding. Calling early is the system working, never an overreaction.",
    whyOthers: {
      "B": "A normal blood pressure is maintained by compensation until it fails — the entire premise of early warning scores is that the earlier signs move first.",
      "C": "Fever alone is expected in malaria; the rising respiratory rate, tachycardia and new confusion layered on it are not — and deterioration moves fastest at night, when watching is thinnest.",
      "D": "Charting without escalating records the crash and lets it happen; blood pressure is the late sign that early warning systems were built to stop waiting for."
    },
    courseSlug: "critical-care-nursing"
  },
  {
    topic: "The ABCDE Approach",
    type: "MCQ",
    difficulty: "Clinical Reasoning",
    stem: "A patient arrives in the emergency area after a motorbike crash, bleeding steadily from a scalp wound and making a gurgling noise with every breath. Using the ABCDE approach, which problem must the nurse address first — and why?",
    options: [
      "The airway — gurgling suggests obstruction or flooding, and a blocked airway kills before any other problem on the list",
      "The scalp bleeding, because visible blood loss is the most dramatic finding and is right in front of the eyes",
      "The blood pressure, because shock is the biggest threat in trauma",
      "Splinting the suspected fractures, because movement can worsen the injuries"
    ],
    correctIndex: 0,
    explanation: "The ABCDE approach fixes problems in the order that kills fastest, and an obstructed or flooding airway kills first: the gurgling demands attention at A — position, suction if trained, help called — before anything else. The scalp bleeding is real and will be controlled with firm direct pressure at the C stage, but a patient whose airway is flooding dies with a perfectly bandaged scalp. Blood pressure is a late mover in shock, and fractures are assessed and splinted after the life-threats are cleared. The discipline of the fixed order is what stops the loudest, most visible problem from hijacking care away from the deadliest one.",
    whyOthers: {
      "B": "Visible bleeding pulls every instinct — but it is a C-stage problem controlled with pressure, and the gurgling airway is the A-stage threat that kills first.",
      "C": "Blood pressure holds until compensation fails — waiting for it to fall before acting is precisely the trap ABCDE exists to prevent.",
      "D": "Fractures are painful and real but not immediately lethal; they are managed after airway, breathing and circulation are secured."
    },
    courseSlug: "critical-care-nursing"
  },
  {
    topic: "Triage Categories",
    type: "MCQ",
    difficulty: "Moderate",
    stem: "A minibus accident on the main road sends six casualties to a small district hospital's emergency area within minutes. Which casualty should the triage nurse classify as the highest priority — the red, immediate category?",
    options: [
      "A silent, pale passenger breathing fast and shallow with bluish lips and drowsiness",
      "A passenger screaming loudly with pain from an obviously broken forearm",
      "A passenger walking around the yard with a bleeding scalp wound",
      "A loudly complaining passenger with no visible injury, demanding to be seen first"
    ],
    correctIndex: 0,
    explanation: "Triage means treating the worst first, not the loudest — and the quiet casualties are the dangerous ones. The silent, pale, drowsy passenger with fast, shallow breathing and bluish lips has threatened breathing and circulation, and cannot compete for attention by shouting, which is exactly why the red-immediate category exists: it rescues the patient who cannot advocate for herself. Screaming implies a working airway and enough perfusion and brain function to hurt loudly — a painful but stable fracture. The walking wounded with a controllable scalp wound waits after the red tag is secured, and the loudest complainer with no visible injury is reassured and re-checked, not promoted.",
    whyOthers: {
      "B": "Loud pain means airway, breathing and circulation are currently supporting protest — painful, but not the first threat to life.",
      "C": "A walking casualty with a controllable scalp bleed is a delayed category; walking itself demonstrates a measure of stability.",
      "D": "Volume is not a vital sign — triage runs on physiology, not on who demands attention, while ensuring he is re-checked and not quietly deteriorating."
    },
    courseSlug: "critical-care-nursing"
  },
  {
    topic: "Anaphylaxis",
    type: "CLINICAL_SCENARIO",
    difficulty: "Clinical Reasoning",
    stem: "Ten minutes after an antibiotic injection at a clinic, a 25-year-old patient develops a widespread itchy rash, swelling of the lips and tongue, a tight wheezy chest and a weak, rapid pulse. What must the student nurse do first?",
    options: [
      "Recognise anaphylaxis: stop the injection, shout for help, keep her still — flat with legs raised if she feels faint, sitting up if breathing is hardest — and support immediate treatment with the emergency medicines and oxygen the team directs",
      "Give her an antihistamine tablet from the counter and let her wait her turn to be seen",
      "Reassure her that medicine rashes are common and usually settle by themselves",
      "Send her home to rest and return tomorrow if the swelling has not resolved"
    ],
    correctIndex: 0,
    explanation: "Itchy rash plus lip and tongue swelling, wheeze and a weak pulse is anaphylaxis — a rapidly progressing allergic emergency that kills by airway swelling and shock, usually within minutes of the trigger. The first response is recognition and speed: stop the suspected drug, call loudly for help, and keep the patient still — flat with legs raised if faintness dominates, sitting up if breathing is the struggle — while adrenaline (given by the clinical team per protocol) and oxygen are brought. Antihistamines alone are far too slow and weak for anaphylaxis, oral anything is unsafe with a swelling mouth and throat, and sending the patient home forfeits the minutes that decide the outcome. Even after apparent recovery, the patient stays under observation because reactions can return.",
    whyOthers: {
      "B": "An antihistamine tablet is neither fast nor strong enough for an airway-closing reaction — and swallowing with a swelling throat risks aspiration.",
      "C": "Ordinary medicine rashes do not swell the airway, wheeze the chest and drop the pulse — this pattern is anaphylaxis until proven otherwise.",
      "D": "Anaphylaxis is a minutes-not-days emergency — home rest converts a treatable reaction into a cardiac arrest outside the clinic."
    },
    courseSlug: "critical-care-nursing"
  },

  // ── YEAR 4 · ETHICS & PROFESSIONAL PRACTICE (1) ─────────────
  {
    topic: "Confidentiality",
    type: "CLINICAL_SCENARIO",
    difficulty: "Hard",
    stem: "A woman's husband arrives at a district hospital ward and demands his wife's test result from a student nurse, saying that as the husband and the person who paid for her care he is entitled to it. Which response best reflects professional ethics?",
    options: [
      "Politely explain that results are shared only with the client's consent, and offer to support the couple to talk with the counselling team",
      "Give him the result, since he is her husband and paid for the care",
      "Tell him the result is 'normal' to keep the peace, whatever the truth is",
      "Refuse rudely and have security remove him for even asking"
    ],
    correctIndex: 0,
    explanation: "Confidentiality is a core duty under the NMC Ghana Code of Conduct — test results belong to the client, and neither marriage nor payment confers a right to another adult's health information. The professional response protects her confidentiality while keeping the door open: offering couple counselling, where disclosure is explored with her consent, also serves the husband's health. Fabricating a result breaches integrity and can endanger them both, while a rude dismissal stigmatises the asking and invites conflict. Respect and firmness can, and should, coexist in one sentence.",
    whyOthers: {
      "B": "Marriage and payment confer no automatic right to a client's health information — her consent is the key that unlocks it.",
      "C": "Inventing a result is dishonest, clinically dangerous for both partners and a serious disciplinary offence.",
      "D": "The refusal itself is correct, but rudeness is unprofessional and wastes the chance to offer constructive couple support."
    },
    courseSlug: "ethics-professional-practice"
  },

  // ── YEAR 4 · RESEARCH METHODS (1) ───────────────────────────
  {
    topic: "Choosing a Research Design",
    type: "MCQ",
    difficulty: "Hard",
    stem: "A final-year student wants to explore how patients and families at a district hospital experienced nursing care during the COVID-19 visiting restrictions. Which study design suits this aim best?",
    options: [
      "A qualitative descriptive study using semi-structured interviews",
      "A double-blind randomised controlled trial",
      "A retrospective analysis of national hospital statistics",
      "A laboratory-based experimental study"
    ],
    correctIndex: 0,
    explanation: "When the aim is to understand experience, meaning and perspective — how it felt, what mattered — a qualitative design with interviews is appropriate, because it yields rich narrative data that numbers cannot capture. A randomised controlled trial tests the effect of an intervention and is meaningless when there is nothing to allocate. Routine hospital statistics might show what happened during the restrictions, but are silent on how patients felt about it. Matching the design to the research question is the first and most consequential decision in any study — a beautifully analysed study of the wrong design answers nothing.",
    whyOthers: {
      "B": "An RCT compares allocated interventions; you cannot randomise a patient's lived experience of a past policy.",
      "C": "Statistics describe population patterns — they cannot speak to personal experience, which is the study's entire aim.",
      "D": "There is no laboratory element to experiences of visiting restrictions; this design belongs to bench science."
    },
    courseSlug: "research-methods"
  }
];
