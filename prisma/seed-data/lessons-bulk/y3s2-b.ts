// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 3, Semester 2 — Batch B (Abnormal Labour + Neonatal Nursing)
// 16 lessons anchored to prisma/seed-data/anchors/y3s2-b.json
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "abnormal-labour",
    moduleTitle: "When Labour Leaves the Script",
    lessonTitle: "Malpresentation: When the Lead Part Isn't the Head",
    description:
      "Most babies lead with a well-flexed vertex. This lesson is about the ones that don't — brow, face and shoulder first — and what each means for the birth.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe how brow, face and shoulder presentations are diagnosed on abdominal and vaginal examination.",
      "Explain why the presenting diameter decides whether a malpresentation can be born vaginally.",
      "Apply the correct response to each malpresentation, including when to refer.",
    ],
    tags: ["malpresentation", "brow", "face", "assessment", "referral"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Presentation means the part of the baby that leads over the pelvic brim and is felt first on vaginal examination. In about 96 of 100 labours that is the flexed vertex — the top of a well-tucked head, offering its smallest diameter. When something else leads, labour changes character: it may drag, it may obstruct, and the baby may suffer.\n\nIn a CHPS compound you may be the first person to notice, and your examination — done calmly, with a partogram at the bedside — is what protects the mother. This lesson covers the two cephalic malpresentations, brow and face, and touches on shoulder presentation, which gets a full lesson of its own.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "In **brow** presentation the head is caught halfway between flexion and extension. The presenting diameter is the mentovertical, about 13.5 cm — too big for the average pelvis. A persistent brow cannot deliver vaginally, though early in labour a brow may still flex to a vertex or extend to a face. On vaginal examination you feel the anterior fontanelle and the orbital ridges, but no mouth or chin.\n\nIn **face** presentation the head is fully extended and the chin is the denominator. Feel for the ridges of the eye sockets, the nose, the mouth and gums, and the chin — memorable, but examine gently. If the chin rotates to the front (mentum anterior), the baby can usually be born vaginally. If the chin points to the sacrum (mentum posterior), the term baby cannot negotiate the pelvis and birth is by caesarean. Causes overlap: a loop of cord around the neck, a fetal neck tumour, anencephaly, polyhydramnios, a pendulous abdomen in the grand multipara, or a contracted pelvis. The response in a district setting is the same — recognise it, monitor with a partogram, and refer for a decision on operative birth.",
      },
      {
        type: "clinical_pearl",
        body: "Whenever you find a malpresentation, ask yourself why. Something is driving that head out of flexion — a short cord, a fetal problem, a roomy or a tight pelvis. Finding the presentation is only half the diagnosis.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 24-year-old primigravida at term has been contracting for ten hours. Progress has crept along the alert line, and she complains of severe back pain. On vaginal examination at 8 cm you feel orbital ridges, a nose, a mouth — and, deep behind the symphysis, what you think is the chin pointing towards her sacrum.\n\nWhat have you found, and what should happen next?\n\nAnswer: This is a face presentation with mentum posterior. At this dilation with poor progress, the safest plan is referral for caesarean section, because a term mentum-posterior face cannot descend through the pelvis. Keep her informed, keep the fetal heart monitored with your count every 15 minutes, complete the partogram, and phone the referral centre ahead so theatre can be warned.",
      },
      {
        type: "memory_trick",
        body: "Face first: the chin is the star of the show — chin in front (MA), baby comes; chin behind (MP), theatre. Brow: stuck in the middle and too proud to fit — a brow must bow out (flex) or open up (extend) or go by caesarean.",
      },
      {
        type: "summary",
        body: "- Presentation is the part over the brim; the vertex presents in about 96% of labours.\n- Brow presents the 13.5 cm mentovertical diameter — persistent brow means obstructed labour and caesarean section.\n- Face presents the submento-bregmatic diameter: mentum anterior can deliver vaginally; mentum posterior at term cannot.\n- On vaginal examination, orbital ridges plus mouth and chin mean face; anterior fontanelle with ridges but no mouth means brow.\n- Diagnose early, run the partogram, and refer for the operative decision.",
      },
    ],
    questions: [
      {
        topic: "Malpresentation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "On vaginal examination you palpate the orbital ridges, the nose and the mouth of a fetus in labour. What is the presentation?",
        options: [
          "Face presentation",
          "Brow presentation",
          "Vertex presentation with marked moulding",
          "Shoulder presentation",
        ],
        correctIndex: 0,
        explanation:
          "Orbital ridges with nose, mouth and chin confirm a face presentation. In brow you would feel the anterior fontanelle and orbital ridges but no mouth; a shoulder offers ribs and an acromion process.",
        courseSlug: "abnormal-labour",
      },
      {
        topic: "Malpresentation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is a persistent brow presentation undeliverable vaginally at term?",
        options: [
          "The brow compresses the cord against the pelvic wall",
          "The head cannot mould because the frontal bones are fused",
          "The presenting mentovertical diameter of about 13.5 cm is too large for the pelvis",
          "Brow presentations are always associated with anencephaly",
        ],
        correctIndex: 2,
        explanation:
          "A half-deflexed head presents the mentovertical diameter, roughly 13.5 cm, which exceeds what an average term pelvis can accommodate. Moulding cannot make up that much difference.",
        courseSlug: "abnormal-labour",
      },
      {
        topic: "Malpresentation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman at 9 cm is diagnosed with a face presentation, mentum anterior, with a reassuring fetal heart and steady descent. What is the most appropriate plan?",
        options: [
          "Immediate transfer for caesarean section",
          "Attempt manual conversion to a vertex presentation",
          "Rupture the membranes to speed progress",
          "Continue supportive care and anticipate a possible vaginal birth",
        ],
        correctIndex: 3,
        explanation:
          "A mentum-anterior face can usually deliver vaginally. The membranes are already ruptured at 9 cm; internal version is contraindicated in labour; caesarean is reserved for mentum posterior or fetal compromise.",
        courseSlug: "abnormal-labour",
      },
    ],
    flashcards: [
      {
        topic: "Malpresentation",
        front: "Which facial presentation can deliver vaginally, and which cannot?",
        back: "Mentum anterior (chin rotated to the front) can usually deliver vaginally; mentum posterior (chin to the sacrum) cannot at term and needs caesarean section.",
      },
      {
        topic: "Malpresentation",
        front: "What presenting diameter does a brow offer, and how big is it?",
        back: "The mentovertical diameter, about 13.5 cm — too large for the average pelvis, so a persistent brow means obstructed labour.",
      },
      {
        topic: "Malpresentation",
        front: "Name four causes of malpresentation.",
        back: "Cord around the neck, fetal anomaly (anencephaly, neck mass), polyhydramnios or multiple pregnancy, and maternal factors — contracted pelvis or a pendulous abdomen in the grand multipara.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565353",
      },
      { organization: "Elsevier", title: "Myles Midwifery, 17th edition", year: "2020" },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "abnormal-labour",
    moduleTitle: "When Labour Leaves the Script",
    lessonTitle: "Malposition: The Head That Turned Wrong",
    description:
      "The head is down but facing the wrong way. Meet the occiput-posterior baby — the labour of backache, long hours and careful positioning.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe what occipito-posterior position means and how it is diagnosed.",
      "Explain why malposition lengthens labour and stresses the mother.",
      "Apply positioning, support and escalation to a labour complicated by malposition.",
    ],
    tags: ["malposition", "occipito-posterior", "labour", "partogram"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Position is different from presentation. The head may present beautifully, but be turned so that the occiput — the denominator for a vertex — points backwards instead of forwards. This is occipito-posterior, and it is the commonest malposition, starting in roughly one in ten labours.\n\nMost posterior babies rotate themselves to occipito-anterior during labour and arrive normally. This lesson is about the ones who don't, and about your role: relieving the mother's backache, supporting progress, watching the partogram, and recognising when the story is turning towards obstructed labour.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "A posterior head cannot fit the pelvis as neatly. The deflexed head presents a wider diameter, so the head rides high, contractions are felt mostly in the back, and the cervix dilates slowly. The mother may feel an urge to push before she is fully dilated, because the head presses on the rectum; the fetal heart is often heard best in the flank. On vaginal examination the posterior fontanelle is felt towards the sacrum, though caput and moulding can blur the landmarks — note which sutures your fingers follow.\n\nYour care starts simple: the all-fours or knee-to-chest position eases back pain and encourages rotation; a supported left-lateral or asymmetric squat opens the pelvis. Hydration, encouragement and one-to-one presence matter more than gadgets. Watch the partogram: if progress crosses the alert line despite these measures, inform your senior — augmentation with oxytocin, a period of rest, or an operative birth may follow, and deep transverse arrest at full dilatation needs a skilled operator for rotational ventouse or caesarean. Document everything; the next shift needs to know which way the head was facing.",
      },
      {
        type: "clinical_pearl",
        body: "Backache that feels worse than the contractions, a fetal heart loudest at her flank, and an urge to push at 7 cm — that triad whispers occipito-posterior. Check the fontanelle before you chart 'fully dilated'.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A second-time mother has been in established labour for 12 hours. She is exhausted, her contractions have spaced out, and she keeps groaning that the pain is 'in my waist, not my belly'. The fetal heart is 138 and you hear it best at her left side. On vaginal examination she is 7 cm, the head is deflexed, and the posterior fontanelle points towards her sacrum.\n\nWhat is happening, and what are your next actions?\n\nAnswer: This is an occipito-posterior position with slow progress — the deflexed head presents a larger diameter and rotates with difficulty. Start her on all-fours or left-lateral, hydrate her, give her focused support, and plot the findings on the partogram. If the alert line is crossed or the fetal heart becomes abnormal, inform the senior midwife — augmentation or an operative-birth decision may be needed, and referral may follow in a facility without operative capability.",
      },
      {
        type: "memory_trick",
        body: "OP makes 'One Painful Pressure' — backache, early pushing urge, head that rides high. Your response is 'PALM': Position (all-fours), Assess (partogram + fontanelle), Liquids, Motivation and a senior call if the line is crossed.",
      },
      {
        type: "summary",
        body: "- Position describes where the occiput points; occipito-posterior is the commonest malposition.\n- A deflexed posterior head presents a wider diameter: slow labour, backache, flank-heard fetal heart, early pushing urge.\n- Most posterior heads rotate and deliver normally — support first, position early, hydrate and encourage.\n- Vaginal examination identifies the posterior fontanelle pointing backwards, though caput and moulding can confuse.\n- Alert-line crossing or fetal heart changes means escalation: augmentation, skilled operative birth, or referral.",
      },
    ],
    questions: [
      {
        topic: "Malposition",
        type: "MCQ",
        difficulty: "Easy",
        stem: "In occipito-posterior position, where do you feel the posterior fontanelle on vaginal examination?",
        options: [
          "Towards the maternal symphysis pubis",
          "It cannot be felt at all in occipito-posterior position",
          "In the right lateral vaginal wall",
          "Towards the maternal sacrum",
        ],
        correctIndex: 3,
        explanation:
          "The denominator of the vertex — the occiput and its posterior fontanelle — points towards the sacrum in occipito-posterior position. Facing the symphysis would be occipito-anterior.",
        courseSlug: "abnormal-labour",
      },
      {
        topic: "Malposition",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman with occipito-posterior position is 6 cm dilated, contractions 3 in 10, backache severe, fetal heart 140. Which intervention should you try first?",
        options: [
          "Adopt an all-fours or left-lateral position with support and hydration",
          "Give her intramuscular pethidine to sleep",
          "Begin oxytocin augmentation immediately",
          "Rupture the membranes to accelerate labour",
        ],
        correctIndex: 0,
        explanation:
          "Maternal positioning is the first, cheapest and kindest step — all-fours eases back pain and may encourage rotation. Oxytocin and amniotomy are decisions for the partogram and the senior, not first-line reflexes.",
        courseSlug: "abnormal-labour",
      },
      {
        topic: "Malposition",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which finding in an occipito-posterior labour should prompt you to inform your senior?",
        options: [
          "The mother complains of backache at 4 cm with steady progress",
          "Progress on the partogram crosses the alert line despite good support",
          "The fetal heart is heard best in the flank at 145 per minute",
          "She feels an urge to bear down shortly after reaching full dilatation",
        ],
        correctIndex: 1,
        explanation:
          "Crossing the alert line signals a labour that is not progressing as it should — in an occipito-posterior labour that can mean failed rotation and obstruction. The senior needs to review augmentation, operative birth or referral.",
        courseSlug: "abnormal-labour",
      },
    ],
    flashcards: [
      {
        topic: "Malposition",
        front: "What is the difference between presentation and position?",
        back: "Presentation is the part over the pelvic brim (vertex, face, breech). Position is where the denominator of the presenting part points — for a vertex, where the occiput faces.",
      },
      {
        topic: "Malposition",
        front: "Give three examination clues to occipito-posterior position.",
        back: "Severe backache in labour, fetal heart heard best in the flank, and a deflexed head with the posterior fontanelle felt towards the sacrum on vaginal examination.",
      },
      {
        topic: "Malposition",
        front: "What is deep transverse arrest?",
        back: "An occipito-transverse head that descends deep into the pelvis and stops rotating at full dilatation — it needs a skilled operator for rotational ventouse, special forceps, or caesarean section.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "WHO Recommendations: Intrapartum Care for a Positive Childbirth Experience",
        year: "2018",
        url: "https://www.who.int/publications/i/item/9789241550215",
      },
      { organization: "Elsevier", title: "Myles Midwifery, 17th edition", year: "2020" },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "abnormal-labour",
    moduleTitle: "Unusual Presentations",
    lessonTitle: "Breech: The Bottom-First Baby",
    description:
      "Three or four babies in every hundred arrive bottom-first. Learn the types, the risks, the version option and the referral question.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the types of breech and how breech is diagnosed.",
      "Explain the risks breech brings to labour, including cord prolapse and head entrapment.",
      "Apply the management options — external cephalic version, planned caesarean and the conditions for vaginal breech birth.",
    ],
    tags: ["breech", "presentation", "ecv", "referral", "labour"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "At term, about 3 to 4 babies in 100 sit bottom-down in the womb. Many of those are first pregnancies in your district, discovered at a late antenatal visit — or only when labour starts. What you do in that moment shapes the whole birth.\n\nThis lesson covers recognising breech, the differences between its types, the special risks it carries, and the three roads out: turning the baby before labour, planning a caesarean, or — in the right setting with the right skills — a carefully supported vaginal breech birth.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "On abdominal examination, the head is a hard, round, ballotable mass under the fundus, while the breech above the brim feels soft and irregular; the fetal heart is often heard above the umbilicus. Vaginal examination confirms a soft presenting part — you may feel the ischial tuberosities and sacrum, or in a footling breech, little feet. Ultrasound adds the type: **frank** breech (hips flexed, legs straight up — the commonest), **complete** (sitting cross-legged), or **incomplete/footling** (a foot or knee leading, the one most likely to bring cord prolapse).\n\nThe dangers are cord prolapse, a head that delivers too fast or too slow — trapped by an incompletely dilated cervix — and birth trauma from hurried hands. Because of the Term Breech Trial and later studies, planned caesarean is the usual plan at term where surgery is safe. A **skilled** vaginal breech birth remains an option in a fully staffed unit with theatre access, and the hands-off rule holds: don't touch until the nape appears. At 36-37 weeks, offer external cephalic version — turning the baby through the mother's abdomen — which succeeds in about half of cases and removes the whole problem. In a CHPS compound, a breech in labour is a referral: phone ahead, keep the membranes intact, and never pull.",
      },
      {
        type: "clinical_pearl",
        body: "Never pull a breech. The body delivers itself up to the nape; your impatience is the most dangerous instrument in the room. Warm hands, patience, and a skilled senior are what a breech baby needs.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 21-year-old primigravida walks into your CHPS compound at term contracting 4 in 10. Her antenatal card shows fundal height 38 cm with no scan. You feel a hard round mass under her ribs, soft parts above the brim, and the fetal heart at 146 best heard above the umbilicus. On gentle vaginal examination you feel a foot beside a soft buttock, cervix 5 cm, membranes bulging.\n\nWhat is the presentation, why is it dangerous, and what do you do?\n\nAnswer: This is a footling (incomplete) breech in labour — diagnosed by the head in the fundus, soft presenting part and a palpable foot. Footling breech carries a high risk of cord prolapse, especially once the membranes rupture, and the aftercoming head can be trapped. Keep her horizontal to reduce cord pressure, avoid rupturing the membranes deliberately, monitor the fetal heart every 15 minutes, and phone the referral centre for transfer — a footling breech in a primigravida at a CHPS compound is a caesarean story, not a waiting story.",
      },
      {
        type: "memory_trick",
        body: "Breech types: 'Frank sits like a cannonball, Complete sits cross-legged, Footling dangles a foot.' And remember the three exits — turn it, cut it, or (only with skill) catch it: ECV, caesarean, or a hands-off vaginal birth.",
      },
      {
        type: "summary",
        body: "- Breech affects 3-4% of term babies: head in the fundus, soft presenting part, fetal heart often above the umbilicus.\n- Types: frank (commonest), complete, incomplete/footling (highest cord-prolapse risk).\n- Core risks: cord prolapse, trapped aftercoming head, birth trauma from pulling.\n- External cephalic version at 36-37 weeks succeeds in about half of cases.\n- Planned caesarean at term is the usual plan where theatre is safe; vaginal breech needs a skilled attendant, theatre access and hands-off patience to the nape.\n- In a low-resource setting: refer breech in labour, keep membranes intact, never pull.",
      },
    ],
    questions: [
      {
        topic: "Breech",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which breech type carries the highest risk of cord prolapse?",
        options: [
          "Frank breech with hips flexed and knees extended",
          "Complete breech sitting cross-legged",
          "Footling (incomplete) breech with a foot presenting",
          "Any breech in a multigravida",
        ],
        correctIndex: 2,
        explanation:
          "A footling breech leaves space beside the presenting foot, so the cord can slip down alongside or below it once the membranes rupture. The frank breech plugs the pelvis more snugly.",
        courseSlug: "abnormal-labour",
      },
      {
        topic: "Breech",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A healthy woman at 37 weeks has a frank breech, no other risk factors. What option should be discussed with her?",
        options: [
          "Immediate caesarean section this week",
          "External cephalic version at this gestation",
          "Induction of labour to deliver the breech vaginally",
          "Admission for bed rest until 40 weeks",
        ],
        correctIndex: 1,
        explanation:
          "External cephalic version is offered around 36-37 weeks for a singleton breech with no contraindications. It succeeds in about half of cases and avoids caesarean if the baby stays vertex.",
        courseSlug: "abnormal-labour",
      },
      {
        topic: "Breech",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During a planned vaginal breech birth in theatre-ready surroundings, the body has delivered to the nape. What is the guiding rule for the attendant?",
        options: [
          "Apply strong traction to deliver the head quickly",
          "Perform an episiotomy only after the head delivers",
          "Push the head back and prepare for caesarean",
          "Keep hands off and await spontaneous delivery of the head, then assist if needed",
        ],
        correctIndex: 3,
        explanation:
          "Hands off the breech until the nape is visible is the classic rule: the body delivers itself, and the head then follows with the Mauriceau-Smellie-Veit manoeuvre or forceps to the aftercoming head if slow. Traction is the great danger.",
        courseSlug: "abnormal-labour",
      },
    ],
    flashcards: [
      {
        topic: "Breech",
        front: "How do you diagnose breech on abdominal examination?",
        back: "Hard, round, ballotable head under the fundus; a soft, irregular presenting part above the brim; the fetal heart is often heard best above the umbilicus. Confirm type by ultrasound or vaginal examination.",
      },
      {
        topic: "Breech",
        front: "What are the three management roads for a term breech?",
        back: "External cephalic version at 36-37 weeks; planned caesarean section (the usual term plan where theatre is safe); or a selected vaginal breech birth with a skilled attendant, theatre access and hands-off care.",
      },
      {
        topic: "Breech",
        front: "Why must you never pull on a breech?",
        back: "Traction can trap the aftercoming head behind an incompletely dilated cervix, cause cervical spine injury, and produce nuchal arms — converting a birth that would manage itself into an emergency.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565353",
      },
      {
        organization: "RCOG",
        title: "Green-top Guideline No. 20b: The Management of Breech Presentation",
        year: "2017",
      },
      { organization: "Elsevier", title: "Myles Midwifery, 17th edition", year: "2020" },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "abnormal-labour",
    moduleTitle: "Unusual Presentations",
    lessonTitle: "Shoulder Presentation: The Transverse Lie",
    description:
      "A baby lying sideways across the womb cannot be born — and if labour is allowed to grind on, the uterus itself gives way. Here is why, and what to do.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the causes and diagnosis of transverse lie with shoulder presentation.",
      "Explain why a shoulder presentation obstructs labour and endangers the uterus.",
      "Apply the management, including referral and emergency response.",
    ],
    tags: ["transverse lie", "shoulder", "obstructed labour", "referral"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Now and then a baby lies across the womb like a hammock — head in one flank, breech in the other, shoulder pointing at the birth canal. That is transverse lie, and the shoulder becomes the presenting part. You meet it most often in grand multiparas, whose roomy, relaxed wombs let the baby drift sideways, and in twin pregnancies, polyhydramnios, placenta praevia or fibroids.\n\nThe lesson matters because of one hard fact: a shoulder cannot be born through the pelvis. Every hour of neglected labour pushes the mother toward obstructed labour, exhaustion, infection and rupture — one of the tragedies behind Ghana's maternal deaths.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "On abdominal examination the uterus lies wide, the fundus is lower than expected, and you find the head in one side and a softer mass in the other; the lower pole feels empty. On vaginal examination you may feel the point of the shoulder — the acromion with its ribs alongside — and if the membranes have gone, a small hand and arm may have prolapsed into the vagina. That prolapsed arm is the classic sign of a neglected transverse lie.\n\nManagement depends on the stage. Before labour, or very early with membranes intact, external version in skilled hands can sometimes turn the lie — but with most causes you plan a caesarean. In labour with membranes ruptured, an arm or cord prolapsed, or fetal distress, it is an **emergency caesarean**: phone ahead and never attempt internal version at a facility without theatre. A neglected case — feverish mother, racing pulse, a Bandl's ring forming, contractions vanished — is uterine rupture knocking; resuscitate and transfer with theatre warned. If the baby has died, destructive procedures by a specialist may spare the mother a caesarean, but that is a referral decision, not yours.",
      },
      {
        type: "clinical_pearl",
        body: "A prolapsed arm at the vulva is never a 'delivery'. It is the flag of a shoulder presentation that needs a theatre. Replace nothing, pull nothing — stabilise, call, transfer.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A grandmother of five — para 6, term pregnancy, contractions since dawn — reaches your district hospital at 2 pm. She is exhausted, her pulse is 112, temperature 37.9 C. Abdominally the uterus is wide, the lower pole empty. On examination you find a small hand protruding at the vulva; on vaginal examination the cervix is 8 cm and you feel ribs and the point of a shoulder. The fetal heart cannot be heard.\n\nWhat is the diagnosis, and what is the urgency?\n\nAnswer: This is a neglected shoulder presentation in obstructed labour, with a prolapsed arm and likely intrauterine death. The immediate danger is now the mother: obstruction, fever and tachycardia put her uterus at risk of rupture and she has early sepsis. Resuscitate with intravenous fluids, begin antibiotics per protocol, pass a catheter, inform the doctor, alert theatre and the blood bank, and transfer without delay for caesarean (or a destructive procedure by the specialist once fetal death is confirmed) — plus the honest counselling she will need afterwards.",
      },
      {
        type: "memory_trick",
        body: "Transverse lie: 'Wide womb, empty door, shoulder knocking.' If a hand slips out, think of it as the baby waving for the theatre team. Your job is SPEED — Stabilise, Phone, Elevate nothing, Expedite transfer, Document.",
      },
      {
        type: "summary",
        body: "- Transverse lie presents the shoulder: head in one flank, breech in the other, lower pole empty.\n- Common in grand multiparity, twins, polyhydramnios, praevia and fibroids.\n- A shoulder cannot pass the pelvis — continued labour means obstruction, then uterine rupture.\n- Prolapsed arm after membrane rupture is the classic sign of the neglected case.\n- Management is external version in selected early cases, otherwise caesarean — an emergency once membranes have ruptured or the fetus is in trouble.\n- Resuscitate, phone ahead, and transfer with theatre warned; the mother's life is the priority in the neglected case.",
      },
    ],
    questions: [
      {
        topic: "Transverse Lie",
        type: "MCQ",
        difficulty: "Easy",
        stem: "On abdominal examination of a transverse lie you would expect to find:",
        options: [
          "The head deep in the pelvis and the breech in the fundus",
          "The head in one flank, the breech in the other, and an empty lower pole",
          "Both twins presenting by the vertex",
          "A fundal height much greater than dates with a single fetus",
        ],
        correctIndex: 1,
        explanation:
          "The baby lies sideways: head in one flank, breech in the other, shoulder over the brim and an empty lower pole. The uterus appears wide rather than tall.",
        courseSlug: "abnormal-labour",
      },
      {
        topic: "Transverse Lie",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman at term with a transverse lie is contracting strongly; the membranes have just ruptured and a fetal hand is now palpable in the vagina. Fetal heart 150. What is the correct management?",
        options: [
          "Pull gently on the arm to deliver the baby",
          "Attempt external version during the contraction",
          "Emergency referral for caesarean section, with resuscitation and call-ahead",
          "Observe for four hours and re-examine",
        ],
        correctIndex: 2,
        explanation:
          "A shoulder presentation with ruptured membranes and a prolapsed arm is an obstructed labour in the making, with cord prolapse an ever-present threat. The answer is an emergency caesarean at a capable facility — traction on the arm or version in active labour would injure mother and baby.",
        courseSlug: "abnormal-labour",
      },
      {
        topic: "Transverse Lie",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which woman is at highest risk of a transverse lie?",
        options: [
          "A para 6 mother with a pendulous abdomen at term",
          "A primigravida at 28 weeks with a longitudinal lie on scan",
          "A woman with a well-engaged head at 39 weeks",
          "A second-time mother whose first baby was born by ventouse",
        ],
        correctIndex: 0,
        explanation:
          "Grand multiparity with a lax, pendulous abdomen is the classic setup for transverse lie — the roomy uterus lets the baby settle sideways. Multiple pregnancy and polyhydramnios are other key risks.",
        courseSlug: "abnormal-labour",
      },
    ],
    flashcards: [
      {
        topic: "Transverse Lie",
        front: "What presenting part does a transverse lie offer, and can it deliver?",
        back: "The shoulder (acromion and ribs). No — a shoulder cannot pass through the pelvis, so labour becomes obstructed and the uterus is at risk of rupture.",
      },
      {
        topic: "Transverse Lie",
        front: "What is the significance of a prolapsed fetal arm in labour?",
        back: "It is the classic sign of a neglected shoulder presentation with ruptured membranes — an emergency requiring resuscitation and referral for caesarean (or a destructive procedure by a specialist if the baby has died).",
      },
      {
        topic: "Transverse Lie",
        front: "Name four causes of transverse lie.",
        back: "Grand multiparity with pendulous abdomen, multiple pregnancy, polyhydramnios, placenta praevia (or a fibroid) filling the lower segment.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565353",
      },
      { organization: "Elsevier", title: "Myles Midwifery, 17th edition", year: "2020" },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "abnormal-labour",
    moduleTitle: "Unusual Presentations",
    lessonTitle: "Cord Complications: Prolapse and Compression",
    description:
      "When the cord falls below the presenting part, the baby's oxygen supply is squeezed to a thread. Minutes matter — learn the knee-chest drill.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe cord prolapse and the situations that predispose to it.",
      "Explain why cord prolapse causes sudden fetal compromise.",
      "Apply the emergency response: position, elevate, and expedite birth.",
    ],
    tags: ["cord prolapse", "emergency", "fhr", "referral"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Imagine the baby's lifeline — the umbilical cord — slipping past the head and lying in the vagina. Every contraction then crushes it between the baby's body and the mother's pelvis. This is cord prolapse: rare with a well-engaged head, but far more likely when the leading part fits loosely — a footling breech, a transverse lie, a high mobile head, a second twin, or sudden rupture of membranes in polyhydramnios.\n\nIt is one of the few true minute-to-minute emergencies of normal labour. Your calm drill — position, elevate, call — is the difference between a healthy baby and a devastated family.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Recognise it by the pattern: the fetal heart suddenly drops after the membranes rupture, especially a bradycardia that persists between contractions. Confirm on vaginal examination — a pulsating cord beside or below the presenting part, sometimes visible at the vulva. Never do a vaginal examination for fun after membranes rupture with a high head — but when you suspect it, do one promptly.\n\nThe drill: shout for help and pull the emergency bell. Position the mother knee-chest with her bottom high, or in an exaggerated left-lateral with pillows under her hip. If the cord has prolapsed outside the vulva, gently replace it in the vagina and hold the presenting part up off it with two fingers — your hand stays until a decision is made. Filling the bladder with 500-700 mL of saline lifts the presenting part if skilled hands are stretched. If the baby is alive and vaginal birth is not imminent, it is a category-1 caesarean with your fingers or the bladder lift holding the cord free. If the head is low and birth is one push away, expedite with ventouse or forceps. Cord compression without prolapse — occult compression — shows as variable decelerations on monitoring; reposition the mother and reassess. Prevention beats cure: avoid amniotomy with an unengaged head, and let the membranes rupture naturally where the head is high.",
      },
      {
        type: "clinical_pearl",
        body: "After the membranes go with a high head or an odd presentation, a fetal heart that will not come back up is cord prolapse until your vaginal examination says otherwise. Examine — don't wonder.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A primigravida at term is contracting 4 in 10 in your district hospital. She is 5 cm dilated with a high, mobile head. During a contraction the midwife ruptures the membranes to 'speed things up'. Immediately the fetal heart falls to 70 and stays there between contractions.\n\nWhat has most likely happened, and what are your first actions?\n\nAnswer: This is almost certainly a cord prolapse — the membranes were ruptured with an unengaged head, and the cord has slipped below it. Call for help, place her in knee-chest or exaggerated left-lateral, perform a vaginal examination to confirm the cord and lift the presenting part off it with your fingers, and alert theatre immediately for a category-1 caesarean at 5 cm. Note the time the fetal heart fell, keep the mother informed, and prepare the neonatal resuscitation corner — this baby will arrive needing you ready.",
      },
      {
        type: "memory_trick",
        body: "CORD: Call for help, Off her back — knee-chest bottom up, Replace the cord and Raise the presenting part, Decide fast — theatre now or expedite birth. Your hand is the elevator: it rides with her to theatre.",
      },
      {
        type: "summary",
        body: "- Cord prolapse means the cord beside or below the presenting part, compressed with every contraction.\n- Risk rises with malpresentation, transverse lie, a high mobile head, second twin, polyhydramnios and ruptured membranes.\n- Think of it whenever the fetal heart drops suddenly after membrane rupture — confirm by vaginal examination.\n- Emergency drill: knee-chest or left-lateral, replace the cord, elevate the presenting part by hand or a filled bladder, call for theatre.\n- If birth is imminent, expedite with ventouse or forceps; otherwise category-1 caesarean.\n- Prevention: no amniotomy when the head is not engaged.",
      },
    ],
    questions: [
      {
        topic: "Cord Prolapse",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which event in labour should most raise your suspicion of cord prolapse?",
        options: [
          "Sudden fetal bradycardia immediately after rupture of the membranes with a high head",
          "Gradual slowing of contractions after epidural",
          "The mother passing meconium at 4 cm",
          "Fetal tachycardia with maternal fever",
        ],
        correctIndex: 0,
        explanation:
          "A cord that slips past a loose or high presenting part is compressed at once, producing sudden bradycardia the moment the waters break. Tachycardia with fever points to infection instead.",
        courseSlug: "abnormal-labour",
      },
      {
        topic: "Cord Prolapse",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "At 6 cm with a breech presentation, the membranes rupture and you feel a pulsating cord in the vagina. The fetal heart is 60. What is the immediate priority while help arrives?",
        options: [
          "Push the cord back and continue observations",
          "Place her in knee-chest position and lift the presenting part off the cord with your fingers",
          "Encourage her to push to deliver the baby quickly",
          "Start an oxytocin drip to accelerate labour",
        ],
        correctIndex: 1,
        explanation:
          "Position plus manual elevation of the presenting part relieves the compression faster than anything else, buying the minutes needed to move her to theatre. Pushing at 6 cm is impossible, oxytocin is contraindicated, and simply replacing the cord without lifting the part does nothing.",
        courseSlug: "abnormal-labour",
      },
      {
        topic: "Cord Prolapse",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which action helps prevent cord prolapse?",
        options: [
          "Routinely rupturing membranes early to speed labour",
          "Keeping the mother supine after membrane rupture",
          "Avoiding amniotomy when the presenting part is high and unengaged",
          "Performing vaginal examinations hourly after rupture",
        ],
        correctIndex: 2,
        explanation:
          "The cord slips down beside a poorly fitting part, so leaving the membranes intact while the head is high is your best prevention. Early rupture with an unengaged head invites prolapse; repeated vaginal examinations add infection risk, not safety.",
        courseSlug: "abnormal-labour",
      },
    ],
    flashcards: [
      {
        topic: "Cord Prolapse",
        front: "What is cord prolapse, and what is its signature sign?",
        back: "The cord lies beside or below the presenting part after membrane rupture; the signature is sudden fetal bradycardia right after the waters break, confirmed by feeling a pulsating cord on vaginal examination.",
      },
      {
        topic: "Cord Prolapse",
        front: "Give the four immediate steps of the cord prolapse drill.",
        back: "Call for help; knee-chest or exaggerated left-lateral position; replace the cord and lift the presenting part off it with fingers (or fill the bladder); expedite birth — category-1 caesarean, or ventouse/forceps if birth is imminent.",
      },
      {
        topic: "Cord Prolapse",
        front: "Which mothers are at highest risk of cord prolapse?",
        back: "Malpresentations — footling breech, transverse lie — high mobile head, second twin, polyhydramnios, and rupture of membranes with a poorly fitting part.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565353",
      },
      {
        organization: "NICE",
        title: "Intrapartum Care for Healthy Women and Babies (CG190)",
        year: "2014",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "abnormal-labour",
    moduleTitle: "Mother and Baby in Danger",
    lessonTitle: "Fetal Distress: Reading the Warning Signs",
    description:
      "A baby short of oxygen talks to you through its heart rate, its movements and its stool. Learn the language and the first-response drill.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the fetal heart rate patterns and other signs that suggest fetal compromise.",
      "Explain the meaning and dangers of meconium-stained liquor.",
      "Apply the first-response drill — reposition, hydrate, treat the cause, expedite if needed.",
    ],
    tags: ["fetal distress", "fhr", "meconium", "monitoring"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A fetus cannot complain. It signals through three channels — its heart rate, its movements, and its stool. In most Ghanaian facilities you will read the first channel with a Pinard stethoscope or a hand-held Doppler, counting the fetal heart for a full minute and comparing it with the mother's pulse. That skill, done well and often, saves babies.\n\nThis lesson trains your ear and your hands: what counts as abnormal, what meconium in the liquor is telling you, and the drill you run in the minutes after you spot trouble.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The normal fetal heart sits between 110 and 160 beats a minute. **Tachycardia** above 160 usually means fever, dehydration or early hypoxia — in Ghana, think of malaria in the mother before anything else, and check her temperature. **Bradycardia** below 110 is more serious, and a slow heart that fails to recover between contractions points to real hypoxia. Any persisting abnormality needs confirmation, not panic: reposition the mother onto her left side, give intravenous fluids, stop any oxytocin, treat the fever, and count again after a contraction.\n\n**Meconium** — the baby's first stool passed in the womb — stains the liquor green or black. Thin, watery old meconium at term with a normal heart is often innocent; thick, fresh, lumpy meconium — pea soup — especially with an abnormal heart rate, means the baby is in trouble and may gasp it into its lungs at birth. Prepare the resuscitation corner and clear the airway before the shoulders are out if the baby is depressed. Reduced fetal movements, a tachycardia that won't settle, or a heart that stays below 110 after your drill all lead to one question: is this baby better out than in? If it is, and your facility cannot deliver operatively, stabilise and refer — with a phone call ahead, never a silent transfer.",
      },
      {
        type: "clinical_pearl",
        body: "Count the fetal heart for one full minute — and count the mother's pulse at the same time. Counting a maternal tachycardia as 'fetal distress' has sent many healthy babies to theatre; counting a fetal bradycardia as maternal has cost lives.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman at term is 6 cm dilated, contracting well. Her temperature is 38.6 C and she is shivering. The fetal heart is 172, confirmed against a maternal pulse of 94. The liquor is clear. You have given paracetamol and started a malaria test.\n\nWhat is the most likely cause of the fetal tachycardia, and what else should you do now?\n\nAnswer: Maternal fever is driving the fetal tachycardia — with fever and shivering at term in Ghana, malaria is the leading suspect until the test says otherwise. Continue antipyretics and fluids, position her on her left side, ensure the malaria test and treatment per protocol are underway, and re-count the fetal heart after 30 minutes of treatment. Document the counts and times. If the tachycardia persists despite the fever settling, or the heart begins to fall, escalate — this baby's reserve is not infinite.",
      },
      {
        type: "memory_trick",
        body: "The baby's distress language is 'H-M-B': Heart rate out of range, Meconium in the water, Baby moving less. Your drill is 'Left-Fluids-Fix': turn her left, fluids in, fix the cause — then re-count and decide whether the womb has become the wrong postcode.",
      },
      {
        type: "summary",
        body: "- Normal fetal heart is 110-160; count a full minute and always against the maternal pulse.\n- Tachycardia commonly reflects maternal fever, dehydration or malaria — treat the mother first; bradycardia or poor recovery between contractions signals real hypoxia.\n- Thick fresh meconium with an abnormal heart rate is a warning of aspiration risk — prepare resuscitation.\n- First response: left lateral, intravenous fluids, stop oxytocin, treat fever, re-count after a contraction.\n- If abnormality persists, the question is whether the baby is better out than in — expedite birth or refer with a call ahead.",
      },
    ],
    questions: [
      {
        topic: "Fetal Distress",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the normal range for the fetal heart rate in labour?",
        options: ["60-100 per minute", "90-140 per minute", "160-200 per minute", "110-160 per minute"],
        correctIndex: 3,
        explanation:
          "The normal fetal heart lies between 110 and 160 beats per minute. Below 110 is bradycardia and a serious sign; above 160 is tachycardia, most often from maternal fever or early hypoxia.",
        courseSlug: "abnormal-labour",
      },
      {
        topic: "Fetal Distress",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During intermittent auscultation you count a fetal heart of 174 with clear liquor and good progress. What should you do first?",
        options: [
          "Call theatre for an immediate caesarean",
          "Reposition her left lateral, give fluids, check her temperature and re-count after a contraction",
          "Rupture the membranes to look for meconium",
          "Repeat the count in four hours",
        ],
        correctIndex: 1,
        explanation:
          "Fetal tachycardia most often mirrors maternal fever or dehydration. The first drill is simple: left lateral, fluids, temperature check and malaria test, then re-count after a contraction — surgery and amniotomy are decisions that come after, if the heart stays abnormal.",
        courseSlug: "abnormal-labour",
      },
      {
        topic: "Fetal Distress",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman at term has thick fresh meconium in the liquor and a fetal heart that has fallen to 100 and is slow to recover. What does this combination demand?",
        options: [
          "Observation only, because meconium at term is common",
          "Position change and re-count in two hours",
          "Expedited birth with the resuscitation corner ready, or referral if birth cannot be expedited",
          "Immediate oxytocin to speed labour",
        ],
        correctIndex: 2,
        explanation:
          "Thick fresh meconium plus an abnormal heart rate signals a baby at risk of both hypoxia and meconium aspiration. It needs a plan to end the labour soon with skilled resuscitation at hand; oxytocin adds stress to an already compromised baby.",
        courseSlug: "abnormal-labour",
      },
    ],
    flashcards: [
      {
        topic: "Fetal Distress",
        front: "What fetal heart values count as tachycardia and bradycardia, and which is more ominous?",
        back: "Tachycardia is above 160 per minute (think maternal fever, dehydration, malaria); bradycardia is below 110 (think significant hypoxia, cord compression, placental failure) and is the more ominous sign.",
      },
      {
        topic: "Fetal Distress",
        front: "Which kind of meconium is the dangerous kind?",
        back: "Thick, fresh, lumpy dark meconium — especially with an abnormal fetal heart — because a hypoxic baby may gasp it deep into its lungs. Thin, old meconium with a normal heart at term is usually innocent.",
      },
      {
        topic: "Fetal Distress",
        front: "Give the first-response drill for a suspicious fetal heart rate.",
        back: "Reconfirm over a full minute against the maternal pulse; turn her left lateral; give intravenous fluids; stop oxytocin; treat fever and test for malaria; re-count after a contraction and decide — expedite birth or refer with a call ahead.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "WHO Recommendations: Intrapartum Care for a Positive Childbirth Experience",
        year: "2018",
        url: "https://www.who.int/publications/i/item/9789241550215",
      },
      {
        organization: "WHO",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565353",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "abnormal-labour",
    moduleTitle: "Mother and Baby in Danger",
    lessonTitle: "Uterine Rupture: The Catastrophe",
    description:
      "The womb that tears. Learn who is at risk, the signs that announce it, and the minutes that decide two lives.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the risk factors for uterine rupture, scarred and unscarred.",
      "Explain the clinical signs that suggest rupture in labour.",
      "Apply the emergency response and the preventive measures in your own setting.",
    ],
    tags: ["uterine rupture", "emergency", "vbac", "referral"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Uterine rupture is the catastrophe of abnormal labour: the womb tears, the baby spills into the abdomen, and the mother haemorrhages — often with little visible bleeding, because the blood hides inside. It kills fast, and it is almost always foreseeable.\n\nIn Ghana, the two roads to rupture are a previous caesarean scar labouring unsupervised, and neglected obstructed labour in a grand multipara. Both are watched with the same tool — your partogram — and both are prevented by the same discipline: recognising the labour that isn't progressing and acting before the uterus gives up.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "A **scarred uterus** ruptures easier because myometrium has been replaced by fibrous tissue. A previous caesarean, myomectomy or perforation puts a mother in a high-risk category: she should labour, if at all, only in a theatre-ready unit with one-to-one care and a documented scar type. The **unscarred uterus** of the grand multipara ruptures through neglect — hours of strong contractions against an obstruction, classically a shoulder presentation or deep obstruction, until the lower segment thins into a Bandl's ring and gives way. Misused oxytocin, given without monitoring or in too-high a dose, is a rising cause everywhere.\n\nThe signs announce themselves: the contractions **stop** and the pain becomes constant; the fetal heart **disappears**; the presenting part **recedes** upward; fetal parts become strangely easy to feel; and shock — fast pulse, pallor, falling blood pressure — appears out of proportion to any vaginal bleeding. Management is immediate: resuscitate with two wide-bore lines, cross-match blood, run her to theatre for laparotomy — repair if possible, otherwise hysterectomy. In a facility without theatre, suspect it in seconds, resuscitate on the move, and transfer with the theatre already phoned.",
      },
      {
        type: "clinical_pearl",
        body: "'Doctor, the pain has gone quiet' from a labouring mother with a previous caesarean is not relief — it is the loudest alarm in obstetrics. A uterus that stops contracting has often already torn.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A para 5 woman is referred from a CHPS compound in strong labour. Her card notes a previous caesarean three years ago 'for big baby'. She has been contracting for 14 hours. On arrival her pulse is 128, blood pressure 88/50, and she is pale and restless. Contractions are no longer palpable. The presenting head, documented at spines two hours ago, is now high and mobile, and you cannot find a fetal heart. There is a trickle of dark blood per vaginam.\n\nWhat has happened, and what are your actions?\n\nAnswer: This is classic uterine rupture — a scarred uterus in neglected labour, contractions ceased, presenting part receded, fetal heart lost, and shock disproportionate to the visible bleeding because the loss is intra-abdominal. Shout for help; two wide-bore lines with vigorous fluid resuscitation; cross-match blood; pass a catheter; alert theatre and the senior obstetrician for immediate laparotomy. If theatre is unavailable on site, resuscitation continues during the call-ahead transfer — she goes with an escort and a referral note recording times.",
      },
      {
        type: "memory_trick",
        body: "Rupture announces itself with four 'gone's: contractions gone (constant pain), fetal heart gone, presenting part gone — it recedes upward — and blood pressure gone, with little to see on the pad. When a labour with a scar goes silent and shocked, picture a torn womb and move.",
      },
      {
        type: "summary",
        body: "- Uterine rupture is a catastrophe of the scarred uterus or of neglected obstructed labour, made worse by misused oxytocin.\n- Previous caesarean means one-to-one, theatre-ready care — never an unmonitored trial in a low-level facility.\n- Key signs: contractions stop, constant pain, fetal heart lost, presenting part recedes, fetal parts easily felt, shock out of proportion to visible blood loss.\n- Response: resuscitate with two lines and cross-matched blood, immediate laparotomy — repair or hysterectomy.\n- Prevention is the partogram, the alert line, supervised oxytocin, and honest referral of scarred and obstructed labours.",
      },
    ],
    questions: [
      {
        topic: "Uterine Rupture",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A labouring woman with a previous caesarean suddenly says her contractions have stopped, and you can no longer hear the fetal heart. What must you suspect first?",
        options: [
          "Normal transition to the second stage",
          "Uterine rupture",
          "Placenta praevia",
          "False labour",
        ],
        correctIndex: 1,
        explanation:
          "In a scarred uterus, contractions that cease with loss of the fetal heart is uterine rupture until proven otherwise. It is the leading emergency to exclude in that moment.",
        courseSlug: "abnormal-labour",
      },
      {
        topic: "Uterine Rupture",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why can a woman with uterine rupture show severe shock with only a trickle of vaginal bleeding?",
        options: [
          "The bleed is mostly concealed within the peritoneal cavity",
          "Rupture always causes massive external bleeding first",
          "The blood loss is imaginary and anxiety explains the shock",
          "Shock only develops if the bladder also tears",
        ],
        correctIndex: 0,
        explanation:
          "A ruptured uterus bleeds mainly into the abdominal cavity, so the visible loss can be a trickle while she collapses — this is why shock out of proportion to the bleeding is a classic sign of rupture.",
        courseSlug: "abnormal-labour",
      },
      {
        topic: "Uterine Rupture",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which of the following is a key preventive measure against uterine rupture in district practice?",
        options: [
          "Giving oxytocin early to strengthen contractions in slow labour",
          "Allowing grand multiparas to labour at home for as long as possible",
          "Using the partogram and referring promptly when the action line is reached",
          "Avoiding vaginal examinations so the labour is undisturbed",
        ],
        correctIndex: 2,
        explanation:
          "The partogram converts 'slow labour' into a measurable decision point: cross the alert line and you inform, cross the action line and you act. Oxytocin without monitoring multiplies rupture risk, and undisturbed home labour hides obstruction.",
        courseSlug: "abnormal-labour",
      },
    ],
    flashcards: [
      {
        topic: "Uterine Rupture",
        front: "Name the two classic roads to uterine rupture.",
        back: "A scarred uterus (previous caesarean, myomectomy) labouring under strain, and neglected obstructed labour — usually in a grand multipara with an unscarred uterus. Misused, unmonitored oxytocin accelerates both.",
      },
      {
        topic: "Uterine Rupture",
        front: "List five signs of uterine rupture in labour.",
        back: "Contractions stop and pain becomes constant; fetal heart disappears; presenting part recedes upward; fetal parts become easily palpable; shock (tachycardia, pallor, hypotension) out of proportion to visible bleeding.",
      },
      {
        topic: "Uterine Rupture",
        front: "What is a Bandl's ring?",
        back: "The visible ridge that forms at the junction of thinned lower and thickened upper uterine segments during prolonged obstructed labour — a late warning that the uterus is near rupture.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565353",
      },
      { organization: "Elsevier", title: "Gabbe's Obstetrics: Normal and Problem Pregnancies, 8th edition", year: "2021" },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "abnormal-labour",
    moduleTitle: "Emergencies After Birth",
    lessonTitle: "Postpartum Haemorrhage: Recognise and React",
    description:
      "The biggest maternal killer worldwide — and the one you can beat with fast hands and a clear head. The four Ts in action.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe primary postpartum haemorrhage and the tone-trauma-tissue-clot framework.",
      "Explain why blood loss is underestimated and how shock signs guide response.",
      "Apply the first minutes of PPH management with the drugs available in your setting.",
    ],
    tags: ["pph", "emergency", "uterotonics", "4ts"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Postpartum haemorrhage — heavy bleeding after birth — kills a mother somewhere in the world every few minutes, and it kills fast: from fit to critical in under two hours. The definition is blood loss of 500 mL or more after a vaginal birth (1,000 mL after caesarean), or any loss that makes the mother shocked, whatever the number on the pad.\n\nLearn this drill like your own name: PPH strikes without warning in the healthiest of women, and the response is a four-word framework — tone, trauma, tissue, thrombin — plus actions that run by reflex.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Tone** — a floppy, atonic uterus — causes about 70 of every 100 PPHs. Rub the uterus up through the abdominal wall, empty the bladder with a catheter, and give a uterotonic: oxytocin 10 units IV or IM is first choice; ergometrine 0.2 mg if her blood pressure is normal; misoprostol 600 micrograms sublingually where no oxytocin or cold chain exists — the realistic backbone of community care in Ghana. **Trauma** means tears of the perineum, vagina or cervix: if the uterus is well contracted and she still bleeds, inspect with good light. **Tissue** means a placenta or clots retained inside — check the placenta is complete and explore for products. **Thrombin** — a clotting problem — is suspected when bleeding continues despite the other three.\n\nThroughout, act in parallel, not in sequence: call for help, two large-bore intravenous lines, fluids running, vital signs every 15 minutes, keep her warm. Rub, check the placenta, inspect the birth canal, and treat what you find. Visual estimation always under-reads — almost by half — so trust her pulse, pallor and restlessness. If bleeding continues: bimanual compression of the uterus while the senior and the theatre plan (balloon tamponade, sutures, ligation or hysterectomy) take over; transfusion decisions rest on her condition, not the swabs.",
      },
      {
        type: "clinical_pearl",
        body: "Rub the uterus before you do anything else in PPH — it costs nothing, works for most cases, and buys time for oxytocin. And chart estimated loss in the notes while a second nurse counts pads: the pulse is the monitor that never lies.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Twenty minutes after a normal vaginal birth, a 26-year-old mother of three soaks a fresh pad and the blood runs onto the sheet. Her uterus feels soft and difficult to outline. Her pulse has climbed from 76 to 108 and she looks pale around the lips. Estimated loss so far is 700 mL.\n\nWhat is the most likely cause, and what are your first five actions?\n\nAnswer: The soft uterus with heavy bleeding after birth is uterine atony — the tone cause, the commonest PPH. Call for help; rub the uterus up firmly and keep a hand there; give oxytocin 10 units IV or IM (misoprostol 600 micrograms sublingually if oxytocin is unavailable); catheterise to empty the bladder; start two large-bore lines with fluids and record vitals every 15 minutes. Then check the placenta and perineum as the uterus firms, keep her warm, and escalate to bimanual compression and the theatre plan if bleeding does not settle — the first hour is where mothers are won or lost.",
      },
      {
        type: "memory_trick",
        body: "The four Ts: Tone is a Tired womb, Trauma is a Tear, Tissue is something left inside, Thrombin is Thin blood. Then 'PHONE': call for help, Hands on the uterus, Oxytocin, catheterise the Bladder, Examine placenta, perineum and vitals.",
      },
      {
        type: "summary",
        body: "- PPH is 500 mL or more after vaginal birth (1,000 mL after caesarean) — or any loss causing shock.\n- The four Ts: Tone (70% of cases), Trauma, Tissue, Thrombin — run the framework every time.\n- First response: call help, rub up the contraction, empty the bladder, give oxytocin — ergometrine if normotensive, misoprostol where no oxytocin or cold chain exists.\n- Visual estimates under-read — trust a rising pulse, pallor and restlessness.\n- Work in parallel: two wide-bore lines, fluids, warm, vitals every 15 minutes; inspect the canal, check the placenta, escalate to theatre if bleeding persists.",
      },
    ],
    questions: [
      {
        topic: "Postpartum Haemorrhage",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the definition of primary postpartum haemorrhage after a vaginal birth?",
        options: [
          "Any bleeding within six weeks of birth",
          "Blood loss of 500 mL or more within 24 hours of birth",
          "Blood loss of 100 mL or more within one hour of birth",
          "Any bleeding that occurs after a caesarean section",
        ],
        correctIndex: 1,
        explanation:
          "Primary PPH is defined as blood loss of 500 mL or more in the first 24 hours after a vaginal birth (1,000 mL or more after caesarean), or any loss that makes the mother clinically shocked.",
        courseSlug: "abnormal-labour",
      },
      {
        topic: "Postpartum Haemorrhage",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In a CHPS compound with no functioning refrigeration, a mother bleeds heavily from an atonic uterus. Which uterotonic is the practical first choice?",
        options: [
          "Intravenous oxytocin infusion",
          "Ergometrine 0.2 mg intramuscularly in a woman with severe hypertension",
          "Misoprostol 600 micrograms sublingually",
          "Wait for transfer before any drug",
        ],
        correctIndex: 2,
        explanation:
          "Misoprostol is heat-stable, needs no cold chain or injection skills, and 600 micrograms sublingually is an effective first-line uterotonic at community level. Oxytocin needs a cold chain; ergometrine is avoided in severe hypertension; and never delay a uterotonic while waiting for transport.",
        courseSlug: "abnormal-labour",
      },
      {
        topic: "Postpartum Haemorrhage",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother's uterus is well contracted after birth, but bright red bleeding continues. Which of the four Ts moves to the top of your list?",
        options: [
          "Tone — give more uterotonics",
          "Thrombin — send clotting studies immediately",
          "None — some bleeding is normal for hours",
          "Trauma or Tissue — inspect the birth canal and check the placenta",
        ],
        correctIndex: 3,
        explanation:
          "Bleeding despite a firm, well-contracted uterus points away from atony: examine for perineal, vaginal or cervical tears, and ensure the placenta and membranes are complete. Clotting problems come later in the framework — after trauma and tissue are excluded.",
        courseSlug: "abnormal-labour",
      },
    ],
    flashcards: [
      {
        topic: "Postpartum Haemorrhage",
        front: "What are the four Ts of PPH, and which is commonest?",
        back: "Tone (atony — roughly 70% of cases), Trauma (tears of perineum, vagina, cervix), Tissue (retained placenta or clots), Thrombin (clotting failure). Run through them in every single case.",
      },
      {
        topic: "Postpartum Haemorrhage",
        front: "First-line uterotonics at birth, with the community fallback?",
        back: "Oxytocin 10 units IV/IM is first line. Ergometrine 0.2 mg IM if blood pressure is normal. Misoprostol 600 micrograms sublingually is the heat-stable fallback where oxytocin and a cold chain are unavailable.",
      },
      {
        topic: "Postpartum Haemorrhage",
        front: "Why trust the pulse more than the pad in PPH?",
        back: "Visual estimation of blood loss under-reads — often by nearly half. A rising pulse with pallor and restlessness signals compensating shock earlier than any swab count.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "WHO Recommendations for the Prevention and Treatment of Postpartum Haemorrhage",
        year: "2022",
      },
      {
        organization: "WHO",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565353",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "abnormal-labour",
    moduleTitle: "Emergencies After Birth",
    lessonTitle: "Retained Placenta: The Third Stage That Won't End",
    description:
      "The baby is born, but the placenta stays put. Learn the separation signs, the gentle emptying options, and when the theatre is the answer.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe retained placenta and the signs of placental separation.",
      "Explain the causes — trapped, partially separated, and abnormally adherent.",
      "Apply safe management, from controlled cord traction to referral for manual removal.",
    ],
    tags: ["retained placenta", "third stage", "amtls", "referral"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The baby is in the mother's arms, pink and crying — and nothing else is happening. The third stage should finish within 30 minutes with active management; if the placenta is still inside by then (or 60 minutes with expectant management), you have a retained placenta, and every extra minute is bleeding risk and infection risk.\n\nYour calm decisions in this half-hour decide whether this stays a small problem. The placenta is a rich cake of blood vessels: separated but stuck, it pours; attached and forced, it tears. Learning which is which — and what your hands may and may not do — is this lesson.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "First learn the signs of **separation**: a gush of blood as the placenta shears off, the cord visibly lengthening, and the uterus rising and becoming firm and globular. With oxytocin running and these signs present, controlled cord traction delivers it: hold the cord in one hand, support the uterus above the pubic bone with the other, and pull gently downward while lifting the uterus upward — never hard, never without counter-support, never against a uterus that is not contracting, or you will invert it.\n\nWhen the placenta is **trapped** by a cervical ring it may be unwrapped with your fingers after good analgesia — but in practice most of these, and all **morbidly adherent** placentas (accreta spectrum, usually after previous caesareans), need theatre: manual removal under adequate anaesthesia with prophylactic antibiotics, or hysterectomy in the worst cases. A partially separated placenta is bleeding now: call for help, resuscitate, give oxytocin, and expedite emptying. At a CHPS compound: give a uterotonic, catheterise, start the IV line, and transfer with the cord clamped and cut — never pull your way out of a retained placenta.",
      },
      {
        type: "clinical_pearl",
        body: "Never apply strong cord traction with an uncontracted uterus — you can pull the uterus inside out, trading a retained placenta for an inversion emergency. The hand above the pubis is not decoration; it is the brake.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Forty minutes after a healthy vaginal birth in your district hospital, the placenta has not delivered. Oxytocin is running, the cord shows no lengthening, there has been no gush, and the uterus remains broad and soft despite rubbing. Her pulse is 92 and blood loss is modest so far. She is a para 2 whose first baby was born by caesarean for fetal distress.\n\nWhat is the likely situation, and what is your plan?\n\nAnswer: With no signs of separation after 40 minutes of active management, the placenta is probably still fully attached — and her previous caesarean raises the risk of a morbidly adherent placenta. Continue the oxytocin, keep the bladder empty and the IV running, monitor vitals and blood loss closely, and inform the doctor early: this placenta is likely to need manual removal in theatre with anaesthesia and antibiotic cover, not stronger traction. Timing matters — bleeding can begin the moment partial separation starts, and theatre should be warned before, not after, that happens.",
      },
      {
        type: "memory_trick",
        body: "Separation sings a three-note song: 'Gush, Cord longer, Uterus globular and rising.' If the song is silent at 30 minutes, stop pulling and think theatre. Accreta's warning light: a previous caesarean plus a low-lying placenta — that baby's bed may be nailed to the wall.",
      },
      {
        type: "summary",
        body: "- Retained placenta: not delivered within 30 minutes of active management (60 with expectant care).\n- Separation signs: gush of blood, cord lengthens, uterus rises and becomes globular.\n- Controlled cord traction only with a contracted uterus and suprapubic counter-support — never force it.\n- Causes: trapped by a cervical ring, partial separation (bleeding now), or morbid adherence — accreta spectrum after previous caesarean.\n- Manual removal belongs in theatre with anaesthesia and prophylactic antibiotics; adherent placentas may need hysterectomy.\n- At community level: uterotonic, catheter, IV line, clamp and cut the cord, transfer — never traction as a rescue.",
      },
    ],
    questions: [
      {
        topic: "Retained Placenta",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which set of signs tells you the placenta has separated and is ready to deliver?",
        options: [
          "A gush of blood, the cord lengthening, and the uterus becoming globular and rising",
          "Cessation of bleeding with a soft, broad uterus",
          "The cord shortening and retracting with a hard small uterus",
          "Maternal shivering and a sudden drop in blood pressure",
        ],
        correctIndex: 0,
        explanation:
          "The three classic signs of separation are the gush of blood, lengthening of the cord at the vulva, and a firm, globular uterus rising in the abdomen. The other combinations describe either a resting uterus or unrelated events.",
        courseSlug: "abnormal-labour",
      },
      {
        topic: "Retained Placenta",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During controlled cord traction, what is the purpose of the hand placed above the pubic bone?",
        options: [
          "To massage the placenta out of the lower segment",
          "To support the uterus and prevent inversion during traction",
          "To compress the bladder and reduce bleeding",
          "To help measure blood loss from the uterus",
        ],
        correctIndex: 1,
        explanation:
          "The suprapubic hand anchors and supports the uterus so that traction pulls the placenta, not the fundus — without it, a soft uterus can be dragged down and inverted, a life-threatening emergency.",
        courseSlug: "abnormal-labour",
      },
      {
        topic: "Retained Placenta",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman with two previous caesareans has a low-lying placenta and delivers at term. The placenta does not separate and heavy bleeding begins. What cause is highest on your list?",
        options: [
          "Cervical trapping by a constriction ring",
          "A full bladder blocking descent",
          "Uterine atony alone",
          "Morbidly adherent placenta (placenta accreta spectrum)",
        ],
        correctIndex: 3,
        explanation:
          "Repeated caesarean scars plus a low-lying placenta is the classic setup for accreta — the placenta grows abnormally into the scarred wall, never separates, and bleeds massively when partially sheared. Trapping and atony neither explain the failure of separation nor fit this history.",
        courseSlug: "abnormal-labour",
      },
    ],
    flashcards: [
      {
        topic: "Retained Placenta",
        front: "When is a placenta officially 'retained'?",
        back: "When it is not delivered within 30 minutes of birth with active management of the third stage — or 60 minutes with expectant management.",
      },
      {
        topic: "Retained Placenta",
        front: "What are the three main mechanisms of retention?",
        back: "Trapped (separated but caught by a cervical or uterine ring), partially separated (bleeding as part detaches), and morbidly adherent — placenta accreta spectrum, classically after previous caesarean.",
      },
      {
        topic: "Retained Placenta",
        front: "What is the greatest danger of forceful cord traction on an uncontracted uterus?",
        back: "Uterine inversion — the fundus is pulled inside out, causing shock and catastrophic bleeding. Always guard the uterus above the pubis and only traction a well-contracted uterus.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "WHO Recommendations for the Prevention and Treatment of Postpartum Haemorrhage",
        year: "2022",
      },
      {
        organization: "WHO",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565353",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "abnormal-labour",
    moduleTitle: "Emergencies After Birth",
    lessonTitle: "Perineal Trauma: Assessing and Repairing",
    description:
      "First degree to fourth — learn to grade what birth has torn, repair what you safely can, and refer what you must.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the classification of perineal tears from first to fourth degree.",
      "Explain the assessment of trauma after birth, including the digital rectal examination.",
      "Apply repair principles, aftercare and referral decisions for each degree.",
    ],
    tags: ["perineal tear", "repair", "suturing", "referral"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The perineum is the soft floor a baby crosses on its way out, and it pays a toll — many mothers tear a little. Most tears are small and heal well; a few extend into the muscles of the pelvic floor, and a few — the ones that reach the anal sphincter — change a woman's life if missed.\n\nGrading and repairing these tears is core midwifery craft. Every mother who births with you deserves a careful inspection before you leave her, in good light, with your classification written honestly in the notes.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "After birth, once the placenta is secure, position her, shine a good light, and inspect systematically: labia, vestibule, vaginal walls, perineum, and — with consent — a gentle digital rectal examination to test anal tone and rule out a hidden buttonhole tear or sphincter injury that looks innocent from outside. Grade what you find: **first degree** — skin and vaginal lining only; **second degree** — perineal muscles torn too (the classic tear, and the one episiotomy usually creates); **third degree** — the tear reaches the anal sphincter (3a under half the external sphincter, 3b more than half, 3c including the internal sphincter); **fourth degree** — through into the rectal mucosa.\n\nFirst and second degree tears are repaired with absorbable sutures, a continuous technique and real analgesia (lidocaine infiltration, or topping up the epidural), muscle layer before skin, under asepsis. Third and fourth degree tears go to theatre with an experienced operator, broad-spectrum antibiotic cover, laxatives and careful follow-up for incontinence — if your facility cannot provide that repair expertly, refer, because a badly repaired sphincter leaks for life. Aftercare for every repair: pelvic floor exercises, hygiene, analgesia, ice packs, and a clear warning to return for pain, swelling or foul discharge — a haematoma or infection can undo good stitches.",
      },
      {
        type: "clinical_pearl",
        body: "A tear that looks 'just deep' with a worried mother reporting she cannot hold flatus is a sphincter injury until your rectal examination proves otherwise. Do the PR — it takes ten seconds and answers a question the eyes cannot.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "After a rapid second birth of a 4-kg baby, you inspect a mother's perineum under good light. The tear extends from the vaginal wall through the perineal body, and at its deepest point the tissue gapes. On gentle digital rectal examination, the sphincter feels interrupted and the woman cannot squeeze your finger. She reports air escaping from the vagina.\n\nWhat degree is this, and what happens next?\n\nAnswer: The torn muscle with an interrupted sphincter and lost voluntary squeeze — plus flatus — is at least a third-degree tear, likely 3b or more. The repair needs theatre, an experienced operator, absorbable sutures to the sphincter, broad-spectrum antibiotics and a laxative regime afterwards. In a facility without that skill, your job is analgesia, a clean pad, documentation with a simple diagram, and immediate referral. She also needs counselling about follow-up, pelvic floor physiotherapy, and the birth mode next time.",
      },
      {
        type: "memory_trick",
        body: "Climb the ladder: 1 — Skin; 2 — muScleS (muscles); 3 — Sphincter; 4 — through to Stool. One skin, two muscle, three sphincter, four through to stool — repair one and two on the ward, three and four in theatre.",
      },
      {
        type: "summary",
        body: "- Inspect every perineum systematically in good light before you leave the mother — labia to rectum.\n- First degree: skin and vaginal lining; second: perineal muscles; third: anal sphincter (3a/3b/3c); fourth: rectal mucosa breached.\n- Digital rectal examination completes the assessment — test sphincter tone and exclude a buttonhole tear.\n- Repair first and second degrees with absorbable continuous sutures, muscle layer first, with real analgesia.\n- Third and fourth degrees belong in theatre with an experienced operator, antibiotics and laxatives — refer if that skill is not on site.\n- Aftercare: hygiene, ice, analgesia, pelvic floor exercises, and return advice for pain, swelling or foul discharge.",
      },
    ],
    questions: [
      {
        topic: "Perineal Trauma",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A tear involving the vaginal lining, perineal skin and the perineal muscles but not the anal sphincter is which degree?",
        options: ["First degree", "Second degree", "Third degree", "Fourth degree"],
        correctIndex: 1,
        explanation:
          "Second-degree tears involve the perineal muscles beneath the skin and vaginal mucosa. First degree stops at skin and lining; third reaches the sphincter; fourth enters the rectal mucosa.",
        courseSlug: "abnormal-labour",
      },
      {
        topic: "Perineal Trauma",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "After a forceps birth you find a deep tear. Which finding would confirm involvement of the anal sphincter?",
        options: [
          "Bleeding from the vaginal fornix",
          "A haematoma of the labia majora",
          "The tear extending only to the fourchette",
          "Loss of voluntary squeeze or a palpable gap in the sphincter on rectal examination",
        ],
        correctIndex: 3,
        explanation:
          "Sphincter injury shows as a palpable gap in the muscle ring or inability to contract around your finger on digital rectal examination. Labial bleeding and fourchette extension do not imply sphincter damage.",
        courseSlug: "abnormal-labour",
      },
      {
        topic: "Perineal Trauma",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In a rural facility without a trained sphincter repairer, what is the correct action for a fourth-degree tear found after birth?",
        options: [
          "Repair it loosely with whatever sutures are available",
          "Leave it open to heal by secondary intention",
          "Refer promptly to a facility that can repair it in theatre, with documentation and analgesia",
          "Pack the tear tightly and review in six weeks",
        ],
        correctIndex: 2,
        explanation:
          "A fourth-degree tear needs skilled repair in theatre with antibiotics and laxatives; the outcome for continence depends on the first repair. Document, give analgesia, cover with a clean pad, and refer — no improvised suturing, no packing, no waiting.",
        courseSlug: "abnormal-labour",
      },
    ],
    flashcards: [
      {
        topic: "Perineal Trauma",
        front: "Define third- and fourth-degree tears.",
        back: "Third degree involves the anal sphincter (3a under half, 3b over half of external sphincter, 3c including internal sphincter); fourth degree breaches the rectal mucosa as well.",
      },
      {
        topic: "Perineal Trauma",
        front: "What does the digital rectal examination add after a deep tear?",
        back: "It tests voluntary sphincter squeeze, reveals a palpable gap in the muscle ring, and excludes a hidden buttonhole tear of the rectal mucosa — findings the outside view cannot give.",
      },
      {
        topic: "Perineal Trauma",
        front: "Name three elements of post-repair care for a second-degree tear.",
        back: "Analgesia with ice packs in the first 24 hours, perineal hygiene and pelvic floor exercises, and clear return advice for increasing pain, swelling or offensive discharge (haematoma or infection).",
      },
    ],
    sources: [
      {
        organization: "RCOG",
        title: "Green-top Guideline No. 29: Management of Third and Fourth Degree Perineal Tears",
        year: "2021",
      },
      {
        organization: "WHO",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565353",
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "abnormal-labour",
    moduleTitle: "Assisted and Emergency Birth",
    lessonTitle: "Operative Birth: Forceps, Ventouse and Caesarean",
    description:
      "When labour must end now, or end by surgery: what each instrument does, who pays its price, and what a scarred uterus means for next time.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the indications for ventouse, forceps and caesarean section.",
      "Explain the maternal and neonatal risks of each operative birth method.",
      "Apply counselling points for a mother facing operative birth, including future pregnancies.",
    ],
    tags: ["operative birth", "ventouse", "forceps", "caesarean"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Most labours end by themselves, but some must be ended — for a baby in trouble, for a second stage that has gone on too long, for a mother whose pushing is dangerous to her own health. The tools are two instruments and an operation, and each one trades a risk for a rescue.\n\nAs a student midwife you will prepare the room, the consent, the mother and the instruments long before the operator arrives — and you will care for mother and baby afterwards, so you need to know what each method did to them.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Ventouse** (vacuum) fits a cup on the vertex at the flexion point and pulls with suction while the mother pushes. It needs a vertex presentation, reasonable contractions and maternal effort, is gentler on the perineum, and its signature risks are the chignon swelling and cephalhaematoma — not used before about 34 weeks, on a face or brow, or with bleeding disorders. **Forceps** are curved metal blades that cradle the head: outlet or low stations, fetal distress where pushing must be short, maternal exhaustion — and uniquely the aftercoming head of a breech. They ask more of the perineum, deeper tears are commoner, and they can mark the baby's face. Failed traction slides into the other method or caesarean; three pulls without delivery means stop and reassess.\n\n**Caesarean section** ends labour through the abdomen. The lower-segment incision heals best and keeps future vaginal birth possible; a classical incision commits the mother to caesareans forever because of rupture risk. Caesarean brings bleeding, infection, thrombosis and slower recovery, and each scar raises the risk of placenta accreta next time — one reason the world worries about rising rates. Your role crosses all three: consent in her own language, analgesia, honest debriefing — and for the caesarean mother, early ambulation, VTE prevention, breastfeeding support and a documented plan for next time.",
      },
      {
        type: "clinical_pearl",
        body: "A ventouse works with the mother, not instead of her — no push, no progress. And whatever the method, note the time it started and the pulls applied: an operative birth without times and traction counts is an unauditable birth.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A primigravida has been fully dilated and pushing for two hours. The head is at station plus two, occiput anterior, with a reassuring fetal heart but the mother is exhausted and the trace shows dips she cannot push through. The registrar proposes a ventouse in the room, with theatre warned as backup.\n\nWhy is ventouse suitable here, and what do you prepare?\n\nAnswer: The head is low and anterior, contractions are effective, and the mother can still push — the ideal ventouse setting. Prepare the vacuum, empty her bladder, top up analgesia, position her, and explain in plain language that she must push with each pull — with theatre informed in case the cup fails. Keep the resuscitation corner ready, and after birth examine the baby's scalp and the mother's perineum. Document the indication, times, pulls and debriefing.",
      },
      {
        type: "memory_trick",
        body: "Instrument rules of three: Ventouse needs Vertex + Vacuum on the flexion point + mother Pushing. Forceps need Fixed low head + Full dilatation + a skilled Fist (operator). Caesarean: a Cut today is a Contract for tomorrow — every scar shapes every future pregnancy.",
      },
      {
        type: "summary",
        body: "- Operative birth rescues fetal distress, prolonged second stage, and mothers for whom pushing is unsafe.\n- Ventouse: cup on the vertex flexion point, needs contractions and maternal effort; risks chignon and cephalhaematoma; not before ~34 weeks or for non-vertex heads.\n- Forceps: blades that cradle the head; outlet or low station, and the aftercoming head of a breech; more perineal trauma and facial marks.\n- Stop after failed traction attempts and escalate — a struggling instrument is a caesarean in disguise.\n- Caesarean: lower segment preferred; risks bleeding, infection, thrombosis; each scar raises accreta and rupture risk in future pregnancies.\n- Your duties: consent in her language, analgesia, resuscitation corner ready, times and pulls documented, honest debrief and aftercare.",
      },
    ],
    questions: [
      {
        topic: "Operative Birth",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which presentation makes ventouse delivery impossible?",
        options: [
          "Vertex at station plus two, occiput anterior",
          "Face presentation",
          "Vertex at station zero, occiput posterior",
          "Vertex at station plus one with caput",
        ],
        correctIndex: 1,
        explanation:
          "The vacuum cup must sit on the vertex at the flexion point — a face has nowhere safe to apply it. Position and station matter for difficulty, but presentation is the deal-breaker.",
        courseSlug: "abnormal-labour",
      },
      {
        topic: "Operative Birth",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which situation is a specific indication for forceps rather than ventouse?",
        options: [
          "Maternal exhaustion in a second stage at station plus two",
          "Fetal distress with a low vertex and good maternal effort",
          "Prolonged second stage with an occipito-anterior head",
          "Delivery of the aftercoming head of a breech baby",
        ],
        correctIndex: 3,
        explanation:
          "Forceps on the aftercoming breech head is a classic, unique indication — the vacuum has no vertex to grip and the head must be guided gently and immediately. The other scenarios suit either instrument.",
        courseSlug: "abnormal-labour",
      },
      {
        topic: "Operative Birth",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother asks why she cannot just have a caesarean for her next baby after one lower-segment caesarean. What is the most accurate answer?",
        options: [
          "After one lower-segment caesarean, a supervised trial of labour is often possible",
          "One caesarean always means caesarean for every future birth",
          "A vaginal birth after caesarean is impossible in any Ghanaian hospital",
          "The scar only matters after three caesareans",
        ],
        correctIndex: 0,
        explanation:
          "A single lower-segment scar is the setting where vaginal birth after caesarean (VBAC) is commonly offered — in a theatre-ready unit with one-to-one care. Scarring becomes an absolute constraint after classical incisions or multiple caesareans, where rupture risk rules out labour.",
        courseSlug: "abnormal-labour",
      },
    ],
    flashcards: [
      {
        topic: "Operative Birth",
        front: "What three things does a ventouse need to work?",
        back: "A vertex presentation with the cup on the flexion point, effective contractions, and active maternal pushing — the instrument assists, it does not replace.",
      },
      {
        topic: "Operative Birth",
        front: "Name two neonatal and two maternal risks of operative vaginal birth.",
        back: "Neonatal: cephalhaematoma or chignon (ventouse), facial marks and rare nerve injury (forceps). Maternal: perineal and vaginal tears, and postpartum haemorrhage — deeper tears are commoner with forceps.",
      },
      {
        topic: "Operative Birth",
        front: "Why does a classical caesarean scar forbid future labour?",
        back: "The upper-segment scar is thick muscle under the highest stress in labour and ruptures far more often than a lower-segment scar — so future births are by planned caesarean, and each scar raises accreta risk.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "WHO Recommendations: Intrapartum Care for a Positive Childbirth Experience",
        year: "2018",
        url: "https://www.who.int/publications/i/item/9789241550215",
      },
      {
        organization: "NICE",
        title: "Intrapartum Care for Healthy Women and Babies (CG190)",
        year: "2014",
      },
      { organization: "Elsevier", title: "Gabbe's Obstetrics: Normal and Problem Pregnancies, 8th edition", year: "2021" },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    courseSlug: "abnormal-labour",
    moduleTitle: "Assisted and Emergency Birth",
    lessonTitle: "Emergency Referral in Labour",
    description:
      "Pack, call, stabilise, move. The choreography of a good referral — and the three delays that kill when it goes wrong.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the three delays that turn complications into maternal deaths.",
      "Explain the principles of stabilising a woman before and during transfer.",
      "Apply a structured referral — SBAR call-ahead, escort, documentation and handover.",
    ],
    tags: ["referral", "transport", "sbar", "emergency"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "At a CHPS compound you cannot fix a ruptured uterus, transfuse five units of blood or open an abdomen. What you can do — decisively — is notice the danger early, stabilise the mother, and move her to a place that can. A good referral is choreography: every step rehearsed, every phone number known, every form filled.\n\nBehind the skill sit the three delays: deciding to seek care, reaching care, and receiving care. You attack the first with honest counselling, the second with transport and money planning, and the third with a call-ahead that prepares the receiving team before the ambulance door even opens.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Stabilise before you move.** She should not bounce down a rough road in uncompensated shock. Two wide-bore intravenous lines with fluids running, a catheter in place, key drugs given per protocol and timed in the notes — magnesium sulphate loading for eclampsia, antibiotics for sepsis or prolonged membrane rupture, antimalarial for fever, uterotonics for bleeding. For cord prolapse, your fingers ride with her. Never send a woman alone: a trained escort travels with the referral note — written in duplicate, partogram attached, with vitals, findings, drugs, doses and times.\n\n**Call ahead and hand over well.** Use SBAR — Situation, Background, Assessment, Recommendation — so the receiving midwife hears a story, not a list. 'This is Nana from Bawjiase CHPS: Situation — a para 3, term labour, now 7 cm with transverse lie and ruptured membranes. Background — referred for malpresentation this morning. Assessment — fetal heart 140, no cord felt, mother stable. Recommendation — she needs a caesarean tonight; we are transferring now, about 40 minutes, escort is a midwife.' Then document the call — times, who took it, what was said — and call back the next day for the outcome: it closes the loop, and it is how you learn.",
      },
      {
        type: "clinical_pearl",
        body: "Write the referral note as if the reader will never speak to you — because often they won't. Vitals with times, findings, drugs with doses and clock times, and the partogram: a blank column in a referral note is a hole in the next team's care.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At 8 pm a woman at your CHPS compound is 5 cm dilated with a fresh bout of bleeding, and her blood pressure is 160/110 with headache and 2+ protein. The nearest district hospital with theatre is 45 minutes away. The ambulance driver answers on the second ring.\n\nWhat do you do in the next 20 minutes before the vehicle arrives?\n\nAnswer: Stabilise now: magnesium sulphate loading per protocol with the time noted; two intravenous lines and fluids; catheterise and chart urine output and reflexes; left lateral position; fetal heart every 15 minutes. Then call ahead with SBAR — severe pre-eclampsia with fresh bleeding at 5 cm, needs theatre and blood — and record who took the call. Write the referral note in duplicate with the partogram and drug times. When the vehicle comes, she travels with a midwife escort, never alone.",
      },
      {
        type: "memory_trick",
        body: "The referral waltz is '1-2-3-4': Stabilise (lines, drugs, catheter, position), Phone SBAR ahead, Paper in duplicate (partogram, times, doses), Escort with the woman. And remember the three delays — deciding, distance, door — every referral fights all three.",
      },
      {
        type: "summary",
        body: "- The three delays: deciding to seek care, reaching care, receiving care — referral choreography attacks all three.\n- Stabilise before transfer: IV fluids, catheter, protocol drugs given and timed (magnesium sulphate, antibiotics, antimalarials, uterotonics).\n- Cord prolapse: the lifting hand travels with the mother.\n- Never transfer alone — a skilled escort, a written note in duplicate, partogram attached, drugs and times recorded.\n- Call ahead with SBAR so the receiving team is ready before she arrives, and document the call.\n- Close the loop by calling back for the outcome — audit and learning live there.",
      },
    ],
    questions: [
      {
        topic: "Emergency Referral",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What are the classic 'three delays' that turn obstetric complications into maternal deaths?",
        options: [
          "Delay in deciding to seek care, reaching care, and receiving adequate care",
          "Delay in diagnosis, treatment, and rehabilitation",
          "Delay by the midwife, the doctor, and the family",
          "Delay in booking, delivery, and discharge",
        ],
        correctIndex: 0,
        explanation:
          "The three delays model names the decision to seek care, reaching an adequate facility, and receiving adequate care once there — every good referral is designed to attack all three at once.",
        courseSlug: "abnormal-labour",
      },
      {
        topic: "Emergency Referral",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You are referring a woman with eclampsia by ambulance. What must happen before the vehicle leaves your compound?",
        options: [
          "Nothing — transfer speed is everything, so leave immediately",
          "Only a written referral letter, since the receiving hospital will treat her",
          "Sedation with diazepam so she does not convulse on the way",
          "Magnesium sulphate loading per protocol, IV access, catheterisation, call-ahead and an escort",
        ],
        correctIndex: 3,
        explanation:
          "Stabilise before you move: magnesium sulphate loading per protocol prevents further convulsions on the road, IV access and fluids treat shock, the catheter monitors output, and a call-ahead plus escort ensures the receiving team is ready. Diazepam alone is not the anticonvulsant of choice and untreated convulsions en route can be fatal.",
        courseSlug: "abnormal-labour",
      },
      {
        topic: "Emergency Referral",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which practice best closes the referral loop after you have transferred a woman to the district hospital?",
        options: [
          "File your copy of the note and move on to the next patient",
          "Wait for the hospital to call you if they need anything",
          "Call the receiving unit the next day to ask her outcome and record it",
          "Send a family member to check on her every week",
        ],
        correctIndex: 2,
        explanation:
          "Calling back for the outcome completes the loop: the receiving team knows someone is following up, you learn what happened to your patient, and the record becomes evidence for auditing your own referrals. Passive waiting teaches you nothing and loses the follow-up.",
        courseSlug: "abnormal-labour",
      },
    ],
    flashcards: [
      {
        topic: "Emergency Referral",
        front: "What does SBAR stand for?",
        back: "Situation, Background, Assessment, Recommendation — a phone handover structure that tells the receiving team a story in under a minute.",
      },
      {
        topic: "Emergency Referral",
        front: "Name five things a referral note must contain.",
        back: "Vital signs with times, relevant examination findings (partogram attached), drugs given with doses and clock times, the reason for referral and urgency, and your name and contact — written in duplicate, one copy travels, one stays.",
      },
      {
        topic: "Emergency Referral",
        front: "Why must a cord prolapse escort keep a hand in the vagina during transfer?",
        back: "The fingers hold the presenting part off the cord, keeping blood flowing to the baby — the elevation travels with the mother until theatre takes over.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241549356",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "Verify current edition with GHS.",
      },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────
  {
    courseSlug: "neonatal-nursing",
    moduleTitle: "The First Minutes",
    lessonTitle: "The Newborn Examination: Head to Toe",
    description:
      "A quiet, systematic top-to-toe check in the first day — confirming the normal, catching the not, and knowing what needs same-day action.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the systematic head-to-toe newborn examination.",
      "Explain the difference between common benign findings and findings that need referral.",
      "Apply the timing, conditions and documentation of the first-day examination.",
    ],
    tags: ["newborn exam", "assessment", "newborn", "screening"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Once the baby is warm, fed and settled — ideally within the first 24 hours — you perform the full head-to-toe examination. It serves two purposes at once: reassuring the family about all that is normal, and quietly catching the small number of things that are not.\n\nDone well, it takes ten unhurried minutes with the baby undressed on a warm surface in good light, a mother beside you — a crying, cold baby on a hard trolley hides more than it shows.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Start with observation: colour, breathing 30-60 per minute and quiet, tone and cry. Then work downward. Head: moulding and caput will settle; a cephalhaematoma is bounded by one bone, caput crosses suture lines. Feel the fontanelles — soft and flat, not bulging. Eyes: a white or absent red reflex needs urgent referral. Mouth: inspect the palate for a cleft. Clavicles: crepitus after a difficult birth suggests a fracture. Heart: feel the femoral pulses — absent or weak pulses raise coarctation of the aorta. Abdomen: a liver edge 1-2 cm below the ribs is normal; the cord should be drying with **three vessels**. Genitals and anus: testes descended, urine passed within the day, meconium within 24-48 hours. Hips: Ortolani and Barlow — a clunk or limited abduction needs orthopaedic review. Spine and skin: look for a sacral dimple with a hair tuft, and know the harmless rashes — milia, erythema toxicum, mongolian spots.\n\nChart what you found and excluded, record weight, temperature, heart and respiratory rates, and confirm vitamin K and immunisations. Red flags for same-day escalation: central cyanosis or grunting, breathing 60 or more, jaundice in the first 24 hours, absent red reflex, cleft palate, absent femoral pulses, a hip that will not abduct, no urine by 24 hours or no meconium by 48, or a cold, floppy, poorly feeding baby.",
      },
      {
        type: "clinical_pearl",
        body: "Do the hips last, with warm hands and a calm baby — a cold, crying baby makes hips lie. And when you reassure, be specific: 'the spots on her nose are milk glands, the blue patch on his back is his birthmark, both are normal' — specifics calm a family better than 'fine'.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You examine a term baby boy on day one. He is pink, feeding, warm at 36.9 C. Everything is normal until you lift his penlight to the eyes: the right eye shows a normal red reflex, the left shows a dull white reflection. His mother mentions the 'white eye' ran in an uncle's family.\n\nWhat is your finding, and what do you do?\n\nAnswer: A white or absent red reflex is never normal on day one — it raises congenital cataract (the family history strengthens this) or, less commonly, retinoblastoma, and needs same-day ophthalmological referral, because early surgery preserves vision. Document the rest of the examination as normal, reassure the mother you are acting early rather than in panic, and make sure the referral appointment is booked, not just advised.",
      },
      {
        type: "memory_trick",
        body: "Work like rain — from the top down and never sideways: Head (fontanelles, eyes, red reflex), Mouth and palate, Neck and clavicles, Chest and heart with femoral pulses, Tummy and cord (three vessels), Genitals and bottom (urine and meconium), Hips (warm hands, do them last), Spine and Skin. If you can name the stations in order, you will never skip one.",
      },
      {
        type: "summary",
        body: "- Examine within 24 hours, baby warm and settled, good light, mother present.\n- Observe first: colour, breathing 30-60, tone, cry — then head to toe.\n- Know the benign classics: caput, milia, erythema toxicum, mongolian spots, palpable liver edge.\n- Check red reflex, palate, clavicles, femoral pulses, cord vessels, urine, meconium, hips, spine, skin.\n- Same-day red flags: grunting or RR 60+, cyanosis, jaundice under 24 hours, absent red reflex, absent femoral pulses, cleft palate, hip abnormality, no urine by 24 h or meconium by 48 h.\n- Record findings, vitals, vitamin K and immunisations — and be specific when you reassure.",
      },
    ],
    questions: [
      {
        topic: "Newborn Examination",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the normal respiratory rate range for a newborn?",
        options: ["12-20 per minute", "20-40 per minute", "30-60 per minute", "60-90 per minute"],
        correctIndex: 2,
        explanation:
          "Newborns breathe 30-60 times a minute. A rate of 60 or more, or grunting and indrawing, is abnormal and needs same-day assessment. The other options belong to adults, toddlers and distress respectively.",
        courseSlug: "neonatal-nursing",
      },
      {
        topic: "Newborn Examination",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During the first-day examination you note a swelling on the baby's head that is confined to one parietal bone and does not cross suture lines. What is it?",
        options: ["Caput succedaneum", "Cephalhaematoma", "A subdural haemorrhage", "A normal fontanelle bulge"],
        correctIndex: 1,
        explanation:
          "A cephalhaematoma is bleeding under the periosteum, so it is limited to a single bone and stops at suture lines. Caput crosses sutures because it is oedema of the presenting scalp; both settle, but cephalhaematoma can contribute to jaundice as it resolves.",
        courseSlug: "neonatal-nursing",
      },
      {
        topic: "Newborn Examination",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A three-day-old breastfed baby has passed only two wet nappies in 24 hours and his stools are still black and tarry. What should you do?",
        options: [
          "Review feeding today — assess attachment and intake, and recheck weight and output",
          "Reassure the mother that this is normal for the first week",
          "Start formula top-up feeds six times a day",
          "Discharge home with a routine review at six weeks",
        ],
        correctIndex: 0,
        explanation:
          "By day three to four a well-fed baby shows six or more wet nappies daily and stools turning from black meconium towards yellow. Persisting meconium with low urine output means inadequate intake until proven otherwise — review attachment and feeding today, then decide about supplements. Passive reassurance or routine discharge risks missing a dehydrating baby.",
        courseSlug: "neonatal-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Newborn Examination",
        front: "Which finding on eye examination is a red flag on day one?",
        back: "A white or absent red reflex — it suggests congenital cataract or retinoblastoma and needs same-day ophthalmological referral.",
      },
      {
        topic: "Newborn Examination",
        front: "Caput succedaneum vs cephalhaematoma — the one-line difference?",
        back: "Caput is scalp oedema and crosses suture lines; cephalhaematoma is subperiosteal bleeding and respects suture lines (one bone only).",
      },
      {
        topic: "Newborn Examination",
        front: "Why palpate the femoral pulses in every newborn?",
        back: "Weak or absent femoral pulses raise coarctation of the aorta — a duct-dependent heart defect that can collapse a baby after day two, so catching it on day one buys time.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241549356",
      },
      { organization: "Elsevier", title: "Myles Midwifery, 17th edition", year: "2020" },
    ],
  },

  // ── 14 ─────────────────────────────────────────────────────
  {
    courseSlug: "neonatal-nursing",
    moduleTitle: "The First Minutes",
    lessonTitle: "Thermoregulation: Keeping the Baby Warm",
    description:
      "A newborn cannot shiver — it burns precious calories to stay warm. Learn the four ways it loses heat and the warm chain that beats all of them.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe why newborns lose heat quickly, especially preterm and low-birth-weight babies.",
      "Explain the four mechanisms of heat loss and their prevention at birth and after.",
      "Apply the warm chain and kangaroo mother care in a Ghanaian district setting.",
    ],
    tags: ["thermoregulation", "warm chain", "kangaroo care", "newborn"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A baby in the womb is held at a perfect 37 degrees. At birth it lands wet, in moving air, on a cold surface, with a body built to lose heat: large surface area for its weight, thin skin, little fat, no shivering. Instead it burns brown fat, and every gram spent staying warm is a gram not spent growing.\n\nHypothermia is quiet, common and deadly — and almost all of it is preventable. This lesson is about the habits, the warm chain, and the lifesaving place of skin-to-skin care in Ghanaian facilities.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Heat escapes by four doors, and each has a shield. **Evaporation** takes heat from a wet baby — so dry the baby immediately at birth, head to toe, and discard the wet towel. **Conduction** pulls heat into cold surfaces — the scale, the table, the window of the resus cot — so warm what touches the baby; put a cloth on the scale before you weigh. **Convection** is moving air — drafts from fans, open windows and air-conditioning pointed at the cot. **Radiation** draws heat to cold walls and windows near the bed even without airflow. Add the head: babies lose disproportionate heat from it, so a **hat** is not decoration — it is treatment.\n\nThe warm chain ties it together: dry and cover at birth, skin-to-skin on the mother's chest, hat on, delay the first bath at least six hours, weigh on a warm surface, keep mother and baby together day and night, and check the temperature. Normal is 36.5-37.5 C; below 36.5 is cold stress — re-warm with skin-to-skin under a blanket and recheck in an hour. For the preterm or low-birth-weight baby, kangaroo mother care is the district solution: continuous skin-to-skin in a wrapper on the mother's chest with exclusive breast milk — WHO's evidence shows early KMC in facility substantially reduces deaths in small babies. A cold baby is easy to miss — cool abdomen, lethargy, poor feeding, fast breathing — so when in doubt, feel the tummy, not the hands.",
      },
      {
        type: "clinical_pearl",
        body: "Feel the abdomen, never the hands and feet — normal newborn hands are often cool. A cold tummy on a sleepy feeding baby is hypothermia until the thermometer says otherwise.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 34-week baby weighing 1.9 kg is born at your district hospital at 6 am. By 8 am the nurse notes he is in the cot under a thin cloth, the fan is on, and he has not fed. His temperature is 35.8 C. His mother is anxious that touching him 'will make him sick'.\n\nWhat has gone wrong, and what is your plan?\n\nAnswer: Four doors of heat loss were left open — no skin-to-skin, the fan blowing on him, under-dressed, probably on a cool surface. Explain gently that her chest is his best medicine, then place him skin-to-skin in kangaroo position with a hat and wrapper, cover them both, and recheck the temperature in one hour. Support expressing colostrum and cup feeding until he can breastfeed, keep the fan away, and monitor feeds and temperature. In her worry about touch you have found your teaching moment: for this baby, her body is the incubator.",
      },
      {
        type: "memory_trick",
        body: "Four doors of heat loss — 'Every Cow Chews Roughly': Evaporation (wet), Convection (wind), Conduction (cold surface), Radiation (cold walls). Shut them with the warm chain, and remember the golden cap: hat on the head, mother on the chest.",
      },
      {
        type: "summary",
        body: "- Newborns lose heat fast: big surface area, thin skin, little fat, no shivering — preterm and low-birth-weight babies fastest.\n- Four mechanisms: evaporation, convection, conduction, radiation — each has a simple shield.\n- The warm chain: dry and cover immediately, skin-to-skin, hat, delay the first bath, warm surfaces, no drafts, mother and baby together.\n- Normal temperature 36.5-37.5 C; below 36.5 is cold stress — re-warm skin-to-skin and recheck in an hour.\n- Kangaroo mother care for small babies: continuous skin-to-skin, exclusive breast milk, fewer deaths.\n- Feel the abdomen, not the hands; cold plus sleepy plus poor feeding is hypothermia until proven otherwise.",
      },
    ],
    questions: [
      {
        topic: "Thermoregulation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A nurse places a newborn wet on a metal scale without drying it. Which two mechanisms of heat loss are at work here?",
        options: [
          "Radiation and evaporation",
          "Evaporation and conduction",
          "Conduction and radiation",
          "Convection and evaporation",
        ],
        correctIndex: 1,
        explanation:
          "The wet baby loses heat to the air as moisture evaporates, and directly into the cold metal surface by conduction. Radiation needs cold walls nearby; convection needs moving air.",
        courseSlug: "neonatal-nursing",
      },
      {
        topic: "Thermoregulation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "At 2 am a newborn's temperature reads 35.6 C. He is in a cot under a thin cloth. What is the best response?",
        options: [
          "Add two more blankets in the cot and check again at dawn",
          "Give him a warm bath to raise his temperature quickly",
          "Place him skin-to-skin on his mother under a blanket with a hat, and recheck in one hour",
          "Offer glucose water to help him generate heat",
        ],
        correctIndex: 2,
        explanation:
          "Below 36.5 C is cold stress, and the fastest safe re-warming is the mother's chest: skin-to-skin under a blanket with a hat, rechecked within the hour. Extra blankets alone in a cold cot work slowly, a warm bath strips away more heat, and glucose water is no substitute for feeding a baby who can feed.",
        courseSlug: "neonatal-nursing",
      },
      {
        topic: "Thermoregulation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is kangaroo mother care especially valuable in district hospitals in Ghana?",
        options: [
          "It replaces the need for breastfeeding entirely",
          "It works only for full-term babies weighing over 3 kg",
          "It requires no parental involvement at all",
          "It uses the mother's own body as a continuous warm incubator and reduces deaths in small babies",
        ],
        correctIndex: 3,
        explanation:
          "Kangaroo mother care turns the mother's chest into a warm, regulated, portable incubator — no electricity, no cost, no machines — while supporting exclusive breast milk feeding. WHO evidence shows it substantially reduces mortality in preterm and low-birth-weight babies, exactly the population district hospitals struggle to care for.",
        courseSlug: "neonatal-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Thermoregulation",
        front: "Why can't a newborn shiver, and what does it do instead?",
        back: "Newborns lack the muscle mass for effective shivering; instead they metabolise brown fat to generate heat — burning calories that would otherwise go to growth.",
      },
      {
        topic: "Thermoregulation",
        front: "List the four mechanisms of newborn heat loss with one shield for each.",
        back: "Evaporation — dry immediately; convection — no fans or drafts; conduction — warm every surface that touches the baby; radiation — keep the cot away from cold walls and windows.",
      },
      {
        topic: "Thermoregulation",
        front: "What temperature defines cold stress, and what is the first response?",
        back: "Below 36.5 C. The first response is re-warming skin-to-skin under a blanket with a hat, then rechecking within one hour.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Thermal Protection of the Newborn: A Practical Guide",
        year: "1997",
      },
      {
        organization: "WHO",
        title: "WHO Recommendations on Kangaroo Mother Care for Preterm and Low-Birth-Weight Infants",
        year: "2022",
      },
    ],
  },

  // ── 15 ─────────────────────────────────────────────────────
  {
    courseSlug: "neonatal-nursing",
    moduleTitle: "Feeding & Care",
    lessonTitle: "Breastfeeding the Newborn",
    description:
      "The first feed in the first hour, attachment you can see, and the day-two worries you can answer. The practical craft of making breastfeeding work.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe correct positioning and attachment at the breast and their observable signs.",
      "Explain newborn feeding behaviour — frequency, cues and effective feeding markers.",
      "Apply solutions to the common early breastfeeding problems.",
    ],
    tags: ["breastfeeding", "attachment", "newborn feeding", "lactation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Breastfeeding is natural, but it is also a learned dance between two beginners — a mother who has never fed this way and a baby who has never fed at all. Most first-week 'breastfeeding problems' are positioning problems you can fix at the bedside.\n\nIn Ghana you also fight myths: that colostrum is dirty, that a crying baby needs water. This lesson gives you the craft and the words.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Start at the start: the first feed within one hour of birth, baby skin-to-skin, rooting to the breast — colostrum is concentrated immunity, so nothing else should pass his lips. Good **attachment** is visible: a wide gape, chin pressed into the breast, more areola showing above than below, lips flanged out, round cheeks, and rhythmic sucking and swallowing. It should be comfortable — pain means a shallow latch, so break the seal with a clean finger and re-attach. **Positioning** is the mother's frame: ear, shoulder and hip in one line, tummy to tummy, whole body supported, nose level with the nipple so he tilts and takes a big mouthful as he gapes.\n\nRead the baby, not the clock: 8-12 feeds in 24 hours, roused by early cues — stirring, mouth opening, hands to face — because crying is a late and harder cue. Evidence it works: audible swallows, six or more heavy wet nappies by day five, stools turning yellow and seedy by day four or five, and birth weight regained by day 10-14. The day-two 'no milk' cry is usually physiology — milk volume rises on days two to three — so answer it with more feeds, fluids and encouragement. Sore nipples mean attachment; engorgement means frequent feeds, warm before and cold after; a sleepy jaundiced baby needs waking, expressing and cup feeding. No water, no formula, no pacifiers.",
      },
      {
        type: "clinical_pearl",
        body: "Watch the jaw and listen for the swallow — you can diagnose attachment across the room. If feeding hurts past the first ten seconds, it is wrong, however good it looks; detach and start again.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A mother on day two is in tears at 2 am: the baby 'cries all night' and her 'milk has not come'. The night nurse has already suggested formula. On examination the baby feeds with shallow, quick sucks, the mother winces, and his lips are tucked in. One wet nappy today; a meconium stool this morning. Weight down 8% from birth.\n\nWhat is going on, and what do you do tonight?\n\nAnswer: Poor attachment is driving the whole story — painful shallow feeding removes less milk, so less is made; the 8% weight loss and single wet nappy confirm under-intake, and the night crying is hunger. Fix the latch: unhurried skin-to-skin, wide gape, chin deep, more areola above, lips flanged — and let him feed frequently tonight. Reassure her that milk volume rises over the next day and effective feeds are what bring it — formula is not the first answer, only a considered supplement if weight still fails with good support. Review feeds, wet nappies and weight in the morning, and document the plan.",
      },
      {
        type: "memory_trick",
        body: "Attachment: 'CHINS' — Chin touching, Head tilt with wide gape, In for a big mouthful, Nipples comfortable, Suckles with swallows. Answer the day-two cry with the '3 Fs': Frequency, Fluids for mother, Feedback on weight — no formula first.",
      },
      {
        type: "summary",
        body: "- First feed within one hour, skin-to-skin; colostrum is first immunisation — no water, no formula.\n- Positioning: ear-shoulder-hip in a line, tummy to tummy, nose level with the nipple, body supported.\n- Good attachment is visible: wide gape, chin deep, more areola above than below, flanged lips, round cheeks, rhythmic swallows, no pain.\n- Feed 8-12 times daily on early cues — stirring, rooting, hands to mouth; crying is a late cue.\n- It's working: six or more heavy wets by day five, yellow stools by day four to five, birth weight regained by day 10-14.\n- Sore nipples mean attachment; engorgement means frequent feeds; the day-two 'no milk' cry is physiology — answer it with frequency, fluids and support.",
      },
    ],
    questions: [
      {
        topic: "Breastfeeding",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which sign tells you a baby is well attached at the breast?",
        options: [
          "More areola visible above the nipple than below, with chin pressed into the breast",
          "Only the nipple held between tightly pressed lips",
          "Suckling that is quick and shallow with clicking sounds",
          "The mother wincing with pain at every feed",
        ],
        correctIndex: 0,
        explanation:
          "Deep attachment shows as a wide gape with the chin pressed in and more areola covered below than above — the baby is drawing breast tissue over the milk ducts, not chewing the nipple. Nipple-only latch, clicking and pain all point to shallow attachment that needs re-latching.",
        courseSlug: "neonatal-nursing",
      },
      {
        topic: "Breastfeeding",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which observation on day five best reassures you that breastfeeding is going well?",
        options: [
          "The baby feeds for exactly ten minutes on each side",
          "The baby sleeps six hours without waking for a feed",
          "Six or more heavy wet nappies in 24 hours with yellow, seedy stools",
          "The mother's breasts have become soft and small again",
        ],
        correctIndex: 2,
        explanation:
          "Output is the evidence: by day five a well-fed baby produces six or more heavy wet nappies and yellow stools, showing milk transfer is adequate. Clock-based feeds, long sleeps and breast feel are unreliable guides — soft breasts after the milk comes in can still feed a baby well.",
        courseSlug: "neonatal-nursing",
      },
      {
        topic: "Breastfeeding",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "On day five a baby is 4% below birth weight, feeding 10 times in 24 hours with yellow stools and good urine output. What is your plan?",
        options: [
          "Start formula supplementation today",
          "Restrict feeds to every four hours to rest the mother",
          "Admit the baby for observation and tests",
          "Continue responsive breastfeeding and reassess the weight by day 10 to 14",
        ],
        correctIndex: 3,
        explanation:
          "A 4% weight loss at day five with strong feeding and good output is well within the normal path back to birth weight by day 10-14. The right plan is continued responsive feeding with a weight review — formula, scheduled feeds or admission would interrupt exactly what is working.",
        courseSlug: "neonatal-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Breastfeeding",
        front: "What is the value of colostrum, and when should the first feed happen?",
        back: "Colostrum is concentrated protein and antibodies — the baby's first immunisation and a natural laxative to clear meconium. The first feed should be within one hour of birth, skin-to-skin.",
      },
      {
        topic: "Breastfeeding",
        front: "Give three observable markers that a newborn is getting enough milk.",
        back: "Six or more heavy wet nappies per 24 hours by day five; stools changing from black meconium to yellow and seedy by day four or five; and regaining birth weight by day 10 to 14 — plus audible swallows during feeds.",
      },
      {
        topic: "Breastfeeding",
        front: "A mother says breastfeeding is painful. What is your first diagnosis and action?",
        back: "Poor attachment is almost always the cause. Detach gently, reposition with a wide gape and deep chin, re-latch, and re-assess — pain beyond the first seconds means try again.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Breastfeeding (Fact Sheet)",
        year: "2023",
        url: "https://www.who.int/news-room/fact-sheets/detail/breastfeeding",
      },
      {
        organization: "WHO",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241549356",
      },
    ],
  },

  // ── 16 ─────────────────────────────────────────────────────
  {
    courseSlug: "neonatal-nursing",
    moduleTitle: "Feeding & Care",
    lessonTitle: "Keeping the Newborn Safe",
    description:
      "Safe sleep, clean cord, gentle handling and the hazards nobody warns new parents about — teaching that keeps the first month safe.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe safe sleep, safe cord care and safe handling practices for the newborn.",
      "Explain the common household hazards for newborns in a Ghanaian setting.",
      "Apply respectful parent teaching, including working with grandmothers and traditions.",
    ],
    tags: ["newborn safety", "safe sleep", "cord care", "parent education"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The best medical birth can be undone in the third week at home — by an unsafe sleeping place, an infected cord, a burn from a brazier, or smoke from a mosquito coil. Newborn safety teaching is a conversation with the whole family, held before discharge and repeated at the first postnatal visit.\n\nAnd in Ghana, the person you most need on your side is often the grandmother. This lesson gives you the content and the diplomacy.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Sleep**: babies sleep safest on their backs, on a firm flat surface, with nothing loose — no pillows, no thick blankets, no strings or charms around the neck. Where families bed-share, teach harm reduction honestly: baby beside the mother rather than under her arm, never on a sofa, never beside a sedated, unwell or smoking carer. Ventilate without a draft, and use a mosquito net rather than coils burning beside the cot. **Cord care**: hands washed, stump clean and dry — Ghana's newborn strategy promotes dry cord care, with chlorhexidine where policy directs. Nothing goes on the cord: no ash, no powder, no shea butter or dung — each is an infection road. The stump separates in 1-2 weeks; spreading redness, pus or a foul smell needs same-day care.\n\n**Handling and hazards**: everyone washes hands before touching a newborn, and anyone with fever, cough or a cold sore keeps their distance. Support the head, never shake a baby, never leave one alone on a bed or table, and keep them away from braziers, hot water and cooking areas — powder of any kind can be inhaled, so skip talc. Then teach the danger signs that mean 'come now': fever, cold limbs, poor feeding, fast breathing, yellow eyes and palms, or fewer wet nappies. Weigh the baby at every postnatal contact, confirm the immunisation dates, and end every teaching with a teach-back: 'tell me the three things you will watch for at home'.",
      },
      {
        type: "clinical_pearl",
        body: "Nothing around the neck and nothing on the cord — the two 'nothings' that prevent two very different deaths. If the family insists on a protective cord or waist bead, negotiate: they can have it later, clean, loose and nowhere near the stump.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At discharge, the grandmother asks you to put a talcum powder tin and a charm cord in the baby's cot 'as we did for his father'. She also plans a warm cleansing bath tonight, and the family sleeps with a coil burning under the bed to keep mosquitoes off the newborn.\n\nHow do you respond without losing her?\n\nAnswer: Respect first, then facts: praise her experience, then explain gently that this baby's lungs and skin are new — powder can be breathed straight into the lungs, so plain clean skin is best. Ask her to delay the first bath a day so the baby keeps the warmth and vernix it was born with. Offer the mosquito net as the modern version of the coil — protection without smoke. And welcome the charm as tradition — later, clean and away from the neck and cord. Bring the mother into the conversation so the whole house hears one plan, and close with teach-back on the danger signs.",
      },
      {
        type: "memory_trick",
        body: "The SAFE newborn: Sleeping on the back, Airway clear of cords and smoke, Free of nothing-on-the-cord, Everyone washes hands. And for the family teaching, '3 plus 3': three habits (back to sleep, clean dry cord, net not coil) and three warnings (fever, poor feeding, fast breathing).",
      },
      {
        type: "summary",
        body: "- Sleep: on the back, firm flat surface, nothing loose; bed-sharing families get harm reduction — baby beside mother, no sedation, no sofa, no strings.\n- Cord: clean and dry, hands washed — no ash, powder or shea butter; redness, pus or smell means come now.\n- Mosquito net, not coil smoke; everyone washes hands before touching the baby.\n- Hazards: braziers, hot water, cooking fires, inhaled powders, falls from adult beds; support the head, never shake.\n- Danger signs: fever, cold limbs, poor feeding, fast breathing, yellow eyes, fewer wet nappies.\n- End discharge teaching with teach-back — and keep the grandmother as your ally.",
      },
    ],
    questions: [
      {
        topic: "Newborn Safety",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the safest position for a newborn to sleep?",
        options: [
          "On the side, propped with a pillow",
          "On the back, on a firm flat surface, with nothing loose in the cot",
          "On the tummy to prevent choking",
          "Sitting semi-upright in a soft carrier overnight"],
        correctIndex: 1,
        explanation:
          "Back to sleep on a firm flat surface with no loose bedding is the safest position — side and prone sleeping raise the risk of sudden infant death, and soft surfaces and pillows can obstruct a young baby's airway.",
        courseSlug: "neonatal-nursing",
      },
      {
        topic: "Newborn Safety",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "On a postnatal visit you find the family has been applying ash to the cord stump. What is your teaching?",
        options: [
          "Keep the stump clean and dry — nothing should be applied, and watch for redness, pus or a foul smell",
          "Ash is safe as long as it comes from a clean fire",
          "Cover the stump with a tight bandage after each application",
          "Clean the cord with methylated spirit at every nappy change",
        ],
        correctIndex: 0,
        explanation:
          "WHO and Ghana's newborn strategy promote clean, dry cord care — ash and other substances on the raw stump are a direct road to infection, including tetanus. Teach the warning signs of spreading redness, pus or a foul smell, which mean same-day care.",
        courseSlug: "neonatal-nursing",
      },
      {
        topic: "Newborn Safety",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which household practice most directly protects a newborn from infection in the first weeks?",
        options: [
          "Keeping the room dark and quiet",
          "Wearing gloves whenever the baby is touched",
          "Everyone washing hands before handling the baby",
          "Applying petroleum jelly over the whole body daily",
        ],
        correctIndex: 2,
        explanation:
          "Hands carry the bacteria that cause newborn sepsis — hand-washing by every carer and visitor is the single most effective household infection barrier. Gloves are for staff procedures, not daily care, and dark rooms or body creams add no protection.",
        courseSlug: "neonatal-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Newborn Safety",
        front: "What three things should never be applied to a newborn's cord stump?",
        back: "Ash, powders or traditional substances like shea butter or dung — the stump stays clean and dry (with chlorhexidine where local policy directs), hands washed before and after care.",
      },
      {
        topic: "Newborn Safety",
        front: "Why is a mosquito net preferred to a coil for a newborn?",
        back: "Coil smoke is an airway irritant in a small baby with fast, delicate breathing; a net gives the same protection without smoke near the cot.",
      },
      {
        topic: "Newborn Safety",
        front: "Name four newborn danger signs a family must be taught before discharge.",
        back: "Fever or cold limbs, poor feeding, fast breathing, and yellow eyes or palms — plus fewer wet nappies or a swelling belly. Any of these means bring the baby the same day.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241549356",
      },
      {
        organization: "Ghana Health Service / Ministry of Health",
        title: "National Newborn Health Strategy and Action Plan",
        note: "Verify current edition with GHS.",
      },
    ],
  },
];
