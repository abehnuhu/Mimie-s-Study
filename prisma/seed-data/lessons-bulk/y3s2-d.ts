// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 3, Semester 2 — Batch D (Domiciliary Midwifery + Clinical Midwifery Practice)
// 16 lessons anchored to prisma/seed-data/anchors/y3s2-d.json
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "domiciliary-midwifery",
    moduleTitle: "Midwifery Beyond the Hospital",
    lessonTitle: "What Is Domiciliary Midwifery?",
    description:
      "Care that follows the mother home. The philosophy, the evidence and the daily reality of midwifery outside the hospital gate.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Define domiciliary midwifery and describe the forms it takes in Ghanaian communities.",
      "Explain the philosophy of continuity and woman-centred care, and the evidence that supports midwife-led models.",
      "Apply the concept of the referral safety net to decide what domiciliary care can and cannot safely carry.",
    ],
    tags: ["domiciliary", "introduction", "continuity of care", "chps"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Most of what you have learned so far happens inside walls. Domiciliary midwifery carries the care out of the facility and into the place the mother actually lives — her room, her compound, her village. In Ghana the tradition is deep and practical: district midwives riding postnatal rounds on a motorbike, outreach clinics held on market days, and today's CHPS zones that place a midwife or community health officer within walking distance of the family.\n\nThis lesson settles the definition, the philosophy and the evidence. What exactly is domiciliary midwifery, what is it not, and why does it deserve a whole course in your final year?",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Domiciliary midwifery is **midwifery care delivered in the mother's own home and community by a qualified midwife** — antenatal visits, planned home birth for carefully selected women, postnatal care and newborn follow-up. The philosophy is woman-centred and continuity-based: she knows you, you know her, and birth is treated as a normal life event until proven otherwise. Because you sit in her house, you see what the clinic never shows you — the kitchen, the distance to the water point, who nods when she speaks.\n\nThe evidence backs the philosophy when the system around it works. Reviews of midwife-led continuity models find more spontaneous vaginal births, fewer instruments and epidurals, and higher satisfaction, with no disadvantage for mothers or babies in well-functioning services — which is why WHO recommends such models where midwifery programmes are strong. The critical word is system: screening to select suitable women, a working referral pathway, and a pre-agreed emergency plan. Domiciliary care is not unassisted birth, and it is not for every woman.",
      },
      {
        type: "clinical_pearl",
        body: "The home tells truths the clinic hides — the food pot, the firewood, the sleeping space, the mother-in-law's tone. Walk in humble and observant. You are the guest, and the house is your new consulting room.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "During your community attachment you follow Sister Akosua, a midwife who has served the same cluster of villages for fifteen years. At a day-five postnatal visit she checks the mother's fundus and lochia, weighs the baby, then sits on the low stool, greets the grandmother, and asks what the family is eating this week. Before leaving she teaches the danger signs to the whole household and confirms the date of the next visit. She tells you she has caught many of these women as babies themselves.\n\nWhat can her way of working achieve that a clinic visit cannot, and why does it matter for safety?\n\nAnswer: Continuity builds trust, and a woman who trusts her midwife calls early — at the first heavy pad, the first fever — instead of waiting for a crisis. The home visit also exposes the living conditions that actually drive risk, and teaching the whole household plants your warning signs with the people who will act on them at 2 am. That is how domiciliary care earns its safety: not by replacing the hospital, but by reaching it sooner.",
      },
      {
        type: "memory_trick",
        body: "Think HOME: Her environment is the consulting room, One known midwife across pregnancy and after, Midwife-led care that guards normality, Exit plan for referral packed into every visit.",
      },
      {
        type: "summary",
        body: "- Domiciliary midwifery is qualified midwifery care in the mother's home and community.\n- Its pillars are continuity, a woman-centred philosophy and respect for her environment.\n- Evidence supports midwife-led continuity models where screening and referral pathways are strong.\n- It is a system — selection, records, transport, emergency plan — never just goodwill.\n- The home visit reaches the family, and the family is who acts when danger comes at night.",
      },
    ],
    questions: [
      {
        topic: "Domiciliary Midwifery",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which statement best defines domiciliary midwifery?",
        options: [
          "Birth care handed over entirely to traditional birth attendants",
          "Midwifery care delivered in the mother's own home and community by a qualified midwife",
          "Emergency outreach services offered only when a hospital calls for help",
          "Midwifery performed by student midwives without supervision",
        ],
        correctIndex: 1,
        explanation:
          "Domiciliary midwifery is care brought to the mother's own environment by a qualified midwife. It is not unassisted birth, not care by untrained attendants, and it is far more than emergency response.",
        courseSlug: "domiciliary-midwifery",
      },
      {
        topic: "Domiciliary Midwifery",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What does the evidence on midwife-led continuity models consistently show?",
        options: [
          "Higher caesarean rates with no other benefit",
          "More spontaneous vaginal births, fewer interventions and greater satisfaction, with no disadvantage in well-functioning services",
          "Similar interventions but much higher perinatal loss everywhere it is tried",
          "Benefits only for women who birth inside hospitals",
        ],
        correctIndex: 0,
        explanation:
          "Midwife-led continuity models are associated with more spontaneous vaginal births, fewer instrumental births and epidurals, and higher satisfaction, without extra harm for mother or baby where the surrounding system functions well — the basis for WHO's support of these models.",
        courseSlug: "domiciliary-midwifery",
      },
      {
        topic: "Domiciliary Midwifery",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A community midwife says she attends home births without a referral plan because she trusts her skills. What is the correct assessment?",
        options: [
          "Skill alone is enough — referral plans are for hospitals",
          "Home birth should be abandoned entirely so this cannot happen",
          "Safe domiciliary care requires selection criteria, records and a working emergency and referral plan — not confidence alone",
          "It is acceptable as long as she never tells anyone",
        ],
        correctIndex: 2,
        explanation:
          "The safety of domiciliary care comes from a system: screening women for suitability, keeping records, and a pre-arranged pathway for transfer. Individual skill matters, but emergencies do not negotiate with confidence.",
        courseSlug: "domiciliary-midwifery",
      },
    ],
    flashcards: [
      {
        topic: "Domiciliary Midwifery",
        front: "What defines domiciliary midwifery?",
        back: "Care delivered in the mother's own home and community by a qualified midwife — antenatal visits, selected home births and postnatal follow-up, built on continuity and a working referral system.",
      },
      {
        topic: "Evidence for Midwife-Led Care",
        front: "What do reviews of midwife-led continuity models show?",
        back: "More spontaneous vaginal births, fewer interventions and higher satisfaction, with no disadvantage for mothers or babies where services function well — WHO supports such models in strong midwifery systems.",
      },
      {
        topic: "Safety Net",
        front: "What makes domiciliary midwifery safe rather than risky?",
        back: "Careful selection of women, accurate records, a functioning referral pathway and a pre-agreed emergency transport plan — the system around the midwife.",
      },
    ],
    sources: [
      {
        organization: "Cochrane Database of Systematic Reviews",
        title: "Midwife-Led Continuity Models versus Other Models of Care for Childbearing Women (Sandall et al.)",
        year: "2016",
        url: "https://doi.org/10.1002/14651858.CD004667.pub5",
        note: "Foundational evidence review cited by WHO.",
      },
      {
        organization: "World Health Organization",
        title: "Intrapartum Care for a Positive Childbirth Experience",
        year: "2018",
        url: "https://www.who.int/publications/i/item/9789241550215",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "Verify current edition with your district directorate.",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "domiciliary-midwifery",
    moduleTitle: "Midwifery Beyond the Hospital",
    lessonTitle: "The Home Visit: What to Look For",
    description:
      "A structure for visiting mothers at home — the assessment that fits inside a house call.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the structure of a purposeful home visit, from preparation to exit teaching.",
      "Explain what the household environment adds to clinical assessment.",
      "Apply the HOUSE framework to detect postnatal problems that need referral.",
    ],
    tags: ["home visit", "assessment", "postnatal", "community"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A home visit can drift: you greet, weigh the baby, and leave having learned nothing. Or it can be one of the sharpest clinical instruments you own. The difference is structure. This lesson gives you a repeatable frame that fits inside thirty to forty-five minutes and turns a social call into an assessment of mother, baby and household together.\n\nThe skills are ones you already have — fundal palpation, lochia checks, newborn weighing. What changes is the setting and the frame around them.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Prepare before you knock: review her record, know why you are going, and pack the essentials — scale, blood pressure set, gloves, her booklet. On arrival, greet, introduce yourself and ask permission before you examine anything. Then walk through **HOUSE**: **Her** health (observations, fundus, lochia, breasts, mood, pain), **Offspring** (weight, feeding, cord, temperature, danger signs), **Use of the home** (water, food, warmth, sleeping space, sanitation), **Support** (who helps, who decides, money, transport), and **Exit** (danger-sign teaching with teach-back, the next contact, referral if needed).\n\nWard basics become diagnosis at home. Pallor in the doorway light raises anaemia. A fundus still above the umbilicus on day six suggests subinvolution or retained products. Offensive lochia, an empty cooking pot, a baby who has not woken to feed — each is data the clinic could not collect. Write your findings before you leave the compound, while the details are fresh.",
      },
      {
        type: "clinical_pearl",
        body: "Sit where she sits. The kitchen, the firewood and the water pot will teach you more about her nutrition, workload and infection risk than any questionnaire. And measure the fundus before you get distracted by the baby — mothers come first in the assessment, even at home.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You make a routine day-six postnatal visit. The mother greets you warmly but looks pale and tired. Her fundus is soft and palpable two finger-breadths above the umbilicus, lochia is red and moderate without odour, temperature is 36.8 degrees, and the baby is breastfeeding well eight times a day. There is no phone credit in the house and the husband works in Accra.\n\nWhich findings need action, and what will you do?\n\nAnswer: Pallor plus a soft fundus still above the umbilicus on day six points to subinvolution — likely retained products — with a real risk of secondary bleeding, and possible anaemia. Massage the uterus, advise her to empty her bladder, teach the pad-an-hour rule, and arrange review at the health centre the same day or the next morning at the latest. Note the weak emergency communication: agree with the grandmother, who decides in the husband's absence, exactly what would trigger an immediate trip to the facility.",
      },
      {
        type: "memory_trick",
        body: "Walk every visit through the HOUSE: Her health, Offspring, Use of the home, Support, Exit plan. If you finish a visit without walking through all five rooms of the word, you are still standing at the door.",
      },
      {
        type: "summary",
        body: "- Prepare before you go: review the record, know the purpose, pack your kit.\n- Greet, ask permission and ensure privacy before any examination.\n- HOUSE covers Her health, Offspring, Use of the home, Support and Exit teaching.\n- Ward signs gain power at home: pallor, high soft fundus, offensive lochia, a baby not feeding.\n- Involve the household decision-maker in the exit plan — they act when you are gone.",
      },
    ],
    questions: [
      {
        topic: "The Home Visit",
        type: "MCQ",
        difficulty: "Easy",
        stem: "You arrive at a mother's compound for a postnatal visit. What is the best first action?",
        options: [
          "Greet the household, introduce yourself and ask permission before assessing anyone",
          "Weigh the baby immediately to save time",
          "Ask the neighbours how the mother is doing first",
          "Scold the mother for missing her clinic appointment",
        ],
        correctIndex: 0,
        explanation:
          "Respect opens the door to honest disclosure. Greeting, introducing yourself and asking permission builds the trust the whole visit depends on — and it is a professional requirement, not a courtesy.",
        courseSlug: "domiciliary-midwifery",
      },
      {
        topic: "The Home Visit",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "At a day-six postnatal home visit you find the fundus soft and palpable two finger-breadths above the umbilicus. How do you interpret this?",
        options: [
          "Normal involution for day six",
          "A full bladder — simply ask her to void and ignore the rest",
          "The baby is feeding too often and over-stimulating the uterus",
          "Subinvolution, possibly retained products — she needs review and referral",
        ],
        correctIndex: 3,
        explanation:
          "By day six the fundus should be well below the umbilicus, descending about a centimetre a day from the umbilicus on day one. A soft fundus still above it suggests subinvolution, commonly from retained products or infection, and carries a risk of secondary postpartum haemorrhage — arrange review.",
        courseSlug: "domiciliary-midwifery",
      },
      {
        topic: "The Home Visit",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which observation during a postnatal home visit most directly informs your nutrition counselling?",
        options: [
          "The brand of television in the sitting room",
          "What is cooking and what food is stored in the kitchen",
          "The number of rooms in the house",
          "The type of roof over the compound",
        ],
        correctIndex: 1,
        explanation:
          "Today's soup and the food store tell you what the family actually eats, so your counselling can fit real meals — beans here, fish there, kontomire in the pot. Teaching that matches the kitchen is teaching that gets used.",
        courseSlug: "domiciliary-midwifery",
      },
    ],
    flashcards: [
      {
        topic: "Home Visit Framework",
        front: "What does HOUSE stand for in a home visit?",
        back: "Her health, Offspring, Use of the home, Support, Exit plan — the five rooms of every structured visit.",
      },
      {
        topic: "Postnatal Assessment",
        front: "Where should the fundus be on day six after birth?",
        back: "Well below the umbilicus — it starts at the umbilicus on day one and descends about 1 cm per day, becoming impalpable by about day 10-12. Still high and soft on day six means subinvolution.",
      },
      {
        topic: "Home Visit Practice",
        front: "Why should you sit where the mother sits?",
        back: "The kitchen, firewood and water pot reveal nutrition, workload and hygiene far better than questions — the environment is part of the assessment.",
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
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "Verify current edition with your district directorate.",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "domiciliary-midwifery",
    moduleTitle: "Midwifery Beyond the Hospital",
    lessonTitle: "Home Birth: Assessing Suitability and Safety",
    description:
      "Choosing who can safely birth at home — the selection screen, the kit and the plan that carries the risk.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the selection criteria that keep planned home birth safe for mother and baby.",
      "Explain the role of the emergency plan and the birth kit in domiciliary safety.",
      "Apply the criteria to real booking conversations, including when to say no with kindness.",
    ],
    tags: ["home birth", "selection", "emergency plan", "risk screening"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A woman in your CHPS zone is thirty-eight weeks pregnant and asks you to attend her birth at home. Saying yes is the easy part; knowing whether to say yes is the skill. This lesson covers the selection screen, the preparation and the plan that make a planned home birth a reasonable choice instead of a gamble.\n\nOne idea carries everything: the safety of a home birth is mostly decided before labour ever begins — at booking, at screening, and at the family meeting where the transport plan is agreed.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The screen: a healthy woman with an uncomplicated pregnancy, at term (37-42 weeks), one baby, head down, no previous caesarean or uterine scar, no hypertensive disease, no antepartum haemorrhage, no severe anaemia, no story of severe postpartum haemorrhage, labour starting and progressing normally, a support person present, and a home within realistic reach of a referral facility. She must understand and accept transfer if the picture changes — that conversation is part of consent, not a footnote.\n\nThe kit and the plan: a clean delivery kit (gloves, cord clamp, sterile blade or scissors, gauze, plastic sheet, soap), your blood pressure set, thermometer, fetoscope, partograph, a bag-mask for the newborn, and a uterotonic — oxytocin where the cold chain holds, misoprostol where it cannot, because misoprostol is heat-stable and suited to community use. The **emergency plan** names the transport, the driver, the money, the phone numbers and the family members briefed to move at night. PHONE, FUEL, FUNDS, FAMILY.",
      },
      {
        type: "clinical_pearl",
        body: "Never let the sweetness of the request carry the decision. A previous caesarean, pre-eclampsia, twins, breech, severe anaemia or a past massive bleed all point to the facility. Saying no warmly, and arranging the best facility birth you can, is still midwifery.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Adjoa is twenty-nine, second pregnancy. Her first birth was normal and at home, and her blood pressure today is 118/74 with a haemoglobin of 11.4 g/dL. The baby is cephalic and two-fifths palpable, her house is twenty-five minutes by taxi from the district hospital, and her husband supports home birth. Then she adds, casually, that after her last baby she lost what she calls a basin of blood and spent three days in the facility on a drip.\n\nDoes Adjoa qualify for a planned home birth, and how will you counsel her?\n\nAnswer: No. A previous severe postpartum haemorrhage is a strong risk factor for recurrence, and a home setting cannot offer the oxytocin infusion, examination for retained products, or blood she may need within minutes. Counsel her warmly: praise her good health, explain that the past bleed — not her body's ability — is the reason, and arrange a facility birth with full postpartum vigilance. Offer your postnatal home visits from day one so she keeps the continuity she came to you for.",
      },
      {
        type: "memory_trick",
        body: "Two sentences to carry into every booking: the plan is PHONE, FUEL, FUNDS, FAMILY. The screen is one baby, head down, at term, scar-free, vitals steady, no bleeding story — and a road that reaches help in under an hour.",
      },
      {
        type: "summary",
        body: "- Selection keeps home birth safe: term, singleton, cephalic, scar-free, stable, no bleeding history.\n- Previous caesarean, pre-eclampsia, breech, twins, severe anaemia or past PPH mean facility birth.\n- The kit: clean delivery pack, monitoring tools, partograph, newborn bag-mask, uterotonic.\n- Misoprostol covers PPH prevention where refrigeration for oxytocin cannot be trusted.\n- The emergency plan — PHONE, FUEL, FUNDS, FAMILY — is agreed with the household before labour.",
      },
    ],
    questions: [
      {
        topic: "Home Birth Selection",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which woman should be advised to birth in a facility rather than at home?",
        options: [
          "A second-time mother whose first birth was straightforward at home",
          "A first-time mother with blood pressure 112/70 at term and a cephalic baby",
          "A mother at 39 weeks with an engaged head and a supportive family nearby",
          "A third-time mother whose previous birth was by caesarean section",
        ],
        correctIndex: 3,
        explanation:
          "A previous caesarean leaves a uterine scar with a real risk of rupture in labour — an emergency only theatre can answer. The other three scenarios describe low-risk women for whom planned home birth may be appropriate where the system supports it.",
        courseSlug: "domiciliary-midwifery",
      },
      {
        topic: "Home Birth Safety",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which set of items belongs in the emergency plan for a planned home birth?",
        options: [
          "Agreed transport, a driver, money for fuel and treatment, phone numbers and a briefed family",
          "A promise that transfer will never be needed",
          "Instructions to call the midwife only after the baby is born",
          "A stock of local herbs to substitute for referral",
        ],
        correctIndex: 0,
        explanation:
          "The emergency plan is the safety net: named transport, fuel, funds, working phone numbers and family members who know exactly when to move. Promising no transfer, delaying contact, or substituting herbs removes the net entirely.",
        courseSlug: "domiciliary-midwifery",
      },
      {
        topic: "Home Birth Safety",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In a community setting with no reliable refrigeration, which uterotonic is best suited to preventing postpartum haemorrhage at a home birth?",
        options: [
          "Oxytocin, because it is equally heat-stable",
          "Ergometrine, because it is safe in hypertension",
          "Misoprostol, because it is heat-stable and effective for PPH prevention",
          "Normal saline infusion, because volume expansion prevents bleeding",
        ],
        correctIndex: 2,
        explanation:
          "Misoprostol keeps its potency without a cold chain, making it the practical choice for PPH prevention in community and home births where oxytocin storage cannot be guaranteed. Ergometrine is temperature-sensitive and risky with hypertension; saline treats neither the cause nor the risk.",
        courseSlug: "domiciliary-midwifery",
      },
    ],
    flashcards: [
      {
        topic: "Home Birth Selection",
        front: "Name four factors that push a planned home birth towards facility care.",
        back: "Previous caesarean or uterine scar; hypertensive disease or pre-eclampsia; malpresentation or twins; severe anaemia or a history of severe postpartum haemorrhage — plus preterm labour.",
      },
      {
        topic: "Home Birth Safety",
        front: "Why is misoprostol useful for PPH prevention at community births?",
        back: "It is heat-stable, so it works without a cold chain — unlike oxytocin and ergometrine — making it practical for home and CHPS-level births.",
      },
      {
        topic: "Emergency Planning",
        front: "What four things make up the PHONE-FUEL-FUNDS-FAMILY plan?",
        back: "A working phone and numbers to call; fuelled, agreed transport; money set aside for referral and treatment; family members briefed on when to move — all agreed before labour.",
      },
    ],
    sources: [
      {
        organization: "National Institute for Health and Care Excellence (NICE)",
        title: "Intrapartum Care for Healthy Women and Babies (CG190)",
        year: "2014",
        url: "https://www.nice.org.uk/guidance/cg190",
        note: "Includes home birth suitability guidance; check for updates.",
      },
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
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "domiciliary-midwifery",
    moduleTitle: "Community Antenatal and Postnatal Care",
    lessonTitle: "Antenatal Care in the Community",
    description:
      "Taking the clinic to the mother — outreach antenatal care that actually finds and keeps women.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe how antenatal contacts are organised and adapted in community settings.",
      "Explain defaulter tracing and the use of maternity waiting homes for women far from facilities.",
      "Apply antenatal assessment findings, such as a lagging fundal height, to a community referral decision.",
    ],
    tags: ["antenatal", "community", "outreach", "defaulter tracing"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Not every pregnant woman can travel two hours on a tro-tro for a check-up — and the one who cannot is often the one who most needs one. Community antenatal care takes the clinic to the mother: outreach points at CHPS compounds, schools and market squares, home visits, and registers that keep track of every pregnancy in the zone.\n\nThis lesson is about making that outreach clinically real — what you check, what you give, who you involve, and what you do when a woman stops coming.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "WHO recommends eight antenatal contacts; in the community you adapt the calendar to the reality — fixed outreach days timed to market days, and door-to-door follow-up in between. Every contact carries the same five: **check the mother** (history, blood pressure, temperature, anaemia screen), **check the baby** (symphysis-fundal height, fetal heart with a Pinard), **give the medicine** (iron and folate daily, IPTp-SP monthly from the second trimester, tetanus immunisation), **teach the danger signs**, and **review the birth plan** — destination, transport, money, blood donor, companion.\n\nThe community side of the work is people. Volunteers and mother-support groups find the women who stop attending; the register flags them; a home visit finds out why. For women who live far from a facility or carry a risk near term, a **maternity waiting home** close to the hospital removes distance from the list of things that can kill. Nothing in this paragraph is optional — defaulter tracing is the difference between a programme and a wish.",
      },
      {
        type: "clinical_pearl",
        body: "A missed contact is a message, not a statistic. The woman who disappears from your register is often hiding a problem — no transport money, a disapproving husband, bleeding she has not named. Find her, and you have usually found the risk.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At an outreach clinic held in a village primary school, a woman of thirty-two weeks by certain dates attends for the first time since week twenty-four — she missed two contacts because of transport money. Her blood pressure is 124/78, urine is clear, the fetal heart is 144, but her symphysis-fundal height measures only 26 cm. She feels movements normally. Your mentor is seeing another woman.\n\nWhat is your reading of this finding, and what will you recommend?\n\nAnswer: A fundal height lagging around six centimetres behind certain dates at a single visit still demands action: remeasure to confirm, then report to your mentor and arrange referral for ultrasound growth assessment, because fetal growth restriction is the working suspicion. Teach her daily count-to-ten movements, book a review within a week, catch up her IPTp-SP, and note in the register that her missed contacts triggered this — with the defaulter list working, she should have been found at week twenty-six.",
      },
      {
        type: "memory_trick",
        body: "Count on your five fingers at every community contact: check the mother, check the baby, give the medicine, teach the danger signs, review the birth plan. Five fingers, every woman, every time.",
      },
      {
        type: "summary",
        body: "- Community ANC adapts the WHO eight-contact model to outreach days and home visits.\n- Each contact: mother check, baby check, medicines, danger-sign teaching, birth plan review.\n- Iron and folate daily, IPTp-SP monthly from the second trimester, tetanus immunisation.\n- Registers and volunteers drive defaulter tracing — missed contacts are found, not filed.\n- A lagging fundal height with certain dates is a referral for growth assessment, not reassurance.",
      },
    ],
    questions: [
      {
        topic: "Community Antenatal Care",
        type: "MCQ",
        difficulty: "Easy",
        stem: "How many antenatal contacts does WHO's 2016 recommendation set out for a positive pregnancy experience?",
        options: [
          "Four",
          "Six",
          "Eight",
          "Twelve",
        ],
        correctIndex: 2,
        explanation:
          "WHO 2016 recommends eight contacts across pregnancy, replacing the older four-visit model — community programmes adapt the timing but keep the number as the standard.",
        courseSlug: "domiciliary-midwifery",
      },
      {
        topic: "Community Antenatal Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman in your zone misses two consecutive antenatal contacts. What does good community practice look like?",
        options: [
          "Wait for her to return and scold her at the next visit",
          "Trace her actively using the register and community volunteers, and visit at home",
          "Record her as lost to follow-up and move on",
          "Send her a letter through the postal service",
        ],
        correctIndex: 1,
        explanation:
          "Defaulter tracing is the engine of community antenatal care: the register flags the gap, volunteers and neighbours locate her, and a home visit uncovers the reason — which is often itself a clinical risk.",
        courseSlug: "domiciliary-midwifery",
      },
      {
        topic: "Community Antenatal Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "At 32 weeks by certain dates, a mother's symphysis-fundal height is 26 cm and a repeat measurement agrees. What is the best next step?",
        options: [
          "Reassure her that small mothers have small babies",
          "Review in four weeks at the next outreach",
          "Advise her to eat more and recheck next month",
          "Refer for ultrasound growth assessment and teach daily fetal movement counting",
        ],
        correctIndex: 3,
        explanation:
          "A fundal height persistently lagging behind certain dates raises the possibility of fetal growth restriction, which carries stillbirth risk. The response is referral for growth assessment plus movement counting and close review — not dietary reassurance or waiting.",
        courseSlug: "domiciliary-midwifery",
      },
    ],
    flashcards: [
      {
        topic: "Community Antenatal Care",
        front: "What are the 'five fingers' of every community antenatal contact?",
        back: "Check the mother, check the baby, give the medicine, teach the danger signs, review the birth plan.",
      },
      {
        topic: "Community Antenatal Care",
        front: "How many antenatal contacts does WHO 2016 recommend?",
        back: "Eight contacts — adapted in the community through outreach days, home visits and defaulter tracing.",
      },
      {
        topic: "Community Antenatal Care",
        front: "What is a maternity waiting home for?",
        back: "Housing women who live far from a facility or carry risk near term, close to the hospital — so distance cannot delay birth care.",
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
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "Verify current edition with your district directorate.",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "domiciliary-midwifery",
    moduleTitle: "Community Antenatal and Postnatal Care",
    lessonTitle: "Postnatal Care in the Community",
    description:
      "Following the mother home after birth — the visits that catch bleeding, sepsis and sadness early.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the WHO postnatal contact schedule and how community visits deliver it.",
      "Explain the mother-and-baby checks and danger signs covered at each visit.",
      "Apply that framework to distinguish baby blues from depression and normal lochia from sepsis.",
    ],
    tags: ["postnatal", "community", "home visit", "danger signs"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Whether a woman births at a district hospital or in her own home, the dangerous days happen at home — the first week after birth carries the highest risk of haemorrhage, sepsis and eclampsia, far from any theatre. Community postnatal care is the bridge: scheduled visits that bring clinical eyes into the house before problems become emergencies.\n\nThis lesson maps the schedule, the checks and the danger signs, and adds the quieter skill — noticing a mother who is not herself.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "WHO recommends at least four postnatal contacts: **within 24 hours** of birth, at **48-72 hours**, between **days 7 and 14**, and at **6 weeks**, with an additional check around 3-4 weeks. After a home birth, the first contact is you, walking through her door. Every visit covers the mother — blood pressure, temperature, breasts and feeding, fundus, lochia, perineum, urine, mood — and the baby: weight, feeding, cord, temperature and danger signs. Postpartum pre-eclampsia still exists at six weeks, so the blood pressure machine stays in the bag long after the birth.\n\nDanger signs on the mother's side are bleeding that soaks a pad in an hour, fever, headache with visual changes or epigastric pain, offensive lochia, a painful red breast, calf swelling, and thoughts of harming herself or the baby. On the baby's side: poor feeding, fast breathing of 60 or more, fever or coldness, yellow palms and soles, a red draining cord, and convulsions. Every visit also asks one quiet question of the household: could you reach the facility tonight if you had to? And family planning belongs at every contact — **ovulation returns before the first menses**, often around four weeks.",
      },
      {
        type: "clinical_pearl",
        body: "The quiet week after birth is when the danger is loudest. Haemorrhage, sepsis and eclampsia do not respect discharge papers — they read the calendar. Visit on schedule, and teach the household the pad-an-hour rule before you leave.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "On a day-three visit after a facility birth, the mother greets you in tears. She cries easily, laughs at the baby's sneeze, sleeps whenever the baby sleeps, eats well, and has no thoughts of harming herself. The baby breastfeeds ten times in 24 hours with heavy wet nappies, and every physical check on mother and baby is normal.\n\nWhat is happening, and what will you tell her?\n\nAnswer: This is the baby blues — tearfulness and mood swings starting around days three to five, driven by the hormonal drop, which settles within about two weeks with support and rest. Explain it kindly, reassure the family that she is not weak, arrange a day-seven-to-ten review, and name the red lines clearly: if the low mood persists beyond two weeks, stops her functioning, or any thought of harming herself or the baby appears, she must be seen the same day. Document the conversation and the plan.",
      },
      {
        type: "memory_trick",
        body: "Two rhymes for every visit: for the mother, 5 Bs and the blues — Breasts, Belly, Bleeding, Bladder, Bowels, plus mood. For the baby: warm, feeding, breathing, cord, colour, weight.",
      },
      {
        type: "summary",
        body: "- WHO postnatal contacts: within 24 hours, 48-72 hours, days 7-14, and 6 weeks, plus a 3-4 week check.\n- Each visit covers mother and baby together — never one without the other.\n- Mother's danger signs: pad-an-hour bleeding, fever, headache and vision changes, offensive lochia, mastitis, calf pain, dark thoughts.\n- Baby's danger signs: poor feeding, breathing 60 or more, fever or cold, yellow palms, red cord, convulsions.\n- Discuss family planning at every contact — ovulation precedes the first menses.",
      },
    ],
    questions: [
      {
        topic: "Community Postnatal Care",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A mother gives birth at home with your care. When should her first postnatal contact take place?",
        options: [
          "At 48-72 hours after the birth",
          "Within 24 hours of the birth",
          "On day 7",
          "At 6 weeks",
        ],
        correctIndex: 1,
        explanation:
          "The first contact falls within 24 hours — the highest-risk window for postpartum haemorrhage and newborn problems. Later contacts follow at 48-72 hours, days 7-14 and 6 weeks.",
        courseSlug: "domiciliary-midwifery",
      },
      {
        topic: "Community Postnatal Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "On a day-five visit, the mother has a temperature of 38.4 degrees, tender fundus and foul-smelling lochia. What does this mean?",
        options: [
          "Puerperal sepsis — manage per guideline and refer the same day",
          "A normal lochia change for day five",
          "Simple breast engorgement — support and recheck next week",
          "Baby blues presenting with fever",
        ],
        correctIndex: 0,
        explanation:
          "Fever with a tender uterus and offensive lochia is puerperal sepsis — fever after birth is never normal. It needs same-day treatment and referral; waiting converts endometritis into septicaemia.",
        courseSlug: "domiciliary-midwifery",
      },
      {
        topic: "Community Postnatal Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why should family planning be discussed at every postnatal contact rather than after menses returns?",
        options: [
          "Contraception must wait until menses returns to be effective",
          "Contraception always spoils breast milk, so it must be introduced early",
          "Ovulation can return before the first menses, so the risk of a short-spaced pregnancy is real",
          "Family planning decisions belong to the husband alone",
        ],
        correctIndex: 2,
        explanation:
          "Ovulation commonly resumes before the first postpartum menses, often within about four weeks, and a conception before the first period is invisible until it is a pregnancy. Postpartum family planning, including LAM criteria, is part of every visit.",
        courseSlug: "domiciliary-midwifery",
      },
    ],
    flashcards: [
      {
        topic: "Community Postnatal Care",
        front: "Name the WHO postnatal contact schedule.",
        back: "Within 24 hours, at 48-72 hours, between days 7 and 14, and at 6 weeks — with an additional contact around 3-4 weeks.",
      },
      {
        topic: "Postnatal Assessment",
        front: "What are the mother's 5 Bs at a postnatal visit?",
        back: "Breasts, Belly (fundus), Bleeding (lochia), Bladder, Bowels — checked alongside mood, blood pressure and temperature.",
      },
      {
        topic: "Postnatal Mood",
        front: "How do baby blues differ from postpartum depression?",
        back: "Blues: tearfulness from days 3-5, resolving within about two weeks, functioning intact. Depression: low mood beyond two weeks with loss of function — and any thought of harm needs same-day care.",
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
        title: "Myles' Textbook for Midwives, 17th ed.",
        year: "2020",
        note: "Standard midwifery reference; verify current edition.",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "domiciliary-midwifery",
    moduleTitle: "Community Antenatal and Postnatal Care",
    lessonTitle: "Following the Newborn at Home",
    description:
      "Weighing, feeding checks and danger-sign teaching — the newborn follow-up visits that keep small problems small.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the components of a newborn follow-up visit: weight, feeding, warmth, cord and danger signs.",
      "Explain normal newborn weight patterns and the thresholds that trigger review.",
      "Apply the danger-sign screen to decide which baby needs same-day referral.",
    ],
    tags: ["newborn", "follow-up", "weight", "cord care", "danger signs"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A newborn cannot tell you what is wrong, but a newborn at home can tell you plenty — if you know how to look. The follow-up visits in the first two weeks are where feeding problems, infections and jaundice announce themselves quietly, long before they shout.\n\nThis lesson equips you for the newborn side of every postnatal home visit: the weigh-in, the feeding assessment, the cord check, the warmth check, and the danger signs you teach the family to notice between your visits.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Weigh the baby naked on the same scale at every visit and plot the number. Babies normally lose up to about 7-10 percent of birth weight in the first days and regain it by day ten to fourteen; a loss beyond 10 percent, or failure to regain by two weeks, needs review. Feeding: at least eight feeds in 24 hours, waking for them, with six or more heavy wet nappies a day from day five. Warmth: a hat, skin-to-skin contact, and a check of the feet — **cold feet mean a cold baby**, and cold babies become sick babies.\n\nThe cord stays clean and dry; Ghana's newborn care policy directs chlorhexidine application in the first week — and nothing else, no shea butter, no powders, no cow dung. Redness spreading from the base or draining pus is infection heading for sepsis: refer. Jaundice appearing on day one, or reaching the palms and soles at any time, is never physiological. Finish every visit by teaching the family the danger signs — poor feeding, fast breathing of 60 or more, fever or coldness, yellow palms, red cord, convulsions, a baby who will not wake — and confirm immunisation and birth registration dates.",
      },
      {
        type: "clinical_pearl",
        body: "Weigh the baby at every single visit. A number that moves tells you more than any question you can ask — and the parents' scale-reading becomes its own early-warning system between your visits.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At a day-ten visit, a baby who weighed 3.2 kg at birth now weighs 2.85 kg. He is noticeably quiet, feeds only four to five times in 24 hours, and has had three wet nappies all day. His mother says proudly that he is such a peaceful baby, hardly any trouble at all. The cord has separated and the abdomen is soft.\n\nWhat is your assessment, and what will you do?\n\nAnswer: An 11 percent weight loss with infrequent feeding, few wet nappies and abnormal sleepiness points to insufficient intake heading towards dehydration. 'Peaceful' here is a warning, not a virtue — underfed babies conserve energy by sleeping. Assess breastfeeding directly, support attachment, and refer the same day for feeding assessment and possible supplementation: this is beyond reassurance. Teach the mother feeding cues, arrange daily follow-up, and record the weight, the feeding count and the plan in her booklet.",
      },
      {
        type: "memory_trick",
        body: "3 Ws and a cord: Weight at every visit, Warm feet, Wide-awake feeds (at least eight a day) — and a clean, dry cord drying into a mummy, with nothing applied but policy-approved chlorhexidine.",
      },
      {
        type: "summary",
        body: "- Weight, naked and plotted, at every visit: losing more than 10 percent or not regaining by two weeks means review.\n- Feeding targets: at least 8 feeds in 24 hours and 6 or more heavy wet nappies daily by day five.\n- Cold feet mean a cold baby — hat, skin-to-skin and warmth are treatment, not comfort.\n- Cord care is clean, dry and chlorhexidine per national policy; redness or pus means referral.\n- Day-one jaundice or yellow palms and soles at any time is urgent, not physiological.",
      },
    ],
    questions: [
      {
        topic: "Newborn Follow-Up",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A newborn's weight loss in the first days exceeds which percentage before it requires clinical review?",
        options: [
          "5%",
          "10%",
          "15%",
          "20%",
        ],
        correctIndex: 1,
        explanation:
          "Losses up to about 7-10 percent of birth weight are expected as the baby sheds fluid; beyond 10 percent, or failure to regain birth weight by day ten to fourteen, signals insufficient intake and needs review.",
        courseSlug: "domiciliary-midwifery",
      },
      {
        topic: "Newborn Follow-Up",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which newborn finding at a home visit requires same-day referral?",
        options: [
          "Yellow colour of the face only on day four, breastfeeding well",
          "Dry, separating cord with no redness on day ten",
          "Eight breastfeeds in the last 24 hours with six wet nappies",
          "Respiratory rate of 70 breaths per minute with grunting",
        ],
        correctIndex: 3,
        explanation:
          "A respiratory rate of 70 exceeds the fast-breathing threshold of 60, and grunting signals respiratory distress — possible sepsis or pneumonia, and a same-day referral. Face-only jaundice on day four in a feeding baby, a drying cord and normal feeding output are reassuring.",
        courseSlug: "domiciliary-midwifery",
      },
      {
        topic: "Newborn Follow-Up",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is correct cord care for a newborn at home?",
        options: [
          "Keep it clean and dry, applying chlorhexidine in the first week as national policy directs",
          "Apply shea butter or powder to keep the stump soft",
          "Clean vigorously with surgical spirit at every nappy change",
          "Keep the stump wrapped in a bandage until it falls",
        ],
        correctIndex: 0,
        explanation:
          "Clean and dry, with policy-directed chlorhexidine in the first week, is the standard that prevents omphalitis. Traditional applications and occlusion invite the bacteria that turn a cord stump into sepsis.",
        courseSlug: "domiciliary-midwifery",
      },
    ],
    flashcards: [
      {
        topic: "Newborn Weight",
        front: "What weight rules govern the first two weeks?",
        back: "Up to about 7-10 percent loss is normal; more than 10 percent, or not regaining birth weight by day 10-14, requires review. Weigh naked, on the same scale, every visit.",
      },
      {
        topic: "Newborn Feeding",
        front: "What feeding output says a breastfed newborn is getting enough?",
        back: "At least 8 feeds in 24 hours, waking for them, and 6 or more heavy wet nappies daily from day five — plus a baby who is alert when awake.",
      },
      {
        topic: "Newborn Danger Signs",
        front: "Name four newborn danger signs a family should never watch and wait on.",
        back: "Poor feeding or not waking; breathing 60 or more per minute; fever or a cold baby (check the feet); yellow palms and soles, a red draining cord, or convulsions.",
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
        organization: "Ghana Health Service / Ministry of Health",
        title: "National Newborn Health Strategy and Action Plan",
        year: "2014",
        note: "Verify current edition and chlorhexidine cord care policy with your district.",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241548993",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "domiciliary-midwifery",
    moduleTitle: "Safety and Trust in the Community",
    lessonTitle: "Recognising Danger and Referring from Home",
    description:
      "When the home becomes the danger — stabilising what you can and moving the rest, fast and with a plan.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the 5 Rs framework for managing emergencies in the community.",
      "Explain first-line responses to postpartum haemorrhage and eclampsia in the home.",
      "Apply the structured call-ahead referral to organise safe transfer.",
    ],
    tags: ["referral", "emergency", "pph", "eclampsia"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "In the hospital, an emergency arrives with a team. In the home, an emergency arrives with you — alone, with the kit you carried, and a forty-minute road between you and help. The community midwife's emergency skill is not heroic medicine; it is disciplined sequence: recognise early, respond with the few things that matter, and move the woman with a handover that starts her treatment before she arrives.\n\nThis lesson gives you that sequence, with the two emergencies you are most likely to meet: postpartum haemorrhage and eclampsia.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The 5 Rs. **Recognise** — screen every visit and every labour with the danger-sign lists, and trust a rising pulse or a mother who 'just looks wrong'. **Respond** — with first-line actions only: for PPH, call for help, rub the uterus to a contraction, empty the bladder, give your uterotonic and estimate the loss; for eclampsia, left lateral, airway protected, nothing in the mouth, magnesium sulfate loading per your protocol, and urgent transfer; for a newborn who will not breathe, dry, stimulate and ventilate with the bag-mask. **Ring** — call the receiving facility ahead and deliver a structured handover: who she is, what happened, your findings, the drugs you gave with doses and times, and your estimated arrival. **Record** — the referral note in duplicate, written before you travel. **Refer** — transport, companion, warm, positioned, and accompanied by you whenever possible.\n\nAround the emergency sits the system you built in calmer weeks: the transport list, the emergency fund, the phone tree, the maternity waiting home. Emergencies are managed in minutes but prepared in months.",
      },
      {
        type: "clinical_pearl",
        body: "Phone before the road. A call-ahead handover lets the receiving team prepare the theatre, the oxytocin and the blood before her tro-tro reaches the gate — you are the first responder and the ambulance controller in one. And a deteriorating woman never travels without a competent companion.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Twenty minutes after a straightforward home birth, the mother soaks two pads and the blood keeps coming. She looks pale; her pulse is 112 and thready. You are the only health worker in the house, with your delivery kit, one ampoule of oxytocin, and a taxi driver's number on the emergency plan.\n\nWhat are your actions, and in what order?\n\nAnswer: Call for help and start treatment together: rub the uterus to a contraction, give oxytocin 10 units IM, and empty the bladder — catheterise if she cannot void. Continue massage, keep her warm, elevate her legs, and estimate the blood loss honestly. If bleeding slows, monitor closely and arrange urgent review anyway; if it does not, ring the district hospital, give the structured handover including the oxytocin and its time, activate the transport plan and travel with her, positioned and warm. Document everything — findings, times, drugs — in the referral note before the journey.",
      },
      {
        type: "memory_trick",
        body: "The 5 Rs of community referral: Recognise, Respond, Ring, Record, Refer. Say them in order every time — emergencies steal your sequencing first and your patient second.",
      },
      {
        type: "summary",
        body: "- Community emergencies run on sequence: Recognise, Respond, Ring, Record, Refer.\n- PPH response: call for help, rub the uterus, empty the bladder, give the uterotonic, estimate loss.\n- Eclampsia response: left lateral, airway protected, nothing in mouth, magnesium sulfate per protocol, urgent transfer.\n- Call ahead with a structured handover — drugs, doses, times and findings travel with the woman.\n- The transport, funds and phone tree you arrange in calm weeks decide the outcome in bad minutes.",
      },
    ],
    questions: [
      {
        topic: "Community Emergency Response",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During a postnatal home visit, a mother begins to convulse. What is your first response?",
        options: [
          "Give her water and paracetamol to bring the fever down",
          "Insert a tongue depressor to prevent tongue biting",
          "Turn her onto her left side, protect the airway and give magnesium sulfate per protocol",
          "Sit her upright in a chair to keep her calm",
        ],
        correctIndex: 2,
        explanation:
          "This is eclampsia until proven otherwise. Left lateral keeps the airway clear, nothing goes in the mouth, and the magnesium sulfate loading dose per your protocol stops the seizures before urgent transfer. Fluids and an upright position are dangerous, and tongue depressors break teeth.",
        courseSlug: "domiciliary-midwifery",
      },
      {
        topic: "Community Emergency Response",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the correct first sequence for severe postpartum bleeding at a home birth?",
        options: [
          "Call for help, rub the uterus to a contraction, empty the bladder and give a uterotonic",
          "Pack the vagina tightly with gauze and wait for the bleeding to settle",
          "Begin the journey to hospital before any treatment",
          "Give oral iron immediately to build her blood",
        ],
        correctIndex: 0,
        explanation:
          "Most postpartum haemorrhage is uterine atony, and the first minutes belong to the uterus: call for help, massage, empty the bladder and give the uterotonic. Transfer follows stabilisation, not before it, and neither packing nor oral iron addresses the bleeding.",
        courseSlug: "domiciliary-midwifery",
      },
      {
        topic: "Referral from the Community",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which item is essential in a written referral note for a woman transferred from home?",
        options: [
          "Only your name and the working diagnosis",
          "Your personal opinion of the family's cooperation",
          "The address of the receiving facility",
          "The medicines you gave, with doses and times",
        ],
        correctIndex: 3,
        explanation:
          "The receiving team must know what has already been given — an oxytocin dose, a magnesium sulfate loading — because repeated doses can harm. Drugs, doses and times, alongside findings and vital signs, are the core of a safe handover.",
        courseSlug: "domiciliary-midwifery",
      },
    ],
    flashcards: [
      {
        topic: "Community Emergency Response",
        front: "What are the 5 Rs of referral from the community?",
        back: "Recognise, Respond, Ring, Record, Refer — recognise danger, give first-line response, call ahead with a structured handover, write the referral note, then move her.",
      },
      {
        topic: "Community Emergency Response",
        front: "First actions for a seizure at a postnatal home visit?",
        back: "Left lateral position, protect the airway, nothing in the mouth, magnesium sulfate loading per protocol, then urgent transfer — it is eclampsia until excluded.",
      },
      {
        topic: "Community Emergency Response",
        front: "First actions for severe PPH in the home?",
        back: "Call for help, rub the uterus to a contraction, empty the bladder, give oxytocin (or misoprostol), keep her warm, estimate the loss — then ring ahead and transfer if it continues.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565493",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241548993",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Midwives",
        note: "Verify current version with the Council.",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "domiciliary-midwifery",
    moduleTitle: "Safety and Trust in the Community",
    lessonTitle: "Culture, Beliefs and Safe Motherhood",
    description:
      "Respecting beliefs while protecting mothers — working with culture, not against it.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe common Ghanaian beliefs and practices surrounding pregnancy, birth and the newborn.",
      "Explain the LEARN approach and the three delays framework for working respectfully with families.",
      "Apply culturally safe negotiation to a food taboo or care-seeking delay scenario.",
    ],
    tags: ["culture", "beliefs", "communication", "learn model"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Pamphlets do not decide where a Ghanaian mother births or what she eats in pregnancy — her family, her mother-in-law and her beliefs do. Some of those beliefs protect health; others quietly delay care or drain nutrition at the moment it matters most.\n\nThis is not a lesson about winning arguments. It is about the clinical skill of working with culture: how to listen, negotiate and recruit the very people whose influence decides whether your advice ever leaves the room.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Beliefs you will meet: eggs or snail forbidden in pregnancy; colostrum called dirty milk and discarded; a pregnancy not announced early for protection; convulsion explained as a spiritual attack; the family — not the mother — deciding when to seek care; a trusted traditional birth attendant attending the birth; substances applied to the cord. Ridicule sends all of it underground; respect keeps the conversation open.\n\nYour tools: **LEARN** — **Listen** to the belief in her words, **Explain** your perspective simply, **Acknowledge** the meaning it carries, **Recommend** what protects her, and **Negotiate** an acceptable path — beans and groundnuts where eggs are taboo, facility birth with the TBA welcomed as a companion, the cord kept clean with nothing applied. Around LEARN sits the three-delays model: care is delayed by the decision at home, by transport, and at the facility. Your leverage on the first delay is teaching the household — the husband, the mother-in-law, whoever nods at 2 am — the danger signs, in her language, before the emergency. Recruit elders and community leaders as allies; a queen mother who repeats your message is worth a hundred leaflets.",
      },
      {
        type: "clinical_pearl",
        body: "The belief you ridicule goes underground; the belief you sit with can be negotiated. Respect is not the same as agreement — it is the price of influence.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At an outreach clinic, a 26-week mother looks pale and her haemoglobin is 9.8 g/dL. She tells you she eats banku with pepper and soup, but no eggs and no fish — her mother-in-law insists that eggs in pregnancy make the baby a thief and fish makes the baby drool. The mother-in-law cooks for the whole household and is in the waiting area.\n\nWhat is your best response to this situation?\n\nAnswer: Treat the anaemia, then work the belief, not against the people. Ask the mother-in-law to join the conversation, listen to the taboo respectfully, and explain that the growing baby needs protein daily. Negotiate: beans, groundnut soup, soya beans and kontomire carry no taboo and do the same work. Ask what the family would accept, and agree on two or three foods for this week. The elder leaves as part of the plan rather than its obstacle — and the mother eats.",
      },
      {
        type: "memory_trick",
        body: "LEARN to work with beliefs: Listen, Explain, Acknowledge, Recommend, Negotiate. When a belief blocks safety, you LEARN your way to a substitute — you never mock your way to one.",
      },
      {
        type: "summary",
        body: "- Beliefs shape diet, care-seeking and birth place more than pamphlets do.\n- LEARN: Listen, Explain, Acknowledge, Recommend, Negotiate — respect keeps the door open.\n- Negotiate substitutes: beans, groundnuts and soya where eggs are taboo.\n- The first delay is the household decision — teach the family the danger signs, in her language.\n- TBAs and elders become allies when respected: a referring TBA is an asset, not a rival.",
      },
    ],
    questions: [
      {
        topic: "Culture and Safe Motherhood",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A mother at 26 weeks avoids all eggs and fish because her mother-in-law forbids them. What is the best response?",
        options: [
          "Tell her the belief is foolish and outdated",
          "Acknowledge the belief, explain her protein needs and negotiate alternatives such as beans and groundnuts",
          "Report the mother-in-law to the community chief",
          "Ignore diet entirely because iron tablets will cover it",
        ],
        correctIndex: 1,
        explanation:
          "Confrontation loses the family; negotiation feeds the mother. Acknowledging the belief, then agreeing acceptable protein sources — with the mother-in-law included in the conversation — changes what actually lands in the cooking pot. Iron tablets support but do not replace diet.",
        courseSlug: "domiciliary-midwifery",
      },
      {
        topic: "Culture and Safe Motherhood",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the most useful role for a trusted traditional birth attendant in your community?",
        options: [
          "A rival whose practice should be shut down",
          "A substitute for a midwife at normal births",
          "An ally who recognises danger signs early and refers",
          "A supervisor for student midwives",
        ],
        correctIndex: 2,
        explanation:
          "Women trust TBAs and will call them first. A TBA trained to recognise the danger signs and refer early becomes an extension of your safety net — pushing her out only removes the earliest warning you had.",
        courseSlug: "domiciliary-midwifery",
      },
      {
        topic: "Culture and Safe Motherhood",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In the three-delays model, which delay can a community midwife most directly influence through teaching?",
        options: [
          "The distance to the facility alone",
          "The state of the roads alone",
          "The cost of fuel alone",
          "The household decision to seek care, often made by others",
        ],
        correctIndex: 3,
        explanation:
          "The first delay — deciding to seek care — happens inside the house, often decided by the husband or mother-in-law. Teaching the household the danger signs, before the emergency and in their language, is the midwife's strongest lever.",
        courseSlug: "domiciliary-midwifery",
      },
    ],
    flashcards: [
      {
        topic: "Culture and Safe Motherhood",
        front: "What does LEARN stand for?",
        back: "Listen, Explain, Acknowledge, Recommend, Negotiate — the sequence for working respectfully with health beliefs.",
      },
      {
        topic: "Culture and Safe Motherhood",
        front: "What are the three delays in emergency obstetric care?",
        back: "Delay in deciding to seek care at home, delay in reaching the facility, and delay in receiving care at the facility. Teaching the household attacks the first.",
      },
      {
        topic: "Culture and Safe Motherhood",
        front: "How should you handle a food taboo that weakens pregnancy nutrition?",
        back: "Acknowledge, then negotiate substitutes the family accepts — beans, groundnuts, soya, fish where allowed — involving the elder who controls the cooking.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Antenatal Care for a Positive Pregnancy Experience",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549912",
        note: "Includes recommendations on community engagement and culturally appropriate care.",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "Verify current edition with your district directorate.",
      },
      {
        organization: "Elsevier",
        title: "Myles' Textbook for Midwives, 17th ed.",
        year: "2020",
        note: "Standard midwifery reference; verify current edition.",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "domiciliary-midwifery",
    moduleTitle: "Safety and Trust in the Community",
    lessonTitle: "Record Keeping in the Community",
    description:
      "Documentation when there is no ward file — portable, accurate, protective records for care that travels.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the record tools of community practice: the mother-held booklet, visit registers and referral notes.",
      "Explain the principles of contemporaneous, objective and complete documentation.",
      "Apply the 4 Ws standard to write entries that protect the woman, the team and yourself.",
    ],
    tags: ["documentation", "records", "referral note", "confidentiality"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "On the ward, the chart trolley stands beside you. In the community, the record travels in your bag and in the mother's hand — and the next person to read it may never meet you. Record keeping out here is not administration; it is continuity, it is safety, and on a bad day it is your professional defence.\n\nThis lesson covers what to write, where it lives, and the standard an entry must meet before you leave the compound.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Your tools: the **mother-held booklet** — antenatal and postnatal records the mother owns and carries to every contact, so her history travels even when she changes facility; your **visit register** at the CHPS compound, which doubles as the defaulter list; **referral notes written in duplicate** — one travels with the woman, one stays; and the partograph for any birth you attend. Entries are **contemporaneous** — written on the spot, before you leave the house, because a bumpy road and a full afternoon will edit your memory. They are **objective** — what you found and what you did, with negatives recorded too ('no danger signs present' is a clinical finding). And they are **signed** — your name, designation, date and time.\n\nTwo habits protect everyone. First, the 4 Ws of every entry: **What** you found and did, **When** (date and time), **Who** you are, and **Where** (the village and household). Second, confidentiality: findings are not discussed at the lorry park or across the waiting crowd. Remember the profession's plain rule: if it is not written down, it was not done — and what is not documented cannot be handed over, audited, or defended.",
      },
      {
        type: "clinical_pearl",
        body: "In the community your pen is your colleague. Write so that a midwife who has never met you could pick up the care tomorrow without a single phone call — because one day, that is exactly what will happen.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At a day-five postnatal visit, you find the mother's blood pressure is 142/92 with a mild headache; urine dip shows protein 1+. You recheck after rest, document both readings, call the supervising midwife, advise same-day review at the health centre, and write a referral note with your findings, advice and signature. The next evening she is admitted with postpartum pre-eclampsia and the district midwife manages her using your note.\n\nWhat made your record-keeping clinically valuable in this case?\n\nAnswer: Because the entry was immediate, dated and timed, the receiving team had a documented trend — two readings, not one story — plus the urine result and exactly what had been advised. Objective entries such as 'BP 142/92, rechecked 148/94 after rest' let them judge progression at a glance. The copy in your register protected the continuity of care and protected you: the care you gave was visible, complete and defensible.",
      },
      {
        type: "memory_trick",
        body: "The 4 Ws in every entry: What you found and did, When (date and time), Who you are (name and title), Where (the village and household). No entry leaves the house without all four.",
      },
      {
        type: "summary",
        body: "- Community records travel: the mother-held booklet, your register, referral notes in duplicate.\n- Write contemporaneously — at the bedside or doorstep, never at the end of the day.\n- Objective facts only: measurements, findings, actions; record negatives too.\n- The 4 Ws: What, When, Who, Where — with your signature and designation.\n- Confidentiality travels with you: no client details in public spaces.",
      },
    ],
    questions: [
      {
        topic: "Community Record Keeping",
        type: "MCQ",
        difficulty: "Easy",
        stem: "When should you document a home visit?",
        options: [
          "At the end of the day, back at the CHPS compound",
          "At the end of the week, when the register is compiled",
          "Immediately, before leaving the home",
          "Whenever the register is next printed",
        ],
        correctIndex: 2,
        explanation:
          "Contemporaneous recording — written on the spot — is the standard. Memory fades fast after a bumpy road, and the details you lose first are the ones the next carer needs most.",
        courseSlug: "domiciliary-midwifery",
      },
      {
        topic: "Community Record Keeping",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which content belongs in a referral note for a mother sent from home to the district hospital?",
        options: [
          "Your personal opinion about the family's attitude",
          "Findings, vital signs, treatments given with times, advice provided and your signature",
          "Only the working diagnosis, to keep it brief",
          "A guess at her condition, since examination was difficult",
        ],
        correctIndex: 1,
        explanation:
          "The referral note is the handover: what you found, what you did, what you gave and when, what you told the family — signed. Opinions and guesses have no place; brevity must never remove the facts the receiving team will act on.",
        courseSlug: "domiciliary-midwifery",
      },
      {
        topic: "Community Record Keeping",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which entry is written in objective, professional language?",
        options: [
          "Fundus 2 cm above umbilicus, soft; lochia rubra moderate, odourless",
          "The mother is not looking after herself properly",
          "Difficult family, probably non-compliant",
          "Seems fine, nothing much to report",
        ],
        correctIndex: 0,
        explanation:
          "Objective language records what you measured and observed — findings another midwife could verify. Judgements about character, vague impressions and 'seems fine' are neither clinical data nor defensible records.",
        courseSlug: "domiciliary-midwifery",
      },
    ],
    flashcards: [
      {
        topic: "Community Record Keeping",
        front: "What are the 4 Ws of a community entry?",
        back: "What you found and did, When (date and time), Who you are (name and designation), Where (village and household) — then sign.",
      },
      {
        topic: "Community Record Keeping",
        front: "Why must community records be contemporaneous?",
        back: "Written on the spot, they capture exact findings and times; written later, memory edits them — and the lost details are the ones the next carer needs.",
      },
      {
        topic: "Community Record Keeping",
        front: "Why does the mother-held booklet matter?",
        back: "It travels with the mother to every contact and any facility, so her history, treatments and dates follow her — continuity that does not depend on meeting you.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Midwives",
        note: "Verify current version with the Council.",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "Verify current edition with your district directorate.",
      },
      {
        organization: "Elsevier",
        title: "Myles' Textbook for Midwives, 17th ed.",
        year: "2020",
        note: "Standard midwifery reference; verify current edition.",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-midwifery-practice",
    moduleTitle: "In the Antenatal Clinic",
    lessonTitle: "Working in the Antenatal Clinic",
    description:
      "The flow, the team and your place in it — surviving and contributing on your first clinical placement.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the stations of an antenatal clinic day and the team that runs them.",
      "Explain the student's role and professional boundaries in a busy clinic.",
      "Apply triage principles to escalate abnormal findings such as a raised blood pressure.",
    ],
    tags: ["antenatal clinic", "placement", "triage", "professionalism"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Your first clinical placement is a clinic that sees a hundred women by two o'clock. There is a queue outside, a rhythm inside, and a team that has run this day a thousand times. Walking in as a student, you can spend the week in the way, or you can become genuinely useful by the second day.\n\nThis lesson maps the clinic's flow, the people, and the small professional habits that make the team glad you came.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The clinic day runs through five stations: **Book** (records and the mother-held booklet), **Measure** (weight, blood pressure, temperature, urine dip at triage), **Test and examine** (history, symphysis-fundal height, abdominal palpation, fetal heart), **Treat** (iron and folate, IPTp-SP, tetanus immunisation, referrals), and **Teach** (the group health talk — danger signs, birth preparedness). The team includes the senior midwife in charge, staff midwives, a records clerk, sometimes a physician assistant — and you.\n\nYour place: arrive early, find the midwife in charge, and agree what you may do and under what supervision. Ask permission from each woman before touching, explain what you are doing, and learn her name. The triage observations are the clinic's smoke detector: a blood pressure of 150/100 missed today is a seizure next week, so a raised reading means recheck after five minutes of rest, dip the urine for protein, and tell a midwife immediately — never park it under a stack of files. And confidentiality is geography: findings are discussed quietly, behind the screen, not broadcast across the waiting bench.",
      },
      {
        type: "clinical_pearl",
        body: "Take the triage observations as if a life hangs on them, because some days it does. Recheck, dip the urine, and escalate — the two extra minutes at triage are the cheapest emergency prevention the clinic owns.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "It is your first clinic day and the queue is long. You are on triage, and a 32-week woman's blood pressure reads 148/94. The line behind her stretches to the door, and she seems well, chatting with her neighbour.\n\nWhat do you do?\n\nAnswer: This reading cannot ride the queue. Seat her for five minutes of rest and recheck; dip her urine for protein; and inform the supervising midwife immediately so she is prioritised for full assessment — this is possible pre-eclampsia, which is silent until it is not. Document both readings and what you told her, and let the midwife take the clinical decisions. The queue will survive ten minutes; she may not survive a missed one.",
      },
      {
        type: "memory_trick",
        body: "The clinic day in five stations: Book, Measure, Test, Treat, Teach. Walk them in order each morning and you will always know where you are — and where the woman in front of you is going.",
      },
      {
        type: "summary",
        body: "- The clinic flows through five stations: Book, Measure, Test, Treat, Teach.\n- Learn the team and agree your role and supervision on day one, with the midwife in charge.\n- Triage observations are the clinic's smoke detector: recheck, dip urine, escalate.\n- Ask permission, explain, and learn names — professionalism is felt woman by woman.\n- Confidentiality is geography: quiet voices, behind screens, never across the waiting bench.",
      },
    ],
    questions: [
      {
        topic: "Antenatal Clinic Practice",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "At triage, a 32-week woman's blood pressure reads 148/94. What is the correct response?",
        options: [
          "Chart it and let her wait her turn with the rest of the queue",
          "Send her home with advice to reduce salt and return next visit",
          "Recheck after five minutes of rest, dip urine for protein and inform the supervising midwife immediately",
          "Repeat it quickly standing up, and record the lower number",
        ],
        correctIndex: 1,
        explanation:
          "A raised reading at 32 weeks is possible pre-eclampsia: confirm after rest, check urine protein, and escalate at once so she is prioritised. Charting it quietly, sending her home, or re-recording to suit the queue are how quiet emergencies are born.",
        courseSlug: "clinical-midwifery-practice",
      },
      {
        topic: "Antenatal Clinic Practice",
        type: "MCQ",
        difficulty: "Easy",
        stem: "As a student, you notice a woman's fundal height lags well behind her dates. Who should you tell first?",
        options: [
          "The supervising midwife, immediately",
          "The records clerk at the booking desk",
          "Only the woman herself, and let her decide",
          "Nobody until the consultant's weekly round",
        ],
        correctIndex: 0,
        explanation:
          "Abnormal or uncertain findings go straight to the supervising midwife — the person clinically responsible. The clerk, the woman alone, or a weekly round are all delays a growth-restricted fetus cannot afford.",
        courseSlug: "clinical-midwifery-practice",
      },
      {
        topic: "Antenatal Clinic Practice",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which behaviour best protects client confidentiality in a busy clinic?",
        options: [
          "Announcing the haemoglobin result loudly so the woman hears it early",
          "Discussing the finding with your classmate in the open corridor",
          "Asking the waiting women to explain the result to her",
          "Moving behind the screen and speaking quietly with the woman and your supervisor",
        ],
        correctIndex: 1,
        explanation:
          "Confidentiality is protected by place and volume: behind the screen, in a low voice, with only those who need to know. Corridors and waiting benches are public spaces, however busy the day.",
        courseSlug: "clinical-midwifery-practice",
      },
    ],
    flashcards: [
      {
        topic: "Antenatal Clinic Practice",
        front: "What are the five stations of an antenatal clinic day?",
        back: "Book, Measure, Test, Treat, Teach — records, triage observations, examination and investigations, treatment and referrals, and the group health talk.",
      },
      {
        topic: "Antenatal Clinic Practice",
        front: "What do you do with a raised blood pressure reading at triage?",
        back: "Recheck after five minutes of rest, dip the urine for protein, and inform the supervising midwife immediately — possible pre-eclampsia is escalated, never queued.",
      },
      {
        topic: "Antenatal Clinic Practice",
        front: "What should a student agree on the first day of clinic placement?",
        back: "With the midwife in charge: what you may do, what needs direct supervision, and how findings are escalated — then ask each woman's permission before touching.",
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
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Midwives",
        note: "Verify current version with the Council.",
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-midwifery-practice",
    moduleTitle: "In the Antenatal Clinic",
    lessonTitle: "Hands-On Antenatal Assessment Practice",
    description:
      "Real abdomens, real measurements — supervised practice with feedback until your hands are confident.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the techniques for symphysis-fundal height measurement, Leopold's manoeuvres and fetal heart auscultation.",
      "Explain common beginner errors and how deliberate practice with feedback corrects them.",
      "Apply serial assessment findings to decide when to report and refer a lagging growth trend.",
    ],
    tags: ["assessment", "practice", "leopold", "sfh", "fetal heart"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "You know the theory of fundal height and Leopold's manoeuvres. The clinic is where your hands learn it — on real women, with real babies, and a mentor watching. The goal of this rotation is not to have performed these skills once; it is to perform them until your readings agree with themselves and your findings survive checking.\n\nThis lesson walks the three core skills of hands-on antenatal practice, the errors beginners make, and how practice with feedback turns a nervous first palpation into clinical confidence.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Symphysis-fundal height: after twenty weeks, measure from the top of the symphysis pubis to the fundus in centimetres — roughly a centimetre per week, within two to three centimetres. One reading is a snapshot; the trend is the diagnosis, which is why the plot in her booklet matters more than today's number. Leopold's four grips ask four questions: what sits in the fundus (the breech or the head), which side is the back (smooth and continuous versus small parts), what is coming first, and how far into the pelvis it has settled. Ask her to empty her bladder first, warm your hands, and explain before you press.\n\nThe fetal heart: place the Pinard over the baby's back, count for a full minute — 110 to 160 beats per minute — and confirm the pulsation is fetal by feeling the mother's pulse at the same time; the rates differ. Deliberate practice means repetitions with feedback: keep a tally of supervised measurements until two of yours on the same woman agree within a centimetre, and ask your mentor to check your grip findings against hers. Log every attempt — including the ones that were wrong; those teach fastest.",
      },
      {
        type: "clinical_pearl",
        body: "Warm your hands and your words before palpating. A relaxed abdomen tells you the truth about lie, presentation and position; a tense one lies through its teeth.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You measure a 36-week mother's symphysis-fundal height at 31 cm; her dates are certain from an early ultrasound. Your classmate remeasures and gets 31 cm too. The baby's back lies on the left, the head is three-fifths palpable above the brim, and the fetal heart is 138. The mother senses your pause and asks if everything is fine.\n\nWhat is your next step, and what will you say to her?\n\nAnswer: Two concordant readings lagging about five centimetres behind certain dates is a finding to report, not to reassure away and not to frighten either. Tell her honestly that you want your mentor to check the baby's growth, then report the findings and arrange referral for growth assessment — possible fetal growth restriction. Teach her daily count-to-ten movements as an immediate safety measure, book a review within a week, and document both readings. The mother keeps the facts she needs; the worry stays shared with the team.",
      },
      {
        type: "memory_trick",
        body: "The four grips ask four questions: What's on top? Which side is the back? What's coming first? How far down has it come? Fundus, flank, first pelvic, deep pelvic — in that order.",
      },
      {
        type: "summary",
        body: "- SFH: symphysis to fundus in centimetres from 20 weeks, about 1 cm per week — plot the trend, not the snapshot.\n- Leopold's four grips answer fundal pole, fetal back, presenting part and engagement.\n- Fetal heart: Pinard over the back, full minute, 110-160 — confirm by comparing with the mother's pulse.\n- Warm hands, empty bladder, explanation and permission before every palpation.\n- Practise deliberately: repeat under supervision until your readings agree and your findings survive checking.",
      },
    ],
    questions: [
      {
        topic: "Antenatal Assessment Practice",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the normal fetal heart rate range at term?",
        options: [
          "110-160 beats per minute",
          "90-140 beats per minute",
          "120-180 beats per minute",
          "60-100 beats per minute",
        ],
        correctIndex: 0,
        explanation:
          "110-160 beats per minute is normal. Below 110 is fetal bradycardia and above 160 tachycardia — both need action: reposition her, recheck after a contraction, and escalate if it persists.",
        courseSlug: "clinical-midwifery-practice",
      },
      {
        topic: "Antenatal Assessment Practice",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "At 36 weeks with certain dates, two measurements agree on a symphysis-fundal height of 31 cm. What should happen next?",
        options: [
          "Reassure her that small parents make small babies",
          "Repeat the measurement in four weeks at the next visit",
          "Report the findings and arrange referral for growth assessment",
          "Advise more food and recheck next month",
        ],
        correctIndex: 2,
        explanation:
          "A persistently lagging fundal height raises fetal growth restriction, with stillbirth risk — the answer is referral for growth assessment plus fetal movement counting and close review. Waiting four weeks, blaming parental size, or prescribing food all delay the finding the baby needs acted on.",
        courseSlug: "clinical-midwifery-practice",
      },
      {
        topic: "Antenatal Assessment Practice",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "While counting through the Pinard stethoscope, how do you confirm the pulsation you hear is the fetal heart?",
        options: [
          "Press the stethoscope harder until the sound is louder",
          "Assume any pulsation on the abdomen is the fetal heart",
          "A loud sound is always the fetal heart, a soft one is the mother's",
          "Count it while feeling the mother's pulse — different rates confirm it is fetal",
        ],
        correctIndex: 3,
        explanation:
          "The maternal aorta pulsates across the abdomen at the mother's rate. Feeling her pulse while you listen lets you compare: a rate different from hers — typically 110-160 — is fetal.",
        courseSlug: "clinical-midwifery-practice",
      },
    ],
    flashcards: [
      {
        topic: "Antenatal Assessment Practice",
        front: "What are Leopold's four grips really asking?",
        back: "What's on top (fundal pole)? Which side is the back? What's coming first (presentation)? How far down has it come (engagement)?",
      },
      {
        topic: "Antenatal Assessment Practice",
        front: "What are the rules for symphysis-fundal height?",
        back: "Symphysis to fundus in centimetres after 20 weeks, roughly 1 cm per week within 2-3 cm; plot the serial trend — a lagging trend is a referral, not reassurance.",
      },
      {
        topic: "Antenatal Assessment Practice",
        front: "How do you verify the pulsation is the fetal heart?",
        back: "Feel the mother's pulse while counting: the fetal heart runs at its own rate, normally 110-160, different from hers. Count a full minute.",
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
        title: "Myles' Textbook for Midwives, 17th ed.",
        year: "2020",
        note: "Standard midwifery reference; verify current edition.",
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-midwifery-practice",
    moduleTitle: "On the Labour Ward",
    lessonTitle: "Orientation to the Labour Ward",
    description:
      "The rooms, the rhythms and the intensity — finding your feet where birth happens.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the layout and daily rhythm of a labour ward, from admission to postnatal transfer.",
      "Explain the student's scope of practice and the never-alone rule under supervision.",
      "Apply orientation priorities — emergency trolley, theatre route, resuscitation corner — to your first shift.",
    ],
    tags: ["labour ward", "orientation", "safety", "supervision"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The labour ward has its own geography and its own weather. Rooms you have only read about — admission, first-stage rooms, the delivery room, the theatre door — will become the map of your working nights, and the intensity will surprise you. Orientation is how you stop being a stranger on that map before the pressure starts.\n\nThis lesson covers the spaces, the rhythm of a shift, and the rules that keep a student safe and useful from the first hour.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The geography: an admission and assessment area where every arriving woman is examined and triaged; the first-stage rooms where monitoring and partographs live; the delivery room for second stage; the theatre door for caesareans and instrumental births; the newborn resuscitation corner with its warm surface and bag-mask; the sluice and the colour-coded waste bins; and the emergency trolley. The rhythm: handover at shift start — every woman, her stage, her risk — then bed rounds, admissions, and the nights that never quite behave. Your induction sets the scope: observations, supportive care and partograph entries as delegated; vaginal examinations and births under direct supervision only.\n\nTwo rules travel with you everywhere. First, you are never the only person with a labouring woman when things change — your first move in any concern is to call the responsible midwife and stay with the woman. Second, on day one walk the **hot triangle** — admission desk to labour room to theatre door, with the resuscitation corner beside it — until you could find it in the dark. Emergencies do not wait for you to finish orienting.",
      },
      {
        type: "clinical_pearl",
        body: "In your first week, learn three things before anything else: where the emergency trolley is, where the theatre door is, and who to call. Everything else in the orientation folder can wait a day.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "It is your first night shift. Your mentor is in the delivery room with a woman in second stage, and you are observing Woman A, who is 4 cm dilated and coping quietly. Suddenly Woman A calls out — her membranes have ruptured, the draining liquor is thickly stained with meconium, and when you listen, the fetal heart is 104.\n\nWhat is your first action as a student?\n\nAnswer: Call the responsible midwife immediately and stay with the woman — this is fetal distress until excluded, and it is beyond your scope to manage alone. While help comes, keep counting the fetal heart and note the time the meconium was seen, turn her onto her left side if your mentor is not yet free, and have your findings ready to report: rate, meconium, timing. The student's emergency skill is a clear, fast, accurate call — not a solo rescue.",
      },
      {
        type: "memory_trick",
        body: "Two rules that never leave you on the labour ward: never be the only person with a labouring woman, and know the route from admission to theatre with your eyes closed. Safety lives in those two.",
      },
      {
        type: "summary",
        body: "- The ward runs admission → first-stage rooms → delivery room, with theatre and the resus corner one door away.\n- Handover covers every woman: stage, progress and risk — listen with a pen.\n- Your scope: observations, supportive care and delegated charting; VE and births under direct supervision.\n- The never-alone rule: when anything changes, your first act is to call the midwife and stay.\n- Walk the hot triangle until you know it in the dark: admission, labour room, theatre, resus corner.",
      },
    ],
    questions: [
      {
        topic: "Labour Ward Orientation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You are alone observing a labouring woman when her condition suddenly changes. What is your first action as a student?",
        options: [
          "Perform a vaginal examination to see what is happening",
          "Wait thirty minutes and observe for improvement",
          "Call the responsible midwife immediately and stay with the woman",
          "Ask the relatives to carry her towards the theatre",
        ],
        correctIndex: 2,
        explanation:
          "A change in condition is beyond student scope; the never-alone rule means your first move is to call the midwife while staying with the woman and continuing observations. Examinations, waiting and family-led transport all put her at risk.",
        courseSlug: "clinical-midwifery-practice",
      },
      {
        topic: "Labour Ward Orientation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which locations should you find first on your initial shift?",
        options: [
          "The staff canteen and the resting room",
          "The duty roster board and notice board",
          "The pharmacy store and the linen room",
          "The emergency trolley, the theatre route and the newborn resuscitation corner",
        ],
        correctIndex: 3,
        explanation:
          "Emergencies are managed in the first minutes, so the emergency trolley, the route to theatre and the resuscitation corner come before comfort and administration. Walk the hot triangle until you know it blindfolded.",
        courseSlug: "clinical-midwifery-practice",
      },
      {
        topic: "Labour Ward Orientation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which activity falls within a student's delegated scope on the labour ward?",
        options: [
          "Vaginal examinations and decisions about augmentation",
          "Recording observations and giving supportive care as delegated by your mentor",
          "Administering intravenous oxytocin",
          "Deciding when a woman transfers to the postnatal ward",
        ],
        correctIndex: 1,
        explanation:
          "Students perform observations, supportive care and charting as delegated, with examinations and clinical decisions under direct supervision. Drug decisions, augmentation and transfers belong to the qualified midwife.",
        courseSlug: "clinical-midwifery-practice",
      },
    ],
    flashcards: [
      {
        topic: "Labour Ward Orientation",
        front: "What is the hot triangle you must know in the dark?",
        back: "Admission desk → labour room → theatre door, with the newborn resuscitation corner beside it — plus the emergency trolley.",
      },
      {
        topic: "Labour Ward Orientation",
        front: "What is the never-alone rule for students?",
        back: "You are never the only person with a labouring woman when things change — call the responsible midwife immediately and stay with the woman.",
      },
      {
        topic: "Labour Ward Orientation",
        front: "What belongs in a labour ward handover for each woman?",
        back: "Her stage of labour, progress on the partograph, risk factors, fetal condition, medications and the plan — listened to with a pen in your hand.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565493",
      },
      {
        organization: "Ghana Health Service",
        title: "National Policy and Guidelines for Infection Prevention and Control within the Health Care Delivery System",
        year: "2015",
        note: "Verify current edition with your facility.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Midwives",
        note: "Verify current version with the Council.",
      },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-midwifery-practice",
    moduleTitle: "On the Labour Ward",
    lessonTitle: "Monitoring Labouring Women in Practice",
    description:
      "Partographs and patience — real monitoring shifts with real responsibility.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the monitoring schedule for a labouring woman and its partograph discipline.",
      "Explain the alert and action lines and the escalation they demand.",
      "Apply monitoring findings to decide when to inform your senior and change the plan.",
    ],
    tags: ["monitoring", "labour", "partograph", "escalation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "On a busy shift you may watch two or three labouring women at once. Monitoring is what stops that from becoming chaos: a fixed schedule of checks, a single graph that holds them, and thresholds that tell you — before the crisis — when to call for help. The theory came from your classroom; the discipline comes from this ward.\n\nThis lesson puts the partograph into real shift life: what you check and how often, how you chart honestly, and what the lines on the graph are actually asking you to do.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The schedule is **1-4-30 and every void**: pulse hourly, blood pressure and temperature four-hourly, fetal heart and contractions every half hour in the first stage — the fetal heart every five minutes and after every contraction in the second stage — and urine checked at every void for volume, protein and ketones. Vaginal examinations are four-hourly or on clear indication, with consent and asepsis, and every number goes onto the partograph **at the bedside, in real time**. Supportive care is monitoring too: fluids, mobility, encouragement and bladder care change the course of labour as surely as any drug.\n\nReading the graph: from the active phase, dilatation should keep pace with the alert line — about a centimetre an hour. Crossing the alert line is not a crisis; it is a summons: reassess the labour — the powers, the passage, the passenger and her state — inform your senior, and plan augmentation or transfer. The action line, four hours later, is the deadline for a decision already overdue. Deviations anywhere — a fetal heart below 110 or above 160, meconium, a maternal pulse creeping up, a temperature over 38 — carry the same instruction: escalate now, chart now.",
      },
      {
        type: "clinical_pearl",
        body: "A partograph written at the bedside is a clinical instrument; a partograph written at the desk an hour later is historical fiction. The patterns you notice late are the ones that hurt mothers.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are monitoring two women. The quieter one, Woman A, has had contractions two in ten, lasting thirty seconds, for the past three hours. Your vaginal examination four hours ago showed 3 cm; today's shows 4 cm. The fetal heart is 146, her observations are normal, and the membranes are intact. On the partograph, the dilatation mark has crossed the alert line.\n\nWhat is your next best step?\n\nAnswer: Report to your senior midwife now — with the graph in your hand. Crossing the alert line means reassess the cause of slow progress: here, weak powers (inefficient contractions) in a mother with an otherwise reassuring picture. The decision — augment with ARM and cautious oxytocin where monitoring allows, or transfer — belongs to the qualified midwife; your job is the honest charting and the early call. Waiting another four hours for the action line would be waiting for a decision already late.",
      },
      {
        type: "memory_trick",
        body: "1-4-30 and every void: pulse each hour, blood pressure and temperature each four hours, fetal heart and contractions each half hour, urine at every void. Say it like a rhythm — it is the beat of the whole shift.",
      },
      {
        type: "summary",
        body: "- Monitoring schedule: 1-4-30 and every void — with the fetal heart every five minutes in second stage.\n- Chart at the bedside, in real time; retrospective charting hides the patterns that matter.\n- The alert line is a summons: reassess powers, passage, passenger and psyche, and inform your senior.\n- The action line is a deadline for a decision already overdue.\n- Rising maternal pulse with falling blood pressure is early shock — escalate before the bleed is obvious.",
      },
    ],
    questions: [
      {
        topic: "Monitoring Labour in Practice",
        type: "MCQ",
        difficulty: "Easy",
        stem: "How often should you listen to the fetal heart in the first stage of labour with intermittent auscultation?",
        options: [
          "Every 15-30 minutes",
          "Once, on admission only",
          "Every 2 hours",
          "Only when the midwife asks you to",
        ],
        correctIndex: 0,
        explanation:
          "WHO guidance for intermittent auscultation in the first stage is every 15-30 minutes, after a contraction, for a full minute — and every five minutes in the second stage.",
        courseSlug: "clinical-midwifery-practice",
      },
      {
        topic: "Monitoring Labour in Practice",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "The dilatation mark on a partograph crosses the alert line. What does this mean?",
        options: [
          "Continue charting as normal — the alert line is only a record",
          "Reassess the labour, inform your senior and plan — augmentation or transfer",
          "Prepare for immediate caesarean in every case",
          "Nothing while the fetal heart is normal",
        ],
        correctIndex: 1,
        explanation:
          "The alert line is crossed by slow progress: reassess the four Ps — powers, passage, passenger, psyche — and escalate so augmentation or transfer is planned before the action line arrives. A normal fetal heart narrows the urgency but does not cancel the summons.",
        courseSlug: "clinical-midwifery-practice",
      },
      {
        topic: "Monitoring Labour in Practice",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why check urine at every void during labour?",
        options: [
          "It is only needed once, at admission, to screen for diabetes",
          "Volume, protein and ketones reveal dehydration, pre-eclampsia and bladder care needs",
          "It has no clinical value in labour",
          "It replaces the need for four-hourly blood pressure checks",
        ],
        correctIndex: 2,
        explanation:
          "Each void is a free investigation: ketones flag dehydration and exhaustion, protein signals pre-eclampsia or infection, and a bladder that will not empty obstructs descent. Nothing replaces the blood pressure check — they work together.",
        courseSlug: "clinical-midwifery-practice",
      },
    ],
    flashcards: [
      {
        topic: "Monitoring Labour in Practice",
        front: "What is the 1-4-30 and every void rule?",
        back: "Pulse hourly; blood pressure and temperature four-hourly; fetal heart and contractions every half hour (fetal heart every five minutes in second stage); urine — volume, protein, ketones — at every void.",
      },
      {
        topic: "Monitoring Labour in Practice",
        front: "What is the difference between the alert and action lines?",
        back: "The alert line marks expected progress at about 1 cm per hour — crossing it means reassess and inform your senior. The action line, four hours beyond, is the deadline for a decision that should already have been made.",
      },
      {
        topic: "Monitoring Labour in Practice",
        front: "What does a quietly rising maternal pulse during labour suggest?",
        back: "Early shock — classically from bleeding or sepsis — before the blood pressure falls. A rising pulse with a falling pressure is the emergency announcing itself quietly.",
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
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241548993",
      },
    ],
  },

  // ── 14 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-midwifery-practice",
    moduleTitle: "On the Labour Ward",
    lessonTitle: "Supporting Birth Under Supervision",
    description:
      "Your hands on births with a mentor behind you — the moment the theory becomes you.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the sequence of a normal birth from confirmed full dilatation to completed third stage.",
      "Explain controlled crowning, cord management and active management of the third stage.",
      "Apply consent and supervision boundaries to your role in your first supported births.",
    ],
    tags: ["birth", "supervision", "amtsl", "crowning"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Everything you have studied — the mechanisms, the monitoring, the third stage — converges on one moment: the birth. On this rotation, your mentor's hands hover behind yours while you deliver your first babies. It is the steepest learning curve of your training, and the memory you will keep forever.\n\nThis lesson walks the birth sequence you will practise, the two or three skills where gentleness matters most, and the professional frame that keeps a student-led birth safe.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Before pushing is confirmed, not assumed: full dilatation on vaginal examination. Support her choice of position and let her push spontaneously with her contractions, resting between. At crowning, the gentleness begins: one hand supports the perineum, the other keeps the head flexed and slow — tell her to pant, and let the head be born between contractions if you can. Check for a cord round the neck: loose, slip it over; tight, double-clamp and cut between, then deliver. Wait for restitution, and bring the shoulders with the next contraction, gently. Dry the baby, place her skin-to-skin, delay cord clamping for one to three minutes, then clamp and cut. Apgar at one and five minutes, and the first breastfeed.\n\nThe third stage is active management: **oxytocin within one minute** of the birth, controlled cord traction with counter-traction above the pubis, and uterine massage once the placenta is out — then inspect it for two arteries, one vein and completeness, and check the perineum. Your frame around all of this: introduce yourself and gain her consent for a student-supported birth, say out loud when you are unsure, and debrief with your mentor afterwards — what went well, what you would do differently.",
      },
      {
        type: "clinical_pearl",
        body: "The head is born slowly, between contractions if you can — a word ('pant for me') and a gentle hand save more perineums than any incision. Hurry is how tears happen.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "It is your first supported birth. With a strong contraction the head crowns rapidly; your mentor, standing behind you, says one word: control it. The perineum is stretching thin and the mother is bearing down with everything she has.\n\nWhat does 'control it' mean in your hands?\n\nAnswer: It means slow the head without stopping the birth. Ask her to pant and stop pushing with this contraction; keep one hand gently on the head to maintain flexion so the smallest diameter presents, the other supporting the perineum. Let the head be born slowly — by extension, face appearing — ideally between contractions. Then check for a cord round the neck, wait for restitution, and bring the shoulders with the next gentle traction. Control at crowning is the whole difference between an intact perineum and a tear.",
      },
      {
        type: "memory_trick",
        body: "Keep your PANTS on at crowning: Pant (tell her), Allow slow birth, No pulling, Two hands — one for flexion, one for the perineum — then check the cord.",
      },
      {
        type: "summary",
        body: "- Confirm full dilatation before pushing; support her position and spontaneous bearing down.\n- At crowning: pant, slow, flex, support — the head born gently, between contractions if possible.\n- Loose cord slips over; tight cord is double-clamped and cut between the clamps.\n- Oxytocin within one minute, controlled cord traction, uterine massage — then inspect the placenta.\n- Consent, say when unsure, debrief: student births are safe because the mentor is behind you.",
      },
    ],
    questions: [
      {
        topic: "Supporting Birth Under Supervision",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "When is the oxytocin given in active management of the third stage of labour?",
        options: [
          "When the placenta has separated",
          "Within one minute of the baby's birth",
          "Only when bleeding begins",
          "Before the head is born, to speed the birth",
        ],
        correctIndex: 1,
        explanation:
          "Oxytocin within one minute of birth is the first step of AMTSL: a contracted uterus before the placenta separates is the strongest protection against postpartum haemorrhage. Waiting for separation or bleeding gives atony its head start.",
        courseSlug: "clinical-midwifery-practice",
      },
      {
        topic: "Supporting Birth Under Supervision",
        type: "MCQ",
        difficulty: "Easy",
        stem: "The cord is wrapped tightly around the baby's neck as the head is born. What is the correct action?",
        options: [
          "Double-clamp the cord, cut between the clamps, then deliver the baby",
          "Pull firmly to unwind it from the neck",
          "Cut the cord without clamping to save time",
          "Ignore it and deliver as quickly as possible",
        ],
        correctIndex: 0,
        explanation:
          "A tight cord that will not slip over is clamped twice and cut between the clamps, allowing delivery without dragging on the neck. Pulling tears vessels; unclamped cutting bleeds; ignoring a tight cord strangles the baby's oxygen.",
        courseSlug: "clinical-midwifery-practice",
      },
      {
        topic: "Supporting Birth Under Supervision",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What does the Apgar score at one and five minutes actually guide?",
        options: [
          "It predicts the baby's future intelligence",
          "It decides the feeding method",
          "It sets the discharge date",
          "It guides the need for, and response to, resuscitation",
        ],
        correctIndex: 3,
        explanation:
          "The Apgar score summarises the baby's condition at one minute to trigger resuscitation, and at five minutes to judge its effect. It says nothing about intelligence, feeding or discharge.",
        courseSlug: "clinical-midwifery-practice",
      },
    ],
    flashcards: [
      {
        topic: "Supporting Birth Under Supervision",
        front: "What are the three steps of active management of the third stage?",
        back: "Oxytocin 10 units IM within one minute of birth, controlled cord traction with suprapubic counter-traction, and immediate uterine massage — then inspect the placenta.",
      },
      {
        topic: "Supporting Birth Under Supervision",
        front: "How do you manage a cord round the neck?",
        back: "Loose: slip it over the head or body. Tight: double-clamp, cut between the clamps, then deliver the baby.",
      },
      {
        topic: "Supporting Birth Under Supervision",
        front: "What is the correct sequence at crowning?",
        back: "Tell her to pant and stop pushing; keep the head flexed with one hand, support the perineum with the other; let the head be born slowly, between contractions if possible.",
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
        title: "WHO Recommendations: Uterotonics for the Prevention of Postpartum Haemorrhage",
        year: "2018",
        url: "https://www.who.int/publications/i/item/9789241550437",
      },
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565493",
      },
    ],
  },

  // ── 15 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-midwifery-practice",
    moduleTitle: "After the Birth",
    lessonTitle: "Postnatal Ward Practice",
    description:
      "Caring for mothers and babies after transfer — feeding, checking, teaching, and sending them home safe.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the daily postnatal check for mother and baby on the ward.",
      "Explain normal newborn patterns — weight, jaundice and milk transition — and their red flags.",
      "Apply discharge teaching with teach-back so families leave prepared.",
    ],
    tags: ["postnatal", "placement", "breastfeeding", "discharge teaching"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Once the drama of birth settles, mother and baby transfer to the postnatal ward — often for just twenty-four to forty-eight hours. In that window you check for the complications that declare themselves early, get feeding established, and teach everything the family will need at home. It is the gentlest-looking placement and one of the most important.\n\nThis lesson covers the daily check, the newborn patterns that worry parents, and the discharge conversation that decides whether your teaching survives the journey home.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The mother's daily check is the **5 Bs and the blues**: Breasts (feeding, engorgement, redness), Belly (fundus descending about a centimetre a day from the umbilicus), Bleeding (lochia rubra to serosa, never offensive), Bladder and Bowels, plus mood — with observations: a temperature over 38 or rising blood pressure is sepsis or postpartum pre-eclampsia knocking. Add mobility and hydration against clots, iron against anaemia.\n\nThe baby: daily weight (regain birth weight by day ten to fourteen), feeding at least eight times in 24 hours, a clean drying cord, warmth, and jaundice timing — yellow on day three to five limited to the face is common; yellow in the first 24 hours, or reaching the palms and soles at any time, is urgent. On the ward you are mostly a teacher: positioning and attachment at the breast, demand feeding, and the discharge conversation — danger signs for mother and baby, cord care, immunisation dates, registration, family planning, and when to return. Close it with teach-back: 'tell me the three things that would bring you straight back' — and make sure the midnight decision-maker heard them too.",
      },
      {
        type: "clinical_pearl",
        body: "On the postnatal ward you are mostly a teacher. Everything this mother knows about her baby, she learns in your forty-eight hours — and she takes home only what survived your teach-back.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "On day two, a mother tells you anxiously that her milk is not in — her baby cried most of the night and fed eleven times yesterday. Your assessment: the baby is alert, latching well, has had six wet nappies, and has lost 6 percent of a 3.1 kg birth weight. Her breasts feel fuller and warmer this morning than yesterday.\n\nWhat is happening, and what will you tell her?\n\nAnswer: This is textbook transition, not failure. Frequent feeding on day two to three is exactly how a newborn builds the milk supply — and the milk is arriving now, on day two to three, which is why her breasts feel fuller. Reassure with numbers: alert baby, good latch, six wet nappies, 6 percent weight loss all sit inside normal. Support feeding on demand, teach her the output markers to watch at home, and book the community follow-up. Routine formula top-ups here would undermine exactly the supply she is building.",
      },
      {
        type: "memory_trick",
        body: "Two rhymes for the daily round: for mum, 5 Bs and the blues — Breasts, Belly, Bleeding, Bladder, Bowels. For baby: feed, warm, breathe, cord, colour, count the nappies.",
      },
      {
        type: "summary",
        body: "- Daily mother check: 5 Bs and the blues, plus temperature and blood pressure — over 38 or rising BP escalates.\n- Milk comes in on day two to three; frequent feeding then is normal supply-building, not failure.\n- Weight: up to about 10 percent early loss, regained by day 10-14; beyond that, review.\n- Face-only jaundice on days 3-5 is common; day-one jaundice or yellow palms is urgent.\n- Discharge with teach-back, and teach the midnight decision-maker, not only the mother.",
      },
    ],
    questions: [
      {
        topic: "Postnatal Ward Practice",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A mother on day two says her milk is not in and her baby feeds constantly. When does mature milk normally 'come in'?",
        options: [
          "Immediately at birth",
          "Around day 7",
          "Only after the first formula feed",
          "On day 2-3, after the placenta delivers",
        ],
        correctIndex: 3,
        explanation:
          "The fall in progesterone after placental delivery triggers the milk to come in around day two to three — fuller, warmer breasts. Frequent feeding before and during this transition builds the supply; it is a sign the system is working.",
        courseSlug: "clinical-midwifery-practice",
      },
      {
        topic: "Postnatal Ward Practice",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Where should the fundus normally be on the second day after birth?",
        options: [
          "Four finger-breadths above the umbilicus",
          "Not palpable at all",
          "At or just below the umbilicus",
          "Deep in the pelvis at the symphysis",
        ],
        correctIndex: 2,
        explanation:
          "The fundus sits at the umbilicus on day one and descends about a centimetre a day — day two finds it at or just below the umbilicus. High and soft on day two suggests subinvolution, a full bladder or retained products.",
        courseSlug: "clinical-midwifery-practice",
      },
      {
        topic: "Postnatal Ward Practice",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which newborn on the postnatal ward needs urgent review for jaundice?",
        options: [
          "Yellow eyes and palms on day 2",
          "Yellow face only on day 4, breastfeeding well",
          "Yellow face and eyes on day 5, alert and feeding",
          "No jaundice, passed meconium yesterday",
        ],
        correctIndex: 0,
        explanation:
          "Jaundice in the first 24 hours is never physiological — it signals haemolysis — and jaundice reaching the palms and soles suggests a high bilirubin at any time. Both are urgent. Face-only jaundice on days three to five in a feeding, alert baby is the common physiological pattern.",
        courseSlug: "clinical-midwifery-practice",
      },
    ],
    flashcards: [
      {
        topic: "Postnatal Ward Practice",
        front: "What are the mother's 5 Bs on the postnatal ward?",
        back: "Breasts, Belly (fundus — about 1 cm of descent a day), Bleeding (lochia), Bladder, Bowels — checked alongside mood, temperature and blood pressure.",
      },
      {
        topic: "Postnatal Ward Practice",
        front: "When does mature milk come in, and why?",
        back: "Day 2-3, triggered by the progesterone drop after the placenta delivers. Before that, colostrum — and frequent feeding in the transition builds supply.",
      },
      {
        topic: "Postnatal Ward Practice",
        front: "Which jaundice patterns are urgent in a newborn?",
        back: "Any jaundice in the first 24 hours, or yellow reaching the palms and soles at any time — both need same-day review. Face-only yellow on days 3-5 in a well baby is physiological.",
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
        title: "Breastfeeding (Fact Sheet)",
        year: "2023",
        url: "https://www.who.int/news-room/fact-sheets/detail/breastfeeding",
        note: "Check for the latest update.",
      },
      {
        organization: "Elsevier",
        title: "Myles' Textbook for Midwives, 17th ed.",
        year: "2020",
        note: "Standard midwifery reference; verify current edition.",
      },
    ],
  },

  // ── 16 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-midwifery-practice",
    moduleTitle: "After the Birth",
    lessonTitle: "Reflecting on Your First Births",
    description:
      "Processing what you saw and did — reflection that turns raw experience into growth.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe structured reflection using the Gibbs cycle and the What-So what-Now what frame.",
      "Explain the purpose of debriefing after difficult births and its difference from rumination.",
      "Apply reflection habits to recognise when personal distress needs support beyond self-help.",
    ],
    tags: ["reflection", "growth", "debrief", "resilience"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Your first births will change you. Some will leave you walking on air; some — a shoulder dystocia, a stillbirth, a mother's grief — will leave you quiet for days. Midwifery asks you to carry these experiences, and carrying them unprocessed is how midwives burn out. Reflection is the professional habit that turns raw experience into competence instead of weight.\n\nThis lesson gives you the tools: a structure, a timing, and the honesty to know when you need more than a notebook.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Structure matters because feelings without structure become rumination. Gibbs' cycle walks the full arc: Description (what happened, facts only), Feelings (what you felt then and now), Evaluation (what went well and what did not), Analysis (why it went that way), Conclusion (what you learned), and Action plan (what you will do differently). A quicker frame fits the end of a shift: **What? So what? Now what?** — what happened, why it matters, and what changes tomorrow. Ten minutes with a notebook, ideally within a day or two, is enough.\n\nThe debrief belongs to the hard cases: after an emergency or a loss, ask your mentor to talk it through — not to relive it, but to sequence it, name what was done, and separate what you controlled from what you never could. Note the warning signs that reflection has become something needing care: intrusive replaying, disturbed sleep, avoiding the ward, numbness that persists for weeks. Then the professional move is not to push through alone but to speak to your supervisor or a counsellor — midwives who look after their own minds look after mothers longer. And record your reflections: your portfolio is where growth becomes visible, to you and to your examiners.",
      },
      {
        type: "clinical_pearl",
        body: "The births that shake you most will teach you most — but only if you unpack them with someone, the same week, not the same year.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At 2 am you assist at a fresh stillbirth. You help weigh and dress the baby, support the mother as she says goodbye, and finish the paperwork. You go home numb, sleep badly, dream of the delivery room, and spend the next few days hoping you will not be sent back to that ward.\n\nWhat is the healthiest thing you can do now?\n\nAnswer: Name it as a difficult birth and ask your mentor for a debrief within days — sequence what happened, hear what the team did and why, and place your part in proportion. Use What-So what-Now what in your notebook, and write one action point into your portfolio. Allow the sadness: grieving with a family is part of midwifery, not a failure in you. And watch the clock — if the sleeplessness and avoidance persist for weeks, tell your supervisor and accept support. The students who last are the ones who ask early.",
      },
      {
        type: "memory_trick",
        body: "Three questions, ten minutes, same week: What? So what? Now what? If the feelings outlive the questions, the next step is a person, not another page.",
      },
      {
        type: "summary",
        body: "- Reflection turns experience into learning; unprocessed experience turns into weight.\n- Gibbs: Description, Feelings, Evaluation, Analysis, Conclusion, Action plan.\n- The quick frame: What happened, why it matters, what changes tomorrow.\n- Debrief the hard births with a mentor within days — sequence, name, proportion.\n- Persisting sleeplessness, replaying or avoidance means seeking support — early, not after burnout.",
      },
    ],
    questions: [
      {
        topic: "Reflective Practice",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the purpose of structured reflection after a birth?",
        options: [
          "To prove that you handled everything correctly",
          "To fill the portfolio with pages for its own sake",
          "To compare yourself with classmates",
          "To turn experience into planned learning and better practice",
        ],
        correctIndex: 3,
        explanation:
          "Structured reflection converts experience into action: what happened, why, and what you will do differently. It is not self-justification, paperwork or competition — it is how the same mistake stops repeating.",
        courseSlug: "clinical-midwifery-practice",
      },
      {
        topic: "Reflective Practice",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "After a distressing birth, which response is most professionally healthy?",
        options: [
          "Push the feelings aside and focus on the next shift",
          "Ask your mentor for a debrief within the next few days",
          "Post about the case on social media to process it",
          "Tell yourself birth is sometimes sad and never mention it again",
        ],
        correctIndex: 1,
        explanation:
          "Debriefing with a mentor sequences the event, separates what you controlled from what you could not, and closes the loop — suppression and silence prolong distress, and social media breaches the family's confidentiality.",
        courseSlug: "clinical-midwifery-practice",
      },
      {
        topic: "Reflective Practice",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Weeks after a traumatic birth, a student still cannot sleep, replays the scene and avoids the labour ward. What does this call for?",
        options: [
          "Another reflective essay, written alone",
          "More shifts to toughen up",
          "Speaking with a supervisor and accepting professional support",
          "Waiting for the feelings to fade on their own",
        ],
        correctIndex: 2,
        explanation:
          "Persistence beyond a few weeks, with sleeplessness and avoidance, has outgrown self-help. The professional move is to tell a supervisor and accept counselling — support early, not rehabilitation after burnout.",
        courseSlug: "clinical-midwifery-practice",
      },
    ],
    flashcards: [
      {
        topic: "Reflective Practice",
        front: "What are the quick three questions of reflection?",
        back: "What? (what happened, facts) So what? (why it matters) Now what? (what changes tomorrow) — ten minutes, within the same week.",
      },
      {
        topic: "Reflective Practice",
        front: "Name the stages of Gibbs' reflective cycle.",
        back: "Description, Feelings, Evaluation, Analysis, Conclusion, Action plan.",
      },
      {
        topic: "Reflective Practice",
        front: "When does distress after a difficult birth need more than reflection?",
        back: "When it persists for weeks — intrusive replaying, disturbed sleep, avoiding the ward. Then speak to a supervisor and accept professional support, early.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Depression (Fact Sheet)",
        year: "2023",
        url: "https://www.who.int/news-room/fact-sheets/detail/depression",
        note: "Includes postpartum mental health context; check for the latest update.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Midwives",
        note: "Verify current version with the Council.",
      },
      {
        organization: "Elsevier",
        title: "Myles' Textbook for Midwives, 17th ed.",
        year: "2020",
        note: "Standard midwifery reference; verify current edition.",
      },
    ],
  },
];
