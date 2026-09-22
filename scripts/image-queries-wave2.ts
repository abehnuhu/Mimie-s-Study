// Second-wave queries: modern clinical photos (avoids vintage book scans).
// Weak categories from wave 1 get better-phrased searches.
export interface Query {
  c: string;
  q: string;
  t: string[];
  cap: string;
}

export const QUERIES: Query[] = [
  // pregnancy & antenatal (core!)
  { c: "pregnancy", q: "pregnant woman antenatal clinic examination Africa", t: ["antenatal", "pregnancy", "clinic", "check"], cap: "Antenatal care in a clinic — the visit that catches problems early." },
  { c: "pregnancy", q: "nurse antenatal checkup pregnant patient", t: ["antenatal", "nurse", "pregnancy"], cap: "A nurse conducting an antenatal check." },
  { c: "pregnancy", q: "obstetric ultrasound examination sonographer", t: ["ultrasound", "pregnancy", "scan"], cap: "Obstetric ultrasound — seeing before meeting." },
  { c: "pregnancy", q: "pregnant woman third trimester portrait", t: ["pregnancy", "trimester"], cap: "Third trimester — near term, watchful waiting." },
  { c: "pregnancy", q: "fundal height measurement tape pregnant", t: ["fundal", "height", "measurement", "antenatal"], cap: "Fundal height — centimetres that track growth." },
  { c: "pregnancy", q: "blood pressure check pregnant woman clinic", t: ["blood", "pressure", "pregnancy", "vital"], cap: "BP check in pregnancy — the pre-eclampsia guard." },
  { c: "pregnancy", q: "iron folic acid tablets supplements", t: ["iron", "folate", "anaemia"], cap: "Iron and folate — daily anaemia armour." },
  // labour & delivery
  { c: "labour", q: "labour delivery room hospital bed modern", t: ["labour", "delivery", "room", "ward"], cap: "A modern delivery room, ready for anything." },
  { c: "labour", q: "caesarean section surgery operating theatre", t: ["caesarean", "surgery", "theatre"], cap: "Caesarean section in theatre." },
  { c: "labour", q: "partograph chart labour monitoring who", t: ["partograph", "labour", "monitoring"], cap: "The partograph — labour on one page." },
  { c: "labour", q: "placenta examination after delivery", t: ["placenta", "examination", "birth"], cap: "Placenta checked — completeness matters." },
  { c: "labour", q: "skin to skin mother newborn immediately after birth", t: ["skin", "skin", "newborn", "birth"], cap: "Skin-to-skin straight after birth." },
  { c: "labour", q: "nurse helping woman birth delivery", t: ["labour", "nurse", "delivery", "birth"], cap: "A nurse guiding a birth." },
  // newborn care
  { c: "newborn", q: "newborn baby wrapped blanket hospital", t: ["newborn", "baby", "warmth"], cap: "A warm, wrapped newborn — thermoregulation lesson one." },
  { c: "newborn", q: "newborn baby held by doctor examination", t: ["newborn", "examination"], cap: "The newborn exam — head to toe." },
  { c: "newborn", q: "baby weighed scale health worker", t: ["newborn", "weighing", "scale"], cap: "Weighing the newborn — growth point one." },
  { c: "newborn", q: "kangaroo mother care mother baby skin contact hospital", t: ["kangaroo", "care", "premature", "newborn"], cap: "Kangaroo mother care in practice." },
  { c: "newborn", q: "newborn jaundice phototherapy blue light hospital", t: ["jaundice", "phototherapy", "newborn"], cap: "Phototherapy for jaundice." },
  { c: "newborn", q: "premature baby incubator neonatal care", t: ["incubator", "premature", "nicu"], cap: "Premature care in an incubator." },
  { c: "newborn", q: "umbilical cord clamping newborn care", t: ["cord", "clamping", "newborn"], cap: "Cord clamping at birth." },
  { c: "newborn", q: "vaccination baby injection immunization clinic", t: ["immunization", "vaccination", "baby"], cap: "Baby immunisation day." },
  // breastfeeding & feeding
  { c: "feeding", q: "mother breastfeeding baby hospital support", t: ["breastfeeding", "feeding", "latch"], cap: "Breastfeeding with support nearby." },
  { c: "feeding", q: "breastfeeding positioning mother infant latch", t: ["breastfeeding", "position", "feeding"], cap: "Positioning for a good latch." },
  { c: "feeding", q: "cup feeding infant expressed milk hospital", t: ["cup", "feeding", "expressed"], cap: "Cup feeding expressed milk." },
  { c: "feeding", q: "breast pump expressing milk equipment", t: ["expressing", "pump", "milk"], cap: "Expressing milk — pump or hands." },
  // ward & clinical practice
  { c: "ward", q: "hospital ward nurses patients beds", t: ["ward", "hospital", "nurses"], cap: "A hospital ward in motion." },
  { c: "ward", q: "nurse station hospital corridor modern", t: ["ward", "nurses", "hospital"], cap: "The nurses' station — the ward's cockpit." },
  { c: "ward", q: "hospital bed patient care pillow", t: ["bed", "ward", "patient", "comfort"], cap: "Patient comfort — beds made with care." },
  { c: "communication", q: "nurse talking patient hospital consultation", t: ["communication", "patient", "nurse"], cap: "Nurse and patient — the therapeutic conversation." },
  { c: "communication", q: "doctor patient communication explaining", t: ["communication", "consultation"], cap: "Explaining clearly — informed care." },
  { c: "documentation", q: "nurse writing notes clipboard hospital chart", t: ["documentation", "notes", "chart"], cap: "Notes at the bedside — contemporaneous charting." },
  { c: "documentation", q: "medical chart paper record hospital folder", t: ["documentation", "records", "chart"], cap: "The patient record." },
  // community & public health
  { c: "community", q: "community health worker village Africa home visit", t: ["community", "health", "worker", "visit"], cap: "Community health on the move." },
  { c: "community", q: "health education session women group Africa clinic", t: ["health", "education", "community"], cap: "Health education with a community group." },
  { c: "community", q: "insecticide treated mosquito net bed", t: ["malaria", "prevention", "net"], cap: "Sleeping under a treated net." },
  { c: "community", q: "vaccination campaign africa children health", t: ["immunization", "campaign", "vaccination"], cap: "A vaccination campaign in the community." },
  { c: "water", q: "clean water drinking village tap Africa", t: ["water", "sanitation"], cap: "Clean water — health's foundation." },
  { c: "nutrition", q: "healthy food fruits vegetables market Africa", t: ["nutrition", "food", "diet"], cap: "Market nutrition — variety on the table." },
  { c: "nutrition", q: "balanced meal plate food groups", t: ["nutrition", "food", "groups"], cap: "A balanced plate." },
  // family planning
  { c: "family-planning", q: "contraception counseling health worker woman", t: ["family", "planning", "counselling"], cap: "Family planning counselling." },
  { c: "family-planning", q: "intrauterine device IUD contraception", t: ["iud", "contraception"], cap: "The IUD." },
  { c: "family-planning", q: "contraceptive pills pack oral", t: ["pills", "contraception"], cap: "Oral contraceptive pills." },
  { c: "family-planning", q: "condoms family planning hiv prevention", t: ["condom", "prevention"], cap: "Condoms — dual protection." },
  // emergency & critical care
  { c: "emergency", q: "emergency room hospital team stretcher", t: ["emergency", "hospital", "team"], cap: "An emergency team in motion." },
  { c: "emergency", q: "ambulance emergency medical services road", t: ["ambulance", "emergency", "referral"], cap: "The ambulance — referral in motion." },
  { c: "emergency", q: "CPR training manikin resuscitation course", t: ["cpr", "resuscitation", "training"], cap: "CPR practice on a manikin." },
  { c: "emergency", q: "bag mask ventilation resuscitation newborn training", t: ["resuscitation", "newborn", "airway"], cap: "Bag-mask ventilation practice." },
  // clinical skills
  { c: "hygiene", q: "hand washing soap hospital sink faucet", t: ["hand", "hygiene", "handwashing"], cap: "Handwashing at the sink." },
  { c: "hygiene", q: "hand sanitizer gel dispenser hospital", t: ["hand", "rub", "hygiene"], cap: "Alcohol hand rub." },
  { c: "hygiene", q: "WHO hand hygiene moments poster five", t: ["hand", "hygiene", "moments"], cap: "The five moments of hand hygiene." },
  { c: "ppe", q: "personal protective equipment gown mask gloves healthcare", t: ["ppe", "protective"], cap: "Full PPE for procedures." },
  { c: "ppe", q: "surgical mask face protection nurse wearing", t: ["mask", "ppe", "protection"], cap: "Mask on — protection for both." },
  { c: "instruments", q: "surgical instruments tray sterile operating", t: ["instruments", "sterile", "tray"], cap: "A sterile instrument tray." },
  { c: "instruments", q: "surgical scissors steel instruments closeup", t: ["scissors", "instruments", "surgical"], cap: "Surgical scissors — clean and counted." },
  { c: "sterilization", q: "autoclave machine clinic sterilization modern", t: ["autoclave", "sterilization"], cap: "The autoclave at work." },
  { c: "wounds", q: "wound dressing nurse bandage leg", t: ["wound", "dressing", "bandage"], cap: "Dressing a wound — clean technique." },
  { c: "wounds", q: "bandage rolled gauze first aid", t: ["bandage", "gauze", "wound"], cap: "Gauze and bandages — the dressing trolley." },
  { c: "injections", q: "injection syringe vaccine vial clinic", t: ["injection", "vaccination", "syringe"], cap: "Drawing up an injection." },
  { c: "injections", q: "intramuscular injection arm vaccination nurse", t: ["injection", "intramuscular", "vaccination"], cap: "Giving an IM injection." },
  { c: "iv", q: "intravenous infusion drip hospital patient", t: ["intravenous", "infusion", "drip"], cap: "An IV drip running." },
  { c: "iv", q: "iv cannula catheter insertion hand vein", t: ["cannula", "iv", "vein"], cap: "IV cannulation — the vein found." },
  { c: "iv", q: "blood transfusion bag hospital laboratory", t: ["transfusion", "blood"], cap: "Blood ready for transfusion." },
  { c: "medications", q: "medicine tablets pills blister pack", t: ["tablets", "medication", "oral"], cap: "Medicines in their packs — check three times." },
  { c: "medications", q: "pharmacy pharmacist medicines dispensing counter", t: ["pharmacy", "medication"], cap: "Dispensing at the pharmacy." },
  { c: "vitals", q: "nurse measuring blood pressure patient sphygmomanometer", t: ["blood", "pressure", "vital"], cap: "Measuring blood pressure." },
  { c: "vitals", q: "stethoscope chest auscultation nurse patient", t: ["stethoscope", "auscultation", "chest"], cap: "Auscultation — listening carefully." },
  { c: "vitals", q: "thermometer digital temperature measurement patient", t: ["temperature", "thermometer", "vital"], cap: "Temperature check." },
  { c: "vitals", q: "pulse oximeter finger oxygen saturation", t: ["oxygen", "saturation", "vital"], cap: "The pulse oximeter clip." },
  { c: "vitals", q: "fetal heart monitor doppler pregnancy auscultation", t: ["doppler", "fetal", "heart", "monitoring"], cap: "Listening to the fetal heart." },
  // basic sciences (modern renders)
  { c: "heart", q: "heart anatomy 3d render medical illustration modern", t: ["heart", "anatomy"], cap: "The heart in 3D — four chambers." },
  { c: "lungs", q: "lungs anatomy 3d medical illustration", t: ["lungs", "respiratory", "anatomy"], cap: "The lungs, visualised." },
  { c: "digestion", q: "digestive system anatomy illustration modern", t: ["digestive", "digestion", "anatomy"], cap: "The digestive tract, illustrated." },
  { c: "kidneys", q: "kidney anatomy 3d medical illustration", t: ["kidney", "urinary"], cap: "The kidneys, visualised." },
  { c: "nerves", q: "neuron synapse 3d illustration nerve cells", t: ["neuron", "nerve", "nervous"], cap: "Neurons and synapses." },
  { c: "repro-female", q: "female reproductive system 3d illustration uterus", t: ["reproductive", "female", "uterus", "anatomy"], cap: "The female reproductive anatomy." },
  { c: "repro-cycle", q: "menstrual cycle diagram illustration hormones", t: ["menstrual", "cycle", "hormones"], cap: "The menstrual cycle's rhythm." },
  { c: "repro-embryo", q: "fetus development 3d illustration womb", t: ["fetus", "development", "pregnancy"], cap: "Fetal development in the womb." },
  { c: "repro-genetics", q: "dna double helix 3d render illustration", t: ["dna", "genetics"], cap: "The DNA double helix." },
  { c: "cells", q: "cell structure 3d render organelles illustration", t: ["cell", "organelles"], cap: "A cell in 3D — organelles named." },
  { c: "research", q: "laboratory researcher microscope data analysis", t: ["research", "laboratory"], cap: "Research in the lab." },
  { c: "leadership", q: "medical team meeting discussion hospital conference", t: ["leadership", "team", "meeting"], cap: "The team meeting — where leadership shows." },
];
