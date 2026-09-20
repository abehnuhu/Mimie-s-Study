import type { SeedQuestion } from "./types";

// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — QUESTION BANK
// 48 exam-grade questions covering the full 4-year BSc Midwifery journey (Ghana).
// Style: prioritization, interpretation, exception and scenario questions — no "What is X?" drilling.
// Safety: no doses; recognition + escalation focus; Ghanaian district-hospital context.
// Mix: 18 MCQ · 16 CLINICAL_SCENARIO · 6 TRUE_FALSE · 4 MULTI_SELECT · 4 ORDERING
// ─────────────────────────────────────────────────────────────

export const questionBank: SeedQuestion[] = [
  // ── YEAR 1 · ANATOMY & PHYSIOLOGY (5) ───────────────────────
  {
    topic: "Pelvic Anatomy",
    type: "MCQ",
    difficulty: "Easy",
    stem: "During a prenatal class at a community clinic, a student midwife is teaching expectant mothers about the pelvis. Which of the following is NOT part of the bony pelvis?",
    options: ["Ilium", "Ischium", "Pubis", "Femur"],
    correctIndex: 3,
    explanation: "The bony pelvis is formed by the two hip bones — each a fusion of ilium, ischium and pubis — together with the sacrum and coccyx at the back. The femur is the long thigh bone; it forms the hip joint with the acetabulum of the pelvis but is not part of the pelvis itself. Knowing the pelvic bones and their landmarks is the foundation for later lessons on the birth canal and engagement. The three hip-bone components in the other options are all genuinely pelvic bones.",
    whyOthers: {
      "A": "The ilium is the large, flared upper portion of each hip bone and is very much part of the bony pelvis.",
      "B": "The ischium forms the lower, posterior part of the hip bone — the part that bears weight when a woman sits — so it belongs to the pelvis.",
      "C": "The pubis is the front portion of each hip bone, meeting its partner at the pubic symphysis, a landmark midwives palpate constantly."
    },
    courseSlug: "anatomy-physiology-1"
  },
  {
    topic: "Fundal Height Assessment",
    type: "CLINICAL_SCENARIO",
    difficulty: "Easy",
    stem: "At a busy antenatal clinic in a district hospital, a student midwife measures a 24-week fundal height by placing the tape at the umbilicus and reads 14 cm. Her preceptor tells her the technique is wrong. Where should the tape measure have started?",
    options: ["At the upper border of the symphysis pubis", "At the umbilicus, which is a fixed landmark", "At the anterior superior iliac spine", "At the xiphoid process of the sternum"],
    correctIndex: 0,
    explanation: "Fundal height is measured from the upper border of the symphysis pubis to the top of the fundus, with a non-elastic tape, after the woman has emptied her bladder. Around the middle of pregnancy the fundal height in centimetres roughly tracks gestational age, so a well-measured value at 24 weeks is near 24 cm. The umbilicus sits at a different height in every woman, so anchoring there makes every reading inconsistent. Accurate technique matters more than any single number — the trend across visits is what flags growth problems.",
    whyOthers: {
      "B": "The umbilicus lies at a variable level depending on body habitus, so measurements from it cannot be compared between women or visits.",
      "C": "The anterior superior iliac spine is a lateral bony landmark of the pelvis, far from the midline path the tape must follow to the fundus.",
      "D": "The xiphoid process marks the top of the abdomen near where the fundus reaches only at term; starting there would produce a meaningless figure."
    },
    courseSlug: "anatomy-physiology-1"
  },
  {
    topic: "Uterine Position",
    type: "TRUE_FALSE",
    difficulty: "Easy",
    stem: "In the majority of women, the non-pregnant uterus normally lies anteverted and anteflexed over the bladder. True or False?",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "This is true. The normal uterus is usually tilted forward over the bladder (anteversion) and additionally bent forward at the cervix (anteflexion). A retroverted uterus is a common and usually harmless variant, although a retroverted gravid uterus occasionally causes urinary retention in early pregnancy. Recognising normal positions prepares students to interpret pelvic examination findings confidently rather than assuming every variation is disease.",
    whyOthers: {
      "B": "'False' is incorrect — the forward position over the bladder is the typical finding; retroversion exists but is the variant, not the majority."
    },
    courseSlug: "anatomy-physiology-1"
  },
  {
    topic: "Cardiac Circulation",
    type: "ORDERING",
    difficulty: "Moderate",
    stem: "A tutor at a midwifery college asks a Year 1 class to trace the path of blood through the heart, starting where deoxygenated blood enters the heart. Arrange the steps in the correct order.",
    options: [
      "Deoxygenated blood enters the right atrium from the superior and inferior vena cava",
      "It passes through the tricuspid valve into the right ventricle",
      "The right ventricle pumps it through the pulmonary valve into the pulmonary artery to the lungs",
      "Oxygenated blood returns through the pulmonary veins into the left atrium",
      "The left ventricle pumps it through the aortic valve into the aorta to the body"
    ],
    explanation: "The correct sequence is: vena cava → right atrium → tricuspid valve → right ventricle → pulmonary valve → pulmonary artery → lungs → pulmonary veins → left atrium → left ventricle → aorta. Remember that the right side of the heart handles deoxygenated blood while the left side handles oxygenated blood, which makes the pulmonary artery the only artery carrying deoxygenated blood and the pulmonary veins the only veins carrying oxygenated blood. Midwives need this circuit because pregnancy raises blood volume by 40–50% and stresses every part of it. Arranging the steps in order cements the one-way flow through the valves that keeps the circuit honest.",
    courseSlug: "anatomy-physiology-1"
  },
  {
    topic: "Blood Physiology in Pregnancy",
    type: "MCQ",
    difficulty: "Moderate",
    stem: "A routine antenatal laboratory report for a well, non-pale woman at 32 weeks shows a haemoglobin of 10.5 g/dL, down from 12.8 g/dL in the first trimester. How should the student midwife interpret this result?",
    options: [
      "As the physiological haemodilution of pregnancy, interpreted together with clinical signs and the overall trend",
      "As definite iron-deficiency anaemia requiring immediate treatment on the number alone",
      "As concealed internal bleeding requiring urgent ultrasound",
      "As a laboratory error, because haemoglobin should rise during pregnancy"
    ],
    correctIndex: 0,
    explanation: "In pregnancy, plasma volume expands by roughly 40–50% while red cell mass rises only about 20–30%, so haemoglobin and haematocrit fall slightly — the well-known physiological anaemia or haemodilution of pregnancy. A value around 10.5 g/dL in late pregnancy in a well woman fits this picture, and the dilution actually improves blood flow to the placenta. Decisions about iron supplementation follow local guidelines and the woman's clinical state, not one number in isolation. Interpreting laboratory results with the woman in front of you — pale or not, breathless or not — is a core midwifery habit.",
    whyOthers: {
      "B": "Treating on a single number without pallor, symptoms or a falling trend is premature — mild dilutional drops are expected and screening plus clinical assessment guide decisions.",
      "C": "Concealed bleeding in pregnancy typically announces itself with pain, contractions, fetal compromise or shock signs — none of which this woman has.",
      "D": "Haemoglobin normally falls rather than rises in pregnancy because of dilution, so this report is exactly what physiology predicts at 32 weeks."
    },
    courseSlug: "anatomy-physiology-1"
  },

  // ── YEAR 1 · FOUNDATIONS OF NURSING (4) ─────────────────────
  {
    topic: "Vital Signs Interpretation",
    type: "CLINICAL_SCENARIO",
    difficulty: "Easy",
    stem: "A student is reviewing four postnatal women on a district hospital ward. Which of these observations should concern her most as an early sign of deterioration?",
    options: [
      "Respiratory rate of 28 breaths per minute in a woman who had a caesarean birth this morning",
      "Blood pressure of 118/76 mmHg in a woman two days after a normal birth",
      "Oral temperature of 36.8°C in a woman on her first postpartum day",
      "Pulse of 72 beats per minute in a mother who is breastfeeding"
    ],
    correctIndex: 0,
    explanation: "A rising respiratory rate is one of the earliest and most sensitive warning signs of deterioration — from sepsis, bleeding, pain or chest complications — and it usually changes before blood pressure or temperature do. A rate of 28 per minute is above the normal adult range and must be re-checked, the woman examined and the finding reported to a senior midwife. The other three values sit comfortably within normal postnatal ranges. Learning to notice the quiet, early numbers is what makes observations worth taking at all.",
    whyOthers: {
      "B": "118/76 mmHg is a normal adult blood pressure and expected two days after an uncomplicated birth.",
      "C": "36.8°C is within the normal range and reassuring on day one.",
      "D": "A pulse of 72 beats per minute is normal; transient rises occur with pain or anxiety, but this value is unremarkable."
    },
    courseSlug: "foundations-nursing-1"
  },
  {
    topic: "Recognising Shock",
    type: "MCQ",
    difficulty: "Clinical Reasoning",
    stem: "A woman on the postnatal ward has a pulse of 118 beats per minute and a blood pressure of 88/54 mmHg, when her baseline was 124/78. What is the priority interpretation?",
    options: [
      "She may be developing hypovolaemic shock and needs immediate assessment and escalation",
      "This is a normal cardiovascular response to breastfeeding",
      "She is probably just anxious about her baby and needs reassurance",
      "She should be re-monitored after four hours before anyone is informed"
    ],
    correctIndex: 0,
    explanation: "A rising pulse combined with a falling blood pressure in a postpartum woman suggests significant blood loss or shock until proven otherwise — and postpartum bleeding can be concealed, with little visible at the vulva. The safe response is to stay with the woman, call for help and have her reviewed immediately. Waiting four hours, or explaining the finding away as anxiety or a breastfeeding effect, risks missing a life-threatening emergency. Systematic interpretation of paired vital signs against the woman's baseline is a habit that saves lives on maternity wards.",
    whyOthers: {
      "B": "Breastfeeding can cause small comfort-related changes, never a tachycardia of 118 with a 36-point systolic drop.",
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
    explanation: "This is true. The nursing process moves through assessment, diagnosis, planning, implementation and evaluation — and assessment runs through all of them, because evaluation feeds fresh assessment data back into the cycle. Clients' conditions change, especially in maternity care, so every encounter is a new opportunity to observe, listen and re-assess. This is why midwives are taught to keep watching their clients between formal observations rather than relying solely on the admission assessment.",
    whyOthers: {
      "B": "'False' treats assessment as a single admission event — a dangerous habit in maternity care where a woman's condition can change within the hour."
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
    stem: "A student midwife is assisting at a delivery in a district hospital when a sterile cord clamp falls from the trolley onto the floor. Which action is most appropriate?",
    options: [
      "Do not use it — obtain a new sterile clamp, and report the break in technique if the pattern keeps repeating",
      "Rinse the clamp under the tap and put it back on the field",
      "Wipe it with an alcohol swab and continue with it",
      "Use it, reasoning that the baby's cord stump is not sterile anyway"
    ],
    correctIndex: 0,
    explanation: "Once a sterile item touches a non-sterile surface, both the item and the area of the field it landed on are considered contaminated — the only safe response is to discard the item and replace it from a newly opened sterile supply. A tap rinse adds microbes rather than removing them, and a quick alcohol swab disinfects but does not sterilise an instrument. The umbilical stump is a direct route to the newborn's bloodstream, and cord infections such as omphalitis and neonatal tetanus remain real dangers in our setting. Patient safety beats convenience every single time, and speaking up about repeated breaks is part of a student's professional duty.",
    whyOthers: {
      "B": "Tap water is not sterile and recontaminates the clamp instantly — this makes things worse, not better.",
      "C": "Alcohol swabbing disinfects but does not achieve sterilisation, and the brief contact time on a dropped instrument is unreliable.",
      "D": "Even where the cord site carries some flora, the goal is to introduce the fewest possible microbes — deliberate contamination of an instrument entering the cord stump is never acceptable."
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
    topic: "Malaria Prevention in Pregnancy",
    type: "CLINICAL_SCENARIO",
    difficulty: "Moderate",
    stem: "A student midwife is giving a health talk to pregnant women at a CHPS compound in a rural community. Which message should she emphasise first for malaria prevention in pregnancy?",
    options: [
      "Sleep under an insecticide-treated bed net every night throughout the pregnancy",
      "Take a weekly herbal cleansing remedy to drive out 'fever blood'",
      "Avoid all fresh fruit during the rainy season",
      "Stay indoors all day to avoid mosquito bites"
    ],
    correctIndex: 0,
    explanation: "Malaria in pregnancy can cause severe anaemia, miscarriage, preterm birth and low birth weight, and it remains a leading killer of mothers and babies in Ghana. Consistent use of an insecticide-treated bed net is among the most effective protective measures a woman can control herself, which is why it heads the teaching list. Additional preventive measures are offered at ANC visits under national guidelines, but the health talk's daily actionable message is the treated net. The remaining options are harmful folklore, needless dietary fear, or simply bad mosquito biology.",
    whyOthers: {
      "B": "Unregulated herbal preparations may harm the fetus and have no proven protective effect — and self-medication can delay proper care.",
      "C": "Fresh fruit provides vitamins needed in pregnancy and has nothing to do with malaria transmission.",
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
      "Screening pregnant women for anaemia at the first antenatal visit",
      "Health education on handwashing at the market square",
      "Immunising children against measles",
      "Providing a borehole for clean drinking water to a village"
    ],
    correctIndex: 0,
    explanation: "Primary prevention stops disease before it starts — education, immunisation, sanitation and clean water all belong here. Secondary prevention detects existing disease early while it is easiest to treat, so screening for anaemia, hypertension, HIV or cervical changes at ANC is the classic example. Tertiary prevention limits the damage of established disease, such as physiotherapy after stroke. Sorting activities into these levels helps a nurse decide where limited community resources will do the most good.",
    whyOthers: {
      "B": "Handwashing education prevents infection before it ever occurs — textbook primary prevention.",
      "C": "Immunisation protects children before exposure — the flagship example of primary prevention.",
      "D": "A borehole removes the cause of waterborne disease before anyone is infected — primary prevention at community level."
    },
    courseSlug: "health-promotion-1"
  },

  // ── YEAR 2 · MEDICAL-SURGICAL NURSING (3) ───────────────────
  {
    topic: "Postnatal Fever",
    type: "MCQ",
    difficulty: "Moderate",
    stem: "A woman two days after caesarean birth has an oral temperature of 38.6°C. What should the student's FIRST action be?",
    options: [
      "Perform a focused assessment — wound, chest, urine, breasts — and report the findings",
      "Give an antipyretic immediately and chart 'fever resolved' when the temperature falls",
      "Remove all blankets, wait thirty minutes, and decide then",
      "Document the finding only, because fever is routine after surgery"
    ],
    correctIndex: 0,
    explanation: "Fever after birth has a long differential — endometritis, wound infection, mastitis, urinary infection, chest infection or malaria — and each is managed differently, so the first step is a focused assessment to find the source, followed by reporting and management under medical review. Simply lowering the number with an antipyretic masks the picture while the cause advances. Passive waiting or mere charting delays diagnosis of infection, which can progress to sepsis. Finding the source is what turns a fever from a number into a diagnosis.",
    whyOthers: {
      "B": "Suppressing the temperature does not treat the cause and may hide a deepening infection behind a normal-looking chart.",
      "C": "Cooling measures can play a role later, but assessment comes first — and 38.6°C on day two is far beyond 'low grade'.",
      "D": "Mild fever within 24 hours can reflect the stress of surgery, but fever at 38.6°C on day two demands active investigation."
    },
    courseSlug: "medical-surgical-nursing-1"
  },
  {
    topic: "Severe Anaemia in Pregnancy",
    type: "CLINICAL_SCENARIO",
    difficulty: "Clinical Reasoning",
    stem: "A woman at 32 weeks attends ANC in a district hospital. She is pale and breathless after walking across the waiting area, and her haemoglobin from last month is 7.2 g/dL. What is the priority action?",
    options: [
      "Escalate immediately to the midwife in charge for medical review, because severe symptomatic anaemia threatens mother and baby",
      "Reassure her that breathlessness is normal in late pregnancy and review next month",
      "Start her on oral iron at the counter and send her home with advice",
      "Tell her to eat more dark green leaves and return in four weeks"
    ],
    correctIndex: 0,
    explanation: "A haemoglobin of 7.2 g/dL in pregnancy is severe anaemia, and breathlessness on minimal exertion signals the heart is already straining against the 30–50% rise in pregnancy blood volume — she risks heart failure, and the fetus risks hypoxia and death. Severe anaemia also strips away any reserve if she haemorrhages at birth, the single most dangerous moment of her pregnancy. The safe move is urgent escalation for medical review, which may include admission and transfusion decisions made by the clinical team. Long-term diet and iron have their place — after the emergency is addressed.",
    whyOthers: {
      "B": "Breathlessness can be normal in mild late pregnancy, but combined with pallor and an Hb of 7.2 g/dL it is a warning, not reassurance.",
      "C": "Oral iron acts far too slowly for severe symptomatic anaemia, and starting it without medical review delays definitive care.",
      "D": "Dietary advice supports the long term but is useless as the sole response to a life-threatening haemoglobin level."
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

  // ── YEAR 2 · PATHOLOGY (2) ──────────────────────────────────
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
    stem: "Two women are on the postnatal ward with wounds. Woman A has a clean, closely approximated episiotomy sutured immediately after birth. Woman B has a perineal tear that was gaping and contaminated with stool when it was sutured several hours later. Which comparison is correct?",
    options: [
      "A heals by first intention; B heals by second intention with a higher risk of infection",
      "Both heal by first intention because both wounds were sutured",
      "A heals by second intention; B heals by first intention",
      "Both heal identically, because all perineal wounds behave the same"
    ],
    correctIndex: 0,
    explanation: "Healing by first intention occurs in clean, well-approximated wounds with minimal tissue loss, whose edges knit together quickly with minimal scarring. Healing by second intention occurs in gaping, contaminated or infected wounds with more tissue loss: the wound fills with granulation tissue from the base, contracts slowly and scars more. Woman B's delay and faecal contamination further raise her infection risk, so she needs closer observation for spreading redness, discharge and fever, plus meticulous perineal hygiene teaching. Understanding the two pathways explains why apparently similar wounds can recover at very different speeds.",
    whyOthers: {
      "B": "Suturing does not guarantee first-intention healing — contamination, delay and tissue loss can still force slow second-intention healing.",
      "C": "This reverses the definitions: the clean, approximated wound is the textbook first-intention case.",
      "D": "Healing depends on cleanliness, approximation, blood supply, nutrition and infection, all of which clearly differ between these two women."
    },
    courseSlug: "pathology-1"
  },

  // ── YEAR 2 · PHARMACOLOGY PRINCIPLES (3) ────────────────────
  {
    topic: "Medication Safety",
    type: "MCQ",
    difficulty: "Moderate",
    stem: "A student midwife is preparing a medication but finds the prescriber's handwriting illegible, and the name on the ward shelf looks confusingly similar to another drug. What should she do FIRST?",
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
    stem: "Which of the following are SAFE medication practices for a student midwife? Select ALL that apply.",
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
    explanation: "False. Inventing a 'half dose' is guessing with a client's life, and half of a wrong medicine is still the wrong medicine. The safe response when unsure is to stop, check and clarify with the prescriber, the pharmacist or the supervising midwife before anything is given. Giving nothing is always safer than giving something you do not understand. Asking questions early is exactly the habit supervisors want to see in a student — it is professionalism, not weakness.",
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
    topic: "Iron Nutrition in Pregnancy",
    type: "MCQ",
    difficulty: "Moderate",
    stem: "A student midwife is counselling a pregnant woman with mild anaemia on diet at a district clinic. Which advice is the most useful and accurate about iron absorption in a Ghanaian setting?",
    options: [
      "Pair iron-rich meals with vitamin C sources like oranges or pawpaw, and keep tea away from mealtimes",
      "Take iron-rich foods together with strong tea to settle the stomach",
      "Eat iron-rich foods only at supper and never in the morning",
      "Boil all leafy greens for several hours until completely soft"
    ],
    correctIndex: 0,
    explanation: "Vitamin C strongly enhances absorption of the non-haem iron in plant foods such as dark green leaves, beans and fortified cereals, while the tannins in tea and coffee bind iron and block its absorption — a real issue in Ghana, where tea is often taken with meals. Practical advice is to pair meals with fruit and to move tea drinking at least an hour away from iron-rich foods. Time of day does not change absorption, and prolonged boiling destroys the very vitamin C and folate the woman needs, so greens should be lightly cooked. Simple food pairing is one of the most powerful nutritional tools a midwife carries.",
    whyOthers: {
      "B": "Tea contains tannins that bind dietary iron in the gut — taking it with food directly blocks the absorption she needs.",
      "C": "The time of day has no effect on iron absorption; this advice adds nothing and may reduce adherence.",
      "D": "Hours of boiling leach out and destroy vitamin C and folate — light cooking preserves the nutrients in leafy greens."
    },
    courseSlug: "nutrition-dietetics"
  },
  {
    topic: "Weight Patterns in Pregnancy",
    type: "CLINICAL_SCENARIO",
    difficulty: "Moderate",
    stem: "At an antenatal clinic, a student reviews three women's records. Woman A has gained 9 kg by 30 weeks. Woman B has gained only 3 kg by 34 weeks and looks pale and tired. Woman C gained 1 kg in the last week alone and her ankles are newly swollen. Which woman's findings matter most right now?",
    options: [
      "Woman C — sudden weight gain with new swelling may signal pre-eclampsia developing",
      "Woman A — 9 kg by 30 weeks is excessive and needs diet restriction",
      "Woman B — weight gain is naturally slow in late pregnancy, so there is no urgency",
      "All three are normal patterns needing review only at the next routine visit"
    ],
    correctIndex: 0,
    explanation: "A sudden jump in weight over one week with new-onset dependent oedema is a classic warning of pre-eclampsia, because the gain is retained fluid rather than tissue — and pre-eclampsia can progress to eclampsia within days. This finding should drive today's blood pressure check and urine testing for protein, and the plan that follows. Woman B also needs assessment of diet and anaemia, but a slow steady pattern is not the one that kills quickly. Woman A's gain is broadly within the usual 9–12 kg course of pregnancy, and pregnancy is never the time for restrictive dieting.",
    whyOthers: {
      "B": "Around 9 kg by 30 weeks is within the usual total gain for a normal pregnancy — restriction in pregnancy harms the baby.",
      "C": "Grossly slow weight gain with pallor and fatigue suggests undernutrition and possible anaemia — she needs support and assessment, not dismissal.",
      "D": "Treating three clearly different patterns as 'routine' would miss both growing undernutrition and a hypertensive warning sign."
    },
    courseSlug: "nutrition-dietetics"
  },

  // ── YEAR 3 · NORMAL PREGNANCY (4) ───────────────────────────
  {
    topic: "Quickening",
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
    explanation: "Quickening — the mother's first perception of fetal movement — is typically felt at about 18–20 weeks in a primigravida and 16–18 weeks in a multigravida, because a first-time mother is still learning what the fluttering feels like. At 19 weeks, with a fetal heartbeat and a fundal height matching dates, this pregnancy is progressing normally. Kind reassurance paired with clear safety-net advice — return if no movements are felt by about 24 weeks or if movements reduce once established — is both humane and safe. Announcing probable fetal death without a single supporting sign is as wrong as it is cruel.",
    whyOthers: {
      "B": "Nothing in the findings supports fetal death — a present heartbeat and a fundus grown to dates indicate a live, growing baby.",
      "C": "Many first-time mothers feel movement only after 18 weeks; this statement would create needless alarm.",
      "D": "Quickening helps confirm gestational age and builds the maternal bond — and any worried mother deserves a real answer, not a brush-off."
    },
    courseSlug: "normal-pregnancy"
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
    explanation: "A blood pressure of 150/96 with headache and visual disturbance at 34 weeks suggests severe pre-eclampsia, which can progress to eclamptic seizures or placental abruption with little warning. This combination is a referral trigger: urgent review today, with admission or transfer per local protocol and the midwife staying with the woman in the meantime. Fundal height slightly below dates deserves follow-up and ultrasound, but with a lively fetus it is not today's emergency. The remaining two findings sit within the normal range for pregnancy.",
    whyOthers: {
      "B": "Possible growth faltering needs follow-up and ultrasound, but a lively fetus makes this important rather than emergent.",
      "C": "This weight gain pattern with trace oedema is normal in late pregnancy.",
      "D": "Morning nausea at 18 weeks is uncomfortable but common and non-urgent."
    },
    courseSlug: "normal-pregnancy"
  },
  {
    topic: "Signs of Pregnancy",
    type: "TRUE_FALSE",
    difficulty: "Easy",
    stem: "A multigravida typically feels quickening earlier than a primigravida because she recognises the sensation sooner. True or False?",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "True. Multigravidae usually report quickening around 16–18 weeks, about two weeks before primigravidae, because they have felt fetal movement before and recognise the fluttering earlier. The fetus actually moves from about 8–9 weeks but is far too small for the mother to feel. Quickening is one of the presumptive signs of pregnancy and can help confirm gestational age where ultrasound dates are unavailable. Teaching first-time mothers what to expect helps them neither panic nor miss reduced movements later on.",
    whyOthers: {
      "B": "'False' contradicts obstetric teaching — experience genuinely brings earlier recognition of the same fetal movements."
    },
    courseSlug: "normal-pregnancy"
  },
  {
    topic: "Leopold's Maneuvers",
    type: "ORDERING",
    difficulty: "Moderate",
    stem: "A midwife is performing Leopold's maneuvers at 36 weeks to determine lie, presentation and position. Arrange the four maneuvers in their correct order.",
    options: [
      "First maneuver — palpate the fundus to identify which pole occupies it",
      "Second maneuver — place both hands on either side of the abdomen at umbilical level to locate the back and small parts",
      "Third maneuver — use thumb and fingers just above the symphysis pubis to identify the presenting part and whether it is engaged",
      "Fourth maneuver — face the woman's feet and palpate downward from the pelvic brim to judge the head's attitude and descent"
    ],
    explanation: "The correct sequence is: first, fundal palpation to determine whether the head or breech lies at the fundus; second, lateral palpation at umbilical level to map the smooth fetal back against the mother's left or right side; third, Pawlik's grip just above the pubis to identify the presenting part and engagement; and fourth, the pelvic grip facing the woman's feet, to judge flexion and descent of the head. The order is deliberate — you cannot reliably name the position before knowing where the back lies, nor judge engagement before identifying the presenting part. Performed gently on an emptied bladder, the four maneuvers give lie, presentation, position and engagement without any machine.",
    courseSlug: "normal-pregnancy"
  },

  // ── YEAR 3 · NORMAL LABOUR (4) ──────────────────────────────
  {
    topic: "Intrapartum Fetal Monitoring",
    type: "CLINICAL_SCENARIO",
    difficulty: "Clinical Reasoning",
    stem: "During the first stage of labour at a district hospital, a student listens to the fetal heart rate for a full minute after a contraction and counts 96 beats per minute. After turning the woman onto her left side, she re-counts 100 beats per minute. What should she do first?",
    options: [
      "Recognise persistent fetal bradycardia, stay with the woman, call the midwife in charge and prepare for urgent action",
      "Document the rate as within normal limits because 100 is a round number",
      "Continue routine two-hourly monitoring and re-listen at the next interval",
      "Tell her the baby is just sleeping and encourage her to walk around to speed things up"
    ],
    correctIndex: 0,
    explanation: "A fetal heart rate persistently below about 110 beats per minute is fetal bradycardia — a danger sign of fetal compromise, often from cord compression or placental insufficiency. Two readings in this zone even after repositioning mean the student's job is to escalate now: call the midwife in charge, keep the woman on her side, stay with her and prepare for possible expedited birth. Charting it as normal, waiting for the next routine check or sending the mother walking all abandon the baby to ongoing hypoxia. Intermittent auscultation saves lives only when abnormal findings are acted on immediately.",
    whyOthers: {
      "B": "Neither 96 nor 100 is within normal fetal limits — rounding a number does not make distress disappear.",
      "C": "Two-hourly re-checking is the routine for a normal trace, not the response to repeated bradycardia.",
      "D": "Walking cannot fix a bradycardic fetus and 'the baby is sleeping' is not an interpretation — escalation with continuous presence is required."
    },
    courseSlug: "normal-labour"
  },
  {
    topic: "Stages of Labour",
    type: "MCQ",
    difficulty: "Moderate",
    stem: "Which combination of findings best tells the midwife that a woman has moved from the first stage of labour into the second stage?",
    options: [
      "The cervix is fully dilated, contractions are strong, and the woman feels an irresistible urge to bear down",
      "The membranes rupture, whatever the state of the cervix",
      "Contractions become regular at five-minute intervals as labour begins",
      "The woman becomes chatty and hungry between contractions"
    ],
    correctIndex: 0,
    explanation: "The second stage begins at full cervical dilation and ends with the birth of the baby, and in practice the midwife confirms it by vaginal examination interpreted together with the woman's behaviour — strong contractions, involuntary grunting and the overwhelming urge to push. Rupture of membranes can happen at any point, even before labour begins, so it defines no stage. Regular five-minute contractions describe the active first stage. Transition typically makes a woman quieter and more inwardly focused, not talkative — but behaviour alone never replaces the vaginal examination.",
    whyOthers: {
      "B": "Membranes can rupture before labour or at any stage — the timing of rupture does not define the second stage.",
      "C": "Regular contractions at 5-minute intervals early on describe established first-stage labour.",
      "D": "Hunger and chattiness are early-labour features; transition usually brings withdrawal and quietness — and behaviour alone never replaces examination."
    },
    courseSlug: "normal-labour"
  },
  {
    topic: "Second Stage Management",
    type: "TRUE_FALSE",
    difficulty: "Moderate",
    stem: "In the second stage of labour, best practice is for the woman to push with every contraction as soon as the cervix is fully dilated, whether or not she feels the urge. True or False?",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "False. Current good practice supports spontaneous pushing — waiting for the woman's own urge and bearing-down reflex — because directed pushing on every contraction, especially with prolonged breath-holding, can exhaust her and reduce blood flow between contractions. Full dilation alone does not mean the presenting part has descended enough; waiting for the urge often makes the active pushing phase shorter and more effective. The midwife's role is support, positioning and encouragement, not a countdown shouted at every contraction. Where pushing proves ineffective, coaching is adjusted to the woman and the descent — never imposed as a blanket rule.",
    whyOthers: {
      "A": "'True' describes outdated directed pushing — pushing without the reflex exhausts the mother and may not shorten the second stage at all."
    },
    courseSlug: "normal-labour"
  },
  {
    topic: "Immediate Newborn Care",
    type: "ORDERING",
    difficulty: "Moderate",
    stem: "A term baby has just been born at a district hospital, crying vigorously. Arrange the steps of immediate newborn care in their recommended order.",
    options: [
      "Thoroughly dry the baby on the mother's abdomen, assess breathing and colour, and cover the head",
      "Clamp and cut the cord after a delay, once cord pulsation has stopped",
      "Place the baby skin-to-skin on the mother's chest and cover both together",
      "Support the mother to begin breastfeeding within the first hour",
      "Complete the full head-to-toe examination and give the routine injections and eye care per ward protocol"
    ],
    explanation: "The recommended sequence of essential newborn care is: dry and assess at the mother's abdomen within the first minutes — drying simultaneously stimulates breathing; then delay cord clamping until pulsation stops or at least a minute has passed, unless the baby needs resuscitation; then place the baby skin-to-skin on the mother's chest and cover both for warmth; support the first breastfeed within the hour; and only then carry out the detailed examination and give the routine injections and eye care per protocol. Warmth is a thread running through every step, because a cold newborn burns energy it cannot spare. The single exception is a baby who is not breathing, who moves to resuscitation immediately, before anything else.",
    courseSlug: "normal-labour"
  },

  // ── YEAR 3 · PUERPERIUM (2) ─────────────────────────────────
  {
    topic: "Fourth Stage Assessment",
    type: "CLINICAL_SCENARIO",
    difficulty: "Clinical Reasoning",
    stem: "Twenty minutes after a normal birth at a district hospital, a student midwife palpates a soft, boggy fundus at the umbilicus with a steady trickle of dark blood. What should she do first?",
    options: [
      "Massage the uterine fundus until it becomes firm and reassess, keeping the baby skin-to-skin and calling for help if it will not firm up",
      "Document the findings and re-assess in two hours",
      "Push down hard on the uterus to force out any clots",
      "Reassure the mother that all bleeding after birth is normal and observe quietly"
    ],
    correctIndex: 0,
    explanation: "A soft, boggy uterus soon after birth is uterine atony — the commonest cause of early postpartum haemorrhage — and the immediate response is uterine massage until the uterus is firm, combined with encouraging bladder emptying and skin-to-skin suckling, both of which help the uterus contract naturally. If the uterus will not stay firm or bleeding continues, she must escalate without delay, because postpartum haemorrhage can kill within minutes. This is why the immediate postpartum period, the 'fourth stage', demands checks of vital signs, fundal tone and bleeding at frequent, scheduled intervals. A firm uterus is the mother's life insurance after every birth.",
    whyOthers: {
      "B": "Waiting two hours on a soft, bleeding uterus is how women die — fourth-stage checks are scheduled every 15 minutes for good reason.",
      "C": "Forceful downward pressure on a freshly delivered uterus risks the rare but catastrophic complication of uterine inversion.",
      "D": "A steady trickle from a soft uterus is not normal lochia — after birth the uterus should feel firm and blood loss should be moderate."
    },
    courseSlug: "puerperium"
  },
  {
    topic: "Puerperal Involution",
    type: "MCQ",
    difficulty: "Moderate",
    stem: "On the third day after a normal birth, a midwife palpates the fundus 4 cm above the umbilicus, tender, with foul-smelling lochia and a temperature of 38.4°C. What do these findings suggest?",
    options: [
      "Possible retained products of conception and/or uterine infection requiring medical review",
      "Perfectly normal involution for the third postpartum day",
      "Normal breastfeeding changes that need no attention",
      "A full bladder only, so walking her to the toilet will solve everything"
    ],
    correctIndex: 0,
    explanation: "Immediately after birth the fundus sits at about the level of the umbilicus and then descends roughly one centimetre per day, so by day three it should be palpable below the umbilicus. A fundus still well above it, together with tenderness, foul-smelling lochia and fever, points to retained products of conception and/or puerperal infection — a common and treatable condition that becomes deadly when referral is delayed. The response is prompt medical review, which may include ultrasound and antibiotic decisions by the clinical team. This exact cluster of signs is what postnatal checks exist to catch.",
    whyOthers: {
      "B": "A fundus above the umbilicus on day three means involution is lagging, and the reason must be found.",
      "C": "Breastfeeding causes afterpains and at most a brief mild temperature — never a high, tender uterus with foul lochia.",
      "D": "A full bladder can lift the fundus, but it does not explain fever, tenderness and malodorous lochia — and emptying the bladder alone would not resolve this picture."
    },
    courseSlug: "puerperium"
  },

  // ── YEAR 3 · NEONATAL NURSING (3) ───────────────────────────
  {
    topic: "Newborn Respiratory Distress",
    type: "CLINICAL_SCENARIO",
    difficulty: "Clinical Reasoning",
    stem: "Two hours after a normal term birth, a student midwife notices the baby grunting with every breath, with chest recession and a respiratory rate of 72 per minute. The lips and tongue are pink. What should she do first?",
    options: [
      "Keep the baby warm, minimise handling, and arrange immediate review by the senior midwife while staying with the baby",
      "Give glucose water by mouth to settle the grunting",
      "Wrap the baby tightly and leave it to sleep in the nursery cot",
      "Document the findings and repeat the assessment on the next routine round"
    ],
    correctIndex: 0,
    explanation: "Grunting, chest recession and a respiratory rate above 60 per minute are danger signs of newborn respiratory distress — commonly transient tachypnoea of the newborn, but potentially sepsis or other causes that only review can separate. The priority is warmth, minimal handling and immediate escalation, because newborns can deteriorate within minutes. Feeding a grunting baby by mouth risks aspiration, and leaving a distressed baby unobserved in a distant cot turns minutes of reversible distress into catastrophe. Central pinkness is currently reassuring, but it does not cancel the other three warning signs.",
    whyOthers: {
      "B": "Grunting is a sign of respiratory distress, not hunger or wind — fluids given to a distressed baby can be aspirated.",
      "C": "Tight swaddling and isolation neither treat nor monitor distress — this baby needs observation and escalation, not sleep in a far cot.",
      "D": "A baby already showing danger signs needs assessment now; the next routine round is hours away."
    },
    courseSlug: "neonatal-nursing"
  },
  {
    topic: "Newborn Examination",
    type: "MCQ",
    difficulty: "Easy",
    stem: "A student midwife is examining a one-day-old term baby. All of the following findings are normal in a newborn EXCEPT one. Which is the exception?",
    options: [
      "Moulding of the skull bones after a vertex birth",
      "A salmon-pink birthmark on the eyelid",
      "Central cyanosis of the lips and tongue",
      "Peeling skin on the hands and feet"
    ],
    correctIndex: 2,
    explanation: "Central cyanosis — blue lips and tongue — is never normal; it signals poor oxygenation and demands immediate assessment of breathing and escalation. Moulding, the natural overlap of skull bones during passage through the birth canal, settles within days. Salmon-pink capillary marks on the eyelids, the common 'stork bites', fade during the first year. Dry, peeling skin of the hands and feet is normal adjustment of term skin, especially after 40 weeks. Sorting normal from abnormal on day one is the whole point of the newborn examination — and the lips and tongue are checked first for exactly this reason.",
    whyOthers: {
      "A": "Moulding is the expected overlap of skull bones in a vertex birth and resolves within a few days.",
      "B": "These benign vascular marks are among the commonest newborn birthmarks and fade spontaneously.",
      "D": "Desquamation of the hands and feet is normal in term babies, especially nearer and beyond 40 weeks."
    },
    courseSlug: "neonatal-nursing"
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
    courseSlug: "neonatal-nursing"
  },

  // ── YEAR 3 · REPRODUCTIVE HEALTH (3) ────────────────────────
  {
    topic: "Natural Family Planning",
    type: "MCQ",
    difficulty: "Moderate",
    stem: "Which woman can rely on the lactational amenorrhoea method (LAM) with reasonable effectiveness, according to its three criteria?",
    options: [
      "A mother 4 months postpartum, exclusively breastfeeding day and night, whose menses have not returned",
      "A mother 9 months postpartum, giving formula alongside two breastfeeds a day, whose menses returned",
      "A mother 5 months postpartum, already giving water and porridge alongside breastfeeding, still amenorrhoeic",
      "A mother 2 months postpartum, exclusively breastfeeding, whose menses returned last week"
    ],
    correctIndex: 0,
    explanation: "LAM is about 98% effective while three criteria hold together: the baby is under six months old, the mother is fully or nearly fully breastfeeding with no long gaps day or night, and menstruation has not returned. The first woman meets all three. Once any criterion is lost — the baby passes six months, other foods and fluids begin, or menses return — protection fades and another family planning method is needed. Good counselling therefore always pairs LAM with a transition plan, and the postpartum period is the golden window for that conversation in Ghanaian maternity care.",
    whyOthers: {
      "B": "The baby is past six months, feeding is mixed and menses have returned — all three criteria have failed.",
      "C": "Even with amenorrhoea, starting water and porridge breaks the fully-breastfeeding criterion, so LAM no longer protects.",
      "D": "The return of menstruation ends LAM's protection regardless of how exclusive the breastfeeding is."
    },
    courseSlug: "reproductive-health"
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
    courseSlug: "reproductive-health"
  },
  {
    topic: "Cervical Cancer Prevention",
    type: "MCQ",
    difficulty: "Hard",
    stem: "A 34-year-old mother of three attends a family planning clinic in Ghana and asks how she can protect herself from cervical cancer. Which advice is MOST appropriate?",
    options: [
      "Attend regular cervical screening where available, and support eligible girls to receive HPV vaccination — screening finds treatable early changes",
      "Nothing can be done to prevent it, so she should simply watch for late symptoms",
      "Rely on annual abdominal ultrasound scans, which show cervical cells directly",
      "Use herbal douches monthly to cleanse the cervix"
    ],
    correctIndex: 0,
    explanation: "Cervical cancer is caused by persistent infection with high-risk human papillomavirus, and prevention works on two fronts: HPV vaccination of girls before exposure, and regular screening of women — by visual inspection with acetic acid (VIA) or Pap smear — which detects precancerous changes that can be treated simply and affordably. Ghana's cervical cancer strategy depends on midwives and nurses encouraging women to come for screening, so this counselling moment is itself prevention work. The tragedy of cervical cancer is that most deaths occur in women who were never screened at all.",
    whyOthers: {
      "B": "Cervical cancer is among the most preventable cancers — fatalism costs lives that screening and vaccination save.",
      "C": "Ultrasound images organs but cannot see the cellular changes of precancer — screening is a direct visual or cytology test of the cervix.",
      "D": "Douching has no protective effect, disturbs healthy vaginal flora and may push infection upward toward the uterus."
    },
    courseSlug: "reproductive-health"
  },

  // ── YEAR 4 · ABNORMAL PREGNANCY (1) ─────────────────────────
  {
    topic: "Ectopic Pregnancy",
    type: "CLINICAL_SCENARIO",
    difficulty: "Clinical Reasoning",
    stem: "A 26-year-old woman attends a district clinic with 7 weeks of amenorrhoea, sudden sharp right-sided lower abdominal pain, and fainting when she stood this morning. She is pale, with a pulse of 112 and a blood pressure of 86/54 mmHg. What should the student midwife do first?",
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
    courseSlug: "abnormal-pregnancy"
  },

  // ── YEAR 4 · ABNORMAL LABOUR (1) ────────────────────────────
  {
    topic: "Obstructed Labour",
    type: "MCQ",
    difficulty: "Hard",
    stem: "A multigravida has been in labour for many hours at a district hospital. Which combination of findings most strongly indicates obstructed labour?",
    options: [
      "Full cervical dilation for hours with the head still high, a distended bladder, and a visible band forming above the pubis",
      "Strong contractions every three minutes with steady descent of the head",
      "Backache in labour with a vertex, anterior position",
      "Membranes rupturing at the onset of labour with clear liquor"
    ],
    correctIndex: 0,
    explanation: "Obstructed labour means the presenting part cannot descend despite adequate contractions — classically full dilation with a high head, a distended bladder, and the retraction band (Bandl's ring) rising between the upper and lower uterine segments as the uterus works against itself. Unrecognised, obstruction ends in uterine rupture, vesico-vaginal fistula or death, which is why prolonged labour demands continuous reassessment of descent, not just dilation. Steady descent with good contractions is the definition of normal progress. The remaining findings are routine labour events.",
    whyOthers: {
      "B": "Descent with effective contractions defines progress — the opposite of obstruction.",
      "C": "An occipito-posterior position causes backache and slower progress, but the full signature of obstruction is absent here.",
      "D": "Clear liquor at the start of labour is normal and even favourable — meconium-stained liquor would be the worrying variant."
    },
    courseSlug: "abnormal-labour"
  },

  // ── YEAR 4 · OBSTETRIC EMERGENCIES (2) ──────────────────────
  {
    topic: "Postpartum Haemorrhage",
    type: "CLINICAL_SCENARIO",
    difficulty: "Clinical Reasoning",
    stem: "Ten minutes after a home-birth transfer arrives at a district hospital, a woman soaks a fresh pad within five minutes. Her fundus is soft, her pulse is 118, and she is pale and restless. What is the priority action while help is summoned?",
    options: [
      "Rub up the uterine fundus until it is firm while calling for help and preparing for full PPH management",
      "Start a strict fluid-intake chart and wait for the doctor to arrive first",
      "Sit her upright to 'let the blood drain out' and observe",
      "Clean her up thoroughly for dignity before doing anything else"
    ],
    correctIndex: 0,
    explanation: "This woman has primary postpartum haemorrhage — significant bleeding within 24 hours of birth, most often from an atonic (soft) uterus, and the first move is always to massage the fundus into contraction while calling for help. The team then works systematically: uterine massage, bladder emptying, uterotonics per protocol, examination for trauma, and escalation to further interventions or referral if bleeding continues. Tachycardia with pallor means the clock is already running, since postpartum haemorrhage can kill in under an hour. Charting, positioning and clean-up never precede stopping the bleed.",
    whyOthers: {
      "B": "A fluid chart answers kidney and intake questions — it does nothing about active bleeding and wastes irreplaceable minutes.",
      "C": "Draining blood increases loss, and an upright position risks fainting; gravity is not a treatment for haemorrhage.",
      "D": "Dignity is preserved during care, but scrubbing first while she bleeds out confuses comfort with priority."
    },
    courseSlug: "obstetric-emergencies"
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
    courseSlug: "obstetric-emergencies"
  },

  // ── YEAR 4 · ETHICS & PROFESSIONAL PRACTICE (1) ─────────────
  {
    topic: "Confidentiality",
    type: "CLINICAL_SCENARIO",
    difficulty: "Hard",
    stem: "A woman's husband arrives at the district hospital maternity ward and demands her test result from a student midwife, saying that as the husband and the person who paid for her care he is entitled to it. Which response best reflects professional ethics?",
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
    stem: "A final-year student wants to explore how newly delivered mothers at a district hospital experienced care during the COVID-19 visiting restrictions. Which study design suits this aim best?",
    options: [
      "A qualitative descriptive study using semi-structured interviews",
      "A double-blind randomised controlled trial",
      "A retrospective analysis of national birth statistics",
      "A laboratory-based experimental study"
    ],
    correctIndex: 0,
    explanation: "When the aim is to understand experience, meaning and perspective — how it felt, what mattered — a qualitative design with interviews is appropriate, because it yields rich narrative data that numbers cannot capture. A randomised controlled trial tests the effect of an intervention and is meaningless when there is nothing to allocate. Routine birth statistics might show what happened during the restrictions, but are silent on how mothers felt about it. Matching the design to the research question is the first and most consequential decision in any study — a beautifully analysed study of the wrong design answers nothing.",
    whyOthers: {
      "B": "An RCT compares allocated interventions; you cannot randomise a mother's lived experience of a past policy.",
      "C": "Statistics describe population patterns — they cannot speak to personal experience, which is the study's entire aim.",
      "D": "There is no laboratory element to experiences of visiting restrictions; this design belongs to bench science."
    },
    courseSlug: "research-methods"
  }
];
