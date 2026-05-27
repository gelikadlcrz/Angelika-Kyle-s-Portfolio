import rxellenceImg from '../../assets/images/rxellence.png';
import naviNowImg from '../../assets/images/naviNow.png';
import gearRentalImg from '../../assets/images/gearRental.png';
import curriculumCheckerImg from '../../assets/images/curriculumChecker.png';
import hangman from '../../assets/images/hangman.png';
import communityImg from '../../assets/images/community.png';

export interface ProjectData {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  tags: string[];
  role?: string;
  timeline?: string; // Added timeline here
  repository?: string;
  fullDescription: string;
  contributions?: {
    title: string;
    items: string[];
  }[];
  technicalDetails?: {
    frontend?: string;
    backend?: string;
    database?: string;
    additional?: string[];
  };
  outcomes?: string[];
  skills?: string[];
}

export const projects: ProjectData[] = [
  {
    id: "prolog-eligibility-checker",
    title: "Course Enrollment Eligibility Checker Using Prolog",
    timeline: "Feb 2026",
    shortDescription:
      "A specialized rule-based inference engine and interactive dashboard built to automate and manage complex university curriculum prerequisite structures.",
    image: curriculumCheckerImg,
    tags: ["ReactJS", "Prolog", "Flask", "Python", "Full-Stack"],
    role: "Full-Stack Developer & Lead Logic Engineer",
    repository: "https://github.com/gelikadlcrz/Course-Enrollment-Eligibility-Checker-Using-Prolog",
    fullDescription:
      "The course enrollment eligibility checker is a specialized tool developed using the Prolog programming language to manage the complex prerequisite structures of a university computer science curriculum. By utilizing an internally defined knowledge base of static Prolog facts and recursive rules, the system automates the verification process to evaluate whether a student has satisfied all necessary academic conditions for a specific course.",
    contributions: [
      {
        title: "Prolog Logic & Inference Engine",
        items: [
          "Designed the rule-based inference model mapping structured course facts to explicit prerequisite rules",
          "Programmed the core eligibility checking algorithms (check_course/4, check_reqs/3) for recursive evaluation",
          "Engineered dynamic academic standing logic (has_standing/2) to infer 3rd and 4th-year student progression",
          "Built a robust knowledge base covering the entire BSCS curriculum and its dependencies",
        ],
      },
      {
        title: "Server & API Integration",
        items: [
          "Developed the Python Flask backend to bridge the Prolog inference engine with the web application",
          "Utilized SWI-Prolog's HTTP/JSON library to serialize logic outputs into formatted JSON arrays",
          "Engineered output predicates (get_status_json/1, check_single_json/2) for seamless frontend communication",
        ],
      },
      {
        title: "Frontend GUI Development",
        items: [
          "Developed a highly interactive custom graphical user interface from scratch using ReactJS",
          "Built a real-time analytics dashboard displaying completed courses and eligibility progress",
          "Implemented comprehensive curriculum navigation featuring search, categorical filters, and chronological sorting",
          "Created the core Eligibility Checker interface to display precise requirement breakdowns for locked courses",
        ],
      },
    ],
    technicalDetails: {
      frontend: "ReactJS",
      backend: "SWI-Prolog (Logic Engine), Python Flask (API Server)",
      additional: [
        "SWI-Prolog JSON Library (http/json)",
        "Rule-Based Inference Modeling",
        "Recursive Algorithm Design"
      ],
    },
    outcomes: [
      "Successfully bridged a highly logical backend language (Prolog) with a modern web interface (ReactJS)",
      "Automated a complex, real-world administrative process for university enrollment validation",
      "Created an intuitive, error-free system for students to track their academic progression instantly",
    ],
    skills: [
      "Logic Programming",
      "Full-Stack Development",
      "API Integration",
      "Algorithm Design",
      "React Development"
    ],
  },
  {
    id: "rxellence",
    title: "Rxellence: Healthcare Management & Prescription System",
    timeline: "Oct 2025 - Dec 2025",
    shortDescription:
      "A comprehensive, web-based healthcare management system designed to streamline the workflow between healthcare administrators, doctors, pharmacists, and patients.",
    image: rxellenceImg,
    tags: ["PHP", "Node.js", "Express", "JavaScript", "MySQL"],
    role: "Project Lead & Full-Stack Developer",
    repository: "https://github.com/gelikadlcrz/Rxellence",
    fullDescription:
      "Rxellence is a comprehensive, web-based healthcare management system designed to streamline the workflow between healthcare administrators, doctors, pharmacists, and patients. The platform enforces strict role-based access control, ensuring secure operations from initial patient diagnosis and prescription creation to pharmacy fulfillment and inventory tracking.",
    contributions: [
      {
        title: "Leadership & Architecture",
        items: [
          "Managed development team and delegated tasks throughout project lifecycle",
          "Designed Entity-Relationship (ER) diagram and database schema",
          "Conceptualized User Interface (UI) and overall system architecture",
        ],
      },
      {
        title: "Authentication & Onboarding",
        items: [
          "Engineered secure registration flow for doctors with hospital affiliation",
          "Implemented medical license validation for account creation",
        ],
      },
      {
        title: "Patient Record Management",
        items: [
          "Built UI and backend logic for new patient record creation",
          "Implemented auto-generated credentials (ID and passwords)",
          "Developed fields for vital stats, emergency contacts, diagnoses, and medications",
          "Created full CRUD operations for patient profile management",
        ],
      },
      {
        title: "Advanced Prescription Handling",
        items: [
          "Developed interactive interface for viewing and staging prescriptions",
          "Added granular controls for medication names, dosages, and instructions",
          "Implemented prescription editing and discontinuation capabilities",
        ],
      },
      {
        title: "Medicine Directory",
        items: [
          "Created searchable, categorized database interface",
          "Implemented filtering by name, brand, and categories",
        ],
      },
      {
        title: "Analytics & Trends Dashboard",
        items: [
          "Integrated dynamic data visualization for medical insights",
          "Top diagnoses tracking among patient demographics",
          "Most frequently prescribed medicine types analysis",
          "Medicine prescription comparisons by medical specialization",
          "Quarterly trends mapping for prescribed medications",
        ],
      },
    ],
    technicalDetails: {
      frontend: "HTML5, CSS3, Vanilla JavaScript",
      backend: "Vanilla PHP (Core App), Node.js & Express.js (Admin Panel)",
      database: "MySQL / MariaDB with mysqli extension",
      additional: ["Chart.js for data visualization", "MVC architecture pattern"],
    },
    outcomes: [
      "Successfully delivered multi-role web application with clear separation of business logic",
      "Achieved 95% original code without over-relying on heavy frameworks",
      "Created lightweight, performant application with fast DOM manipulation",
      "Built robust data architecture for complex relationships across users, inventories, and medical records",
    ],
    skills: [
      "Leadership",
      "System Design",
      "Full-Stack Development",
      "Database Design",
      "Data Visualization",
    ],
  },
  {
    id: "navi-now",
    title: "Navi-Now: Smart Shuttle Reservation System",
    timeline: "Sept 2025 - Dec 2025",
    shortDescription:
      "A web-based shuttle reservation and management platform designed to modernize commuter travel with real-time seat availability and digital ticketing.",
    image: naviNowImg,
    tags: ["Full-Stack", "System Design", "UI/UX", "Payment Integration"],
    role: "Project Lead & Full-Stack Developer",
    repository: "https://github.com/Renzo404/Navi-Now",
    fullDescription:
      "Navi-Now is a web-based shuttle reservation and management platform designed to modernize and streamline commuter travel. The system eliminates the guesswork of traditional commuting by providing users with real-time seat availability, digital booking, and automated QR-code ticketing, ensuring an efficient and frictionless boarding process.",
    contributions: [
      {
        title: "System Design & Technical Documentation",
        items: [
          "Designed foundational System Architecture and mapped complex user flows using Activity Diagrams",
          "Authored comprehensive Functional Requirements as a blueprint for the development team",
          "Led academic documentation, writing the project's Introduction and Results sections",
        ],
      },
      {
        title: "Full-Stack Development (Passenger Module)",
        items: [
          "Built dynamic interfaces for real-time scheduling, showing available time slots and live vehicle capacity",
          "Implemented intuitive reservation workflow for securing seats and selecting drop-off locations",
          "Developed secure payment gateway flow for instant booking confirmation",
          "Engineered automated system for generating verifiable e-receipts and QR code boarding passes",
        ],
      },
    ],
    technicalDetails: {
      frontend: "Responsive web UI designed for quick, on-the-go commuter access",
      backend: "Full-stack logic handling concurrent bookings, capacity decrementing, and payment states",
      additional: [
        "UML Modeling & Activity Diagrams",
        "Dynamic QR code generation for ticket validation",
      ],
    },
    outcomes: [
      "Successfully delivered a fully functional, user-centric transportation system that digitizes manual shuttle boarding",
      "Greatly improved commuter convenience by introducing digital payments and QR boarding",
      "Bridged the gap between technical execution and formal project documentation",
    ],
    skills: [
      "Leadership & Documentation",
      "System Architecture (UML)",
      "Full-Stack Development",
      "Feature Integration",
    ],
  },
  {
    id: "whats-the-word",
    title: "What's The Word: Networked Multiplayer Game",
    timeline: "March 2025 - June 2025",
    shortDescription:
      "A networked, real-time multiplayer word-guessing game featuring automated matchmaking and dynamic server administration.",
    image: hangman,
    tags: ["Java", "Sockets", "Multithreading", "MySQL"],
    role: "Core Java Developer",
    repository: "https://github.com/gelikadlcrz/What-s-The-Word-Networked-Multiplayer-Word-Game",
    fullDescription:
      "What's The Word is a networked, real-time multiplayer word-guessing game built on a robust client-server architecture. Operating similarly to a competitive 'Hangman', the platform features automated matchmaking, dynamic lobbies supporting up to 5 players, and real-time state synchronization, complete with a dedicated backend for live administration.",
    contributions: [
      {
        title: "Core Game Logic & Data Processing",
        items: [
          "Engineered file I/O parsing system to load secret words dynamically",
          "Developed randomization algorithms to guarantee unique word selection for every round",
        ],
      },
      {
        title: "Administrative Dashboard",
        items: [
          "Developed UI and backend logic for dynamic server tuning (lobby wait times, round limits)",
          "Implemented global failsafe to instantly revert server to default settings",
          "Built secure, isolated login flow exclusively for backend moderation tools",
          "Engineered end-to-end CRUD capabilities for managing the user database",
          "Integrated highly responsive real-time keystroke filtering to locate player accounts instantly",
        ],
      },
      {
        title: "Database Architecture",
        items: [
          "Designed and integrated admin and game_settings tables into the SQL database",
          "Ensured custom server configurations persisted across server restarts",
        ],
      },
    ],
    technicalDetails: {
      frontend: "Java UI Client",
      backend: "Java, Java Sockets, Multithreading",
      database: "SQL/MySQL",
      additional: [
        "Client-Server Architecture",
        "Java File I/O for data parsing",
      ],
    },
    outcomes: [
      "Delivered a resilient administrative backend allowing live game tuning without server downtime",
      "Optimized moderation efficiency by implementing real-time search filtering",
      "Ensured high replayability via a unique-word retrieval system integrated with multithreaded lobbies",
    ],
    skills: [
      "Network Programming",
      "Multithreading",
      "Database Architecture",
      "Client-Server Systems",
    ],
  },
  {
    id: "nlp-ilokano-translation",
    title: "Context-Free Grammar-Based Machine Translation",
    timeline: "Feb 2025 - May 2025",
    shortDescription:
      "A specialized Natural Language Processing (NLP) system designed to translate phrases and simple sentences from Ilokano to English.",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["NLP", "Algorithms", "CFG", "Research"],
    role: "NLP Software Engineer & Lead Researcher",
    repository: "https://github.com/gelikadlcrz/Context-Free-Grammar-Based-Machine-Translation-Ilokano-to-English",
    fullDescription:
      "This project is a specialized Natural Language Processing (NLP) machine translation system designed to accurately translate phrases and simple sentences from Ilokano to English. Utilizing a Rule-Based Machine Translation (RBMT) approach, the system leverages custom Context-Free Grammar (CFG) models, Part-of-Speech (POS) tagging, and complex morphological analysis.",
    contributions: [
      {
        title: "Algorithm Engineering & NLP Development",
        items: [
          "Engineered the core code for parsing, POS-tagging, and translating complex Ilokano enclitics",
          "Systematically refined Context-Free Grammar (CFG) rules for declarative and interrogative structures",
          "Wrote backend scripts to compile, format, and automate translation test result generation",
        ],
      },
      {
        title: "System Evaluation & Research",
        items: [
          "Developed programmatic implementation of the BLEU score metric from scratch for automated testing",
          "Served as lead technical writer for the research paper's Methodology and Discussion sections",
          "Translated raw code metrics into digestible scientific insights",
        ],
      },
    ],
    technicalDetails: {
      frontend: "Data Visualization & Academic Output",
      backend: "Rule-Based Machine Translation (RBMT) Engine",
      additional: [
        "Context-Free Grammar (CFG) parsing",
        "Part-of-Speech (POS) Tagging",
        "Morphological Analysis",
        "BLEU Score Evaluation Metric",
      ],
    },
    outcomes: [
      "Engineered a specialized syntax parser that elegantly handles Ilokano's unique morphological rules",
      "Achieved an outstanding 0.9416 average BLEU score (categorized as 'Excellent')",
      "Delivered a well-received, formal academic research paper detailing the methodology",
    ],
    skills: [
      "Natural Language Processing (NLP)",
      "Algorithm Design",
      "CFG Modeling",
      "Academic & Technical Writing",
    ],
  },
  {
    id: "community-volunteer-tracker",
    title: "Community: A Volunteer Service Tracker",
    timeline: "Jan 2025 - May 2025",
    shortDescription:
      "A comprehensive web application built to streamline the organization, management, and tracking of local volunteer efforts and service history.",
    image: communityImg,
    tags: ["Java", "JavaFX", "Aiven SQL", "GitLab"],
    role: "Project Lead & Full-Stack Developer",
    repository: "https://github.com/gelikadlcrz/Community-A-Volunteer-Service-Tracker",
    fullDescription:
      "Community is a comprehensive web application built to streamline the organization, management, and tracking of local volunteer efforts. The platform serves as a centralized hub where users can discover volunteer groups, participate in community services, and track their personal volunteer history, while empowering community leaders with the tools needed to manage teams and coordinate service events effectively.",
    contributions: [
      {
        title: "Leadership & Quality Assurance",
        items: [
          "Actively delegated tasks and monitored sprint progress for agile delivery",
          "Acted as primary technical mentor, reviewing pull requests and debugging team contributions",
        ],
      },
      {
        title: "Database Architecture",
        items: [
          "Spearheaded data modeling with complete ERD and relational schema for many-to-many relationships",
          "Utilized Aiven SQL for secure, remote, and reliable cloud data management",
        ],
      },
      {
        title: "The Volunteer Module",
        items: [
          "Developed features for volunteers to browse, join groups, and view available services",
          "Engineered logic for joining, leaving, and gracefully exiting volunteer commitments",
          "Created personalized dashboards for tracking historical service participation",
        ],
      },
      {
        title: "The Group Leader Module",
        items: [
          "Built infrastructure for users to become Group Leaders and manage their own groups",
          "Implemented event coordination features for creating new services",
          "Developed administrative tools for roster control and removing inactive members",
        ],
      },
    ],
    technicalDetails: {
      frontend: "JavaFX, FXML, CSS",
      backend: "Java",
      database: "Cloud-hosted SQL via Aiven SQL",
      additional: ["GitLab for version control and issue tracking", "Entity-Relationship Modeling"],
    },
    outcomes: [
      "Successfully launched a highly relational, cloud-hosted tracking system for community logistics",
      "Ensured a stable, bug-free deployment by maintaining strict version control and code reviews",
      "Designed a scalable database capable of accurately tracking user histories across concurrent events",
    ],
    skills: [
      "Technical Leadership",
      "Database Management",
      "Relational Data Modeling",
      "Full-Stack Development",
      "RBAC (Role-Based Access Control)",
    ],
  },
  {
    id: "studio-gear-rental",
    title: "Studio Gear Rental System",
    timeline: "Jan 2025 - March 2025",
    shortDescription:
      "A client-server application designed to manage complex rental workflows for professional audio, video, lighting, and rigging equipment.",
    image: gearRentalImg,
    tags: ["Java", "JavaFX", "Java RMI", "JSON"],
    role: "Core Java Developer",
    repository: "https://github.com/gelikadlcrz/Studio-Gear-Rental-System",
    fullDescription:
      "The Studio Gear Rental System is a comprehensive client-server application designed to manage the complex rental workflows for professional audio, video, lighting, and rigging equipment. The platform tracks real-time inventory availability, manages extensive gear specifications, and calculates standard rental rates to facilitate a seamless reservation process.",
    contributions: [
      {
        title: "Distributed User Management",
        items: [
          "Engineered end-to-end authentication pipeline from frontend UI to remote backend",
          "Developed FXML interfaces and RMI backend logic for profile lifecycle management",
          "Leveraged Java RMI to expose backend business logic to the JavaFX desktop client",
        ],
      },
      {
        title: "System Auditing & Logging",
        items: [
          "Architected custom LogEntry class to capture and categorize critical system events",
          "Implemented dual-output logging (real-time console data and structured JSON for auditing)",
        ],
      },
      {
        title: "Inventory Foundations",
        items: [
          "Developed foundational add gear listing logic for dynamic catalog management",
          "Handled complex gear attributes including UUIDs, categories, and Base64 encoded images",
        ],
      },
    ],
    technicalDetails: {
      frontend: "JavaFX and FXML (MVC-compliant)",
      backend: "Java, Java RMI (for distributed client-server architecture)",
      database: "JSON (for dynamic logging and static seed data parsing)",
      additional: ["Maven / Gradle Build Automation"],
    },
    outcomes: [
      "Delivered a robust, distributed user management module serving as the platform's security backbone",
      "Greatly enhanced application maintainability with structured, dual-output JSON logging",
      "Demonstrated strong proficiency in object-oriented Java and MVC architecture",
    ],
    skills: [
      "Java RMI",
      "Distributed Systems",
      "JavaFX",
      "System Logging",
      "MVC Architecture",
    ],
  }
];

export function getProjectById(id: string): ProjectData | undefined {
  return projects.find((project) => project.id === id);
}