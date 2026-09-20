// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 4, Semester 1 — Batch B (Obstetric Emergencies / Advanced
// Neonatal Care / Community Midwifery — final year)
// 19 lessons anchored to prisma/seed-data/anchors/y4s1-b.json
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "obstetric-emergencies",
    moduleTitle: "The Big Bleeds",
    lessonTitle: "Postpartum Haemorrhage: The Emergency Response",
    description:
      "Bleeding after birth can take a life in minutes. This lesson rehearses the full team response — from rubbing up a contraction to calling theatre — so your hands know what to do before worry finds time to arrive.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe how postpartum haemorrhage is recognised, including the signs of shock that matter more than any blood volume estimate.",
      "Explain the structured emergency response built around the four Ts and the drugs and manoeuvres that control each.",
      "Apply the response as the midwife in charge at a CHPS compound, deciding what must happen before and during referral.",
    ],
    tags: ["pph", "emergency", "shock", "uterotonics", "obstetric emergencies"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Postpartum haemorrhage is the bleeding that will not wait for you to think. Defined as blood loss of 500 ml or more within 24 hours of birth, it remains a leading killer of mothers, doing its worst work where anaemia has already emptied a woman's reserves — a low-haemoglobin mother can shock after a loss that looks modest on the pad.\n\nThe good news is that the response runs on a drill, not on genius. This lesson rehearses it from the first gush to the doors of theatre: call for help, resuscitate, find the cause, control the bleeding, decide on transfer.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Every PPH has one of four causes — the **four Ts**: Tone (the relaxed, boggy uterus, about seven in ten cases), Tissue (retained placenta or membranes), Trauma (tears of cervix, vagina or perineum) and Thrombin (a clotting problem, usually arriving late with continuous oozing). Meanwhile your resuscitation runs in parallel: shout for help, rub the uterus firm, empty the bladder with a catheter, give oxytocin 10 units IM or IV, and set up two wide-bore cannulas with fluids running.\n\nIf bleeding continues, escalate the drugs: ergometrine 0.2 mg IM (never in a woman with high blood pressure), misoprostol 400 micrograms under the tongue — heat-stable and ideal where there is no fridge — and tranexamic acid 1 g IV, which works best within three hours of the start of bleeding. Then examine for tears and retained tissue, and keep theatre informed: a uterus that will not firm, a placenta that will not come, or a tear that will not stop all belong in experienced hands. Watch the woman, not the bucket — pale skin, a pulse over 110, a rising breathing rate and restlessness are your early warning of shock.",
      },
      {
        type: "clinical_pearl",
        body: "Treat the mother, not the mop. In a chronically anaemic woman a loss the textbooks call moderate can collapse her circulation before you finish estimating it.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are alone on night duty at a CHPS compound when a G4P3 mother delivers her baby. Ten minutes later blood pools beneath her, the fundus feels soft and boggy, and she says the room is spinning. Her pulse is 118 and her skin is damp.\n\nWhat are your first actions, and why must she be stabilised before anyone discusses transport?\n\nAnswer: Shout for help, then attack the commonest cause first: rub up the contraction, catheterise the bladder and give oxytocin 10 units IM at once, following with misoprostol 400 micrograms sublingually if bleeding continues. Put up two IV lines with fluids, give tranexamic acid 1 g IV within the three-hour window, keep her warm and elevate her legs. Once the uterus is firm, check the placenta and inspect for tears. Referral is arranged with a call ahead — but a woman moved while still bleeding and shocked is referred to theatre and to the grave at the same time. Stabilise first, move second.",
      },
      {
        type: "memory_trick",
        body: "The four Ts of the bleeding mother: Tone is the lazy balloon, Tissue is the forgotten bits, Trauma is the torn road, and Thrombin is the soup that will not set. Check them in that order and you will rarely be lost.",
      },
      {
        type: "summary",
        body: "- PPH is 500 ml or more within 24 hours of birth — but treat the signs of shock, not the estimate.\n- Four Ts: Tone (most common), Tissue, Trauma, Thrombin — treat while you resuscitate in parallel.\n- First response: call for help, rub the uterus, empty the bladder, oxytocin 10 units, two IV lines with fluids.\n- Escalate with ergometrine (not in hypertension), misoprostol 400 micrograms sublingually, tranexamic acid 1 g IV within 3 hours.\n- Bleeding you cannot control belongs in theatre — call ahead and transfer once resuscitation is running.",
      },
    ],
    questions: [
      {
        topic: "Postpartum Haemorrhage",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A baby has just been born and the mother starts bleeding heavily. The fundus feels soft and boggy. What is your fastest first action?",
        options: [
          "Rub the uterus to firm it up while calling for help",
          "Start an IV infusion before touching the uterus",
          "Give ergometrine 0.2 mg IM and wait for the uterus to respond",
          "Perform a vaginal examination to look for tears",
        ],
        correctIndex: 0,
        explanation:
          "A soft boggy fundus means atony — the commonest cause of PPH. Rubbing up a contraction costs nothing and works in seconds; the IV and the drugs follow in parallel, and tears are examined once tone is restored.",
        courseSlug: "obstetric-emergencies",
      },
      {
        topic: "Postpartum Haemorrhage",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "At a health centre you are managing continuing postpartum bleeding in a mother whose booking blood pressure was 168/110. Which uterotonic plan is safest for her?",
        options: [
          "Ergometrine 0.2 mg IM — the strongest uterotonic available",
          "Carboprost IM, repeated every 15 minutes",
          "Oxytocin 10 units, with misoprostol 400 micrograms sublingually if bleeding continues",
          "Tranexamic acid 1 g IM, since she is hypertensive",
        ],
        correctIndex: 2,
        explanation:
          "Ergometrine and carboprost can send blood pressure dangerously high in pre-eclamptic women. Oxytocin and misoprostol are safe and effective; tranexamic acid is a valuable antifibrinolytic but is given IV, not IM.",
        courseSlug: "obstetric-emergencies",
      },
      {
        topic: "Postpartum Haemorrhage",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is tranexamic acid emphasised in the PPH drill, and how should it be given?",
        options: [
          "It replaces clotting factors and must be given after one litre of measured loss",
          "It is a uterotonic best given sublingually within 30 minutes",
          "It works only in women with known clotting disorders",
          "It slows clot breakdown and works best as 1 g IV within 3 hours of the start of bleeding",
        ],
        correctIndex: 3,
        explanation:
          "Tranexamic acid stabilises clots by blocking fibrin breakdown, and evidence shows it saves lives when given early — within three hours. It is not a uterotonic, and it benefits all bleeding women, not only those with a diagnosed clotting problem.",
        courseSlug: "obstetric-emergencies",
      },
    ],
    flashcards: [
      {
        topic: "PPH",
        front: "What is primary PPH, and why does it kill so fast in Ghana?",
        back: "Blood loss of 500 ml or more within 24 hours of birth. Many mothers are already anaemic, so a moderate loss can tip them into shock — treat the woman's signs, not the volume.",
      },
      {
        topic: "PPH",
        front: "Name the four Ts of PPH in order of frequency.",
        back: "Tone (atony, about 70%), Tissue (retained placenta or bits), Trauma (tears), Thrombin (clotting failure). Tone first — rub the uterus before you hunt for anything else.",
      },
      {
        topic: "PPH",
        front: "Which uterotonics are safe in a hypertensive mother?",
        back: "Oxytocin and misoprostol. Ergometrine is avoided — its vasoconstriction sends blood pressure dangerously high.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Managing complications in pregnancy and childbirth: a guide for midwives and doctors",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565492",
      },
      {
        organization: "World Health Organization",
        title: "WHO recommendations for the prevention and treatment of postpartum haemorrhage",
        year: "2022",
        url: "https://www.who.int/publications/i/item/9789240038734",
      },
      {
        organization: "Elsevier",
        title: "Myles' Textbook for Midwives, 17th edition",
        year: "2019",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "obstetric-emergencies",
    moduleTitle: "The Big Bleeds",
    lessonTitle: "When Bleeding Won't Stop: The Retained Placenta",
    description:
      "The third stage usually ends quietly, but when the placenta stays behind it becomes both a bleeding problem and a surgical one. This lesson covers the patience, the manoeuvres and the safe limits of removing what will not come.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe what counts as a retained placenta and the signs that the placenta has, or has not, separated.",
      "Explain controlled cord traction and why unguarded pulling is dangerous.",
      "Apply a safe management plan, including referral for manual removal and recognition of the abnormally adherent placenta.",
    ],
    tags: ["retained placenta", "haemorrhage", "third stage", "manual removal", "uterine inversion"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The placenta is the third baby of every birth, and the third stage is over only when it is out and complete. We call it retained when the placenta is still inside 30 minutes after the baby — a delay that matters, because every extra minute adds bleeding and infection risk. Roughly one birth in twenty will test you this way.\n\nThe skill is knowing the difference between a placenta that is separating and one that is stuck. A separating placenta gives you signs; a truly adherent one gives you silence. Between the two sits the commonest scenario — a placenta that needs help to finish its journey, which oxytocin and patient technique usually deliver.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Watch for the **signs of separation**: the cord visibly lengthens, a small gush of blood appears, and the uterus rises and becomes firm and globular as the placenta drops into the lower segment. Only then attempt controlled cord traction: clamp the cord, hold it near the vulva, wait for a contraction and pull gently downwards while your other hand pushes the uterus up above the pubic bone — that counter-pressure guards against inverting the uterus. Give oxytocin with the shoulders or immediately after birth to speed separation; ergometrine is best avoided before the placenta is out, because it can clamp the cervix and trap the placenta inside.\n\nIf the placenta remains after oxytocin and careful traction — or if bleeding is heavy — the mother needs manual removal in theatre with proper analgesia or anaesthesia, followed by a preventive dose of antibiotics. Check membranes and vessels on every placenta you deliver: a missing piece or a succenturiate lobe behaves exactly like a retained placenta. And if you find the placenta genuinely grown into the wall — no cleavage plane, no separation signs, a previous caesarean scar in the history — stop. That is placenta accreta spectrum: dig for it and she can bleed to death on your table. Refer her to the surgeons.",
      },
      {
        type: "clinical_pearl",
        body: "Never pull a cord that is not pulling back. Unguarded traction on an unseparated placenta can invert the uterus in seconds — one of the most catastrophic events in midwifery.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Forty minutes after a normal birth at your health centre the placenta has not delivered. The cord still ends at the vulva, there has been no gush of blood, the fundus is round and high, and blood loss stands at about 400 ml. The mother is stable but tired.\n\nWhat is happening, and what are your next steps over the following hour?\n\nAnswer: With no lengthening cord, no gush and a round high fundus, the placenta has not separated — patience plus oxytocin comes first. Empty the bladder, keep an IV running, give oxytocin 10 units IV, and recheck the signs every few minutes; attempt controlled cord traction with counter-pressure only when separation appears. If another 20 to 30 minutes pass or bleeding grows, she needs referral for manual removal in theatre with antibiotic cover — not a repeat of vigorous pulling at the bedside, and certainly no fundal pressure.",
      },
      {
        type: "memory_trick",
        body: "Before you ever hold the cord, sing the Separation Song: the cord lengthens, the gush arrives, the fundus turns globular and climbs. No song, no traction.",
      },
      {
        type: "summary",
        body: "- A placenta undelivered 30 minutes after the baby is retained — the clock matters for bleeding and infection.\n- Separation signs: cord lengthens, gush of blood, uterus firm, globular and risen. No signs, no traction.\n- Controlled cord traction = gentle pull on the cord with the other hand pushing the uterus up — the guard against inversion.\n- Ergometrine before the placenta is out can trap it behind a clamped cervix.\n- Manual removal belongs in theatre with anaesthesia and antibiotic cover; no cleavage plane with a scarred uterus suggests accreta — refer, do not dig.",
      },
    ],
    questions: [
      {
        topic: "Retained Placenta",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which set of findings tells you the placenta HAS separated and controlled cord traction may be attempted?",
        options: [
          "Cord shortens, fundus soft and wide, no bleeding",
          "Cord lengthens, a gush of blood appears, fundus firm and globular",
          "Cord unchanged, fundus rising with a constant trickle",
          "Cord slack, fundus below the umbilicus, dark lochia",
        ],
        correctIndex: 1,
        explanation:
          "Those three signs — lengthening cord, sudden gush, and a firm globular risen uterus — mean the placenta has sheared off the wall and sits in the lower segment, ready for gentle traction.",
        courseSlug: "obstetric-emergencies",
      },
      {
        topic: "Retained Placenta",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During controlled cord traction, what is the purpose of the hand placed above the pubic bone?",
        options: [
          "To massage the uterus and strengthen contractions",
          "To measure fundal height for the record",
          "To compress the bladder and empty it",
          "To push the uterus upwards and prevent inversion during traction",
        ],
        correctIndex: 3,
        explanation:
          "Counter-traction pushes the body of the uterus up while the cord pulls gently down, keeping the uterus in line and preventing it from being dragged inside-out. That one hand is the difference between a manoeuvre and a disaster.",
        courseSlug: "obstetric-emergencies",
      },
      {
        topic: "Retained Placenta",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman with two previous caesarean scars bleeds heavily in the third stage; the placenta shows no signs of separation and gentle examination finds no cleavage plane. What is the correct course?",
        options: [
          "Stop, resuscitate, and refer urgently to a surgical unit — suspect placenta accreta spectrum",
          "Continue firm controlled cord traction until the placenta delivers",
          "Give ergometrine 0.2 mg IM to expel the placenta",
          "Perform manual removal at the bedside under sedation",
        ],
        correctIndex: 0,
        explanation:
          "A placenta that will not separate in a scarred uterus may be abnormally adherent. Forcible removal causes torrential haemorrhage; the safe plan is resuscitation and urgent surgical referral with blood available.",
        courseSlug: "obstetric-emergencies",
      },
    ],
    flashcards: [
      {
        topic: "Retained Placenta",
        front: "How long before a placenta counts as retained, and why act?",
        back: "30 minutes after birth. Beyond this, bleeding and infection risk climb — plan oxytocin, then manual removal in theatre if needed.",
      },
      {
        topic: "Retained Placenta",
        front: "Ergometrine in the third stage — friend or foe?",
        back: "Foe if given before the placenta delivers: it can trap the placenta behind a clamped cervix. Oxytocin is the uterotonic of the third stage.",
      },
      {
        topic: "Retained Placenta",
        front: "Unguarded cord traction risks which emergency?",
        back: "Uterine inversion — the uterus turns inside-out, causing shock and catastrophic bleeding. Guard every pull with a hand pushing the uterus up.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Managing complications in pregnancy and childbirth: a guide for midwives and doctors",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565492",
      },
      {
        organization: "World Health Organization",
        title: "WHO recommendations for the prevention and treatment of postpartum haemorrhage",
        year: "2022",
        url: "https://www.who.int/publications/i/item/9789240038734",
      },
      {
        organization: "Elsevier",
        title: "Obstetrics: Normal and Problem Pregnancies (Gabbe), 8th edition",
        year: "2021",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "obstetric-emergencies",
    moduleTitle: "Labour Emergencies",
    lessonTitle: "Obstructed Labour: The Emergency Response",
    description:
      "Obstructed labour kills mothers and babies and leaves survivors with fistulas. This lesson trains your eye on the labour that is strong but going nowhere — and your hands on the response that must never be delayed.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the clinical picture of obstructed labour, from the partograph to Bandl's ring.",
      "Explain why oxytocin is forbidden in obstruction and why relief is surgical.",
      "Apply the emergency response at health-centre level, including the referral decision.",
    ],
    tags: ["obstruction", "emergency", "labour", "partograph", "cpd", "fistula"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Obstructed labour is the tragedy of contractions without progress: the uterus works harder and harder, but the baby cannot pass. Left alone it ends in rupture, a dead baby, a dead or devastated mother — and for survivors, the leaking fistula that too many women in our region know personally. The cause is usually a pelvis too small for the head (cephalopelvic disproportion), a head in a bad position such as deep transverse arrest, or occasionally a brow, a shoulder or a fibroid in the way.\n\nYour protection is the partograph, vigilance about descent, and a culture of acting early. This lesson is about seeing the trap while there is still time — and about the discipline of stopping rather than pushing when you find it.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The picture builds quietly and then loudly. Strong, frequent contractions but a cervix that will not open and a head that will not descend; heavy moulding and growing caput on vaginal examination; an exhausted mother who is dry and ketotic with dark scanty urine; a bladder that will not empty properly; a fetus becoming distressed; and most ominous of all, a **Bandl's ring** — a visible groove rising between the thickening upper segment and the thinning lower segment, the last warning before rupture. On the partograph, the alert line crossed with no descent is your invitation to reassess; the action line crossed with good contractions and no progress is obstruction until proven otherwise.\n\nThe response is STOP. Stop oxytocin — augmenting an obstruction is how uteri rupture; never do it. Put up IV fluids to correct dehydration and ketosis, catheterise the bladder, give antibiotics if the membranes have been open long, position her on her side, and arrange transfer for caesarean section at the district hospital, calling ahead with a clear handover. Document times and findings, prepare for PPH, and explain honestly to the family that the baby will be born by operation — this is a labour relieved by surgery, not by waiting.",
      },
      {
        type: "clinical_pearl",
        body: "Oxytocin is for the tired uterus, never for the blocked passage. When contractions are strong and descent is zero, augmentation is not persistence — it is the road to rupture.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A P2 mother has been in labour since midnight. At 10:00 the cervix is 8 cm with the head 3/5 palpable above the brim; by 14:00 the cervix is still 8 cm and the head still 3/5. Contractions are 4 in 10 and strong, with marked moulding, a swollen anterior lip and urine that is dark and scanty. The partograph crossed the action line an hour ago.\n\nWhat is your diagnosis and your plan for the next two hours?\n\nAnswer: Strong contractions with a stationary cervix, a high head, moulding and poor urine output make obstructed labour the working diagnosis — likely cephalopelvic disproportion or a deep transverse arrest. Do not augment: stop any oxytocin, start IV fluids, catheterise to monitor urine, and arrange urgent referral for caesarean section with a call-ahead handover. Explain to her and the family, record everything, and prepare for postpartum haemorrhage and a baby who may need resuscitation at birth.",
      },
      {
        type: "memory_trick",
        body: "Obstruction whispers in three places before it screams: the partograph (cervix frozen), the bladder (dark, scanty urine) and the uterus (the Bandl groove rising). Hear the whisper — act on the first, never the third.",
      },
      {
        type: "summary",
        body: "- Obstruction = good contractions with no descent and no dilatation; commonest causes are CPD and malposition.\n- Warning signs: partograph crossing the action line, moulding with caput, exhaustion with dark scanty urine, fetal distress, Bandl's ring.\n- Bandl's ring means the lower segment is at its limit — rupture is next.\n- STOP: never augment with oxytocin; IV fluids, catheter, antibiotics if indicated, refer for caesarean.\n- Untreated obstruction ends in rupture, fetal death, sepsis, PPH and fistula — relief is surgical.",
      },
    ],
    questions: [
      {
        topic: "Obstructed Labour",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A labouring woman has strong contractions 5 in 10, but the cervix has remained 7 cm for six hours and the head has not descended. She has marked moulding and is becoming exhausted. What is the correct management?",
        options: [
          "Augment with oxytocin to overcome the resistance",
          "Encourage pushing to force the head past the brim",
          "Stop any augmentation, resuscitate with IV fluids, and refer for caesarean section",
          "Rupture the remaining membranes to speed the labour",
        ],
        correctIndex: 2,
        explanation:
          "Strong contractions with no progress, moulding and a high head mean mechanical obstruction. Augmentation or pushing against it invites rupture — the treatment is resuscitation and surgical delivery.",
        courseSlug: "obstetric-emergencies",
      },
      {
        topic: "Obstructed Labour",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why is oxytocin contraindicated when labour is obstructed?",
        options: [
          "It increases the force against a blocked passage and can rupture the uterus",
          "It causes the cervix to close tightly",
          "It stops the placenta from separating later",
          "It masks fetal heart abnormalities",
        ],
        correctIndex: 0,
        explanation:
          "Oxytocin multiplies contraction strength. Against an obstruction that force has nowhere to go and tears the thinned lower segment — uterine rupture, one of the deadliest outcomes in obstetrics.",
        courseSlug: "obstetric-emergencies",
      },
      {
        topic: "Obstructed Labour",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You examine a mother in prolonged labour and see a visible groove rising between the upper and lower parts of her uterus. What does this sign indicate?",
        options: [
          "The placenta has separated and delivery is imminent",
          "A full bladder that needs catheterisation only",
          "Normal descent into the birth canal has begun",
          "Bandl's ring — the uterus is close to rupture and she needs immediate surgery",
        ],
        correctIndex: 3,
        explanation:
          "A pathological retraction ring (Bandl's ring) forms as the upper segment thickens and the lower segment thins under obstructed labour. It is the final warning before rupture — this woman needs theatre, not observation.",
        courseSlug: "obstetric-emergencies",
      },
    ],
    flashcards: [
      {
        topic: "Obstructed Labour",
        front: "Define obstructed labour in one line.",
        back: "Failure of descent and dilatation despite adequate contractions — a mechanical block, most often CPD or a malpositioned head.",
      },
      {
        topic: "Obstructed Labour",
        front: "What is Bandl's ring and what does it demand?",
        back: "A groove between the thickened upper and thinned lower uterine segments in obstructed labour — the last warning before rupture; immediate surgical referral.",
      },
      {
        topic: "Obstructed Labour",
        front: "Why does the urine go dark and scanty in obstructed labour?",
        back: "Dehydration, exhaustion and ketosis from prolonged labour, plus bladder compression and retention — one of the quietest early warning signs.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Managing complications in pregnancy and childbirth: a guide for midwives and doctors",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565492",
      },
      {
        organization: "World Health Organization",
        title: "Intrapartum care for a positive childbirth experience",
        year: "2018",
        url: "https://www.who.int/publications/i/item/9789241550215",
      },
      {
        organization: "Elsevier",
        title: "Myles' Textbook for Midwives, 17th edition",
        year: "2019",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "obstetric-emergencies",
    moduleTitle: "Labour Emergencies",
    lessonTitle: "Emergency Birth: No Time to Transfer",
    description:
      "Some babies refuse to wait for the district hospital. When a breech arrives in your hands or shoulders jam inside the mother, the drills in this lesson are the difference between a story and a tragedy.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the untransferable births a midwife must manage: the imminent breech and shoulder dystocia.",
      "Explain the breech sequence (hands off, Lovset's, head delivery) and the HELPERR sequence for shoulder dystocia.",
      "Apply both drills under pressure, with timing, documentation and family communication.",
    ],
    tags: ["emergency birth", "drills", "breech", "shoulder dystocia", "labour emergencies"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Emergencies are rehearsed, not improvised. Two situations will test whether the drills are written into your hands: the breech that delivers before you can transfer, and the shoulders that jam after the head is born. Neither gives you time to look anything up — which is exactly why we rehearse them until the sequence runs itself.\n\nThe frame for both is the same: stay calm, call for help, announce the time, and work the drill step by step. Roughly half of shoulder dystocias happen to babies with no risk factors at all — meaning every birth you attend carries a small chance of this. Preparation is not paranoia; it is professionalism.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**The imminent breech.** Position the mother on her back with hips at the edge of the bed and keep your hands OFF until the scapula appears — the body dangling under gravity does more than your hands ever could, and early pulling flexes the head back against the brim. When the scapula shows, deliver the arms with Lovset's manoeuvre (gentle rotation to bring each arm down), then deliver the head keeping it flexed — cradle the jaw and shoulders without hooking a finger into the mouth, with an assistant applying suprapubic pressure. The cord must not be squeezed for long: deliver within the next contractions and have resuscitation ready.\n\n**Shoulder dystocia.** The head is born and retracts against the perineum — turtle sign. Announce the time, call help, and refuse to pull on the head or push on the fundus: fundal pressure drives the anterior shoulder harder into the bone. Run **HELPERR**: call for Help, consider Episiotomy, bring the Legs into McRoberts (sharp hip flexion), apply supraPubic pressure, Enter the vagina for rotational manoeuvres, Remove the posterior arm, and if needed Roll the mother onto all fours. Most cases release with McRoberts and suprapubic pressure alone. Aim for delivery of the body within about five minutes, then check the baby for brachial plexus injury and clavicle fracture, and debrief the parents honestly.",
      },
      {
        type: "clinical_pearl",
        body: "The clock starts when the head is born. Say the time aloud, have someone write it down, and work HELPERR without pulling on the neck or pushing on the fundus — the two moves that turn dystocia into injury.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At 02:00 in your health centre a primigravida pushes unexpectedly; the head is born quickly and then jams, chin tight against the perineum — turtle sign. No one can hear the heartbeat and the clock in your head has already started.\n\nWhat are your next actions in order, and what must you never do?\n\nAnswer: This is shoulder dystocia. Shout for help, announce and record the time, and go straight to McRoberts — flex her hips hard onto her abdomen — with an assistant applying suprapubic pressure above the pubic bone. If the shoulders do not come, enter for rotational manoeuvres and deliver the posterior arm, or roll her onto all fours. Never pull on the head or neck, and never apply fundal pressure — both deepen the impaction and injure the baby. Once delivered, resuscitate if needed, examine for clavicle or arm injury, and document times and manoeuvres for the record and for the parents' honest debrief.",
      },
      {
        type: "memory_trick",
        body: "HELPERR unlocks the jammed door: Help, Episiotomy, Legs (McRoberts), supraPubic Pressure, Enter (rotate), Remove the posterior arm, Roll. And for the breech: hands off till the shoulder blades — the dangling baby delivers itself; the impatient hand delivers disaster.",
      },
      {
        type: "summary",
        body: "- Emergency birth drills — imminent breech and shoulder dystocia — are rehearsed, not improvised.\n- Breech: hands off until the scapula, Lovset's for the arms, head kept flexed, assistant suprapubic pressure.\n- Shoulder dystocia: turtle sign starts the clock; aim for the body within about five minutes.\n- HELPERR sequence; never fundal pressure, never pulling on the head and neck.\n- After delivery: examine the baby for injury, document times and manoeuvres, debrief the family.",
      },
    ],
    questions: [
      {
        topic: "Emergency Birth",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A baby's head has just been born and retracts against the perineum (turtle sign). What is your FIRST manoeuvre pair?",
        options: [
          "Fundal pressure with steady traction on the head",
          "Immediate episiotomy alone, then wait for the next contraction",
          "Roll the mother onto all fours before touching anything else",
          "Call for help, note the time, and bring the legs into McRoberts with suprapubic pressure",
        ],
        correctIndex: 3,
        explanation:
          "Help, timing and McRoberts with suprapubic pressure come first — they release most cases. Fundal pressure and head traction are forbidden because they deepen the impaction and injure the brachial plexus.",
        courseSlug: "obstetric-emergencies",
      },
      {
        topic: "Emergency Birth",
        type: "MCQ",
        difficulty: "Easy",
        stem: "During an unexpected vaginal breech birth, until which point do you keep your hands off the baby?",
        options: [
          "Until the umbilicus appears, then you may pull gently",
          "Until the scapula (shoulder blade) appears",
          "Until the arms deliver, then you may pull",
          "Until the nape of the neck is visible inside",
        ],
        correctIndex: 1,
        explanation:
          "The dangling baby delivers itself to the level of the scapula; gravity keeps the arms down and the head flexed. Pulling earlier traps the arms and extends the head into the pelvis — the classic self-made disaster.",
        courseSlug: "obstetric-emergencies",
      },
      {
        topic: "Emergency Birth",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is fundal pressure contraindicated in shoulder dystocia?",
        options: [
          "It drives the anterior shoulder harder against the pubic bone and can rupture the uterus",
          "It causes the cord to prolapse around the neck",
          "It makes the mother push before she is ready",
          "It reduces blood flow to the baby only after birth",
        ],
        correctIndex: 0,
        explanation:
          "Fundal pressure adds force from above onto a shoulder already wedged under the symphysis — deepening the impaction and risking uterine rupture. The help must come from below and beside: McRoberts, suprapubic pressure, internal manoeuvres.",
        courseSlug: "obstetric-emergencies",
      },
    ],
    flashcards: [
      {
        topic: "Emergency Birth",
        front: "What does turtle sign signal, and what does it start?",
        back: "The head is born and retracts against the perineum — shoulder dystocia. It starts the clock: aim for the body to be delivered within about five minutes.",
      },
      {
        topic: "Emergency Birth",
        front: "Spell out HELPERR.",
        back: "Help, Episiotomy evaluation, Legs (McRoberts), supraPubic pressure, Enter (rotational manoeuvres), Remove the posterior arm, Roll to all fours.",
      },
      {
        topic: "Emergency Birth",
        front: "The golden rule of the imminent breech?",
        back: "Hands off until the scapula appears — then Lovset's for the arms and a flexed, cradled delivery of the head. Never hook a finger into the mouth; never traction on the body.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Managing complications in pregnancy and childbirth: a guide for midwives and doctors",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565492",
      },
      {
        organization: "Elsevier",
        title: "Myles' Textbook for Midwives, 17th edition",
        year: "2019",
      },
      {
        organization: "Elsevier",
        title: "Obstetrics: Normal and Problem Pregnancies (Gabbe), 8th edition",
        year: "2021",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "obstetric-emergencies",
    moduleTitle: "The Newborn and the Referral",
    lessonTitle: "The Compromised Newborn at Birth",
    description:
      "The first minute after birth decides much of a baby's story. This lesson sharpens the rapid triage that spots the baby in trouble and the first response that must begin before fear sets in.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the rapid assessment of a newborn at birth — term, tone, breathing — and what each answer demands.",
      "Explain how the first response differs for the apnoeic baby, the meconium-stained baby and the preterm baby.",
      "Apply the golden minute: drying, stimulation and the decision to ventilate.",
    ],
    tags: ["neonatal", "compromise", "newborn", "resuscitation", "golden minute"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Most babies cry and pink up and need nothing but warmth and their mother's chest. A few do not — and those few are the reason you exist at the moment of birth. Your triage takes seconds: is the baby term, is the tone good, is she breathing or crying? Any 'no' in that column moves you from welcoming to resuscitating.\n\nThe central discipline of this lesson is the **golden minute**: by sixty seconds after birth, a baby who is not breathing needs your bag and mask on her face — not another towel rub, not suction deep in the throat, not waiting to see. Newborn resuscitation is mostly ventilation; almost everything else is decoration.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Work the sequence: dry and stimulate for up to 30 seconds; if the baby stays apnoeic or gasping, start positive-pressure ventilation with air, checking that the chest rises. Assess the heart rate by stethoscope or umbilical pulse — count for 6 seconds and multiply by 10. A rate under 100 with poor breathing keeps you ventilating; under 60 despite good ventilation moves you to chest compressions. Meconium no longer changes the fundamentals: a vigorous meconium-stained baby needs only wiping and observation, and a non-vigorous one gets the same resuscitation as any limp baby — routine tracheal suction is out.\n\nThe preterm baby reshuffles your priorities: warmth comes first (hat, plastic wrap, pre-warmed towels, or skin-to-skin under a wrap), handling is gentle, and oxygen is used sparingly. Call for help early — two-person resuscitation is safer than heroism — and keep the parents informed in plain words as you work. If the baby responds, move to watchful observation: the baby who needed help at birth is the baby who can deteriorate in the first hours, so build that into your referral thinking.",
      },
      {
        type: "clinical_pearl",
        body: "A floppy blue baby needs your ventilation, not your towel rubs. If stimulation has not started breathing within half a minute, the lungs that matter are the ones on your bag.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A term baby is born through thick meconium-stained liquor. He is limp, not breathing, and his heart rate is about 70. The grandmother starts praying loudly; the mother is asking what is happening.\n\nWhat is your immediate sequence, and what does this baby NOT need?\n\nAnswer: Dry and position the head, clear the mouth and nose with a quick wipe and gentle suction only if the airway is blocked, and — because he is apnoeic with a low heart rate — begin positive-pressure ventilation with air within the golden minute, checking chest rise and reassessing the heart rate every 30 to 60 seconds. Escalate with MRSOPA if the chest is not moving, and to compressions if the rate stays below 60. What he does not need is routine deep tracheal suction for meconium — non-vigorous babies are resuscitated, not suctioned. All the while, tell the mother in plain words what you are doing and why.",
      },
      {
        type: "memory_trick",
        body: "Triage in three words: TERM, TONE, TROUBLE breathing. Two noes or an apnoeic baby means bag before you blink — rub, look, ventilate; by sixty seconds, the mask decides.",
      },
      {
        type: "summary",
        body: "- Rapid triage at birth: term, tone, breathing or crying — a 'no' anywhere moves you to resuscitation.\n- The golden minute: an apnoeic or gasping baby is ventilated by 60 seconds with air via bag and mask.\n- Heart rate drives escalation: under 100 keep ventilating; under 60 despite good ventilation add compressions.\n- Meconium: non-vigorous babies get resuscitation, not routine deep suction; vigorous ones need wiping only.\n- Preterm priority is warmth, gentle handling and early help; keep parents informed throughout.",
      },
    ],
    questions: [
      {
        topic: "Newborn at Birth",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A term newborn is limp and apnoeic at 30 seconds despite drying and stimulation. What is the next step?",
        options: [
          "Begin positive-pressure ventilation with air via bag and mask",
          "Continue vigorous stimulation for another two minutes",
          "Give oxygen by mask without squeezing the bag",
          "Suction deep into the trachea before any ventilation",
        ],
        correctIndex: 0,
        explanation:
          "Apnoea that survives stimulation needs ventilation — by 60 seconds of age at the latest. Stimulation beyond half a minute wastes the golden minute, and free-flow oxygen does not breathe for the baby.",
        courseSlug: "obstetric-emergencies",
      },
      {
        topic: "Newborn at Birth",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A baby is born through thick meconium; she is limp, not breathing, heart rate 50. Which approach is correct?",
        options: [
          "Intubate and suction the trachea before stimulating her",
          "Wait for her to cry, as suction will cause bradycardia",
          "Dry, open the airway and start positive-pressure ventilation like any apnoeic baby",
          "Give chest compressions first because the rate is 50",
        ],
        correctIndex: 2,
        explanation:
          "Current guidance abandons routine tracheal suction for non-vigorous meconium babies: the priority is ventilation, exactly as for any apnoeic newborn. Compressions come only if the rate stays under 60 despite effective breaths.",
        courseSlug: "obstetric-emergencies",
      },
      {
        topic: "Newborn at Birth",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "How should you check a newborn's heart rate quickly during resuscitation?",
        options: [
          "Feel the brachial pulse with two fingers",
          "Watch for central cyanosis and estimate from the colour",
          "Wait for the 5-minute Apgar score",
          "Count with a stethoscope or umbilical pulse for 6 seconds and multiply by 10",
        ],
        correctIndex: 3,
        explanation:
          "The stethoscope at the chest, or pulsations at the cut umbilical cord, are the fast reliable routes; a 6-second count multiplied by 10 gives a working rate in seconds — vital when decisions change by the minute.",
        courseSlug: "obstetric-emergencies",
      },
    ],
    flashcards: [
      {
        topic: "Newborn at Birth",
        front: "What is the golden minute?",
        back: "By 60 seconds of age, any apnoeic or gasping newborn should be receiving positive-pressure ventilation. Stimulation gets 30 seconds, no more.",
      },
      {
        topic: "Newborn at Birth",
        front: "Meconium, non-vigorous baby — what changes in the drill?",
        back: "Nothing: dry, open airway, ventilate. Routine deep tracheal suction has been abandoned; a limp baby needs breaths, not plumbing.",
      },
      {
        topic: "Newborn at Birth",
        front: "How does the preterm baby rewrite your priorities at birth?",
        back: "Warmth first: hat, plastic wrap, skin-to-skin; gentle handling; help called early; oxygen titrated, not flooded.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Pregnancy, childbirth, postpartum and newborn care: a guide for essential practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241549356",
      },
      {
        organization: "American Academy of Pediatrics",
        title: "Textbook of Neonatal Resuscitation (NRP), 8th edition",
        year: "2021",
      },
      {
        organization: "World Health Organization",
        title: "Guidelines on basic newborn resuscitation",
        year: "2012",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "obstetric-emergencies",
    moduleTitle: "The Newborn and the Referral",
    lessonTitle: "Advanced Referral Reasoning",
    description:
      "Referral looks like a signature and a phone call; in truth it is expert judgment — when, where and how to move a patient whose life depends on the journey. This lesson teaches referral as the clinical skill it is.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the decision framework for referral: what your facility cannot give, what the road will cost, what the destination can do.",
      "Explain the components of a safe referral — stabilisation, SBAR communication, documentation and escort.",
      "Apply referral planning to complex mothers and babies, including the feedback loop that makes your team better.",
    ],
    tags: ["referral", "judgment", "sbar", "transfer", "emergency"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "In your final year, referral stops being a reflex and becomes a decision. Every referral is a wager: you are betting that the road to a higher level of care is safer for this patient than staying where she is. Sometimes the bet is easy — an eclamptic mother needs magnesium and a surgeon. Sometimes it is subtle: a mother improving slowly, a baby borderline at three in the morning.\n\nExpert referral thinking runs on questions asked before the emergency. What can this mother not receive at my facility tonight — blood, theatre, an incubator? What will the journey cost her, and what can I do to make her road-ready? Where exactly will she be received, and by whom? A referral you plan in daylight is a different animal from one you improvise in the dark.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Stabilise before you mobilise. The patient moved un-stabilised arrives worse or dead — referral is a transfer of care, not of responsibility, so do what your level can do first: the first dose of magnesium sulphate, the first antibiotic, IV fluids, a uterus rubbed firm, a baby warmed. Then communicate with **SBAR** — Situation, Background, Assessment, Recommendation — so the receiving team can prepare the theatre, the cross-match or the cot. Call ahead, every time; a surprise admission is a slow admission.\n\nThe paperwork travels with the patient: referral slip in duplicate, copies of the partograph and notes, the drugs given with doses and times, and your contact number. Send the escort who adds the most skill to the road — sometimes that is you. Keep the family informed and inside the plan; a family that understands travels better than one kept in the dark. And close the loop: ask the receiving facility what happened and feed it back to your team. Referrals without feedback are lessons you never get to learn.",
      },
      {
        type: "clinical_pearl",
        body: "The worst moment to discover that your referral hospital has no blood, no theatre tonight or no working oxygen is the moment your patient needs it. Map your system in peacetime — levels, phone numbers, blood, transport — and rehearse the call.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At your health centre, a 30-week preterm labour is under way and will not stop. The district hospital 45 minutes away has basic newborn care; the regional hospital two hours away has a special care baby unit with CPAP. The mother is stable; the road is rough.\n\nWhat is your referral reasoning, and what will you do in the next hour before the baby arrives?\n\nAnswer: Compare destinations against needs: a 30-weeker needs CPAP and skilled preterm care, so the regional unit is the right destination — but no baby should be born uncontrolled in a moving vehicle, so manage the birth where you are and transfer after stabilisation. Use the hour to give antenatal corticosteroids if available, prepare warmth (hat, plastic wrap, pre-warmed towels), check your bag and mask, call both hospitals with SBAR, alert your escort, and counsel the family. Transfer the baby warm — kangaroo with the mother, well wrapped — with the notes, the drug record and a call ahead.",
      },
      {
        type: "memory_trick",
        body: "Referral is a hand-shake, not a hand-off: STABILISE, CALL (SBAR), DOCUMENT, ESCORT, FOLLOW UP. Five fingers — if one is missing, the grip fails.",
      },
      {
        type: "summary",
        body: "- Referral is a clinical decision: compare the road's danger, the destination's capability and your own level's limits.\n- Stabilise first — first MgSO4, first antibiotic, warmed and resuscitated newborn — before the vehicle moves.\n- SBAR call-ahead: Situation, Background, Assessment, Recommendation — surprises slow care.\n- Send notes, partograph and drug timings in duplicate; send the most skilled escort available.\n- Close the loop: ask for the outcome and feed it back, so each referral teaches your team.",
      },
    ],
    questions: [
      {
        topic: "Referral Reasoning",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman with severe pre-eclampsia is at your health centre, 45 minutes from the district hospital. What must happen BEFORE she travels?",
        options: [
          "Immediate transfer with no treatment, to save time",
          "Stabilisation with the first dose of magnesium sulphate, IV access and blood pressure care, then transfer",
          "Waiting for a district bed to be confirmed before giving any drug",
          "Delivery at your centre first, whatever the clinical picture",
        ],
        correctIndex: 1,
        explanation:
          "The first dose of magnesium and blood pressure care are basic emergency functions your level can give — moving her without them risks a convulsion on the road. Stabilise, then transport with an escort and a call ahead.",
        courseSlug: "obstetric-emergencies",
      },
      {
        topic: "Referral Reasoning",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What does SBAR stand for in a referral phone call?",
        options: [
          "Symptoms, Bloods, Allergies, Risks",
          "Stabilise, Bandage, Assess, Refer",
          "Situation, Background, Action, Response",
          "Situation, Background, Assessment, Recommendation",
        ],
        correctIndex: 3,
        explanation:
          "SBAR keeps a referral call short and complete: what is happening, what led to it, what you have found and done, and what you recommend the receiving team prepare.",
        courseSlug: "obstetric-emergencies",
      },
      {
        topic: "Referral Reasoning",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why does the referral feedback loop matter for the community midwife's practice?",
        options: [
          "It protects the midwife legally in case of complaints only",
          "It provides data for the regional directorate alone",
          "It lets your team learn what happened and improve future referral decisions",
          "It replaces the need for referral documentation",
        ],
        correctIndex: 2,
        explanation:
          "Knowing the outcome — what the receiving team found, what worked, what arrived too late — is how referral judgment grows. Without it the same mistake repeats next month; with it, the whole facility learns.",
        courseSlug: "obstetric-emergencies",
      },
    ],
    flashcards: [
      {
        topic: "Referral Reasoning",
        front: "Why stabilise before transfer?",
        back: "An un-stabilised patient deteriorates on the road. Give your level's best first — MgSO4, antibiotics, fluids, warmth — then move her.",
      },
      {
        topic: "Referral Reasoning",
        front: "SBAR in one breath?",
        back: "Situation, Background, Assessment, Recommendation — the four beats of a referral call that let the receiving team prepare.",
      },
      {
        topic: "Referral Reasoning",
        front: "What travels with every referred patient?",
        back: "Duplicate referral slip, partograph and notes, drugs given with doses and times, and a phone number — plus, wherever possible, a skilled escort.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Managing complications in pregnancy and childbirth: a guide for midwives and doctors",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565492",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, childbirth, postpartum and newborn care: a guide for essential practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241549356",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "National policy document — verify current edition with the Ghana Health Service.",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "advanced-neonatal-care",
    moduleTitle: "The Compromised Newborn",
    lessonTitle: "Newborn Resuscitation: The Complete Drill",
    description:
      "The complete resuscitation sequence, rehearsed until your hands move before your thoughts. From the first breath to the rare adrenaline moment, this is the drill you want fluent before the night you need it.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the full resuscitation algorithm: rapid assessment, PPV, MRSOPA, compressions, medications.",
      "Explain how to troubleshoot inadequate ventilation and how heart rate drives each escalation step.",
      "Apply the drill as team leader, including role assignment, timing and parent communication.",
    ],
    tags: ["resuscitation", "newborn", "ppv", "mrsopa", "compressions"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "By now you have ventilated many babies in drills. This lesson assembles the whole sequence — including its rare escalations — and asks you to lead it, not just perform it: assigning roles, checking equipment before the birth, calling the steps aloud, and keeping the parents humanly informed while your hands work.\n\nRemember what the numbers say: the overwhelming majority of newborns needing help need only air, a mask and a skilled pair of hands. Chest compressions and medicines are rare — but the babies who reach them are the ones who die if the earlier steps were sloppy. Fluency at the bottom of the ladder is what makes the top of it safe.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The algorithm in order: rapid assessment (term? tone? breathing?), dry and stimulate up to 30 seconds; apnoea or gasping gets **positive-pressure ventilation** with air — about 30 breaths a minute, one every two seconds, watching for gentle chest rise. A heart rate under 100 keeps you ventilating; under 60 despite good ventilation adds **compressions**: both thumbs on the lower third of the sternum, depth one-third of the chest, three compressions to one breath. Before any escalation, prove your ventilation is adequate — run **MRSOPA**: adjust the Mask, Reposition the head, Suction the mouth then nose, Open the mouth, increase Pressure, and consider an Alternate airway. Most 'non-responding' babies are not failing to respond — they are simply not being ventilated.\n\nIf the rate stays under 60 after effective ventilation and compressions, give **adrenaline 1:10,000** through an umbilical venous catheter, with volume (10 ml/kg of saline or blood) if shock or blood loss is suspected — and call for senior help. Intubation is a decision, not a reflex: it belongs to providers trained and current in the skill, and a well-held mask beats a badly held tube every time. After any resuscitation, care continues — warmth, early feeding and glucose checks, gentle handling, and an honest conversation with the parents. Then debrief your team: the drill improves by rehearsal and review, not by luck.",
      },
      {
        type: "clinical_pearl",
        body: "The commonest resuscitation failure is not starting ventilation soon enough; the second is squeezing without watching the chest. Eyes on the chest, always — the chest is the scoreboard.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A term baby is born apnoeic; you begin PPV at 40 seconds. The chest is not rising and the heart rate is drifting toward 50. Your colleague stands ready, waiting for your instruction.\n\nLead the next two minutes of this resuscitation.\n\nAnswer: Ventilation is failing, so before anything else run MRSOPA aloud: re-mask and reposition the head, suction mouth then nose, open the mouth slightly, and increase pressure until the chest moves — an alternative airway only if that fails. Once the chest rises, reassess the heart rate: still under 60, start compressions with both thumbs, 3:1 with ventilations, and assign your colleague to time and record. If the rate remains under 60 after a further minute, move to umbilical access and adrenaline 1:10,000 and call for senior help. Afterwards: warmth, glucose check, gentle transfer or observation — and a quiet debrief with the team and the parents.",
      },
      {
        type: "memory_trick",
        body: "Fix the lungs before you blame the heart: MRSOPA — Mask, Reposition, Suction, Open mouth, Pressure, Alternate airway. Then the escalation ladder is a heartbeat long: under 100 breathe for her; under 60 push for her; still under 60, adrenaline and help.",
      },
      {
        type: "summary",
        body: "- Rapid assessment, dry, stimulate 30 seconds; apnoeic babies get PPV with air by 60 seconds — about 30 breaths a minute with visible chest rise.\n- Heart rate rules escalation: under 100 continue ventilation; under 60 despite good ventilation add compressions, 3:1, both thumbs, lower third of sternum.\n- MRSOPA troubleshoots poor chest rise before any escalation — most 'failures' are mask problems.\n- Adrenaline 1:10,000 by umbilical vein, with volume for suspected loss; intubation only by trained, current hands.\n- Leadership: roles before the birth, times called aloud, parents informed, team debriefed.",
      },
    ],
    questions: [
      {
        topic: "Newborn Resuscitation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During PPV you notice the chest is not rising and the heart rate is falling. What comes before all else?",
        options: [
          "Start chest compressions immediately",
          "Increase the oxygen concentration to 100%",
          "Troubleshoot the ventilation with MRSOPA — mask, position, suction, pressure",
          "Give adrenaline through the umbilical vein",
        ],
        correctIndex: 2,
        explanation:
          "Compressions and adrenaline are pointless while the lungs are empty. Mask seal, head position, airway obstruction and pressure cause most failed ventilation — fix them with MRSOPA and the baby usually responds.",
        courseSlug: "advanced-neonatal-care",
      },
      {
        topic: "Newborn Resuscitation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the ratio of compressions to ventilations in newborn resuscitation, and where do the thumbs go?",
        options: [
          "3:1, both thumbs on the lower third of the sternum",
          "30:2, heel of one hand mid-sternum",
          "5:1, one finger on the xiphoid",
          "15:2, both thumbs on the upper sternum",
        ],
        correctIndex: 0,
        explanation:
          "Newborn resuscitation uses 3:1, favouring ventilation, with the two-thumb technique over the lower third of the sternum, compressing about one-third of the chest depth.",
        courseSlug: "advanced-neonatal-care",
      },
      {
        topic: "Newborn Resuscitation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A baby's heart rate remains below 60 after effective PPV with good chest rise and 60 seconds of coordinated compressions. What is the next step?",
        options: [
          "Stop compressions and double the ventilation rate",
          "Give adrenaline 1:10,000 via umbilical venous catheter and call for senior help",
          "Continue compressions alone for a further five minutes",
          "Intubate and give sodium bicarbonate immediately",
        ],
        correctIndex: 1,
        explanation:
          "Adrenaline is indicated once effective ventilation and compressions have failed to lift the rate above 60, ideally through an umbilical venous line. Escalate senior help at the same time — this baby is now the whole team's patient.",
        courseSlug: "advanced-neonatal-care",
      },
    ],
    flashcards: [
      {
        topic: "Newborn Resuscitation",
        front: "What does each rung of the heart-rate ladder demand?",
        back: "Under 100 — keep ventilating; under 60 despite good ventilation — compressions at 3:1; still under 60 — adrenaline 1:10,000 via UVC, plus volume if shock is suspected.",
      },
      {
        topic: "Newborn Resuscitation",
        front: "What does each MRSOPA letter stand for?",
        back: "Mask adjustment, Reposition the airway, Suction mouth then nose, Open the mouth, Pressure increase, Alternate airway.",
      },
      {
        topic: "Newborn Resuscitation",
        front: "Why watch the chest, not the colour?",
        back: "Chest rise is the live proof that air is moving — colour lags behind and oxygen alone does not breathe. The scoreboard is the chest.",
      },
    ],
    sources: [
      {
        organization: "American Academy of Pediatrics",
        title: "Textbook of Neonatal Resuscitation (NRP), 8th edition",
        year: "2021",
      },
      {
        organization: "World Health Organization",
        title: "Guidelines on basic newborn resuscitation",
        year: "2012",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, childbirth, postpartum and newborn care: a guide for essential practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241549356",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "advanced-neonatal-care",
    moduleTitle: "The Compromised Newborn",
    lessonTitle: "Stabilising the Sick Newborn",
    description:
      "Before diagnosis, before referral, before anything clever — stabilise. This lesson covers the four pillars that hold any sick newborn up: warm, breathing, perfused and fed.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the stabilisation priorities for a sick newborn: temperature, breathing, circulation and glucose.",
      "Explain the thresholds that demand action — respiratory rate, temperature, perfusion and blood glucose.",
      "Apply a stabilisation sequence to the deteriorating newborn while planning referral.",
    ],
    tags: ["stabilisation", "newborn", "hypothermia", "hypoglycaemia", "respiratory distress"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A sick newborn does not respect your diagnostic uncertainty. Long before you know exactly what is wrong — sepsis, respiratory distress, a heart problem — you can make her safer with four supports: keep her warm, keep her breathing, keep her circulation going, keep her sugar up. Stabilisation buys the time that diagnosis and transfer need.\n\nThink in loops, not lists. You will assess, act and reassess every few minutes, because a newborn can move from fair to frightening between one feed and the next. The discipline of this lesson is the loop itself — look, support, look again.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Warm**: axillary temperature belongs between 36.5 and 37.5 °C; hypothermia below that worsens breathing, lowers sugar, slows clotting and kills — treat it as the emergency it is, with skin-to-skin, a hat and a warm environment. **Breathing**: a respiratory rate of 60 or more, grunting, recession or apnoea are danger signs — position the airway, give oxygen only as needed to keep saturations roughly 90 to 95 per cent, and let calm and good position reduce the work of breathing. **Circulation**: check capillary refill and pulses; a pale, mottled baby with refill over three seconds is in shock and needs careful volume — 10 ml/kg, not flooding — with a sepsis mindset. **Sugar**: feed early and often; any at-risk baby who cannot feed needs a glucose check and treatment if low.\n\nLayer suspicion of infection over all of it, because sepsis is the great mimic: the cold baby, the poor feeder, the unusually sleepy one, the one who grunts — any of them may be septic, and in a newborn, antibiotics are often part of stabilisation rather than its conclusion. Handle minimally and cluster your care; document observations with times; involve the family early — a stabilised baby is one you can refer with a fighting chance.",
      },
      {
        type: "clinical_pearl",
        body: "Warm, breathing, perfused, sweet — in that order. Get all four into place within the hour and most sick newborns arrive at their diagnosis still alive.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 12-hour-old term baby is brought to your health centre: respiratory rate 72 with grunting, temperature 35.6 °C, refusing the breast, capillary refill four seconds. The father wants to wait until morning to see how she is.\n\nWhat does this baby need in the next hour, and what will you tell the father?\n\nAnswer: She is a seriously ill newborn — cold, working hard to breathe, under-perfused and not feeding — with sepsis and respiratory illness high on the list. In the next hour: warm her with skin-to-skin and a hat and re-check, position her airway, start oxygen titrated to 90–95 per cent saturations, check and treat her glucose, secure IV access, give a first dose of antibiotics per national guidance, and refer urgently with a call ahead — nothing about this picture waits for daylight. Her father hears it plainly: his daughter is seriously ill, treatment has started, and the road to hospital is part of the treatment.",
      },
      {
        type: "memory_trick",
        body: "The stabilisation cot spells W-B-P-S: Warm, Breathing, Perfused, Sweet. Four letters, one loop — assess, act, reassess, repeat.",
      },
      {
        type: "summary",
        body: "- Stabilisation precedes diagnosis: temperature, breathing, circulation, glucose — in that order.\n- Normothermia is 36.5–37.5 °C axillary; hypothermia is an emergency, not a nuisance.\n- Danger signs: RR 60 or more, grunting, recession, apnoea, poor feeding, capillary refill over 3 seconds, unstable temperature.\n- Oxygen is titrated to roughly 90–95 per cent; shock gets cautious 10 ml/kg volumes and a sepsis mindset.\n- Antibiotics are often part of stabilisation — sepsis is the great mimic; cluster care and reassess in loops.",
      },
    ],
    questions: [
      {
        topic: "Newborn Stabilisation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the normal axillary temperature range for a newborn?",
        options: [
          "35.5–36.5 °C",
          "37.5–38.5 °C",
          "34.5–35.5 °C",
          "36.5–37.5 °C",
        ],
        correctIndex: 3,
        explanation:
          "Below 36.5 °C a newborn is hypothermic — an emergency that worsens breathing, glucose and clotting. Aim for the 36.5–37.5 °C band with warmth and skin-to-skin.",
        courseSlug: "advanced-neonatal-care",
      },
      {
        topic: "Newborn Stabilisation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A sick newborn is pale and mottled with capillary refill of four seconds. How should you treat her circulation?",
        options: [
          "Rapid infusion of 20 ml/kg repeated until she pinks up",
          "Careful boluses of 10 ml/kg with reassessment, alongside sepsis treatment",
          "Oral rehydration solution by nasogastric tube",
          "No fluids, since fluids will worsen her breathing",
        ],
        correctIndex: 1,
        explanation:
          "Newborn shock is treated with small, judged boluses — 10 ml/kg with reassessment — because immature hearts and brains suffer from both under- and over-filling. She needs sepsis care in parallel.",
        courseSlug: "advanced-neonatal-care",
      },
      {
        topic: "Newborn Stabilisation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which newborn finding most likely represents serious illness rather than a normal variant?",
        options: [
          "Grunting with recession at a respiratory rate of 74",
          "Mild blueness around the lips while crying, resolving quickly",
          "Transient sneezing on the first day",
          "Fine peeling skin of the hands and feet on day three",
        ],
        correctIndex: 0,
        explanation:
          "Grunting and recession mean the baby is fighting to keep her lungs open — with tachypnoea this is never normal. The other findings are common benign variants.",
        courseSlug: "advanced-neonatal-care",
      },
    ],
    flashcards: [
      {
        topic: "Newborn Stabilisation",
        front: "The four stabilisation pillars for any sick newborn?",
        back: "Warm (36.5–37.5 °C), Breathing (support and titrate oxygen), Perfused (refill under 3 seconds; cautious 10 ml/kg boluses), Sweet (feed early; treat low glucose).",
      },
      {
        topic: "Newborn Stabilisation",
        front: "Why is hypothermia an emergency, not a footnote?",
        back: "Cold babies breathe worse, drop their sugar, clot poorly and die more — especially preterm and septic newborns. Warm first, always.",
      },
      {
        topic: "Newborn Stabilisation",
        front: "Why is sepsis called 'the great mimic'?",
        back: "Its signs — cold, poor feeding, sleepiness, grunting, apnoea — copy every other newborn illness, so antibiotics often join stabilisation before any diagnosis is certain.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Pregnancy, childbirth, postpartum and newborn care: a guide for essential practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241549356",
      },
      {
        organization: "World Health Organization",
        title: "Pocket book of hospital care for children, 2nd edition",
        year: "2013",
        url: "https://www.who.int/publications/i/item/978-92-4-154837-4",
      },
      {
        organization: "Elsevier",
        title: "Myles' Textbook for Midwives, 17th edition",
        year: "2019",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "advanced-neonatal-care",
    moduleTitle: "The Compromised Newborn",
    lessonTitle: "Transferring the Sick Newborn",
    description:
      "The sick newborn's second enemy is the journey itself. This lesson covers how to move a fragile baby — warm, monitored and escorted — so that arrival is safer than departure.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the pre-transport checklist: stabilisation, warmth, feeding, documentation and communication.",
      "Explain why kangaroo mother care is the transfer method of choice where incubators are unavailable.",
      "Apply safe transfer planning, including equipment, escort and handover to a named receiver.",
    ],
    tags: ["transfer", "transport", "newborn", "kangaroo care", "warm chain"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Hospitals do not treat babies on the road. Every transfer is a period in which your passenger is colder, less monitored and further from help — so the art of transfer is preparation: fix what you can before departure, carry what might be needed, and hand over to waiting hands.\n\nIn Ghana the transport question is often tro-tro, ambulance or family car rather than which incubator — which is exactly why kangaroo mother care, the mother's own chest as a transport incubator, sits at the centre of this lesson. The evidence supports KMC for stabilised babies, and stability, not glamour, is the transfer standard.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The neonatal transport world remembers its checklist as **STABLE**: Sugar checked and treated, Temperature in the normal range, Airway protected and positioned, Blood pressure and circulation supported, Lab work sent where possible, and Emotional support for the parents. Practically: the stable baby feeds before leaving (expressed breast milk by cup or tube); the unstable one travels nil-by-mouth with the stomach gently aspirated. Warmth is the make-or-break: hat, wraps, skin-to-skin inside the mother's own clothing. The referral note carries times, drugs, doses and findings; the receiving unit is called ahead; and the escort carries a bag-mask, suction, oxygen if prescribed, warm extras — and knows how to use every item.\n\nDecide who travels: a stabilised baby goes with her mother whenever possible, because the safest transport monitor ever devised is a mother's chest, and KMC during transfer maintains temperature better than improvised cots in a moving vehicle. A baby who cannot be stabilised at your level needs senior discussion, not silent heroics — sometimes the right move is treatment where you are while help is arranged. Check the baby at agreed stops en route, and on arrival give a verbal handover to a named person before you leave. The transfer ends only when responsibility has passed hands.",
      },
      {
        type: "clinical_pearl",
        body: "Babies cool faster on the move than anywhere else — a knit hat and a mother's chest beat any improvised incubator on a rough road. If the baby arrives pink and warm, the transfer was medicine.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 1.8 kg baby, four hours old, stable but small, needs to move 60 km from your health centre to the district newborn unit. The ambulance is unavailable; a family car can leave within the hour, and the mother is well.\n\nHow do you prepare this transfer?\n\nAnswer: Stabilise and verify — temperature 36.5–37.5 °C, breathing comfortable, glucose checked, a first feed of expressed colostrum given, antibiotic started if your protocols indicate. Then arrange warmth: a hat, and kangaroo skin-to-skin inside the mother's wrap, with extra covers for the journey. Write the referral note with times and doses, call the newborn unit ahead, and send a trained escort with a bag-mask and suction. Agree stops for re-checking, and hand over by name on arrival. The family car is acceptable transport precisely because KMC makes the mother the incubator.",
      },
      {
        type: "memory_trick",
        body: "The transport word is STABLE — Sugar, Temperature, Airway, Blood pressure, Lab work, Emotional support. Check all six before the wheels turn; the notes and the phone call ahead are the seatbelt.",
      },
      {
        type: "summary",
        body: "- Transfer is risk: prepare so that arrival is safer than departure.\n- STABLE before departure: sugar, temperature, airway, blood pressure, investigations, emotional support.\n- Kangaroo mother care is the transfer method of choice where incubators are scarce — hat, skin-to-skin, wraps.\n- Escort carries bag-mask, suction, oxygen if prescribed, and the baby's full story; call ahead with a handover.\n- The transfer ends when a named receiver has taken the handover — responsibility, not distance, is the finish line.",
      },
    ],
    questions: [
      {
        topic: "Newborn Transfer",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A stable low-birth-weight baby must travel 60 km by car to the district hospital. What is the best way to keep her warm during transfer?",
        options: [
          "Kangaroo mother care — skin-to-skin inside the mother's clothing, with a hat",
          "Wrapped tightly in two blankets, lying alone on the back seat",
          "A hot water bottle wrapped beside the baby",
          "The car heater on maximum throughout the journey",
        ],
        correctIndex: 0,
        explanation:
          "Kangaroo care keeps the baby warm, stable and monitored by the best sensor available — her mother. Loose wrapping alone cools fast, and hot bottles and blasting heaters burn, overheat and dehydrate.",
        courseSlug: "advanced-neonatal-care",
      },
      {
        topic: "Newborn Transfer",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which baby should travel nil-by-mouth for the transfer?",
        options: [
          "A stable baby who takes expressed milk by cup",
          "A baby held in kangaroo care by her mother",
          "An unstable baby with respiratory difficulty and possible gut pathology",
          "A baby who fed well an hour ago",
        ],
        correctIndex: 2,
        explanation:
          "An unstable baby — especially with breathing difficulty or possible abdominal pathology — aspirates feeds on a moving road, so an empty stomach with gentle aspiration is safer. Stable babies feed before and at stops.",
        courseSlug: "advanced-neonatal-care",
      },
      {
        topic: "Newborn Transfer",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "When does a newborn transfer formally end?",
        options: [
          "When the car doors close at your facility",
          "When a named clinician at the receiving unit has taken verbal and written handover",
          "When the referral note is written",
          "When the family pays for the fuel",
        ],
        correctIndex: 1,
        explanation:
          "Responsibility, not distance, marks the end of a transfer: a named receiver must hold the story — verbal plus written — before the baby can be considered safely moved.",
        courseSlug: "advanced-neonatal-care",
      },
    ],
    flashcards: [
      {
        topic: "Newborn Transfer",
        front: "What does STABLE stand for in neonatal transport?",
        back: "Sugar, Temperature, Airway, Blood pressure, Lab work, Emotional support — the six checks before the wheels turn.",
      },
      {
        topic: "Newborn Transfer",
        front: "Why is KMC the transfer method of choice where incubators are scarce?",
        back: "The mother's chest is a thermostatically perfect, portable, monitoring incubator — KMC keeps stable babies warmer than improvised cots on rough roads.",
      },
      {
        topic: "Newborn Transfer",
        front: "What must every escort carry for a newborn transfer?",
        back: "Bag and mask, suction, oxygen if prescribed, warm extras — and the whole clinical story: notes, drug timings, and a receiving team expecting them.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Pregnancy, childbirth, postpartum and newborn care: a guide for essential practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241549356",
      },
      {
        organization: "World Health Organization",
        title: "WHO recommendations for care of the preterm or low-birth-weight newborn",
        year: "2022",
        note: "Check for the latest update of these recommendations.",
      },
      {
        organization: "Elsevier",
        title: "Myles' Textbook for Midwives, 17th edition",
        year: "2019",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "advanced-neonatal-care",
    moduleTitle: "Caring for Preterm and Sick Babies",
    lessonTitle: "Caring for the Very Preterm Baby",
    description:
      "The very preterm baby turns every routine upside down — warmth, breathing, feeding and infection control all become critical care. This lesson walks the first days of a 29-weeker and what you can give her at district level.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the categories of prematurity and the specific vulnerabilities of the very preterm baby.",
      "Explain the evidence-based basics: warm chain, antenatal steroids, CPAP where available, trophic expressed breast milk.",
      "Apply developmental and family-centred care at district level, including kangaroo mother care.",
    ],
    tags: ["preterm", "nicu", "rds", "kangaroo care", "steroids", "vlbw"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Prematurity is the leading cause of newborn death worldwide, and the very preterm baby — born before about 32 weeks — concentrates that danger: immature lungs, immature gut, immature brain, thin skin that loses heat and water, and an immune system barely reporting for duty. She survives on precision: warmth, gentle breathing support, tiny feeds of her mother's milk, and protection from infection.\n\nMuch of what saves these babies is not technology but discipline. The warm chain, hand hygiene, minimal handling, early breast milk and kangaroo care do more for survival at district level than any single machine — though where CPAP and surfactant exist, they change the game. This lesson covers both worlds honestly.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "In the first hours, guard the basics: warmth (hat, plastic wrap for the smallest, pre-warmed towels, or immediate skin-to-skin under a wrap), gentle handling, glucose checks and early trophic feeds. Antenatal corticosteroids given to the mother more than 24 hours before birth mature the lungs and remain one of the cheapest life-savers in obstetrics — a referral-time decision. For breathing, watch for respiratory distress syndrome: grunting, recession and worsening effort in the first hours; CPAP is first-line support where available and carefully titrated oxygen where not, targeting saturations around 91–95 per cent. Apnoea of prematurity is common and monitored.\n\nFeeding begins with the mother: hand expression started within hours, colostrum given as trophic feeds — under a millilitre at a time — advanced slowly while the gut learns its job; formula is a second choice, and sterile technique governs every drop. Infection control is the invisible therapy: strict hand hygiene, aseptic tube and line care, clustered handling, honest limits on visitors. Protect the brain too — quiet, dim, pain-sparing, nested care. From stability build kangaroo mother care: long daily hours of skin-to-skin improve survival, temperature and feeding, and let the parents become the primary nurses, with discharge planned around feeding at the breast, steady weight gain and warmth in KMC.",
      },
      {
        type: "clinical_pearl",
        body: "For a 1.2 kg baby the environment is the medicine: warmth, breast milk, clean hands, quiet. Get those four right and you have prescribed the strongest survival cocktail your district owns.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 29-week baby, 1.3 kg, is born at your district hospital, which has no CPAP unit. She is grunting by two hours of age. The mother is frightened and has not yet touched her.\n\nWhat are your priorities for the first 24 hours, and how do you involve her mother?\n\nAnswer: First the foundations: warmth with a hat, wrap and heated cot or supervised kangaroo care; oxygen carefully titrated to 91–95 per cent saturations, aiming for minimal but sufficient support; glucose monitored and trophic expressed colostrum begun as soon as it can be collected; observations charted with times; antibiotics considered per local guidance. Involve the mother from hour one — hand expression taught with dignity, colostrum given to her baby, then skin-to-skin as the baby stabilises, because her chest is both incubator and medicine. Arrange discussion with the regional unit in case CPAP is needed, and record everything.",
      },
      {
        type: "memory_trick",
        body: "The very preterm baby is a WATER baby: Warmth, Air gently supported, Titration of oxygen and feeds, Expression of mother's milk, Rest and quiet — five letters, one fragile life.",
      },
      {
        type: "summary",
        body: "- Very preterm = under about 32 weeks; dangers: immature lungs, gut, brain, skin and immunity.\n- Antenatal steroids given before birth mature the lungs — a referral-time decision that saves lives.\n- Warm chain, titrated oxygen (SpO2 roughly 91–95%) and trophic expressed breast milk advanced slowly.\n- Infection control is invisible therapy: hand hygiene, aseptic care, clustered handling, limited visitors.\n- Kangaroo mother care is treatment, not comfort — long daily hours improve survival; parents become primary nurses.",
      },
    ],
    questions: [
      {
        topic: "Preterm Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why are antenatal corticosteroids such a high-value intervention for anticipated preterm birth?",
        options: [
          "They stop preterm labour completely in most cases",
          "Given at least 24 hours before birth, they accelerate lung maturity and reduce mortality",
          "They increase birth weight by half a kilogram",
          "They prevent all intraventricular haemorrhage",
        ],
        correctIndex: 1,
        explanation:
          "Steroids given to the mother before delivery mature the fetal lungs and substantially cut respiratory distress and death — among the most cost-effective interventions in perinatal care.",
        courseSlug: "advanced-neonatal-care",
      },
      {
        topic: "Preterm Care",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which statement about feeding the very preterm baby is correct?",
        options: [
          "Formula is preferred because it is higher in calories than breast milk",
          "Feeds should start large and frequent to catch up growth",
          "The gut should be rested with nothing by mouth for the first week",
          "Trophic feeds of expressed breast milk begin early and advance slowly",
        ],
        correctIndex: 3,
        explanation:
          "Start early, tiny and slow — under a millilitre of expressed milk at a time — while the gut matures. Formula raises infection and NEC risk, and big early feeds overwhelm an unready bowel.",
        courseSlug: "advanced-neonatal-care",
      },
      {
        topic: "Preterm Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A very preterm baby's oxygen is being titrated. What is the usual target saturation range, and why does overshooting matter?",
        options: [
          "95–100 per cent, because more oxygen is always safer",
          "88–92 per cent, because oxygen is toxic in all doses",
          "Around 91–95 per cent — excess oxygen damages the preterm retina and lungs",
          "No target — keep the monitor alarms on silence",
        ],
        correctIndex: 2,
        explanation:
          "Both too little and too much oxygen harm preterm babies — hypoxia injures the brain while hyperoxia drives retinopathy of prematurity and lung damage. Aim for roughly 91–95 per cent, adjusting deliberately.",
        courseSlug: "advanced-neonatal-care",
      },
    ],
    flashcards: [
      {
        topic: "Preterm Care",
        front: "What defines 'very preterm', and what does VLBW mean?",
        back: "Very preterm = born before about 32 weeks; VLBW = birth weight under 1500 g. Both concentrate the risks of immature lungs, brain, gut and immunity.",
      },
      {
        topic: "Preterm Care",
        front: "Why is expressed breast milk the first-choice feed even for babies too small to suck?",
        back: "It protects against NEC and infection and suits preterm digestion — given as tiny trophic feeds by tube or cup while the gut matures.",
      },
      {
        topic: "Preterm Care",
        front: "What does kangaroo mother care do for the very preterm baby?",
        back: "Long daily skin-to-skin hours improve survival, temperature stability, feeding and bonding — KMC is treatment, not just comfort.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO recommendations on interventions to improve preterm birth outcomes",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241508988",
      },
      {
        organization: "World Health Organization",
        title: "WHO recommendations for care of the preterm or low-birth-weight newborn",
        year: "2022",
        note: "Check for the latest update of these recommendations.",
      },
      {
        organization: "World Health Organization",
        title: "Preterm birth fact sheet",
        url: "https://www.who.int/news-room/fact-sheets/detail/preterm-birth",
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "advanced-neonatal-care",
    moduleTitle: "Caring for Preterm and Sick Babies",
    lessonTitle: "Feeding Challenges in Sick Babies",
    description:
      "When a baby cannot feed, everything else becomes harder. This lesson covers tube feeding done safely, the slow road back to the breast, and the red flags that mean feeds must stop.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe safe nasogastric tube practice: measurement, placement checks and residual interpretation.",
      "Explain the feeding ladder for sick and preterm babies: trophic feeds, gavage, cup, then breast.",
      "Apply red-flag recognition for necrotising enterocolitis and aspiration risk.",
    ],
    tags: ["feeding", "preterm", "ng tube", "expressed milk", "nec"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Feeding is the sick baby's therapy and, sometimes, her first alarm bell. A baby who cannot suck — too small, too breathless, too septic — still needs nutrition, so milk travels by tube while her skills mature. Done well it is safe; done carelessly it delivers milk to the lungs or feeds a dying gut.\n\nThis lesson is about doing it well: tubes measured, checked and respected; milk that is the mother's own; volumes that advance only as the bowel proves itself; and a watchful eye on the signs that say stop.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The **nasogastric tube**: measure from nose to ear to xiphoid (or to the umbilicus in the smallest), mark and secure it, and verify placement before EVERY feed — aspirate gently: returning familiar milk confirms position, and where pH strips exist a strongly acid aspirate reassures. Feed slowly by gravity, never by force, with the head slightly raised; never push a tube that resists, and never assume yesterday's tube still sits where it sat. Before each feed, check the **residual**: an unusually large volume of undigested milk — or any bile-stained aspirate — means pause, examine and ask why.\n\nThe road back to the breast is a ladder: trophic millilitres by tube while she grows; gavage feeds advancing as tolerated; then cup-feeds as suck matures; then the breast itself — often first as non-nutritive sucking on an emptied breast during kangaroo care, until coordination of suck-swallow-breathe appears, usually around 32 to 34 weeks. Supporting the mother matters as much as the baby: teach hand expression early and often — eight times in 24 hours including the night — because supply builds on demand, and her colostrum is medicine. And know the red flags of **necrotising enterocolitis**: increasing residuals, abdominal distension or tenderness, blood in the stool, a shiny red abdominal wall, temperature and sugar instability — stop feeds, keep nothing by mouth, give IV fluids and antibiotics, and refer urgently.",
      },
      {
        type: "clinical_pearl",
        body: "A feeding problem is a red flag, not a nuisance. The baby whose residuals grow, whose tummy shines or whose stool carries blood is asking you to stop the milk — listen.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A five-day-old 33-week baby is on 2-hourly gavage feeds of expressed milk. Before her feed you aspirate 4 ml of undigested milk; her abdomen is more distended than at morning check, and one nappy shows a streak of blood. She has not opened her eyes all shift.\n\nWhat do you do next, and why?\n\nAnswer: These are the opening signs of necrotising enterocolitis: rising residuals, new distension, blood in the stool and a listless baby. Stop all feeds and keep her nil by mouth, secure IV access for fluids, begin antibiotics per protocol, pass nothing into the bowel, and refer urgently — with a gentle, honest explanation to her mother that the gut needs rest, the milk will be kept and the feed paused. Continue supporting the mother's expression so her milk is ready when the bowel recovers.",
      },
      {
        type: "memory_trick",
        body: "The feeding ladder climbs by the baby's own milestones: Tube, Cup, Breast — skip no rung. Red flag stops the music: BILIOUS aspirate, DISTENSION, BLOOD in stool — NEC until proven otherwise.",
      },
      {
        type: "summary",
        body: "- Measure NG tubes nose–ear–xiphoid, verify position before every feed, never assume.\n- Aspirate before each feed: large or bilious residuals mean pause and ask why.\n- The feeding ladder: trophic tube feeds, advancing gavage, cup, then breast — with non-nutritive sucking during KMC.\n- Suck-swallow-breathe coordination matures around 32–34 weeks; support expression eight times daily including nights.\n- NEC red flags — growing residuals, distension, tender shiny abdomen, blood in stool: stop feeds, IV access, antibiotics, refer.",
      },
    ],
    questions: [
      {
        topic: "Feeding Sick Babies",
        type: "MCQ",
        difficulty: "Easy",
        stem: "How should you confirm nasogastric tube placement before a feed?",
        options: [
          "Listen over the stomach while injecting air",
          "Advance the tube until milk returns",
          "Aspirate gently and check that familiar milk returns (acidic where test strips exist)",
          "Rely on the external length marking set at insertion",
        ],
        correctIndex: 2,
        explanation:
          "Aspiration of recognizable milk — ideally with an acidic reading where pH strips are available — is the practical check before every feed. The whoosh test misleads and external marks can shift unnoticed.",
        courseSlug: "advanced-neonatal-care",
      },
      {
        topic: "Feeding Sick Babies",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Before a scheduled gavage feed you aspirate bilious (green) fluid. What does this mean and what do you do?",
        options: [
          "Possible intestinal obstruction or gut injury — hold the feed, keep nil by mouth and refer urgently",
          "The tube has slipped into the duodenum — reposition and feed",
          "Normal in preterm babies — continue the feed as planned",
          "A sign of overfeeding — halve the next feed",
        ],
        correctIndex: 0,
        explanation:
          "A green, bilious aspirate is never routine: it signals gut obstruction or injury, including NEC, until proven otherwise. Hold feeds, rest the bowel and involve senior review urgently.",
        courseSlug: "advanced-neonatal-care",
      },
      {
        topic: "Feeding Sick Babies",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "When does a preterm baby usually become ready to begin direct breastfeeding?",
        options: [
          "As soon as she opens her eyes and roots",
          "Immediately after the first tube feed",
          "Only after reaching 2.5 kg regardless of gestation",
          "When suck-swallow-breathe coordinates, typically around 32–34 weeks of gestation",
        ],
        correctIndex: 3,
        explanation:
          "Readiness is neurological, not just weight: safe feeding needs coordinated sucking, swallowing and breathing with stability, which typically matures around 32–34 weeks. Build toward it with non-nutritive sucking and cup feeds.",
        courseSlug: "advanced-neonatal-care",
      },
    ],
    flashcards: [
      {
        topic: "Feeding Sick Babies",
        front: "The practical NG tube check before every feed?",
        back: "Aspirate: familiar milk confirms gastric position; an acidic pH where strips exist reassures. The whoosh test misleads; external marks drift.",
      },
      {
        topic: "Feeding Sick Babies",
        front: "What are the NEC stop-the-feed signs?",
        back: "Rising residuals, abdominal distension or tenderness, blood in stool, shiny red abdominal wall, temperature and sugar instability. Nil by mouth, IV, antibiotics, refer.",
      },
      {
        topic: "Feeding Sick Babies",
        front: "How do you support milk supply for a baby who cannot breastfeed?",
        back: "Hand expression eight times in 24 hours including at night, started within hours of birth — supply follows demand, and colostrum is medicine.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Pocket book of hospital care for children, 2nd edition",
        year: "2013",
        url: "https://www.who.int/publications/i/item/978-92-4-154837-4",
      },
      {
        organization: "World Health Organization / UNICEF",
        title: "Implementation guidance: protecting, promoting and supporting breastfeeding in facilities providing maternity and newborn services (revised Baby-friendly Hospital Initiative)",
        year: "2018",
      },
      {
        organization: "Elsevier",
        title: "Myles' Textbook for Midwives, 17th edition",
        year: "2019",
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    courseSlug: "advanced-neonatal-care",
    moduleTitle: "Caring for Preterm and Sick Babies",
    lessonTitle: "Neonatal Sepsis Revisited",
    description:
      "You met neonatal sepsis earlier; now it returns older, subtler and harder. This lesson deepens the recognition, the antibiotic reasoning and the stewardship that protect the smallest patients.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe early- versus late-onset neonatal sepsis with their typical organisms and presentations.",
      "Explain the diagnostic reasoning — cultures where available, LP indications, and when to treat empirically.",
      "Apply prevention and antibiotic stewardship practice in a Ghanaian facility setting.",
    ],
    tags: ["sepsis", "neonatal", "antibiotics", "meningitis", "danger signs"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Neonatal sepsis is the master of disguise. It rarely announces itself with fever; it arrives as a baby who feeds poorly, sleeps too much, is too cool or too warm, breathes a little fast, or grunts softly. By the time it is obvious, hours have been lost — which is why this lesson asks you to suspect it earlier and to treat it sharper.\n\nThe revisit matters for two reasons. First, your responsibility now extends to complex cases and referrals. Second, antibiotics are a shared community resource: how you use them decides how well they work for the next decade of babies in your district.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Split sepsis by the clock. **Early-onset** disease (first 72 hours) usually reflects maternal or birth-canal origin — group B streptococcus, E. coli — presenting as lung disease, shock or general collapse in the first hours. **Late-onset** disease (after 72 hours) leans toward hospital or community acquisition, with staphylococci and gram-negatives; it may focus in the cord, skin, lungs, urine or meninges. The WHO danger signs for a young infant demand action wherever you work: not feeding, fast breathing 60 or more, severe chest indrawing, fever, hypothermia below 35.5 °C, convulsions, no spontaneous movement, and umbilical redness spreading to the skin.\n\nInvestigate if you can — blood culture before antibiotics where the service exists, and lumbar puncture when meningitis is suspected (bulging fontanelle, seizures, high-pitched cry, unusual irritability) — but never let investigation delay the first dose in a sick baby. Empiric cover follows national guidance: commonly ampicillin or benzylpenicillin with gentamicin for early-onset disease, staphylococcal cover added for late-onset, and longer, broader treatment for meningitis. Stewardship is the senior skill: review every baby at 48 hours against cultures and course; stop when the evidence says stop; complete when it says continue; and record the reasoning. Prevention remains your strongest prescription — clean birth, clean cord care with chlorhexidine per national policy, hand hygiene, exclusive breast milk, and honest limitation of invasive devices.",
      },
      {
        type: "clinical_pearl",
        body: "In newborns fever is the latecomer; poor feeding, temperature instability and unusual sleepiness arrive first. Any baby who feeds badly is septic until proven otherwise.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A six-day-old baby is brought to your health centre: feeding less than half of yesterday, axillary temperature 35.2 °C, umbilicus red and moist, and she has not cried once during the examination. The mother waited because she thought it was harmattan cold.\n\nWhat is your assessment and plan?\n\nAnswer: This is late-onset neonatal sepsis until proven otherwise — poor feeding, hypothermia, an inflamed cord and lethargy are enough to act on now. Warm her immediately with skin-to-skin and a hat, check and treat her glucose, secure IV access, give a first dose of antibiotics per national guidance, and arrange urgent referral for full evaluation and treatment. Tell the mother plainly that her baby has an infection that needs hospital care, that it was not her fault or the weather's, and document vitals, times and treatment for the receiving team. Come back tomorrow is not a plan this baby survives.",
      },
      {
        type: "memory_trick",
        body: "Sepsis whispers in young infants: FEEDS fall, TEMPERATURE wanders, BREATHING quickens, MOVEMENT fades. Any whisper — antibiotics within the hour.",
      },
      {
        type: "summary",
        body: "- Early-onset sepsis (within 72 hours) reflects maternal organisms (GBS, E. coli); late-onset disease is hospital or community acquired.\n- Presentation is subtle: poor feeding, temperature instability, lethargy, apnoea — fever arrives late.\n- WHO young-infant danger signs: not feeding, fast breathing 60+, severe indrawing, fever, hypothermia below 35.5 °C, convulsions, no movement, spreading umbilical redness.\n- Investigate where you can (culture, LP for meningitis signs) but never delay the first antibiotic dose.\n- Stewardship: review at 48 hours, complete or stop deliberately; prevention is clean birth, clean cord, clean hands, breast milk.",
      },
    ],
    questions: [
      {
        topic: "Neonatal Sepsis",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which pattern is most typical of early-onset neonatal sepsis rather than a late problem?",
        options: [
          "Poor feeding and temperature instability within the first 72 hours of life",
          "Fever and a swollen scrotum on day ten",
          "Peeling skin of the hands on day three",
          "Moulding of the skull bones after birth",
        ],
        correctIndex: 0,
        explanation:
          "Early-onset sepsis shows itself in the first 72 hours as non-specific collapse — poor feeding, temperature instability, breathing difficulty — reflecting organisms acquired around birth.",
        courseSlug: "advanced-neonatal-care",
      },
      {
        topic: "Neonatal Sepsis",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A 12-day-old baby has a bulging fontanelle, a high-pitched cry and two brief seizures. What does this combination demand?",
        options: [
          "Oral antibiotics and review in clinic tomorrow",
          "A blanket diagnosis of colic and reassurance",
          "Warming only, since seizures in newborns are always benign",
          "Urgent treatment as meningitis — lumbar puncture where safe, and prolonged IV antibiotics",
        ],
        correctIndex: 3,
        explanation:
          "Bulging fontanelle, irritability with a high-pitched cry and seizures point to meningitis: treat promptly with antibiotics, LP where it can be done safely, and weeks of therapy. Oral treatment and reassurance are not options here.",
        courseSlug: "advanced-neonatal-care",
      },
      {
        topic: "Neonatal Sepsis",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the core of good antibiotic stewardship in a newborn unit?",
        options: [
          "Always choosing the newest, broadest antibiotic first",
          "Cultures before the first dose where possible, review at 48 hours, then stop or complete deliberately",
          "Giving every admitted baby prophylactic antibiotics",
          "Shortening all courses to three days regardless of diagnosis",
        ],
        correctIndex: 1,
        explanation:
          "Stewardship means right drug, right duration, right decision point: culture where you can, then a deliberate review at 48 hours against results — neither reflex continuation nor reflex shortening.",
        courseSlug: "advanced-neonatal-care",
      },
    ],
    flashcards: [
      {
        topic: "Neonatal Sepsis",
        front: "Early versus late-onset sepsis — the clock and the bugs?",
        back: "Early (within 72 hours): maternal origin — GBS, E. coli, collapse in the first hours. Late (after 72 hours): hospital or community — staphylococci and gram-negatives; cord, skin, urine, meninges.",
      },
      {
        topic: "Neonatal Sepsis",
        front: "Which four whispers signal sepsis in a young infant?",
        back: "Feeds falling, temperature wandering, breathing quickening, movement fading — act before fever ever arrives.",
      },
      {
        topic: "Neonatal Sepsis",
        front: "When does lumbar puncture enter the septic workup?",
        back: "With bulging fontanelle, seizures, high-pitched cry or irritability — signs of meningitis; never let it delay the first antibiotic dose.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Pocket book of hospital care for children, 2nd edition",
        year: "2013",
        url: "https://www.who.int/publications/i/item/978-92-4-154837-4",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, childbirth, postpartum and newborn care: a guide for essential practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241549356",
      },
      {
        organization: "Ghana Ministry of Health",
        title: "Standard Treatment Guidelines",
        note: "National guideline — verify current edition with the Ministry of Health, Ghana.",
      },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────
  {
    courseSlug: "advanced-neonatal-care",
    moduleTitle: "The Family in Neonatal Crisis",
    lessonTitle: "Caring for Parents in Neonatal Crisis",
    description:
      "Behind every incubator stands a family holding its breath. This lesson is about the words, the presence and the partnership that keep parents standing while their baby fights.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe communication that works in crisis: honesty, plain language, teach-back and consistent updates.",
      "Explain family-centred care: parents as partners — touch, care tasks, kangaroo and expressing milk.",
      "Apply culturally humble support, including when the news is the worst.",
    ],
    tags: ["family-centred care", "support", "communication", "bereavement", "counselling"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A sick newborn breaks a family's picture of the future. The parents standing at your unit's door carry fear, guilt and questions they are afraid to ask — and the difference between a family that copes and one that collapses is often the midwife who knew how to stand with them.\n\nYou do not need perfect words; you need honest ones, offered with warmth and repeated as often as it takes. This lesson builds the communication habits of neonatal crisis — and the partnership that turns parents from anxious visitors into members of the care team.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Communicate so it lands. Sit down, use the parents' own language where you can, replace jargon with pictures-in-words, and check understanding with a gentle 'tell me what you have understood so far'. Deliver small, regular updates through one consistent staff member rather than crowds of strangers. Invite them in — fear grows at the door and shrinks at the cot side — and give them real roles: mouth care, temperature taking, changing the baby, expressing milk, kangaroo hours. A mother pumping colostrum for her 30-weeker is not a visitor; she is writing her baby's prescription. Acknowledge guilt early — nothing you did caused this — and answer the questions underneath the questions.\n\nWork with the family's culture, not around it: grandmothers and fathers may hold the decision voice, prayer often anchors hope, and naming customs may matter deeply — ask, invite, include. Watch the parents' wellbeing as you watch the baby's vitals: sleeplessness, avoidance and panic that will not settle deserve real support, not dismissal. And if the news is the worst, do it with care: warn that you are worried, say the words plainly — your baby has died — never a euphemism that can be misunderstood, allow silence, let them see and hold their baby, help create memories, and arrange follow-up. How you handle the worst day is what the family will remember for the rest of their lives.",
      },
      {
        type: "clinical_pearl",
        body: "A frightened parent hears one sentence in ten — so make every tenth sentence count: simple, honest, kind. Then say it again tomorrow.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "The mother of a 27-week baby has barely crossed the threshold of the unit in two days. Today she whispers: is it my fault — I carried water to the house until the evening before? She has not yet touched her baby.\n\nWhat will you say and do in the next half hour?\n\nAnswer: Sit with her at eye level and answer the hidden question first: carrying water did not bring her baby early, and it was not her fault. Explain in her own language, in one or two plain sentences, what is happening and what the plan is. Then invite her in as a participant: help her wash her hands, bring her to the cot, and start with the smallest real task — a hand resting on her baby, or the first expression of colostrum — while preparing her for kangaroo care as the baby stabilises. Ask who else at home needs to understand, and arrange a consistent time for updates. Guilt that is spoken to tends to loosen; guilt left alone hardens into the memory that she was turned away.",
      },
      {
        type: "memory_trick",
        body: "When words are hard, hold to OPEN: Own the message yourself (no third-hand news), Plain language, Explain with the hands (teach a task), Never alone (bring the family in).",
      },
      {
        type: "summary",
        body: "- Communication: sit, speak the parents' language, use plain words, check understanding, one consistent voice.\n- Parents are partners: touch, care tasks, expressing milk, kangaroo hours — real roles treat fear better than reassurance.\n- Address guilt directly and early; answer the question underneath the question.\n- Work with culture: identify the real decision-makers, honour faith and customs, invite the wider family in.\n- Bad news: warn, speak plainly, allow silence, create memories, arrange follow-up — the family remembers this day forever.",
      },
    ],
    questions: [
      {
        topic: "Parents in Neonatal Crisis",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A mother at the neonatal unit door repeatedly says it is her fault. What is the best first response?",
        options: [
          "Tell her not to think about that now and focus on the positives",
          "Let us talk: nothing you did in your daily life caused this, and this is not your fault",
          "Explain that the cause will be investigated later and ask her to wait outside",
          "Say guilt is a normal stage that everyone passes through",
        ],
        correctIndex: 1,
        explanation:
          "Guilt needs to be met, not deflected. Naming it and gently removing blame in the parent's own language opens the door to partnership; deflection leaves the guilt to grow.",
        courseSlug: "advanced-neonatal-care",
      },
      {
        topic: "Parents in Neonatal Crisis",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which practice best describes family-centred care in a newborn unit?",
        options: [
          "Restricting visiting hours to protect staff time",
          "Giving daily medical lectures to groups of parents",
          "Giving parents real care roles — mouth care, temperature taking, expressing milk, kangaroo hours",
          "Waiting until discharge for parents to meet the care team",
        ],
        correctIndex: 2,
        explanation:
          "Family-centred care makes parents part of the therapy: tasks, touch and kangaroo time improve the baby's outcomes and the parents' coping. Distance protects nobody.",
        courseSlug: "advanced-neonatal-care",
      },
      {
        topic: "Parents in Neonatal Crisis",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You must tell parents that their baby has died. Which approach is correct?",
        options: [
          "Warn them you are worried, then use clear words — your baby has died — and allow silence and contact",
          "Say the baby has gone to rest, to soften the blow",
          "Ask the doctor to tell them later, once you are off shift",
          "Give the news quickly in the corridor while work continues",
        ],
        correctIndex: 0,
        explanation:
          "Euphemisms create false hope and confusion; vague timing and corridors compound trauma. Warn, speak plainly, allow silence, and let the parents be with their baby — with follow-up arranged.",
        courseSlug: "advanced-neonatal-care",
      },
    ],
    flashcards: [
      {
        topic: "Parents in Neonatal Crisis",
        front: "Why teach a frightened mother to express colostrum for her preterm baby?",
        back: "It converts helpless fear into effective therapy: her milk is medicine, and having a real role treats her anxiety better than any reassurance.",
      },
      {
        topic: "Parents in Neonatal Crisis",
        front: "One principle for updates in neonatal crisis?",
        back: "One consistent voice, small regular doses, understanding checked — frightened parents hear one sentence in ten.",
      },
      {
        topic: "Parents in Neonatal Crisis",
        front: "How do you deliver the worst news?",
        back: "Warn first, then plain words — died, not passed or gone to rest — silence allowed, memories made, follow-up arranged.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO recommendations on maternal and newborn care for a positive postnatal experience",
        year: "2022",
        note: "Check for the latest update of these recommendations.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Midwives and Nurses",
        note: "Verify current edition with the Nursing and Midwifery Council, Ghana.",
      },
      {
        organization: "Elsevier",
        title: "Myles' Textbook for Midwives, 17th edition",
        year: "2019",
      },
    ],
  },

  // ── 14 ─────────────────────────────────────────────────────
  {
    courseSlug: "advanced-neonatal-care",
    moduleTitle: "The Family in Neonatal Crisis",
    lessonTitle: "Ethical Decisions in Neonatal Care",
    description:
      "The smallest patients raise the biggest questions. This lesson equips you for consent, limits of care and fairness — the decisions where your character does the clinical reasoning.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the four principles of bioethics as they apply to newborns.",
      "Explain shared decision-making, valid consent and the emergency exception.",
      "Apply ethical reasoning to conflicts and limits-of-care conversations in a Ghanaian context.",
    ],
    tags: ["ethics", "limits of care", "consent", "best interests", "palliative care"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Neonatal care confronts you with questions machines cannot answer: should we continue this treatment? Who decides for a baby who cannot? What do we owe the family who cannot pay, or the parents whose beliefs clash with our plan? Ethics is not a bolt-on subject here — it is daily practice wearing a different coat.\n\nThe tools are few and sturdy: four principles, the best-interests standard, honest conversation and careful documentation. This lesson puts them to work on the decisions that make experienced midwives go quiet.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The four principles: **autonomy** (here, the parents' informed voice — the baby has none), **beneficence** (what genuinely helps this baby), **non-maleficence** (what harms, including the harm of prolonging dying), and **justice** (fairness — no baby's care decided by wealth, tribe, gender or connections). In newborn medicine these meet in the **best-interests standard**: the choice a reasonable, informed parent would make for this child, weighing chance of benefit against burden. Consent lives in conversation: explain, check understanding, invite questions, document — a signature without understanding is a formality, not consent. In emergencies, treat first to save life and document the urgency; involve seniors and, where needed, hospital administration early when families and teams disagree.\n\nLimits of care are the hardest conversations. When survival is unlikely or would come with unbearable burden, withholding or withdrawing treatment can be the more ethical path — decided with the family, agreed by the team, and delivered as **palliative care**: warmth, feeding where possible, relief of pain and breathlessness, and the parents' presence, which is treatment too. Justice also has quiet hours: the baby whose parents cannot pay, the unit bed decided by influence, the migrant family's child — fairness means the same clinical standard for every baby on the ward. And respect culture where you can: a family declining blood or requesting a traditional rite still deserves full information, senior involvement and documented honest dialogue — safeguarding the baby while honouring the people.",
      },
      {
        type: "clinical_pearl",
        body: "Consent is a conversation, not a signature. If the parents cannot say back, in their own words, what they agreed to and why, the consent is not yet made.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 25-week baby is stable but ventilated, and her chances of survival with severe disability are significant. After two weeks her parents ask the team to do everything. The consultants believe continuing full intensive treatment may prolong suffering more than life. The family is respected in the community and firm in their faith.\n\nHow do you, as the senior midwife, approach the next family meeting?\n\nAnswer: Prepare, then meet. The team first agrees on a shared, honest view of the prognosis and the realistic options, so the family is not meeting a divided room. In the meeting, a senior clinician explains the situation in plain language, without euphemism, and then asks the parents what a good outcome would mean for them — drawing out their values rather than defeating their words. Options include continuing full care, re-framing the goals toward comfort, and time-limited trials with a review date. Whichever path is chosen is delivered with dignity: full palliative support, the family's presence, and the religious or cultural rites that comfort them. Everything decided is documented, and a follow-up meeting is fixed. Do everything is the start of a conversation, never its end.",
      },
      {
        type: "memory_trick",
        body: "Four judges sit on every neonatal decision: AUTONOMY (the parents' voice), BENEFICENCE (real benefit), NON-MALEFICENCE (no harm), JUSTICE (fair for every baby). When the room goes quiet, let the four judges speak.",
      },
      {
        type: "summary",
        body: "- Four principles: autonomy, beneficence, non-maleficence, justice — meeting in the best-interests standard.\n- Valid consent = conversation, understanding, documentation; emergencies are treated first and documented.\n- Limits of care: when burden outweighs benefit, withholding or withdrawal may be the ethical path — decided with family and team.\n- Palliative care is active care: warmth, comfort, symptom relief, presence.\n- Justice demands the same standard for every baby — no wealth, tribe, gender or influence tests on the ward.",
      },
    ],
    questions: [
      {
        topic: "Neonatal Ethics",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which situation best illustrates the principle of JUSTICE in a neonatal unit?",
        options: [
          "A family's religious refusal of blood is respected",
          "A baby is enrolled in a research study with consent",
          "The team stops an intervention judged futile",
          "A baby of poor, unknown parents receives the same clinical standard as every other baby",
        ],
        correctIndex: 3,
        explanation:
          "Justice is fairness in resources and standards: care decided by clinical need, not wealth, connections, tribe or gender. The other options illustrate autonomy, research ethics and non-maleficence.",
        courseSlug: "advanced-neonatal-care",
      },
      {
        topic: "Neonatal Ethics",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A newborn needs an urgent life-saving transfusion, but the parents cannot be reached. What is the ethical position?",
        options: [
          "Wait for parental consent whatever the delay",
          "Treat immediately under the emergency exception, documenting the urgency and the attempts to reach the family",
          "Ask the grandmother to sign consent for all future procedures",
          "Transfer the baby without treatment to a bigger hospital",
        ],
        correctIndex: 1,
        explanation:
          "Emergencies permit treatment without consent when delay threatens life: act, document the clinical urgency and the attempts to contact the family, and inform them fully at the earliest moment.",
        courseSlug: "advanced-neonatal-care",
      },
      {
        topic: "Neonatal Ethics",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In a limits-of-care conversation, what does palliative care mean for the newborn?",
        options: [
          "Doing nothing further for the baby",
          "A faster route decided by staff alone when families hesitate",
          "Active comfort-focused care: warmth, feeding where possible, symptom relief and family presence",
          "Care only after every curative option is formally withdrawn",
        ],
        correctIndex: 2,
        explanation:
          "Palliative newborn care is active treatment aimed at comfort and dignity — pain relief, feeding where possible, warmth, and parents present. It is a legitimate goal of care chosen with the family, not an absence of care.",
        courseSlug: "advanced-neonatal-care",
      },
    ],
    flashcards: [
      {
        topic: "Neonatal Ethics",
        front: "The four principles, in newborn terms?",
        back: "Autonomy = the parents' informed voice; beneficence = real benefit; non-maleficence = no harm, including prolonged suffering; justice = the same standard for every baby regardless of means or background.",
      },
      {
        topic: "Neonatal Ethics",
        front: "What makes consent valid for a neonatal procedure?",
        back: "A real conversation: explanation, understanding checked in the parents' own words, questions answered, voluntariness, documentation — the signature is the receipt, not the goods.",
      },
      {
        topic: "Neonatal Ethics",
        front: "When may treatment be withheld or withdrawn for a newborn?",
        back: "When it offers little benefit and imposes real burden — decided with the family and agreed by the team, with palliative care taking over as active treatment.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Midwives and Nurses",
        note: "Verify current edition with the Nursing and Midwifery Council, Ghana.",
      },
      {
        organization: "Ghana Ministry of Health",
        title: "Patients' Charter",
        note: "National document — verify current edition with the Ministry of Health, Ghana.",
      },
      {
        organization: "Elsevier",
        title: "Myles' Textbook for Midwives, 17th edition",
        year: "2019",
      },
    ],
  },

  // ── 15 ─────────────────────────────────────────────────────
  {
    courseSlug: "community-midwifery",
    moduleTitle: "Midwifery in the Community",
    lessonTitle: "The Community Midwife's Expanded Role",
    description:
      "Beyond catching babies — the community midwife as clinician, leader and health system node. This lesson maps the expanded role you are growing into in your final year.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the expanded roles: clinician, public health leader, mentor, advocate and data-user.",
      "Explain the community midwife as a health system node linking families to facilities and data to action.",
      "Apply a plan for leading improvement in a defined community catchment.",
    ],
    tags: ["community midwifery", "role", "leadership", "advocacy", "health system"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "In Year One, the community midwife's job looked like a list of tasks. By final year it should look like a map of a community: you are the clinician women consult first, the leader community health nurses and volunteers follow, the voice the chief hears at the durbar, and the node through which the health system touches — or misses — every family in your zone.\n\nThis matters because Ghana's maternal and newborn outcomes are decided as much outside facilities as inside them. When coverage of antenatal, skilled birth and postnatal care rises, deaths fall — and the person who moves those numbers in a real community is usually a midwife who understood her expanded role.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Clinician: ANC and PNC contacts, skilled birth, family planning, cervical screening awareness, and STI care syndromically where protocols allow — with the discipline of recognising what belongs above your level. Public health leader: health talks at clinics, durbars, churches, mosques and schools; market-day outreach; local radio in the community's own language; campaigns for immunisation, nutrition and bed nets. Mentor: orienting students, supervising community health nurses and volunteers, and orienting TBAs. Data-user: the registers are your dashboard — coverage, defaulters and deaths reviewed monthly and turned into outreach plans. Advocate: for transport solutions, maternity waiting homes, girls' education and respectful care.\n\nLeadership in this role is mostly influence, not authority. The expanded midwife builds relationships with the chief and elders, assembly members, teachers, market women and faith leaders, because these are the hands that move the barriers women face. Boundaries matter too: extend your reach through others rather than practising beyond your scope; know the escalation line for clinical, ethical and supply problems; and keep your own learning alive — a midwife who stops learning stops leading. Map your catchment annually: who is not coming, where they live, and why — then let the map write your plan.",
      },
      {
        type: "clinical_pearl",
        body: "In the community, your clinic is one room of your practice. The market, the chapel, the FM station and the chief's palace are the other rooms — visit them all.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are posted to a CHPS zone whose register shows good ANC attendance but only 40 per cent of expected births at a facility. The district supervisory visit is in three weeks.\n\nWhat will you do before the visit?\n\nAnswer: Turn data into a map. Review the registers with the community health nurses first: which settlements, which women and which months account for the missing births, generating a defaulter list by name. Then move through the community's other rooms: meet the chief and elders with the numbers, ask market women and TBAs where the home births happen and why, and listen for the barriers — transport, cost, a scolding midwife, tradition. Launch the fixes within your power: market-day outreach, a transport plan with the assembly member, evening clinic hours, respectful-care commitments from every staff member, and radio announcements in the local language. By the supervisory visit you present not a problem but a plan with numbers attached.",
      },
      {
        type: "memory_trick",
        body: "Your expanded role is a five-room house: the CLINIC, the COMMUNITY, the MENTORS, the MANAGERS (data and district), and the PALACE (leaders and advocacy). Work all five rooms every month, and the house stands.",
      },
      {
        type: "summary",
        body: "- The expanded role: clinician, public health leader, mentor, data-user, advocate — a map, not a task list.\n- Coverage moves when ANC, skilled birth and PNC reach real communities — the midwife is the mover.\n- Influence beats authority: elders, faith leaders, teachers, market women and TBAs move barriers.\n- Registers are your dashboard: review coverage and defaulters monthly; turn gaps into outreach plans.\n- Extend reach through others, never beyond your scope — and keep learning to keep leading.",
      },
    ],
    questions: [
      {
        topic: "Expanded Role",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What does it mean to call the community midwife a 'health system node'?",
        options: [
          "She links families to facilities, data to action, and the district to the community",
          "She must refer every client to the regional hospital",
          "She works only inside the CHPS compound",
          "She replaces the district health management team",
        ],
        correctIndex: 0,
        explanation:
          "A node is a connecting point: the community midwife connects women to skilled care, community data to district decisions, and volunteers and TBAs to the formal system — the system's touchpoint with the community.",
        courseSlug: "community-midwifery",
      },
      {
        topic: "Expanded Role",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Your registers show good ANC coverage but falling postnatal attendance. Which response fits the expanded role best?",
        options: [
          "Wait for the district supervisory visit to raise it",
          "Conclude that mothers are simply not interested",
          "Trace defaulters by name, ask women and TBAs why, then redesign PNC — market-day or home visits at the right hours",
          "Increase the number of talks given inside the clinic only",
        ],
        correctIndex: 2,
        explanation:
          "The expanded midwife turns data into inquiry and inquiry into redesign: trace the defaulters, listen for the barriers, then move the service to where mothers are. Waiting, blaming or more of the same changes nothing.",
        courseSlug: "community-midwifery",
      },
      {
        topic: "Expanded Role",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which activity sits outside the community midwife's appropriate scope, however experienced she is at CHPS level?",
        options: [
          "Inserting contraceptive implants after training per national family planning guidelines",
          "Performing caesarean sections at the CHPS compound when transport fails",
          "Providing syndromic management of vaginal discharge per national protocol",
          "Providing first-line emergency care and referral for pre-eclampsia",
        ],
        correctIndex: 1,
        explanation:
          "Surgery belongs to facilities with theatre, anaesthesia and blood — however desperate the transport problem. Implants, syndromic STI care and first-response pre-eclampsia care sit within trained midwifery scope under national guidance.",
        courseSlug: "community-midwifery",
      },
    ],
    flashcards: [
      {
        topic: "Expanded Role",
        front: "The five rooms of the expanded community midwife?",
        back: "Clinic (clinical care), community (outreach and education), mentors (students, CHNs, TBAs), managers (data and district), and the palace (leaders and advocacy). Visit all five monthly.",
      },
      {
        topic: "Expanded Role",
        front: "What makes the midwife a 'system node'?",
        back: "She links families to facilities, community data to district action, and informal helpers — volunteers and TBAs — to the formal system.",
      },
      {
        topic: "Expanded Role",
        front: "How should you respond to a coverage gap in your registers?",
        back: "Name it, map it, ask the community why, and redesign the service — market days, evening hours, transport plans. Data is the beginning of outreach, not its end.",
      },
    ],
    sources: [
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "National policy document — verify current edition with the Ghana Health Service.",
      },
      {
        organization: "UNFPA, WHO, ICM",
        title: "State of the World's Midwifery 2021",
        year: "2021",
      },
      {
        organization: "World Health Organization",
        title: "Midwives fact sheet",
        url: "https://www.who.int/news-room/fact-sheets/detail/midwives",
      },
    ],
  },

  // ── 16 ─────────────────────────────────────────────────────
  {
    courseSlug: "community-midwifery",
    moduleTitle: "Midwifery in the Community",
    lessonTitle: "Outreach and the Hard-to-Reach Mother",
    description:
      "The mothers your services miss are the ones the numbers mourn. This lesson is about finding them — the barriers, the hidden groups, and the outreach that reaches hands clinics never do.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the barriers that keep women from services: distance, cost, permission, fear and distrust.",
      "Explain strategies that reach hidden groups: meeting women where they gather, flexible hours, defaulter tracing and community allies.",
      "Apply an outreach plan for a hard-to-reach community with dignity at the centre.",
    ],
    tags: ["outreach", "equity", "hard to reach", "defaulter tracing", "respectful care"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every community has women the system quietly loses: the teenager who fears scolding, the woman on the lake island, the nomad's wife, the mother who has delivered four times at home and sees no reason to change, the widow with no transport money. They rarely complain and rarely appear — they simply remain outside, and the register stays silent about them.\n\nHard to reach is a phrase to hold carefully: often it is our services that are hard to reach — far, costly, unfriendly, or staffed by people who shout. This lesson asks you to find the women behind the missing numbers and to design outreach that meets them with dignity.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Start by asking, never assuming. Barriers cluster: **distance and cost** (travel, fees, hidden costs of supplies); **permission** (husbands, mothers-in-law, and the fact that the midnight decision-maker is rarely the woman alone); **fear and distrust** (of scolding for late booking or many children, of testing, of a facility where nobody speaks her language); and **life itself** (market days, farms, and the seasons that move whole households). Hidden groups deserve named attention: adolescents, women of the lake islands and remote or nomadic settlements, women with disabilities, grand multiparas, the previously bereaved — and the postpartum mother, whose contacts fall away most often of all.\n\nThen go where women already are. Clinics at the market on market day; talks at churches, mosques, schools and durbars; local FM radio in the community's own tongue; evening or weekend hours for the market trader; defaulter tracing by name with community volunteers who know the paths; maternity waiting home arrangements for distant villages; transport solutions negotiated with assembly members and drivers. Respect is the magnet: a woman who was welcomed, addressed in her language and never scolded becomes your best advertiser — word of mouth travels further in a village than any megaphone. Partner with chiefs, teachers, market women, faith leaders and TBAs, and after each round of outreach, check the register: did the missing mothers come?",
      },
      {
        type: "clinical_pearl",
        body: "A woman who books late is usually not careless — she is telling you what stood between her and your door. Ask kindly; her answer is your outreach plan.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A cluster of lake-island communities in your zone records almost no facility births: women deliver at home and travel by canoe only when haemorrhage or obstruction has already begun. The register shows one name from the islands in the past year.\n\nDesign the outreach that changes this.\n\nAnswer: Begin at the islands, not the clinic. Arrange a visit with the chief and elders, listen to the women's own account of the barriers — distance, water travel in labour, cost, fear of being scolded — and let them shape the plan. Build the practical bridge: a scheduled outreach clinic day by boat offering ANC, PNC and family planning; registration of every pregnancy by a trained island volunteer; a transport agreement — an emergency canoe and phone contact with the mainland; and a maternity waiting home or family lodging near your facility for the last weeks of pregnancy for the farthest women. Ask the TBAs on the islands to become companions and early callers, and review the register quarterly to see which names have appeared. Coverage is the measure; dignity is the method.",
      },
      {
        type: "memory_trick",
        body: "Outreach means you have to MOVe: go to the Market, Offer hours that fit, Visit the invisible by name, and Enlist allies — chiefs, teachers, TBAs, radio. Women cannot come to you if you never go to them.",
      },
      {
        type: "summary",
        body: "- 'Hard to reach' often means services that are hard to reach: distance, cost, permission, fear and life's workload.\n- Hidden groups by name: adolescents, island and nomadic communities, women with disabilities, grand multiparas, the bereaved — and postpartum mothers.\n- Go where women already are: market day, churches and mosques, schools, radio in local language, evening hours.\n- Defaulter tracing by name with volunteers; transport solutions and maternity waiting homes bridge distance.\n- Respect is the magnet — a welcomed woman brings the next five; the register tells you whether it worked.",
      },
    ],
    questions: [
      {
        topic: "Outreach",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A woman arrives at your clinic unbooked and in early labour with her sixth child. Which response best reflects dignity-based outreach thinking?",
        options: [
          "Ask where she has been all these months, and record the remark in the notes",
          "Turn her away to the district hospital under a policy for unbooked mothers",
          "Welcome her, give skilled care without scolding, and later ask kindly what kept her from booking",
          "Care for her, but tell the ward the community is a hopeless case",
        ],
        correctIndex: 2,
        explanation:
          "Scolding teaches avoidance; welcome teaches return. The dignity of this birth is her right, and her honest answer about the barriers is the intelligence your outreach needs.",
        courseSlug: "community-midwifery",
      },
      {
        topic: "Outreach",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why do postnatal mothers so often become the invisible group in community coverage?",
        options: [
          "They feel well, services tend to end at delivery, and PNC competes with the demands of the new baby and house",
          "They are legally barred from attending after delivery",
          "Postnatal care is not beneficial once delivery was normal",
          "Traditional practice forbids travel before one year",
        ],
        correctIndex: 0,
        explanation:
          "Postnatal drop-off is structural: mothers feel well, are busy, and the system's default is that care ended at birth — exactly why early postnatal contacts must be scheduled and this group chased hardest in outreach.",
        courseSlug: "community-midwifery",
      },
      {
        topic: "Outreach",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which element is most essential in an outreach plan for lake-island communities?",
        options: [
          "Loudspeaker announcements on the mainland only",
          "Waiting for island families to build their own clinic",
          "Excluding traditional birth attendants from any role on the islands",
          "Trusted local registration of pregnancies with an agreed emergency transport and referral route",
        ],
        correctIndex: 3,
        explanation:
          "Distance is the barrier, so the plan must bridge it: local eyes that find every pregnancy early, and an agreed route — canoe, phone, waiting home — linking to referral. Announcements on the mainland reach no one across water.",
        courseSlug: "community-midwifery",
      },
    ],
    flashcards: [
      {
        topic: "Outreach",
        front: "Name the four barrier clusters that keep women from services.",
        back: "Distance and cost; permission (the midnight decision-maker is rarely the woman alone); fear and distrust (scolding, language, testing); and life's demands (markets, farms, fishing seasons).",
      },
      {
        topic: "Outreach",
        front: "Which groups most often become invisible in the registers?",
        back: "Adolescents, remote island and nomadic families, women with disabilities, grand multiparas, previously bereaved mothers — and postpartum women whose contacts fall away after birth.",
      },
      {
        topic: "Outreach",
        front: "What is the single best advertising for outreach?",
        back: "A respected welcome: a woman addressed in her language, never scolded, returns — and brings the next five. The register is your outreach scoreboard.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO recommendations on antenatal care for a positive pregnancy experience",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549912",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "National policy document — verify current edition with the Ghana Health Service.",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, childbirth, postpartum and newborn care: a guide for essential practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241549356",
      },
    ],
  },

  // ── 17 ─────────────────────────────────────────────────────
  {
    courseSlug: "community-midwifery",
    moduleTitle: "Midwifery in the Community",
    lessonTitle: "Working Within the Health System",
    description:
      "No midwife works alone — you work inside a system of levels, referral chains and committees. Knowing its structure, its signal functions and its gaps is a final-year survival skill.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe Ghana's service levels — CHPS, health centre, district, regional — and the BEmONC and CEmONC capability grades.",
      "Explain the signal functions concept and how to map your facility's capacity honestly.",
      "Apply system navigation: pre-planned referral, data reporting, supply realities and escalation.",
    ],
    tags: ["health system", "chps", "bemonc", "referral", "ghana"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The system around you is layered like a ladder: CHPS zones and their community clinics, health centres, district hospitals, and regional and teaching hospitals above them. Each rung exists to catch what the rung below cannot hold — and a midwife who knows exactly which rung does what moves mothers safely up and down the ladder.\n\nThe map matters most in emergencies. Emergency obstetric and newborn care is graded by signal functions: basic (BEmONC) and comprehensive (CEmONC). Your patients' lives can depend on knowing which functions your facility can honestly perform tonight, with today's staff and today's supplies.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "BEmONC is seven signal functions: parenteral antibiotics, parenteral anticonvulsants (magnesium sulphate), parenteral uterotonics, manual removal of the placenta, removal of retained products (for example by MVA), assisted vaginal birth (vacuum), and basic newborn resuscitation. Add caesarean section and blood transfusion and you have CEmONC — the district hospital's promise. Below that, a health centre with a skilled midwife holds the first minutes of emergencies, and the CHPS compound holds the first response in the community, with the midwife as the node linking them upward. In Ghana these services sit inside the district health system, with the District Health Management Team for supervision, planning and supplies, and data moving upward through monthly reporting systems such as DHIMS II.\n\nNow navigate the system like a professional. Map it in peacetime: which facility has theatre, blood, a working ambulance, a functioning newborn unit; which phone numbers actually answer at 2 a.m.; who the duty officer at the district is. Then pre-plan the emergencies — your eclamptic, your PPH, your 30-weeker — with transport and destination decided before the patient exists. Work honestly with the system's realities: stock-outs (misoprostol, heat-stable, when the oxytocin fridge fails), staff gaps and task-sharing within scope, and escalation through supervision rather than silence when the system is unsafe. And feed the system: complete your registers, submit monthly returns on time, and take feedback back to your team — a unit that reports well is a unit the district can see and resourced.",
      },
      {
        type: "clinical_pearl",
        body: "The worst time to learn that your referral hospital has no blood tonight is when your patient needs it. Map the system in peacetime — levels, functions, phones, transport — and rehearse the calls.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At 2 a.m. a woman with severe pre-eclampsia at your health centre convulses for the third time. The district hospital is 45 minutes away and has magnesium, theatre and blood. The ambulance driver's phone has rung out twice.\n\nWhat do you do, in order?\n\nAnswer: While she is protected from injury and positioned on her side, give the first dose of magnesium sulphate per your emergency protocol — a BEmONC function that belongs at your level and must not wait for the road. Secure IV access, check blood pressure, catheterise, time the fits, and start the referral machinery in parallel: a third phone call to a named person, the family's vehicle as fallback, and an SBAR call ahead to the district labour ward. Send the notes with drugs and times, an escort who can manage another fit en route, and the family counselled about what is happening. When the system's wheels squeak — unanswered phones, no fuel — the patient never hears there was no ambulance; she meets a team that kept working the ladder.",
      },
      {
        type: "memory_trick",
        body: "Know the ladder by its letters: CHPS is Community, the health centre is Basic, the District is Comprehensive (surgery and blood), and Regional or Teaching is Specialist. Map it, then file the phone numbers under each rung.",
      },
      {
        type: "summary",
        body: "- Ghana's ladder: CHPS zone, health centre, district hospital, regional and teaching hospitals.\n- BEmONC: antibiotics, MgSO4, uterotonics, manual placenta removal, MVA, vacuum, newborn resus — plus caesarean and blood for CEmONC.\n- Map capacity in peacetime: tonight's true functions, answering phones, transport, blood, theatre.\n- Give your level's best before the road: first MgSO4, first antibiotic, first resuscitation.\n- Feed the system: accurate registers, timely monthly returns, honest escalation when the ladder is unsafe.",
      },
    ],
    questions: [
      {
        topic: "Health System",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which pair of services distinguishes CEmONC from BEmONC?",
        options: [
          "Family planning and health education",
          "Caesarean section and blood transfusion",
          "Magnesium sulphate and newborn resuscitation",
          "Antenatal ultrasound and tetanus vaccination",
        ],
        correctIndex: 1,
        explanation:
          "Comprehensive emergency obstetric and newborn care is the basic functions plus caesarean section and blood transfusion — the additions that define district-hospital level response.",
        courseSlug: "community-midwifery",
      },
      {
        topic: "Health System",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What should you do first when a woman with severe pre-eclampsia convulses at your BEmONC-capable health centre, 45 minutes from the district hospital?",
        options: [
          "Load her into the nearest vehicle immediately",
          "Wait for the ambulance to arrive before giving any drug",
          "Give oral antihypertensives and observe for the next fit",
          "Give the first dose of magnesium sulphate per protocol, then arrange transfer",
        ],
        correctIndex: 3,
        explanation:
          "Magnesium sulphate is a basic emergency function that belongs to your level; the first dose protects her brain while the road is arranged. Transfer without it risks the next convulsion happening in the vehicle.",
        courseSlug: "community-midwifery",
      },
      {
        topic: "Health System",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is the community midwife's monthly data submission a patient-safety activity rather than paperwork?",
        options: [
          "Complete, timely data determines the facility's visibility for supplies, supervision and planning — resources that save mothers",
          "It replaces the need for clinical supervision",
          "It guarantees promotion for the reporting midwife",
          "It exists to punish facilities with poor results",
        ],
        correctIndex: 0,
        explanation:
          "The system allocates by what it can see: registers and returns drive drug supply, staffing, supervision and outreach planning. A unit that reports well is a unit the district can see — and resourcing follows sight.",
        courseSlug: "community-midwifery",
      },
    ],
    flashcards: [
      {
        topic: "Health System",
        front: "The seven BEmONC signal functions?",
        back: "Parenteral antibiotics, anticonvulsants (MgSO4), uterotonics, manual removal of placenta, removal of retained products (MVA), assisted vaginal birth (vacuum), newborn resuscitation.",
      },
      {
        topic: "Health System",
        front: "What turns a BEmONC facility into CEmONC?",
        back: "Caesarean section and blood transfusion — the surgical and transfusion capacity that defines district-hospital level.",
      },
      {
        topic: "Health System",
        front: "What belongs on your peacetime map?",
        back: "True facility functions, phone numbers that answer, transport options, blood availability, theatre status — plus a referral pathway rehearsed before the emergency exists.",
      },
    ],
    sources: [
      {
        organization: "WHO, UNFPA, UNICEF, AMDD",
        title: "Monitoring emergency obstetric care: a handbook",
        year: "2009",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "National policy document — verify current edition with the Ghana Health Service.",
      },
      {
        organization: "Elsevier",
        title: "Myles' Textbook for Midwives, 17th edition",
        year: "2019",
      },
    ],
  },

  // ── 18 ─────────────────────────────────────────────────────
  {
    courseSlug: "community-midwifery",
    moduleTitle: "Population-Level Maternal Health",
    lessonTitle: "Counting What Matters: Community Data",
    description:
      "Registers, audits and dashboards are not bureaucracy — they are the mirror in which a community's mothers appear. This lesson teaches you to read that mirror and act on what it shows.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the community data sources: registers, tally sheets, monthly returns and the indicators they feed.",
      "Explain rates versus numbers, denominators and data quality.",
      "Apply audit thinking — including death and near-miss review — to turn numbers into action.",
    ],
    tags: ["data", "audit", "indicators", "dhims", "maternal health"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every line in your ANC register is a woman who walked to you; every missing line is a woman who did not. Data in community midwifery is not distant statistics — it is the community's story told in numbers, and you are one of its most important authors and its only honest reader at village level.\n\nThis lesson builds your data literacy: where the numbers come from, which ones matter for mothers and babies, how to turn counts into rates, and how audit converts yesterday's tragedy into tomorrow's protocol.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The sources you know: ANC, delivery, postnatal and family planning registers, partographs, referral slips and death records; from them, tally sheets and monthly returns feed the district system — in Ghana, DHIMS II. The indicators that matter for maternal and newborn health include antenatal contact coverage, the proportion of births that are facility births, stillbirth and early neonatal death rates, and referral completion. Always the discipline of the **denominator**: 30 births in your register means little until divided by the expected births in your catchment — 30 out of an expected 200 is a crisis, 30 out of 32 is a triumph. Good data is complete, timely, consistent with the registers and verified before submission; one careful hour a month buys your community a truthful mirror.\n\nAudit is the second half of counting. A maternal or perinatal death review asks, without blame and in confidence: what happened, why, and what will we change? Near-miss reviews ask the same of the woman who survived — often the richer lesson, because she can tell you the story the register cannot. At community level, feed the district reviews with complete records, and run your own smaller loop: the stillbirth last month, the referral that arrived too late, the village missing from the register. Then act — the point of counting is coverage: a settlement with no facility births triggers outreach, a rising adolescent pregnancy number triggers a school programme, a stock-out pattern triggers a supply escalation. Share the numbers back with the community and the team; data displayed openly becomes the community's own project rather than the midwife's private guilt.",
      },
      {
        type: "clinical_pearl",
        body: "Read the gaps, not just the lines. Your register tells two stories at once — who came, and who never did — and the second story is where your outreach lives.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Your monthly review shows 30 facility births, one fresh stillbirth, four referrals, and 40 per cent coverage when you divide by the expected births from your catchment estimate. The district meeting asks for your interpretation and plan.\n\nWhat do you tell them?\n\nAnswer: Start with the denominator: 40 per cent coverage means roughly three in five expected births happened outside the facility — that is the headline, and it defines the outreach plan of mapping the missing settlements, engaging TBAs and chiefs, and fixing transport. Next, audit the stillbirth: review the record honestly — the partograph, the referral timing, the resuscitation — identify what the system can improve and feed it to the district review without blame. Then follow the four referrals to their outcomes, because a referral that ends in silence is the system failing quietly. Close with numbers as a plan: monthly coverage tracking, defaulter tracing by name, and the specific communities targeted next. Data presented as action attracts resources; data presented as a confession attracts only sympathy.",
      },
      {
        type: "memory_trick",
        body: "Counting that matters is C-A-P: Complete the registers, Audit the outcomes (deaths and near-misses), Plan the response. Numbers without the third letter are just noise.",
      },
      {
        type: "summary",
        body: "- Sources: ANC, delivery, PNC and FP registers, partographs and referral notes feeding monthly returns (DHIMS II).\n- Key indicators: ANC coverage, proportion of facility births, stillbirth and early neonatal death rates, referral completion.\n- Denominators turn counts into truth: 30 births out of 200 expected is failure; out of 32 is near-complete coverage.\n- Audit — death and near-miss review — converts tragedy into protocol: confidential, blame-free, action-focused.\n- Count so you can act: gaps become outreach, patterns become programmes, results shared with the community.",
      },
    ],
    questions: [
      {
        topic: "Community Data",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Your register shows 30 facility births. What is needed before this number can be interpreted?",
        options: [
          "The estimated number of expected births in the catchment — the denominator",
          "The number of staff on duty that month",
          "The gestational ages of the newborns",
          "The quantity of drugs used in the same period",
        ],
        correctIndex: 0,
        explanation:
          "Counts become meaning only as rates: dividing births attended by expected births gives coverage. Without the denominator, 30 could be triumph or tragedy.",
        courseSlug: "community-midwifery",
      },
      {
        topic: "Community Data",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the core purpose of a confidential maternal or perinatal death review at community and district level?",
        options: [
          "To identify and discipline the staff member responsible for the death",
          "To compile statistics for the national annual report alone",
          "To learn what happened and why, and to change what the system does next time — without blame",
          "To decide whether the family should be compensated",
        ],
        correctIndex: 2,
        explanation:
          "Audit is a learning instrument: confidential, blame-free inquiry ending in a change of practice. Fear of punishment is exactly what such reviews are designed to remove, because fear hides the truth that saves the next mother.",
        courseSlug: "community-midwifery",
      },
      {
        topic: "Community Data",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Your coverage has risen for three months, then falls this month. What is the soundest response?",
        options: [
          "Announce a staff reprimand for the falling number",
          "Check data quality first — completeness and timeliness — then look for real causes before acting",
          "Conclude the outreach programme failed and cancel it",
          "Assume the denominator changed and resubmit a higher figure",
        ],
        correctIndex: 1,
        explanation:
          "A single month's dip may be incomplete records, a delayed tally, or a real fall. Verify data quality, then investigate true causes — a season of travel, a transport break — before choosing action. Never adjust figures to fit hope.",
        courseSlug: "community-midwifery",
      },
    ],
    flashcards: [
      {
        topic: "Community Data",
        front: "Why does the denominator matter so much in community data?",
        back: "Counts say what happened; rates say how much of the story it covers. 30 births against 200 expected is failure; against 32 is near-complete coverage.",
      },
      {
        topic: "Community Data",
        front: "What makes a monthly data submission good quality?",
        back: "Complete, timely, consistent with the registers, verified before submission — a truthful mirror, not a flattering one.",
      },
      {
        topic: "Community Data",
        front: "What does a near-miss review offer that a death review cannot?",
        back: "The survivor's own account of the delays, decisions and barriers — living testimony of where the system nearly failed, and how to fix it.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Beyond the numbers: reviewing maternal deaths and complications to make pregnancy safer",
        year: "2004",
      },
      {
        organization: "World Health Organization",
        title: "Maternal mortality fact sheet",
        url: "https://www.who.int/news-room/fact-sheets/detail/maternal-mortality",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "National policy document — verify current edition with the Ghana Health Service.",
      },
    ],
  },

  // ── 19 ─────────────────────────────────────────────────────
  {
    courseSlug: "community-midwifery",
    moduleTitle: "Population-Level Maternal Health",
    lessonTitle: "Working with Traditional Birth Attendants",
    description:
      "The healers mothers trust can be your rivals or your allies — and the outcome is mostly yours to shape. This lesson covers the partnership with TBAs that makes birth safer.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the policy shift from training TBAs to deliver toward integrating them into skilled care and referral.",
      "Explain the safe roles and agreed red lines of TBA partnership.",
      "Apply collaboration skills — respect, structure and shared review — that keep mothers safe.",
    ],
    tags: ["tba", "collaboration", "skilled birth attendance", "referral", "community"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "In many Ghanaian communities the TBA is not a rival to be defeated — she is the neighbour who has caught the last three generations of babies, the woman who accepts payment in yams, and the one who answers at midnight. Mothers trust her, and trust is the currency of safe birth.\n\nGlobal and national policy have moved decisively: the evidence shows that training TBAs to conduct deliveries does not by itself reduce maternal deaths — skilled birth attendance does. But the same evidence shows TBAs can powerfully raise antenatal attendance, referral, birth companionship and postnatal support. The art is partnership with clear roles: her trust, your skills.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Build the partnership on agreed roles: she identifies pregnancies early and walks the woman to ANC; she accompanies women to the facility as a respected birth companion; she carries danger-sign knowledge into homes and calls you at the first warning, day or night; she supports postnatally with breastfeeding promotion and family planning messages; and she reports home births so every mother enters the register. Against these, set the red lines, agreed together and revisited at joint meetings: no oxytocin or herbs to speed labour at home — rupture and death follow; no attempt to deliver an obstructed labour or a footling breech at home — the call comes at the first suspicion, not after hours of struggle; clean hands and clean cord care, with chlorhexidine per national newborn policy; and no hidden fees that frighten the poorest away from calling.\n\nSustain it with structure and respect. Monthly joint reviews where cases are discussed without scolding; referral slips she can carry; her name entered in your facility records as the caller and companion; airtime and a phone number that answers; public appreciation at durbars and supervisory visits — status is a real currency. When she calls late after a difficult night, ask why — usually transport, money or fear — and fix the barrier rather than the blame; a scolded TBA stops calling, and the next mother pays the price. Measure the partnership in the register: more first-trimester bookings from her villages, more accompanied facility births, fewer women arriving obstructed after a night at home. Her knowledge of families is your best surveillance system — treat it as an asset and she will bring it to your side.",
      },
      {
        type: "clinical_pearl",
        body: "You cannot be at every birth in your zone — but the TBA who trusts you can be. Her 2 a.m. phone call is worth more than a hundred posters on the wall.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At 2 a.m. your phone rings: Mama Adjoa, the TBA from a farming village, has been with a labouring P3 since evening. The contractions are strong, she says, but the baby is not coming, and now the mother is too tired to push well. She has given no herbs, and the woman's sister has a motorbike.\n\nWhat do you say and do — tonight, and next month?\n\nAnswer: Praise the call — you have done the right thing, bring her now. Ask the essentials quickly: hours since labour began, fetal movement, bleeding, liquor; and tell her what to bring — the woman, her notes if any, warm clothes and the family's money. Meet them at the health centre and assess: strong contractions with no descent in a tired P3 suggests obstruction, so IV fluids, catheterisation and a call-ahead referral to the district for caesarean. Next month, at the joint review, discuss this case with thanks and without blame, agree the earlier warning signs that should trigger her call, and ask what made the evening pass before the phone rang. Whatever she answers — transport fear, the family's hope, her own pride — becomes the system's next fix. Every call she makes after this one will come earlier, because tonight ended with respect.",
      },
      {
        type: "memory_trick",
        body: "Partnership is a ROPE: Roles agreed, Outreach together, Protection red lines (no oxytocin, no obstruction deliveries), Escalation by phone at the first warning. Hold the ROPE together and mothers climb to safety.",
      },
      {
        type: "summary",
        body: "- Policy shift: TBAs are integrated into skilled care and referral, not trained to deliver alone.\n- Their power: trust, early identification of pregnancy, companionship, danger-sign messages, postnatal support.\n- Red lines agreed together: no oxytocin or labour-speeding herbs at home, no obstructed-labour deliveries, clean cord care.\n- Structure sustains it: joint reviews, referral slips, a number that answers, public appreciation, blame-free problem-solving.\n- Measure the partnership in the register: earlier bookings, more facility births, fewer late arrivals.",
      },
    ],
    questions: [
      {
        topic: "TBA Partnership",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why did Ghanaian and global policy move away from training TBAs to conduct deliveries toward integrating them into referral networks?",
        options: [
          "Because TBAs refused all training offered",
          "Because evidence showed TBA delivery training alone did not reduce maternal deaths, while skilled attendance did — and TBAs add most value linked to the system",
          "Because skilled birth attendants are cheaper to train",
          "Because traditional birth attendance was made illegal in Ghana",
        ],
        correctIndex: 1,
        explanation:
          "The shift was outcome-based: mortality fell with skilled attendance, not with delivery training for TBAs — while TBAs proved genuinely valuable for ANC uptake, referral and support when integrated.",
        courseSlug: "community-midwifery",
      },
      {
        topic: "TBA Partnership",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A TBA calls you at 2 a.m. about a labouring woman she has supported since evening. What response strengthens the partnership?",
        options: [
          "Ask why she waited so long, when she knows the danger",
          "Tell her the mother should push harder and call in the morning",
          "Ignore the call; it is not your facility's problem",
          "Tell her she has done the right thing calling — bring her now — with immediate assessment and referral arranged",
        ],
        correctIndex: 3,
        explanation:
          "The first job of every TBA interaction is to make the next call come earlier: praise the call, arrange the care, and fix the reason for any delay without blame. Scolding, delay and dismissal all cost the next mother her life.",
        courseSlug: "community-midwifery",
      },
      {
        topic: "TBA Partnership",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which practice is an absolute red line in TBA partnership, whatever the tradition?",
        options: [
          "Giving oxytocin or labour-speeding herbs at home to hasten birth",
          "Accompanying a woman to the facility as a birth companion",
          "Promoting early antenatal registration among her clients",
          "Reporting home births to the midwife for the register",
        ],
        correctIndex: 0,
        explanation:
          "Uterotonics at home against a possibly obstructed labour cause rupture and death — a bright line no tradition crosses. Companionship, ANC promotion and reporting are exactly the roles the partnership is built on.",
        courseSlug: "community-midwifery",
      },
    ],
    flashcards: [
      {
        topic: "TBA Partnership",
        front: "What is the policy shift on TBAs, and its evidence base?",
        back: "Away from training TBAs to deliver, toward integrating them into skilled care: TBA delivery training alone did not reduce maternal deaths, but integration raises ANC uptake, referral and support.",
      },
      {
        topic: "TBA Partnership",
        front: "Name the partnership's red lines.",
        back: "No oxytocin or labour herbs at home; no attempted delivery of obstruction or breech at home — call at first suspicion; clean hands and clean cord care.",
      },
      {
        topic: "TBA Partnership",
        front: "What sustains a TBA partnership over years?",
        back: "Respect and structure: joint blame-free reviews, referral slips, a phone that answers, public appreciation — and fixing the barriers behind every late call.",
      },
    ],
    sources: [
      {
        organization: "Cochrane (Wiley)",
        title: "Traditional birth attendant training for improving health behaviours and pregnancy outcomes (Cochrane Review CD005460)",
        year: "2012",
      },
      {
        organization: "World Health Organization, ICM, FIGO",
        title: "Making pregnancy safer: the critical role of the skilled attendant (joint statement)",
        year: "2004",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "National policy document — verify current edition with the Ghana Health Service.",
      },
    ],
  },
];
