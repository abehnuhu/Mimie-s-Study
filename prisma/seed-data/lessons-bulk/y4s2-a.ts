// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 4, Semester 2 — Batch A (final semester)
// 16 lessons: Professional Practice & Licensure (8) +
// Nursing Research Project (8), anchored to prisma/seed-data/curriculum.ts
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "nursing-practice-4",
    moduleTitle: "Becoming Registered",
    lessonTitle: "Licensure & the Nursing and Midwifery Council",
    description:
      "The gate between student and practitioner — what the Council does, what registration really grants you, and how to keep it for a whole career.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe the role of the Nursing and Midwifery Council of Ghana in regulating nursing training and practice.",
      "Explain the registration and licensing journey from final-year student to registered general nurse.",
      "Apply the accountability, renewal and conduct duties that come with holding a licence.",
    ],
    tags: ["licensure", "registration", "regulation", "accountability"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "For four years, the Nursing and Midwifery Council of Ghana has been a name printed on your syllabus — the body that approved your school's curriculum, set the standard your examinations were marked against, and kept the register you are now about to join. In your final semester, that name becomes a door.\n\nThis lesson walks you through what the Council actually does, how a final-year student becomes a nurse in law, and what the licence obliges you to do — because the licence grants authority and accountability in exactly equal measure. Understand this now and every year that follows is simple; misunderstand it and the profession has a way of teaching you the difference.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The Council is Ghana's regulator of nursing training and practice. It accredits training institutions, sets curricula, conducts the licensing examination, maintains the register of qualified practitioners, assigns you a personal registration number, renews licences and investigates complaints about conduct. It is not your employer and not a professional association — the Council sets and enforces the standard; employers and associations work inside it.\n\nYour journey runs in steps. As a final-year student you apply to write the Council's licensing examination. Pass it, and your name enters the register for your category — for the BSc general programme, as a registered general nurse — with a registration that identifies you for the rest of your career. Registration is what transforms 'I have a nursing degree' into 'I am a nurse in law': you may use the protected title, take up staff-nurse posts, and be held fully accountable for the care you give.\n\nKeeping it is a duty, not a souvenir. Licences are renewed periodically, and the Council expects documented continuing professional development as part of renewal. The details of credit requirements evolve, so check the current requirements directly with the Council rather than relying on corridor talk. Practising without registration, practising outside your registered category, or breaching the Code of Professional Conduct can all end up before the Council's disciplinary machinery — the register gives, and the register can take away.",
      },
      {
        type: "table",
        title: "What the Council's work means for you",
        body: "| Council function | What it means for you |\n|---|---|\n| Accredits training institutions and curricula | Your BSc was taught to a Council-approved standard |\n| Conducts the licensing examination | The gate between student and practitioner |\n| Maintains the register of practitioners | Your name, your number, your category |\n| Renews licences and expects CPD | Staying current is a condition, not a hobby |\n| Investigates conduct and fitness to practise | Your accountability has teeth — keep yours clean |",
      },
      {
        type: "clinical_pearl",
        body: "Your registration grants authority and accountability in equal measure. You cannot accept the first and decline the second — the licence is a promise the Council can withdraw.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Your aunt runs a small private clinic and, hearing that you have finished your finals, offers you a 'staff nurse' post starting Monday — good pay, your own uniform, and, as she puts it, 'nobody will come asking.' You are still waiting for your results and your registration.\n\nWhat is at stake in her kind offer?\n\nAnswer: Until the Council registers you, you are not yet a nurse in law — you may not use the title, hold a staff-nurse post, or carry the responsibilities of one. Working 'as the nurse' before registration is practising without registration, and it could follow you straight into your own fitness-to-practise record. The honest answer to your aunt is a warm no: complete the examination, receive your registration, and then take the post properly — and meanwhile, if she needs help, it must sit under a clearly defined support role with a registered nurse responsible for the clinical care. The licence is the door; walking through it early is not a shortcut, it is an offence.",
      },
      {
        type: "memory_trick",
        body: "The PIN on your chest is a promise: Practise as trained, In your scope, Nothing unregistered — the Council holds all three.",
      },
      {
        type: "summary",
        body: "- The Nursing and Midwifery Council of Ghana regulates training, registers practitioners, licenses, renews and disciplines.\n- Registration — earned through the licensing examination — turns a degree into a legal title and holds you accountable for it.\n- Renewal expects documented CPD; check current requirements with the Council, not hearsay.\n- Practising without registration, or outside your category, is an offence that can follow you into your career.",
      },
    ],
    questions: [
      {
        topic: "Licensure and Regulation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which body regulates the education and practice of nurses in Ghana?",
        options: [
          "Ghana Health Service",
          "The Nursing and Midwifery Council of Ghana",
          "Ghana College of Nurses and Midwives",
          "The Ministry of Health",
        ],
        correctIndex: 1,
        explanation:
          "The Council accredits training, runs the licensing examination, keeps the register and disciplines conduct. Ghana Health Service employs nurses, the Ghana College of Nurses and Midwives offers postgraduate specialisation, and the Ministry of Health sets broad policy — regulation itself belongs to the Council.",
        courseSlug: "nursing-practice-4",
      },
      {
        topic: "Licensure and Regulation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What does registration with the Council legally change for a graduate?",
        options: [
          "It guarantees employment in the public sector",
          "It permits use of the protected title and brings full accountability for your practice",
          "It transfers accountability from you to your employer",
          "It exempts you from further assessment for the rest of your career",
        ],
        correctIndex: 1,
        explanation:
          "Registration is authority plus accountability: the law recognises you as a nurse, and you answer — to the Council, your employer and the courts — for the care you give. It guarantees no job, shifts no responsibility, and expires without renewal.",
        courseSlug: "nursing-practice-4",
      },
      {
        topic: "Licensure and Regulation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A graduate still awaiting results is offered a staff-nurse post at a relative's clinic, with the assurance that 'nobody will ask.' The professional response is to…",
        options: [
          "Accept — relatives' clinics are exempt from registration rules",
          "Accept but avoid writing in the patients' notes",
          "Decline the nursing role until registration is complete, offering only clearly defined support duties",
          "Accept now and register later, since the Council is informed eventually",
        ],
        correctIndex: 2,
        explanation:
          "Practising before registration is an offence no matter who owns the clinic or who fails to ask. The safe path is to wait for the register and take the post properly; meanwhile only non-nursing support roles are legitimate.",
        courseSlug: "nursing-practice-4",
      },
      {
        topic: "Licensure and Regulation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A colleague insists the current CPD requirement for licence renewal is a fixed number of credits, quoting a senior nurse. Before planning your CPD, you should…",
        options: [
          "Follow the senior's figure — seniors are always current",
          "Assume last year's requirement still applies",
          "Copy whatever circulates in a nurses' WhatsApp group",
          "Verify the current requirement directly with the Nursing and Midwifery Council of Ghana",
        ],
        correctIndex: 3,
        explanation:
          "Renewal requirements are set by the regulator and revised over time. The Council itself is the only reliable source for the current credit requirements and documentation rules — hearsay, memory and forwarded messages are not.",
        courseSlug: "nursing-practice-4",
      },
    ],
    flashcards: [
      {
        topic: "Licensure and Regulation",
        front: "What is the role of the Nursing and Midwifery Council of Ghana?",
        back: "National regulator: accredits training institutions, conducts the licensing examination, maintains the register, renews licences and investigates conduct.",
      },
      {
        topic: "Licensure and Regulation",
        front: "What does registration legally grant?",
        back: "Authority to use the protected title and practise as a registered nurse — together with full accountability for the care you give.",
      },
      {
        topic: "Licensure and Regulation",
        front: "What does licence renewal expect of you?",
        back: "Documented continuing professional development; requirements evolve, so verify current details with the Council.",
      },
      {
        topic: "Licensure and Regulation",
        front: "Can you work 'as the nurse' while awaiting your results?",
        back: "No — practising before registration is an offence. Wait for the register, and take only clearly defined support roles in the meantime.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Registration and Licensing of Nurses: Requirements and Procedures",
        note: "National regulatory source — verify current requirements and fees on the Council's official publications.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct",
        note: "The conduct standard your licence is held against — verify the current edition.",
      },
      {
        organization: "World Health Organization",
        title: "State of the World's Nursing 2020: Investing in Education, Jobs and Leadership",
        year: "2020",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "nursing-practice-4",
    moduleTitle: "Becoming Registered",
    lessonTitle: "Your First Job: Applying & Interviewing",
    description:
      "Where Ghanaian nurses actually work, how applications really move, and how to walk into an interview already half-belonging there.",
    difficulty: "Easy",
    durationMin: 10,
    objectives: [
      "Identify the main employers of registered nurses in Ghana and how their recruitment differs.",
      "Describe how to prepare an application letter, a CV and a complete interview folder.",
      "Apply a structured approach to the clinical scenario questions nursing panels love.",
    ],
    tags: ["job applications", "interviews", "recruitment", "first job"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Somewhere between your licensing examination and your first pay slip sits the least-taught skill of final year: getting the job. The good news is that a BSc nurse is welcome almost everywhere in Ghana's health system. The better news is that interviews are learnable — panels ask predictable questions, and the clinical scenarios they favour have answer shapes you can practise until they are reflexes.\n\nThis lesson maps the employers, the paperwork and the panel, so that when a vacancy notice appears you move with a plan instead of a panic.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Know the terrain. Most nurses serve with the Ghana Health Service — regional and district hospitals, polyclinics, health centres and CHPS compounds — through a recruitment process that involves application, interview and financial clearance before posting, and it can take months. Teaching hospitals, the security services and other quasi-government institutions recruit separately. CHAG — the Christian Health Association of Ghana — runs mission hospitals and clinics across the country, especially in rural areas, and recruits directly. Private hospitals and clinics, and NGOs, advertise individually. Apply broadly and in parallel; the system rewards patience with paperwork.\n\nPrepare the folder. A typed application letter addressed correctly; a tight, truthful CV — your registration status, education, clinical postings with units and dates, certificates and workshops, and two or three referees who have agreed to speak for you; photocopies of everything. For the interview itself: research the facility beforehand, arrive early and tidy, greet the panel, and expect three kinds of questions — about you, about your motivation for that facility, and clinical scenarios that test how you think at 2am. When they ask 'do you have any questions?', ask about orientation and mentorship for new graduates — it signals exactly the maturity they hope for.",
      },
      {
        type: "table",
        title: "The questions behind the questions",
        body: "| What the panel asks | What it is really testing |\n|---|---|\n| 'Tell us about yourself' | Whether you can reflect on your journey with grounding, not rambling |\n| 'Why this facility?' | Did you research us — or apply everywhere blindly |\n| 'How would you handle an angry relative?' | Composure, listening and escalation — not matching volume |\n| 'A doctor gives an order you believe is wrong — what do you do?' | Closed-loop communication and respectful speaking up |\n| 'Where do you see yourself in five years?' | Growth thinking: specialisation, further study, service |",
      },
      {
        type: "case",
        title: "In the panel room",
        body: "The interview is going well until the senior matron leans forward: 'Night duty. Your post-operative patient in bed three is looking worse — pulse rising, blood pressure drifting down, the dressing is soaked. The duty doctor is not answering the phone. Walk us through your response.'\n\nWhat structure does the panel want to hear?\n\nAnswer: They want safe thinking in order, not heroics. Assess the patient fully — airway, breathing, circulation, conscious level, and the trend in the observations — then act within your scope: position him safely, ensure oxygen is available as prescribed, prepare intravenous access equipment and monitoring. Then escalate without delay: re-call the doctor, inform the ward's senior or nurse-in-charge, and move up the on-call chain until someone answers — because a deteriorating patient cannot wait for a courtesy. Document the times, the findings, the calls and the responses. End the answer with the lesson the scenario carries: you escalate early, and you never sit alone with a worry. Panels hire nurses who will be safe at 2am when nobody is watching — this answer is what safe sounds like.",
      },
      {
        type: "memory_trick",
        body: "Walk in R.E.A.D.Y: Research the facility, Examples from your postings rehearsed aloud, Answers structured calmly, Documents complete in one folder, Your own questions ready at the end.",
      },
      {
        type: "summary",
        body: "- Employers: Ghana Health Service (interview then financial clearance before posting), teaching and quasi-government hospitals, CHAG mission facilities, private hospitals and NGOs — apply broadly and in parallel.\n- A complete folder — letter, truthful CV, certificates, referees — moves faster than a beautiful cover story.\n- Panels test reflection, motivation and 2am judgment: answer clinical scenarios as assess, act within scope, escalate, document.\n- Ask about orientation and mentorship — new-graduate maturity is a hiring signal.",
      },
    ],
    questions: [
      {
        topic: "Job Applications and Interviews",
        type: "MCQ",
        difficulty: "Easy",
        stem: "CHAG facilities in Ghana are best described as…",
        options: [
          "Private hospitals owned by foreign investors",
          "Faith-based mission hospitals and clinics serving alongside the public system",
          "University teaching hospitals",
          "Facilities run exclusively by the Ghana Health Service",
        ],
        correctIndex: 1,
        explanation:
          "CHAG — the Christian Health Association of Ghana — coordinates mission hospitals and clinics with a strong rural presence, recruiting their own nursing staff alongside the public system.",
        courseSlug: "nursing-practice-4",
      },
      {
        topic: "Job Applications and Interviews",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Asked in an interview how you would respond to a deteriorating patient at night when the doctor cannot be reached, the strongest answer includes…",
        options: [
          "Managing everything alone to demonstrate independence",
          "Reassuring the panel that such things rarely happen",
          "Assessing fully, acting within scope, escalating up the chain until someone responds, and documenting times and findings",
          "Waiting for the morning round to avoid over-calling doctors",
        ],
        correctIndex: 2,
        explanation:
          "Panels are listening for safe structure, not heroics: full assessment, care within your scope, relentless escalation until someone answers, and a documented trail. Lone management and quiet waiting are the answers that end interviews.",
        courseSlug: "nursing-practice-4",
      },
      {
        topic: "Job Applications and Interviews",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A recruitment notice asks applicants to submit 'copies of certificates and registration'. The professional way to prepare is…",
        options: [
          "Send originals by post and hope they are returned",
          "Arrange a folder with the letter, CV, photocopies and referee contacts, keeping originals safely with you",
          "Ask a friend to submit the same CV for both of you",
          "Delay applying until everything can be submitted digitally",
        ],
        correctIndex: 1,
        explanation:
          "Originals stay with you; verified copies travel. A complete, organised folder — letter, CV, certificates, referees — signals the same organised nurse who will keep a tidy chart, and applications submitted late or never win nothing.",
        courseSlug: "nursing-practice-4",
      },
      {
        topic: "Job Applications and Interviews",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "'Why do you want to work here?' lands best when your answer…",
        options: [
          "Praises the hospital's reputation in general terms",
          "Names something specific you learned about the facility and connects it to your goals",
          "Explains that any job will do for now",
          "Focuses entirely on salary and accommodation",
        ],
        correctIndex: 1,
        explanation:
          "Specifics prove you researched the facility and chose it: its patient population, its reputation in a specialty, its community. General flattery, desperation and salary-first answers all tell the panel you did not.",
        courseSlug: "nursing-practice-4",
      },
    ],
    flashcards: [
      {
        topic: "Job Applications and Interviews",
        front: "Name the main employers of nurses in Ghana.",
        back: "Ghana Health Service facilities (recruitment with financial clearance), teaching and quasi-government hospitals, CHAG mission facilities, private hospitals and NGOs.",
      },
      {
        topic: "Job Applications and Interviews",
        front: "Why can public-sector posting take months after the interview?",
        back: "Ghana Health Service recruitment includes financial clearance before posting — apply broadly and in parallel, and keep copies of everything.",
      },
      {
        topic: "Job Applications and Interviews",
        front: "What shape should interview clinical-scenario answers take?",
        back: "Assess fully, act within scope, escalate up the chain until someone responds, and document times and findings.",
      },
      {
        topic: "Job Applications and Interviews",
        front: "What should you ask when the panel invites your questions?",
        back: "About orientation and mentorship for new graduates — it signals the maturity panels are hunting for.",
      },
    ],
    sources: [
      {
        organization: "Ghana Health Service",
        title: "Human Resource for Health: Recruitment and Posting Guidelines",
        note: "Employer source — processes and clearance timelines change; verify current requirements with GHS Human Resources.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Registration and Licensing of Nurses: Requirements and Procedures",
        note: "Employers verify registration status — confirm yours is current before applying.",
      },
      {
        organization: "Pearson",
        title: "Kozier & Erb's Fundamentals of Nursing",
        year: "2021",
        note: "Professional development chapters — verify current edition.",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "nursing-practice-4",
    moduleTitle: "Becoming Registered",
    lessonTitle: "Probation, Mentorship & the First Year",
    description:
      "Registration opens the door; the first year is its own course — probation, preceptors, transition shock and the habits that keep new nurses standing.",
    difficulty: "Easy",
    durationMin: 10,
    objectives: [
      "Describe what probation and confirmation mean for a newly recruited nurse.",
      "Explain the roles of a preceptor and a mentor in the first years of practice.",
      "Apply the habits that protect new nurses through transition shock.",
    ],
    tags: ["probation", "mentorship", "transition", "first year"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Nobody expects the newly registered nurse to know everything. The system says so out loud: it structures your first working period as a probation, gives you seniors whose job includes growing you, and quietly accepts that the first year of practice is one of the steepest learning curves of your life. Knowing how the machinery works — and what is happening inside you while you climb — turns a hard year into a survivable, even wonderful one.\n\nThis lesson is about that machinery: probation, preceptorship, mentorship, and the protection of the nurse holding it all together — you.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Probation is a defined early period — commonly a year or more, depending on your employer and scheme of service — in which you practise as a fully registered nurse but with closer supervision, structured orientation and regular feedback. It ends in appraisal and confirmation into the service. Treat it as protected learning, not surveillance: the ward wants you to succeed and needs the paperwork to prove it. Keep your own record of duties, trainings and feedback so the appraisal conversation is a discussion of evidence, not of memory.\n\nAround you, two people matter. Your **preceptor** — usually a named senior on your ward — orients you day by day: the rota, the protocols, where the resuscitation trolley lives, how this unit really writes its notes. Your **mentor** is the longer-term relationship, the senior you can still phone a year later; seek one deliberately, and be worth their time. Meanwhile, expect **transition shock**: months of feeling like an impostor, deciding alone what you once decided under supervision. Almost everyone feels it; it fades with supported experience, not with severity. The protections are unglamorous and non-negotiable: debrief after hard cases, take supervision seriously, build a peer circle you can call at 2am, guard sleep like a clinical standard, and grieve your losses properly instead of stacking them.",
      },
      {
        type: "clinical_pearl",
        body: "You cannot pour from an empty calabash. Rest, debriefing and friendship are professional equipment, not indulgences — a rested new nurse is a safer one.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Two months into her first posting, a new nurse has a brutal night — a patient she has cared for for three days deteriorates and dies despite everything, and the resuscitation is chaotic. The next day she finds herself crying in the store room between rounds, wondering whether she was ever cut out for this. A senior finds her there and says quietly, 'My second year nearly ended me too. Come and sit with the others.'\n\nWhat is happening, and what does a healthy response look like?\n\nAnswer: This is normal transition distress, arriving exactly when responsibility is new and the coping muscles are still building — not evidence that she chose the wrong profession. The healthy path is what the senior offered: a formal debrief of the resuscitation, honest conversation with peers and supervisors instead of isolation, and deliberate rest and boundaries while the identity settles. Hiding it and soldiering on is the unhealthy version — the armour cracks months later, usually at a worse moment. And one day, she will be the senior saying those words in a store-room doorway. That is how the profession keeps its nurses: community, honest reflection, and time.",
      },
      {
        type: "quiz_prompt",
        title: "The correction in front of the patient",
        body: "Your preceptor corrects your wound-dressing technique in front of the patient — briskly — and you feel your ears burn. What is the professional move, and why does it work?\n\nAnswer: For the patient's sake, absorb the correction gracefully in the moment and continue safely. Afterwards, ask your preceptor privately to walk you through the technique so you can practise it properly — and thank them for the catch. It works because it separates the patient's safety from your ego, then converts the embarrassment into learning. Preceptors correct because they are accountable for the ward; nurses who ask for the walkthrough are the ones they trust with the difficult cases.",
      },
      {
        type: "memory_trick",
        body: "Hold up your first year with a STOOL: a Senior who guides you, Training taken seriously, Orientation learned properly, One peer at least who understands, and Leave — time off actually taken.",
      },
      {
        type: "summary",
        body: "- Probation is structured, supervised early practice ending in appraisal and confirmation — keep your own evidence of duties and feedback.\n- A preceptor orients you to this ward; a mentor walks with you for years — deliberately acquire both.\n- Imposter feelings in the first months are normal transition shock and fade with supported experience.\n- Debriefs, supervision, a 2am peer circle, protected sleep and proper grieving are the protections.",
      },
    ],
    questions: [
      {
        topic: "Probation and Mentorship",
        type: "MCQ",
        difficulty: "Easy",
        stem: "The purpose of a probationary period for a newly recruited nurse is to…",
        options: [
          "Punish early mistakes before confirmation",
          "Provide supervised, structured early practice with feedback before confirmation",
          "Delay salary increments for new staff",
          "Test loyalty to the employer",
        ],
        correctIndex: 1,
        explanation:
          "Probation exists because the first year is a learning curve: full registration with closer supervision, orientation and regular feedback, ending in appraisal and confirmation. It is protection, not punishment.",
        courseSlug: "nursing-practice-4",
      },
      {
        topic: "Probation and Mentorship",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which statement best distinguishes a mentor from a preceptor?",
        options: [
          "A mentor is assigned for the first two weeks only",
          "A preceptor always holds the longer-term, career-shaping relationship",
          "A preceptor orients you to a specific unit, while a mentor is a longer-term guide you can return to for years",
          "They are identical roles with different salaries",
        ],
        correctIndex: 2,
        explanation:
          "The preceptor's job is day-to-day orientation to this ward and its ways; the mentor's is the long arc of your growth — the senior you can still call a year later. Both deserve your gratitude; neither is the other.",
        courseSlug: "nursing-practice-4",
      },
      {
        topic: "Probation and Mentorship",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Two months into practice, a new nurse feels she is 'pretending' and will soon be exposed. In the first months of practice this feeling is…",
        options: [
          "A sign she should leave the profession",
          "Best handled by hiding it from colleagues",
          "Caused only by genuinely inadequate training",
          "A common part of role transition that fades with supported experience",
        ],
        correctIndex: 3,
        explanation:
          "Imposter feelings are a well-recognised feature of the student-to-practitioner transition; they settle with debriefing, supervision and supported experience — not with silence, and rarely with a career change.",
        courseSlug: "nursing-practice-4",
      },
      {
        topic: "Probation and Mentorship",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which combination best protects a new nurse's resilience in the first year?",
        options: [
          "Structured debriefs, supervision, peer support and protected rest",
          "Longer hours to build confidence quickly",
          "Avoiding difficult cases until she feels ready",
          "Keeping feelings private to appear professional",
        ],
        correctIndex: 0,
        explanation:
          "Resilience is built by processing hard experiences with support and recovering properly between them. Avoidance and overwork both delay the transition and deepen distress; private suffering is not professionalism.",
        courseSlug: "nursing-practice-4",
      },
    ],
    flashcards: [
      {
        topic: "Probation and Mentorship",
        front: "What does probation involve and how does it end?",
        back: "A defined period — commonly a year or more by scheme of service — of supervised, feedback-rich practice, ending with appraisal and confirmation.",
      },
      {
        topic: "Probation and Mentorship",
        front: "Preceptor or mentor — which is which?",
        back: "The preceptor orients you day by day to a specific unit; the mentor is the longer-term senior who walks with your career for years.",
      },
      {
        topic: "Probation and Mentorship",
        front: "What is transition shock?",
        back: "The normal early months of feeling like an impostor when decisions become yours alone; it fades with supervision, debriefing and peer support.",
      },
      {
        topic: "Probation and Mentorship",
        front: "Name four protections for a new nurse's wellbeing.",
        back: "Formal debriefs after hard cases, real supervision, a peer you can call at 2am, and protected sleep and time off.",
      },
    ],
    sources: [
      {
        organization: "Ghana Health Service",
        title: "Orientation and Probation Guidelines for Newly Recruited Staff",
        note: "Employer practice — lengths and procedures vary by scheme of service; confirm with your unit's administration.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct",
        note: "Accountability and the duty to work within competence during early practice — verify current edition.",
      },
      {
        organization: "Pearson",
        title: "Kozier & Erb's Fundamentals of Nursing",
        year: "2021",
        note: "Professional socialisation and transition-to-practice chapters — verify current edition.",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "nursing-practice-4",
    moduleTitle: "Professional Communication",
    lessonTitle: "Speaking Up: Advocacy & Escalation",
    description:
      "The patient's voice when they have none, and your own voice when it matters most — advocacy, graded assertiveness and escalation that does not wait.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe advocacy as a core nursing duty and identify who most needs it.",
      "Explain graded assertiveness, closed-loop communication and the SBAR handover.",
      "Apply an escalation path when a patient is deteriorating and the response is slow.",
    ],
    tags: ["advocacy", "speaking up", "escalation", "sbar"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Some of the most important things a nurse does are said, not done. The unconscious patient cannot say the pain is returning. The frightened grandmother who nods politely at everything may not have understood a word of the discharge teaching. The patient who does not share the ward's language smiles through the consent explanation. For all of them, you are the voice — and advocacy, speaking for the patient when they cannot safely speak for themselves, is not a soft extra to nursing. It is the job.\n\nThe same voice serves safety in another direction: when you see a patient deteriorating, or an instruction that does not fit the patient in front of you, speaking up is a professional duty with a method — and this lesson teaches the method.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Advocacy means acting to protect the patient's interests: informing, checking understanding with teach-back, ensuring consent is genuinely informed, involving family appropriately, and escalating concerns to whoever can act on them. It belongs most to those with the least voice — the unconscious, the confused, the very young and very old, and those separated from the ward by language.\n\nWith colleagues, two tools carry your words safely. **Closed-loop communication**: repeat every verbal order back in your own words — 'so that is 15 milligrams, intramuscular, now?' — and wait for confirmation before acting. **Graded assertiveness** lets you rise without rudeness when a concern is not landing: first 'I am concerned about…', then 'I am uncomfortable with…', then 'This is a safety issue — I need you now.' Each rung is respectful; together they climb.\n\nEscalation runs a path you should learn in your first week on any ward: ward senior or nurse-in-charge, then duty doctor, then — out of hours — the on-call nursing management. Escalate with facts, in SBAR form: Situation, Background, Assessment, Recommendation. Write down the times, the findings, who was told and what was advised. And if you find yourself debating whether to escalate, treat the debate itself as the trigger.",
      },
      {
        type: "table",
        title: "The graded assertiveness ladder",
        body: "| Rung | The words | When to use it |\n|---|---|\n| 1 — Concerned | 'I am concerned about bed three…' | Early unease, a first mention |\n| 2 — Uncomfortable | 'I am uncomfortable with this plan…' | The concern was not acted on, or the picture is progressing |\n| 3 — Safety | 'This is a safety issue — I need you at the bedside now.' | Deterioration, or two quieter rungs ignored |",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A busy night shift. The duty doctor is writing notes at the station; you notice your post-operative patient in bed three has a pulse climbing from 78 to 102, a blood pressure drifting down, a soaked dressing and pale, clammy skin. The doctor has not turned around.\n\nWhat do you say — and how?\n\nAnswer: Speak directly, immediately, in facts rather than criticism: 'Doctor, I am concerned about bed three — pulse 102 and rising, blood pressure down, dressing soaked, he is clammy.' That is rung one, loud enough to interrupt the note-writing, because a patient sliding toward shock is a disease of minutes. If the response is slow, climb: 'I am uncomfortable…' then 'This is a safety issue.' Escalate to the senior nurse in parallel, position the patient safely, prepare monitoring and intravenous access, and document times and findings. A doctor interrupted once for this does not resent it the second time — and a team that resents being interrupted for it is not yet a team.",
      },
      {
        type: "memory_trick",
        body: "Remember your CUS words: Concerned, Uncomfortable, Safety — one C at a time until someone acts. And close every loop before your hands move.",
      },
      {
        type: "summary",
        body: "- Advocacy is the patient's voice — most needed by the unconscious, the confused, the very young, the very old and those divided from the ward by language.\n- Closed-loop communication: read verbal orders back in your own words and wait for confirmation.\n- Graded assertiveness climbs the CUS rungs — concerned, uncomfortable, safety — respectful and insistent at once.\n- Escalate early up the ward chain with SBAR facts and documentation; internal debate about escalating is itself the trigger.",
      },
    ],
    questions: [
      {
        topic: "Advocacy and Escalation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "On a busy ward, which patient most needs the nurse acting as advocate?",
        options: [
          "An articulate young teacher awaiting discharge",
          "A visiting official asking for a private room",
          "A confused elderly patient who cannot explain her symptoms",
          "A colleague's relative admitted for observation",
        ],
        correctIndex: 2,
        explanation:
          "Advocacy belongs most to those with the least voice. The confused patient cannot report her symptoms, question her plan or refuse what harms her — the nurse's observations and questions must speak for her.",
        courseSlug: "nursing-practice-4",
      },
      {
        topic: "Advocacy and Escalation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A doctor phones a verbal drug order to the ward at night. Your first response is to…",
        options: [
          "Write it down quietly and follow it exactly",
          "Ask a colleague to overhear the call",
          "Read it back in your own words and wait for confirmation",
          "Check the prescription later on the chart",
        ],
        correctIndex: 2,
        explanation:
          "Closed-loop communication means reading the order back in your own words and waiting for confirmation — most verbal-order errors are caught precisely here, in the echo.",
        courseSlug: "nursing-practice-4",
      },
      {
        topic: "Advocacy and Escalation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which sequence describes graded assertiveness?",
        options: [
          "State concern, state the fact, state the safety issue, state your suggestion",
          "Ask permission, wait, report to the matron, file a complaint",
          "Whisper to a colleague, document quietly, raise it at the next meeting",
          "Repeat the order, follow it, report the outcome, request review",
        ],
        correctIndex: 0,
        explanation:
          "Graded assertiveness starts gently and rises in urgency — concerned, uncomfortable, safety — so you can be heard without being rude, and be insistent without being aggressive.",
        courseSlug: "nursing-practice-4",
      },
      {
        topic: "Advocacy and Escalation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "At 2am your post-operative patient's pulse is rising and his blood pressure falling; the duty doctor is slow to respond. The best next step is to…",
        options: [
          "Wait one hour and recheck, to avoid over-calling doctors",
          "Note the trend for the morning round",
          "Ask the family to phone the doctor themselves",
          "Escalate up the chain — senior nurse, then on-call management — while acting within your scope and documenting",
        ],
        correctIndex: 3,
        explanation:
          "Deterioration is a disease of minutes. Escalation continues until someone answers: re-call the doctor, inform the senior, move up the on-call chain — all while positioning and preparing the patient within your scope and writing times and findings down.",
        courseSlug: "nursing-practice-4",
      },
    ],
    flashcards: [
      {
        topic: "Advocacy and Escalation",
        front: "What is advocacy in nursing?",
        back: "Acting to protect the patient's interests — informing, checking understanding, ensuring real consent and escalating to whoever can act — most of all for those with the least voice.",
      },
      {
        topic: "Advocacy and Escalation",
        front: "What are the CUS words of graded assertiveness?",
        back: "Concerned, Uncomfortable, Safety — the escalating rungs that get a concern heard without aggression.",
      },
      {
        topic: "Advocacy and Escalation",
        front: "What is closed-loop communication?",
        back: "Repeating an instruction back in your own words and waiting for confirmation before acting — errors are caught in the echo.",
      },
      {
        topic: "Advocacy and Escalation",
        front: "What does SBAR stand for?",
        back: "Situation, Background, Assessment, Recommendation — the structure of a crisp escalation call.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Patient Safety Curriculum Guide: Multi-professional Edition",
        year: "2011",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct",
        note: "The duty to act in the patient's interest and escalate concerns — verify current edition.",
      },
      {
        organization: "Pearson",
        title: "Kozier & Erb's Fundamentals of Nursing",
        year: "2021",
        note: "Communication and patient advocacy chapters — verify current edition.",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "nursing-practice-4",
    moduleTitle: "Professional Communication",
    lessonTitle: "Conflict & Difficult Conversations",
    description:
      "Wards run on pressure and people — handling conflict without casualties, and the conversations nobody enjoys but every nurse must have.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe the common sources of conflict on a nursing unit.",
      "Explain ground rules for resolving conflict professionally and when to escalate it.",
      "Apply de-escalation and the SPIKES structure to difficult conversations with patients and families.",
    ],
    tags: ["conflict", "difficult conversations", "de-escalation", "communication"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Put tired people, high stakes, limited resources and frightened families in one building and conflict is not a possibility — it is a schedule. Rotas, handover disagreements, differing views of a patient's care, a relative carrying more fear than the disease itself: all of it is normal. What is not fixed by nature is how conflict is handled, and that is what this lesson trains — because handled badly, conflict poisons a ward for months; handled well, it can actually improve care.\n\nOne rule stands above all the others: the patient is never a spectator to your disagreements.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "For colleague conflict, ground rules beat good intentions. Address the problem, not the person. Take it away from the bedside — a sentence like 'let us finish this in the office' has prevented more ward wars than any policy. Listen fully before answering; separate the heat from the issue; agree a concrete next step. If it will not resolve, escalate through the proper channels — nurse-in-charge, unit manager, matron, human resources — as information, not as vengeance.\n\nFor frightened, angry families, de-escalation is a clinical skill. Lower your own voice; listen without interrupting even when the content is unfair; acknowledge the feeling before the facts — 'I can see how frightening this wait has been'; explain what you honestly can, admit what you cannot, and never argue back or match volume. Know your limits: when anger becomes threat or obstruction of care, hand over to a senior and keep everyone safe.\n\nWhen the conversation carries hard news — a death, a serious diagnosis, a complication — steadiness has a structure. **SPIKES**: choose a private Setting; ask what the family already Perceives; seek an Invitation to share; give Knowledge in small pieces; respond to the Empathy in the room before pressing on; agree a Strategy and the next contact. Use a proper interpreter for languages you do not share — a child must never translate medical news. And when a complaint does arrive, treat it as information: listen, document, and follow the facility's process to its end.",
      },
      {
        type: "callout",
        title: "The most under-rated safety sentence on any ward",
        body: "'Let us take this to the office.' It protects the patient from the spectacle, the family from an audience, and you from saying something you will spend a month regretting.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A man whose father's theatre case has been delayed — again, as he sees it — by an arriving emergency storms up to the nurses' station shouting, with other patients watching. You are the nurse on duty.\n\nWhat is your sequence?\n\nAnswer: First, yourself: lower your voice below his — volume is a ladder, and somebody has to step down it. Acknowledge before explaining: 'Sir, I can see this morning has been long and frightening.' Move the conversation somewhere private — 'please, come with me to the office' — with a senior colleague if available. Listen fully: interruptions now will cost twice as many minutes later. Then be honest within confidentiality: an emergency took the theatre, his father remains stable and has been reviewed, here is what I can tell you and what I will find out and when. Agree one concrete thing — you will update him personally at the next check — and keep that promise. If he remains aggressive or threatening, safety comes first: involve the senior and security per policy, and document the episode factually. You did not cause his fear; your job is to make sure the fear does not become the ward's problem.",
      },
      {
        type: "quiz_prompt",
        title: "The late handover",
        body: "A colleague hands over late and incomplete for the third time this month, and yesterday you nearly gave a medication based on a gap in her report. You are angry. What is the professional sequence?\n\nAnswer: Choose a calm, private moment — not the middle of the next handover. Lead with the risk, not the person: 'When the handover is incomplete, I miss things — yesterday it nearly reached a medication.' Agree a fix: a written prompt, a minute earlier start, whatever makes the system carry the memory instead of tempers. If the pattern persists after that, take it to the nurse-in-charge as a safety concern, documented and dated. Reprimanding her publicly would buy you an apology and cost you a colleague — and the ward runs on both of you.",
      },
      {
        type: "memory_trick",
        body: "L.E.A.P. into hard conversations: Listen fully, Empathise with the feeling, Ask what would help, Partner on the next step — and keep your voice one rung below theirs.",
      },
      {
        type: "summary",
        body: "- Conflict on a ward is normal; the patient must never watch it happen.\n- Ground rules for colleagues: problem not person, off the ward, listen first, agree a step, escalate through channels if unresolved.\n- De-escalation for families: lower your voice, acknowledge the feeling, explain honestly, never argue back, hand to a senior when needed.\n- SPIKES structures hard news — Setting, Perception, Invitation, Knowledge, Empathy, Strategy — and complaints are information, not insults.",
      },
    ],
    questions: [
      {
        topic: "Conflict and Difficult Conversations",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A relative is shouting at the nurses' station about a delayed procedure. Your first move should be to…",
        options: [
          "Match his volume so he knows he is being heard",
          "Walk away until he calms down on his own",
          "Call security before any words are exchanged",
          "Listen and acknowledge the feeling before explaining any facts",
        ],
        correctIndex: 3,
        explanation:
          "De-escalation begins by lowering your own voice and acknowledging the emotion — people cannot process explanation while they feel unheard. Matching volume, walking away or instant security all escalate or abandon.",
        courseSlug: "nursing-practice-4",
      },
      {
        topic: "Conflict and Difficult Conversations",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A colleague's repeated late, incomplete handovers have nearly caused a medication error. The professional setting for addressing this is…",
        options: [
          "Publicly at the next handover, so witnesses exist",
          "By anonymous written note only",
          "Privately, at a calm moment, focused on the risk and a fix",
          "Nowhere — report her straight to the matron without speaking first",
        ],
        correctIndex: 2,
        explanation:
          "Address the problem, not the person, away from the bedside and away from audiences. A private, risk-focused conversation preserves the working relationship; public shaming or anonymous notes corrode the team and often miss the cause.",
        courseSlug: "nursing-practice-4",
      },
      {
        topic: "Conflict and Difficult Conversations",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In the SPIKES approach to difficult news, the E asks you to…",
        options: [
          "Explain the full medical record in detail",
          "Respond to the emotion in the room before continuing with information",
          "Escalate to a senior clinician immediately",
          "Examine the patient before saying anything further",
        ],
        correctIndex: 1,
        explanation:
          "Empathy means acknowledging what the family is feeling before pressing on with information — the step most often skipped and most needed when news is hard.",
        courseSlug: "nursing-practice-4",
      },
      {
        topic: "Conflict and Difficult Conversations",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A family lodges a complaint about the ward. The professional stance is to treat it as…",
        options: [
          "A personal insult requiring a rebuttal",
          "Proof the family is difficult — note their names",
          "Information: listen, document, and follow the facility's complaint process to its end",
          "A matter to keep from seniors so the ward is not blamed",
        ],
        correctIndex: 2,
        explanation:
          "Complaints are free audits: they tell you where communication or care fell short. Listening, documenting and following the process protects the family, the ward and you; defensiveness and concealment achieve the opposite.",
        courseSlug: "nursing-practice-4",
      },
    ],
    flashcards: [
      {
        topic: "Conflict and Difficult Conversations",
        front: "What is the golden rule of ward conflict?",
        back: "The patient is never a spectator to your disagreements — take the problem off the ward and address the issue, not the person.",
      },
      {
        topic: "Conflict and Difficult Conversations",
        front: "What are the six steps of SPIKES?",
        back: "Setting, Perception, Invitation, Knowledge, Empathy, Strategy — a structure for difficult news.",
      },
      {
        topic: "Conflict and Difficult Conversations",
        front: "What is the first move with an angry relative?",
        back: "Lower your own voice, listen without interrupting, and acknowledge the feeling before the facts.",
      },
      {
        topic: "Conflict and Difficult Conversations",
        front: "When does colleague conflict go up the chain?",
        back: "When a private, risk-focused attempt does not resolve it — nurse-in-charge, unit manager, matron, then human resources, as information not vengeance.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Patient Safety Curriculum Guide: Multi-professional Edition",
        year: "2011",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct",
        note: "Professional communication and conduct expectations — verify current edition.",
      },
      {
        organization: "Pearson",
        title: "Kozier & Erb's Fundamentals of Nursing",
        year: "2021",
        note: "Communication and conflict management chapters — verify current edition.",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "nursing-practice-4",
    moduleTitle: "Professional Communication",
    lessonTitle: "Social Media & Professional Boundaries",
    description:
      "Your phone, your uniform, your name — how professional standards follow you onto the timeline, and where the caring line with patients is drawn.",
    difficulty: "Easy",
    durationMin: 9,
    objectives: [
      "Describe how the Council's professional standards apply to online conduct and posts.",
      "Explain how patients can be identified even when no name is written.",
      "Apply professional boundary rules to gifts, self-disclosure and relationships with patients.",
    ],
    tags: ["social media", "professional boundaries", "confidentiality", "conduct"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "In your own community, you are 'the nurse' everywhere — at church, at the durbar, at the market, and in every WhatsApp group your phone holds. The title you earn this year does not come off with the uniform, and it certainly does not switch off when you open an app. A post written in ten seconds at the end of a hard shift can outlive a decade of good practice.\n\nThis lesson is about two boundaries: the digital one, where the Council's Code of Professional Conduct applies as firmly as it does on the ward, and the personal one — how close a nurse may let a patient come — which kindness sometimes blurs and professionalism must redraw.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Online, confidentiality is the first law. No photographs of patients, ever, however moving the recovery. No details that could identify — and identification needs no name: a rare condition, a specific ward, a date and a town is a signature. 'A young man, road accident, theatre all night' is identifiable in a small community before the family has even finished informing relatives. Venting about your employer, your colleagues or your patients, abusive or discriminatory posts, and arguments that spiral — all of it is professional conduct, and conduct is what fitness-to-practise procedures examine. The test before you post is simple: would you be content for the patient's family, your matron and the Council to read it together? If any of the three would wince, delete.\n\nOffline, boundaries protect the therapeutic relationship. Self-disclosure — share what serves the patient, briefly, and never your own burdens. Gifts: facilities differ, but the safe rule is small, declared to a senior, never money and never in connection with care received. Friend requests from patients while they remain in your care: politely defer — 'I care for you professionally; let us keep it clinical so I can always be fair to you.' Money outside official channels, romantic involvement with a patient in your care, and 'special arrangements' are never within the boundary. And when you nurse your own relatives or neighbours — which a community nurse will — the care stays in the facility, formally handed over, so that love never has to double as clinical judgement.",
      },
      {
        type: "clinical_pearl",
        body: "A post is a permanent exhibit. The patient will forget a busy shift; the screenshot never will.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A thoughtful new nurse posts after a traumatic night: 'We lost him tonight. Young man, accident, we fought for him till morning. Please pray for his family.' No name, no ward, no photograph — and grief that deserves company.\n\nWhy is the post still risky, and what does the safe version look like?\n\nAnswer: In the town that reads it, the age, the accident and the date may identify him to his own family before they have finished informing everyone — the post outruns the notification, and the family meets their loss on a timeline. The grief is real and needs holding, but holding belongs to people, not platforms: a debrief with the team, a call to a friend, the peer circle. If she must mark the night online, the safe version speaks only of herself: 'A hard night on call for our team. Hold your people close.' Same heart, no identifying details — and no one's worst day becomes searchable forever.",
      },
      {
        type: "memory_trick",
        body: "Run the THREE-READER test before you post: the patient's family, your matron, the Council. If one reader would wince, the post dies.",
      },
      {
        type: "summary",
        body: "- The Code of Professional Conduct applies online exactly as on the ward — posts are professional conduct.\n- Identification needs no name: condition plus ward plus date plus town is a signature. No patient photographs, ever.\n- Before posting, run the three-reader test: the patient's family, your matron, the Council.\n- Boundaries offline: minimal purposeful self-disclosure, declared small gifts only, deferred friend requests, no money or romance within care.",
      },
    ],
    questions: [
      {
        topic: "Social Media and Boundaries",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which of these posts is acceptable for a nurse's public account?",
        options: [
          "A photograph of a recovered patient waving, taken with the family's permission",
          "A general post about a hard shift on call, with no identifying details",
          "A funny clip filmed on the ward with patients visible in the background",
          "A post naming the facility and the staff who 'caused' a problem",
        ],
        correctIndex: 1,
        explanation:
          "Only the general post keeps confidentiality and conduct intact. Patient photographs — even permitted — belong to the patient's own story, not a nurse's timeline; background patients never consented; and public blame breaches professionalism and exposes you.",
        courseSlug: "nursing-practice-4",
      },
      {
        topic: "Social Media and Boundaries",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient currently in your care sends a friend request and a warm message. The professional response is to…",
        options: [
          "Accept — a free country, and it builds rapport",
          "Accept and chat with him about ward gossip",
          "Politely defer while he remains in your care, keeping the relationship clinical",
          "Block him with a stern warning about boundaries",
        ],
        correctIndex: 2,
        explanation:
          "The therapeutic relationship must stay clean of personal alliance — that is what guarantees fairness and objectivity in his care. A kind, clear deferral preserves both the care and his dignity; blocking or gossip breach either professionalism or kindness.",
        courseSlug: "nursing-practice-4",
      },
      {
        topic: "Social Media and Boundaries",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A post reads: 'A 24-year-old, road accident, in theatre all night — please pray for him.' Even without a name, this is risky because…",
        options: [
          "Prayer requests are forbidden on professional grounds",
          "The combination of details can identify the patient to the community",
          "Young patients are always confidential while older patients are not",
          "Only doctors may post about operations",
        ],
        correctIndex: 1,
        explanation:
          "Confidentiality protects identity, and identity does not require a name: age, incident, date and location triangulate quickly in a community — often before the family has finished their own notifications.",
        courseSlug: "nursing-practice-4",
      },
      {
        topic: "Social Media and Boundaries",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A nurse repeatedly vents about patients and colleagues on social media. Professionally, this can…",
        options: [
          "Never matter — personal accounts are private",
          "Matter only if a patient complains first",
          "Become a matter for the Council's fitness-to-practise processes",
          "Be fixed simply by deleting the posts afterwards",
        ],
        correctIndex: 2,
        explanation:
          "Online conduct is professional conduct: the Code applies on the timeline as on the ward, and repeated breaches — confidentiality, disrespect, discrimination — can reach the regulator's disciplinary machinery. Deletion after the fact rarely deletes the screenshots.",
        courseSlug: "nursing-practice-4",
      },
    ],
    flashcards: [
      {
        topic: "Social Media and Boundaries",
        front: "How are patients identified in posts without names?",
        back: "By triangulation: condition plus ward plus date plus town. Confidentiality protects identity, not just names — so no patient photographs and no case details.",
      },
      {
        topic: "Social Media and Boundaries",
        front: "What is the three-reader test before posting?",
        back: "Would the patient's family, your matron and the Council be content reading it together? If any one would wince, delete.",
      },
      {
        topic: "Social Media and Boundaries",
        front: "What is the safe rule about gifts from patients?",
        back: "Small, declared to a senior, never money, and never in connection with care received — facility policy fills in the details.",
      },
      {
        topic: "Social Media and Boundaries",
        front: "How do you handle a friend request from a patient in your care?",
        back: "Politely defer: keep the relationship clinical so you can always be fair to them — warmth on the ward, boundaries off it.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct",
        note: "Applies to all professional conduct, including online — verify current edition and any Council guidance on social media.",
      },
      {
        organization: "Pearson",
        title: "Kozier & Erb's Fundamentals of Nursing",
        year: "2021",
        note: "Professional boundaries chapters — verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "WHO Patient Safety Curriculum Guide: Multi-professional Edition",
        year: "2011",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "nursing-practice-4",
    moduleTitle: "Your Growth Plan",
    lessonTitle: "Career Pathways in Nursing",
    description:
      "From staff nurse to specialist, tutor, manager or researcher — the real roads Ghanaian nurses climb, and what each one asks of you.",
    difficulty: "Easy",
    durationMin: 10,
    objectives: [
      "Describe the main career pathways open to a registered nurse in Ghana.",
      "Explain the specialist training route offered by the Ghana College of Nurses and Midwives.",
      "Apply a first-five-years plan that keeps every pathway open.",
    ],
    tags: ["career", "pathways", "specialisation", "development"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Registration is a floor, not a ceiling. In Ghana, nursing forks into several roads, and — this is the quiet secret — they all begin in the same place: a few years of solid, well-documented ward practice. Whether you dream of the intensive care unit, the lecture hall, the district health directorate, the research desk or a hospital far from home, the first stretch of road is identical, and you are already on it.\n\nThis lesson maps the roads so you can choose on purpose rather than drift by accident.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The clinical road deepens. Staff nurse becomes senior staff nurse, then ward-in-charge and nursing officer grades — and alongside the ladder, specialisation: the Ghana College of Nurses and Midwives runs structured postgraduate specialist and fellowship programmes in clinical fields such as critical care and emergency nursing, perioperative nursing and community health, alongside the master's degrees offered by the universities. Specialists practise deeper, teach others, and are sought after by the big units.\n\nThe other roads fork from the same trunk. Education: a postgraduate qualification in nursing education, then a tutor's post in a nursing training college or university — the road for those who light up when they explain. Management: from unit management into district and regional nursing administration — for those who see systems where others see shifts. Research and academia: master's, then doctoral study — for those whose questions keep them up at night. International practice: verification of your credentials through the Nursing and Midwifery Council of Ghana, plus the destination's own registration examinations, opens doors abroad — and returned nurses carry new skills home. Whichever road calls, two habits keep them all open: a portfolio that documents your growth, and continuing professional development that never lapses.",
      },
      {
        type: "table",
        title: "Five roads from the staff-nurse room",
        body: "| Pathway | Typical route | It may be your road if… |\n|---|---|\n| Clinical specialist | Years of ward practice, then Ghana College of Nurses and Midwives specialist or fellowship programmes | The bedside is where you come alive |\n| Nurse educator | Postgraduate education qualification, then a training college or university post | You light up explaining things |\n| Manager and administrator | Unit management, then district or regional nursing administration | You see systems where others see shifts |\n| Researcher and academic | Master's degree, then doctoral study | Questions keep you up at night |\n| International practice | Council credential verification plus the destination's registration exam | New horizons pull at you |",
      },
      {
        type: "case",
        title: "On the ward",
        body: "After three years on a medical ward, a senior staff nurse knows exactly where she wants to go: intensive care. She gathers her portfolio — appraisals, in-service certificates, her basic and advanced life support courses — and asks the critical care senior at the regional hospital what a Ghana College of Nurses and Midwives application actually wants. The answer surprises her: documented clinical experience, a supervisor's reference, evidence of continuous development — all of which she already has, because she kept the folder from her first year.\n\nWhat does her story teach about pathways?\n\nAnswer: That pathways are opened by paperwork that begins long before the ambition announces itself. The specialist programme does not ask 'do you love critical care?' — it asks for evidence that you have grown as a nurse, and growth that is not documented is invisible. The portfolio, the appraisals, the CPD record: these are the quiet curriculum vitae of a career, built one shift at a time. Her three years on the medical ward were not a delay on the way to intensive care; they were the road itself.",
      },
      {
        type: "memory_trick",
        body: "Five doors out of the staff-nurse room: BEDSIDE (specialise), BLACKBOARD (teach), BOARD (manage), BOOKS (research), BROAD (practise abroad). Two keys open all five: a portfolio and current CPD.",
      },
      {
        type: "summary",
        body: "- All Ghanaian nursing pathways share a first stretch: solid, documented ward practice.\n- Specialisation runs through Ghana College of Nurses and Midwives programmes and university master's degrees.\n- Education, management, research and international practice fork from the same trunk.\n- Whatever the road, the portfolio and the CPD record keep it open — start both now.",
      },
    ],
    questions: [
      {
        topic: "Career Pathways",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A nurse who wants to specialise in critical care in Ghana would most directly explore…",
        options: [
          "The specialist programmes of the Ghana College of Nurses and Midwives",
          "A general master's in business administration",
          "A law degree in health regulation",
          "No route — specialisation requires leaving the country",
        ],
        correctIndex: 0,
        explanation:
          "The Ghana College of Nurses and Midwives runs the structured postgraduate specialist and fellowship programmes — in critical care and emergency, perioperative, community health and other fields — that mark the clinical specialist road in Ghana.",
        courseSlug: "nursing-practice-4",
      },
      {
        topic: "Career Pathways",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What makes a pathway application strong regardless of the road chosen?",
        options: [
          "Years of night duty alone",
          "A large social media following",
          "Documented clinical experience and continuous professional development",
          "Family connections in the ministry",
        ],
        correctIndex: 2,
        explanation:
          "Specialist programmes, promotions, teaching posts and verification processes all ask for one thing: evidence of growth. The portfolio and CPD record are how experience becomes visible — undocumented growth does not exist on paper.",
        courseSlug: "nursing-practice-4",
      },
      {
        topic: "Career Pathways",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A nurse planning to practise abroad must, among other requirements,…",
        options: [
          "Re-take the entire BSc nursing degree",
          "Surrender Ghanaian registration permanently",
          "Have credentials verified through the Nursing and Midwifery Council of Ghana and meet the destination's registration process",
          "Obtain permission from their current ward manager only",
        ],
        correctIndex: 2,
        explanation:
          "International registration starts at home: the Council verifies your training and registration, and the destination regulator — with its own examinations — decides the rest. Ghanaian registration is not surrendered but verified.",
        courseSlug: "nursing-practice-4",
      },
      {
        topic: "Career Pathways",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A ward nurse explains procedures so clearly that colleagues ask her to teach them before every procedure. Which road deserves her first exploration?",
        options: [
          "Hospital management and administration",
          "Nurse education — the tutor's road",
          "Finance and supply chain",
          "She should suppress it and stay silent",
        ],
        correctIndex: 1,
        explanation:
          "The educator's road begins exactly like this: a nurse who lights up explaining things. A postgraduate qualification in nursing education converts the gift into a training-college or university post.",
        courseSlug: "nursing-practice-4",
      },
    ],
    flashcards: [
      {
        topic: "Career Pathways",
        front: "Name the five doors out of the staff-nurse room.",
        back: "Bedside (specialise), blackboard (teach), board (manage), books (research), broad (practise abroad).",
      },
      {
        topic: "Career Pathways",
        front: "What is the Ghana College of Nurses and Midwives route?",
        back: "Structured postgraduate specialist and fellowship programmes in clinical fields such as critical care and emergency, perioperative and community health nursing.",
      },
      {
        topic: "Career Pathways",
        front: "What does international practice require of your Ghanaian credentials?",
        back: "Verification of training and registration through the Nursing and Midwifery Council of Ghana, plus the destination country's own registration process.",
      },
      {
        topic: "Career Pathways",
        front: "Which two habits keep every pathway open?",
        back: "A portfolio documenting your growth, and continuing professional development that never lapses.",
      },
    ],
    sources: [
      {
        organization: "Ghana College of Nurses and Midwives",
        title: "Specialist and Fellowship Training Programmes",
        note: "Postgraduate clinical specialisation programmes — verify current programme areas and entry requirements with the College.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Verification of Registration for International Practice",
        note: "Credential verification for practice abroad — verify current procedures with the Council.",
      },
      {
        organization: "University of Ghana School of Nursing",
        title: "Postgraduate Programmes in Nursing",
        note: "Academic routes in nursing — verify current offerings with the School.",
      },
      {
        organization: "World Health Organization",
        title: "State of the World's Nursing 2020: Investing in Education, Jobs and Leadership",
        year: "2020",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "nursing-practice-4",
    moduleTitle: "Your Growth Plan",
    lessonTitle: "Your Professional Portfolio",
    description:
      "One folder that proves your growth — reflections, certificates, appraisals — and quietly pays you back at every renewal, appraisal and interview for the rest of your career.",
    difficulty: "Easy",
    durationMin: 9,
    objectives: [
      "Describe what a professional portfolio contains and what it is used for.",
      "Explain reflective writing as the engine of professional development.",
      "Apply a portfolio habit you can start as a student this week.",
    ],
    tags: ["portfolio", "reflection", "cpd", "professional development"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Memory flattens; paper does not. In five years you will not remember which month you did the wound-care course, what the matron wrote in your first appraisal, or the case that changed how you take handover — but the folder will. A professional portfolio is the story of your growth as a nurse, written by you, in evidence rather than adjectives, and it is the most portable asset a nursing career owns.\n\nIt serves the Council at licence renewal, your employer at probation and appraisal, panels at interviews, and selection committees for specialist programmes. And the engine inside it — reflection — is what turns four hundred shifts into four hundred lessons instead of one very long week.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Build the portfolio in sections. Identity and registration: your credentials, registration number and licence record. Curriculum vitae: kept current. Certificates: every course, workshop and CPD activity, with dates. Appraisals and confirmation letters. An anonymised log of cases and skills that taught you something. And the heart of the folder: written reflections.\n\nReflection has a shape you can learn in one minute: What happened? So what does it mean for my practice? Now what will I do differently? Three questions, five lines, written while the shift is still warm. Pair it with the cycle of continuing development — reflect on a gap, plan the learning, do it, apply it, evaluate whether anything changed — and the portfolio stops being a folder of paper and becomes a professional conscience. After every course or workshop, add one line naming what you will do differently: a certificate records attendance, but a reflection records change. And begin now — postings and units, skills signed off, feedback from preceptors, one reflection a month. The habit costs minutes; by your first interview it will already be worth more than any grade.",
      },
      {
        type: "clinical_pearl",
        body: "Keep a 'questions I could not answer' list at work. Every entry is your next learning topic, chosen by your patients rather than by chance.",
      },
      {
        type: "case",
        title: "In the interview",
        body: "The panel's question is a classic: 'Tell us about a case that changed your practice.' The candidate without a portfolio excavates a blurry memory in a nervous silence. The candidate with one recognises the question instantly — it is written, almost word for word, in her own reflection from eighteen months ago: a near-miss with two look-alike medications, the double-check she nearly skipped, and the habit she has kept ever since. She tells it in three sentences, ends with the change, and the panel can see the loop — experience, reflection, changed practice — closing in real time.\n\nWhy does the portfolio win interviews, appraisals and renewals?\n\nAnswer: Because every institution that judges nurses — the Council, employers, specialist programmes — is really asking one question: does this nurse convert experience into growth? A CV claims it; a portfolio proves it, with dated evidence and written reflection. The near-miss story is only retrievable because it was captured while it was warm — memory would have smoothed it into nothing within a year. That is the portfolio's quiet power: it remembers what the shift erases, and it lets you present your worst professional moments as the origin of your best habits.",
      },
      {
        type: "quiz_prompt",
        title: "Starting while you are still a student",
        body: "What should a final-year student's young portfolio already hold?\n\nAnswer: The beginnings of every section: postings and units with dates, skills signed off by preceptors, certificates from student courses and workshops, written feedback from seniors, and a monthly reflection — five lines on one case or one shift that taught you something. Anonymise everything clinical. Ten minutes at the end of each month, and by graduation the habit will already outlast the semester that taught it.",
      },
      {
        type: "memory_trick",
        body: "Reflect in three moves — WHAT happened, SO WHAT it means, NOW WHAT changes — written while the shift is warm, filed while you still care.",
      },
      {
        type: "summary",
        body: "- A portfolio proves growth with evidence: registration, CV, certificates, appraisals, anonymised case logs and written reflections.\n- Reflection runs WHAT, SO WHAT, NOW WHAT — a certificate records attendance, a reflection records change.\n- The portfolio serves licence renewal, probation and appraisal, interviews and specialist applications.\n- Start now as a student — postings, signed-off skills, feedback, one reflection a month.",
      },
    ],
    questions: [
      {
        topic: "Professional Portfolio",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What belongs in a portfolio's case log?",
        options: [
          "Full patient names, for authenticity",
          "Only the cases that went perfectly",
          "Anonymised cases and skills that taught you something",
          "Nothing clinical — certificates only",
        ],
        correctIndex: 2,
        explanation:
          "Case logs teach through their lessons, not their identities: anonymised descriptions keep confidentiality intact while showing how you think and grow. Names would breach confidentiality; perfect-only logs hide the growth.",
        courseSlug: "nursing-practice-4",
      },
      {
        topic: "Professional Portfolio",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which structure describes reflective writing for professional development?",
        options: [
          "List the patients seen and drugs given",
          "What happened? So what does it mean for my practice? Now what will I do differently?",
          "Copy the guideline that applied to the case",
          "Record only what your supervisor asked you to write",
        ],
        correctIndex: 1,
        explanation:
          "Reflection converts experience into change: describe the event, interpret its meaning for practice, and commit to the difference. Without the third move, nothing improves; without the second, nothing is learned.",
        courseSlug: "nursing-practice-4",
      },
      {
        topic: "Professional Portfolio",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A course certificate is weaker evidence of development than a certificate plus a written reflection because…",
        options: [
          "Certificates fade in sunlight",
          "The reflection documents what changed in practice, not just attendance",
          "Panels distrust laminated paper",
          "Reflections are longer and look more impressive",
        ],
        correctIndex: 1,
        explanation:
          "Continuing development is measured in changed practice. Attendance proves you were in the room; reflection proves the room changed you — one line naming what you will now do differently.",
        courseSlug: "nursing-practice-4",
      },
      {
        topic: "Professional Portfolio",
        type: "MCQ",
        difficulty: "Easy",
        stem: "When is the best time to begin a professional portfolio?",
        options: [
          "After confirmation into the service",
          "The night before your first job interview",
          "Only when applying for a specialist programme",
          "Now, as a student — postings, skills, feedback and one reflection a month",
        ],
        correctIndex: 3,
        explanation:
          "The portfolio's power is capture-while-warm: student postings, signed-off skills, feedback and early reflections all become evidence that growth started long before anyone asked to see it.",
        courseSlug: "nursing-practice-4",
      },
    ],
    flashcards: [
      {
        topic: "Professional Portfolio",
        front: "What sections does a professional portfolio contain?",
        back: "Registration and credentials, an updated CV, certificates and CPD records, appraisals and confirmation letters, anonymised case logs, and written reflections.",
      },
      {
        topic: "Professional Portfolio",
        front: "Name the three moves of reflection.",
        back: "What happened, So what it means for my practice, Now what I will do differently.",
      },
      {
        topic: "Professional Portfolio",
        front: "Certificate versus reflection — which proves what?",
        back: "A certificate records attendance; a reflection records change — the line naming what you will now do differently.",
      },
      {
        topic: "Professional Portfolio",
        front: "Who reads your portfolio over a career?",
        back: "The Council at renewal, your employer at appraisal and confirmation, interview panels, and specialist programme selection committees.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Continuing Professional Development and Licence Renewal Requirements",
        note: "Portfolio evidence supports renewal — verify current CPD requirements with the Council.",
      },
      {
        organization: "Ghana Health Service",
        title: "Staff Performance Appraisal and Confirmation Guidelines",
        note: "Appraisal evidence expectations — verify the current scheme with your employer.",
      },
      {
        organization: "Pearson",
        title: "Kozier & Erb's Fundamentals of Nursing",
        year: "2021",
        note: "Reflective practice and professional development chapters — verify current edition.",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "nursing-research-4",
    moduleTitle: "Your Project",
    lessonTitle: "Choosing a Researchable Question",
    description:
      "The one decision that shapes your whole project — turning a ward puzzle into a question small enough to finish and important enough to matter.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe how clinical puzzles on the ward become research questions.",
      "Explain the FINER criteria and the PICO and PICo framings.",
      "Apply narrowing techniques to a broad nursing topic.",
    ],
    tags: ["research question", "finer", "pico", "nursing research"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every good project begins with a question that itches. You noticed something on the ward — pressure injuries appearing despite the repositioning chart, hand hygiene lapsing whenever the ward fills, pain scores never reassessed after analgesia — and the guidelines do not explain it. That itch, refined, is where research starts.\n\nThe commonest student mistake is the giant question: 'What affects patient safety in Ghana?' A question that size cannot be answered in a semester by one student with a notebook. The craft is narrowing until the question is small enough to finish and important enough to matter.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Test every candidate question with **FINER**: is it Feasible with your time, money and access; Interesting enough to keep you working through week nine; Novel — does the literature show a gap; Ethical to ask and to answer; Relevant to the patients and services around you. Then frame it. Quantitative questions use **PICO** — Population, Intervention, Comparison, Outcome. Qualitative questions use **PICo** — Population, phenomenon of Interest, Context.\n\nWatch the narrowing work. 'What affects pressure injuries?' becomes: 'Among patients on the medical ward of a district hospital (Population), does a two-hourly repositioning chart involving family members (Intervention), compared with usual practice (Comparison), reduce pressure injury incidence by two weeks (Outcome)?' Same itch, now answerable. For a qualitative study: 'What influences hand hygiene practice (Interest) among ward nurses (Population) at one district hospital (Context)?' Scope down until you can picture the exact ward, the exact tool, and the exact deadline.",
      },
      {
        type: "clinical_pearl",
        body: "The best question sits where three circles overlap: what matters to patients, what the literature has not answered, and what you can honestly finish. Two out of three is not enough.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A final-year student notices that patients on her ward are given analgesia, but their pain scores are rarely reassessed afterwards — the chart jumps from 'pain 7, drug given' to nothing. She drafts her question as 'Why is pain management poor?' and her supervisor points out that she cannot interview the entire health system in one semester.\n\nHow should she narrow it?\n\nAnswer: She scopes the question to PICo: exploring, with the nurses of one male medical ward (Population), what shapes whether pain is reassessed after analgesia (Interest), in a district hospital over a defined period (Context). The population becomes colleagues she can genuinely reach and consent, the context is bounded to one ward and one window, and the open phrasing keeps it qualitative without assuming the nurses do not care. It now passes FINER — feasible in a semester, novel for her district, ethically straightforward, and relevant to a real gap in care she has witnessed herself.",
      },
      {
        type: "memory_trick",
        body: "FINER — the five fingers of one hand: Feasible, Interesting, Novel, Ethical, Relevant. If a finger is missing, you cannot grasp the project.",
      },
      {
        type: "summary",
        body: "- Good questions grow from real clinical puzzles, not from textbooks.\n- Run candidates through FINER before committing a semester to them.\n- Frame with PICO for quantitative questions, PICo for qualitative ones.\n- Narrow until you can picture the exact ward, the tool and the deadline.",
      },
    ],
    questions: [
      {
        topic: "Research Questions",
        type: "MCQ",
        difficulty: "Easy",
        stem: "In the FINER criteria, the F stands for…",
        options: [
          "Focused",
          "Formal",
          "Feasible",
          "Funded",
        ],
        correctIndex: 2,
        explanation:
          "Feasible asks whether one student, in the time available, with your access and resources, can actually complete the study — the commonest fatal flaw in student questions.",
        courseSlug: "nursing-research-4",
      },
      {
        topic: "Research Questions",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "'Among patients on a medical ward, does a two-hourly repositioning chart with family involvement, compared with usual practice, reduce pressure injury incidence by two weeks?' What is the C in this PICO question?",
        options: [
          "Pressure injury incidence at two weeks",
          "Patients on the medical ward",
          "The two-hourly repositioning chart",
          "Usual practice, with no chart",
        ],
        correctIndex: 3,
        explanation:
          "The Comparison is the alternative to the intervention — here, usual practice. Pressure injuries are the Outcome; the patients are the Population; the chart is the Intervention.",
        courseSlug: "nursing-research-4",
      },
      {
        topic: "Research Questions",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A student proposes to study 'quality of nursing care in Ghana'. The main problem with this question is that it…",
        options: [
          "Is too broad to be feasible or answerable in one project",
          "Lacks any ethical dimension",
          "Cannot be framed in PICO terms",
          "Is not interesting to any researcher",
        ],
        correctIndex: 0,
        explanation:
          "The population, the outcome and the setting are all unbounded. No design, sample or timeline could satisfy it — it fails the F of FINER before any other test.",
        courseSlug: "nursing-research-4",
      },
      {
        topic: "Research Questions",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A student wants to explore why ward nurses skip hand hygiene — depth and meaning matter more than counts. Which framing fits?",
        options: [
          "A PICO drug-trial framework",
          "PICo: Population, phenomenon of Interest, Context",
          "A national survey of every hospital",
          "A laboratory experiment",
        ],
        correctIndex: 1,
        explanation:
          "Questions about why and how belong to qualitative designs, framed with PICo — the people, the phenomenon of interest, and the bounded context. PICO serves questions of effect and comparison.",
        courseSlug: "nursing-research-4",
      },
    ],
    flashcards: [
      {
        topic: "Research Questions",
        front: "What do the letters of FINER stand for?",
        back: "Feasible, Interesting, Novel, Ethical, Relevant — the five-point test a research question must pass.",
      },
      {
        topic: "Research Questions",
        front: "What does PICO stand for, and what serves qualitative questions instead?",
        back: "PICO: Population, Intervention, Comparison, Outcome. Qualitative questions use PICo — Population, phenomenon of Interest, Context.",
      },
      {
        topic: "Research Questions",
        front: "How do you narrow a broad question?",
        back: "Bound the population, the place and the time, and name the single phenomenon you will measure or explore.",
      },
      {
        topic: "Research Questions",
        front: "Where does the best question sit?",
        back: "At the overlap of three circles: what matters to patients, what the literature has not answered, and what you can honestly finish.",
      },
    ],
    sources: [
      {
        organization: "Wolters Kluwer",
        title: "Nursing Research: Generating and Assessing Evidence for Nursing Practice (Polit & Beck)",
        year: "2020",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "SAGE",
        title: "Research Design: Qualitative, Quantitative, and Mixed Methods Approaches (Creswell & Creswell)",
        year: "2018",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "University of Ghana School of Nursing",
        title: "Final-Year Research Project Guidelines",
        note: "Departmental project guidance — verify the current version with your institution.",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "nursing-research-4",
    moduleTitle: "Your Project",
    lessonTitle: "Writing Your Proposal",
    description:
      "The blueprint that gets your project approved — aims, methods, ethics and timeline, promised in writing to the people who must sign it.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the components of a complete research proposal.",
      "Explain the ethics approval process and why it precedes all data collection.",
      "Apply SMART criteria to research objectives.",
    ],
    tags: ["proposal", "research ethics", "objectives", "planning"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A proposal is your project written in the future tense. It tells your supervisor, your institution and the ethics review committee exactly what you plan to do, to whom, how, and why the benefits outweigh the risks. Write it well and data collection becomes a matter of following your own instructions.\n\nIt is also a promise. Once approved — especially by an ethics committee — the proposal is the standard you are held to. Deviate without discussion and you have a problem no amount of good data can fix.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Every proposal walks the same skeleton. A title that says what the study is. Background and literature review that funnel from the global picture down to your district and end at the gap — the question your study fills. An aim with objectives, each SMART: specific, measurable, achievable, relevant, time-bound. Then methodology: the design, the population, how you will sample and how many, the instruments, and the procedure step by step.\n\nThe ethics section is not decoration. It names how you will inform participants, obtain written or thumb-printed consent, protect privacy and confidentiality, and store data securely; it addresses vulnerable groups and withdrawal without penalty. In Ghana this goes to an institutional review board or ethics committee — the Ghana Health Service Ethics Review Committee where your study touches GHS facilities — and approval letters go out before the first questionnaire touches the first hand. Finish with a timeline (a simple Gantt chart), a modest budget, a dissemination plan and references.",
      },
      {
        type: "clinical_pearl",
        body: "Ethics approval is a gate, not a rubber stamp. No approval letter, no data collection — not even a pilot interview at your own workplace.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A student's first proposal draft states its aim as 'to study pain management among surgical patients'. The committee sends it back. Her revision reads: 'To explore factors influencing the reassessment of pain after analgesia among surgical patients on one district hospital ward', with three SMART objectives, an interview design, a consent procedure and a twelve-week timeline.\n\nWhy did the revision succeed where the first draft failed?\n\nAnswer: The first aim could not be measured or bounded — it failed the same test as a giant research question, and gave the committee nothing concrete to assess. The revised aim names a specific population, place and window; each objective can be shown to be met or not met; the methods say exactly how she will sample, interview and protect participants. The committee can now see that the risk to patients is minimal and the plan feasible — so it can approve, and she can collect data under a promise she actually understands.",
      },
      {
        type: "memory_trick",
        body: "A proposal answers five questions in order: WHY (background and the gap), WHAT (aim and objectives), HOW (methods), WHO PROTECTS (ethics), WHEN and WHAT COST (timeline and budget).",
      },
      {
        type: "summary",
        body: "- The proposal is the project in future tense — and a promise to supervisors and ethics committees.\n- Build it from background-gap-aim-SMART objectives to methods, ethics, timeline and budget.\n- The ethics section details consent, privacy, confidentiality and data security.\n- No data collection, not even a pilot, before approval letters are in hand.",
      },
    ],
    questions: [
      {
        topic: "Research Proposal",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which section of the research proposal should come at the end of the literature review?",
        options: [
          "The gap that the study will address",
          "The data analysis plan",
          "The reference list",
          "The budget",
        ],
        correctIndex: 0,
        explanation:
          "The literature review funnels from the broad picture down to what remains unknown — and the gap it ends on is precisely what your study proposes to fill.",
        courseSlug: "nursing-research-4",
      },
      {
        topic: "Research Proposal",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A draft objective reads: 'To understand pain management among surgical patients.' Which SMART element is most obviously missing?",
        options: [
          "Specific",
          "Relevant",
          "Time-bound",
          "Measurable",
        ],
        correctIndex: 3,
        explanation:
          "'Understand' cannot be measured. 'To describe the proportion of surgical patients with documented pain reassessment within one hour of analgesia' is measurable — you can show whether the objective was met.",
        courseSlug: "nursing-research-4",
      },
      {
        topic: "Research Proposal",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A student wants to 'just pilot' two interviews at her own workplace before her ethics approval arrives. The correct position is that this is…",
        options: [
          "Fine, since it is only a pilot at her own facility",
          "Acceptable if the participants sign consent forms she drafted herself",
          "Not acceptable — no data collection of any kind before ethics approval",
          "Acceptable if her supervisor agrees verbally",
        ],
        correctIndex: 2,
        explanation:
          "Pilot participants are research participants: the same protections apply. Ethics approval exists precisely so that someone other than the enthusiastic researcher has checked the risks — before any person is approached, anywhere.",
        courseSlug: "nursing-research-4",
      },
      {
        topic: "Research Proposal",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is an approved proposal described as a promise?",
        options: [
          "It guarantees the study's results will be significant",
          "It is a legal contract for future employment",
          "You are held to it — deviations require discussion and approval",
          "It means the ethics committee will write the final report",
        ],
        correctIndex: 2,
        explanation:
          "Approval fixes the standard you are judged against: changes to population, tools or procedures go back for discussion, because the committee's assessment of risk applied to exactly what you described. Silent deviation is a breach of that promise.",
        courseSlug: "nursing-research-4",
      },
    ],
    flashcards: [
      {
        topic: "Research Proposal",
        front: "Name the core sections of a research proposal.",
        back: "Title, background and literature review ending in the gap, aim and SMART objectives, methodology, ethics, timeline, budget, dissemination plan, references.",
      },
      {
        topic: "Research Proposal",
        front: "What does SMART stand for?",
        back: "Specific, Measurable, Achievable, Relevant, Time-bound — the test each objective must pass.",
      },
      {
        topic: "Research Proposal",
        front: "When can data collection begin?",
        back: "Only after ethics approval — including pilots. The approved proposal is the standard you are held to.",
      },
      {
        topic: "Research Proposal",
        front: "Which national committee reviews studies touching GHS facilities in Ghana?",
        back: "The Ghana Health Service Ethics Review Committee — or the relevant institutional review board where your institution directs you.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Standards and Operational Guidance for Ethics Review of Health-Related Research with Human Participants",
        year: "2011",
      },
      {
        organization: "Ghana Health Service Ethics Review Committee",
        title: "Standard Operating Procedures and Guidelines for Submission and Review of Protocols",
        note: "National research ethics source — verify the current version and submission requirements with the committee.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Nursing Research: Generating and Assessing Evidence for Nursing Practice (Polit & Beck)",
        year: "2020",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "nursing-research-4",
    moduleTitle: "Your Project",
    lessonTitle: "Collecting Your Data",
    description:
      "Instruments, permissions, privacy and locked data — the unglamorous planning that decides whether your project survives contact with the field.",
    difficulty: "Hard",
    durationMin: 12,
    objectives: [
      "Describe how to choose, translate and pilot data collection instruments.",
      "Explain the permissions and logistics that must be settled before fieldwork.",
      "Apply data security and anonymisation rules to your dataset.",
    ],
    tags: ["data collection", "fieldwork", "data security", "pilot testing"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Research projects rarely die from bad analysis. They die in the field: the questionnaire nobody understood, the clinic that only runs on market day, the tablet that lost power, the supervisor who was never informed. Data collection planning is the least glamorous chapter of research — and the one that saves projects.\n\nTreat fieldwork like a ward rota: everything that can be scheduled is scheduled, everything that can fail has a plan B, and nothing depends on hoping. And treat the data itself like patient information — because that is exactly what it is.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Instruments first. Do not invent from scratch when validated tools exist — search for what previous researchers used, and if you adapt or translate one, translate and back-translate to check the meaning survived. Then **pilot** it on five to ten people similar to your participants: watch where they hesitate, which question gets asked twice, which option gets skipped. A confusing question discovered on a classmate costs ten minutes; discovered mid-fieldwork, it costs your dataset.\n\nThen permissions and logistics. Ethics approval plus introduction letters — facility head, unit in-charge, and anyone whose space you will use. Match fieldwork to the rhythms of the site: clinic days, market days, shift patterns, farming season. Practicalities: paper backup for every electronic tool, charged batteries, and privacy — a corner where an interview cannot be overheard. Write the whole plan as numbered steps, then walk it through in your mind the night before.\n\nFinally, guard the data. Replace names with codes at the point of entry and keep the master list of codes locked away, separately from the data itself. Paper under lock and key; electronic files password-protected with a backup; nothing identifiable in personal chats or open email. At the end of the project, store or destroy the data as your institution and ethics committee directed. Participants trusted you with their answers; the trust ends at the lock.",
      },
      {
        type: "table",
        title: "The data rules",
        body: "| Rule | What it looks like in practice |\n|---|---|\n| Anonymise early | Codes on questionnaires from the first day; the name list lives separately, locked |\n| Lock everything | Paper in a locked cabinet; files password-protected with a backup |\n| Keep it off open channels | No identifiable data in personal chats or unsecured email |\n| Retire the data properly | Archive or destroy per your institution's and committee's instruction |",
      },
      {
        type: "clinical_pearl",
        body: "A dataset is patient information wearing a lab coat. Guard it exactly as you guard the notes you chart — locked, coded and shared with no one who does not need it.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A student plans to interview patients at a health centre 'every weekday for four weeks' for her study on living with hypertension. On arrival she learns the chronic disease clinic only runs on Thursdays — the same day the market brings the biggest crowd — and there is no private room, only a bench in the corridor. She has twenty-six interviews to complete.\n\nWhat should her revised plan look like?\n\nAnswer: First, timing: she concentrates fieldwork on Thursdays and adds the two nearest facilities on their clinic days, with permission letters for each. Second, privacy: she negotiates the counselling room on clinic days and books interviews in advance rather than catching patients mid-queue, seating them facing away from the corridor. Third, contingency: she builds extra weeks into her timeline for missed days, carries paper questionnaires as backup, and plans follow-up for participants who start but cannot finish. She learned the clinic's rhythm before the first interview, not after a wasted fortnight.",
      },
      {
        type: "memory_trick",
        body: "The four Ps of fieldwork: Permissions in writing, Pilot the tool, Privacy for participants, Plan B for everything — and keep the data locked behind all four.",
      },
      {
        type: "summary",
        body: "- Adapt validated instruments where possible; translate and back-translate; pilot on five to ten similar people.\n- Secure ethics approval and introduction letters; fit fieldwork to the site's rhythm.\n- Plan backups: paper copies, power, privacy and extra weeks in the timeline.\n- Anonymise at entry, lock the master list away from the data, and retire the dataset as instructed.",
      },
    ],
    questions: [
      {
        topic: "Data Collection",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why pilot a questionnaire before fieldwork?",
        options: [
          "To increase the sample size",
          "To find confusing questions while they are still cheap to fix",
          "Because the ethics committee always requires one hundred pilot responses",
          "To prove the hypothesis early",
        ],
        correctIndex: 1,
        explanation:
          "Piloting exposes confusing wording, bad question order and skipped items — on five to ten people rather than on the participants whose data you need.",
        courseSlug: "nursing-research-4",
      },
      {
        topic: "Data Collection",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A questionnaire translated into Twi should also be back-translated in order to…",
        options: [
          "Lengthen the methods section of the proposal",
          "Satisfy the facility's in-charge",
          "Check that the meaning survived the translation",
          "Create a second version to use as a backup",
        ],
        correctIndex: 2,
        explanation:
          "Back-translation — a second translator rendering the Twi version back into English — reveals where meaning drifted, which matters when questions carry clinical or sensitive content.",
        courseSlug: "nursing-research-4",
      },
      {
        topic: "Data Collection",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which single step most protects participants in a busy clinic?",
        options: [
          "Scheduling interviews in a private room rather than catching patients in the queue",
          "Interviewing two patients at once to save time",
          "Reading questions loudly so all can hear",
          "Using a shared password for the data file",
        ],
        correctIndex: 0,
        explanation:
          "Privacy is a core protection: consent given in a corridor is barely consent, and answers overheard are answers no longer confidential.",
        courseSlug: "nursing-research-4",
      },
      {
        topic: "Data Collection",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which storage practice meets the standard for participant data?",
        options: [
          "Names kept on questionnaires 'temporarily' for convenience",
          "The dataset shared in a WhatsApp group so supervisors can follow progress",
          "Coded questionnaires stored separately from the locked master list, files password-protected with a backup",
          "The master identity list carried daily in a handbag for easy access",
        ],
        correctIndex: 2,
        explanation:
          "Anonymise at entry, separate the codes from the identities, lock both, and back up the protected files. Open chats, temporary names and travelling identity lists each breach confidentiality in a different way.",
        courseSlug: "nursing-research-4",
      },
    ],
    flashcards: [
      {
        topic: "Data Collection",
        front: "What does piloting an instrument mean?",
        back: "Testing it on five to ten people similar to your participants, watching for confusing items before real data collection begins.",
      },
      {
        topic: "Data Collection",
        front: "Why back-translate a translated tool?",
        back: "To check that meaning survived the translation — a second translator renders it back to the original language for comparison.",
      },
      {
        topic: "Data Collection",
        front: "Name the four Ps of data collection planning.",
        back: "Permissions in writing, Pilot the tool, Privacy for participants, Plan B for everything.",
      },
      {
        topic: "Data Collection",
        front: "How do you anonymise a dataset properly?",
        back: "Codes replace names at entry; the master list of codes lives separately, locked; files are password-protected with a backup; and the data is archived or destroyed as instructed at the end.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Standards and Operational Guidance for Ethics Review of Health-Related Research with Human Participants",
        year: "2011",
      },
      {
        organization: "Wolters Kluwer",
        title: "Nursing Research: Generating and Assessing Evidence for Nursing Practice (Polit & Beck)",
        year: "2020",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Open University Press",
        title: "Research Methods in Health: Investigating Health and Social Services (Bowling)",
        year: "2014",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    courseSlug: "nursing-research-4",
    moduleTitle: "Analysis & Writing",
    lessonTitle: "Analysing Your Data",
    description:
      "Turning questionnaires and interview recordings into answers — analysis that matches your design, respects your data, and stays honest about what it can say.",
    difficulty: "Hard",
    durationMin: 12,
    objectives: [
      "Describe the six phases of thematic analysis for qualitative data.",
      "Explain the role of descriptive statistics in quantitative analysis.",
      "Apply the principle that analysis must match the design — association, never causation, from cross-sectional data.",
    ],
    tags: ["data analysis", "thematic analysis", "statistics", "findings"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The day arrives: the interviews are recorded, the questionnaires are stacked, and the project must now become findings. Analysis looks intimidating from the outside, but at heart it is two honest operations — organising what people said, and counting what people did — done in a way your design can support.\n\nOne rule governs everything: the analysis must match the design. A qualitative study is analysed for themes, not percentages; a cross-sectional survey describes and associates, it does not prove cause.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Qualitative data goes through **thematic analysis**, in six phases: read everything until you know it (familiarisation), code the transcripts line by line, group codes into candidate themes, test the themes against the whole dataset, define and name each theme, then report it with supporting quotes. The discipline is letting codes grow from the data — not marching through interviews hunting for the three findings you hoped for. A surprising theme is a finding, not an inconvenience.\n\nQuantitative analysis starts small and stays honest. Frequencies and percentages for categorical answers; means — or medians when the data is skewed — for measurements. Cross-tabulations and simple tests such as chi-square explore associations. A p-value below 0.05 means 'unlikely to be this extreme by chance alone', never 'important' or 'proven'. And a cross-sectional design can show that two things travel together, not that one causes the other — write conclusions with that humility.",
      },
      {
        type: "clinical_pearl",
        body: "Analysis is listening to your data, not interrogating it until it confesses what you hoped to hear.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A student interviews sixteen nurses about barriers to reassessing pain after analgesia. She expects three themes: workload, knowledge and supplies. As she codes, a fourth pattern keeps appearing — the pain plan being lost at shift handover, mentioned in twelve of the sixteen interviews. A classmate urges her to drop it: 'it was not in your objectives.'\n\nWhat is the correct analytic decision?\n\nAnswer: She keeps the theme and reports it, with quotes showing how consistently it arose, because themes must be driven by the data, not by the proposal's expectations. She can note honestly in her discussion that this theme emerged beyond the original objectives — and it may be her most useful finding, since the fix (a handover prompt for pending reassessments) is cheap and entirely within the ward's control. Silencing the pattern to fit the plan would be the real research flaw: it would turn her analysis into confirmation of what she already believed.",
      },
      {
        type: "memory_trick",
        body: "Thematic analysis in six beats: Read, Code, Cluster, Check, Name, Narrate — and never code backwards from what you hoped to find.",
      },
      {
        type: "summary",
        body: "- Match analysis to design: themes for qualitative, description for quantitative.\n- Thematic analysis: familiarise, code, cluster, review, define, report — with quotes.\n- Start quantitative analysis with frequencies and medians; treat p-values with respect.\n- Cross-sectional findings show association, never causation.",
      },
    ],
    questions: [
      {
        topic: "Analysing Data",
        type: "MCQ",
        difficulty: "Easy",
        stem: "In Braun and Clarke's thematic analysis, what immediately follows coding?",
        options: [
          "Writing the discussion",
          "Calculating percentages",
          "Generating candidate themes from the codes",
          "Deleting quotes that disagree",
        ],
        correctIndex: 2,
        explanation:
          "Codes are sorted and clustered into candidate themes, which are then tested against the whole dataset before being defined, named and reported.",
        courseSlug: "nursing-research-4",
      },
      {
        topic: "Analysing Data",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A cross-sectional survey finds nurses who attend more in-service trainings are more likely to document care plans. The correct conclusion is that…",
        options: [
          "There is an association between in-service training and documented care planning",
          "In-service training causes care planning",
          "Care planning causes in-service training",
          "The finding proves the ward needs more trainings",
        ],
        correctIndex: 0,
        explanation:
          "Cross-sectional data captures one moment: it can show that two things travel together, but cannot establish direction or exclude confounding. Association, not causation.",
        courseSlug: "nursing-research-4",
      },
      {
        topic: "Analysing Data",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Your count data is strongly skewed — a few patients report very many readmissions, most report few. Which summary statistic is most appropriate?",
        options: [
          "Mean",
          "Range only",
          "Percentage",
          "Median",
        ],
        correctIndex: 3,
        explanation:
          "Skewed data drags the mean towards the extreme values; the median describes the typical patient more honestly. Report the median (with its range) for skewed distributions.",
        courseSlug: "nursing-research-4",
      },
      {
        topic: "Analysing Data",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A p-value of 0.03 means that…",
        options: [
          "The finding is clinically important",
          "A result this extreme would be unlikely by chance alone — nothing more",
          "The hypothesis is proven",
          "There is a 3 percent chance the result is wrong",
        ],
        correctIndex: 1,
        explanation:
          "A p-value answers one narrow question: could chance have produced something this extreme? Importance, proof and clinical meaning live elsewhere — in effect sizes, intervals and judgement.",
        courseSlug: "nursing-research-4",
      },
    ],
    flashcards: [
      {
        topic: "Analysing Data",
        front: "Name the six phases of thematic analysis.",
        back: "Familiarisation, coding, generating themes, reviewing themes against the dataset, defining and naming themes, reporting with quotes.",
      },
      {
        topic: "Analysing Data",
        front: "What does a p-value below 0.05 actually mean?",
        back: "A result this extreme would be unlikely by chance alone — not that it is important, large or proven.",
      },
      {
        topic: "Analysing Data",
        front: "Why can't a cross-sectional study claim causation?",
        back: "It measures everything at one time point; it can show association but cannot establish which came first or rule out confounding.",
      },
      {
        topic: "Analysing Data",
        front: "Which statistic for skewed data, and why?",
        back: "The median — extreme values drag the mean away from the typical patient; the median resists them.",
      },
    ],
    sources: [
      {
        organization: "Taylor & Francis",
        title: "Using thematic analysis in psychology (Braun & Clarke)",
        year: "2006",
      },
      {
        organization: "Wolters Kluwer",
        title: "Nursing Research: Generating and Assessing Evidence for Nursing Practice (Polit & Beck)",
        year: "2020",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "SAGE",
        title: "Research Design: Qualitative, Quantitative, and Mixed Methods Approaches (Creswell & Creswell)",
        year: "2018",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────
  {
    courseSlug: "nursing-research-4",
    moduleTitle: "Analysis & Writing",
    lessonTitle: "Writing the Final Report",
    description:
      "The structure of a research report — written honestly, cited properly, and strong enough to be trusted by people who were never there.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe the IMRaD structure of a research report.",
      "Explain integrity in reporting: honest findings, limitations and attribution.",
      "Apply referencing and paraphrasing conventions correctly.",
    ],
    tags: ["report writing", "imrad", "integrity", "referencing"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Writing up is where integrity becomes visible. Your report is read by people who were not there: they cannot see the twenty-two participants who agreed to talk, only what you write about them. Everything — the structure, the citations, the limitations — either tells them they can trust you or tells them they cannot.\n\nThe good news is that the structure is standard, the ethics are common sense, and honesty is the easier path: you never have to remember a lie.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Reports follow **IMRaD**: Introduction (why the question matters and where the gap is), Methods (exactly what you did, so precisely that a stranger could repeat it), Results (what you found — findings only, no interpretation), and Discussion (what it means, how it compares with the literature, its limitations, and what should happen next). Results and discussion must never blur into each other: numbers and quotes in one, meaning in the other.\n\nIntegrity has three faces in the write-up. Honest reporting: what you found is what you write — including the inconvenient, the small and the absent; 'we found no difference' is a result. Limitations: naming your study's weaknesses is a strength that earns trust, not a confession that undoes you. Attribution: another person's idea or sentence is cited every single time — paraphrased in your own words with the source, or quoted with quotation marks and the source. Fabricated data and invented quotes are the cardinal sins: career-ending, and an insult to the real participants who gave you their time.",
      },
      {
        type: "clinical_pearl",
        body: "If you did not find it, do not write it. A truthful 'no difference' earns more respect than a beautiful invention — and only one of them is research.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A student analysing her questionnaires realises only twenty-two of the twenty-five she distributed were returned, and one interview was cut short when the participant was called to theatre. A friend suggests writing 'twenty-five questionnaires, twenty-five interviews' because 'that is what you planned'. Instead she reports twenty-two returned (an 88 percent response rate), describes the incomplete interview honestly, and discusses in her limitations how the missing three might have differed.\n\nWhy is her version the stronger research?\n\nAnswer: Her numbers describe what actually happened, so anyone repeating her study knows what to expect, and readers can judge the effect of the missing questionnaires for themselves. The limitations section converts a weakness into evidence of rigour — she thought about who might be missing and why. The invented version would make her report unreproducible and, if discovered, would end the project in a misconduct process. Integrity is not only ethics; it is the difference between research and storytelling.",
      },
      {
        type: "memory_trick",
        body: "IMRaD = Introduction (why), Methods (how), Results (what), and Discussion (so what) — findings on one floor, meaning on the other, never mixed.",
      },
      {
        type: "summary",
        body: "- IMRaD structures the report: why, how, what, so what — results and discussion stay separate.\n- Report what you found, including null results and small numbers.\n- Limitations sections are evidence of rigour, not weakness.\n- Cite every borrowed idea; fabricated data and quotes end careers.",
      },
    ],
    questions: [
      {
        topic: "Writing the Final Report",
        type: "MCQ",
        difficulty: "Easy",
        stem: "In IMRaD, where do the study's findings appear without interpretation?",
        options: [
          "Introduction",
          "Results",
          "Discussion",
          "Methods",
        ],
        correctIndex: 1,
        explanation:
          "Results reports the findings — numbers, tables and quotes — and nothing else. Interpretation, comparison with the literature and implications belong to the Discussion.",
        courseSlug: "nursing-research-4",
      },
      {
        topic: "Writing the Final Report",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You paraphrase three sentences from a WHO guideline into your background section. What is required?",
        options: [
          "Nothing, because paraphrasing is your own work",
          "A mention in the acknowledgements",
          "Quotation marks around the three sentences",
          "A citation to the source, since the ideas are borrowed even though the words are yours",
        ],
        correctIndex: 3,
        explanation:
          "Plagiarism is about stolen ideas, not only stolen words. A paraphrase in your own words still carries someone else's thinking, so the source is cited either way.",
        courseSlug: "nursing-research-4",
      },
      {
        topic: "Writing the Final Report",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Your intervention showed no difference from the comparison group. In the write-up you should…",
        options: [
          "Report the null result honestly and discuss possible reasons",
          "Omit that outcome and report the others",
          "Reframe the finding until it looks positive",
          "Increase the sample size after analysis until significance appears",
        ],
        correctIndex: 0,
        explanation:
          "Null results are results. Selective reporting, reframing and post-hoc sample inflation are all research misconduct — and they rob the profession of useful evidence.",
        courseSlug: "nursing-research-4",
      },
      {
        topic: "Writing the Final Report",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "The limitations section is best understood as…",
        options: [
          "An apology that weakens the report",
          "An optional extra examiners rarely read",
          "A naming of the study's weaknesses and their possible effect — a strength that earns trust",
          "The place to explain why the study almost failed",
        ],
        correctIndex: 2,
        explanation:
          "Limitations show that you saw your study the way a careful reader would: sampling, response rate, design — and what each might have done to the findings. Far from undoing the work, it is the section that proves the mind behind it is trustworthy.",
        courseSlug: "nursing-research-4",
      },
    ],
    flashcards: [
      {
        topic: "Writing the Final Report",
        front: "What does IMRaD stand for?",
        back: "Introduction, Methods, Results, and Discussion — why, how, what, so what.",
      },
      {
        topic: "Writing the Final Report",
        front: "What belongs in the limitations section?",
        back: "An honest description of your study's weaknesses — sampling, response rate, design — and their possible effect; it earns trust rather than losing it.",
      },
      {
        topic: "Writing the Final Report",
        front: "What is the rule on citing sources?",
        back: "Every borrowed idea is cited — paraphrased in your own words with the source, or quoted with quotation marks and the source.",
      },
      {
        topic: "Writing the Final Report",
        front: "Why report the true response rate rather than the planned one?",
        back: "Honest numbers make the study reproducible and let readers judge the missing data's effect; invented numbers destroy the report's credibility — and careers.",
      },
    ],
    sources: [
      {
        organization: "Committee on Publication Ethics (COPE)",
        title: "Core Practices",
        note: "Publication ethics guidance for researchers — see current core practices.",
      },
      {
        organization: "World Health Organization",
        title: "Standards and Operational Guidance for Ethics Review of Health-Related Research with Human Participants",
        year: "2011",
      },
      {
        organization: "Wolters Kluwer",
        title: "Nursing Research: Generating and Assessing Evidence for Nursing Practice (Polit & Beck)",
        year: "2020",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 14 ─────────────────────────────────────────────────────
  {
    courseSlug: "nursing-research-4",
    moduleTitle: "Analysis & Writing",
    lessonTitle: "Presenting & Defending Your Work",
    description:
      "From abstract to viva — slides that carry one message, a defence that is a conversation, and the questions you rehearse before anyone asks them.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe how to structure an abstract and a presentation of your project.",
      "Explain what a defence panel is really assessing.",
      "Apply a calm answer technique to the hard questions examiners ask.",
    ],
    tags: ["presentation", "defence", "viva", "abstracts"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Two mountains stand after submission: presenting the work, and defending it. The presentation carries your findings to an audience; the defence — the viva — is a conversation with examiners who have read every page and want to know whether the mind behind the project is the one the report promises.\n\nBoth are learnable. Panels are predictable in the best sense: they ask the questions any careful reader would ask, and almost all of them can be rehearsed in advance — by you, alone, with a list and a clock.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Start with the **abstract**: the why, the how, the what and the so-what of your study, usually in 250 to 300 words. Write it early — it doubles as the spine of the talk, the poster and the one-page summary your facility will actually read.\n\nSlides obey one law: one message per slide, big fonts, findings as pictures wherever possible. Tell the study as a story — why the question mattered, what you did, what you found, what should change — and rehearse aloud to a clock, because a talk you have never spoken takes twice as long as you think.\n\nThe defence itself is a small panel — typically your supervisor plus internal and external examiners. Expect five recurring questions: why this design and not another; why this sample and size; what the limitations are; what you would do differently; and how the findings change practice. Answering has a shape: pause, acknowledge the trade-off honestly, justify your choice with evidence from your own work, and end by naming the limitation yourself. And when you do not know — say so, and offer how you would find out: 'I did not test that, but the literature would suggest…' Examiners forgive honest gaps; they do not forgive invention, because they have read the literature you would be inventing from.",
      },
      {
        type: "table",
        title: "Five questions every panel asks",
        body: "| The question | Prepare by… |\n|---|---|\n| Why this design? | Naming the alternatives and why you rejected them |\n| Why this sample and size? | Stating your method and your constraints honestly |\n| What are the limitations? | Owning them before the panel finds them |\n| What would you do differently? | Showing what the project taught you |\n| How does this change practice? | Offering one concrete, feasible recommendation |",
      },
      {
        type: "case",
        title: "In the defence room",
        body: "The external examiner leans back: 'Your question was about why nurses do not reassess pain. Why did you choose a cross-sectional survey rather than interviews, when interviews explore why more deeply?'\n\nHow does a strong answer begin?\n\nAnswer: With the trade-off, named out loud: 'Interviews would have given me depth — a survey gave me reach. In one semester I could reach every nurse on the four medical wards rather than interview a handful, and the pattern across many respondents was itself the finding: the barriers clustered around workload and handover, which points to a system problem rather than an attitude problem.' She then closes with the limitation unprompted: 'What I lost is nuance — and my recommendations include a follow-up interview study.' The panel is satisfied not because she was unassailable, but because she understood her own choices well enough to defend them honestly — which is the whole examination.",
      },
      {
        type: "clinical_pearl",
        body: "The defence is the one examination where you have already written the answers. Your job is to remember that you wrote them — and to say so, plainly, when you did not.",
      },
      {
        type: "memory_trick",
        body: "PACE your defence: Pause before answering, Acknowledge the trade-off, Choose with evidence from your own work, End with the limitation. Calm beats fast.",
      },
      {
        type: "summary",
        body: "- Write the abstract early — why, how, what, so-what in 250 to 300 words; it becomes the spine of everything else.\n- One message per slide; rehearse aloud to a clock.\n- Panels ask five predictable questions — design, sample, limitations, what you would change, and practice relevance.\n- Pause, acknowledge the trade-off, justify from your own work, end with the limitation; honest 'I do not know' beats invented confidence.",
      },
    ],
    questions: [
      {
        topic: "Presenting and Defending",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What does a strong project abstract contain?",
        options: [
          "The literature review, copied word for word",
          "The why, how, what and so-what of the study, in 250 to 300 words",
          "The raw data tables",
          "The acknowledgements and funding statement",
        ],
        correctIndex: 1,
        explanation:
          "An abstract is the whole study compressed: why the question mattered, how you studied it, what you found, and what should change. Written early, it becomes the spine of the talk and the poster.",
        courseSlug: "nursing-research-4",
      },
      {
        topic: "Presenting and Defending",
        type: "MCQ",
        difficulty: "Easy",
        stem: "The fundamental rule for presentation slides is…",
        options: [
          "As many words as will fit, to prove thoroughness",
          "One message per slide, big fonts, findings shown as pictures where possible",
          "Animations on every slide to hold attention",
          "Reading the report aloud, slide by slide",
        ],
        correctIndex: 1,
        explanation:
          "Slides are signposts, not documents: one message each, legible from the back row, findings drawn rather than written wherever possible. The audience came to hear you think, not to read along.",
        courseSlug: "nursing-research-4",
      },
      {
        topic: "Presenting and Defending",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In your defence, an examiner asks a statistical question you genuinely cannot answer. The best response is to…",
        options: [
          "Guess confidently — panels respect confidence",
          "Change the subject to your strengths",
          "Admit you do not know, and offer how you would find out",
          "Look at your supervisor to answer for you",
        ],
        correctIndex: 2,
        explanation:
          "Examiners forgive honest gaps and remember invention forever. 'I did not test that, but here is how I would find out' shows exactly the scholarly habit the viva exists to detect.",
        courseSlug: "nursing-research-4",
      },
      {
        topic: "Presenting and Defending",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is a defence panel really assessing?",
        options: [
          "Whether you memorised every reference in the bibliography",
          "Whether you understand and can justify the choices behind your own study",
          "How quickly you can talk under pressure",
          "Whether you agree with every comment the examiners make",
        ],
        correctIndex: 1,
        explanation:
          "The viva tests ownership: do you grasp why you chose that design, that sample, that tool — and can you name the trade-offs honestly? Memorisation and total agreement are the marks of a candidate who does not.",
        courseSlug: "nursing-research-4",
      },
    ],
    flashcards: [
      {
        topic: "Presenting and Defending",
        front: "What are the four beats of an abstract?",
        back: "Why the question mattered, how you studied it, what you found, and so what should change — in 250 to 300 words.",
      },
      {
        topic: "Presenting and Defending",
        front: "What is the one law of slides?",
        back: "One message per slide, big fonts, findings as pictures wherever possible — rehearsed aloud to a clock.",
      },
      {
        topic: "Presenting and Defending",
        front: "How do you answer a question you cannot answer in a viva?",
        back: "Say so, and offer how you would find out — honest gaps are forgivable; invention is not.",
      },
      {
        topic: "Presenting and Defending",
        front: "Name the five questions every panel asks.",
        back: "Why this design, why this sample and size, what are the limitations, what would you do differently, and how does this change practice.",
      },
    ],
    sources: [
      {
        organization: "University of Ghana School of Nursing",
        title: "Final-Year Project Presentation and Defence Guidance",
        note: "Departmental defence guidance — verify the current format with your institution.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Nursing Research: Generating and Assessing Evidence for Nursing Practice (Polit & Beck)",
        year: "2020",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "SAGE",
        title: "Research Design: Qualitative, Quantitative, and Mixed Methods Approaches (Creswell & Creswell)",
        year: "2018",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 15 ─────────────────────────────────────────────────────
  {
    courseSlug: "nursing-research-4",
    moduleTitle: "Sharing & Using Research",
    lessonTitle: "From Project to Practice",
    description:
      "The loop that turns evidence into everyday care — audits, small tests of change, and local audiences who can act first.",
    difficulty: "Moderate",
    durationMin: 10,
    objectives: [
      "Describe the evidence-based practice triad and the audit cycle.",
      "Explain common barriers to practice change and how PDSA tests overcome them.",
      "Apply a local-first approach to sharing and using your findings.",
    ],
    tags: ["evidence-based practice", "audit", "pdsa", "dissemination"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "You will spend your career noticing gaps between what the guidelines say and what happens on the ward — observations charted late, the reassessment nobody returns for, the routine that continues because 'we have always done it this way.' Noticing is step one. This lesson is about the steps after: how findings — yours and anyone else's — actually change practice, and why they change so slowly.\n\nEvidence-based practice is a triad: the best available evidence, your clinical expertise, and the patient's own values and circumstances. Change that ignores any corner of the triangle tends to fail — usually in month three.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The **audit cycle** is the profession's standard tool for closing gaps: agree the standard (from WHO or Ghana Health Service guidance), measure current practice against it, show the gap, change something, then measure again. Measurement before and after is what separates an improvement from a feeling. Where the change is uncertain, run it small first — a **PDSA** cycle: Plan the change and what success looks like, Do it on a tiny scale, Study the results, then Act — adopt, adapt or abandon — before spreading it.\n\nDissemination is the other half of change, and it starts local. The people who can act on a facility-level finding are the people working in that facility: a ten-minute presentation at handover, a one-page summary on the noticeboard, an agenda item for the district health management team. Only exceptional projects need a journal; every project owes its participants plain-language findings — the patients and nurses who gave you the data are owed the answer they helped produce. And respect the barriers, because they are real: habit, workload, missing supplies, hierarchy. Work with them — involve the people who do the work before changing their work, attach the change to something already routine, and take your evidence to the unit in-charge as a proposal, not an accusation. Change one practice at a time; ten simultaneous 'improvements' are zero improvements, because nobody can tell what worked.",
      },
      {
        type: "clinical_pearl",
        body: "Present at the facility where you collected the data before anyone else hears it. The staff who opened their doors deserve it first — and their questions will sharpen everything you say afterwards.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "On placement, a final-year student notices that although the ward's standing expectation is reassessment of pain within an hour of analgesia, the charts show it happening for barely a third of patients. With her senior's blessing, she audits two weeks of charts — the proportion of documented reassessments within the hour — then proposes a four-week test on selected shifts: a two-minute 'pending reassessments' prompt at every handover.\n\nWhat must she do to know whether the change worked?\n\nAnswer: She needs before-and-after measurement on the same yardstick — the proportion of documented reassessments, counted for two weeks before and during the test — read together with the ward's own observations about workload. She studies the results with the team, collecting their objections and suggestions honestly, then decides with them whether to adapt or spread it to all shifts. Then she takes the numbers to the district health management team as an audit rather than a complaint — which is what makes this an improvement project instead of an argument. A standing prompt that works could reach every ward in the district; a grievance would have reached only the minutes of one meeting.",
      },
      {
        type: "memory_trick",
        body: "PDSA: Plan the change, Do it small, Study what happened, Act — adopt, adapt or abandon. Roll the cycle until the ward, not just the guideline, has changed.",
      },
      {
        type: "summary",
        body: "- Evidence-based practice = best evidence + clinical expertise + the patient's values.\n- The audit cycle: agree the standard, measure, show the gap, change, re-measure.\n- Disseminate locally first: handover talks, one-page summaries, district meetings — and return plain-language findings to participants.\n- Involve the people who do the work, change one practice at a time, and measure everything.",
      },
    ],
    questions: [
      {
        topic: "From Project to Practice",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What are the three corners of evidence-based practice?",
        options: [
          "Tradition, hierarchy and protocol",
          "Best available evidence, clinical expertise and the patient's values",
          "Cost, availability and seniority",
          "Research, statistics and publication",
        ],
        correctIndex: 1,
        explanation:
          "Evidence alone does not decide care: it meets the clinician's judgement and the patient's own values and circumstances — the classic three-part definition of EBP.",
        courseSlug: "nursing-research-4",
      },
      {
        topic: "From Project to Practice",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In the audit cycle, what distinguishes a genuine improvement from a feeling that care is better?",
        options: [
          "The staff report feeling more motivated",
          "The change was taught in a workshop",
          "A new policy was circulated by email",
          "Practice was measured against the standard before and after the change",
        ],
        correctIndex: 3,
        explanation:
          "Audit closes the loop with measurement: the same standard, measured before and after, shows whether the gap actually closed. Feelings, workshops and circulars cannot.",
        courseSlug: "nursing-research-4",
      },
      {
        topic: "From Project to Practice",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why test a practice change on a small scale first (PDSA)?",
        options: [
          "Small failures are cheaper and teach before the change is spread",
          "Small scale avoids the need to measure anything",
          "Committees only ever approve small changes",
          "To prove the old way was dangerous",
        ],
        correctIndex: 0,
        explanation:
          "A small test reveals unexpected problems — workload objections, missing supplies — at low cost, letting you adapt before spreading the change across a whole unit.",
        courseSlug: "nursing-research-4",
      },
      {
        topic: "From Project to Practice",
        type: "MCQ",
        difficulty: "Easy",
        stem: "For a student project with facility-level findings, the first dissemination audience should usually be…",
        options: [
          "An international journal",
          "The university's press office",
          "Social media followers",
          "The facility and district staff who can act on the findings",
        ],
        correctIndex: 3,
        explanation:
          "The audience that can change practice at the facility is the facility itself. Local sharing is fast, free, and turns findings into action — the very definition of dissemination done well.",
        courseSlug: "nursing-research-4",
      },
    ],
    flashcards: [
      {
        topic: "From Project to Practice",
        front: "Name the three corners of evidence-based practice.",
        back: "Best available evidence, the clinician's expertise, and the patient's values and circumstances.",
      },
      {
        topic: "From Project to Practice",
        front: "What are the steps of the audit cycle?",
        back: "Agree the standard, measure current practice, show the gap, make a change, re-measure against the same standard.",
      },
      {
        topic: "From Project to Practice",
        front: "What does PDSA stand for?",
        back: "Plan, Do, Study, Act — test a change small, study the results, then adopt, adapt or abandon before spreading.",
      },
      {
        topic: "From Project to Practice",
        front: "What does dissemination owe the participants?",
        back: "Plain-language findings returned to them — the patients and nurses who gave the data are owed the answer they helped produce.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Patient Safety Curriculum Guide: Multi-professional Edition",
        year: "2011",
      },
      {
        organization: "Ghana Health Service",
        title: "Quality Assurance Strategy",
        note: "National quality-improvement framework — verify the current version with GHS.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Nursing Research: Generating and Assessing Evidence for Nursing Practice (Polit & Beck)",
        year: "2020",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 16 ─────────────────────────────────────────────────────
  {
    courseSlug: "nursing-research-4",
    moduleTitle: "Sharing & Using Research",
    lessonTitle: "Reading Research Critically as a Registered Nurse",
    description:
      "Not every published study deserves your trust — the three questions that separate evidence from decoration, for the whole of your career.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe the three master questions of critical appraisal.",
      "Explain bias and confounding and how each is contained.",
      "Apply effect sizes, confidence intervals and checklists to real reading — and know where busy nurses find evidence first.",
    ],
    tags: ["critical appraisal", "bias", "confidence intervals", "evidence"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Not every published study deserves your trust, and the title rarely confesses its weaknesses. Critical appraisal is the skill of interrogating a paper — is this true? is this big? does this apply to my ward? — and it is what separates evidence-based practitioners from citation collectors.\n\nAs a registered nurse you will read under time pressure: a journal club article, a new guideline, a dressing leaflet, a poster at a conference. This lesson gives you the three master questions, the biases that corrupt studies, and the numbers that deserve your suspicion — plus where to look first when you have ten minutes and a clinical question.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Interrogate every paper with **V-R-A**: is it **valid** — were the methods strong enough that bias has not manufactured the result? Are the **results** important — big enough to matter and precise enough to trust? Is it **applicable** — were the participants like your patients, in a setting like yours, with resources like yours?\n\n**Bias** is systematic error: **selection bias** — the groups differed before the study began, contained by randomisation with concealed allocation; **measurement bias** — faulty tools or unblinded outcome assessment, contained by blinding. **Confounding** is the hidden third variable linked to both exposure and outcome — poverty confounds many an apparent cause; randomisation, restriction, matching and adjusted analysis contain it. Checklists keep the interrogation honest: CASP for reading, CONSORT for reporting trials, STROBE for observational studies, PRISMA for reviews.\n\nThen read the numbers like a clinician: effect size first (relative risk, odds ratio, mean difference — how big is the difference?), then the **95% confidence interval** — the range of plausible truth; if it crosses 1 for a ratio measure, the study cannot exclude 'no effect', whatever the p-value suggests. Statistical significance is not clinical importance: a tiny, precise difference can be significant and still change nothing on your ward. And when time is short, start where the evidence is already filtered and appraised — systematic reviews, WHO and Ghana Health Service guidance — before descending to a single fresh small study.",
      },
      {
        type: "clinical_pearl",
        body: "A p-value answers 'could chance have done this?' A confidence interval answers 'how big might it really be?' Your practice should follow the size, not the stars.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At a conference, a poster claims a new wound dressing 'significantly reduces pressure injuries'. You find the abstract: relative risk 0.95, 95% confidence interval 0.70 to 1.30, p = 0.75. A colleague says the title still says 'reduces'.\n\nWhat do you tell her?\n\nAnswer: The interval crosses 1 and the p-value is far from significant — the study cannot exclude no effect, so 'reduces' in the title is spin. The effect, if any, is small and imprecise; no change in ward practice is justified. Keep the current dressing protocol, and judge titles by their intervals, not their adjectives.",
      },
      {
        type: "memory_trick",
        body: "Interrogate with V-R-A: Valid? Results big and precise? Applicable to my patients? And remember — a confidence interval crossing 1 is a broken bridge: however wide the title smiles, no significant effect crosses it.",
      },
      {
        type: "summary",
        body: "- Three questions: is the study valid, are the results important, are they applicable to my setting?\n- Selection bias is contained by randomisation with concealed allocation; measurement bias by blinding.\n- Confounding is a third variable linked to exposure and outcome — contained by design and adjustment.\n- Use the checklists (CASP, CONSORT, STROBE, PRISMA); read effect size and the 95% confidence interval — a CI crossing 1 means no demonstrated effect.\n- When time is short, start with filtered evidence: systematic reviews and WHO or Ghana Health Service guidance.",
      },
    ],
    questions: [
      {
        topic: "Reading Research Critically",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why are outcome assessors blinded in a trial?",
        options: [
          "To make the trial cheaper to run",
          "To reduce measurement bias from knowing which group a participant belongs to",
          "To keep participants from leaving the study",
          "To satisfy the ethics committee only",
        ],
        correctIndex: 1,
        explanation:
          "An assessor who knows the allocation may, quite unconsciously, record outcomes differently between groups — measurement bias. Blinding the assessor protects the measurement, protecting the study's validity.",
        courseSlug: "nursing-research-4",
      },
      {
        topic: "Reading Research Critically",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A trial reports a relative risk of 1.2 with a 95% confidence interval of 0.8 to 1.8. How should you interpret it?",
        options: [
          "A 20% increase in risk, proven",
          "A 20% increase in risk, clinically important",
          "Not statistically significant — the interval crosses 1, so no effect cannot be excluded",
          "The trial was too small to report a confidence interval correctly",
        ],
        correctIndex: 2,
        explanation:
          "The interval spans both sides of 1 — risk could plausibly be raised by 80% or lowered by 20%. The point estimate means little until the interval excludes no effect; the CI was computable precisely because the trial had a size to compute from.",
        courseSlug: "nursing-research-4",
      },
      {
        topic: "Reading Research Critically",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is confounding?",
        options: [
          "Deliberate falsification of results by researchers",
          "Random variation that disappears with bigger samples",
          "An error in the statistical software",
          "A third variable associated with both the exposure and the outcome that can fake or mask an association",
        ],
        correctIndex: 3,
        explanation:
          "Confounding is the hidden third man: linked to both exposure and outcome, it can manufacture a false association or bury a real one. Randomisation, matching, restriction and adjusted analysis are the containment tools; it is not fraud, not chance, not software error.",
        courseSlug: "nursing-research-4",
      },
      {
        topic: "Reading Research Critically",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A busy staff nurse wants current guidance on a wound-care question and has ten minutes. The best first stop is…",
        options: [
          "The newest single trial found by a quick search",
          "A company's wound-care brochure",
          "A colleague's opinion in a group chat",
          "A systematic review or WHO and Ghana Health Service guidance, where evidence is already appraised",
        ],
        correctIndex: 3,
        explanation:
          "Start where the appraisal has already been done: systematic reviews synthesise all the trials, and WHO or GHS guidance translates them for your setting. A single fresh study, a brochure and a chat message each carry unfiltered — or interested — claims.",
        courseSlug: "nursing-research-4",
      },
    ],
    flashcards: [
      {
        topic: "Reading Research Critically",
        front: "What are the three master questions of appraisal (V-R-A)?",
        back: "Valid — are the methods free of fatal bias? Results — big enough to matter and precise enough to trust? Applicable — are the participants and setting like mine?",
      },
      {
        topic: "Reading Research Critically",
        front: "What does a 95% confidence interval crossing 1 tell you?",
        back: "For a ratio measure (RR, OR), the interval includes 'no effect' — the result is not statistically significant, however the title words it.",
      },
      {
        topic: "Reading Research Critically",
        front: "Define confounding and name two ways to contain it.",
        back: "A third variable linked to both exposure and outcome that distorts their true association. Contained by randomisation, matching, restriction or statistical adjustment.",
      },
      {
        topic: "Reading Research Critically",
        front: "Where does a time-poor nurse look first for evidence?",
        back: "Filtered sources: systematic reviews, WHO guidelines and Ghana Health Service guidance — appraisal already done — before individual studies.",
      },
    ],
    sources: [
      {
        organization: "Critical Appraisal Skills Programme (CASP)",
        title: "CASP Checklists for Appraising Research",
        note: "Free appraisal checklists — see the current versions.",
      },
      {
        organization: "EQUATOR Network",
        title: "Reporting Guidelines: CONSORT, STROBE and PRISMA",
        note: "Reporting standards library — see current versions.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Nursing Research: Generating and Assessing Evidence for Nursing Practice (Polit & Beck)",
        year: "2020",
        note: "Educational source — verify current edition.",
      },
    ],
  },
];
