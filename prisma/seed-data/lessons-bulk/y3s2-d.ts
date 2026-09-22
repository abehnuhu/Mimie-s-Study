// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 3, Semester 2 — Batch D (Paediatric Nursing + Community Health Nursing II)
// 19 lessons anchored to prisma/seed-data/curriculum.ts
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "paediatric-nursing",
    moduleTitle: "The Growing Child",
    lessonTitle: "Growth and Development: The Roadmap of Childhood",
    description:
      "Growth is the centimetres, development is the skills — and both follow a roadmap you can read. Learn the milestones and the red flags that mean a child needs help.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the difference between growth and development and the main developmental domains.",
      "Explain how WHO growth charts and milestones are used to monitor children.",
      "Apply milestone red flags to decide when a child needs referral.",
    ],
    tags: ["growth", "development", "milestones", "growth charts", "screening"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A child's body tells two stories at once. **Growth** is the measurable story — weight, length and head circumference plotted over time. **Development** is the skill story — how the child gains control of head, hands, words and friendships, domain by domain. Ghana's growth monitoring and promotion (GMP) clinics weigh the first story; a wise nurse reads both at every contact.\n\nBecause both stories follow a roadmap, you need the broad mile-markers and, above all, the signs a child has left the road.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The motor roadmap: a social smile by six to eight weeks; steady head control by about four months; rolling over and reaching by four to six months; sitting without support by six to eight; crawling and pulling to stand by nine to twelve; first steps around the first birthday; and running, climbing and feeding themselves in the second year. Language grows in step: babbling by six months, first true words around the first birthday, two-word phrases by age two. Plot growth on WHO charts — weight-for-age, weight-for-height (**wasting** = recent hunger or illness) and height-for-age (**stunting** = long-term deprivation).\n\nNow the red flags: **no social smile by three months; not sitting by nine months; not walking by eighteen months; no words by sixteen to eighteen months; any loss of a skill already learned; and a head circumference or weight crossing centile lines sharply up or down.** None of these is a \"wait and see\" finding — each deserves assessment and referral. Remember also that two children can grow differently and both be normal: the roadmap has lanes, not tramlines.",
      },
      {
        type: "clinical_pearl",
        body: "Loss of a skill is never normal, at any age, in any domain. A child who stops saying the words he had, or stops walking after an illness, needs assessment the same week.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At a welfare clinic, a mother mentions that her eighteen-month-old son has never walked. He sits confidently, pulls to stand against the bench, babbles happily and transfers objects hand to hand. He was born at term with a normal birth weight, and his growth chart follows his line nicely.\n\nWhich domain concerns you, and what is your next move?\n\nAnswer: His fine motor, language and social skills and his growth look on course, but no independent walking at eighteen months is a motor red flag — especially with pulling-to-stand present, which localises the concern and makes further assessment essential. Examine tone, reflexes and leg symmetry, ask about illness and feeding, and refer for developmental assessment rather than reassuring the family that he will \"walk when ready\" — though some children do walk late, the red flag rule exists because some do not.",
      },
      {
        type: "memory_trick",
        body: "Rhyme the red flags: \"**No smile by three, no sit by nine, no word or walk by eighteen — refer, don't wait in line.**\" And keep the year-map on one hand: by each **birthday** a new chapter — first steps and first words at one, two-word chat at two.",
      },
      {
        type: "summary",
        body: "- Growth is measurable size over time; development is gaining skills across gross motor, fine motor, language and social domains.\n- Milestones arrive in ranges: smile by 6–8 weeks, sit by 6–8 months, first steps around the first birthday, words by 12–15 months, two-word phrases by two years.\n- WHO charts turn measurements into meaning: wasting (weight-for-height) signals recent trouble; stunting (height-for-age) signals long-term deprivation.\n- Red flags: no smile by 3 months, not sitting by 9, not walking or no words by 16–18 months, skill regression, or growth crossing centiles sharply.\n- Every contact is a screening opportunity — glance at the chart, watch the child play, ask the parent one question.",
      },
    ],
    questions: [
      {
        topic: "Growth and Development",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which finding in an infant is a developmental red flag requiring referral?",
        options: [
          "Sitting unsupported at eight months",
          "Not sitting without support by nine months",
          "Rolling over at five months",
          "Crawling at ten months",
        ],
        correctIndex: 1,
        explanation:
          "Most infants sit unsupported by six to eight months, so not sitting by nine months is a red flag needing assessment. The other milestones are comfortably within normal ranges.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Growth and Development",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A three-year-old who was speaking in short sentences six months ago now says only single words. How do you interpret this?",
        options: [
          "A normal phase of selective speech",
          "Skill regression — never normal, and needing prompt assessment",
          "Expected after the second birthday",
          "Only significant if growth has also slowed",
        ],
        correctIndex: 1,
        explanation:
          "Losing a skill already mastered is a red flag in every domain at every age. Language regression in particular demands urgent developmental and neurological assessment — it is not a phase, and growth trends do not make it safe to wait.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Growth and Development",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "On a WHO growth chart, a child's weight-for-height is far below the expected range while height-for-age is normal. What does this pattern suggest?",
        options: [
          "Long-term chronic undernutrition",
          "Recent or acute weight loss — wasting",
          "Normal variation of toddler growth",
          "Excess weight for height",
        ],
        correctIndex: 1,
        explanation:
          "Weight-for-height compares current weight to current size, so a sharp fall signals recent weight loss — wasting, typically from acute illness or hunger. Stunting (low height-for-age) is the marker of long-term deprivation, and here height is normal.",
        courseSlug: "paediatric-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Growth and Development",
        front: "Distinguish growth from development.",
        back: "Growth is the measurable increase in size — weight, length, head circumference plotted over time. Development is the progressive gain of function — gross motor, fine motor, language, social and cognitive skills.",
      },
      {
        topic: "Growth and Development",
        front: "Quote four developmental red flags.",
        back: "No social smile by 3 months; not sitting by 9 months; not walking and no words by 16–18 months; any loss of already-learned skills. Add growth that crosses centile lines sharply.",
      },
      {
        topic: "Growth and Development",
        front: "What do wasting and stunting each represent on WHO charts?",
        back: "Wasting = low weight-for-height, acute recent undernutrition or illness; stunting = low height-for-age, chronic long-term deprivation.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Child Growth Standards",
        url: "https://www.who.int/tools/child-growth-standards",
      },
      {
        organization: "World Health Organization",
        title: "Pocket Book of Hospital Care for Children (2nd edition)",
        year: "2013",
        url: "https://www.who.int/publications/i/item/9789241548373",
      },
      {
        organization: "Ghana Health Service",
        title: "Growth Monitoring and Promotion (GMP) programme materials",
        note: "Verify the current national GMP guidance and chart editions.",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "paediatric-nursing",
    moduleTitle: "The Growing Child",
    lessonTitle: "The Newborn-to-Infant Transition",
    description:
      "Reflexes that arrive at birth and retire on schedule, stools that change colour like traffic lights, and a weight journey with its own rules — the first weeks explained.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the primitive reflexes, their timing and their clinical meaning.",
      "Explain the expected weight changes and stool patterns of early infancy.",
      "Apply normal-transition knowledge to reassure parents appropriately and spot genuine problems.",
    ],
    tags: ["infant", "transition", "primitive reflexes", "stools", "weight gain"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The newborn arrives fitted with automatic programmes — the primitive reflexes — which run the show until the thinking brain takes over. Presence at birth confirms the wiring works; polite retirement over the first months confirms the cortex is maturing.\n\nThe same visits bring the two questions parents ask most: \"Is this weight normal?\" and \"are these stools normal?\" Both follow rules, and knowing them turns anxiety into reassurance.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Meet the reflexes: **Moro** (startle), **rooting** (cheek touched, head turns), **sucking**, **palmar grasp** (your finger is captured), **plantar grasp**, **stepping** and the asymmetric tonic neck (fencer's posture) — all fading over the first four to six months as voluntary control arrives. Abnormal comes in two flavours: **absent at birth** (worrying) or **persisting too long** (development may be delayed). A one-sided Moro — one arm flies, one stays — suggests nerve or bone injury on the quiet side.\n\nWeight rules: newborns lose up to about seven to ten percent in the first days, regain birth weight by ten to fourteen days, then gain roughly 150–200 g weekly for the first three months, doubling birth weight by about five to six months. Stool rules: black tarry **meconium** for a day or two, greenish transitional stools, then the breastfed norm — soft, seedy, mustard-yellow, from six times daily to once every few days, both fine if feeding and growth are good. Formula stools are firmer and smellier.",
      },
      {
        type: "clinical_pearl",
        body: "Watch a feed before you weigh the worries: a baby who latches, suckles audibly, swallows and settles is almost always thriving, however strange the stool diary looks. The scale and the stool together settle the question.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A mother brings her six-week-old, fully breastfed baby to your CHPS compound: \"He passes stool six times a day — loose and yellow with seeds. My mother says my milk is too weak and I should add porridge.\" The baby feeds eagerly, has six heavy wet nappies a day, and his weight tracks his line — 200 g up on last week.\n\nHow do you counsel her?\n\nAnswer: This is the textbook normal breastfed stool — frequent, loose, seedy, mustard-yellow — and it signals a good milk supply, not weak milk. With eager feeding, heavy wet nappies and steady weight gain, there is nothing to fix: exclusive breastfeeding covers all his needs until six months, and porridge now would displace milk and bring infection risk. Reassure, plot the weight so she sees the story, and give the return signs: blood or mucus in stool, vomiting, poor feeding, or a weight line that flattens.",
      },
      {
        type: "memory_trick",
        body: "The stool rainbow of week one: \"**Black tar, then army green, then mustard seeds** — after that, six-a-day or once-a-week can both be seen.\" Reflexes retire by six months, except the plantar grasp, the last to leave near the first birthday.",
      },
      {
        type: "summary",
        body: "- Primitive reflexes (Moro, rooting, sucking, palmar and plantar grasp, stepping) confirm healthy wiring at birth and fade by 4–6 months as voluntary control grows.\n- Absent reflexes at birth, reflexes persisting well beyond six months, or a one-sided Moro all warrant assessment.\n- Weight: lose up to 7–10% in the first days, regain birth weight by 10–14 days, then gain ~150–200 g weekly, doubling birth weight by 5–6 months.\n- Breastfed stools are soft, seedy, mustard-yellow and may come six times a day or every few days — frequency plus growth defines normal.",
      },
    ],
    questions: [
      {
        topic: "Newborn-to-Infant Transition",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A two-week-old breastfed baby passes frequent loose, seedy, mustard-yellow stools, feeds eagerly and is gaining weight. What is your interpretation?",
        options: [
          "Normal breastfed stool pattern — reassure the mother",
          "Lactose intolerance requiring formula change",
          "Diarrhoea needing ORS",
          "A reason to start complementary feeds early",
        ],
        correctIndex: 0,
        explanation:
          "Frequent, loose, seedy, mustard-yellow stools are the healthy norm for an exclusively breastfed baby. With eager feeding and good weight gain there is nothing pathological — reassure, and no feeds should be added before six months.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Newborn-to-Infant Transition",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A newborn startles violently when the cot is bumped, but only the right arm flings out; the left stays still. What does this asymmetry suggest?",
        options: [
          "A normal, stronger side of the body",
          "Possible injury to the left arm's nerves or bone — the quiet side needs examination",
          "A normal early form of the Moro reflex",
          "Overfeeding",
        ],
        correctIndex: 1,
        explanation:
          "The Moro should be symmetric. A one-sided Moro points to a problem on the motionless side — classically an upper brachial plexus (Erb's) injury or a fractured clavicle or humerus. Examine that arm, check the grip, and refer per protocol.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Newborn-to-Infant Transition",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A term baby loses 8% of birth weight on day three and is feeding well. On which day should the baby be back at birth weight if all is well?",
        options: [
          "By day 5 at the latest",
          "By day 10–14",
          "By the end of the first month",
          "Babies never regain the early loss",
        ],
        correctIndex: 1,
        explanation:
          "A loss of up to about 7–10% is physiological, but birth weight should be regained by ten to fourteen days. Continued loss beyond the first week, or failure to regain by two weeks, points to feeding problems and needs review.",
        courseSlug: "paediatric-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Newborn-to-Infant Transition",
        front: "Name four primitive reflexes and state when they normally fade.",
        back: "Moro (startle), rooting, sucking, palmar grasp — present at birth and fading over the first 4–6 months; the plantar grasp persists longer, to around the first birthday.",
      },
      {
        topic: "Newborn-to-Infant Transition",
        front: "What does a persisting primitive reflex beyond six months suggest?",
        back: "Delayed cortical maturation — persistent reflexes beyond the usual window (or reflexes absent at birth) warrant developmental assessment.",
      },
      {
        topic: "Newborn-to-Infant Transition",
        front: "Describe the normal stool journey of the first week.",
        back: "Black tarry meconium for the first day or two, then greenish transitional stools, then the breastfed norm: soft, seedy, mustard-yellow — frequent or infrequent, both fine if feeding and growth are good.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Infant and young child feeding counselling tools",
        note: "Verify the current WHO edition used in your programme.",
      },
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e — development and reflexes",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
      },
      {
        organization: "Elsevier",
        title: "Wong's Essentials of Pediatric Nursing",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "paediatric-nursing",
    moduleTitle: "The Growing Child",
    lessonTitle: "Child Assessment: A Different Approach",
    description:
      "You cannot ask a baby where it hurts — but a screaming toddler on a mother's lap will tell you almost everything, if you know how to look before you touch.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the paediatric assessment triangle and WHO emergency signs for rapid triage.",
      "Explain how observation-first sequencing adapts the physical examination for children.",
      "Apply a child-friendly examination order and accurate measurement to everyday practice.",
    ],
    tags: ["assessment", "paediatrics", "triage", "observation", "vital signs"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Adults walk in and narrate. Children arrive crying, clinging or asleep, and the first minutes decide everything: is this child dying, sick, or frightened and well? WHO's emergency signs catch the critical few; the paediatric assessment triangle grades the rest within seconds.\n\nThen comes the second skill: examining without destroying your own data — a screaming, pinned-down child has a fast pulse, heaving chest and rigid tummy whether ill or not. Order and manner matter as much as findings.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The **paediatric assessment triangle** has three corners: **appearance** (alert, interactive, consolable or floppy and distant), **work of breathing** (how hard the child breathes — in-drawing, grunting, nasal flaring) and **circulation to the skin** (pale, mottled or blue). Any corner looking wrong marks the child urgent. WHO emergency signs go further: obstructed or severely distressed breathing, central cyanosis, signs of shock (cold hands with a long capillary refill and a fast weak pulse), coma or convulsion, and severe dehydration in a lethargic child — any one means treatment now, queue never.\n\nWork **from least to most intrusive**: watch and play first, listen to the chest while the child is calm, feel the tummy when the child trusts you, and leave the ears and throat for last — one look at a tongue depressor and your quiet child is gone. Count the respiratory rate for a full minute before touching. **Weigh every child** — weight is the denominator for every drug dose. Add temperature, and MUAC at welfare contacts.",
      },
      {
        type: "clinical_pearl",
        body: "Count the respiratory rate while the child sleeps or rests on the mother's lap, before any examination — crying doubles it, and a wrong number becomes a wrong referral or a missed pneumonia.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A twenty-month-old is carried into your OPD crying loudly, hot to touch. The queue is long; a colleague suggests \"just give paracetamol first and see.\" From the doorway you see him crying with a strong voice, kicking, clinging to his mother. His colour is pink; as she settles him on her lap and offers the breast he quiets, and you count 38 breaths per minute.\n\nHow do you use the assessment triangle here, and what is your next step?\n\nAnswer: All three corners look safe — appearance strong (loud cry, clinging, consolable), breathing unlaboured at 38 per minute (under the 40 threshold for his age), circulation pink. So settle him, take his temperature, weigh him, examine the throat and ears last, test for malaria, and treat the cause you find. Had any corner been abnormal, he would have gone straight to emergency care.",
      },
      {
        type: "memory_trick",
        body: "Three words for the triangle: **Look, Listen, Feel — eyes first, hands last.** For the examination order: \"**Play, Chest, Belly, then Throat last.**\" And \"**no weight, no dose**\" — weigh every child before prescribing.",
      },
      {
        type: "summary",
        body: "- Paediatric assessment triangle: appearance, work of breathing, circulation to skin — three looks in seconds, before any touch.\n- Examine least-intrusive first: observe and play, then chest, then abdomen, ears and throat last; count the respiratory rate for one full minute while calm.\n- Weigh every child — weight drives every paediatric drug dose; add MUAC and growth review at welfare contacts.\n- A calm, ordered examination on the mother's lap produces better data than a pinned-down struggle ever will.",
      },
    ],
    questions: [
      {
        topic: "Child Assessment",
        type: "MCQ",
        difficulty: "Easy",
        stem: "When is the best moment to count a child's respiratory rate accurately?",
        options: [
          "While the child is crying during undressing",
          "While the child is calm or asleep on the caregiver's lap, before any examination",
          "Immediately after examining the throat",
          "During a feed with the child struggling",
        ],
        correctIndex: 1,
        explanation:
          "Crying and struggling can double the respiratory rate, so count for one full minute while the child is calm or asleep and before touching them — ideally before the examination begins.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Child Assessment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which finding is a WHO emergency sign requiring immediate treatment rather than triage to the queue?",
        options: [
          "A temperature of 38.5°C in a drinking, alert child",
          "Cold hands with capillary refill over three seconds and a fast, weak pulse",
          "A clear runny nose in an otherwise playful child",
          "Mild jaundice without fever in a five-year-old",
        ],
        correctIndex: 1,
        explanation:
          "Cold hands, prolonged capillary refill and a fast weak pulse describe shock — an emergency sign treated immediately. Fever in an alert, drinking child and a runny nose in a playful child are triaged, not treated as emergencies.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Child Assessment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why should the ears and throat be examined last in a young child?",
        options: [
          "Because those findings are the least important",
          "Because children find them the most distressing, and once the child cries the rest of the examination data is spoilt",
          "Because the equipment must be sterilised between children",
          "Because the throat can only be seen after feeding",
        ],
        correctIndex: 1,
        explanation:
          "A tongue depressor or auriscope often triggers the tears — and a crying child gives a fast pulse, heaving chest and rigid abdomen that no longer mean anything clinically. Save the intrusive parts for last so the earlier, quieter findings stay trustworthy.",
        courseSlug: "paediatric-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Child Assessment",
        front: "Name the three corners of the paediatric assessment triangle.",
        back: "Appearance (alert, interactive, consolable), work of breathing (in-drawing, grunting, flaring), and circulation to the skin (pale, mottled, blue). Any abnormal corner makes the child urgent.",
      },
      {
        topic: "Child Assessment",
        front: "Why is every child weighed at a paediatric visit?",
        back: "Weight is the denominator for nearly every paediatric drug dose — prescribing without a current, measured weight invites under- or overdose. It also feeds the growth record.",
      },
      {
        topic: "Child Assessment",
        front: "State a child-friendly examination order.",
        back: "Watch and play first, listen to the chest while calm, feel the abdomen, and leave ears and throat for last — least intrusive to most intrusive, ideally on the caregiver's lap.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Pocket Book of Hospital Care for Children (2nd edition)",
        year: "2013",
        url: "https://www.who.int/publications/i/item/9789241548373",
      },
      {
        organization: "World Health Organization / UNICEF",
        title: "Emergency Triage Assessment and Treatment (ETAT) course materials",
        note: "Verify the current ETAT adaptation used in Ghana.",
      },
      {
        organization: "Elsevier",
        title: "Wong's Essentials of Pediatric Nursing",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 4 ─────────────────────────────────────────────────────
  {
    courseSlug: "paediatric-nursing",
    moduleTitle: "Feeding and Protecting",
    lessonTitle: "Nutrition for Infants and Children",
    description:
      "From the first hour of breastfeeding to the family plate at two years — the feeding journey, the Ghanaian plate, and the signs of malnutrition you must never miss.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the infant feeding timeline: exclusive breastfeeding, complementary feeding and continued breastfeeding.",
      "Explain what a balanced complementary meal looks like in a Ghanaian setting.",
      "Apply recognition of severe acute malnutrition and key supplementation practices.",
    ],
    tags: ["nutrition", "feeding", "breastfeeding", "malnutrition", "vitamin a"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A child's first thousand days build the body they will use for life, and feeding is the construction material. The timeline is simple: **nothing but breast milk for the first six months**, family foods **from six months**, breastfeeding continuing **to two years and beyond**. Most feeding problems you meet come from breaking that timeline — water at two months, thin porridge alone at eight.\n\nThis lesson walks the timeline, builds the Ghanaian plate, and teaches you to recognise malnutrition.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Exclusive breastfeeding means no water, no tea, no formula — breast milk is about 87% water, and a thirsty baby needs more feeds, not other fluids; extra fluids displace milk and bring germs. At six months add **complementary foods**: thick porridge (koko enriched with groundnut paste, not thin soup), and meals combining a staple (rice, banku, yam), a legume or animal food (beans, fish, egg) and vegetables or fruit (kontomire, pawpaw). Feed responsively, two to three meals plus snacks from six to eight months, rising to three to four by two years. The myths you will dismantle weekly: eggs are not \"for adults only\"; porridge alone is not a meal.\n\nRecognition: **kwashiorkor** shows puffy feet and face, flaky-peel skin, thin sparse hair, apathy; **marasmus** shows extreme wasting and an old-man face. Screen with **MUAC** — under 11.5 cm in a 6–59-month-old, or any oedema, means severe acute malnutrition needing therapeutic care. Vitamin A from six months and deworming from one year close common gaps.",
      },
      {
        type: "clinical_pearl",
        body: "Two hands make the screening: MUAC tape on the left upper arm, thumb pressed on the feet for pits. Under 11.5 cm or pitting oedema means therapeutic feeding today — no home counselling substitutes.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At a growth monitoring session, a mother of a four-month-old says her own mother insists the baby needs water during the harmattan heat, and that he \"cries too much in the evenings — my milk is not enough.\" He is exclusively breastfed, weighs steadily along his line, and passes six heavy wet nappies a day.\n\nWhat do you tell her, and what will change your advice?\n\nAnswer: Her milk is enough — steady weight gain and six heavy wet nappies prove it. Breast milk adjusts to thirst, so in hot weather she offers the breast more often; water at four months fills the stomach, displaces milk and brings diarrhoea risk. Evening fussiness in a growing four-month-old is common, not a feeding failure. What would change your advice: a flattening weight line, fewer wet nappies, or poor attachment — and at six months complementary foods begin while breastfeeding continues.",
      },
      {
        type: "memory_trick",
        body: "The **6-6-2 rule**: nothing but breast for **6** months, family food from **6** months, breastfeeding to **2** years and beyond. And the Ghanaian baby plate on three fingers: a **staple**, a **protein** (beans, fish, egg), and a **colour** (kontomire, garden eggs, pawpaw).",
      },
      {
        type: "summary",
        body: "- Exclusive breastfeeding to six months: no water, no other fluids — breast milk is ~87% water and more frequent feeds meet thirst.\n- From six months: thick, enriched complementary meals — staple plus legume or animal food plus vegetables or fruit — with responsive feeding, continuing breastfeeding to two years and beyond.\n- Meals grow with age: 2–3 from 6–8 months, 3–4 by 9–23 months, plus snacks and milk.\n- Kwashiorkor = oedema, flaky skin, thin hair; marasmus = extreme wasting. MUAC <11.5 cm or oedema = severe acute malnutrition → therapeutic care.\n- Vitamin A from six months and deworming from one year are part of routine protection in Ghana.",
      },
    ],
    questions: [
      {
        topic: "Infant and Child Nutrition",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A mother asks whether to give her three-month-old water during the hot season. What is the correct advice?",
        options: [
          "Give cooled boiled water twice a day",
          "Offer the breast more frequently — breast milk meets both thirst and hunger, and extra water is not needed before six months",
          "Give diluted porridge instead of water",
          "Give glucose water to prevent weakness",
        ],
        correctIndex: 1,
        explanation:
          "Breast milk is about 87% water and supply adjusts to the baby's thirst, so more frequent feeds cover hot weather. Water or other fluids before six months displace milk, reduce milk production and introduce infection risk.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Infant and Child Nutrition",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "An eighteen-month-old has swollen feet and a puffy face, sparse reddish hair and peeling skin patches, and is apathetic. What does this picture suggest, and what is the priority?",
        options: [
          "Simple anaemia — start iron syrup and review in a month",
          "Kwashiorkor (severe acute malnutrition with oedema) — refer for therapeutic feeding",
          "Nephrotic syndrome — restrict fluids at home",
          "Normal toddler puffiness of the dry season",
        ],
        correctIndex: 1,
        explanation:
          "Oedema with flaky-peel skin, thin discoloured hair and apathy is the classic picture of kwashiorkor. Bilateral pitting oedema in a young child defines severe acute malnutrition and needs urgent therapeutic care — home counselling or iron alone would be a dangerous delay.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Infant and Child Nutrition",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which combination best describes a balanced complementary meal for a nine-month-old in Ghana?",
        options: [
          "Thin rice water with sugar only",
          "Thick enriched porridge or a soft family meal combining a staple with beans, fish or egg and vegetables",
          "Breast milk alone, since solids are unnecessary until one year",
          "Fruit juice and biscuits between breastfeeds",
        ],
        correctIndex: 1,
        explanation:
          "From six months meals should be energy-dense and varied: a staple (banku, rice, porridge made thick), plus legume or animal protein (beans, groundnut, fish, egg) plus vegetables or fruit. Thin rice water, milk alone and juice-and-biscuits all fail energy, protein or micronutrient needs.",
        courseSlug: "paediatric-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Infant and Child Nutrition",
        front: "State the 6-6-2 feeding rule.",
        back: "Exclusive breastfeeding to 6 months (no water or other fluids), complementary family foods from 6 months, and continued breastfeeding to 2 years and beyond.",
      },
      {
        topic: "Infant and Child Nutrition",
        front: "What MUAC reading in a child aged 6–59 months indicates severe acute malnutrition?",
        back: "Mid-upper arm circumference below 11.5 cm — or bilateral pitting oedema at any circumference — both require urgent therapeutic feeding.",
      },
      {
        topic: "Infant and Child Nutrition",
        front: "Distinguish kwashiorkor from marasmus on sight.",
        back: "Kwashiorkor: oedematous feet and face, flaky-peel skin, sparse discoloured hair, apathy. Marasmus: severe wasting, visible ribs, old-man facies, alert but ravenous.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Guideline: Updates on the management of severe acute malnutrition in infants and children",
        year: "2013",
        url: "https://www.who.int/publications/i/item/9789241506328",
      },
      {
        organization: "World Health Organization / UNICEF",
        title: "Infant and young child feeding counselling cards",
        note: "Verify the current Ghana-adapted version.",
      },
      {
        organization: "Ghana Health Service",
        title: "Child Health Records Booklet and nutrition counselling materials",
        note: "Verify the current national edition for feeding and supplementation schedules.",
      },
    ],
  },

  // ── 5 ─────────────────────────────────────────────────────
  {
    courseSlug: "paediatric-nursing",
    moduleTitle: "Feeding and Protecting",
    lessonTitle: "Immunization: Schedules and Safety",
    description:
      "The little drops and jabs on Ghana's immunization schedule have silenced diseases our grandparents feared. Learn the timetable, the true contraindications, and the words that reassure a hesitant parent.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe Ghana's routine immunization schedule by age.",
      "Explain common side effects and distinguish them from true contraindications.",
      "Apply catch-up rules and counselling skills to keep children protected.",
    ],
    tags: ["immunization", "vaccines", "epi", "ghana schedule", "cold chain"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every antigen on the schedule is a disease Ghana once watched kill children in numbers. The schedule is your map of that protection, and the child health record booklet is the family's passport through it. Your job: know the timetable, keep it honest (a missed dose is continued, never restarted), and hold the hands of parents who heard a rumour at the market.\n\nThis lesson walks Ghana's routine schedule, flags the true contraindications (very little qualifies), and gives you counselling language for the everyday worries — fever, crying, \"he is sick today.\"",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Ghana's routine schedule in outline: **at birth** — BCG, OPV-0, hepatitis B; **at 6, 10, 14 weeks** — oral polio, pentavalent (DPT-HepB-Hib), PCV and rotavirus, with IPV at 14 weeks; **at 9 months** — measles-rubella, yellow fever and meningitis A; **15–18 months** — a second MR. Vitamin A accompanies measles contacts per policy, and HPV protects pre-teen girls where the programme operates. Always confirm against the current record booklet.\n\nThe commonest reactions are a tender lump at the BCG site (and its small, honourable scar), mild fever, fretfulness and a day of poor appetite — all brief, treatable with fluids, a cool cloth and weight-based paracetamol. **Minor illness — a cold, low fever, mild diarrhoea — is not a reason to postpone vaccination.** True contraindications are rare: severe allergic reaction to a previous dose, and, for live vaccines, significantly weakened immunity. A missed dose continues the series — never restart from zero. Behind every visit stands the **cold chain**: vaccines live between 2 and 8°C, and a vaccine left on a sunny windowsill quietly ruins itself.",
      },
      {
        type: "clinical_pearl",
        body: "A runny nose never postponed a life-saving vaccine. A child who is feeding, playing and febrile below 38.5°C is immunized today — the disease prevented is far more dangerous than the cold already there.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A mother arrives for her baby's 14-week vaccines but refuses them: \"He has a small fever since last night and he is sneezing.\" Temperature is 37.6°C, he is breastfeeding well, playful and his chest is clear.\n\nWhat do you say and do?\n\nAnswer: This is a mild illness, not a contraindication — vaccinate today, because postponing risks a real disease while waiting for a perfect day that never comes. Cover the expected after-effects (fussiness, low fever, a tender leg) with fluids, breastfeeding, a cool cloth and weight-based paracetamol, and record the doses. If she still declines, respect her, agree a return date and document — a refused visit you can re-invite is recoverable; a lost family is not.",
      },
      {
        type: "memory_trick",
        body: "Chant the ages: \"**Birth — six — ten — fourteen — nine — eighteen.**\" Birth: BCG, OPV, hepatitis B. Six-ten-fourteen: OPV, penta, PCV, rota (IPV at fourteen). Nine months: MR, yellow fever, MenA. Eighteen: MR again. Golden catch-up rule: \"**Continue, never restart.**\"",
      },
      {
        type: "summary",
        body: "- Ghana routine schedule: birth (BCG, OPV-0, HepB); 6, 10, 14 weeks (OPV, pentavalent, PCV, rotavirus; IPV at 14 weeks); 9 months (MR, yellow fever, MenA); 15–18 months (MR2) — verify against the current record booklet.\n- Common effects are brief: tender site, low fever, fretfulness — fluids, comfort, weight-based paracetamol.\n- Minor illness is NOT a contraindication — vaccinate the child with the sniffles; true contraindications are rare (severe reaction to a prior dose, significant immune compromise for live vaccines).\n- Missed doses continue the series — never restart it.\n- The cold chain (2–8°C) is part of the dose: a vaccine cooked in the sun is a placebo with paperwork.",
      },
    ],
    questions: [
      {
        topic: "Immunization",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A child missed her 10-week vaccines because the family travelled. She returns healthy at 14 weeks. What is the correct approach?",
        options: [
          "Restart the whole schedule from the birth doses",
          "Continue the series — give the missed 10-week doses now and keep to the programme with adjusted spacing",
          "Skip the missed doses and give only the 14-week set",
          "Wait until her first birthday and give a full fresh series",
        ],
        correctIndex: 1,
        explanation:
          "Interrupted schedules continue, they do not restart: give the missed doses now and complete the remaining ones with appropriate spacing. Skipping doses or restarting both leave avoidable gaps in protection.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Immunization",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother refuses vaccination because the baby has a cold and a temperature of 37.6°C, feeding and playing normally. What is the best response?",
        options: [
          "Agree to postpone for two weeks to be safe",
          "Explain that mild illness is not a contraindication and immunize today, covering expected side effects and comfort measures",
          "Give half doses now and the other half next month",
          "Refer to hospital before any vaccination",
        ],
        correctIndex: 1,
        explanation:
          "Mild illness in an otherwise well, feeding child does not reduce vaccine safety or effectiveness, and deferring only opens a window for disease. Vaccinate fully (never in halves), counsel on the mild expected reactions, and document.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Immunization",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which vaccines are routinely given at nine months on Ghana's schedule?",
        options: [
          "BCG and hepatitis B only",
          "Measles-rubella, yellow fever and meningitis A",
          "Pentavalent, PCV and rotavirus",
          "HPV and a second BCG",
        ],
        correctIndex: 1,
        explanation:
          "At nine months Ghana gives the first measles-rubella dose alongside yellow fever and meningitis A vaccines, with the second MR following at 15–18 months. Pentavalent, PCV and rotavirus belong to the 6-10-14 week visits, and BCG to birth.",
        courseSlug: "paediatric-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Immunization",
        front: "Recite Ghana's routine immunization ages and their vaccines.",
        back: "Birth: BCG, OPV-0, hepatitis B. 6, 10, 14 weeks: OPV, pentavalent, PCV, rotavirus (IPV at 14 weeks). 9 months: MR, yellow fever, MenA. 15–18 months: MR2. Confirm against the current child health record booklet.",
      },
      {
        topic: "Immunization",
        front: "What is the rule for a child who missed doses?",
        back: "Continue the series from where it stopped, with appropriate spacing — never restart from the beginning and never skip the missed doses.",
      },
      {
        topic: "Immunization",
        front: "Name the common side effects of infant vaccines and two true contraindications.",
        back: "Common: tender injection site (BCG scar), mild fever, fretfulness, poor appetite for a day. True contraindications: severe allergic reaction to a previous dose, and significant immune compromise for live vaccines.",
      },
    ],
    sources: [
      {
        organization: "Ghana Health Service",
        title: "Expanded Programme on Immunization — national schedule and child health record booklet",
        note: "Verify against the current national booklet, as schedule details are updated periodically.",
      },
      {
        organization: "World Health Organization",
        title: "Immunization coverage and vaccine safety resources",
        note: "Verify current WHO guidance and fact sheets.",
      },
      {
        organization: "World Health Organization",
        title: "Pocket Book of Hospital Care for Children (2nd edition)",
        year: "2013",
        url: "https://www.who.int/publications/i/item/9789241548373",
      },
    ],
  },

  // ── 6 ─────────────────────────────────────────────────────
  {
    courseSlug: "paediatric-nursing",
    moduleTitle: "When Children Fall Ill",
    lessonTitle: "Common Childhood Conditions",
    description:
      "Malaria, measles, anaemia and sickle cell disease — the everyday illnesses of Ghanaian children, and the IMCI habit of asking, looking, treating and teaching that keeps them survivable.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the presentation and management of malaria and measles in children.",
      "Explain sickle cell disease crises and why fever in these children is an emergency.",
      "Apply the IMCI sequence — assess, classify, treat, counsel — to everyday presentations.",
    ],
    tags: ["childhood illness", "malaria", "measles", "sickle cell", "imci", "anaemia"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "In a Ghanaian clinic, four names appear on the register daily: malaria, measles in season, anaemia and sickle cell disease. IMCI — Integrated Management of Childhood Illness — keeps them orderly: ask the danger signs, look and count, classify, treat, then teach the mother before she leaves.\n\nThis lesson tours the big four: recognising each, treating correctly, and knowing which version needs the ambulance rather than the pharmacy shelf.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Malaria**: test every fever (RDT) and treat positives with weight-based artemether-lumefantrine **with food or milk** — fat doubles absorption — completed over three days. Danger signs, convulsion, coma, severe pallor or inability to drink mean severe malaria: first-dose injectable artesunate and urgent referral — a within-hours disease. **Measles**: fever with cough, runny nose and red eyes, Koplik spots inside the cheeks, then a rash spreading down from behind the ears. Complications — pneumonia, diarrhoea, ear and eye damage — kill: give **vitamin A**, feed well and refer the complicated. The MR vaccine is the prevention.\n\n**Anaemia** in Ghanaian children is usually malaria plus diet plus worms: check pallor of palms and conjunctiva, confirm with haemoglobin, treat causes and feed the fix. **Sickle cell disease** touches thousands of families: painful crises (in infants, the swollen hand-foot dactylitis), with two standing rules — fever in a sickler is an emergency, and daily folic acid plus relentless malaria prevention keep crises away. Teach families the warning words: fever, chest pain, breathing trouble, swollen painful part, sudden pallor.",
      },
      {
        type: "clinical_pearl",
        body: "Artemether-lumefantrine swallowed on an empty stomach is a dose half-taken — fat is needed for absorption. Every AL prescription travels with the instruction: give with milk or food, and finish all three days even when the fever leaves.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A three-year-old reaches your OPD with two days of fever and one vomit this morning. She is alert, drinks eagerly, has no convulsions, no pallor and a normal chest. RDT positive; temperature 38.4°C; weight 13 kg.\n\nHow do you classify and manage this child?\n\nAnswer: This is uncomplicated malaria — alert, drinking, no danger signs, positive test. Treat with weight-based artemether-lumefantrine for three days, with milk or food, plus paracetamol and fluids. The teaching completes the prescription: finish all doses even as she improves, and return immediately for convulsion, refusing to drink, worsening vomiting, new pallor or fast breathing. Remind the family about treated bed nets.",
      },
      {
        type: "memory_trick",
        body: "The fever frame: \"**Test, Treat, Teach**\" — RDT first, full treatment with food, danger-sign counselling at the door. Measles in one line: \"**Cough, Coryza, Conjunctivitis — Koplik — then the rash from the ears down.**\" Sickle cell standing orders: \"Fever is not a symptom in a sickler — it is an emergency.\"",
      },
      {
        type: "summary",
        body: "- IMCI at every sick child: ask danger signs, look and count, classify, treat, teach the mother before discharge.\n- Malaria: test every fever; uncomplicated cases get weight-based AL for three days WITH food or milk; danger signs mean severe malaria — first-dose injectable artesunate and urgent referral.\n- Measles: cough, coryza, conjunctivitis, Koplik spots, rash from the ears downward; give vitamin A and hunt complications (pneumonia, diarrhoea, eye damage).\n- Anaemia: think malaria, diet and worms together — treat causes and feed the cure.\n- Sickle cell disease: dactylitis in infants, painful crises later; fever = emergency; daily folic acid and malaria prevention stand permanently.",
      },
    ],
    questions: [
      {
        topic: "Common Childhood Conditions",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why must artemether-lumefantrine be given with milk or food?",
        options: [
          "To prevent vomiting in all children",
          "Because fat in the meal greatly improves absorption of the drug",
          "To mask the taste only",
          "Because food prevents sleepiness",
        ],
        correctIndex: 1,
        explanation:
          "Artemether-lumefantrine is poorly absorbed on an empty stomach; dietary fat roughly doubles uptake. Giving it with milk or food is part of the prescription, not a comfort measure.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Common Childhood Conditions",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which feature in a febrile child turns malaria from uncomplicated to severe, requiring first-dose injectable artesunate and urgent referral?",
        options: [
          "Fever for two days with a positive RDT in a drinking, alert child",
          "A convulsion or inability to drink",
          "A temperature of 38.5°C in a playful child",
          "Mild pallor with normal activity",
        ],
        correctIndex: 1,
        explanation:
          "Danger signs — convulsion, coma, inability to drink or breastfeed, severe pallor, repeated vomiting — define severe malaria, treated with pre-referral injectable artesunate and urgent transfer. Alert, drinking children with fever and a positive test are treated orally at outpatient level.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Common Childhood Conditions",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother of a child with sickle cell disease calls the clinic: her son has a temperature of 38.6°C and mild body pains. What is the correct response?",
        options: [
          "Advise paracetamol at home and clinic review if not better in three days",
          "Treat it as an emergency — the child needs urgent assessment and treatment because fever can signal overwhelming infection in sickle cell disease",
          "Reassure that fever is normal in sicklers",
          "Advise increasing folic acid at home",
        ],
        correctIndex: 1,
        explanation:
          "Children with sickle cell disease have impaired defences against encapsulated bacteria, so fever can be the first sign of overwhelming sepsis or a chest crisis. Fever in a sickler is a same-hour emergency — assess, investigate, start treatment; home observation with paracetamol is how these children die.",
        courseSlug: "paediatric-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Common Childhood Conditions",
        front: "Give the three-step fever frame for malaria management.",
        back: "Test (RDT or blood film on every fever), Treat (weight-based AL for three days, with food or milk, completed fully), Teach (danger signs requiring immediate return: convulsion, refusing drinks, vomiting everything, worsening breathing or pallor).",
      },
      {
        topic: "Common Childhood Conditions",
        front: "Describe the clinical picture of measles.",
        back: "Fever with cough, coryza and conjunctivitis, Koplik spots on the buccal mucosa, then a maculopapular rash beginning behind the ears and spreading downward. Treat with vitamin A and refer complications.",
      },
      {
        topic: "Common Childhood Conditions",
        front: "Why is fever an emergency in a child with sickle cell disease?",
        back: "Impaired splenic function and immunity allow fast, overwhelming bacterial infection — a fever of 38.5°C or more needs urgent assessment and treatment, never home watch-and-wait.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Guidelines for the treatment of malaria (current edition)",
        note: "Verify the latest WHO edition and the Ghana-adapted treatment policy used in your facility.",
      },
      {
        organization: "World Health Organization / UNICEF",
        title: "Integrated Management of Childhood Illness (IMCI) chart booklet",
        note: "Verify the current national adaptation.",
      },
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        note: "Verify the current edition for national dosing and referral criteria.",
      },
    ],
  },

  // ── 7 ─────────────────────────────────────────────────────
  {
    courseSlug: "paediatric-nursing",
    moduleTitle: "When Children Fall Ill",
    lessonTitle: "Dehydration in Children: Assess and Act",
    description:
      "A child can lose a whole water bottle through a day of diarrhoea — the pinch of skin, the sunken eyes and the offer of a drink tell you how much, and the plan letter tells you what to do.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the WHO classification of dehydration: none, some and severe.",
      "Explain Treatment Plans A, B and C and what each contains.",
      "Apply the assessment signs to choose the correct plan without delay.",
    ],
    tags: ["dehydration", "fluids", "ors", "diarrhoea", "who plans"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Diarrhoea is ordinary; dehydration is what kills. A small child's body is mostly water, and loose stools drain it fast. The WHO system turns the emergency into three questions answered with eyes and hands alone: how does the child behave, are the eyes sunken, and what happens to a pinched fold of skin?\n\nThe answers sort every child into **no, some or severe dehydration** — and each class carries a plan letter: A for home, B for the rehydration bench, C for the vein. Choose the letter fast, and you save more children than with any other skill.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**No dehydration**: well and drinking normally, eyes normal, pinch returns instantly — Plan A: ORS after each loose stool at home, continued feeding and breastfeeding, zinc, and clear return advice. **Some dehydration**: restless, drinks eagerly, sunken eyes, pinch returns slowly — Plan B: ORS **75 ml/kg over four hours** at the facility, reassess, then resume feeding with the mother taught to mix and give ORS. **Severe dehydration**: lethargic, **unable to drink**, eyes very sunken, pinch very slow — Plan C: IV Ringer's lactate **100 ml/kg** (30 ml/kg fast, the rest over hours by age), switching to ORS as soon as the child can drink; if IV access is impossible, refer urgently.\n\nTwo habits finish the system: **zinc for 10–14 days** shortens the illness and prevents the next one, and **feeding continues** — food is part of the treatment. For severely malnourished children use ReSoMal instead of standard ORS. And never send a dehydrated child home with anti-diarrhoeal medicine and false comfort.",
      },
      {
        type: "clinical_pearl",
        body: "The offer of a drink is a diagnostic test: eager drinking means some dehydration; inability to drink means severe — an IV line, not a queue ticket.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "An eighteen-month-old is carried in after two days of loose stools. She is drowsy and floppy, does not cry when handled, and when you offer ORS by cup she does not swallow. Her eyes are deeply sunken; the skin pinch over the abdomen stays tented for more than two seconds.\n\nWhich dehydration class is this, and what is your immediate management?\n\nAnswer: Lethargy with inability to drink and a very slow pinch is severe dehydration — Plan C. Start IV Ringer's lactate 100 ml/kg (30 ml/kg over the first half hour in a child over 12 months, the remaining 70 ml/kg over the next two and a half hours), reassess hourly, and switch to oral ORS the moment she can drink. Continue breastfeeding when she wakes, start zinc, look for the cause — cholera if stools are rice-water — and teach the mother Plan A before discharge.",
      },
      {
        type: "memory_trick",
        body: "Grading signs: \"**Pinch, Eyes, Drink**\" — normal pinch and eyes with a drinking child = none; slow pinch, sunken eyes, drinking eagerly = some; very slow pinch, very sunken eyes, cannot drink = severe. Then the plan letters: \"**A at home, B on the bench, C in the vein.**\"",
      },
      {
        type: "summary",
        body: "- Dehydration grades: none (well, drinking, normal pinch) / some (restless, drinks eagerly, sunken eyes, slow pinch) / severe (lethargic, cannot drink, very sunken eyes, very slow pinch).\n- Plan A: home ORS after each stool, continued feeding and breastfeeding, zinc 10–14 days, return advice.\n- Plan B: 75 ml/kg ORS over four hours at the facility with reassessment, then feeding resumes.\n- Plan C: IV Ringer's lactate 100 ml/kg for severe dehydration — reassess and step down to ORS as soon as the child can drink.\n- Zinc shortens this illness and the next; feeding is treatment, not a pause; ReSoMal replaces ORS in severe malnutrition.",
      },
    ],
    questions: [
      {
        topic: "Dehydration in Children",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A child with diarrhoea is restless, drinks eagerly when offered ORS, has sunken eyes and a skin pinch that returns slowly. Which classification and plan fit?",
        options: [
          "No dehydration — Plan A, home care",
          "Some dehydration — Plan B, ORS 75 ml/kg over four hours at the facility",
          "Severe dehydration — Plan C, IV fluids",
          "Cholera until proven otherwise — antibiotics first",
        ],
        correctIndex: 1,
        explanation:
          "Restlessness, eager drinking, sunken eyes and a slowly returning pinch define some dehydration, treated with Plan B — 75 ml/kg of ORS over about four hours with reassessment, then continued feeding and Plan A advice.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Dehydration in Children",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which single finding upgrades a child with diarrhoea to severe dehydration?",
        options: [
          "Drinking eagerly but fretfully",
          "Being lethargic or unable to drink",
          "Passing four loose stools in a day",
          "Sunken eyes with a normal pinch and good drinking",
        ],
        correctIndex: 1,
        explanation:
          "Lethargy, unconsciousness or inability to drink marks severe dehydration — the class that needs IV Ringer's lactate (Plan C) immediately. Eager drinking, sunken eyes with good drinking, or stool counts alone do not.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Dehydration in Children",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Besides rehydration, which additional treatment shortens the current diarrhoeal episode and reduces recurrence?",
        options: [
          "A course of routine antibiotics for all diarrhoea",
          "Zinc supplementation for 10–14 days",
          "Anti-diarrhoeal syrup",
          "Stopping all feeds for 24 hours",
        ],
        correctIndex: 1,
        explanation:
          "Zinc for 10–14 days reduces the duration of the episode and the risk of the next one, and continues alongside feeding. Routine antibiotics, anti-diarrhoeal drugs and fasting are not part of WHO management and some cause harm.",
        courseSlug: "paediatric-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Dehydration in Children",
        front: "Name the three WHO dehydration classes with one signature sign each.",
        back: "None: well and drinking, normal pinch. Some: restless, drinks eagerly, slow pinch. Severe: lethargic, cannot drink, very slow pinch with very sunken eyes.",
      },
      {
        topic: "Dehydration in Children",
        front: "What fluids and volumes define Plans B and C?",
        back: "Plan B: ORS 75 ml/kg over about four hours at the facility. Plan C: IV Ringer's lactate 100 ml/kg — 30 ml/kg rapidly, the rest over the following hours by age — reassessing to step down to ORS when the child can drink.",
      },
      {
        topic: "Dehydration in Children",
        front: "What extra prescription accompanies every diarrhoea treatment plan, and why?",
        back: "Zinc for 10–14 days — it shortens the current episode and lowers the risk of recurrence; feeding and breastfeeding also continue throughout.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "The treatment of diarrhoea: a manual for physicians and senior health workers",
        note: "Classic WHO diarrhoea manual with Plans A–C. Verify the current edition.",
      },
      {
        organization: "World Health Organization / UNICEF",
        title: "Integrated Management of Childhood Illness (IMCI) chart booklet",
        note: "Verify the current national adaptation used in Ghana.",
      },
      {
        organization: "World Health Organization",
        title: "Pocket Book of Hospital Care for Children (2nd edition)",
        year: "2013",
        url: "https://www.who.int/publications/i/item/9789241548373",
      },
    ],
  },

  // ── 8 ─────────────────────────────────────────────────────
  {
    courseSlug: "paediatric-nursing",
    moduleTitle: "When Children Fall Ill",
    lessonTitle: "Fever in Children",
    description:
      "The frightened parent's first words at triage — and the calm sequence behind them: undress, fluids, dose, test, and the signs that mean the hospital, today.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Define fever in children and list its common Ghanaian causes.",
      "Explain the assessment that separates a safe fever from a dangerous one.",
      "Apply correct antipyretic dosing and first aid for febrile convulsions.",
    ],
    tags: ["fever", "assessment", "malaria", "febrile convulsion", "paracetamol"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "\"Doctor, my child is hot!\" — six words you will hear before the family sits down. Fever — an axillary temperature of **37.5°C or more** — is a symptom, not a disease, and in Ghana it wears many costumes: malaria first, then chest and throat infections, urinary infection, typhoid, measles in season. The fever itself is rarely the danger; what it travels with is.\n\nSo this lesson is a sorting exercise: finding the dangerous fevers, cooling safely, and handling the moment every feverish family dreads — the convulsion.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Assess with the IMCI questions: how long, any convulsion, drinking, vomiting everything, unusually sleepy? Then look: stiff neck, bulging fontanelle, petechial rash, severe pallor, fast breathing, a child who cannot be woken. Any of these, **or any fever under three months of age**, means treat and refer urgently. Test every febrile child for malaria and treat positives; hunt other causes when negative.\n\nSafe care: undress to a single layer, offer fluids often, give **paracetamol 15 mg per kg** every six hours (max four doses daily) from today's measured weight, and treat the cause. No cold baths, alcohol rubs or guessed doses — harm without benefit. A **febrile convulsion** (six months to five years) is frightening but usually brief: lay the child on the side, protect from injury, put **nothing in the mouth**, time it, then assess fully — malaria and meningitis must be ruled out before anyone calls it \"just a fit\". A fit beyond five minutes, a repeat, or drowsiness that will not lift needs urgent hospital care.",
      },
      {
        type: "clinical_pearl",
        body: "A feverish baby under three months is a referral, whatever the malaria test says — that immune system cannot yet argue with bacteria. The threshold is the age, not the temperature.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A two-year-old convulsed at home for about a minute during yesterday's fever. He is now awake and irritable, temperature 38.9°C, drinking from his mother's hand. RDT negative; no stiff neck, fontanelle closed. The mother is terrified of another fit.\n\nWhat is this event, and what are your next steps?\n\nAnswer: A brief convulsion with fever in a two-year-old fits a febrile convulsion — but only after malaria and meningitis are excluded. With a negative RDT, an awake drinking child and an unremarkable examination, treat the fever: undress him, keep fluids coming, paracetamol 15 mg/kg, and hunt the source (throat, ears, urine, chest). Teach the mother the first aid — side-lying, nothing in the mouth, protect the head, time the fit — and the return rules: a fit beyond five minutes, a repeat, or a child who cannot be woken means hospital now.",
      },
      {
        type: "memory_trick",
        body: "Fever care in four beats: \"**Strip, Sip, Dose, Diagnose**\" — undress to one layer, fluids again and again, paracetamol 15 mg per kilo, then find and treat the cause. Convulsion first aid: \"**Side, Safe, Stop-watch, and nothing in the mouth.**\"",
      },
      {
        type: "summary",
        body: "- Fever = axillary 37.5°C or above; a symptom to investigate, not a disease to suppress.\n- Dangerous companions: convulsion, stiff neck, bulging fontanelle, petechiae, not drinking, unrousable — and ANY fever under three months of age: treat and refer.\n- Safe care: undress, fluids, paracetamol 15 mg/kg every 6 hours from measured weight; test and treat malaria; no cold baths or alcohol rubs.\n- Febrile convulsion: side-lying, protect from injury, nothing in the mouth, time it; afterwards exclude malaria and meningitis before calling it simple.\n- Return immediately if: fit lasting over five minutes, repeated fits, no waking, or refusal of all fluids.",
      },
    ],
    questions: [
      {
        topic: "Fever in Children",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the correct paracetamol dose and frequency for a feverish child?",
        options: [
          "15 mg per kg per dose, up to every six hours with a maximum of four doses a day",
          "A quarter of an adult tablet at any age",
          "500 mg for every child over one year",
          "As much as needed until the fever goes",
        ],
        correctIndex: 0,
        explanation:
          "Paracetamol is dosed by weight, not by age or tablet fractions: 15 mg/kg per dose, given every six hours, with a maximum of four doses in 24 hours. Today's measured weight is part of the prescription.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Fever in Children",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A three-week-old baby has an axillary temperature of 38°C. What is the correct management?",
        options: [
          "Home paracetamol and review in two days if fever continues",
          "Urgent referral — any fever in an infant under three months needs hospital assessment and treatment",
          "Treat as malaria if the RDT is positive, home care if negative",
          "Tepid sponging with cold water at home",
        ],
        correctIndex: 1,
        explanation:
          "Infants under three months cannot localise infection and can deteriorate within hours, so fever at this age is always an urgent referral for full assessment and treatment — regardless of the malaria test result.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Fever in Children",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A child is having a febrile convulsion in your consulting room. Which action is correct?",
        options: [
          "Force a spoon between the teeth to protect the tongue",
          "Lay the child on the side, protect from injury, put nothing in the mouth and time the convulsion",
          "Pour cold water over the child immediately",
          "Hold the child upright and shake gently to rouse them",
        ],
        correctIndex: 1,
        explanation:
          "Correct first aid is side-lying to protect the airway, removing hazards, nothing forced into the mouth (it breaks teeth and blocks breathing), and timing the fit. After it ends, assess fully — in Ghana, exclude malaria and meningitis before labelling it a simple febrile convulsion.",
        courseSlug: "paediatric-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Fever in Children",
        front: "Define fever in a child and state the paracetamol dose.",
        back: "Fever = axillary temperature 37.5°C or higher. Paracetamol 15 mg/kg per dose, every 6 hours, maximum four doses in 24 hours, calculated from a measured weight.",
      },
      {
        topic: "Fever in Children",
        front: "Which children with fever must be referred urgently regardless of test results?",
        back: "Any infant under three months with fever; and any child with convulsion, stiff neck, bulging fontanelle, petechial rash, refusal of fluids, or unrousable drowsiness.",
      },
      {
        topic: "Fever in Children",
        front: "Give the four steps of febrile convulsion first aid.",
        back: "Lay the child on the side, protect from injury, put nothing in the mouth, and time the seizure — then, once it has ended, assess fully and exclude malaria and meningitis.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization / UNICEF",
        title: "Integrated Management of Childhood Illness (IMCI) chart booklet",
        note: "Verify the current national adaptation used in Ghana.",
      },
      {
        organization: "World Health Organization",
        title: "Pocket Book of Hospital Care for Children (2nd edition)",
        year: "2013",
        url: "https://www.who.int/publications/i/item/9789241548373",
      },
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        note: "Verify the current edition for national antipyretic and referral guidance.",
      },
    ],
  },

  // ── 9 ─────────────────────────────────────────────────────
  {
    courseSlug: "paediatric-nursing",
    moduleTitle: "When Children Fall Ill",
    lessonTitle: "Respiratory Disease in Children",
    description:
      "A child's airways are narrow and their breathing tells the truth — learn the age-band breath counts, the warning shapes of the chest, and the conditions behind the cough.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the WHO fast-breathing thresholds by age and their use in classifying pneumonia.",
      "Explain severe respiratory signs requiring referral and oxygen.",
      "Apply management principles for pneumonia, croup and bronchiolitis.",
    ],
    tags: ["pneumonia", "respiratory", "fast breathing", "croup", "bronchiolitis"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Children breathe faster than adults, and what counts as fast depends on age. WHO turns this into three numbers you will carry forever — **60, 50, 40**: under two months, 60 or more breaths per minute is fast; two to twelve months, 50 or more; one to five years, 40 or more. Count a full minute in a calm child, and the number plus the chest's shape sorts most coughs into treatable categories.\n\nBecause a child's airways are narrow and soft, infections an adult shrugs into a cough become, in a child, a struggle for air — read the struggle early.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Pneumonia** is cough or difficult breathing plus fast breathing for age; add **lower chest wall in-drawing** or other danger signs (grunting, flaring, cyanosis, inability to drink, convulsions, lethargy) and it is severe — first-dose antibiotics, oxygen if saturation is low, and urgent referral. Non-severe pneumonia gets weight-based **oral amoxicillin** with follow-up in two days and danger-sign teaching. Cough beyond two weeks asks for TB screening.\n\n**Croup** (viral, parainfluenza) strikes six months to three years with a barking seal-like cough, hoarse voice and inspiratory stridor, worse at night: keep the child calm — crying deepens the obstruction — give corticosteroids per protocol, avoid steam inhalation (scalds, no benefit), and refer stridor at rest. **Bronchiolitis** is the first wheeze in an under-two with coryza: supportive care — small frequent feeds, gentle nose clearing, oxygen if needed — antibiotics adding nothing. And charcoal and cooking smoke worsen all of these: smoke-free counselling is respiratory medicine.",
      },
      {
        type: "clinical_pearl",
        body: "In-drawing is a shape, not a sound: watch the lower chest wall sink inward in a bare-chested child. With cough, that look reclassifies pneumonia as severe in one glance.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A fourteen-month-old is brought with three days of cough and mild fever. He is alert, drinking from his cup, and you count 54 breaths per minute while he rests on his mother's lap. No chest in-drawing, no grunting, saturation normal, chest clear of wheeze.\n\nHow do you classify this illness, and what is the plan?\n\nAnswer: For a 14-month-old the threshold is 40, so 54 breaths per minute with cough is fast breathing — pneumonia without severe signs. Plan: weight-based oral amoxicillin, teach the danger signs (in-drawing, inability to drink, worsening breathing, fever that will not settle), review in two days, and counsel on smoke-free air. Any danger sign turns this into severe pneumonia — first-dose treatment and referral.",
      },
      {
        type: "memory_trick",
        body: "The breath bands: \"**Sixty before two months, Fifty to a year, Forty to five years**\" — count a full minute in a calm child first. For the cough dictionary: \"**Pneumonia = fast breathing; Croup = seal cough at night; Bronchiolitis = first wheeze under two.**\"",
      },
      {
        type: "summary",
        body: "- Fast-breathing thresholds (WHO): ≥60/min under 2 months; ≥50/min at 2–12 months; ≥40/min at 1–5 years — always counted for a full minute in a calm child.\n- Cough plus fast breathing = pneumonia; add lower chest in-drawing, grunting, cyanosis, or drinking refusal = severe — first-dose antibiotics, oxygen if needed, urgent referral.\n- Non-severe pneumonia: weight-based oral amoxicillin, danger-sign teaching, review in two days; cough over two weeks needs TB screening.\n- Croup: barking cough, hoarseness, night stridor — keep calm, steroids per protocol, no steam, refer stridor at rest.\n- Bronchiolitis: first wheeze under two — supportive feeding, nose care, oxygen if needed; antibiotics add nothing.",
      },
    ],
    questions: [
      {
        topic: "Respiratory Disease in Children",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A six-month-old with cough has a respiratory rate of 52 per minute when calm. What does this mean?",
        options: [
          "Normal breathing for a six-month-old",
          "Fast breathing — meets the pneumonia threshold of 50 for a child aged 2–12 months",
          "Only worrying if it reaches 60",
          "Fast breathing, but the threshold for this age is 40",
        ],
        correctIndex: 1,
        explanation:
          "For a child aged two to twelve months, 50 or more breaths per minute counts as fast breathing, so 52 with a cough classifies as pneumonia. The 40 threshold applies to 1–5 years and 60 to infants under two months.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Respiratory Disease in Children",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which sign, added to cough and fast breathing, reclassifies pneumonia as severe and requires referral?",
        options: [
          "A runny nose",
          "Lower chest wall in-drawing",
          "A temperature of 37.8°C",
          "Coughing at night only",
        ],
        correctIndex: 1,
        explanation:
          "Lower chest wall in-drawing shows the small airways are working hard enough to collapse the soft chest wall — a severe sign. With grunting, cyanosis, refusal to drink or lethargy, it demands first-dose antibiotics, oxygen when indicated, and urgent referral.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Respiratory Disease in Children",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A two-year-old wakes at night with a barking cough, a hoarse voice and noisy inspiration but is drinking and not cyanosed. What is the best immediate management?",
        options: [
          "Steam inhalation over a bowl of hot water",
          "Keep the child calm, give corticosteroids per protocol, and refer if stridor persists at rest",
          "Start oral amoxicillin immediately",
          "Encourage running around to clear the airway",
        ],
        correctIndex: 1,
        explanation:
          "This is classic viral croup. Calm (crying worsens obstruction) plus corticosteroids per protocol is the evidence-based response; steam risks scalds without benefit, antibiotics treat nothing viral, and exertion deepens the struggle. Stridor at rest or distress needs referral.",
        courseSlug: "paediatric-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Respiratory Disease in Children",
        front: "Quote the WHO fast-breathing thresholds by age.",
        back: "Under 2 months: 60 breaths/min or more; 2–12 months: 50 or more; 1–5 years: 40 or more. Count for one full minute in a calm child before classifying.",
      },
      {
        topic: "Respiratory Disease in Children",
        front: "Which physical signs make pneumonia 'severe'?",
        back: "Lower chest wall in-drawing, grunting, nasal flaring, central cyanosis, inability to drink, convulsions or lethargy — give first-dose antibiotics, oxygen if indicated, and refer urgently.",
      },
      {
        topic: "Respiratory Disease in Children",
        front: "How do you recognise croup and what is its cornerstone of care?",
        back: "Barking seal-like cough, hoarse voice, inspiratory stridor, worse at night, aged 6 months–3 years. Keep the child calm, give corticosteroids per protocol, avoid steam, and refer stridor at rest.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Pocket Book of Hospital Care for Children (2nd edition)",
        year: "2013",
        url: "https://www.who.int/publications/i/item/9789241548373",
      },
      {
        organization: "World Health Organization / UNICEF",
        title: "Integrated Management of Childhood Illness (IMCI) chart booklet",
        note: "Verify the current national adaptation used in Ghana.",
      },
      {
        organization: "Elsevier",
        title: "Nelson Textbook of Pediatrics",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "paediatric-nursing",
    moduleTitle: "Keeping Children Safe",
    lessonTitle: "Child Protection: Recognising Abuse and Neglect",
    description:
      "Some stories do not match the injuries that walk in with them. Learn to recognise abuse and neglect, document what you truly see, and act within Ghana's child protection system.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the four types of child abuse and their recognition patterns.",
      "Explain the documentation and reporting duties of a health worker who suspects abuse.",
      "Apply a safeguarding response that protects the child while following national law and policy.",
    ],
    tags: ["safeguarding", "abuse", "neglect", "child protection", "documentation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Children cannot book appointments to report their own harm. They arrive with burns \"from spilling water\", bruises a toddler cannot reach, or a silence louder than the caregiver's story. Abuse takes four forms — **physical, sexual, emotional and neglect** — and Ghana's Children's Act 1998 (Act 560) places a duty on health workers to notice and act.\n\nThis is sensitive work, and the families may be your neighbours. The lesson is not about accusation — it is about pattern recognition, honest documentation, and knowing what to do next.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Injuries speak: a **non-mobile baby** should not bruise anywhere (\"those who don't cruise rarely bruise\"); patterned marks mirror the object (belt lines, stick streaks, cigarette shapes); burns with **glove-and-stocking** symmetry and clean waterlines speak of immersion, not spilling; torn frenulum, fractures or injuries at different healing stages tell a different story than the one given. **Neglect** shows chronically: a dirty child with untreated sores, missed immunisations, weight falling off the chart without organic cause. **Sexual abuse** may present with genital injury, an STI or pregnancy in a young adolescent, sexualised behaviour, or a disclosure — the most serious evidence. **Emotional** abuse shows in behaviour: flinching, frozen watchfulness, aggression, regression.\n\nYour duty when suspicion rises: treat the injuries, **document verbatim** — the child's words in quotation marks, diagrams with measurements, times — ask open questions only (\"tell me what happened\"), never leading ones, never promise secrecy. Then report to the Department of Social Welfare, the police DOVVSU unit or your facility's child protection focal person, with a safety plan before discharge — a child should not go home unprotected while the report waits. Stay non-accusatory with the caregiver; your job is evidence and safety, not confrontation.",
      },
      {
        type: "clinical_pearl",
        body: "When the story and the injury disagree, believe the injury — a symmetrical burn with a clean border does not come from a spilt cup.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A three-year-old is brought to the emergency room with burns to both feet and ankles. The mother says he pulled a bowl of hot water onto himself \"this morning, around six\" — but the burn is symmetrical like a pair of socks, with a sharp line at the ankles, and she waited until afternoon to come. The child is withdrawn, meeting no one's eyes.\n\nWhat features trouble you, and what are your next actions?\n\nAnswer: Spilled water scalds splash asymmetrically down one side; a stocking-pattern burn with a clean waterline on both feet speaks of immersion, and the hours of delay deepen the concern. Treat the burn fully, document with diagrams and measured descriptions, record the mother's account in her own words with times, ask open non-leading questions, and report to Social Welfare and DOVVSU — with a safety plan agreed before discharge. Confronting the mother yourself is not your role; safeguarding is.",
      },
      {
        type: "memory_trick",
        body: "The four doubts of harm: \"**Doesn't match** (story vs injury), **Development** (can this child reach that?), **Different** (does the story stay the same?), **Delay** (why did help come so late?).\" Any two doubts and your duty begins: **Treat, Record verbatim, Report.**",
      },
      {
        type: "summary",
        body: "- Four abuse types — physical, sexual, emotional, neglect — and Ghana's Children's Act 1998 (Act 560) places a duty to act on every health worker.\n- Injury patterns: bruises in non-walking babies, patterned marks, glove-and-stocking burns, injuries at different healing stages, torn frenulum.\n- Neglect: chronic dirtiness, untreated illness, failing weight; sexual abuse: genital injury, STI, pregnancy in a young adolescent, disclosure.\n- Documentation is evidence: exact words in quotes, diagrams and measurements, times, open questions, no promises of secrecy.\n- Report to Social Welfare, DOVVSU or your child protection focal person, with a safety plan before discharge; stay non-accusatory.",
      },
    ],
    questions: [
      {
        topic: "Child Protection",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A four-month-old baby who cannot yet roll is found to have bruises on the back and thighs. How should you interpret this?",
        options: [
          "Normal bruising from everyday baby care",
          "Highly suspicious for physical abuse — babies who cannot move themselves should not bruise",
          "A sign of vitamin deficiency only",
          "Safe as long as the mother explains it",
        ],
        correctIndex: 1,
        explanation:
          "\"Those who don't cruise rarely bruise\" — a non-mobile infant with bruises cannot have made them accidentally, so non-accidental injury must be assumed until excluded: examine fully, document, and follow child protection procedures.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Child Protection",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You suspect a child's burn is non-accidental. Which set of actions matches your duty as a health worker?",
        options: [
          "Confront the caregiver directly and demand the true story",
          "Treat the injury, document findings and quotes exactly, and report to social welfare or the police DOVVSU unit with a safety plan before discharge",
          "Note your private suspicion in the chart and leave the family to resolve it",
          "Discharge quickly to avoid embarrassing the family",
        ],
        correctIndex: 1,
        explanation:
          "Your duty is treatment, verbatim documentation, open non-leading questions, formal report through child protection channels, and a safety plan before discharge. Private notes, confrontation and quick discharge all leave the child unprotected.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Child Protection",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which burn pattern most strongly suggests an inflicted (immersion) injury rather than an accidental spill?",
        options: [
          "Irregular splash marks down one side of the chest",
          "Symmetrical glove-or-stocking distribution with a sharp, clean border",
          "A single small blister on one fingertip",
          "Diffuse redness across the face",
        ],
        correctIndex: 1,
        explanation:
          "Accidental spills splash and trickle, producing irregular, one-sided patterns. Forced immersion produces symmetrical stocking or glove burns with crisp waterlines — the shape of the container, not the splash. A history inconsistent with that pattern deepens the suspicion.",
        courseSlug: "paediatric-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Child Protection",
        front: "Name the four types of child abuse and the Ghanaian law that frames your duty.",
        back: "Physical, sexual, emotional abuse and neglect — with duty framed by the Children's Act 1998 (Act 560) and reporting through the Department of Social Welfare and the police DOVVSU unit.",
      },
      {
        topic: "Child Protection",
        front: "What documentation rules protect both the child and you in a suspected abuse case?",
        back: "Record the child's words verbatim in quotation marks, describe and diagram injuries with measurements and times, note the stated history and who gave it, ask only open questions, and never promise secrecy.",
      },
      {
        topic: "Child Protection",
        front: "State the four recognition doubts (the four D's) that should trigger safeguarding.",
        back: "Doesn't match (injury vs story), Development (the child is too young for the explanation), Different (the story changes), and Delay (presentation came unreasonably late).",
      },
    ],
    sources: [
      {
        organization: "Republic of Ghana",
        title: "Children's Act, 1998 (Act 560)",
        note: "Primary national legislation on child rights and protection — verify the current consolidated version.",
      },
      {
        organization: "World Health Organization",
        title: "Responding to children and adolescents who have been sexually abused: WHO clinical guidelines",
        year: "2017",
        note: "Verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "Child maltreatment — fact sheet and prevention resources",
        note: "Verify the latest WHO update.",
      },
    ],
  },
  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "community-health-nursing-2",
    moduleTitle: "The Community as Patient",
    lessonTitle: "Epidemiology in the Community",
    description:
      "The nurse who counts well can see an epidemic before it arrives — incidence, prevalence and the surveillance duty that turns numbers into action.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe the purposes and basic measures of epidemiology — incidence, prevalence, mortality and case fatality.",
      "Explain how disease is described by time, place and person, and the difference between endemic, epidemic and pandemic disease.",
      "Apply the community nurse's surveillance and reporting duties under Ghana's Integrated Disease Surveillance and Response system.",
    ],
    tags: ["epidemiology", "surveillance", "community health", "notifiable diseases"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "In the hospital you ask one patient where it hurts. In the community you ask a different question: where does it hurt, how many, and since when? **Epidemiology** is the study of the distribution and determinants of health and disease in populations — and it is the working language of the community health nurse.\n\nWhen your facility is the eyes of the district, your counting is not paperwork. A line list, a tally and a weekly report are how an outbreak gets caught in its first week instead of its second month. This lesson gives you the measures, the patterns and the reporting discipline that turn a nurse into a surveillance system.",
      },
      {
        type: "text",
        title: "The core measures",
        body: "**Incidence** counts new cases arising in a population over a period — how fast the tap is running. **Prevalence** counts all existing cases at a point in time — how deep the pool has grown. A chronic disease like sickle cell has high prevalence and low incidence; a cholera outbreak has exploding incidence. **Mortality rate** counts deaths in a population, usually per 1000 or per 100,000 per year; **case fatality rate** counts the percentage of people with a disease who die of it — the number that tells you how severe an outbreak is, and whether your treatment is working.\n\nDescribe every problem by **time, place and person**. Time: is it rising, seasonal (malaria rises with the rains), or clustered in one week? Place: one village, one school, one water source — map the cases with simple dots. Person: age, sex, occupation — measles in unimmunised under-fives; schistosomiasis in schoolchildren who fetch water. Then name the pattern: **endemic** (malaria in most of Ghana — constantly present), **epidemic** (cholera cases above what is expected), **outbreak** (two or more linked cases in one place and time), **pandemic** (spread across countries, like COVID-19). Behind the pattern sits the agent-host-environment triad — the germ, the person and the world they share — and the risk factors that tip the balance.",
      },
      {
        type: "text",
        title: "Surveillance: the nurse's reporting duty",
        body: "Ghana runs the **Integrated Disease Surveillance and Response (IDSR)** system: every health facility — including your CHPS compound — reports priority diseases on a schedule, whether or not there are cases. Immediately notifiable diseases include suspected cholera, measles, bacterial meningitis, yellow fever, acute flaccid paralysis (the polio signal), viral haemorrhagic fevers and any unusual cluster. Some of these need a single suspected case to trigger a report and an investigation — one child with sudden limb weakness is a polio signal until excluded, and one suspected measles case is an outbreak warning in an under-immunised community.\n\nThe discipline is threefold: use the **standard case definitions** (so your suspected cholera means the same thing in Accra as in Bole), keep a **line list** of cases with age, sex, village, date of onset and outcome, and send your **weekly report even when it is zero**. Zero reporting is reporting — a blank form says no cases, not no work. When the district stops hearing from a facility, the silence itself is investigated. Then use the feedback: thresholds tell you when to act, and the reports you receive tell you what is moving in your district.",
      },
      {
        type: "clinical_pearl",
        body: "Count by time, place and person before you count anything else. Three cases of anything in one village in one week is a pattern; three cases scattered across three months is background. Your tally sheet, kept honestly, is the earliest outbreak detection tool in the country.",
      },
      {
        type: "case",
        title: "In the community",
        body: "During the dry harmattan, two children from the same basic school arrive at your CHPS compound in one week with sudden fever, severe headache and neck stiffness. The head teacher mentions that a third child from the same class died at home last week after a short fever.\n\nWhat do you do with this information?\n\nAnswer: This is a suspected cluster of bacterial meningitis in the season of highest risk, and by IDSR rules suspected meningitis is immediately notifiable — two linked cases plus a possible death in one week and place crosses every threshold. Report to the district disease control officer now by phone, complete the case report forms using standard case definitions, start a line list (age, class, village, onset dates, outcomes), and support the cases with referral per protocol. The district will lead the investigation, contact protection and possible vaccination — but the outbreak was found because a nurse counted two children and asked where they came from.",
      },
      {
        type: "quiz_prompt",
        title: "Two towns, two numbers",
        body: "Town A has 200 people currently living with malaria among 10,000 residents. Town B records 150 new malaria cases this month among its 10,000 residents. Which measure describes each town — and which one tells you the outbreak is moving fastest?\n\nAnswer: Town A's figure is prevalence — all existing cases at a moment. Town B's figure is incidence — new cases over a period. Incidence tells you how fast disease is arriving; a rising incidence is the early warning that action must start now.",
      },
      {
        type: "memory_trick",
        body: "Incidence is the Incoming tap; Prevalence is the Pool standing. Case fatality is the share who sink. And for surveillance remember the three N's: Notify immediately (single-signal diseases), Never send a blank report (zero reporting counts), Note every case on a line list.",
      },
      {
        type: "summary",
        body: "- Epidemiology studies disease distribution and determinants in populations — the community nurse's working language.\n- Incidence = new cases over time (the tap); prevalence = all existing cases (the pool); case fatality = deaths among the cases.\n- Describe every problem by time, place and person, then name the pattern: endemic, epidemic, outbreak or pandemic.\n- Ghana's IDSR system: report priority diseases with standard case definitions, keep line lists, and send weekly reports even at zero.\n- Single suspected cases of acute flaccid paralysis, measles, cholera, meningitis, yellow fever and viral haemorrhagic fevers trigger immediate notification.\n- Your honestly kept tallies are the country's earliest outbreak detection tool.",
      },
    ],
    questions: [
      {
        topic: "Epidemiology in the Community",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which measure counts all the existing cases of a disease in a population at a given point in time?",
        options: [
          "Incidence",
          "Prevalence",
          "Case fatality rate",
          "Mortality rate",
        ],
        correctIndex: 1,
        explanation:
          "Prevalence is the pool — every case present at a moment, old and new. Incidence counts only new cases over a period; case fatality describes deaths among cases; mortality counts deaths in the whole population.",
        courseSlug: "community-health-nursing-2",
      },
      {
        topic: "Epidemiology in the Community",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Cholera cases in a district rise far above the usual number for two consecutive weeks. What is the correct term, and what does it demand?",
        options: [
          "Endemic disease — no action beyond routine care",
          "An epidemic — immediate notification, line listing and outbreak investigation",
          "A pandemic — close the borders of the district",
          "Normal seasonal variation — wait for the rains to end",
        ],
        correctIndex: 1,
        explanation:
          "Cases clearly above the expected level define an epidemic: notify under IDSR, list the cases by time, place and person, and support the investigation and control measures. Endemic disease is constantly present at a usual level, and waiting lets the outbreak spread through the water sources.",
        courseSlug: "community-health-nursing-2",
      },
      {
        topic: "Epidemiology in the Community",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why does the CHPS compound submit a weekly surveillance report even in weeks with zero cases?",
        options: [
          "To justify the nurse's salary",
          "Because zero reporting is reporting — a blank submission confirms no cases, and silence from a facility is itself investigated",
          "Because the district loses funding without forms",
          "To test whether the radio call system is working",
        ],
        correctIndex: 1,
        explanation:
          "A regular zero report confirms active surveillance — the facility is watching and finding nothing. A missing report is ambiguous: no cases, or no one looking? That is why districts investigate facilities that go silent.",
        courseSlug: "community-health-nursing-2",
      },
      {
        topic: "Epidemiology in the Community",
        type: "CLINICAL_SCENARIO",
        difficulty: "Hard",
        stem: "A single child presents with sudden limb weakness and floppiness after a short fever, with no history of trauma. Under IDSR, what does this case mean to you?",
        options: [
          "A routine weakness case for the physiotherapist",
          "Acute flaccid paralysis — a polio signal that must be notified immediately as a single case",
          "A stroke — refer and record in the ward register only",
          "Malaria — treat and review in one week",
        ],
        correctIndex: 1,
        explanation:
          "Acute flaccid paralysis in a child is the polio eradication signal, and a single suspected case triggers immediate notification with stool specimen collection coordinated by the district. Waiting, treating as malaria or simple referral would break the surveillance net that keeps Ghana polio-free.",
        courseSlug: "community-health-nursing-2",
      },
    ],
    flashcards: [
      {
        topic: "Epidemiology in the Community",
        front: "Incidence versus prevalence in one line?",
        back: "Incidence = new cases over time (the running tap); prevalence = all existing cases at a moment (the standing pool).",
      },
      {
        topic: "Epidemiology in the Community",
        front: "What does case fatality rate tell you?",
        back: "The percentage of people with a disease who die of it — a measure of severity and of how well treatment and response are working.",
      },
      {
        topic: "Epidemiology in the Community",
        front: "How do you describe any community health problem?",
        back: "By time (trend, seasonality), place (village, school, water source — map it) and person (age, sex, occupation) — then name the pattern: endemic, epidemic, outbreak or pandemic.",
      },
      {
        topic: "Epidemiology in the Community",
        front: "Name three duties of the nurse under Ghana's IDSR.",
        back: "Use standard case definitions; keep a line list of priority disease cases with onset dates and outcomes; send the weekly report even when zero — and notify immediately-reportable diseases at once.",
      },
    ],
    sources: [
      {
        organization: "Ghana Health Service",
        title: "Integrated Disease Surveillance and Response (IDSR) Guidelines",
        note: "National reference — verify the current edition and priority disease list with your district.",
      },
      {
        organization: "CDC",
        title: "Principles of Epidemiology in Public Health Practice (3rd edition)",
        year: "2012",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    courseSlug: "community-health-nursing-2",
    moduleTitle: "The Community as Patient",
    lessonTitle: "Communicable Disease Control",
    description:
      "Every infectious disease travels a chain of six links — the community nurse is the one who learns where to cut it.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe the chain of infection and identify the control strategy that targets each link.",
      "Explain the national programmes that control tuberculosis, HIV, malaria and the vaccine-preventable diseases in Ghana.",
      "Apply the first nursing actions in a suspected outbreak — verify, report, treat, and start control measures.",
    ],
    tags: ["communicable disease", "chain of infection", "immunization", "outbreak response"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Communicable diseases once filled the world's wards, and in Ghana they still share the workload with the rising chronic diseases: malaria, tuberculosis, HIV, cholera, the childhood fevers. What links them all is that they travel — from a reservoir, out of a portal, along a route, into a person.\n\nThat journey is called the **chain of infection**, and its six links are the map of every control measure you will ever take. Cut any one link and the disease stops. This lesson walks the chain, then visits the national programmes and the outbreak drill that put it to work.",
      },
      {
        type: "text",
        title: "The core ideas: six links, six places to cut",
        body: "The chain runs: **infectious agent** (the germ) lives in a **reservoir** (a person, an animal, water, soil); it leaves through a **portal of exit** (cough, stool, blood, saliva); travels by a **mode of transmission** (droplet, faecal-oral, vector bite, sexual contact, sharp injury); enters a new host through a **portal of entry** (airway, mouth, broken skin); and takes hold in a **susceptible host** (unimmunised, undernourished, very young, very old, living with HIV).\n\nNow the cuts. Against the agent and reservoir: diagnose and treat cases, trace and treat contacts, control animal and water reservoirs. Against portals: cover coughs, safe blood and injection practice, condoms, safe childbirth. Against transmission — the nurse's daily battlefield: hand hygiene, safe water and sanitation, food hygiene, sterilisation of instruments, bed nets against the mosquito. Against the susceptible host: **immunisation** (Ghana's expanded programme on immunisation protects against measles, polio, tetanus, whooping cough, hepatitis B and more), nutrition, and protective medicines such as IPTp in pregnancy. Every programme you will ever run is one of these cuts wearing a different uniform.",
      },
      {
        type: "text",
        title: "The national programmes and the outbreak drill",
        body: "Ghana's **EPI** delivers routine childhood immunisation plus campaigns — national immunisation days, measles follow-up and maternal tetanus protection; the nurse's job is defaulter tracing, cold chain care and community mobilisation. **Tuberculosis control** runs on finding cases (screening chronic cough over two weeks, sputum testing), supporting treatment to completion, and infection precautions at home — the nurse is often the treatment supporter's trainer. **HIV** control is testing with linkage to lifelong ART, prevention of mother-to-child transmission, and condom education. **Malaria** control is the treated bed net, testing before treatment, and IPTp in pregnancy — cutting transmission and protecting hosts at once.\n\nWhen an outbreak is suspected, run the drill in order: **verify** the diagnosis against the case definition; **report** to the district immediately; **treat and isolate** the cases as far as your facility allows; **protect** the contacts and the community — safe water education in cholera, net checks in a malaria spike; and **support the investigation** with your line lists and local knowledge. Speed at the start saves the most lives — which is why your surveillance habits from the last lesson are part of communicable disease control, not separate from it.",
      },
      {
        type: "clinical_pearl",
        body: "Six links, and the nurse can cut any of them — but the cheapest cuts in a Ghanaian community are water, soap and a bed net. Chlorinate the well, hang the tippy tap, tuck the net: three habits that break the chain at more than one link at a time.",
      },
      {
        type: "case",
        title: "In the community",
        body: "Two adults from the same fishing village arrive at your CHPS compound with profuse watery diarrhoea and vomiting; both fetched water from the old well by the lagoon. It is the rainy season, and a third neighbour is reported to have visited the toilet all night.\n\nWhat are your first five actions?\n\nAnswer: Verify against the suspected-cholera case definition (acute watery diarrhoea with or without vomiting in a person over five) and notify the district immediately — cholera is immediately notifiable. Start rehydration at once with ORS per protocol and refer severe cases. Begin a line list with villages, onset dates and water sources. Start the community control package: household water treatment (chlorination or boiling), safe storage in covered containers, handwashing with soap after the toilet and before food, and latrine use — while the district investigation confirms the well. Your speed in the first day decides whether this stays three cases.",
      },
      {
        type: "memory_trick",
        body: "The chain in order: Agent, Reservoir, Exit, Transmission, Entry, Susceptible host. The community cuts: Clean hands, Clean water, Cooked food, Covered waste, Nets at night, Needles safe, Newborns immunised — seven cuts that cover all six links.",
      },
      {
        type: "summary",
        body: "- Chain of infection: agent → reservoir → portal of exit → mode of transmission → portal of entry → susceptible host; cutting any link stops the disease.\n- Strategies: treat cases and contacts (agent and reservoir), safe practices at portals, hygiene-water-food-vector control (transmission), immunisation and nutrition (host).\n- National programmes: EPI immunisation with defaulter tracing, TB case-finding and treatment support, HIV testing-ART-PMTCT, malaria nets, testing and IPTp.\n- Outbreak drill in order: verify with case definitions, report, treat and isolate, protect the community, support the investigation with line lists.\n- The cheapest community cuts: safe water, hand hygiene and bed nets.",
      },
    ],
    questions: [
      {
        topic: "Communicable Disease Control",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Sleeping under an insecticide-treated bed net controls malaria by cutting which link of the chain of infection?",
        options: [
          "The infectious agent",
          "The reservoir",
          "The mode of transmission",
          "The portal of exit",
        ],
        correctIndex: 2,
        explanation:
          "The mosquito is the mode of transmission — the vehicle carrying the parasite between people. The net stops the vehicle from completing the journey; killing mosquitoes on the net attacks the transmission route directly.",
        courseSlug: "community-health-nursing-2",
      },
      {
        topic: "Communicable Disease Control",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which measure protects the susceptible host link of the chain?",
        options: [
          "Chlorinating the drinking water",
          "Screening kitchen windows against flies",
          "Routine childhood immunisation",
          "Covering food from dust",
        ],
        correctIndex: 2,
        explanation:
          "Immunisation strengthens the host — it makes the person resistant when the germ arrives. Water treatment, fly screens and covered food are transmission cuts, valuable but aimed at the road rather than the traveller.",
        courseSlug: "community-health-nursing-2",
      },
      {
        topic: "Communicable Disease Control",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A man has coughed for five weeks with night sweats and weight loss. Which programme duty does he trigger at your CHPS compound?",
        options: [
          "Malaria testing and treatment only",
          "TB screening with sputum testing and linkage to treatment",
          "Cholera notification",
          "Immediate referral with no testing at your level",
        ],
        correctIndex: 1,
        explanation:
          "Chronic cough of two weeks or more with suggestive symptoms is the TB screening trigger: arrange sputum testing, support diagnosis and treatment linkage, and plan the home infection precautions. Cholera notification belongs to watery diarrhoea outbreaks, and simply referring without testing delays the national programme's case-finding.",
        courseSlug: "community-health-nursing-2",
      },
      {
        topic: "Communicable Disease Control",
        type: "CLINICAL_SCENARIO",
        difficulty: "Hard",
        stem: "During a village visit you hear of four children with fever and rash in one week. What is the correct order of your actions?",
        options: [
          "Wait for laboratory confirmation before telling anyone",
          "Treat the fevers quietly and review next month",
          "Verify against the suspected-measles case definition, notify the district, support treatment, and begin immunisation-defaulter tracing",
          "Close the school yourself and quarantine the village",
        ],
        correctIndex: 2,
        explanation:
          "A cluster of fever-plus-rash in unimmunised children is suspected measles — verify with the standard case definition, notify immediately (single suspected cases are reportable), support treatment and complications care, and trace immunisation defaulters so the campaign closes the immunity gap. Waiting or acting quietly lets the outbreak travel; unilateral closures are the district's call after investigation.",
        courseSlug: "community-health-nursing-2",
      },
    ],
    flashcards: [
      {
        topic: "Communicable Disease Control",
        front: "Name the six links of the chain of infection in order.",
        back: "Infectious agent, reservoir, portal of exit, mode of transmission, portal of entry, susceptible host — cut any one link and the disease stops.",
      },
      {
        topic: "Communicable Disease Control",
        front: "Which link does immunisation strengthen, and which does hand hygiene break?",
        back: "Immunisation strengthens the susceptible host; hand hygiene breaks the mode of transmission — the road most faecal-oral germs travel.",
      },
      {
        topic: "Communicable Disease Control",
        front: "The five steps of the outbreak drill?",
        back: "Verify with case definitions, report to the district, treat and isolate cases, protect contacts and community, support the investigation with line lists and local knowledge.",
      },
      {
        topic: "Communicable Disease Control",
        front: "What is the TB screening trigger in the community?",
        back: "Cough of two weeks or more, with night sweats, weight loss or fever — arrange sputum testing and support treatment to completion.",
      },
    ],
    sources: [
      {
        organization: "Ghana Health Service",
        title: "National Guidelines for Communicable Disease Control and IDSR",
        note: "Verify the current edition with your district health directorate.",
      },
      {
        organization: "World Health Organization",
        title: "Integrated Management of Childhood Illness (IMCI) chart booklet",
        note: "Verify the current national adaptation used in Ghana.",
      },
      {
        organization: "UNICEF",
        title: "Immunization and community disease control resources",
        note: "Educational source — verify current guidance.",
      },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────
  {
    courseSlug: "community-health-nursing-2",
    moduleTitle: "The Community as Patient",
    lessonTitle: "Health Promotion Campaigns",
    description:
      "From market-day announcements to radio spots and durbars — planning campaigns that change what people do, not only what they know.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe the steps of planning a health promotion campaign, from assessment to evaluation.",
      "Explain the channels and community structures that carry health messages in Ghana, and why messages must be pretested.",
      "Apply evaluation measures that show behaviour change rather than activity alone.",
    ],
    tags: ["health promotion", "campaigns", "behaviour change", "community engagement"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Knowledge rarely changes behaviour on its own — every community knows mosquito nets exist, yet the nets hang on nails while malaria visits. A health promotion campaign is a planned effort to close the gap between knowing and doing, and the community nurse is usually its planner, its trainer and its loudest voice.\n\nThis lesson teaches the campaign as a project: assess the problem, choose the audience, craft the message with the community, deliver it through the channels people actually trust, and measure whether anything changed.",
      },
      {
        type: "text",
        title: "The core ideas: planning with the community, not for it",
        body: "Start with **assessment**: what is the problem, how big, and — the question most often skipped — what are people already doing and why? Nets owned but not hung is not a knowledge problem; it is a behaviour problem with reasons (heat, ceiling design, fears about the insecticide) that your campaign must answer. **Segment the audience**: pregnant women, schoolchildren, farmers, teenage boys — one message rarely fits all. Set **objectives you can measure**: not raise awareness of breastfeeding, but increase exclusive breastfeeding at the six-week visit from 40 to 60 percent.\n\nThen match **message, messenger and medium**. In a Ghanaian community the channels that work are the durbar (announced through the chief), the community information centre and local FM radio in the local language, market days, faith gatherings, school clubs and house-to-house visits by community-based volunteers. Choose the messenger the audience trusts — the chief and queen mother, the imam and pastor, the assembly member, a recovered patient telling her story. **Pretest** the message on a few community members: a poster that reads beautifully in English but confuses in Twi or Ewe has taught nobody anything. The Ottawa Charter reminds you that promotion is broader than talks: build supportive environments (a tippy tap at the borehole), community action (a mothers' club), and personal skills — a demonstration of ORS preparation teaches more than ten posters.",
      },
      {
        type: "text",
        title: "Delivering and evaluating",
        body: "Run the campaign in waves, not one day: announce at the durbar, follow with house-to-house support, repeat on radio across two weeks, and finish with a community meeting to answer questions. Time it to the season — nets before the rains, immunisation drives before the harmattan gatherings, handwashing messages when reports of diarrhoea begin to rise. Use volunteers: trained community-based volunteers multiply one nurse into twenty voices, and they keep the message alive long after your bicycle has left.\n\nThen **evaluate** at three levels. **Process**: did the campaign reach the people — how many attended, how many households visited, how many radio spots aired? **Impact**: did knowledge and behaviour move — are the nets hung, are the children fully immunised, did clinic attendance rise? **Outcome**: the longest measure — did malaria cases, diarrhoea episodes or teenage pregnancies actually fall? Report all three honestly to the community and the district: a campaign that reached everyone and changed nothing is not a success — it is a lesson for the next one, and the community deserves to hear that too.",
      },
      {
        type: "clinical_pearl",
        body: "The best campaign is co-owned. Involve the chief, the queen mother and the faith leaders from the first meeting, and let a trusted elder announce the message at the durbar — a sentence spoken by the chief travels further in one afternoon than a hundred posters travel in a year.",
      },
      {
        type: "case",
        title: "In the community",
        body: "In your catchment area a survey shows 70 percent of households own a treated bed net but only 34 percent of children under five slept under one the previous night. The district asks you to design a campaign.\n\nWhat does your plan look like, and how will you know it worked?\n\nAnswer: The gap is behaviour, not ownership — so the campaign starts by asking why nets are unused, and the answers shape the messages (heat, fear of the insecticide, torn nets, nowhere to hang them). Plan: a durbar where the chief announces that every net must hang every night; house-to-house sessions where volunteers hang demonstration nets and repair torn ones with needle and thread; radio spots answering the insecticide myth; and a net-hanging competition between hamlets. Evaluate by re-surveying the same question — the percentage of under-fives who slept under a net the previous night — at one and three months, and report the numbers at the next durbar.",
      },
      {
        type: "quiz_prompt",
        title: "The measure that matters",
        body: "A campaign team reports proudly: 400 people attended the durbar, 500 leaflets distributed, 12 radio spots aired. What has the team measured — and what has it not yet shown?\n\nAnswer: Process — reach and activity. It has not yet shown impact: whether the audience's knowledge or behaviour changed (are the nets hung, are the hands washed, are the children taken for immunisation?). A campaign is judged by the behaviour it moves, not the crowd it gathers.",
      },
      {
        type: "memory_trick",
        body: "A-S-M-E a campaign: Assess the problem and the real behaviour, Segment the audience, match Message-Messenger-Medium and pretest, Evaluate process, impact and outcome — then repeat what worked.",
      },
      {
        type: "summary",
        body: "- A campaign closes the gap between knowing and doing — assess behaviour and its reasons before writing a single message.\n- Segment the audience, set measurable objectives, and pretest every message in the community's own language.\n- Trusted channels: durbars through the chief, FM radio and information centres, market days, faith gatherings, schools and house-to-house volunteers.\n- The Ottawa Charter: promotion is also supportive environments, community action and skills demonstration — not talks alone.\n- Evaluate three levels: process (reach), impact (knowledge and behaviour change), outcome (disease rates) — and report honestly back to the community.",
      },
    ],
    questions: [
      {
        topic: "Health Promotion Campaigns",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the difference between process and impact evaluation of a campaign?",
        options: [
          "Process measures reach and activities; impact measures change in knowledge and behaviour",
          "Process measures behaviour change; impact measures costs",
          "Process is done by the district; impact is done by the nurse",
          "They are two names for the same thing",
        ],
        correctIndex: 0,
        explanation:
          "Process evaluation asks whether the campaign happened as planned — attendance, households visited, spots aired. Impact evaluation asks whether it changed people — knowledge, net use, clinic attendance. Outcome evaluation goes further to disease rates.",
        courseSlug: "community-health-nursing-2",
      },
      {
        topic: "Health Promotion Campaigns",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A survey shows most households own bed nets but few children sleep under them. What should the campaign planning focus on first?",
        options: [
          "Buying more nets for the community",
          "Finding out why nets are not used, and building messages on those reasons",
          "Larger posters with more information",
          "Punishing households whose nets hang unused",
        ],
        correctIndex: 1,
        explanation:
          "The gap is behaviour, not ownership: heat, insecticide fears, torn nets and nowhere to hang them each need a different answer. More nets or bigger posters change nothing if the reasons stay unaddressed, and punishment destroys trust.",
        courseSlug: "community-health-nursing-2",
      },
      {
        topic: "Health Promotion Campaigns",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why pretest health messages with a few community members before printing and broadcasting?",
        options: [
          "It is a legal requirement for all campaigns",
          "A message that reads well can confuse in translation or offend local sensibilities — pretesting catches that cheaply",
          "To delay the campaign until the district approves",
          "Pretesting counts as impact evaluation",
        ],
        correctIndex: 1,
        explanation:
          "The cheapest failure to prevent is the misunderstood message: technical terms, awkward translation and unintended meanings surface when real listeners react to the draft — before the posters are printed and the airtime is bought.",
        courseSlug: "community-health-nursing-2",
      },
      {
        topic: "Health Promotion Campaigns",
        type: "CLINICAL_SCENARIO",
        difficulty: "Hard",
        stem: "You must promote handwashing in a community with high childhood diarrhoea. Which campaign design follows the planning principles best?",
        options: [
          "One large lecture at the clinic for whoever attends, then a report to the district",
          "A durbar announced by the chief, tippy-tap demonstrations at the borehole, house-to-house visits by trained volunteers, radio spots in the local language, and a re-survey of handwashing stations afterwards",
          "Posters in English at the health centre only",
          "Distribute soap to households with no further activity",
        ],
        correctIndex: 1,
        explanation:
          "The design that works: trusted channels (durbar, chief, radio, volunteers), skills demonstration where the behaviour happens (the borehole), a supportive environment (tippy taps people can copy), repetition house-to-house — and evaluation of behaviour, not attendance. A single lecture, English posters or soap alone each miss most of the community and none measures change.",
        courseSlug: "community-health-nursing-2",
      },
    ],
    flashcards: [
      {
        topic: "Health Promotion Campaigns",
        front: "What does it mean to segment the audience?",
        back: "Divide the community into groups — pregnant women, schoolchildren, farmers, teenagers — and tailor message, messenger and channel to each, because one message rarely fits all.",
      },
      {
        topic: "Health Promotion Campaigns",
        front: "Name four trusted channels for health messages in a Ghanaian community.",
        back: "The durbar announced through the chief, local FM radio and the community information centre in the local language, market days and faith gatherings, and house-to-house visits by trained community-based volunteers.",
      },
      {
        topic: "Health Promotion Campaigns",
        front: "Process, impact, outcome — the three evaluation levels?",
        back: "Process: did the campaign reach people? Impact: did knowledge and behaviour change? Outcome: did the disease rates fall? A campaign is judged by the behaviour it moves.",
      },
      {
        topic: "Health Promotion Campaigns",
        front: "Why does a demonstration beat a poster for teaching skills?",
        back: "Skills are learned by doing: an ORS demonstration, a net-hanging session or a tippy tap built at the borehole lets people practise the behaviour in the setting where they will repeat it.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "The Ottawa Charter for Health Promotion",
        year: "1986",
      },
      {
        organization: "UNICEF",
        title: "Communication for Development (C4D) practice guidance",
        note: "Educational source — verify current guidance.",
      },
      {
        organization: "Ghana Health Service",
        title: "Health Promotion Division — community campaign guidance",
        note: "Verify current national guidance with your district.",
      },
    ],
  },

  // ── 14 ─────────────────────────────────────────────────────
  {
    courseSlug: "community-health-nursing-2",
    moduleTitle: "Family Planning Services",
    lessonTitle: "Running a Family Planning Service",
    description:
      "The method menu, the counselling structure and the daily discipline that make a family planning service clients trust and return to.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe the full method menu — from natural methods to LARC and sterilisation — with effectiveness and eligibility reasoning.",
      "Explain the GATHER counselling structure and the rights that underpin voluntary family planning.",
      "Apply the service disciplines: privacy, supplies, record-keeping, follow-up and side-effect counselling that keeps clients continuing.",
    ],
    tags: ["family planning", "contraception", "counselling", "gather", "larc"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Family planning clients do not come asking for a drug — they come asking for a life: school, work, spacing, recovery. At CHPS level in Ghana the nurse often runs the whole service: the counselling, the methods, the follow-up and the trust.\n\nThis lesson equips you for that duty: the menu of methods with their real-world effectiveness, the counselling structure that respects the client's own choice, and the service discipline — privacy, supplies, records, follow-up — that separates a programme that works from a cupboard with posters.",
      },
      {
        type: "text",
        title: "The method menu",
        body: "Methods divide into families. **Natural methods** — fertility awareness and lactational amenorrhoea (LAM: baby under six months, exclusive feeding day and night, no return of menses) — cost nothing but demand discipline. **Barriers** — male and female condoms — are the only methods that also protect against sexually transmitted infections. **Short-acting hormones** — the combined pill, the progestogen-only pill, injectables like DMPA every three months — are effective when used consistently, which is exactly where typical use slips. **LARCs** — the subdermal implant (three to five years) and the copper IUD (up to ten) — sit at the top of the effectiveness table because they remove daily human error, and both suit breastfeeding mothers. **Sterilisation** — tubal ligation for her, vasectomy for him — is permanent: simpler and safer in the man, and a decision that deserves its own unhurried counselling.\n\nQuote effectiveness honestly as **perfect use versus typical use** — the gap between them is real life: memory, supply, negotiation. And screen with WHO's **medical eligibility criteria**: oestrogen-containing methods are avoided or limited with raised blood pressure, smokers over 35, migraine with aura and breastfeeding under six weeks — progestin-only methods are the usual alternative. After birth, remember the timing rules: progestin-only methods can start soon; oestrogen waits at least six weeks while feeding establishes; the copper IUD fits within the first 48 hours or from about four weeks.",
      },
      {
        type: "text",
        title: "Counselling and service discipline",
        body: "Structure the session with **GATHER**: **Greet** her respectfully and find privacy — even a lowered voice and a corner screen protects the conversation in a busy CHPS compound. **Ask** about her situation: children, plans, partner, method experience. **Tell** her the methods honestly — how they work, how well, the real side effects; a client who learns that DMPA may bring irregular bleeding will not abandon it in disillusion. **Help** her choose — and notice the verb: help, not decide. **Explain** correct use and what to do about missed pills. **Return**: teach her to come back for side effects, method changes, or when pregnancy is desired — stopping silently is the only wrong answer.\n\nThen the service disciplines that keep her safe and returning: voluntariness (no method as a condition of any service), a full method mix rather than the shelf's leftover, confidential records, no stock-outs, and follow-up that treats clients as people, not statistics. Answer the classic myths with respect and fact: injectables do not sterilise — DMPA can delay fertility's return up to a year after the last shot; pills raise no cancer alarm — they lower ovarian and endometrial cancer risk. Where a client faces partner opposition, offer discreet options and support dialogue on her terms — never require a husband's consent.",
      },
      {
        type: "clinical_pearl",
        body: "Never let the queue pick her method. A choice whispered in front of ten listening clients is not a choice — it is performance. Privacy is not a luxury in family planning; it is part of the method itself.",
      },
      {
        type: "case",
        title: "In the clinic",
        body: "A 28-year-old mother of three, eight weeks postpartum and breastfeeding, wants reliable spacing. Her husband travels for work, her aunt insists the pill causes cancer, and she has heard the injection makes women permanently barren.\n\nWhich options lead your counselling, and what do you say about the myths?\n\nAnswer: Her profile points to the LARC family: the implant or the copper IUD — top-tier typical-use effectiveness, milk-friendly, and nothing to remember on a travelling husband's calendar; the IUD adds up to ten hormone-free years, and DMPA is a reasonable alternative if she prefers injections. Explain honestly: combined methods actually lower ovarian and endometrial cancer risk, and DMPA can delay fertility's return for up to a year after the last injection but does not cause sterility. Screen her against the eligibility criteria, let her choose — in private — invite her back for any side effect or change of mind, and book the insertion before she leaves.",
      },
      {
        type: "memory_trick",
        body: "Picture the ladder: Long-acting beats daily, daily beats the moment — implant and IUD on top, pills and injectables next, condoms after, natural methods last — with one banner beneath: the STI shield belongs to condoms alone. And counsel with GATHER: Greet, Ask, Tell, Help, Explain, Return.",
      },
      {
        type: "summary",
        body: "- Method families: natural (including LAM with its three criteria), barrier condoms, short-acting hormones, LARCs (implant, copper IUD) and sterilisation — quote perfect versus typical use.\n- Only condoms add STI protection — counsel dual protection where risk exists.\n- Postpartum timing: progestin-only methods and the implant suit breastfeeding from early on; oestrogen waits at least six weeks; IUD within 48 hours or from four weeks.\n- WHO eligibility screening flags oestrogen with hypertension, smoking over 35, migraine with aura and early breastfeeding.\n- GATHER structures the session; voluntariness, privacy, full method mix, records and follow-up keep the service trusted.\n- Myths answered with respect and fact: DMPA delays fertility up to a year but does not sterilise; pills lower ovarian and endometrial cancer risk.",
      },
    ],
    questions: [
      {
        topic: "Family Planning Services",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which method offers the highest effectiveness with typical, real-life use?",
        options: [
          "Withdrawal",
          "Male condom",
          "Combined oral contraceptive pill",
          "Subdermal implant",
        ],
        correctIndex: 3,
        explanation:
          "The implant tops the effectiveness table even with typical use, because it removes human error for three to five years. Pills and condoms drop from their perfect-use figures through missed doses and inconsistent use, and withdrawal sits at the bottom.",
        courseSlug: "community-health-nursing-2",
      },
      {
        topic: "Family Planning Services",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A couple asks which method also protects against sexually transmitted infections. Your answer?",
        options: [
          "The copper IUD",
          "The subdermal implant",
          "Correct, consistent condom use",
          "DMPA injection",
        ],
        correctIndex: 2,
        explanation:
          "Condoms are the only method with a physical barrier that stops both sperm and infections, including HIV. Implants, IUDs and injectables prevent pregnancy admirably but do nothing about STIs — hence dual protection counselling for at-risk couples.",
        courseSlug: "community-health-nursing-2",
      },
      {
        topic: "Family Planning Services",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother is four weeks postpartum, fully breastfeeding, and asks for the combined oral contraceptive pill today. What is your best counselling?",
        options: [
          "It is the ideal method for her right now",
          "A progestin-only method suits her better now — oestrogen should wait at least six weeks as it may reduce her milk",
          "No hormonal method is ever safe in breastfeeding",
          "She must wean the baby before any contraception",
        ],
        correctIndex: 1,
        explanation:
          "Oestrogen can suppress milk production, so combined methods are delayed until at least six weeks and ideally until feeding is established — while progestin-only pills, implants and injectables are compatible with breastfeeding from early on.",
        courseSlug: "community-health-nursing-2",
      },
      {
        topic: "Family Planning Services",
        type: "CLINICAL_SCENARIO",
        difficulty: "Hard",
        stem: "In a packed clinic, a 24-year-old whispers that she wants the injection — but her mother-in-law, waiting outside, insists family planning spoils wombs. What is the best counselling response?",
        options: [
          "Tell her to obey her elders and use natural methods only",
          "Refuse service unless the husband signs approval first",
          "Give her the injection in front of the family to settle the matter",
          "Continue the service in privacy, correct the womb-damage myth, and support her own choice — discreet where needed and dialogue only if she wishes",
        ],
        correctIndex: 3,
        explanation:
          "Her method choice is hers alone: counsel privately, correct misinformation with respect, and offer a discreet option. Requiring a husband's or mother-in-law's permission breaches her right to informed choice — and confronting the family publicly can endanger her at home.",
        courseSlug: "community-health-nursing-2",
      },
    ],
    flashcards: [
      {
        topic: "Family Planning Services",
        front: "Explain perfect use versus typical use in one sentence.",
        back: "Perfect use is what trials achieve with flawless compliance; typical use is what real people achieve with missed pills and inconsistent use — always counsel the typical-use figure.",
      },
      {
        topic: "Family Planning Services",
        front: "Name the two LARC methods with their durations.",
        back: "The subdermal implant (three to five years depending on type) and the copper IUD (up to ten years) — the most effective methods because they remove daily human error.",
      },
      {
        topic: "Family Planning Services",
        front: "What does each letter of GATHER stand for?",
        back: "Greet respectfully in private, Ask about her situation and goals, Tell the methods honestly, Help her choose, Explain correct use and missed-dose rules, plan Return for problems or changes.",
      },
      {
        topic: "Family Planning Services",
        front: "How do you answer the myth that injectables make women barren?",
        back: "With respect and fact: DMPA can delay the return of fertility for up to a year after the last injection — an effect that wears off, not damage that stays.",
      },
      {
        topic: "Family Planning Services",
        front: "State the three LAM criteria.",
        back: "Baby under six months, exclusive breastfeeding day and night, and no return of menses — all three must hold for LAM's over 98 percent protection.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization / Johns Hopkins CCP",
        title: "Family Planning: A Global Handbook for Providers",
        year: "2018",
      },
      {
        organization: "World Health Organization",
        title: "Medical Eligibility Criteria for Contraceptive Use (5th edition)",
        year: "2015",
      },
      {
        organization: "Ghana Health Service",
        title: "National Family Planning Guidelines and Service Standards",
        note: "Verify the current edition with your district.",
      },
    ],
  },

  // ── 15 ─────────────────────────────────────────────────────
  {
    courseSlug: "community-health-nursing-2",
    moduleTitle: "Family Planning Services",
    lessonTitle: "Adolescent Reproductive Health",
    description:
      "Teenage pregnancy is a community event — build the confidential, youth-friendly services that keep girls healthy, informed and in school.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe the medical and social risks of pregnancy in girls aged 10 to 19 years.",
      "Explain what makes a service youth-friendly and why confidentiality is its foundation.",
      "Apply community-level prevention — adolescent contraception, comprehensive sexuality education and school re-entry support.",
    ],
    tags: ["adolescent health", "teen pregnancy", "youth-friendly services", "school health"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A sixteen-year-old walks into your CHPS compound, four months pregnant and still in her school uniform. She is not simply a younger version of the mothers you usually see: her pelvis, her blood, her social world and her power to decide are all still under construction — and each one changes the care she needs.\n\nAdolescent pregnancy touches nearly every community in Ghana, from senior high school corridors to market streets. WHO counts complications of pregnancy and childbirth among the leading killers of girls aged 15 to 19 worldwide. This lesson covers the risks to watch, the services to build and the community prevention that keeps girls in school — the nurse's work at all three levels.",
      },
      {
        type: "text",
        title: "The core ideas: risks and youth-friendly care",
        body: "**Medically**, the young mother carries extra risk. Her growing pelvis may be too small for a term baby, so prolonged and obstructed labour — and the fistula that can follow — are real dangers of very early childbearing. Anaemia, pre-eclampsia, preterm birth and low birth weight are all more common in teenagers; sexually transmitted infections travel with early unprotected sex, and unsafe abortion remains a leading cause of death among pregnant girls.\n\n**Socially**, the risks are just as heavy — school dropout, stigma, poverty, and sometimes an older partner who holds all the power. So her care must be **youth-friendly**: confidential and private (a corner where she can speak without an auntie answering for her), non-judgmental, at convenient times, with the services she needs under one roof. Contraception belongs inside her care, not beside it — implants and intrauterine devices are safe and highly effective for young women, paired with condoms for dual protection. Ask about her relationship privately, plan her birth where obstruction can be managed, and open the school re-entry conversation early — Ghana's education policy allows a pregnant schoolgirl to return after delivery, and the nurse is often the one who must say so out loud.",
      },
      {
        type: "text",
        title: "Community prevention",
        body: "Prevention is where the community nurse earns her title. **Comprehensive sexuality education** — delivered with teachers, through school health clubs and youth groups — gives young people accurate knowledge about their bodies, pregnancy, contraception and consent before they need it. **Adolescent-friendly contraception access** means a young woman can obtain a method without shame, a mandatory parent's consent or a lecture. **Engaging the gatekeepers** — parents, chiefs, queen mothers, faith leaders — reframes adolescent reproductive health from encouraging immorality to protecting the community's daughters, and their endorsement is what makes school programmes survive. And the deepest lever is education itself: a girl who stays in school delays pregnancy better than any poster — so every effort that keeps girls learning, including re-entry after delivery, is reproductive health work. Screen privately for coercion and violence with the curtain drawn and the companion out of the room; a quiet question has opened more doors to safety than any form in the folder.",
      },
      {
        type: "clinical_pearl",
        body: "Screen for coercion with the companion out of the room. A quiet question — is anyone hurting you, or deciding things for you? — has opened more doors to safety than any form in the folder. If a girl will not speak in front of her escort, the escort is part of the history.",
      },
      {
        type: "case",
        title: "In the community",
        body: "Ama, fifteen and three months pregnant, is brought to your antenatal clinic by her mother, who answers every question for her. Her haemoglobin is 9.2 g/dL, her blood pressure is normal, and she keeps her eyes on the floor. Her mother announces that the family has arranged a home birth with a traditional attendant, since she is young and will deliver quickly.\n\nWhat must change in this consultation, and what will you put in place before she leaves?\n\nAnswer: First, Ama must be heard — take her history and screen her privately, without her mother speaking for her. Treat her anaemia with iron and counsel iron-rich foods. Because a young primigravida carries a real risk of obstructed labour, counsel the family gently but honestly toward a facility birth or a maternity waiting home — young does not mean quick, it means riskier. Offer her a confidential contraceptive plan for after delivery, discuss school re-entry, and make sure her next visit is booked with her in the conversation, not outside it.",
      },
      {
        type: "memory_trick",
        body: "TEEN: Take her seriously, Explain in private, Encourage dual protection, Never judge. And remember the three community levers: education that keeps girls learning, sexuality education that arrives before the pregnancy, and a youth-friendly corner that keeps its mouth shut.",
      },
      {
        type: "summary",
        body: "- Girls aged 10-19 face higher risks of anaemia, pre-eclampsia, preterm birth, obstructed labour and fistula — with unsafe abortion an added killer.\n- Plan facility births for teenage mothers: a growing pelvis may not fit a term baby, and young and quick is a myth.\n- Youth-friendly care is confidential, private, non-judgmental and convenient — confidentiality is its foundation.\n- Contraception is part of her care: implants and IUDs are safe for young women plus condoms for dual protection.\n- Prevention runs through comprehensive sexuality education, community gatekeepers, and keeping girls in school — including re-entry after delivery.\n- Screen privately for coercion and violence at every contact.",
      },
    ],
    questions: [
      {
        topic: "Adolescent Reproductive Health",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A 15-year-old books at your clinic. Which risk is most closely linked to her age and first pregnancy?",
        options: [
          "Cephalopelvic disproportion from a pelvis that is still growing",
          "Post-datism with fetal macrosomia",
          "Placenta praevia in every teenage pregnancy",
          "Multiple pregnancy from young ovaries",
        ],
        correctIndex: 0,
        explanation:
          "In early adolescence the pelvis may not have finished growing, so obstructed labour from cephalopelvic disproportion — with the risk of fistula — is a classic danger of very young childbearing. The other options are not age-linked in this way.",
        courseSlug: "community-health-nursing-2",
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
        courseSlug: "community-health-nursing-2",
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
        courseSlug: "community-health-nursing-2",
      },
      {
        topic: "Adolescent Reproductive Health",
        type: "CLINICAL_SCENARIO",
        difficulty: "Hard",
        stem: "You are starting adolescent reproductive health services at your CHPS compound. Which combination best reflects community-level prevention?",
        options: [
          "Wait for girls to come pregnant, then counsel them",
          "Warn schools to expel pregnant girls to deter others",
          "School-based sexuality education, a confidential corner at the compound, gatekeeper engagement, and support for school re-entry after delivery",
          "Give talks at the clinic only, during working hours",
        ],
        correctIndex: 2,
        explanation:
          "Prevention arrives before the pregnancy: education in schools, services a girl can use without shame, endorsement from the chiefs and parents who gatekeep the schools, and re-entry support that keeps a young mother learning. Expulsion deepens harm, and clinic-only talks reach the few who are already in trouble.",
        courseSlug: "community-health-nursing-2",
      },
    ],
    flashcards: [
      {
        topic: "Adolescent Reproductive Health",
        front: "Name three medical risks that rise with adolescent pregnancy.",
        back: "Anaemia, pre-eclampsia, preterm birth and low birth weight, and obstructed labour from a still-growing pelvis — with the danger of obstetric fistula. STIs, HIV and unsafe abortion add further risk.",
      },
      {
        topic: "Adolescent Reproductive Health",
        front: "What makes a reproductive health service youth-friendly?",
        back: "Confidential, private, non-judgmental care at convenient times, in a space where a young person can speak freely and get the services she needs under one roof.",
      },
      {
        topic: "Adolescent Reproductive Health",
        front: "What is dual protection for an adolescent?",
        back: "A highly effective method (implant or IUD) plus condoms — preventing both pregnancy and sexually transmitted infections at once.",
      },
      {
        topic: "Adolescent Reproductive Health",
        front: "What does TEEN remind the nurse?",
        back: "Take her seriously, Explain in private, Encourage dual protection, Never judge.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Adolescent Pregnancy — Fact Sheet",
        note: "Check for the latest WHO update.",
      },
      {
        organization: "UNFPA",
        title: "Motherhood in Childhood: Facing the Challenge of Adolescent Pregnancy",
        year: "2013",
      },
      {
        organization: "Ghana Health Service / Ghana Education Service",
        title: "School Health Education Programme (SHEP) and adolescent health policy",
        note: "Verify current national policy — including school re-entry guidance.",
      },
    ],
  },

  // ── 16 ─────────────────────────────────────────────────────
  {
    courseSlug: "community-health-nursing-2",
    moduleTitle: "School & Environmental Health",
    lessonTitle: "School Health Services",
    description:
      "One nurse, many schools: the screenings, the first aid, the latrine inspections and the health talks that keep a thousand children learning.",
    difficulty: "Easy",
    durationMin: 10,
    objectives: [
      "Describe the scope of school health services under Ghana's School Health Education Programme.",
      "Explain the entry and periodic screenings — vision, hearing, dental, growth — and their referral pathways.",
      "Apply school-level infection control, sanitation inspection and health education duties.",
    ],
    tags: ["school health", "shep", "screening", "school sanitation"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A school is a village of children gathered in one place for hours every day — which makes it the most efficient clinic you will ever run. Screen a thousand children once and you have found the myopic boy labelled stubborn, the anaemic girl who cannot concentrate, the hearing loss behind a year of not listening.\n\nIn Ghana school health runs through **SHEP** — the School Health Education Programme, jointly driven by the Ghana Education Service and the Ghana Health Service — with the community or school health nurse as its visiting backbone. This lesson covers the package: screening, sickness care, sanitation inspection and health education.",
      },
      {
        type: "text",
        title: "Screening and sickness care",
        body: "**Entry screening** and periodic checks catch problems early: **vision** (can the child read the board from the back row? A simple Snellen chart or E-chart finds myopia in minutes), **hearing** (the whispered-voice or clapping test behind the child), **dental** (cavities, pain, brushing habits — with referral where available), **growth** (weight and height against the growth chart, because thinness and stunting hide in classrooms), and a general look — pallor, skin problems, limp, cough. Every finding goes home as a referral letter the parent can act on, with the school register as your record.\n\n**Sickness care**: the school keeps a first aid box and a trained health teacher; the nurse trains them, checks the box, and plans what must be escalated — a child who convulses is stabilised and referred, not carried from class to class. Support **children with chronic conditions** so they learn like everyone else: the child with asthma or epilepsy, the child with sickle cell disease who needs water, shade and prompt care during crises. And apply **infection control**: know the exclusion rules for measles, chickenpox and other school-spread diseases, support deworming days where the programme runs them, and trace the under-immunised through the school register.",
      },
      {
        type: "text",
        title: "Sanitation, food and health education",
        body: "Walk the compound with a checklist: **toilets** — enough for the pupils, clean, with water or anal-cleansing material; **handwashing** — a station with soap near the toilets and the eating area, or a tippy tap you teach them to build; **water** — a safe source on site; **food safety** — the vendors who sell at break should hold current hygiene screening certificates (arranged with your environmental health colleagues) and sell covered food; **waste** — bins emptied away from the eating area; **playground** — hazards noted and reported. Every defect is a discussion with the head teacher first, a letter to the circuit supervisor if it persists, and a health talk topic for the pupils meanwhile.\n\n**Health education** lands best when it is regular, practical and owned by the children: a school health club that keeps the tippy taps filled, older pupils teaching handwashing songs to younger ones, a health corner with posters in the local language — and the topics chosen from what you actually found on your last visit, not from a file in the district.",
      },
      {
        type: "clinical_pearl",
        body: "A child who cannot see the blackboard is often called stubborn before being called myopic. The vision screen takes two minutes, changes a school career, and costs nothing — do it on every visit.",
      },
      {
        type: "case",
        title: "In the school",
        body: "You visit a basic school of 480 pupils for your termly round. Two teachers mention the same boy who squints and copies from his neighbour; the toilet block has no water and no soap; the break-time vendor sells uncovered kelewele beside an open drain; and the first aid box contains one expired plaster.\n\nWhat is your plan for the day and the term?\n\nAnswer: Today: screen the squinting boy (and the whole class if time allows — where two squint, more hide), write referral letters to the parents for the vision findings, and check the register for other children the teachers flag. Meet the head teacher with your checklist: water and soap for the toilets (a tippy tap can be built with the health club this week), the vendor to be screened and to cover her food away from the drain, and a restocked first aid box with a named trained teacher. This term: restart the school health club, plan a handwashing and food-safety talk built on what you found, and record everything in your school health register for the district report.",
      },
      {
        type: "memory_trick",
        body: "The school nurse's five S's: Screening (vision, hearing, dental, growth), Sickness care (first aid and chronic conditions), Sanitation (toilets, water, waste, vendors), Safety (playground and infection control), Sessions (health talks and clubs).",
      },
      {
        type: "summary",
        body: "- SHEP links the Ghana Education Service and Ghana Health Service; the visiting nurse is the backbone of school health.\n- Screening: vision, hearing, dental, growth and general look — with referral letters home and the school register as your record.\n- Sickness care: trained teachers, a checked first aid box, escalation plans, and inclusion for children with asthma, epilepsy and sickle cell disease.\n- Infection control: exclusion rules for school-spread diseases, deworming support, and immunisation tracing through the register.\n- Sanitation inspection: toilets, handwashing stations, safe water, screened food vendors, waste and playground — discuss with the head teacher first.\n- Health education works when it is regular, practical, in the local language and owned by pupils through health clubs.",
      },
    ],
    questions: [
      {
        topic: "School Health Services",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A teacher reports a boy who squints at the blackboard and copies from his neighbour. What is the most appropriate first action?",
        options: [
          "Tell the teacher to move him to the front permanently and close the matter",
          "Screen his vision and send a referral letter home for an eye examination",
          "Assume laziness and ask for punishment",
          "Refer the whole school to the district hospital",
        ],
        correctIndex: 1,
        explanation:
          "Squinting and copying from neighbours is the classic classroom face of myopia — a two-minute vision screen confirms the suspicion, and a referral letter home turns it into glasses. Moving him forward is a patch, punishment is a misdiagnosis, and whole-school referral is disproportionate.",
        courseSlug: "community-health-nursing-2",
      },
      {
        topic: "School Health Services",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During your visit, a case of measles is confirmed in one pupil. What is the correct infection-control action?",
        options: [
          "Keep the child in class to avoid interrupting learning",
          "Exclude the child for the infectious period, notify per protocol, and check the register for under-immunised classmates",
          "Close the school for one month immediately",
          "Give antibiotics to the whole class",
        ],
        correctIndex: 1,
        explanation:
          "Measles spreads fast in classrooms: exclude the case for the infectious period, notify under surveillance rules, and identify immunisation gaps for follow-up and campaign. Whole-school closure and mass antibiotics are neither proportionate nor effective against a virus.",
        courseSlug: "community-health-nursing-2",
      },
      {
        topic: "School Health Services",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why does the school health nurse inspect food vendors and their selling environment?",
        options: [
          "To collect market fees for the school",
          "Because uncovered food sold near open drains is a classic vehicle for food-borne outbreaks among pupils",
          "Vendors are nurses' personal responsibility for licensing",
          "To encourage pupils to buy food outside school instead",
        ],
        correctIndex: 1,
        explanation:
          "School food is a shared exposure for hundreds of children at once — a single unsafe vendor can sicken a whole class. Environmental health officers handle the screening certificates; the school nurse's inspection keeps the daily reality (covered food, clean spot, safe water) on the agenda.",
        courseSlug: "community-health-nursing-2",
      },
      {
        topic: "School Health Services",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What does SHEP stand for in Ghana's school health system?",
        options: [
          "School Health Education Programme",
          "Student Health Examination Protocol",
          "Safe Hygiene and Environment Programme",
          "School Health Extension Project",
        ],
        correctIndex: 0,
        explanation:
          "The School Health Education Programme is the joint Ghana Education Service and Ghana Health Service framework for school health — the structure your school visits operate within.",
        courseSlug: "community-health-nursing-2",
      },
    ],
    flashcards: [
      {
        topic: "School Health Services",
        front: "The four core screenings of the school visit?",
        back: "Vision (board-reading, Snellen or E-chart), hearing (whisper or clap test behind the child), dental (cavities and pain), and growth (weight and height against the chart) — plus a general look for pallor and skin problems.",
      },
      {
        topic: "School Health Services",
        front: "The school nurse's five S's?",
        back: "Screening, Sickness care, Sanitation, Safety, Sessions (health talks and clubs).",
      },
      {
        topic: "School Health Services",
        front: "How are school health findings turned into action for a child?",
        back: "A referral letter home to the parents, with the finding in plain words and where to go — plus the school register and your visit record so the next visit follows up.",
      },
      {
        topic: "School Health Services",
        front: "How does the nurse support a child with sickle cell disease in school?",
        back: "Water access, shade and rest breaks, prompt response to pain or fever crises, a named teacher who knows the plan — inclusion so the child learns like everyone else.",
      },
    ],
    sources: [
      {
        organization: "Ghana Education Service / Ghana Health Service",
        title: "School Health Education Programme (SHEP) implementation guidance",
        note: "Verify the current national guidance with your district.",
      },
      {
        organization: "World Health Organization",
        title: "Health Promoting Schools framework",
        note: "Educational source — verify the current WHO framework.",
      },
      {
        organization: "UNICEF",
        title: "Water, Sanitation and Hygiene (WASH) in Schools",
        note: "Educational source — verify current guidance.",
      },
    ],
  },

  // ── 17 ─────────────────────────────────────────────────────
  {
    courseSlug: "community-health-nursing-2",
    moduleTitle: "School & Environmental Health",
    lessonTitle: "Environmental Health: Water, Sanitation & Vector Control",
    description:
      "Cholera, typhoid and malaria live in water, waste and vectors — the nurse who walks compound to compound can evict them.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe the faecal-oral contamination routes and the household water and sanitation practices that break them.",
      "Explain the main disease vectors in Ghana and the control measures for each.",
      "Apply an environmental health assessment on home visits and compound inspections, with education and referral for hazards.",
    ],
    tags: ["environmental health", "water", "sanitation", "vector control", "wash"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Most of the infectious disease a community suffers is housekeeping, not fate. The cholera vibrio rides water; the typhoid salmonella rides food and flies; the malaria parasite rides a mosquito that bred in the standing water behind the house. Environmental health is the discipline of removing those rides — and the community nurse is the professional most often standing in the compound where it must happen.\n\nThis lesson covers the contamination routes from stool to mouth, the water and sanitation practices that cut them, the vectors of Ghana and their controls, and the inspection walk that ties it all together.",
      },
      {
        type: "text",
        title: "Water and sanitation: cutting the faecal-oral routes",
        body: "Contamination travels the classic routes of the **F-diagram**: **Fluids** (contaminated water), **Fingers** (unwashed hands), **Fields** (open defecation), **Flies** (breeding in waste and landing on food) and **Food** (eaten uncooked or badly reheated). One habit cuts three routes at once: **handwashing with soap at the critical times** — after defecation or cleaning a child, before preparing or eating food, before feeding a baby.\n\n**Water safety** runs from source to mouth: protect the source (a covered well or borehole, sited at least 30 metres from latrines), treat at household level where the source is doubtful — boiling, chlorine products, or solar disinfection in clear bottles — and store safely in a **covered, narrow-mouthed container** with a cup hung beside it, because a wide pot with a hand-dipped cup recontaminates clean water within hours. **Sanitation**: a household latrine used by everyone (Ghana's community-led total sanitation approach confronts open defecation community by community), a handwashing station at the exit — a tippy tap costs a jerrycan and a stick — and waste that is collected and buried or burned appropriately rather than feeding the flies and rodents. Add **food hygiene**: wash, cook, cover, and reheat thoroughly — the vendor and the home kitchen follow the same law.",
      },
      {
        type: "text",
        title: "The vectors of Ghana and their controls",
        body: "**Mosquitoes** carry malaria and lymphatic filariasis: sleep under a treated net every night, screen windows and doors, and drain or cover standing water — old tins, blocked gutters, sagging roof sheets. **Houseflies** carry the faecal-oral diseases: latrine hygiene, covered waste and covered food starve them. **Rodents** spread leptospirosis and contaminate food stores: stored food in closed containers, waste cleared, holes blocked — and safe trapping, never poison within reach of children. **Freshwater snails** host the schistosomiasis worm: children should not fetch water or swim in infested streams where a safe source exists — and the safe source is the real intervention. And **mites and lice** yield to washing, bedding aired in the sun and, where needed, treatment per protocol. On your inspection walk, note the breeding places first: the standing water, the uncovered waste, the damp corner behind the bathroom — because removing breeding places serves every disease the vector carries.",
      },
      {
        type: "clinical_pearl",
        body: "The five Fs carry cholera home — Fluids, Fingers, Fields, Flies and Food. Wash the hands at the critical times and cover the water, and you have cut three of the five routes with two habits that cost almost nothing.",
      },
      {
        type: "case",
        title: "In the community",
        body: "After two cases of acute watery diarrhoea in the same hamlet, you walk the compound with your environmental checklist. The well is open and its apron cracked, ten metres from a leaking latrine; drinking water is stored in a wide uncovered pot with a communal dipping cup; there is no handwashing station, and waste collects behind the kitchen where flies gather. The families fill their basins at the well each morning.\n\nWhat do you teach, and what do you report?\n\nAnswer: Teach and demonstrate the same afternoon: household water treatment per local guidance (boiling or chlorine products), safe storage in a covered narrow-mouthed container with its own cup, a tippy tap built at the latrine and kitchen exits, and waste cleared and buried away from the cooking area. Report the cracked well apron and the leaking latrine to the environmental health officer and the assembly member for repair and relocation — the well is the probable source and engineering is the cure. Repeat the visit in two weeks to check the habits held, and report both diarrhoea cases through surveillance if not already notified.",
      },
      {
        type: "memory_trick",
        body: "Five Fs travel the disease — Fluids, Fingers, Fields, Flies, Food — and two habits block most of the roads: soap at the critical times and covered, narrow-mouthed storage. For vectors, chant: no standing water, no open waste, nets every night, screens on the windows.",
      },
      {
        type: "summary",
        body: "- The F-diagram maps contamination from stool to mouth: fluids, fingers, fields, flies and food — handwashing with soap at critical times cuts three routes at once.\n- Safe water = protected source (at least 30 metres from latrines), household treatment where needed, and covered narrow-mouthed storage with its own cup.\n- Sanitation: a latrine every household uses, handwashing stations at exits (tippy taps), waste contained, and food washed, cooked, covered and reheated thoroughly.\n- Vectors: mosquitoes (nets, screens, no standing water), flies (covered waste and food), rodents (closed food stores, cleared waste), snails (avoid infested water; provide safe sources).\n- The inspection walk starts at the breeding places and the water chain, teaches immediately, reports hazards — and returns to check that habits held.",
      },
    ],
    questions: [
      {
        topic: "Environmental Health",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why should drinking water be stored in a covered, narrow-mouthed container with a dedicated cup?",
        options: [
          "Narrow mouths keep the water cooler",
          "It prevents hands and dust from recontaminating treated water during dipping",
          "It is the cheapest container on the market",
          "Covered containers make water taste sweeter",
        ],
        correctIndex: 1,
        explanation:
          "A wide pot with a communal dipping cup recontaminates treated water within hours — every hand carries germs from the latrine to the water. The cover keeps out dust and flies; the narrow mouth and dedicated cup keep hands out.",
        courseSlug: "community-health-nursing-2",
      },
      {
        topic: "Environmental Health",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A well serves the compound. Where should the latrine be sited relative to it?",
        options: [
          "At least 30 metres away and downslope, so contamination cannot drain toward the well",
          "Five metres away, to share the same drainage",
          "Directly uphill of the well for gravity flushing",
          "Distance does not matter if the well is deep",
        ],
        correctIndex: 0,
        explanation:
          "A latrine close to, or draining toward, a well feeds contamination straight into the water table — hence the separation rule of about 30 metres with the latrine downslope, plus an intact apron and cover on the well.",
        courseSlug: "community-health-nursing-2",
      },
      {
        topic: "Environmental Health",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Children in a lakeside village have blood in their urine (schistosomiasis). Which vector link should your control message target?",
        options: [
          "Mosquitoes breeding in standing water",
          "Freshwater snails hosting the parasite in the lake",
          "Houseflies on uncovered food",
          "Rodents in the food store",
        ],
        correctIndex: 1,
        explanation:
          "Schistosomiasis cycles between infected people and freshwater snails — children who wade and swim in infested water are exposed. The messages: treat cases per protocol, avoid contact with infested water, and provide a safe water source so contact stops. Mosquitoes, flies and rodents carry other diseases.",
        courseSlug: "community-health-nursing-2",
      },
      {
        topic: "Environmental Health",
        type: "CLINICAL_SCENARIO",
        difficulty: "Hard",
        stem: "On a compound inspection you find old tins, blocked gutters and a sagging roof sheet holding rainwater behind the house. Which disease group is this landscape breeding, and what is the immediate action?",
        options: [
          "Food-borne disease — advise covering the food only",
          "Mosquito-borne disease — drain or cover the standing water and check that nets are used nightly",
          "Rodent-borne disease — set poison in the kitchen",
          "Nothing — standing water is only an aesthetic problem",
        ],
        correctIndex: 1,
        explanation:
          "Standing water is mosquito breeding ground — malaria and filariasis. The immediate actions are environmental (drain, fill, overturn, repair) plus protective (nets every night), with the family taught to patrol the compound weekly. Covering food alone leaves the vector breeding; kitchen poison endangers children; and calling it aesthetics misses the disease entirely.",
        courseSlug: "community-health-nursing-2",
      },
    ],
    flashcards: [
      {
        topic: "Environmental Health",
        front: "Name the five Fs of faecal-oral contamination.",
        back: "Fluids, Fingers, Fields, Flies, Food — the routes from stool to mouth; handwashing with soap at the critical times cuts three of them at once.",
      },
      {
        topic: "Environmental Health",
        front: "The household water safety chain?",
        back: "Protected source (covered, at least 30 metres from latrines) → household treatment where needed (boiling, chlorine, solar) → covered narrow-mouthed storage with a dedicated cup.",
      },
      {
        topic: "Environmental Health",
        front: "Which vector carries schistosomiasis, and what stops transmission?",
        back: "Freshwater snails host the worm in lakes and streams — avoid contact with infested water and provide safe water sources; treat cases per protocol.",
      },
      {
        topic: "Environmental Health",
        front: "What are the critical times for handwashing with soap?",
        back: "After defecation or cleaning a child, before preparing food, before eating, and before feeding a baby.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Guidelines on Sanitation and Health / WASH guidance",
        note: "Verify the current WHO editions used in your programme.",
      },
      {
        organization: "UNICEF",
        title: "WASH in communities and schools — practice guidance",
        note: "Educational source — verify current guidance.",
      },
      {
        organization: "Ghana Health Service",
        title: "Environmental health and CLTS community guidance",
        note: "Verify current national guidance with your district environmental health unit.",
      },
    ],
  },

  // ── 18 ─────────────────────────────────────────────────────
  {
    courseSlug: "community-health-nursing-2",
    moduleTitle: "School & Environmental Health",
    lessonTitle: "Non-Communicable Diseases in the Community",
    description:
      "Hypertension, diabetes, cancers and sickle cell now live in every village — community screening, lifestyle support and follow-up registers are the nurse's new front line.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe the major non-communicable diseases and their shared risk factors in Ghana.",
      "Explain the community screening opportunities — blood pressure, glucose, cervical and breast screening — and their referral pathways.",
      "Apply the WHO PEN approach at CHPS level, including registers, follow-up and support groups.",
    ],
    tags: ["ncd", "hypertension", "diabetes", "screening", "pen"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The wards your teachers described were full of infections; the clinics of your career will be full of both. Hypertension now touches a large share of Ghanaian adults, diabetes is rising in every district, and breast and cervical cancers arrive late because nobody looked early. Add sickle cell disease, asthma, mental ill-health — and the community nurse's workload has quietly changed shape.\n\nNon-communicable diseases (NCDs) share four great habits — and that is their weakness: attack the habits and screen for the diseases, and a CHPS nurse changes outcomes for hundreds of people. This lesson covers the burden, the screening, and the WHO PEN approach that organises it.",
      },
      {
        type: "text",
        title: "The core ideas: burden, risk and screening",
        body: "The shared risk factors are **TADI**: **Tobacco, Alcohol, unhealthy Diet (salt, sugar, heavy frying) and physical Inactivity** — plus indoor air pollution from cooking smoke and genetic inheritance, which is sickle cell's realm. The community messages translate into real Ghanaian kitchens: less bouillon cube and added salt in the stew, more vegetables from the market, fewer deep-fried foods, walking instead of the short ride — and for tobacco and alcohol, brief honest advice at every contact, because brief advice from a nurse measurably moves behaviour.\n\n**Screening** is where the nurse catches disease years before it announces itself: take **every adult's blood pressure** at every contact, whatever they came for — hypertension is silent until the stroke. Check **glucose** where testing exists, for the thirsty, thinning, frequently-infected patient. Teach **breast awareness** and perform clinical breast examination at contacts — a painless lump found early is a survivor. Cervical cancer screening by **VIA** — visual inspection with acetic acid — is available in many Ghanaian facilities and belongs in every woman's health conversation once screening eligibility begins. And sickle cell: know the disease in your community, support families with growth checks, infection vigilance and clinic follow-up, and offer genetic counselling information before couples plan families.",
      },
      {
        type: "text",
        title: "The WHO PEN approach and the follow-up discipline",
        body: "WHO's **PEN** — the Package of Essential NCD interventions for primary care — is built exactly for CHPS level: assess risk with questions and a blood pressure cuff, classify and treat hypertension and diabetes with simple protocols, counsel on diet, activity and tobacco with every contact, and define when to refer. The nurse's version adds three disciplines. **The register**: every person found with high blood pressure or sugar enters a list — because an NCD patient you do not follow is a patient you have already lost. **The defaulter tracker**: the missed clinic date is chased the same week, by phone or through a volunteer — chronic disease fails quietly in missed appointments. **The support group**: a monthly hypertension or diabetes club at the compound — peer pressure of the healthy kind, shared cooking lessons, medicines taken together, weights and pressures checked together — is the single most effective adherence tool the community owns.",
      },
      {
        type: "clinical_pearl",
        body: "Take every adult's blood pressure whenever they sit in front of you, for any reason. Hypertension is the silent majority of the NCD burden — the cuff finds it years before the stroke announces it, and two minutes of your time buys a decade of someone's life.",
      },
      {
        type: "case",
        title: "In the community",
        body: "At a market-day health screening you check the blood pressure of 50 adults. Twelve read 140/90 or higher; three of those read 160/100 or above on repeat. One woman mentions a painless breast lump she has watched for months, waiting for it to go.\n\nWhat is your plan for the twelve, the three, and the one?\n\nAnswer: For the three severe readings: refer urgently for medical assessment and treatment per protocol, with counselling today on salt, tobacco and follow-up. For the other nine: recheck within a week at the compound, enter all twelve in an NCD register, and counsel on the shared risk factors with a return date. For the woman with the lump: a painless breast lump in an adult is cancer until excluded — arrange clinical breast examination and referral now, explain kindly that early found is treatably found, and do not let waiting be the plan. Then book a repeat market screening in three months and report the numbers to the district.",
      },
      {
        type: "memory_trick",
        body: "TADI feeds the NCDs — Tobacco, Alcohol, Diet, Inactivity — and the community fights back with three tools: Screen at every contact, Counsel with brief advice, and Follow up with register, tracker and club. PEN = Package of Essential NCD interventions, the CHPS-level rulebook.",
      },
      {
        type: "summary",
        body: "- NCDs rising in Ghana: hypertension, diabetes, breast and cervical cancer, sickle cell disease, mental ill-health, asthma.\n- Shared risk factors — TADI: tobacco, alcohol, diet (salt, sugar, frying), inactivity; add cooking-smoke exposure and genetics.\n- Screen at every contact: blood pressure for all adults, glucose where available, breast awareness with examination, VIA cervical screening where offered, sickle cell support with counselling information.\n- WHO PEN organises CHPS-level care: risk assessment, protocol treatment, counselling, defined referral.\n- The three disciplines: an NCD register, a defaulter tracker, and a support club — because unfollowed chronic disease fails quietly.",
      },
    ],
    questions: [
      {
        topic: "NCDs in the Community",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which set of risk factors is shared by most non-communicable diseases?",
        options: [
          "Tobacco, alcohol, unhealthy diet and physical inactivity",
          "Mosquitoes, unsafe water and poor sanitation",
          "Bacteria, viruses and parasites",
          "Crowding, dust and cold nights",
        ],
        correctIndex: 0,
        explanation:
          "The four shared habits — tobacco, alcohol, diet and inactivity — drive hypertension, diabetes and several cancers; the second set drives communicable disease, and the third describes agents, not risks.",
        courseSlug: "community-health-nursing-2",
      },
      {
        topic: "NCDs in the Community",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A 52-year-old woman attends your CHPS compound for a wound dressing. She has never had her blood pressure checked. What is the correct nursing action?",
        options: [
          "Blood pressure can only be checked at a dedicated screening clinic",
          "Check her blood pressure today, during this contact, and record it",
          "Check only if she complains of headache",
          "Refer her to the district hospital for a pressure check",
        ],
        correctIndex: 1,
        explanation:
          "Every adult contact is a screening opportunity — hypertension is silent for years, and the cuff at a wound dressing costs two minutes. Waiting for symptoms or a special clinic is how strokes become the first sign.",
        courseSlug: "community-health-nursing-2",
      },
      {
        topic: "NCDs in the Community",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "VIA — visual inspection with acetic acid — is a community screening test for which cancer?",
        options: [
          "Breast cancer",
          "Cervical cancer",
          "Liver cancer",
          "Prostate cancer",
        ],
        correctIndex: 1,
        explanation:
          "VIA screens the cervix: applying dilute acetic acid highlights abnormal areas that need referral — a low-cost test suited to district and CHPS-level services, with treatment linked where available.",
        courseSlug: "community-health-nursing-2",
      },
      {
        topic: "NCDs in the Community",
        type: "CLINICAL_SCENARIO",
        difficulty: "Hard",
        stem: "A man treated for hypertension at your compound has missed two clinic dates. His neighbour mentions he feels fine and stopped the tablets. What is the correct response?",
        options: [
          "Respect his decision — he knows his body",
          "Wait for his next emergency to bring him back",
          "Trace him this week, recheck the pressure, counsel on silent risk, and restart follow-up per protocol",
          "Remove him from the register to keep records clean",
        ],
        correctIndex: 2,
        explanation:
          "The defaulter tracker exists exactly for this: trace within the week, recheck, and counsel honestly — hypertension feels fine precisely while it damages the heart, brain and kidneys. Feeling fine is the disease's camouflage, not a discharge note. Register removal hides the problem; waiting for the emergency surrenders to it.",
        courseSlug: "community-health-nursing-2",
      },
    ],
    flashcards: [
      {
        topic: "NCDs in the Community",
        front: "What is TADI?",
        back: "The four shared NCD risk factors: Tobacco, Alcohol, unhealthy Diet, physical Inactivity — the targets of every community lifestyle message.",
      },
      {
        topic: "NCDs in the Community",
        front: "What is WHO PEN?",
        back: "The Package of Essential NCD interventions for primary care — risk assessment, protocol-based treatment of hypertension and diabetes, counselling and defined referral, designed for CHPS level.",
      },
      {
        topic: "NCDs in the Community",
        front: "The three follow-up disciplines for community NCD care?",
        back: "The register (every patient listed), the defaulter tracker (missed dates chased the same week), and the support club (peer adherence through meetings, shared checks and counselling).",
      },
      {
        topic: "NCDs in the Community",
        front: "What is VIA and what is it for?",
        back: "Visual inspection with acetic acid — a low-cost cervical cancer screening test suited to district and CHPS level, with referral for abnormal findings.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Package of Essential Noncommunicable (PEN) Disease Interventions",
        note: "Verify the current WHO edition used in your programme.",
      },
      {
        organization: "World Health Organization",
        title: "Noncommunicable Diseases — fact sheets and country profiles",
        note: "Check for the latest WHO update.",
      },
      {
        organization: "Ghana Health Service",
        title: "National strategy for the prevention and control of noncommunicable diseases",
        note: "Verify the current national strategy with your district.",
      },
    ],
  },

  // ── 19 ─────────────────────────────────────────────────────
  {
    courseSlug: "community-health-nursing-2",
    moduleTitle: "School & Environmental Health",
    lessonTitle: "Community Diagnosis: The Mini Project",
    description:
      "Your community's health in your own hands — the full circle from permission and data collection to a prioritised report the district will actually use.",
    difficulty: "Clinical Reasoning",
    durationMin: 12,
    objectives: [
      "Define community diagnosis and describe the data sources — records, surveys, key informants, focus groups and observation.",
      "Explain analysis and prioritisation of community health problems using size, severity and feasibility.",
      "Apply the reporting, presentation and feedback steps that turn findings into community-owned action.",
    ],
    tags: ["community diagnosis", "needs assessment", "community assessment", "report"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A patient diagnosis names one person's problem; a **community diagnosis** names a community's — its health problems, their sizes, and the resources it already holds. It is the assessment step of community health nursing: the data that decides which programme deserves your limited hours, and the evidence that unlocks the district's support.\n\nAs a student you will run one as a mini-project — a defined community, a defined period, a real report. This lesson walks the full circle: entry, data, analysis, priorities, and a presentation that ends in action rather than a drawer.",
      },
      {
        type: "text",
        title: "Entry and data collection",
        body: "**Enter through the chief.** Before a single questionnaire is printed, seek permission from the traditional authority and the assembly member, explain your purpose at a brief community meeting, and agree how households will be visited. A community diagnosis that starts at the palace ends in action; one that starts with a clipboard ends in suspicion.\n\nThen triangulate — never trust a single source. **Existing records**: facility registers (ANC coverage, immunisation tallies, deliveries), district reports, school and census data. **Household surveys**: a short, pretested questionnaire on demographics, water and sanitation, net use, illness in the previous two weeks — walk the compound with local guides. **Key informant interviews**: the chief, the assembly member, teachers, religious leaders, experienced mothers. **Focus group discussions**: separate groups of women, men and youth, because they will not say the same things in the same room. **Observation and your own inspection walk**: water sources, latrines, waste, vendors, the school compound. Throughout: informed consent, confidentiality, and respect for refusal — the ethics of research live in the community's daily sight of you.",
      },
      {
        type: "text",
        title: "Analysis, prioritisation and the report",
        body: "Turn data into rates and compare: ANC coverage, immunisation coverage, the proportion of households with safe water, under-five illness episodes, school attendance of girls — each against the district average and last year's figures, and each mapped by hamlet if the numbers allow. Alongside problems, list **resources**: functioning boreholes, active volunteers, a vibrant mothers' club, a willing chief — because interventions build on resources, not on shame.\n\n**Prioritise** with the classic three questions for every problem: how **big** is it, how **severe** is it, and how **feasible** is action with what exists? Diarrhoea affecting a third of under-fives with a repairable water source beats a rarer problem needing a donor. Then write the report in the standard shape — background, methods, findings, prioritised problems, recommendations — and present it twice: at a **community durbar**, where the community hears its own numbers and chooses to act, and to the **district**, where resources are allocated. Agree an evaluation date before you close the meeting: a diagnosis without follow-up is a photograph, not a plan.",
      },
      {
        type: "clinical_pearl",
        body: "Numbers belong to the people who gave them. When the durbar hears that six in ten households lack a latrine — from their own answers, read in their own language — the latrine becomes the community's project, not the nurse's. Ownership is the intervention that makes every other intervention work.",
      },
      {
        type: "case",
        title: "In the community",
        body: "Your mini-project covers a community of about 3,000 people. The registers show 62 percent ANC coverage and 71 percent of children fully immunised; the household survey finds one functioning borehole for 300 households, with 40 percent of families still using the stream; key informants name teenage pregnancy as the community's loudest worry; observation finds refuse collecting at the market. The chief is active, and a mothers' club meets monthly.\n\nHow do you analyse, prioritise and report?\n\nAnswer: Analysis: ANC and immunisation sit below district averages with a defaulter pattern concentrated in two far hamlets; water is the largest and most feasible problem; teenage pregnancy is severe but longer-term. Prioritisation by size-severity-feasibility: first, household water safety and borehole repair — the biggest health yield, feasible with district WASH support and the active chief; second, immunisation and ANC defaulter tracing through the mothers' club — nurse-led and immediately feasible; third, teenage pregnancy — a school club and youth-friendly services as the long game. Report to the durbar in the local language with the community's own numbers, then to the district with the three prioritised problems — and set the evaluation date before you leave the compound.",
      },
      {
        type: "quiz_prompt",
        title: "Which source, which question?",
        body: "For each of these, which data source answers it best: immunisation coverage, why nets are not used, the number of households, why the chief's support matters?\n\nAnswer: Immunisation coverage — facility EPI registers, cross-checked with the household survey. Why nets are not used — focus group discussions, where reasons surface in conversation. Households — census or a community enumeration. Why the chief's support matters — key informant interviews and your own entry experience: permission, mobilisation and ownership all flow from the palace.",
      },
      {
        type: "memory_trick",
        body: "C-O-D-E the community: Collect from records, surveys, informants, groups and observation; Organise into rates and maps; Decide priorities by size, severity and feasibility; Engage — durbar, district, and an evaluation date. And the first rule never changes: enter through the chief.",
      },
      {
        type: "summary",
        body: "- Community diagnosis identifies a community's health problems and resources — the assessment step of community health nursing.\n- Enter through the chief and the assembly member; consent, confidentiality and respect for refusal are visible ethics.\n- Triangulate five sources: facility and district records, household surveys, key informant interviews, focus groups (separate by sex and age), and observation walks.\n- Analyse into rates and maps, compare with district averages, and list resources alongside problems.\n- Prioritise by size, severity and feasibility — then report to the community durbar and the district in the standard shape.\n- Set the evaluation date before closing: a diagnosis without follow-up is a photograph, not a plan.",
      },
    ],
    questions: [
      {
        topic: "Community Diagnosis",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is a community diagnosis?",
        options: [
          "A medical diagnosis of the sickest person in the village",
          "The identification of the health problems, needs and resources of a defined community",
          "The district's annual budget for health",
          "A survey of clinic staff opinions",
        ],
        correctIndex: 1,
        explanation:
          "Community diagnosis parallels patient diagnosis: it names the community's problems, measures their size, and — crucially — inventories its resources, forming the basis for programme planning.",
        courseSlug: "community-health-nursing-2",
      },
      {
        topic: "Community Diagnosis",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which data source is best for learning WHY households do not use their bed nets?",
        options: [
          "The district annual report",
          "Focus group discussions with community members",
          "The clinic's birth register",
          "The census household count",
        ],
        correctIndex: 1,
        explanation:
          "Reasons live in conversation: focus groups surface the heat, the insecticide fears and the torn nets that registers and census counts can never show. Reports and registers give the how many; groups give the why.",
        courseSlug: "community-health-nursing-2",
      },
      {
        topic: "Community Diagnosis",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which three criteria drive the prioritisation of community health problems?",
        options: [
          "Size, severity and feasibility of intervention",
          "Cost, colour of the report, and committee preference",
          "Distance, drainage and donor interest",
          "Age of the data, age of the nurse, age of the chief",
        ],
        correctIndex: 0,
        explanation:
          "How many people are affected, how seriously, and whether the community and district can realistically act — together these rank problems so limited energy goes where it yields most health.",
        courseSlug: "community-health-nursing-2",
      },
      {
        topic: "Community Diagnosis",
        type: "CLINICAL_SCENARIO",
        difficulty: "Hard",
        stem: "You have completed data collection in a community of 3,000. What makes your final presentation a community diagnosis rather than a filed report?",
        options: [
          "A bound copy submitted to the district office only",
          "Findings presented at a community durbar in the local language, priorities chosen with the community, district engaged for resources, and an evaluation date set",
          "A poster at the CHPS compound in English",
          "A presentation to your classmates alone",
        ],
        correctIndex: 1,
        explanation:
          "The circle closes when the community hears its own numbers, owns the priorities, and holds an evaluation date — with the district engaged to back the plan. Office copies, English posters and classroom presentations inform; they do not mobilise.",
        courseSlug: "community-health-nursing-2",
      },
    ],
    flashcards: [
      {
        topic: "Community Diagnosis",
        front: "Define community diagnosis in one sentence.",
        back: "The identification and measurement of the health problems, needs and resources of a defined community, used as the basis for planning health action.",
      },
      {
        topic: "Community Diagnosis",
        front: "Name the five data sources of the mini-project.",
        back: "Existing records and registers, household surveys, key informant interviews, focus group discussions (separated by sex and age), and direct observation of the environment.",
      },
      {
        topic: "Community Diagnosis",
        front: "The three prioritisation criteria?",
        back: "Size of the problem, severity of its consequences, and feasibility of intervention with the resources that exist.",
      },
      {
        topic: "Community Diagnosis",
        front: "What does it mean to triangulate, and why do it?",
        back: "Compare multiple sources — registers, surveys, interviews, groups, observation — because each source errs differently; where they agree, you can trust the finding.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
      {
        organization: "World Health Organization",
        title: "Community engagement and needs assessment guidance",
        note: "Educational source — verify current WHO guidance.",
      },
      {
        organization: "Elsevier",
        title: "Stanhope & Lancaster: Public Health Nursing — Population-Centered Health Care in the Community",
        note: "Classic textbook — verify the current edition used by your programme.",
      },
    ],
  },
];
