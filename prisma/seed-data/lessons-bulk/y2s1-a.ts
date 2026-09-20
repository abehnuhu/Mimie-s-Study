// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 2, Semester 1 — Batch A
// 18 lessons anchored to prisma/seed-data/anchors/y2s1-a.json
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-1",
    moduleTitle: "The Body Under Attack",
    lessonTitle: "Inflammation: The Body's Alarm System",
    description:
      "Redness, heat, swelling and pain are not the enemy — they are the alarm. Learn what inflammation is really doing under the skin, and when it turns from friend into the problem itself.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Name the five cardinal signs of inflammation and link each to the events causing it.",
      "Distinguish acute from chronic inflammation by timing and the cells involved.",
      "Apply the cardinal signs to assess an inflamed wound on the ward.",
    ],
    tags: ["inflammation", "cardinal signs", "immune response", "wound assessment"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "You will meet inflammation on every single shift — an angry wound, a swollen leg, a red injection site. Before you panic, look again at what you are seeing: not a disaster, but an alarm system ringing. A coordinated emergency response is rushing blood, fluid and defender cells to damaged tissue.\n\nIn this lesson you will meet the five cardinal signs, learn the events behind each one, and practise telling a helpful response from one that has become the patient's problem.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The cardinal signs are **redness**, **heat**, **swelling**, **pain** and **loss of function**. Injured cells release mediators such as histamine; small vessels dilate, bringing more warm blood — redness and heat. The vessel walls become leaky, letting protein-rich fluid escape into the tissue — swelling. That pressure, plus mediators like bradykinin on nerve endings, creates pain, and pain plus swelling robs the part of function.\n\nAcute inflammation is fast and neutrophil-dominated — think of a fresh wound. It is protective: it dilutes toxins, delivers antibodies and defender cells, and walls off the damage. If the cause persists, chronic inflammation follows — slower, led by lymphocytes and macrophages, and it heals by scarring. And remember: inflammation is not the same as infection — a sprained ankle or a wasp sting is inflamed with no germ in sight.",
      },
      {
        type: "clinical_pearl",
        body: "Inflammation is a sign, not a diagnosis. Germs are only one trigger — trauma, burns and chemical irritation all ring the same bell. Find and treat the cause; the redness will follow.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "During a night shift you review a woman three days after caesarean section. Her wound edges are red and hot, the surrounding tissue is swollen, and she says even the bedsheet brushing it hurts. Her temperature is 37.9 °C, and a colleague documented 'dressing clean, wound fine' at morning review. Which cardinal signs are present, and what should happen next?\n\nAnswer: Redness, heat, swelling and pain — four of the five cardinal signs — with mild fever point to an inflamed, probably infected wound rather than normal healing. Describe exactly what you see in the notes, take a wound swab if protocol allows, and report to the senior midwife or doctor today. A wound infection needs treatment of its cause, not just a fresh dressing and reassurance.",
      },
      {
        type: "memory_trick",
        body: "Picture a thumb slammed in a door: Red, Hot, Swollen, Painful — and you cannot use it (functio laesa). One image holds all five signs.",
      },
      {
        type: "summary",
        body: "- Five cardinal signs: redness, heat, swelling, pain, loss of function.\n- Vasodilation drives redness and heat; leaking vessels drive swelling; mediators irritate nerves to cause pain.\n- Acute inflammation is fast and neutrophil-led; chronic is slow, lymphocyte and macrophage-led, and ends in fibrosis.\n- Inflammation is a response, not a diagnosis — germs, trauma and chemicals can all trigger it.",
      },
    ],
    questions: [
      {
        topic: "Inflammation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A wound is red and hot to touch. Which event inside the tissue best explains both signs?",
        options: [
          "Rapid multiplication of bacteria inside skin cells",
          "Dilation of small blood vessels bringing more warm blood",
          "Leaking of protein-rich fluid into the tissue spaces",
          "Death of nerve endings in the wound edges",
        ],
        correctIndex: 1,
        explanation:
          "Vasodilation floods the area with warm blood, producing redness and heat. Fluid leaking into the tissue causes swelling, not heat, and nerve irritation causes pain rather than nerve death.",
        courseSlug: "medical-surgical-nursing-1",
      },
      {
        topic: "Inflammation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which of the following is the fifth cardinal sign of inflammation, functio laesa?",
        options: [
          "Loss of function",
          "Fever",
          "Pus formation",
          "Night sweats",
        ],
        correctIndex: 0,
        explanation:
          "Functio laesa means loss of function — the part cannot perform its job because of pain and swelling. Fever may accompany inflammation but is not one of the five classical local signs.",
        courseSlug: "medical-surgical-nursing-1",
      },
      {
        topic: "Inflammation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A man has a swollen, tender knee two days after twisting it playing football. The skin is unbroken and he has no fever. Which interpretation fits best?",
        options: [
          "This is infection until proven otherwise, and he needs antibiotics",
          "This is chronic inflammation because macrophages have arrived",
          "This is acute inflammation triggered by trauma, and inflammation can occur without infection",
          "The absence of fever rules out inflammation",
        ],
        correctIndex: 2,
        explanation:
          "Trauma is a classic non-infective trigger of acute inflammation. Fever is neither required nor excluded, and two days is far too early for chronic inflammation. No break in the skin means infection is unlikely.",
        courseSlug: "medical-surgical-nursing-1",
      },
    ],
    flashcards: [
      {
        topic: "Cardinal Signs",
        front: "Name the five cardinal signs of inflammation.",
        back: "Redness, heat, swelling, pain and loss of function — rubor, calor, tumor, dolor, functio laesa.",
      },
      {
        topic: "Inflammation",
        front: "Which cells dominate acute inflammation, and which dominate chronic?",
        back: "Acute: neutrophils. Chronic: lymphocytes and macrophages, with healing by fibrosis and scarring.",
      },
      {
        topic: "Inflammation",
        front: "Can tissue be inflamed without being infected?",
        back: "Yes. Trauma, burns, chemicals and stings cause sterile inflammation. Infection is only one of many triggers.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Robbins Basic Pathology",
        year: "2018 (10th edition)",
        note: "Educational source — verify current edition and use alongside your course texts.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Porth's Pathophysiology: Concepts of Altered Health States",
        year: "2018 (10th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-1",
    moduleTitle: "The Body Under Attack",
    lessonTitle: "Infection in the Adult Patient",
    description:
      "From the first fever to the doorstep of sepsis — how infection takes hold, how it travels between people, and the nursing care that sees an adult through to recovery.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Explain the difference between colonization and infection.",
      "Describe the chain of infection and name two links a nurse can break.",
      "Recognise the red flags that separate a local infection from sepsis.",
    ],
    tags: ["infection", "sepsis", "chain of infection", "nursing care", "ipc"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Infections are the everyday work of any Ghanaian ward, from infected wounds to chest and urinary infections. Most are manageable — but somewhere between 'a little fever' and 'very sick' lies a line you must learn to see. Crossing it quietly is how patients die.\n\nThis lesson gives you the map: how germs colonize and then invade, how they travel from person to person, and how to nurse the infected adult while watching for the turn toward sepsis.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Germs sitting peacefully on skin or mucosa cause no trouble — that is **colonization**. When they invade tissue, multiply and produce signs, that is **infection**. Spread follows the chain of infection: infectious agent, reservoir, portal of exit, mode of transmission, portal of entry, susceptible host. Break any link and spread stops — hand hygiene breaks transmission, and intact skin, wound care and removing catheters early protect the portals of entry.\n\nA local infection stays at the site: pain, redness, pus, perhaps mild fever. When the response turns body-wide and dysregulated — high fever with chills, tachycardia, fast breathing, new confusion, falling urine output — think **sepsis**: organs are being starved of oxygen. Nursing care is vigilant observation, hydration, cultures before antibiotics, antibiotics given on time, and source control: drain the abscess, remove the catheter, clean the wound.",
      },
      {
        type: "clinical_pearl",
        body: "Draw blood cultures before the first antibiotic dose whenever possible — even one dose can blur the laboratory picture. Document the exact time the specimens were taken.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman is on her second day after caesarean section. You find her feverish at 38.6 °C, breathing 26 breaths per minute, mildly confused, and her blood pressure is 96/60 mmHg. The student caring for her plans to re-dress the wound and chart 'mild wound infection' for the doctor to see on the morning round. What is really going on, and what should happen first?\n\nAnswer: Fever with fast breathing, new confusion and a falling blood pressure is a sepsis picture, not simple local infection. Shout for help, begin full vital-sign monitoring, ensure cultures are taken and antibiotics are started per protocol without waiting for the morning round, and keep her under continuous observation while escalating to the doctor.",
      },
      {
        type: "memory_trick",
        body: "The chain of infection: Agent, Reservoir, Exit, Transmission, Entry, Susceptible host — 'A Rat Escapes, Travels Everywhere, Seeking a Host.' Wash your hands and you strike out 'Travels'; the whole chain falls apart.",
      },
      {
        type: "summary",
        body: "- Colonization is germs living quietly on the body; infection is germs invading tissue and causing signs.\n- Six chain links: agent, reservoir, portal of exit, transmission, portal of entry, susceptible host — break one, stop the spread.\n- Local signs stay at the site; fever with fast breathing, confusion or falling urine output signals sepsis.\n- Core nursing: cultures before antibiotics, antibiotics on time, source control, relentless observation.",
      },
    ],
    questions: [
      {
        topic: "Infection",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Careful hand hygiene between patients interrupts the chain of infection at which link?",
        options: [
          "Infectious agent",
          "Reservoir",
          "Mode of transmission",
          "Susceptible host",
        ],
        correctIndex: 2,
        explanation:
          "Hands are a mode of transmission, carrying the agent from one host to the next. Washing them breaks that link even though the agent and the reservoir still exist.",
        courseSlug: "medical-surgical-nursing-1",
      },
      {
        topic: "Infection",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A nasal swab from a healthy staff nurse grows Staphylococcus aureus. She has no symptoms. What does this finding represent?",
        options: [
          "Sepsis requiring urgent treatment",
          "A contaminated swab that should be discarded",
          "An infected staff member who must be sent home immediately",
          "Colonization — the organism lives there without causing disease",
        ],
        correctIndex: 3,
        explanation:
          "Carrying an organism without tissue invasion or symptoms is colonization, which is common. It matters for infection control — good hand hygiene prevents passing the organism to susceptible patients — but it is not infection or sepsis in the carrier.",
        courseSlug: "medical-surgical-nursing-1",
      },
      {
        topic: "Infection",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which observation set most strongly suggests the patient is developing sepsis rather than a simple local infection?",
        options: [
          "Mild wound redness with a temperature of 37.5 °C",
          "Pain at the wound site alone",
          "A single temperature of 37.8 °C that settles fully with paracetamol",
          "Fever, new confusion, respiratory rate 26 per minute and blood pressure 96/60 mmHg",
        ],
        correctIndex: 3,
        explanation:
          "Sepsis shows systemic involvement: fast breathing, altered mental state and falling blood pressure alongside fever. Local redness, wound pain or a brief low-grade fever are consistent with local infection, which is managed differently and less urgently.",
        courseSlug: "medical-surgical-nursing-1",
      },
    ],
    flashcards: [
      {
        topic: "Chain of Infection",
        front: "List the six links of the chain of infection.",
        back: "Infectious agent, reservoir, portal of exit, mode of transmission, portal of entry, susceptible host.",
      },
      {
        topic: "Infection",
        front: "Colonization versus infection — what is the difference?",
        back: "Colonization: organisms live on or in the body without causing disease. Infection: organisms invade tissue, multiply and produce signs and symptoms.",
      },
      {
        topic: "Sepsis",
        front: "Name four red flags suggesting a local infection has become sepsis.",
        back: "High fever with chills, tachycardia, respiratory rate around 22 or more, new confusion, falling blood pressure or reduced urine output — any combination should trigger escalation.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Sepsis (fact sheet)",
        year: "2020",
        url: "https://www.who.int/news-room/fact-sheets/detail/sepsis",
        note: "Fact sheet — check for the latest update.",
      },
      {
        organization: "Ghana Health Service",
        title: "National Infection Prevention and Control Policy and Guidelines",
        year: "2015",
      },
      {
        organization: "Elsevier",
        title: "Potter and Perry's Fundamentals of Nursing",
        year: "2020 (10th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-1",
    moduleTitle: "The Body Under Attack",
    lessonTitle: "Fever: Friend or Foe?",
    description:
      "Why the body deliberately turns up its heat, when a fever needs only comfort, and when it deserves your deepest worry — including Ghana's malaria-first rule.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Explain how pyrogens raise the hypothalamic set point and produce the stages of fever.",
      "Distinguish fever from hyperthermia and state why their treatments differ.",
      "Apply Ghana's practice of testing for malaria before treating an unexplained fever.",
    ],
    tags: ["fever", "pyrexia", "malaria", "assessment", "antipyretics"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A fever is the body turning up its own thermostat to make life harder for germs. Most of the time it is helping, not harming — the question is never just 'how high?' but 'who is carrying it, and what else is going on?'\n\nIn this lesson you will learn how fever is built, its three stages, why it is not the same as heat stroke, and the danger signs that turn a simple fever into an emergency.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Pyrogens, from germs or inflamed tissue, reset the hypothalamus's set point upward. In the **chill phase** the body feels cold against its new setting, so the patient shivers and wraps herself in thick cloth until the temperature climbs to it. At the **peak**, skin is hot and dry. In **defervescence** the set point falls and sweating pours the heat out — so the shivering patient may simply be climbing, not 'in crisis'.\n\nFever is not hyperthermia. In fever the set point is raised, so sweating and antipyretics work; in **hyperthermia** — heat stroke after farm work under the sun — the body is overheating with a normal set point, and antipyretics are useless: cool actively. Care for fever: fluids, rest, light clothing, paracetamol for discomfort, and treatment of the cause. In Ghana, an unexplained fever is malaria until a test says otherwise — an RDT or blood film comes before antimalarial treatment. Worry deeply about: 40 °C or more, confusion, neck stiffness, a rash, convulsions, and fever in a pregnant or postnatal woman.",
      },
      {
        type: "clinical_pearl",
        body: "Treat the patient, not the thermometer. A mild temperature in a miserable patient deserves relief; a high temperature with confusion needs the doctor, not a cold compress.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At a busy postnatal clinic a 28-year-old mother reports two days of fever with chills and body aches. She has been buying paracetamol from the chemical seller and is breastfeeding her three-week-old baby. Her temperature today is 38.4 °C. What must you do before advising more paracetamol?\n\nAnswer: In Ghana, every unexplained fever needs a malaria test first — an RDT or blood film — and in a postnatal woman you should also think of mastitis, wound infection and urinary infection, so examine her breasts, any wound, and check a urine sample if available. Paracetamol soothes, but the cause decides the treatment, and several of these causes need antimalarials or antibiotics today.",
      },
      {
        type: "memory_trick",
        body: "Fever climbs a mountain: Shiver up the slope, stand hot and dry at the summit, Sweat on the way down. Work out which stage she is in before you panic or celebrate.",
      },
      {
        type: "summary",
        body: "- Pyrogens raise the hypothalamic set point: shivering first, hot dry peak, then sweating as the fever breaks.\n- Fever responds to antipyretics and sweating; hyperthermia (heat stroke) has a normal set point and needs active cooling.\n- In Ghana, test for malaria — RDT or blood film — before treating any unexplained fever.\n- Danger signs: 40 °C or more, confusion, stiff neck, rash, convulsions, and fever in pregnancy or after birth.",
      },
    ],
    questions: [
      {
        topic: "Fever",
        type: "MCQ",
        difficulty: "Easy",
        stem: "At the very start of a fever the patient shivers and feels cold despite a rising temperature. Why?",
        options: [
          "The raised hypothalamic set point makes the body feel cold, so it shivers to generate heat",
          "Blood vessels in the skin constrict permanently throughout the fever",
          "Sweating begins early and cools the skin before the fever peaks",
          "The hypothalamic set point drops below normal in the first hour",
        ],
        correctIndex: 0,
        explanation:
          "The new set point is higher than the current body temperature, so the brain reads the body as 'too cold' and triggers shivering and cold behaviour until the temperature reaches the new setting.",
        courseSlug: "medical-surgical-nursing-1",
      },
      {
        topic: "Fever",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A farmer is brought in confused with a core temperature of 40.5 °C after hours in the sun. Paracetamol has made no difference. What is the explanation and the priority?",
        options: [
          "Fever — increase the paracetamol dose and wait",
          "Fever — give cold fluids by mouth and observe for two hours",
          "Hyperthermia — the set point is normal, so antipyretics will not work; cool him actively now",
          "Hyperthermia — the set point is raised, so antibiotics are the priority",
        ],
        correctIndex: 2,
        explanation:
          "Heat stroke is hyperthermia: overheating without a raised set point. Antipyretics work on the hypothalamic set point and are useless here. Treatment is rapid active cooling — shade, wet cloths, fanning, fluids — and it cannot wait.",
        courseSlug: "medical-surgical-nursing-1",
      },
      {
        topic: "Fever",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A woman attends your CHPS compound with three days of fever and no obvious source. Following Ghanaian practice, what comes first?",
        options: [
          "Give an antimalarial immediately",
          "Do an RDT or blood film before treating",
          "Start antibiotics to cover every possibility",
          "Advise continued paracetamol for one week",
        ],
        correctIndex: 1,
        explanation:
          "Ghana's malaria guidelines require confirmation by RDT or microscopy before treatment in most cases, which also protects her from unnecessary drugs and lets you look for other causes. Blind treatment or blanket antibiotics hides the diagnosis instead of finding it.",
        courseSlug: "medical-surgical-nursing-1",
      },
    ],
    flashcards: [
      {
        topic: "Fever",
        front: "Name the three stages of a fever.",
        back: "Chill (shivering as temperature climbs), peak or flush (hot, dry skin), and defervescence (sweating as the set point falls).",
      },
      {
        topic: "Fever",
        front: "Fever versus hyperthermia — why do treatments differ?",
        back: "Fever has a raised hypothalamic set point, so antipyretics and sweating work. Hyperthermia is overheating with a normal set point — antipyretics are useless; cool actively.",
      },
      {
        topic: "Fever",
        front: "In Ghana, what is the rule for an unexplained fever before treatment?",
        back: "Test first — RDT or blood film for malaria — then treat according to the result, while examining for other causes.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Malaria (fact sheet)",
        year: "2023",
        url: "https://www.who.int/news-room/fact-sheets/detail/malaria",
        note: "Fact sheet — check for the latest update.",
      },
      {
        organization: "Ghana Health Service",
        title: "Guidelines for Case Management of Malaria in Ghana",
        note: "National guidelines — check the current edition with your district health directorate.",
      },
      {
        organization: "Elsevier",
        title: "Potter and Perry's Fundamentals of Nursing",
        year: "2020 (10th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-1",
    moduleTitle: "The Body Under Attack",
    lessonTitle: "Pain: The Fifth Vital Sign",
    description:
      "Pain is the one vital sign no machine can measure for you. Learn the gold standard of pain assessment and how to act on it — because unrelieved pain is never acceptable.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "State McCaffery's definition of pain and explain why self-report is the gold standard.",
      "Use PQRST to structure a pain assessment.",
      "Distinguish acute from chronic pain and describe care for each.",
    ],
    tags: ["pain", "assessment", "pqrst", "analgesia", "vital signs"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every other vital sign has a machine; pain has only the person feeling it. That is why McCaffery's definition matters: pain is whatever the experiencing person says it is, existing whenever they say it does. Your listening is the instrument.\n\nIn this lesson you will learn to assess pain properly, tell acute from chronic pain, and treat pain like the vital sign it is — assess, act, reassess.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Acute pain** is sudden and protective — a surgical wound, a burn, a fracture — and it settles as the cause heals. **Chronic pain** persists beyond healing, roughly three months or more; it wears people down and needs planned, regular care rather than crisis-driven doses. Assess with **PQRST**: what Provokes and Palliates it, its Quality (burning, cramping, sharp), the Region and where it Radiates, its Severity on a 0–10 scale, and its Timing and course.\n\nBecause pain is a vital sign, screen it with every set of observations and act on what you find. Give prescribed analgesia matched to severity — paracetamol and NSAIDs for mild pain, stepping up as prescribed for severe — and give it by the clock for persisting pain, not only when the patient calls. Reassess within the hour after oral analgesia and chart the change. And never dismiss non-drug comfort: positioning, warmth, distraction and being taken seriously are real relief.",
      },
      {
        type: "clinical_pearl",
        body: "A patient who says 8 is telling you 8 — the score belongs to her, not to your judgement of her face. Score, act, reassess. Unrelieved pain is a complication, not a character test.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "On evening rounds a woman one day after laparotomy tells you her wound pain is 8 out of 10. The night-shift note says 'coping well'. She is guarding her abdomen with a folded cloth, has not turned in bed since morning, and refuses to cough when asked. What do her score and her behaviour tell you, and what will you do?\n\nAnswer: Self-report is the gold standard, so 8/10 is severe pain; her guarding and refusal to move or cough show what it is costing her — shallow breathing and immobility that invite chest infection and clots. Give or escalate for the prescribed analgesia, add positioning and support for coughing, and reassess within the hour. Document the score before and after so the next shift sees the truth, not 'coping well'.",
      },
      {
        type: "memory_trick",
        body: "Sweep PQRST through every pain like the wave on an ECG strip: Provokes/Palliates, Quality, Region and Radiation, Severity, Time.",
      },
      {
        type: "summary",
        body: "- Pain is what the patient says it is — self-report is the gold standard, whatever her face shows.\n- PQRST structures the questions; the 0–10 score belongs to the patient.\n- Acute pain protects and resolves with healing; chronic pain persists and needs planned, clock-based care.\n- Treat pain like a vital sign: assess, act, and reassess within the hour after treatment.",
      },
    ],
    questions: [
      {
        topic: "Pain",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A patient rates her pain as 8/10 but is not crying and chats briefly with her visitor. What is the correct interpretation?",
        options: [
          "Her true pain is probably mild, since she is not behaving as if in severe pain",
          "Behaviour overrides self-report, so chart a lower score",
          "The nurse should average the score with her own impression before charting",
          "Her self-report stands — pain is whatever the experiencing person says it is",
        ],
        correctIndex: 3,
        explanation:
          "McCaffery's definition makes the patient's word the gold standard. Quiet behaviour, cultural stoicism or brief distraction never lowers the reported score; it is charted as given and acted upon.",
        courseSlug: "medical-surgical-nursing-1",
      },
      {
        topic: "Pain",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In PQRST, what does the 'S' ask you to elicit?",
        options: [
          "The severity of the pain, usually on a 0–10 scale",
          "The site of the pain only",
          "Whether the pain is sharp or burning",
          "How long the patient has had the pain",
        ],
        correctIndex: 0,
        explanation:
          "The S of PQRST is severity, typically scored 0–10, which is charted, acted upon and reassessed. Site is part of Region and Radiation, quality is the Q, and duration is the T.",
        courseSlug: "medical-surgical-nursing-1",
      },
      {
        topic: "Pain",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which practice best reflects treating pain as the fifth vital sign for a patient on regular oral analgesia?",
        options: [
          "Chart the pain score once on admission and again at discharge",
          "Give analgesia only when the patient calls the nurse for it",
          "Screen the pain score with observations and reassess within about an hour after analgesia",
          "Withhold analgesia until the patient's pain reaches 10/10",
        ],
        correctIndex: 2,
        explanation:
          "A vital sign is measured regularly and after every intervention. Screening with each observation and reassessing within the hour after oral analgesia shows whether treatment is working while it can still be adjusted. Waiting for a call or a score of 10 abandons the patient.",
        courseSlug: "medical-surgical-nursing-1",
      },
    ],
    flashcards: [
      {
        topic: "Pain",
        front: "State McCaffery's definition of pain.",
        back: "Pain is whatever the experiencing person says it is, existing whenever the person says it does.",
      },
      {
        topic: "Pain Assessment",
        front: "What do the letters of PQRST stand for?",
        back: "Provokes/Palliates, Quality, Region and Radiation, Severity (0–10), Time and course.",
      },
      {
        topic: "Pain",
        front: "Acute versus chronic pain — the key difference?",
        back: "Acute pain is sudden and protective and settles as the cause heals. Chronic pain persists beyond about three months and needs planned, regular, clock-based management.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Guidelines for the Pharmacological and Radiotherapeutic Management of Cancer Pain in Adults and Adolescents",
        year: "2018",
        url: "https://www.who.int/publications/i/item/9789241550390",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Potter and Perry's Fundamentals of Nursing",
        year: "2020 (10th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-1",
    moduleTitle: "System-by-System Nursing I",
    lessonTitle: "Respiratory Conditions: When Breathing Gets Hard",
    description:
      "Asthma, pneumonia and COPD — the three conditions behind most breathless patients you will meet, and the nursing care that helps them breathe again.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe how asthma, pneumonia and COPD each make breathing difficult.",
      "Recognise the emergency signs of a severe asthma attack and a deteriorating pneumonia.",
      "Apply nursing care: upright positioning, inhaler support and safe oxygen practice.",
    ],
    tags: ["respiratory", "asthma", "pneumonia", "copd", "breathing"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Nothing frightens a patient — or a student — like air that will not come. Three conditions cause most of the breathlessness you will meet on a Ghanaian ward: asthma, pneumonia and chronic obstructive pulmonary disease.\n\nEach blocks breathing in a different way, and each needs different nursing. Learn the patterns and your hands will know what to do before the doctor arrives.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Asthma** narrows airways with muscle spasm, swelling and mucus, triggered by dust, smoke, cold or infection — wheeze, cough, chest tightness. Its hallmark is reversibility: a reliever inhaler like salbutamol opens the airways within minutes, and a spacer improves delivery. Severity has a spoken meter: a patient who cannot finish a sentence is in danger. **Pneumonia** fills alveoli with infected fluid — fever, productive cough, fast breathing, crackles on auscultation; treatment targets the infection while you support breathing, hydration and secretions.\n\n**COPD** is permanent narrowing and lost elasticity after years of smoke — including biomass smoke from firewood cooking, a real Ghanaian exposure. The damage is not reversible, but smoke-free air, prescribed inhalers, vaccination and paced activity slow the decline. Teach pursed-lip breathing and a forward-leaning posture. And treat oxygen as a drug in known COPD: the target is 88–92 percent saturation, because oversupply can dampen their breathing drive.",
      },
      {
        type: "clinical_pearl",
        body: "Sit every breathless patient upright before anything else — it drops the work of breathing instantly and costs nothing. In known COPD, oxygen targets 88–92 percent, not 'as much as possible'.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 24-year-old student arrives at district hospital OPD with an asthma attack. She is wheezing loudly, using her neck and shoulder muscles to breathe, and can only speak two or three words between breaths. She used her inhaler at home an hour ago with no relief. How severe is this, and what are your first nursing actions?\n\nAnswer: Two-to-three-word speech and accessory muscle use mark a severe, potentially life-threatening attack that is not responding to her inhaler. Sit her upright, call for the senior nurse or doctor, give salbutamol by nebuliser or spacer per protocol with oxygen as prescribed, and stay with her continuously — never leave a severe asthmatic alone while she still speaks in words, not sentences.",
      },
      {
        type: "memory_trick",
        body: "Sentences are your severity meter: full sentences — watch closely; short phrases only — emergency. For long-term breathlessness, teach the three Ps: Pursed lips, lean forward, Pace everything.",
      },
      {
        type: "summary",
        body: "- Asthma narrows airways reversibly — reliever inhalers work; count the words she can say to grade severity.\n- Pneumonia fills alveoli with infected fluid — fever, cough, fast breathing; treat the infection and support breathing.\n- COPD is permanent narrowing from smoke, including cooking smoke — smoke-free air, inhalers, paced activity.\n- Sit breathless patients upright; in known COPD, target oxygen saturation of 88–92 percent.",
      },
    ],
    questions: [
      {
        topic: "Respiratory",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the hallmark feature that most distinguishes asthma from COPD?",
        options: [
          "Airway narrowing that is largely reversible with bronchodilators",
          "Permanent destruction of alveolar walls",
          "Fluid filling the alveoli due to infection",
          "Clots blocking the pulmonary vessels",
        ],
        correctIndex: 0,
        explanation:
          "Asthma's narrowing — muscle spasm, swelling and mucus — reverses with relievers such as salbutamol, which is why a good response helps confirm it. Alveolar destruction and irreversible narrowing define COPD, and infection-filled alveoli describe pneumonia.",
        courseSlug: "medical-surgical-nursing-1",
      },
      {
        topic: "Respiratory",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During an asthma attack, which finding points to a severe, life-threatening episode needing immediate escalation?",
        options: [
          "A loud cough that settles with warm fluids",
          "Wheeze heard only after exercise",
          "Being able to speak in full, unhurried sentences",
          "Speaking only two or three words between breaths with neck muscles working",
        ],
        correctIndex: 3,
        explanation:
          "Speech is the bedside severity meter: two-to-three-word speech plus accessory muscle use marks a severe attack that no longer responds adequately to relievers. Full sentences suggest a milder episode; exercise-only wheeze is intermittent asthma.",
        courseSlug: "medical-surgical-nursing-1",
      },
      {
        topic: "Respiratory",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A known COPD patient is breathless and his saturation reads 84 percent on air. Why is 'turn the oxygen to maximum' the wrong reflex?",
        options: [
          "Oxygen is contraindicated in all respiratory patients",
          "High oxygen can remove the hypoxic drive that keeps some COPD patients breathing adequately",
          "COPD patients cannot absorb oxygen through the lungs",
          "Oxygen causes bronchospasm in COPD",
        ],
        correctIndex: 1,
        explanation:
          "In COPD, high-flow oxygen risks carbon dioxide retention by removing hypoxic respiratory drive. Oxygen is still given, but titrated to a target of 88–92 percent with conscious patients monitored — it is a drug with a dose, not a comfort blanket. Oxygen is not contraindicated and does not cause bronchospasm.",
        courseSlug: "medical-surgical-nursing-1",
      },
    ],
    flashcards: [
      {
        topic: "Asthma",
        front: "Which single bedside feature grades the severity of an asthma attack fastest?",
        back: "Speech: full sentences — milder; short phrases or two-to-three words with accessory muscle use — severe and life-threatening. Never leave such a patient alone.",
      },
      {
        topic: "COPD",
        front: "What oxygen saturation target is used in known COPD, and why?",
        back: "88–92 percent. Higher flows can remove the hypoxic drive to breathe and cause carbon dioxide retention.",
      },
      {
        topic: "Respiratory",
        front: "Name three nursing actions that help almost any breathless patient immediately.",
        back: "Sit them upright, stay calm and close, and clear the airway of secretions — then give prescribed treatment and monitor continuously.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Asthma (fact sheet)",
        url: "https://www.who.int/news-room/fact-sheets/detail/asthma",
        note: "Fact sheet — check for the latest update.",
      },
      {
        organization: "WHO",
        title: "Chronic Obstructive Pulmonary Disease (COPD) (fact sheet)",
        year: "2023",
        url: "https://www.who.int/news-room/fact-sheets/detail/chronic-obstructive-pulmonary-disease-(COPD)",
        note: "Fact sheet — check for the latest update.",
      },
      {
        organization: "Ghana Ministry of Health",
        title: "Standard Treatment Guidelines",
        note: "National prescribing reference — check current edition.",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-1",
    moduleTitle: "System-by-System Nursing I",
    lessonTitle: "Cardiovascular Conditions: Life with a Struggling Pump",
    description:
      "Hypertension whispers while heart failure floods — two of Ghana's biggest silent burdens and the nursing care that keeps the pump working.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Explain why hypertension is called silent and what it quietly damages over time.",
      "Link left- and right-sided heart failure to the symptoms you see at the bedside.",
      "Apply daily weighing and fluid observation in the nursing care of heart failure.",
    ],
    tags: ["cardiovascular", "hypertension", "heart failure", "fluid balance", "observations"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The heart beats about one hundred thousand times a day without thanks or complaint. When blood pressure quietly rises, or the pump slowly weakens, the body floods in awkward places — and the patient finally arrives feeling 'breathless' or 'swollen'.\n\nThis lesson covers the two conditions you will manage most: hypertension, the silent one, and heart failure, the flooding one.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Hypertension** — 140/90 mmHg or more on repeated measurement — usually causes no symptoms at all, which is why it is called the silent killer: it quietly hardens and strains vessels until it strikes as stroke, heart failure, kidney failure or vision loss. Many Ghanaians discover it by chance at antenatal clinic or a routine visit. Care is lifelong: salt reduction, healthy weight, exercise, and daily tablets — the classic dangerous story is the patient who stops medication because she 'feels fine'. Measure blood pressure at every opportunity.\n\n**Heart failure** means the pump weakens and blood dams up behind it. Left-sided failure floods the lungs: breathlessness, orthopnoea — needing to be propped on pillows — waking at night gasping, and crackles on auscultation. Right-sided failure floods the rest: pitting ankle oedema, a swollen tender liver edge, abdominal fullness. Nursing care catches the flood early: daily weight in the same conditions, strict intake and output charting, salt and fluid limits as prescribed, upright positioning for congestion, and skin care for oedematous legs.",
      },
      {
        type: "clinical_pearl",
        body: "Same scale, same time of day, same clothes. A 2 kg gain overnight is fluid, not food — report it before breakfast, not after the patient has drowned in her own circulation.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 60-year-old woman is admitted with worsening heart failure. She now sleeps propped on three pillows, wakes at night gasping for breath, and her pitting oedema has climbed from her ankles to her knees. Her weight is 2.4 kg higher than at the clinic two days ago, where she was told to 'take her medicines and rest'. What do these signs tell you, and what nursing care does she need tonight?\n\nAnswer: Three-pillow orthopnoea, night-time breathlessness and climbing oedema with a 2.4 kg gain in two days show fluid overload with failure on both sides. She needs urgent reporting for treatment review, plus tonight: strict intake–output charting, daily same-condition weights, salt and fluid restriction as prescribed, upright positioning to ease her lungs, and skin care for her swollen legs.",
      },
      {
        type: "memory_trick",
        body: "Follow the flood to find the failing side: the Left door floods the Lungs; the Right door floods the Rest — legs, liver, belly.",
      },
      {
        type: "summary",
        body: "- Hypertension is silent until it strikes — measure blood pressure at every opportunity, and counsel that tablets are for life, not for symptoms.\n- Left-sided heart failure floods the lungs: orthopnoea, night-time breathlessness, crackles.\n- Right-sided failure floods legs and liver: pitting oedema, abdominal fullness, fatigue.\n- Daily same-condition weights plus strict intake–output catch fluid overload before it drowns the patient.",
      },
    ],
    questions: [
      {
        topic: "Cardiovascular",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A patient needs three pillows and must sit up to breathe comfortably at night. What is this sign called, and what does it suggest?",
        options: [
          "Pitting oedema — fluid collecting in the feet and ankles",
          "Paroxysmal nocturnal dyspnoea — sudden day-time breathlessness from anaemia",
          "Orthopnoea — it suggests fluid congestion in the lungs, typically from left-sided heart failure",
          "Angina — chest pain from narrowed heart vessels",
        ],
        correctIndex: 2,
        explanation:
          "Orthopnoea is breathlessness lying flat relieved by sitting up, caused by lung congestion when lying flat redistributes fluid — classically left-sided failure. Waking from sleep gasping is the related PND, and ankle swelling is pitting oedema.",
        courseSlug: "medical-surgical-nursing-1",
      },
      {
        topic: "Cardiovascular",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is hypertension called the 'silent killer' in your counselling?",
        options: [
          "Because it causes severe chest pain before any damage occurs",
          "Because the blood pressure machine makes no sound",
          "Because it only affects patients who do not take their tablets",
          "Because it usually causes no symptoms while it silently damages brain, heart, kidneys and eyes",
        ],
        correctIndex: 3,
        explanation:
          "Hypertension typically produces no symptoms while it strains vessels and organs, so the first 'symptom' may be a stroke or heart failure. This is exactly why patients stop tablets when they feel well — and why your counselling must explain the silence.",
        courseSlug: "medical-surgical-nursing-1",
      },
      {
        topic: "Cardiovascular",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A heart failure patient weighs 71 kg on Monday morning and 73.2 kg on Tuesday morning, weighed at the same time in the same gown. What does the change most likely represent?",
        options: [
          "Muscle gain from improved appetite",
          "A measurement error — reweigh her next week",
          "About 2 kg of retained fluid signalling worsening heart failure that must be reported",
          "Normal daily variation of body weight in adults",
        ],
        correctIndex: 2,
        explanation:
          "Consistent same-condition weights remove the noise; a 2 kg rise in a day is water, not tissue, and signals fluid retention and worsening failure. It must be reported the same day — waiting a week invites acute pulmonary oedema.",
        courseSlug: "medical-surgical-nursing-1",
      },
    ],
    flashcards: [
      {
        topic: "Heart Failure",
        front: "Which side of the failing heart floods the lungs, and which floods the legs?",
        back: "Left-sided failure floods the lungs (breathlessness, orthopnoea, crackles); right-sided failure floods the legs, liver and abdomen (pitting oedema, fullness).",
      },
      {
        topic: "Heart Failure",
        front: "Define orthopnoea and paroxysmal nocturnal dyspnoea.",
        back: "Orthopnoea: breathlessness lying flat, eased by sitting up. PND: waking from sleep gasping for air. Both point to lung congestion.",
      },
      {
        topic: "Heart Failure",
        front: "State the daily weighing rule for heart failure patients.",
        back: "Same scale, same time, same clothing — every day. A 2 kg rise in a day is fluid until proven otherwise and must be reported.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Hypertension (fact sheet)",
        year: "2023",
        url: "https://www.who.int/news-room/fact-sheets/detail/hypertension",
        note: "Fact sheet — check for the latest update.",
      },
      {
        organization: "WHO",
        title: "Cardiovascular Diseases (fact sheet)",
        year: "2021",
        url: "https://www.who.int/news-room/fact-sheets/detail/cardiovascular-diseases-(cvds)",
        note: "Fact sheet — check for the latest update.",
      },
      {
        organization: "Elsevier",
        title: "Potter and Perry's Fundamentals of Nursing",
        year: "2020 (10th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-1",
    moduleTitle: "System-by-System Nursing I",
    lessonTitle: "Gastrointestinal Conditions: The Gut Story",
    description:
      "From the burning epigastrium of an ulcer to the frightening black stool of a bleed — the gut's common troubles and the care that saves.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe peptic ulcer disease and recognise the danger signs of gastrointestinal bleeding.",
      "Explain why rehydration leads the care of gastroenteritis.",
      "List the four cardinal features of intestinal obstruction.",
    ],
    tags: ["gastrointestinal", "peptic ulcer", "gastroenteritis", "dehydration", "obstruction"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The gut talks loudly when it is unhappy — a burning stomach, watery stools, a belly that swells and stops passing wind. Behind most of the drama sit three patterns you will meet again and again: peptic ulcer, gastroenteritis and obstruction.\n\nYour skill is reading the gut's complaints, especially the quiet ones — because the black stool an outpatient mentions in passing may be the most serious sentence of the whole consultation.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Peptic ulcer**: acid and Helicobacter pylori erode the stomach or duodenal lining, producing burning epigastric pain — classically eased by food in duodenal ulcers, worsened by it in gastric ones — with nausea and night pain. The danger is bleeding: vomiting 'coffee-ground' material, black tarry sticky stool (melaena), dizziness on standing. Bleeding is an emergency: check lying and standing vitals, secure IV access, refer urgently. A sudden, rigid, board-like abdomen means perforation — a surgical emergency.\n\n**Gastroenteritis** — vomiting and diarrhoea, often after contaminated food or water — kills by dehydration. Assess: thirst, dry mouth, sunken eyes, slow skin pinch, reduced urine, lethargy. Care: oral rehydration salts in frequent small sips, continue light feeding (never starve the gut), zinc for children, and relentless hygiene to stop spread; escalate to IV fluids if severe or if the patient cannot drink. **Obstruction** declares itself four ways: colicky pain, vomiting (later foul-smelling), abdominal distension, and absolute constipation — nothing solid, nothing gas. Keep the patient nil by mouth, decompress with a nasogastric tube, give IV fluids, and call for surgical review.",
      },
      {
        type: "clinical_pearl",
        body: "Black, tarry, sticky stool in an adult is blood from the upper gut until proven otherwise. Iron tablets darken stool, but tarry and sticky is bleeding — check the vital signs before you finish the charting.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 45-year-old teacher comes to your CHPS compound with 'ulcer pain' he has self-treated for weeks. Today he vomited material that looked like coffee grounds, his stool has turned black and sticky, and he feels dizzy whenever he stands up. What is happening, and what will you do?\n\nAnswer: Coffee-ground vomit, melaena and postural dizziness point to a bleeding peptic ulcer with significant blood loss. Check his pulse and blood pressure lying and standing, keep him nil by mouth, secure IV access if you are trained to, and arrange urgent referral to hospital with fluids running and a clear referral note. Reassure him on the way — fear raises the pulse you are trying to read.",
      },
      {
        type: "memory_trick",
        body: "Obstruction shouts four things: Pain is colicky, Vomiting builds, the Belly balloons, and Nothing passes below — 'Pain, Puke, Puff, Plug'.",
      },
      {
        type: "summary",
        body: "- Ulcer pain burns in the epigastrium; bleeding shows as coffee-ground vomit and tarry melaena — an emergency referral.\n- Gastroenteritis kills by dehydration: ORS in small frequent sips, keep feeding, watch urine output.\n- Obstruction = colicky pain, vomiting, distension, absolute constipation: nil by mouth, NG tube, IV fluids, surgical review.\n- A sudden board-like rigid abdomen suggests perforation — nothing by mouth and urgent transfer.",
      },
    ],
    questions: [
      {
        topic: "Gastrointestinal",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A patient reports passing black, tarry, sticky stools for two days. What is the correct interpretation?",
        options: [
          "Normal pigmentation from a plantain-heavy diet",
          "Almost certainly iron tablets, which need no action",
          "Melaena — digested blood from the upper gastrointestinal tract until proven otherwise",
          "A lower bowel infection that will settle with fluids",
        ],
        correctIndex: 2,
        explanation:
          "Black, tarry and sticky stool is the classic description of melaena from upper GI bleeding, which can be life-threatening. Iron darkens stool but typically makes it dark grey-green and formed, not tarry — and you should still confirm the story.",
        courseSlug: "medical-surgical-nursing-1",
      },
      {
        topic: "Gastrointestinal",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which is the single most important treatment priority in an adult with acute watery diarrhoea and signs of dehydration?",
        options: [
          "Immediate broad-spectrum antibiotics",
          "Antidiarrhoeal medicine to stop the stools",
          "Starving the gut so it can rest for 24 hours",
          "Rehydration — oral rehydration salts in frequent small sips, IV if severe or unable to drink",
        ],
        correctIndex: 3,
        explanation:
          "Diarrhoeal disease kills through dehydration, so replacing water and salts leads the care; feeding should continue and antidiarrhoeals are avoided in infective diarrhoea. Antibiotics are reserved for specific diagnoses, not given blindly.",
        courseSlug: "medical-surgical-nursing-1",
      },
      {
        topic: "Gastrointestinal",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which set of findings best fits intestinal obstruction?",
        options: [
          "Constant burning epigastric pain eased by food, with melaena",
          "Colicky pain, vomiting, abdominal distension and absolute constipation — no stool and no gas",
          "Watery diarrhoea with sunken eyes and reduced urine",
          "Right lower abdominal pain with rebound tenderness and fever",
        ],
        correctIndex: 1,
        explanation:
          "Obstruction classically blocks the passage of everything: colicky cramps as the bowel strains, vomiting, a ballooned abdomen and absolute constipation. The other options suggest bleeding ulcer, dehydration from gastroenteritis, and appendicitis respectively.",
        courseSlug: "medical-surgical-nursing-1",
      },
    ],
    flashcards: [
      {
        topic: "Gastrointestinal",
        front: "What is melaena and what does it mean?",
        back: "Black, tarry, sticky stool — digested blood from the upper gastrointestinal tract. Treat as significant bleeding until proven otherwise.",
      },
      {
        topic: "Gastroenteritis",
        front: "What is the leading killer in gastroenteritis, and the leading treatment?",
        back: "Dehydration — treated with oral rehydration salts given in frequent small sips (IV fluids if severe or the patient cannot drink), while continuing to feed.",
      },
      {
        topic: "Obstruction",
        front: "Name the four cardinal features of intestinal obstruction.",
        back: "Colicky pain, vomiting, abdominal distension, and absolute constipation — nothing solid, no gas passing.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Diarrhoeal Disease (fact sheet)",
        year: "2017",
        url: "https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease",
        note: "Fact sheet — check for the latest update.",
      },
      {
        organization: "Elsevier",
        title: "Robbins Basic Pathology",
        year: "2018 (10th edition)",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Potter and Perry's Fundamentals of Nursing",
        year: "2020 (10th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-1",
    moduleTitle: "System-by-System Nursing I",
    lessonTitle: "Urinary Conditions: When the Filter Struggles",
    description:
      "Burning bladders, angry kidneys and quietly failing filters — urinary conditions whisper before they shout, and you learn to hear the whisper.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Distinguish cystitis from pyelonephritis by signs and severity.",
      "Explain why every urinary infection in pregnancy must be treated and sent for culture.",
      "Apply safe catheter care and recognise long-term risk to the kidneys.",
    ],
    tags: ["urinary", "uti", "pyelonephritis", "catheter care", "renal"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Urinary problems are polite. They begin with a whisper — burning here, frequency there — long before they shout with fever and flank pain. And the kidneys, the body's tireless filters, whisper longest of all: they can lose most of their function before anyone feels a thing.\n\nIn this lesson you will learn to hear the whisper early, and to protect both the woman in front of you and her kidneys.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "A **lower urinary tract infection** (cystitis) inflames the bladder: frequency, urgency, burning when passing urine, and suprapubic discomfort — usually with no fever. It settles with fluids and a prescribed short course of antibiotics. An **upper infection** (pyelonephritis) means the germs have climbed to the kidney: fever with chills, flank pain, tenderness over the angle where the ribs meet the spine, vomiting and real systemic illness. This one needs urgent, often inpatient treatment — and in pregnancy it threatens both mother and baby.\n\nPregnancy changes every rule: even bacteria in the urine with no symptoms can climb and cause pyelonephritis, preterm labour and low birth weight. So in pregnancy, always send a midstream urine sample and always complete treatment. Longer term, the kidneys are quietly destroyed by hypertension, diabetes, repeated infection and obstruction — monitor blood pressure and creatinine, and protect them from dehydration and nephrotoxic drugs. Catheters are a highway for germs: insert only when truly needed, remove on the earliest possible day, keep the drainage bag below bladder level, and never let the tube drag on the floor.",
      },
      {
        type: "clinical_pearl",
        body: "A urinary tract infection in a pregnant woman is never 'simple'. Send the midstream sample, complete the treatment — untreated infection in pregnancy risks the kidneys, preterm labour and the baby.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman at 26 weeks gestation attends ANC complaining of burning on urination for two days. Today she has a fever of 38.6 °C, right flank pain and has vomited twice. The records show no urine sample was taken at her last visit. What has changed, and what must happen now?\n\nAnswer: She has moved beyond simple cystitis — fever, flank pain and vomiting in pregnancy signal acute pyelonephritis with real risk to her and the baby. Send a midstream urine sample now, give fluids and paracetamol as prescribed, and arrange urgent review: she will likely need admission for IV antibiotics and fetal monitoring. Note in the chart how quietly this began, and the missed urine sample — the lesson for your own practice.",
      },
      {
        type: "memory_trick",
        body: "Burning Below is bladder; Fever and Flank above is kidney. Lower is local; Upper is unwell.",
      },
      {
        type: "summary",
        body: "- Cystitis: frequency, urgency, dysuria, suprapubic pain and no fever — fluids plus a prescribed antibiotic course.\n- Pyelonephritis: fever, chills, flank or rib-angle tenderness, vomiting — urgent, often inpatient treatment.\n- In pregnancy, urinary infection is never simple: always send MSU, always complete treatment.\n- Catheters: insert reluctantly, remove early, bag below the bladder — and guard the kidneys from pressure, sugar and dehydration for life.",
      },
    ],
    questions: [
      {
        topic: "Urinary",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which symptom cluster points to pyelonephritis rather than simple cystitis?",
        options: [
          "Frequency, urgency and dysuria without fever",
          "Stress incontinence when coughing",
          "Passing urine normally but with pale colour",
          "Fever with chills, flank pain and vomiting",
        ],
        correctIndex: 3,
        explanation:
          "Fever, chills, flank (costovertebral angle) pain and vomiting show the infection has reached the kidney and become systemic. Frequency, urgency and dysuria alone describe bladder involvement.",
        courseSlug: "medical-surgical-nursing-1",
      },
      {
        topic: "Urinary",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman at 30 weeks gestation has a urine culture growing significant bacteria, but she feels completely well. What is the correct management?",
        options: [
          "No treatment — she is asymptomatic, so no action is needed",
          "Send midstream urine for culture and treat with an appropriate antibiotic course",
          "Treat only if she develops fever later",
          "Advise fluids only and repeat the culture after delivery",
        ],
        correctIndex: 1,
        explanation:
          "In pregnancy, asymptomatic significant bacteriuria is always investigated and treated, because it risks ascending to pyelonephritis, preterm labour and low birth weight. Waiting for symptoms or deferring to the postnatal period invites complications.",
        courseSlug: "medical-surgical-nursing-1",
      },
      {
        topic: "Urinary",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which catheter care practice directly reduces the risk of urinary infection?",
        options: [
          "Keeping the drainage bag below bladder level and removing the catheter at the earliest safe opportunity",
          "Washing the catheter tubing with antiseptic solution daily",
          "Clamping the catheter for one hour every day to retrain the bladder",
          "Keeping the bag on the patient's lap during transport for safety",
        ],
        correctIndex: 0,
        explanation:
          "A bag kept below the bladder (and never on the floor) stops urine flowing back, and early removal shortens the days the highway stays open for germs. Daily clamping is not routine, tubing should not be washed with antiseptics, and a bag on the lap risks reflux.",
        courseSlug: "medical-surgical-nursing-1",
      },
    ],
    flashcards: [
      {
        topic: "Urinary",
        front: "Give the hallmarks of pyelonephritis versus cystitis.",
        back: "Cystitis: frequency, urgency, dysuria, suprapubic pain, no fever. Pyelonephritis: fever with chills, flank or rib-angle tenderness, vomiting, systemic illness.",
      },
      {
        topic: "Urinary",
        front: "What is the rule for urinary infection in pregnancy?",
        back: "Never simple — always send MSU for culture and always complete treatment; asymptomatic infection still risks pyelonephritis, preterm labour and low birth weight.",
      },
      {
        topic: "Catheter Care",
        front: "State the three catheter rules that protect against infection.",
        back: "Insert only when truly needed, remove at the earliest safe day, and keep the drainage bag below bladder level — never on the floor.",
      },
    ],
    sources: [
      {
        organization: "Wolters Kluwer",
        title: "Porth's Pathophysiology: Concepts of Altered Health States",
        year: "2018 (10th edition)",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "WHO",
        title: "Antimicrobial Resistance (fact sheet)",
        year: "2023",
        url: "https://www.who.int/news-room/fact-sheets/detail/antimicrobial-resistance",
        note: "Fact sheet — check for the latest update.",
      },
      {
        organization: "Ghana Health Service",
        title: "National Infection Prevention and Control Policy and Guidelines",
        year: "2015",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-1",
    moduleTitle: "System-by-System Nursing II",
    lessonTitle: "Endocrine Disorders: When Hormones Drift",
    description:
      "Insulin, thyroid and adrenal hormones run the body's background settings — and when they drift, everything shifts. Diabetes leads the ward reality; hypo and hyper lead your emergencies.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Distinguish type 1 from type 2 diabetes and name the classic presenting symptoms.",
      "Recognise and treat hypoglycaemia, and describe how it differs from DKA.",
      "Match hypothyroid and hyperthyroid signs to their hormonal cause.",
    ],
    tags: ["endocrine", "diabetes", "hypoglycaemia", "dka", "thyroid"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Hormones are the body's background settings — quiet messengers that set the speed of everything. When insulin fails or the thyroid drifts, the whole body shifts gear, slowly or dangerously fast.\n\nDiabetes is the one you will meet constantly in Ghanaian clinics and wards, so this lesson leans hard toward it — especially the emergency that kills in minutes (hypoglycaemia) versus the one that builds over days (high sugar with ketones).",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Diabetes**: in type 1 the body stops making insulin, usually young and abrupt; in type 2 insulin meets resistance, usually gradual and weight-related — and rising fast in Ghana. Classic presentation: thirst, frequent urination, unexplained weight loss — plus slow-healing wounds, blurred vision and recurrent infections. Long-term care: glucose checks, diet, metformin or insulin, daily foot inspection, and HbA1c reviews. **Hypoglycaemia** — sweating, trembling, hunger, confusion, sometimes fits — is the emergency that cannot wait: if she can swallow, give 15 g of fast sugar now, recheck at 15 minutes, then a starch snack; never 'wait for the lab'. **Diabetic ketoacidosis** builds over hours to days: deep sighing breathing, fruity-smelling breath, dehydration and drowsiness with very high sugar.\n\nThe **thyroid** sets the body's speed. In hypothyroidism everything slows: tiredness, feeling cold, weight gain, constipation, dry skin, a slow pulse. In hyperthyroidism everything races: heat intolerance, sweating, weight loss despite appetite, palpitations and tremor. Watch pulse, weight and temperature trends, and support lifelong adherence — thyroxine for the slow gland must never be stopped because the patient 'feels normal' again.",
      },
      {
        type: "clinical_pearl",
        body: "Cold and clammy needs candy; hot and dry, sugar high. If in doubt and she can swallow — treat as low. Low kills in minutes; high takes hours.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At 06:00 on the postnatal ward you find a woman with known diabetes drenched in sweat, trembling, and unable to answer your questions clearly. She missed her supper last night after a difficult evening. What is happening, and what do you do first?\n\nAnswer: Sweating, trembling and new confusion in a diabetic who missed a meal is hypoglycaemia until proven otherwise — do not wait for a lab glucose. If she can swallow safely, give 15 g of fast sugar now (glucose, sugar lumps or sweet tea), recheck after 15 minutes and follow with a proper meal. If she cannot swallow, give nothing by mouth, place her in the recovery position, call for help and prepare for IV dextrose.",
      },
      {
        type: "memory_trick",
        body: "Cold and clammy needs candy; hot and dry, sugar high. Two lines, two emergencies — one you treat this minute, one you escalate today.",
      },
      {
        type: "summary",
        body: "- Diabetes presents with thirst, polyuria and weight loss; type 2 is rising fastest in Ghana and hides for years.\n- Hypoglycaemia: sweating, tremor, confusion — 15 g fast sugar, recheck at 15 minutes, then a meal.\n- DKA builds over days: deep sighing breath, fruity smell, dehydration, drowsiness with very high sugar.\n- Hypothyroid slows the body, hyperthyroid races it — watch pulse, weight and temperature.",
      },
    ],
    questions: [
      {
        topic: "Endocrine",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A diabetic patient on insulin becomes sweaty, trembles and cannot answer clearly. What is the immediate nursing action if she can swallow?",
        options: [
          "Give her long-acting insulin immediately",
          "Withhold all food until a laboratory glucose result returns",
          "Reassure her and re-assess on the next round",
          "Give about 15 g of fast-acting sugar, then recheck in 15 minutes",
        ],
        correctIndex: 3,
        explanation:
          "Sweating, tremor and confusion in an insulin-treated diabetic is hypoglycaemia; fast sugar works in minutes and must never wait for the lab. Insulin would deepen the emergency, and delaying food or review risks collapse or convulsions.",
        courseSlug: "medical-surgical-nursing-1",
      },
      {
        topic: "Endocrine",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which description best fits diabetic ketoacidosis?",
        options: [
          "Gradual polyuria, dehydration, deep sighing breath and drowsiness with very high glucose",
          "Sudden sweating, trembling and hunger that resolve within minutes of sugar",
          "Weight loss with heat intolerance, palpitations and a fine tremor",
          "Tiredness, cold intolerance, weight gain and a slow pulse",
        ],
        correctIndex: 0,
        explanation:
          "DKA develops over hours to days: the body burns fat, glucose and water pour out, breathing turns deep and sighing (Kussmaul) with a fruity smell, and the patient dehydrates and drowses. The other options describe hypoglycaemia and thyroid disease.",
        courseSlug: "medical-surgical-nursing-1",
      },
      {
        topic: "Endocrine",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Name the classic triad of symptoms at first presentation of diabetes.",
        options: [
          "Thirst, frequent urination and unexplained weight loss",
          "Palpitations, heat intolerance and increased appetite",
          "Constipation, dry skin and cold intolerance",
          "Joint pains, morning stiffness and fever",
        ],
        correctIndex: 0,
        explanation:
          "High glucose drags water out through the kidneys: thirst and polyuria, with weight loss as calories leak into urine. Heat intolerance with appetite points to hyperthyroidism, and cold intolerance with dry skin to hypothyroidism.",
        courseSlug: "medical-surgical-nursing-1",
      },
    ],
    flashcards: [
      {
        topic: "Diabetes",
        front: "State the 15/15 rule for hypoglycaemia.",
        back: "Give 15 g of fast-acting sugar, wait 15 minutes, recheck — then follow with a starch-and-protein meal if the patient can swallow.",
      },
      {
        topic: "Endocrine",
        front: "How do hypothyroidism and hyperthyroidism change the body's speed?",
        back: "Hypothyroid slows everything: fatigue, cold, weight gain, constipation, slow pulse. Hyperthyroid races it: heat intolerance, sweating, weight loss, palpitations, tremor.",
      },
      {
        topic: "Diabetes",
        front: "Which emergency kills in minutes and which builds over days?",
        back: "Hypoglycaemia kills in minutes — treat with fast sugar immediately. DKA builds over hours to days — deep breathing, dehydration, very high glucose.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Diabetes (fact sheet)",
        year: "2023",
        url: "https://www.who.int/news-room/fact-sheets/detail/diabetes",
        note: "Fact sheet — check for the latest update.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Porth's Pathophysiology: Concepts of Altered Health States",
        year: "2018 (10th edition)",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Potter and Perry's Fundamentals of Nursing",
        year: "2020 (10th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-1",
    moduleTitle: "System-by-System Nursing II",
    lessonTitle: "Neurological Disorders: The Disrupted Network",
    description:
      "Stroke cuts the wiring, seizures short-circuit it, meningitis sets it on fire — the emergencies of the nervous system and the nursing that protects the brain.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Use FAST to recognise stroke and explain why minutes matter.",
      "Provide safe first-aid care during and after a seizure.",
      "Recognise meningitis and respond within Ghana's meningitis-belt season.",
    ],
    tags: ["neurological", "stroke", "seizures", "meningitis", "emergency"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The brain is the body's network: stroke cuts its wires, a seizure short-circuits them, meningitis sets them on fire. In each case, speed and calm nursing decide how much of the person survives the event.\n\nThis lesson walks the three you are most likely to meet — and in Ghana, meningitis in the dry season is one you cannot afford to miss.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Stroke** happens when a clot or a bleed cuts blood flow to part of the brain — suddenly and often painlessly. Recognise it with **FAST**: Face drooping, Arm weakness, Speech slurred, Time to refer. Minutes cost neurons. After urgent referral, nursing protects: keep the patient nil by mouth until swallowing has been formally checked — silent aspiration today becomes pneumonia tomorrow — and begin gentle position changes and patient communication early.\n\nDuring a **seizure**: protect, do not restrain. Clear hazards, cushion the head, time the seizure from the start, and never force anything into the mouth. After it ends, roll the patient into the recovery position and stay until fully alert. A seizure lasting beyond five minutes, or repeated seizures without waking in between, is status epilepticus — an emergency. **Meningitis** inflames the coverings of the brain: fever, severe headache, neck stiffness, light hurting the eyes, vomiting, later confusion. Ghana's northern belt sees surges in the dry, dusty harmattan months; it spreads by droplets — wear a mask for close care — and early hospital antibiotics save lives, with close contacts sometimes needing preventive treatment.",
      },
      {
        type: "clinical_pearl",
        body: "After a stroke, nothing by mouth — not water, not porridge, not tablets crushed in tea — until someone has formally checked swallowing. The weakest swallow can silently drop fluid straight into the lungs.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "During harmattan, a 20-year-old man walks into your CHPS compound with three days of fever, and now a severe headache, a stiff neck that will not bend, and vomiting; he says light hurts his eyes. What do you suspect, and what are your next steps?\n\nAnswer: Fever with severe headache, neck stiffness and photophobia during the dry season is meningitis until excluded — treat it as an emergency. Put a mask on him and yourself, alert the doctor and district disease control officer, and arrange urgent referral to hospital, where confirmation and antibiotics happen; record vital signs on the referral note. As a suspected meningitis case, it is also an immediate IDSR notification, so the district can act before more cases arrive.",
      },
      {
        type: "memory_trick",
        body: "FAST for stroke: Face drooping, Arm weak, Speech slurred, Time to refer. For seizures: Time it, Cushion, Clear the space, never Cram the mouth, roll to the side After.",
      },
      {
        type: "summary",
        body: "- Stroke is sudden: FAST — face, arm, speech, time. Refer immediately; nothing by mouth until swallowing is formally checked.\n- During seizures: protect and time, never restrain or force objects into the mouth; recovery position after.\n- Seizures over five minutes, or repeated without waking, are status epilepticus — an emergency.\n- Fever with headache, neck stiffness and photophobia in the dry season is meningitis — mask, refer, notify.",
      },
    ],
    questions: [
      {
        topic: "Neurological",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What does the FAST screen for stroke stand for?",
        options: [
          "Face drooping, Arm weakness, Speech slurred, Time to refer",
          "Fever, Anaemia, Swelling, Tenderness",
          "Full blood count, Assess glucose, Scan head, Transport",
          "Family history, Age, Smoking, Trauma",
        ],
        correctIndex: 0,
        explanation:
          "FAST is the bedside stroke screen: facial droop, arm weakness, slurred speech and the urgency of time — every minute of delay costs brain tissue. The distractors mix risk factors and investigations, which are not part of the screen.",
        courseSlug: "medical-surgical-nursing-1",
      },
      {
        topic: "Neurological",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient on your ward begins to convulse. Which action is correct?",
        options: [
          "Hold his limbs firmly to stop the jerking",
          "Force a spoon between his teeth to protect the tongue",
          "Time the seizure, clear hazards, cushion the head, and roll him to the recovery position after it ends",
          "Give him water immediately when the jerking slows",
        ],
        correctIndex: 2,
        explanation:
          "Safe seizure care protects without restraining: time it, clear the area, cushion the head, and after it ends use the recovery position until he is fully alert. Forcing objects into the mouth breaks teeth and blocks the airway, and fluids during drowsiness risk aspiration.",
        courseSlug: "medical-surgical-nursing-1",
      },
      {
        topic: "Neurological",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In Ghana, a cluster of fever with severe headache and neck stiffness is most expected in which setting, and what is the priority response?",
        options: [
          "During the dry harmattan months, especially in the northern belt — mask, refer urgently and notify as suspected meningitis",
          "Only during the rainy season in southern coastal towns — isolate and treat with antimalarials alone",
          "Any season, but only in children — observe for 24 hours before referring",
          "After flooding, and only if there is a rash — otherwise treat as simple malaria",
        ],
        correctIndex: 0,
        explanation:
          "Meningitis surges in Ghana's northern belt during the dry season, and suspected cases need droplet protection, urgent referral and immediate IDSR notification. Delaying for a rash, treating as malaria alone, or observing for a day can cost the patient's life.",
        courseSlug: "medical-surgical-nursing-1",
      },
    ],
    flashcards: [
      {
        topic: "Stroke",
        front: "What does FAST stand for, and what is the response?",
        back: "Face drooping, Arm weakness, Speech slurred, Time to refer — suspect stroke, activate urgent transfer, and keep the patient nil by mouth until swallow is checked.",
      },
      {
        topic: "Seizures",
        front: "State the rules of seizure first aid.",
        back: "Time it, clear hazards, cushion the head, never restrain and never force anything into the mouth; afterwards, recovery position and stay until fully alert. Over five minutes or repeated seizures = status epilepticus.",
      },
      {
        topic: "Meningitis",
        front: "Which constellation, in which season, raises meningitis in Ghana?",
        back: "Fever with severe headache, neck stiffness and photophobia — classically in the dry harmattan months, especially in the northern belt. Mask, refer urgently, notify.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Stroke (fact sheet)",
        year: "2023",
        url: "https://www.who.int/news-room/fact-sheets/detail/stroke",
        note: "Fact sheet — check for the latest update.",
      },
      {
        organization: "WHO",
        title: "Epilepsy (fact sheet)",
        url: "https://www.who.int/news-room/fact-sheets/detail/epilepsy",
        note: "Fact sheet — check for the latest update.",
      },
      {
        organization: "WHO Regional Office for Africa",
        title: "Technical Guidelines for Integrated Disease Surveillance and Response in the African Region",
        year: "2019",
        note: "Includes meningitis-belt reporting requirements.",
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-1",
    moduleTitle: "System-by-System Nursing II",
    lessonTitle: "Perioperative Principles: Before, During and After",
    description:
      "Surgery is a journey with three legs — before, during and after theatre — and nurses guard the road at every one. From fasting to the WHO checklist to the first hour back in recovery.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Prepare a patient safely for theatre: consent, fasting and baseline checks.",
      "Describe the three phases of the WHO Surgical Safety Checklist.",
      "Prioritise post-operative assessment using ABC and recognise early haemorrhage.",
    ],
    tags: ["perioperative", "surgery", "checklist", "recovery", "postoperative"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "An operation is not an event; it is a journey with three legs — before, during and after theatre — and a nurse guards the road at each one. Most perioperative disasters are not dramatic failures of surgery; they are small omissions at the borders between stages.\n\nThis lesson walks the whole journey: preparation, the theatre checklist, and the hour that decides recovery.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Before**: informed consent — the patient understands the procedure, its benefits, risks and alternatives, and signs before any premedication. Fasting: typically six hours for food and two hours for clear fluids, so an empty stomach protects the lungs from aspiration under anaesthesia. Check allergies, remove jewellery and nail polish (pulse oximetry needs clean light), mark and confirm the surgical site, have the patient void, and record baseline vitals. **During**, the team runs the WHO Surgical Safety Checklist in three phases: Sign In before anaesthesia — identity, site, consent, allergies; Time Out before incision — the whole team stops and confirms patient, procedure and site; Sign Out before leaving theatre — instrument and swab counts, specimen labelling, and the recovery plan.\n\n**After**: airway first — drowsy patients obstruct. Then breathing and circulation, with vitals per protocol, often every 15 minutes in the first hour. Assess the wound, drains and pads, score pain, and warm the shivering patient. Rising pulse with falling blood pressure after surgery is bleeding until proven otherwise. Early mobilisation and fluids prevent clots and chest complications, and on discharge teach the danger signs: fever, spreading redness, wound opening, heavy bleeding — come straight back.",
      },
      {
        type: "clinical_pearl",
        body: "The first hour back from theatre decides the shift: airway, breathing, circulation and bleeding come before any paperwork. A rising pulse with a falling blood pressure is haemorrhage until proven otherwise.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman returns to the ward 30 minutes after emergency caesarean section. She is drowsy and pale, her pulse is 118 per minute, blood pressure 88/56 mmHg, and her pad is soaking faster than at the previous check. The student caring for her is carefully completing the theatre checklist paperwork. What actually comes first?\n\nAnswer: Airway, breathing, circulation — and bleeding. This is postpartum haemorrhage until excluded: shout for help, ensure her airway is open, give oxygen if prescribed, check fundal tone and pads, keep her warm with legs elevated as trained, monitor vitals every 15 minutes, and call the doctor immediately for IV fluids and further treatment. The paperwork will still be there in an hour; the blood will not.",
      },
      {
        type: "memory_trick",
        body: "The checklist bookends theatre: SIGN IN before they sleep, TIME OUT before they cut, SIGN OUT before they leave. And in recovery: airway before wound, every time.",
      },
      {
        type: "summary",
        body: "- Pre-op: informed consent signed early, fasting about 6 hours food and 2 hours clear fluids, site marking, allergy check, baseline vitals.\n- WHO Surgical Safety Checklist: Sign In, Time Out, Sign Out — the whole team speaks at each phase.\n- Recovery: airway first, then vitals, wound, drains, pain and temperature — reassess, never assume.\n- Rising pulse plus falling blood pressure after surgery = bleeding until proven otherwise.",
      },
    ],
    questions: [
      {
        topic: "Perioperative",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why is a patient fasted before general anaesthesia?",
        options: [
          "To make the surgeon's access to the abdomen easier",
          "Because anaesthetic drugs always cause vomiting afterwards",
          "To guarantee an empty bladder during surgery",
          "To reduce the risk of regurgitated stomach contents entering the lungs during anaesthesia",
        ],
        correctIndex: 3,
        explanation:
          "Anaesthesia suppresses the reflexes that normally protect the airway, so a full stomach risks aspiration of acidic contents into the lungs — a potentially fatal complication. An empty bladder matters too, but it is managed by having the patient void, not by fasting.",
        courseSlug: "medical-surgical-nursing-1",
      },
      {
        topic: "Perioperative",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During the WHO Surgical Safety Checklist, when does the 'Time Out' happen and what does the team do?",
        options: [
          "Just before the skin incision — the whole team stops and confirms patient, procedure and site",
          "Before anaesthesia, checking identity and allergies",
          "In recovery, confirming the swab counts",
          "At discharge, agreeing the follow-up plan",
        ],
        correctIndex: 0,
        explanation:
          "Time Out is the pause immediately before incision, when every member of the team — surgeons, anaesthetist, nurses — stops and verbally confirms the patient, procedure and site. Identity and allergy checks are the Sign In before anaesthesia; counts and recovery plans belong to the Sign Out.",
        courseSlug: "medical-surgical-nursing-1",
      },
      {
        topic: "Perioperative",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "One hour after surgery, a patient's pulse has risen from 80 to 118 and blood pressure has fallen from 120/80 to 88/56. What is the interpretation and priority?",
        options: [
          "Expected pain response — give analgesia and reassess in four hours",
          "Normal recovery pattern after anaesthesia",
          "Anxiety — reassure the patient and dim the lights",
          "Haemorrhage until proven otherwise — call for help, reassess ABC, check the wound, drains and pads",
        ],
        correctIndex: 3,
        explanation:
          "Rising pulse with falling blood pressure early after surgery is the classic pattern of internal or external bleeding, and it demands immediate escalation and a search for the source — wound, drain, pad or hidden loss. Pain can raise pulse, but not with falling pressure, and no pattern here is 'normal'.",
        courseSlug: "medical-surgical-nursing-1",
      },
    ],
    flashcards: [
      {
        topic: "Perioperative",
        front: "State the typical pre-operative fasting times and their purpose.",
        back: "About 6 hours for food and 2 hours for clear fluids — so an empty stomach cannot regurgitate into the lungs when anaesthesia suppresses airway reflexes.",
      },
      {
        topic: "Perioperative",
        front: "Name the three phases of the WHO Surgical Safety Checklist.",
        back: "Sign In (before anaesthesia), Time Out (before incision), Sign Out (before leaving theatre).",
      },
      {
        topic: "Post-operative",
        front: "Post-op pulse 118 and BP 88/56 — what must you assume and do?",
        back: "Bleeding until proven otherwise: call for help, reassess ABC, check wound, drains and pads, monitor vitals every 15 minutes, and prepare for fluids.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "WHO Surgical Safety Checklist",
        year: "2009",
        url: "https://www.who.int/teams/integrated-health-services/patient-safety/policy/surgical-safety-checklist",
      },
      {
        organization: "WHO",
        title: "Global Guidelines for the Prevention of Surgical Site Infection",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549882",
      },
      {
        organization: "Ghana Health Service",
        title: "National Infection Prevention and Control Policy and Guidelines",
        year: "2015",
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    courseSlug: "pathology-1",
    moduleTitle: "Cell Injury and Death",
    lessonTitle: "What Injures a Cell?",
    description:
      "Cells are tough workers with limits. Pathology begins with one question — what pushed this cell past its edge? — and in Ghana you already know most of the answers by name.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Group the causes of cell injury: hypoxia, infection, physical, chemical, immune, nutritional and genetic.",
      "Explain why the brain is the least forgiving organ in hypoxia.",
      "Link everyday Ghanaian conditions — anaemia, malaria, sickle cell — to the cell injury they cause.",
    ],
    tags: ["cell injury", "hypoxia", "pathology", "sickle cell", "malaria"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every disease you will ever nurse begins smaller than the eye can see — with a cell pushed past its limits. Cells are remarkably tough, but they have a handful of predictable weaknesses.\n\nThe good news: the list of things that injure them is short, and most of them are conditions you already meet daily on a Ghanaian ward. Master the list and pathology stops being an abstract subject and becomes something you can see at the bedside.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The master cause is **hypoxia** — cells starved of oxygen. It arrives by several roads: a blocked vessel (ischaemia), too little oxygen carried in the blood — severe anaemia, from malaria or chronic blood loss — or poisoning of the cell's oxygen machinery. The brain forgives least: neurons begin to die within about four minutes of total oxygen loss, and heart muscle is nearly as unforgiving. Next comes **infection and infestation** — germs injure directly, like malaria parasites bursting red cells, or through their toxins. **Physical** agents: trauma, burns, heat, cold, radiation. **Chemical** agents: drugs in overdose, alcohol, heavy metals, snake venom, smoke.\n\nThen **immunologic** injury — the body's own defenders attacking its tissue, as when the immune response to a streptococcal sore throat cross-fires onto heart valves and scars them years later. **Nutritional** deficiency starves cells of building blocks — protein, iron, vitamins. And **genetic** faults write wrong instructions: in sickle cell disease, a single amino acid swap makes haemoglobin stiff whenever oxygen is low, so red cells sickle, clog tiny vessels and starve every cell downstream. The outcome always depends on the cause, its duration and severity, and the type and nutrition of the cell under attack.",
      },
      {
        type: "clinical_pearl",
        body: "On a Ghanaian ward, the everyday answers to 'why are these cells dying?' are anaemia, malaria and shock — not exotic syndromes. Manage those three well and you prevent most of the cell death you will ever see.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A young man with sickle cell disease is admitted with severe back and limb pain following a feverish illness; the painful areas are warm and swollen, and his haemoglobin has dropped. In cell terms, what is injuring his tissues, and by which route?\n\nAnswer: His haemoglobin has sickled — stiffened red cells are clogging the small vessels, so this is vaso-occlusion. Cells downstream of each blockage are being injured by ischaemia: hypoxia plus the buildup of waste. The fever and dehydration that triggered the crisis worsened the sickling, so care aims at fluids, pain relief, warmth and treating the trigger, while oxygen is given if prescribed — the injured cells are the innocent bystanders downstream of blocked vessels.",
      },
      {
        type: "memory_trick",
        body: "Cells get hurt in ways you can spell: HIPPIN G — Hypoxia, Infection, Physical, Poisons (chemicals), Immune, Nutrition, Genetics.",
      },
      {
        type: "summary",
        body: "- Hypoxia is the master cause — from blocked vessels, low blood oxygen, or too few carriers in anaemia.\n- Neurons die within about four minutes of oxygen loss: the brain is the least forgiving organ.\n- Infection, physical and chemical agents, immune cross-fire, malnutrition and genetic faults complete the list.\n- Sickle cell injures by blockage: sickled cells clog vessels and starve everything downstream.",
      },
    ],
    questions: [
      {
        topic: "Cell Injury",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which cells are most vulnerable to injury within minutes of oxygen loss?",
        options: [
          "Epithelial cells of the skin",
          "Neurons of the brain",
          "Red blood cells",
          "Liver cells",
        ],
        correctIndex: 1,
        explanation:
          "Neurons begin irreversible injury within roughly four minutes of complete oxygen deprivation, making the brain the least forgiving organ. Skin, liver and bone marrow cells tolerate far longer insults and can often regenerate.",
        courseSlug: "pathology-1",
      },
      {
        topic: "Cell Injury",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman with severe chronic hookworm anaemia feels breathless and exhausted. By which route is her tissue being injured?",
        options: [
          "Direct chemical poisoning of cells by worm toxin",
          "Ischaemia from blocked blood vessels",
          "Hypoxia from too few oxygen carriers in the blood",
          "Autoimmune destruction of red cells",
        ],
        correctIndex: 2,
        explanation:
          "In severe anaemia the blood carries too little haemoglobin, so tissues receive inadequate oxygen despite normal vessels and blood flow — hypoxia by reduced oxygen-carrying capacity. Hookworm injures mainly by chronic blood loss, not by direct chemical poisoning or autoimmunity.",
        courseSlug: "pathology-1",
      },
      {
        topic: "Cell Injury",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In sickle cell crisis, which mechanism directly injures the tissues beyond the painful site?",
        options: [
          "Bacteria invade and burst the red cells directly",
          "Antibodies attack nerve endings in the limbs",
          "Sickled red cells block small vessels, starving downstream cells of oxygen",
          "Excess iron deposits poison the bone marrow",
        ],
        correctIndex: 2,
        explanation:
          "The core injury is vaso-occlusion: stiff sickled cells jam capillaries, producing ischaemic, hypoxic injury downstream — the source of the pain and swelling. It is a genetic and ischaemic problem, not an infectious or immune-mediated one in the crisis itself.",
        courseSlug: "pathology-1",
      },
    ],
    flashcards: [
      {
        topic: "Cell Injury",
        front: "List the seven causes of cell injury in the HIPPIN G framework.",
        back: "Hypoxia, Infection, Physical agents, Poisons (chemicals), Immunologic injury, Nutritional deficiency, Genetic defects.",
      },
      {
        topic: "Cell Injury",
        front: "How long can neurons survive total oxygen loss?",
        back: "About four minutes — the brain is the most oxygen-sensitive organ, which is why airway and breathing come first in every emergency.",
      },
      {
        topic: "Cell Injury",
        front: "How does sickle cell disease injure tissue in a crisis?",
        back: "Low oxygen stiffens the abnormal haemoglobin; sickled red cells clog small vessels (vaso-occlusion), causing ischaemic injury in every cell downstream.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Robbins Basic Pathology",
        year: "2018 (10th edition)",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Porth's Pathophysiology: Concepts of Altered Health States",
        year: "2018 (10th edition)",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "WHO",
        title: "Sickle Cell Anaemia (fact sheet)",
        url: "https://www.who.int/news-room/fact-sheets/detail/sickle-cell-disease",
        note: "Fact sheet — check for the latest update.",
      },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────
  {
    courseSlug: "pathology-1",
    moduleTitle: "Cell Injury and Death",
    lessonTitle: "Reversible and Irreversible Cell Injury",
    description:
      "A squeezed cell adapts, a starved cell swells, a doomed cell bursts its membranes. Learn the point of no return — and why troponin tells the heart's story.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Define atrophy, hypertrophy, hyperplasia and metaplasia with an example each.",
      "Distinguish reversible injury from the point of no return.",
      "Differentiate necrosis from apoptosis and name the main necrosis patterns.",
    ],
    tags: ["adaptation", "necrosis", "apoptosis", "cell injury", "pathology"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A cell under stress has three exits: adapt, get injured and recover, or die. Much of pathology — and much of bedside medicine — is knowing which exit a cell has taken, because treatment differs completely at each stage.\n\nIn this lesson you will learn the four adaptations, the reversible changes, the moment of no return, and the two very different ways a cell dies.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "First, cells **adapt**. Atrophy — they shrink with disuse, like leg muscles thinned by weeks in bed. Hypertrophy — they grow bigger, like the heart wall pushing against high blood pressure, or the uterine muscle in pregnancy. Hyperplasia — they multiply in number, as liver cells regrow after injury and breast tissue builds in pregnancy. Metaplasia — one hardy cell type swaps in for a fragile one, as smoking replaces the airway's ciliated lining with tough squamous cells: protective in the short term, but the cilia are gone and cancer risk rises.\n\n**Reversible injury** shows as cell swelling — the sodium pump fails and water floods in — and fatty change in the liver. Remove the cause early enough and the cell recovers fully. **Irreversible injury** is the point of no return: membranes rupture, mitochondria die, and enzymes leak into the blood — troponin from dead heart muscle is the diagnosis of a heart attack. Necrosis is messy, always pathological cell death with inflammation. Its patterns: coagulative, where the framework keeps its shape (heart, kidney); liquefactive, which melts (brain, abscess); caseous, which crumbles like cheese (tuberculosis); and fat necrosis of the pancreas. **Apoptosis** is the other death: programmed, tidy, membrane intact, no inflammation — it is how the body sheds the whole endometrium each month and deletes faulty cells silently.",
      },
      {
        type: "clinical_pearl",
        body: "A raised troponin is not a lab curiosity — it is myocardium announcing that some of its cells have passed the point of no return. Minutes and hours now decide how many more join them.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 52-year-old man reaches the district hospital six hours after crushing chest pain. His ECG shows changes and troponin is markedly raised; the doctor activates the acute coronary pathway. In cell terms, what has happened in his heart, and why does time still matter?\n\nAnswer: Myocardial cells starved of blood have undergone irreversible injury — membranes ruptured and enzymes such as troponin leaked out, which is what the test detects. But cells at the outer edge of the starved territory are still salvageable, so restoring blood flow quickly decides how much muscle survives. That is why the next minutes of transfer and treatment matter as much as the six hours already lost.",
      },
      {
        type: "memory_trick",
        body: "Necrosis patterns: Coagulative Keeps its frame (heart, kidney); Liquefactive Leaks away (brain, abscess); Caseous Crumbles like cheese (TB); Fat necrosis Fancies the pancreas.",
      },
      {
        type: "summary",
        body: "- Adaptations: atrophy shrinks, hypertrophy enlarges, hyperplasia multiplies, metaplasia swaps cell type.\n- Reversible injury is swelling and fatty change — remove the cause in time and the cell recovers.\n- Irreversible injury: membranes rupture and enzymes leak — troponin in myocardial infarction.\n- Necrosis is messy and always pathological; apoptosis is tidy, programmed and useful — like monthly shedding of the endometrium.",
      },
    ],
    questions: [
      {
        topic: "Cell Injury",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient's blood troponin is markedly raised six hours after chest pain. What does this tell you at cell level?",
        options: [
          "His myocardial cells have adapted by hypertrophy",
          "Cardiac cell membranes have ruptured — irreversible injury has occurred",
          "His myocardial cells are reversibly swollen and will recover fully",
          "Apoptosis has tidily removed a few faulty cells without leakage",
        ],
        correctIndex: 1,
        explanation:
          "Troponin escapes only when cardiac cell membranes fail — the marker of irreversible injury and cell death. Reversible swelling keeps enzymes inside, adaptation does not release them, and apoptosis disposes of contents tidily without a troponin spike.",
        courseSlug: "pathology-1",
      },
      {
        topic: "Cell Death",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which statement best distinguishes apoptosis from necrosis?",
        options: [
          "Apoptosis is messy, triggers inflammation, and is always pathological",
          "Necrosis is programmed, tidy, and lacks inflammation",
          "Apoptosis is programmed and tidy with intact membranes; necrosis is messy, membrane-ruptured and inflamed",
          "They are identical processes differing only in speed",
        ],
        correctIndex: 2,
        explanation:
          "Apoptosis is planned cell suicide: the cell packages itself neatly, membranes stay intact, and there is no inflammatory response — useful for remodelling and turnover. Necrosis bursts, leaks and calls in inflammation; it is always pathological.",
        courseSlug: "pathology-1",
      },
      {
        topic: "Adaptation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A long-term smoker's airway lining changes from ciliated columnar cells to tough squamous cells. Which adaptation is this, and what is the cost?",
        options: [
          "Hypertrophy — the cells work harder but stay the same type",
          "Hyperplasia — the same cells simply increase in number",
          "Atrophy — the lining thins from disuse",
          "Metaplasia — a tougher cell type replaces the fragile one, but cilia are lost and cancer risk rises",
        ],
        correctIndex: 3,
        explanation:
          "Metaplasia swaps one mature cell type for another better able to survive the irritation — but the replacement squamous cells lack cilia, so mucus and dirt accumulate, and the changed tissue carries a raised risk of turning malignant.",
        courseSlug: "pathology-1",
      },
    ],
    flashcards: [
      {
        topic: "Adaptation",
        front: "Define the four cell adaptations with one example each.",
        back: "Atrophy — shrinking with disuse (bed-rest muscles); hypertrophy — enlargement (heart wall in hypertension, uterus in pregnancy); hyperplasia — more cells (liver regrowth); metaplasia — cell-type swap (smoker's airway).",
      },
      {
        topic: "Cell Death",
        front: "Necrosis versus apoptosis — the two-line difference?",
        back: "Necrosis: messy, membrane rupture, inflammation, always pathological. Apoptosis: programmed, tidy, membranes intact, no inflammation — often useful.",
      },
      {
        topic: "Necrosis",
        front: "Match the necrosis patterns: coagulative, liquefactive, caseous — where does each occur?",
        back: "Coagulative preserves architecture — heart, kidney. Liquefactive melts — brain, abscess. Caseous crumbles like cheese — tuberculosis. Fat necrosis affects the pancreas.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Robbins Basic Pathology",
        year: "2018 (10th edition)",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Porth's Pathophysiology: Concepts of Altered Health States",
        year: "2018 (10th edition)",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
        note: "Free, peer-reviewed textbook — educational source.",
      },
    ],
  },

  // ── 14 ─────────────────────────────────────────────────────
  {
    courseSlug: "pathology-1",
    moduleTitle: "Inflammation, Infection and Healing",
    lessonTitle: "The Pathology of Inflammation",
    description:
      "Beneath every hot, swollen wound runs a scripted drama — vessels open, fluid pours, cells march. Once you know the sequence, the bedside signs stop being a mystery.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Sequence the vascular and cellular events of acute inflammation.",
      "Name the key mediators — histamine, bradykinin, prostaglandins — and their effects.",
      "Describe the possible outcomes of acute inflammation.",
    ],
    tags: ["inflammation", "mediators", "phagocytosis", "exudate", "pathology"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "You already know the signs of inflammation — red, hot, swollen, painful. This lesson opens the skin and shows you the machinery underneath: a scripted sequence of vessel changes and marching cells that has barely changed across millions of years.\n\nOnce you can narrate the sequence, you can also explain to a patient why her wound hurts, why the doctor chose that drug, and what to watch for as the days pass.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The vascular act: a moment of vessel constriction, then **histamine** dilates the small vessels — blood floods in, making the part red and hot. The vessel walls open gaps and become leaky, and protein-rich fluid — **exudate** — pours into the tissue, producing swelling. Flow slows, which is not a failure but a strategy: it lets white cells take position. The cellular act: neutrophils drift to the vessel wall (margination), squeeze between the lining cells out into the tissue (emigration), follow the chemical scent trail of the injury (chemotaxis), and then engulf and kill the intruders — phagocytosis. Much of what you see as pus is fallen neutrophils mixed with tissue debris and fluid.\n\nThe supporting cast of mediators: histamine acts first and fades fast; **bradykinin** generates pain and adds to the leak; **prostaglandins** sustain pain and set fever — which is exactly why aspirin and NSAIDs, which block prostaglandin production, calm both. Outcomes of the drama: resolution — tissue restored, the best ending; suppuration — pus walled off in an abscess that usually needs drainage; organisation — repair by fibrous scar tissue; and, if the irritant refuses to leave, progression to chronic inflammation.",
      },
      {
        type: "clinical_pearl",
        body: "NSAIDs do not magically 'fight' pain — they pull the plug on prostaglandin production at the source. The same chemistry lowers fever, because prostaglandins set the hypothalamic thermostat.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A surgical wound at 24 hours is red, hot, swollen and tender, with a little cloudy discharge at one end. Your student asks what is actually happening beneath the dressing. What do you tell her?\n\nAnswer: Vasodilation has brought warm blood — the redness and heat; leaky vessels have poured exudate into the tissue — the swelling; and bradykinin and prostaglandins are firing nerve endings — the pain. Neutrophils are lining the vessel walls, emigrating and engulfing germs and debris; the cloudiness is partly their fallen comrades. This is acute inflammation doing its job — your task is to watch the trend toward resolution rather than spreading redness or a gathering abscess, and to report which way it is heading.",
      },
      {
        type: "memory_trick",
        body: "The inflammatory parade has five beats: Dilate, Leak, Line the wall, Squeeze out, Eat. If you can march to it, you can narrate any swollen wound.",
      },
      {
        type: "summary",
        body: "- Vascular events: brief constriction, histamine-driven vasodilation, leaky walls, exudate — redness, heat, swelling.\n- Cellular events: margination, emigration, chemotaxis, phagocytosis — neutrophils lead the parade.\n- Mediators: histamine starts it, bradykinin pains it, prostaglandins sustain pain and fever — the NSAID target.\n- Outcomes: resolution, abscess (drain it), organisation into scar — or chronic inflammation if the cause stays.",
      },
    ],
    questions: [
      {
        topic: "Inflammation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which mediator acts first in acute inflammation, and what does it do to small vessels?",
        options: [
          "Prostaglandins — they constrict vessels for hours",
          "Histamine — it dilates vessels and makes their walls leaky",
          "Bradykinin — it kills bacteria directly",
          "Complement — it causes vessel spasm only",
        ],
        correctIndex: 1,
        explanation:
          "Histamine is released within minutes from injured cells and mast cells, dilating arterioles and opening gaps between vessel lining cells — the redness, heat and exudate of the first hours. Prostaglandins and bradykinin join later; neither is bactericidal.",
        courseSlug: "pathology-1",
      },
      {
        topic: "Inflammation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is pus mainly made of?",
        options: [
          "Pure bacteria suspended in plasma",
          "Fibrin clots and red blood cells only",
          "Lymphocytes undergoing apoptosis",
          "Dead neutrophils mixed with tissue debris and fluid",
        ],
        correctIndex: 3,
        explanation:
          "Pus is the aftermath of the neutrophil charge: fallen white cells, liquefied tissue debris and exudate — with bacteria present but not the main mass. Red cell clot and lymphocyte apoptosis describe other processes.",
        courseSlug: "pathology-1",
      },
      {
        topic: "Inflammation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why do NSAIDs such as ibuprofen relieve both the pain and the fever of inflammation?",
        options: [
          "They destroy histamine within minutes of release",
          "They block prostaglandin production, removing both pain-signalling and thermostat-setting chemicals",
          "They kill the bacteria causing the inflammation",
          "They constrict vessels, reducing swelling directly",
        ],
        correctIndex: 1,
        explanation:
          "By inhibiting the cyclo-oxygenase pathway, NSAIDs stop prostaglandin synthesis — removing a key pain mediator and the chemical that raises the hypothalamic set point in fever. They are neither antibiotics nor direct vasoconstrictors, and they do not affect histamine.",
        courseSlug: "pathology-1",
      },
    ],
    flashcards: [
      {
        topic: "Inflammation",
        front: "Sequence the five beats of the inflammatory parade.",
        back: "Dilate, Leak, Line the wall (margination), Squeeze out (emigration), Eat (phagocytosis).",
      },
      {
        topic: "Inflammation",
        front: "What is pus, in pathology terms?",
        back: "Dead neutrophils mixed with liquefied tissue debris and protein-rich exudate — the residue of phagocytosis.",
      },
      {
        topic: "Mediators",
        front: "What do histamine, bradykinin and prostaglandins each contribute?",
        back: "Histamine: early vasodilation and leak. Bradykinin: pain and more leak. Prostaglandins: sustained pain and fever — the target of NSAIDs.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Robbins Basic Pathology",
        year: "2018 (10th edition)",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Porth's Pathophysiology: Concepts of Altered Health States",
        year: "2018 (10th edition)",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Potter and Perry's Fundamentals of Nursing",
        year: "2020 (10th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 15 ─────────────────────────────────────────────────────
  {
    courseSlug: "pathology-1",
    moduleTitle: "Inflammation, Infection and Healing",
    lessonTitle: "How Infection Causes Disease",
    description:
      "Meeting a germ is everyday; disease is the exception. What tips the balance is virulence — and toxins that can flood a gut without destroying a single cell.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Define pathogenicity and virulence, and distinguish exotoxins from endotoxins.",
      "Sequence the five stages of an infectious disease.",
      "Explain how cholera causes disease without destroying the bowel wall.",
    ],
    tags: ["pathogenesis", "virulence", "toxins", "infection stages", "cholera"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "You learned in microbiology what germs are. This lesson is about what they do to people — the bridge between the laboratory stool culture and the dehydrated patient on the ward.\n\nTwo questions organise everything: why does this germ make people sick at all, and why does this patient have these particular symptoms? The answers — virulence and damage mechanism — turn a vague 'infection' into a story you can act on.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Plenty of germs live on us harmlessly; to cause disease an organism needs **pathogenicity** — the ability to cause disease at all — and **virulence**, how severely it does it. Germs harm in three ways. Direct invasion: malaria parasites bursting red cells. **Exotoxins**: powerful proteins secreted mainly by Gram-positive organisms, each targeting specific tissues — tetanus toxin locks muscles into spasm; cholera toxin floods the gut. **Endotoxin** is different: it is part of the Gram-negative cell wall, released only when those bacteria die, and it drives fever, widespread vasodilation and septic shock — one reason Gram-negative infections can crash circulation so hard.\n\nAn infectious disease runs a five-stage course. **Incubation**: silent multiplication, the patient well and spreading. **Prodromal**: vague malaise — 'something is coming'. **Illness**: the full picture, usually the most infectious stage. **Decline**: defences and treatment win, fever breaks — careful, this is when dehydration and complications can strike. **Convalescence**: strength rebuilds. Some patients carry and spread the organism through all of it — the well-looking visitor may be the reservoir, which is one more reason your hand hygiene protects everyone, not just the obviously sick.",
      },
      {
        type: "clinical_pearl",
        body: "Cholera teaches the trick of toxins: the organism barely damages the bowel wall — its toxin simply flips a switch that pours litres of water into the gut. Rehydration saves more lives than the antibiotic does.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "During a cholera alert, a man arrives at your district hospital with profuse painless watery diarrhoea that looks like rice water; his eyes are sunken and his pulse is thin and fast. How does the organism cause this without destroying his bowel, and which treatment leads?\n\nAnswer: Vibrio cholerae's exotoxin hijacks the gut cells' own machinery, switching them into pouring water and salt into the lumen — the bowel wall stays intact while the patient drains. The leading treatment is aggressive rehydration: ORS taken in continuous small sips if he can drink, IV fluids if he cannot, with antibiotics reserved for shortening illness in selected patients. And as a suspected cholera case under IDSR, immediate notification is part of the care, not an afterthought.",
      },
      {
        type: "memory_trick",
        body: "The course of an infection: it Incubates Quietly, the Prodrome Whispers, Illness Shouts, the Decline Sweats, and Convalescence Rebuilds.",
      },
      {
        type: "summary",
        body: "- Pathogenicity is the ability to cause disease; virulence is how severely.\n- Exotoxins are secreted and tissue-specific (tetanus, cholera); endotoxin sits in Gram-negative walls and drives shock when they die.\n- Five stages: incubation, prodromal, illness, decline, convalescence — spread is widest around illness, but carriers transmit silently.\n- Cholera is a flood, not a destruction — rehydration leads, notification follows.",
      },
    ],
    questions: [
      {
        topic: "Pathogenesis",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which statement correctly distinguishes endotoxin from exotoxin?",
        options: [
          "Endotoxin is secreted by Gram-positive organisms and targets specific tissues",
          "Exotoxin is part of the Gram-negative cell wall and is released only at bacterial death",
          "Endotoxin is part of the Gram-negative cell wall, released when the bacteria die, and drives fever and shock",
          "They are chemically identical proteins with different names",
        ],
        correctIndex: 2,
        explanation:
          "Endotoxin (lipopolysaccharide) is embedded in Gram-negative walls and released as those bacteria die, triggering fever, vasodilation and septic shock. Exotoxins are actively secreted — mostly by Gram-positive organisms — and act on specific targets such as nerves or gut cells.",
        courseSlug: "pathology-1",
      },
      {
        topic: "Pathogenesis",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Cholera produces litres of watery diarrhoea. What is the actual mechanism of the damage?",
        options: [
          "The bacteria destroy and ulcerate the bowel wall",
          "The toxin switches gut cells into secreting massive amounts of water and electrolytes, with the mucosa intact",
          "The toxin locks intestinal muscles into continuous spasm",
          "The bacteria invade the bloodstream and damage the kidneys directly",
        ],
        correctIndex: 1,
        explanation:
          "Cholera toxin hijacks the gut cell's signalling so it pumps water and salt into the lumen — a functional flood with an architecturally intact mucosa. That is why the stool is watery, recovery of the gut is fast once rehydrated, and antibiotics are secondary to fluids.",
        courseSlug: "pathology-1",
      },
      {
        topic: "Pathogenesis",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A classmate falls sick with measles ten days after exposure, having felt completely well until yesterday. What does 'ten days' represent?",
        options: [
          "The incubation period — silent multiplication between exposure and first symptoms",
          "The prodromal stage of the illness",
          "The period of convalescence",
          "The duration of active infection after the rash appears",
        ],
        correctIndex: 0,
        explanation:
          "The incubation period is the silent gap between exposure and first symptoms, while the organism multiplies — the patient feels well and can already be contagious. Prodromal symptoms are the vague early complaints that follow it.",
        courseSlug: "pathology-1",
      },
    ],
    flashcards: [
      {
        topic: "Pathogenesis",
        front: "Pathogenicity versus virulence — what is the difference?",
        back: "Pathogenicity: the organism's ability to cause disease at all. Virulence: the severity of the disease it causes.",
      },
      {
        topic: "Toxins",
        front: "Exotoxin versus endotoxin — source and behaviour?",
        back: "Exotoxins: secreted, mostly Gram-positive, tissue-specific (tetanus, cholera). Endotoxin: in Gram-negative cell walls, released at bacterial death, drives fever and septic shock.",
      },
      {
        topic: "Infection Stages",
        front: "Name the five stages of an infectious disease in order.",
        back: "Incubation, prodromal, illness, decline, convalescence.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Cholera (fact sheet)",
        year: "2023",
        url: "https://www.who.int/news-room/fact-sheets/detail/cholera",
        note: "Fact sheet — check for the latest update.",
      },
      {
        organization: "WHO Regional Office for Africa",
        title: "Technical Guidelines for Integrated Disease Surveillance and Response in the African Region",
        year: "2019",
        note: "Includes cholera immediate reporting requirements.",
      },
      {
        organization: "Elsevier",
        title: "Robbins Basic Pathology",
        year: "2018 (10th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 16 ─────────────────────────────────────────────────────
  {
    courseSlug: "pathology-1",
    moduleTitle: "Inflammation, Infection and Healing",
    lessonTitle: "Healing and Repair: Rebuilding Tissue",
    description:
      "Why a neat surgical cut knits in days while a gaping ulcer takes weeks — the two intentions of healing, the phases beneath them, and the scar that tells the story.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Distinguish primary from secondary intention healing with examples.",
      "Sequence the phases of wound healing and describe granulation tissue.",
      "List factors that delay healing, and counsel on keloid scars.",
    ],
    tags: ["healing", "wound care", "granulation", "keloid", "repair"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The body is a builder that never fully stops. Whether a wound knits in ten days or drags for months depends mostly on how the edges meet, the blood supply reaching the site, and the patient's general state — much of which is in your nursing hands.\n\nIn this lesson you will meet the two intentions of healing, the four phases behind them, the factors that stall them, and the scars — including keloids — that Ghanaian skin tells so well.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Primary intention**: clean, closely-approximated edges — a surgical incision, a well-repaired episiotomy. Minimal gap, minimal granulation, healing in about ten to fourteen days, a small scar. **Secondary intention**: edges apart, tissue lost or infection present — a pressure ulcer, a burn, a gaping wound. The gap fills from the floor upward with **granulation tissue** — a beefy red, bumpy mix of new capillaries, fibroblasts and collagen — then contracts as specialised cells pull the edges inward, and finally new epithelium creeps across the surface. Slower, with a bigger scar, and entirely dependent on your dressing care, the patient's nutrition and freedom from infection.\n\nEither road passes through four phases: **haemostasis** (the clot seals), **inflammation** (days one to four: neutrophils and macrophages clean the site), **proliferation** (granulation builds, collagen lays down), and **remodelling** (months of collagen strengthening — the scar never quite reaches full original strength). Delayed by: infection — the number one enemy — poor protein, vitamin C and zinc intake, anaemia, uncontrolled diabetes, poor blood supply, smoking and steroids. And in darker skin, be ready to counsel on **keloids**: scars that overgrow their borders, raised and spreading beyond the original wound, unlike hypertrophic scars, which stay within the borders and often flatten with time.",
      },
      {
        type: "clinical_pearl",
        body: "Healthy granulation is beefy red and bumpy — celebrate it. Pale or weeping tissue usually means poor blood supply or poor nutrition: look at the plate and the haemoglobin, not just the dressing.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman with poorly controlled diabetes is on day seven after caesarean section. Her wound has gaped at one end, with yellow slough at the base, and her fasting sugars have been running high all week. Which intention will this heal by, and what will you optimise?\n\nAnswer: A gaping, sloughing wound in a diabetic patient heals by secondary intention — from the base upward, over weeks. Optimise the odds: control the infection with swabs and dressings per protocol, work with the team on her glucose control, feed her protein-rich meals and correct anaemia, and teach her the long-haul course so she does not despair. Counsel gently on scar care — with her darker skin, watch for keloid overgrowth and involve the wound team early.",
      },
      {
        type: "memory_trick",
        body: "Kissed edges knit; gapped wounds grow. Granulation is the builder's red scaffold, rising from the wound floor.",
      },
      {
        type: "summary",
        body: "- Primary intention: approximated clean edges — fast, small scar. Secondary: gap fills from the base — slow, bigger scar.\n- Four phases: haemostasis, inflammation, proliferation (granulation), remodelling.\n- Infection, malnutrition, anaemia, diabetes, poor perfusion and smoking delay healing.\n- Keloids overgrow the wound borders — common in darker skin; hypertrophic scars stay within and often settle.",
      },
    ],
    questions: [
      {
        topic: "Healing",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which wound heals by primary intention?",
        options: [
          "A pressure ulcer with an open crater",
          "A full-thickness burn covering the sacrum",
          "A clean surgical incision closed with sutures, edges well approximated",
          "A gapping traumatic wound with slough in the base",
        ],
        correctIndex: 2,
        explanation:
          "Primary intention requires clean, closely-opposed edges and minimal tissue loss — the sutured incision. Open craters, deep burns and sloughing wounds fill from the base by secondary intention.",
        courseSlug: "pathology-1",
      },
      {
        topic: "Healing",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A nurse inspects a chronic wound and describes the base as beefy red and bumpy with bright pinpoint spots. What does this indicate?",
        options: [
          "Healthy granulation tissue — healing is progressing",
          "Early malignant change requiring biopsy",
          "Ischaemic tissue needing urgent debridement",
          "Pseudomonas infection turning the tissue red",
        ],
        correctIndex: 0,
        explanation:
          "Beefy red, bumpy, easily-bled tissue is healthy granulation — new capillaries and fibroblasts building from the floor. Ischaemic tissue would be pale or black, and infection would show slough, discharge or spreading inflammation.",
        courseSlug: "pathology-1",
      },
      {
        topic: "Healing",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A young Ghanaian woman's caesarean scar has become a raised, firm plaque spreading well beyond the original incision line. What is this, and how does it differ from a hypertrophic scar?",
        options: [
          "A keloid — it overgrows the original wound borders; a hypertrophic scar stays within them",
          "A hypertrophic scar — it overgrows the borders; keloids stay within them",
          "A keloid — it always ulcerates and needs excision immediately",
          "A wound infection — it resolves completely with antibiotics",
        ],
        correctIndex: 0,
        explanation:
          "Keloids extend beyond the original wound margins into normal skin, common in darker skin types, and tend to persist; hypertrophic scars remain within the borders and often flatten over time. Neither is an infection, and surgical excision of keloids alone often triggers regrowth.",
        courseSlug: "pathology-1",
      },
    ],
    flashcards: [
      {
        topic: "Healing",
        front: "Primary versus secondary intention — the one-line difference with an example each.",
        back: "Primary: edges approximated, minimal gap — sutured incision. Secondary: edges apart or tissue lost — pressure ulcer, burn; fills from the base with granulation, heals slowly with a larger scar.",
      },
      {
        topic: "Healing",
        front: "Name the four phases of wound healing in order.",
        back: "Haemostasis, inflammation, proliferation (granulation tissue and collagen), remodelling.",
      },
      {
        topic: "Scars",
        front: "Keloid versus hypertrophic scar — what is the key boundary?",
        back: "Keloid overgrows beyond the wound borders into normal skin; hypertrophic stays within the borders and often flattens over months.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Global Guidelines for the Prevention of Surgical Site Infection",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549882",
      },
      {
        organization: "Elsevier",
        title: "Robbins Basic Pathology",
        year: "2018 (10th edition)",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Potter and Perry's Fundamentals of Nursing",
        year: "2020 (10th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 17 ─────────────────────────────────────────────────────
  {
    courseSlug: "pathology-1",
    moduleTitle: "When Growth Goes Wrong",
    lessonTitle: "Neoplasia: When Cells Stop Listening",
    description:
      "Normal cells obey growth signals; neoplastic cells build a new society on their own terms. Benign versus malignant, how cancer travels, and the breast-lump rule that saves Ghanaian lives.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Define neoplasia and distinguish benign from malignant growth.",
      "Apply the naming rules: adenoma, carcinoma, sarcoma, adenocarcinoma.",
      "Describe the routes of metastasis and the safe approach to any breast lump.",
    ],
    tags: ["neoplasia", "cancer", "benign", "malignant", "metastasis", "breast lump"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every normal cell listens — to growth signals, to stop signals, to its neighbours. A neoplastic cell has stopped listening, and it builds on its own terms. That single act of disobedience is where every lump, benign or malignant, begins.\n\nIn this lesson you will learn to separate the well-behaved growths from the dangerous ones, speak the naming language of tumours, and understand why the discipline around breast lumps matters so much in Ghana, where late presentation is our real epidemic.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Neoplasia** means new, abnormal, autonomous growth. **Benign** tumours grow slowly, resemble their parent tissue, are often wrapped in a capsule, and stay where they are — lipomas, the common fibroadenoma of young breasts, and uterine fibroids, familiar to every Ghanaian gynaecology ward. **Malignant** tumours grow fast, lose their ordered structure, invade through boundaries into neighbouring tissue and — their defining hallmark — **metastasise**: seed distant sites. Naming: benign epithelial growths are adenomas; malignant epithelial ones are carcinomas (adenocarcinoma if glandular); malignant connective-tissue ones are sarcomas; leukaemias and lymphomas arise from blood and lymph tissue.\n\nSpread happens by four roads: direct invasion into neighbours; the **lymphatics** — breast carcinoma classically travels first to the axillary nodes, which is why every breast examination includes them; the **blood** — seeding liver, lungs, brain and bone; and across body cavities, as ovarian tumours drop onto the peritoneum. In Ghana, breast and cervical cancers lead in women, and cervical cancer is linked to HPV — screening with visual inspection and HPV vaccination are real tools. But the tool that matters most in your hands is discipline: every breast lump, at any age, mobile or fixed, painful or silent, deserves full assessment — examination, imaging and tissue sampling. Early presentation saves lives; reassurance without evidence buries them.",
      },
      {
        type: "clinical_pearl",
        body: "'It is mobile and painless, so it is nothing' — no. Mobility suggests benign, but early cancers are also painless. A breast lump is assessed, not assumed — triple assessment until proven otherwise.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 34-year-old trader finds a mobile, rubbery, painless lump in her right breast. Her friend told her that because it moves freely it cannot be cancer, so she plans to ignore it and 'watch it for a year'. How do you counsel her?\n\nAnswer: A mobile, rubbery lump in a young woman is likely a benign fibroadenoma — but 'likely' is not a diagnosis, and mobility alone cannot exclude malignancy. Encourage full assessment now: clinical examination, imaging and tissue sampling — the triple assessment — at the breast clinic, and teach her to return promptly if the lump grows, hardens or a new one appears. Waiting a year converts a manageable finding into a gamble she did not need to take.",
      },
      {
        type: "memory_trick",
        body: "Benign is Bordered and Behaves; Malignant Marches and Metastasises. CARcinoma comes from Coverings (epithelium); SARcoma from Stuff (connective tissue).",
      },
      {
        type: "summary",
        body: "- Neoplasia is autonomous new growth: benign stays bordered and slow; malignant invades and spreads.\n- Naming: adenoma (benign epithelial), carcinoma and adenocarcinoma (malignant epithelial), sarcoma (malignant connective), leukaemia and lymphoma (blood and lymph).\n- Spread is by direct invasion, lymphatics, blood and across cavities — breast carcinoma heads first for the axillary nodes.\n- Every breast lump is assessed, never assumed — and early presentation is Ghana's life-saving edge.",
      },
    ],
    questions: [
      {
        topic: "Neoplasia",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which single feature most reliably distinguishes a malignant from a benign neoplasm?",
        options: [
          "The presence of pain at the tumour site",
          "The ability to metastasise — spread to distant sites and invade surrounding tissue",
          "The size of the tumour when first discovered",
          "The speed at which the lump first appeared",
        ],
        correctIndex: 1,
        explanation:
          "Malignancy is defined by invasion and metastasis — the capacity to spread beyond the origin. Benign tumours can grow large, grow fast enough to be noticed, and become painful by pressure, without ever being malignant.",
        courseSlug: "pathology-1",
      },
      {
        topic: "Neoplasia",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A tumour arising from glandular epithelial tissue is called an adenocarcinoma. What would a malignant tumour of connective tissue be called?",
        options: [
          "Adenoma",
          "Lymphoma",
          "Papilloma",
          "Sarcoma",
        ],
        correctIndex: 3,
        explanation:
          "Sarcomas are malignant tumours of connective tissue — bone (osteosarcoma), fat, muscle, vessels. Adenoma and papilloma are benign epithelial growths, and lymphoma arises from lymphoid tissue.",
        courseSlug: "pathology-1",
      },
      {
        topic: "Neoplasia",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A 30-year-old woman discovers a painless, mobile breast lump. What is the correct clinical approach?",
        options: [
          "Reassure her that mobile lumps are never cancer and review in one year",
          "Full assessment — examination, imaging and tissue sampling — for every breast lump",
          "Treat with antibiotics and review if it does not settle",
          "Advise the lump be ignored unless it becomes painful",
        ],
        correctIndex: 1,
        explanation:
          "A young woman's mobile lump is probably a fibroadenoma, but probability is not proof: triple assessment settles it. Waiting a year, treating blind with antibiotics, or ignoring a painless lump all risk delaying a diagnosis that age and pain cannot reliably exclude.",
        courseSlug: "pathology-1",
      },
    ],
    flashcards: [
      {
        topic: "Neoplasia",
        front: "Benign versus malignant — the two-line rule.",
        back: "Benign: slow, well-differentiated, often encapsulated, stays put. Malignant: fast, disordered, invades boundaries and metastasises to distant sites.",
      },
      {
        topic: "Neoplasia",
        front: "Name the tumour: malignant epithelial, malignant connective tissue, benign glandular epithelial.",
        back: "Carcinoma; sarcoma; adenoma.",
      },
      {
        topic: "Neoplasia",
        front: "Which route does breast carcinoma classically take first, and what does that mean for examination?",
        back: "Lymphatic spread to the axillary nodes — so every breast examination includes palpation of the axilla.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Cancer (fact sheet)",
        year: "2022",
        url: "https://www.who.int/news-room/fact-sheets/detail/cancer",
        note: "Fact sheet — check for the latest update.",
      },
      {
        organization: "WHO",
        title: "Breast Cancer (fact sheet)",
        url: "https://www.who.int/news-room/fact-sheets/detail/breast-cancer",
        note: "Fact sheet — check for the latest update.",
      },
      {
        organization: "Elsevier",
        title: "Robbins Basic Pathology",
        year: "2018 (10th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 18 ─────────────────────────────────────────────────────
  {
    courseSlug: "pathology-1",
    moduleTitle: "When Growth Goes Wrong",
    lessonTitle: "Systemic Disease Processes",
    description:
      "How one local problem — a wound, a placenta, a mosquito bite — spills into whole-body cascades of sepsis, shock and multi-organ failure, and the trends that warn you first.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe how local disease escalates into systemic inflammation, sepsis and MODS.",
      "Classify shock as a tank, pump or pipes problem.",
      "Use urine output, pulse and mentation — not blood pressure alone — to track deterioration.",
    ],
    tags: ["systemic", "sepsis", "shock", "mods", "deterioration"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Local disease is polite — it stays in its organ and complains locally. The dangerous moment is the spillover: when one infection, one bleed or one injury tips the whole body into cascades of inflammation, leaky vessels and starving organs.\n\nThis lesson is about that spillover — sepsis, shock and multi-organ dysfunction — and about the early trends that warn you before the collapse your eyes can see.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The cascade begins with a trigger — infection, severe injury, haemorrhage — that floods the circulation with inflammatory mediators. Vessels dilate and become leaky, fluid leaves the bloodstream, and micro-clots form in the smallest vessels, so oxygen delivery collapses even as the heart races. Organs starve one by one — **multi-organ dysfunction syndrome, MODS**: the lungs fill and breathing quickens, the kidneys shut down to a trickle of urine, the brain clouds into confusion, and clotting swings paradoxically toward both clotting and bleeding. Screen with qSOFA when infection is suspected: respiratory rate 22 or more, new confusion, systolic blood pressure 100 or less. In chronic disease the same chemistry wastes muscle — cachexia, the drawn face of long illness.\n\n**Shock** is oxygen delivery failing to meet demand, and it has three plumbing shapes: an **empty tank** (hypovolaemic — bleeding or severe dehydration; think postpartum haemorrhage and cholera), a **broken pump** (cardiogenic — the heart failing after a large infarct), and **burst pipes** (distributive — septic and anaphylactic shock, where vessels gape open). The young compensate beautifully: the pulse climbs, the skin cools, urine falls and the mind clouds while the blood pressure still reads 'normal' — by the time it falls, decompensation has arrived. So follow the trends: pulse, urine output (roughly 30 mL per hour or more in an adult), respiratory rate and mentation, and act on the direction of travel.",
      },
      {
        type: "clinical_pearl",
        body: "A normal blood pressure has never saved anyone. In the compensating adult, trust the rising pulse, the falling urine and the subtle confusion — escalate on the trend, not on the last reading.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Day two after delivery, a woman has a fever of 38.6 °C, respiratory rate 26, new confusion, urine output of 80 mL over eight hours, and blood pressure 98/64 mmHg. The night note reads 'obs stable, continue monitoring'. What is the cascade, and how will you monitor her?\n\nAnswer: This is sepsis with early organ dysfunction — the lungs, brain and kidneys are already speaking. Ensure cultures are taken and antibiotics started immediately per protocol, give careful fluids as prescribed, and monitor at least every 15 to 30 minutes with an hourly urine chart and continuous close observation, escalating to the doctor now. Her blood pressure still looks 'acceptable', which is exactly why 'obs stable' is the most dangerous sentence in the notes — the trend, not the number, is the patient.",
      },
      {
        type: "memory_trick",
        body: "Shock is a plumbing problem: Empty tank, Broken pump, Burst pipes. And qSOFA whispers the sepsis warning: Breathes fast, Brain changes, Blood pressure bottoms.",
      },
      {
        type: "summary",
        body: "- The systemic cascade: mediators flood out, vessels dilate and leak, micro-clots form, and organs starve — MODS.\n- qSOFA screens sepsis with infection: respiratory rate 22 or more, new confusion, systolic 100 or less.\n- Shock in three shapes: empty tank (bleeding, dehydration), broken pump (heart failure), burst pipes (sepsis, anaphylaxis).\n- The young compensate: pulse, urine and mentation warn you long before the blood pressure falls.",
      },
    ],
    questions: [
      {
        topic: "Systemic Disease",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which components make up the qSOFA screen for a deteriorating patient with suspected infection?",
        options: [
          "Temperature, pulse and blood pressure",
          "Respiratory rate 22 or more, new confusion, and systolic blood pressure 100 or less",
          "Oxygen saturation, urine colour and appetite",
          "White cell count, glucose and haemoglobin",
        ],
        correctIndex: 1,
        explanation:
          "qSOFA uses the three bedside signs that track organ perfusion: breathing fast, altered mentation and a low systolic pressure. It is deliberately simple — no laboratory needed — so any nurse on any shift can raise the alarm.",
        courseSlug: "pathology-1",
      },
      {
        topic: "Shock",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient is in septic shock. Which plumbing description fits the underlying problem?",
        options: [
          "An empty tank — the bloodstream has lost volume through bleeding or dehydration",
          "A broken pump — the heart muscle has failed after a large infarct",
          "Burst pipes — widespread vasodilation has left the vessels gaping, with fluid leaking into tissues",
          "A blocked pipe — a clot has lodged in the main pulmonary artery",
        ],
        correctIndex: 2,
        explanation:
          "Septic shock is distributive: inflammatory mediators relax the vessels and open the walls, so the circulating volume effectively drains into tissues despite a racing heart — a 'burst pipes' problem needing fluids, vasopressors and source control, not just volume alone.",
        courseSlug: "pathology-1",
      },
      {
        topic: "Deterioration",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A previously healthy 25-year-old with heavy bleeding after delivery has a pulse of 118 but a blood pressure of 104/68. Why is the blood pressure the least reassuring observation here?",
        options: [
          "Young adults maintain near-normal blood pressure by compensating — a rising pulse and falling urine warn earlier",
          "Electronic machines always overestimate blood pressure in young women",
          "Blood pressure cannot be measured accurately after delivery",
          "A pulse of 118 is normal in all postnatal women",
        ],
        correctIndex: 0,
        explanation:
          "A healthy young person constricts vessels and races the heart to defend blood pressure — the compensation phase. The pulse trend, urine output and mental state crack first; by the time pressure falls, decompensation has begun. A postnatal pulse of 118 is never a reassuring baseline.",
        courseSlug: "pathology-1",
      },
    ],
    flashcards: [
      {
        topic: "Sepsis",
        front: "State the qSOFA criteria.",
        back: "Respiratory rate 22 or more, new confusion or altered mentation, and systolic blood pressure 100 or less — with suspected infection, escalate.",
      },
      {
        topic: "Shock",
        front: "Name the three plumbing types of shock with an example each.",
        back: "Empty tank — hypovolaemic (postpartum haemorrhage, cholera). Broken pump — cardiogenic (large infarction). Burst pipes — distributive (septic and anaphylactic shock).",
      },
      {
        topic: "Deterioration",
        front: "Why watch pulse, urine and mentation rather than blood pressure alone in the compensating patient?",
        back: "The young defend blood pressure until late: pulse climbs, urine falls and confusion appears first. Falling blood pressure means decompensation has already arrived.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Sepsis (fact sheet)",
        year: "2020",
        url: "https://www.who.int/news-room/fact-sheets/detail/sepsis",
        note: "Fact sheet — check for the latest update.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Porth's Pathophysiology: Concepts of Altered Health States",
        year: "2018 (10th edition)",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Potter and Perry's Fundamentals of Nursing",
        year: "2020 (10th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },
];
