// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 4, Semester 2 — Batch B (Advanced Maternal & Newborn Care,
// Leadership & Management, Community Domiciliary Midwifery)
// 19 lessons anchored to prisma/seed-data/anchors/y4s2-b.json
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "advanced-maternal-newborn-care",
    moduleTitle: "Advanced Newborn and Dyad Care",
    lessonTitle: "Newborns with Complex Needs",
    description:
      "Congenital conditions and complications — newborn care beyond the basics. Learn to spot the babies who need more, act in the first hours, and keep their families close.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the common congenital conditions of the newborn and the signs that reveal them in the first days.",
      "Explain the structured first response — warmth, airway, feeding and glucose — before referral for each major problem.",
      "Apply a family-centred approach that keeps parents informed, involved and supported from the first hour.",
    ],
    tags: ["complex newborn", "congenital", "newborn assessment", "referral", "family-centred care"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Most newborns need nothing more than warmth, an early feed and a mother's arms. A few arrive with extra needs — a syndrome, a heart defect, a cleft lip, a spine that did not close — and in your final semester you are expected to recognise them quickly, keep them safe in the first hours, and walk their families through the news kindly.\n\nYou are not expected to diagnose every rare condition from a CHPS compound — only to look carefully, stabilise what you can, refer well, and never let the diagnosis swallow the baby. This lesson gives you a working pattern for the commonest complex needs.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Learn the recognition patterns. **Down syndrome**: a quiet, floppy baby, slow to feed, with a flat facial profile, upslanting eyes and a single crease across the palm — about half also have a heart defect, so cardiac assessment belongs in the referral. The baby whose heart depends on the ductus arteriosus looks well at birth, then collapses on day two or three as the duct closes: deepening cyanosis, poor feeding, weak femoral pulses. **Oesophageal atresia** announces itself with frothy saliva that keeps returning, and choking or blueness at the first feed. An open spinal lesion is visible on the back; a cleft lip or palate threatens feeding first.\n\nThe response always has the same shape: keep the baby warm, guard the airway, protect feeding and glucose, then refer with a written note of times and findings. Cover a spinal lesion with sterile saline gauze and nurse the baby prone. For suspected oesophageal atresia, suction the mouth gently and give nothing by mouth. Whatever the condition, examine head to toe in the first hour — eyes, palate, spine, anus, hips and pulses — because complex problems travel in company.",
      },
      {
        type: "clinical_pearl",
        body: "Examine every newborn head to toe in the first quiet hour. And when a baby collapses on day two or three with cyanosis, poor feeding and weak femorals, think closed duct before you blame feeding or infection — a heart problem until an expert says otherwise.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At the newborn check in a district hospital, a term baby boy has fed once. The mother says milk kept coming back through his nose and he coughed and went blue for a moment. He is breathing comfortably now, but fine froth keeps gathering at the corner of his mouth however often you wipe it.\n\nWhat do you suspect, and what are your first three actions?\n\nAnswer: Suspect oesophageal atresia, possibly with a fistula into the airway — frothy saliva with choking and blueness at the first feed is the classic story. Keep him warm, suction the mouth gently and often, give nothing by mouth, and arrange urgent referral with your written note including the feeding history. Do not try another feed 'to see'. At the referral centre an X-ray confirms the diagnosis; your job is to get him there warm, dry and unfed.",
      },
      {
        type: "memory_trick",
        body: "Remember DAY THREE, DUCT CLOSED: a baby crashing on day two or three with cyanosis, poor feeding and weak femorals has a duct-dependent heart until proven otherwise. And froth in a newborn's mouth means the road to the stomach is closed — stop feeds and send.",
      },
      {
        type: "summary",
        body: "- Down syndrome: hypotonia, flat profile, single palmar crease — about half have heart defects, so include cardiac review in the referral.\n- Collapse on day two or three with cyanosis and weak femoral pulses: think duct-dependent heart disease, refer urgently.\n- Frothy saliva and choking at the first feed: oesophageal atresia — nothing by mouth, gentle suction, urgent referral.\n- Open spinal lesion: sterile saline dressing, nurse prone, refer urgently; folic acid before pregnancy prevents most.\n- Examine complex babies head to toe — problems travel in company — and keep parents informed, involved and close.",
      },
    ],
    questions: [
      {
        topic: "Newborns with Complex Needs",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A newborn is unusually floppy, with a flat facial profile, upslanting eyes and a single crease across one palm. What should be high on your list before she leaves your unit?",
        options: [
          "Discharge home with routine care, since these babies usually feed eventually",
          "Refer for full assessment including the heart, because heart defects are common in this condition",
          "Stop breastfeeding and start formula, since these babies cannot breastfeed",
          "Say nothing to the parents until a chromosomal test returns from the regional laboratory",
        ],
        correctIndex: 1,
        explanation:
          "These signs suggest Down syndrome, and roughly half of affected babies have a congenital heart defect. Feeding usually succeeds with support, and parents deserve honest, kind information now — not weeks later.",
        courseSlug: "advanced-maternal-newborn-care",
      },
      {
        topic: "Newborns with Complex Needs",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A term baby who fed once at birth becomes cyanotic and refuses feeds on day three, and you cannot feel his femoral pulses clearly. What is the most likely explanation?",
        options: [
          "Breast milk jaundice deepening on day three",
          "Normal transitional circulation completing on day three",
          "Closure of a duct that his heart depended on — duct-dependent congenital heart disease",
          "Simple feeding laziness after the first night",
        ],
        correctIndex: 2,
        explanation:
          "Duct-dependent lesions declare themselves when the ductus closes on day two or three: cyanosis, poor feeding and weak or absent femoral pulses. This is a heart until an expert excludes it.",
        courseSlug: "advanced-maternal-newborn-care",
      },
      {
        topic: "Newborns with Complex Needs",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which combination of actions is correct for a newborn with frothy saliva who choked and went blue at his first feed?",
        options: [
          "Keep him warm, suction the mouth gently, give nothing by mouth and refer urgently",
          "Offer thickened feeds little and often while you observe for 24 hours",
          "Pass a feeding tube and start expressed milk to keep his strength up",
          "Position him prone after each feed to drain the froth, and review tomorrow",
        ],
        correctIndex: 0,
        explanation:
          "This is oesophageal atresia until proven otherwise: nil by mouth, gentle suction and urgent referral. Feeding — thin or thick — risks aspiration, and observation simply delays the diagnosis.",
        courseSlug: "advanced-maternal-newborn-care",
      },
    ],
    flashcards: [
      {
        topic: "Complex Newborn Care",
        front: "Day two or three: cyanosis, poor feeding, weak femoral pulses — what do you think of?",
        back: "Closure of a duct the heart depended on — duct-dependent congenital heart disease. Refer urgently; do not blame feeding or infection first.",
      },
      {
        topic: "Complex Newborn Care",
        front: "Floppy newborn with flat profile, upslanting eyes, single palmar crease — what must the referral include?",
        back: "Down syndrome is likely, and about half have congenital heart disease — so request full assessment including cardiac review, and support the family from the first hour.",
      },
      {
        topic: "Complex Newborn Care",
        front: "Frothy saliva with choking at the first feed — condition and response?",
        back: "Oesophageal atresia until proven otherwise. Nil by mouth, gentle mouth suction, keep the baby warm, urgent referral with your written note.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Birth defects — fact sheet",
        year: "2023",
        url: "https://www.who.int/news-room/fact-sheets/detail/birth-defects",
        note: "Overview of major congenital anomalies and prevention including folic acid. Check for the latest update.",
      },
      {
        organization: "World Health Organization",
        title: "Pocket Book of Hospital Care for Children (2nd edition)",
        year: "2013",
        url: "https://www.who.int/publications/i/item/9789241548373",
        note: "Neonatal chapters cover recognition and referral of congenital problems. Verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Myles Midwifery (17th edition)",
        year: "2021",
        note: "Newborn examination and congenital anomaly chapters. Educational source — verify current edition.",
      },
    ],
  },
  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "advanced-maternal-newborn-care",
    moduleTitle: "Advanced Newborn and Dyad Care",
    lessonTitle: "Caring for the Sick Dyad",
    description:
      "When mother and baby are both patients — the juggling act that seems impossible. Two patients, two teams, one plan, and a way to keep the mother at the centre of her baby's care.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the situations in which mother and newborn are simultaneously patients and the risks that follow.",
      "Explain the principles of parallel care — named teams for each patient, early escalation and clear handover between them.",
      "Apply supportive measures for a separated or ill mother, including expressing milk for her hospitalised baby.",
    ],
    tags: ["dyad", "complexity", "neonatal unit", "breast milk expression", "teamwork"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Sometimes both halves of the dyad are unwell at once: a mother with severe pre-eclampsia whose baby needs observation, an eclamptic fit in one room while her newborn needs resuscitation in the next, or a mother with sepsis whose premature baby lies across the corridor. One midwife cannot be two midwives, and this lesson is about what you do instead.\n\nCaring for the sick dyad is a final-semester skill because it demands everything at once — clinical judgement, team leadership, honest communication and tenderness towards two patients who belong to each other.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The first rule is allocation: **two patients, two named leads**. In any emergency where both are at risk, someone senior coordinates while one team cares for the mother and another for the newborn — never one person darting between them. Call for help before you are drowning. The second rule is that separation is itself a treatment risk: a mother ill and separated from her baby loses the chance to express early, and her supply — and morale — suffer.\n\nSo protect the link. If the baby goes to the neonatal unit, teach the mother to begin expressing within the first six hours once she is able, eight to ten times in every 24 hours including at night. Label and send her milk; carry updates from the neonatal team back to her; let the father be with the baby when she cannot. Keep her informed about her own condition too — an anxious, uninformed mother recovers worse. Document both stories, and hand over both patients together.",
      },
      {
        type: "clinical_pearl",
        body: "When both are sick, spend your voice early: ask for extra hands while you still have breath to ask. A mother who is too sick to visit is still the mother — every update, every drop of expressed milk and every photograph is treatment for them both.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A mother with severe pre-eclampsia is on magnesium sulfate and drowsy after delivery. Her baby, born at 35 weeks, is grunting in the transitional care corner and the doctor wants closer observation. The ward is busy, the father is pacing, and you are the only midwife in sight.\n\nHow do you organise the next hour so that neither patient is forgotten?\n\nAnswer: Call for help and name the teams — one for the mother's magnesium, blood pressure and reflexes, one for the baby's warmth, feeding and breathing — with the senior midwife as coordinator. Ask the father to stay at the baby's side and call out any change. Explain to the mother, even drowsy, where her baby is and why. Write both stories in the notes and hand them over together.",
      },
      {
        type: "memory_trick",
        body: "TWO patients, TWO leads, ONE plan: every sick dyad needs a team for the mother, a team for the baby, and a single coordinator holding both threads — plus a father or aunt holding the baby's hand when the mother cannot.",
      },
      {
        type: "summary",
        body: "- When mother and baby are both patients, allocate two named teams and one coordinator — never one midwife for both.\n- Escalate for extra hands early; the sickest hour is the wrong time to discover you are alone.\n- Separation harms: start expressing within six hours when able, eight to ten times a day, and send labelled milk to the baby.\n- Keep the mother informed about her baby and about herself; involve the father or family as her proxy presence.\n- Document both stories and hand over both patients together.",
      },
    ],
    questions: [
      {
        topic: "Caring for the Sick Dyad",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A mother collapses with a postpartum haemorrhage just as her newborn arrives needing resuscitation. What is the safest structure for the next minutes?",
        options: [
          "Two named teams — one for the mother, one for the baby — with a senior coordinator over both",
          "One midwife moving between mother and baby as each seems more urgent",
          "All staff on the mother; the baby can wait until she is stable",
          "All staff on the baby; the mother's bleeding can be watched by the family",
        ],
        correctIndex: 0,
        explanation:
          "Simultaneous emergencies need parallel care: two teams with named leads and a coordinator. One person alternating between two crises loses minutes that neither patient can spare.",
        courseSlug: "advanced-maternal-newborn-care",
      },
      {
        topic: "Caring for the Sick Dyad",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother with severe pre-eclampsia is too unwell to visit her baby in the neonatal unit. What is the best support for feeding and bonding?",
        options: [
          "Tell her the baby is fine and distract her from asking",
          "Start the baby on formula immediately to avoid disappointment",
          "Wait until she recovers fully before mentioning feeding",
          "Teach her to begin expressing as soon as she is able — within the first six hours if possible, eight to ten times daily — and send her labelled milk to the unit",
        ],
        correctIndex: 3,
        explanation:
          "Early and frequent expression protects her milk supply and keeps her connected to her baby, while the baby receives the best available feed. Waiting risks the supply; hiding information harms trust.",
        courseSlug: "advanced-maternal-newborn-care",
      },
      {
        topic: "Caring for the Sick Dyad",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "The baby is in the neonatal unit and the mother, recovering, asks who will update her about him today. What is the correct principle?",
        options: [
          "Updates go to the father first, and he decides what she hears",
          "Updates belong to the mother herself as soon as she can receive them, with her chosen support person present if she wishes",
          "The family elders should be informed and left to manage the news",
          "No updates until discharge to avoid raising her hopes",
        ],
        correctIndex: 1,
        explanation:
          "The baby is hers; information about him is her right, delivered kindly and as early as her condition allows. Family members support her — they do not replace her unless she asks or is unconscious.",
        courseSlug: "advanced-maternal-newborn-care",
      },
    ],
    flashcards: [
      {
        topic: "Caring for the Sick Dyad",
        front: "What is the first structural rule when mother and newborn are both acutely unwell?",
        back: "Two patients, two named teams, one coordinator — parallel care with early escalation for extra hands.",
      },
      {
        topic: "Caring for the Sick Dyad",
        front: "Mother separated from her hospitalised baby — when should expressing start and how often?",
        back: "As soon as she is able, ideally within six hours of birth, then eight to ten times in every 24 hours including at night; send labelled expressed milk to the unit.",
      },
      {
        topic: "Caring for the Sick Dyad",
        front: "Why is an ill, separated mother at particular risk?",
        back: "She risks both her milk supply and her psychological recovery — early expressing, honest updates and family presence as her proxy protect both.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Maternal and Newborn Care for a Positive Postnatal Experience",
        year: "2022",
        url: "https://www.who.int/publications/i/item/9789241506504",
        note: "Postnatal care of the dyad, keeping mother and baby together and supporting feeding. Check for the latest update.",
      },
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors (2nd edition)",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565493",
        note: "Parallel management of maternal and newborn emergencies. Verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Myles Midwifery (17th edition)",
        year: "2021",
        note: "Chapters on complex maternal and neonatal situations. Educational source — verify current edition.",
      },
    ],
  },
  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "advanced-maternal-newborn-care",
    moduleTitle: "Advanced Newborn and Dyad Care",
    lessonTitle: "Feeding When It's Complicated",
    description:
      "Feeding around illness, surgery and separation — nutrition as advanced care. The preterm baby, the cleft palate, the sleepy sick newborn and the mother whose supply needs protecting.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the feeding routes for babies who cannot breastfeed directly — tube, cup and expressed breast milk.",
      "Explain how illness, clefts, surgery and maternal conditions change the feeding plan, and the few true contraindications to breast milk.",
      "Apply a plan that feeds the baby while protecting the mother's milk supply, including relactation support.",
    ],
    tags: ["feeding", "complex", "preterm", "cleft", "expressed breast milk"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Feeding a healthy newborn is mostly positioning and patience. Feeding becomes advanced care when the baby is too small, too sleepy or too unwell to suckle — or when a cleft, an operation or a mother's illness stands between the breast and the baby. In those weeks, nutrition decides growth, brain development and survival.\n\nThis lesson is about holding two goals at once: feed the baby today, and protect the mother's milk supply so the breast is waiting when the baby is ready. It also covers the rare situations where breast milk is genuinely not advised.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Preterm babies learn to coordinate sucking, swallowing and breathing at around **34 weeks**; before that, feeds go by tube directly into the stomach, with a cup or spoon as the bridge, and expressed breast milk is the feed of choice. Keep giving daily practice at the breast with kangaroo care — the baby graduates at his own pace, and weight trend is your judge. A baby with a cleft palate cannot seal the breast: feed him upright with expressed milk from a squeezable bottle or special teat, burping often and watching for milk in the nose, and refer to the cleft team for repair. A sick or surgical baby may need to rest the gut — if feeds are stopped and the belly becomes distended, with green vomit or blood in the stool, stop feeding and refer urgently (think necrotising enterocolitis).\n\nWhatever the route, protect the supply: expressing eight or more times a day, including at night, tells the breast to keep making milk. Relactation is possible even weeks later with frequent suckling, skin-to-skin contact and support. True contraindications to breast milk are rare — galactosaemia is the classic one. And remember: HIV is no longer a blanket reason to avoid breastfeeding — with the mother suppressed on effective ART, breastfeeding is the recommended option.",
      },
      {
        type: "clinical_pearl",
        body: "The supply follows the demand: every missed expression is a message to the breast to make less tomorrow. Feed the baby by whatever route works today — and express like clockwork for the day he comes back to the breast.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A baby born at 33 weeks is three days old. His mother expresses faithfully, but he dozes at the breast after two minutes and yesterday's weight is down eight percent. The house officer suggests starting formula 'to get him growing'.\n\nWhat feeding plan do you propose instead, and how will you judge it?\n\nAnswer: Keep expressed breast milk as the feed — by tube now, with a daily trial at the breast during kangaroo care, and a cup when he wakes and roots. Weigh daily and plot the trend: the aim is steady regain of birth weight. Protect the supply by expressing after every feed attempt. Formula would add infection risk without solving the real problem — immaturity, which will mature.",
      },
      {
        type: "memory_trick",
        body: "Climb the feeding ladder — TUBE, then CUP, then BREAST — and never pull a rung out from under a sleepy 33-weeker. One rung at a time, kangaroo warmth beneath, weight trend as your referee.",
      },
      {
        type: "summary",
        body: "- Sucking, swallowing and breathing coordinate at about 34 weeks; before that, use tube feeds of expressed breast milk with a cup as the bridge.\n- Cleft palate: upright position, expressed milk, squeezable teat, frequent burping — and early referral to the surgical cleft team.\n- A distended belly with green vomit or blood in the stool: stop feeds and refer — think necrotising enterocolitis.\n- Protect the supply with eight or more expressions a day; relactation is possible weeks later with frequent suckling and support.\n- True contraindications to breast milk are rare; galactosaemia is the classic one, and HIV with a suppressed mother on ART is not a contraindication.",
      },
    ],
    questions: [
      {
        topic: "Feeding When It's Complicated",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A baby born at 32 weeks cannot coordinate feeding at the breast. What is the appropriate feeding route today?",
        options: [
          "Full bottle formula feeds until term",
          "Intravenous fluids only until he can breastfeed",
          "Tube feeds of expressed breast milk, with daily skin-to-skin practice at the breast and a cup as he matures",
          "Thickened cereal feeds by spoon to increase calories",
        ],
        correctIndex: 2,
        explanation:
          "Coordination matures at about 34 weeks, so the preterm baby is fed by tube with his mother's expressed milk, practising at the breast during kangaroo care, and graduates through cup feeds — with weight trend as the judge.",
        courseSlug: "advanced-maternal-newborn-care",
      },
      {
        topic: "Feeding When It's Complicated",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which of the following is a true contraindication to feeding a baby with breast milk?",
        options: [
          "The mother has a common cold",
          "The baby has galactosaemia",
          "The mother is HIV-positive, on effective ART with an undetectable viral load",
          "The mother has mild cracked nipples",
        ],
        correctIndex: 1,
        explanation:
          "Galactosaemia is the classic true contraindication — the baby cannot metabolise the galactose in lactose. Colds and cracked nipples are not contraindications, and a mother suppressed on ART is actively encouraged to breastfeed.",
        courseSlug: "advanced-maternal-newborn-care",
      },
      {
        topic: "Feeding When It's Complicated",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A baby with a cleft palate is choking during feeds. Which feeding approach is correct?",
        options: [
          "Lay him flat after feeds so gravity does the work",
          "Breastfeed more vigorously to build his strength",
          "Bolus feeds of thick porridge from a cup",
          "Hold him upright, feed expressed milk from a squeezable bottle or special teat slowly, burp often and refer to the cleft team",
        ],
        correctIndex: 3,
        explanation:
          "A cleft palate cannot seal the breast or standard teat, so milk escapes into the nose. Upright, slow, expressed-milk feeds with a specialised teat plus early surgical referral are the safe answer.",
        courseSlug: "advanced-maternal-newborn-care",
      },
    ],
    flashcards: [
      {
        topic: "Feeding When It's Complicated",
        front: "What is the feeding ladder for a preterm baby?",
        back: "Tube feeds of expressed breast milk first, cup as coordination matures, breast as the goal — with kangaroo care and daily practice; sucking, swallowing and breathing coordinate at about 34 weeks.",
      },
      {
        topic: "Feeding When It's Complicated",
        front: "How do you feed a baby with a cleft palate?",
        back: "Upright position, expressed breast milk from a squeezable bottle or special teat, slow feeds with frequent burping, watch for milk in the nose, and early referral to the cleft team.",
      },
      {
        topic: "Feeding When It's Complicated",
        front: "How do you protect a mother's milk supply while her baby is tube-fed?",
        back: "Express eight or more times in 24 hours including at night, ideally starting within six hours of birth — the supply follows the demand.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Breastfeeding — fact sheet",
        year: "2023",
        url: "https://www.who.int/news-room/fact-sheets/detail/breastfeeding",
        note: "Includes feeding in special circumstances. Check for the latest update.",
      },
      {
        organization: "World Health Organization",
        title: "Recommendations for the Care of the Preterm or Low-Birth-Weight Infant",
        year: "2022",
        url: "https://www.who.int/publications/i/item/9789240058262",
        note: "Kangaroo care and feeding of small babies. Check for the latest update.",
      },
      {
        organization: "Elsevier",
        title: "Myles Midwifery (17th edition)",
        year: "2021",
        note: "Infant feeding chapters including cleft palate and preterm feeding. Educational source — verify current edition.",
      },
    ],
  },
  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "advanced-maternal-newborn-care",
    moduleTitle: "Caring for Families Through Complexity",
    lessonTitle: "Breaking Difficult News",
    description:
      "The conversations you'll never feel ready for — skill and compassion in delivering bad news. The SPIKES steps that turn the hardest moment into care.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the six steps of the SPIKES protocol for delivering difficult news.",
      "Explain how empathy, silence and plain language support a family receiving bad news, and the errors that wound instead.",
      "Apply the protocol in a Ghanaian setting — privacy, language, family dynamics and follow-up included.",
    ],
    tags: ["communication", "bad news", "spikes", "empathy", "counselling"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "One day you will walk towards a woman carrying news that will divide her life into before and after: a fresh stillbirth, a serious scan finding, a baby who needs transfer. Nothing makes that moment easy — but there is a skill to it, and skill matters, because families remember the words and the tone for the rest of their lives.\n\nThis lesson teaches SPIKES, the six-step protocol used worldwide for difficult conversations — scaffolding so your compassion reaches her instead of being swallowed by your own fear.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**S**etting comes first: a private room, both of you seated, her support person present if she wants, no pager ticking, enough time. **P**erception: ask what she already understands — 'What have you been told so far?' — so you build on her story rather than over it. **I**nvitation: ask how much she wants to know now; some want everything, some want the plan first. **K**nowledge is the news itself: open with a warning shot ('I am afraid I have difficult news'), then plain words in her own language, in small chunks, with pauses. Avoid jargon — a 'congenital anomaly' helps nobody.\n\n**E**mpathy is where most of us wobble: allow silence — count five slow breaths before filling it — and name the emotion gently ('this is very hard news'). Resist 'I know how you feel', 'at least...' or 'God knows best' — her faith is hers; don't borrow it to escape your discomfort. **S**trategy and summary: agree the next steps, who she will see and when, and give her a way back with questions. Document what was said and to whom. Family members may support — but the news belongs to the mother unless she cannot receive it herself.",
      },
      {
        type: "clinical_pearl",
        body: "Silence is a tool, not a failure. After the news, count five breaths before speaking again — the most healing sentence is often 'I am so sorry' and nothing else. And never deliver hard news standing in a corridor.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At a regional hospital, an ultrasound performed at 32 weeks shows a serious problem with the baby's brain. The sonographer has asked you to talk to the couple, who are sitting on a bench outside, expecting a routine scan result and discussing names.\n\nUsing SPIKES, what do your first five minutes look like?\n\nAnswer: Move them to a private room and sit down; offer the choice of who is present. Ask what they understand about the scan so far. Give a warning shot in their own language, then the finding in plain words, pausing between sentences and letting silence work. Do not bury them in detail; answer what they ask. End with concrete next steps — who they meet today, what happens tomorrow, how to reach you with questions — then document, and inform the senior midwife and doctor following the couple.",
      },
      {
        type: "memory_trick",
        body: "SPIKES: Sit her down, Perceive what she knows, Invite the amount, Knowledge in plain words, Empathy with silence, Strategy to end. Six steps, in order, every time — the scaffolding that lets your kindness stand up.",
      },
      {
        type: "summary",
        body: "- Setting first: private, seated, unhurried, with her chosen support person.\n- Perception and invitation: find out what she knows and how much she wants to hear now.\n- Knowledge: warning shot, plain language in her own tongue, small chunks, real pauses.\n- Empathy: silence, naming the emotion, no 'at least' comfort and no borrowed faith clichés.\n- Strategy and summary: concrete next steps, follow-up, documentation — the news is hers before it is the family's.",
      },
    ],
    questions: [
      {
        topic: "Breaking Difficult News",
        type: "MCQ",
        difficulty: "Easy",
        stem: "You must tell a mother that her ultrasound shows a serious problem with her baby. Which step comes first?",
        options: [
          "Deliver the finding immediately at the corridor where you met her",
          "Find a private space, sit her down with her chosen support person and protect time from interruption",
          "Inform the extended family first so they can soften the news",
          "Begin with the management plan, then work backwards to the diagnosis",
        ],
        correctIndex: 1,
        explanation:
          "Setting is the first step of SPIKES: privacy, seating, support and time. Corridor news, family-first telling and plan-first delivery all rob her of the chance to receive and absorb her own news.",
        courseSlug: "advanced-maternal-newborn-care",
      },
      {
        topic: "Breaking Difficult News",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which sentence is a good 'warning shot' before the main news?",
        options: [
          "Don't worry, it's probably nothing at all.",
          "The radiologist found some pathology in the fetal abdomen, essentially a congenital malformation.",
          "Let me finish the ward round and I will come back.",
          "I am afraid I have some difficult news, and I want us to have time together now.",
        ],
        correctIndex: 3,
        explanation:
          "A warning shot prepares her heart before the facts arrive, offered slowly and with time. False reassurance and jargon both do harm, and postponing the moment multiplies her anxiety.",
        courseSlug: "advanced-maternal-newborn-care",
      },
      {
        topic: "Breaking Difficult News",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You have just given a couple very hard news. The mother begins to cry and says nothing. What is the best response?",
        options: [
          "Fill the silence immediately with the full management plan",
          "Say you know exactly how she feels",
          "Stay quiet, stay present, and name the emotion gently — 'this is very hard news'",
          "Reassure her that everything will definitely be fine",
        ],
        correctIndex: 2,
        explanation:
          "Empathy means allowing the silence, staying physically present and naming the feeling. False claims of shared grief and promises you cannot keep both centre you instead of her.",
        courseSlug: "advanced-maternal-newborn-care",
      },
    ],
    flashcards: [
      {
        topic: "Breaking Difficult News",
        front: "What are the six steps of SPIKES?",
        back: "Setting, Perception, Invitation, Knowledge, Empathy, Strategy and summary — private space, check what she knows, ask how much she wants, plain words with a warning shot, silence and named emotion, then concrete next steps.",
      },
      {
        topic: "Breaking Difficult News",
        front: "What is a warning shot, and give one?",
        back: "A short sentence that prepares her before the news itself: 'I am afraid I have some difficult news, and I want us to have time together now.'",
      },
      {
        topic: "Breaking Difficult News",
        front: "Name three phrases to avoid when breaking bad news.",
        back: "'I know how you feel', 'at least...' and any 'God knows best' used to fill your own discomfort — silence, presence and named emotion serve her better.",
      },
    ],
    sources: [
      {
        organization: "The Oncologist (Baile WF, Buckman R et al.)",
        title: "SPIKES: A Six-Step Protocol for Delivering Bad News",
        year: "2000",
        note: "The original description of the SPIKES protocol. Educational source — verify availability through your library.",
      },
      {
        organization: "World Health Organization",
        title: "mhGAP Intervention Guide for Mental, Neurological and Substance Use Disorders (2nd edition)",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549790",
        note: "Includes principles of communicating difficult news and supporting families. Verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Myles Midwifery (17th edition)",
        year: "2021",
        note: "Communication and counselling chapters. Educational source — verify current edition.",
      },
    ],
  },
  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "advanced-maternal-newborn-care",
    moduleTitle: "Caring for Families Through Complexity",
    lessonTitle: "Supporting Families Through Loss",
    description:
      "When the worst happens — bereavement care for parents and for yourself. How to walk with a family through the darkest ward, and come out whole yourself.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe respectful immediate care after stillbirth or neonatal death — memory making, honest language and physical care of the mother.",
      "Explain the follow-up a bereaved family needs, including grief patterns that signal depression and referral thresholds.",
      "Apply self-care and team debriefing so that loss does not quietly hollow out the midwife.",
    ],
    tags: ["loss", "bereavement", "stillbirth", "memory making", "grief"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The baby dies. However experienced you become, you will never be ready — and you do not need to be. The family does not need eloquence; it needs honesty, unhurried kindness, and the courage to let them be parents to a dead baby. The care you give in that room will be remembered, word for word, for decades.\n\nThis lesson covers the immediate care, the weeks that follow, and the quiet part nobody teaches: looking after yourself, because grief lands on midwives too.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Begin with plain, honest words: 'I am so sorry — your baby has died.' Euphemisms ('passed away', 'we lost him') blur what has happened and stall grief. Then give time, unhurried. Offer the parents the chance to see, hold, wash and dress their baby, take photographs, a lock of hair, a name — a memory box, if your unit has one. **Offer, never force**: those who choose to hold their baby usually come to treasure it; those who decline must not be judged. Involve their faith — pastor, imam, elder — and ask about naming and burial customs; don't assume. Care for the mother's body too: her milk will come in and cause pain — a firm bra, cold packs, and expressing only small amounts for comfort, with a doctor's review if severe.\n\nIn the following weeks, grief comes in waves, not stages — good days that crash without warning. Review her at six weeks with space to talk; refer if insomnia, guilt or numbness persist or deepen, because bereaved mothers carry a high risk of depression. Discuss the next pregnancy kindly: early booking, folic acid, and a plan for a supported pregnancy. Every death feeds the unit's no-blame review so the next mother is safer. And after the room is cleared, gather the team for a debrief. You are not weak for crying; you are human.",
      },
      {
        type: "clinical_pearl",
        body: "Offer, don't force — 'Would you like to hold her?' honours both answers. And when the family asks why, never invent a cause: 'we will look carefully' beats a false explanation, and the review may protect the next baby.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A mother delivers a stillborn baby girl at 38 weeks — no warning signs during pregnancy. The father is silent and angry; the mother keeps asking what she did wrong. An aunt wants the baby taken away immediately so the mother 'forgets'.\n\nWhat do your next hours look like, and what will you say?\n\nAnswer: Give the news in plain words and stay. Allow time, then offer — not push — to see, hold and dress the baby, with a photograph kept in the notes for her if she declines now. Reassure her gently that this was not her fault, and that the death will be reviewed to learn what can be learned. Support the father's grief as grief, not anger to be managed. Care for her milk and her body, arrange registration and follow-up at six weeks, and hold a team debrief. The aunt means kindness — acknowledge it, and let the parents decide.",
      },
      {
        type: "memory_trick",
        body: "Grief is a wave, not a staircase — it returns on due dates and anniversaries. Your care is the sandbag wall: honest words, offered memories, a six-week door left open, and a debrief for the staff who stood in the water too.",
      },
      {
        type: "summary",
        body: "- Use honest words: 'I am so sorry, your baby has died' — unhurried time, no euphemisms.\n- Offer memory making: seeing, holding, washing, dressing, photographs, a name. Offer, never force.\n- Care for her body: firm bra, cold packs, express only for comfort; review if severe.\n- Follow up at six weeks; refer if grief deepens into depression; plan the next pregnancy kindly.\n- Every death feeds a no-blame review — and the team needs its own debrief, because midwives grieve too.",
      },
    ],
    questions: [
      {
        topic: "Supporting Families Through Loss",
        type: "MCQ",
        difficulty: "Easy",
        stem: "After a fresh stillbirth, which approach to the parents seeing and holding their baby is best practice?",
        options: [
          "Offer it warmly and respect their decision either way, without pressure",
          "Avoid offering, because seeing the baby always worsens grief",
          "Insist she holds the baby, because closure requires it",
          "Take the baby away first and ask again after a month",
        ],
        correctIndex: 0,
        explanation:
          "Offering the chance to see and hold the baby supports most parents' long-term memories and grief; forcing or withholding both override the parents' own judgement of what they can bear.",
        courseSlug: "advanced-maternal-newborn-care",
      },
      {
        topic: "Supporting Families Through Loss",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which words are best when telling a mother her baby has died?",
        options: [
          "'I'm sorry — your baby passed away.'",
          "'We lost the baby, but God knows best.'",
          "'I am so sorry — your baby has died.'",
          "'The baby didn't make it, but you can have another.'",
        ],
        correctIndex: 2,
        explanation:
          "Plain, honest language lets grief begin. Euphemisms and borrowed faith comfort the teller more than the told, and promising a replacement baby dismisses the child who has died.",
        courseSlug: "advanced-maternal-newborn-care",
      },
      {
        topic: "Supporting Families Through Loss",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother's milk is coming in three days after a stillbirth and her breasts are painfully engorged. What is the best nursing response?",
        options: [
          "Encourage full, regular expression and storage of the milk for later use",
          "Apply warm compresses and stimulate the nipples frequently to drain the breasts",
          "Tell her the milk will stop on its own if she ignores the pain",
          "Support with a firm bra and cold packs, express only small amounts for comfort, and ask a doctor to review if severe",
        ],
        correctIndex: 3,
        explanation:
          "Suppression works by reducing stimulation: firm support, cold packs and expressing only enough for comfort. Frequent stimulation signals the breasts to keep producing, and ignoring pain is not care.",
        courseSlug: "advanced-maternal-newborn-care",
      },
    ],
    flashcards: [
      {
        topic: "Supporting Families Through Loss",
        front: "What words do you use when a baby has died?",
        back: "'I am so sorry — your baby has died.' Plain and honest; no euphemisms, no 'at least', no promises about future babies.",
      },
      {
        topic: "Supporting Families Through Loss",
        front: "What is memory making, and what is the golden rule?",
        back: "Offering parents the chance to see, hold, wash, dress and photograph their baby, and to keep a lock of hair or a name — always offered, never forced.",
      },
      {
        topic: "Supporting Families Through Loss",
        front: "How do you care for a bereaved mother's incoming milk?",
        back: "Firm bra, cold packs, express only small amounts for comfort, avoid nipple stimulation, and ask a doctor to review if engorgement is severe.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Making Every Baby Count: Audit and Review of Stillbirths and Neonatal Deaths",
        year: "2016",
        note: "Audit guidance and respectful care around death. Educational reference — verify current WHO guidance.",
      },
      {
        organization: "World Health Organization",
        title: "mhGAP Intervention Guide for Mental, Neurological and Substance Use Disorders (2nd edition)",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549790",
        note: "Recognition of depression in the postnatal period. Verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Myles Midwifery (17th edition)",
        year: "2021",
        note: "Bereavement care chapter. Educational source — verify current edition.",
      },
    ],
  },
  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "leadership-management",
    moduleTitle: "Leading Teams",
    lessonTitle: "Leadership Styles in Maternity Care",
    description:
      "Commanding, coaching, transforming — the styles and when each saves the day. Leadership is a toolkit you switch between, not a fixed personality.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the main leadership styles and their characteristic behaviours on a maternity unit.",
      "Explain why emergencies justify commanding leadership while learning requires coaching, and why laissez-faire endangers women.",
      "Apply the principle of matching your style to the moment and to the experience of your team.",
    ],
    tags: ["leadership", "styles", "emergencies", "situational leadership"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "You have met them all: the sister who commands a haemorrhage like a drumbeat, the tutor who grows students with questions, the officer-in-charge whose absence makes the ward drift. What looks like personality is actually a set of styles — and the mark of a mature midwife is switching between them deliberately.\n\nThis lesson names the styles you already recognise, shows which one each moment of maternity care demands, and warns about the two extremes — command everywhere, and command nowhere — that both cost lives.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Commanding (directive) leadership** gives brief, clear instructions with named roles. In an emergency — postpartum haemorrhage, shoulder dystocia, eclampsia — it is the safest style on earth, because discussion is a luxury a dying woman cannot afford. Closed-loop communication completes it: give the order, hear it repeated back. **Democratic leadership** invites the team into decisions — rosters, ward routines — and buys ownership. **Transactional leadership** trades clear expectations for consistent follow-through: standards, checklists, honest monitoring. **Transformational leadership** paints a picture of better care and pulls people towards it — the engine of quality improvement. **Coaching** grows individuals through questions and feedback.\n\nSituational leadership ties them together: match the style to the person and the moment. A first-week student needs direction, not delegation; a senior colleague needs delegation, not hovering. **Laissez-faire** — abdication dressed up as trust — is the one style maternity care cannot carry, because birth emergencies punish absent leadership within minutes. And remember: commanding is a tone, never a licence. The same calm respect runs through every style; only the directness changes. After the emergency, step deliberately back into coaching — the team that was commanded deserves the debrief that teaches.",
      },
      {
        type: "clinical_pearl",
        body: "The loudest style for the loudest moment, the quietest for growing people. Emergencies justify commands — they never license contempt. And when the crisis ends, your first question should change from 'do this now' to 'how did that feel?'",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are the senior midwife on a night shift. A student is with a mother in second stage when the head is delivered and the shoulders stick. Seconds later you are in the room.\n\nWhat does your leadership look like in the next sixty seconds — and in the hour that follows?\n\nAnswer: Command now: say the emergency aloud, call for help, assign the student to the McRoberts position with one clear instruction, and time the manoeuvres. Afterwards, the style changes — sit with the shaken student, walk back through the minute together, and teach what her positioning achieved. Commanding carried the emergency; coaching, afterwards, turns it into learning. Both were leadership.",
      },
      {
        type: "memory_trick",
        body: "MATCH the style to the minute: Crisis — Command, Ward — Discuss, Growth — Coach, Standards — Trade. And never choose the missing style: Absent (laissez-faire) is how quiet wards become dangerous ones.",
      },
      {
        type: "summary",
        body: "- Commanding style belongs in emergencies: brief orders, named roles, closed-loop communication.\n- Democratic, transactional and transformational styles run the everyday unit and its improvement.\n- Coaching grows people; match your directness to each person's experience — situational leadership.\n- Laissez-faire is abdication, and maternity emergencies punish it within minutes.\n- Commanding is a tone, not a licence — the same respect runs through every style; debrief after every commanded crisis.",
      },
    ],
    questions: [
      {
        topic: "Leadership Styles",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Your ward is in the middle of a postpartum haemorrhage and you are the senior midwife. Which leadership approach fits the moment?",
        options: [
          "Step back and let the team decide their own roles by discussion",
          "Take command: assign roles aloud, give brief instructions and use closed-loop communication",
          "Leave the room to fetch the manager so the hierarchy is respected",
          "Observe quietly and give feedback about roles afterwards",
        ],
        correctIndex: 1,
        explanation:
          "Emergencies demand directive leadership — brief orders, named roles and repeat-back communication — because discussion and delay cost blood. Feedback and reflection come afterwards.",
        courseSlug: "leadership-management",
      },
      {
        topic: "Leadership Styles",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is laissez-faire leadership particularly dangerous in maternity care?",
        options: [
          "It motivates staff too strongly and causes burnout",
          "It works well in emergencies but fails on the postnatal ward",
          "The team receives no direction exactly where delay costs lives — emergencies and birth need clear coordination",
          "It only fails with senior staff who dislike autonomy",
        ],
        correctIndex: 2,
        explanation:
          "Laissez-faire leaves the team rudderless precisely where minutes matter — birth and its emergencies punish absent leadership quickly. Autonomy is valuable, but within a structured, supervised service.",
        courseSlug: "leadership-management",
      },
      {
        topic: "Leadership Styles",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A newly qualified midwife, competent but new to your unit, works alongside a final-year student on your shift. What does situational leadership suggest?",
        options: [
          "Match your style to each person and the task — direct the student closely, coach the new midwife, and command only if emergency strikes",
          "Use one identical style with both so nobody feels treated differently",
          "Delegate fully to the student so she learns independence early",
          "Supervise neither, to build their confidence through trust",
        ],
        correctIndex: 0,
        explanation:
          "Situational leadership adapts directness to experience and risk: the student needs close direction, the new midwife needs coaching with space, and emergencies pull everyone briefly into command mode.",
        courseSlug: "leadership-management",
      },
    ],
    flashcards: [
      {
        topic: "Leadership Styles",
        front: "Which leadership style belongs in an obstetric emergency, and what does it look like?",
        back: "Commanding — the emergency named aloud, roles assigned, brief instructions, closed-loop repeat-back, one leader. Debrief into coaching afterwards.",
      },
      {
        topic: "Leadership Styles",
        front: "What is situational leadership?",
        back: "Matching your style to the person and the moment — direct beginners, coach the competent, delegate the expert, and command only when the situation demands it.",
      },
      {
        topic: "Leadership Styles",
        front: "Why can't maternity care carry laissez-faire leadership?",
        back: "Because birth emergencies punish absent leadership within minutes — the team drifts exactly when coordination saves lives.",
      },
    ],
    sources: [
      {
        organization: "Royal College of Obstetricians and Gynaecologists",
        title: "Good Practice Series: Leadership in Obstetric Emergencies",
        note: "Role allocation and team leadership in crises. Verify current edition on the RCOG website.",
      },
      {
        organization: "Agency for Healthcare Research and Quality",
        title: "TeamSTEPPS: Team Strategies and Tools to Enhance Performance and Patient Safety",
        year: "2023",
        url: "https://www.ahrq.gov/teamstepps-program/index.html",
        note: "Command authority and closed-loop communication tools. Check for the latest version.",
      },
      {
        organization: "Elsevier",
        title: "Myles Midwifery (17th edition)",
        year: "2021",
        note: "Professional issues — leading care. Educational source — verify current edition.",
      },
    ],
  },
  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "leadership-management",
    moduleTitle: "Leading Teams",
    lessonTitle: "Leading the Maternity Team",
    description:
      "Motivating, resolving and directing — the everyday leadership of a busy unit. Huddles, handovers, honest feedback and a ward where anyone can speak up.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the daily rituals of a safe team — briefing, structured handover and debriefing.",
      "Explain how early, private conflict resolution and psychological safety protect women from error.",
      "Apply SBAR and closed-loop communication in your own shift leadership.",
    ],
    tags: ["team", "leadership", "sbar", "huddle", "conflict", "psychological safety"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Between the emergencies, maternity care is a relay: one shift hands the ward to the next, and any dropped baton lands on a woman's chart. Leading the team day to day is about the small rituals that keep hands connected — the morning huddle, the structured handover, the honest word after a hard night.\n\nThis lesson covers the working tools of team leadership: allocating tasks, handing over with SBAR, resolving conflict before it fester, motivating people who are tired, and building a ward where the most junior person present can still say 'I am worried about her'.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Open the day with a **huddle** — five minutes standing: who is on, which beds hold which risks, what is expected today, who leads emergencies. It converts eight individuals into one team. Hand over with **SBAR** — Situation, Background, Assessment, Recommendation — so the next midwife receives a story with a spine, and use closed-loop communication for verbal instructions: she repeats the drug and dose back before it is given. Allocate tasks to skill and acuity: the weakest pair should not hold the high-risk labour alone. Guard breaks and fairness like clinical tools, because fatigue is a clinical risk.\n\nWhen conflict brews — and on any busy ward it will — act early and privately: describe the behaviour and its effect on women rather than the person's character, listen more than you speak, and agree how the next shift will work. Unresolved conflict does not stay in the staff room; it leaks into missed information and near misses. Feed motivation with specificity: 'Ama, your calm on that drip last night saved the transfer' outlives a generic 'well done'. And build **psychological safety** deliberately: thank anyone who raises an alarm, however junior, and hold a hot debrief after every emergency — five minutes on what went well, what to change, and who needs support. Teams that can speak up catch mistakes before they reach mothers.",
      },
      {
        type: "clinical_pearl",
        body: "Praise in public with the name and the deed; correct in private with the behaviour and its risk. And after every emergency, spend five minutes on the hot debrief — the cheapest quality improvement tool you own.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Two colleagues have not spoken since a disagreement over a handover three days ago. On your morning huddle, a student quietly says she thinks the woman in bed 4 is bleeding more than the chart suggests — and one of the feuding pair rolls her eyes. The other heads to check alone, without telling anyone.\n\nAs shift leader, what do you do in the next ten minutes?\n\nAnswer: First the woman: attend bed 4 with the student and the colleague — two assessors, openly, validating the student for speaking. Once the woman is safe, close the loop with both colleagues privately, separate or together: name what silence and solo checks do to safety, and agree today's communication rules. If the feud persists, escalate to the unit head. The huddle tomorrow can revisit 'we check together, we say thank you'.",
      },
      {
        type: "memory_trick",
        body: "Run every shift as a relay: HUDDLE at the start, SBAR at every baton pass, DEBRIEF at the storm. And keep the lane rule sacred — concern travels upward instantly, correction travels sideways privately.",
      },
      {
        type: "summary",
        body: "- Huddle to open the day: people, risks, roles — eight individuals become one team.\n- Hand over with SBAR and repeat back verbal orders before acting on them.\n- Resolve conflict early and privately, about behaviour and its risks, never character.\n- Motivate with specifics and fairness; fatigue and favouritism are clinical risks.\n- Build psychological safety: any voice can raise the alarm, and every emergency gets its hot debrief.",
      },
    ],
    questions: [
      {
        topic: "Leading the Maternity Team",
        type: "MCQ",
        difficulty: "Easy",
        stem: "In a structured handover, what does SBAR stand for?",
        options: [
          "Symptoms, Bloods, Assessment, Response",
          "Situation, Background, Action, Review",
          "Situation, Background, Assessment, Recommendation",
          "Story, Background, Assessment, Referral",
        ],
        correctIndex: 2,
        explanation:
          "SBAR hands over a story with a spine — what is happening, the background, your assessment, and what you recommend next. The others are inventions.",
        courseSlug: "leadership-management",
      },
      {
        topic: "Leading the Maternity Team",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Two colleagues have stopped speaking to each other, and you notice information being missed between them on the ward. As shift leader, what should you do?",
        options: [
          "Ignore it — personal matters are private and will resolve themselves",
          "Discuss it openly at the morning huddle so everyone learns from it",
          "Report them both to the district director immediately",
          "Address it early and privately with both, focusing on the behaviour, its risk to women and how communication will work this shift",
        ],
        correctIndex: 3,
        explanation:
          "Conflict on a maternity ward is a safety issue: silence between carers becomes missed information. Early, private, behaviour-focused resolution — with escalation if it persists — protects the women.",
        courseSlug: "leadership-management",
      },
      {
        topic: "Leading the Maternity Team",
        type: "MCQ",
        difficulty: "Easy",
        stem: "During a busy shift, a student says she is worried that a postnatal mother is bleeding more than expected. What does a psychologically safe team do?",
        options: [
          "Tells her to wait until the ward round",
          "Asks her to prove it first with a full assessment alone",
          "Reminds her that seniors decide what matters",
          "Takes the concern seriously, checks the woman together and thanks the student for speaking up",
        ],
        correctIndex: 3,
        explanation:
          "Psychological safety means any voice can raise the alarm and be heard. Teams that thank juniors for speaking up catch haemorrhages earlier — teams that silence them meet them later.",
        courseSlug: "leadership-management",
      },
    ],
    flashcards: [
      {
        topic: "Leading the Maternity Team",
        front: "What does SBAR stand for, and when do you use it?",
        back: "Situation, Background, Assessment, Recommendation — the structure for every handover and every call-ahead referral.",
      },
      {
        topic: "Leading the Maternity Team",
        front: "What is a hot debrief?",
        back: "A five-minute team review immediately after an emergency: what went well, what we would change, and who needs support — the cheapest quality improvement tool you own.",
      },
      {
        topic: "Leading the Maternity Team",
        front: "How do you resolve conflict between colleagues safely?",
        back: "Early and privately; describe the behaviour and its effect on women, not the person's character; listen; agree how the next shift will run; escalate if it persists.",
      },
    ],
    sources: [
      {
        organization: "Agency for Healthcare Research and Quality",
        title: "TeamSTEPPS: Team Strategies and Tools to Enhance Performance and Patient Safety",
        year: "2023",
        url: "https://www.ahrq.gov/teamstepps-program/index.html",
        note: "SBAR, huddles, closed-loop communication and mutual support. Check for the latest version.",
      },
      {
        organization: "World Health Organization",
        title: "WHO Patient Safety Curriculum Guide: Multi-Professional Edition",
        year: "2011",
        url: "https://www.who.int/publications/i/item/9789241501950",
        note: "Teamwork, communication and what-if reflection exercises. Verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Myles Midwifery (17th edition)",
        year: "2021",
        note: "Leadership and communication chapters. Educational source — verify current edition.",
      },
    ],
  },
  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "leadership-management",
    moduleTitle: "Leading Teams",
    lessonTitle: "Supervising and Mentoring Others",
    description:
      "Passing on what you've learned — supervision that grows safe practitioners. How to watch without hovering, feedback that lands, and a signature you protect.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe direct and indirect supervision and the accountability that travels with your signature.",
      "Explain the brief-observe-debrief cycle and the SBI pattern for feedback.",
      "Apply the correct course when a student is struggling or unsafe — honesty, documentation and escalation.",
    ],
    tags: ["supervision", "mentorship", "feedback", "students", "accountability"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Final semester: soon, students will arrive on your ward looking at you the way you once looked at your seniors. Supervision is where the profession renews itself — and it is also a legal and clinical duty, because a student's hands work under your licence and your judgement.\n\nThis lesson is about doing it well: deciding how closely to watch, giving feedback that changes practice rather than bruises it, and knowing what to do when a student is simply not safe — including the hardest rule of all, protecting your signature.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Direct supervision** means you watch the act itself; **indirect supervision** means you are reachable and check afterwards. The choice follows risk and readiness: a first catheterisation is watched; a competence already assessed is checked, not hovered over. Either way, accountability stays with you. Structure every supervised act as **brief — observe — debrief**: agree the goal, watch without rescuing at your comfort line (intervene at the safety line), then debrief. Feedback follows **SBI** — Situation, Behaviour, Impact: 'At the 8 am check (situation), you charted a pulse you had not counted (behaviour), so we nearly missed her bleeding (impact)' — then ask her view and agree the change. Good feedback is soon, private, specific and two-way; praise belongs in public, correction never does.\n\nWhen a student struggles, honesty is the kindness: early clear feedback, a written learning plan with dates, and a call to her college tutor — not a quiet hope that the next placement will fix it. And the rule that keeps women safe: **never sign competence you have not seen** — your signature is a professional promise to the next team that this midwife can do this act alone. Mentoring reaches beyond a shift — questions instead of answers, challenge with warmth, sponsorship across years. Be the supervisor you needed at 2 am.",
      },
      {
        type: "clinical_pearl",
        body: "Intervene at the safety line, not at your comfort line — a student who is never allowed to struggle never learns judgement, and one allowed to drown learns only fear. And a signature given as a gift is theft: it steals safety from the next mother.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A student in her final placement charted a pulse of 76 for a post-caesarean mother — but a colleague saw her take the mother's wrist for barely five seconds. The mother is well, but the pattern has happened twice now, and the student avoids you since the last correction.\n\nWhat do you say to her, and in what pattern?\n\nAnswer: Somewhere private, use SBI: at the 8 am check the pulse was charted without a full minute counted — twice now — so a rising pulse could hide behind the number, exactly what this ward watches for after caesarean. Then listen: is she rushed, afraid of looking slow, overloaded? Agree the plan — count a full minute, every time, and show you one chart daily — and tell her plainly that competence cannot be signed on numbers she has not truly taken. Involve her tutor early. Honest feedback, offered with respect, is the kindest thing she can receive this term.",
      },
      {
        type: "memory_trick",
        body: "BOD: Brief, Observe, Debrief — every supervised act is a lesson planned backwards. And feedback goes SBI: Say what you SAW (situation, behaviour), name what it DID (impact) — then ask, then agree.",
      },
      {
        type: "summary",
        body: "- Direct supervision for new or high-risk acts, indirect for assessed competence — accountability stays with you either way.\n- Structure supervision as brief, observe, debrief; intervene at the safety line, not your comfort line.\n- Feedback with SBI — situation, behaviour, impact — soon, privately, specifically, two-way.\n- A struggling student needs honest early feedback, a written learning plan and her tutor involved.\n- Never sign competence you have not seen; mentoring extends beyond the shift into years.",
      },
    ],
    questions: [
      {
        topic: "Supervising and Mentoring Others",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A student midwife performs a vaginal examination under your supervision. Who is accountable for the assessment and its documentation?",
        options: [
          "The student alone, since she performed the examination",
          "You, the supervising midwife — accountability follows supervision",
          "Whoever reads the note at the next shift",
          "The college, because it placed the student with you",
        ],
        correctIndex: 1,
        explanation:
          "A student's clinical acts travel under her supervisor's licence and judgement. Accountability sits with you — which is why how closely you supervise is itself a clinical decision.",
        courseSlug: "leadership-management",
      },
      {
        topic: "Supervising and Mentoring Others",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which piece of feedback follows the SBI pattern?",
        options: [
          "'You are careless with partographs.'",
          "'You are doing well overall — keep it up.'",
          "'At the 8 am check you charted a pulse without counting it, so we nearly missed her bleeding — how did that happen, and what will you change?'",
          "'I have told your tutor about your performance.'",
        ],
        correctIndex: 2,
        explanation:
          "SBI names the situation, the observable behaviour and its impact, then opens a two-way conversation. Labels, vague praise and escalation behind her back change nothing and teach nothing.",
        courseSlug: "leadership-management",
      },
      {
        topic: "Supervising and Mentoring Others",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A student remains unsafe in practice despite repeated feedback. What is the correct course of action?",
        options: [
          "Be honest early, set a documented learning plan, involve her college tutor — and never sign competence you have not seen",
          "Sign her final assessment to protect her morale and her career",
          "Let her pass and hope the first employer fixes the problem",
          "Stop supervising her so the responsibility passes elsewhere",
        ],
        correctIndex: 0,
        explanation:
          "Honest, documented, escalated support is the kind response — and the safe one. A gift signature is theft of safety from the next mother, and abandoning supervision merely relocates the risk.",
        courseSlug: "leadership-management",
      },
    ],
    flashcards: [
      {
        topic: "Supervising and Mentoring Others",
        front: "Direct versus indirect supervision — when do you use each?",
        back: "Direct (you watch the act) for new or high-risk skills; indirect (reachable, check after) for already-assessed competence. Accountability stays with you in both.",
      },
      {
        topic: "Supervising and Mentoring Others",
        front: "What does SBI feedback stand for?",
        back: "Situation, Behaviour, Impact — name when, what was done, and what it risked; then ask her view and agree the change. Soon, private, specific, two-way.",
      },
      {
        topic: "Supervising and Mentoring Others",
        front: "Why must you never sign competence you have not seen?",
        back: "Your signature is a professional promise to the next team and the next mother that this midwife can do the act alone — given as a favour, it becomes a safety risk.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Midwives",
        note: "Delegation, supervision and scope of practice. Obtain the current version from NMC Ghana.",
      },
      {
        organization: "World Health Organization",
        title: "WHO Patient Safety Curriculum Guide: Multi-Professional Edition",
        year: "2011",
        url: "https://www.who.int/publications/i/item/9789241501950",
        note: "Supervision, feedback and learning from error. Verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Myles Midwifery (17th edition)",
        year: "2021",
        note: "Education and mentorship chapters. Educational source — verify current edition.",
      },
    ],
  },
  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "leadership-management",
    moduleTitle: "Managing Services",
    lessonTitle: "Running the Unit: A Manager's View",
    description:
      "Rosters, beds and throughput — the management reality behind good care. The daily rhythm that keeps a maternity unit safe and moving.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the daily management rhythm of a maternity unit — floor walk, huddle, flow, stock and data.",
      "Explain triage, bed flow and rostering principles that protect quality under pressure.",
      "Apply the escalation and stock-discipline habits that prevent midnight failures.",
    ],
    tags: ["management", "operations", "triage", "stock management", "rostering"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Good clinical care happens inside a machine — beds, rosters, drug stocks, theatre lists, data forms — and when the machine stutters, women feel it before anyone says a word. This lesson takes you to the manager's chair: the view from behind the desk that is really taken on your feet, walking the ward.\n\nYou will follow the shape of a managed day, learn the flow and triage principles that keep a busy unit moving, and meet the quiet disciplines — stock cards, first-expire-first-out, escalation notes — that separate a unit that runs from one that survives by luck.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Open the day with the **night report and a floor walk** — bed by bed, woman by woman — then a huddle to set roles and risks. Manage flow deliberately: triage every arrival by urgency, not arrival order; plan discharges early to free beds; coordinate with theatre and the referral hospital instead of competing with them. Build rosters around 24/7 senior cover, skill mix, fatigue limits and predictable surges — market days, festivals, rainy-season roads — a plan that ignores market Monday is a fantasy. Stocks follow discipline: cards with minimum and maximum levels, monthly counts, **first-expire-first-out** so no ampoule dies on the shelf, and weekly counts of consumables — the empty shelf is always discovered at midnight.\n\nData closes the loop: daily numbers feed the registers, the registers feed DHIMS, and DHIMS feeds the district's decisions — a unit that does not count itself cannot be defended or resourced. Track your monthly indicators (deliveries, referrals, partograph use, haemorrhage, stillbirth) and let them argue for you. Above all, be visible and be honest: the manager who only manages from the office manages yesterday's ward. When the day outruns you, escalate early to the district with the risk written down — a documented shortage becomes a decision; an undocumented one becomes a secret that waits to become an emergency.",
      },
      {
        type: "clinical_pearl",
        body: "Walk the floor every morning, and count the boxes every Monday — the empty shelf and the brewing crisis are both found first by feet, not paperwork. And whatever outruns you, write the risk down: a documented shortage becomes the district's decision; a silent one becomes tonight's emergency.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At 7 pm the night midwife reports: two staff on sick leave, three women in labour, one awaiting theatre, and only four ampoules of magnesium sulfate in the cupboard, with a known pre-eclamptic woman expected to deliver tonight.\n\nAs the manager, what are your first moves?\n\nAnswer: People and drugs, in that order of thinking but together in action — redeploy staff to guarantee one senior and one junior on the labour ward, borrowed from postnatal with a documented handover; alert theatre and the regional hospital about the possible pre-eclampsia; and confirm your magnesium supply with the pharmacy and a neighbouring facility before midnight, not after. Inform the district on-call manager and record the gap in the risk book; then set the night's priorities aloud at handover.",
      },
      {
        type: "memory_trick",
        body: "A unit runs on SSS: Staff on the floor, Supplies on the shelf, Systems on the wall — check all three before the day checks you. Triage the door, count the boxes, walk the floor, write the risk.",
      },
      {
        type: "summary",
        body: "- Start each day with the night report, a floor walk and a huddle that names roles and risks.\n- Triage by urgency rather than arrival order; plan discharges and theatre time to keep flow moving.\n- Roster for 24/7 senior cover, true skill mix and known surges like market days.\n- Stock discipline: cards, minimum-maximum levels, monthly counts and first-expire-first-out.\n- Count the unit in data (DHIMS, monthly indicators), and escalate shortages in writing, early.",
      },
    ],
    questions: [
      {
        topic: "Running the Unit",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Your stock room holds three batches of oxytocin with different expiry dates. Which principle guides dispensing?",
        options: [
          "First-arrived, first-used, regardless of expiry",
          "Use the newest stock first and keep the older batches as spare",
          "Use stock in whatever order the shelf happens to be stacked",
          "First-expire, first-out — the batch expiring soonest leaves the shelf first",
        ],
        correctIndex: 3,
        explanation:
          "First-expire-first-out ensures no ampoule dies unused on the shelf — the ampoule that expires tomorrow is the one that should be drawn up today, if it is still potent and properly stored.",
        courseSlug: "leadership-management",
      },
      {
        topic: "Running the Unit",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Three women arrive together: one in active labour, one with fresh vaginal bleeding, one for a routine postnatal check. What does triage mean here?",
        options: [
          "First-come, first-served, in strict order of arrival",
          "Send all three to the general outpatient queue",
          "Rank by urgency — the bleeding woman is seen first, the labouring mother next, the routine check waits briefly",
          "Ask the three women to agree among themselves who is seen first",
        ],
        correctIndex: 2,
        explanation:
          "Triage means rapid ranking by clinical urgency: haemorrhage outranks labour, which outranks routine review. Arrival order is a queue, not a clinical judgement — and queues miss bleeding.",
        courseSlug: "leadership-management",
      },
      {
        topic: "Running the Unit",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "The night shift reports two staff on sick leave with a full labour ward. As manager, what is the safest first action?",
        options: [
          "Keep it quiet and hope the night survives",
          "Escalate at once, redeploy staff to cover labour and postnatal care, and document the risk",
          "Cancel all postnatal checks for 24 hours without informing anyone",
          "Leave the remaining staff to decide individually whether to work",
        ],
        correctIndex: 1,
        explanation:
          "A staffing gap is a clinical risk that is escalated immediately and documented, with coverage prioritised to labour and immediate postnatal care. Silence and self-selection are how wards drift into emergencies.",
        courseSlug: "leadership-management",
      },
    ],
    flashcards: [
      {
        topic: "Running the Unit",
        front: "What is the FEFO rule for drug stock?",
        back: "First-expire, first-out — the batch with the soonest expiry date is used first, so nothing dies on the shelf while fresher stock goes out.",
      },
      {
        topic: "Running the Unit",
        front: "What does the daily management rhythm of a maternity unit look like?",
        back: "Night report and floor walk, huddle for roles and risks, triage and flow management through the day, stock and theatre coordination, and data into the registers and DHIMS.",
      },
      {
        topic: "Running the Unit",
        front: "Why must shortages be escalated in writing?",
        back: "A documented shortage becomes the district's decision and can be resourced; an undocumented one stays a secret until it becomes a midnight emergency.",
      },
    ],
    sources: [
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "Standards for service organisation, referral and record keeping. Educational reference — verify the current edition with your facility.",
      },
      {
        organization: "Ghana Health Service",
        title: "District Health Information Management System (DHIMS) reporting requirements",
        note: "Routine data reporting for maternity units. Verify current version with your district health directorate.",
      },
      {
        organization: "Elsevier",
        title: "Myles Midwifery (17th edition)",
        year: "2021",
        note: "Midwifery management and service organisation chapters. Educational source — verify current edition.",
      },
    ],
  },
  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "leadership-management",
    moduleTitle: "Managing Services",
    lessonTitle: "Quality Improvement in Maternity Care",
    description:
      "Audit cycles and change projects — making care measurably better. Quality improvement without blame, from partograph counts to PDSA cycles.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the audit cycle and the PDSA approach to testing change.",
      "Explain how maternal and perinatal death surveillance and response turns tragedy into system learning without blame.",
      "Apply indicator selection and a small improvement project to your own unit.",
    ],
    tags: ["quality improvement", "audit", "pdsa", "mpdsr", "indicators"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Quality improvement sounds like something done to maternity units by people with laptops. In truth it is what midwives have always done informally — 'we keep losing women at referral, why?' — made disciplined. Instead of a story, you get a cycle; instead of a blame, a system.\n\nThis lesson covers the audit cycle, PDSA testing, and Ghana's maternal and perinatal death surveillance and response — the machinery by which a unit learns from its worst days and proves its better ones with numbers.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The **audit cycle** is a circle with five stations: set the standard (from WHO or national guidance — 'every labouring woman has a completed partograph'), measure current practice, compare practice with the standard, act on the gaps, then **re-audit** to close the loop. The re-audit is what separates improvement from a photograph of failure. When the change itself needs testing, use **PDSA**: plan a small trial, do it on one shift or one station, study the numbers, and act on what worked before spreading it. Small tests survive politics; grand launches die in them.\n\n**MPDSR** — maternal and perinatal death surveillance and response — reviews every maternal and perinatal death, seeking avoidable factors across the whole journey: the family's three delays, the facility, the referral chain. Its soul is **no blame**: the moment review becomes punishment, the reports become fiction, and the next death goes unwritten. Choose indicators you can count honestly from existing registers — partograph completion, uterotonics within one minute, magnesium sulfate given, referrals arriving with notes — and study them monthly. Two rules make QI live: involve the people who do the work, and feed the numbers back to them. A chart on the wall that the team itself fills in moves practice more than any circular from the region.",
      },
      {
        type: "clinical_pearl",
        body: "Measure only what you can explain in one sentence — 'we count partographs so no labour goes unwatched'. And every indicator you own, share with the team monthly: numbers posted on the ward wall change behaviour faster than numbers filed in the office.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Your monthly data shows partographs are fully completed for only 40 percent of labours. The senior midwives blame workload; the juniors blame the partograph forms running out mid-shift. You volunteer to lead the improvement.\n\nWalk through your first six weeks: what do you do first, and how will you know it worked?\n\nAnswer: First make the problem visible and honest: count again yourself, by shift and by station, and share the breakdown with the team — audit with them, not at them. Diagnose the gaps (forms genuinely unavailable at night; no clock at the bedside; midnight entries back-filled). Then PDSA the fixes small: pre-stocked partograph packs with a pen and the alert line drawn, trialled on one station for two weeks. Study the numbers, keep what worked, and spread station by station. At six weeks, re-audit: the cycle closes only when the new figure is measured — and shared.",
      },
      {
        type: "memory_trick",
        body: "PDSA: Plan a small test, Do it, Study the numbers, Act on what worked — then spread it. And remember the circle's rule: audit without re-audit is just a photograph of failure.",
      },
      {
        type: "summary",
        body: "- Audit cycle: set the standard, measure, compare, act, re-audit — the last step closes the loop.\n- PDSA tests change small and early: one station, two weeks, then spread what the numbers bless.\n- MPDSR reviews every death for avoidable factors without blame — blame makes reports fiction.\n- Choose countable indicators from existing registers and study them monthly.\n- Involve the front line and post results where the team works — numbers on the wall change practice.",
      },
    ],
    questions: [
      {
        topic: "Quality Improvement",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Put the audit cycle in its correct order.",
        options: [
          "Change practice, set a standard, measure, compare",
          "Measure, change, set a standard, re-measure",
          "Compare, set a standard, change, measure",
          "Set the standard, measure current practice, compare with the standard, act on gaps, re-audit",
        ],
        correctIndex: 3,
        explanation:
          "The cycle begins with an explicit standard, then measures real practice against it, acts on the gaps, and re-audits to prove the change held. Skipping the re-audit leaves the loop open.",
        courseSlug: "leadership-management",
      },
      {
        topic: "Quality Improvement",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the core purpose of maternal and perinatal death surveillance and response (MPDSR)?",
        options: [
          "To identify the staff member responsible for each death",
          "To learn without blame — find the avoidable factors, act on them and monitor the response",
          "To complete national statistics forms for the ministry",
          "To protect the facility from media attention",
        ],
        correctIndex: 1,
        explanation:
          "MPDSR is a learning system: it traces avoidable factors across the family, community, facility and referral chain, then drives and tracks the response. The moment it seeks culprits, honest reporting dies.",
        courseSlug: "leadership-management",
      },
      {
        topic: "Quality Improvement",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Your partograph completion is 40 percent. You decide to test pre-packed partograph packs on one station for two weeks before rolling out ward-wide. What method is this?",
        options: [
          "A randomised controlled trial",
          "A full policy change with immediate effect",
          "A PDSA cycle — plan, do, study, act on a small scale before spreading",
          "A disciplinary measure for the night staff",
        ],
        correctIndex: 2,
        explanation:
          "Testing one change, in one place, for a short time, then studying the result before spreading is exactly PDSA. It is deliberately smaller than a trial and safer than a grand launch.",
        courseSlug: "leadership-management",
      },
    ],
    flashcards: [
      {
        topic: "Quality Improvement",
        front: "Name the five stations of the audit cycle.",
        back: "Set the standard, measure current practice, compare with the standard, act on the gaps, re-audit to close the loop.",
      },
      {
        topic: "Quality Improvement",
        front: "What does PDSA stand for, and what scale does it work at?",
        back: "Plan, Do, Study, Act — a small test of change (one station, one fortnight) whose numbers decide whether you spread it.",
      },
      {
        topic: "Quality Improvement",
        front: "Why does MPDSR insist on no blame?",
        back: "Blame makes reviews punitive and reports fictional — deaths go unreported and the avoidable factors stay hidden. No blame keeps the system honest enough to learn.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Making Every Baby Count: Audit and Review of Stillbirths and Neonatal Deaths",
        year: "2016",
        note: "Guide to setting up audit and responding to findings. Educational reference — verify current WHO guidance.",
      },
      {
        organization: "Institute for Healthcare Improvement",
        title: "Science of Improvement: How to Improve",
        url: "https://www.ihi.org/resources/Pages/HowtoImprove/default.aspx",
        note: "The PDSA cycle and model for improvement. Educational source — verify current version.",
      },
      {
        organization: "World Health Organization",
        title: "Standards for Improving Quality of Maternal and Newborn Care in Health Facilities",
        year: "2016",
        note: "Quality statements and measurable indicators for maternity services. Educational reference — verify current WHO guidance.",
      },
    ],
  },
  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "leadership-management",
    moduleTitle: "Managing Services",
    lessonTitle: "Staffing and Resource Decisions",
    description:
      "Nurses, drugs and equipment on limited budgets — the hard arithmetic of management. Who covers the night, what you buy first, and how to argue upward with data.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the principles of safe staffing — skill mix, 24/7 senior cover, workload and acuity.",
      "Explain how to prioritise resources on a limited budget, and why consumables outrank gadgets.",
      "Apply the escalation ladder when staffing or supplies fall below safe levels.",
    ],
    tags: ["resources", "staffing", "skill mix", "budgeting", "escalation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Some of the hardest decisions in maternity care are not clinical at all: with six midwives, one budget line and three hundred expected births, who works the night of the festival, and which missing item goes on the requisition? UNFPA's State of the World's Midwifery 2021 counts Ghana among the countries short of the midwives it needs — so scarcity is not an occasional crisis; it is the working environment.\n\nThis lesson is about the arithmetic you will actually face: staffing principles that protect safety with the people you have, resource choices that save the most lives per cedi, and the discipline of escalating upward with evidence instead of enduring in silence.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Safe staffing rests on **skill mix**: every shift blends senior and junior, so supervision and experience never leave the building, and 24/7 senior cover is protected before anything else is planned. Workload counts births and acuity, not just bodies — a labouring woman with pre-eclampsia is two patients of work in one bed. Task sharing has boundaries: a community health officer can support antenatal contacts under supervision; birth itself belongs with a skilled birth attendant. When the roster falls short, the ladder is fixed: never leave the labour ward uncovered, redeploy from lower-risk areas, call the on-call manager and district, postpone non-urgent services, and document the shortfall and its risk.\n\nOn resources, buy what stops bleeding before anything that beeps: uterotonics, IV fluids, catheters, partographs, gloves and magnesium sulfate are the equipment of survival, and their stock-outs kill quietly. Discipline the pipeline with stock cards, minimum-maximum levels, monthly counts and first-expire-first-out; budget for maintenance of the suction and generator, not only purchases. And when the budget is simply too small, argue with data: your monthly indicators and the district's referral numbers are a language the directorate understands. A manager who says 'we had three near-misses when the oxytocin ran out' is heard; one who says 'we need more things' is not.",
      },
      {
        type: "clinical_pearl",
        body: "When you must choose, buy what stops bleeding and fits in a fist before anything with a screen. And never spend the senior cover: the night shift's experienced midwife is the single most expensive item you will be tempted to save on.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Your quarterly allocation arrives. It can cover either a new desktop computer for the office or a six-month buffer of oxytocin, catheters and partograph packs — plus one refresher for two midwives. The records clerk lobbies hard for the computer, and the DHIMS reporting genuinely needs one.\n\nWhat do you choose, and how do you justify it?\n\nAnswer: The consumables and the training come first: oxytocin prevents the haemorrhage no computer can treat, and the partograph is the single cheapest life-saving tool in the building. Justify it in writing with your own data — last year's postpartum haemorrhage figures and any stock-out days — so the district sees the risk, not a preference. For the computer, escalate a documented request: a unit that can show its numbers is harder to refuse, and sometimes gets both.",
      },
      {
        type: "memory_trick",
        body: "Cover the floor before you polish the ceiling: a warm, skilled body at the labour ward door beats a new machine in the office. Staff on the floor, supplies on the shelf — then screens.",
      },
      {
        type: "summary",
        body: "- Safe staffing = skill mix: senior and junior on every shift, 24/7 senior cover protected first.\n- Count workload by acuity, not just beds; birth itself stays with a skilled attendant.\n- When short, follow the ladder: cover labour first, redeploy, escalate to district, document the risk.\n- Buy consumables that save lives — uterotonics, fluids, partographs, catheters — before gadgets.\n- Argue for resources with your own data: near-misses and stock-out days speak louder than wishes.",
      },
    ],
    questions: [
      {
        topic: "Staffing and Resources",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What does 'skill mix' mean when planning a maternity duty roster?",
        options: [
          "Employing only the most senior midwives the facility can afford",
          "Rotating every staff member through every unit each month",
          "Combining senior and junior staff on every shift so experience and supervision are always present",
          "Matching midwives to mothers of similar age and background",
        ],
        correctIndex: 2,
        explanation:
          "Skill mix guarantees that every shift carries both competence and supervision — a ward of only juniors or only seniors wastes one and endangers the other. One style of staff cannot cover the night safely.",
        courseSlug: "leadership-management",
      },
      {
        topic: "Staffing and Resources",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You can fund only one item this quarter. Which purchase aligns best with maternal safety on a limited budget?",
        options: [
          "Restocking uterotonics, IV fluids, catheters and partographs — the consumables that stop bleeding and guide labour",
          "A decorative renovation of the waiting area",
          "A new office computer for personal records",
          "A plaque listing the facility's achievements",
        ],
        correctIndex: 0,
        explanation:
          "Consumables carry the highest lives-saved per cedi: uterotonics prevent haemorrhage and the partograph detects the labour going wrong. Renovations and office equipment never resuscitate anyone.",
        courseSlug: "leadership-management",
      },
      {
        topic: "Staffing and Resources",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "The night shift is dangerously short of midwives. Which response is correct?",
        options: [
          "Close the labour ward silently and redirect women to the regional hospital without notice",
          "Ask one midwife to manage everything alone to demonstrate commitment",
          "Wait for the morning meeting to raise the problem",
          "Escalate immediately to the on-call manager and district, prioritise essential services and document the decision and its risks",
        ],
        correctIndex: 3,
        explanation:
          "Dangerous short-staffing is escalated at once and in writing, with cover prioritised to labour and immediate postnatal care. Quiet closure, heroic solo cover and delayed reporting all leave women exposed overnight.",
        courseSlug: "leadership-management",
      },
    ],
    flashcards: [
      {
        topic: "Staffing and Resources",
        front: "What two staffing features must be protected first in any roster?",
        back: "Skill mix — senior and junior together on every shift — and guaranteed 24/7 senior cover.",
      },
      {
        topic: "Staffing and Resources",
        front: "What is the first rule of staffing escalation when the night is short?",
        back: "The labour ward is never left uncovered: redeploy from lower-risk areas, call the on-call manager and district, postpone non-urgent services, and document the shortfall and its risk.",
      },
      {
        topic: "Staffing and Resources",
        front: "Why do consumables outrank equipment purchases on a tight budget?",
        back: "Uterotonics, fluids, catheters and partographs directly stop the killers — haemorrhage and unrecognised obstructed labour; no screen or sign has ever resuscitated a mother.",
      },
    ],
    sources: [
      {
        organization: "UNFPA, WHO, ICM",
        title: "State of the World's Midwifery 2021",
        year: "2021",
        note: "Global and national midwife workforce estimates including Ghana. Educational reference — verify current data.",
      },
      {
        organization: "World Health Organization",
        title: "Global Strategy on Human Resources for Health: Workforce 2030",
        year: "2016",
        note: "Staffing, retention and skill-mix policy framework. Educational reference — verify current guidance.",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "Staffing standards and service organisation for maternity care. Educational reference — verify current edition.",
      },
    ],
  },
  // ── 12 ─────────────────────────────────────────────────────
  {
    courseSlug: "leadership-management",
    moduleTitle: "Your Professional Journey",
    lessonTitle: "Planning Your Professional Development",
    description:
      "Specialisation, further study and career paths — designing your future deliberately. CPD, portfolios and the five-year plan you write before life writes it for you.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the CPD obligations attached to practising as a midwife in Ghana and the portfolio that evidences them.",
      "Explain the career paths open to a midwife — specialist clinical practice, public health, education, management and research.",
      "Apply SMART goal setting to build a five-year professional development plan.",
    ],
    tags: ["career", "cpd", "portfolio", "smart goals", "specialisation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "This is your last semester, and the question under every lecture is the same: what next? Left unplanned, a career drifts — years pass in the same ward, the same skills, while the licence quietly waits for a renewal you are unprepared for. Planned, it compounds: each year adds a skill, a certificate, a contact, a door.\n\nThis lesson gives you the machinery of deliberate growth: the CPD and portfolio that keep you legal and employable, the paths midwives actually take in Ghana, and the five-year plan that turns wishes into diary entries.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Your licence is not a lifetime gift: the **Nursing and Midwifery Council of Ghana** expects documented continuing professional development for renewal — attend and record your courses, in-services and case reviews now, because reconstructing them three years later is misery. Build a **portfolio** as you go: certificates, reflective accounts written in the Gibbs cycle, case logs, appraisals and feedback. A reflection written the morning after a hard night is portfolio gold; one written the week before an interview is costume jewellery.\n\nThe paths themselves branch. Clinical depth runs through the **Ghana College of Nurses and Midwives** membership and fellowship — the specialist midwife of theatre, neonatal or high-risk practice. Public health calls through the MPH and district-level leadership; education through teaching qualifications and tutor posts; management through health administration; research through further degrees and the projects you already know how to design. Short courses stack fast: emergency obstetric care, point-of-care ultrasound, lactation counselling. Join your professional association — the Ghana Registered Midwives Association — because networks carry news of openings before any notice board. Then write the plan in **SMART** ink: specific, measurable, achievable, relevant, time-bound. 'Complete an emergency obstetric care course and lead this unit's drills by December' is a plan; 'become a very good midwife' is a mood.",
      },
      {
        type: "clinical_pearl",
        body: "Write the reflection while the ink is fresh: yesterday's night shift is next month's portfolio entry and next year's promotion evidence. And review your five-year plan each birthday — careers are steered in small corrections, not one grand turning.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A diploma-holding midwife, three years qualified, tells you she feels stuck: the same ward, the same shifts, and no idea what she is working towards. She loves emergency drills but dreads teaching students. Her unit has promised study leave 'next year' for the past two years.\n\nHow will you help her draft the first version of her plan?\n\nAnswer: Start with the evidence she already has — three years of records, a knack for emergencies, a BSc top-up application due in six months — and set SMART steps around them: apply for the top-up this quarter, complete an emergency obstetric care course within the year, ask her officer-in-charge to co-lead one drill monthly, and join the midwives' association now for the network. She logs everything in a portfolio from today, reviews the plan quarterly, and chases the study leave in writing with her unit's support rather than waiting for the promise.",
      },
      {
        type: "memory_trick",
        body: "PD goes SMART: Specific, Measurable, Achievable, Relevant, Time-bound — a goal you cannot diary is a daydream. And the portfolio rule: file the story the morning after, not the interview before.",
      },
      {
        type: "summary",
        body: "- Licence renewal requires documented CPD — record courses and reflections as they happen, not retroactively.\n- Keep a living portfolio: certificates, Gibbs reflections, case logs, appraisals, feedback.\n- Paths branch: Ghana College specialist training, public health, education, management, research — plus short courses and your association's network.\n- Write SMART goals: specific, measurable, achievable, relevant, time-bound.\n- Review the five-year plan yearly; careers are steered by small corrections, not one grand turn.",
      },
    ],
    questions: [
      {
        topic: "Professional Development",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why does the Nursing and Midwifery Council of Ghana require documented continuing professional development?",
        options: [
          "To generate income for the Council through course fees",
          "To rank midwives nationally for promotion",
          "To limit how many midwives can practise in each district",
          "To keep knowledge and skills current so the licence to practise is renewed responsibly",
        ],
        correctIndex: 3,
        explanation:
          "CPD exists so that the midwife who renews her licence can prove her practice is current — guidelines change and skills fade. Check the current requirements directly with NMC Ghana.",
        courseSlug: "leadership-management",
      },
      {
        topic: "Professional Development",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which of these is a SMART professional development goal?",
        options: [
          "To become a very good midwife someday",
          "To study more and work harder in future",
          "To help the unit however I can this year",
          "To complete an emergency obstetric care course and lead the unit's monthly drills by December",
        ],
        correctIndex: 3,
        explanation:
          "SMART goals are specific, measurable, achievable, relevant and time-bound — the December course-and-drills goal names the what, the when and the evidence. The others are moods, not plans.",
        courseSlug: "leadership-management",
      },
      {
        topic: "Professional Development",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What belongs in a professional portfolio?",
        options: [
          "Certificates, reflective accounts, case logs, appraisals and feedback — evidence of your growth",
          "Only your original training certificate",
          "Personal letters unconnected to practice",
          "Photocopies of colleagues' appraisal forms",
        ],
        correctIndex: 0,
        explanation:
          "A portfolio is the documented trail of your development — the records you can show an employer, a Council or a promotion board. One certificate alone freezes you at graduation.",
        courseSlug: "leadership-management",
      },
    ],
    flashcards: [
      {
        topic: "Professional Development",
        front: "What does SMART stand for in goal setting?",
        back: "Specific, Measurable, Achievable, Relevant, Time-bound — a goal you cannot put in a diary is a daydream.",
      },
      {
        topic: "Professional Development",
        front: "What goes into a midwife's portfolio?",
        back: "Certificates, reflective accounts (Gibbs cycle), case logs, appraisals and feedback — written as they happen, not reconstructed before interviews.",
      },
      {
        topic: "Professional Development",
        front: "Name the main career paths open to a midwife in Ghana.",
        back: "Clinical specialisation through the Ghana College of Nurses and Midwives, public health, education, management and research — with short courses and the midwives' association as accelerators.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Continuing Professional Development requirements for licence renewal",
        note: "Mandatory CPD and documentation for practising midwives. Obtain the current requirements directly from NMC Ghana.",
      },
      {
        organization: "Ghana College of Nurses and Midwives",
        title: "Membership and fellowship training programmes",
        note: "Specialist clinical training pathways for midwives. Obtain current programme details from the College.",
      },
      {
        organization: "International Confederation of Midwives",
        title: "Essential Competencies for Basic Midwifery Practice",
        note: "Frames lifelong learning and competency development. Verify the current version with ICM.",
      },
    ],
  },
  // ── 13 ─────────────────────────────────────────────────────
  {
    courseSlug: "leadership-management",
    moduleTitle: "Your Professional Journey",
    lessonTitle: "Becoming a Mentor and Role Model",
    description:
      "The midwife others learn from — the final transformation of your education. Students copy your hands before they copy your notes.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the behaviours that make a midwife worth copying — clinical habits, tone and honesty.",
      "Explain the difference between preceptorship, mentorship and role modelling, and what each owes the learner.",
      "Apply a safe, fair approach when a supervised student makes an error.",
    ],
    tags: ["mentorship", "role model", "teaching", "feedback", "patient safety"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Somewhere ahead of you is a first-year student who will decide what a midwife is by watching you — at 3 am, short-staffed, with a frightened teenager in the bed. She will copy your hand hygiene before your handover technique, and your tone with the poorest woman in the ward before any lecture you ever give.\n\nThis lesson is about that final transformation: from one who is taught to one who teaches — and about surviving it, because the midwife others learn from must stay whole herself.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "A **role model** teaches by existing: gloves, punctuality, how you speak about women who are absent, how you admit a mistake, how you treat the cleaner and the consultant the same. A **preceptor** supervises a learner's daily practice — the brief-observe-debrief cycle you know. A **mentor** walks with someone for years — questions instead of answers, gentle challenge, opened doors. The three roles overlap in one person: you.\n\nTwo disciplines hold it together. First, psychological safety for learners: praise in public, correct in private, normalise the words 'I don't know — let's find out', and let them see you look things up; a student who is afraid hides mistakes, and hidden mistakes reach mothers. Second, the error path: when a student errs, the woman comes first, the error is reported honestly, your supervision takes its share of responsibility, and the debrief happens privately — calm, specific, with a learning plan. The student is also wounded by what she did; treat her as a second victim without ever hiding the report. Protect your own flame: rest, boundaries, a mentor of your own. A hollow midwife lights no one — the torch is passed by hand, and your hand must be steady.",
      },
      {
        type: "clinical_pearl",
        body: "The student remembers your hands longer than your lectures — wash them well, use them gently, and let them be seen doing both. And after every shift you shared, hand over one deliberate lesson: one skill, one story, one honest 'I got that wrong'.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A student, anxious to impress, gives a wrong dose of a drug under your supervision. You catch it within a minute; the woman is unharmed. The student stands frozen, then whispers, 'Please don't report it — I will lose my place.'\n\nWhat do you do, for the woman, the student and the profession?\n\nAnswer: For the woman: reassess completely and document. For the profession: report honestly — an unreported error teaches concealment, and the next woman may meet the same habit. For the student: own your supervisory share aloud, then debrief her privately — what happened, what the system allowed, what she will change — and set a learning plan with her tutor. Hold her tears with respect; a student who sees you report your own share learns integrity, not fear. She whispered to the wrong person for silence, and the right person for help — be both.",
      },
      {
        type: "memory_trick",
        body: "The torch passes hand to hand: teach one skill, admit one limit, praise one deed — every shift. And keep your own flame lit: rest, boundaries, and a mentor of your own.",
      },
      {
        type: "summary",
        body: "- Role models teach by existing: habits, tone, punctuality and how you treat everyone from cleaner to consultant.\n- Preceptorship supervises daily practice; mentorship walks years — questions, challenge, doors opened.\n- Build psychological safety: praise publicly, correct privately, normalise 'I don't know — let's find out'.\n- When a student errs: woman first, honest report, own your supervisory share, private debrief, learning plan.\n- Protect your own flame — rest, boundaries and your own mentor — because hollow midwives light no one.",
      },
    ],
    questions: [
      {
        topic: "Mentor and Role Model",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Research on clinical learning says students on a ward are influenced most by what?",
        options: [
          "The handbook they were issued at orientation",
          "Lectures from their first year",
          "What they watch you actually do — habits, tone and honesty at 3 am included",
          "The end-of-rotation examination",
        ],
        correctIndex: 2,
        explanation:
          "Clinical culture transmits by observation: hand hygiene, respect, punctuality and honesty are copied long before they are taught. You are the curriculum the student reads every shift.",
        courseSlug: "leadership-management",
      },
      {
        topic: "Mentor and Role Model",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A student gives a wrong drug dose under your supervision; you catch it before harm. She begs you not to report it. What is the correct course?",
        options: [
          "Ensure the woman is safe, report the event honestly, own your supervisory share, and debrief the student privately with a learning plan",
          "Let it pass to protect her career and her morale",
          "Report the student and step back from any responsibility yourself",
          "Ask a colleague to document the event under her name instead",
        ],
        correctIndex: 0,
        explanation:
          "The woman comes first, the report follows honestly, and the supervising midwife shares accountability. Concealment teaches concealment — the next error may reach a mother, and the student learns integrity from how you own your part.",
        courseSlug: "leadership-management",
      },
      {
        topic: "Mentor and Role Model",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What best describes the difference between a preceptor and a mentor?",
        options: [
          "There is no difference — the words are interchangeable",
          "A preceptor supervises daily practice and skills for a placement; a mentor walks with the learner over years, challenging and opening doors",
          "A mentor is only for senior managers; preceptors are for students",
          "A preceptor signs attendance registers; a mentor signs prescriptions",
        ],
        correctIndex: 1,
        explanation:
          "Preceptorship is the structured, placement-bound supervision of daily practice; mentorship is the longer arc — questions, challenge, sponsorship and reachability across a career. One midwife can be both.",
        courseSlug: "leadership-management",
      },
    ],
    flashcards: [
      {
        topic: "Mentor and Role Model",
        front: "What do students learn from a role model before anything else?",
        back: "What you do: hand hygiene, tone with the poorest woman, punctuality, how you speak about absent colleagues, and how you admit mistakes.",
      },
      {
        topic: "Mentor and Role Model",
        front: "A supervised student makes an error — what is the order of duties?",
        back: "Woman first (reassess and document), then honest reporting, then own your supervisory share, then a private debrief and learning plan with her tutor.",
      },
      {
        topic: "Mentor and Role Model",
        front: "Preceptor versus mentor?",
        back: "A preceptor supervises daily practice for a placement; a mentor walks years — asking questions, challenging gently, opening doors, staying reachable.",
      },
    ],
    sources: [
      {
        organization: "International Confederation of Midwives",
        title: "Essential Competencies for Basic Midwifery Practice",
        note: "Professional behaviours and lifelong learning expectations. Verify the current version with ICM.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Midwives",
        note: "Conduct, accountability and honesty in supervision and reporting. Obtain the current version from NMC Ghana.",
      },
      {
        organization: "Elsevier",
        title: "Myles Midwifery (17th edition)",
        year: "2021",
        note: "Education, mentorship and professional issues chapters. Educational source — verify current edition.",
      },
    ],
  },
  // ── 14 ─────────────────────────────────────────────────────
  {
    courseSlug: "community-domiciliary-midwifery",
    moduleTitle: "Advanced Community Practice",
    lessonTitle: "Designing Community Midwifery Services",
    description:
      "Planning services that reach every mother — the midwife as service architect. Data, community entry and a referral pathway that actually works.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe a community needs assessment — the data, the mapping and the voices that feed it.",
      "Explain community entry, stakeholder engagement and the constructive role of traditional birth attendants.",
      "Apply service design choices — outreach schedules, maternity waiting homes and defaulter tracing — to a defined catchment.",
    ],
    tags: ["service design", "planning", "community entry", "chps", "referral pathway"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A midwife delivers care. A service delivers it to every mother who needs it — the one on the far ridge, the one whose mother-in-law distrusts the clinic, the adolescent who fears the gossip. Designing that service is the final frontier of your profession: the midwife as architect.\n\nThis lesson walks a community service from first data to first durbar to first quarterly review — the sequence CHPS zones and district teams use across Ghana.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Start with a **needs assessment**: births in the catchment and where they happen, facility deliveries against home births, distances and transport realities, referral outcomes and the defaulters — drawn from DHIMS, your registers and community mapping. Then **community entry** — the step that sinks more services than any shortage: courtesy calls on the chief, queen mother, assembly member and faith leaders before a single clinic is announced; then a durbar to introduce the service and hear what the community wants. Form or revive the community health management committee so the service belongs to them.\n\nDesign around lives, not convenience: schedule outreach on market days when women already travel; set zones for home visits; negotiate a maternity waiting home near the district hospital for women from the far villages; build defaulter tracing with volunteers; and give traditional birth attendants a role they can be proud of — trained allies who recognise danger signs and refer or accompany, never independent catchers of complicated births. Fix the **referral pathway** in writing: who calls, which numbers, the call-ahead routine, and the feedback loop back to you. Then measure: quarterly review of contacts, referrals and outcomes with the community and the district. Midwife-led continuity evidence — more spontaneous births, fewer interventions, no added harm where systems work — is your licence to design boldly.",
      },
      {
        type: "clinical_pearl",
        body: "Enter through the chief's door and serve through the mother's door — protocol first, proximity after. And give the TBA a badge, a referral form and your respect: an ally with a role refers; a rival with a grudge hides the next haemorrhage.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are posted to design outreach for a new CHPS zone: eleven villages, one road passable only in the dry season, a district hospital ninety minutes away, and two respected traditional birth attendants who attend most of the area's births.\n\nWhat are your first five moves?\n\nAnswer: First, gather the data — last year's births, where they happened, who died en route — from DHIMS and the registers. Second, courtesy calls on the chief, queen mother and assembly member; listen before proposing. Third, hold a durbar to introduce the service, and recruit the two TBAs as trained referrers with referral forms and a monthly meeting. Fourth, fix the pathway: transport plans for both seasons, a call-ahead number, and a waiting-home arrangement for the far villages near term. Fifth, set outreach to market days and book the first quarterly review now — accountability built in from the start.",
      },
      {
        type: "memory_trick",
        body: "A service that reaches every mother has DREAM: Data first, Respect the gatekeepers, Engage the TBAs and CHMC, Attach a written referral plan, Measure it with the community quarterly.",
      },
      {
        type: "summary",
        body: "- Needs assessment: births, place of birth, distances, transport, referral outcomes, defaulters — from DHIMS and community mapping.\n- Community entry before announcements: courtesy calls, a durbar, and a management committee that owns the service.\n- Design around lives: market-day outreach, home-visit zones, a maternity waiting home for far villages, defaulter tracing.\n- TBAs become trained allies who recognise danger and refer — never independent catchers of complicated births.\n- Write the referral pathway down and review outcomes quarterly with the community and the district.",
      },
    ],
    questions: [
      {
        topic: "Designing Community Services",
        type: "MCQ",
        difficulty: "Easy",
        stem: "You are starting a midwifery outreach service in a new village cluster. Where should the first step happen?",
        options: [
          "In the clinic, printing appointment cards for pregnant women",
          "In the community — courtesy calls on the chief and queen mother before anything else is arranged",
          "At the district office, drafting the annual report",
          "On local radio, announcing the free service to everyone",
        ],
        correctIndex: 1,
        explanation:
          "Community entry precedes service delivery: courtesy calls on traditional authority open the door that announcements alone cannot. Services that skip protocol are quietly blocked; those that enter properly are protected.",
        courseSlug: "community-domiciliary-midwifery",
      },
      {
        topic: "Designing Community Services",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the most constructive role for traditional birth attendants in a designed community midwifery service?",
        options: [
          "Independent birth attendants for complicated deliveries",
          "Competitors to be driven out of the villages",
          "Untrained extra hands for your night deliveries",
          "Trained allies who recognise danger signs early and refer or accompany women to the service",
        ],
        correctIndex: 3,
        explanation:
          "TBAs are respected, present at night and trusted by families — as trained referrers with forms and feedback they become your earliest warning system. Rivalry drives births underground; partnership surfaces them.",
        courseSlug: "community-domiciliary-midwifery",
      },
      {
        topic: "Designing Community Services",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which information belongs in your needs assessment before designing the service?",
        options: [
          "Numbers of births and where they happen, distances, transport realities and referral outcomes from DHIMS and community mapping",
          "The design of your new letterhead and staff identity cards",
          "The names of midwives working in other districts",
          "The price of chairs for the waiting area",
        ],
        correctIndex: 0,
        explanation:
          "A needs assessment counts the mothers, the miles and the outcomes — the data that shapes outreach schedules, waiting homes and referral plans. Stationery and furniture come after the epidemiology.",
        courseSlug: "community-domiciliary-midwifery",
      },
    ],
    flashcards: [
      {
        topic: "Designing Community Services",
        front: "What does the DREAM mnemonic capture in service design?",
        back: "Data first, Respect the gatekeepers (community entry), Engage TBAs and the health management committee, Attach a written referral plan, Measure outcomes quarterly with the community.",
      },
      {
        topic: "Designing Community Services",
        front: "What is community entry, and what does it involve?",
        back: "Winning the community before serving it: courtesy calls on the chief, queen mother and leaders, a durbar to introduce the service, and a management committee so the service belongs to them.",
      },
      {
        topic: "Designing Community Services",
        front: "What role do TBAs play in a designed service?",
        back: "Trained allies who recognise danger signs and refer or accompany women — with forms, meetings and respect; never independent catchers of complicated births.",
      },
    ],
    sources: [
      {
        organization: "UNFPA, WHO, ICM",
        title: "State of the World's Midwifery 2021",
        year: "2021",
        note: "Workforce and service-planning evidence for midwife-led care. Educational reference — verify current data.",
      },
      {
        organization: "Cochrane (Sandall J et al.)",
        title: "Midwife-Led Continuity Models Versus Other Models of Care for Childbearing Women",
        year: "2016",
        url: "https://doi.org/10.1002/14651858.CD004667.pub5",
        note: "The systematic review underpinning midwife-led community services. Verify the latest update.",
      },
      {
        organization: "Ghana Health Service",
        title: "Community-Based Health Planning and Services (CHPS): The Operational Policy",
        note: "The national framework for community-based service delivery. Educational reference — verify current edition with GHS.",
      },
    ],
  },
  // ── 15 ─────────────────────────────────────────────────────
  {
    courseSlug: "community-domiciliary-midwifery",
    moduleTitle: "Advanced Community Practice",
    lessonTitle: "Preparing for a Planned Home Birth",
    description:
      "Selection, equipment and team — the full preparation for safe planned home birth. Choosing well, visiting early, and rehearsing the exit before it is needed.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the eligibility criteria that keep planned home birth within safe limits.",
      "Explain the 36-week preparation visit, honest informed choice and the documented birth plan.",
      "Apply the emergency plan — phone, fuel, funds and family — and the rehearsal that makes it real.",
    ],
    tags: ["home birth", "preparation", "informed choice", "birth plan", "eligibility"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A safe planned home birth is decided months before the first contraction. By the time labour starts, almost everything that keeps a home birth safe — the right woman, the right home, the right plan and the right backup — is already in place or already missing.\n\nThis lesson covers the full preparation: selecting women whose births belong at home, visiting the house while there is time to fix what you find, choosing the team, and rehearsing the transfer you hope never to use.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Selection** is the first safety device: term labour (37-42 weeks), singleton cephalic baby, no uterine scar, no significant medical disease — hypertension, diabetes, heart or kidney — and an uncomplicated pregnancy: no pre-eclampsia, no bleeding, no growth concerns. Previous straightforward births strengthen her case; for first-time mothers, home birth can be offered honestly with the higher transfer rates spoken aloud. Then assess the **environment**: a home that is reachable by transport at night, in phone coverage, with a road that does not drown in the rainy season.\n\nThe **preparation visit** at about 36 weeks does what no clinic can: you see the room, the light, the water, the heat and where the birth will actually happen; meet the household; and build the emergency plan — **PHONE, FUEL, FUNDS, FAMILY**: which number is called, who keeps fuel and for which vehicle, where the money sits, who stays with the other children and who accompanies the mother. Informed choice is a conversation, not a signature: the honest evidence for low-risk women in functioning systems, the higher transfer rates of first labours, and the limits of your kit and the distance. Write the birth plan, review it at term, confirm your second skilled person, and rehearse: walk the family through a mock call, a mock transfer, a mock 2 am. The plan you have spoken twice is the one that works once.",
      },
      {
        type: "clinical_pearl",
        body: "A home birth is booked twice — once in your register and once in the family's mind. If the second booking is missing, the first is unsafe: rehearse PHONE-FUEL-FUNDS-FAMILY out loud before the due date, not on it.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A grandmother of three, all born normally, books a home birth at 34 weeks. She is healthy, term-dated, cephalic, scar-free. The catch: her village road floods for weeks each rainy season, and her EDD sits in its middle.\n\nHow do you prepare her safely?\n\nAnswer: The woman fits the criteria; the environment only half does. Walk it honestly: if the rains have closed the road by 38 weeks, the safest birthplace is the district maternity waiting home, reached before term. Book the home birth conditionally: a 36-week visit for light, water, heat and the emergency plan; the PHONE-FUEL-FUNDS-FAMILY rehearsal; a named second midwife; a review date. Her name goes in your register with the condition written beside it — the plan itself is the safety.",
      },
      {
        type: "memory_trick",
        body: "A planned home birth has 4 Ps: Pick the right woman, Preview the home, Put it on paper, Practise the exit. And the exit plan answers PHONE-FUEL-FUNDS-FAMILY before anyone asks who, where, how and with what.",
      },
      {
        type: "summary",
        body: "- Selection: term singleton cephalic, no scar, no medical disease, uncomplicated pregnancy; first-time mothers hear honest transfer rates.\n- The environment must be reachable — night transport, phone network, a road that works in all seasons.\n- The 36-week visit previews light, water, heat, the birth space and the household itself.\n- Emergency plan spoken and rehearsed: PHONE, FUEL, FUNDS, FAMILY — with a named second skilled person.\n- Document the birth plan, review at term, and hold the backup plan (including a waiting home) as part of the booking, not an apology.",
      },
    ],
    questions: [
      {
        topic: "Preparing for a Home Birth",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which woman is a suitable candidate for a planned home birth after assessment?",
        options: [
          "A first-time mother at 36 weeks who is determined to birth at home",
          "A mother whose only previous birth was by caesarean section",
          "A mother at term with a cephalic singleton, previous straightforward births and an uncomplicated pregnancy",
          "A mother with pre-eclampsia whose blood pressure is almost controlled",
        ],
        correctIndex: 2,
        explanation:
          "The well-selected woman is term with a cephalic singleton, no uterine scar, no significant disease and an uncomplicated pregnancy — previous normal births strengthen the case. A caesarean scar or pre-eclampsia take birth out of the home.",
        courseSlug: "community-domiciliary-midwifery",
      },
      {
        topic: "Preparing for a Home Birth",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the main purpose of the 36-week home visit for a booked home birth?",
        options: [
          "To see the environment, agree where the birth will happen, meet the household and rehearse the emergency plan",
          "To perform the delivery early to avoid the rush",
          "To collect the family's payment in advance",
          "To move the mother into hospital for the rest of her pregnancy",
        ],
        correctIndex: 0,
        explanation:
          "The visit previews light, water, warmth, the birth space and the people who will be present, and turns the emergency plan from paper into a spoken, rehearsed reality. Nothing about it is administrative.",
        courseSlug: "community-domiciliary-midwifery",
      },
      {
        topic: "Preparing for a Home Birth",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During informed choice discussions, what must a mother planning her first home birth hear from you?",
        options: [
          "That transfer is very rare and unlikely in a first labour",
          "That first labours transfer to hospital more often — with honest figures and the plan for moving her",
          "That home birth is always safer than hospital for first babies",
          "That you will refuse to transfer her if her labour runs long",
        ],
        correctIndex: 1,
        explanation:
          "First labours transfer more often than subsequent ones — an honest informed choice states this plainly and pairs it with a rehearsed plan. False reassurance and refusals to transfer both convert risk into betrayal.",
        courseSlug: "community-domiciliary-midwifery",
      },
    ],
    flashcards: [
      {
        topic: "Preparing for a Home Birth",
        front: "List the core eligibility criteria for planned home birth.",
        back: "Term labour (37-42 weeks), singleton cephalic baby, no uterine scar, no significant medical disease, uncomplicated pregnancy — plus a reachable home in phone coverage with working night transport.",
      },
      {
        topic: "Preparing for a Home Birth",
        front: "What happens at the 36-week home visit?",
        back: "Preview the home: light, water, heat and the birth space; meet the household; agree and rehearse the emergency plan — PHONE, FUEL, FUNDS, FAMILY — and confirm the second skilled person.",
      },
      {
        topic: "Preparing for a Home Birth",
        front: "What is PHONE-FUEL-FUNDS-FAMILY?",
        back: "The four questions of every home birth emergency plan: which number is called, who keeps fuel for which vehicle, where the money sits, and who cares for children and accompanies the mother.",
      },
    ],
    sources: [
      {
        organization: "National Institute for Health and Care Excellence",
        title: "Intrapartum Care for Healthy Women and Babies (CG190)",
        year: "2017",
        url: "https://www.nice.org.uk/guidance/cg190",
        note: "Includes home birth selection criteria and transfer planning. Clinical guideline — verify current version.",
      },
      {
        organization: "BMJ (Brocklehurst P et al., Birthplace in England)",
        title: "Perinatal and Maternal Outcomes Related to Planned Place of Birth Amongst Healthy Women with Low-Risk Pregnancies",
        year: "2011",
        url: "https://doi.org/10.1136/bmj.d7400",
        note: "The cohort evidence behind home birth selection. Verify the latest follow-up literature.",
      },
      {
        organization: "World Health Organization",
        title: "WHO Recommendations: Intrapartum Care for a Positive Childbirth Experience",
        year: "2018",
        url: "https://www.who.int/publications/i/item/9789241550215",
        note: "Care across birth settings. Check for the latest update.",
      },
    ],
  },
  // ── 16 ─────────────────────────────────────────────────────
  {
    courseSlug: "community-domiciliary-midwifery",
    moduleTitle: "Advanced Community Practice",
    lessonTitle: "The Home Birth Kit and Setup",
    description:
      "What you pack and how you set up — readiness that handles surprises. A kit packed for the worst fifteen minutes of your career, and a room arranged to save them.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the home birth kit by function — clean birth, assessment, haemorrhage, eclampsia and newborn resuscitation.",
      "Explain the two-zone setup of the birthing home and the requirements of each zone.",
      "Apply the stock disciplines — monthly expiry sweeps, after-use restocking, battery checks — that keep the kit honest.",
    ],
    tags: ["equipment", "readiness", "home birth kit", "resuscitation", "misoprostol"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "At a home birth you carry the hospital in a bag. There is no pharmacy down the corridor, no boiler room, no trolley with a second set of everything — only what you packed and how you arranged it. The kit is packed for the worst fifteen minutes of your career, not the average fifteen.\n\nThis lesson inventories the kit function by function, then sets up the room: two zones, warmth, light and a clock — and the disciplines that keep the whole thing true between births.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Organise the bag by function, not by habit. **Clean birth**: gloves and apron, a waterproof ground cover, cord clamps or ties, a new blade, gauze and cotton wool, chlorhexidine for the cord, sanitary pads. **Assessment**: sphygmomanometer, urine dipsticks, Pinard or sonicaid, thermometer, torch with spare batteries, and the partograph with a pen and watch — as much equipment as the stethoscope. **Haemorrhage**: oxytocin if the cold chain holds, **misoprostol** — heat-stable and therefore the uterotonic of the road — IV giving set and fluids, and a catheter kit. **Eclampsia**: magnesium sulfate with calcium gluconate to follow. **Newborn corner**: a self-inflating bag with masks for a term and a small baby, suction used sparingly, warm towels, a hat, a firm warm surface. **Waste and hygiene**: sharps container or a puncture-proof jar, waste bags, soap and alcohol rub.\n\nOn arrival, set up before it is needed: warm the room, fix the light, boil and cool water. Create **two zones** — the clean birth space, with kit arranged in order of use, not rummaged — and the **resuscitation corner**: a firm surface (a table, never the soft bed), away from draughts, with towels, hat, bag-mask and a readable clock for the Apgar. Wash to the elbows before the gloves, and hold the disciplines between births: a monthly expiry sweep, a restock after every use before storage, batteries checked, the pack list laminated and signed. The empty slot found at midnight was counted on Monday.",
      },
      {
        type: "clinical_pearl",
        body: "Lay the kit out while contractions are mild — the resus corner built at 4 cm is the one you bless at delivery. And count the clock as equipment: resuscitation and Apgar both need a second hand you can see.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You arrive at 4 cm for a booked home birth. The room is warm but has one lamp in the far corner; a stiff breeze comes under the door; the bed is soft and high. Your kit check last week was rushed, and you are not certain of the misoprostol expiry date.\n\nHow do you set up the next hour?\n\nAnswer: Fix the newborn corner first: firm table away from the draught, warm towels and hat, bag-mask and suction beside, a clock readable from the table. Bring the lamp to the birth space. Spread the waterproof cover and arrange the kit in order of use. Boil water, wash hands, and check the misoprostol and magnesium expiry dates now — an expired uterotonic is a decision for daylight: replace it before this birth continues at home. Begin the partograph this visit. An hour of arrangement buys the minutes that matter.",
      },
      {
        type: "memory_trick",
        body: "Two zones, one clock, three checks — the home setup formula. Zones: clean birth space and resus corner. Checks: expiry, batteries, fluids — monthly on paper, and out loud on arrival.",
      },
      {
        type: "summary",
        body: "- Pack by function: clean birth, assessment, haemorrhage (misoprostol where the cold chain fails), eclampsia, newborn resus, waste and hygiene.\n- The partograph travels with the kit — a monitoring tool is equipment.\n- Two zones on arrival: the clean birth space, and a firm, warm, draught-free resus corner with a visible clock.\n- Misoprostol is the heat-stable uterotonic of home birth; magnesium sulfate travels with calcium gluconate.\n- Disciplines between births: monthly expiry sweep, restock after every use, battery checks, laminated pack list.",
      },
    ],
    questions: [
      {
        topic: "Home Birth Kit and Setup",
        type: "MCQ",
        difficulty: "Easy",
        stem: "You practise where the cold chain is unreliable. Which uterotonic belongs in your home birth kit on that ground?",
        options: [
          "Oxytocin ampoules stored at room temperature for weeks",
          "Cold-chain-dependent carbetocin kept in the bag",
          "Ergometrine left on a warm windowsill between births",
          "Misoprostol, which is heat-stable and effective where oxytocin is unavailable",
        ],
        correctIndex: 3,
        explanation:
          "Misoprostol's heat stability makes it the uterotonic of the road: it survives the bag, the sun and the long ride. Liquid uterotonics left out of the cold chain lose potency you cannot see — and cannot afford.",
        courseSlug: "community-domiciliary-midwifery",
      },
      {
        topic: "Home Birth Kit and Setup",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "How should the newborn resuscitation corner be set up in the home?",
        options: [
          "On the soft bed beside the mother, so the baby stays close",
          "On a firm, warm, draught-free surface with a self-inflating bag, masks, warm towels, a hat and a clock in view",
          "In the kitchen near the hot water, for warmth",
          "Assembled only after the baby is born, once you know it is needed",
        ],
        correctIndex: 1,
        explanation:
          "Resuscitation needs a firm flat surface, warmth, no draught, working equipment and a visible clock — prepared before delivery, because the baby who needs it gives no warning. A soft bed cannot support effective ventilation.",
        courseSlug: "community-domiciliary-midwifery",
      },
      {
        topic: "Home Birth Kit and Setup",
        type: "MCQ",
        difficulty: "Easy",
        stem: "When do you check the home birth kit's contents and expiry dates?",
        options: [
          "Monthly for expiry dates, and after every use restocking before the bag is stored",
          "Once a year at the annual audit",
          "Only when someone reports a missing item",
          "Never — the pack list keeps it complete",
        ],
        correctIndex: 0,
        explanation:
          "Kit honesty is a rhythm: a monthly sweep for expiry and completeness, and a restock immediately after every birth. The empty slot discovered at midnight was countable on Monday.",
        courseSlug: "community-domiciliary-midwifery",
      },
    ],
    flashcards: [
      {
        topic: "Home Birth Kit and Setup",
        front: "Why does misoprostol belong in a home birth kit where the cold chain is weak?",
        back: "It is heat-stable: effective without refrigeration through sun, bag and journey — the uterotonic of the road where liquid oxytocin would quietly lose potency.",
      },
      {
        topic: "Home Birth Kit and Setup",
        front: "What are the two zones of the home birth setup, and their key features?",
        back: "The clean birth space (waterproof cover, kit arranged in order of use) and the newborn resuscitation corner (firm, warm, draught-free surface, bag-mask, towels, hat, visible clock).",
      },
      {
        topic: "Home Birth Kit and Setup",
        front: "What kit disciplines run between births?",
        back: "Monthly expiry sweep, restock after every single use, battery checks, and a laminated pack list kept with the bag.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice (3rd edition)",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241549356",
        note: "Essential equipment and supplies for clean, safe birth. Verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "WHO Recommendations: Uterotonics for the Prevention of Postpartum Haemorrhage",
        year: "2018",
        url: "https://www.who.int/publications/i/item/9789241550437",
        note: "Misoprostol's role where oxytocin is unavailable. Check for the latest update.",
      },
      {
        organization: "American Academy of Pediatrics",
        title: "Textbook of Neonatal Resuscitation (8th edition)",
        year: "2021",
        note: "Self-inflating bag, mask sizes and warm resuscitation surfaces. Educational source — verify current edition.",
      },
    ],
  },
  // ── 17 ─────────────────────────────────────────────────────
  {
    courseSlug: "community-domiciliary-midwifery",
    moduleTitle: "Emergencies at Home",
    lessonTitle: "When Birth Goes Wrong at Home",
    description:
      "Haemorrhage and dystocia far from theatre — drills for the worst at home. PPH, shoulder dystocia, cord prolapse and eclampsia, managed with courage and a rehearsed plan.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the immediate home management of postpartum haemorrhage, shoulder dystocia, cord prolapse and eclampsia.",
      "Explain the bridge manoeuvres that keep a mother alive while transfer is arranged.",
      "Apply the discipline of calling help early, allocating roles aloud and timing every step.",
    ],
    tags: ["emergency", "home birth", "shoulder dystocia", "cord prolapse", "postpartum haemorrhage"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The emergency that reaches you at home is the same one that reaches a labour ward — postpartum haemorrhage, a shoulder that will not come, a cord that slips down, a fit — but the theatre is ninety minutes away and the team is whoever is in the compound. What you have instead is your kit, your drills and your voice.\n\nThis lesson rehearses the four worst guests and the choreography that keeps them survivable. The golden rule runs through all of them: shout for help early, name the emergency aloud, allocate roles aloud, and say the times out loud.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Postpartum haemorrhage**: rub up a contraction, give your uterotonic, empty the bladder, deliver the placenta with controlled cord traction and inspect it. If bleeding continues, start IV fluids if you can and hold **bimanual compression**, or a fist pressed firmly above the umbilicus (aortic compression) — bridges, not cures, held until definitive care. Activate the transfer when bleeding exceeds your comfort, not after it exceeds your control. Weigh the pads; a gram is a millilitre.\n\n**Shoulder dystocia**: call for help and note the time. McRoberts — hips hyperflexed hard onto her abdomen — with suprapubic pressure resolves most; then internal rotation, the posterior arm, or all-fours. Never push on the fundus: it drives the shoulder deeper. **Cord prolapse**: the mother goes knee-chest or head-down, your gloved hand lifts the presenting part off the cord and stays until a caesarean in hospital — the ambulance is called while your hand is still going in. **Eclampsia**: left lateral, nothing in the mouth, magnesium sulfate per protocol, transfer. For the baby who will not breathe: warm, dry, stimulate, ventilate with the self-inflating bag. After every emergency: document times, transfer, debrief, and rehearse again — calm is a drill you practised, not a temperament.",
      },
      {
        type: "clinical_pearl",
        body: "In the first minute of catastrophe, spend your voice: name the emergency, name the roles, name the time — 'Ama, phone the ambulance! Kofi, hold this baby!' A shouted plan gathers helpers faster than a silent hero. And your hand on a prolapsed cord does not leave until a surgeon's hand takes over.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At a planned home birth, the head is born — and one minute later the shoulders have not followed. The mother is exhausted, the husband is panicking, and you are the only skilled person in the room.\n\nWhat do you say and do in the next three minutes?\n\nAnswer: Shout the emergency and note the time; the husband phones the ambulance now, whatever happens next. Hyperflex her legs onto her abdomen yourself — McRoberts — while a helper presses firmly above the pubic bone: most shoulders release within a minute. If not, move to internal manoeuvres — rotate the shoulders, bring down the posterior arm, or turn her onto all fours. Never fundal pressure. Once the baby is born, resus corner ready, skin-to-skin, and transfer both for observation; document head-to-body time and every manoeuvre. Tonight, debrief; tomorrow, rehearse again.",
      },
      {
        type: "memory_trick",
        body: "HELPERR still works at home: Help, Evaluate, Legs (McRoberts), Pressure (suprapubic), Enter (rotate), Remove the posterior arm, Roll (all fours) — the seven letters that buy the baby's minutes. And for the cord: 'knees to chest, hand to head, phone in the same breath.'",
      },
      {
        type: "summary",
        body: "- Golden rules: call help early, name the emergency, allocate roles aloud, and say times out loud.\n- PPH: rub, uterotonic, empty bladder, controlled cord traction — then IV fluids and bimanual or aortic compression as the bridge to transfer; weigh the pads.\n- Shoulder dystocia: time it, McRoberts plus suprapubic pressure first, then internal manoeuvres; never fundal pressure.\n- Cord prolapse: knee-chest, hand lifting the presenting part stays until caesarean, ambulance called at once.\n- Eclampsia: left lateral, nothing in the mouth, magnesium sulfate per protocol, transfer — and rehearse, because calm is a drill.",
      },
    ],
    questions: [
      {
        topic: "Emergencies at Home",
        type: "MCQ",
        difficulty: "Easy",
        stem: "The cord has prolapsed at a home birth. What position do you place the mother in, and what else happens immediately?",
        options: [
          "Flat on her back with legs extended while you wait for the next contraction",
          "Knee-chest or head-down position, your gloved hand lifting the presenting part off the cord, and the ambulance called at once",
          "Sitting upright in a chair to reduce cord pressure",
          "Left lateral with the head raised on two pillows",
        ],
        correctIndex: 1,
        explanation:
          "Knee-chest or head-down tips the presenting part away from the cord while your hand holds it off — the ambulance is summoned in the same breath, because only a caesarean finishes this. Position and call are one action, not two decisions.",
        courseSlug: "community-domiciliary-midwifery",
      },
      {
        topic: "Emergencies at Home",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "At home, the head is born but the shoulders do not follow. Which first pair of manoeuvres do you apply?",
        options: [
          "Fundal pressure to push the anterior shoulder past the pubic bone",
          "Immediate transfer in the current position",
          "Call for help, note the time, and apply McRoberts (hyperflexing the hips) with suprapubic pressure",
          "Wait five minutes for the next contraction to assist",
        ],
        correctIndex: 2,
        explanation:
          "Help and timing first, then McRoberts with suprapubic pressure — the pair that resolves most dystocias. Fundal pressure worsens impaction, and every minute without a manoeuvre is a minute of asphyxia.",
        courseSlug: "community-domiciliary-midwifery",
      },
      {
        topic: "Emergencies at Home",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Postpartum haemorrhage continues at home after uterotonics and bladder emptying. What is the correct next move?",
        options: [
          "Start IV fluids if possible, hold bimanual or aortic compression as a bridge, and activate the transfer plan without delay",
          "Reassure the family and observe for another hour to see the trend",
          "Give tepid sponging and oral fluids for shock",
          "Pack the vagina tightly with gauze and wait quietly for the ambulance",
        ],
        correctIndex: 0,
        explanation:
          "Ongoing haemorrhage out of hospital needs a bridge (IV fluids, bimanual or aortic compression slowing the flow) and simultaneous transfer — the manoeuvres buy the road, they do not replace the destination. A gram is a millilitre: weigh the pads.",
        courseSlug: "community-domiciliary-midwifery",
      },
    ],
    flashcards: [
      {
        topic: "Emergencies at Home",
        front: "What does HELPERR stand for in shoulder dystocia?",
        back: "Help, Evaluate for episiotomy, Legs (McRoberts — hyperflex the hips), Pressure (suprapubic), Enter (internal rotation), Remove the posterior arm, Roll (all fours). Never fundal pressure.",
      },
      {
        topic: "Emergencies at Home",
        front: "Cord prolapse at home — the three simultaneous actions?",
        back: "Mother knee-chest or head-down, gloved hand lifting the presenting part off the cord (and staying), ambulance called immediately — position, hand and phone in one breath.",
      },
      {
        topic: "Emergencies at Home",
        front: "What are the bridge manoeuvres for continuing PPH at home?",
        back: "IV fluids if possible plus bimanual uterine compression or aortic pressure (a fist firmly above the umbilicus against the spine) — held while the transfer is activated. Weigh the pads: one gram equals one millilitre.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Recommendations for the Prevention and Treatment of Postpartum Haemorrhage",
        year: "2022",
        url: "https://www.who.int/publications/i/item/9789240038734",
        note: "Uterotonics and first-response management of PPH. Check for the latest update.",
      },
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors (2nd edition)",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565493",
        note: "Stepwise emergency management including eclampsia and dystocia. Verify current edition.",
      },
      {
        organization: "Royal College of Obstetricians and Gynaecologists",
        title: "Shoulder Dystocia (Green-top Guideline No. 42)",
        note: "The HELPERR sequence and its evidence. Verify the current edition on the RCOG website.",
      },
    ],
  },
  // ── 18 ─────────────────────────────────────────────────────
  {
    courseSlug: "community-domiciliary-midwifery",
    moduleTitle: "Emergencies at Home",
    lessonTitle: "The Transfer Decision",
    description:
      "Stabilise and send versus stay — the decision that defines home birth safety. Transferring on your schedule, not the emergency's.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the pre-emptive triggers for transfer and the doubt rule that catches hesitation early.",
      "Explain the stabilise-then-transfer principle and the call-ahead handover with SBAR.",
      "Apply the documentation and review that turn each transfer into learning rather than failure.",
    ],
    tags: ["transfer", "decision-making", "sbar", "stabilisation", "partograph"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Home birth safety is not written in the births that stay home — it is written in the ones that leave on time. The midwife who transfers a slow labour at 6 pm sleeps better than the one who transfers a ruptured uterus at 2 am, and the mothers she serves live longer.\n\nThis lesson is about that decision: what moves a birth to hospital hours before disaster, what must be stabilised first, who is called and how — and why a good transfer rate is a badge of safety, not failure.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Transfers come in two kinds. **Pre-emptive transfers** act on rising risk: the alert line crossed, contractions stalling, malposition, meconium with a concerning heart rate, blood pressure creeping up with headache or protein, fever, any bleeding, a second stage too long, maternal exhaustion. They define a safe service, and they obey the **doubt rule**: the moment you begin debating transfer, you are already late — doubt is itself a trigger. **Emergency transfers** follow the catastrophes you have drilled — haemorrhage, a fit, a prolapse — where execution is the only question.\n\nBefore the road, **stabilise what you can**: first-line treatment on board (magnesium sulfate loaded, uterotonics given, compression held, an IV running), mother warm, notes in the bag — enough stability to survive the road, no longer. Call ahead with **SBAR**: who she is, what is happening, your assessment, the vitals, every drug and dose with its time. Accompany her yourself; never send a birthing mother alone in a neighbour's car. Document the times — decision, treatment, departure, arrival — with a written note. Afterwards, close the loop: follow the outcome, complete the referral feedback form, debrief, and review the decision honestly. A service that transfers early is trustworthy; a suspiciously low transfer rate usually means transfers are happening too late.",
      },
      {
        type: "clinical_pearl",
        body: "Transfer on your schedule, not the emergency's. And the doubt rule is your sharpest instrument: if 'maybe' has crossed your mind, 'go' should cross your lips.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A first-time mother at a planned home birth was 5 cm at 3 pm and 6 cm at 7 pm, with the alert line behind her and contractions weakening. She is exhausted but coping, and asks to stay: 'I came here to avoid the hospital.'\n\nWhat do you do, and how do you say it?\n\nAnswer: Apply the doubt rule — you are already debating, and the partograph has already spoken. Begin the pre-emptive transfer now, in daylight, while both are stable: call ahead with SBAR, arrange the ambulance and family plan, and reassure her that moving now is her plan working — the backup she agreed to at booking. Accompany her yourself, documents and times in hand; complete the feedback form once you know the outcome; then debrief. She is not the failure; a 2 am crash transfer would have been.",
      },
      {
        type: "memory_trick",
        body: "Doubt = Decision. If 'maybe' has crossed your mind, 'go' should cross your lips — transfers made in calm beat transfers made in crisis, every time. And the send-off is SBAR + times + your own skilled hands on board.",
      },
      {
        type: "summary",
        body: "- Pre-emptive transfers act on rising risk: alert line crossed, poor progress, malposition, meconium with FHR concerns, rising BP, fever, bleeding, exhaustion.\n- The doubt rule: when you start debating transfer, it is already time — hesitation is a trigger, not a caution.\n- Stabilise to survive the road: first-line drugs on board, IV running, compression held — then move; never send a birthing mother alone.\n- Call ahead with SBAR — identity, situation, assessment, treatments with times — and send written notes and referral times.\n- Close every loop: follow the outcome, complete the feedback form, debrief and review; early transfer is evidence of safety, not failure.",
      },
    ],
    questions: [
      {
        topic: "The Transfer Decision",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A first-time mother at home was 5 cm at 3 pm and 6 cm at 7 pm; the alert line is behind her and contractions are weakening. She asks to stay. What principle governs your next move?",
        options: [
          "Stay the course — most first labours are simply slow and need time",
          "Transfer only when the action line is crossed or the mother collapses",
          "The doubt rule: you are already debating, so begin the pre-emptive transfer now, while both are stable",
          "Give oxytocin at home to speed the labour before deciding",
        ],
        correctIndex: 2,
        explanation:
          "Poor progress against the alert line in a first labour, with weakening contractions, is a pre-emptive trigger — and debating it is itself the signal. Acting in daylight is the transfer made calmly; augmenting labour at home or waiting for collapse are the dangerous alternatives.",
        courseSlug: "community-domiciliary-midwifery",
      },
      {
        topic: "The Transfer Decision",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What must happen before an emergency transfer sets off for hospital?",
        options: [
          "Stabilise what you can — first-line treatment on board, an IV running if possible — and call the receiving unit ahead with SBAR",
          "Send the mother alone by the fastest available taxi to save time",
          "Wait for the family to agree on transport money before moving",
          "Copy the entire clinic register to send along with her",
        ],
        correctIndex: 0,
        explanation:
          "The road is part of the treatment: load the first-line drugs, run the IV, call ahead with SBAR so the receiving team is ready. Sending a birthing mother alone, unannounced or unfinanced converts a transfer into a gamble.",
        courseSlug: "community-domiciliary-midwifery",
      },
      {
        topic: "The Transfer Decision",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What should follow every transfer from a home birth to hospital?",
        options: [
          "Nothing — the hospital now owns the outcome",
          "A record of the departure time only, for the register",
          "Treating transfers as failures of the service, best not discussed",
          "Follow-up of the outcome, the referral feedback form, a debrief and an honest review of the decision and its timing",
        ],
        correctIndex: 3,
        explanation:
          "Every transfer is a lesson with a follow-through: the outcome closes the clinical story, the feedback form closes the referral loop, and the debrief and review turn the decision into the service's education. Transfers made early are evidence of safety, not defeat.",
        courseSlug: "community-domiciliary-midwifery",
      },
    ],
    flashcards: [
      {
        topic: "The Transfer Decision",
        front: "What is the doubt rule?",
        back: "If the word 'maybe' has crossed your mind about transferring, the word 'go' should cross your lips — doubt is itself a trigger, because transfers made in calm beat transfers made in crisis.",
      },
      {
        topic: "The Transfer Decision",
        front: "What does 'stabilise to survive the road' include?",
        back: "First-line treatment on board — magnesium sulfate loaded, uterotonics given, compression held, IV running — plus warmth, notes and your own skilled hands accompanying her. Never send a birthing mother alone.",
      },
      {
        topic: "The Transfer Decision",
        front: "Name four pre-emptive transfer triggers.",
        back: "Alert line crossed or poor progress, malposition or meconium with a concerning fetal heart, rising blood pressure with headache or protein, and any bleeding, fever or maternal exhaustion.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Recommendations: Intrapartum Care for a Positive Childbirth Experience",
        year: "2018",
        url: "https://www.who.int/publications/i/item/9789241550215",
        note: "Partograph use, transfer thresholds and respectful referral. Check for the latest update.",
      },
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors (2nd edition)",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565493",
        note: "Stabilisation and referral protocols. Verify current edition.",
      },
      {
        organization: "National Institute for Health and Care Excellence",
        title: "Intrapartum Care for Healthy Women and Babies (CG190)",
        year: "2017",
        url: "https://www.nice.org.uk/guidance/cg190",
        note: "Transfer criteria from planned home birth. Clinical guideline — verify current version.",
      },
    ],
  },
  // ── 19 ─────────────────────────────────────────────────────
  {
    courseSlug: "community-domiciliary-midwifery",
    moduleTitle: "Improving Community Care",
    lessonTitle: "Auditing Your Community Practice",
    description:
      "Reviewing cases and outcomes — the evidence that improves your service. Honest numbers, run charts and reviews that close the loop with the community.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the indicators a community practice can honestly measure — coverage, process and outcome.",
      "Explain criterion-based audit, run charts and significant event review as the tools of community improvement.",
      "Apply the closing of the loop — sharing results, acting on gaps and re-auditing with the community and the district.",
    ],
    tags: ["audit", "improvement", "community practice", "run chart", "mpdsr"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Continuity is the community midwife's gift — and her blind spot. When you know every family, the service feels personal, warm, trusted; and feeling can quietly replace evidence. The midwife who audits her own practice has something stronger than trust: numbers she can defend, gaps she can fix and a story the district will fund.\n\nThis lesson shows what to measure in community practice, how to read it without being fooled, and how to close the loop so that measurement changes care instead of decorating a shelf.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Measure three layers. **Coverage**: women booked, contacts completed, newborns visited within 48 hours, defaulters traced. **Process**: birth plans documented, uterotonics given within one minute, partographs kept for labours at home, referral notes sent and feedback returned. **Outcome**: transfers and their reasons, postpartum haemorrhage, low Apgar scores, stillbirths, feeding at six weeks. Your sources exist already: registers, mother-held booklets, referral feedback forms, DHIMS. Choose criteria from WHO or national guidance, run the **criterion-based audit cycle** — measure, compare, act, re-audit — and plot monthly figures on a **run chart**: one bad night is luck, three in a row is a system demanding a fix.\n\nHold **significant event reviews** for near-misses as well as losses, and link every death to the district's MPDSR process — no blame, learning across the chain. Then the step most midwives skip: sharing. A quarterly review with the community committee and the DHMT turns numbers into resources and trust — 'half our referrals arrived after two hours because the night driver had no fuel' is an argument the community will fund with you. Close every loop: act, then re-measure. And audit yourself before others audit you — the community that trusts you deserves numbers as true as your care.",
      },
      {
        type: "clinical_pearl",
        body: "Numbers tell the story you cannot see from inside it: a transfer list read monthly becomes a curriculum; read never, it stays a list of luck. And the best audit question in community practice is 'what nearly went wrong?' — near misses are lessons that cost nothing but honesty.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Reviewing your register, you find that three of your ten transfers this quarter took more than two hours to reach the district hospital. All three happened at night; all three families waited for a driver who first had to find fuel.\n\nHow do you audit this, and what changes?\n\nAnswer: Treat it as a significant event review, not an anecdote: gather each timeline from your notes, the feedback forms and the families' accounts, and plot transfer times beside previous quarters. The pattern is a system gap — night fuel — not coincidence. Take the chart to the community committee and the DHMT: the fix is theirs to own, perhaps a fuel fund at the roadside stall or two named drivers. Re-audit transfer times next quarter — then thank the committee publicly with the new chart.",
      },
      {
        type: "memory_trick",
        body: "AUDIT: Ask the question, Uncover the gap, Do the change, Inspect again, Tell the community. Five verbs — and the last one is the engine, because numbers shared become resources, and numbers filed become dust.",
      },
      {
        type: "summary",
        body: "- Measure coverage, process and outcome — from registers, mother-held booklets, referral feedback and DHIMS.\n- Run criterion-based audit against WHO or national criteria, and re-audit to close the loop.\n- Plot monthly data on run charts: one bad night is luck, three in a row is a system.\n- Review near-misses as well as losses; link deaths to MPDSR without blame.\n- Share results quarterly with the community and the DHMT — numbers shared become accountability, resources and trust.",
      },
    ],
    questions: [
      {
        topic: "Auditing Community Practice",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why plot your monthly transfer times on a run chart rather than judging single incidents?",
        options: [
          "A run chart shows the trend over time — one bad night may be luck, but three in a row is a system asking for a fix",
          "Charts look more professional at appraisal time",
          "The district demands a graph for every incident",
          "Single incidents are always more reliable than trends",
        ],
        correctIndex: 0,
        explanation:
          "Community practice is small and variable — single events mislead, and trends inform. A run chart turns scattered nights into a visible line that says 'this is a pattern, act on it.'",
        courseSlug: "community-domiciliary-midwifery",
      },
      {
        topic: "Auditing Community Practice",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In a criterion-based audit, your standard reads 'every home-birth mother receives a postnatal visit within 48 hours'. What completes the audit cycle?",
        options: [
          "Measure once, file the result, and move to the next topic",
          "Compare with the standard, act on the gaps, and re-audit later to confirm improvement held",
          "Set the standard after measuring, to be realistic",
          "Publish the names of staff who missed visits",
        ],
        correctIndex: 1,
        explanation:
          "A cycle closes only when the change is re-measured: compare practice with the standard, act, and re-audit to prove the improvement held. Measurement without re-measurement is a photograph of failure, and naming defaulters is punishment, not audit.",
        courseSlug: "community-domiciliary-midwifery",
      },
      {
        topic: "Auditing Community Practice",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why share your community audit results with the community itself and the DHMT?",
        options: [
          "To prove the midwife is the most important member of the service",
          "Transparency builds trust, invites community help with the gaps, and justifies resources from the district",
          "To warn mothers against making complaints",
          "To replace clinical judgement with public opinion",
        ],
        correctIndex: 1,
        explanation:
          "Shared numbers turn the community from audience into partner — a fuel fund, a waiting home, a named driver — and give the district the evidence to allocate resources. Clinical judgement stays yours; accountability becomes shared.",
        courseSlug: "community-domiciliary-midwifery",
      },
    ],
    flashcards: [
      {
        topic: "Auditing Community Practice",
        front: "What three layers of indicators does a community practice measure?",
        back: "Coverage (bookings, contacts, 48-hour newborn visits, defaulters traced), process (birth plans, uterotonics within one minute, partographs, referral feedback) and outcome (transfers, PPH, Apgar, stillbirth, feeding).",
      },
      {
        topic: "Auditing Community Practice",
        front: "What is a run chart for, in community audit?",
        back: "Plotting a monthly indicator over time so trends are visible — one bad event may be luck; a run of them is a system problem demanding a fix.",
      },
      {
        topic: "Auditing Community Practice",
        front: "Why review near-misses, and what process do deaths feed into?",
        back: "Near-misses are free lessons requiring only honesty; maternal and perinatal deaths feed the district MPDSR review — no blame, learning across the family, community, facility and referral chain.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Making Every Baby Count: Audit and Review of Stillbirths and Neonatal Deaths",
        year: "2016",
        note: "Audit and review methods adaptable to community practice. Educational reference — verify current WHO guidance.",
      },
      {
        organization: "Institute for Healthcare Improvement",
        title: "Science of Improvement: How to Improve",
        url: "https://www.ihi.org/resources/Pages/HowtoImprove/default.aspx",
        note: "Run charts, PDSA and closing the loop. Educational source — verify current version.",
      },
      {
        organization: "Ghana Health Service",
        title: "District Health Information Management System (DHIMS) reporting requirements",
        note: "Routine indicators for community and facility practice. Verify current version with your district health directorate.",
      },
    ],
  },
];
