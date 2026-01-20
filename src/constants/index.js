import {
    logo,
    impetus,
    concepts,
    pradnya,
    techfiesta,
    csi, intangles, eq, imocha, pasc, pisb, marketcast,
    cloudhedge,
    fold_health,
    non_stop,
  } from "../assets";

  const notifications = ["🚀 Don’t just watch innovation—be part of it! Register today! 🚀", "⚡ Code, create, and conquer—your journey begins here. ⚡"]
  
//   export const navItems = [
//   { id: "about", isHome: true, title: "About" },
//   { id: "events", isHome: true, title: "Events" },
//   { id: "committee/core", isHome: false, title: "Committee", path: "/committee/core" },
//   { id: "register", isHome: false, title: "Register" },
// ];


export const navItems = [
  { id: "home", title: "Home", type: "hash" },
  { id: "about", title: "About", type: "hash" },
  { id: "events", title: "Events", type: "hash" },
  { id: "committee", title: "Committee", type: "route", path: "/committee/core" },
  { id: "register", title: "Register", type: "route", path: "/register" }
];




  const navLinks = [
    // {
    //   id: "results/impetus",
    //   isHome: false,
    //   title: "Results",
    // },
    {
      id: "about",
      isHome: true,
      title: "About",
    },
    {
      id: "events",
      isHome: true,
      title: "Events",
    },
    // {
    //   id: "committee/core",
    //   isHome: false,
    //   title: "Committee",
    // },
    {
      id: "register",
      isHome: false,
      title: "Register",
    },
  ];

  const adminNavlinks = [
    {
      id: "admin",
      isHome: false,
      title: "Dashboard",
    },
    {
      id: "admin/verify/impetus",
      isHome: false,
      title: "Verify",
    },
    {
      id: "admin/incomplete-registrations/impetus",
      isHome: false,
      title: "Follow-up",
    },
    {
      id: "admin/registrations/impetus",
      isHome: false,
      title: "Teams",
    },
    {
      id: "admin/allocate/impetus",
      isHome: false,
      title: "Allocate",
    },
    {
      id: "admin/deallocate/impetus",
      isHome: false,
      title: "Deallocate",
    },
    {
      id: "admin/results/imp_project_score",
      isHome: false,
      title: "Results",
    },
    {
      id: "admin/logout",
      isHome: false,
      title: "Logout",
    },
  ];

  const judgeNavLinks = [
    {
      id: "judge",
      isHome: false,
      title: "Home",
    },
    {
      id: "judge/evaluate",
      isHome: false,
      title: "Evaluate",
    },
    {
      id: "judge/profile",
      isHome: false,
      title: "Profile",
    },
    {
      id: "admin/logout",
      isHome: false,
      title: "Logout",
    },
  ];

  const about_text = "Impetus and Concepts (InC) is a flagship technical event of SCTR's Pune Institute of Computer Technology (PICT), Pune , which will be held during the 1st week of April 2024. InC is an intercollegiate international level competition that has been catching the attention of corporate giants for the quality of projects and an opportunity to recruit/mentor young talented budding entrepreneurs. Every year InC sets a new benchmark and provides an opportunity for students to realize their ideas into effective products. Over the years, it has become the most popular and awaited event with continuous improvement in footfall, the number and quality of projects/papers, etc. This event also sets a platform for students to design, exhibit, and watch their ideas come true. This technical fest has inventive events namely - Impetus, Concepts, Pradnya.Impetus is a Project Competition for FE to TE students, all engineering branches confined to specific domains ; Concepts is a Project Competition for Final Year Students, all engineering branches confined to specific domains ; and Pradnya - An International Coding Competition. Students are invited with projects addressing the societal needs like Health, Agriculture, Kids/Women Safety, Education, etc. and the best project judged by the juries will be awarded with a cash prize of ₹ 1 Lakh Cash Prize from PICT."
  
  const sponsors = {
    title: [
      {src: eq,
      name: 'eq',},
    ],
    co: [
      {src: imocha,
      name: 'imocha',},

      {src: marketcast,
      name: 'marketcast',
      },

      {src: intangles,
      name: 'intangles',},

      {src: cloudhedge,
        name: 'cloudhedge',
      },
    ],
    pradnya: [
      {src: cloudhedge,
        name: 'cloudhedge',
      },
    ],
    other: [
      {src: fold_health,
        name: 'fold_health',
      },
      {src: non_stop,
        name: 'non_stop',
      },
    ],
    association: [
      {src: pasc,
        name: 'pasc',},
      
      {src: pisb,
      name: 'pisb',},

      {src: csi,
      name: 'csi',},
    ],  
  }

  
  // const events = [
  //   { id: 1, _id: 'impetus', title: "Impetus", description: "International Level Project Exhibition and Competition.", logo: impetus, color:"bg-slate-700", team_size: '2-5 members', type: 'Project Expo', date: "Registration Closed" },
  //   { id: 2, _id: 'pradnya', title: "Pradnya", description: "Compete with the best minds in the National Level Coding Contest.", logo:pradnya, color:"bg-slate-700", team_size: '1-2 members', type: 'Coding Competition', date: "Registration Closed" },
  //   { id: 3, _id: 'concepts', title: "Concepts", description: "The most grand project exhibition event Concepts for final year student.", logo: concepts, color:"bg-slate-700", team_size: '2-5 members', type: 'Project Expo', date: "Registration Closed" },
  //   { id: 4, _id: 'techfiesta', title: "TechFiesta", description: "International Hackathon", logo: techfiesta, color:"bg-slate-700", team_size: '4-5 members', type: 'Hackathon', date: "Registration Closed" },
  //   { id: 5, _id: 'impetus', title: "Special Event", description: "An exciting surprise awaits! Stay tuned for something unforgettable.", logo: logo, color:"bg-slate-700", team_size: '1-5 members', type: 'Unveiling Soon', date: "To Be Announced" },
  // ];
  const events = [
    { id: 1, _id: 'impetus', title: "Impetus", description: "International Level Project Exhibition and Competition.", logo: impetus, color:"bg-slate-700", team_size: '2-5 members', type: 'Project Expo', date: "Registration Started!" },
    { id: 2, _id: 'pradnya', title: "Pradnya", description: "Compete with the best minds in the National Level Coding Contest.", logo:pradnya, color:"bg-slate-700", team_size: '1-2 members', type: 'Coding Competition', date: "Registration Started!" },
    { id: 3, _id: 'concepts', title: "Concepts", description: "The most grand project exhibition event Concepts for final year student.", logo: concepts, color:"bg-slate-700", team_size: '2-5 members', type: 'Project Expo', date: "Registration Started!" },
    { id: 4, _id: 'techfiesta', title: "TechFiesta", description: "International Hackathon", logo: techfiesta, color:"bg-slate-700", team_size: '4-5 members', type: 'Hackathon', date: "Registration Closed" },
    { id: 5, _id: 'impetus', title: "Special Event", description: "An exciting surprise awaits! Stay tuned for something unforgettable.", logo: logo, color:"bg-slate-700", team_size: '1-5 members', type: 'Unveiling Soon', date: "To Be Announced" },
  ];

  const eventsData = {
    impetus: {
      id: 'impetus',
      logo: impetus,
      criteria:
        "First, Second and Third Year Engineering Students.",
      name: "Impetus",

      short_desc: "International Level Project Exhibition and Competition.",

      description: ["Impetus is an intercollegiate international level competition and has been attracting corporate giants for not only sponsorship but also in terms of time and guidance to the participants. Industries such as eQ Technologic, Microsoft, Mobiliya, Deutsche Bank Group, Avaya, Siemens, Sagitech, Apporbit, e-Zest, HP, Indian Oil, 3 Ogeestudio, Tata, Mojo Networks, Ryussi, Tibco, Calsoft, Persistent, Pubmatic, IBM, Airtight, AthenaHealth, IEEE, ACM, CSI, were closely associated with this event. During the 3 day event, first year, second year and third year students from various colleges across India and abroad showcase their projects in domains like", `Application Development `, `Communication, Networking, Security `, `git Learning, Pattern Recognition, Artificial Intelligence`, `Embedded systems, VLSI, IoT, Remote Sensing`, `Blockchain, Cloud Computing`, `Others`],
      
      domains: [`Application Development `, `Communication Networking`, `Security`, `Pattern Recognition, Artificial Intelligence`, `Digital / Image / Speech / Video Processing`, `Others`],

      // domains: [
      //   {
      //     domain: "APPLICATION DEVELOPMENT",
      //     sub_domains:
      //       "Mobile Applications-Android, Web Applications, Database applications, others),(Big Earth Data Analytics, Geo Informatics, Data Mining on Big Data, Digital marketing optimization, Data exploration and discovery, Fraud detection and prevention, Social network and relationship analysis, Machine generated data analytics, Data retention, Others)",
      //   },
      //   {
      //     domain: "COMMUNICATION NETWORKS & SECURITY SYSTEMS",
      //     sub_domains:
      //       "(Computer networks, Internet of Things, Software Defined Network, Vehicular Networks, Wireless and Mobile Networks, Information and Network Security, GPS | GSM Projects, Wireless Communication, Antenna & RF Communication, Optical Communication & Network, Others), (Blockchain applications: cryptocurrency systems, healthcare system, advertising processes, insurance processes, copyright protection system, energy system, tracking system, monitoring system, Security system, societal applications, others), (Virtualization and Autonomic Computing, High Speed Network, Security in Cloud, Cloud Computing, Data center Management, Handling Big Data on Cloud, Mobile Cloud, Cloud Forensics, Fog Computing, Others)",
      //   },
      //   {
      //     domain: "DIGITAL / IMAGE/ SPEECH / VIDEO PROCESSING",
      //     sub_domains:
      //       "(Digital Signal processing, Image processing, Speech recognition, Video processing, Speech to text / Text to speech, Others)",
      //   },
      //   {
      //     domain: "EMBEDDED/VLSI SYSTEMS",
      //     sub_domains:
      //       "(Image Processing & Remote Sensing, Machine Learning for Embedded Systems, Embedded Vision, Internet of Things, others), (Analog & Mixed Signal VLSI Design, Testing & Verification of VLSI Design, others)",
      //   },
      // ],

      registrations: {
        fees: {
          national: `&#8377;100/-`,
          international: `Free`,
        },
        min_team_size: 2,
        max_team_size: 5,
      },
      prize: `Total Cash prizes worth &#8377;7 Lakh.`,
      rules: [
        `Judge's decision will be final.`,
        `Project status must be in "Ready to Demonstrate".`,
      ],
      note: `Project addressing the societal needs like Health, Agriculture, Kids/Women Safety, Education etc. & selected project shall be awarded &#8377;1 Lakh Cash Prize from PICT.`,

      // contact: ['Apoorvaraj 8530191073 ', 'Mrugank 7083823772', 'Vrushali 9766176681', 'Aarti 9405119460'],
      button_link: "https://pictinc.org/register/events/impetus",
      schedule: "March 21, 2026",
    }, 
    concepts: {
      id: 'concepts',
      logo: concepts,
      criteria: "Final year students enrolled in BE / BTech degree.",
      schedule: "March 21, 2026",
      name: "Concepts",
      notices: [
        "1. The Participants should be present on campus and the labs during the time period allocated.",
        "2. At least 2 judges will be judging each project. However there will be judges from other organizations who will be evaluating projects for probable hiring or for special prizes etc. Hence none of the groups should leave the campus unless informed officially by the judging team.",
        "3. The judging criteria includes the following points :- , <p>i. Innovative Ideas Involved.</p>, <p>ii. Approach to Exploit Ideas.</p>, <p> iii. Approach towards Implementing the system and Future Applications.</p>, <p> iv. Implementation of engineering Principles. </p>, <p>v. Presentation and Q & A</p>",
        "4. We request all the group members to visit the stalls put up in the campus.",
        "5. For any judging related queries contact the lab coordinator associated with the respective lab only. Their contact details are written on each lab white board.",
      ],

      short_desc:
        "The Premier Project Exhibition showcasing Innovation and Achievement",

      description: ["Concepts is an inter-collegiate international-level competition and has been attracting corporate giants for not only sponsorship but also  for guiding and mentoring the participants for their Quality products/projects and providing on spot job offers & internships. It offers Patent registration fees for Innovative and Patentable projects. During the 3 day event, Final Year students from various colleges across India and abroad showcase their projects.",],

      domains: [`Application Development `, `Communication Networking`, `Security`, `Pattern Recognition, Artificial Intelligence`, `Digital / Image / Speech / Video Processing`, `Others`],

      // domains: [
      //   {
      //     domain: "APPLICATION DEVELOPMENT",
      //     sub_domains:
      //       "Mobile Applications-Android, Web Applications, Database applications, others),(Big Earth Data Analytics, Geo Informatics, Data Mining on Big Data, Digital marketing optimization, Data exploration and discovery, Fraud detection and prevention, Social network and relationship analysis, Machine generated data analytics, Data retention, Others)",
      //   },
      //   {
      //     domain: "COMMUNICATION NETWORKS & SECURITY SYSTEMS",
      //     sub_domains:
      //       "(Computer networks, Internet of Things, Software Defined Network, Vehicular Networks, Wireless and Mobile Networks, Information and Network Security, GPS | GSM Projects, Wireless Communication, Antenna & RF Communication, Optical Communication & Network, Others), (Blockchain applications: cryptocurrency systems, healthcare system, advertising processes, insurance processes, copyright protection system, energy system, tracking system, monitoring system, Security system, societal applications, others), (Virtualization and Autonomic Computing, High Speed Network, Security in Cloud, Cloud Computing, Data center Management, Handling Big Data on Cloud, Mobile Cloud, Cloud Forensics, Fog Computing, Others)",
      //   },
      //   {
      //     domain: "DIGITAL / IMAGE / SPEECH / VIDEO PROCESSING",
      //     sub_domains:
      //       "(Digital Signal processing, Image processing, Speech recognition, Video processing, Speech to text / Text to speech, Others)",
      //   },
      //   {
      //     domain: "EMBEDDED/VLSI SYSTEMS",
      //     sub_domains:
      //       "(Image Processing & Remote Sensing, Machine Learning for Embedded Systems, Embedded Vision, Internet of Things, others), (Analog & Mixed Signal VLSI Design, Testing & Verification of VLSI Design, others)",
      //   },
      // ],

      registrations: {
        fees: {
          national: `&#8377;300/-`,
          international: `Free`,
        },
        min_team_size: 2,
        max_team_size: 5,
      },

      prize: "Total Cash prizes worth &#8377;7 Lakh.",
      note: ` Project addressing the societal needs like Health, Agriculture, Kids/Women Safety, Education etc. & selected project shall be awarded &#8377;1 Lakh Cash Prize from PICT.`,

      rules: [
        'Judges decision will be final.',
        'Project status must be in "Ready to Demonstrate".',
      ],
      button_link: "https://pictinc.org/register/events/concepts",
    },
    pradnya: {
      // contact: [
      //   "Pratik 9145439727",
      //   "Neha 9579678142"
      // ],
      id: 'pradnya',
      prize: "Total Cash prizes worth &#8377;7 Lakh",
      note1: `🔹Judge's decision will be final.`,
      note3: `🔹Already registered candidates need not register again.`,
      schedule: "March 21, 2026",
      criteria: `Junior Level - First or Second year students of any undergraduate degree/course.#$Senior Level - Third and Final year students of any undergraduate degree/course.`,
      logo: pradnya,
      name: "Pradnya",
      short_desc: "Competitive Programming",

      description: ["PRADNYA is a one of a kind programming event meticulously forged by our finest, catering to rookies and veterans alike, from all over the world. This Contest puts the programmer's logical thinking and Problem solving skills to the test using programming languages, which guarantees to appraise their skills as a programmer.",],

      eligibility: [
        { tag: "Number of members in team", details: "maximum 2 members" },
        {
          tag: "Junior Level",
          details:
            "First year engineering, Second year engineering, other background students such as BCS etc.",
        },
        {
          tag: "Senior Level",
          details:
            "Third year engineering, final year engineering, and PG students.",
        },
      ],
      
      rounds: [
        {
          name: "Wild Card Round",
          details:
            "The wildcard round is open to both junior and senior teams, and the top 5 teams from each category will enter directly into the programming round (Round 2). This round will be conducted online on the coding platform. The wildcard round will include programming questions where the participants can code using any programming language they prefer.",
        },
        {
          name: "Round 1 : MCQ Round [Day 1] ",
          details:
            "In this event the participants are given multiple-choice and short-answer questions. This round is conducted for both levels using a web platform specially designed by the PICT Pradnya team. The team will communicate information regarding scheduled slots for this round to the participants one day before the event.",
        },
        {
          name: "Round 2: Programming Round [Day 2]",
          details:
            "Winners in the MCQ-based round and wild card winners are eligible for the programming contest. Five problem statements are allotted to each level, i.e., the junior and senior levels.  This round is held on an online programming platform. The team will communicate information regarding scheduled slots for this round to the participants one day before the event.",
        },
        {
          name: "Round 3: Judges Round  [Day 2]",
          details:
            "In the final round, the top 5 teams qualified for round 2 will enter the judging round. Esteemed industry professionals are invited to serve as judges for this competition stage. During the judging round, the judges will evaluate the five teams based on their solutions from round 2. The judges will then select the top three winning teams.",
        },
      ],
      registrations: {
        fees: {
          national: `&#8377;100/-`,
          international: `Free`,
        },
        min_team_size: 1,
        max_team_size: 2,
      },
      rules: [
        "All students whose colleges are located within the Pune district are required to attend this round in person at the PICT Campus.", "For students residing outside of the Pune district, there is an option to take the round in hybrid mode.",
      ],
      button_link: "https://pictinc.org/register/events/pradnya",
      rule_book: ""
    },
    /*
    nova: {
      id: 'nova',
      logo: nova,
      criteria:
        "First to Fourth Year Students.",
      name: "Nova",

      short_desc: "International-level Game Development and 3D Design Project Exhibition and Competition.",

      description: [`Nova is one of the very few platforms in India dedicated to game developers and designers to showcase their talent.Whether you're passionate about crafting compelling games or creating stunning 3D visuals, Nova offers the perfect stage to let your imagination take center stage. Gain recognition, connect with like-minded creators, and be part of a growing community, redefining the future of game development and design.`,],
      
      domains: [`Arena`, `Mindspark`, `Creative 3D models`, `Animations`, `Assets for games or standalone projects`, `Others`],

      // domains: [
      //   {
      //     domain: "APPLICATION DEVELOPMENT",
      //     sub_domains:
      //       "Mobile Applications-Android, Web Applications, Database applications, others),(Big Earth Data Analytics, Geo Informatics, Data Mining on Big Data, Digital marketing optimization, Data exploration and discovery, Fraud detection and prevention, Social network and relationship analysis, Machine generated data analytics, Data retention, Others)",
      //   },
      //   {
      //     domain: "COMMUNICATION NETWORKS & SECURITY SYSTEMS",
      //     sub_domains:
      //       "(Computer networks, Internet of Things, Software Defined Network, Vehicular Networks, Wireless and Mobile Networks, Information and Network Security, GPS | GSM Projects, Wireless Communication, Antenna & RF Communication, Optical Communication & Network, Others), (Blockchain applications: cryptocurrency systems, healthcare system, advertising processes, insurance processes, copyright protection system, energy system, tracking system, monitoring system, Security system, societal applications, others), (Virtualization and Autonomic Computing, High Speed Network, Security in Cloud, Cloud Computing, Data center Management, Handling Big Data on Cloud, Mobile Cloud, Cloud Forensics, Fog Computing, Others)",
      //   },
      //   {
      //     domain: "DIGITAL / IMAGE/ SPEECH / VIDEO PROCESSING",
      //     sub_domains:
      //       "(Digital Signal processing, Image processing, Speech recognition, Video processing, Speech to text / Text to speech, Others)",
      //   },
      //   {
      //     domain: "EMBEDDED/VLSI SYSTEMS",
      //     sub_domains:
      //       "(Image Processing & Remote Sensing, Machine Learning for Embedded Systems, Embedded Vision, Internet of Things, others), (Analog & Mixed Signal VLSI Design, Testing & Verification of VLSI Design, others)",
      //   },
      // ],

      registrations: {
        fees: {
          national: `&#8377;300/-`,
          international: `Free`,
        },
        min_team_size: 1,
        max_team_size: 5,
      },
      prize: `Total Cash prizes worth &#8377;7 Lakh.`,
      rules: [
        `Judge's decision will be final.`,
        `Project status must be in "Ready to Demonstrate".`,
      ],
      additional: [
        {
          domain: "Game Development",
          details:
            ["Arena: Action, platformers, survival, shooters (FPS/TPS), roguelikes, open-world adventures, racing, rhythm games, stealth, sports, arcade games, fighting games, modded action games." , "Mindscape: Strategy (RTS, turn-based, tower defense), puzzles, simulation (life, business, and physics), tycoon games, card games, board game adaptations, resource management, educational games, gamification projects, games for real-world training, AI-controlled games, and games that involve system optimization or automation.", "2-5 members per team."],
        },
        {
          domain: "Design",
          details:
            ["Creative 3D models, animations, and assets for games or standalone projects.", "1-3 members per team."],
        },
      ],
      note: `Project addressing the societal needs like Health, Agriculture, Kids/Women Safety, Education etc. & selected project shall be awarded &#8377;1 Lakh Cash Prize from PICT.`,

      // contact: ['Apoorvaraj 8530191073 ', 'Mrugank 7083823772', 'Vrushali 9766176681', 'Aarti 9405119460'],
      button_link: "https://pictinc.org/register/events/impetus",
      schedule: "March 21, 2026",
    }, 
    */
  };

   const ruleBookLinks = new Map([
    ["impetus", "https://drive.google.com/file/d/1DTuHnhVu7lB86bv3Q9EEftgazO1n9-p4/view?usp=sharing"],
    ["concepts", "https://drive.google.com/file/d/1LM-MSPiFd6zu553_E0KYUneLgTXme90U/view?usp=sharing"],
    ["pradnya", "https://drive.google.com/file/d/1rn0ZefC-s9GLbdRhFsHmfqaFX4hlw-5r/view?usp=sharing"],
  ])
  const faculty = [
    {
      value: "Advisory Committee",
      names: [
        { value: "1. Director: Dr. P. T. Kulkarni" },
        { value: "2. Principal: Dr. S. T. Gandhe" },
        { value: "3. Convenor: Dr. G. P. Potdar" },
        { value: "4. Co-Convenor: Prof. M R Khodaskar" },
        { value: "5. HOCD: Dr. G.V. Kale" },
        { value: "6. HOED: Dr. M.V. Munot" },
        { value: "7. HOID: Dr. A. R. Ghotkar" },
        { value: "8. HOAIDS: Dr. S.C. Dharmadhikari" },
        { value: "9. HOECE: Dr. S.K. Moon" },
        { value: "10. HOFD: Prof. E. M. Reddy" }
      ]
    },
    {
      value: "Coordination Team",
      names: [
        { value: "1. Prof. T A Rane (I.T)" },
        { value: "2. Prof. H.B. Mali (EnTC)" },
        { value: "3. Dr. S. V. Mundhe (BS&E)" }
      ]
    },
    {
      value: "Marketing",
      names: [
        { value: "1. Dr. S. S. Narkhede (E&TC)" },
        { value: "2. Dr. A. M. Bagade (IT)" },
        { value: "3. Dr. S. S. Sonawane (COMP)" },
        { value: "4. Prof. P. R. Patil (COMP)" }
      ]
    },
    {
      value: "Guest Invitation & Hospitality",
      names: [
        { value: "1. Prof. M V Mane (COMP)" },
        { value: "2. Prof. S. A Pawar (COMP)" },
        { value: "3. Prof. P. A. Shinde (I.T)" },
        { value: "4. Ms.S.L. Rane (I.T)" },
        { value: "5. Ms. J N Buradkar (BS&E)" }
      ]
    },
    {
      value: "Publicity",
      names: [
        { value: "1. Dr. M. P. Turuk (E&TC)" },
        { value: "2. Dr.A. S. Aphale (COMP)" },
        { value: "3. Dr. G. S. Mundada & Dr. Emmanuel M." },
        { value: "4. Prof. S. S. Pande (IT)" },
        { value: "5. Dr. Achala Deshpande (COMP)" },
        { value: "6. Prof. R.B. Murumkar (I.T)" },
        { value: "7. Prof. H. S. Thakar (E&TC)" },
        { value: "8. Prof. M. N. Kakade (E&TC)" },
        { value: "9. Prof. S. R. Hiray (IT)" },
        { value: "10. Prof. A. C. Karve (IT)" },
        { value: "11. Dr. J. B. Jagdale (I.T)" },
        { value: "12. Prof. P. S. Shahane (AIDS)" },
        { value: "13. Prof. Y. A. Handge (COMP)" }
      ]
    },
    {
      value: "InC Synopsis book, Certificates Design Team",
      names: [
        { value: "1. Prof. B. P. Masram & Prof. A. G. Dhamankar" },
        { value: "2. Mr. D. M. Mankar (E&TC)" }
      ]
    },
    {
      value: "Certificate Preparation & Distribution Committee",
      names: [
        { value: "1. Prof. V. B. Patole (BS&E)" },
        { value: "2. Prof. A. V. Sagare (COMP)" },
        { value: "3. Mr. V. A. Manmode (BS&E)" },
        { value: "4. Mr. B. S. Jadhav (IT)" }
      ]
    },
    {
      value: "Website Management, Payment Gateways, Domain Registration, SSL Certificate",
      names: [
        { value: "1. Prof. P. J. Jambhulkar (COMP)" },
        { value: "2. Mr. S. R. Shelar (IT)" }
      ]
    },
    {
      value: "Program Committee",
      names: [
        { value: "1. Prof. S. D. Hade (BS&E)" },
        { value: "2. Prof. M.S Ghadage (BS&E)" }
      ]
    },
    {
      value: "Inauguration of InC in Labs",
      names: [
        { value: "1. Dr. K.C. Waghmare (COMP)" },
        { value: "2. Prof. A. S. Kadam (IT)" },
        { value: "3. Prof. S.C. Nahatkar (E&CE)" }
      ]
    },
    {
      value: "Memento Distribution to Judges/ Guests",
      names: [
        { value: "1. Prof. S. S. Khot (E&TC)" },
        { value: "2. Prof. S A. Barde (BS&E)" },
        { value: "3. Prof. A G Ghule (IT)" }
      ]
    },
    {
      value: "Judging - Concepts",
      names: [
        { value: "1. Dr. S. B. Deshmukh & Prof. M.S. Chavan" },
        { value: "2. Prof. A. A. Chandorkar (COMP)" },
        { value: "3. Prof. M.A. Chimanna (E&TC)" },
        { value: "4. Prof. P S Agnihotri (E&TC)" },
        { value: "5. Prof. V. Tribhuvan (IT)" },
        { value: "6. Prof. Ameya. A Kadam (IT)" }
      ]
    },
    {
      value: "Judging - Impetus",
      names: [
        { value: "1. Prof. M. S. Wakode (COMP)" },
        { value: "2. Prof. V. V. Bagade (COMP)" },
        { value: "3. Prof. H. S. Kumbhar (COMP)" },
        { value: "4. Prof. R. S. Chhattani (I.T)" },
        { value: "5. Dr. S. T. Gawhale (BS&E)" }
      ]
    },
    {
      value: "Judging - Pradnya",
      names: [
        { value: "1. Prof. S.A. Jakhete (IT)" },
        { value: "2. Prof. S.P. Shintre (COMP)" },
        { value: "3. Ms. S. Gujar (COMP)" },
        { value: "4. Ms. B.M. Katewal (IT)" }
      ]
    },
    {
      value: "Judging - TechFiesta",
      names: [
        { value: "1. Prof. M.S. Chavan (COMP)" },
        { value: "2. Prof. S. N Upasani (E&TC)" },
        { value: "3. Prof. S. D Hade (BS&E)" },
        { value: "4. Prof. D P Salapurkar (IT)" },
        { value: "5. Prof. P.B Tathe (E&TC)" },
        { value: "6. Prof. A.C Karve (IT)" },
        { value: "7. Mr. H V Kasar (COMP)" },
        { value: "8. Mr. L M Pawal (E&TC)" }
      ]
    },
    {
      value: "InC 2026 Theme Projects Identification",
      names: [
        { value: "1. Prof. A. A. Jewalikar (COMP)" },
        { value: "2. Prof. P. P. Joshi (COMP)" },
        { value: "3. Dr. S. S. Wasekar (E&TC)" }
      ]
    },
    {
      value: "Identification of Patentable projects",
      names: [
        { value: "1. Dr. A. M. Deshmukh (BS&E)" },
        { value: "2. Dr. A.G. Phakatkar (COMP)" }
      ]
    },
    {
      value: "Attendance & Feedback Committee",
      names: [
        { value: "1. Prof. V.B. Vaijapurkar (E&TC)" },
        { value: "2. Prof. A. R Bankar (E&TC)" },
        { value: "3. Prof. M.S Patil (COMP)" },
        { value: "4. Prof. S. S. Shinde (IT)" },
        { value: "5. Prof. K.L Bhoite (BS&E)" },
        { value: "6. Prof. A. S. Bodhe (BS&E)" }
      ]
    },
    {
      value: "Finance and Budget Committee",
      names: [
        { value: "1. Prof. A. M. Kulkarni (BS&E)" },
        { value: "2. Dr. A. R. Deshpande (COMP)" }
      ]
    },
    {
      value: "Student Volunteer Committee",
      names: [
        { value: "1. Prof. E. M. Reddy (BS&E)" },
        { value: "2. Prof. A. A. Chavan (BS&E)" },
        { value: "3. Prof. R. R. Vardhaman (BS&E)" },
        { value: "4. Prof. M.Y Gandhi (BS&E)" }
      ]
    },
    {
      value: "Purchase",
      names: [
        { value: "1. Director: Dr. P. T. Kulkarni" },
        { value: "2. Principal: Dr. S. T. Gandhe" },
        { value: "3. Dr. G. P. Potdar (COMP)" },
        { value: "4. Prof. M R Khodaskar (IT)" },
        { value: "5. Mr. A. V. Sapkal (PO/EM)" }
      ]
    },
    {
      value: "Preparation of all relevant Documents/ ISO Files",
      names: [
        { value: "1. Prof. N. G. Nirmal (E&TC)" },
        { value: "2. Prof. D. M. Shinde (E&TC)" },
        { value: "3. Prof. K K Kolhatkar (BS&E)" },
        { value: "4. Mr. S. Renuse (AIDS)" },
        { value: "5. Mr. A. V. Torne (BS&E)" }
      ]
    },
    {
      value: "Network Administration and BW management",
      names: [
        { value: "1. Mr. P. P. Parkhi (COMP)" },
        { value: "2. Mr. S. S. Metkari (COMP)" }
      ]
    },
    {
      value: "VNL",
      names: [
        { value: "1. Prof. R. S. Paswan (COMP)" },
        { value: "2. Prof. S. D. Shelke (IT)" },
        { value: "3. Prof. A. K. Patel (E&TC)" },
        { value: "4. Prof. S. K. Shah (COMP)" },
        { value: "5. Prof. N N Jamdar (IT)" },
        { value: "6. Mr. K. S. Ugale (E&TC)" },
        { value: "7. Mr. S. H. Karsulkar (COMP)" },
        { value: "8. Mr. S. N. Deokate (BS&E)" },
        { value: "9. Mr. N. S. Mirajkar (BS&E)" }
      ]
    },
    {
      value: "Stage Setup",
      names: [
        { value: "1. Prof. P. S. Joshi (COMP)" },
        { value: "2. Prof. S.G. Gaikwad (IT)" },
        { value: "3. Prof. S. M. Hosamani (E&TC)" },
        { value: "4. Prof. U. S. Pawar (COMP)" },
        { value: "5. Prof. A. N. Sayyad (BS&E)" },
        { value: "6. Prof. R. J. Sutar (E&TC)" },
        { value: "7. Prof. T.S Londhe (E&TC)" },
        { value: "8. Prof. S Y Nikam (BS&E)" },
        { value: "9. Ms. A. M. Kulkarni (IT)" },
        { value: "10. Ms. S Patil (IT)" }
      ]
    },
    {
      value: "T-Shirts",
      names: [
        { value: "1. Prof. V. S. Gaikwad (COMP)" },
        { value: "2. Mr. K Kadambande (IT)" }
      ]
    },
    {
      value: "Hardware",
      names: [
        { value: "1. Prof. V. R. Jaiswal & Prof. N. V. Buradkar (IT)" },
        { value: "2. Prof. S. R. Warhade (IT)" },
        { value: "3. Prof. A. S. Ramteke (E&TC)" }
      ]
    },
    {
      value: "Canteen Arrangement",
      names: [
        { value: "1. Prof. Hake (E&TC)" },
        { value: "2. Prof. R. R. Jadhav (COMP)" },
        { value: "3. Prof. V. R. Kandekar (COMP)" },
        { value: "4. Prof. J H Jadhav (IT)" },
        { value: "5. Prof. A A Patil (IT)" },
        { value: "6. Mr. K.S. Bhosale (OFFICE)" }
      ]
    },
    {
      value: "P A System/ Telephone/ Network/ Electrical facilities",
      names: [
        { value: "1. Prof. L.P. Patil (Overall Incharge)" },
        { value: "2. Mr. K.S. Ugale (PA System)" },
        { value: "3. Mr. S. M. Pawar (Electrical Maintenance)" },
        { value: "4. Mr. S. S. Metkari (Network Admin)" },
        { value: "5. Mr. S.M. Shinde (Telephone)" },
        { value: "6. Mr. A M Chavan (Electrical Maintenance)" }
      ]
    },
    {
      value: "Transport Management",
      names: [
        { value: "1. Prof. P. D Jadhav & Mr. A. V. Sapkal" },
        { value: "2. Prof. H. S. Khatri (BS&E)" },
        { value: "3. Prof. K. D. Kulkarni (BS&E)" },
        { value: "4. Mr. R. V. Badekar (COMP)" },
        { value: "5. Mr. A. B. Wagh (Purchase)" }
      ]
    },
    {
      value: "Parking & Police Arrangement",
      names: [
        { value: "1. Mr. A.V Sapkal (PO/EM)" },
        { value: "2. Mr. A. B. Wagh (Purchase)" },
        { value: "3. Mr. R C. Badekar (COMP)" }
      ]
    },
    {
      value: "Trophies +Memento +Photos",
      names: [
        { value: "1. Prof. K. R. Jadhav (Trophies) (BS&E)" },
        { value: "2. Prof. R.R. Vardhaman (BS&E)" },
        { value: "3. Prof. R. A. Karnavat (Memento) (IT)" },
        { value: "4. Prof. A.A. Bidkar (E&TC)" },
        { value: "5. Prof. S. M. Hosamani (Souvenir) (E&TC)" },
        { value: "6. Prof. J S Mahajan (COMP)" }
      ]
    }
  ];

const web = [
  {
    team: 'Technical Heads', 
    members: [
      {
        name: "Piyush Dahake",
        post: "Frontend, Backend, DevOps",
        linkedin: "https://www.linkedin.com/in/piyush-dahake/",
        github: "https://github.com/piyush960",
        instagram: "https://www.instagram.com/piyushdahake_/",
        photo: "https://res.cloudinary.com/dms4soxsi/image/upload/v1741561794/core-committee/kuwhp8dktthlaiflewxx.jpg",
      },
      {
        name: "Prathamesh Malu",
        post: "Frontend, Backend, DevOps",
        linkedin: "https://www.linkedin.com/in/prathamesh-malu-53655321a",
        github: "https://github.com/pmalu9211",
        instagram: "https://www.instagram.com/prathamalu/",
        photo: "https://res.cloudinary.com/dms4soxsi/image/upload/v1741560128/core-committee/emywak7bpk0xp6phfi7q.jpg",
      },
    ],
  },
  {
    team: 'Web Team', members: [
      {
        name: "Hritik Patil",
        post: "Frontend",
        linkedin: "https://www.linkedin.com/in/hritik-patil-147293252/",
        github: "https://github.com/",
        instagram: "https://www.instagram.com/hritikpatil.05?utm_source=qr&igsh=eDVmNHEwNnFrZ3V0",
        photo: "https://res.cloudinary.com/dms4soxsi/image/upload/v1741561374/core-committee/t7ejpoyizdvqpgzfcyqi.jpg",
      },
    ]
  },
]

const core = [
  {
    team: "Overall Co-ordinators",
    members: [
      {
        name: "Mukund Karwa",
        post: "Overall Co-ordinator",
        linkedin: "https://www.linkedin.com/in/mukund-karwa-552b67321/",
        github: "https://github.com/mukundkarwa22",
        instagram: "https://www.instagram.com/mukund_karwa22/",
        photo: "https://res.cloudinary.com/dms4soxsi/image/upload/v1741560124/core-committee/yiqdbhjv7f6djim4cda5.jpg",
      },
      {
        name: "Punit Marda",
        post: "Overall Co-ordinator",
        linkedin: "https://www.linkedin.com/in/punit-marda-14a8b224b/",
        github: "https://github.com/",
        instagram: "https://www.instagram.com/punitmarda_3530/",
        photo: "https://res.cloudinary.com/dms4soxsi/image/upload/v1741984684/core-committee/ebbrbzlbfar9hscnux9g.jpg",
      },
      {
        name: "Piyush Kinekar",
        post: "Overall Co-ordinator",
        linkedin: "https://www.linkedin.com/in/piyush-kinekar-883163272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/",
        instagram: "https://www.instagram.com/piyush_kinekar?igsh=N2N2azMybGJlbWl3",
        photo: "https://res.cloudinary.com/dms4soxsi/image/upload/v1741560124/core-committee/p6noxjjbnahmboiaqe1x.jpg",
      },
    ],
  },
  {
    team: "Concepts Heads",
    members: [
      {
        name: "Anjali Rambhad",
        post: "Concepts Head",
        linkedin: "https://www.linkedin.com/in/anjalirambhad28?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        github: "https://github.com/anjalirambhad",
        instagram: "https://www.instagram.com/annjjaliii?igsh=aXdhaDU3Y2RlenN6&utm_source=qr",
        photo: "https://res.cloudinary.com/dms4soxsi/image/upload/v1741560425/core-committee/w1qf0ggz0vdzrbxaoo1f.jpg",
      },
      {
        name: "Soham Kottawar",
        post: "Concepts Head",
        linkedin: "https://www.linkedin.com/in/soham-kottawar-b0079925b/",
        github: "https://github.com/Sohamkottawar",
        instagram: "https://www.instagram.com/sohamkottawar/",
        photo: "https://res.cloudinary.com/dms4soxsi/image/upload/v1741560125/core-committee/lzzhqng2rssrsodtgb9j.jpg",
      },
      {
        name: "Tanish Chaudhari",
        post: "Concepts Head",
        linkedin: "http://www.linkedin.com/in/tanishchaudhari",
        github: "https://github.com/Cratan228",
        instagram: "https://www.instagram.com/tanishc228/",
        photo: "https://res.cloudinary.com/dms4soxsi/image/upload/v1741984684/core-committee/sfghlecfqw8luvy3hyoy.jpg",
      },
      {
        name: "Gauri Desale",
        post: "Concepts Head",
        linkedin: "https://www.linkedin.com/in/gauri-desale-311514254/",
        github: "https://github.com/gauridesale25",
        instagram: "https://www.instagram.com/__gauriiii25/",
        photo: "https://res.cloudinary.com/dms4soxsi/image/upload/v1742240496/core-committee/t9j2hzz01y35f2gxjjkm.jpg",
      },
    ],
  },
  {
    team: "Impetus Heads",
    members: [
      {
        name: "Kshitij Goswami",
        post: "Impetus Head",
        linkedin: "https://www.linkedin.com/in/kshitij-goswami-527100258",
        github: "https://github.com/",
        instagram: "https://www.instagram.com/kshitijaps_23/",
        photo: "https://res.cloudinary.com/dms4soxsi/image/upload/v1741560124/core-committee/xhrzfydh3bbt0dbzd2nk.jpg",
      },
      {
        name: "Madhura Pawar",
        post: "Impetus Head",
        linkedin: "https://www.linkedin.com/in/madhura-pawar-98b728291/",
        github: "https://github.com/Madhura2004",
        instagram: "https://www.instagram.com/madhurapawar17?igsh=YW5uc2MyOTIxY2Fr",
        photo: "https://res.cloudinary.com/dms4soxsi/image/upload/v1741560126/core-committee/e8dtq6fgaqqvtst5b6dn.jpg",
      },
      {
        name: "Aditya Choudhary",
        post: "Impetus Head",
        linkedin: "www.linkedin.com/in/aditya-choudhary-2aa382263",
        github: "https://github.com/",
        instagram: "https://www.instagram.com/",
        photo: "https://res.cloudinary.com/dms4soxsi/image/upload/v1741560127/core-committee/j83xtxkgdut1jcpvjxn0.jpg",
      },
      {
        name: "Arpita Bhandari",
        post: "Impetus Head",
        linkedin: "https://www.linkedin.com/in/arpita-bhandari2511",
        instagram: "https://www.instagram.com/arpiita_2511",
        github: "https://github.com",
        photo: "https://res.cloudinary.com/dms4soxsi/image/upload/v1741560126/core-committee/t0rfo9ofbixnetmojb63.jpg",
      },
      {
        name: "Reva Dixit",
        post: "Impetus Head",
        linkedin: "https://www.linkedin.com/in/reva-dixit-",
        instagram: "https://www.instagram.com/rev_dixi?igsh=ODA0cjdudnZwdXFj&utm_source=qr",
        github: "https://github.com",
        photo: "https://res.cloudinary.com/dms4soxsi/image/upload/v1741984685/core-committee/pvkqho3uilhc5mkwqidu.jpg",
      },
    ],
  },
  {
    team: "Pradnya Heads",
    members: [
      {
        name: "Omkar Deshmukh",
        post: "Pradnya Head",
        linkedin: "https://www.linkedin.com/in/omkar-deshmukh-213bb1230/",
        github: "https://github.com/omkar-afk",
        instagram: "https://www.instagram.com/omkardsmk/",
        photo: "https://res.cloudinary.com/dms4soxsi/image/upload/v1741560128/core-committee/eu1s3crhngu9rvjl5rrt.jpg",
      },
      {
        name: "Anushree Gattani",
        post: "Pradnya Head",
        linkedin: "https://www.linkedin.com/in/anushree-gattani",
        github: "https://github.com/adgattani",
        instagram: "https://www.instagram.com/anushreegattani_?igsh=NDd3YmJ1OHp2cTBt&utm_source=qr",
        photo: "https://res.cloudinary.com/dms4soxsi/image/upload/v1741560425/core-committee/ovzwoiszeazdslscx3g6.jpg",
      },
      {
        name: "Nirbhay Shah",
        post: "Pradnya Head",
        linkedin: "https://www.linkedin.com/in/nirbhay-shah/",
        github: "https://github.com/NirbhayShah",
        instagram: "https://www.instagram.com/imnirbhayshah/",
        photo: "https://res.cloudinary.com/dms4soxsi/image/upload/v1741984685/core-committee/s5vs0reo4amaksinat7o.jpg",
      },
    ],
  },
  {
    team: "Operations Heads",
    members: [
      {
        name: "Vedang Gharat",
        post: "Head of Operations",
        linkedin: "https://www.linkedin.com/in/vedang-gharat/",
        github: "https://github.com/SMUGLER79",
        instagram: "https://www.instagram.com/_.vedang___/",
        photo: "https://res.cloudinary.com/dms4soxsi/image/upload/v1741560125/core-committee/u9kofir5m0vmfypanxfl.jpg",
      },
      {
        name: "Mayur Doiphode",
        post: "Head of Operations",
        linkedin: "https://www.linkedin.com/in/mayur-doiphode-991a8b220/",
        instagram: "https://www.instagram.com/mayurdoiphode55/",
        github: "https://github.com/",
        photo: "https://res.cloudinary.com/dms4soxsi/image/upload/v1741560127/core-committee/zthrq8fuc1bbrsna3hk8.jpg",
      },
      {
        name: "Kartik Tichkule",
        post: "Head of Operations",
        linkedin: "https://www.linkedin.com/in/kartik-tichkule",
        instagram: "https://www.instagram.com/ksaptichkule?igsh=OHg0ODg1dG43bmFp",
        github: "https://github.com/kartich18",
        photo: "https://res.cloudinary.com/dms4soxsi/image/upload/v1741984685/core-committee/ncg4qml16gaqdd6nhfjs.jpg",
      },
    ],
  },
  {
    team: "Marketing Heads",
    members: [
      {
        name: "Kanak Agrawal",
        post: "Marketing Head",
        linkedin: "https://www.linkedin.com/in/kanak-agrawal89/",
        github: "https://github.com/",
        instagram: "https://www.instagram.com/kanakagrawal89?igsh=MXd4aDM4aWZhbmRueA==",
        photo: "https://res.cloudinary.com/dms4soxsi/image/upload/v1741560126/core-committee/gd7iygywj0b1qa9akxzw.jpg",
      },
    ],
  },
  {
    team: "Social Media Heads",
    members: [
      {
        name: "Manaswi Hiremath",
        post: "Social Media Head",
        linkedin: "www.linkedin.com/in/manaswi-hiremath",
        github: "https://github.com/",
        instagram: "https://www.instagram.com/manaswi._17/",
        photo: "https://res.cloudinary.com/dms4soxsi/image/upload/v1741560128/core-committee/ambwx7exjix0lz3dob9a.jpg",
      },
    ],
  },
  {
    team: "Design Heads",
    members: [
      {
        name: "Diya Bhat",
        post: "Design Head",
        linkedin: "http://www.linkedin.com/in/diya-bhat-877377258",
        github: "https://github.com/DiyaBhat20",
        instagram: "https://www.instagram.com/_diyabhat_/",
        photo: "https://res.cloudinary.com/dms4soxsi/image/upload/v1741560124/core-committee/uqni9y2sl3ku2kflejx4.jpg",
      },
      {
        name: "Sakshi Mahajan",
        post: "Design Head",
        linkedin: "http://www.linkedin.com/in/sakshimahajan372",
        github: "https://github.com/",
        instagram: "https://www.instagram.com/",
        photo: "https://res.cloudinary.com/dms4soxsi/image/upload/v1742240497/core-committee/untqeqr94cvlyiadetyq.jpg",
      },
    ],
  },
  {
    team: "Escorting Heads",
    members: [
      {
        name: "Tanvi Pattewar",
        post: "Escorting Head",
        linkedin: "https://www.linkedin.com/in/tanvi-pattewar-9a9159258",
        github: "https://github.com/",
        instagram: "https://www.instagram.com/",
        photo: "https://res.cloudinary.com/dms4soxsi/image/upload/v1741560129/core-committee/nmgpp4fhwl6efbrhntfp.jpg",
      },
    ],
  },
  {
    team: "Publicity Heads",
    members: [
      {
        name: "Raghav Zanwar",
        post: "Publicity Head",
        linkedin: "https://www.linkedin.com/in/raghav-zanwar-71133a25b/",
        github: "https://github.com/",
        instagram: "https://www.instagram.com/_zawarraghav_/",
        photo: "https://res.cloudinary.com/dms4soxsi/image/upload/v1741560129/core-committee/hluosqbwagptygo9rrmr.jpg",
      },
      {
        name: "Purva Kamat",
        post: "Publicity Head",
        linkedin: "http://linkedin.com/in/poorva-kamat-8321b6332",
        github: "https://github.com/",
        instagram: "https://www.instagram.com/purwa_kamat?igsh=NDd4NDFmOGgyN2k1&utm_source=qr",
        photo: "https://res.cloudinary.com/dms4soxsi/image/upload/v1741560125/core-committee/lzzaauxlaxmexjswcurx.jpg",
      },
      {
        name: "Ria Narode",
        post: "Publicity Head",
        linkedin: "https://www.linkedin.com/in/ria-narode",
        github: "https://github.com/",
        instagram: "https://www.instagram.com/",
        photo: "https://res.cloudinary.com/dms4soxsi/image/upload/v1741560126/core-committee/w9jxarnjldlq7afe80yo.jpg",
      },
    ],
  },
  {
    team: "Anchoring Lead",
    members: [
      {
        name: "Bhajnit Singh Hooda ",
        post: "",
        linkedin: "https://www.linkedin.com/in/bhajnit-singh-hooda-7200a8268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/",
        instagram: "https://www.instagram.com/",
        photo: "https://res.cloudinary.com/dms4soxsi/image/upload/v1742640935/core-committee/uh2g1mgythrszrai64qg.jpg",
      },
    ],
  },
];

const results = {
  impetus : [
    {
      dname: 'APPLICATION DEVELOPMENT (AD)', 
      values: [
        {
          position: 'Winner',
          team_id: 'IM-AD1017',
          title: 'Guardians 360',
          names: ['Advait Joshi', 'Anshul Kalbande', 'Anurag Mandke', 'Amey Kulkarni', 'Tirthraj Mahajan'],
          institute: 'PICT, Pune'
        },
        {
          position: '1st runner up',
          team_id: 'IM-AD0103',
          title: 'StudyGenie - AI Powered Learning Revolution for Technical Students',
          names: ['Apurv Saktepar', 'Viraj Desai', 'Nisha Pragane', 'Vaishnavi Thorbole'],
          institute: 'GP, Pune'
        },
        {
          position: '2nd Runner Up',
          team_id: 'IM-AD0048',
          title: 'FinBuddy AI - Personalised Finance Manager',
          names: ['Mrinmayee Deshpande', 'Dipali Gangarde', 'Aniket Dhage'],
          institute: 'VIIT, Pune'
        }
      ]
    },
    {
      dname: 'COMMUNICATION NETWORK AND SECURITY SYSTEMS (CN)', 
      values: [
        {
          position: 'Winner',
          team_id: 'IM-CN1018',
          title: 'TraceHost: Authenticity & Security Analyzer for Websites',
          names: ['Atharva Dhavale', 'Sakshi Chougule', 'Kartik Sirsillo', 'Aayush Meghal', 'Anuj Nagpure'],
          institute: 'PICT, Pune'
        },
        {
          position: '1st runner up',
          team_id: 'IM-CN0021',
          title: 'Dexx Aggregator',
          names: ['Shlok Khairnar', 'Shridhar Gore'],
          institute: 'VIIT, Pune'
        },
        {
          position: '2nd Runner Up',
          team_id: 'IM-CN0015',
          title: 'AirGlove',
          names: ['Akshay Dhere', 'Harshal Patil', 'Ayush Peshawar'],
          institute: 'PCCOE, Pune'
        }
      ]
    },
    {
      dname: 'DIGITAL/ IMAGE/ SPEECH/ VIDEO PROCESSING (DSP)', 
      values: [
        {
          position: 'Winner',
          team_id: 'IM-DS0007',
          title: 'Sanjeevani AI',
          names: ['Prasanna Patwardhan', 'Piyush Deshmukh', 'Yugandhar Chawale', 'Yash Kulkarni', 'Rahul Dewani'],
          institute: 'VIIT, Pune'
        },
        {
          position: '1st runner up',
          team_id: 'IM-DS0013',
          title: 'Crop Disease Detection System',
          names: ['Shubham Pawade', 'Supragy Mishra', 'Bhargavi Potode', 'Pratik Bhosale', 'Anooj Jilladwar'],
          institute: 'MITAOE, Pune'
        },
        {
          position: '2nd Runner Up',
          team_id: 'IM-DS0020',
          title: 'AI video editor and utility (SAAS)',
          names: ['Vedant Nadhe', 'Pranav Bire', 'Arya Kadam', 'Saksham Saipatwar', 'Harshwardhan Saindane'],
          institute: 'VIIT, Pune'
        }
      ]
    },
    {
      dname: 'EMBEDDED/ VLSI SYSTEMS (ES)', 
      values: [
        {
          position: 'Winner',
          team_id: 'IM-ES0035',
          title: 'Smart Dustbin: Automated Waste Segregation & Monitoring',
          names: ['Om Ganjewar', 'Vaishnavi Gaikwad'],
          institute: 'VIT, Pune'
        },
        {
          position: '1st runner up',
          team_id: 'IM-ES0001',
          title: 'Careflex: Real-Time Health Monitoring System for Post-CSection Recovery',
          names: ['Divya Bhavsar', 'Prasad Patil', 'Saniya Bhosale', 'Swadesh Jadhav', 'Tejas Deshmukh'],
          institute: 'K.K Wagh, Nashik'
        },
        {
          position: '2nd Runner Up',
          team_id: 'IM-ES0034',
          title: 'SMART BLIND STICK USING GPS AND GSM',
          names: ['Ritanshu Sadaphale', 'Bhargavi Sarde'],
          institute: 'VIT, Pune'
        }
      ]
    },
    {
      dname: 'MACHINE LEARNING AND PATTERN RECOGNITION (ML)', 
      values: [
        {
          position: 'Winner',
          team_id: 'IM-ML0041',
          title: 'Site-Guide : Web Navigation Helper',
          names: ['Shantanu Shinde', 'Ashish Tembhekar'],
          institute: 'NCER, Pune'
        },
        {
          position: '1st runner up',
          team_id: 'IM-ML0068',
          title: 'Drone Based Intelligent System for Apple Orchard Monitoring',
          names: ['Oceania Kshetrimayum', 'Akshda Khairnar', 'Meghraj Bhavsar', 'Shrey Salunkhe', 'Pranav Prajapati'],
          institute: 'K.K Wagh, Nashik'
        },
        {
          position: '2nd Runner Up',
          team_id: 'IM-ML0063',
          title: 'InsightX: Predictive maintenance ecosystem',
          names: ['Manish Pingale', 'Vedant Chandler', 'Sahil Dhawane', 'Sai Sinare'],
          institute: 'VIT, Pune'
        }
      ]
    },
    {
      dname: 'OTHERS (OT)', 
      values: [
        {
          position: 'Winner',
          team_id: 'IM-OT0041',
          title: 'AnvikshAI : Crafting Adaptive Learning Journeys',
          names: ['Bhavesh Kale', 'Manas Shinde', 'Akash Shankpal', 'Umesh Bava', 'Harsh Agnani'],
          institute: 'K.K Wagh, Nashik'
        },
        {
          position: '1st runner up',
          team_id: 'IM-OT0065',
          title: 'AR Wardrobe',
          names: ['Atharva Patwardhan', 'Atharva Muchandi', 'Vishruti Mohinkar', 'Vedant Nagmotti'],
          institute: 'VIT, Pune'
        },
        {
          position: '2nd Runner Up',
          team_id: 'IM-OT0080',
          title: 'SMART GRAIN MANAGEMENT ROBOT FOR EFFICIENT',
          names: ['Ayush Walzade', 'Yashraj Shinde', 'Sumit Kotame', 'Kunal Deharkar', 'Nikhil Bankar'],
          institute: 'SCE, Kopargaon'
        }
      ]
    }
  ],
  concepts : [
    {
      dname: 'APPLICATION DEVELOPMENT (AD)', 
      values: [
        {
          position: 'Winner',
          team_id: 'CO-AD1085',
          title: 'Beenium',
          institute: 'PICT, Pune',
          names: ['Abhijit Raygonda Khyade', 'Jayash Gaikwad', 'Priyanshu Purushottam Mahukhaye']
        },
        {
          position: '1st Runner Up',
          team_id: 'CO-AD0047',
          title: 'Enhancing Vocational Education with VR and AI Integration',
          institute: 'K.K Wagh, Nashik',
          names: ['Aastha Zade', 'Harsh Tayade', 'Pratik Puri', 'Samay Thakur']
        },
        {
          position: '2nd Runner Up',
          team_id: 'CO-AD1080',
          title: 'Mahavitaran Help App: A Comprehensive Mobile Application for Reporting Electrical Problems Using Cloud and Location Based Services',
          institute: 'PICT, Pune',
          names: ['Tanya Jagavkar', 'Yatin Nargotra']
        }
      ]
    },
    {
      dname: 'COMMUNICATION NETWORK AND SECURITY SYSTEMS (CN)', 
      values: [
        {
          position: 'Winner',
          team_id: 'CO-CN0024',
          title: 'Wireless Nurse Call Bell System',
          institute: 'AISSMS, Pune',
          names: ['Bhagyashree Dhananjay Gade', 'Aditi Ashutosh Kulkarni', 'Vaibhavi Jitendra Panval']
        },
        {
          position: '1st Runner Up',
          team_id: 'CO-CN1028',
          title: 'Anomaly detection in NFS based on user access patterns',
          institute: 'PICT, Pune',
          names: ['Aditya More', 'Ashwin Taras', 'Riddhi Kulkarni']
        },
        {
          position: '2nd Runner Up',
          team_id: 'CO-CN1040',
          title: 'AI-Powered Server Compliance Auditing & Anomaly Detection for Secure Network Operations',
          institute: 'PICT, Pune',
          names: ['Mahesh Vaswani', 'Mayuri Kolhe', 'Shrutika Malve', 'Tejas Thorat']
        }
      ]
    },
    {
      dname: 'DIGITAL/ IMAGE/ SPEECH/ VIDEO PROCESSING (DSP)', 
      values: [
        {
          position: 'Winner',
          team_id: 'CO-DS1007',
          title: 'Project MAVIS: Media Authenticity, Verification and Integrity System',
          institute: 'PICT, Pune',
          names: ['Chinmay Patil', 'Omkar Wagholikar', 'Shantanu Wable', 'Soaham Pimparkar']
        },
        {
          position: '1st Runner Up',
          team_id: 'CO-DS1060',
          title: 'SMART AUDIO FORENSICS : AI-Based Speaker Verification and Deepfake Detection',
          institute: 'PICT, Pune',
          names: ['Sarthak Chaudhari', 'Siddhi Pardeshi']
        },
        {
          position: '2nd Runner Up',
          team_id: 'CO-DS0044',
          title: 'Third Eye : Streaming Security in every frame through Neural Networks',
          institute: 'K.K Wagh, Nashik',
          names: ['Akshay Abhay Khandare', 'Nishant Singh', 'Shruti Shinde', 'Devansh Dubey']
        }
      ]
    },
    {
      dname: 'EMBEDDED/VLSI SYSTEMS (ES)', 
      values: [
        {
          position: 'Winner',
          team_id: 'CO-ES1024',
          title: 'CORDIC Algorithm on FPGA',
          institute: 'PICT, Pune',
          names: ['Isha Lale', 'Neha Joshi', 'Kaushal Kulkarni']
        },
        {
          position: '1st Runner Up',
          team_id: 'CO-ES1012',
          title: 'Satellite-Based Toll Processing System',
          institute: 'PICT, Pune',
          names: ['Aaryaman Rahul Limaye', 'Sakshi Dhananjay Jawale', 'Shambhavi Vinod Lute']
        },
        {
          position: '2nd Runner Up',
          team_id: 'CO-ES1037',
          title: 'rainmaker-rs : Developing safe IoT applications using Rust',
          institute: 'PICT, Pune',
          names: ['Akshay Lahoti', 'Shreyash Bubane', 'Chinmay Dixit']
        }
      ]
    },
    {
      dname: 'MACHINE LEARNING AND PATTERN RECOGNITION (ML)', 
      values: [
        {
          position: 'Winner',
          team_id: 'CO-ML0151',
          title: 'Forest Insight: GIS Based Monitoring Deforestation and Carbon Sequestration',
          institute: 'K.K. Wagh, Nashik',
          names: ['Shreyas Bidwai', 'Kshitij Rathore', 'Sanchita Sanjay Weljali', 'Vikas Sangale']
        },
        {
          position: '1st Runner Up',
          team_id: 'CO-ML1208',
          title: 'AI-Driven CRISPR System with Genome Study and Genomic Analysis',
          institute: 'PICT, Pune',
          names: ['Aditya Kadam', 'Akshay Gawande', 'Hitesh Khirid']
        },
        {
          position: '2nd Runner Up',
          team_id: 'CO-ML1177',
          title: 'AgriCare AI',
          institute: 'PICT, Pune',
          names: ['Divya Tambe', 'Shubhankar Karajkhede', 'Swaraj Zende']
        }
      ]
    },
    {
      dname: 'OTHERS (OT)', 
      values: [
        {
          position: 'Winner',
          team_id: 'CO-OT1096',
          title: 'Multiplayer Competitive Game',
          institute: 'PICT, Pune',
          names: ['Aditya Mittal', 'Sunay Bhoyar', 'Pranav Jaju', 'Tarun Santani']
        },
        {
          position: '1st Runner Up',
          team_id: 'CO-OT1089',
          title: 'Rail Resource Optimization',
          institute: 'PICT, Pune',
          names: ['Arnav Desai', 'Hatim Talwarawala', 'Saniya Atalatti', 'Shatakshi Chaudhari']
        },
        {
          position: '2nd Runner Up',
          team_id: 'CO-OT1118',
          title: 'Augmenting Legal Research using Information Retrieval',
          institute: 'PICT, Pune',
          names: ['Adwait Desai', 'Atharva Dandgawhal', 'Saif Shaikh']
        }
      ]
    },
    {
      dname: 'OPEN HARDWARE', 
      values: [
        {
          position: 'Winner',
          team_id: 'CO-ES1011',
          title: 'Collaborative Robot – Automated Task Optimization',
          institute: 'PICT, Pune',
          names: ['Aditi Zeminder', 'Prathamesh Raibhole', 'Vaibhav Patil']
        },
        {
          position: '1st Runner Up',
          team_id: 'CO-ES1010',
          title: 'Battery Management System',
          institute: 'PICT, Pune',
          names: ['Aditi Makarand Bhatkhedkar', 'Manish Dhumal']
        },
        {
          position: '2nd Runner Up',
          team_id: 'CO-DS0002',
          title: 'AI-Powered Smart Glasses: Affordable Assistive Technology for the Visually Impaired',
          institute: 'PCCOE, Pune',
          names: ['Amruta Kothawade', 'Omkar Kulkarni', 'Sakshi Jadhav', 'Soham Joshi']
        }
      ]
    },
    {
      dname: 'OPEN SOFTWARE', 
      values: [
        {
          position: 'Winner',
          team_id: 'CO-OT0114',
          title: 'Sherlock - State of the art deepfake prevention system.',
          institute: 'MKSSS CCOEW, Pune',
          names: ['Ananti Mulay', 'Gargee Dorle', 'Isha Purnapatre', 'Shruti Kulkarni']
        },
        {
          position: '1st Runner Up',
          team_id: 'CO-DS0035',
          title: 'MRI to CT image synthesis',
          institute: "PVG, Pune",
          names: ['Sakshi Pote', 'Rajat Raj Sharma', 'Shruti Patki', 'Sahil Thite']
        },
        {
          position: '2nd Runner Up',
          team_id: 'CO-AD1092',
          title: 'IamReadyAI - AI powered Mock Interview platform',
          institute: 'PICT, Pune',
          names: ['Gopal Singh Saraf', 'Prathamesh Shriramwar', 'Rishikesh Revandikar', 'Shivanjali Thorat']
        }
      ]
    },
    {
      dname: 'RURAL', 
      values: [
        {
          position: 'Winner',
          team_id: 'CO-OT0123',
          title: 'Gas leakage detection system with advanced safety enhancement.',
          institute: 'SGM, Mahagaon',
          names: ['Laukik Pradip Karekar', 'Ruturaj Girish Kumbhar', 'Shantanu Bajarang Chougale']
        }
      ]
    },
    {
      dname: 'OUT OF MAHARASHTRA', 
      values: [
        {
          position: 'Winner',
          team_id: 'CO-OT0126',
          title: 'IOT BASED SMART SYRINGE INFUSION AND IV FLUID MONITORING AND ALERTING SYSTEM',
          institute: 'VBIT, Telangana',
          names: ['Kristamsetty Nikhil Kumar', 'Konda Kushal Reddy', 'Nalamasa Rahul']
        }
      ]
    }
  ],
  pradnya : [
    {
      dname: 'Senior Category',
      values: [
        {
          position: 'Winner',
          team_id: 'P-036',
          title: 'oreo99',
          names: ['Aniketh Pala', 'Arya Lokhande'],
          institute: 'VIT, Pune'
        },
        {
          position: '1st Runner Up',
          team_id: 'P-470',
          title: 'wide_pet_51',
          names: ['Vedant Rawale', 'Kunal Bhalgat'],
          institute: 'VIT, Pune'
        },
        {
          position: '2nd Runner Up',
          team_id: 'P-352',
          title: 'autom_leaf',
          names: ['Kaustubh Jaitapkar', 'Ritesh Patil'],
          institute: 'WCE, Sangli'
        }
      ]
    },
    {
      dname: 'Junior Category',
      values: [
        {
          position: 'Winner',
          team_id: 'P-066',
          title: 'souravkushwaha',
          names: ['Sandeep Yadav', 'Sourabh'],
          institute: 'AIT, Pune'
        },
        {
          position: '1st Runner Up',
          team_id: 'P-039',
          title: 'light_1419',
          names: ['Aftab Naik', 'Ayush Chavan'],
          institute: 'VIT, Pune'
        },
        {
          position: '2nd Runner Up',
          team_id: 'P-158',
          title: 'anujn_07',
          names: ['Anuj Nagpure', 'Divyansh Kathkar'],
          institute: 'PICT, Pune'
        }
      ]
    },
  ],
}
  
  const timeline = [
    {
      title: "Impetus",
      company_name: "2-5 members",
      icon: logo,
      iconBg: "#383E56",
      date: "Jan 14 - Jan 15",
      points: [
        "Impetus and Concepts (InC) is a flagship technical event.",
        "InC is an intercollegiate international level competition that has been catching the attention of corporate giants.",
        "Impetus is a Project Competition for FE to TE students, all engineering branches confined to specific domains.",
        ],
      contact: ["Naman: 9999999999", "Naman: 9999999999",],
      fees: "500",
    },
    {
      title: "Concepts",
      company_name: "2-5 members",
      icon: logo,
      iconBg: "#383E56",
      date: "Jan 14 - Jan 15",
      points: [
        "Impetus and Concepts (InC) is a flagship technical event.",
        "InC is an intercollegiate international level competition that has been catching the attention of corporate giants.",
        "Impetus is a Project Competition for FE to TE students, all engineering branches confined to specific domains.",
        ],
      contact: ["Naman: 9999999999", "Naman: 9999999999",],
      fees: "500",
    },
    {
      title: "Pradnya",
      company_name: "2-5 members",
      icon: logo,
      iconBg: "#383E56",
      date: "Jan 14 - Jan 15",
      points: [
        "Impetus and Concepts (InC) is a flagship technical event.",
        "InC is an intercollegiate international level competition that has been catching the attention of corporate giants.",
        "Impetus is a Project Competition for FE to TE students, all engineering branches confined to specific domains.",
        ],
      contact: ["Naman: 9999999999", "Naman: 9999999999",],
      fees: "500",
    },
    {
      title: "Techfiesta",
      company_name: "2-5 members",
      icon: logo,
      iconBg: "#383E56",
      date: "Jan 14 - Jan 15",
      points: [
        "Impetus and Concepts (InC) is a flagship technical event.",
        "InC is an intercollegiate international level competition that has been catching the attention of corporate giants.",
        "Impetus is a Project Competition for FE to TE students, all engineering branches confined to specific domains.",
        ],
      contact: ["Naman: 9999999999", "Naman: 9999999999",],
      fees: "500",
    },
  ];
  
  
export { about_text, events, timeline, navLinks, sponsors, notifications, eventsData, faculty, web, core, adminNavlinks, ruleBookLinks, judgeNavLinks, results, };