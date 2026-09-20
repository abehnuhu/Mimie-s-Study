// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 3, Semester 1 — Batch D (Reproductive Health, Midwifery
// Pharmacology, Midwifery Skills)
// 17 lessons anchored to prisma/seed-data/anchors/y3s1-d.json
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "reproductive-health",
    moduleTitle: "Youth and Preparation",
    lessonTitle: "Adolescent Reproductive Health",
    description:
      "A teenager carrying a pregnancy is still building her own body and her own future. Meet the risks of adolescent pregnancy and the kind, confidential care that keeps both mother and baby safe.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the major medical and social risks of pregnancy in girls aged 10 to 19 years.",
      "Explain what makes a service youth-friendly and why confidentiality is its foundation.",
      "Apply a respectful, non-judgmental approach to adolescent antenatal, contraceptive and postpartum care.",
    ],
    tags: ["adolescent health", "teen pregnancy", "youth-friendly services", "contraception", "confidentiality"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A sixteen-year-old walks into your CHPS compound, four months pregnant and still in her school uniform. She is not simply a younger version of the mothers you usually see. Her pelvis, her blood, her social world and her power to decide are all still under construction, and each one changes the care she needs.\n\nAdolescent pregnancy touches nearly every community in Ghana, from senior high school corridors to market streets. Your skill with her will decide whether she leaves your care healthy and still learning, or joins the girls lost to pregnancy complications. This lesson gives you the risks to watch, the services to offer and the attitude to wear.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Medically**, the young mother carries extra risk. Her growing pelvis may be too small for a term baby, so prolonged and obstructed labour, and the fistula that can follow, are real dangers of very early childbearing. Anaemia, pre-eclampsia, preterm birth and low birth weight are all more common in teenagers, and sexually transmitted infections travel with early unprotected sex. Unsafe abortion remains a leading cause of death among pregnant girls, and WHO counts complications of pregnancy and childbirth among the leading killers of girls aged fifteen to nineteen.\n\n**Socially**, the risks are just as heavy — school dropout, stigma, poverty and sometimes an older partner who holds all the power. So her care must be confidential, private and non-judgmental: a youth-friendly corner where she can speak without an auntie answering for her. Contraception belongs inside her care, not beside it — implants and intrauterine devices are safe and highly effective for young women, paired with condoms for dual protection. Ask about her relationship privately, plan her birth where obstruction can be managed, and start the school re-entry conversation early.",
      },
      {
        type: "clinical_pearl",
        body: "Screen for coercion and violence with the curtain drawn and the companion out of the room. A quiet question — \"Is anyone hurting you, or deciding things for you?\" — has opened more doors to safety than any form in the folder.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Ama, fifteen and three months pregnant, is brought to your antenatal clinic by her mother, who answers every question for her. Her haemoglobin is 9.2 g/dL, her blood pressure is normal, and she keeps her eyes on the floor. Her mother announces that the family has arranged a home birth with a traditional attendant, \"since she is young and will deliver quickly.\"\n\nWhat must change in this consultation, and what will you put in place before she leaves?\n\nAnswer: First, Ama must be heard — take her history and screen her privately, without her mother speaking for her. Treat her anaemia with iron and counsel her on iron-rich foods. Because a young primigravida carries a real risk of obstructed labour, counsel the family gently but honestly toward a facility birth or a maternity waiting home. Offer her a confidential contraceptive plan for after delivery, discuss school re-entry, and make sure her next visit is booked with her in the conversation, not outside it.",
      },
      {
        type: "memory_trick",
        body: "TEEN: Take her seriously, Explain in private, Encourage dual protection, Never judge.",
      },
      {
        type: "summary",
        body: "- Adolescents aged 10 to 19 face higher risks of anaemia, pre-eclampsia, preterm birth and obstructed labour with its fistula danger.\n- Plan facility births for teenage mothers — a growing pelvis may not fit a term baby.\n- Youth-friendly care is confidential, private, non-judgmental and convenient.\n- Contraception is part of her care: implants and IUDs are safe for young women, plus condoms for dual protection.\n- Screen privately for coercion and violence, and open the school re-entry conversation early.",
      },
    ],
    questions: [
      {
        topic: "Adolescent Reproductive Health",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A 15-year-old primigravida books at your clinic. Which risk is most closely linked to her age and first pregnancy?",
        options: [
          "Cephalopelvic disproportion from a pelvis that is still growing",
          "Post-datism with fetal macrosomia",
          "Placenta praevia in every teenage pregnancy",
          "Multiple pregnancy from young ovaries",
        ],
        correctIndex: 0,
        explanation:
          "In early adolescence the pelvis may not have finished growing, so obstructed labour from cephalopelvic disproportion — with the risk of fistula — is a classic danger of very young childbearing. The other options are not age-linked in this way.",
        courseSlug: "reproductive-health",
      },
      {
        topic: "Adolescent Reproductive Health",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which feature matters most in a youth-friendly reproductive health service?",
        options: [
          "Group counselling only, to save staff time",
          "Care for married women only, since others need permission",
          "Confidential care in a private space where she can speak freely",
          "Posters warning teenagers about the dangers of pregnancy",
        ],
        correctIndex: 2,
        explanation:
          "Confidentiality in a private, non-judgmental space is the foundation of youth-friendly care — without it, a young woman will not disclose the sexual history, coercion or symptoms that her care depends on. Posters may support, but they do not replace confidentiality.",
        courseSlug: "reproductive-health",
      },
      {
        topic: "Adolescent Reproductive Health",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A 16-year-old is six weeks postpartum, breastfeeding, and asks for contraception that will not fail her. What is your best advice?",
        options: [
          "Tell her breastfeeding alone is reliable enough",
          "Offer a long-acting method such as an implant, plus condoms for dual protection",
          "Recommend the combined oral contraceptive pill immediately",
          "Advise abstinence only until her menses returns",
        ],
        correctIndex: 1,
        explanation:
          "An implant is safe, long-acting and among the most effective methods for a young woman, and condoms add protection against infection — true dual protection. Breastfeeding suppresses ovulation only under strict conditions and for a limited time, and combined pills are avoided in the early weeks postpartum while milk is being established.",
        courseSlug: "reproductive-health",
      },
    ],
    flashcards: [
      {
        topic: "Adolescent Health",
        front: "Name three medical risks that rise with adolescent pregnancy.",
        back: "Anaemia, pre-eclampsia, preterm birth and low birth weight, and obstructed labour from a still-growing pelvis — with the danger of obstetric fistula. STIs, HIV and unsafe abortion add further risk.",
      },
      {
        topic: "Adolescent Health",
        front: "What makes a reproductive health service youth-friendly?",
        back: "Confidential, private, non-judgmental care at convenient times, in a space where a young person can speak freely and get the services she needs under one roof.",
      },
      {
        topic: "Adolescent Health",
        front: "What is dual protection for an adolescent?",
        back: "A highly effective method (implant or IUD) plus condoms — preventing both pregnancy and sexually transmitted infections at once.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Adolescent Pregnancy (Fact Sheet)",
        year: "2024",
        url: "https://www.who.int/news-room/fact-sheets/detail/adolescent-pregnancy",
        note: "Check for the latest update.",
      },
      {
        organization: "UNFPA",
        title: "Motherhood in Childhood: Facing the Challenge of Adolescent Pregnancy",
        year: "2013",
        url: "https://www.unfpa.org/publications/motherhood-childhood",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "Educational source — verify the current edition at your facility.",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "reproductive-health",
    moduleTitle: "Youth and Preparation",
    lessonTitle: "Preconception Care: The Healthiest Start",
    description:
      "The healthiest pregnancies are prepared before they begin. Learn the checks, the folic acid and the medicine reviews that give the next baby the best possible start.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the core components of preconception care for a woman and her partner.",
      "Explain why folic acid must start before conception and why certain medicines need review.",
      "Apply preconception planning to a woman with a chronic condition who wants another pregnancy.",
    ],
    tags: ["preconception", "planning", "folic acid", "birth spacing", "screening"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Some of the most important work in midwifery happens before a woman is pregnant at all. Folic acid started after the pregnancy test is already too late for the neural tube. The blood pressure tablet she has taken for years may have been chosen before anyone thought about babies. Preconception care exists to find these problems while there is still time to fix them.\n\nBecause many pregnancies are unplanned, preconception care hides in plain sight — the postnatal visit, the family planning corner and the school health talk are all preconception consultations wearing different uniforms. This lesson shows you what to check and what to change.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The centrepiece is **folic acid, 400 micrograms daily**, started at least one month — ideally three — before conception and continued through the first trimester. The neural tube closes by about day 28, often before she knows she is pregnant; women with a previously affected baby, diabetes or epilepsy need the higher 5 mg dose. Next comes **screening**: HIV, syphilis, hepatitis B, rubella immunity, and haemoglobin electrophoresis for both partners — in Ghana, where sickle cell disease is common, knowing both parents' status before conception changes everything.\n\nThen **optimisation**: tight diabetes control before conception prevents congenital anomalies; swap ACE inhibitors such as lisinopril or enalapril for pregnancy-safe options like methyldopa, labetalol or nifedipine; review antiepileptics (valproate carries the highest risk) and anticoagulants (warfarin). Stop alcohol and smoking, work toward a healthy weight, and live rubella vaccination with a month's delay before trying. WHO advises waiting at least **24 months after a live birth** before the next pregnancy — and partners should be in the conversation, because half the plan belongs to them.",
      },
      {
        type: "clinical_pearl",
        body: "Every postnatal visit is a preconception consult for the next pregnancy. That is the perfect moment to start the folic acid, review her medicines and plan the spacing.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 27-year-old mother of one attends your family planning corner eight months after a normal birth, saying she wants another baby soon. She takes lisinopril for hypertension, her blood pressure today is 142/92, and she mentions her husband's sister has sickle cell disease. She asks what she should do before trying.\n\nWhich actions belong on her preconception plan, and why does her tablet matter?\n\nAnswer: Start folic acid 400 micrograms daily now, arrange sickle screening for both partners, and counsel spacing — she is eight months postpartum, so waiting until at least 24 months have passed protects her and the next baby. Most urgently, her lisinopril must be reviewed and changed to a pregnancy-safe antihypertensive such as methyldopa or labetalol before conception, because ACE inhibitors can injure the fetal kidneys in the second and third trimesters.",
      },
      {
        type: "memory_trick",
        body: "READY for the next pregnancy: Reproductive plan with spacing, Examine and screen both partners, Alcohol and smoking off, Diseases and drugs reviewed, Yes to folic acid daily.",
      },
      {
        type: "summary",
        body: "- Folic acid 400 micrograms daily starts before conception, because the neural tube closes by day 28 — before many women know they are pregnant.\n- Screen both partners: HIV, syphilis, hepatitis B, rubella immunity and sickle status.\n- Review medicines before conception: swap ACE inhibitors, avoid valproate and warfarin where possible, keep chronic disease controlled.\n- Wait at least 24 months after a live birth before conceiving again.\n- The postnatal visit and family planning corner are preconception care in disguise.",
      },
    ],
    questions: [
      {
        topic: "Preconception Care",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why must folic acid be started before conception rather than at the booking visit?",
        options: [
          "Folic acid stops working after the eighth week",
          "Folic acid prevents conception if taken early",
          "The tablet is too large to swallow once nausea begins",
          "The neural tube closes by about day 28, often before the woman knows she is pregnant",
        ],
        correctIndex: 3,
        explanation:
          "The neural tube forms and closes within the first four weeks, frequently before a missed period is noticed. To protect it, folate must already be on board — which is why supplementation begins before conception.",
        courseSlug: "reproductive-health",
      },
      {
        topic: "Preconception Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman on lisinopril for hypertension plans to conceive. What should preconception care arrange?",
        options: [
          "Double the lisinopril dose to protect her kidneys in pregnancy",
          "Stop all antihypertensives and monitor at home",
          "Switch to a pregnancy-safe drug such as methyldopa, labetalol or nifedipine before conception",
          "Continue lisinopril until the second trimester, then change",
        ],
        correctIndex: 2,
        explanation:
          "ACE inhibitors can damage the fetal kidneys during pregnancy, so the change to a pregnancy-safe antihypertensive should happen before conception. Stopping all treatment would leave her hypertension uncontrolled, and waiting until later exposes the early pregnancy to risk.",
        courseSlug: "reproductive-health",
      },
      {
        topic: "Preconception Care",
        type: "MCQ",
        difficulty: "Easy",
        stem: "According to WHO guidance on birth spacing, how long should a couple ideally wait after a live birth before the next pregnancy?",
        options: [
          "6 months",
          "12 months",
          "At least 24 months",
          "At least 5 years",
        ],
        correctIndex: 2,
        explanation:
          "WHO advises an interval of at least 24 months after a live birth before attempting the next pregnancy, which lowers the risks of preterm birth, low birth weight and maternal depletion.",
        courseSlug: "reproductive-health",
      },
    ],
    flashcards: [
      {
        topic: "Preconception Care",
        front: "What dose of folic acid should most women take before conception, and who needs more?",
        back: "400 micrograms daily, starting at least a month (ideally three) before conception and through the first trimester. Women with a previous neural tube defect pregnancy, diabetes or epilepsy need the higher 5 mg dose.",
      },
      {
        topic: "Preconception Care",
        front: "Why is lisinopril reviewed before pregnancy, and what replaces it?",
        back: "ACE inhibitors can injure the fetal kidneys later in pregnancy. Preconception care swaps them for pregnancy-safe options such as methyldopa, labetalol or nifedipine.",
      },
      {
        topic: "Preconception Care",
        front: "What is WHO's minimum recommended interval after a live birth before the next pregnancy?",
        back: "At least 24 months — spacing reduces preterm birth, low birth weight and maternal depletion.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Preconception Care: Maximizing the Proportion for Maternal and Child Health (Meeting Report)",
        year: "2012",
        url: "https://apps.who.int/iris/handle/10665/78045",
        note: "Educational source — verify the current link and edition.",
      },
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Antenatal Care for a Positive Pregnancy Experience",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549919",
      },
      {
        organization: "Elsevier",
        title: "Myles Midwifery (17th edition)",
        year: "2020",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "midwifery-pharmacology",
    moduleTitle: "Medications in Pregnancy",
    lessonTitle: "Medication Principles in Pregnancy",
    description:
      "When two patients share one dose, every prescription becomes a balance of risks. Learn the windows, the rules and the reasoning that keep both mother and baby safe.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the risk-versus-benefit logic that governs prescribing in pregnancy.",
      "Explain how drug effects differ across the trimesters and critical windows.",
      "Apply these principles to common ward situations, including a woman afraid to take treatment.",
    ],
    tags: ["pregnancy", "principles", "teratogens", "prescribing"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "When a pregnant woman swallows a tablet, two patients receive it. Prescribing in pregnancy is therefore never a simple yes or no — it is a weighing of the drug's risk against the risk of leaving the disease untreated. Far more often than students expect, the untreated disease is the greater danger.\n\nThis lesson gives you the timing, the dose logic and the questioning habits that turn that weighing into safe daily practice at the CHPS compound and the district hospital alike.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Timing shapes the harm.** In the first two weeks after conception, damage tends to be all-or-none — the embryo is lost or repairs perfectly. Weeks three to eight are **organogenesis**, the most teratogenic window, when the heart, neural tube and palate are forming. From week nine to term, drugs mainly threaten growth and function — the brain keeps developing, so the danger never fully disappears, and second- or third-trimester effects like fetal kidney injury from ACE inhibitors prove it. Near birth, drugs affect the newborn directly.\n\n**The rules of thumb.** Use the lowest effective dose for the shortest necessary time; prefer one drug over three and old, well-studied drugs over new ones. Treat the mother properly — untreated malaria, epilepsy, HIV or hypertension harms the baby more than well-chosen treatment does. Review every medicine at booking, including herbal preparations, which many Ghanaian women take faithfully and rarely mention. And never let a woman stop an essential medicine abruptly out of fear — a seizure or a hypertensive crisis endangers both patients at once. The old FDA A-to-X letters were replaced in 2015 by the Pregnancy and Lactation Labeling Rule, which describes risk in plain words instead of single letters.",
      },
      {
        type: "clinical_pearl",
        body: "The two most dangerous habits in maternity prescribing are refusing all drugs out of fear, and continuing all drugs out of habit. The safe path is the reasoned prescription, reviewed at every stage of pregnancy.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman at nine weeks attends your clinic with fever and a positive malaria test. You offer the recommended first-line treatment, but she refuses, saying an elder told her medicines \"spoil the pregnancy.\" She plans to drink a herbal preparation instead.\n\nHow do you counsel her, and what is the reasoning?\n\nAnswer: Take time to explain that untreated malaria is the real threat — fever and parasites in the first trimester raise her risks of miscarriage, severe anaemia and maternal collapse, and the baby is far safer when the mother is treated. Offer the nationally recommended first-line medicine for her stage of pregnancy, invite the elder into the conversation if she wishes, and ask her to return or call the same day if symptoms continue. Refusing treatment to \"protect\" the baby is the riskier choice.",
      },
      {
        type: "memory_trick",
        body: "Sing the calendar: weeks 3 to 8, organs are made; weeks 9 to birth, growth is the trade; near delivery, watch the breath.",
      },
      {
        type: "summary",
        body: "- Prescribing in pregnancy weighs drug risk against the risk of untreated disease — often the disease is worse.\n- Weeks 0 to 2: all-or-none. Weeks 3 to 8: organogenesis, the most teratogenic window. Week 9 onward: growth and function, with harm still possible.\n- Use the lowest effective dose, the shortest duration, and well-studied drugs; avoid polypharmacy.\n- Review all medicines at booking — including herbal preparations.\n- Never stop essential medicines abruptly; arrange a proper review instead.",
      },
    ],
    questions: [
      {
        topic: "Medication Principles in Pregnancy",
        type: "MCQ",
        difficulty: "Easy",
        stem: "During which period is drug exposure most likely to cause major structural malformations?",
        options: [
          "Weeks 3 to 8, the period of organogenesis",
          "Weeks 0 to 2 after conception",
          "Weeks 20 to 24",
          "The third trimester only",
        ],
        correctIndex: 0,
        explanation:
          "Weeks three to eight are organogenesis, when the heart, neural tube and other organs take shape — the window of greatest structural risk. Earlier exposure is typically all-or-none, and later exposure mainly threatens growth and function.",
        courseSlug: "midwifery-pharmacology",
      },
      {
        topic: "Medication Principles in Pregnancy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman with epilepsy discovers she is pregnant and stops her antiepileptic tablets immediately, terrified of harming the baby. What is the correct guidance?",
        options: [
          "She was right — all antiepileptics must be stopped in pregnancy",
          "She should halve the dose and monitor herself at home",
          "She should switch to a herbal preparation until delivery",
          "She should restart her prescribed medicine and be reviewed urgently by her prescriber",
        ],
        correctIndex: 3,
        explanation:
          "Uncontrolled seizures endanger both mother and baby far more than well-managed treatment. The safe action is to continue or restart the prescribed medicine and arrange an urgent review, where options and doses can be optimised — never abrupt withdrawal.",
        courseSlug: "midwifery-pharmacology",
      },
      {
        topic: "Medication Principles in Pregnancy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why should the medicines review at booking include herbal preparations the woman is taking?",
        options: [
          "Herbal medicines are always safe and need no discussion",
          "Herbal preparations can be potent, unstandardised and able to interact with prescribed drugs",
          "Asking about herbs insults the woman's family",
          "Herbal medicines only matter after delivery",
        ],
        correctIndex: 1,
        explanation:
          "Herbal preparations are pharmacologically active — often potent, variable in strength and unregulated — and they can interact with prescribed treatment or harm the pregnancy. Asking respectfully builds trust and completes the picture of what she is truly taking.",
        courseSlug: "midwifery-pharmacology",
      },
    ],
    flashcards: [
      {
        topic: "Medication Principles",
        front: "What happens to drug risk during weeks 3 to 8 of pregnancy?",
        back: "This is organogenesis — the heart, neural tube and organs are forming — so exposure here carries the highest risk of major structural malformations.",
      },
      {
        topic: "Medication Principles",
        front: "What does 'all-or-none' mean for weeks 0 to 2?",
        back: "Damage in the first two weeks either destroys the embryo entirely or is fully repaired — there is usually no middle outcome of malformation.",
      },
      {
        topic: "Medication Principles",
        front: "What replaced the FDA's old A, B, C, D and X pregnancy categories?",
        back: "The Pregnancy and Lactation Labeling Rule (2015), which describes risk in narrative form instead of single letters.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Antenatal Care for a Positive Pregnancy Experience",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549919",
      },
      {
        organization: "U.S. Food and Drug Administration",
        title: "Pregnancy and Lactation Labeling (Drugs) Final Rule",
        year: "2015",
        url: "https://www.fda.gov/drugs/labeling-information-drug-products/pregnancy-and-lactation-labeling-drugs-final-rule",
      },
      {
        organization: "Elsevier",
        title: "Myles Midwifery (17th edition)",
        year: "2020",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "midwifery-pharmacology",
    moduleTitle: "Medications in Pregnancy",
    lessonTitle: "Medication Effects on the Fetus and Newborn",
    description:
      "The placenta is a sieve, not a wall. See how drugs slip across to the smallest patient, what they do when they arrive, and how to judge what reaches a breastfeeding baby.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the properties that determine how easily a drug crosses the placenta.",
      "Explain the classic fetal effects of key drugs and the near-birth effects on the newborn.",
      "Apply breastfeeding safety reasoning to common postpartum prescriptions.",
    ],
    tags: ["fetus", "transfer", "placenta", "breastfeeding", "teratogens"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "For nine months, everything the mother takes travels toward her baby through a membrane thinner than a page. The placenta transfers oxygen and food — and, willingly or not, a share of every drug she swallows, injects or infuses. At birth the placenta is cut, and the newborn must suddenly clear on its own whatever the last doses left behind.\n\nThis lesson follows a drug on that journey: across the placenta, through the fetus, into the birth room and, later, into breast milk. Knowing the crossing rules turns you into the person who spots the dangerous prescription before it is given.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**What crosses easily:** small molecules (under about 500 daltons), fat-soluble, unionised, and loosely bound to blood proteins. That is why alcohol, nicotine and most small drugs cross almost freely, while big ones like **heparin and insulin stay behind** — which is why heparin is the anticoagulant of pregnancy. Once across, the fetus is exposed at close to maternal levels; its liver barely metabolises, and much of its blood is shunted through the ductus venosus straight past the liver to the heart.\n\n**The classic offenders:** warfarin (nasal hypoplasia, stippled bones), valproate (neural tube defects), isotretinoin (multiple severe anomalies), tetracycline (discoloured teeth, slowed bone growth) and ACE inhibitors in later pregnancy (fetal kidney injury and low fluid). **Near birth:** opioids depress the newborn's breathing, SSRIs cause jittery poor feeding, magnesium causes floppiness — so time the last doses thoughtfully. In breast milk, most drugs arrive in tiny amounts; paracetamol and ibuprofen barely register. But caution with codeine, avoid oestrogen-containing pills early while milk is establishing, and never give chloramphenicol to newborns themselves — their immature livers cause the grey baby syndrome.",
      },
      {
        type: "clinical_pearl",
        body: "Before any prescription near a baby, ask three questions: how much crosses, who will metabolise it, and when was the last dose relative to birth?",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman at 26 weeks attends your clinic holding a prescription given elsewhere for tetracycline capsules for a urinary infection. She has not taken the first dose and asks whether they are safe for the baby.\n\nWhat do you tell her, and what do you do next?\n\nAnswer: Praise her for asking before taking the first capsule, and explain that tetracycline lays down in growing bones and developing teeth — the baby's teeth can be permanently discoloured and bone growth slowed. Ask the prescriber to change to a pregnancy-safe antibiotic such as amoxicillin, document the near-miss and the correction, and confirm the infection actually needs treatment with the right test before any course begins.",
      },
      {
        type: "memory_trick",
        body: "The sieve rule: Small, Fat and Free (unbound, unionised) slips straight through the placenta. Big and sticky — like heparin — stays on the mother's side.",
      },
      {
        type: "summary",
        body: "- Placental transfer is easiest for drugs that are small, fat-soluble, unionised and poorly protein-bound.\n- Heparin and insulin are too large to cross — heparin is therefore the anticoagulant of pregnancy.\n- Classic fetal harms: warfarin, valproate, isotretinoin, tetracycline and later-trimester ACE inhibitors.\n- Near birth, opioids, SSRIs and magnesium can affect the newborn's breathing, feeding and tone.\n- Breast milk carries only traces of most drugs — paracetamol and ibuprofen are safe; be cautious with codeine.",
      },
    ],
    questions: [
      {
        topic: "Fetal Drug Effects",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which drug property set crosses the placenta most easily?",
        options: [
          "Large, water-soluble, tightly protein-bound",
          "Ionised and attached to red cells",
          "Molecular weight above 1000 daltons",
          "Small, fat-soluble, unionised and loosely bound",
        ],
        correctIndex: 3,
        explanation:
          "The placenta behaves like a lipid sieve: small, fat-soluble, unionised drugs with little protein binding slip across almost freely. Large, water-soluble or heavily bound molecules are largely held back — which is why heparin does not reach the fetus.",
        courseSlug: "midwifery-pharmacology",
      },
      {
        topic: "Fetal Drug Effects",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman at 28 weeks is offered tetracycline for a skin infection. What fetal effect makes this the wrong choice?",
        options: [
          "Discoloured teeth and slowed bone growth",
          "Neural tube defects",
          "Fetal kidney injury with low amniotic fluid",
          "Cleft palate only",
        ],
        correctIndex: 0,
        explanation:
          "Tetracycline binds calcium in developing bones and teeth, producing permanently discoloured teeth and slowed skeletal growth. Neural tube defects belong to valproate; kidney injury with low fluid belongs to later-trimester ACE inhibitors.",
        courseSlug: "midwifery-pharmacology",
      },
      {
        topic: "Fetal Drug Effects",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother received repeated opioid doses in the last hour before birth. What newborn problem must you anticipate, and what is the antidote?",
        options: [
          "Jittery, over-alert behaviour needing sedation",
          "Deafness from auditory nerve damage",
          "Respiratory depression, with naloxone available for reversal",
          "Grey baby syndrome from liver immaturity",
        ],
        correctIndex: 2,
        explanation:
          "Opioids given close to delivery cross to the baby and depress the breathing centre, so the newborn may need stimulation, support and naloxone. The other effects belong to different drugs or mechanisms entirely.",
        courseSlug: "midwifery-pharmacology",
      },
    ],
    flashcards: [
      {
        topic: "Fetal Drug Effects",
        front: "Why is heparin the anticoagulant of choice in pregnancy?",
        back: "Its molecule is too large to cross the placenta, so the fetus is protected while the mother's blood is thinned.",
      },
      {
        topic: "Fetal Drug Effects",
        front: "Name three classic human teratogens and their signatures.",
        back: "Warfarin (nasal hypoplasia, stippled epiphyses), valproate (neural tube defects), isotretinoin (multiple severe anomalies). Tetracycline stains developing teeth and slows bone growth.",
      },
      {
        topic: "Fetal Drug Effects",
        front: "Why can chloramphenicol be catastrophic in a newborn?",
        back: "The newborn liver cannot conjugate chloramphenicol, so the drug accumulates and causes grey baby syndrome: collapse, a grey colour and cardiovascular failure.",
      },
    ],
    sources: [
      {
        organization: "U.S. National Library of Medicine",
        title: "Drugs and Lactation Database (LactMed)",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK501922/",
        note: "Free, evidence-based reference for drugs in breast milk.",
      },
      {
        organization: "U.S. Food and Drug Administration",
        title: "Pregnancy and Lactation Labeling (Drugs) Final Rule",
        year: "2015",
        url: "https://www.fda.gov/drugs/labeling-information-drug-products/pregnancy-and-lactation-labeling-drugs-final-rule",
      },
      {
        organization: "Elsevier",
        title: "Gabbe's Obstetrics: Normal and Problem Pregnancies (8th edition)",
        year: "2021",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "midwifery-pharmacology",
    moduleTitle: "Medications in Pregnancy",
    lessonTitle: "Medication Safety in Maternity Care",
    description:
      "A short shelf of powerful drugs runs the whole maternity ward. Meet the high-alert medicines, the traps they hide, and the checks that keep them lifesaving instead of lethal.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Identify the high-alert medications of maternity care and the specific harm each can cause.",
      "Explain the monitoring required before and during magnesium sulfate therapy.",
      "Apply double-check and storage habits that prevent look-alike and route errors.",
    ],
    tags: ["medication safety", "maternity", "high-alert drugs", "magnesium sulfate", "oxytocin"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Maternity care runs on a short list of astonishingly powerful drugs. Oxytocin can stop a haemorrhage in a minute; magnesium sulfate can stop a seizure; potassium can restart a failing rhythm. The same ampoules, given by the wrong route, dose or speed, can do the opposite just as fast.\n\nThis lesson is about the high-alert drugs of your ward, the specific traps each one sets, and the small habits — checks, storage, labels — that stand between a save and a tragedy on a busy night shift.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Oxytocin** tops the list. Ten units intramuscularly after birth is the shield against postpartum haemorrhage — but a concentrated push into a vein can drop the blood pressure dangerously, and for augmentation it must only ever travel as a **dilute, labelled infusion**, never a bolus. Keep concentrated ampoules away from the delivery trolley, and label infusion lines clearly. **Magnesium sulfate** comes next: before every top-up, confirm reflexes are present, breathing is at least 16 per minute, and urine is flowing (at least about 30 mL each hour). Overdose first silences the reflexes, then the breathing. The antidote, calcium gluconate 10% solution given slowly intravenously, must live where the magnesium lives.\n\nAdd concentrated potassium (never undiluted, never rushed) and insulin and heparin (dose confusion is legendary), and you have the ward's danger shelf. **Look-alike, sound-alike drugs** — hydralazine and hydroxyzine, methylergometrine and metronidazole in rushed handwriting — invite mix-ups, so store them apart, use tall-man lettering on labels, and keep different strengths in different places. An **independent double-check** means two clinicians check separately, from the label up, and only then compare. And remember Ghana's heat: many labels ask for storage between 2 and 8 degrees — a drug left on a sunny windowsill quietly loses its power.",
      },
      {
        type: "clinical_pearl",
        body: "Keep calcium gluconate in the same drawer as the magnesium. An antidote a corridor away is not an antidote when the breathing stops.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "On a busy night at the district hospital, you see a colleague draw oxytocin from a 10-unit ampoule into a syringe, planning to give it as an intravenous push to a woman whose labour is being augmented. The infusion pump alarm has been distracting everyone.\n\nWhat is about to go wrong, and what do you do?\n\nAnswer: Oxytocin for augmentation must only be given as a dilute infusion, titrated against contractions and the fetal heart — an undiluted intravenous push can cause a sudden fall in blood pressure and uterine hyperstimulation that starves the baby. Stop the preparation, re-check the label and the order with a second person, and continue the dilute infusion with proper monitoring. Report the near-miss afterwards so the system, not the person, is corrected.",
      },
      {
        type: "memory_trick",
        body: "Before every magnesium top-up, remember the three Rs: Reflexes, Respirations, and Recorded urine output. No three Rs, no dose.",
      },
      {
        type: "summary",
        body: "- Oxytocin after birth is 10 units IM; for augmentation it is always a dilute, labelled infusion — never a concentrated push.\n- Before each magnesium sulfate dose: reflexes present, breathing at least 16 per minute, urine flowing. Calcium gluconate 10% is the antidote and stays beside the magnesium.\n- Concentrated potassium, insulin and heparin complete the high-alert shelf.\n- Store look-alike, sound-alike drugs apart, label clearly, and keep cold-chain drugs cold.\n- An independent double-check means two clinicians check separately, then compare.",
      },
    ],
    questions: [
      {
        topic: "Medication Safety in Maternity",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Before giving the next dose of magnesium sulfate to a woman with severe pre-eclampsia, what must you confirm?",
        options: [
          "Reflexes present, breathing at least 16 per minute, and urine flowing",
          "Only that she is comfortable and pain-free",
          "That she has eaten a full meal",
          "That the fetal head has engaged",
        ],
        correctIndex: 0,
        explanation:
          "Magnesium overdose silences reflexes first, then breathing — so each dose waits for intact reflexes, an adequate respiratory rate and a healthy urine output, which shows the kidneys are clearing the drug.",
        courseSlug: "midwifery-pharmacology",
      },
      {
        topic: "Medication Safety in Maternity",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why is oxytocin for labour augmentation always given as a dilute infusion rather than an intravenous push?",
        options: [
          "Dilution makes the drug cheaper",
          "Oxytocin cannot dissolve in normal saline",
          "Pushes work too slowly to be useful",
          "A concentrated IV push can cause hypotension and uterine hyperstimulation that endangers mother and baby",
        ],
        correctIndex: 3,
        explanation:
          "An undiluted intravenous push of oxytocin can collapse the blood pressure and throw the uterus into sustained contraction, starving the baby of oxygen. The dilute infusion allows titration to exactly three to four good contractions every ten minutes.",
        courseSlug: "midwifery-pharmacology",
      },
      {
        topic: "Medication Safety in Maternity",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What does an 'independent' double-check of a high-alert drug mean in practice?",
        options: [
          "Two clinicians read the label together at the same time, in silence",
          "One clinician checks the drug while the patient watches",
          "Two clinicians check separately, from the label to the order, and only then compare",
          "The senior nurse checks everything alone after the shift",
        ],
        correctIndex: 2,
        explanation:
          "Independence is the whole point: checking separately breaks the pattern where one person's assumption guides the other's eyes. Only after both have checked from the order to the prepared syringe do they compare findings.",
        courseSlug: "midwifery-pharmacology",
      },
    ],
    flashcards: [
      {
        topic: "Medication Safety",
        front: "What three checks precede every magnesium sulfate top-up?",
        back: "Patellar reflexes present, respiratory rate at least 16 per minute, and adequate urine output (roughly 30 mL per hour) showing the kidneys are clearing the drug.",
      },
      {
        topic: "Medication Safety",
        front: "What is the antidote to magnesium sulfate overdose, and where should it live?",
        back: "Calcium gluconate 10% solution given slowly intravenously — stored in the same place as the magnesium, never a corridor away.",
      },
      {
        topic: "Medication Safety",
        front: "How can you prevent look-alike, sound-alike drug mixtures on the ward?",
        back: "Store them apart, label clearly (tall-man lettering helps), keep different strengths in different places, and use independent double-checks before high-alert doses.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors (2nd edition)",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565493",
      },
      {
        organization: "World Health Organization",
        title: "WHO Patient Safety Curriculum Guide: Multi-professional Edition",
        year: "2011",
        url: "https://apps.who.int/iris/handle/10665/44641",
      },
      {
        organization: "Institute for Safe Medication Practices",
        title: "High-Alert Medications List",
        url: "https://www.ismp.org/recommendations/high-alert-medications-list",
        note: "Educational source — verify the current list version.",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "midwifery-pharmacology",
    moduleTitle: "Medications in Labour and After",
    lessonTitle: "Medications During Labour",
    description:
      "Oxytocin drips, pethidine and the antibiotics of ruptured membranes — the small pharmacy of labour, and the close watching each drug demands.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the safe setup, titration and monitoring of oxytocin augmentation.",
      "Explain the timing rules for pethidine analgesia and the newborn risk near birth.",
      "Apply recognition and first response to uterine hyperstimulation.",
    ],
    tags: ["labour", "oxytocin", "pethidine", "augmentation", "hyperstimulation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Labour has its own small pharmacy. Oxytocin strengthens contractions when they fail; pethidine dulls pain when it overwhelms; antibiotics step in when membranes have been open too long; magnesium guards the woman with pre-eclampsia. Each is safe in the right dose, route and rhythm — and dangerous outside them.\n\nIn this lesson you will learn to run that pharmacy: when each drug earns its place, what to watch while it works, and the first moves to make when a watch alarms. At CHPS level, part of the skill is knowing what to start, what to stabilise and when to call.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Oxytocin augmentation** is only for active labour with no obstruction — confirm dilatation and descent, an adequate pelvis, no transverse lie and no fetal distress first. It runs as a dilute intravenous infusion, titrated until you see three to four contractions every ten minutes, each lasting about forty-five seconds, assessed every half hour and charted on the partograph. If contractions climb past five in ten minutes, last over two minutes, or the fetal heart changes, you are seeing **hyperstimulation**: stop the drip, turn her onto her left side, run intravenous fluids, call for help — and reassess for obstruction before restarting anything.\n\n**Pethidine**, 50 to 100 mg intramuscularly, is the classic opioid for labour pain. The rule is timing: do not give it when birth is expected within about four hours, because it reaches the baby's breathing centre just as he needs it most. Keep **naloxone** ready and be prepared to support the newborn's breathing. **Antibiotics** enter when membranes have been ruptured for many hours or infection signs appear — fever, a tender uterus, smelly liquor or maternal tachycardia. And one absolute: **ergometrine is forbidden until after the baby is born**. Before delivery it can clamp the uterus around a trapped head with catastrophic force.",
      },
      {
        type: "clinical_pearl",
        body: "Oxytocin in labour is a drip, never a push: dilute it, label it, titrate it against contractions, and lay eyes on the woman and the fetal heart every thirty minutes.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A first-time mother at your district hospital is eight hours into augmented labour. Her contractions are now seven in ten minutes, two of them lasting over ninety seconds, and the fetal heart has climbed to 168 with a dip after the last contraction. The oxytocin drip is running steadily.\n\nWhat is your first action, and what follows?\n\nAnswer: The picture is uterine hyperstimulation with fetal distress, so the first act is to stop the oxytocin infusion completely, then turn her onto her left side and ensure intravenous fluids are running while you call for help and watch the fetal heart. After the contractions settle, reassess with a vaginal examination for progress and obstruction and review whether this labour can still deliver safely here. Everything — the stop, the time, the heart rate changes — goes on the partograph.",
      },
      {
        type: "memory_trick",
        body: "When the uterus overworks, STOP: Stop the oxytocin, Turn her left, Observe the baby, Phone for help.",
      },
      {
        type: "summary",
        body: "- Augment only unobstructed active labour: confirm dilatation, descent, presentation and fetal wellbeing first.\n- Oxytocin runs as a dilute titrated infusion aiming for 3-4 contractions per ten minutes, each about 45 seconds, reviewed every 30 minutes.\n- Hyperstimulation means contractions over 5 per 10 minutes, lasting over 2 minutes, or fetal heart changes — stop the drip, left lateral, fluids, call.\n- Avoid pethidine when birth is expected within about four hours; keep naloxone ready.\n- Antibiotics follow protocol for long-ruptured membranes or infection signs; ergometrine never precedes birth.",
      },
    ],
    questions: [
      {
        topic: "Medications During Labour",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Contractions on an oxytocin infusion rise to six in ten minutes with a fetal heart deceleration. What is your first action?",
        options: [
          "Increase the drip rate to speed progress",
          "Perform an immediate episiotomy",
          "Stop the oxytocin infusion and turn her onto her left side",
          "Give ergometrine intravenously",
        ],
        correctIndex: 2,
        explanation:
          "This is hyperstimulation with fetal compromise. Stopping the infusion removes the driver, and the left lateral position restores blood flow to the placenta — then fluids, monitoring and a call for help follow.",
        courseSlug: "midwifery-pharmacology",
      },
      {
        topic: "Medications During Labour",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why must ergometrine never be given before delivery of the baby?",
        options: [
          "It causes a fall in blood pressure before birth",
          "It can throw the uterus into sustained contraction, trapping the baby and risking rupture",
          "It blocks the action of oxytocin permanently",
          "It causes fetal jaundice",
        ],
        correctIndex: 1,
        explanation:
          "Ergometrine produces powerful, sustained uterine contraction. Given before birth, the uterus can clamp down on a half-delivered baby, obstructing delivery and threatening uterine rupture. It belongs after the placenta.",
        courseSlug: "midwifery-pharmacology",
      },
      {
        topic: "Medications During Labour",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman in labour asks for pethidine. The midwife estimates birth is two hours away. What is the wisest response?",
        options: [
          "Give the full dose immediately — pain relief comes first",
          "Give pethidine with ergometrine to balance it",
          "Tell her pethidine is banned in all labours",
          "Delay pethidine, because birth within about four hours risks newborn respiratory depression, with naloxone at hand if opioids are given",
        ],
        correctIndex: 3,
        explanation:
          "Opioids given within roughly four hours of delivery cross to the baby and can depress breathing at birth. When birth is close, delay or choose other support; if opioids were given, anticipate the newborn may need stimulation and naloxone.",
        courseSlug: "midwifery-pharmacology",
      },
    ],
    flashcards: [
      {
        topic: "Labour Medications",
        front: "What signs define uterine hyperstimulation on an oxytocin drip, and what are the four responses?",
        back: "More than five contractions in ten minutes, contractions lasting over two minutes, or fetal heart changes. Respond by STOP: Stop the drip, Turn left lateral, Observe the baby, Phone for help.",
      },
      {
        topic: "Labour Medications",
        front: "What is the target contraction pattern when titrating oxytocin for augmentation?",
        back: "Three to four contractions every ten minutes, each lasting about forty-five seconds — assessed every thirty minutes and charted on the partograph.",
      },
      {
        topic: "Labour Medications",
        front: "What is the pethidine timing rule near birth?",
        back: "Avoid giving it when birth is expected within about four hours, because it reaches the newborn's breathing centre — naloxone must be ready if opioids are given close to delivery.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors (2nd edition)",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565493",
      },
      {
        organization: "World Health Organization",
        title: "WHO Recommendations: Intrapartum Care for a Positive Childbirth Experience",
        year: "2018",
        url: "https://www.who.int/publications/i/item/9789241550215",
      },
      {
        organization: "Elsevier",
        title: "Myles Midwifery (17th edition)",
        year: "2020",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "midwifery-pharmacology",
    moduleTitle: "Medications in Labour and After",
    lessonTitle: "Postpartum Medications",
    description:
      "After the birth, a handful of drugs do the heavy lifting — uterotonics against bleeding, magnesium against seizures, and pain relief the breastfeeding baby can live with.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the postpartum uterotonics and the cautions attached to each.",
      "Explain why magnesium sulfate continues for 24 hours after birth in severe pre-eclampsia.",
      "Apply breastfeeding-safety reasoning to postpartum analgesia and contraception choices.",
    ],
    tags: ["postpartum", "breastfeeding", "uterotonics", "magnesium sulfate", "analgesia"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The days after birth ask three quiet questions at every round: is the uterus tight, is the mother's pressure and pain under control, and is everything she takes safe for the baby at her breast? A short list of medicines answers all three — if you know each one's rules.\n\nThis lesson walks the postnatal drug chart: the uterotonics that stand guard against haemorrhage, the magnesium that keeps a pre-eclamptic woman safe after delivery, the analgesia a breastfeeding mother can rely on, and the contraception she can start without weaning her baby.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Uterotonics:** oxytocin 10 units intramuscularly is the first line for preventing postpartum bleeding. If bleeding continues, the ladder runs to **ergometrine 0.2 mg IM** — forbidden when the woman is hypertensive, pre-eclamptic or has heart disease, because it drives blood pressure up — and to **misoprostol 400 micrograms** under the tongue or by mouth where oxytocin is unavailable; stronger options like carboprost belong to referral facilities. In severe pre-eclampsia, **magnesium sulfate continues for 24 hours after birth** — the seizure risk does not end with the placenta — with the same reflex, respiratory and urine checks as before.\n\n**Comfort and feeding:** paracetamol and ibuprofen are the workhorses and barely reach the baby in milk; avoid codeine-containing syrups where possible, because some mothers convert codeine to morphine rapidly and the newborn becomes drowsy and feeds poorly. Contraception can start immediately: progestogen-only pills, implants and IUDs do not harm milk supply, while combined pills are avoided in the first six weeks postpartum. Antibiotics for mastitis or endometritis — amoxicillin, flucloxacillin, metronidazole — are compatible with breastfeeding, and in mastitis, keeping the baby at the breast is part of the cure, because it drains the blocked milk.",
      },
      {
        type: "clinical_pearl",
        body: "If her pressure is high, ergometrine is off the table. Keep the pressure-friendly options — oxytocin and misoprostol — ready for the hypertensive postpartum woman.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman delivered two hours ago after a pregnancy complicated by severe pre-eclampsia. Her blood pressure is 150/100, she is on a magnesium sulfate infusion, and the midwife notes the uterus is soft with moderately heavy bleeding. The midwife reaches for ergometrine from the emergency tray.\n\nWhat should happen instead, and why does the magnesium continue?\n\nAnswer: With active pre-eclampsia, ergometrine is contraindicated — its pressor effect could push her into a hypertensive crisis or seizure. The correct response is oxytocin 10 units IM, uterine massage, and emptying of the bladder, moving to misoprostol if bleeding persists. The magnesium sulfate continues for a full 24 hours after birth because the danger of eclamptic seizure peaks in this window, with the same reflex, respiratory and urine checks as before delivery.",
      },
      {
        type: "memory_trick",
        body: "The PPH prevention ladder for the hypertensive mother: Oxytocin first, Misoprostol when oxytocin runs out, and Ergometrine only if the pressure is normal — OME.",
      },
      {
        type: "summary",
        body: "- Oxytocin 10 units IM is first-line postpartum uterotonic; ergometrine 0.2 mg IM is barred in hypertension, pre-eclampsia and heart disease.\n- Misoprostol 400 micrograms sublingual or oral is the alternative where oxytocin is unavailable.\n- Magnesium sulfate continues for 24 hours after birth in severe pre-eclampsia, with reflex, breathing and urine checks.\n- Paracetamol and ibuprofen are breastfeeding-safe analgesia; be cautious with codeine.\n- Progestogen-only contraception, implants and IUDs are safe from day one; combined pills wait six weeks.",
      },
    ],
    questions: [
      {
        topic: "Postpartum Medications",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A woman with pre-eclampsia bleeds heavily after birth. Which uterotonic is contraindicated?",
        options: [
          "Oxytocin 10 units IM",
          "Misoprostol 400 micrograms",
          "Uterine massage with oxytocin",
          "Ergometrine 0.2 mg IM",
        ],
        correctIndex: 3,
        explanation:
          "Ergometrine raises blood pressure and can trigger a hypertensive crisis or seizure in a pre-eclamptic woman. Oxytocin and misoprostol are the pressure-friendly alternatives.",
        courseSlug: "midwifery-pharmacology",
      },
      {
        topic: "Postpartum Medications",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why does magnesium sulfate continue for 24 hours after delivery in severe pre-eclampsia?",
        options: [
          "Because the risk of eclamptic seizure remains highest in the first day after birth",
          "To help the uterus involute faster",
          "To suppress lactation until the pressure settles",
          "To prevent postpartum infection",
        ],
        correctIndex: 0,
        explanation:
          "The postpartum period — especially the first 24 hours — carries the highest seizure risk for the pre-eclamptic woman, so magnesium protection continues after the placenta is gone, with the same monitoring.",
        courseSlug: "midwifery-pharmacology",
      },
      {
        topic: "Postpartum Medications",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A breastfeeding mother at home is prescribed a codeine-containing cough syrup for a severe cough. What is the concern?",
        options: [
          "Codeine turns breast milk yellow",
          "Some mothers convert codeine to morphine very rapidly, and the baby becomes drowsy and feeds poorly",
          "Codeine completely stops milk production after one dose",
          "Codeine causes maternal hair loss",
        ],
        correctIndex: 1,
        explanation:
          "In rapid metabolisers, codeine converts to morphine quickly and concentrates in milk, sedating the newborn. Safer options — plain paracetamol or ibuprofen — should be preferred while she breastfeeds.",
        courseSlug: "midwifery-pharmacology",
      },
    ],
    flashcards: [
      {
        topic: "Postpartum Medications",
        front: "Which uterotonic is contraindicated in a woman with hypertension or pre-eclampsia, and why?",
        back: "Ergometrine — it constricts vessels and raises blood pressure, risking crisis or seizure. Use oxytocin or misoprostol instead.",
      },
      {
        topic: "Postpartum Medications",
        front: "How long does magnesium sulfate continue after birth in severe pre-eclampsia, and why?",
        back: "For 24 hours — the postpartum window carries the highest seizure risk, and the checks (reflexes, breathing, urine) continue unchanged.",
      },
      {
        topic: "Postpartum Medications",
        front: "What is the breastfeeding-safe postpartum analgesia pair?",
        back: "Paracetamol and ibuprofen — both transfer into milk in negligible amounts. Codeine is the one to avoid or use with caution.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Recommendations: Uterotonics for the Prevention of Postpartum Haemorrhage",
        year: "2018",
        url: "https://www.who.int/publications/i/item/9789241550482",
      },
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors (2nd edition)",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565493",
      },
      {
        organization: "U.S. National Library of Medicine",
        title: "Drugs and Lactation Database (LactMed)",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK501922/",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "midwifery-pharmacology",
    moduleTitle: "Safe Practice and Vigilance",
    lessonTitle: "Safe Administration in Midwifery",
    description:
      "Most medication harm is not exotic — it is a hurried hand, an unlabelled syringe, a look-alike vial at 2 am. Master the rights and checks that make every dose safe.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "List the rights of medication administration and the three label checks.",
      "Explain safe patient identification and why documentation must be immediate.",
      "Apply these habits to real maternity scenarios, including verbal orders.",
    ],
    tags: ["administration", "safety", "documentation", "identification"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Medication errors rarely come from ignorance. They come from interruption, haste and fatigue — a syringe drawn early and left unlabelled, a vial grabbed because it stood where the right one should have been, a dose charted at the end of a frantic shift from memory. The defences against these are famously unglamorous: rights, checks, questions and immediate notes.\n\nThis lesson turns those habits into reflexes. The rights of administration, the three label checks, the open identification question and the discipline of immediate charting — each is small, and together they are the reason your busiest hour still ends safely.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The classic **five rights** are right patient, right drug, right dose, right route and right time — and midwifery extends them: right **documentation** (chart it at once), right **reason** (why this drug, today?), right **response** (check what happened after), right **education** (does she know what to watch for?) and right **refusal** (respect and record her choice). Alongside the rights sit the **three checks**: read the label when you take the drug, when you prepare it, and when you return it to the shelf.\n\n**Identify the patient** with an open question — \"Tell me your full name, please?\" — and match it to the wristband and folder. Never ask \"Are you Mrs Mensah?\"; a tired, anxious woman will say yes to anything. Ask about **allergies** at every admission. High-alert drugs get an independent double-check. Documentation happens the moment the dose leaves your hands, signed — a drug given but not charted is a drug the next shift will give again. Verbal orders survive only in emergencies: repeat the order back, write it, and have it signed as soon as possible. And store medicines as the label demands — in Ghana's heat, a drug left on a windowsill quietly loses its power, and many labels ask for 2 to 8 degrees.",
      },
      {
        type: "clinical_pearl",
        body: "Chart it while your hands still smell of the ampoule. Memory is a poor syringe label — and the next shift cannot see what you remember.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At a busy outreach clinic, a colleague has drawn five syringes at once — injections for five different women waiting on the bench. Only one syringe carries a handwritten label, and the colleague asks you to give \"the one in the middle\" to the next mother.\n\nWhat is wrong here, and how do you rescue the situation safely?\n\nAnswer: Unlabelled syringes and giving drugs by position rather than by identity break several rights at once — the drug, dose and patient are all unverified. Refuse politely and start over: check each order, label every syringe at the moment of drawing, identify each woman with an open question, and chart each dose immediately after giving it. Then raise the pattern at the next staff meeting, because the system — not the colleague — allowed the trap.",
      },
      {
        type: "memory_trick",
        body: "Five rights ride on your five fingers; documentation is the thumb that grips the whole hand together. No chart, no dose.",
      },
      {
        type: "summary",
        body: "- The five rights — patient, drug, dose, route, time — extend to documentation, reason, response, education and refusal.\n- Three checks: read the label when taking, preparing and returning the drug.\n- Identify with an open question and the wristband, never a yes/no question, and ask about allergies every time.\n- Chart immediately after giving — a dose that exists only in memory invites a duplicate dose from the next shift.\n- Verbal orders: emergency only, repeat back, then written and signed. Store drugs per label — heat steals potency.",
      },
    ],
    questions: [
      {
        topic: "Safe Administration",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the safest way to identify a woman before giving an injection?",
        options: [
          "Ask her to tell you her full name, then match it to her wristband and folder",
          "Ask, \"Are you Mrs Mensah?\" and check her seat number",
          "Rely on the midwife who knows her face",
          "Read the name on the drug chart to her",
        ],
        correctIndex: 0,
        explanation:
          "An open question makes her supply the name, which you then verify against the wristband and folder — identity confirmed from two sources. Closed yes/no questions invite automatic agreement from tired or anxious patients.",
        courseSlug: "midwifery-pharmacology",
      },
      {
        topic: "Safe Administration",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why must a medication be charted immediately after administration, rather than at the end of the shift?",
        options: [
          "It looks tidier in the record",
          "The next shift may repeat an omitted dose, and handover memory is unreliable",
          "It saves paper in the folder",
          "The pharmacy requires it for billing",
        ],
        correctIndex: 1,
        explanation:
          "A dose that exists only in memory is invisible to the next shift, who may give it again — a duplicate dose. Immediate documentation protects the woman at every handover and forms the legal record of your care.",
        courseSlug: "midwifery-pharmacology",
      },
      {
        topic: "Safe Administration",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What are the 'three checks' of medication administration?",
        options: [
          "Check the price, the expiry and the colour of the box",
          "Check the order, the doctor and the pharmacist",
          "Check the pulse, blood pressure and temperature before every dose",
          "Read the label when taking the drug, when preparing it, and when returning it to storage",
        ],
        correctIndex: 3,
        explanation:
          "The label is read at three moments — selection, preparation and return — so that the correct drug travels with the dose at every step of its journey.",
        courseSlug: "midwifery-pharmacology",
      },
    ],
    flashcards: [
      {
        topic: "Safe Administration",
        front: "Name the classic five rights of medication administration.",
        back: "Right patient, right drug, right dose, right route and right time — extended in midwifery by documentation, reason, response, education and refusal.",
      },
      {
        topic: "Safe Administration",
        front: "Why is \"Are you Mrs Mensah?\" an unsafe identification question?",
        back: "Closed questions invite automatic yes answers from tired or anxious patients. Ask an open question — her full name — and match it to the wristband and folder.",
      },
      {
        topic: "Safe Administration",
        front: "How is a verbal order handled correctly?",
        back: "Emergency only: repeat the order back to the prescriber, write it down, and have it signed as soon as possible after the emergency.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Patient Safety Curriculum Guide: Multi-professional Edition",
        year: "2011",
        url: "https://apps.who.int/iris/handle/10665/44641",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Midwives",
        note: "Educational source — verify the current edition.",
      },
      {
        organization: "Ministry of Health, Ghana",
        title: "Standard Treatment Guidelines",
        note: "Educational source — verify the current edition at your facility.",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "midwifery-pharmacology",
    moduleTitle: "Safe Practice and Vigilance",
    lessonTitle: "Pharmacovigilance: Reporting What Goes Wrong",
    description:
      "Every medicine meets the real world only after it reaches patients — and you are the sensor. Learn Ghana's reporting system and the short form that turns suspicion into protection.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Define pharmacovigilance and distinguish adverse drug reactions from side effects and adverse events.",
      "Explain how Ghana's reporting system works, from the ward to the global database.",
      "Apply the reporting habit to a suspected drug reaction on your ward.",
    ],
    tags: ["pharmacovigilance", "reporting", "adr", "fda ghana"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A new medicine looks safe in its trials and meets the real world in a district hospital — in an underweight mother, on an empty stomach, beside three other drugs. The surprises that follow are invisible unless someone writes them down. That writing-down system is pharmacovigilance, and at the bedside, the sensor is you.\n\nThis lesson shows you what to report, what a report contains, and where a report travels in Ghana — from your ward through the Food and Drugs Authority into a database shared by the whole world. It is the quiet work that makes every future patient safer.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Pharmacovigilance** is the science and activity of detecting, assessing, understanding and preventing drug-related harm. An **adverse drug reaction** is a harmful, unintended response at normal doses; an **adverse event** is any harm during treatment, whether or not the drug caused it; a **side effect** is a known, usually mild effect like nausea. You report suspected reactions, poor-quality or falsified medicines, therapeutic failures and medication errors — and adverse events following immunisation, which also flow through the EPI and IDSR channels.\n\nIn Ghana, the **National Pharmacovigilance Centre lives inside the Food and Drugs Authority (FDA Ghana)**, which is a member of WHO's Programme for International Drug Monitoring. Reports travel into VigiBase, the world's largest adverse reaction database, run by the Uppsala Monitoring Centre in Sweden. A good report is short: the patient's initials, the **suspect drug with its batch number**, what happened, when it started, treatment given, the outcome, and your contact. Causality is judged centrally with the WHO-UMC criteria — you need only a suspicion, never proof, to file. The culture is no-blame: the aim is to learn, not to punish.",
      },
      {
        type: "clinical_pearl",
        body: "A suspicion on paper is data; a suspicion in your head is nothing. When in doubt, fill it out — report even when you are unsure the drug was to blame.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Twenty minutes after her first intravenous dose of ceftriaxone, a postpartum woman develops a generalised itchy rash over her chest and arms. The infusion is stopped, she is observed, and the rash settles with treatment per protocol. The prescriber says it is \"just a mild allergy\" and no form is filed.\n\nWhat has been missed, and what should you do?\n\nAnswer: A suspected adverse drug reaction has gone unreported, which means the national system never learns of it. Document the reaction in the notes, record the drug and its batch number in the allergy field and on the report form, file an ADR report through your district to the FDA Ghana's National Pharmacovigilance Centre, and inform the woman and her folder clearly so the drug is avoided next time. Single mild reports from many facilities are exactly how safety signals are born.",
      },
      {
        type: "memory_trick",
        body: "A good report is six lines: the patient, the drug and its batch, what happened, when it started, what was done, and how it ended — six lines that protect a nation.",
      },
      {
        type: "summary",
        body: "- Pharmacovigilance detects, assesses, understands and prevents drug-related harm — and every health worker is a sensor.\n- Report suspected ADRs, poor-quality or falsified medicines, therapeutic failures, medication errors and AEFIs.\n- In Ghana, reports go to the FDA Ghana's National Pharmacovigilance Centre and onward into VigiBase, run by the Uppsala Monitoring Centre.\n- A report needs the patient's initials, the suspect drug and batch number, the reaction, onset, treatment, outcome and your contact.\n- Suspicion is enough — you do not need proof of causation to file, and the culture is no-blame.",
      },
    ],
    questions: [
      {
        topic: "Pharmacovigilance",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the difference between a side effect and an adverse drug reaction?",
        options: [
          "There is no difference at all",
          "Side effects only happen in pregnancy",
          "A side effect is a known, usually mild effect; an adverse drug reaction is a harmful, unintended response at normal doses",
          "Adverse reactions only occur with overdose",
        ],
        correctIndex: 2,
        explanation:
          "Side effects are expected, documented consequences of a drug's normal action — mild and predictable. Adverse drug reactions are unintended and harmful responses at normal doses, and they deserve a report.",
        courseSlug: "midwifery-pharmacology",
      },
      {
        topic: "Pharmacovigilance",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which detail on an ADR report form turns an isolated rash into a traceable national signal?",
        options: [
          "The reporter's shoe size",
          "The suspect drug's batch number",
          "The patient's full address",
          "The hospital's electric bill",
        ],
        correctIndex: 1,
        explanation:
          "The batch number links the reaction to a specific manufacturing lot — the detail that reveals whether a problem lies with the medicine itself or with the patient. It is why the form asks for it every time.",
        courseSlug: "midwifery-pharmacology",
      },
      {
        topic: "Pharmacovigilance",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In Ghana, where does a suspected adverse drug reaction report ultimately travel?",
        options: [
          "To the FDA Ghana's National Pharmacovigilance Centre, then into VigiBase, the WHO-linked global database",
          "To the drug company's marketing department only",
          "To the patient's insurance provider",
          "Nowhere — reports are kept only in the ward drawer",
        ],
        correctIndex: 0,
        explanation:
          "Ghana's National Pharmacovigilance Centre, hosted by the FDA Ghana, is part of WHO's Programme for International Drug Monitoring and feeds reports into VigiBase, maintained by the Uppsala Monitoring Centre, where global signals are detected.",
        courseSlug: "midwifery-pharmacology",
      },
    ],
    flashcards: [
      {
        topic: "Pharmacovigilance",
        front: "Define pharmacovigilance in one line.",
        back: "The science and activities of detecting, assessing, understanding and preventing drug-related harm — the world's early-warning system for medicines.",
      },
      {
        topic: "Pharmacovigilance",
        front: "Which six details carry the weight of an ADR report?",
        back: "Patient's initials, the suspect drug with batch number, the reaction with its onset, the treatment given, the outcome, and the reporter's contact.",
      },
      {
        topic: "Pharmacovigilance",
        front: "Where does Ghana's pharmacovigilance sit, and where do reports flow?",
        back: "The National Pharmacovigilance Centre at the FDA Ghana, a member of WHO's Programme for International Drug Monitoring, sending reports into VigiBase run by the Uppsala Monitoring Centre.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "The Safety of Medicines in Public Health Programmes: Pharmacovigilance, an Essential Tool",
        year: "2006",
        url: "https://apps.who.int/iris/handle/10665/43485",
        note: "Educational source — verify the current link.",
      },
      {
        organization: "Uppsala Monitoring Centre",
        title: "WHO Programme for International Drug Monitoring and VigiBase",
        url: "https://www.who-umc.org",
      },
      {
        organization: "Food and Drugs Authority, Ghana",
        title: "Pharmacovigilance and Adverse Event Reporting",
        url: "https://fdaghana.gov.gh",
        note: "Educational source — verify current reporting procedures and forms.",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "midwifery-skills",
    moduleTitle: "Hands-On Antenatal Skills",
    lessonTitle: "Abdominal Examination and Fundal Height",
    description:
      "Warm hands, an empty bladder and a centimetre tape — the abdominal exam that maps the whole pregnancy. Learn the sequence and the numbers that matter.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the full sequence of the antenatal abdominal examination.",
      "Measure fundal height correctly and interpret it against gestational age.",
      "Apply serial fundal height readings to detect growth problems early.",
    ],
    tags: ["abdominal exam", "fundal height", "antenatal care", "growth monitoring"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Your hands are the ultrasound machine of the CHPS compound. With warm fingers and a tape measure, you can answer the day's most important questions: is the uterus growing as it should, is the baby lying well, and is this pregnancy on course? Abdominal examination is the most repeated skill of your career, and the most under-appreciated.\n\nThis lesson walks the examination from the greeting to the charting, with special care on the fundal height — the measurement that turns the pregnancy into a growth curve you can read.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Begin with **preparation**: explain what you will do, ask her to empty her bladder, position her supine with knees flexed — and rub your palms until they are warm. **Look first**: the shape of the uterus, old scars, fetal movements, the skin. Then **measure fundal height**: from about 20 to 24 weeks, lay a non-stretch tape from the **upper border of the symphysis pubis to the top of the fundus**, following the curve of the belly, and read it in centimetres. After 20 weeks, the number of centimetres roughly equals the weeks of gestation, give or take 2 to 3 cm.\n\n**Landmarks anchor you:** at 12 weeks the fundus just clears the symphysis; at 20 weeks it reaches the umbilicus; at 36 weeks it touches the xiphisternum, settling slightly after lightening at term. **Trends beat single numbers**: the same hands, the same technique, at every visit, recorded in the folder. A fundal height drifting upward from the trend line suggests twins, polyhydramnios or a large baby; drifting below suggests growth restriction or low fluid; a measurement that stalls across two visits needs referral for assessment. In every case, act on the pattern — the story — rather than one day's number.",
      },
      {
        type: "clinical_pearl",
        body: "A single fundal height is a photograph; serial measurements are a film. Record every reading in the folder so the whole story is visible at a glance.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman attends your clinic at 32 weeks by dates. Her fundal height today is 27 cm, measured from the symphysis to the fundus. The previous visit, four weeks ago, recorded 26 cm. She has no other complaints, but her blood pressure today is 142/90.\n\nWhat concerns you, and what do you do next?\n\nAnswer: Two warnings sit together — fundal height has barely moved in four weeks, suggesting the baby may not be growing well, and her blood pressure is now raised, hinting at a possible cause. Check her urine for protein, review the full trend in the folder, and arrange referral for ultrasound assessment of fetal growth and wellbeing without delay. A stalled tape plus a climbing pressure is exactly the combination that should never wait.",
      },
      {
        type: "memory_trick",
        body: "The fundal journey in three numbers: 12-20-36 — above the bone, at the navel, at the breastbone.",
      },
      {
        type: "summary",
        body: "- Prepare the woman and yourself: explanation, empty bladder, knees flexed, warm hands; always inspect before you palpate.\n- Measure fundal height from the upper border of the symphysis pubis to the top of the fundus, in centimetres, from about 20-24 weeks.\n- After 20 weeks, centimetres roughly equal weeks, within 2-3 cm; the umbilicus marks 20 weeks.\n- The value lies in the trend: same hands, same technique, every visit, charted in the folder.\n- Drifting above the line or stalling across visits triggers assessment — think growth problems, twins, or fluid disorders.",
      },
    ],
    questions: [
      {
        topic: "Abdominal Examination",
        type: "MCQ",
        difficulty: "Easy",
        stem: "In a well-dated pregnancy, where does the fundus normally lie at 20 weeks?",
        options: [
          "Just above the symphysis pubis",
          "At the xiphisternum",
          "Below the symphysis pubis",
          "At the level of the umbilicus",
        ],
        correctIndex: 3,
        explanation:
          "At 20 weeks the fundus reaches the umbilicus — one of the three anchor landmarks, alongside just above the symphysis at 12 weeks and the xiphisternum at 36 weeks.",
        courseSlug: "midwifery-skills",
      },
      {
        topic: "Abdominal Examination",
        type: "MCQ",
        difficulty: "Easy",
        stem: "At a 26-week antenatal visit, you prepare to measure fundal height. How is the measurement taken correctly?",
        options: [
          "From the umbilicus to the xiphisternum in inches",
          "From the upper border of the symphysis pubis to the top of the fundus, in centimetres, with a non-stretch tape",
          "By counting finger-breadths below the ribs",
          "Around the widest part of the abdomen",
        ],
        correctIndex: 1,
        explanation:
          "The standard measurement runs from the upper border of the symphysis pubis to the top of the fundus, following the belly's curve, read in centimetres with a tape that does not stretch — that is what makes the weeks-plus-2-to-3 rule work.",
        courseSlug: "midwifery-skills",
      },
      {
        topic: "Abdominal Examination",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman's fundal height has risen only 1 cm across two visits four weeks apart. What is the correct response?",
        options: [
          "Reassure her — fundal growth naturally stops in the third trimester",
          "Repeat the measurement weekly and wait for the next scheduled visit",
          "Assess her fully, review the trend, and refer for fetal growth evaluation without delay",
          "Change her estimated due date to match the measurement",
        ],
        correctIndex: 2,
        explanation:
          "A stalled fundal height suggests possible fetal growth restriction, so the safe answer is prompt review of the trend and referral for ultrasound growth assessment — possibly alongside checks for hypertension and other causes. Waiting, reassuring or rewriting dates all bury the warning.",
        courseSlug: "midwifery-skills",
      },
    ],
    flashcards: [
      {
        topic: "Fundal Height",
        front: "Name the three fundal landmarks with their weeks.",
        back: "12 weeks: just above the symphysis pubis. 20 weeks: at the umbilicus. 36 weeks: at the xiphisternum, settling a little after lightening at term.",
      },
      {
        topic: "Fundal Height",
        front: "What rule links fundal height to gestational age after 20 weeks?",
        back: "Centimetres from symphysis to fundus roughly equal completed weeks, within 2-3 cm — and the trend across visits matters more than any single number.",
      },
      {
        topic: "Fundal Height",
        front: "What does a fundal height well above the expected trend suggest?",
        back: "Twins, polyhydramnios, a large baby, or wrong dates — each needs proper assessment rather than reassurance.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Antenatal Care for a Positive Pregnancy Experience",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549919",
      },
      {
        organization: "Elsevier",
        title: "Myles Midwifery (17th edition)",
        year: "2020",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "Educational source — verify the current edition at your facility.",
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "midwifery-skills",
    moduleTitle: "Hands-On Antenatal Skills",
    lessonTitle: "Leopold's Manoeuvres: Mapping the Baby",
    description:
      "Four systematic grips that reveal lie, presentation, position and engagement — the map your hands draw before any machine confirms it.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Perform the four Leopold's manoeuvres in correct order and position.",
      "Interpret what each grip tells you about lie, presentation, position and engagement.",
      "Apply the findings to locate the fetal back and the best spot for auscultation.",
    ],
    tags: ["leopold", "assessment", "fetal position", "palpation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Long before any scan, your hands can draw a map of the womb: which end of the baby sits at the top, where the back lies, what presents at the brim, and whether the head has settled into the pelvis. The four Leopold's manoeuvres are that map, and they take less than a minute once they live in your fingers.\n\nDone best after 28 weeks on a relaxed uterus with an empty bladder and warm hands, they turn the vague \"the baby is lying well\" into precise, chartable findings. Like all mapping, it only works if you follow the route in order.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**First grip — the fundus.** Facing the mother, cup both hands over the top of the uterus. A **head** feels firm, round and ballotable — it knocks back against your fingers; a **breech** feels soft, irregular and non-ballotable. This names the lie. **Second grip — the flanks.** Rest your palms on either side of the umbilicus and press gently, one side at a time. One side gives a long, smooth, curved resistance — that is the **back**; the other side feels knobbly with small parts — knees and feet. This names the position and tells you where to listen for the heartbeat.\n\n**Third grip — Pawlik's.** With the thumb and fingers of one hand, grasp just above the symphysis. The presenting part sits under your fingers; if it slides freely from side to side, the head is **not engaged**. **Fourth grip — facing her feet.** Slide the fingertips of both hands down toward the pelvis on either side. The cephalic prominence — the forehead — lies on the side opposite the back; if your fingers meet it easily, the head remains high, but if they converge onto a deep, fixed head that is hard to reach, the head is **engaged**.",
      },
      {
        type: "clinical_pearl",
        body: "Let the head bounce — ballottement — a firm, round mass that knocks back against your fingers. No other fetal part answers you that way.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At a 34-week antenatal visit, your first grip finds a soft, irregular mass filling the fundus. Your second grip finds a long smooth curve along the mother's right side and small parts on the left. Pawlik's grip finds a firm, round, movable mass just above the symphysis, and the fourth grip meets the prominence easily.\n\nWhat is your full assessment, and where will you listen for the fetal heart?\n\nAnswer: The findings describe a longitudinal lie with a cephalic presentation: breech in the fundus (soft and irregular), back on the maternal right, head presenting but not yet engaged, since it still moves above the symphysis and the prominence is easily felt. Listen for the fetal heart over the back on her right side — at the anterior shoulder — roughly in the lower right abdomen, and chart lie, presentation, position and engagement in the folder.",
      },
      {
        type: "memory_trick",
        body: "Face the mother for one, two and three; face her feet for four. Fundus finds the free end, flanks find the back, Pawlik pinpoints the presenter, the fourth grips for engagement.",
      },
      {
        type: "summary",
        body: "- Perform after 28 weeks, on an empty bladder and a relaxed uterus, with warm hands and explanation.\n- First grip (fundus): head is firm, round, ballotable; breech is soft, irregular — this names the lie.\n- Second grip (flanks): the smooth curve is the fetal back, the knobbly side the limbs — this names position and the listening spot.\n- Third grip (Pawlik's): identifies the presenting part; side-to-side movement means not engaged.\n- Fourth grip (facing feet): an easily felt cephalic prominence means a high head; a deep, fixed, hard-to-reach head means engaged.",
      },
    ],
    questions: [
      {
        topic: "Leopold's Manoeuvres",
        type: "MCQ",
        difficulty: "Easy",
        stem: "During the first grip, you palpate a soft, irregular, non-ballotable mass in the fundus. What is it?",
        options: [
          "The fetal head",
          "The fetal breech",
          "The placenta",
          "A contraction",
        ],
        correctIndex: 1,
        explanation:
          "The breech feels soft, irregular and does not ballotte. The head, by contrast, is firm, round and knocks back against your fingers — the signature difference of the first grip.",
        courseSlug: "midwifery-skills",
      },
      {
        topic: "Leopold's Manoeuvres",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During the second grip, one flank gives a long, smooth, curved resistance while the other feels knobbly. What does the smooth side represent?",
        options: [
          "The fetal limbs",
          "The umbilical cord",
          "The fetal back",
          "The maternal aorta",
        ],
        correctIndex: 2,
        explanation:
          "The back is a long, smooth, firm curve; the limbs feel like a collection of small knobbles. Finding the back also tells you where to auscultate the fetal heart — over the back at the shoulder.",
        courseSlug: "midwifery-skills",
      },
      {
        topic: "Leopold's Manoeuvres",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During the fourth grip, your fingertips converge onto a deep, fixed head that is difficult to reach. What does this tell you?",
        options: [
          "The head is deeply engaged in the pelvis",
          "The head is not engaged and may still float",
          "The presentation is breech",
          "The lie is transverse",
        ],
        correctIndex: 0,
        explanation:
          "In the fourth grip, fingers that meet the cephalic prominence easily find a high, unengaged head; fingers that glide deep and converge on a fixed head find an engaged one. A soft mass above the symphysis in Pawlik's would point to breech, not this grip.",
        courseSlug: "midwifery-skills",
      },
    ],
    flashcards: [
      {
        topic: "Leopold's Manoeuvres",
        front: "What distinguishes the fetal head from the breech in the first grip?",
        back: "The head is firm, round and ballotable — it knocks back against your fingers. The breech is soft, irregular and non-ballotable.",
      },
      {
        topic: "Leopold's Manoeuvres",
        front: "What does the second grip find, and why does it matter?",
        back: "The fetal back — the smooth, curved flank — opposite the knobbly small parts. It names the position and marks where to auscultate the fetal heart.",
      },
      {
        topic: "Leopold's Manoeuvres",
        front: "How does the fourth grip judge engagement?",
        back: "Facing the mother's feet, fingertips slide down on each side: an easily felt cephalic prominence (forehead, opposite the back) means a high head; a deep, fixed, hard-to-reach head means engaged.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Myles Midwifery (17th edition)",
        year: "2020",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Mayes' Midwifery (16th edition)",
        year: "2019",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Antenatal Care for a Positive Pregnancy Experience",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549919",
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    courseSlug: "midwifery-skills",
    moduleTitle: "Hands-On Antenatal Skills",
    lessonTitle: "Auscultating the Fetal Heart",
    description:
      "A Pinard, a doppler and a full minute of counting — the humble skill that tells you how the baby is tolerating life inside. Place it, count it, and interpret it.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Locate the correct site for fetal heart auscultation using abdominal findings.",
      "Count the fetal heart rate correctly and verify it against the maternal pulse.",
      "Interpret heart rate values and describe when and how to listen in labour.",
    ],
    tags: ["fetal heart", "auscultation", "pinard", "doppler", "monitoring"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The fetal heartbeat is the single most reassuring sound in midwifery — and one of the most informative. For the price of a Pinard stethoscope or a handheld doppler, you can learn whether the baby is well, struggling or in urgent trouble, at an antenatal bench or beside a labouring woman.\n\nThis lesson covers the skill in three parts: where to place the instrument, how to count honestly, and what the numbers and their timing mean. Small habits — the full minute, the mother's pulse, the after-contraction listen — separate a measurement from a guess.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Placement.** The heart sounds loudest over the fetal back at the shoulder. Leopold's tells you where the back is: back on the mother's right, listen on her right; back on the left, listen on the left. With a head down and back forward, that spot lies in the lower abdomen just lateral to the midline; with a breech, aim nearer the umbilicus. A **Pinard** works best from about 24 to 28 weeks; a **doppler** can find the heartbeat from about 12. Press the Pinard firmly, place your ear against it, and shut out the room.\n\n**Counting and interpretation.** Count for a **full sixty seconds** — the rate wanders 5 to 10 beats, so a 15-second guess misleads. Normal is **110 to 160 beats per minute**. Always count the mother's pulse at the same time, so you never mistake her tachycardia of 104 for a distressed baby — or vice versa. In labour, listen **immediately after a contraction**: decelerations that recover between contractions are invisible if you only listen in the quiet. WHO advises auscultation every 15 to 30 minutes in the first stage and every 5 minutes in the second. A persistent rate above 160 with maternal fever points to infection or malaria until excluded; below 110 needs repositioning, review of oxytocin and urgent escalation.",
      },
      {
        type: "clinical_pearl",
        body: "Three habits make a Pinard honest: one full minute, the mother's pulse counted alongside, and the listen placed right after a contraction.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At a busy antenatal clinic, you count a fetal heart rate of 172 beats per minute. Before you chart it, you place fingers on the mother's wrist and count 88. The room is hot, and she mentions feeling feverish since morning.\n\nWhat is your interpretation and your next step?\n\nAnswer: The mother's pulse of 88 rules out the classic trap of counting her heart, so the baby is genuinely tachycardic at 172 — and maternal fever is the likely driver. Check her temperature and test for malaria the same day, treat per protocol, re-count the fetal heart after she cools and rests, and refer or escalate if the rate stays above 160. A feverish mother with a racing fetal heart is a pair that never waits for the next appointment.",
      },
      {
        type: "memory_trick",
        body: "Back is where the heart speaks. Listen over the fetal back, count the full minute — and count the mother too, or you may be counting the wrong patient.",
      },
      {
        type: "summary",
        body: "- Auscultate over the fetal back at the shoulder: back right, listen right; back left, listen left. Pinard from about 24-28 weeks, doppler from about 12.\n- Count for a full sixty seconds; the normal fetal heart rate is 110-160 beats per minute.\n- Count the maternal pulse simultaneously so the two hearts are never confused.\n- In labour, listen immediately after a contraction, every 15-30 minutes in the first stage and every 5 in the second.\n- Fetal tachycardia with maternal fever points to malaria or infection until excluded; bradycardia means reposition, review and escalate.",
      },
    ],
    questions: [
      {
        topic: "Fetal Heart Auscultation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Leopold's manoeuvres place the fetal back on the mother's left side. Where do you listen for the fetal heart?",
        options: [
          "In the upper right abdomen",
          "At the umbilicus, dead centre",
          "Over the back on her left side, at the level of the anterior shoulder",
          "Just above the symphysis in the midline",
        ],
        correctIndex: 2,
        explanation:
          "The heartbeat sounds loudest over the fetal back at the shoulder — so a back on the maternal left means listening on her left side, roughly the lower abdomen lateral to the midline with a cephalic presentation.",
        courseSlug: "midwifery-skills",
      },
      {
        topic: "Fetal Heart Auscultation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why do you count the mother's pulse while counting the fetal heart rate?",
        options: [
          "To be sure you are not listening to and counting the maternal heart rate",
          "To calculate her fluid balance",
          "Because the two rates should always match",
          "To decide the dose of oxytocin",
        ],
        correctIndex: 0,
        explanation:
          "A maternal tachycardia of 110 or more can mimic a fetal rate, especially with a doppler or when the Pinard sits far from the fetal back. Counting both at once proves which heart you are hearing.",
        courseSlug: "midwifery-skills",
      },
      {
        topic: "Fetal Heart Auscultation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the normal fetal heart rate range?",
        options: [
          "90 to 140 beats per minute",
          "110 to 160 beats per minute",
          "160 to 200 beats per minute",
          "70 to 110 beats per minute",
        ],
        correctIndex: 1,
        explanation:
          "A healthy fetal heart beats 110 to 160 times per minute. Below 110 is bradycardia and above 160 tachycardia — both call for a full minute of counting, correction of contributors, and escalation if persistent.",
        courseSlug: "midwifery-skills",
      },
    ],
    flashcards: [
      {
        topic: "Fetal Heart Auscultation",
        front: "Where is the fetal heart best heard, and how do you find that spot?",
        back: "Over the fetal back at the shoulder. Use Leopold's second grip to find the back: right back, right side; left back, left side.",
      },
      {
        topic: "Fetal Heart Auscultation",
        front: "Why listen immediately after a contraction rather than during it?",
        back: "Decelerations that follow a contraction — the late decelerations of distress — recover by the quiet period. Listening between contractions only would miss them.",
      },
      {
        topic: "Fetal Heart Auscultation",
        front: "How often is the fetal heart auscultated in labour?",
        back: "Every 15 to 30 minutes in the first stage and every 5 minutes in the second, always after a contraction, counted for a full minute.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Recommendations: Intrapartum Care for a Positive Childbirth Experience",
        year: "2018",
        url: "https://www.who.int/publications/i/item/9789241550215",
      },
      {
        organization: "Elsevier",
        title: "Myles Midwifery (17th edition)",
        year: "2020",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────
  {
    courseSlug: "midwifery-skills",
    moduleTitle: "Skills for Labour",
    lessonTitle: "Vaginal Examination in Labour",
    description:
      "The when, the why and the gentle how of vaginal examination — the findings that matter, the limits that protect, and the dignity that never negotiates.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "State the indications and timing of vaginal examination in labour.",
      "Describe the full findings to assess and document at each examination.",
      "Apply the contraindications and dignity principles that guard the examination.",
    ],
    tags: ["vaginal examination", "assessment", "labour", "dilatation", "station"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A vaginal examination in labour is a powerful instrument — it measures progress, unmasks obstruction and confirms the moment to push. Performed carelessly or too often, the same fingers introduce infection, cause pain and strip away dignity. The skill is knowing when the answer is needed, gathering it gently once, and charting everything.\n\nThis lesson covers the indications, the gentle technique, the five findings your fingers must report at every examination, and the one bleeding situation in which they must stay out entirely. It ends with the documentation habits that turn findings into decisions.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**When:** examine at admission to confirm labour, then roughly **every four hours** in the active stage — more often only for a specific question, like suspected membrane rupture or delay. Preparation: explain what you will do and obtain consent, ask her to empty her bladder, position her with dignity covered by a drape, and use a sterile glove with antiseptic and lubricant. **What your fingers report:** the cervix — its consistency, effacement and **dilatation in centimetres** (complete when no cervix remains palpable); the **membranes** — intact, bulging or ruptured — and the **liquor** — clear, meconium-stained or offensive; the **presenting part** and its **station**, described as fifths above the brim; the **position** read from the fontanelles — the posterior fontanelle is a small triangle of three sutures, the anterior a diamond of four; and finally **caput** (a boggy swelling of the scalp from pressure) and **moulding** (overlapping skull bones) — rising levels of both shout obstruction.\n\n**When never:** an unexplained vaginal bleeding in pregnancy forbids examination until placenta praevia is excluded by scan — one touch can turn a quiet praevia bleed into a flood. With ruptured membranes, each examination adds infection risk, so ask first whether the answer changes your plan. After every examination, record findings on the partograph and wash your hands as if the next patient depends on it — because she does.",
      },
      {
        type: "clinical_pearl",
        body: "If she is bleeding without a known reason, keep your fingers out until an ultrasound has spoken. Placenta praevia can flood from a single examination.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman at term arrives at your CHPS compound having woken with painless, bright red vaginal bleeding — enough to soak one pad. She is comfortable, the fetal heart is 144, and the uterus is soft and non-tender. A colleague asks you to perform a vaginal examination to \"check how open she is\" before referral.\n\nWhat is your response, and what do you do instead?\n\nAnswer: This is an antepartum haemorrhage of unknown cause, and painless bright blood at term is placenta praevia until a scan says otherwise — vaginal examination is absolutely contraindicated because it can provoke massive haemorrhage. Instead, establish intravenous access, monitor her vital signs and the fetal heart, inspect (not examine) any passed pads, and arrange urgent referral to a facility with ultrasound and theatre capability, calling ahead with your findings.",
      },
      {
        type: "memory_trick",
        body: "Every examination answers five questions: How open? How thin? How low? Sealed or gone? And what colour is the fluid?",
      },
      {
        type: "summary",
        body: "- Examine at admission and roughly four-hourly in active labour — not casually, and only for a question that changes management.\n- Consent, explanation, empty bladder, sterile glove, antiseptic and a covered, dignified position come before any touch.\n- Report and chart: cervical dilatation and effacement, membranes and liquor, presenting part and station, position via the fontanelles, caput and moulding.\n- The posterior fontanelle is a triangle of three sutures; the anterior is a diamond of four — they read the position.\n- Never examine an unexplained bleeding until praevia is excluded; minimise examinations once membranes have ruptured.",
      },
    ],
    questions: [
      {
        topic: "Vaginal Examination in Labour",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A woman at term has painless bright red vaginal bleeding. Which instruction is correct?",
        options: [
          "Perform a vaginal examination to assess dilatation before referral",
          "Perform a rectal examination instead",
          "Insert a vaginal pack to control the bleeding",
          "No vaginal examination until placenta praevia is excluded by ultrasound",
        ],
        correctIndex: 3,
        explanation:
          "Painless bright bleeding at term is placenta praevia until excluded, and examining such a woman can provoke catastrophic haemorrhage. The safe path is IV access, monitoring, pad inspection and urgent referral for scan and definitive care.",
        courseSlug: "midwifery-skills",
      },
      {
        topic: "Vaginal Examination in Labour",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "How do you distinguish the posterior fontanelle from the anterior when reading fetal position?",
        options: [
          "The posterior fontanelle is a small triangle of three sutures; the anterior is a larger diamond of four",
          "The posterior fontanelle is the larger diamond of four sutures",
          "The anterior fontanelle lies near the maternal sacrum",
          "Both fontanelles have identical shapes",
        ],
        correctIndex: 0,
        explanation:
          "The posterior fontanelle is a small triangle formed where three sutures meet; the anterior is the larger diamond where four meet. Finding the small triangle pointing toward the mother's front, for instance, tells you the occiput is anterior.",
        courseSlug: "midwifery-skills",
      },
      {
        topic: "Vaginal Examination in Labour",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "At 7 cm dilatation you find increasing caput and marked moulding with the head still high. What does this combination warn of?",
        options: [
          "Normal findings in every first labour",
          "Cephalopelvic disproportion with a risk of obstructed labour",
          "Ruptured membranes with cord prolapse",
          "Imminent delivery of the head",
        ],
        correctIndex: 1,
        explanation:
          "Caput and moulding are the scalp's and skull's response to pressure — increasing levels with a head that will not descend signal that the pelvis may be too small for the baby. This pattern demands reassessment and preparation for referral rather than waiting.",
        courseSlug: "midwifery-skills",
      },
    ],
    flashcards: [
      {
        topic: "Vaginal Examination",
        front: "How often should vaginal examinations be repeated in normal active labour?",
        back: "Roughly every four hours, with findings charted on the partograph — more often only when a specific question, such as suspected delay or rupture, needs an answer.",
      },
      {
        topic: "Vaginal Examination",
        front: "What five findings does every labour examination report?",
        back: "Cervical dilatation and effacement, membranes and liquor (clear or meconium-stained), presenting part and station, position from the fontanelles, and caput with moulding.",
      },
      {
        topic: "Vaginal Examination",
        front: "What absolute contraindication guards the examination in pregnancy?",
        back: "Unexplained vaginal bleeding — placenta praevia must be excluded by ultrasound before any vaginal examination, because one touch can cause massive haemorrhage.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Recommendations: Intrapartum Care for a Positive Childbirth Experience",
        year: "2018",
        url: "https://www.who.int/publications/i/item/9789241550215",
      },
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors (2nd edition)",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565493",
      },
      {
        organization: "Elsevier",
        title: "Myles Midwifery (17th edition)",
        year: "2020",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 14 ─────────────────────────────────────────────────────
  {
    courseSlug: "midwifery-skills",
    moduleTitle: "Skills for Labour",
    lessonTitle: "Plotting and Reading the Partograph",
    description:
      "One sheet of paper that graphs labour in real time — the alert line that warns you and the action line that moves you. Make the partograph your early warning system.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the structure of the WHO partograph and what occupies each zone.",
      "Plot dilatation, descent, fetal heart and contractions correctly during labour.",
      "Interpret the alert and action lines and act on the findings they reveal.",
    ],
    tags: ["partograph", "monitoring", "labour", "alert line", "action line"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The partograph is a single page that watches a labour for you. Every half hour it asks about the baby; every examination it asks about progress; the moment the plotted points touch its lines, it raises its voice. WHO credits this humble graph with transforming labour monitoring wherever it is used faithfully.\n\nThis lesson teaches the page — what lives in each zone — and the discipline of plotting findings the moment you wash your hands, so the graph speaks in real time rather than in hindsight.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**The page from top to bottom:** the **fetal heart rate** occupies the top band, plotted every half hour; just beneath sit **liquor and moulding**; the **dilatation and descent grid** carries the labour's story, with **contractions** marked every half hour as shaded dots in squares — two or three squares for moderate, five for strong; below the grid, **maternal observations** — pulse, blood pressure, temperature and urine — every four hours, alongside drugs given, intravenous fluids and oxytocin titration. Begin plotting only when active labour is confirmed, at about 4 to 5 cm on most charts.\n\n**The two lines rule the page.** The **alert line** starts where active labour begins and falls at 1 centimetre per hour — the minimum acceptable speed. The **action line** runs parallel, four hours to its right. Dilatation points that keep left of the alert line mean progress; a point that **touches the alert line** demands reassessment of the four Ps — the powers (contractions, and whether to augment), the passenger (the baby's size and position), the passage (the pelvis) and the woman's psyche and hydration. A point that **reaches the action line** means decisions: diagnose the delay properly, and act — augment where it is safe, or refer where it is not. Descent plotted as circles beside the X's of dilatation tells you whether the baby follows the cervix; a cervix that opens while the head stays high is its own warning.",
      },
      {
        type: "clinical_pearl",
        body: "Plot every finding the moment you wash your hands — memory fades after two contractions. A partograph filled at handover is a story told too late.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A first-time mother's labour is plotted from 4 cm at 10:00. At 14:00 the cervix measures 6 cm, and the point lands on the alert line; contractions are two in ten minutes, moderate. The midwife in charge asks you what the graph is saying and what should happen now.\n\nWhat is your reading, and your plan?\n\nAnswer: The labour is slower than 1 cm per hour and has touched the alert line, so reassessment is due — starting with the powers, since two moderate contractions in ten minutes are weak. Review the four Ps: confirm the baby's position and size and the head's descent, check her hydration and bladder, and empty the bladder. If contractions are the weak link and everything else is favourable, augmentation per protocol with monitoring is reasonable; if descent is poor or the pelvis is doubtful, prepare referral before the action line arrives — and keep the graph current throughout.",
      },
      {
        type: "memory_trick",
        body: "The page in three floors: the top floor is the baby, the middle floor is the progress, the ground floor is the mother and the medicine.",
      },
      {
        type: "summary",
        body: "- The top band charts fetal heart every 30 minutes; liquor and moulding sit just below it.\n- Dilatation is plotted as X and descent as circles on the central grid; contractions are shaded squares every 30 minutes; maternal observations and drugs go below every 4 hours.\n- The alert line falls at 1 cm per hour from the start of active labour; the action line runs 4 hours to its right.\n- Touching the alert line triggers the four Ps review — powers, passenger, passage, psyche.\n- Reaching the action line means a decision: augment where safe, or refer — never simply wait.",
      },
    ],
    questions: [
      {
        topic: "Partograph",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What slope does the alert line of the WHO partograph follow?",
        options: [
          "2 centimetres of dilatation per hour",
          "0.5 centimetres per hour",
          "1 centimetre of dilatation per hour",
          "3 centimetres per hour",
        ],
        correctIndex: 2,
        explanation:
          "The alert line represents the minimum acceptable progress — 1 centimetre per hour from the point where active labour begins. Slower progress touches the line and triggers reassessment.",
        courseSlug: "midwifery-skills",
      },
      {
        topic: "Partograph",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A dilatation point reaches the action line. What does this demand?",
        options: [
          "A management decision — proper diagnosis of the delay, with augmentation where safe or referral",
          "Continue observation for another four hours",
          "Immediate caesarean at every level of facility",
          "Rupture of the membranes as routine response",
        ],
        correctIndex: 0,
        explanation:
          "The action line, four hours beyond the alert line, is where waiting becomes dangerous. The response is a decision: diagnose the cause of delay through the four Ps, augment where the cause is weak contractions and all else is favourable, and refer where obstruction or facility limits demand it.",
        courseSlug: "midwifery-skills",
      },
      {
        topic: "Partograph",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "On the partograph, dilatation is marked as X and descent as circles. How are contractions recorded?",
        options: [
          "As a single word in the notes at the end of labour",
          "Every 30 minutes by shading the number of squares matching contractions in ten minutes",
          "Every four hours as a percentage",
          "Only when oxytocin is running",
        ],
        correctIndex: 1,
        explanation:
          "Contractions are counted in each ten-minute window and marked every half hour by shading squares — two to three shaded squares for moderate contractions, five for strong — so the graph shows the labour's engine alongside its progress.",
        courseSlug: "midwifery-skills",
      },
    ],
    flashcards: [
      {
        topic: "Partograph",
        front: "What are the alert and action lines?",
        back: "The alert line falls at 1 cm of dilatation per hour from the start of active labour; the action line runs parallel, four hours to its right. Touching the alert line triggers reassessment; reaching the action line forces a decision.",
      },
      {
        topic: "Partograph",
        front: "How are dilatation and descent marked on the central grid?",
        back: "Dilatation as X at each examination, descent (fifths above the brim) as circles — a cervix opening while the head stays high is its own warning.",
      },
      {
        topic: "Partograph",
        front: "What four things are reviewed when the alert line is touched?",
        back: "The four Ps: powers (contraction quality and augmentation), passenger (fetal size and position), passage (the pelvis), and the woman's psyche — hydration, bladder and coping.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Recommendations: Intrapartum Care for a Positive Childbirth Experience",
        year: "2018",
        url: "https://www.who.int/publications/i/item/9789241550215",
      },
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors (2nd edition)",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565493",
      },
      {
        organization: "Elsevier",
        title: "Myles Midwifery (17th edition)",
        year: "2020",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 15 ─────────────────────────────────────────────────────
  {
    courseSlug: "midwifery-skills",
    moduleTitle: "Skills for Labour",
    lessonTitle: "Supporting the Labouring Woman",
    description:
      "Companionship, movement, breathing and advocacy — the comfort measures that shorten labour and calm the birth room. Comfort is a clinical skill, and this lesson teaches it.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the evidence-backed elements of labour support, including continuous companionship.",
      "Explain why supine positions harm labour and how positions and breathing help.",
      "Apply advocacy and respectful care habits, including consent before every touch.",
    ],
    tags: ["labour support", "comfort", "companionship", "positions", "respectful care"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Support is not the soft decoration around the clinical work — it is clinical work. The evidence is unusually clear: a woman who is continuously supported in labour births faster, uses less analgesia, needs fewer instruments and remembers the experience more kindly. WHO recommends it as firmly as it recommends handwashing.\n\nThis lesson gathers the skills of support: choosing the companion, freeing the body to move, steadying the breath, easing the sacrum, and speaking for her when the room moves too fast. None requires equipment a CHPS compound cannot afford.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Companionship** comes first: a woman of her choosing — husband, mother, a trusted friend — stays with her throughout. Offer the room the evidence: continuous support is linked to shorter labour, less pain relief, more spontaneous births and better satisfaction. **Position and movement**: keep her upright and mobile in the first stage — walking, swaying, sitting forward on a chair; lying flat on her back compresses the great vessels against the spine (aortocaval compression), starving the placenta and slowing labour. When she rests, the left lateral position protects the baby. In the second stage, let her choose — upright, squatting, all-fours for a posterior baby.\n\n**Breathing and touch**: slow breathing out with the contraction, in through the nose and long out through the mouth — no panting into dizziness. Sacral pressure and massage during contractions, a warm compress against the perineum as the baby stretches it. **Mouth and fluids**: WHO allows oral fluids and light food in normal labour — a thirsty, starved woman tires early. **Advocacy**: explain before every examination, drape her for dignity, limit the audience in the room, and use her own language or an interpreter she trusts. Retire the routines that never helped — routine enemas, routine shaving, routine episiotomy all fail the evidence. Your calm voice and steady presence are analgesia without side effects.",
      },
      {
        type: "clinical_pearl",
        body: "Ask her, and let her lead — the woman's chosen position is physiology, not preference, and consent before every touch is the floor beneath all support.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A first-time mother at 5 cm is alone on the delivery bed, flat on her back, crying with each contraction. Her husband waits in the corridor because staff find visitors disruptive, and a colleague mutters that she is \"just noisy.\" The fetal heart is normal, and she has had nothing to drink for hours.\n\nWhat changes will you make, and what do you expect them to achieve?\n\nAnswer: Invite the husband in as her companion — with a word about how he can help — help her upright to walk and sway, coach her breathing out slowly through contractions with sacral pressure, and offer oral fluids. Drape her for dignity, explain before any touch and let her choose her position. Expect calmer coping, more effective contractions with better placental flow, less need for analgesia, and a birth she will remember with pride rather than fear.",
      },
      {
        type: "memory_trick",
        body: "The support kit fits in one sentence: a chosen companion, a moving body, a slow breath, a warm hand, a full cup, and a calm voice.",
      },
      {
        type: "summary",
        body: "- Continuous support by a companion of her choice shortens labour, reduces analgesia and improves birth outcomes — WHO recommends it strongly.\n- Encourage upright positions and mobility; avoid supine lying, which compresses the aorta and vena cava; rest in left lateral.\n- Coach slow breathing out with contractions; use sacral massage and warm perineal compresses.\n- Allow oral fluids and light food in normal labour; a starved woman tires early.\n- Advocate: consent before every touch, dignity drapes, her language, and an end to routine enema, shaving and episiotomy.",
      },
    ],
    questions: [
      {
        topic: "Labour Support",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What does the evidence say about continuous support during labour?",
        options: [
          "It has no measurable effect on birth outcomes",
          "It slows labour by distracting the mother",
          "It only helps when provided by professionals",
          "It is associated with shorter labour, less analgesia and more spontaneous births",
        ],
        correctIndex: 3,
        explanation:
          "Continuous labour support — by a companion of the woman's choosing — is linked to shorter labours, less pain relief, fewer instrumental births and greater satisfaction. WHO recommends it for every woman in labour.",
        courseSlug: "midwifery-skills",
      },
      {
        topic: "Labour Support",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is lying flat on her back unhelpful for a labouring woman?",
        options: [
          "It speeds contractions too much",
          "The pregnant uterus compresses the aorta and vena cava, reducing blood flow to the placenta and the mother",
          "It makes vaginal examinations impossible",
          "It causes fetal jaundice",
        ],
        correctIndex: 1,
        explanation:
          "Supine lying lets the heavy uterus press the great vessels against the spine — aortocaval compression — dropping placental flow and the mother's own return of blood. Upright or left lateral positions protect both patients.",
        courseSlug: "midwifery-skills",
      },
      {
        topic: "Labour Support",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which of these routine practices has failed the evidence and should be abandoned in normal labour?",
        options: [
          "Encouraging oral fluids and light food",
          "Allowing the woman to move and choose positions",
          "Routine episiotomy for every first birth",
          "Explaining procedures before performing them",
        ],
        correctIndex: 2,
        explanation:
          "Routine episiotomy increases severe perineal injury without benefit — WHO recommends restrictive use. Fluids, freedom of movement and explanation before touch are all evidence-backed parts of good care.",
        courseSlug: "midwifery-skills",
      },
    ],
    flashcards: [
      {
        topic: "Labour Support",
        front: "What are the measurable benefits of continuous labour support?",
        back: "Shorter labour, less analgesia, fewer instrumental births, more spontaneous births and better emotional outcomes — the reason WHO recommends a companion of her choosing for every labouring woman.",
      },
      {
        topic: "Labour Support",
        front: "What is aortocaval compression, and how is it prevented?",
        back: "The heavy pregnant uterus pressing the aorta and vena cava when she lies flat, cutting placental blood flow. Prevent it with upright positions or left lateral lying.",
      },
      {
        topic: "Labour Support",
        front: "Name three routines abandoned in modern normal labour care.",
        back: "Routine enemas, routine pubic shaving and routine episiotomy — none improves outcomes, and episiotomy in particular raises the risk of severe tears.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Recommendations: Intrapartum Care for a Positive Childbirth Experience",
        year: "2018",
        url: "https://www.who.int/publications/i/item/9789241550215",
      },
      {
        organization: "Cochrane Library",
        title: "Continuous Support for Women During Childbirth (Cochrane Systematic Review)",
        url: "https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD003766/full",
        note: "Educational source — verify the current review version.",
      },
      {
        organization: "Elsevier",
        title: "Myles Midwifery (17th edition)",
        year: "2020",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 16 ─────────────────────────────────────────────────────
  {
    courseSlug: "midwifery-skills",
    moduleTitle: "Skills for Birth and After",
    lessonTitle: "Conducting a Normal Birth: The Practical Sequence",
    description:
      "From the preparation of the trolley to the baby on the chest — the choreography of a normal birth, rehearsed until it flows under any pressure.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Prepare the delivery area and trolley for a normal birth at any level of facility.",
      "Conduct the birth step by step, from controlled crowning to the third stage.",
      "Apply the correct responses for cord issues, slow crowning and shoulder delivery.",
    ],
    tags: ["normal birth", "conduct", "crowning", "nuchal cord", "third stage"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A normal birth is a sequence, not an improvisation — a choreography your hands learn so well that even an unexpected moment finds them in position. Preparation, control, cord, shoulders, third stage: run it a hundred times in your head before you run it once in the birth room.\n\nThis lesson walks that sequence in practical order, with the small judgments — speed at crowning, a tight cord, the first grip on the shoulders — where skill shows itself.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Before the birth:** wash hands and glove; assemble two warm towels, two clamps, blunt scissors, gauze and a clean surface; draw up **oxytocin 10 units** for after delivery; keep the baby's corner warm with a dry towel and a bag-mask within reach. **The head:** as it crowns, support the perineum with one hand and slow the birth — ask her to breathe out gently rather than push hard. Keep the head flexed until the subocciput pivots under the symphysis, then let it be born by **extension**, slowly. No routine episiotomy; a warm compress supports the perineum. **Immediately** feel for a nuchal cord: loose — slip it over the head or shoulder; tight — doubly clamp and cut between, then deliver without delay. Wait for restitution and external rotation.\n\n**The shoulders:** with the head delivered, hold it gently and guide the **anterior shoulder** out with mild downward traction, then lift slightly for the posterior — never twist the neck. The rest of the body follows swiftly. Place the baby directly on the mother's abdomen; **dry and stimulate** him, note the time, and clamp and cut the cord after **one to three minutes** of delayed clamping. **Third stage** runs with active management: oxytocin within a minute of birth, controlled cord traction with counter-traction above the pubis, then uterine massage. Inspect the perineum, record Apgar at 1 and 5 minutes, and keep mother and baby warm, together and watched.",
      },
      {
        type: "clinical_pearl",
        body: "At crowning, the best instruments are your eyes and one supporting hand — let the head be born slowly, between contractions if you can. Haste tears; patience protects.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "The head of a term baby is born slowly and well, but you find the cord wrapped twice around the neck, too tight to reduce, and the body has not yet followed. The fetal heart was normal moments ago.\n\nWhat is your next move, and why?\n\nAnswer: A tight nuchal cord that cannot be slipped over the head is doubly clamped and cut between the clamps, freeing the neck so the shoulders and body can be delivered promptly — waiting with a body trapped behind a tight cord risks asphyxiation. Deliver the anterior shoulder with gentle downward traction and the posterior with a slight lift, then hand the baby to the mother's abdomen for drying and assessment. Because the cord was cut early, watch the baby's breathing and colour closely, and document the loops and your actions.",
      },
      {
        type: "memory_trick",
        body: "The birth in one breath: slow the head, check the cord, wait for the turn, shoulders gently, dry the baby, then the third stage.",
      },
      {
        type: "summary",
        body: "- Prepare fully before crowning: gloves, two warm towels, clamps, scissors, oxytocin 10 units drawn up, a warm baby corner with a bag-mask in reach.\n- Slow the birth of the head at crowning; keep flexion until the subocciput pivots, then deliver by extension — no routine episiotomy.\n- A loose nuchal cord is slipped over; a tight cord is doubly clamped and cut between, followed by prompt delivery.\n- Deliver the anterior shoulder by gentle downward traction, the posterior by a slight lift — never twist the neck.\n- Dry the baby immediately, clamp and cut the cord after 1-3 minutes, run the third stage with AMTSL, and record Apgar at 1 and 5 minutes.",
      },
    ],
    questions: [
      {
        topic: "Conducting a Normal Birth",
        type: "MCQ",
        difficulty: "Easy",
        stem: "The perineum is bulging and the head is crowning rapidly. What is the correct immediate management?",
        options: [
          "Perform a mediolateral episiotomy without delay",
          "Ask her to push as hard as she can",
          "Support the perineum with one hand and ask her to breathe out slowly to slow the birth",
          "Press the head back inside until the midwife arrives",
        ],
        correctIndex: 2,
        explanation:
          "Controlled crowning — one supporting hand and gentle breathing out — lets the head emerge slowly between contractions and protects the perineum. Episiotomy is restricted, not routine, and forceful pushing or holding the head back both increase harm.",
        courseSlug: "midwifery-skills",
      },
      {
        topic: "Conducting a Normal Birth",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "After the head is born, you find a nuchal cord too tight to slip over the shoulders. What do you do?",
        options: [
          "Doubly clamp the cord and cut between the clamps, then deliver the shoulders promptly",
          "Pull firmly on the head to deliver the shoulders",
          "Push the head back and perform a caesarean immediately",
          "Wait for the cord to slacken over several minutes",
        ],
        correctIndex: 0,
        explanation:
          "A tight cord cannot be reduced and must not delay the body's birth — clamping twice and cutting between frees the neck, then gentle traction delivers the shoulders. Waiting risks asphyxiation, and neither pulling hard nor replacing the head is acceptable.",
        courseSlug: "midwifery-skills",
      },
      {
        topic: "Conducting a Normal Birth",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "How is the anterior shoulder delivered once the head is out and restitution complete?",
        options: [
          "By firm upward traction on the head",
          "By gentle downward traction of the head, then a slight lift for the posterior shoulder",
          "By rotating the mother onto her back and pushing on the fundus hard",
          "By twisting the head to one side",
        ],
        correctIndex: 1,
        explanation:
          "Mild downward traction brings the anterior shoulder under the symphysis, and a slight lift in the other direction frees the posterior. Fundal pressure and neck twisting risk brachial plexus injury and shoulder dystocia responses, not routine delivery.",
        courseSlug: "midwifery-skills",
      },
    ],
    flashcards: [
      {
        topic: "Conducting a Normal Birth",
        front: "What two hands-on acts control crowning?",
        back: "One hand supports the perineum while she breathes out gently instead of pushing — the head is born slowly, by extension, ideally between contractions.",
      },
      {
        topic: "Conducting a Normal Birth",
        front: "How are loose and tight nuchal cords managed differently?",
        back: "Loose cord: slip it over the head or shoulder. Tight cord: doubly clamp and cut between the clamps, then deliver the shoulders promptly.",
      },
      {
        topic: "Conducting a Normal Birth",
        front: "What are the components of active management of the third stage?",
        back: "Oxytocin 10 units IM within one minute of birth, controlled cord traction with suprapubic counter-traction, and uterine massage after delivery of the placenta.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Recommendations: Intrapartum Care for a Positive Childbirth Experience",
        year: "2018",
        url: "https://www.who.int/publications/i/item/9789241550215",
      },
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors (2nd edition)",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565493",
      },
      {
        organization: "Elsevier",
        title: "Myles Midwifery (17th edition)",
        year: "2020",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 17 ─────────────────────────────────────────────────────
  {
    courseSlug: "midwifery-skills",
    moduleTitle: "Skills for Birth and After",
    lessonTitle: "Immediate Newborn Care: The Practical Steps",
    description:
      "The first minutes decide the newborn's temperature, breathing and feeding — dry, warm, assess and hand to the breast, with resuscitation ready from the first second.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Perform the immediate steps of newborn care in correct order, centered on drying and warmth.",
      "Explain the assessment of breathing and the escalation to bag-mask ventilation.",
      "Apply cord care, vitamin K administration and early breastfeeding correctly.",
    ],
    tags: ["newborn care", "immediate", "warming", "resuscitation", "breastfeeding"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The first minutes of life are a race against cold and against apnoea. A wet newborn loses heat faster than an adult in a harmattan wind, and roughly one in twenty needs help to begin breathing. The winners of the race are decided by simple things done in order and without delay: a warm towel, a pair of working hands, and a bag-mask within reach.\n\nThis lesson runs those minutes step by step — from the baby placed on his mother's abdomen to his first feed — including the few newborns who need more than a rub.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**The golden minute:** at birth, place him on the mother's abdomen and **dry him immediately and thoroughly** — the drying itself is the stimulation, and it prevents the heat loss that kills quietly. Discard the wet towel and cover with a dry one, skin-to-skin against the mother, **cap on the head** — the scalp is the newborn's biggest radiator. While you dry, **assess breathing**: a crying baby is a breathing baby; one who is blue, floppy or gasping needs action. **Clear the airway only if the mouth or nose is truly obstructed** — routine deep suction has no benefit and can slow the heart.\n\nIf he is not breathing despite thirty seconds of drying and rubbing, **start bag-mask ventilation with room air at about thirty breaths per minute** — position the head neutral, seal the mask, and call for help while you ventilate; most babies respond. The **cord** is clamped and cut one to three minutes after birth (unless resuscitation is needed), with clean clamps and sterile scissors — many Ghanaian facilities then apply chlorhexidine gel per their protocol. Give **vitamin K 1 mg by intramuscular injection into the vastus lateralis** — the upper outer thigh, the only reliable site in a newborn. Assess **Apgar at one and five minutes** (heart rate, breathing, tone, colour and reflex), identify both mother and baby with bands, and put him to the **breast within the first hour** — colostrum is his first vaccine and her first oxytocic. Record weight, temperature and time, and wash hands before the next pair of hands touch him.",
      },
      {
        type: "clinical_pearl",
        body: "The towel is the first incubator: dry, swap to a dry one, cap the head and lay him chest-to-chest — before you touch a clock or a clamp.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A term baby is born through thick meconium-stained fluid. He is placed on the warmer, dried, and remains floppy and blue, not crying, at thirty seconds despite the rubbing. A colleague reaches for the suction catheter for deep routine suction while another prepares the oxygen.\n\nWhat are the correct next actions?\n\nAnswer: This baby is not breathing after the initial steps, so the priority is **bag-mask ventilation with room air at about thirty breaths a minute**, with the head in neutral position and a good mask seal — while calling for experienced help. Deep routine suction is not part of resuscitation and wastes the seconds that ventilation needs; oxygen is not the first drug of resuscitation — air is. As he responds, dry him fully again, place him skin-to-skin, and review his breathing and colour continuously with Apgar scoring at one and five minutes.",
      },
      {
        type: "memory_trick",
        body: "The first hour in five words: DRY, WARM, BREATHE, FEED, RECORD.",
      },
      {
        type: "summary",
        body: "- Dry and stimulate immediately — drying is the stimulation; swap to a dry towel, cover the head, and go skin-to-skin.\n- A crying baby is breathing; one who is blue and floppy needs escalation, not observation.\n- No routine suction — clear the airway only if it is truly obstructed.\n- Not breathing after the initial steps means bag-mask ventilation in room air at about 30 breaths per minute, with help called early.\n- Delayed cord clamping at 1-3 minutes, vitamin K 1 mg into the vastus lateralis, Apgar at 1 and 5 minutes, and the first breastfeed within the hour.",
      },
    ],
    questions: [
      {
        topic: "Immediate Newborn Care",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A baby is born limp and not crying. What are the first actions?",
        options: [
          "Suction deeply, then give oxygen",
          "Wait five minutes — many babies start late",
          "Give vitamin K immediately, then reassess",
          "Dry and stimulate him thoroughly, and if breathing has not begun within about 30 seconds, start bag-mask ventilation",
        ],
        correctIndex: 3,
        explanation:
          "Drying and rubbing provide both warmth and stimulation; a baby who does not breathe after these initial steps needs immediate bag-mask ventilation with room air. Deep suction is not routine, waiting is dangerous, and vitamin K prevents bleeding — it does not start breathing.",
        courseSlug: "midwifery-skills",
      },
      {
        topic: "Immediate Newborn Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is routine deep suction of every newborn's airway abandoned in modern care?",
        options: [
          "It provides no benefit and can cause bradycardia and injury to the airway",
          "Suction catheters are too expensive",
          "It dries the mouth too much",
          "It is only permitted after the first feed",
        ],
        correctIndex: 0,
        explanation:
          "Routine suction of a clear airway does nothing for breathing and can slow the heart via vagal stimulation, injure the throat, and delay the real interventions — drying, stimulation and, when needed, ventilation. Suction is reserved for a truly obstructed airway.",
        courseSlug: "midwifery-skills",
      },
      {
        topic: "Immediate Newborn Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Where is vitamin K 1 mg injected in the newborn, and why there?",
        options: [
          "Into the buttock, because it has the most fat",
          "Into the deltoid, like an adult vaccine",
          "Into the vastus lateralis — the upper outer thigh — a well-developed, safe muscle away from major nerves and vessels",
          "Subcutaneously over the sternum",
        ],
        correctIndex: 2,
        explanation:
          "The newborn's reliable muscle is the vastus lateralis in the upper outer thigh; the buttock risks the sciatic nerve, and the deltoid is too small. Intramuscular vitamin K 1 mg once prevents haemorrhagic disease of the newborn.",
        courseSlug: "midwifery-skills",
      },
    ],
    flashcards: [
      {
        topic: "Immediate Newborn Care",
        front: "What are the first three actions for every newborn, in order?",
        back: "Dry thoroughly (this stimulates too), swap to a dry towel with the head covered and skin-to-skin contact, then assess breathing — crying means breathing; blue and floppy means act.",
      },
      {
        topic: "Immediate Newborn Care",
        front: "When does a non-breathing newborn need bag-mask ventilation, and with what?",
        back: "After about 30 seconds of drying and stimulation with no breathing — ventilate with room air at roughly 30 breaths per minute, head neutral, mask sealed, help called.",
      },
      {
        topic: "Immediate Newborn Care",
        front: "What is the vitamin K regimen for the newborn, and at which site?",
        back: "Vitamin K 1 mg intramuscularly, once, into the vastus lateralis of the upper outer thigh — preventing haemorrhagic disease of the newborn.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Basic Newborn Resuscitation",
        year: "2012",
        url: "https://apps.who.int/iris/handle/10665/75157",
      },
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors (2nd edition)",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565493",
      },
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Maternal and Newborn Care for a Positive Postnatal Experience",
        year: "2022",
        url: "https://www.who.int/publications/i/item/9789241550642",
      },
    ],
  },
];
