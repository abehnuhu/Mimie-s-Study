// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 3, Semester 1 — Batch B (Normal Labour + Puerperium)
// 17 lessons anchored to prisma/seed-data/anchors/y3s1-b.json
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "normal-labour",
    moduleTitle: "Foundations of Labour",
    lessonTitle: "Signs of Labour: True, False and Warning",
    description:
      "Every labour ward phone call starts the same way — is this the real thing? Here is how to tell true labour from the rehearsal, and the signs that mean come now.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the features that distinguish true labour from false labour.",
      "Explain the warning signs that require a woman to come to the facility immediately.",
      "Apply a triage framework to advise a woman who calls with contractions.",
    ],
    tags: ["signs of labour", "true labour", "false labour", "diagnosis", "triage"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "At 2am the phone rings at the CHPS compound. A woman at 39 weeks says, 'Nurse, tightenings have started — should I come?' What you say next can be the difference between a safe birth and a roadside emergency. Every midwife must sort the real thing from the rehearsal, quickly and calmly.\n\nLabour announces itself through the uterus and the cervix. Learn the language of both, and you will never be fooled by a rehearsal, nor dismiss the beginning of the real thing.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**True labour** is defined by progress. Contractions become **longer, stronger and closer together**, often starting in the back and sweeping round to the front like a wave. Rest, a warm bath or sleep does not switch them off. The 'show' — sticky mucus streaked with a little blood as the plug leaves the ripening cervix — often accompanies them. The decisive proof is the cervix: it effaces and dilates.\n\n**False labour** — Braxton Hicks tightenings — is irregular, changes nothing, and eases with rest or hydration; the belly hardens at the front without the back-to-front wave, and the cervix stays closed. Then the warning signs, which override every contraction pattern: bleeding that soaks a pad, fluid leaking, fever, severe headache with blurred vision or epigastric pain, a baby gone quiet, and contractions before 37 weeks. Any of these means come now.",
      },
      {
        type: "clinical_pearl",
        body: "Sleep is a good screening test. False labour lets a woman sleep; true labour wakes her and marches on. And never wave away bleeding as 'just show' — show is mucus streaked pink, not blood that soaks a pad.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Maame Adjoa, a third-time mother at 39 weeks, calls your CHPS compound at 11pm. She has had tightenings since supper — three in the last hour, at uneven intervals. She drank water, lay down and dozed between them. The baby has been lively all evening, and she asks whether she should start walking to the clinic now.\n\nGiven her story, is this likely true or false labour — and what will you advise before ending the call?\n\nAnswer: The pattern is classic false labour: irregular tightenings that ease with rest, with a lively baby. Advise rest, fluids and a light meal, and repeat the warning signs — fluid, bleeding, fever, severe headache, or a quiet baby. Because she is a multigravida whose labours move fast, she should come once contractions arrive every ten minutes or less, or sooner if her waters break or any warning sign appears.",
      },
      {
        type: "memory_trick",
        body: "TRUE labour SLIDES: Show, Lengthening contractions, Increasing strength, Dilatation, Effacement. No slide, no labour. And keep the five Bs that end a phone call fast: Bleeding, Burst of waters, Burning fever, Blinding headache, Baby gone quiet — plus contractions Before 37 weeks.",
      },
      {
        type: "summary",
        body: "- True labour: contractions that grow longer, stronger and closer together, unrelieved by rest, with cervical effacement and dilatation.\n- False labour: irregular Braxton Hicks tightenings that settle with rest, hydration or sleep, with a closed, unchanged cervix.\n- Multigravidae progress quickly — advise coming at contractions every ten minutes or less, or sooner.\n- Warning signs override every plan: bleeding, fluid leak, fever, severe headache or visual disturbance, a quiet baby, contractions before 37 weeks — come now.",
      },
    ],
    questions: [
      {
        topic: "Signs of Labour",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A woman calls at 39 weeks with contractions every seven minutes, each lasting 50 seconds and getting stronger; they wake her from sleep. What is the most likely diagnosis?",
        options: [
          "True labour, because the contractions are progressive and disrupt sleep",
          "False labour, because contractions near term are always Braxton Hicks",
          "True labour only if she also reports a gush of fluid",
          "False labour, because she has not yet passed the show",
        ],
        correctIndex: 0,
        explanation:
          "Progressive contractions — longer, stronger, closer, unrelieved by sleep — define true labour. Show and membrane rupture may come before, during or after labour begins, so their absence does not exclude it.",
        courseSlug: "normal-labour",
      },
      {
        topic: "Signs of Labour",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "The same caller mentions a pink-streaked mucous discharge this morning and asks if she should worry. What do you say?",
        options: [
          "It is antepartum haemorrhage and she must deliver in theatre",
          "It is the show — the mucus plug leaving the ripening cervix — which is normal as labour approaches",
          "It means the baby is distressed and she needs urgent transfer",
          "It signals placenta praevia and she must avoid all movement",
        ],
        correctIndex: 1,
        explanation:
          "Show is sticky mucus streaked with a little blood, shed as the cervix ripens — normal near term. Bleeding that soaks a pad is not show, and is always a come-now sign.",
        courseSlug: "normal-labour",
      },
      {
        topic: "Signs of Labour",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "At 38 weeks a woman calls reporting a sudden gush of warm fluid, contractions ten minutes apart, and the baby moving well. What is your advice?",
        options: [
          "Stay home until contractions are five minutes apart, to avoid a long admission",
          "Rest and re-examine in the morning, since the waters may reseal",
          "Come to the facility now, travelling on her side if possible",
          "Drink oral rehydration salts and monitor for fever at home",
        ],
        correctIndex: 2,
        explanation:
          "Ruptured membranes invite cord prolapse and ascending infection. With contractions established, she should come in now — lying on her side if the head is not fixed — for assessment of fetal wellbeing and labour progress.",
        courseSlug: "normal-labour",
      },
    ],
    flashcards: [
      {
        topic: "True vs False Labour",
        front: "Name three features separating true from false labour.",
        back: "True labour: contractions grow longer, stronger and closer; discomfort sweeps from back to front; rest and sleep do not ease them; the cervix effaces and dilates. False labour: irregular, front-only tightenings eased by rest, with no cervical change.",
      },
      {
        topic: "The Show",
        front: "What is the show, and how is it different from bleeding?",
        back: "Show = sticky mucus plug streaked with a little blood, shed as the cervix ripens — normal near term. Bleeding that soaks a pad is antepartum haemorrhage until proven otherwise — come now.",
      },
      {
        topic: "Triage Advice",
        front: "When should a multigravida be advised to come in?",
        back: "Earlier than a first-time mother — contractions about every ten minutes or less, since her cervix has opened before and labour can move quickly. Any warning sign beats any timing rule.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Intrapartum Care for a Positive Childbirth Experience",
        year: "2018",
        url: "https://www.who.int/publications/i/item/9789241550215",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241548993",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives, 17th edition",
        year: "2020",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "normal-labour",
    moduleTitle: "Foundations of Labour",
    lessonTitle: "Birth Preparedness: Ready Before the Day",
    description:
      "The best labours are the ones you planned. Transport, money, a decision-maker and a blood donor — the quiet work that saves lives at 2am.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the components of a birth and emergency preparedness plan.",
      "Explain why every pregnant woman and her family need a plan made early.",
      "Apply birth preparedness counselling to a woman living far from a facility.",
    ],
    tags: ["birth preparedness", "complication readiness", "planning", "anc counselling"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "When labour starts at 2am in a village forty minutes from the nearest tarmac road, the outcome was decided weeks earlier — by the plan, or by its absence. Birth preparedness and complication readiness is the quiet backbone of good antenatal care.\n\nThe plan is not paperwork; it is conversations and small decisions made in daylight, calmly, so that nobody is inventing a strategy in the middle of the night with a woman in pain.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "A complete plan answers five questions. **Where** will she deliver — a CHPS compound or midwife-led facility for a normal birth, a district hospital if risk factors exist? **How will she get there** — which vehicle, which driver, at what cost, and who pays at 2am? **Who decides** if she cannot — the husband, mother-in-law or family head who must grant permission quickly? **Who will donate blood** if she needs it, since blood is scarce and relatives are the commonest source? And **what will mother and baby need** — napkins, wraps, warm clothes and a packed bag with her health record.\n\nCounsel the woman — and whoever holds the purse and the permission — on the danger signs that mean go now. If she lives far, or has had a previous caesarean or obstructed labour, or expects her first baby, plan for her to wait near a functioning facility — a maternity waiting home — from about 38 weeks. Review the plan at every antenatal visit: a plan no one remembers is not a plan.",
      },
      {
        type: "clinical_pearl",
        body: "A birth plan that lives only in the woman's head is half a plan. Share it with the decision-maker, the driver and the whole household — so that when labour starts at night, everyone already knows their part.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At the antenatal clinic in a farming village, Maame Yaa's due date is six weeks away. Her home is a two-hour walk plus a river crossing from the district hospital, and the river rises in the rains. She is expecting her first baby. The midwife sits with her and her husband and writes a plan: the husband saves an emergency transport fund, a cousin with a motorbike is on standby, and the couple agrees she will move into the maternity waiting home near the hospital at 38 weeks.\n\nWhy is the waiting home the wisest piece of this plan?\n\nAnswer: A first labour is the longest and least predictable, and rising water can cut the family off from help. Waiting near the hospital converts a two-hour journey in labour into a ten-minute walk — so delay, the biggest killer of mothers, never gets a chance to start.",
      },
      {
        type: "memory_trick",
        body: "The birth kit is more than a bag. READY = Referral route and ride, Emergency fund, Attendant chosen, decision-maker + blood Donor, Your bag packed for mother and baby. Say it with each antenatal client until she can say it back.",
      },
      {
        type: "summary",
        body: "- A birth plan names the place of birth, the transport and driver, the money, the decision-maker and the blood donor — before labour starts.\n- Danger-sign counselling belongs to the whole family, not only the woman.\n- Far-dwelling or higher-risk women (first baby, previous caesarean or obstructed labour) should plan to wait near a functioning facility from about 38 weeks.\n- Review and rehearse the plan at every antenatal visit; a forgotten plan fails like no plan at all.",
      },
    ],
    questions: [
      {
        topic: "Birth Preparedness",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which question is NOT answered by a birth and emergency preparedness plan?",
        options: [
          "Where the woman will deliver and how she will get there",
          "Who gives permission and who donates blood if needed",
          "What transport and money are set aside for an emergency",
          "Which day the baby's naming ceremony will be held",
        ],
        correctIndex: 3,
        explanation:
          "Naming ceremonies are family joy, not birth preparedness. The plan covers place, transport, funds, decision-maker, blood donor, supplies and danger signs.",
        courseSlug: "normal-labour",
      },
      {
        topic: "Birth Preparedness",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A grand multigravida lives three hours from the nearest facility and wants to deliver at home as she did last time. Which element of her planning saves the most lives if the third stage goes wrong?",
        options: [
          "An extra set of clean napkins in the birth bag",
          "A pre-agreed vehicle, driver and emergency fund for immediate referral",
          "A traditional birth attendant who lives next door",
          "A written birth plan stored in the family's trunk",
        ],
        correctIndex: 1,
        explanation:
          "Postpartum haemorrhage kills within hours. Pre-arranged transport and money turn a three-hour delay into a race she can win; supplies and paperwork alone cannot.",
        courseSlug: "normal-labour",
      },
      {
        topic: "Birth Preparedness",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "At 38 weeks of a first pregnancy, with home two hours from the hospital across a seasonal river, the best advice is:",
        options: [
          "Walk daily to stay fit for a home birth",
          "Move into the maternity waiting home near the hospital",
          "Wait for labour, then hire the fastest available taxi",
          "Book an elective caesarean at the regional hospital",
        ],
        correctIndex: 1,
        explanation:
          "First labours are long but can turn without warning, and the river may be uncrossable by the time help is needed. A waiting home removes travel delay — the leading contributor to maternal death — while leaving the door open for a normal birth. Planning to hire a taxi only when labour starts leaves the outcome to luck.",
        courseSlug: "normal-labour",
      },
    ],
    flashcards: [
      {
        topic: "Birth Plan Components",
        front: "List five components of a birth and emergency plan.",
        back: "Place of birth and skilled attendant; transport and driver; emergency fund; decision-maker who can grant consent; blood donor — plus a packed bag and danger-sign knowledge for the family.",
      },
      {
        topic: "Blood Donor",
        front: "Why identify a blood donor before labour?",
        back: "Severe bleeding is the fastest killer of birthing mothers, and blood banks run short. A tested, willing relative identified in advance shortens the wait for transfusion from hours to minutes.",
      },
      {
        topic: "Maternity Waiting Home",
        front: "Who is a maternity waiting home for?",
        back: "Women living far from emergency obstetric care or with risk factors — first pregnancy, previous caesarean or obstructed labour, or a barrier like a seasonal river — who wait near the facility from about 38 weeks.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Antenatal Care for a Positive Pregnancy Experience",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549912",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241548993",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives, 17th edition",
        year: "2020",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "normal-labour",
    moduleTitle: "Understanding the Passenger",
    lessonTitle: "The Maternal Pelvis: The Passage",
    description:
      "The passage every baby must navigate — its bones, its narrows and its curves, and how a midwife judges fit without an X-ray.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the bones, landmarks and key diameters of the maternal pelvis.",
      "Explain why the pelvic canal is curved and why rotation is necessary in labour.",
      "Apply knowledge of pelvic types to assess the risk of obstructed labour.",
    ],
    tags: ["pelvis", "anatomy", "passage", "obstructed labour"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every birth is a negotiation between a passenger and a passage. The passage is the bony pelvis — and unlike the baby, it cannot change. Knowing its architecture tells you which labours to watch, which to support and which to send to the hospital.\n\nYou will not X-ray a pelvis in a district hospital. You will know it through landmarks you can feel, and through the story of how the baby travels — engagement, descent and the partograph.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Four bones form the pelvis: the **sacrum** and **coccyx** behind, and the two **innominate bones** at the sides and front — each a fusion of ilium, ischium and pubis. Three landmarks matter most. The **sacral promontory** juts forward at the top of the sacrum and marks the upper border of the inlet; the **ischial spines** point inward at mid-pelvis — the level we call station zero; the **pubic symphysis** forms the front door. The inlet admits about 11 cm in its useful anteroposterior diameter and about 13 cm across; the cavity narrows to the interspinous diameter of roughly 10.5 cm. And the canal is not straight — it curves along the sacral hollow. This **curve of Carus** is why a baby must descend, turn and pivot rather than drop straight through.\n\nPelvises come in shapes. The **gynaecoid** pelvis is round and roomy — the favourable, commonest type in women. The **android** pelvis is heart-shaped with a narrow front: a head can enter but arrest in the depths, the classic setup for obstructed labour. The **anthropoid** pelvis is a deep oval front to back; the **platypelloid** is flat and shallow, and the head may not engage at all. You rarely know the shape in advance — you learn it from how the labour behaves.",
      },
      {
        type: "clinical_pearl",
        body: "The best pelvimeter is the baby's own head. A head that engages, descends and rotates well is telling you the passage is generous; arrest with strong contractions, moulding and caput tells you the opposite — listen before it becomes obstruction.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A primigravida is reviewed at the antenatal clinic at 39 weeks. The head is freely movable above the brim — five-fifths palpable — and she is booked for birth at a CHPS compound an hour from the district hospital.\n\nWhat does the floating head raise in your mind, and what will you recommend?\n\nAnswer: In a first pregnancy the head is usually engaged by 37-38 weeks. A floating head at term raises cephalopelvic disproportion — perhaps an android pelvis — or malposition or excess fluid. Recommend birth where augmentation, instrumental delivery and surgery exist, so the plan can change without a panic transfer.",
      },
      {
        type: "memory_trick",
        body: "GAP: Gynaecoid is Golden, Android is Awkward (heart-shaped trouble), Platypelloid is Pancake-flat. And picture the passage as a house: the promontory is the roof (inlet), the spines are the narrow corridor (mid-pelvis), the symphysis is the front door (outlet).",
      },
      {
        type: "summary",
        body: "- Four bones — sacrum, coccyx and two innominate bones; key landmarks: sacral promontory, ischial spines, pubic symphysis.\n- The ischial spines mark station zero; the interspinous diameter (~10.5 cm) is the mid-pelvic pinch point.\n- The curve of Carus bends the canal — descent must include rotation and pivoting, never a straight drop.\n- Gynaecoid is favourable; android, anthropoid and platypelloid shapes raise the risk of obstruction or failed engagement — judged clinically by engagement, descent and partograph progress.",
      },
    ],
    questions: [
      {
        topic: "Pelvic Anatomy",
        type: "MCQ",
        difficulty: "Easy",
        stem: "During a vaginal examination you identify the ischial spines. What is their clinical significance?",
        options: [
          "They mark the narrowest diameter of the pelvic inlet",
          "They form the posterior wall of the pelvis",
          "They are the landmark for station zero — the level of descent of the presenting part",
          "They mark the beginning of the curve of Carus",
        ],
        correctIndex: 2,
        explanation:
          "The ischial spines are mid-pelvis landmarks: the presenting part at their level is station 0; above is minus, below is plus.",
        courseSlug: "normal-labour",
      },
      {
        topic: "Pelvic Anatomy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why must the fetus rotate during labour rather than pass straight through the pelvis?",
        options: [
          "The baby's shoulders are wider than its head",
          "The pelvic canal curves along the sacral hollow, and its usable diameters change orientation between inlet and outlet",
          "The umbilical cord is too short to allow straight descent",
          "The cervix directs the head toward the sacrum",
        ],
        correctIndex: 1,
        explanation:
          "The curve of Carus, plus the differing orientation of inlet and outlet diameters, forces the head to descend, flex and rotate — the mechanics behind the cardinal movements.",
        courseSlug: "normal-labour",
      },
      {
        topic: "Pelvic Types",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A multigravida has had two previous stillbirths from obstructed labour. Which pelvic type is she most likely to have, and where should she deliver?",
        options: [
          "Gynaecoid; a CHPS compound is fine",
          "Android; at a hospital with surgical capability",
          "Platypelloid; home birth with a midwife",
          "Anthropoid; no change of plan is needed",
        ],
        correctIndex: 1,
        explanation:
          "The heart-shaped android pelvis allows engagement but arrests deep descent — a classic cause of repeated obstructed labour. She needs a facility that can perform a caesarean.",
        courseSlug: "normal-labour",
      },
    ],
    flashcards: [
      {
        topic: "Pelvic Landmarks",
        front: "Name the bones of the pelvis and its three key landmarks.",
        back: "Sacrum and coccyx behind; two innominate bones (ilium + ischium + pubis fused) at the sides and front. Landmarks: sacral promontory (inlet's upper border), ischial spines (station zero, mid-pelvis), pubic symphysis (front).",
      },
      {
        topic: "Curve of Carus",
        front: "What is the curve of Carus and why does it matter?",
        back: "The J-shaped curve of the birth canal following the sacral hollow. It forces the baby to descend, flex, rotate and pivot — the mechanics of normal birth.",
      },
      {
        topic: "Pelvic Types",
        front: "Which pelvic type is the classic setup for obstructed labour?",
        back: "The android (heart-shaped) pelvis: the head engages but arrests at the mid-cavity with strong contractions — cephalopelvic disproportion and obstructed labour.",
      },
    ],
    sources: [
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
        note: "Free, peer-reviewed textbook — educational source, verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives, 17th edition",
        year: "2020",
      },
      {
        organization: "Elsevier",
        title: "Mayes' Midwifery, 16th edition",
        year: "2017",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "normal-labour",
    moduleTitle: "Understanding the Passenger",
    lessonTitle: "Fetal Attitude and Engagement",
    description:
      "A folded baby fits; a tipped-back baby struggles. Flexion, engagement and the two-fifths rule that tells you whether the head is in or still at the door.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Define lie, presentation, position and attitude of the fetus.",
      "Explain how flexion changes the presenting diameter of the head.",
      "Apply the fifths rule to assess engagement and interpret it in primigravidae and multigravidae.",
    ],
    tags: ["attitude", "flexion", "engagement", "fetal position", "abdominal palpation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Two questions decide most births: what part of the baby leads, and has it entered the pelvis? A well-folded cephalic baby that has dropped into the pelvis usually births itself; a deflexed or floating one keeps you watching.\n\nThis is the language of the passenger — attitude and engagement — and you will use it at every antenatal visit and every labour assessment.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Three related terms first. **Lie** is the relation of the baby's long axis to the mother's — longitudinal in almost all births. **Presentation** names the part over the inlet — vertex, brow, face, breech or shoulder. **Attitude** is the degree of flexion of the head on the chest. A fully **flexed** head — chin tucked to chest — presents the suboccipitobregmatic diameter, about 9.5 cm, the smallest the skull can offer. As the chin lifts, the presenting diameter grows: a deflexed (military) head tries about 11 cm, a brow nearly 13.5. The baby folds itself to fit.\n\n**Engagement** means the widest transverse diameter of the head — the biparietal — has passed through the pelvic inlet. Abdominally you feel it as **two-fifths or less** of the head above the symphysis; three-fifths or more means it is floating. In a primigravida, engagement by 37-38 weeks is the rule and the head stays fixed; a floating head at term in a first pregnancy raises the question of disproportion, malposition or a placenta in the way. In multigravidae the head often waits for labour itself — and an unengaged head with ruptured membranes is the classic setting for cord prolapse.",
      },
      {
        type: "clinical_pearl",
        body: "When membranes rupture, your first acts are auscultation of the fetal heart and a clean examination. An unengaged head leaves a gap the cord can slip through; a fixed head rarely lets it past.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A third-time mother arrives at your CHPS compound at term after a warm gush of fluid at home. On abdominal palpation the head is four-fifths above the symphysis and mobile. The fetal heart is 150 and she is contracting mildly.\n\nWhat is the immediate danger, and what do you do first?\n\nAnswer: An unengaged presenting part with ruptured membranes is the classic setup for cord prolapse. Examine at once with a clean glove: if you feel a pulsing cord beside the head, keep the presenting part off it — knee-chest or head-down position, call for urgent transfer, and keep your fingers elevating the head until relief arrives. If no cord is felt, auscultate the fetal heart and review progress closely; she should still deliver where obstetric help is near.",
      },
      {
        type: "memory_trick",
        body: "Two-fifths and below means DOWN it goes — engaged. Three-fifths or more means still at the door. And for attitude: the head folds like a prayer — chin to chest is 9.5 centimetres; lift the chin and you add centimetres with every degree.",
      },
      {
        type: "summary",
        body: "- Lie = long axis to the mother's; presentation = part over the inlet; attitude = flexion of the head on the chest.\n- Full flexion presents the suboccipitobregmatic diameter (~9.5 cm); deflexion trades up to military (~11 cm) or brow (~13.5 cm) diameters.\n- Engagement = biparietal diameter through the inlet; clinically, two-fifths or less palpable above the symphysis.\n- Primigravidae engage by 37-38 weeks; a floating head at term asks questions about fit and position, and an unengaged head with ruptured membranes means cord prolapse risk — auscultate and examine immediately.",
      },
    ],
    questions: [
      {
        topic: "Engagement",
        type: "MCQ",
        difficulty: "Easy",
        stem: "On abdominal palpation you feel two-fifths of the fetal head above the symphysis pubis. The head is:",
        options: [
          "Engaged — the biparietal diameter has passed the pelvic inlet",
          "Not engaged and freely mobile",
          "Too small for gestational age",
          "In a transverse lie",
        ],
        correctIndex: 0,
        explanation:
          "Two-fifths or less palpable above the symphysis defines engagement: the widest diameter has passed the brim and the head is fixed.",
        courseSlug: "normal-labour",
      },
      {
        topic: "Attitude",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A primigravida at 39 weeks has a freely movable head at the antenatal clinic. What is the most appropriate response?",
        options: [
          "Reassure her that heads always engage only in labour",
          "Reassure her — the head has dropped and birth is hours away",
          "Reassess and plan birth where augmentation and caesarean capability exist",
          "Book immediate induction at the CHPS compound",
        ],
        correctIndex: 2,
        explanation:
          "In first pregnancies the head is normally fixed by 37-38 weeks. A floating head at term raises disproportion, malposition or another cause — she should deliver where the plan can change.",
        courseSlug: "normal-labour",
      },
      {
        topic: "Attitude",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A fully flexed vertex presents which diameter, and why does flexion matter?",
        options: [
          "Occipitofrontal, about 11 cm, because flexion lengthens the skull",
          "Mentovertical, about 13.5 cm, the largest diameter",
          "Submentobregmatic, because the chin leads the way",
          "Suboccipitobregmatic, about 9.5 cm — the smallest diameter the skull can present",
        ],
        correctIndex: 3,
        explanation:
          "The tucked chin brings the suboccipitobregmatic diameter (~9.5 cm) to the brim — the best-fitting head. Deflexion trades up to military (11 cm) or brow (13.5 cm) diameters, which may not fit.",
        courseSlug: "normal-labour",
      },
    ],
    flashcards: [
      {
        topic: "Attitude",
        front: "Define attitude and name the diameter of the fully flexed head.",
        back: "Attitude = degree of flexion of the head on the chest. Full flexion presents the suboccipitobregmatic diameter, ~9.5 cm — the smallest and best-fitting.",
      },
      {
        topic: "Engagement",
        front: "The fifths rule: what counts as engaged?",
        back: "Two-fifths (or less) of the head palpable above the symphysis = engaged — the biparietal diameter has passed the inlet. Three-fifths or more = unengaged, still floating.",
      },
      {
        topic: "Cord Prolapse Risk",
        front: "Why is an unengaged head with ruptured membranes dangerous?",
        back: "A gap remains between head and brim that the cord can slip into — cord prolapse. Auscultate immediately, examine with a clean glove, and keep the presenting part off the cord if it is felt.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives, 17th edition",
        year: "2020",
      },
      {
        organization: "Elsevier",
        title: "Mayes' Midwifery, 16th edition",
        year: "2017",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241548993",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "normal-labour",
    moduleTitle: "Understanding the Passenger",
    lessonTitle: "Descent: The Journey Through the Pelvis",
    description:
      "Station by station, the baby travels. Learn to measure the journey — and to hear what no progress is telling you.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Define station and describe how descent is measured and charted.",
      "Explain the forces that drive fetal descent.",
      "Apply station trends to recognise obstructed labour early.",
    ],
    tags: ["descent", "station", "labour progress", "obstructed labour"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Dilatation opens the door; descent is the walk through it. A cervix can reach ten centimetres while the baby still sits high — and a labour that dilates but never descends is in trouble.\n\nStation turns the journey into numbers you can follow hour to hour, and it pairs with your abdominal palpation to tell one honest story.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Station** describes where the presenting part sits in relation to the **ischial spines**. At the spines, station is zero; above, minus one to minus five; below, plus one to plus five. At plus five the head is visible at the perineum — crowning. Abdominally you track the same journey in fifths of head palpable above the brim: as station falls, the fifths shrink. Both go on the partograph, so descent shows as a trend, not a snapshot.\n\nFour forces drive the baby down: the contraction-retraction of the upper uterine segment, the mother's bearing-down effort in the second stage, the straightening of the baby's body as it descends, and gravity when she is upright. Primigravidae usually descend with dilatation and complete in the second stage; multigravidae may descend late and fast. When strong contractions fail to bring descent — especially with growing caput and moulding — the pelvis is refusing the passenger, and the labour is heading for obstruction.",
      },
      {
        type: "clinical_pearl",
        body: "Measure descent with two hands, not one: fingers at the spines on examination, fingers on the abdomen counting fifths. When the two disagree, repeat after an hour — the trend is what warns you.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A primigravida has been in active labour for eight hours. Contractions are strong, four in ten. At 4pm she is 7 cm, station minus two. At 8pm she is 8 cm, still station minus two; the scalp shows caput ++ and the sutures overlap (moulding ++).\n\nWhat is this pattern telling you, and what should happen next?\n\nAnswer: Dilatation crawls while descent has stalled for four hours despite good power, with caput and moulding growing — a picture of cephalopelvic disproportion heading toward obstructed labour. She needs escalation now: the partograph has crossed the action line, so call the referral line, start intravenous access, and transfer her to a facility with caesarean capability. Waiting for full dilatation only deepens the obstruction and exhausts mother and baby.",
      },
      {
        type: "memory_trick",
        body: "The ischial spines are sea level: minus numbers float above the water, plus numbers dive below, and crowning means the head has surfaced on the perineum. If the tide never falls — no descent — the birth canal is blocked.",
      },
      {
        type: "summary",
        body: "- Station: the presenting part relative to the ischial spines — zero at the spines, minus above, plus below; plus five is crowning.\n- Track descent on the partograph in fifths palpable and station — trends, not single snapshots.\n- Descent is driven by uterine contraction-retraction, maternal pushing, straightening of the fetal body and gravity.\n- No descent with strong contractions, rising caput and moulding = suspected obstruction — refer before the pelvis and the baby collide harder.",
      },
    ],
    questions: [
      {
        topic: "Station",
        type: "MCQ",
        difficulty: "Easy",
        stem: "On vaginal examination the presenting part is at the level of the ischial spines. The station is:",
        options: [
          "Zero",
          "Plus two",
          "Minus two",
          "Plus five",
        ],
        correctIndex: 0,
        explanation:
          "The ischial spines define station zero — the midpoint of the passage. Above the spines the station is negative, below it positive.",
        courseSlug: "normal-labour",
      },
      {
        topic: "Obstructed Labour",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which finding pattern most strongly suggests obstructed labour?",
        options: [
          "Descent from minus two to plus one over four hours",
          "Strong contractions with station unchanged, caput ++ and moulding ++",
          "Dilatation to 10 cm with rapid second-stage descent",
          "Moderate contractions with steady cervical change",
        ],
        correctIndex: 1,
        explanation:
          "Good power without progress — no descent — plus caput and moulding says the pelvis will not admit the head. That is obstruction, and it needs referral, not waiting.",
        courseSlug: "normal-labour",
      },
      {
        topic: "Forces of Descent",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which of the following does NOT contribute to fetal descent?",
        options: [
          "Contraction and retraction of the upper uterine segment",
          "Maternal bearing-down effort in the second stage",
          "Sustained closure of the cervix around the presenting part",
          "Straightening of the fetal body during descent",
        ],
        correctIndex: 2,
        explanation:
          "Descent needs the cervix to open, not close. The other three, plus gravity in upright positions, drive the baby down.",
        courseSlug: "normal-labour",
      },
    ],
    flashcards: [
      {
        topic: "Station",
        front: "Define station.",
        back: "The level of the presenting part relative to the ischial spines: zero at the spines, minus one to five above, plus one to five below; plus five = crowning on the perineum.",
      },
      {
        topic: "Forces of Descent",
        front: "Name the four forces driving descent.",
        back: "Uterine contraction-retraction, maternal bearing down (second stage), straightening of the fetal body, and gravity when the mother is upright.",
      },
      {
        topic: "Obstructed Labour",
        front: "What picture signals obstruction on descent assessment?",
        back: "No fall in station despite strong contractions, with rising caput and moulding — the pelvis refusing the passenger. Escalate and refer.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Intrapartum Care for a Positive Childbirth Experience",
        year: "2018",
        url: "https://www.who.int/publications/i/item/9789241550215",
      },
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565493",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives, 17th edition",
        year: "2020",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "normal-labour",
    moduleTitle: "Monitoring & the Partograph",
    lessonTitle: "Maternal Monitoring in Labour",
    description:
      "The mother's vitals are the first place trouble whispers. How often to look, what to record, and which changes demand action now.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the recommended schedule of maternal observations in labour.",
      "Explain the significance of urine, temperature, pulse and blood pressure changes in labour.",
      "Apply this monitoring schedule to detect deterioration early.",
    ],
    tags: ["maternal monitoring", "vital signs", "partograph", "labour care"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "In labour you watch two patients at once — and the mother's body keeps the clearer diary. Her pulse, pressure, temperature and urine speak quietly before anything shouts.\n\nMonitoring is not paperwork between contractions; it is the early-warning system of the whole birth. Everything you find goes onto the partograph so the story survives the shift change.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "For a low-risk labour, the rhythm to remember is: **pulse hourly**, **blood pressure and temperature every four hours** — sooner if anything worries you — and a **urine check with every void** for volume, protein, ketones and glucose. Encourage fluids and a light diet in early labour, help her empty the bladder regularly, and record everything with the time. A companion of her choice stays with her; privacy, upright positions and encouragement are part of monitoring too, because a frightened woman tires faster.\n\nLearn the whispers. A quietly climbing pulse may be the first sign of bleeding, infection or exhaustion — it rises before the blood pressure falls. Temperature above 38 degrees after the membranes have ruptured warns of chorioamnionitis. Pressure of 140/90 or more with protein in the urine says pre-eclampsia, which can erupt into eclampsia in labour. Ketones speak of an empty stomach and a long labour. Any of these moves you from routine schedule to closer attention — and a call for help.",
      },
      {
        type: "clinical_pearl",
        body: "Trust the pulse before you trust the pressure. A young woman can hold her blood pressure while losing a great deal of blood — the climbing pulse is her first confession.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman at 6 cm has been in labour since midnight. Her pulse was 84 at 2am, 96 at 3am, 108 at 4am; her blood pressure is now 100/70 and her conjunctivae look pale. She says she just feels tired.\n\nWhat does this pattern suggest, and what will you do?\n\nAnswer: A rising pulse with a falling blood pressure and pallor suggests shock — possibly a concealed bleed or sepsis. Do not wait for collapse: call for help, insert an IV line and run fluids, raise her legs, monitor continuously and arrange urgent transfer. Chart every reading with the time — the trend is the evidence.",
      },
      {
        type: "memory_trick",
        body: "The labouring clock: Pulse on the hour, Pressure and Temperature every four, Pee with every void. And remember that trouble whispers before it shouts — the pulse climbs first.",
      },
      {
        type: "summary",
        body: "- Low-risk labour: pulse hourly; blood pressure and temperature 4-hourly; urine checked every void for volume, protein and ketones.\n- Chart everything with times on the partograph — trends beat single readings.\n- Rising pulse with falling pressure is early shock — act before collapse; fever after membrane rupture warns of infection; 140/90 plus protein warns of pre-eclampsia.\n- Companionship, hydration, bladder care and encouragement are monitoring too.",
      },
    ],
    questions: [
      {
        topic: "Maternal Monitoring",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the minimum recommended frequency for blood pressure and temperature checks in a low-risk labour?",
        options: [
          "Every 4 hours",
          "Every 30 minutes",
          "Every hour",
          "Only at admission and full dilatation",
        ],
        correctIndex: 0,
        explanation:
          "Recommended rhythm in low-risk labour: pulse hourly, blood pressure and temperature four-hourly, with more frequent checks when concerns arise.",
        courseSlug: "normal-labour",
      },
      {
        topic: "Maternal Monitoring",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A labouring woman's pulse rises from 80 to 110 over two hours while her blood pressure drifts from 118/74 to 96/60. What should you do first?",
        options: [
          "Recheck after another hour, since she is young",
          "Treat it as possible shock: call for help, secure IV access and arrange transfer",
          "Give oral paracetamol and encourage sleep",
          "Record it on the partograph and continue routine observations",
        ],
        correctIndex: 1,
        explanation:
          "A climbing pulse with a falling pressure is the earliest pattern of hypovolaemic shock in a young woman — act immediately, not after the next reading.",
        courseSlug: "normal-labour",
      },
      {
        topic: "Maternal Monitoring",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman at 8 cm has 2+ protein in her urine and blood pressure 150/95. What is the most likely concern?",
        options: [
          "A full bladder only",
          "Normal finding in active labour",
          "Urinary tract infection only",
          "Pre-eclampsia, with risk of eclampsia during labour",
        ],
        correctIndex: 3,
        explanation:
          "Hypertension with proteinuria defines pre-eclampsia, which can convulse in labour; she needs close monitoring, magnesium sulphate availability, and a plan for expedited delivery.",
        courseSlug: "normal-labour",
      },
    ],
    flashcards: [
      {
        topic: "Monitoring Schedule",
        front: "List the monitoring schedule for a low-risk labour.",
        back: "Pulse hourly; blood pressure and temperature 4-hourly; urine for volume, protein and ketones with every void; fetal heart every 15-30 minutes — all charted on the partograph with times.",
      },
      {
        topic: "Urine in Labour",
        front: "Why check ketones at every void?",
        back: "Ketones flag dehydration and carbohydrate depletion in a long, under-fed labour — treat with fluids and calories before exhaustion sets in.",
      },
      {
        topic: "Early Shock",
        front: "What does a rising pulse with falling blood pressure mean?",
        back: "Compensated shock — usually bleeding or sepsis in a young woman who holds her pressure until late. Call for help, IV access, transfer.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Intrapartum Care for a Positive Childbirth Experience",
        year: "2018",
        url: "https://www.who.int/publications/i/item/9789241550215",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241548993",
      },
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565493",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "normal-labour",
    moduleTitle: "Monitoring & the Partograph",
    lessonTitle: "Fetal Monitoring in Labour",
    description:
      "The fetal heart is the baby's voice in labour. When to listen, how long to count, and the patterns that demand action now.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the technique and timing of intermittent auscultation in labour.",
      "Explain normal and abnormal fetal heart rate findings and their meaning.",
      "Apply auscultation findings to decide when to escalate care.",
    ],
    tags: ["fetal monitoring", "fetal heart rate", "auscultation", "intermittent auscultation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The baby cannot tell you how labour feels — but the heart speaks for it. Between contractions, a steady 110 to 160 tells you the baby is coping; changes in rhythm or dips after contractions are its first complaints.\n\nIntermittent auscultation with a Pinard or Doppler is the skill that carries most of the world's births, including ours. Done properly, it catches nearly everything a machine would.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Listen with a Pinard stethoscope or Doppler **immediately after a contraction**, and count for **sixty seconds**. In active first-stage labour, auscultate at least every 15-30 minutes; in the second stage, every five minutes or with every pushing effort — and immediately when membranes rupture, when bleeding appears, or when the mother's condition changes. Note the **liquor** too: clear fluid is reassuring; meconium-stained fluid means the baby may have been stressed, and it matters most when the heart is also abnormal.\n\nThe normal baseline is **110-160 beats per minute** with a responsive, variable rhythm — the rate moves a little when the baby moves. Concerning patterns: a persistent rate below 110 or above 160, and **decelerations** — the heart dipping repeatedly after contractions and recovering slowly, as if gasping. Meconium plus repetitive decelerations is fetal distress until proven otherwise. If you find a concern, act: turn her onto her left side, stop any oxytocin drip, give intravenous fluids, call for help and reassess — if the pattern does not settle, the baby needs to be born by the fastest safe route.",
      },
      {
        type: "clinical_pearl",
        body: "Count a full sixty seconds, right after the contraction. The dip that matters arrives after the contraction peak — count only between contractions and you will miss it every time.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "In second stage, a mother pushes twice and you notice the fetal heart slowing to about 80 with each contraction, returning slowly to 150 over half a minute. The fluid you noted at rupture was lightly meconium-stained. The head is at plus two and visible on the perineum.\n\nWhat is happening, and what do you do?\n\nAnswer: Repetitive late decelerations with slow recovery, plus meconium, signal fetal compromise. Do not simply coach more pushing — call for help, reposition her to the left side, stop any oxytocin, and expedite the birth. Since the head is deep, a skilled attendant may complete delivery; have a bag-and-mask ready for the baby and explain to the mother, honestly and calmly, why we must hurry.",
      },
      {
        type: "memory_trick",
        body: "Count after, count full, count often: auscultate immediately after a contraction for sixty seconds — every 15-30 minutes in first stage, every 5 in second. The happy baby hums between 110 and 160.",
      },
      {
        type: "summary",
        body: "- Auscultate immediately after contractions for a full 60 seconds: every 15-30 minutes in first stage, every 5 minutes in second stage.\n- Normal baseline 110-160 with variability; abnormal: persistent bradycardia, tachycardia or repetitive decelerations.\n- Listen immediately after membrane rupture, bleeding, or any maternal change.\n- Meconium-stained liquor plus an abnormal heart is fetal distress — left lateral, stop oxytocin, fluids, call for help, expedite birth if it does not settle.",
      },
    ],
    questions: [
      {
        topic: "Fetal Monitoring",
        type: "MCQ",
        difficulty: "Easy",
        stem: "The normal baseline fetal heart rate in labour is:",
        options: [
          "110-160 beats per minute",
          "80-110 beats per minute",
          "160-200 beats per minute",
          "Any rate, as long as the baby is term",
        ],
        correctIndex: 0,
        explanation:
          "A baseline between 110 and 160 beats per minute with normal variability is the reassuring range; persistent values below or above call for assessment.",
        courseSlug: "normal-labour",
      },
      {
        topic: "Fetal Monitoring",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why should you auscultate immediately after a contraction rather than midway between contractions?",
        options: [
          "The heart is loudest between contractions",
          "The mother breathes more quietly then",
          "The Pinard works only on a relaxed uterus",
          "Late decelerations occur after the contraction peak and are missed otherwise",
        ],
        correctIndex: 3,
        explanation:
          "Repetitive late decelerations — dips that follow the contraction and recover slowly — are the classic sign of fetal hypoxia. Timing your listening right after contractions is how you catch them.",
        courseSlug: "normal-labour",
      },
      {
        topic: "Fetal Monitoring",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You find meconium-stained liquor with a fetal heart of 165 that does not settle after repositioning. The best next step is:",
        options: [
          "Continue routine monitoring and reassess in two hours",
          "Escalate: treat as suspected fetal distress and plan expedited birth",
          "Encourage the mother to sleep to conserve energy",
          "Give the mother glucose orally and repeat auscultation hourly",
        ],
        correctIndex: 1,
        explanation:
          "Persistent tachycardia with meconium suggests ongoing fetal compromise. First-line measures are reposition, stop oxytocin, fluids — and if unresolved, the baby must be delivered promptly.",
        courseSlug: "normal-labour",
      },
    ],
    flashcards: [
      {
        topic: "Auscultation Timing",
        front: "When and for how long do you auscultate the fetal heart in labour?",
        back: "Immediately after a contraction, counting a full 60 seconds — every 15-30 minutes in active first stage, every 5 minutes in second stage, and right after membrane rupture.",
      },
      {
        topic: "Decelerations",
        front: "What is a deceleration, and which type is most worrying?",
        back: "A dip in fetal heart rate with or after a contraction. Repetitive late decelerations — falling after the peak, recovering slowly — signal fetal hypoxia.",
      },
      {
        topic: "Meconium",
        front: "What does meconium-stained liquor mean?",
        back: "The baby has passed stool, which can reflect stress. Light meconium with a normal heart may be watched; meconium with an abnormal fetal heart is fetal distress until proven otherwise.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Intrapartum Care for a Positive Childbirth Experience",
        year: "2018",
        url: "https://www.who.int/publications/i/item/9789241550215",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241548993",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives, 17th edition",
        year: "2020",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "normal-labour",
    moduleTitle: "Monitoring & the Partograph",
    lessonTitle: "The Partograph: Labour on One Page",
    description:
      "One page that watches the whole labour. Plot honestly and the chart will shout delay long before any human has to.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the components of the WHO partograph.",
      "Explain the meaning of the alert and action lines.",
      "Apply partograph interpretation to decide when to reassess or refer.",
    ],
    tags: ["partograph", "alert line", "action line", "labour progress", "documentation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The partograph is the midwife's radar. On one page it tracks the baby's heart, the contractions, the fluid, the descent and the mother's vitals — and it lets a labour draw its own progress line against two famous boundaries.\n\nUsed honestly, it converts the dangerous phrase 'labour is just slow' into a decision that makes itself. Used carelessly, it is decoration.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Plot cervical dilatation starting from the active phase at about 4-5 cm. From that first mark, the **alert line** runs at one centimetre per hour to full dilatation — the minimum acceptable speed. The **action line** stands four hours to its right. Around the dilatation line sit the baby's side — fetal heart every half hour, liquor colour, moulding and descent in fifths — the contractions per ten minutes with strength, and the mother's side: pulse hourly, blood pressure and temperature four-hourly, urine, fluids and drugs.\n\nThe lines are a traffic system. Dilatation to the left of the alert line means normal progress. Touching or crossing the **alert line** means stop and reassess everything — the four Ps of power, passenger, passage and psyche; correct what you can, empty the bladder, and consider augmentation where it is safe. Crossing the **action line** is no longer watch-and-see: labour is prolonged, and the woman needs a decision — augmentation under monitoring, instrumental birth, surgery, or transfer. Cervical assessment is four-hourly in active labour, plotted the moment it is done.",
      },
      {
        type: "clinical_pearl",
        body: "Plot at the bedside, at the time you measure — not at the desk, not at the end of shift. A partograph updated late is a radar that reports the storm after the roof has gone.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A first-time mother is admitted at 6pm and plotted at 5 cm — the alert line starts there. At 10pm she is 6 cm. At 2am she is 7 cm, now past the alert line; at 6am she is still 7 cm, two hours beyond the action line, contractions weak at two in ten, station minus two, moulding ++. She is at a CHPS compound with no augmentation capability.\n\nWhat should happen — and when should it have started?\n\nAnswer: The full reassessment should have begun at 2am when the alert line was crossed — power, passenger, passage and psyche, with the bladder emptied and the family informed. Now past the action line with weak contractions and signs of obstruction, she needs immediate referral to a hospital with caesarean capability: IV access, referral note with the partograph itself, and transport arranged now — not after the next examination.",
      },
      {
        type: "memory_trick",
        body: "Alert means look closely; Action means act — and act means move the mother or move the plan. Four hours separate the lines: crossing the first earns a full reassessment, crossing the second earns a decision.",
      },
      {
        type: "summary",
        body: "- The partograph charts fetal heart, liquor, moulding, descent, dilatation, contractions and maternal vitals on one page.\n- Plot dilatation from the active phase (about 4-5 cm); the alert line marks minimum progress of 1 cm per hour, with the action line four hours to its right.\n- Cross the alert line: full reassessment of power, passenger, passage, psyche — correct what is correctable.\n- Cross the action line: prolonged labour — decide on augmentation, assisted birth or transfer; at CHPS level, that means referral now.",
      },
    ],
    questions: [
      {
        topic: "Partograph",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What does the WHO partograph alert line represent?",
        options: [
          "The maximum safe speed of dilatation",
          "The time at which labour must be induced",
          "The minimum acceptable progress of about 1 cm per hour from the start of active labour",
          "The boundary between latent and active labour",
        ],
        correctIndex: 2,
        explanation:
          "The alert line is the floor of acceptable progress — roughly 1 cm per hour from where plotting begins. Falling onto or beyond it triggers reassessment.",
        courseSlug: "normal-labour",
      },
      {
        topic: "Partograph",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A labour has crossed the action line at a CHPS compound without augmentation or surgical capability. Best response?",
        options: [
          "Continue observations for four more hours",
          "Give oxytocin from the emergency stock",
          "Rupture the membranes to speed labour",
          "Refer urgently to a facility with obstetric capability, sending the partograph and referral note",
        ],
        correctIndex: 3,
        explanation:
          "Crossing the action line means prolonged labour needing augmentation or possibly surgery — neither available at CHPS level. Arrange transfer with IV access and full documentation.",
        courseSlug: "normal-labour",
      },
      {
        topic: "Partograph",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which group of observations is recorded every 30 minutes on the partograph?",
        options: [
          "Blood pressure, pulse and temperature",
          "Fetal heart rate, contractions and liquor",
          "Cervical dilatation, station and effacement",
          "Urine output, ketones and fluid balance",
        ],
        correctIndex: 1,
        explanation:
          "Fetal heart, contraction frequency and liquor are half-hourly entries; maternal vitals run hourly to four-hourly, and dilatation is assessed four-hourly or on indication.",
        courseSlug: "normal-labour",
      },
    ],
    flashcards: [
      {
        topic: "Alert vs Action Line",
        front: "Alert line vs action line — meaning?",
        back: "Alert line = minimum progress (about 1 cm/h from active-phase plotting); crossing it demands full reassessment. Action line = 4 hours to the right; crossing it means prolonged labour requiring augmentation, assisted birth, surgery or transfer.",
      },
      {
        topic: "Partograph Entries",
        front: "What goes on the partograph every 30 minutes?",
        back: "Fetal heart rate, contraction frequency/duration and liquor colour — with descent in fifths and dilatation updated at each four-hourly examination.",
      },
      {
        topic: "Plotting Start",
        front: "When does plotting of the progress line begin?",
        back: "At the start of active labour — about 4-5 cm dilatation. Latent-phase observations stay on the admission record, not the progress line.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Intrapartum Care for a Positive Childbirth Experience",
        year: "2018",
        url: "https://www.who.int/publications/i/item/9789241550215",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241548993",
      },
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565493",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "normal-labour",
    moduleTitle: "Monitoring & the Partograph",
    lessonTitle: "Pain Management in Labour",
    description:
      "Labour pain is real and purposeful — and the midwife's presence is the first drug. Non-drug comfort, wise use of pethidine, and why support itself is medicine.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the sources of labour pain in each stage.",
      "Explain non-pharmacological and pharmacological options with their cautions.",
      "Apply comfort measures appropriate to the stage of labour and the setting.",
    ],
    tags: ["pain management", "labour support", "non-pharmacological", "pethidine"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "You cannot take a labouring mother's pain away, but you can change how she carries it. Midwives who master comfort make the whole ward calmer — and reach for fewer injections.\n\nKnow where the pain comes from, and both your hands and your drug cupboard become smarter.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "In the **first stage**, pain rises from cervical dilatation and the ischaemic uterus, referred through T10-L1 — felt in the lower abdomen and the small of the back. In the **second stage**, perineal and vaginal stretch travels S2-S4 — sharp, local and pushing-related. First-line relief is non-pharmacological: a companion of her choice (recommended by WHO — it measurably reduces pain perception and the need for analgesia), breathing and relaxation, sacral massage, freedom to move and change position, warm water where available, and your calm, continuous presence. A warm compress against the perineum in the second stage eases pain and reduces tears.\n\nWhere drugs are needed in a district setting, pethidine 100 mg intramuscularly with promethazine is the common prescription. Two cautions govern it: it crosses to the baby and can depress newborn breathing, so avoid it when birth is expected within about four hours — naloxone is the antidote if the baby arrives sleepy. Opioids also bring nausea, drowsiness and a mother less able to push. Epidural analgesia is excellent where available, but in most of our settings presence, position and encouragement do the heavy lifting. Never leave a mother alone because 'she has had her injection'.",
      },
      {
        type: "clinical_pearl",
        body: "Time your pethidine with the baby in mind: an injection given half an hour before birth eases the mother and taxes the newborn's first breaths. If birth is close, spend the drug budget on your hands — sacral pressure and a voice she trusts.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A second-time mother at 8 cm is begging for an injection. Her contractions come every three minutes; on your assessment the head is plus one and you expect birth within the hour. The fetal heart is normal.\n\nWhat is your best plan, and why not pethidine now?\n\nAnswer: With birth expected within the hour, pethidine would reach the baby almost undiminished and risk respiratory depression at the moment it matters most. Choose the fast tools: stay at her side, guide her breathing, press the sacrum with each contraction, and help her into an upright position. Explain honestly why this is the wrong hour for the injection — and that you will not leave her.",
      },
      {
        type: "memory_trick",
        body: "Labour pain has two chapters: T10-L1 writes the first (back and belly), S2-S4 writes the second (perineum). And remember the order of relief: Presence before Position, Position before Pressure, Pressure before Pethidine.",
      },
      {
        type: "summary",
        body: "- First-stage pain (cervix and uterus) travels T10-L1; second-stage pain (perineal stretch) travels S2-S4.\n- First-line relief: companion of choice, breathing, movement, upright positions, sacral massage, warm water, warm perineal compresses.\n- Pethidine: useful in strong first-stage pain, but avoid within about four hours of expected birth — newborn respiratory depression; naloxone reverses it.\n- Continuous support reduces perceived pain and analgesia use — presence is medicine, and no mother on analgesia should be left alone.",
      },
    ],
    questions: [
      {
        topic: "Pain Management",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which is the recommended first-line approach to labour pain in a low-resource setting?",
        options: [
          "Companionship, breathing, movement, position changes and massage",
          "Immediate epidural analgesia for every labouring woman",
          "Routine pethidine 100 mg for all women at 4 cm",
          "Restriction to bed with dim lights and silence",
        ],
        correctIndex: 0,
        explanation:
          "Continuous support and non-pharmacological comfort are safe, effective first-line measures — WHO recommends companionship for every labouring woman; drugs are additions, not substitutes.",
        courseSlug: "normal-labour",
      },
      {
        topic: "Pain Management",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why should pethidine be avoided when birth is expected within four hours?",
        options: [
          "It stops uterine contractions completely",
          "It causes maternal hypertension",
          "It is incompatible with oxytocin",
          "It crosses to the baby and can depress newborn breathing",
        ],
        correctIndex: 3,
        explanation:
          "Pethidine crosses the placenta; given near birth it can make the newborn slow to breathe, with naloxone as the antidote. Time doses for earlier labour.",
        courseSlug: "normal-labour",
      },
      {
        topic: "Pain Physiology",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother describes aching in her back and lower abdomen with each first-stage contraction, and sharp perineal burning late in labour. Which nerve roots carry each sensation?",
        options: [
          "Both are S2-S4",
          "Back and lower abdomen T10-L1; perineal burning S2-S4",
          "Both are T10-L1",
          "Back T1-T4; perineum L1-L2",
        ],
        correctIndex: 1,
        explanation:
          "Cervical and uterine pain refers through T10-L1 — lower abdomen and back; perineal and vaginal stretch travels the pudendal nerve, S2-S4.",
        courseSlug: "normal-labour",
      },
    ],
    flashcards: [
      {
        topic: "Pain Sources",
        front: "Where does labour pain come from in each stage?",
        back: "First stage: cervical dilatation and uterine ischaemia, referred T10-L1 — lower abdomen and back. Second stage: perineal and vaginal stretch via S2-S4.",
      },
      {
        topic: "Pethidine Caution",
        front: "Key caution with pethidine in labour?",
        back: "Avoid within about four hours of expected birth — it crosses the placenta and can depress newborn breathing; naloxone reverses it if needed.",
      },
      {
        topic: "Comfort Measures",
        front: "Why does a warm compress on the perineum count as pain relief?",
        back: "In the second stage it relaxes the perineum, eases burning pain and reduces perineal tearing — comfort and protection in one measure.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Intrapartum Care for a Positive Childbirth Experience",
        year: "2018",
        url: "https://www.who.int/publications/i/item/9789241550215",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Midwives",
        note: "Check for the current edition.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives, 17th edition",
        year: "2020",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "normal-labour",
    moduleTitle: "Managing Each Stage",
    lessonTitle: "Managing the First Stage of Labour",
    description:
      "The long stage done right: patience in the latent phase, an honest partograph in the active, and a clear decision when progress fails.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the phases of the first stage and their management.",
      "Explain the diagnosis of delay using the partograph and the four Ps.",
      "Apply first-stage management appropriately at CHPS and district level.",
    ],
    tags: ["first stage", "labour management", "four ps", "partograph", "prolonged labour"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The first stage asks for a rare combination: patience and vigilance at the same time. Most first stages care for themselves; a few quietly become emergencies.\n\nGood management is not heroics — it is companionable routine care, honest plotting, and knowing the difference between slow and stuck.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "From onset to full dilatation, two phases. The **latent phase** — up to about 4-5 cm — is slow by nature: mild, irregular contractions. Manage it with encouragement, hydration, light food, rest between walks and a companion; do not augment or admit to the labour ward in a hurry, because mislabelling latent as active labour is the commonest cause of unnecessary intervention. The **active phase** brings regular, strengthening contractions and rapid dilatation. Now the discipline starts: partograph from 4-5 cm, fetal heart every 15-30 minutes, maternal vitals on schedule, four-hourly examinations, freedom to move, and sips of fluid.\n\nWhen the alert line is crossed, work the **four Ps**. **Power**: are contractions adequate in frequency and strength? **Passenger**: is position or size the problem — head deflexed, occipito-posterior, moulding rising? **Passage**: is this disproportion — no descent, station stuck, caput growing? **Psyche**: fear, exhaustion, a full bladder, an empty stomach? Correct what is correctable; augment with oxytocin after amniotomy only where monitoring and capability exist. Obstructed labour is a referral problem — and remember what prolonged labour costs in our region: sepsis, rupture, fistula and stillbirth.",
      },
      {
        type: "clinical_pearl",
        body: "A full bladder and an empty stomach have ended more labours than anatomy has. Before calling a labour obstructed, empty the bladder, feed and calm the mother, and reassess — the four Ps include the ordinary ones.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A first-time mother reaches your CHPS compound at 8pm, 5 cm dilatation, plotted on the partograph with a normal fetal heart. At midnight she is 6 cm — on the alert line. At 4am she is still 6 cm, past the alert line; contractions are two in ten and weak; the head is minus two with moulding +. Your compound cannot augment labour.\n\nWhat is the plan?\n\nAnswer: Alert-line crossing at midnight called for a full reassessment. Now, with arrested dilatation, weak power and early moulding, she needs capability beyond the compound: call the district midwife, start IV access, empty the bladder, and transfer her with the partograph and a referral note while her condition is still good. Waiting four more hours risks an exhausted mother, an obstructed labour and a compromised baby — and a transfer in panic instead of in order.",
      },
      {
        type: "memory_trick",
        body: "The labour bus runs on four wheels: Power, Passenger, Passage, Psyche. When the bus stalls, check the driver (power), the load (passenger), the road (passage) and the fear (psyche) — the first and the last are fixable at your level.",
      },
      {
        type: "summary",
        body: "- Latent phase (to about 4-5 cm): encouragement, food, fluids, rest, companion — no augmentation.\n- Active phase: partograph, scheduled fetal and maternal monitoring, four-hourly examinations, mobility, support.\n- Alert line crossed: assess power, passenger, passage and psyche — correct what is correctable before escalating.\n- No descent with rising caput and moulding = obstruction — refer to surgical capability; prolonged labour costs sepsis, fistula, rupture and stillbirth.",
      },
    ],
    questions: [
      {
        topic: "First Stage",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which is appropriate management of the latent phase of labour?",
        options: [
          "Immediate amniotomy to accelerate progress",
          "Oxytocin infusion to establish a rhythm",
          "Encouragement, hydration, light food, rest and a companion",
          "Routine transfer to the regional hospital",
        ],
        correctIndex: 2,
        explanation:
          "The latent phase is normally slow; supportive care is all it needs. Augmenting a misdiagnosed latent phase is the classic route to unnecessary intervention.",
        courseSlug: "normal-labour",
      },
      {
        topic: "First Stage",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "The alert line is crossed. After emptying the bladder and supporting the mother, what is the next structured step?",
        options: [
          "Prepare for immediate caesarean at the CHPS compound",
          "Reassess power, passenger, passage and psyche, then decide on augmentation or referral",
          "Repeat vaginal examination every hour until delivery",
          "Reassure the family that all first labours are slow",
        ],
        correctIndex: 1,
        explanation:
          "Alert-line crossing demands a full four-P assessment to find the reason for delay — only then choose augmentation where capability and monitoring exist, or referral.",
        courseSlug: "normal-labour",
      },
      {
        topic: "Obstructed Labour",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which picture defines true obstructed labour rather than simple slow progress?",
        options: [
          "Steady dilatation of half a centimetre per hour in a calm mother",
          "Arrest of dilatation and descent with strong contractions, moulding ++ and rising caput",
          "Weak contractions that respond to oxytocin augmentation",
          "A latent phase lasting eight hours in a first-time mother",
        ],
        correctIndex: 1,
        explanation:
          "Obstruction is arrest despite power — the pelvis refusing the head, shown by heavy moulding, caput and no descent. It needs referral, not augmentation or waiting.",
        courseSlug: "normal-labour",
      },
    ],
    flashcards: [
      {
        topic: "Phases of First Stage",
        front: "Latent vs active phase — what differs in management?",
        back: "Latent (to about 4-5 cm): supportive care only — fluids, food, rest, companion; no augmentation. Active: partograph, scheduled monitoring, four-hourly examinations, augmentation only for proven delay where monitoring exists.",
      },
      {
        topic: "The Four Ps",
        front: "What are the four Ps of delayed labour?",
        back: "Power (contraction quality), Passenger (position, size, flexion, moulding), Passage (pelvic adequacy and descent), Psyche (fear, exhaustion, full bladder, empty stomach) — assess all when the alert line is crossed.",
      },
      {
        topic: "Prolonged Labour",
        front: "What are the costs of prolonged labour in our setting?",
        back: "Sepsis, uterine rupture, obstetric fistula, stillbirth and newborn death — the reason a crossed action line means a decision, not more waiting.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Intrapartum Care for a Positive Childbirth Experience",
        year: "2018",
        url: "https://www.who.int/publications/i/item/9789241550215",
      },
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565493",
      },
      {
        organization: "Ministry of Health, Ghana",
        title: "Standard Treatment Guidelines",
        note: "Check for the current edition.",
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "normal-labour",
    moduleTitle: "Managing Each Stage",
    lessonTitle: "The Second Stage and Conduct of a Normal Birth",
    description:
      "Full dilatation, guided pushing, a clean birth and a received baby — the choreography every student midwife trains years for.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the signs of full dilatation and confirm them before pushing begins.",
      "Explain the conduct of a normal birth including clean birth principles and cord management.",
      "Apply correct responses to a nuchal cord and to slow delivery of the head.",
    ],
    tags: ["second stage", "normal birth", "clean birth", "nuchal cord", "episiotomy"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Everything you have learned funnels into about thirty minutes. The second stage is where skill shows — mostly as gentleness, timing and clean hands.\n\nA well-conducted birth looks unhurried to the family and feels controlled to you. That calm is built from a sequence you can recite in your sleep.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Suspect full dilatation when she reports an urge to push, the show increases, membranes rupture and bearing-down appears with contractions — then **confirm with a vaginal examination** before encouraging pushing: pushing on a rim of cervix swells and tears it. Support her chosen position — upright, squatting or side-lying — and let her push with her own urge rather than long breath-holding. Second stage normally lasts up to three hours in a first birth, up to two in later births. Keep the four cleans of birth: **clean hands, clean perineum, clean surface, clean cord-cutting** — sterile blade, clean ties, nothing on the stump.\n\nAt crowning, slow the head between contractions — one hand guards the perineum, one controls the head; hands that hurry tear. Check the neck for a cord: loose, slip it over; tight and preventing descent, doubly clamp and cut between, then deliver the body promptly. Guide the anterior shoulder under the symphysis with gentle downward traction, then the posterior shoulder, and let the body be born with lateral flexion. Note the time. Dry the baby immediately, place skin-to-skin, delay cord clamping one to three minutes while the baby is well, cover the head, and let the first breastfeed begin. Episiotomy is not routine — restricted to clear fetal or maternal indication.",
      },
      {
        type: "clinical_pearl",
        body: "The head is born by extension — the occiput pivots under the pubic arch and the face sweeps up over the perineum. Work with that pivot, never against it; the perineum you spare is the one you did not cut.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At a district hospital, a first-time mother is pushing; the head crowns and, as it delivers, you feel a cord snug around the neck — it does not slip when you gently try to loop it over the head. The shoulders have not delivered.\n\nWhat is the safe next step?\n\nAnswer: A tight nuchal cord that will not reduce is clamped in two places and cut between the clamps, then the body is delivered promptly to end cord compression. Call for help as the shoulders deliver, be ready for a possible shoulder dystocia drill, and check the baby at once after birth. Most cords are loose; the tight one is managed exactly this way — calmly.",
      },
      {
        type: "memory_trick",
        body: "The four cleans keep sepsis and tetanus away: clean hands, clean perineum, clean surface, clean cord. For the delivery itself — 'head like an egg, cord like a question, shoulders like a wave': guard the egg, answer the question, follow the wave.",
      },
      {
        type: "summary",
        body: "- Confirm full dilatation by vaginal examination before encouraging pushing; support her position and self-directed pushing.\n- Allow up to three hours (first birth) or two (later births) before diagnosing second-stage delay.\n- Clean birth: clean hands, perineum, surface and cord-cutting — nothing on the stump.\n- At crowning, deliver the head slowly between contractions; slip a loose nuchal cord over, double clamp and cut a tight one.\n- Dry, skin-to-skin, delay clamping 1-3 minutes, cover the head, start breastfeeding — episiotomy only on clear indication.",
      },
    ],
    questions: [
      {
        topic: "Second Stage",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A mother at 9 cm feels a strong urge to push. What must happen first?",
        options: [
          "Encourage vigorous pushing to relieve the urge",
          "Perform an episiotomy",
          "Confirm full dilatation with a vaginal examination before pushing begins",
          "Give pethidine to dull the urge",
        ],
        correctIndex: 2,
        explanation:
          "The urge to push can precede full dilatation; pushing against a cervical rim swells and injures it. Confirm first, then push.",
        courseSlug: "normal-labour",
      },
      {
        topic: "Nuchal Cord",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You find a tight nuchal cord that cannot be slipped over the head, with the shoulders still undelivered. Correct management?",
        options: [
          "Clamp the cord in two places, cut between the clamps, and deliver the body promptly",
          "Push the head back into the vagina and prepare for caesarean",
          "Pull firmly on the head to overcome the cord",
          "Wait for the cord to loosen over several contractions",
        ],
        correctIndex: 0,
        explanation:
          "A tight cord that prevents descent is doubly clamped, cut between clamps, and the body delivered without delay — the compression ends the moment the baby is born.",
        courseSlug: "normal-labour",
      },
      {
        topic: "Episiotomy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which statement about episiotomy in normal birth is correct?",
        options: [
          "It should be routine in all first births",
          "It always prevents third-degree tears",
          "It is required whenever the perineum stretches",
          "WHO recommends restricting it to clear fetal or maternal indications",
        ],
        correctIndex: 3,
        explanation:
          "Routine episiotomy increases maternal morbidity without protecting the baby; restrict it to indications such as fetal distress needing rapid birth or a rigid perineum obstructing delivery.",
        courseSlug: "normal-labour",
      },
    ],
    flashcards: [
      {
        topic: "Full Dilatation Signs",
        front: "Signs that full dilatation is near?",
        back: "Urge to push with rectal pressure, increased show, rupture of membranes, involuntary bearing-down with contractions, bulging perineum — confirmed on vaginal examination before pushing begins.",
      },
      {
        topic: "Clean Birth",
        front: "What are the four cleans of birth?",
        back: "Clean hands, clean perineum, clean delivery surface, clean cord-cutting — with a sterile blade, clean ties, and nothing applied to the cord stump.",
      },
      {
        topic: "Birth of the Head",
        front: "How is the head born mechanically?",
        back: "By extension: the flexed occiput pivots under the pubic symphysis and the face sweeps over the perineum — deliver it slowly between contractions to spare the perineum.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Intrapartum Care for a Positive Childbirth Experience",
        year: "2018",
        url: "https://www.who.int/publications/i/item/9789241550215",
      },
      {
        organization: "Ghana Health Service",
        title: "National Infection Prevention and Control Policy and Guidelines",
        year: "2015",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives, 17th edition",
        year: "2020",
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    courseSlug: "normal-labour",
    moduleTitle: "Managing Each Stage",
    lessonTitle: "The Third Stage of Labour",
    description:
      "The minutes after the baby are the most dangerous of the whole birth. Active management, the signs of separation, and the cord you never rush.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe active management of the third stage and its components.",
      "Explain the signs of placental separation and the risks of improper cord traction.",
      "Apply the third-stage routine including placental inspection and the watchful hour.",
    ],
    tags: ["third stage", "active management", "placenta", "postpartum haemorrhage"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The baby is born and everyone exhales — but the mother is not safe yet. The third stage, until the placenta is out and the uterus is tight, carries the highest risk of the whole birth: haemorrhage.\n\nActive management was designed for exactly these minutes. It is short, learnable, and saves more lives per minute than anything else you do.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The third stage runs from the baby's birth to the expulsion of placenta and membranes. **Active management** has three parts. Give a **uterotonic within one minute** of the birth — oxytocin 10 units intramuscularly is first choice: fast, reliable, fewest side effects. When the placenta separates, deliver it by **controlled cord traction**: hold the cord with a clamp, one hand steadying the uterus above the pubis — counter-traction, so the uterus cannot be dragged downward. Then **massage the fundus** until it is firm. Never pull the cord before the signs of separation appear, and never pull without the counter-hand — the price is inversion of the uterus, a catastrophic bleed.\n\nThe placenta announces separation with three signals: a **gush** of blood, the cord **lengthening**, and the uterus becoming **globular and firm**, rising in the abdomen. Once delivered, inspect the placenta in daylight: maternal surface with every cotyledon complete, membranes present, and the cord with two arteries and one vein — a missing piece means retained tissue, which means bleeding and infection to come. Postpartum haemorrhage is bleeding of 500 mL or more, or any bleeding that makes the mother unwell. The first hour afterwards is the watchful hour: tone, bleeding and vitals every 15 minutes.",
      },
      {
        type: "clinical_pearl",
        body: "Wait for splash, length and lump before you pull. The drug does the delivering; your traction is only the last five per cent — and it must always be answered by the counter-hand above the pubis.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Ten minutes after a normal birth with oxytocin given at one minute, you see a small gush of dark blood; the cord visibly lengthens; the uterus firms into a rounded ball above the umbilicus.\n\nWhat are these signs, and what is your next action?\n\nAnswer: These are the three signs of placental separation. Now perform controlled cord traction: clamp the cord at the vulva, one hand on the abdomen anchoring the uterus above the pubis, steady downward traction with the other until the placenta follows — then ease the membranes out by twisting, massage the fundus firm, inspect the placenta for completeness, estimate blood loss, and record everything. Then begins the watchful hour: tone, bleeding and vitals every 15 minutes.",
      },
      {
        type: "memory_trick",
        body: "Separation speaks in three: SPLASH (blood gush), LENGTH (cord lengthens), LUMP (firm globe rising). And the third-stage recipe is 'Dose, Drag gently, Rub': uterotonic dose in the first minute, gentle drag with the counter-hand, rub the uterus firm.",
      },
      {
        type: "summary",
        body: "- Active management = uterotonic (oxytocin 10 U IM) within one minute, controlled cord traction with counter-traction, uterine massage.\n- Separation signs: blood gush, cord lengthening, firm globular rising uterus — never pull before them.\n- Controlled traction without the suprapubic counter-hand risks uterine inversion and massive haemorrhage.\n- Inspect the placenta: complete cotyledons and membranes, cord with two arteries and one vein; retained tissue bleeds and infects.\n- PPH = 500 mL or more, or any bleeding that shocks — monitor every 15 minutes in the first hour.",
      },
    ],
    questions: [
      {
        topic: "Third Stage",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which trio indicates that the placenta has separated?",
        options: [
          "Gush of blood, cord lengthening, firm globular uterus",
          "Quiet uterus, shortening cord, pale face",
          "Rising blood pressure, slow pulse, absent contractions",
          "Soft fundus, bright cord, dilated cervix",
        ],
        correctIndex: 0,
        explanation:
          "Splash, length and lump: a blood gush, a lengthening cord, and a firm rounded uterus rising in the abdomen — the classic signs of separation.",
        courseSlug: "normal-labour",
      },
      {
        topic: "Controlled Cord Traction",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During controlled cord traction, the hand placed above the pubic symphysis serves to:",
        options: [
          "Compress the bladder and speed delivery",
          "Locate the kidneys",
          "Counter-traction to keep the uterus in place and prevent inversion",
          "Stimulate the baby to cry",
        ],
        correctIndex: 2,
        explanation:
          "The suprapubic hand anchors the uterus while the other tractions the cord — without it, strong traction can invert the uterus, a cause of catastrophic bleeding.",
        courseSlug: "normal-labour",
      },
      {
        topic: "Uterotonics",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which is the preferred first-line uterotonic for preventing postpartum haemorrhage, and why?",
        options: [
          "Ergometrine — fastest with no side effects",
          "Misoprostol — no side effects and fastest onset",
          "Water injection — traditional and safe",
          "Oxytocin 10 units IM — rapid onset, minimal side effects, safe in hypertensive women",
        ],
        correctIndex: 3,
        explanation:
          "Oxytocin acts within minutes, has few side effects and is safe in hypertension — unlike ergometrine (raises blood pressure) and with fewer side effects than misoprostol.",
        courseSlug: "normal-labour",
      },
    ],
    flashcards: [
      {
        topic: "Active Management",
        front: "The three components of active management of the third stage?",
        back: "Uterotonic within one minute of birth (oxytocin 10 U IM first line), controlled cord traction with suprapubic counter-traction, and uterine massage until firm.",
      },
      {
        topic: "Counter-traction",
        front: "Why the suprapubic hand during cord traction?",
        back: "Counter-traction stabilises the uterus so traction cannot pull it down — preventing inversion, a life-threatening complication.",
      },
      {
        topic: "Placental Inspection",
        front: "What must you check when inspecting the placenta?",
        back: "Maternal surface: all cotyledons and membranes complete. Fetal surface: vessels running to the edge (a cut vessel means a missed lobe). Cord: two arteries, one vein. Retained tissue bleeds and infects.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Recommendations: Uterotonics for the Prevention of Postpartum Haemorrhage",
        year: "2018",
        url: "https://www.who.int/publications/i/item/9789241550437",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241548993",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives, 17th edition",
        year: "2020",
      },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────
  {
    courseSlug: "normal-labour",
    moduleTitle: "Managing Each Stage",
    lessonTitle: "Immediate Postpartum Care: The Golden Hour",
    description:
      "Sixty minutes that decide the shape of the puerperium: checks that catch the bleeds, warmth that saves babies, and the first breastfeed.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the mother and newborn observations of the first hour after birth.",
      "Explain the importance of skin-to-skin contact, delayed cord clamping and early breastfeeding.",
      "Apply the golden-hour routine to detect early postpartum complications.",
    ],
    tags: ["postpartum", "golden hour", "skin-to-skin", "breastfeeding", "newborn care"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The baby is on the chest, the placenta is out — now the quiet hour does its work. What you do, or fail to do, in these sixty minutes shapes both lives.\n\nThe golden hour is not rest from duty; it is duty at its most concentrated — checks, warmth, and the contact that bonds.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "For the baby: dry immediately, place **skin-to-skin** on the mother's bare chest and cover both — warmth is the newborn's main job, and hypothermia is a quiet killer; cover the head, where most heat is lost. Check breathing (normally 40-60 per minute), colour and tone; assign the **Apgar score at one and five minutes**. Delay cord clamping one to three minutes in a well baby; keep the stump clean, dry and bare. Help the first breastfeed happen within the hour — colostrum is the first immunisation, and suckling releases oxytocin that keeps the uterus tight.\n\nFor the mother, run the watchful hour: check **uterine tone and bleeding at least every 15 minutes**, with pulse and blood pressure; inspect the perineum for tears; encourage a first void within six hours. A pad soaked within the hour, a soft uterus rising at the umbilicus, or a climbing pulse is postpartum haemorrhage announcing itself — rub the fundus firm, call for help, activate the drill. A baby who is cold centrally, blue, or not feeding needs urgent review. Keep mother and baby together; separation without a reason undoes everything this hour builds.",
      },
      {
        type: "clinical_pearl",
        body: "A warm dry baby on a warm chest does more medicine in one hour than any bottle: it warms, steadies blood sugar, seeds friendly skin bacteria and squeezes the uterus tight through oxytocin. Colostrum is not 'bad milk' — it is the baby's first vaccine.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Forty minutes after a normal birth, the mother says she feels wet. You lift the sheet: the pad is heavy, and the uterus is soft at the umbilicus. Her pulse is 104.\n\nWhat is happening, and what are your first actions?\n\nAnswer: A soft fundus with heavy lochia and a rising pulse is uterine atony bleeding — postpartum haemorrhage. Call for help and rub the fundus firmly until it contracts like a stone; empty the bladder if full, give a further uterotonic per protocol, start IV fluids, and reassess blood loss and vitals continuously. Bleeding usually stops with a firm uterus — the massage is not a courtesy, it is the first-line treatment.",
      },
      {
        type: "memory_trick",
        body: "The golden hour belongs to the five Ts: Tone, Tears, Toilet, Temperature, Tummy-to-tummy — check the uterus, the perineum, the urine, the warmth of mother and baby, and skin-to-skin with feeding. Run the Ts every 15 minutes and the hour watches itself.",
      },
      {
        type: "summary",
        body: "- Dry the baby at once, skin-to-skin, cover the head; check breathing, colour and Apgar at 1 and 5 minutes.\n- Delay cord clamping 1-3 minutes in a well baby; keep the stump clean, dry and bare.\n- Support the first breastfeed within the hour — colostrum is the first immunisation, and suckling contracts the uterus.\n- Watchful hour for the mother: tone, bleeding and vitals at least every 15 minutes; first void by six hours; soft uterus with a heavy pad = PPH — rub firm, call for help, escalate.",
      },
    ],
    questions: [
      {
        topic: "Golden Hour",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A healthy term baby is born crying. What is the immediate care sequence?",
        options: [
          "Dry, place skin-to-skin on the mother, cover the head and check breathing",
          "Suction the nose and mouth routinely, then bathe the baby",
          "Clamp the cord within ten seconds and move the baby to a cot",
          "Give glucose water before the first breastfeed",
        ],
        correctIndex: 0,
        explanation:
          "Drying and skin-to-skin with the head covered warms, stabilises and bonds — routine suction and early bathing harm more than help.",
        courseSlug: "normal-labour",
      },
      {
        topic: "Golden Hour",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "How often should you assess uterine tone and bleeding in the first hour after birth?",
        options: [
          "At least every 15 minutes",
          "Once, at the end of the hour",
          "Only if the mother reports heavy bleeding",
          "Every four hours, as in labour",
        ],
        correctIndex: 0,
        explanation:
          "Mother and baby are monitored at least every 15 minutes in the early hours after birth — most postpartum haemorrhage declares itself in this window.",
        courseSlug: "normal-labour",
      },
      {
        topic: "PPH Response",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother's uterus is soft at the umbilicus with heavy bleeding and a pulse of 110. First action?",
        options: [
          "Wait ten minutes and re-examine",
          "Start broad-spectrum antibiotics",
          "Press on the abdomen to expel clots without massage",
          "Rub the fundus firmly until it contracts, then call for help and give further uterotonics",
        ],
        correctIndex: 3,
        explanation:
          "Uterine massage to contract the atonic uterus is the first, fastest treatment for PPH — combined with an immediate call for help, bladder emptying and further uterotonics.",
        courseSlug: "normal-labour",
      },
    ],
    flashcards: [
      {
        topic: "Five Ts",
        front: "Name the five Ts of the golden hour.",
        back: "Tone (uterus), Tears (perineum), Toilet (urine), Temperature (warmth of mother and baby), Tummy-to-tummy (skin-to-skin and breastfeeding) — repeated at least every 15 minutes.",
      },
      {
        topic: "Early Breastfeeding",
        front: "Why does early breastfeeding help the mother?",
        back: "Suckling triggers oxytocin, which keeps the uterus contracted — reducing postpartum bleeding while feeding the baby colostrum, the first immunisation.",
      },
      {
        topic: "Apgar Score",
        front: "Apgar — when is it scored, and what is assessed?",
        back: "At 1 and 5 minutes: Appearance (colour), Pulse, Grimace (reflex irritability), Activity (tone), Respiration — 7-10 is normal.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Maternal and Newborn Care for a Positive Postnatal Experience",
        year: "2022",
        url: "https://www.who.int/publications/i/item/9789241506504",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241548993",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives, 17th edition",
        year: "2020",
      },
    ],
  },

  // ── 14 ─────────────────────────────────────────────────────
  {
    courseSlug: "normal-labour",
    moduleTitle: "Mechanisms of Labour",
    lessonTitle: "Uterine Contractions: The Engine of Labour",
    description:
      "The engine of labour — what a contraction is, what a good one feels like on your fingers, and why the pause between them matters as much as the peak.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the physiology of labour contractions including retraction and the Ferguson reflex.",
      "Explain how to assess frequency, duration and intensity by palpation.",
      "Apply contraction assessment to detect hyperstimulation and fetal distress.",
    ],
    tags: ["contractions", "labour physiology", "retraction", "partograph", "hyperstimulation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Everything in labour is moved by one engine: the contracting uterus. Learn to read that engine with your fingers and you will know whether labour is working, idling or overheating.\n\nA contraction is not simply 'pain' — it is a physiological event you can time, grade and chart.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Each contraction is a wave of myometrial shortening, driven by **oxytocin** from the posterior pituitary and sensitised by **prostaglandins**; gap junctions between muscle cells let the wave spread. Cervical stretch feeds back to release more oxytocin — the **Ferguson reflex** — so labour builds itself. Two properties matter. **Contraction** shortens the fibres and then relaxes them; **retraction** permanently shortens and thickens the upper segment, pulling the cervix up around the baby like a sock being drawn on. Between contractions the uterus must go soft — that pause is when the placenta refills with blood for the baby.\n\nAssess contractions with your palm on the fundus over a ten-minute window: **frequency** (how many per ten minutes — chart it), **duration** in seconds, and **intensity** — mild indents easily, moderate is firm, strong barely indents at all. In active labour expect roughly three to five per ten minutes, lasting 45-60 seconds. A uterus contracting more than five in ten, or staying hard between waves, is **hyperstimulation** — commonly from oxytocin — and the baby, squeezed without a pause, shows distress. Stop the drip, turn the mother, and call for help.",
      },
      {
        type: "clinical_pearl",
        body: "Feel the fundus between contractions, not only during them. A uterus that never softens is strangling the placenta — fetal distress begins there, on your fingertips, before any machine agrees.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A labour is being augmented with an oxytocin drip. Over twenty minutes you count six contractions in ten, each lasting over 70 seconds, and the uterus is still board-hard between them. The fetal heart has fallen to 100 with slow recovery after contractions.\n\nWhat has happened, and what will you do?\n\nAnswer: Oxytocin has caused hyperstimulation — contractions too frequent and too long, with no relaxation to re-perfuse the placenta; the fetal heart is showing it. Stop the drip immediately, turn her left lateral, give IV fluids, call for help and reassess continuously. If the uterus settles and the heart recovers, oxytocin may be restarted at a lower rate; if not, prepare for expedited delivery.",
      },
      {
        type: "memory_trick",
        body: "Three-to-five in ten, forty-five to sixty long, soft in between — the healthy engine rhythm. Grade with M-M-S: Mild indents easily, Moderate is firm, Strong is Stone. Chart the count every half hour, and feel the fundus between the waves.",
      },
      {
        type: "summary",
        body: "- Contractions are oxytocin-driven myometrial waves; cervical stretch releases more oxytocin (Ferguson reflex), so labour builds itself.\n- Contraction relaxes; retraction permanently shortens the upper segment and draws the cervix up — labour's ratchet.\n- Assess over ten minutes: frequency, duration and intensity — mild indents easily, moderate is firm, strong barely indents.\n- Active labour: about 3-5 contractions per ten minutes, 45-60 seconds, with softening between — a uterus that never relaxes starves the placenta; stop the oxytocin, reposition, call.",
      },
    ],
    questions: [
      {
        topic: "Contractions",
        type: "MCQ",
        difficulty: "Easy",
        stem: "How should contraction frequency be assessed and recorded?",
        options: [
          "By asking the mother how painful the last hour felt",
          "By palpation over a ten-minute window, charted on the partograph",
          "By timing a single contraction with a stopwatch",
          "By listening to the fetal heart between contractions",
        ],
        correctIndex: 1,
        explanation:
          "Place your palm on the fundus, count every contraction in ten minutes with duration and strength, and record it — partograph entries, not impressions.",
        courseSlug: "normal-labour",
      },
      {
        topic: "Retraction",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is retraction of the uterus?",
        options: [
          "The temporary softening after each contraction",
          "The descent of the baby through the pelvis",
          "Permanent shortening and thickening of the upper segment, drawing the cervix up",
          "Retrograde blood flow through the cord",
        ],
        correctIndex: 2,
        explanation:
          "Retraction is the one-way shortening of upper-segment fibres — it narrows the cavity and pulls the lower segment and cervix over the presenting part, making dilatation permanent progress.",
        courseSlug: "normal-labour",
      },
      {
        topic: "Hyperstimulation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "On an oxytocin drip you feel six contractions in ten minutes, a uterus still hard between them, and a fetal heart of 100 with slow recovery. Best immediate action?",
        options: [
          "Stop the drip, reposition the mother left lateral and call for help",
          "Increase the drip to speed delivery",
          "Give ergometrine to settle the uterus",
          "Continue unchanged and re-examine in two hours",
        ],
        correctIndex: 0,
        explanation:
          "This is hyperstimulation starving the placenta. Stopping the infusion is the instant treatment, followed by repositioning, IV fluids and urgent review.",
        courseSlug: "normal-labour",
      },
    ],
    flashcards: [
      {
        topic: "Contraction vs Retraction",
        front: "What is the difference between contraction and retraction?",
        back: "Contraction = temporary shortening that relaxes. Retraction = permanent shortening and thickening of the upper uterine segment that pulls the cervix up — labour's ratchet.",
      },
      {
        topic: "Grading Intensity",
        front: "How do you grade contraction intensity by palpation?",
        back: "Mild: the fundus indents easily with fingers. Moderate: firm, resists. Strong: board-like, barely indents. Always count over ten minutes for frequency.",
      },
      {
        topic: "Hyperstimulation",
        front: "Why must the uterus relax between contractions?",
        back: "Blood flows to the placenta only in the pause. Without relaxation the fetus is starved — hyperstimulation shows up as fetal distress, and the oxytocin must be stopped.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Intrapartum Care for a Positive Childbirth Experience",
        year: "2018",
        url: "https://www.who.int/publications/i/item/9789241550215",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives, 17th edition",
        year: "2020",
      },
      {
        organization: "Elsevier",
        title: "Mayes' Midwifery, 16th edition",
        year: "2017",
      },
    ],
  },

  // ── 15 ─────────────────────────────────────────────────────
  {
    courseSlug: "normal-labour",
    moduleTitle: "Mechanisms of Labour",
    lessonTitle: "Cervical Dilatation: The Opening Story",
    description:
      "From a pinhole to 'no cervix at all' — effacement, dilatation, the honesty of four-hourly examinations, and what the cervix tells the partograph.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe effacement and dilatation and how they are assessed.",
      "Explain the expected pattern of cervical change in latent and active labour.",
      "Apply dilatation findings to the partograph and to primigravidae versus multigravidae.",
    ],
    tags: ["cervical dilatation", "effacement", "vaginal examination", "partograph"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The cervix is the door of labour, and it opens in two movements: first it thins, then it stretches. Learn both, and a two-minute examination becomes the most informative act of your shift.\n\nBut the examination has a price — each one carries infection risk — so the skill includes knowing when not to look.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Effacement** is the taking-up of the cervix: a canal three or four centimetres long is drawn up until it is paper-thin, expressed as a percentage or a remaining length. **Dilatation** is the opening of the os from a fingertip to complete. Complete dilatation does not mean a hole you measure — it means **no cervix can be felt at all**: no rim, no edge, only the presenting part. On examination with a clean glove, note dilatation, effacement, station, membranes and the position of the cervix; record it immediately on the partograph, and examine routinely four-hourly in active labour — or when progress is questioned or the second stage is suspected.\n\nProgress has a rhythm. The latent phase to about 4-5 cm is slow by design. Active dilatation then runs at about one centimetre per hour at minimum — the partograph's alert line. Primigravidae tend to **efface first, then dilate**; multigravidae do both together, which is part of why they open faster. Arrest — the dilatation line flattening despite power — is the partograph's loudest alarm: work the four Ps, augment where appropriate, and refer when obstruction appears. A multigravida admitted at 5 cm with a barely effaced cervix may still be minutes from a very fast birth — treat every examination as new information, never a formality.",
      },
      {
        type: "clinical_pearl",
        body: "Every vaginal examination is a dose of information with a side-effect of infection risk, especially after membranes have ruptured. Take it four-hourly, with full asepsis, and only when the answer will change what you do.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A primigravida at term is examined at 6pm: 5 cm dilatation, cervix 75 percent effaced, membranes intact, station minus two. At 10pm you find 8 cm, fully effaced, membranes now ruptured with clear fluid, station zero.\n\nHow do you interpret these findings?\n\nAnswer: This is textbook progress — three centimetres in four hours, effacement completed, membranes gone with clear liquor, and descent from minus two to zero. She is tracking left of the alert line. Continue supportive care and scheduled monitoring; the next examination is due in four hours, or sooner if she develops an urge to push — which, with this pattern, may come before that.",
      },
      {
        type: "memory_trick",
        body: "The cervix is a turtleneck sweater being pulled over a head: it first thins (effaces), then opens (dilates). 'Ten centimetres' is not a measurement — it is the moment you can no longer feel the sweater at all.",
      },
      {
        type: "summary",
        body: "- Effacement = thinning of the cervix (percent or length); dilatation = opening of the os.\n- Complete dilatation means no cervix is palpable — no rim, no edge.\n- Routine examination is four-hourly in active labour, with full asepsis, charted immediately on the partograph.\n- Active dilatation should hold about 1 cm per hour minimum (the alert line); primigravidae efface first, multigravidae efface and dilate together — a flattened progress line despite power means arrest: work the four Ps and decide.",
      },
    ],
    questions: [
      {
        topic: "Cervical Dilatation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What defines complete cervical dilatation?",
        options: [
          "The os admits exactly ten centimetres by measurement",
          "The membranes have ruptured",
          "The mother feels an urge to push",
          "No cervix can be felt around the presenting part — no rim, no edge",
        ],
        correctIndex: 3,
        explanation:
          "Complete dilatation is a finding, not a number: when no cervical rim remains, the os is fully open and the second stage may begin.",
        courseSlug: "normal-labour",
      },
      {
        topic: "Vaginal Examination",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Recommended routine frequency of vaginal examination in active labour:",
        options: [
          "Every hour",
          "Every two hours",
          "Only at admission and full dilatation",
          "Every four hours",
        ],
        correctIndex: 3,
        explanation:
          "Four-hourly examination in active labour balances information against infection risk, with additional looks only on indication.",
        courseSlug: "normal-labour",
      },
      {
        topic: "Cervical Patterns",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A primigravida typically effaces first and then dilates. A multigravida usually:",
        options: [
          "Effaces only during pushing",
          "Cannot efface once labour starts",
          "Effaces and dilates simultaneously, and may open faster",
          "Dilates only after the latent phase ends",
        ],
        correctIndex: 2,
        explanation:
          "The parous cervix has been opened before, so it takes up and opens at the same time — the mechanical reason multigravid labours are quicker.",
        courseSlug: "normal-labour",
      },
    ],
    flashcards: [
      {
        topic: "Effacement vs Dilatation",
        front: "Effacement vs dilatation?",
        back: "Effacement = thinning and taking-up of the cervical canal (100% = paper-thin). Dilatation = opening of the os, from closed to 'no cervix felt' (complete).",
      },
      {
        topic: "Examination Frequency",
        front: "How often are routine vaginal examinations done in active labour, and why not more?",
        back: "Four-hourly — every examination, especially after membrane rupture, risks introducing infection. Examine on indication, with full asepsis, and chart findings immediately.",
      },
      {
        topic: "Prims vs Multis",
        front: "What cervical pattern difference exists between primigravidae and multigravidae?",
        back: "Primigravidae: effacement completes first, then dilatation. Multigravidae: efface and dilate together — faster opening and often faster labours.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Intrapartum Care for a Positive Childbirth Experience",
        year: "2018",
        url: "https://www.who.int/publications/i/item/9789241550215",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241548993",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives, 17th edition",
        year: "2020",
      },
    ],
  },

  // ── 16 ─────────────────────────────────────────────────────
  {
    courseSlug: "normal-labour",
    moduleTitle: "Mechanisms of Labour",
    lessonTitle: "The Mechanisms of Labour: The Cardinal Movements",
    description:
      "Engagement, flexion, rotation, extension — the choreography every normal birth follows, written by the pelvis and the pelvic floor.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the cardinal movements of labour in order.",
      "Explain how each movement helps the baby navigate the pelvis.",
      "Apply mechanism knowledge to recognise positions that slow labour, such as occipito-posterior.",
    ],
    tags: ["mechanisms of labour", "cardinal movements", "internal rotation", "occipito-anterior"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The baby does not fall through the pelvis; it dives, tucks, turns, pivots and lifts — a fixed sequence the bony canal and the pelvic floor choreograph. Every normal birth follows it.\n\nKnow the sequence and the second stage stops being luck: you will feel where the baby is in the story and guard it through the next movement.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "In a typical left occipito-anterior birth: the head **engages** through the inlet with its sagittal suture set in the transverse or oblique, then **descends** along the curve of Carus. Resistance from the pelvic floor adds **flexion** — the chin tucks, and the presenting diameter shrinks to the favourable 9.5 cm. At the mid-cavity, **internal rotation** turns the occiput forward under the pubic arch, because the outlet's usable diameter runs front to back and the levator gutter sweeps the occiput anteriorly. With the occiput pivoting under the symphysis, the head is born by **extension** — the face sweeping up over the perineum.\n\nThe head then untwists to line up with the shoulders — **restitution and external rotation** — as the shoulders turn into the front-to-back diameter of the outlet. The body is born by **expulsion**: the anterior shoulder slips under the symphysis, then the posterior over the perineum, the trunk following with lateral flexion. Most babies are occipito-anterior. In **occipito-posterior**, a poorly flexed head faces the wrong way: labour hurts in the back, rotates slowly and often drags — support upright and hands-and-knees positions to encourage rotation, and watch the partograph for arrest.",
      },
      {
        type: "clinical_pearl",
        body: "Guard, don't steer. The mechanisms happen by themselves in a normal birth — your job is to slow the head at extension, check the cord, and follow the shoulders. Hands that fight the choreography tear perinea and bruise babies.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A first-time mother has laboured all day with constant backache that never quite goes between contractions. On examination in second stage, the small posterior fontanelle is felt deep toward the sacrum and hard to reach, with the sagittal suture running front to back in the pelvis.\n\nWhat is the likely position, and what does it mean for management?\n\nAnswer: An inaccessible posterior fontanelle toward the sacrum, with the suture in the direct front-to-back line, suggests occipito-posterior — a deflexed head driving into the back of the pelvis, causing the relentless back pain and slower progress. Most rotate to anterior. Help her with hands-and-knees or upright positions, offer sacral pressure and continuous support, monitor the partograph closely, and refer if rotation does not come and progress arrests.",
      },
      {
        type: "memory_trick",
        body: "Every Deserving Fetus In Rotation Extends, Rests, Exits — Engagement, Descent, Flexion, Internal rotation, Extension, Restitution, Expulsion. In one breath: the baby dives, tucks, turns, lifts its face, squares its shoulders, and slides out.",
      },
      {
        type: "summary",
        body: "- The cardinal movements: engagement, descent, flexion, internal rotation, extension, restitution (external rotation), expulsion.\n- Flexion shrinks the presenting diameter to ~9.5 cm; internal rotation brings the occiput under the pubic arch to match the outlet.\n- The head is born by extension — the face sweeps the perineum while the occiput pivots at the symphysis.\n- Shoulders turn front-to-back: anterior under the symphysis first, then posterior, body with lateral flexion.\n- Occipito-posterior means backache and slow rotation — upright and hands-and-knees positions, close partograph watch, referral if arrest.",
      },
    ],
    questions: [
      {
        topic: "Cardinal Movements",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which movement reduces the presenting diameter of the head from about 11 cm to 9.5 cm?",
        options: [
          "Flexion",
          "Extension",
          "Internal rotation",
          "Engagement",
        ],
        correctIndex: 0,
        explanation:
          "Flexion tucks the chin to the chest, trading the occipitofrontal for the suboccipitobregmatic diameter — the head folds to fit.",
        courseSlug: "normal-labour",
      },
      {
        topic: "Cardinal Movements",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why does internal rotation occur?",
        options: [
          "The mother's pushing force turns the head",
          "The cord pulls the occiput forward",
          "The cervix directs the head backward",
          "The pelvic floor gutter and the front-to-back usable diameter of the outlet guide the occiput anteriorly under the symphysis",
        ],
        correctIndex: 3,
        explanation:
          "Rotation is passive: the levator sling funnels the occiput forward, and the outlet's usable diameter is anteroposterior — so the head turns to match its long axis to it.",
        courseSlug: "normal-labour",
      },
      {
        topic: "Cardinal Movements",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Arrange the cardinal movements in correct order.",
        options: [
          "Descent, engagement, extension, flexion, internal rotation",
          "Flexion, engagement, internal rotation, descent, extension",
          "Engagement, descent, flexion, internal rotation, extension",
          "Engagement, internal rotation, descent, flexion, extension",
        ],
        correctIndex: 2,
        explanation:
          "Engagement, then descent, with flexion deepening as resistance rises; internal rotation at the mid-pelvis, then extension births the head — followed by restitution and expulsion.",
        courseSlug: "normal-labour",
      },
    ],
    flashcards: [
      {
        topic: "Sequence",
        front: "List the cardinal movements in order.",
        back: "Engagement, Descent, Flexion, Internal rotation, Extension (birth of the head), Restitution/external rotation, Expulsion (shoulders and body).",
      },
      {
        topic: "Birth of the Head",
        front: "How is the head actually born?",
        back: "By extension — the occiput pivots under the pubic symphysis and the face lifts over the perineum; slow, controlled delivery between contractions spares the perineum.",
      },
      {
        topic: "Occipito-posterior",
        front: "Hallmark of an occipito-posterior labour?",
        back: "Relentless backache that never fully resolves between contractions, a deflexed head, and slow progress — encourage hands-and-knees and upright positions, and watch for arrest.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives, 17th edition",
        year: "2020",
      },
      {
        organization: "Elsevier",
        title: "Mayes' Midwifery, 16th edition",
        year: "2017",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241548993",
      },
    ],
  },

  // ── 17 ─────────────────────────────────────────────────────
  {
    courseSlug: "puerperium",
    moduleTitle: "The First Six Weeks",
    lessonTitle: "Physiological Changes of the Puerperium",
    description:
      "Involution, lochia, milk and mood — the body's six-week return journey, and where normal recovery ends and red flags begin.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the systemic changes of the puerperium including involution and lochia.",
      "Explain lactation, postpartum diuresis and emotional changes.",
      "Apply knowledge of normal recovery to distinguish red flags requiring referral.",
    ],
    tags: ["puerperium", "involution", "lochia", "lactation", "postpartum"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Birth is not the end of the story; it is the end of act one. Over six weeks the body dismantles nine months of change with astonishing speed — mostly at home, and mostly out of your sight.\n\nYour job is to teach every mother what normal recovery looks like, so she raises her hand early when it does not.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Involution** is the headline: the kilogram uterus shrinks to about 60-70 grams in six weeks as muscle fibres autolyse. Track it — the fundus sits at the umbilicus after birth, falls about a centimetre a day, dips into the pelvis by day 10 and is no longer palpable by two weeks. **Lochia** follows a colour story: **rubra** for three to four days, **serosa** to about day 10, then pale **alba** — total loss 250-500 mL. Afterpains are normal, stronger in multigravidae and while breastfeeding. Pregnancy fluid leaves by **diuresis** and night sweats in the first days; breasts move from immune-rich colostrum to mature milk around day 10-14, driven by demand.\n\nOther returns: the cervix closes into the parous slit; the vagina regains tone (teach pelvic floor exercises); hair thins for a few months; and menses return from about six weeks if she is not exclusively breastfeeding — but **ovulation can precede the first period**, so counsel family planning before discharge. Emotionally, the **baby blues** — weepiness and irritability around day three to five — touch most mothers and lift within two weeks; sadness that deepens instead, or any thought of harming self or baby, is postpartum depression — screen, support, refer.",
      },
      {
        type: "clinical_pearl",
        body: "A fundus that is higher than yesterday asks you a question: full bladder, retained products or infection. And day-3 tears that have not lifted by two weeks are not drama — they are depression until proven otherwise.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At a day-8 postnatal visit in your CHPS compound, a mother reports moderate red-brown lochia that smells offensive. Her temperature is 37.9, the uterus is tender and still palpable above the pubis, and she has felt feverish at night.\n\nWhat is your assessment and plan?\n\nAnswer: Foul-smelling lochia with low-grade fever and a tender, slowly involuting uterus on day 8 is puerperal sepsis — likely endometritis, possibly with retained products. She needs referral for antibiotics per protocol (and possible evacuation), hydration, temperature and vitals monitoring, and clear danger-sign counselling: heavier bleeding, worsening fever, severe pain. Reassure her this is treatable — and that delay, not the diagnosis, is the danger.",
      },
      {
        type: "memory_trick",
        body: "Lochia runs a traffic light: Rubra (red — stop, days 1-3), Serosa (amber — slow, to about day 10), Alba (white — go, to about three weeks). And the fundus: a centimetre a day, into the pelvis by ten, gone by fourteen. If the traffic light smells offensive, it is not a light — it is sepsis.",
      },
      {
        type: "summary",
        body: "- Involution: fundus at the umbilicus after birth, about 1 cm per day descent, in the pelvis by day 10, impalpable by two weeks; uterus reaches 60-70 g by six weeks.\n- Lochia: rubra (days 1-4), serosa (to ~day 10), alba (to ~3 weeks); offensive smell, clots or soaking pads mean sepsis or retained tissue.\n- Postpartum diuresis and night sweats shed pregnancy fluid — normal in the first days; colostrum gives way to mature milk around day 10-14.\n- Menses may return from six weeks, but ovulation can precede the first period — counsel family planning before discharge; baby blues lift within two weeks, deepening sadness or harmful thoughts = postpartum depression: screen, support, refer.",
      },
    ],
    questions: [
      {
        topic: "Puerperium",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A mother asks why her lochia is red-brown and heavier on day 2, then becomes pinkish by day 6. What do you say?",
        options: [
          "This is infection and needs antibiotics",
          "This is retained placenta and needs evacuation",
          "This is normal — rubra gives way to serosa over the first weeks",
          "This is menstruation returning",
        ],
        correctIndex: 2,
        explanation:
          "Lochia runs rubra, then serosa, then alba over about three weeks — the colour change is the normal script; offensive smell, clots or soaking are the alarms.",
        courseSlug: "puerperium",
      },
      {
        topic: "Puerperium",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "On day 8 the lochia smells offensive, the mother has a fever of 38.2, and the uterus is tender. What is the diagnosis?",
        options: [
          "Puerperal sepsis (endometritis) — refer for antibiotics",
          "Normal involution pain",
          "Breast engorgement only",
          "Baby blues with bodily complaints",
        ],
        correctIndex: 0,
        explanation:
          "Offensive lochia, fever and a tender uterus after birth define puerperal sepsis — a major cause of maternal death that responds to prompt referral and antibiotics.",
        courseSlug: "puerperium",
      },
      {
        topic: "Puerperium",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "An exclusively breastfeeding mother at 4 months, with no return of menses, asks about pregnancy risk. What is the correct teaching?",
        options: [
          "She cannot conceive until her period returns",
          "Ovulation can precede the first menses; lactational amenorrhoea protects only with exclusive feeding, no menses and a baby under six months",
          "Breastfeeding is reliable contraception for two years",
          "She must restart combined contraceptive pills immediately",
        ],
        correctIndex: 1,
        explanation:
          "Lactational amenorrhoea works only when all three conditions hold — exclusive feeding, amenorrhoea, baby under six months — and ovulation can still precede the first period, so agree a family planning method before discharge.",
        courseSlug: "puerperium",
      },
    ],
    flashcards: [
      {
        topic: "Involution",
        front: "Normal involution timeline?",
        back: "Fundus at the umbilicus right after birth, descends about 1 cm per day, into the pelvis by day 10, impalpable abdominally by two weeks; the uterus reaches 60-70 g by six weeks.",
      },
      {
        topic: "Lochia",
        front: "Lochia phases and red flags?",
        back: "Rubra (red, days 1-4), serosa (pink-brown, to ~day 10), alba (pale, to ~3 weeks). Red flags: offensive smell, large clots, pads soaked — sepsis or retained products.",
      },
      {
        topic: "Mood Changes",
        front: "Baby blues vs postpartum depression?",
        back: "Blues: weepiness and irritability peaking days 3-5, lifting within two weeks. Depression: persistent low mood, inability to cope, thoughts of harm — screen, support, refer.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Maternal and Newborn Care for a Positive Postnatal Experience",
        year: "2022",
        url: "https://www.who.int/publications/i/item/9789241506504",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241548993",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives, 17th edition",
        year: "2020",
      },
    ],
  },
];
