// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 1, Semester 1 — Batch A (Anatomy & Physiology I)
// 14 lessons anchored to prisma/seed-data/anchors/y1s1-a.json
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "anatomy-physiology-1",
    moduleTitle: "The Language of the Body",
    lessonTitle: "Anatomical Terminology: Saying Exactly What You Mean",
    description:
      "The small, precise words that make a chart note mean the same thing in every facility in Ghana. Learn them once and every handover you ever give becomes clearer.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Define the six core pairs of directional terms used in anatomy and midwifery charting.",
      "Explain why directional terms are always described from the patient's own body, never from yours.",
      "Apply directional terms to real ward descriptions such as fundal height, wounds and calf swelling.",
    ],
    tags: ["terminology", "directional terms", "anatomy", "charting"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every shift, you will describe what you see. The fundus is here. The wound is there. The baby's back lies against the mother's front. If your words are loose, the next midwife must guess — and guessing is how mistakes travel from shift to shift.\n\nAnatomy solves this with a small set of directional words. They are short, they are standard, and they mean exactly the same thing in every facility in Ghana and beyond. In this lesson you will meet the six working pairs and practise turning everyday descriptions into language any midwife can picture instantly.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Superior** means toward the head; **inferior** means toward the feet. The umbilicus is superior to the pubic bone and inferior to the chest. **Anterior** means toward the front of the body; **posterior** means toward the back. The heart sits posterior to the sternum.\n\n**Medial** means nearer the midline — the invisible line splitting the body into equal left and right halves — while **lateral** means further from it. The nose is medial to the eyes; the ears are lateral to them.\n\n**Proximal** and **distal** belong to the limbs. Proximal means nearer the trunk, distal means further from it. Notice how relative they are: the elbow is proximal to the wrist yet distal to the shoulder, so always ask — proximal to what? Finally, **superficial** means near the skin, **deep** means further in. Structures on the same side are **ipsilateral**; opposite sides are **contralateral**.",
      },
      {
        type: "clinical_pearl",
        body: "Directional words belong to the patient, never to you. If she rolls onto her side, anterior does not move. Before you chart, quietly picture the body standing tall in anatomical position and describe from there.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "It is a quiet night shift on a postnatal ward. A woman who delivered this morning complains of pain in her right leg. You find a tender, warm swelling on the medial side of her right calf, about six centimetres inferior to the back of the knee, and you report it in exactly those words. The senior midwife takes it seriously and orders a full assessment — calf pain after birth can signal a clot in a deep vein.\n\nWhy does your description work better than saying 'a painful spot on her leg'? And if she turns onto her left side to be examined, do any of your words change?\n\nAnswer: The standard words locate the swelling precisely for anyone reading the note, with no diagram needed — medial side of the right calf, inferior to the knee. None of the words change when she turns, because they are defined from her body in anatomical position, not from her posture or from where you happen to be standing.",
      },
      {
        type: "memory_trick",
        body: "Keep the twins straight with silly hooks: SUPerior points UP, and INferior is the lower floor. PROXimal is in proXimity to the trunk; DISTal is DISTant from it. For everything else, picture the body standing tall in anatomical position and simply translate.",
      },
      {
        type: "summary",
        body: "- Superior: toward the head. Inferior: toward the feet.\n- Anterior: front. Posterior: back — always the patient's front and back, not yours.\n- Medial: nearer the midline. Lateral: further from it.\n- Proximal: nearer the trunk along a limb. Distal: further from it — always relative, never absolute.\n- Superficial: near the surface. Deep: further in. Ipsilateral: same side. Contralateral: opposite side.\n- Chart from anatomical position so any midwife reads your note and sees exactly what you saw.",
      },
    ],
    questions: [
      {
        topic: "Anatomical Terminology",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A student charts that a dressing sits 3 cm superior to the umbilicus. What does this tell you?",
        options: [
          "The dressing is 3 cm above the umbilicus, toward the head",
          "The dressing is 3 cm below the umbilicus, toward the feet",
          "The dressing is 3 cm in front of the umbilicus",
          "The dressing is 3 cm behind the umbilicus",
        ],
        correctIndex: 0,
        explanation:
          "Superior means toward the head. A point 3 cm superior to the umbilicus lies above it, nearer the head. If the note had said inferior, the dressing would be below it.",
        courseSlug: "anatomy-physiology-1",
      },
      {
        topic: "Anatomical Terminology",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman lies on her left side, facing you, and you chart the fetal back against her anterior abdominal wall. A classmate argues that since she is facing you, anterior should now mean the side away from you. What is the correct response?",
        options: [
          "Anterior follows the observer, so the classmate is right and the note must be rewritten",
          "She must be returned to standing anatomical position before anything can be charted",
          "Anterior is defined from the patient's own body, so the description stays correct however she lies",
          "The classmate is right, but only when the woman is in the third trimester",
        ],
        correctIndex: 2,
        explanation:
          "Directional terms are defined from the patient's body in anatomical position, not from her posture or your viewpoint. Her anterior surface remains her front whether she stands, sits or rolls onto her side.",
        courseSlug: "anatomy-physiology-1",
      },
      {
        topic: "Anatomical Terminology",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which statement about positions along the arm is correct?",
        options: [
          "The elbow is proximal to the shoulder",
          "The fingers are proximal to the wrist",
          "The wrist is distal to the elbow",
          "The shoulder is distal to the fingers",
        ],
        correctIndex: 2,
        explanation:
          "The wrist is further from the trunk than the elbow, so it is distal to it. The elbow is distal (not proximal) to the shoulder, the fingers are distal to the wrist, and the shoulder is the most proximal point named.",
        courseSlug: "anatomy-physiology-1",
      },
    ],
    flashcards: [
      {
        topic: "Directional Terms",
        front: "What does superior mean, with a fundal example?",
        back: "Superior = toward the head. At about 20 weeks the fundus is at the level of the umbilicus, then climbs superior to it as the uterus grows.",
      },
      {
        topic: "Directional Terms",
        front: "Medial vs lateral?",
        back: "Medial = nearer the midline; lateral = further from it. The nose is medial to the eyes; the ears are lateral to them.",
      },
      {
        topic: "Directional Terms",
        front: "Proximal vs distal — and why are they always relative?",
        back: "Proximal = nearer the trunk along a limb; distal = further from the trunk. The elbow is proximal to the wrist but distal to the shoulder, so always ask: proximal to what?",
      },
    ],
    sources: [
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
        note: "Free, peer-reviewed textbook. Educational source — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Gray's Anatomy for Students",
        year: "2020 (4th edition)",
        note: "Educational source — verify current edition and use alongside your course texts.",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "anatomy-physiology-1",
    moduleTitle: "The Language of the Body",
    lessonTitle: "Body Planes and Positions: The Body's Standard Slices",
    description:
      "Three imaginary slices — sagittal, coronal and transverse — quietly organise everything from fundal height to ultrasound reports. Meet the body's standard cuts.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Name the three anatomical planes and state what each divides the body into.",
      "Distinguish a mid-sagittal slice from any other sagittal slice.",
      "Apply plane language to fundal height checks and common ultrasound reports.",
    ],
    tags: ["body planes", "orientation", "anatomy", "ultrasound", "fundal height"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Imagine holding a sheet of glass and slicing straight through a standing body. Where the glass passes, and what it separates, names the plane. Three standard slices do most of the work in anatomy: sagittal, coronal and transverse.\n\nYou will meet them everywhere. Ultrasound reports speak in them. Fundal height is described along one of them. The regions and quadrants of the abdomen are drawn with them. This lesson makes the three slices second nature so the words never slow you down again.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "A **sagittal** plane runs vertically, front to back, dividing the body into left and right parts. When it passes through the exact midline and splits the body into equal halves, it is called **mid-sagittal** (or median). A **coronal** plane — also called frontal — runs vertically from shoulder to shoulder, dividing the body into anterior and posterior parts. A **transverse** plane runs horizontally, like a blade passing at waist height, dividing the body into superior and inferior parts; scan reports often call it axial.\n\nNow the clinical payoff. Fundal height is a transverse story: the umbilicus names a horizontal level, and you chart the fundus against it — roughly at 20 weeks in a well-dated pregnancy. A scan showing a transverse view of the uterus is slicing horizontally; a sagittal view runs front to back. Even the words for how the baby lies inside — longitudinal and transverse — borrow from this same family of slices.",
      },
      {
        type: "clinical_pearl",
        body: "Fundus at the umbilicus is a transverse statement: the top of the uterus has climbed to the horizontal line drawn through the umbilicus. If the fundus is far off that line at 20 weeks, think dates, twins, or too much or too little fluid — and measure properly.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 20-year-old attends focused antenatal care at your CHPS compound at about 20 weeks by dates. The midwife palpates and asks you to chart the finding: fundus firm, midline, at the level of the umbilicus. Later she shows you the referral ultrasound report, which reads 'transverse view of the uterus, single fetus, active heart'.\n\nThe tutor asks you two questions. Which plane does the ultrasound slice run along, and what does that slice divide? And if a mid-sagittal view were taken instead, what would it show?\n\nAnswer: The transverse view slices along the horizontal transverse plane, dividing the body into superior and inferior parts — on the screen you see a cross-section. A mid-sagittal view would slice vertically through the exact midline, dividing the body into equal left and right halves and showing structures at the midline from front to back.",
      },
      {
        type: "memory_trick",
        body: "SCoT: Sagittal Splits left from right, Coronal Cuts front from back, Transverse Takes the top from the bottom. Say it aloud three times and the planes will hold through every exam.",
      },
      {
        type: "summary",
        body: "- Sagittal: vertical, splits the body into left and right parts; mid-sagittal passes through the exact midline for equal halves.\n- Coronal (frontal): vertical, splits the body into anterior and posterior parts.\n- Transverse (axial): horizontal, splits the body into superior and inferior parts.\n- Fundal height is charted against transverse levels — the umbilicus is a horizontal landmark.\n- Ultrasound views are named after planes: a transverse view and a sagittal view show different pictures of the same uterus.",
      },
    ],
    questions: [
      {
        topic: "Body Planes",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which plane divides the body into anterior and posterior parts?",
        options: ["Transverse", "Sagittal", "Coronal", "Mid-sagittal"],
        correctIndex: 2,
        explanation:
          "The coronal (frontal) plane runs vertically from shoulder to shoulder and divides the body into front and back portions. Sagittal divides left from right; transverse divides top from bottom.",
        courseSlug: "anatomy-physiology-1",
      },
      {
        topic: "Body Planes",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "An ultrasound report describes a transverse view of the uterus. What does this tell you about the imaging slice?",
        options: [
          "It is a vertical slice through the midline, dividing left from right",
          "It is a horizontal slice dividing the body into superior and inferior parts",
          "It is a vertical slice from shoulder to shoulder, dividing front from back",
          "It runs along the skin surface of the abdomen without entering the body",
        ],
        correctIndex: 1,
        explanation:
          "Transverse means horizontal. The imaging slice divides the body into superior and inferior parts and shows a cross-section — a very different picture from a sagittal view of the same uterus.",
        courseSlug: "anatomy-physiology-1",
      },
      {
        topic: "Body Planes",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What makes a sagittal plane a mid-sagittal (median) plane?",
        options: [
          "It passes through the exact midline, producing equal right and left halves",
          "It divides the body into front and back parts",
          "It runs horizontally at waist level",
          "It is the only plane that passes through the umbilicus",
        ],
        correctIndex: 0,
        explanation:
          "Any vertical front-to-back slice that splits left from right is sagittal; the one passing through the exact midline, making the halves equal, is the mid-sagittal or median plane.",
        courseSlug: "anatomy-physiology-1",
      },
    ],
    flashcards: [
      {
        topic: "Body Planes",
        front: "Name the three standard body planes and what each divides.",
        back: "Sagittal: left and right (mid-sagittal at the exact midline). Coronal: front and back (anterior/posterior). Transverse: top and bottom (superior/inferior).",
      },
      {
        topic: "Body Planes",
        front: "What does SCoT stand for?",
        back: "Sagittal Splits, Coronal Cuts, Transverse Takes — left/right, front/back, top/bottom.",
      },
      {
        topic: "Body Planes",
        front: "Why is fundal height a transverse measurement?",
        back: "The fundus is charted against horizontal levels of the abdomen — the umbilicus is a transverse landmark, reached at about 20 weeks in a well-dated pregnancy.",
      },
    ],
    sources: [
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Gray's Anatomy for Students",
        year: "2020 (4th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "anatomy-physiology-1",
    moduleTitle: "The Language of the Body",
    lessonTitle: "Levels of Organization: From Atom to Whole Person",
    description:
      "The body builds itself from atoms to whole person, floor by floor. Once you can name the floors, every disease you meet has an address.",
    difficulty: "Easy",
    durationMin: 13,
    objectives: [
      "List the levels of structural organization from atom to organism, in the correct order.",
      "Explain why the cell is called the basic unit of life.",
      "Apply the levels ladder to explain how a molecular change such as sickle haemoglobin becomes a whole-person illness.",
    ],
    tags: ["organization", "structure", "anatomy", "sickle cell"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The body is not one lump. It is built in floors, like a storey building rising from the very tiny to the very large. Atoms join into molecules, molecules gather into organelles, organelles make a cell — and cells team up into tissues, organs, systems and finally the whole person you care for.\n\nThis ladder of levels is the backbone of everything else you will learn in anatomy. When you can name the floors in order, every disease you meet has an address — and knowing the address tells you a lot about the treatment.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Start at the bottom. **Atoms** are the chemical building blocks — carbon, hydrogen, oxygen, iron. Atoms join into **molecules** — water, oxygen gas, and proteins like haemoglobin. Molecules assemble into **organelles**, the small working parts inside a cell. One full set of organelles wrapped in a membrane makes a **cell**, the smallest level that is fully alive.\n\nCells of one kind working together form a **tissue**, such as muscle or blood. Different tissues combining into one structure make an **organ** — the heart, the uterus, the liver. Organs cooperating on one job form an **organ system**, and all the systems together make the **organism**, the whole woman.\n\nFollow one thread upward: iron atoms sit inside haemoglobin molecules, packed into red blood cells, carried in blood (a tissue), moved by the heart (an organ) within the cardiovascular system (a system), serving the whole mother (an organism). One small change at the bottom — sickle haemoglobin — becomes pain and anaemia at the top.",
      },
      {
        type: "clinical_pearl",
        body: "Knowing the level tells you where a disease lives. Sickle cell disease begins at the molecule, anaemia shows at the cell and tissue level, and pre-eclampsia strikes at the organ-system level across kidneys, liver, brain and vessels. Ask yourself: which floor is broken?",
      },
      {
        type: "case",
        title: "On the ward",
        body: "During antenatal counselling at a district hospital, a woman with sickle cell trait asks why one 'small blood problem' could cause her future child such big pain. She has watched a cousin suffer repeated painful crises. The tutor turns to you: explain, in the language of levels, how one tiny change becomes a whole-person illness.\n\nAnswer: The primary change sits at the molecule level — inside haemoglobin. That small change makes red cells stiffen into a sickle shape under stress. Sickled cells clog tiny vessels and starve tissues of oxygen, so the pain begins at the tissue level. Organs such as the spleen suffer damage over time, and the result at the organism level is a child who lives with pain, anaemia and crises. A molecular address, a whole-body consequence — that is why the levels matter.",
      },
      {
        type: "memory_trick",
        body: "Build a compound in your mind: atoms are the sand, molecules the cement blocks, organelles the fittings, cells the rooms, tissues the walls, organs the kitchen and bedroom, systems the whole wing — and the organism is the finished compound. Nobody skips a floor.",
      },
      {
        type: "summary",
        body: "- Order of levels: atom, molecule, organelle, cell, tissue, organ, organ system, organism.\n- The cell is the smallest level that is fully alive — the basic unit of life.\n- Tissues are cells of one kind; organs mix tissues; systems link organs; the organism is the whole person.\n- Follow one thread: iron in haemoglobin in red cells in blood moved by the heart within the system serving the whole woman.\n- Diseases have addresses: sickle cell at the molecule, anaemia at the cell, pre-eclampsia at the organ-system level.",
      },
    ],
    questions: [
      {
        topic: "Levels of Organization",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which level of organization is the smallest unit considered fully alive on its own?",
        options: ["Atom", "Molecule", "Organelle", "Cell"],
        correctIndex: 3,
        explanation:
          "Atoms, molecules and organelles are chemicals and parts, not alive independently. The cell is the smallest structure that carries out all the activities of life, which is why it is called the basic unit of life.",
        courseSlug: "anatomy-physiology-1",
      },
      {
        topic: "Levels of Organization",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which sequence lists the levels of organization correctly from simplest to most complex?",
        options: [
          "Atom, molecule, organelle, cell, tissue, organ, organ system, organism",
          "Cell, atom, organelle, molecule, tissue, organ system, organ, organism",
          "Atom, organelle, molecule, cell, organ, tissue, organ system, organism",
          "Molecule, atom, cell, tissue, organelle, organ, organism, organ system",
        ],
        correctIndex: 0,
        explanation:
          "Each level is built from the one below it: atoms form molecules, molecules form organelles, organelles make cells, cells make tissues, tissues make organs, organs make systems, and systems make the whole organism. The other options scramble this ladder.",
        courseSlug: "anatomy-physiology-1",
      },
      {
        topic: "Levels of Organization",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In sickle cell disease, at which level does the primary problem begin?",
        options: [
          "At the organ level, in the spleen",
          "At the molecule level, inside haemoglobin",
          "At the tissue level, in blood plasma",
          "At the organ system level, in the heart",
        ],
        correctIndex: 1,
        explanation:
          "The first fault is a tiny change in the haemoglobin molecule. Everything else — sickled red cells, blocked vessels, tissue pain, organ damage — follows upward from that molecular change, which is why the disease is described as a molecular-level disorder.",
        courseSlug: "anatomy-physiology-1",
      },
    ],
    flashcards: [
      {
        topic: "Levels of Organization",
        front: "List the levels of organization from simplest to most complex.",
        back: "Atom, molecule, organelle, cell, tissue, organ, organ system, organism.",
      },
      {
        topic: "Levels of Organization",
        front: "Why is the cell called the basic unit of life?",
        back: "It is the smallest structure that performs all the activities of life on its own — metabolism, response, growth and reproduction. Smaller parts are chemicals, not living units.",
      },
      {
        topic: "Levels of Organization",
        front: "Give one example of tracing a substance through every level.",
        back: "Iron atoms in haemoglobin molecules, packed into red blood cells, carried in blood (tissue) by the heart (organ) within the cardiovascular system, serving the whole woman (organism).",
      },
    ],
    sources: [
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Pearson",
        title: "Martini: Fundamentals of Anatomy and Physiology",
        year: "2021 (11th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "anatomy-physiology-1",
    moduleTitle: "Cells, Tissues & Transport",
    lessonTitle: "Cells: The Building Blocks of Everything",
    description:
      "A friendly tour of the cell and its hardworking organelles — and why feeding a labouring mother is really feeding her uterus's mitochondria.",
    difficulty: "Easy",
    durationMin: 13,
    objectives: [
      "Identify the main organelles of a cell and state the job of each.",
      "Explain how organelle function links to ward realities such as labour energy and haemoglobin.",
      "Apply your knowledge of the nucleus to explain why a mature red blood cell carries no nucleus.",
    ],
    tags: ["cells", "organelles", "anatomy", "atp"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every organ you will ever touch — the contracting uterus, the beating heart, the skin you swaddle a newborn in — is a city built of cells. Your body runs on trillions of them, and each one is alive: it feeds, works, communicates and cleans up after itself.\n\nIn this lesson you will take a short tour of a typical cell and meet the workers inside. When you understand what each worker does, you will also understand why the body breaks down the way it does when one of them fails.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The **nucleus** is the control room. It guards the DNA, the instruction manual for every protein the cell will ever make. **Mitochondria** are the generators: they burn food with oxygen to produce ATP, the fuel all cells run on. **Ribosomes** are the construction crew, reading the instructions and assembling proteins — including the haemoglobin packed into red cells.\n\nThe **endoplasmic reticulum** folds and moves the new proteins, and the **Golgi apparatus** labels and packages them for delivery, like a post office. **Lysosomes** are the sweepers, digesting worn-out parts and swallowed germs. Around everything, the **cell membrane** holds the border and controls traffic.\n\nTwo ward links to hold onto. A labouring uterus is hard muscular work, and its cells burn ATP quickly — which is one reason exhausted, starved mothers tire in labour. And a mature red blood cell throws away its nucleus entirely so it can carry maximum haemoglobin, trading a long life for carrying capacity.",
      },
      {
        type: "clinical_pearl",
        body: "Muscle cells stacked with mitochondria can work long and hard; cells short of fuel fail early. That is why in a long labour the midwife keeps the mother hydrated and encourages light, energy-giving food where the midwife in charge allows — you are feeding the uterus's mitochondria, not just the mother.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are a student at a busy district hospital. A woman in early labour has been in the corridor since dawn with nothing to eat or drink, and she is visibly tiring. The senior midwife settles her, gives her sips of oral rehydration fluid, and arranges some light food, telling the worried relative, 'the womb is a muscle, and muscles need fuel'. She then turns to you with a question: which part of the woman's cells turns that food into usable energy, and why does a starved labour tire?\n\nAnswer: The mitochondria. They take glucose and oxygen and produce ATP, the fuel every cell runs on. The myometrium, the muscle wall of the uterus, spends ATP with every contraction — so a mother who is dehydrated and starved runs her uterine cells low on fuel, and contractions become weak and tired. Feeding and hydrating her supports the labour at the cellular level.",
      },
      {
        type: "memory_trick",
        body: "Picture the cell as a compound: the nucleus is the chief's house giving orders, mitochondria are the generator, ribosomes run the chop bar cooking up proteins, the Golgi is the parcel shed, lysosomes are the sweepers, and the membrane is the fence with its gateman.",
      },
      {
        type: "summary",
        body: "- Nucleus: guards DNA and directs the cell's activity — the control room.\n- Mitochondria: burn glucose with oxygen to make ATP, the cell's fuel.\n- Ribosomes build proteins; the endoplasmic reticulum folds them; the Golgi packages and ships them.\n- Lysosomes digest waste and germs; the membrane guards the border and controls traffic.\n- Uterine contractions spend ATP — starved, dehydrated mothers tire in labour.\n- Red blood cells discard their nucleus to carry maximum haemoglobin.",
      },
    ],
    questions: [
      {
        topic: "Cell Organelles",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which organelle is the cell's main site of ATP production?",
        options: ["Mitochondrion", "Nucleus", "Ribosome", "Golgi apparatus"],
        correctIndex: 0,
        explanation:
          "Mitochondria take in glucose and oxygen and produce ATP, the usable fuel of the cell. That is why busy cells such as uterine muscle are packed with them.",
        courseSlug: "anatomy-physiology-1",
      },
      {
        topic: "Cell Organelles",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which structure contains the cell's DNA and directs all its activity?",
        options: ["Lysosome", "Nucleus", "Cell membrane", "Ribosome"],
        correctIndex: 1,
        explanation:
          "The nucleus houses the DNA, the instruction manual for every protein the cell makes, and issues the instructions that direct the cell's work. Ribosomes carry out the instructions but do not store them.",
        courseSlug: "anatomy-physiology-1",
      },
      {
        topic: "Cell Organelles",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why can a mature red blood cell carry so much haemoglobin?",
        options: [
          "It ejects its nucleus, freeing space to pack in haemoglobin",
          "It has a double membrane that stores extra haemoglobin",
          "Its mitochondria convert glucose directly into haemoglobin",
          "It absorbs ready-made haemoglobin from plasma using the Golgi",
        ],
        correctIndex: 0,
        explanation:
          "As a red cell matures it pushes out its nucleus. The space and protein-making machinery it gives up is filled with haemoglobin, maximising oxygen carriage. The price is a short life of about 120 days, since the cell can no longer repair itself.",
        courseSlug: "anatomy-physiology-1",
      },
    ],
    flashcards: [
      {
        topic: "Cell Organelles",
        front: "Which organelle makes ATP, and what is ATP?",
        back: "Mitochondria make ATP — the fuel every cell runs on — by burning glucose with oxygen. Hard-working cells like uterine muscle are packed with them.",
      },
      {
        topic: "Cell Organelles",
        front: "What does the nucleus do?",
        back: "It stores DNA, the instructions for every protein the cell makes, and directs the cell's activity — the control room.",
      },
      {
        topic: "Cell Organelles",
        front: "Why does a mature red blood cell have no nucleus?",
        back: "It ejects the nucleus during maturation so it can carry maximum haemoglobin — trading self-repair and longevity (about 120 days) for oxygen-carrying capacity.",
      },
    ],
    sources: [
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Pearson",
        title: "Martini: Fundamentals of Anatomy and Physiology",
        year: "2021 (11th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "anatomy-physiology-1",
    moduleTitle: "Cells, Tissues & Transport",
    lessonTitle: "The Cell Membrane: The Gatekeeper",
    description:
      "The membrane is a border with a gateman, not a brick wall. Learn how oxygen slips through, why glucose needs a gate, and how oxytocin knocks without ever entering.",
    difficulty: "Moderate",
    durationMin: 14,
    objectives: [
      "Describe the phospholipid bilayer structure of the cell membrane.",
      "Explain selective permeability and which molecules cross the membrane easily.",
      "Apply the concept of membrane receptors to explain how oxytocin acts on the uterus.",
    ],
    tags: ["cell membrane", "transport", "receptors", "anatomy"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every cell is wrapped in a membrane so thin you will never see it with your eyes, yet nothing about the cell makes sense without it. It is not a brick wall. It is a smart, selective border — a gatekeeper that decides, every second, what may enter and what must leave.\n\nMaster the membrane and you will understand how oxygen slips into blood, how hormones talk to the uterus, and why some drugs enter cells easily while others never do.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The membrane's backbone is a double layer of **phospholipids** — the **phospholipid bilayer**. Each molecule has a water-loving head and a water-fearing tail, so the heads face the watery inside and outside while the tails hide between them, forming an oily core. Cholesterol stiffens the sheet just enough. Because the parts drift about like boats on water, scientists call the whole arrangement the fluid mosaic.\n\nStitched into this sea are **proteins** with day jobs. Channel and carrier proteins move passengers such as glucose, sodium and water that cannot pass through the oily middle. **Receptor** proteins work like locks: a hormone arriving is a key, and the cell responds without the hormone ever entering. Marker proteins flag the cell's identity so the immune system knows friend from foe.\n\nOne rule explains a great deal: because the core is oily, small fat-soluble molecules — oxygen, carbon dioxide, steroid hormones — slip straight through. Water-soluble passengers must use the protein gates. That single rule predicts how gases, drugs and nutrients move throughout the body.",
      },
      {
        type: "clinical_pearl",
        body: "Oxytocin never enters the uterine muscle cell — it knocks. Oxytocin receptors on the membrane hear the knock and trigger the contraction from outside, and those receptor numbers rise steeply near term. That is why induction works better at 40 weeks than at 34.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At term, a woman is admitted for induction after her waters broke. The midwife starts a low-dose oxytocin drip and the contractions build steadily. Over tea afterwards, a classmate recalls a preterm patient she saw at another hospital whose uterus barely responded to much higher doses, and asks why the same drug is so timid at 34 weeks and so effective at 40. The tutor looks at you: explain.\n\nAnswer: The drug did not change — the membranes did. Oxytocin acts by binding to oxytocin receptors on the surface of uterine muscle cells; it never enters the cells. As pregnancy approaches term, the number of these receptors rises sharply, so the same dose finds far more locks to open and the uterus responds with strong contractions. Near term the membrane is listening; preterm it is almost deaf.",
      },
      {
        type: "memory_trick",
        body: "The gateman rule: fat-soluble guests climb over the fence quietly, while water-soluble guests must use the gate. And hormones never enter the house — they knock, and the gateman (the receptor) passes the message inside.",
      },
      {
        type: "summary",
        body: "- The membrane is a phospholipid bilayer: water-loving heads outside, oily tails hidden inside — the fluid mosaic.\n- It is selectively permeable: it chooses what enters and leaves.\n- Small fat-soluble molecules (oxygen, carbon dioxide, steroids) cross directly; water-soluble ones need channel and carrier proteins.\n- Receptor proteins are locks that hormones unlock from outside, without entering the cell.\n- Marker proteins display cell identity to the immune system.\n- Oxytocin works by knocking on uterine receptors, whose numbers rise near term — the basis of successful induction.",
      },
    ],
    questions: [
      {
        topic: "Cell Membrane",
        type: "MCQ",
        difficulty: "Easy",
        stem: "The basic structure of the cell membrane is best described as which of the following?",
        options: [
          "A double layer of phospholipids with proteins embedded in it",
          "A single solid sheet of protein",
          "A rigid outer wall of cellulose",
          "A layer of DNA mixed with cholesterol",
        ],
        correctIndex: 0,
        explanation:
          "The membrane is a phospholipid bilayer — two rows of phospholipids with tails facing inward — studded with proteins that do the transport and signalling work. This is the fluid mosaic model.",
        courseSlug: "anatomy-physiology-1",
      },
      {
        topic: "Cell Membrane",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which substance crosses the phospholipid bilayer most easily by simple diffusion?",
        options: ["Glucose", "Sodium ions", "Oxygen", "Amino acids"],
        correctIndex: 2,
        explanation:
          "Oxygen is small and fat-soluble, so it dissolves through the oily core of the membrane without help. Glucose, sodium and amino acids are water-soluble and must pass through channel or carrier proteins.",
        courseSlug: "anatomy-physiology-1",
      },
      {
        topic: "Cell Membrane",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the role of a receptor protein in the cell membrane?",
        options: [
          "It digests worn-out organelles floating near the membrane",
          "It binds a specific signal such as a hormone and triggers a response inside the cell",
          "It packages proteins for export out of the cell",
          "It stores spare water for the cell",
        ],
        correctIndex: 1,
        explanation:
          "A receptor is a molecular lock on the membrane surface. A specific chemical messenger — a hormone like oxytocin — binds it and the cell responds, without the messenger entering. This is how many hormones command cells from outside.",
        courseSlug: "anatomy-physiology-1",
      },
    ],
    flashcards: [
      {
        topic: "Cell Membrane",
        front: "Describe the phospholipid bilayer in one sentence.",
        back: "Two back-to-back rows of phospholipids — water-loving heads facing the fluids outside and inside, water-fearing tails hidden in the middle — forming an oily core that only fat-soluble molecules can cross.",
      },
      {
        topic: "Cell Membrane",
        front: "What does selectively permeable mean?",
        back: "The membrane chooses: small fat-soluble molecules pass through, while water-soluble substances like glucose and ions must use specific channel or carrier proteins.",
      },
      {
        topic: "Cell Membrane",
        front: "How does oxytocin act on the uterus if it never enters the cell?",
        back: "It binds to oxytocin receptors on the muscle cell membrane — the gateman passes the message inward, triggering contraction. Receptor numbers rise steeply near term, which is why induction works best at term.",
      },
    ],
    sources: [
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Pearson",
        title: "Martini: Fundamentals of Anatomy and Physiology",
        year: "2021 (11th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "anatomy-physiology-1",
    moduleTitle: "Cells, Tissues & Transport",
    lessonTitle: "Cell Transport: How Things Move In and Out",
    description:
      "Diffusion, osmosis and active transport — who rides free, who pays ATP, and why plain water must never travel through a vein.",
    difficulty: "Moderate",
    durationMin: 14,
    objectives: [
      "Define diffusion, osmosis, facilitated diffusion and active transport.",
      "Explain the sodium-potassium pump and why it requires ATP.",
      "Apply tonicity principles to intravenous fluid safety and red blood cell behaviour.",
    ],
    tags: ["transport", "osmosis", "diffusion", "iv fluids", "tonicity"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Cells sit at a busy border crossing. Food in, waste out, salts balanced, water controlled — every second of life. Substances cross the membrane in two broad ways: passively, drifting downhill without spending energy, or actively, being pushed uphill at a cost the cell pays in ATP.\n\nLearn the two lanes and you can predict what any cell will do — and, just as importantly, what a drip will do to a patient's blood. This lesson carries one safety rule that will protect your patients for your whole career.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Simple diffusion** is drifting from where a substance is crowded to where it is thin — no energy spent. Oxygen and carbon dioxide cross this way, including at the placenta, where a mother's oxygen drifts into her baby's blood. **Facilitated diffusion** also drifts downhill, but through a carrier protein; glucose enters many cells this way. **Osmosis** is diffusion of water: water crosses toward the saltier side to dilute it.\n\n**Active transport** pushes substances uphill, from thin to crowded, burning ATP. Its star is the sodium-potassium pump, which throws three sodium ions out of the cell for every two potassium ions it pulls in, running nonstop in nearly every cell you own.\n\nThen tonicity — the dripside lesson. An **isotonic** fluid such as 0.9% saline matches the saltiness of blood, so cells keep their shape. A **hypotonic** fluid is too dilute: water rushes into red cells and they swell and burst. A **hypertonic** fluid is too salty: cells shrink and wrinkle. This is why choosing a fluid is never casual.",
      },
      {
        type: "clinical_pearl",
        body: "Never infuse plain sterile water into a vein. Water is profoundly hypotonic — red cells swell and burst within the bloodstream (haemolysis). Normal saline is called normal because it matches blood's saltiness: the cells riding in it neither swell nor shrink.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "On attachment at a district hospital, you watch a fresh bag of 0.9% normal saline connected for a woman recovering from delivery. A classmate whispers, 'Why not just sterile water? It is cheaper and it is still clean water.' The clinical tutor overhears and, to your quiet horror, asks you to answer for the class: why does the salt matter at all, and what would plain water do to her red cells?\n\nAnswer: The salt makes the fluid isotonic — the same saltiness as blood plasma — so water neither rushes into nor drains out of her red cells, and they keep their shape. Plain water is hypotonic, so water would flood into the cells, swelling them until they burst (haemolysis), destroying their oxygen-carrying haemoglobin and risking kidney damage from the debris. Cleanliness is not the issue; tonicity is.",
      },
      {
        type: "memory_trick",
        body: "Downhill is free, uphill costs. Diffusion and osmosis roll downhill and never ask for ATP; active transport pushes uphill and always pays. And remember: water chases salt — whichever side is saltier, the water travels there.",
      },
      {
        type: "summary",
        body: "- Simple diffusion: movement from crowded to thin, no energy — oxygen and carbon dioxide cross this way.\n- Facilitated diffusion: downhill movement through a carrier protein, still no ATP — how glucose enters many cells.\n- Osmosis: water diffusing toward the saltier side across a semipermeable membrane.\n- Active transport: uphill movement paid for with ATP — the sodium-potassium pump trades three sodium out for two potassium in.\n- Isotonic fluids like 0.9% saline are safe for red cells; hypotonic fluids burst them; hypertonic fluids shrink them.\n- Never give plain sterile water intravenously — tonicity, not cleanliness, decides safety.",
      },
    ],
    questions: [
      {
        topic: "Cell Transport",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Osmosis is best defined as which of the following?",
        options: [
          "Movement of water across a semipermeable membrane toward the more concentrated solution",
          "Movement of solutes from low to high concentration using ATP",
          "Bulk intake of food particles by vesicles",
          "Movement of oxygen from blood into cells",
        ],
        correctIndex: 0,
        explanation:
          "Osmosis is the diffusion of water: water crosses a semipermeable membrane from the dilute side toward the saltier side, diluting it. Solute movement powered by ATP is active transport, not osmosis.",
        courseSlug: "anatomy-physiology-1",
      },
      {
        topic: "Cell Transport",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Red blood cells placed in pure distilled water will do which of the following?",
        options: ["Shrink and wrinkle", "Swell and burst", "Remain unchanged", "Actively pump the water out and survive"],
        correctIndex: 1,
        explanation:
          "Distilled water is hypotonic, so water rushes into the cells by osmosis. The red cells swell until their membranes give way — haemolysis. Shrinkage (crenation) happens in hypertonic fluids instead.",
        courseSlug: "anatomy-physiology-1",
      },
      {
        topic: "Cell Transport",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "The sodium-potassium pump does which of the following?",
        options: [
          "Moves three sodium ions out and two potassium ions in, using ATP",
          "Moves two sodium ions out and three potassium ions in, without ATP",
          "Moves water out of the cell by osmosis",
          "Carries glucose downhill through a channel protein",
        ],
        correctIndex: 0,
        explanation:
          "The pump pushes sodium out of the cell and potassium in, against their gradients, exchanging three sodium for two potassium with each cycle of ATP. Pushing against the gradient is exactly why it must pay energy.",
        courseSlug: "anatomy-physiology-1",
      },
    ],
    flashcards: [
      {
        topic: "Cell Transport",
        front: "Diffusion vs osmosis in one line each.",
        back: "Diffusion: any substance drifts from crowded to thin, no energy. Osmosis: specifically water, crossing toward the saltier side of a membrane.",
      },
      {
        topic: "Cell Transport",
        front: "Why is 0.9% saline safe to infuse but plain water is not?",
        back: "0.9% saline is isotonic — it matches blood saltiness, so red cells keep their shape. Plain water is hypotonic and bursts red cells (haemolysis).",
      },
      {
        topic: "Cell Transport",
        front: "What does the sodium-potassium pump do?",
        back: "It uses ATP to push three sodium ions out of the cell and pull two potassium ions in, against their gradients — nonstop, in nearly every cell.",
      },
    ],
    sources: [
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Pearson",
        title: "Martini: Fundamentals of Anatomy and Physiology",
        year: "2021 (11th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "anatomy-physiology-1",
    moduleTitle: "Cells, Tissues & Transport",
    lessonTitle: "The Four Tissue Families",
    description:
      "Four tissue families build every organ you will ever assess — and knowing the family tells you what the organ can do.",
    difficulty: "Easy",
    durationMin: 13,
    objectives: [
      "Name the four tissue families and give an example of each.",
      "Explain what marks each family: covering, matrix, contraction and signalling.",
      "Apply tissue knowledge to the uterine wall, perineal repair and the classification of blood.",
    ],
    tags: ["tissues", "histology", "muscle", "uterus"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "From just four families, the body builds everything. Epithelial, connective, muscle and nervous tissue — between them they line every surface, hold every structure together, move every joint and carry every message.\n\nWhen you can name the family a tissue belongs to, you can predict what it does, how it heals and what goes wrong with it. It is the quickest piece of anatomy shorthand you will ever own, and it pays off on every single ward round.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Epithelial tissue** covers and lines. It is the skin's outer layer, the lining of the gut and the airways, and it builds glands. It lies in tight sheets on a basement membrane and has no blood vessels of its own — it feeds from the fluid beneath.\n\n**Connective tissue** connects and supports, and its trademark is the **matrix**, the living material between its cells. Bone, cartilage, fat, tendons and blood are all connective tissues. Yes, blood — its matrix is liquid plasma. **Muscle tissue** contracts. Skeletal muscle attaches to bones and moves them at will; cardiac muscle is the heart's own tireless muscle; smooth muscle lines hollow organs — stomach, gut, blood vessels and, crucially for you, the uterus.\n\n**Nervous tissue** communicates: neurons carry electrical signals at speed, supported by glial cells. Four families, arranged in different mixes, build every organ you will ever assess.",
      },
      {
        type: "clinical_pearl",
        body: "The myometrium, the muscle wall of the uterus, is smooth muscle — involuntary and tireless. It contracts whether or not anyone wills it, which is exactly what you want in labour, and it is why a frightened mother cannot simply order her contractions to stop. Calm her, breathe with her, work with the muscle.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "After a normal birth, a woman sustains a second-degree tear involving the perineal skin and muscles. The midwife repairs it in careful layers, explaining each one to you as she works: skin first, then muscle, then the underlying connective tissue. Afterwards she asks why she repairs layer by layer instead of closing everything with one big stitch through the depth of the wound.\n\nAnswer: Because the perineum is built from several tissue families — epithelial skin on the surface, muscle beneath, connective tissue binding and supporting below. Each layer has its own strength, blood supply and healing behaviour. Matching each layer back to its own kind restores the anatomy correctly, avoids leaving gaps where blood and infection could collect, and leaves a stronger, kinder-healing repair than one mass stitch dragged through mixed tissues.",
      },
      {
        type: "memory_trick",
        body: "The compound plan: epithelial is the paint and plaster (it covers), connective is the blocks, mortar and pipes (it holds and carries), muscle is the doors and gates (it moves), nervous is the wiring (it commands). Every organ is these four arranged differently.",
      },
      {
        type: "summary",
        body: "- Epithelial tissue covers surfaces, lines cavities and forms glands — sheets on a basement membrane, no blood vessels of its own.\n- Connective tissue supports and binds, and always has a matrix: bone, cartilage, fat, tendons — and blood, whose matrix is plasma.\n- Muscle tissue contracts: skeletal (voluntary), cardiac (the heart) and smooth (hollow organs including the uterus).\n- Nervous tissue communicates: neurons carry signals, glial cells support them.\n- The myometrium is smooth muscle — involuntary contraction is the engine of labour.\n- Layered repair of tears respects tissue families: skin, muscle, connective tissue each healed to their own kind.",
      },
    ],
    questions: [
      {
        topic: "Tissue Types",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which tissue family covers body surfaces, lines cavities and forms glands?",
        options: ["Epithelial", "Connective", "Muscle", "Nervous"],
        correctIndex: 0,
        explanation:
          "Epithelial tissue is the covering family — skin surface, gut lining, airway lining and glands. It forms tight sheets and has no blood vessels of its own.",
        courseSlug: "anatomy-physiology-1",
      },
      {
        topic: "Tissue Types",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Blood is classified as which type of tissue?",
        options: [
          "Epithelial tissue, because it flows in vessels",
          "Connective tissue, with liquid plasma as its matrix",
          "Muscle tissue, because the heart pumps it",
          "Nervous tissue, because it carries chemical signals",
        ],
        correctIndex: 1,
        explanation:
          "Connective tissue is defined by cells spread in a matrix, and blood fits perfectly: its cells (red cells, white cells, platelets) are suspended in the liquid matrix we call plasma. Pumping and signalling do not change its family.",
        courseSlug: "anatomy-physiology-1",
      },
      {
        topic: "Tissue Types",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "The myometrium of the uterus is composed of which muscle type, and what does this mean for labour?",
        options: [
          "Skeletal muscle — the mother can consciously control her contractions",
          "Cardiac muscle — it beats to a fixed pacemaker in the chest",
          "Smooth muscle — it contracts involuntarily, rhythmically and tirelessly",
          "No true muscle — the uterus moves by fluid pressure alone",
        ],
        correctIndex: 2,
        explanation:
          "The myometrium is smooth muscle, like the gut and vessel walls. It contracts without conscious control, which sustains labour no matter what the mother wills — and is why support and calm, not orders, help her through it.",
        courseSlug: "anatomy-physiology-1",
      },
    ],
    flashcards: [
      {
        topic: "Tissue Types",
        front: "Name the four tissue families and one example of each.",
        back: "Epithelial (skin surface, gut lining), connective (bone, tendon, blood), muscle (skeletal, cardiac, smooth), nervous (neurons and glia).",
      },
      {
        topic: "Tissue Types",
        front: "Why is blood a connective tissue?",
        back: "Connective tissues have cells scattered in a matrix — blood's cells float in the liquid matrix called plasma, so blood belongs to the connective family.",
      },
      {
        topic: "Tissue Types",
        front: "Which muscle type forms the uterine wall, and what does that mean in labour?",
        back: "Smooth muscle — involuntary, rhythmic, tireless. The mother cannot will contractions away; your job is to support, calm and work with the muscle.",
      },
    ],
    sources: [
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Gray's Anatomy for Students",
        year: "2020 (4th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "anatomy-physiology-1",
    moduleTitle: "Body Systems Overview",
    lessonTitle: "The Integumentary System: More Than a Wrapper",
    description:
      "The body's largest organ is a thermostat, barrier and vitamin factory in one. From skin layers to drying the newborn, learn what skin really does.",
    difficulty: "Easy",
    durationMin: 13,
    objectives: [
      "Describe the layers of the skin and the parts of the integumentary system.",
      "Explain the five core functions of the skin.",
      "Apply integumentary knowledge to newborn warmth, pressure area care and vitamin D advice.",
    ],
    tags: ["skin", "integumentary", "newborn care", "thermoregulation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The skin is the body's largest organ, and calling it a wrapper undersells it badly. It is a barrier, a thermostat, a sensor and a vitamin factory, all packed into about two square metres of living fabric. Hair and nails work alongside it as the rest of the integumentary system.\n\nFor a midwife, the skin is also a window: colour, temperature and moisture tell you about a mother's circulation and a baby's oxygen and warmth before any machine does. Learn to read it and you will spot trouble early.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The skin has two main layers with a fatty store beneath. The **epidermis** is the outer shield: it has no blood vessels, is constantly shed and rebuilt from below, is waterproofed with keratin, and houses melanocytes — the cells that make melanin, the pigment protecting deeper tissues from sun damage. Below it, the **dermis** is the living workshop: collagen for strength, blood vessels that widen to dump heat or narrow to keep it, nerve endings for touch, pain and temperature, sweat glands, oil glands and hair roots. The **hypodermis** underneath is fat — insulation, energy store and shock absorber.\n\nThe jobs: **protection** against germs, chemicals and scrapes; **temperature control** through sweat evaporating and dermal vessels widening or narrowing; **sensation** of the world; synthesis of **vitamin D**, which sunlight starts and the body completes for strong bones; and **waterproofing**, keeping precious water in. Dry, intact skin is a working defence — which is why skin care is not cosmetic on a ward, it is prevention.",
      },
      {
        type: "clinical_pearl",
        body: "At every birth, dry the newborn immediately and thoroughly, put a cap on the head, then place the baby skin-to-skin on the mother's chest. A wet baby loses heat fast as water evaporates — the WHO warm chain begins with that first drying, and her chest is the baby's best warmer.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At a 2 a.m. delivery in a CHPS compound, a healthy baby cries at once. Before any weighing or bathing, the midwife briskly rubs the baby dry with a clean, warm cloth, caps the head, and lays the baby skin-to-skin on the mother's chest. The grandmother asks why the baby cannot be washed first, since 'the night is not even cold'.\n\nWhy does the order matter so much?\n\nAnswer: Evaporation. Water on a newborn's skin steals heat rapidly as it turns to vapour, and a small, wet newborn cannot generate warmth fast enough to compensate — body temperature can fall dangerously in the first minutes. Drying first, covering the head and skin-to-skin contact with the mother keep the heat in. Bathing waits until the baby is stable and warm. That is the WHO warm chain at work: drying comes before everything.",
      },
      {
        type: "memory_trick",
        body: "The five jobs of skin: Cover, Cool, Call, Create, Contain. Cover = barrier against germs and injury; Cool = sweat and blood-flow control; Call = sensation reporting to the brain; Create = vitamin D with sunlight; Contain = keeping body water in.",
      },
      {
        type: "summary",
        body: "- Epidermis: outer, avascular, waterproof shield of keratin, rebuilt constantly, home to melanocytes.\n- Dermis: living workshop — collagen, blood vessels, nerves, sweat and oil glands, hair roots.\n- Hypodermis: fat for insulation, energy storage and shock absorption.\n- Five functions: protection, temperature control, sensation, vitamin D synthesis, waterproofing.\n- Skin is a clinical window — colour, temperature and moisture warn you early.\n- Newborn care: dry immediately, cap the head, skin-to-skin — the warm chain before any bath.",
      },
    ],
    questions: [
      {
        topic: "Integumentary System",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which skin layer contains blood vessels, nerves, sweat glands and hair roots?",
        options: ["Epidermis", "Dermis", "Stratum corneum", "Hypodermis"],
        correctIndex: 1,
        explanation:
          "The dermis is the living layer beneath the epidermis, holding collagen, blood vessels, nerve endings, glands and hair roots. The epidermis itself has no blood vessels at all.",
        courseSlug: "anatomy-physiology-1",
      },
      {
        topic: "Integumentary System",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is a newborn dried immediately after birth before anything else is done?",
        options: [
          "To clean the skin before vitamin K is given",
          "To prevent heat loss as water evaporates from the wet skin",
          "Only to stimulate the baby to cry",
          "Because the vernix must never be touched",
        ],
        correctIndex: 1,
        explanation:
          "Evaporating water steals heat quickly from a small, wet newborn who cannot yet generate warmth well. Immediate drying, a cap and skin-to-skin contact are the first steps of the WHO warm chain — before weighing, before bathing.",
        courseSlug: "anatomy-physiology-1",
      },
      {
        topic: "Integumentary System",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What role does the skin play in vitamin D production?",
        options: [
          "Sunlight on the skin starts the synthesis of vitamin D, needed for calcium absorption and strong bones",
          "The skin stores vitamin D manufactured in the liver",
          "Sweat glands excrete excess vitamin D",
          "Melanin converts vitamin D directly into calcium",
        ],
        correctIndex: 0,
        explanation:
          "Ultraviolet light on the skin starts the making of vitamin D, which the body completes in the liver and kidneys. Vitamin D lets the gut absorb calcium — one reason sensible sun exposure and calcium-rich diets both matter in pregnancy.",
        courseSlug: "anatomy-physiology-1",
      },
    ],
    flashcards: [
      {
        topic: "Integumentary System",
        front: "Name the skin layers and one key content of each.",
        back: "Epidermis — keratin, melanocytes, no vessels. Dermis — collagen, blood vessels, nerves, glands, hair roots. Hypodermis — fat for insulation and shock absorption.",
      },
      {
        topic: "Integumentary System",
        front: "The five jobs of skin?",
        back: "Cover (barrier), Cool (temperature), Call (sensation), Create (vitamin D with sunlight), Contain (keeps water in).",
      },
      {
        topic: "Integumentary System",
        front: "First action for a newborn's skin at birth, and why?",
        back: "Dry the baby immediately and thoroughly, cap the head, then skin-to-skin with the mother — evaporation from wet skin causes dangerous heat loss in the first minutes of life.",
      },
    ],
    sources: [
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, childbirth, postpartum and newborn care: a guide for essential practice",
        year: "2015",
        note: "Warm chain and thermal care guidance — check the latest edition.",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "anatomy-physiology-1",
    moduleTitle: "Body Systems Overview",
    lessonTitle: "The Skeletal System: A Living Frame",
    description:
      "Bones frame, shield, lever, bank and manufacture — and a newborn's fontanelles report on the baby within. A living frame, not dead scaffolding.",
    difficulty: "Easy",
    durationMin: 14,
    objectives: [
      "List the five functions of the skeletal system.",
      "Distinguish axial from appendicular divisions and describe bone as living tissue.",
      "Apply fontanelle assessment to newborn evaluation, including dehydration and danger signs.",
    ],
    tags: ["skeleton", "bones", "fontanelle", "calcium", "newborn care"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Bones look like dry, finished beams, but they are anything but. The skeleton is living tissue that grows, heals, stores and even manufactures blood. A newborn's skull flexes through the birth canal; a mother's pelvis cradles and guides the very baby those bones must pass.\n\nFor midwifery, the skeleton is not background architecture — it is part of the birth story. In this lesson you will meet its five jobs and learn to read the fontanelles, the soft windows on a baby's skull.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The adult skeleton has 206 bones with five jobs. **Support** — the frame everything hangs on. **Protection** — the skull guards the brain, the rib cage shields heart and lungs, the pelvis cradles uterus and bladder. **Movement** — bones are the levers that muscles pull on. **Blood cell formation** — red marrow inside bones is the factory where red cells, white cells and platelets are born. **Mineral storage** — bone is the body's bank of calcium and phosphorus, deposited and withdrawn as needed.\n\nThe skeleton divides into the **axial** part — skull, spine and rib cage, the central column — and the **appendicular** part, the limbs and their girdles. Bone stays alive through **remodelling**: osteoblasts build while osteoclasts carve, all lifelong. In pregnancy the baby builds an entire skeleton from the mother's diet and reserves, so calcium-rich foods matter — small whole dried fish, dark green leaves and milk among them.\n\nNewborn skull bones are not fused. Membrane-covered gaps called **fontanelles** let the skull flex and mould during birth and expand as the brain grows; the anterior fontanelle usually closes by about 18 months.",
      },
      {
        type: "clinical_pearl",
        body: "A fontanelle reads the baby's inner state. Sunken whispers dehydration, especially with diarrhoea; bulging and tense in a sick, irritable baby shouts danger. A soft, flat fontanelle in a well, feeding, alert newborn is simply normal — feel gently and interpret with the whole child.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A four-month-old is brought to your CHPS compound with three days of diarrhoea. The baby is irritable, feeding poorly, with dry lips and a sunken anterior fontanelle. Before checking anything else, the community health nurse asks what the fontanelle is telling you.\n\nAnswer: The fontanelle is sunken, which signals dehydration — the fluid volume behind it has shrunk. Read together with diarrhoea, poor feeding, dry lips and irritability, this baby needs prompt assessment of dehydration severity, rehydration, and referral according to your danger-sign protocol. The skull bones guard the brain, but the soft gap between them quietly reports the state of the baby's fluids — a free, instant, bedside test if you know how to read it.",
      },
      {
        type: "memory_trick",
        body: "The five jobs of bone: Frame, Shield, Lever, Bank, Factory. Frame = support, Shield = protection, Lever = movement with muscles pulling, Bank = calcium and phosphorus storage, Factory = blood cells from red marrow.",
      },
      {
        type: "summary",
        body: "- Five functions: support, protection, movement, blood cell formation in red marrow, and mineral storage (calcium and phosphorus).\n- Axial skeleton: skull, vertebral column, rib cage. Appendicular: limbs and shoulder and hip girdles.\n- Bone is living tissue, remodelled lifelong by osteoblasts (building) and osteoclasts (carving).\n- In pregnancy the baby draws calcium from the mother — small whole dried fish, dark green leaves and milk help meet the demand.\n- Fontanelles are membrane-covered gaps between newborn skull bones, allowing moulding at birth and brain growth; the anterior one closes by about 18 months.\n- Sunken fontanelle suggests dehydration; a bulging, tense one in a sick baby is a danger sign.",
      },
    ],
    questions: [
      {
        topic: "Skeletal System",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which function of bone explains why marrow is vital after heavy blood loss?",
        options: [
          "Red marrow manufactures new red blood cells, white cells and platelets",
          "Bone releases stored calcium to replace lost blood",
          "The skeleton levers blood through the veins back to the heart",
          "Yellow marrow stores ready-made clotting factors",
        ],
        correctIndex: 0,
        explanation:
          "Red marrow is the body's blood factory: after haemorrhage, it ramps up production of red cells, white cells and platelets to restock the circulation. Calcium release supports bone and cell chemistry, not blood volume.",
        courseSlug: "anatomy-physiology-1",
      },
      {
        topic: "Skeletal System",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which structures belong to the axial skeleton?",
        options: [
          "Skull, vertebral column and rib cage",
          "Arm, forearm and hand bones",
          "Hip bone and thigh bones",
          "Shoulder girdle and leg bones",
        ],
        correctIndex: 0,
        explanation:
          "The axial skeleton is the central column — skull, spine and rib cage. The limbs and their girdles, including hips and shoulders, make up the appendicular skeleton.",
        courseSlug: "anatomy-physiology-1",
      },
      {
        topic: "Skeletal System",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the anterior fontanelle?",
        options: [
          "A bone of the forehead that fuses during birth",
          "A membrane-covered gap between skull bones, allowing moulding at birth and brain growth, usually closing by about 18 months",
          "A movable joint between the two parietal bones",
          "A soft area where the brain is not covered by any membrane",
        ],
        correctIndex: 1,
        explanation:
          "The fontanelle is a gap between unfused skull bones covered by a tough membrane. It permits the skull to mould through the birth canal and to expand with the growing brain, typically closing by about 18 months of age.",
        courseSlug: "anatomy-physiology-1",
      },
    ],
    flashcards: [
      {
        topic: "Skeletal System",
        front: "The five functions of the skeleton?",
        back: "Frame (support), Shield (protection), Lever (movement), Bank (calcium and phosphorus storage), Factory (blood cell production in red marrow).",
      },
      {
        topic: "Skeletal System",
        front: "Axial vs appendicular skeleton?",
        back: "Axial = the central column: skull, spine, rib cage. Appendicular = the limbs plus shoulder and hip girdles.",
      },
      {
        topic: "Skeletal System",
        front: "What is the anterior fontanelle, and what does a sunken one mean?",
        back: "A membrane-covered gap between newborn skull bones that allows moulding and brain growth, closing by about 18 months. Sunken = dehydration until proven otherwise.",
      },
    ],
    sources: [
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "WHO / UNICEF",
        title: "Integrated Management of Childhood Illness (IMCI) chart booklet",
        year: "2014",
        note: "Danger-sign assessment including fontanelle findings — check the latest edition.",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "anatomy-physiology-1",
    moduleTitle: "Body Systems Overview",
    lessonTitle: "The Muscular System: Movement and Warmth",
    description:
      "The muscles that move you also warm you, hold you upright and push blood home. Meet the three types and their maternity stories.",
    difficulty: "Easy",
    durationMin: 13,
    objectives: [
      "Compare skeletal, cardiac and smooth muscle.",
      "Explain the non-movement jobs of muscle: posture, heat production and the calf pump.",
      "Apply muscle physiology to uterine contractions, shivering and post-caesarean mobility.",
    ],
    tags: ["muscles", "movement", "uterus", "dvt prevention"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Muscles are the body's movers, and more than movers: they hold you upright all day, squeeze blood back toward the heart, and generate most of your body heat. There are over 600 skeletal muscles alone, plus the heart's own muscle and the quiet muscle wrapping your hollow organs.\n\nIn midwifery, muscle is personal. The uterus is muscle. The pelvic floor is muscle. The shivering mother after delivery and the mother walking the day after a caesarean are both telling you a muscle story — if you know how to listen.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Three types share the body. **Skeletal muscle** attaches to bones through tendons, shows stripes under the microscope and answers to your will — walking, smiling, and the active pushing of second stage. **Cardiac muscle** lives only in the heart: striped like skeletal muscle but involuntary, tireless, and wired with its own pacemaker so it never waits for orders. **Smooth muscle** lines hollow organs — stomach, intestines, blood vessels and the uterus — working slowly, rhythmically and without permission.\n\nMuscles do more than move. They hold **posture**, quietly burning energy to keep you standing. They make **heat** — shivering is skeletal muscle trembling rapidly purely to warm you, and ordinary muscle metabolism is the body's furnace. And there is the **calf muscle pump**: deep veins run between the calf muscles, so every step squeezes venous blood upward while one-way valves stop it falling back. Walking literally assists your circulation — which is why bed rest is risky for the legs.",
      },
      {
        type: "clinical_pearl",
        body: "After caesarean birth or any bed rest, teach ankle circles early and get the mother walking soon and often. Her calf muscle pump is her own clot-prevention device — still blood pools, moving blood returns. Early ambulation is standard care, not an optional kindness.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Day one after a caesarean, a mother refuses to move: the wound hurts, and she believes rest heals best. The midwife, gently but firmly, teaches her ankle circles in bed and then walks her slowly to the chair, explaining that moving protects her legs from clots. The mother asks how moving her legs could protect anything beyond her legs.\n\nHow do you explain it to her?\n\nAnswer: Deep veins in the legs run between the calf muscles. When those muscles squeeze — during ankle circles, walking or simple flexing — they push venous blood upward toward the heart, and one-way valves keep it from sliding back. After surgery, immobility lets blood sit still in the legs, and still blood can clot, forming a deep vein thrombosis that may travel to the lungs. Moving the legs keeps the pump working, so her early walking protects her lungs and her life, not only her legs.",
      },
      {
        type: "memory_trick",
        body: "S-C-S: Skeletal muscle is the one you Select (voluntary); Cardiac muscle never Clocks out (own pacemaker, never tires); Smooth muscle works Silently without being asked (uterus, gut, vessels).",
      },
      {
        type: "summary",
        body: "- Skeletal muscle: voluntary, striped, attached by tendons — moves joints, powers pushing in second stage.\n- Cardiac muscle: the heart only — involuntary, tireless, with its own pacemaker.\n- Smooth muscle: walls of hollow organs, including the uterus — involuntary, rhythmic, tireless.\n- Muscles hold posture, generate heat (shivering is heat production), and run the calf pump.\n- The calf muscle pump plus one-way valves pushes venous blood home — immobility invites clots.\n- Teach ankle circles and early walking after caesarean or bed rest; calm support helps the labouring uterus work.",
      },
    ],
    questions: [
      {
        topic: "Muscular System",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which muscle type is under voluntary, conscious control?",
        options: ["Skeletal", "Cardiac", "Smooth", "Both cardiac and smooth"],
        correctIndex: 0,
        explanation:
          "Skeletal muscle answers to your will — walking, smiling, pushing. Cardiac and smooth muscle are involuntary, working without conscious permission, which is exactly what you want from a heart and a uterus.",
        courseSlug: "anatomy-physiology-1",
      },
      {
        topic: "Muscular System",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why does the body shiver when it is cold?",
        options: [
          "Smooth muscle in the skin tightens to squeeze heat to the surface",
          "The heart beats faster, and that alone warms the blood",
          "Skeletal muscles contract in rapid waves purely to generate heat",
          "Fat cells under the skin burn quickly to release warmth",
        ],
        correctIndex: 2,
        explanation:
          "Shivering is rapid, involuntary skeletal muscle contraction whose purpose is heat production, not movement. Muscle work releases warmth — valuable knowledge when a mother shivers after delivery or with fever chills.",
        courseSlug: "anatomy-physiology-1",
      },
      {
        topic: "Muscular System",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother asks why early walking after her caesarean protects her from clots. What is the best explanation?",
        options: [
          "Walking thins the blood directly, like a medicine",
          "The calf muscles squeeze deep veins upward, and one-way valves stop blood pooling backward",
          "Walking strengthens the wound so clots cannot escape it",
          "Walking raises the blood pressure and flushes clots out of the legs",
        ],
        correctIndex: 1,
        explanation:
          "Deep leg veins run between the calf muscles. Movement squeezes them like a pump, pushing blood toward the heart while valves prevent backflow — so moving blood returns instead of pooling and clotting. Exercise does not thin blood like a drug; it keeps it flowing.",
        courseSlug: "anatomy-physiology-1",
      },
    ],
    flashcards: [
      {
        topic: "Muscular System",
        front: "Compare the three muscle types in one line each.",
        back: "Skeletal: voluntary, striped, moves bones. Cardiac: heart only, involuntary, own pacemaker. Smooth: hollow organs including the uterus, involuntary and tireless.",
      },
      {
        topic: "Muscular System",
        front: "Why do we shiver?",
        back: "Skeletal muscles contract rapidly to generate heat — shivering is the body's emergency heater, not a movement.",
      },
      {
        topic: "Muscular System",
        front: "What is the calf muscle pump?",
        back: "Deep veins lie between calf muscles; each step squeezes blood upward toward the heart while one-way valves stop it falling back. Immobility switches the pump off and invites clots.",
      },
    ],
    sources: [
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Pearson",
        title: "Martini: Fundamentals of Anatomy and Physiology",
        year: "2021 (11th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "anatomy-physiology-1",
    moduleTitle: "Body Systems Overview",
    lessonTitle: "The Cardiovascular System: The Pump and the Pipes",
    description:
      "Four chambers, two circuits, one tireless pump. Follow the blood, learn the vessels, and treat every pregnancy blood pressure with respect.",
    difficulty: "Moderate",
    durationMin: 15,
    objectives: [
      "Trace blood through the four chambers of the heart and the double circuit.",
      "Distinguish arteries, veins and capillaries, and explain where exchange actually occurs.",
      "Apply blood pressure knowledge to antenatal checks and pre-eclampsia recognition.",
    ],
    tags: ["heart", "circulation", "blood pressure", "pre-eclampsia"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every organ you care for depends on a delivery network: the heart as the pump, the vessels as the pipes, the blood as the parcels — about five litres of blood, completing the full circuit in roughly a minute.\n\nIn pregnancy this network works for two, and its pressures become some of the most important numbers you will ever read on a woman.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The heart is a muscular pump with four chambers — two upper atria, two lower ventricles. Follow one journey. Used, oxygen-poor blood returns from the body to the **right atrium**, drops into the **right ventricle**, and is pumped to the lungs to collect oxygen. Fresh blood returns to the **left atrium**, fills the mighty **left ventricle** — the thickest, hardest-working chamber — and is pushed out to the whole body. Valves between the chambers are one-way doors, snapping shut so blood never flows backwards.\n\n**Arteries** carry blood away from the heart, with thick, muscular, stretchy walls that absorb each heartbeat's surge. **Veins** bring it back, thinner-walled, with one-way valves fighting gravity. **Capillaries** do the real business: vessels one cell thick, where oxygen, food and wastes cross between blood and tissues.\n\nYour fingers feel all of this. A **pulse** is an artery wall bouncing as the heartbeat passes beneath. **Blood pressure** is the force the blood exerts on artery walls — and after 20 weeks of pregnancy, a reading that climbs too high is never brushed aside.",
      },
      {
        type: "clinical_pearl",
        body: "A raised blood pressure after 20 weeks of pregnancy, especially with headache, visual blur, upper abdominal pain or swelling, points toward pre-eclampsia — a multi-organ danger. Re-check calmly, dip the urine, and refer. Never label it 'just stress' until someone senior has seen her.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At a focused antenatal visit, a woman at 32 weeks registers a blood pressure of 150/100 mmHg. She mentions a headache since morning, and you notice puffiness of her feet. The midwife re-checks after rest, dips her urine, and prepares referral to the district hospital.\n\nWhat is blood pressure actually measuring, and why does this reading matter so much?\n\nAnswer: Blood pressure is the force the circulating blood exerts on the walls of the arteries. In pregnancy after 20 weeks, a reading this high — especially with headache, oedema and any protein on the dipstick — suggests pre-eclampsia, in which vessels and organs such as the kidneys, liver and brain come under attack, risking seizures and stroke. Referral is the correct action: she needs close monitoring, treatment and delivery planning at a higher level — the number on the cuff is the artery wall asking for help.",
      },
      {
        type: "memory_trick",
        body: "Blood's commute: right side to the lungs, left side to the world — RA, RV, lungs, LA, LV, body. Atrium always fills the ventricle beneath it (A before V), valves clap shut behind the blood so it never sneaks back, and the left ventricle is the strongest chamber because it pushes all the way to the toes and back.",
      },
      {
        type: "summary",
        body: "- Four chambers: two atria receiving, two ventricles pumping; valves are one-way doors.\n- Double circuit: right side sends blood to the lungs, left side sends it to the whole body.\n- Arteries carry blood away with thick, stretchy walls; veins return it with one-way valves; capillaries are one cell thick and do all the exchanging.\n- A pulse is an artery wall bouncing under your fingers; blood pressure is the force on artery walls.\n- Pregnancy raises blood volume by almost half, so the heart works for two.\n- Raised BP after 20 weeks with headache, swelling or visual changes is a pre-eclampsia alert — re-check, dip urine, refer.",
      },
    ],
    questions: [
      {
        topic: "Cardiovascular System",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which chamber of the heart pumps oxygen-rich blood to the entire body?",
        options: ["Right atrium", "Right ventricle", "Left ventricle", "Left atrium"],
        correctIndex: 2,
        explanation:
          "The left ventricle is the thickest, most powerful chamber because it must push blood through the whole systemic circuit. The right ventricle only sends blood the short distance to the lungs.",
        courseSlug: "anatomy-physiology-1",
      },
      {
        topic: "Cardiovascular System",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Blood returning from the body enters the heart and travels to the lungs. Which order is correct?",
        options: [
          "Right atrium, right ventricle, lungs",
          "Right ventricle, right atrium, lungs",
          "Left atrium, left ventricle, lungs",
          "Left ventricle, right atrium, lungs",
        ],
        correctIndex: 0,
        explanation:
          "Used blood from the body enters the right atrium, passes to the right ventricle, and is pumped to the lungs for oxygen. The left side handles blood returning from the lungs to be sent to the body.",
        courseSlug: "anatomy-physiology-1",
      },
      {
        topic: "Cardiovascular System",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which statement about arteries and veins is correct?",
        options: [
          "All arteries carry oxygen-rich blood except the pulmonary artery",
          "Veins carry blood away from the heart",
          "Arteries have one-way valves but veins do not",
          "Capillaries have thick muscular walls to withstand high pressure",
        ],
        correctIndex: 0,
        explanation:
          "Arteries carry blood away from the heart, and nearly all carry oxygen-rich blood — the pulmonary artery is the exception, carrying oxygen-poor blood to the lungs. Veins carry blood back and hold the valves; capillaries are one cell thick for exchange.",
        courseSlug: "anatomy-physiology-1",
      },
    ],
    flashcards: [
      {
        topic: "Cardiovascular System",
        front: "Trace blood from the body back to the body in one line.",
        back: "Body → right atrium → right ventricle → lungs (oxygen) → left atrium → left ventricle → body. Right for the lungs, left for the world.",
      },
      {
        topic: "Cardiovascular System",
        front: "Artery vs vein vs capillary — one job each.",
        back: "Artery: carries blood away from the heart, thick stretchy walls. Vein: carries it back, valves stop backflow. Capillary: one cell thick, where oxygen, food and wastes are exchanged.",
      },
      {
        topic: "Cardiovascular System",
        front: "What is blood pressure, and why does it matter after 20 weeks of pregnancy?",
        back: "The force blood exerts on artery walls. A rise after 20 weeks with headache, swelling, visual change or proteinuria signals pre-eclampsia — re-check, dip urine, refer.",
      },
    ],
    sources: [
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "WHO recommendations for prevention and treatment of pre-eclampsia and eclampsia",
        year: "2011",
        note: "Guidance summary — check the latest edition for current thresholds.",
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    courseSlug: "anatomy-physiology-1",
    moduleTitle: "Body Systems Overview",
    lessonTitle: "Blood: The Living Transport Fluid",
    description:
      "Plasma, red cells, white cells and platelets — the crowd that carries oxygen, fights infection and stops bleeding. Includes the anaemia numbers every midwife must know.",
    difficulty: "Moderate",
    durationMin: 14,
    objectives: [
      "Name the components of blood and state the job of each.",
      "Explain the WHO definition of anaemia in pregnancy and why it is treated seriously.",
      "Apply knowledge of platelets and clotting to postpartum haemorrhage prevention.",
    ],
    tags: ["blood", "haematology", "anaemia", "clotting"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Blood looks like one red liquid, but it is a living crowd: plasma carrying water and proteins, red cells hauling oxygen, white cells defending, platelets repairing. About five litres travel with a grown woman, visiting every organ in about a minute.\n\nIn Ghana, blood deserves extra respect: pregnancy anaemia is common, sickle cell disease is part of daily practice, and bleeding after birth kills mothers. Knowing what blood is made of tells you how it fails.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Spin a tube of blood and it separates into layers. On top sits **plasma**, about 55 per cent — water carrying nutrients, salts and wastes, plus proteins: albumin, which keeps water inside the vessels; antibodies, which defend; and clotting factors, including fibrinogen.\n\nBelow sit the cells. **Red blood cells** are the most numerous: small dimpled discs with no nucleus, packed with **haemoglobin**, the iron-bearing protein that grips oxygen in the lungs and releases it in the tissues. They are born in red marrow and live about 120 days. **White blood cells** defend in ranks: neutrophils arrive first at bacterial battles; lymphocytes fight viruses and remember past enemies; monocytes become large clean-up macrophages; eosinophils tackle parasites. **Platelets** are cell fragments that rush to leaks, plugging them and triggering the clotting cascade that weaves a fibrin mesh.\n\nPregnancy demands more blood and more iron. The World Health Organization defines anaemia in pregnancy as haemoglobin below 11 g/dL, and daily iron with folic acid is part of standard antenatal prevention.",
      },
      {
        type: "clinical_pearl",
        body: "After every birth, guard against postpartum haemorrhage: keep the uterus well contracted and empty, give the uterotonic on time, and observe closely. A firm, empty uterus closes the vessels at the placental site before the platelets and clotting factors ever have to work alone.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 24-year-old at 16 weeks of pregnancy attends antenatal clinic looking pale, complaining of tiredness 'like the whole world is on me'. Her haemoglobin returns at 9.2 g/dL. The midwife starts iron and folic acid, counsels her on diet — dark green leaves, beans and small whole fish, taken with vitamin C-rich fruits to help absorption — and books a follow-up check.\n\nWhat does that number define, and why is it treated so seriously?\n\nAnswer: Anaemia in pregnancy — the WHO defines it as haemoglobin below 11 g/dL, and this woman is well under it. With too little haemoglobin, her red cells carry too little oxygen, shortchanging her own tissues and her baby's. Treated early with iron, folate and diet support, it recovers; neglected, it drains her strength for labour, magnifies any bleeding, and may force a transfusion where blood is scarce. Her tiredness was real data — the number confirmed it.",
      },
      {
        type: "memory_trick",
        body: "White cell roll call, most to least: Never Let Monkeys Eat Bananas — Neutrophils, Lymphocytes, Monocytes, Eosinophils, Basophils. And picture red cells as delivery vans packed with haemoglobin parcels, with platelets as the repair crew arriving with sand and cement.",
      },
      {
        type: "summary",
        body: "- Plasma (about 55%) is water plus albumin (keeps water in vessels), antibodies and clotting factors.\n- Red cells: no nucleus, packed with haemoglobin, born in red marrow, live about 120 days.\n- White cells in rank order: neutrophils first at bacteria, lymphocytes for viruses and memory, monocytes as macrophages, eosinophils against parasites.\n- Platelets are cell fragments that plug leaks and trigger the fibrin clot.\n- WHO defines pregnancy anaemia as haemoglobin below 11 g/dL — daily iron and folate are standard prevention.\n- Prevent postpartum haemorrhage by keeping the uterus contracted and empty: never make the clotting system fight alone.",
      },
    ],
    questions: [
      {
        topic: "Blood Components",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which blood component carries oxygen from the lungs to the tissues?",
        options: ["Platelets", "Plasma proteins", "Red blood cells containing haemoglobin", "Neutrophils"],
        correctIndex: 2,
        explanation:
          "Red blood cells are packed with haemoglobin, the iron-bearing protein that grips oxygen in the lungs and releases it in the tissues. Platelets, plasma proteins and white cells all do other jobs.",
        courseSlug: "anatomy-physiology-1",
      },
      {
        topic: "Blood Components",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "According to WHO, anaemia in pregnancy is defined as haemoglobin below which level?",
        options: ["13 g/dL", "11 g/dL", "9 g/dL", "7 g/dL"],
        correctIndex: 1,
        explanation:
          "WHO sets the pregnancy threshold at 11 g/dL — lower than for non-pregnant women because pregnancy naturally dilutes the blood. Below 11 the woman is anaemic; below 7 is severe and needs urgent care.",
        courseSlug: "anatomy-physiology-1",
      },
      {
        topic: "Blood Components",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A wound is infected with bacteria. Which white cell arrives first and in the largest numbers?",
        options: ["Lymphocytes", "Eosinophils", "Basophils", "Neutrophils"],
        correctIndex: 3,
        explanation:
          "Neutrophils are the most numerous white cells and the rapid response team for bacterial infection — pus is largely spent neutrophils. Lymphocytes dominate viral infections, and eosinophils rise with parasites.",
        courseSlug: "anatomy-physiology-1",
      },
    ],
    flashcards: [
      {
        topic: "Blood Components",
        front: "The three main plasma proteins and their jobs?",
        back: "Albumin keeps water inside the vessels; globulins (antibodies) defend; fibrinogen becomes fibrin threads for clotting.",
      },
      {
        topic: "Blood Components",
        front: "What haemoglobin level defines anaemia in pregnancy (WHO), and what is standard prevention?",
        back: "Below 11 g/dL. Prevention: daily iron and folic acid in antenatal care, plus iron-rich foods taken with vitamin C to aid absorption.",
      },
      {
        topic: "Blood Components",
        front: "What do platelets do?",
        back: "They are cell fragments that rush to vessel leaks, form a plug, and trigger the clotting cascade — the fibrin mesh that stops bleeding after birth or injury.",
      },
    ],
    sources: [
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "Daily iron and folic acid supplementation in pregnant women (guideline)",
        year: "2012",
        note: "Guidance summary — check the latest WHO guidance for current recommendations.",
      },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────
  {
    courseSlug: "anatomy-physiology-1",
    moduleTitle: "Body Systems Overview",
    lessonTitle: "The Respiratory System: Breath of Life",
    description:
      "From nose to alveoli, and the first breath that matters most. Learn the airway, gas exchange and the newborn breathing rates that flag danger.",
    difficulty: "Moderate",
    durationMin: 14,
    objectives: [
      "Trace the path of air from nose to alveoli.",
      "Explain how gases cross at the alveoli and how the diaphragm drives breathing.",
      "Apply newborn breathing rates and WHO fast-breathing thresholds to danger-sign recognition.",
    ],
    tags: ["respiration", "lungs", "newborn care", "danger signs"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every cell of the body burns fuel with oxygen and makes carbon dioxide it must dump. The respiratory system is both the supplier and the waste service, renewing the blood every time it sweeps through the lungs.\n\nIt also owns a midwife's most dramatic moment: the first breath, when a baby who has never used lungs inflates them and cries. Nothing you learn this year matters more than understanding that breath — and knowing when breathing counts as danger.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Follow the air. It enters the **nose**, where hairs, mucus and a rich blood supply warm, wet and clean it — the nose is the air's waiting room. Then the **pharynx**, the **larynx** guarding the airway and making the voice, the **trachea**, which splits into two **bronchi** entering the lungs, branching into fine **bronchioles** and ending in millions of **alveoli**: thin-walled air sacs wrapped tightly in capillaries.\n\nAt the alveolus, business is done. Oxygen drifts across the whisper-thin walls into blood and boards haemoglobin; carbon dioxide drifts out to be breathed away. No pump, no effort — just **diffusion**, each gas following its own gradient. The placenta works the same quiet way between mother and baby.\n\nBreathing itself is mechanical. To breathe in, the **diaphragm** contracts and flattens while intercostal muscles lift the ribs, the chest expands, pressure inside drops, and air flows in. Breathing out is simple relaxation. The newborn's first breath inflates fluid-filled alveoli for the very first time, and healthy newborns breathe 40 to 60 times a minute — faster than adults, and normal for them.",
      },
      {
        type: "clinical_pearl",
        body: "Count a newborn's breaths for one full minute while the baby is calm. 40-60 is normal; 60 or more in a baby under two months is fast breathing — a WHO danger sign pointing to pneumonia. Chest indrawing and grunting belong in the same alarm pack. Count, do not glance.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A three-week-old baby is brought to your CHPS compound with cough and difficulty feeding. He is pink, but when you count his breathing for a full minute while he is settled, you get 66 breaths, and his chest draws inward below the ribs with each breath.\n\nWhat do the numbers and the chest finding mean, and what must you do?\n\nAnswer: 66 breaths per minute at three weeks of age is fast breathing — the WHO threshold for a baby under two months is 60 — and chest indrawing is a second danger sign. Together they point to possible pneumonia, which kills newborns quickly. This baby needs urgent referral to a facility that can treat him; keep him warm, support feeding, and follow your local danger-sign protocol. Counting for the full minute, calmly, is what caught it — a rushed glance would have missed it.",
      },
      {
        type: "memory_trick",
        body: "The airway is a tree: the trachea is the trunk, bronchi the branches, bronchioles the twigs, alveoli the leaves — and the exchange of gases happens in the leaves, each one cell thin and wrapped in capillaries.",
      },
      {
        type: "summary",
        body: "- Air path: nose, pharynx, larynx, trachea, bronchi, bronchioles, alveoli.\n- The nose warms, wets and filters incoming air before it travels deeper.\n- Alveoli are one-cell-thin sacs wrapped in capillaries; oxygen enters and carbon dioxide leaves by diffusion.\n- Inspiration: the diaphragm contracts and flattens, the ribs lift, the chest expands and air flows in; expiration is relaxation.\n- Healthy newborns breathe 40-60 times per minute.\n- 60 or more breaths per minute in a baby under two months is fast breathing — a WHO danger sign; chest indrawing and grunting travel with it.",
      },
    ],
    questions: [
      {
        topic: "Respiratory System",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Where does gas exchange between air and blood take place?",
        options: ["Trachea", "Bronchioles", "Alveoli", "Larynx"],
        correctIndex: 2,
        explanation:
          "The alveoli are the thin-walled air sacs wrapped in capillaries. Their walls are one cell thick, so oxygen and carbon dioxide cross by diffusion in a fraction of a heartbeat. All the airways above them are delivery pipes.",
        courseSlug: "anatomy-physiology-1",
      },
      {
        topic: "Respiratory System",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What happens during quiet breathing in (inspiration)?",
        options: [
          "The diaphragm relaxes and rises, pushing air out",
          "The diaphragm contracts and flattens while the chest expands, drawing air in",
          "The lungs actively suck air like a pump pulling water",
          "The ribs move down and inward to open the airway",
        ],
        correctIndex: 1,
        explanation:
          "The diaphragm contracts, flattens and moves downward while intercostal muscles lift the ribs. The chest cavity enlarges, the pressure inside falls, and air flows in down the pressure gradient. Breathing out needs no muscle work — it is relaxation.",
        courseSlug: "anatomy-physiology-1",
      },
      {
        topic: "Respiratory System",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A calm two-week-old baby breathes 62 times in one full minute. How do you interpret this?",
        options: [
          "Normal for a newborn",
          "Fast breathing — a danger sign in a baby under two months needing urgent assessment",
          "A mild problem to review at the next clinic visit",
          "Expected after a feed, no action needed",
        ],
        correctIndex: 1,
        explanation:
          "WHO sets the fast-breathing threshold at 60 breaths per minute for young infants under two months, against a normal range of 40-60. 62 with a calm count is fast breathing — a pneumonia danger sign requiring urgent assessment and referral, not a wait-and-see.",
        courseSlug: "anatomy-physiology-1",
      },
    ],
    flashcards: [
      {
        topic: "Respiratory System",
        front: "Trace the path of a breath of air from entry to exchange.",
        back: "Nose, pharynx, larynx, trachea, bronchi, bronchioles, alveoli — where oxygen and carbon dioxide cross into and out of blood by diffusion.",
      },
      {
        topic: "Respiratory System",
        front: "How does the diaphragm draw air in?",
        back: "It contracts and flattens while the ribs lift — the chest cavity expands, pressure drops, and air flows in. Breathing out is simply relaxation.",
      },
      {
        topic: "Respiratory System",
        front: "Normal newborn breathing rate, and the danger threshold under two months?",
        back: "40-60 breaths per minute is normal; 60 or more is fast breathing — a WHO danger sign pointing to pneumonia, needing urgent referral.",
      },
    ],
    sources: [
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "WHO / UNICEF",
        title: "Integrated Management of Childhood Illness (IMCI) chart booklet",
        year: "2014",
        note: "Fast-breathing and danger-sign thresholds — check the latest edition.",
      },
    ],
  },

  // ── 14 ─────────────────────────────────────────────────────
  {
    courseSlug: "anatomy-physiology-1",
    moduleTitle: "Body Systems Overview",
    lessonTitle: "The Digestive System: The Body's Kitchen",
    description:
      "A nine-metre kitchen that turns meals into mother and baby. Follow the food, meet the villi, and understand pregnancy heartburn at last.",
    difficulty: "Easy",
    durationMin: 14,
    objectives: [
      "Trace food from mouth to rectum and name each organ's job along the way.",
      "Explain where digestion and absorption happen, including villi, bile and pancreatic enzymes.",
      "Apply digestive physiology to common pregnancy complaints such as heartburn and constipation.",
    ],
    tags: ["digestion", "nutrition", "pregnancy comfort", "villi"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every heartbeat, contraction and thought runs on fuel, and the digestive system is where fuel is made. A muscular tube roughly nine metres long turns plantain, beans and fish into glucose, amino acids and fats small enough to cross into the blood.\n\nIn pregnancy, hormones and a growing uterus remodel the same system — and the results, morning sickness, heartburn and constipation, will fill your clinic days.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Follow a meal. The **mouth** grinds it and mixes in saliva, which starts starch digestion. Swallowed food rides the **oesophagus** by **peristalsis** — waves of muscle squeezing it downward, so food arrives even if you eat upside down. The **stomach** churns it with acid and enzymes into a soup called chyme; the acid also kills many swallowed germs.\n\nThe **small intestine** is the main dining table. In its first stretch, the duodenum, it receives bile made by the liver and stored in the gallbladder — bile breaks fat into droplets — plus powerful enzymes from the pancreas. Along its length, millions of finger-like **villi** absorb the broken-down nutrients into blood. The **large intestine** reclaims water and packs the remainder into stool for the rectum to store.\n\nThe accessory organs matter: the liver processes nutrients and makes bile, the gallbladder stores it, and the pancreas supplies enzymes as well as insulin. In pregnancy, progesterone slows the gut (constipation) and relaxes the stomach's upper valve while the uterus crowds upward (heartburn).",
      },
      {
        type: "clinical_pearl",
        body: "Counsel heartburn in pregnancy with physics and kindness: small frequent meals, sitting upright after eating, raising the head of the bed, and easing the late pepper soup. It is hormone and pressure, usually not disease — but counsel before medicating, and refer whatever is severe or unusual.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman at 28 weeks attends your evening clinic with a burning pain behind her breastbone after meals and at night. She eats one large evening meal and lies down immediately to rest, and she is distressed, asking whether 'the acid is harming my baby'.\n\nExplain to her what is happening, and give your advice.\n\nAnswer: Not harm — pressure and hormones. Pregnancy hormones, especially progesterone, relax the valve at the top of the stomach so acid rises more easily, and the growing uterus crowds the stomach upward, pushing acid into the oesophagus where it burns. Advise small frequent meals rather than one large one, sitting upright for a while after eating, raising the head of the bed, and easing very spicy or fatty late meals. The baby is not being burned. If the pain is severe, atypical or accompanied by other symptoms, refer.",
      },
      {
        type: "memory_trick",
        body: "The kitchen brigade: the mouth chews (prep), the stomach stews (the acid cooking pot), the small intestine serves (its villi are the serving fingers that absorb), and the large intestine recycles the water and takes out the bins. Bile and pancreatic enzymes are the visiting chefs in the duodenum.",
      },
      {
        type: "summary",
        body: "- Path: mouth, oesophagus, stomach, small intestine (duodenum, jejunum, ileum), large intestine, rectum.\n- Saliva starts starch digestion; stomach acid and enzymes make chyme and kill many germs.\n- Peristalsis — muscle waves — moves food down the oesophagus even against gravity.\n- Most digestion and absorption happen in the small intestine, through millions of villi, with bile and pancreatic enzymes arriving in the duodenum.\n- The large intestine reclaims water and forms stool.\n- Pregnancy: progesterone slows the gut (constipation) and loosens the stomach's upper valve while the uterus crowds it (heartburn) — counsel small meals, upright posture and referral for severe cases.",
      },
    ],
    questions: [
      {
        topic: "Digestive System",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Most digestion and nutrient absorption occur in which organ?",
        options: ["Stomach", "Small intestine", "Large intestine", "Oesophagus"],
        correctIndex: 1,
        explanation:
          "The small intestine is the main dining table: bile and pancreatic enzymes finish digestion there, and millions of villi absorb the nutrients into blood. The stomach starts protein digestion, and the large intestine mainly reclaims water.",
        courseSlug: "anatomy-physiology-1",
      },
      {
        topic: "Digestive System",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is peristalsis?",
        options: [
          "Wave-like muscle contractions that move food along the digestive tract",
          "The chemical breakdown of fat by bile salts",
          "The absorption of water in the large intestine",
          "The churning of food with acid in the stomach",
        ],
        correctIndex: 0,
        explanation:
          "Peristalsis is coordinated waves of smooth muscle contraction behind the food and relaxation in front of it, pushing contents along — so food reaches the stomach even if you swallow upside down.",
        courseSlug: "anatomy-physiology-1",
      },
      {
        topic: "Digestive System",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why does heartburn occur so commonly in pregnancy?",
        options: [
          "Progesterone relaxes the stomach's upper valve and the growing uterus crowds the stomach, letting acid rise into the oesophagus",
          "The baby swallows acid that the mother must then clear",
          "The liver stops producing bile during pregnancy",
          "The stomach stops making acid until after birth",
        ],
        correctIndex: 0,
        explanation:
          "Two forces combine: progesterone loosens the lower oesophageal sphincter so acid escapes upward, and the enlarging uterus presses the stomach from below. Acid then burns the oesophagus — mechanical and hormonal, not dangerous to the baby.",
        courseSlug: "anatomy-physiology-1",
      },
    ],
    flashcards: [
      {
        topic: "Digestive System",
        front: "What are villi and why do they matter?",
        back: "Millions of finger-like folds lining the small intestine that hugely increase surface area — most nutrient absorption into the blood happens across them.",
      },
      {
        topic: "Digestive System",
        front: "Define peristalsis in one line.",
        back: "Wave-like smooth muscle contractions that push food along the gut — the reason food reaches the stomach even upside down.",
      },
      {
        topic: "Digestive System",
        front: "Why does pregnancy cause heartburn, and what is first-line advice?",
        back: "Progesterone relaxes the stomach's upper valve and the uterus crowds it, letting acid rise. Advise small frequent meals, sitting upright after eating, raising the head of the bed, easing spicy or fatty late meals — refer severe or atypical cases.",
      },
    ],
    sources: [
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Pearson",
        title: "Martini: Fundamentals of Anatomy and Physiology",
        year: "2021 (11th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },
];
