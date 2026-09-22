import type { SeedFullLesson } from "../types";

// ─────────────────────────────────────────────────────────────
// Y1 S1 — BATCH D
// Health Promotion 1 (determinants, education, lifestyle,
// nutrition, activity, maternal & community health) +
// Microbiology 1 (microbial world, infection & transmission)
// Anchored to prisma/seed-data/anchors/y1s1-d.json —
// courseSlug / moduleTitle / lessonTitle are DB match keys.
// ─────────────────────────────────────────────────────────────

export const lessons: SeedFullLesson[] = [
  // ── 1. Determinants of Health ──────────────────────────────
  {
    courseSlug: "health-promotion-1",
    moduleTitle: "Health & Its Determinants",
    lessonTitle: "Determinants of Health: Why Your Address Matters",
    description:
      "Income, education, environment and culture shape health more than hospitals do — understanding this changes your care.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "Define health determinants and name the main layers that shape a person's health.",
      "Explain why income, education, environment and culture often matter more than clinical care alone.",
      "Apply the determinants lens to a real antenatal client and adjust your counselling to fit her reality.",
    ],
    tags: ["determinants", "inequality", "social determinants", "public health"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "Where health really begins",
        body: "Two babies are born on the same night. One arrives in a district hospital with running water, a vaccinated mother and a fridge for the vaccines. The other arrives at home in a village three hours from the nearest road, where the well sits downstream of the cattle and cooking smoke fills the kitchen every evening. Which baby is more likely to fall ill this year? You already know the answer.\n\nThat is what this lesson is about. Health does not begin in the labour ward. It begins in the conditions of a person's life — what the World Health Organization calls the **determinants of health**: the personal, social, economic and environmental factors that decide who gets sick, who recovers, and who dies young.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Picture health as a plant. The plant is the person. The soil is everything around them. Poor soil grows a weak plant, no matter how good the seed is.\n\nThe soil has layers, and this is the core idea of the lesson. The innermost layer is the person: age, sex, genes and daily habits. Around that sits family and community: support, culture, beliefs, gender roles. Further out are living and working conditions: income, food, housing, water, sanitation, education. The outer layer is society itself — the economy, politics, and how fairly resources are shared.\n\nFor your clients the layers become very concrete. Income decides whether a woman has trotro fare for antenatal clinic. Education decides whether she can read her health card, or question a harmful practice. Environment decides whether her water is safe and whether her cooking smoke harms her lungs. Culture decides which foods she avoids in pregnancy and who decides where she gives birth. Health services — distance, cost, opening hours, staff attitude — are a determinant too. The hospital is one layer of soil, not the whole garden.",
      },
      {
        type: "clinical_pearl",
        title: "Ask about the road, not just the person",
        body: "When a woman keeps missing her appointments, ask about the road before you judge the person. Transport money, distance, work and permission at home are the usual reasons — and most have practical answers, once somebody bothers to ask.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are helping at antenatal clinic in a district hospital. Madam Adjoa, 26 weeks pregnant, has missed two visits. Her haemoglobin today is 9.6 g/dL. When you speak to her gently, she explains that the clinic is two hours away by trotro, she has no money of her own, and her husband — away on a farm — must approve any spending. Her meals are mostly banku and pepper.\n\nWhich determinants are at work in Madam Adjoa's story, and what could you realistically do about them today?\n\nAnswer: Her story shows income (no money of her own), geography (distance to care), household decision-making and gender (needing the husband's approval), and food insecurity feeding her anaemia. Realistic actions include linking her to free maternal care and NHIS registration, giving and explaining her iron and folic acid tablets, counselling affordable iron-rich foods, phoning or writing to her husband so the next visit has support at home, and bundling her next appointment with other services so one journey covers everything. You can treat the anaemia — but you only fix it by also tending the soil she grows in.",
      },
      {
        type: "memory_trick",
        body: "Health is written in LIVES: Living environment (water, sanitation, housing), Income and work, Values and culture (beliefs and gender roles), Education, and Services (access to care). Five letters, five layers of the soil a person grows in.",
      },
      {
        type: "summary",
        body: "- Determinants are the conditions of life that shape health long before the hospital sees the patient.\n- They include income, education, environment, culture, gender and access to health services.\n- Clinical care is only one layer — and often a thinner layer than food, water and knowledge.\n- Missed appointments usually hide practical barriers: ask why before you judge.\n- Your counselling sticks best when it fits the client's money, distance, language and family reality.\n- LIVES: Living environment, Income, Values, Education, Services.",
      },
    ],
    questions: [
      {
        topic: "Determinants of Health",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which of the following is best described as a social determinant of health?",
        options: [
          "A person's blood group",
          "The distance from a woman's village to the nearest health facility",
          "The number of lobes in the right lung",
          "The normal resting heart rate of an adult",
        ],
        correctIndex: 1,
        explanation:
          "Distance to care decides whether help is reached in time — a classic social and environmental determinant. The other options are fixed biological facts that do not depend on living conditions.",
      },
      {
        topic: "Determinants in Practice",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman at your antenatal clinic has missed three appointments. Which response is most appropriate for a student nurse?",
        options: [
          "Scold her firmly so she takes the pregnancy seriously",
          "Threaten to record her as a defaulter to frighten her into attending",
          "Ask her kindly what has made attending difficult, and address the barriers you uncover",
          "Send her to the doctor immediately for failing to comply",
        ],
        correctIndex: 2,
        explanation:
          "Missed visits usually signal barriers — money, distance, work or permission — not carelessness. Naming the determinant is the first step to removing it, and kindness gets the true story faster than blame ever will.",
      },
      {
        topic: "Education & Maternal Health",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why does educating girls strongly improve maternal and child health outcomes?",
        options: [
          "Educated women have stronger muscles for labour",
          "Educated women are genetically protected from haemorrhage",
          "Educated women more easily recognise danger signs, use skilled care and share in household decisions",
          "Education guarantees that every woman delivers in a hospital",
        ],
        correctIndex: 2,
        explanation:
          "Education works through knowledge, confidence and decision-making power — recognising danger signs, attending antenatal care, and having a say over money and transport. The other options are biologically false: education changes opportunities, not muscles or genes.",
      },
    ],
    flashcards: [
      {
        topic: "Determinants of Health",
        front: "What are the determinants of health?",
        back: "The personal, social, economic and environmental conditions of a person's life — income, education, environment, culture, gender and access to services — that shape who gets sick and who recovers.",
      },
      {
        topic: "Determinants of Health",
        front: "What does the mnemonic LIVES stand for?",
        back: "Living environment, Income, Values and culture, Education, Services — five layers of soil that shape a person's health.",
      },
      {
        topic: "Determinants in Practice",
        front: "A client keeps missing her antenatal appointments. What should you explore first?",
        back: "Her barriers: transport cost, distance, permission at home, work and timing. Ask why before you judge — the barrier is usually practical, and practical barriers have answers.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Social Determinants of Health — Key Concepts",
        note: "Educational source — verify current WHO materials.",
      },
      {
        organization: "Ghana Health Service",
        title: "Health Promotion and Community Health Materials",
        note: "Educational reference — consult current GHS guidance.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Nurses",
        year: "2020 (17th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 2. Health Education ────────────────────────────────────
  {
    courseSlug: "health-promotion-1",
    moduleTitle: "Prevention & Education",
    lessonTitle: "Health Education: Teaching That Sticks",
    description:
      "How to teach patients so they actually remember and act — simple language, real relevance.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Plan a short teaching session that fits the client's language, literacy and family reality.",
      "Use teach-back to confirm understanding instead of asking 'do you understand?'.",
      "Apply the LEARN steps when beliefs and culture differ from your advice.",
    ],
    tags: ["health education", "teaching", "communication", "teach-back"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "The clinical skill nobody warns you about",
        body: "Here is a truth from every busy ward: much of what clinicians tell patients is forgotten before the patient reaches home. Not because she is careless — because the words were too many, too technical, too fast, or given at the wrong moment.\n\nHealth education is the planned work of changing that. It means helping a person understand health information in a way they can remember, believe and act on. And for a nurse, it is as clinical as taking a pulse. The mother who knows her danger signs may be the one who arrives in time. The one who was only lectured may not.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Know your learner first. Her age, language, literacy and family situation decide how you teach. If her first language is Twi or Ewe, teaching in English is performing, not teaching. If she cannot read, a card of written instructions is a gift to nobody.\n\nKeep the message small. One visit, one to three key points, said in plain words and repeated. People act on advice they can hold in their heads. Then make it real: tie each point to her own life — her kitchen, her market, her baby. Involving the family is often the difference between advice followed and advice abandoned, because in most Ghanaian homes the grandmother or husband shapes what actually happens.\n\nFinally, close the loop with **teach-back**. Do not ask 'do you understand?' — everyone says yes. Ask instead: 'So that I know I explained it well, tell me in your own words how you will give the medicine.' If she can say it, you taught. If she cannot, teach again, differently.",
      },
      {
        type: "clinical_pearl",
        title: "Talked is not taught",
        body: "If the client cannot repeat your message in her own words, you have not taught her yet — you have only talked near her. Teach-back is the cheapest test you will ever run.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "It is discharge day. Madam Efua delivered a healthy boy yesterday, and your job is to counsel her on exclusive breastfeeding for six months. As you start, she smiles politely — but her mother, who will care for her at home for the next month, is waiting outside and has already mentioned giving the baby water and gripe water 'to cool him down'.\n\nHow will you teach so that the message survives the journey home?\n\nAnswer: Teach the mother and the grandmother together, because the grandmother will influence the baby's care every single day. Give the reason in one plain sentence — for the first six months, breast milk is complete food and complete drink, even in this heat, so added water takes space in the tiny stomach and brings germs. Ask the grandmother, respectfully, what she gave her own babies and acknowledge her experience before explaining what has changed. Then ask them both to tell you in their own words what the baby will drink for six months. One message, the right listeners, a reason they can repeat — that is teaching that sticks.",
      },
      {
        type: "memory_trick",
        body: "When culture and advice differ, LEARN the way through: Listen to her understanding, Explain your view, Acknowledge her perspective, Recommend a plan, Negotiate one you both accept. Five steps, and the relationship stays whole.",
      },
      {
        type: "summary",
        body: "- Patients forget most rushed, technical advice — teaching is a skill, not a bonus.\n- Know your learner: language, literacy, family and timing shape the method.\n- One visit, one to three key messages, in words she uses herself.\n- Involve the family — the grandmother is part of the care team whether you invite her or not.\n- Close with teach-back: 'tell me in your own words' proves understanding.\n- When beliefs differ, LEARN: Listen, Explain, Acknowledge, Recommend, Negotiate.",
      },
    ],
    questions: [
      {
        topic: "Teach-Back",
        type: "MCQ",
        difficulty: "Easy",
        stem: "You have just explained how to take iron tablets to a woman at antenatal clinic. Which question best checks her understanding?",
        options: [
          "Do you understand everything I said?",
          "Are you sure you will remember all that?",
          "So that I know I explained it well, please tell me in your own words how you will take the tablets.",
          "Was I speaking too fast for you?",
        ],
        correctIndex: 2,
        explanation:
          "Teach-back asks the client to restate the message in her own words, which is the only honest test of understanding. 'Do you understand?' invites a polite yes, whether or not anything was understood.",
      },
      {
        topic: "Family Involvement",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A first-time mother is being discharged, and her mother-in-law will help care for the newborn. The mother-in-law plans to give the baby water and local mixtures. What is the best approach for the student nurse?",
        options: [
          "Counsel the mother privately and tell her to ignore her mother-in-law at home",
          "Counsel both women together, respectfully, explaining the reason for exclusive breastfeeding, and finish with teach-back",
          "Tell the mother-in-law that modern mothers know better than traditional practices",
          "Write the advice on a card so the mother can show it in arguments",
        ],
        correctIndex: 1,
        explanation:
          "The person who will actually hold the bottle at home must hear and accept the message — excluding her guarantees conflict. Explaining the reason respectfully, acknowledging her experience and confirming with teach-back gives the advice a chance to survive the first week.",
      },
      {
        topic: "Teaching Methods",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which teaching approach is most effective for a client with limited formal literacy?",
        options: [
          "A long talk in English with many medical terms",
          "A printed booklet with detailed written instructions",
          "Short messages in her own language, with demonstration, repetition and teach-back",
          "Asking her to write notes while you speak",
        ],
        correctIndex: 2,
        explanation:
          "Understanding does not depend on reading. Plain local language, showing rather than telling, repetition and teach-back work for every learner — including those who read well. The other options assume literacy the client may not have.",
      },
    ],
    flashcards: [
      {
        topic: "Teach-Back",
        front: "What is teach-back, and why is it better than asking 'do you understand?'",
        back: "Asking the client to restate your message in her own words. It tests real understanding, while 'do you understand?' usually earns a polite yes.",
      },
      {
        topic: "Health Education",
        front: "What does LEARN stand for in cross-cultural counselling?",
        back: "Listen, Explain, Acknowledge, Recommend, Negotiate — five steps for reaching agreement when beliefs and advice differ.",
      },
      {
        topic: "Teaching Methods",
        front: "How many key messages should one teaching session carry?",
        back: "One to three. People act on advice they can hold in their heads — small messages, repeated, tied to the client's real life.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Health Education and Health Promotion Resources",
        note: "Educational source — verify current WHO materials.",
      },
      {
        organization: "Ghana Health Service",
        title: "Behaviour Change Communication Guides",
        note: "Educational reference — consult current GHS guidance.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Nurses",
        year: "2020 (17th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 3. Lifestyle ───────────────────────────────────────────
  {
    courseSlug: "health-promotion-1",
    moduleTitle: "Prevention & Education",
    lessonTitle: "Lifestyle: The Daily Decisions That Build Health",
    description:
      "Sleep, stress, smoking, movement — the everyday choices where small changes compound into big health.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Name the main lifestyle domains that protect or damage long-term health.",
      "Explain why sleep, stress, tobacco and alcohol matter in pregnancy.",
      "Counsel a client — or yourself — on one small, realistic habit change.",
    ],
    tags: ["lifestyle", "habits", "behaviour change", "wellbeing"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "The quiet power of daily habits",
        body: "Nobody becomes unwell from one late night, one plate of fried food or one stressful week. Health bends under the weight of habits repeated for years — which is exactly why habits are worth studying.\n\nLifestyle is the layer of health you can influence most directly, for your clients and for yourself. Ghana, like much of the world, is seeing diabetes, hypertension, stroke and some cancers rise as daily life becomes more urban, more seated and more processed. These noncommunicable diseases build slowly and quietly. The good news is the mirror image: small changes, kept up, also compound. A ten-minute walk today is nothing much; repeated for a year, it is a different heart. A ten-minute walk today is nothing much; repeated for a year, it is a different heart.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Sleep is repair time. Adults need about seven to eight hours, and chronic short sleep raises blood pressure, weakens immunity and feeds weight gain — a real issue on night shifts, where planning sleep before and after is a survival skill.\n\nStress that never switches off is another quiet load. It raises blood pressure and blood sugar and wears down mood and judgement. Managing it is not a luxury: movement, prayer or worship, talking to trusted people, and simple planning all measurably help.\n\nTobacco and alcohol are the clearest risks. In pregnancy, there is **no safe amount of alcohol** — it can damage a developing baby's brain and face (foetal alcohol spectrum disorder). Smoking and second-hand smoke reduce the oxygen the baby receives and raise the risk of low birth weight, prematurity and stillbirth. Add balanced food, daily movement and water instead of sugary drinks, and you have the full picture of a lifestyle that builds health.",
      },
      {
        type: "clinical_pearl",
        title: "One small step at a time",
        body: "Ask 'what one small change could you make this week?' — not 'what will you change about your life?'. Habits grow one at a time, and one kept promise builds the next one.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Ama is 24 and 20 weeks pregnant. She sells phone credit at the market from 6 am to 8 pm, sleeps about five hours, eats one late heavy meal a day, and drinks two bottles of alcoholic ginger drink each evening 'for stress'. Her boyfriend smokes in their single room. At the clinic she complains she is always tired.\n\nWhich of Ama's habits matter most for her pregnancy, and where would you start?\n\nAnswer: The alcohol and the smoky room matter most: no amount of alcohol is known to be safe in pregnancy, and second-hand smoke reduces the baby's oxygen supply and raises the risk of low birth weight. So start there — help her swap the alcoholic drink for a non-alcoholic option and negotiate with the boyfriend to smoke outside. Her tiredness also has lifestyle answers: a fuller plate in the evening market, more sleep and short walks. But do not dump every change at once: one small, kept change this week earns the right to ask for the next.",
      },
      {
        type: "memory_trick",
        body: "A healthy day in six words: Food, Feet, Sleep, Calm, Smoke-free, Water. Say it like a shopping list each morning — a balanced plate, moving feet, deep sleep, a calm mind, a smoke-free room, and water in the glass.",
      },
      {
        type: "summary",
        body: "- Lifestyle is the layer of health most open to change, for clients and for yourself.\n- Sleep seven to eight hours; short sleep raises blood pressure and weakens immunity.\n- Chronic stress is a physical load — movement, prayer, talking and planning genuinely help.\n- In pregnancy there is no safe amount of alcohol, and second-hand smoke starves the baby of oxygen.\n- Counsel one small change at a time — one kept promise builds the next.\n- The healthy-day list: Food, Feet, Sleep, Calm, Smoke-free, Water.",
      },
    ],
    questions: [
      {
        topic: "Alcohol in Pregnancy",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A woman at 14 weeks of pregnancy asks how much alcohol is safe to drink each week. What is the correct advice?",
        options: [
          "One small drink a day is safe after the first three months",
          "Only strong drinks like whisky need to be avoided",
          "No amount of alcohol is known to be safe in pregnancy",
          "Alcohol only matters in the last month of pregnancy",
        ],
        correctIndex: 2,
        explanation:
          "No safe level of alcohol in pregnancy has been established, and the developing brain and face are vulnerable throughout. Alcohol exposure in pregnancy can cause foetal alcohol spectrum disorder, which is entirely preventable.",
      },
      {
        topic: "Second-Hand Smoke",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A pregnant woman does not smoke, but her partner smokes indoors in their one-room home. Which risk is most relevant for her pregnancy?",
        options: [
          "The baby developing extra fingers",
          "Reduced oxygen supply to the baby, with higher risk of low birth weight",
          "No risk, since she is not the one smoking",
          "Only a risk of staining the baby's clothes",
        ],
        correctIndex: 1,
        explanation:
          "Second-hand smoke exposes mother and baby to the same carbon monoxide and toxins that reduce oxygen delivery across the placenta, raising the risks of low birth weight and prematurity. Advising the partner to smoke outside is a pregnancy intervention.",
      },
      {
        topic: "Behaviour Change",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Your client eats poorly, sleeps five hours a night and never exercises. Which counselling approach is most likely to succeed?",
        options: [
          "Give a complete list of every habit to change before her next visit",
          "Lecture her firmly about discipline and self-control",
          "Ask what one small change she feels able to make this week, and build from there",
          "Wait until she develops a disease, then refer her for treatment",
        ],
        correctIndex: 2,
        explanation:
          "Habit change succeeds in small, chosen steps — one change mastered builds confidence and routine for the next. Overwhelming lists and lectures usually produce guilt, not change.",
      },
    ],
    flashcards: [
      {
        topic: "Alcohol in Pregnancy",
        front: "How much alcohol is safe in pregnancy?",
        back: "None — no safe level has been established. Alcohol in pregnancy can cause foetal alcohol spectrum disorder, which is fully preventable.",
      },
      {
        topic: "Lifestyle",
        front: "What is the healthy-day list from this lesson?",
        back: "Food, Feet, Sleep, Calm, Smoke-free, Water — a balanced plate, moving feet, deep sleep, a calm mind, a smoke-free room, water in the glass.",
      },
      {
        topic: "Second-Hand Smoke",
        front: "How does second-hand smoke harm a pregnancy?",
        back: "Carbon monoxide and toxins reduce oxygen delivery across the placenta, raising the risk of low birth weight and prematurity — smoking outside is a real pregnancy intervention.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Noncommunicable Diseases — Prevention and Risk Factors",
        note: "Educational source — verify current WHO materials.",
      },
      {
        organization: "Ghana Health Service",
        title: "Healthy Lifestyle and NCD Prevention Messages",
        note: "Educational reference — consult current GHS guidance.",
      },
    ],
  },

  // ── 4. Nutrition ───────────────────────────────────────────
  {
    courseSlug: "health-promotion-1",
    moduleTitle: "Community & Maternal Health",
    lessonTitle: "Nutrition: The Foundation of Good Health",
    description:
      "What a balanced plate looks like and why malnutrition hides in plain sight in every community.",
    difficulty: "Moderate",
    durationMin: 14,
    objectives: [
      "Build a balanced Ghanaian plate using the Go, Grow and Glow food groups.",
      "Explain the two faces of malnutrition — undernutrition and overweight — and hidden hunger.",
      "Counsel a pregnant woman on food choices that help prevent anaemia.",
    ],
    tags: ["nutrition", "diet", "malnutrition", "anaemia", "food groups"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "The plate is the first prescription",
        body: "Food does three jobs: it fuels the body like petrol, it builds and repairs the body like cement and blocks, and it defends the body like a guard. Every plate answers all three — well or badly.\n\nHere is the uncomfortable truth for your community work: malnutrition in Ghana has two faces, often in the same household. One child is stunted and small for age from too little of the right food. An aunt in the same compound is overweight from too much of the wrong food, heading for diabetes and hypertension. Both are malnourished. Both are common. And both hide in plain sight until you learn to look.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The simplest map of a balanced plate is Go, Grow, Glow. **Go** foods give energy: banku, kenkey, rice, yam, gari, plantain. **Grow** foods build and repair the body: fish, eggs, beans, groundnuts, chicken, milk — especially needed in pregnancy, childhood and illness. **Glow** foods protect: kontomire, garden eggs, tomatoes, okro, pawpaw, orange, mango — the vitamins and minerals that keep skin, blood, eyes and immunity working. A balanced plate carries all three, with water as the everyday drink.\n\nIn pregnancy the Grow and Glow foods matter even more, because the mother is building a whole baby. Iron-rich foods — dark green leaves, beans, groundnuts, liver — help the blood carry the extra oxygen, alongside the daily iron and folic acid tablet. Vitamin C from orange or tomato with a meal helps iron absorption; tea and cocoa with a meal block it.\n\nThe third face is hidden hunger: a plate full of Go but short on vitamins and minerals — full stomach, empty nutrition. The child looks 'fine' while night vision fades from vitamin A deficiency or anaemia quietly grows. It is why 'my child eats well' can still hide a problem.",
      },
      {
        type: "clinical_pearl",
        title: "Tea and cocoa are thieves at mealtimes",
        body: "Tea and cocoa drunk with food block iron absorption from that meal. Advise clients with low haemoglobin to enjoy them between meals instead, and to pair iron-rich food with vitamin C at the table.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Madam Yaa is 30 weeks into her second pregnancy. Her haemoglobin at today's antenatal visit is 9.2 g/dL and she looks pale. She eats mostly kenkey with pepper soup. Breakfast is always bread with very strong tea. She stopped taking her iron tablets because 'they make me sick' and money for fish and eggs has been tight.\n\nWhat would you counsel, and how will you make it realistic?\n\nAnswer: Her anaemia has three doors — diet, tablets and the tea timing. Advise adding affordable Grow and Glow foods: beans, groundnuts, dried fish, kontomire and seasonal fruit rather than expensive ones. Restart the iron tablet with food and explain that dark stools are expected, and that side effects usually settle — if nausea continues, discuss timing with the nurse. Move the strong tea away from meals so it stops stealing her iron, and add vitamin C like orange or tomato to the meal she eats best. Finally, arrange a repeat haemoglobin check, because counselling without follow-up is only conversation.",
      },
      {
        type: "memory_trick",
        body: "Go, Grow, Glow — three Gs for the plate. Go gives energy (banku, rice, yam), Grow builds the body (fish, beans, eggs), Glow guards the body (kontomire, pawpaw, orange). Every meal should answer all three.",
      },
      {
        type: "summary",
        body: "- Food fuels, builds and defends: every plate answers those three jobs well or badly.\n- Go = energy foods, Grow = body-building foods, Glow = protective foods; aim for all three at each meal.\n- Malnutrition has two visible faces — stunting and overweight — plus hidden hunger (micronutrient deficiency).\n- In pregnancy, boost Grow and Glow foods and take the daily iron and folic acid tablet.\n- Pair iron-rich food with vitamin C; keep tea and cocoa between meals, not with them.\n- Anaemia counselling works when it fits the client's purse — beans and groundnuts count as well as fish.",
      },
    ],
    questions: [
      {
        topic: "Food Groups",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which of the following is a Grow (body-building) food?",
        options: ["Gari", "Kontomire", "Beans and dried fish", "Oranges"],
        correctIndex: 2,
        explanation:
          "Beans and dried fish are rich in protein, which builds and repairs the body. Gari is a Go (energy) food, while kontomire and oranges are Glow (protective) foods.",
      },
      {
        topic: "Anaemia & Diet",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You are counselling a pregnant woman with a haemoglobin of 9.5 g/dL. Which combination of advice is most correct?",
        options: [
          "Stop the iron tablets if stools turn dark, and drink tea with meals",
          "Take iron tablets daily, eat iron-rich foods with vitamin C, and drink tea between meals rather than with them",
          "Eat only Go foods to keep strength up, and postpone all treatment until delivery",
          "Rely on fruit alone, because vitamins replace iron",
        ],
        correctIndex: 1,
        explanation:
          "Daily iron with folate, iron-rich foods enhanced by vitamin C at the meal, and moving tea away from mealtimes together attack anaemia from every direction. Dark stools are an expected effect of iron, not a reason to stop.",
      },
      {
        topic: "Hidden Hunger",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A child eats large portions of banku every day but rarely has vegetables, fruit, eggs or fish. What is the most likely hidden problem?",
        options: [
          "Protein-energy overnutrition, since portions are large",
          "Hidden hunger — full stomach but insufficient vitamins and minerals",
          "No nutritional risk at all, since the child is eating enough volume",
          "Lactose intolerance from the banku",
        ],
        correctIndex: 1,
        explanation:
          "Hidden hunger means adequate calories but inadequate micronutrients — a plate full of Go with no Grow or Glow. The child can look well while anaemia or vitamin A deficiency quietly develops underneath.",
      },
    ],
    flashcards: [
      {
        topic: "Food Groups",
        front: "Name the three food groups and one Ghanaian example of each.",
        back: "Go (energy): banku, rice, yam. Grow (body-building): fish, eggs, beans. Glow (protective): kontomire, pawpaw, orange.",
      },
      {
        topic: "Anaemia in Pregnancy",
        front: "What haemoglobin level defines anaemia in pregnancy, and what two dietary moves boost iron?",
        back: "Below 11 g/dL in pregnancy. Pair iron-rich foods (beans, kontomire, groundnuts, liver) with vitamin C at meals, and keep tea or cocoa between meals — they block iron absorption.",
      },
      {
        topic: "Malnutrition",
        front: "What is hidden hunger?",
        back: "Micronutrient deficiency on a full stomach — enough calories but too few vitamins and minerals. The person can look 'fine' while anaemia or vitamin A deficiency develops quietly.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Anaemia in Pregnancy — Prevention and Control",
        note: "Educational source — verify current WHO guidance.",
      },
      {
        organization: "Ghana Health Service",
        title: "Nutrition and Maternal Health Counselling Materials",
        note: "Educational reference — consult current GHS guidance.",
      },
      {
        organization: "FAO",
        title: "Healthy Diets — Food-Based Dietary Guidelines",
        note: "Educational source — verify current materials.",
      },
    ],
  },

  // ── 5. Physical Activity ───────────────────────────────────
  {
    courseSlug: "health-promotion-1",
    moduleTitle: "Community & Maternal Health",
    lessonTitle: "Physical Activity: Movement as Medicine",
    description:
      "What exercise actually does for the body and how to encourage it without lecturing.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "State WHO's recommended physical activity levels for adults and in pregnancy.",
      "Explain what regular movement does for the heart, blood sugar, mood and pregnancy.",
      "Encourage safe activity in pregnancy, including the warning signs that mean stop.",
    ],
    tags: ["physical activity", "exercise", "who guidelines", "pregnancy"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "Built to move",
        body: "Your grandmother probably walked to the farm, carried water, ground maize and swept the compound — all before 8 am. Her heart got a workout without a gym. City life quietly removed that: cars, desks, remote controls, and evenings on a phone. The body never stopped needing movement; the day just stopped providing it.\n\nThat is why doctors now describe physical inactivity as a major risk factor for disease — and why movement is genuinely medicine. Not a hobby, not a punishment for eating: a daily prescription with real effects on the heart, the blood, the mood and even the pregnancy.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "What does regular movement actually do? It strengthens the heart muscle and lowers blood pressure. It helps insulin move sugar out of the blood, protecting against diabetes. It lifts mood and sleep through natural body chemistry, keeps bones and muscles strong, eases constipation and back pain, and helps with weight control. One habit, many doors.\n\nWHO recommends at least 150 to 300 minutes of moderate activity per week for adults — brisk walking, cycling, dancing or energetic housework count. In an uncomplicated pregnancy, at least 150 minutes of moderate activity spread through the week is encouraged: walking, swimming, dancing and household work all qualify. Movement in pregnancy lowers the risk of gestational diabetes, excess weight gain and back pain, and supports mood and stamina for labour.\n\nKnow the stop signs: vaginal bleeding, painful regular contractions, chest pain, severe headache or dizziness, or fluid leaking — stop and seek care. Otherwise, start small: 15 minutes of brisk walking, most days, building up gently. The body forgives a slow start far more easily than it forgives none at all.",
      },
      {
        type: "clinical_pearl",
        title: "Prescribe movement she enjoys",
        body: "The best exercise is the one she will actually do. Walking, dancing, farming and housework all count — prescribe movement in a form and dose she can keep, not the one that sounds most impressive.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Akosua, an accountant, is 26 weeks pregnant with her first baby. She sits at a desk all day and everyone at home tells her to 'sit down and rest so the baby is safe'. She has stopped walking anywhere and now feels heavy, tired and constipated. At the clinic she asks quietly whether walking would be safe for her.\n\nWhat will you tell her?\n\nAnswer: With an uncomplicated pregnancy, moderate activity is not only safe — it is recommended. Encourage her to start with about 15 to 20 minutes of brisk walking most days, building toward at least 150 minutes a week, and reassure her family that walking does not harm the baby. Explain the practical gains: lower risk of gestational diabetes, less back pain, better sleep, easier bowels and more stamina for labour. Teach the stop signs — vaginal bleeding, painful regular contractions, chest pain, severe headache or dizziness, leaking fluid — so she knows exactly when to rest and call. Gentle truth beats the old myth: movement protects the baby, it does not endanger it.",
      },
      {
        type: "memory_trick",
        body: "Remember the number 150: at least 150 minutes of moderate movement per week, for adults and in uncomplicated pregnancy. A tro-tro engine that never runs seizes; your heart is the same engine — 150 minutes a week keeps it turning.",
      },
      {
        type: "summary",
        body: "- The modern day removed movement the body still needs — inactivity is now a major risk factor.\n- Regular movement lowers blood pressure, improves blood sugar, lifts mood and sleep, strengthens bones and eases back pain.\n- WHO target: 150–300 minutes of moderate activity weekly for adults; at least 150 minutes in uncomplicated pregnancy.\n- Walking, dancing, farming and housework all count — the best exercise is the one she keeps doing.\n- Stop and seek care for bleeding, painful regular contractions, chest pain, severe headache, dizziness or leaking fluid.\n- Start small: 15 minutes briskly, most days, and build up.",
      },
    ],
    questions: [
      {
        topic: "WHO Activity Guidelines",
        type: "MCQ",
        difficulty: "Easy",
        stem: "According to WHO, how much moderate physical activity should an adult aim for each week?",
        options: [
          "10 minutes once a week",
          "150 to 300 minutes per week",
          "At least 5 hours of intense gym training daily",
          "Exercise is only needed after age 50",
        ],
        correctIndex: 1,
        explanation:
          "WHO recommends 150–300 minutes of moderate activity weekly — brisk walking, dancing, cycling or energetic housework. It is a routine, not an event, and the total is easier than it sounds.",
      },
      {
        topic: "Exercise in Pregnancy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A pregnant woman has been walking 30 minutes daily. Which finding means she must stop and seek care immediately?",
        options: [
          "Mild sweating and feeling warm",
          "Slight muscle soreness the next day",
          "Vaginal bleeding after activity",
          "Feeling proud of herself",
        ],
        correctIndex: 2,
        explanation:
          "Vaginal bleeding in pregnancy always needs assessment — activity should pause until she is reviewed. Sweating, warmth and next-day muscle soreness are normal, expected effects of exercise.",
      },
      {
        topic: "Benefits of Exercise",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which benefit is most strongly linked to moderate exercise during an uncomplicated pregnancy?",
        options: [
          "Guarantee of a pain-free labour",
          "Lower risk of gestational diabetes and excess weight gain",
          "The baby growing faster than average",
          "No need for antenatal care visits",
        ],
        correctIndex: 1,
        explanation:
          "Regular moderate activity improves how the body handles sugar and weight, lowering the risk of gestational diabetes and excessive weight gain, and it eases back pain while supporting mood. Nothing guarantees pain-free labour, and exercise never replaces antenatal care.",
      },
    ],
    flashcards: [
      {
        topic: "WHO Activity Guidelines",
        front: "What is WHO's weekly physical activity target for adults, and for uncomplicated pregnancy?",
        back: "150–300 minutes of moderate activity per week for adults; at least 150 minutes spread through the week in pregnancy.",
      },
      {
        topic: "Exercise in Pregnancy",
        front: "Which signs mean a pregnant woman should stop exercising and seek care?",
        back: "Vaginal bleeding, painful regular contractions, chest pain, severe headache, dizziness, or leaking amniotic fluid.",
      },
      {
        topic: "Benefits of Exercise",
        front: "Name four real benefits of regular movement.",
        back: "Stronger heart and lower blood pressure, better blood-sugar control, improved mood and sleep, and stronger bones and muscles with less back pain.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Physical Activity — Guidelines for Adults and Pregnant Women",
        note: "Educational source — verify current WHO guidance.",
      },
      {
        organization: "Ghana Health Service",
        title: "Healthy Lifestyle Counselling Materials",
        note: "Educational reference — consult current GHS guidance.",
      },
    ],
  },

  // ── 6. Maternal Health ─────────────────────────────────────
  {
    courseSlug: "health-promotion-1",
    moduleTitle: "Community & Maternal Health",
    lessonTitle: "Maternal Health: Your First Introduction",
    description:
      "A gentle first look at the field you're heading into — why mothers' health decides so much.",
    difficulty: "Moderate",
    durationMin: 14,
    objectives: [
      "Define maternal health and maternal death.",
      "Name the leading causes of maternal death in Ghana and Africa.",
      "Describe the pillars of safe motherhood and the three delays that kill mothers.",
    ],
    tags: ["maternal health", "introduction", "maternal mortality", "safe motherhood"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "Welcome to your life's work",
        body: "This is the doorway lesson for everything ahead. Maternal health means the health of a woman through the whole journey of pregnancy, birth and the first six weeks after delivery — the puerperium. It covers her body, her mind, her safety and her survival.\n\nThe stakes are real. The World Health Organization defines a maternal death as the death of a woman while pregnant or within 42 days of the end of pregnancy, from a cause related to the pregnancy. Recent estimates place Ghana's maternal mortality around 300 deaths per 100,000 live births. That number is falling, and it is still far above the global SDG target of under 70. Behind each figure is a family that changed forever — which is why this work matters enough to study for four years.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "What kills mothers? The same short list, year after year: severe **haemorrhage** (bleeding) — the leading cause; hypertensive disorders like pre-eclampsia and eclampsia, where fits and organ damage follow high blood pressure; **sepsis** (infection after birth); obstructed labour when the baby cannot pass; and unsafe abortion. Most of these deaths are preventable or treatable with timely, skilled care. That word — preventable — is both the grief and the calling.\n\nWhat protects mothers? Safe motherhood rests on pillars you will meet again and again: good antenatal care (WHO now recommends at least eight contacts), skilled attendance at every birth, access to emergency obstetric and newborn care when things go wrong, strong referral between levels, postnatal care in the risky first days, and family planning to space pregnancies.\n\nWhy do mothers still die? The classic three delays model: delay in deciding to seek care (family waits, or does not recognise danger), delay in reaching care (distance, roads, money, transport), and delay in receiving care once arrived (staff, supplies, blood not ready). Every pillar and every delay will return in your clinical years — notice them now.",
      },
      {
        type: "clinical_pearl",
        title: "You are a link in the chain",
        body: "A mother's survival is a chain: antenatal care, skilled hands at birth, a working referral route, blood when needed. As a student you cannot carry the whole chain — but you can be the strongest link within your reach, and the one who spots delay early.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Abena, a 30-year-old farmer, went into labour at home with a traditional birth attendant. After a day and a night of poor progress, the family debated waiting for the husband, who was away. When they finally decided, the only vehicle available broke down on the rough road. She reached the district hospital late, exhausted, and the theatre team took another hour to assemble. Her baby was stillborn, and Abena needed surgery and two units of blood to survive.\n\nWhich of the three delays can you see in Abena's story?\n\nAnswer: All three. Delay one, deciding to seek care: the family waited for the husband and did not recognise poor progress as danger. Delay two, reaching care: the broken vehicle and the rough road cost hours that could not be spared. Delay three, receiving care: the team and blood were not immediately ready on arrival. This is why your future work includes community education on danger signs, health systems that plan transport and standby teams, and your own sharp eye for delay. Abena survived; the lesson is to make that the ordinary outcome, not the lucky one.",
      },
      {
        type: "memory_trick",
        body: "One hand of causes — five fingers, all preventable: bleeding, fits (eclampsia), fever (sepsis), blocked labour, and unsafe abortion. Point to each finger as you say them: one hand carries most of the reason this profession exists.",
      },
      {
        type: "summary",
        body: "- Maternal health covers pregnancy, birth and the puerperium (about six weeks after delivery).\n- A maternal death is death while pregnant or within 42 days of the pregnancy ending, from a pregnancy-related cause.\n- Leading killers: haemorrhage, hypertensive disorders, sepsis, obstructed labour and unsafe abortion — most are preventable.\n- Pillars of safe motherhood: antenatal care, skilled birth attendance, emergency obstetric care, referral, postnatal care and family planning.\n- The three delays: deciding to seek care, reaching care, and receiving care.\n- Ghana's maternal mortality (around 300 per 100,000 live births) is falling but still far above the SDG target.",
      },
    ],
    questions: [
      {
        topic: "Maternal Mortality",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the leading direct cause of maternal death in Ghana and across sub-Saharan Africa?",
        options: [
          "Severe bleeding (haemorrhage)",
          "Road traffic accidents",
          "Breast cancer",
          "Malaria in pregnancy",
        ],
        correctIndex: 0,
        explanation:
          "Postpartum haemorrhage remains the leading direct cause of maternal death in the region — and it is largely preventable and treatable with skilled care, uterotonics and a functioning blood supply.",
      },
      {
        topic: "Three Delays",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A labouring woman's family recognises danger but the only bridge to the hospital is flooded, delaying her arrival for six hours. Which delay is this?",
        options: [
          "Delay in deciding to seek care",
          "Delay in reaching care",
          "Delay in receiving care at the facility",
          "There is no delay — the family acted correctly",
        ],
        correctIndex: 1,
        explanation:
          "Delay two is the journey: distance, roads, rivers, money and transport between the decision and the facility. The family recognised the danger, so delay one is resolved, but the flooded bridge turned the decision into a six-hour loss.",
      },
      {
        topic: "Maternal Death Definition",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "According to WHO, a death counts as a maternal death if it occurs within what period after the end of a pregnancy?",
        options: [
          "24 hours",
          "7 days",
          "42 days",
          "1 year",
        ],
        correctIndex: 2,
        explanation:
          "The WHO definition covers death while pregnant or within 42 days of the end of pregnancy from a pregnancy-related cause. Later deaths are counted separately as late maternal deaths.",
      },
    ],
    flashcards: [
      {
        topic: "Maternal Mortality",
        front: "Name the five leading direct causes of maternal death (one hand of causes).",
        back: "Bleeding (haemorrhage), fits (pre-eclampsia/eclampsia), fever (sepsis), blocked (obstructed) labour, and unsafe abortion — all largely preventable.",
      },
      {
        topic: "Three Delays",
        front: "What are the three delays that contribute to maternal death?",
        back: "Delay in deciding to seek care, delay in reaching care (transport, distance, money), and delay in receiving adequate care once at the facility.",
      },
      {
        topic: "Maternal Death Definition",
        front: "What is the WHO time window for a maternal death?",
        back: "Death while pregnant or within 42 days of the end of pregnancy, from any cause related to or aggravated by the pregnancy.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Maternal Mortality — Facts and Definitions",
        note: "Educational source — verify current WHO figures.",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health and Safe Motherhood Strategy",
        note: "Educational reference — consult current GHS policy.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Nurses",
        year: "2020 (17th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 7. Community Health ────────────────────────────────────
  {
    courseSlug: "health-promotion-1",
    moduleTitle: "Community & Maternal Health",
    lessonTitle: "Community Health: Beyond the Hospital Walls",
    description:
      "Where most health actually happens — the community, its resources and your role in it.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "Define community health and primary health care.",
      "Describe Ghana's levels of care from CHPS to teaching hospital and how referral links them.",
      "Explain community participation and the nurse's role within it.",
    ],
    tags: ["community health", "public health", "chps", "referral", "primary health care"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "Most health happens far from the ward",
        body: "Hospitals treat one person at a time, usually after something has gone wrong. But the health of a whole community is decided earlier — by its water, its mothers, its mosquito nets, its children's vaccines and what people know. Community health is the work of protecting and improving that shared health, where people live, rather than where they eventually present.\n\nIts foundation is primary health care, declared at Alma-Ata in 1978: essential, acceptable, affordable care made accessible to every community, with the community itself as a partner — not just a recipient. Ghana built that promise into a system you must now learn by heart.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Ghana's health system works like a staircase of five steps. The **CHPS compound** is the doorstep: Community-based Health Planning and Services, staffed by community health officers and nurses who live with the community, do home visits, immunisations, antenatal checks and health talks. The **health centre** adds curative care, some laboratory tests and supervised deliveries. The **district hospital** brings doctors, caesarean sections, blood transfusion and theatre. The **regional hospital** handles what districts cannot, and the **teaching hospital** is the top step for complex and specialist care.\n\nReferral is the handrail that connects the steps: each level treats what it can and hands over what it cannot — with a written referral note, early enough to matter. The system only saves lives when each step does its own work well.\n\nThe third idea is participation. Community health volunteers, health committees and durbars turn the community from a target into a teammate. Volunteers find defaulting mothers, elders spread health messages in the trusted voice, and a community that owns its clinic will guard it. Your part — health talks, outreach clinics, immunisation days, home visits — is community health in its plainest form.",
      },
      {
        type: "clinical_pearl",
        title: "Know the map before the medicine",
        body: "Know your community's map before its medicine: where the water comes from, how far the road goes, which bridge floods, and who the elders actually listen to. That knowledge is as clinical as a stethoscope.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are on community placement at a CHPS compound in a scattered farming area. A father arrives at midnight carrying his two-year-old, who has had fever for two days and just convulsed once. The community health officer gives first-line treatment for fever, checks the child carefully, writes a referral note and arranges the community's emergency transport to the district hospital, 40 minutes away. A volunteer rides along to help the parents and to report back.\n\nWhat levels of the health system can you see in this single night, and what made the journey work?\n\nAnswer: The CHPS compound delivered doorstep-level primary care: first treatment, stabilisation and the decision to refer. The emergency transport and the volunteer are the community itself participating — the fourth 'element' that makes the system real. The district hospital, 40 minutes away, is the next step carrying what CHPS cannot, reached with a written referral note and in time. The chain worked because each step did its own job and the handover was early, documented and supported. Remove any link — no volunteer, no transport, no note — and the child's story changes.",
      },
      {
        type: "memory_trick",
        body: "The referral staircase: CHPS, Health Centre, District, Regional, Teaching. 'From doorstep to nation, five steps, each carrying what the step below cannot.' Walk it upward in your head until it is automatic.",
      },
      {
        type: "summary",
        body: "- Community health protects the health of everyone where they live — before illness forces them to a hospital.\n- Primary health care (Alma-Ata, 1978): essential, affordable care, with the community as partner.\n- Ghana's five steps: CHPS compound, health centre, district hospital, regional hospital, teaching hospital.\n- Referral connects the steps — written, early and with the right handover of information.\n- Community participation (volunteers, committees, durbars) turns the community into a teammate.\n- Your role includes outreach, immunisation days, home visits and health talks — clinical work in its plainest form.",
      },
    ],
    questions: [
      {
        topic: "CHPS",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What does CHPS stand for, and what is its core approach?",
        options: [
          "Community Health Planning and Services — taking basic primary care to the community's doorstep",
          "Central Hospital Pharmacy System — supplying medicines to regions",
          "Child Health Protection Scheme — vaccines only",
          "Community Housing and Sanitation — building projects",
        ],
        correctIndex: 0,
        explanation:
          "CHPS — Community-based Health Planning and Services — places community health officers in the community itself for home visits, immunisation, antenatal contact and health education, before illness forces the journey to a facility.",
      },
      {
        topic: "Levels of Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman in obstructed labour has been referred from a health centre and needs an urgent caesarean section. Which is the lowest level of Ghana's system that can safely perform it?",
        options: [
          "CHPS compound",
          "Health centre",
          "District hospital",
          "Community pharmacy",
        ],
        correctIndex: 2,
        explanation:
          "Surgery, theatre teams and blood transfusion begin at the district hospital. CHPS and health centres provide the primary care and referral that get her there in time — the reason an early, written referral is a life-saving act, not paperwork.",
      },
      {
        topic: "Community Participation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which of the following best demonstrates community participation in health?",
        options: [
          "The community waits quietly for doctors to visit once a year",
          "Trained local volunteers identify defaulting mothers, and a health committee plans outreach with staff",
          "Health staff decide all programmes without speaking to residents",
          "A radio advert played only in the capital city",
        ],
        correctIndex: 1,
        explanation:
          "Participation means the community shares decisions and work — volunteers, committees and local leaders working alongside staff. Communities that co-own services actually use and defend them; audiences and targets do not.",
      },
    ],
    flashcards: [
      {
        topic: "CHPS",
        front: "What does CHPS stand for and what does it provide?",
        back: "Community-based Health Planning and Services — doorstep primary care: home visits, immunisation, antenatal contact, health talks, staffed by community health officers.",
      },
      {
        topic: "Levels of Care",
        front: "List Ghana's five levels of health care from doorstep upward.",
        back: "CHPS compound → health centre → district hospital → regional hospital → teaching (tertiary) hospital — the referral staircase.",
      },
      {
        topic: "Primary Health Care",
        front: "What is primary health care, and where was it declared?",
        back: "Essential, acceptable, affordable health care accessible to all, with the community as partner — declared at Alma-Ata in 1978.",
      },
    ],
    sources: [
      {
        organization: "Ghana Health Service",
        title: "Community-based Health Planning and Services (CHPS) Policy",
        note: "Educational reference — consult current GHS policy.",
      },
      {
        organization: "World Health Organization",
        title: "Primary Health Care — Alma-Ata and Astana Declarations",
        note: "Educational source — verify current WHO materials.",
      },
    ],
  },

  // ── 8. Microorganisms ──────────────────────────────────────
  {
    courseSlug: "microbiology-1",
    moduleTitle: "The Microbial World",
    lessonTitle: "Microorganisms: The Invisible Majority",
    description:
      "A warm introduction to the microscopic world that outnumbers us and shares every surface we touch.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Define a microorganism and name the four main groups.",
      "Explain that most microorganisms are harmless or helpful, with pathogens as the minority.",
      "Distinguish normal flora from transient flora on the body.",
    ],
    tags: ["microorganisms", "introduction", "normal flora", "microbiology"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "The world you cannot see",
        body: "Right now, on your hands, in your mouth, in this room and in the soil outside, there is a living world too small to see. Microorganisms — bacteria, viruses, fungi and parasites too small for the naked eye — outnumber every plant and animal on earth. They were here billions of years before us and they share every surface we touch.\n\nHumans only discovered this world once microscopes opened it, and only accepted it once Pasteur, Koch and others proved that invisible living things could cause visible disease — the germ theory that transformed medicine. Sterile technique, safe surgery, clean cord care: your entire future profession rests on that idea.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "There are four main groups, and you will meet each again in its own lesson: **bacteria** — single-celled, independent, everywhere; **viruses** — smaller than cells, unable to multiply without hijacking one; **fungi** — yeasts and moulds, at the edge of visibility; and **parasites** — protozoa, worms and creatures that live off a host, some big enough to see.\n\nHere is the idea that changes your practice: the great majority of microorganisms are harmless or actively helpful. Gut bacteria digest food and make vitamins. Soil microbes recycle every dead leaf into new life. Yeast raises bread and turns cocoa and maize into the foods Ghana loves. Fewer than a few hundred species trouble humans — those few are called pathogens, and they are the minority with the bad reputation.\n\nOn your body lives a standing population: the normal (resident) flora — permanent settlers that mostly defend their territory, crowding out dangerous arrivals. Transient flora are passers-by, picked up from surfaces and mostly brushed away by washing. This distinction matters daily: you are not trying to create a sterile world, only to stop the dangerous few from reaching the wrong place.",
      },
      {
        type: "clinical_pearl",
        title: "Neighbours, not enemies",
        body: "Most germs are neighbours, not enemies. Your job is not to kill everything — it is to keep the dangerous minority from travelling from where they are harmless to where they can harm.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "After a health talk on hand washing at a CHPS compound, an elder raises his hand. 'You health people say germs are everywhere — on money, on hands, on everything. So if they are everywhere, why do you bother telling us to wash hands? What is the point?'\n\nHow do you answer him — honestly and helpfully?\n\nAnswer: Agree with him first: germs are indeed everywhere, and most are harmless — some even help us digest food and grow crops. But a small number of them, picked up from sick people, dirty water and waste, cause disease. Those travellers ride from place to place on hands — the busiest road in the village. Hand washing with soap does not make the hands sterile; it removes the travellers and the filth they ride on, which is enough to break the journey. One honest sentence for the elder: we wash not because everything is dangerous, but because our hands are the road the dangerous few use.",
      },
      {
        type: "memory_trick",
        body: "Be Very Friendly, Please — Bacteria, Viruses, Fungi, Parasites: the four houses of the microbial world. Three of the houses are mostly friendly; only certain residents cause trouble.",
      },
      {
        type: "summary",
        body: "- Microorganisms are living things too small to see — they vastly outnumber all plants and animals.\n- Four main groups: bacteria, viruses, fungi and parasites (Be Very Friendly, Please).\n- Most microbes are harmless or helpful: digestion, vitamins, fermentation, soil fertility.\n- Pathogens — the disease-causing minority — are the reason this subject exists.\n- Normal flora are the body's resident defenders; transient flora are passers-by that washing removes.\n- Hand washing is not sterilisation — it interrupts the travel of the dangerous few.",
      },
    ],
    questions: [
      {
        topic: "Microorganisms",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which statement about microorganisms is most accurate?",
        options: [
          "All microorganisms cause disease in humans",
          "The majority are harmless or helpful, and only a minority are pathogens",
          "Microorganisms can be seen clearly with the naked eye",
          "Microorganisms exist only inside hospitals",
        ],
        correctIndex: 1,
        explanation:
          "The microbial world is overwhelmingly harmless or beneficial — digestion, vitamins, fermentation and soil life all depend on it. Only a small minority of species are pathogens, which is why infection prevention targets travel and placement, not extermination.",
      },
      {
        topic: "Microbial Groups",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What are the four main groups of microorganisms?",
        options: [
          "Bacteria, viruses, fungi, parasites",
          "Cells, tissues, organs, systems",
          "Cocci, bacilli, spirals, comas",
          "Red cells, white cells, platelets, plasma",
        ],
        correctIndex: 0,
        explanation:
          "Bacteria, viruses, fungi and parasites (Be Very Friendly, Please) are the four houses of the microbial world. The other options describe bacterial shapes and blood components, not microbial groups.",
      },
      {
        topic: "Normal Flora",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is one important benefit of the normal flora of the human body?",
        options: [
          "It sterilises the bloodstream completely",
          "It crowds out harmful microbes and can produce useful vitamins",
          "It causes disease whenever the immune system is strong",
          "It replaces the need for hand washing",
        ],
        correctIndex: 1,
        explanation:
          "Resident flora occupy the space and nutrients that dangerous arrivals would use — a living shield — and gut bacteria even synthesise vitamins like vitamin K. Flora defend territory; they do not sterilise it, and they never replace hygiene.",
      },
    ],
    flashcards: [
      {
        topic: "Microorganisms",
        front: "What is a microorganism?",
        back: "A living thing too small to see with the naked eye — bacteria, viruses, fungi and parasites — found in water, soil, air, on every surface and in our bodies.",
      },
      {
        topic: "Microbial Groups",
        front: "Name the four main groups of microorganisms.",
        back: "Bacteria, Viruses, Fungi, Parasites — 'Be Very Friendly, Please'.",
      },
      {
        topic: "Normal Flora",
        front: "What is the difference between normal and transient flora?",
        back: "Normal flora are permanent resident microbes that mostly protect us by crowding out pathogens; transient flora are temporary passers-by, usually removed by washing.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Infection Prevention and Control — Core Concepts",
        note: "Educational source — verify current WHO materials.",
      },
      {
        organization: "McGraw Hill",
        title: "Prescott's Microbiology",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 9. Bacteria ────────────────────────────────────────────
  {
    courseSlug: "microbiology-1",
    moduleTitle: "The Microbial World",
    lessonTitle: "Bacteria: Friends, Foes and Neighbours",
    description:
      "Shapes, structures and survival tricks of the bacteria that live with us and sometimes against us.",
    difficulty: "Moderate",
    durationMin: 14,
    objectives: [
      "Describe the main bacterial shapes and the basic meaning of Gram positive and Gram negative.",
      "Give examples of useful bacteria and pathogenic bacteria relevant to nursing.",
      "Explain how spores, capsules and fast reproduction shape infection control.",
    ],
    tags: ["bacteria", "pathogens", "gram stain", "bacterial shapes"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "The most successful residents on earth",
        body: "Bacteria are single-celled organisms with their own wall, their own machinery — complete living things a few thousandths of a millimetre long. They live in soil, water, hot springs, salt pans and every part of your body. They have survived every catastrophe this planet has produced, so approach them with respect, not panic.\n\nYou cannot see them directly, so laboratories stain them. The Gram stain is the classic first question asked of any bacterium: it dyes the thick cell wall of Gram positive bacteria **purple** and leaves the thinner, complex wall of Gram negative bacteria pale **red**. Colour, shape and behaviour together tell the laboratory which organism it is facing — and often how hard it will be to treat.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Shape is the first clue. Cocci are spheres — in clusters like grapes (Staphylococcus) or chains like beads (Streptococcus). Bacilli are straight rods (Escherichia coli, Clostridium). Spirals and comma shapes complete the set (the syphilis spirochaete, the comma-shaped cholera vibrio).\n\nThen come the survival tricks. Some bacteria multiply by simply splitting in two — under ideal conditions every 20 minutes or so, which is why a few bacteria in warm food or a wound become millions within hours. A capsule, a slippery outer coat, hides bacteria from white cells. A few species form **spores** — armoured survival capsules that resist heat, drying and disinfectants and can wake years later. Clostridium tetani, the tetanus bacterium, is the spore-former you must never forget.\n\nAnd the friends? Lactobacilli keep the vagina acidic, protecting it from invaders. Gut bacteria make vitamin K and crowd out pathogens. Bacteria ferment our kenkey and yoghurt. The foes you will meet on the ward are a short list with long consequences: Staphylococcus aureus in wounds, E. coli in urinary and puerperal infections, Neisseria gonorrhoea blinding newborn eyes, and tetanus waiting in dust and soil for an unclean cord.",
      },
      {
        type: "clinical_pearl",
        title: "The cord stump is an open door",
        body: "Tetanus spores sit in soil, dust and on dirty hands, waiting for a cut. For a newborn, the freshly cut cord is exactly such a door. Clean, dry cord care and tetanus vaccination in pregnancy are antibacterial warfare in their purest form.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A seven-day-old baby is brought to the district hospital. He has fed poorly for two days, his body is stiff, his jaw is clenched shut, and he startles violently at any noise or touch. He was born at home, and the family applied a traditional powder mixed with shea butter to the cord stump for healing. The grandmother insists the powder is blessed and could not harm.\n\nWhich organism is almost certainly responsible, how did it enter, and how could this have been prevented?\n\nAnswer: This is neonatal tetanus. Clostridium tetani spores from soil or dust entered through the cut cord stump in the applied substance. Inside the wound, spores woke into bacteria producing a poison that locks the baby's muscles rigid — with a high risk of death. Prevention is simple and complete: keep the cord clean and dry with nothing applied, ensure every pregnant woman completes her tetanus immunisation so antibodies pass to the baby, and deliver with clean hands and a clean blade. The lesson to teach gently: healing the cord needs air and cleanliness, not powders — however blessed.",
      },
      {
        type: "memory_trick",
        body: "Coins, Canes, Corkscrews: cocci are round like coins, bacilli are straight like canes, spirals twist like corkscrews. And for the stain: Purple stays Positive — Gram positive bacteria keep the purple; Gram negative rinse out red.",
      },
      {
        type: "summary",
        body: "- Bacteria are complete single-celled organisms — among the oldest and most successful life on earth.\n- Shapes: cocci (spheres, clusters or chains), bacilli (rods), spirals and comma shapes — Coins, Canes, Corkscrews.\n- Gram stain: thick-walled Gram positives stain purple; Gram negatives rinse red and are often harder to treat.\n- Fast binary fission (as quick as 20 minutes), capsules and heat-resistant spores are key survival tricks.\n- Friends: lactobacilli guard the vagina, gut flora make vitamins and ferment foods. Foes: staphylococci, E. coli, gonococci, tetanus.\n- Clean, dry cord care plus tetanus vaccination in pregnancy closes the door to neonatal tetanus.",
      },
    ],
    questions: [
      {
        topic: "Bacterial Shapes",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Under the microscope, Escherichia coli appears as a straight rod. What is this shape called?",
        options: [
          "Coccus",
          "Bacillus",
          "Spiral",
          "Spore",
        ],
        correctIndex: 1,
        explanation:
          "Rod-shaped bacteria are bacilli — like E. coli and Clostridium. Cocci are spheres, spirals twist like corkscrews, and a spore is a survival form, not a shape.",
      },
      {
        topic: "Useful Bacteria",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why are lactobacilli in the vagina considered protective?",
        options: [
          "They directly kill sperm",
          "They produce acid that keeps the environment hostile to harmful organisms",
          "They thicken the vaginal wall",
          "They signal the ovaries to release eggs",
        ],
        correctIndex: 1,
        explanation:
          "Lactobacilli convert sugars into lactic acid, keeping the vagina acidic — an environment most pathogens cannot settle in. This is why unnecessary douching and broad antibiotics, which sweep lactobacilli away, can invite infection.",
      },
      {
        topic: "Neonatal Tetanus",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In a rural community where some families apply traditional substances to the newborn cord stump, which combination best prevents neonatal tetanus?",
        options: [
          "Oral antibiotics for every newborn",
          "Nothing applied to the cord, clean dry cord care, and tetanus immunisation of pregnant women",
          "Bathing the newborn in antiseptic daily",
          "Keeping the cord covered with a tight bandage",
        ],
        correctIndex: 1,
        explanation:
          "Tetanus spores enter through the cut cord, so the stump needs only air, cleanliness and dryness — no substances, however traditional. Maternal tetanus vaccination passes protective antibodies to the baby before birth. Antibiotics do not neutralise the toxin, and tight coverings keep the stump moist.",
      },
    ],
    flashcards: [
      {
        topic: "Bacterial Shapes",
        front: "Name the three main bacterial shapes with one example each.",
        back: "Cocci (spheres — Staphylococcus in clusters, Streptococcus in chains), bacilli (rods — E. coli, Clostridium), and spirals or comma shapes (syphilis spirochaete, cholera vibrio). Coins, Canes, Corkscrews.",
      },
      {
        topic: "Gram Stain",
        front: "Which bacteria stain purple in the Gram stain, and what does that tell you?",
        back: "Gram positive bacteria — they keep the purple dye because of a thick peptidoglycan wall. Gram negative bacteria rinse red with a thinner, more complex wall that is often harder to treat. Purple stays Positive.",
      },
      {
        topic: "Bacterial Survival",
        front: "What are bacterial spores, and which nursing-relevant organism makes them?",
        back: "Dried, armoured survival forms that resist heat, drying and disinfectants, waking later when conditions improve. Clostridium tetani — reason number one for clean, dry cord care.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Maternal and Neonatal Tetanus Elimination",
        note: "Educational source — verify current WHO guidance.",
      },
      {
        organization: "McGraw Hill",
        title: "Prescott's Microbiology",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Nurses",
        year: "2020 (17th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 10. Viruses ────────────────────────────────────────────
  {
    courseSlug: "microbiology-1",
    moduleTitle: "The Microbial World",
    lessonTitle: "Viruses: The Hijackers",
    description:
      "Not quite alive but devastatingly effective — how viruses invade cells and spread.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "Describe the structure of a virus and why it must hijack living cells to multiply.",
      "Explain why antibiotics do not work against viruses.",
      "Give nursing-relevant examples, including hepatitis B, rubella and HIV.",
    ],
    tags: ["viruses", "pathogens", "vaccination", "hepatitis b"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "Not quite alive",
        body: "A virus is a package: genetic instructions wrapped in a protein coat — no cell wall, no kitchen, no machinery of its own. It cannot eat, grow or multiply alone. This is why scientists argue about whether viruses are truly alive. One thing is beyond argument: they are devastatingly effective at using living cells to make copies of themselves.\n\nThe strategy is hijacking. A virus attaches to a specific cell, like a key finding its lock, pushes its instructions inside, and reprogrammes the cell into a virus factory. The cell fills with new copies until it bursts, releasing them to hijack the neighbours. Flu, measles, polio, Ebola and the common cold all work this way.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Why antibiotics fail against viruses is now simple to see: antibiotics target machinery bacteria have and viruses lack — cell walls, bacterial ribosomes, bacterial chemistry. Attacking a virus means attacking our own hijacked cells, which is why few direct antiviral drugs exist. For most viruses, medicine's strongest weapon is the vaccine: it trains your immune system to recognise the intruder before an invasion begins.\n\nThe nursing-relevant short list matters to learn early. **HIV** passes through blood, sex and from mother to baby — and antiretroviral medicines in pregnancy, birth and after can interrupt that journey, your future daily work. **Hepatitis B** passes at birth, which is why newborns should be vaccinated as soon as possible after delivery. **Rubella**, usually a mild childhood rash, is a monster in early pregnancy — infection in the first weeks can leave a baby deaf, with heart defects and cataracts; the vaccine belongs before pregnancy, never during. Herpes cold sores hide in nerves between attacks and can seriously harm a newborn. And the common cold? A virus — rest, fluids and patience, not antibiotics.",
      },
      {
        type: "clinical_pearl",
        title: "Wrong target, wasted spray",
        body: "Antibiotics for a viral cold are like spraying weed-killer at mosquitoes — wrong target, wasted spray, and the mosquitoes grow resistant. Antibiotics treat bacteria; vaccines, rest and time address most viruses.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At the child welfare clinic, a young mother holds her eight-month-old, who has a runny nose, a mild cough and no fever. He is feeding and playing normally. She asks firmly for 'the injection' — by which she means an antibiotic — because the last clinic gave one for a similar cold, and he recovered. She is in a hurry, and the queue is long.\n\nHow do you explain, kindly, why an antibiotic is the wrong medicine today?\n\nAnswer: Start by honouring her logic: her child did recover last time — but that was despite the antibiotic, not because of it. Colds are caused by viruses, and viruses are hijackers that antibiotics cannot touch; the body clears most colds itself in a week or so. Explain the real risks of misused antibiotics: unnecessary side effects and bacteria slowly learning resistance, so that the day she truly needs the medicine it may fail. Give the useful prescription instead: fluids, feeding, rest, paracetamol for discomfort, and the danger signs that mean bring him back — fast breathing, fever, poor feeding or unusual sleepiness. Respect, honesty and a clear plan beat a quick injection she will expect again next month.",
      },
      {
        type: "memory_trick",
        body: "A virus is a thief with a memory stick: it plugs into the cell, uploads its own instructions, and the factory prints thieves until the wall bursts. Five moves of the thief: Attach, Enter, Copy, Assemble, Escape.",
      },
      {
        type: "summary",
        body: "- A virus is genetic material in a protein coat — not quite alive, unable to multiply alone.\n- It hijacks a living cell: attach, enter, copy, assemble, escape — the cell dies as a virus factory.\n- Antibiotics target bacterial machinery only; they do nothing to viruses and misuse breeds resistance.\n- Vaccines train the immune system before the invasion — the strongest antiviral weapon we have.\n- Nursing list: HIV (interrupt with antiretrovirals), hepatitis B (vaccinate the newborn early), rubella (vaccinate before pregnancy), herpes (protect newborns).\n- The common cold is a virus: fluids, rest and patience — not antibiotics.",
      },
    ],
    questions: [
      {
        topic: "Viruses",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why do antibiotics have no effect on the common cold?",
        options: [
          "Because colds are caused by bacteria that digest antibiotics",
          "Because antibiotics are too weak for the nose",
          "Because colds are caused by viruses, which lack the structures antibiotics attack",
          "Because antibiotics only work on children over five years",
        ],
        correctIndex: 2,
        explanation:
          "Antibiotics target bacterial structures — cell walls and bacterial machinery. Viruses have none of these; they are genetic packages that hijack our own cells, so there is nothing for the antibiotic to hit.",
      },
      {
        topic: "Rubella",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A nurse colleague discovers she is six weeks pregnant and has no rubella vaccination record. She has just cared for a child with a rubella rash. Why does this matter so much?",
        options: [
          "Rubella in pregnancy mainly threatens the mother's hearing",
          "Rubella infection in early pregnancy carries a high risk of congenital rubella syndrome — deafness, heart defects and cataracts in the baby",
          "Rubella vaccine is safe to give during pregnancy to treat exposure",
          "The rash itself means she is already immune",
        ],
        correctIndex: 1,
        explanation:
          "Infection in the first weeks of pregnancy, when organs are forming, carries the highest risk of congenital rubella syndrome. Rubella vaccine is live and must be given before pregnancy or after delivery, never during; immunity should be confirmed by blood test and reported promptly for follow-up.",
      },
      {
        topic: "Hepatitis B",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A hepatitis B carrier mother delivers a healthy baby at your facility. What is the key newborn protection against hepatitis B?",
        options: [
          "Breastfeeding only, with no other measures",
          "Vaccination of the newborn as soon as possible after birth, ideally within 24 hours",
          "Routine antibiotics for the baby for one week",
          "Keeping mother and baby in separate rooms for a month",
        ],
        correctIndex: 1,
        explanation:
          "Hepatitis B commonly passes to the baby around the time of birth, and infection at that age often becomes lifelong. The birth dose of vaccine, given within 24 hours where possible, dramatically reduces that risk. Breastfeeding is encouraged; separation and antibiotics accomplish nothing.",
      },
    ],
    flashcards: [
      {
        topic: "Viruses",
        front: "Why must viruses hijack living cells to multiply?",
        back: "They are just genetic material in a protein coat — no cell, no machinery of their own. They attach, enter, copy, assemble and escape, turning the cell into a virus factory until it bursts.",
      },
      {
        topic: "Antibiotics vs Viruses",
        front: "Why don't antibiotics treat viral infections?",
        back: "Antibiotics attack bacterial structures — cell walls and bacterial machinery. Viruses lack all of them; misusing antibiotics only breeds resistant bacteria.",
      },
      {
        topic: "Nursing Viruses",
        front: "Name three viruses with special importance in nursing and one protective action for each.",
        back: "Hepatitis B — vaccinate the newborn as soon as possible after birth. Rubella — vaccinate before pregnancy (never during). HIV — antiretroviral care through pregnancy, birth and beyond to interrupt mother-to-child transmission.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Hepatitis B Vaccines and Birth Dose Policy",
        note: "Educational source — verify current WHO guidance.",
      },
      {
        organization: "World Health Organization",
        title: "Rubella and Congenital Rubella Syndrome — Fact Sheets",
        note: "Educational source — verify current WHO materials.",
      },
      {
        organization: "McGraw Hill",
        title: "Prescott's Microbiology",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 11. Fungi ──────────────────────────────────────────────
  {
    courseSlug: "microbiology-1",
    moduleTitle: "The Microbial World",
    lessonTitle: "Fungi: The Quiet Kingdom",
    description:
      "Yeasts and moulds — usually harmless, occasionally dangerous, always fascinating.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Distinguish yeasts from moulds and describe the conditions fungi love.",
      "Recognise common fungal conditions met in pregnancy and newborn care.",
      "Explain prevention and know the warning that recurrent thrush can carry.",
    ],
    tags: ["fungi", "mycology", "candida", "ringworm"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "The quiet kingdom",
        body: "Fungi are the kingdom you notice least and meet constantly: the mould on forgotten bread, the yeast that raises dough and ferments beer, the mushrooms after the rains, the ring of itchy rash on a child's scalp. Larger and more complex than bacteria, they live by absorbing their food — which makes them the world's great recyclers, breaking down everything that once lived.\n\nMost fungi are quiet neighbours. A few cause disease in humans, and the diseases they cause are mostly skin-deep, slow and treatable. But in nursing you will meet them more often than you expect — in itchy pregnancies, in newborn mouths and on folded skin.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Two body plans. **Yeasts** are single round cells — Candida is the medical star. **Moulds** grow as branching threads (hyphae) — the dermatophytes, skin-loving moulds behind ringworm and athlete's foot. What unites them is taste: fungi love **warm, wet and dark**. Skin folds, between toes, under the breast, the nappy area and the vagina are their favourite real estate.\n\nIn pregnancy, vaginal candidiasis (thrush) is extremely common: high hormone levels make vaginal secretions rich in glycogen — sugar — which Candida feasts on. The classic picture is a thick, white, itchy discharge — uncomfortable but not dangerous, and not a sexually transmitted infection. Topical antifungal creams and pessaries, such as clotrimazole, are the usual treatment in pregnancy.\n\nTwo more faces to know. In the newborn, oral thrush appears as white patches inside the mouth that do **not** rub away easily — milk patches do, the test every mother can learn. On skin and scalp, ringworm spreads as a ring with a clear centre and an active edge, passing through shared combs, hats, towels and barbers' clippers — and no worm is involved anywhere. Prevention is the same everywhere: clean, dry skin, dried folds, ventilated cotton, and no shared grooming items.",
      },
      {
        type: "clinical_pearl",
        title: "An itch that keeps returning",
        body: "Thrush that keeps coming back in the same client is a whisper, not just an itch — think of diabetes and check her urine or blood sugar. Recurrence has a reason; find it.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Madam Aku is 28 weeks pregnant with her first baby. For two weeks she has had a thick white discharge and intense itching that keeps her awake at night. She is embarrassed and worried: her aunt told her such discharge means her husband has been unfaithful, and she has started washing the area repeatedly with strong soap several times a day, which seems to make things worse.\n\nWhat is the most likely cause, and how will you help her?\n\nAnswer: This is almost certainly candidiasis — the most common vaginal infection of pregnancy, fed by pregnancy hormones rather than by anyone's behaviour. It is not an STI and not proof of unfaithfulness, a reassurance that may matter as much as the medicine. The frequent soap washing strips the normal protective flora and worsens discomfort — advise plain water, thorough drying, and loose cotton clothing. She should be assessed by the nurse for a suitable topical treatment such as clotrimazole, safe in pregnancy. Ask how often it has recurred: repeated episodes deserve a blood-sugar check. Her body is doing something normal in pregnancy; her treatment is medicine plus gentle truth.",
      },
      {
        type: "memory_trick",
        body: "Fungi are forest-floor creatures: they want Warm, Wet and Dark. Anywhere the body folds and stays damp, fungi will try to move in — so drying the folds is half the cure. And remember: ringworm is a fungus wearing a worm's name.",
      },
      {
        type: "summary",
        body: "- Fungi are the quiet kingdom: yeasts are single cells, moulds are branching threads, and most are harmless recyclers.\n- Their taste is Warm, Wet, Dark — skin folds, between toes, the nappy area and the vagina.\n- Pregnancy hormones make the vagina sugary, so candidal thrush is very common — thick, white, itchy discharge, not an STI.\n- Newborn oral thrush: white patches that do not rub off (milk patches do).\n- Ringworm is a fungus, not a worm — spread by combs, towels and clippers; treat with antifungal cream.\n- Keep skin clean, dry and ventilated — and investigate thrush that keeps returning (think blood sugar).",
      },
    ],
    questions: [
      {
        topic: "Ringworm",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A mother asks whether the ring-shaped, itchy rash on her son's scalp is caused by a worm. What is the correct answer?",
        options: [
          "Yes — a small worm lives under the ring",
          "No — it is a fungal infection (dermatophyte), despite the name",
          "Yes — it is a type of tick bite",
          "No — it is an allergic reaction to soap",
        ],
        correctIndex: 1,
        explanation:
          "Ringworm (tinea) is a dermatophyte fungus named for its ring shape, not for any worm. It spreads through shared combs, hats, towels and clippers, and it responds to antifungal treatment.",
      },
      {
        topic: "Thrush in Pregnancy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is vaginal candidiasis so common in pregnancy?",
        options: [
          "Pregnancy hormones make vaginal secretions rich in glycogen, which Candida feeds on",
          "The baby pushes intestinal worms upward",
          "Pregnant women share more towels",
          "Candida is spread through antenatal clinics",
        ],
        correctIndex: 0,
        explanation:
          "High oestrogen levels fill vaginal secretions with glycogen — a sugar that Candida thrives on — making thrush a common companion of pregnancy. It is not an STI, and it responds to topical antifungals that are safe in pregnancy.",
      },
      {
        topic: "Oral Thrush",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A breastfeeding mother notices white patches inside her three-week-old baby's mouth and asks whether it is leftover milk. How can she tell the difference herself?",
        options: [
          "Milk patches rub away easily with a clean cloth; thrush patches do not",
          "Milk patches bleed when touched; thrush never does",
          "There is no difference — all white patches in a newborn's mouth are milk",
          "Thrush only appears on the tongue, milk only on the cheeks",
        ],
        correctIndex: 0,
        explanation:
          "Milk residue wipes away gently with a cloth; thrush patches stick and leave a red, raw base when forced. Persistent patches that resist wiping should be seen and treated (usually with nystatin), and a breastfeeding mother with nipple pain may need treatment at the same time or the pair will pass it back and forth.",
      },
    ],
    flashcards: [
      {
        topic: "Fungi",
        front: "What three conditions do fungi love, and where on the body does that put them?",
        back: "Warm, wet and dark — skin folds, between the toes, under the breast, the nappy area, the vagina. Drying the folds is half the cure.",
      },
      {
        topic: "Thrush in Pregnancy",
        front: "Why does vaginal thrush become common in pregnancy, and what is the safe usual treatment?",
        back: "Pregnancy hormones make secretions glycogen-rich, feeding Candida. Treatment is a topical antifungal such as clotrimazole — safe in pregnancy. It is not an STI.",
      },
      {
        topic: "Ringworm",
        front: "What is ringworm, and how does it spread?",
        back: "A fungal (dermatophyte) infection — no worm involved. Spread by skin contact and shared combs, hats, towels and barber clippers; treated with antifungal cream.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "STI and Genital Infection Guidance",
        note: "Educational source — verify current WHO guidance.",
      },
      {
        organization: "McGraw Hill",
        title: "Prescott's Microbiology",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 12. Parasites ──────────────────────────────────────────
  {
    courseSlug: "microbiology-1",
    moduleTitle: "The Microbial World",
    lessonTitle: "Parasites: The Uninvited Guests",
    description:
      "Malaria, worms and more — the parasites that still shape health across Ghana and the tropics.",
    difficulty: "Moderate",
    durationMin: 14,
    objectives: [
      "Define parasitism and classify parasites into protozoa, helminths and ectoparasites.",
      "Describe how malaria behaves in pregnancy and the harms it causes.",
      "State the core protections against malaria and worm infection in Ghana.",
    ],
    tags: ["parasites", "malaria", "worms", "iptp", "tropical health"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "The uninvited guests",
        body: "A parasite is an organism that lives on or in another living thing — the host — and takes its nourishment there, giving harm in return for hospitality. It is the plainest definition in microbiology, and in the tropics it is also one of the most important: parasites still shape the health of your future clients more than almost any other group of organisms.\n\nYou already know the biggest names. Malaria. The worms children carry in whole classrooms. The bilharzia passed in the waters of the Volta. The mites that burrow between fingers and keep whole households scratching. Learn the family tree once, and every parasite you meet has a place to sit.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Three branches of the family. **Protozoa** are single-celled: the Plasmodium parasites of malaria, the amoeba of dysentery. **Helminths** are worms: hookworm, roundworm, and the schistosomes of bilharzia that live in fresh water and irritate the bladder. **Ectoparasites** live on the skin: scabies mites with their night-time itching, and head lice.\n\nMalaria deserves your closest attention, because pregnancy changes everything. The placenta becomes a fortress where parasites hide and multiply, so the pregnant woman clears them slowly — and the results are maternal anaemia, low birth weight, premature birth, miscarriage and stillbirth. Protection is the pair you will teach a thousand times: an insecticide-treated net every night (the Anopheles mosquito bites at night) and intermittent preventive treatment with sulphadoxine-pyrimethamine at antenatal visits from the second trimester until delivery. Fever in pregnancy is never 'just heat' — it is tested and treated the same day.\n\nWorms teach the second lesson: hookworm attaches to the gut wall and sips blood continuously, quietly manufacturing anaemia in women and children. Schistosoma haematobium irritates the bladder — the classic sign is blood in the urine of a child who swims in lake or river water. Prevention is shared: clean water, sanitation, shoes, deworming and avoiding transmission waters.",
      },
      {
        type: "clinical_pearl",
        title: "Check the net, not just the box",
        body: "Do not ask 'do you sleep under a net?' — ask to see how it hangs. A torn net with gaps at the edges is an open window for Anopheles. Checking the net itself, and that it is tucked in, is a two-minute clinical intervention.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Adjoa is 32 weeks pregnant with her third child. She has come to the antenatal clinic with two days of chills, headache and fever. Her haemoglobin is 8.6 g/dL — her book shows 11.2 at the start of pregnancy. She has no bed net: the last one tore after the second child, and the nights are hot, so the family sleeps outside it. This is her third episode of fever this pregnancy.\n\nWhy is malaria in pregnancy so much more than a normal fever, and what protection has she been missing?\n\nAnswer: In pregnancy the placenta becomes a hiding place where parasites gather, so malaria hits pregnant women harder — the fever count and the falling haemoglobin say so plainly. The harms stack up: maternal anaemia (now moderate at 8.6), low birth weight, prematurity, miscarriage and stillbirth. She has been missing the protection pair — an intact, tucked-in net every night and her preventive treatment doses at antenatal visits. Today she needs urgent testing and treatment, anaemia management, a new net before she leaves, and a catch-up plan. Her fever was never 'just heat' — it was a pregnancy emergency in disguise.",
      },
      {
        type: "memory_trick",
        body: "P.H.E.: Protozoa are one cell, Helminths are worms, Ectoparasites ride on the skin — Please Help Everybody. And malaria's toll in pregnancy is A-S-S: Anaemia, Small baby, Sad endings (miscarriage, stillbirth, preterm birth).",
      },
      {
        type: "summary",
        body: "- A parasite lives on or in a host and takes nourishment while giving harm.\n- Three branches: protozoa (malaria, amoebae), helminths (hookworm, roundworm, schistosomes), ectoparasites (scabies, lice) — P.H.E.\n- In pregnancy the placenta shelters malaria parasites: expect anaemia, low birth weight, prematurity, miscarriage and stillbirth.\n- Protection pair: an intact insecticide-treated net every night plus preventive treatment at antenatal visits from the second trimester.\n- Fever in pregnancy is tested and treated the same day — never 'just heat'.\n- Hookworm quietly causes anaemia; schistosomiasis shows as blood in urine after fresh-water contact.",
      },
    ],
    questions: [
      {
        topic: "Malaria",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which mosquito transmits malaria, and when does it mainly bite?",
        options: [
          "The Aedes mosquito, at midday",
          "The female Anopheles mosquito, mainly at night",
          "The housefly, at mealtimes",
          "The tsetse fly, at dawn",
        ],
        correctIndex: 1,
        explanation:
          "Malaria is transmitted by the female Anopheles mosquito, which feeds mainly between dusk and dawn — which is exactly why sleeping under an insecticide-treated net every night is the foundation of protection.",
      },
      {
        topic: "Malaria in Pregnancy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is malaria in pregnancy treated as more dangerous than malaria in a non-pregnant adult?",
        options: [
          "Pregnant women cannot take any antimalarial at all",
          "The placenta becomes a shelter for parasites, causing anaemia, low birth weight, prematurity and fetal loss",
          "Malaria in pregnancy always ends in maternal death",
          "It is not — the risks are identical",
        ],
        correctIndex: 1,
        explanation:
          "Parasites gather and multiply in the placenta, where the pregnant woman clears them slowly. The consequences — maternal anaemia, low birth weight, preterm birth, miscarriage and stillbirth — are why testing, treatment and prevention are escalated in pregnancy.",
      },
      {
        topic: "Parasite Classification",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A school health programme finds children with intense night-time itching between the fingers and thread-like burrows on the wrists. Which branch of parasites is this?",
        options: [
          "Protozoa",
          "Helminths",
          "Ectoparasites — the scabies mite",
          "Viruses",
        ],
        correctIndex: 2,
        explanation:
          "Scabies is an ectoparasite — a mite living on the skin, worst at night, spread by close contact and shared bedding. It belongs to the P.H.E. third branch, and treating the whole household matters or the mites simply return.",
      },
    ],
    flashcards: [
      {
        topic: "Parasites",
        front: "What is a parasite, and what are the three branches?",
        back: "An organism living on or in a host, taking nourishment and giving harm. Branches: Protozoa (single-celled — malaria), Helminths (worms — hookworm, schistosomes), Ectoparasites (skin — scabies, lice). P.H.E.",
      },
      {
        topic: "Malaria in Pregnancy",
        front: "What does malaria do to a pregnancy (A-S-S)?",
        back: "Anaemia in the mother, Small (low birth weight, preterm) baby, and Sad endings — miscarriage and stillbirth. The placenta shelters the parasites.",
      },
      {
        topic: "Malaria Prevention",
        front: "What is the protection pair against malaria in pregnancy?",
        back: "An intact insecticide-treated net, tucked in, used every night — plus intermittent preventive treatment (sulphadoxine-pyrimethamine) at antenatal visits from the second trimester until delivery.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Malaria in Pregnancy — Intermittent Preventive Treatment and ITNs",
        note: "Educational source — verify current WHO guidance.",
      },
      {
        organization: "Ghana Health Service",
        title: "National Malaria Control and ANC Guidelines",
        note: "Educational reference — consult current GHS policy.",
      },
    ],
  },

  // ── 13. Infection ──────────────────────────────────────────
  {
    courseSlug: "microbiology-1",
    moduleTitle: "Infection & Its Chain",
    lessonTitle: "Infection: What's Actually Happening in the Body",
    description:
      "Colonisation versus infection, pathogenicity and the battle that follows when microbes get in.",
    difficulty: "Moderate",
    durationMin: 14,
    objectives: [
      "Distinguish colonisation from infection using the body's response as the test.",
      "Describe the five stages of an infection from incubation to convalescence.",
      "Explain pathogenicity, virulence and opportunistic infection with examples.",
    ],
    tags: ["infection", "pathogenicity", "colonisation", "stages of infection"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "Your skin is a busy city",
        body: "Your skin and gut right now host billions of bacteria — a whole city of residents, going about their business, causing you nothing. This is **colonisation**: microbes present on or in the body without causing disease. It is the normal state of every living human.\n\nInfection is different, and the difference is the body's response. Infection means microbes have invaded tissue and multiplied there, and the body has answered: fever, pain, swelling, redness, heat, pus. Colonisation is a resident quietly renting a room. Infection is a resident who has set fire to the building, and the fire brigade has arrived. The smoke and sirens you see are the body's response — not the microbe itself.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Not every microbe can cause disease, and those that can do not cause it every time. **Pathogenicity** is the ability to cause disease at all; **virulence** is how strongly it does it. Dose, route and the host's defences decide the outcome — an organism a healthy student shrugs off can seriously harm a malnourished mother or a newborn.\n\nInfections run a five-act story. Incubation: organisms multiply silently — the person feels well but may already be contagious. Prodromal stage: vague unease — tiredness, off food, aching — often the most contagious phase of all. Illness: the full classic signs appear. Decline: the defences or treatment begin to win. Convalescence: strength rebuilds — recovery still needs nutrition and rest.\n\nOne more idea earns its keep: the **opportunistic infection**. Candida lives quietly in many mouths and vaginas — until antibiotics kill the protective bacteria, or diabetes or lowered immunity changes the terrain. Then the quiet resident turns troublesome. Infections can also arrive from outside (exogenous) or from the body's own flora reaching the wrong place (endogenous) — the gut's E. coli causing a urinary infection is the classic case.",
      },
      {
        type: "clinical_pearl",
        title: "Fever is the alarm, not the fire",
        body: "Fever is the body's alarm, not the enemy itself. Find what set it off — and document and report it — before you think about silencing it. An undocumented fever is a warning that went unfiled.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "It is day three after caesarean section, and you are helping with postnatal checks. Bed 4's wound shows mild bruising around a clean, closed incision; she is comfortable and afebrile. Bed 7's wound edges are spreading red and hot to the touch, swollen and exquisitely tender when you lightly press; she has a temperature of 38.4 degrees and has not eaten breakfast because she feels unwell.\n\nWhich woman is colonised-or-healing and which is infected — and what gives it away?\n\nAnswer: Bed 4 is healing normally: bruising without the signs of a battle is expected after surgery, and she feels well. Bed 7 is infected — the wound has redness, heat, swelling, pain and a fever: the five signs of the body's inflammatory response in full voice. That cluster is what separates infection from colonisation: it is the host's response, not merely the presence of microbes. Your actions as a student are to report immediately, document precisely (site, size, temperature, time), prepare for wound swabbing and review by the team, and monitor her vitals more closely — infection after surgery moves fast, and early reporting is the treatment's head start.",
      },
      {
        type: "memory_trick",
        body: "The five acts of an infection: In Pregnancy, I Drink Cocoa — Incubation, Prodromal, Illness, Decline, Convalescence. The quiet first act, the vague second, the storm of the third, the cooling of the fourth, the rebuilding of the fifth.",
      },
      {
        type: "summary",
        body: "- Colonisation: microbes present without harm — the normal state of every body.\n- Infection: invasion plus multiplication in tissue, plus the body's response — fever, pain, swelling, redness, heat, pus.\n- Pathogenicity is the ability to cause disease; virulence is how hard it hits; dose, route and host defences decide the outcome.\n- Five stages: incubation (silent), prodromal (vague and very contagious), illness, decline, convalescence.\n- Opportunists attack when defences drop — Candida after antibiotics or in diabetes.\n- Exogenous infections come from outside; endogenous ones come from the body's own flora in the wrong place.",
      },
    ],
    questions: [
      {
        topic: "Colonisation vs Infection",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A swab from a healthy woman's vagina grows Candida, but she has no itching, discharge or discomfort. What is this called?",
        options: [
          "Infection",
          "Colonisation — organisms present without disease",
          "Contamination of the swab only",
          "Septicaemia",
        ],
        correctIndex: 1,
        explanation:
          "Colonisation means organisms are present without any host response or tissue damage — the normal condition of many body sites. It becomes infection only when invasion and the body's response (symptoms and signs) appear.",
      },
      {
        topic: "Stages of Infection",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A nurse feels vaguely tired and 'off' for two days, with no specific symptoms, before developing classic measles rash. What was the two-day period called?",
        options: [
          "The incubation period",
          "The prodromal stage — vague, non-specific symptoms, often highly contagious",
          "The convalescent stage",
          "The decline stage",
        ],
        correctIndex: 1,
        explanation:
          "The prodromal stage sits between silent incubation and full illness: non-specific unease like tiredness and poor appetite, with no classic signs yet — and often the most contagious period, which is why infection control cannot wait for diagnoses.",
      },
      {
        topic: "Opportunistic Infection",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman develops vaginal thrush a week after finishing a course of broad-spectrum antibiotics. What best explains this?",
        options: [
          "The antibiotics directly fed the Candida",
          "Antibiotics killed the protective lactobacilli, allowing normally quiet Candida to overgrow — an opportunistic infection",
          "Thrush is always sexually transmitted, so a partner must be treated",
          "The antibiotics were expired",
        ],
        correctIndex: 1,
        explanation:
          "This is the textbook opportunist: Candida colonises harmlessly until something removes the competition. Broad-spectrum antibiotics clear the protective lactobacilli, and the quiet resident seizes the territory. It is not an STI, and the lesson is to use antibiotics precisely, not promiscuously.",
      },
    ],
    flashcards: [
      {
        topic: "Colonisation vs Infection",
        front: "What separates colonisation from infection?",
        back: "The host's response. Colonisation = microbes present, no harm, no signs. Infection = invasion plus multiplication in tissue, with fever, pain, swelling, redness, heat or pus.",
      },
      {
        topic: "Stages of Infection",
        front: "Name the five stages of infection in order.",
        back: "Incubation (silent), Prodromal (vague, very contagious), Illness (full signs), Decline (defences or treatment winning), Convalescence (rebuilding). 'In Pregnancy, I Drink Cocoa'.",
      },
      {
        topic: "Opportunistic Infection",
        front: "What is an opportunistic infection? Give one example.",
        back: "Disease caused by a normally harmless organism when host defences weaken. Example: Candida thrush after antibiotics kill protective lactobacilli, or in uncontrolled diabetes.",
      },
    ],
    sources: [
      {
        organization: "McGraw Hill",
        title: "Prescott's Microbiology",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "Infection Prevention and Control — Core Concepts",
        note: "Educational source — verify current WHO materials.",
      },
    ],
  },

  // ── 14. Transmission ───────────────────────────────────────
  {
    courseSlug: "microbiology-1",
    moduleTitle: "Infection & Its Chain",
    lessonTitle: "Transmission: How Microbes Travel",
    description:
      "Contact, droplets, vectors and vehicles — the routes every infection takes between people.",
    difficulty: "Moderate",
    durationMin: 14,
    objectives: [
      "List the main routes of transmission with one disease example for each.",
      "Distinguish droplet from airborne spread and faecal-oral from blood-borne spread.",
      "Describe mother-to-child (vertical) transmission and its three timings.",
    ],
    tags: ["transmission", "routes", "droplet", "faecal-oral", "vertical transmission"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "Germs cannot walk — they ride",
        body: "Microbes have no legs, no wings and no fare. To move from one person to the next, every one of them needs a route — a vehicle to ride. Learn the routes, and you can see infection as transport: identify the road, and you know exactly where to build the roadblock.\n\nThat is the whole logic of infection prevention. Hand washing, safe water, bed nets, sterile instruments, gloves and vaccination are not a list of rules to memorise — each one is a roadblock aimed at a specific route. This lesson gives you the map the roadblocks stand on. Cholera rides water, malaria rides a mosquito, flu rides a cough — one principle, many vehicles.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Contact** is the commonest road: direct, skin-to-skin or sexual (gonorrhoea, HIV, syphilis), or indirect through shared objects — towels, combs, instruments. **Droplet** spread rides the heavy spray of a cough or sneeze, travelling about a metre before dropping — influenza and whooping cough go this way, and distance, masks and cough etiquette block them. **Airborne** spread is the stealth upgrade: tiny dried nuclei that float far and stay suspended for hours — tuberculosis, measles and chickenpox move like this, demanding ventilation and isolation, not just distance.\n\n**Faecal-oral** spread runs from waste to mouth through dirty hands, water and food — cholera, typhoid, hepatitis A, polio — the route of the latrine and the unprotected well, with soap and safe water as its roadblocks. **Vector-borne** spread uses living couriers: the night-biting Anopheles mosquito carrying malaria, Aedes carrying yellow fever and dengue. **Blood and body fluids** carry HIV and hepatitis B — the route behind sharps safety, gloves and screening.\n\nThe last route is uniquely yours: **vertical transmission**, mother to child, with three timings — through the placenta in pregnancy (syphilis, rubella, HIV, toxoplasmosis); during birth through the birth canal (gonorrhoea and chlamydia into the newborn's eyes, hepatitis B); and through breast milk (HIV, where it is). Each timing has a nursing answer: treatment in pregnancy, eye care and vaccines at birth, safer feeding plans.",
      },
      {
        type: "clinical_pearl",
        title: "Every door has a key",
        body: "Every route has a door, and every door has a key: hand washing, safe water, bed nets, condoms, clean birth practices, sterile sharps and vaccines. You are training to be the key-holder.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A mother brings her three-day-old baby to the postnatal ward. Both eyelids are swollen and there is thick, yellow discharge pouring from the eyes. The baby was born at home with a traditional birth attendant. The mother's antenatal record is incomplete — she registered late and recalls being told she had 'a small infection' once that was treated. She asks anxiously why the baby's eyes are like this.\n\nWhich route of transmission is at work, and what will you tell her?\n\nAnswer: This is almost certainly gonococcal eye infection — the newborn met Neisseria gonorrhoea during passage through an infected birth canal: direct contact, mother to child, at the moment of birth. Untreated, it can destroy the newborn's sight within days, so immediate referral and treatment are the priority. Explain gently that a silent infection passed to the baby during delivery, that it is treatable, and that she and her partner both need assessment and treatment to stop it passing back and forth. The prevention lesson is threefold: antenatal screening and treatment, clean birth practices, and the newborn eye care given at delivery — a minute of ointment that spares a lifetime of blindness.",
      },
      {
        type: "memory_trick",
        body: "The seven tro-tro routes of infection: Touch, Cough, Air, Faeces-to-mouth, Mosquito, Blood, and Mother-to-baby. Germs cannot drive themselves — every outbreak is riding one of these seven.",
      },
      {
        type: "summary",
        body: "- Every microbe needs a route to travel — identify the route and you know where to build the roadblock.\n- Contact: direct (touch, sex) or indirect via shared objects.\n- Droplet spread travels about a metre and drops; airborne nuclei float for hours (TB, measles) and demand ventilation and isolation.\n- Faecal-oral runs from waste to mouth through hands, water and food (cholera, typhoid, hepatitis A) — soap and safe water are the roadblocks.\n- Vectors carry malaria and yellow fever; blood and body fluids carry HIV and hepatitis B.\n- Vertical (mother-to-child) transmission happens via placenta, birth canal or breast milk — and each timing has a nursing answer.",
      },
    ],
    questions: [
      {
        topic: "Faecal-Oral Route",
        type: "MCQ",
        difficulty: "Easy",
        stem: "After heavy rains flood the latrines of a village, several people develop profuse watery diarrhoea, and the well water is suspected. Which route of transmission is this?",
        options: [
          "Airborne",
          "Vector-borne",
          "Faecal-oral, via contaminated water",
          "Vertical transmission",
        ],
        correctIndex: 2,
        explanation:
          "Cholera and its watery-diarrhoea relatives travel from waste to mouth — through water, food or hands. Flooded latrines feeding a drinking well is the classic outbreak story, and the response is safe water, treatment, and hand washing with soap.",
      },
      {
        topic: "Droplet vs Airborne",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is tuberculosis handled differently from influenza on a ward, in terms of transmission?",
        options: [
          "Tuberculosis is not transmissible between people",
          "Influenza is only spread by blood contact",
          "TB bacteria travel in tiny airborne particles that float and linger for hours, while flu droplets are heavy and fall within about a metre",
          "Both travel exactly the same way, so no difference exists",
        ],
        correctIndex: 2,
        explanation:
          "Droplets (flu, whooping cough) are large and drop after roughly a metre, so distance, masks and etiquette usually suffice. Airborne nuclei (TB, measles, chickenpox) are tiny, float for hours and travel on air currents, demanding ventilation and proper isolation.",
      },
      {
        topic: "Vertical Transmission",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A newborn develops severe purulent eye discharge on day three. The mother had an untreated genital infection. At which point was the infection most likely transmitted to the baby?",
        options: [
          "Through the placenta during pregnancy",
          "During passage through the birth canal, by direct contact",
          "Through breastfeeding on day one",
          "From the ward blankets after birth",
        ],
        correctIndex: 1,
        explanation:
          "Gonococcal eye infection is picked up as the baby passes through an infected birth canal — direct contact at the moment of birth. It is prevented by treating the mother during pregnancy and by newborn eye care at delivery; the timing of transmission is the timing of the prevention.",
      },
    ],
    flashcards: [
      {
        topic: "Transmission Routes",
        front: "Name the seven routes of infection transmission.",
        back: "Touch (direct contact), Cough (droplets), Air (airborne nuclei), Faeces-to-mouth, Mosquito (vectors), Blood and body fluids, and Mother-to-baby (vertical).",
      },
      {
        topic: "Droplet vs Airborne",
        front: "What is the practical difference between droplet and airborne transmission?",
        back: "Droplets are heavy and fall within about a metre (flu) — distance and masks block them. Airborne nuclei are tiny, float for hours and travel on air (TB, measles, chickenpox) — they demand ventilation and isolation.",
      },
      {
        topic: "Vertical Transmission",
        front: "What are the three timings of mother-to-child transmission, with one example each?",
        back: "Through the placenta in pregnancy (syphilis, rubella, HIV); through the birth canal during birth (gonorrhoea into the eyes, hepatitis B); through breast milk (HIV, where it is).",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Infection Prevention and Control — Modes of Transmission",
        note: "Educational source — verify current WHO materials.",
      },
      {
        organization: "Ghana Health Service",
        title: "National Infection Prevention and Control Guidelines",
        note: "Educational reference — consult current national document.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Nurses",
        year: "2020 (17th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },
];
