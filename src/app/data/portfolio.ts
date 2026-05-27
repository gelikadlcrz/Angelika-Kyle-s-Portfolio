import rxellenceImg from '../../assets/images/rxellence.png';
import naviNowImg from '../../assets/images/naviNow.png';
import gearRentalImg from '../../assets/images/gearRental.png';
import curriculumCheckerImg from '../../assets/images/curriculumChecker.png';
import hangmanImg from '../../assets/images/hangman.png';
import communityImg from '../../assets/images/community.png';

export type ProjectCategory = 'AI' | 'Full Stack' | 'Mobile' | 'Systems' | 'Research' | 'NLP';

export type ProjectTab = 'Overview' | 'Build' | 'Tech' | 'Outcome';

export interface Project {
  id: string;
  index: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  role: string;
  timeline: string;
  categories: ProjectCategory[];
  stack: string[];
  image?: string;
  imageMode?: 'contain' | 'cover';
  accent: string;
  link: string;
  highlights: string[];
  overview: string;
  build: string[];
  tech: string[];
  outcomes: string[];
}

export const projects: Project[] = [
  {
    id: 'coreset',
    index: '01',
    title: 'CoreSet AI Fitness Tracker',
    shortTitle: 'CoreSet AI',
    subtitle: 'Vision-only edge AI biomechanical rep-counting mobile app',
    role: 'Project Lead · Lead ML & Full-Stack Engineer',
    timeline: 'Feb 2025 – May 2026',
    categories: ['AI', 'Mobile', 'Full Stack'],
    stack: ['React Native', 'Python', 'PyTorch', 'MediaPipe', 'TensorFlow Lite', 'PostgreSQL'],
    accent: '#dfff45',
    link: 'https://github.com/gelikadlcrz/CoreSet-AI-Fitness-Tracker-Mobile-App',
    highlights: ['Realtime camera AI', 'Pose landmarks', 'Mobile-ready inference'],
    overview:
      'An AI-powered mobile fitness tracker for exercise recognition, rep counting, skeletal overlays, and workout analytics using camera-based pose landmarks.',
    build: [
      'Led the end-to-end mobile and ML workflow from data preparation to model integration.',
      'Built a pose-based pipeline using MediaPipe/BlazePose, 33 landmarks, angle features, temporal windows, augmentation, denoising, and normalization.',
      'Benchmarked BiLSTM and ST-GCN models, then integrated the exported TensorFlow Lite model into the React Native app.',
    ],
    tech: ['React Native / Expo mobile app', 'PyTorch training pipeline', 'TensorFlow Lite inference', 'PostgreSQL-backed workout data', 'MediaPipe skeletal tracking'],
    outcomes: ['Real-time exercise classification and rep-counting workflow', 'Skeletal overlay and analytics experience', 'Mobile AI pipeline connected to a usable product interface'],
  },
  {
    id: 'datubase',
    index: '02',
    title: 'Datubase-PH',
    shortTitle: 'Datubase-PH',
    subtitle: 'AI-driven multi-horizon political dynasty forecasting',
    role: 'Project Lead · Lead AI Engineer & Researcher',
    timeline: 'Mar 2025 – May 2026',
    categories: ['AI', 'Research', 'Systems'],
    stack: ['Python', 'PyTorch', 'Optuna', 'Scikit-Learn', 'Tableau'],
    accent: '#93a4ff',
    link: 'https://github.com/gelikadlcrz',
    highlights: ['Temporal forecasting', 'Interpretability', 'Risk dashboarding'],
    overview:
      'An interpretable AI forecasting system that models provincial political dynasty saturation and institutional capture risk across the Philippines.',
    build: [
      'Developed a Temporal Fusion Transformer forecasting pipeline for multi-horizon provincial analysis.',
      'Used feature engineering, baseline benchmarking, and Optuna-based hyperparameter optimization.',
      'Created interpretability outputs using Variable Selection Networks, temporal attention, and Tableau dashboards.',
    ],
    tech: ['Temporal Fusion Transformer', 'PyTorch', 'Optuna tuning', 'Scikit-Learn baselines', 'Tableau visual analytics'],
    outcomes: ['Interpretable forecasting workflow', 'Risk map and dashboard outputs', 'Research-ready analysis of long-term provincial patterns'],
  },
  {
    id: 'prolog-eligibility-checker',
    index: '03',
    title: 'Course Enrollment Eligibility Checker Using Prolog',
    shortTitle: 'Eligibility Checker',
    subtitle: 'Rule-based curriculum inference engine and interactive dashboard',
    role: 'Full-Stack Developer · Lead Logic Engineer',
    timeline: 'Feb 2026',
    categories: ['Full Stack', 'Systems'],
    stack: ['ReactJS', 'Prolog', 'Flask', 'Python', 'JSON'],
    image: curriculumCheckerImg,
    imageMode: 'contain',
    accent: '#35d69b',
    link: 'https://github.com/gelikadlcrz/Course-Enrollment-Eligibility-Checker-Using-Prolog',
    highlights: ['Recursive rules', 'Curriculum dashboard', 'JSON bridge'],
    overview:
      'A rule-based web system that checks course eligibility by evaluating prerequisite chains, academic standing, and curriculum dependencies.',
    build: [
      'Designed the Prolog knowledge base and recursive course-checking rules.',
      'Built a Flask bridge that converts logic outputs into frontend-friendly JSON.',
      'Developed the React dashboard for course browsing, eligibility checking, filters, and progress views.',
    ],
    tech: ['ReactJS frontend', 'SWI-Prolog logic engine', 'Python Flask API', 'JSON serialization', 'Rule-based inference'],
    outcomes: ['Connected a symbolic reasoning backend to a modern interface', 'Automated prerequisite checking', 'Improved visibility of student curriculum progress'],
  },
  {
    id: 'rxellence',
    index: '04',
    title: 'Rxellence',
    shortTitle: 'Rxellence',
    subtitle: 'Healthcare management and prescription system',
    role: 'Project Lead · Full-Stack Developer',
    timeline: 'Oct 2025 – Dec 2025',
    categories: ['Full Stack', 'Systems'],
    stack: ['PHP', 'Node.js', 'Express', 'JavaScript', 'MySQL', 'Chart.js', 'Docker'],
    image: rxellenceImg,
    imageMode: 'contain',
    accent: '#ff745f',
    link: 'https://github.com/gelikadlcrz/Rxellence',
    highlights: ['RBAC workflows', 'Doctor modules', 'Analytics dashboard'],
    overview:
      'A multi-role healthcare platform for patient onboarding, prescription staging, medication trend analysis, and secure administrative workflows.',
    build: [
      'Managed development tasks and helped define the system architecture and UI direction.',
      'Built patient record creation, doctor onboarding, prescription staging, and medicine directory workflows.',
      'Integrated analytics for diagnoses, prescribed medicine types, and quarterly medication trends.',
    ],
    tech: ['HTML/CSS/JavaScript', 'PHP core application', 'Node.js / Express admin layer', 'MySQL database', 'Chart.js dashboards'],
    outcomes: ['Secure role-based healthcare workflow', 'Doctor and administrator modules', 'Interactive medical analytics experience'],
  },
  {
    id: 'navi-now',
    index: '05',
    title: 'Navi-Now',
    shortTitle: 'Navi-Now',
    subtitle: 'Smart shuttle reservation and QR boarding system',
    role: 'Project Lead · Full-Stack Developer',
    timeline: 'Sept 2025 – Dec 2025',
    categories: ['Full Stack', 'Systems'],
    stack: ['JavaScript', 'Node.js', 'Express', 'TypeScript', 'MySQL', 'QR Flow'],
    image: naviNowImg,
    imageMode: 'contain',
    accent: '#7ee787',
    link: 'https://github.com/Renzo404/Navi-Now',
    highlights: ['Live capacity', 'QR receipts', 'Payment flow'],
    overview:
      'A commuter-focused reservation platform that digitizes shuttle booking, live seat capacity, payment confirmation, and QR-based boarding.',
    build: [
      'Designed user flows, activity diagrams, and functional requirements for the development team.',
      'Built passenger-facing reservation workflows with available schedules and seat capacity.',
      'Implemented QR-code receipts and booking confirmation flows.',
    ],
    tech: ['Responsive web interface', 'Node.js / Express backend', 'MySQL data layer', 'QR code generation', 'Payment state handling'],
    outcomes: ['Reduced manual ticketing friction', 'Improved commuter reservation flow', 'Created a clearer technical blueprint for the team'],
  },
  {
    id: 'whats-the-word',
    index: '06',
    title: "What’s The Word",
    shortTitle: "What’s The Word",
    subtitle: 'Networked multiplayer word game',
    role: 'Core Java Developer · Software Engineer',
    timeline: 'Mar 2025 – Jun 2025',
    categories: ['Systems', 'Full Stack'],
    stack: ['Java', 'JavaFX', 'Sockets', 'Multithreading', 'MySQL', 'CORBA'],
    image: hangmanImg,
    imageMode: 'contain',
    accent: '#f778ba',
    link: 'https://github.com/gelikadlcrz/What-s-The-Word-Networked-Multiplayer-Word-Game',
    highlights: ['Multithreaded lobbies', 'Admin dashboard', 'Game rules engine'],
    overview:
      'A real-time multiplayer word-guessing game with server-managed lobbies, concurrent player handling, persistent user states, and configurable game rules.',
    build: [
      'Engineered file I/O parsing and randomization for dynamic word selection.',
      'Built administrative tools for server tuning, user CRUD, search filtering, and default-setting recovery.',
      'Designed SQL tables for admin accounts and persistent game settings.',
    ],
    tech: ['Java client-server architecture', 'JavaFX interface', 'Java Sockets and multithreading', 'MySQL persistence', 'File I/O configuration'],
    outcomes: ['Live-tunable multiplayer gameplay', 'More efficient moderation tools', 'Reusable client-server logic for game sessions'],
  },
  {
    id: 'nlp-ilokano-translation',
    index: '07',
    title: 'Context-Free Grammar-Based Machine Translation',
    shortTitle: 'Ilokano NLP',
    subtitle: 'Rule-based Ilokano-to-English machine translation system',
    role: 'NLP Software Engineer · Lead Researcher',
    timeline: 'Feb 2025 – May 2025',
    categories: ['AI', 'NLP', 'Research'],
    stack: ['NLP', 'Algorithms', 'CFG', 'POS Tagging', 'BLEU Evaluation'],
    accent: '#f6c453',
    link: 'https://github.com/gelikadlcrz/Context-Free-Grammar-Based-Machine-Translation-Ilokano-to-English',
    highlights: ['CFG parser', 'Morphological rules', 'BLEU evaluation'],
    overview:
      'A rule-based NLP translation system that converts Ilokano phrases and simple sentences into English using grammar rules, POS tagging, and morphology handling.',
    build: [
      'Engineered parsing, POS-tagging, and translation logic for Ilokano enclitics and sentence structures.',
      'Refined CFG rules for declarative and interrogative phrase patterns.',
      'Implemented automated test result generation and BLEU scoring logic.',
    ],
    tech: ['Rule-Based Machine Translation', 'Context-Free Grammar parsing', 'Part-of-Speech tagging', 'Morphological analysis', 'BLEU score evaluation'],
    outcomes: ['Specialized syntax parser for Ilokano rules', 'Research-oriented evaluation workflow', 'Stronger bridge between algorithm work and technical writing'],
  },
  {
    id: 'community-volunteer-tracker',
    index: '08',
    title: 'Community',
    shortTitle: 'Community',
    subtitle: 'Volunteer service tracker with relational event management',
    role: 'Project Lead · Full-Stack Developer',
    timeline: 'Jan 2025 – May 2025',
    categories: ['Full Stack', 'Systems'],
    stack: ['Java', 'JavaFX', 'FXML', 'Aiven SQL', 'GitLab', 'MVC'],
    image: communityImg,
    imageMode: 'contain',
    accent: '#ffd166',
    link: 'https://github.com/gelikadlcrz/Community-A-Volunteer-Service-Tracker',
    highlights: ['Cloud SQL', 'Volunteer modules', 'Group leader tools'],
    overview:
      'A volunteer service tracker that helps users discover groups, join service events, track participation, and manage community activities.',
    build: [
      'Led task delegation, sprint monitoring, pull request reviews, and debugging support.',
      'Designed ERDs and relational schemas for users, groups, services, and many-to-many participation records.',
      'Built volunteer and group leader modules for group membership, service creation, and user history tracking.',
    ],
    tech: ['JavaFX / FXML UI', 'Java backend logic', 'Cloud-hosted Aiven SQL', 'Entity-relationship modeling', 'GitLab workflow'],
    outcomes: ['Stable relational volunteer tracking system', 'Clear role-specific workflows', 'Improved maintainability through code reviews and MVC structure'],
  },
  {
    id: 'studio-gear-rental',
    index: '09',
    title: 'Studio Gear Rental System',
    shortTitle: 'Gear Rental',
    subtitle: 'Distributed rental workflow and inventory system',
    role: 'Core Java Developer',
    timeline: 'Jan 2025 – Mar 2025',
    categories: ['Full Stack', 'Systems'],
    stack: ['Java', 'JavaFX', 'Java RMI', 'JSON', 'MVC'],
    image: gearRentalImg,
    imageMode: 'contain',
    accent: '#79c0ff',
    link: 'https://github.com/gelikadlcrz/Studio-Gear-Rental-System',
    highlights: ['Java RMI', 'Audit logging', 'Inventory states'],
    overview:
      'A distributed client-server application for managing rental workflows, user profiles, equipment inventory, and structured system logging.',
    build: [
      'Implemented authentication and profile lifecycle flows from JavaFX UI to remote backend logic.',
      'Used Java RMI to expose backend services to the desktop client.',
      'Built structured logging using a custom LogEntry model with console and JSON outputs.',
    ],
    tech: ['JavaFX / FXML frontend', 'Java RMI distributed backend', 'JSON audit logs', 'MVC architecture', 'Build automation'],
    outcomes: ['Distributed user management foundation', 'Maintainable system logging', 'Stronger object-oriented Java and MVC implementation'],
  },
];

export const skillClusters = [
  {
    label: 'Frontend',
    items: ['React', 'React Native', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'JavaFX'],
    note: 'Interfaces that feel polished, responsive, and workflow-aware.',
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express', 'PHP', 'Java', 'REST APIs', 'Auth/RBAC', 'Sockets', 'RMI', 'JSON'],
    note: 'Server logic, secure roles, client-server systems, and API workflows.',
  },
  {
    label: 'AI / Data',
    items: ['Python', 'PyTorch', 'TensorFlow', 'TFLite', 'MediaPipe', 'Scikit-Learn', 'Optuna', 'Tableau', 'Chart.js'],
    note: 'Modeling pipelines, interpretable analytics, and app-level inference.',
  },
  {
    label: 'Database',
    items: ['MySQL', 'PostgreSQL', 'Aiven SQL', 'WatermelonDB', 'SQLite', 'ERDs', 'SQL', 'Schema Design'],
    note: 'Relational and local-first structures that keep complex workflows stable.',
  },
];
