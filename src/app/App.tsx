import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BrainCircuit,
  Braces,
  Command,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Rocket,
  Send,
  Sparkles,
  Sun,
  X,
  Zap,
} from "lucide-react";

import profilePic from "../assets/images/profile.jpg";
import rxellenceImg from "../assets/images/rxellence.png";
import naviNowImg from "../assets/images/naviNow.png";
import communityImg from "../assets/images/community.png";
import hangmanImg from "../assets/images/hangman.png";
import curriculumCheckerImg from "../assets/images/curriculumChecker.png";
import gearRentalImg from "../assets/images/gearRental.png";
import resumeFile from "../assets/pdfs/Angelika_Kyle_Resume.pdf";

type ProjectCategory = "AI" | "Full Stack" | "Mobile" | "Systems" | "Research";

type Project = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  role: string;
  timeline: string;
  categories: ProjectCategory[];
  stack: string[];
  image?: string;
  accent: string;
  link?: string;
  metrics: string[];
  story: string;
};

type SkillCluster = {
  label: string;
  icon: typeof Braces;
  items: string[];
  note: string;
};

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

const roles = ["Full-Stack Developer", "Software Engineer", "AI Engineer", "Builder of intelligent systems"];

const projects: Project[] = [
  {
    id: "coreset",
    index: "01",
    title: "CoreSet AI Fitness Tracker",
    subtitle: "Vision-only edge AI biomechanical rep-counting mobile app",
    role: "Project Lead · Lead ML & Full Stack Engineer",
    timeline: "Feb 2025 – May 2026",
    categories: ["AI", "Mobile", "Full Stack"],
    stack: ["React Native", "Python", "PyTorch", "MediaPipe", "TensorFlow Lite", "PostgreSQL"],
    accent: "#dfff45",
    link: "https://github.com/gelikadlcrz/CoreSet-AI-Fitness-Tracker-Mobile-App",
    metrics: ["95.33% Top-1 Accuracy", "0.9935 Macro AUC", "12.439 ms/sample inference"],
    story:
      "Real-time camera-based exercise recognition, skeletal overlay, repetition counting, and workout analytics powered by pose landmarks and temporal ML models.",
  },
  {
    id: "datubase",
    index: "02",
    title: "Datubase-PH",
    subtitle: "AI-driven multi-horizon political dynasty forecasting",
    role: "Project Lead · Lead AI Engineer & Researcher",
    timeline: "Mar 2025 – May 2026",
    categories: ["AI", "Research", "Systems"],
    stack: ["Python", "PyTorch", "Optuna", "Scikit-Learn", "Tableau"],
    accent: "#93a4ff",
    link: "https://github.com/gelikadlcrz",
    metrics: ["2.98 MAE", "81 provinces", "1,863 province-year observations"],
    story:
      "Interpretable Temporal Fusion Transformer pipeline with variable selection, temporal attention, Tableau dashboards, and risk forecasting through 2031.",
  },
  {
    id: "eligibility",
    index: "03",
    title: "Course Eligibility Checker",
    subtitle: "Rule-based curriculum inference engine using Prolog",
    role: "Full-Stack Developer · Lead Logic Engineer",
    timeline: "Feb 2026",
    categories: ["Full Stack", "Systems"],
    stack: ["React", "Prolog", "Flask", "Python"],
    image: curriculumCheckerImg,
    accent: "#35d69b",
    link: "https://github.com/gelikadlcrz/Course-Enrollment-Eligibility-Checker-Using-Prolog",
    metrics: ["Recursive rules", "Curriculum dashboard", "JSON bridge"],
    story:
      "A modern dashboard wrapped around a Prolog inference engine that checks academic prerequisites, standing, and course eligibility instantly.",
  },
  {
    id: "rxellence",
    index: "04",
    title: "Rxellence",
    subtitle: "Healthcare management and prescription system",
    role: "Project Lead · Full-Stack Developer",
    timeline: "Oct 2025 – Dec 2025",
    categories: ["Full Stack", "Systems"],
    stack: ["PHP", "Node.js", "Express", "MySQL", "Chart.js", "Docker"],
    image: rxellenceImg,
    accent: "#ff745f",
    link: "https://github.com/gelikadlcrz/Rxellence",
    metrics: ["RBAC workflows", "Doctor + admin modules", "Analytics dashboard"],
    story:
      "A multi-role healthcare platform for patient onboarding, prescription staging, medication trends, and secure administrative workflows.",
  },
  {
    id: "navi-now",
    index: "05",
    title: "Navi-Now",
    subtitle: "Smart shuttle reservation and QR boarding system",
    role: "Project Lead · Full-Stack Developer",
    timeline: "Sept 2025 – Dec 2025",
    categories: ["Full Stack", "Systems"],
    stack: ["Node.js", "Express", "TypeScript", "MySQL", "QR Flow"],
    image: naviNowImg,
    accent: "#7ee787",
    link: "https://github.com/Renzo404/Navi-Now",
    metrics: ["Live capacity", "QR receipts", "Payment flow"],
    story:
      "A commuter-focused reservation system that digitizes shuttle booking, capacity tracking, payment confirmation, and boarding validation.",
  },
  {
    id: "community",
    index: "06",
    title: "Community",
    subtitle: "Volunteer service tracker with relational event management",
    role: "Project Lead · Full-Stack Developer",
    timeline: "June 2025 – May 2025",
    categories: ["Full Stack", "Systems"],
    stack: ["Java", "JavaFX", "FXML", "Aiven MySQL", "MVC"],
    image: communityImg,
    accent: "#ffd166",
    link: "https://github.com/gelikadlcrz",
    metrics: ["Cloud SQL", "RBAC modules", "Agile GitLab workflow"],
    story:
      "A desktop volunteer management system with administrator and volunteer modules, many-to-many event modeling, and MVC structure.",
  },
  {
    id: "word",
    index: "07",
    title: "What’s The Word",
    subtitle: "Networked multiplayer word game",
    role: "Full Stack Developer · Software Engineer",
    timeline: "Mar 2025 – June 2025",
    categories: ["Systems", "Full Stack"],
    stack: ["Java", "JavaFX", "Sockets", "MySQL", "CORBA"],
    image: hangmanImg,
    accent: "#f778ba",
    link: "https://github.com/gelikadlcrz/What-s-The-Word-Networked-Multiplayer-Word-Game",
    metrics: ["Multithreaded lobbies", "RBAC backend", "Configurable game rules"],
    story:
      "A real-time multiplayer word game with server-managed lobbies, persistent user states, and configurable gameplay rules.",
  },
  {
    id: "gear-rental",
    index: "08",
    title: "Gear Rental",
    subtitle: "Rental workflow and inventory interface",
    role: "Full-Stack Developer",
    timeline: "Academic Project",
    categories: ["Full Stack", "Systems"],
    stack: ["React", "Database Design", "UI/UX", "CRUD"],
    image: gearRentalImg,
    accent: "#79c0ff",
    link: "https://github.com/gelikadlcrz",
    metrics: ["Inventory states", "Rental tracking", "Clean UI flow"],
    story:
      "A practical platform concept focused on organizing rental items, availability, and user-facing request flows.",
  },
];

const skillClusters: SkillCluster[] = [
  {
    label: "Frontend",
    icon: Layers3,
    items: ["React", "React Native", "TypeScript", "JavaScript", "HTML5", "CSS3", "JavaFX"],
    note: "Interfaces that are clean, responsive, and workflow-aware.",
  },
  {
    label: "Backend",
    icon: Braces,
    items: ["Node.js", "Express", "PHP", "Java", "Sockets", "RMI", "REST APIs"],
    note: "Server logic, role-based access, client-server systems, and APIs.",
  },
  {
    label: "AI / Data",
    icon: BrainCircuit,
    items: ["Python", "PyTorch", "TensorFlow", "Scikit-Learn", "Optuna", "Tableau"],
    note: "Modeling pipelines, interpretable analytics, and mobile-ready inference.",
  },
  {
    label: "Database",
    icon: Database,
    items: ["MySQL", "PostgreSQL", "Aiven", "ERDs", "SQL", "Schema Design"],
    note: "Relational structures that keep complex workflows stable.",
  },
];

function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0.01 }
    );

    document.querySelectorAll("section[id], header[id]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}

function CursorAura() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 90, damping: 18, mass: 0.2 });
  const smoothY = useSpring(y, { stiffness: 90, damping: 18, mass: 0.2 });

  useEffect(() => {
    const move = (event: PointerEvent) => {
      x.set(event.clientX - 180);
      y.set(event.clientY - 180);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return <motion.div className="cursor-aura" style={{ x: smoothX, y: smoothY }} aria-hidden="true" />;
}

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);

  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

function Navigation({ active, palette, setPalette }: { active: string; palette: "light" | "dark"; setPalette: (theme: "light" | "dark") => void }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="top-nav" aria-label="Primary navigation">
        <a href="#home" className="brand-lockup" aria-label="Angelika Kyle home">
          <span className="brand-sigil">AK</span>
          <span>Angelika Kyle</span>
        </a>

        <div className="nav-center">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={active === item.href.slice(1) ? "active" : ""}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button className="icon-button" onClick={() => setPalette(palette === "light" ? "dark" : "light")} aria-label="Toggle color mode">
            {palette === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button className="menu-button" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu size={20} />
          </button>
          <a className="nav-cta" href={resumeFile} target="_blank" rel="noreferrer">
            Resume <ArrowRight size={16} />
          </a>
        </div>
      </nav>

      <aside className="rail-nav" aria-label="Section shortcuts">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className={active === item.href.slice(1) ? "active" : ""} aria-label={item.label}>
            <span>{item.label.slice(0, 2)}</span>
            <b>{item.label}</b>
          </a>
        ))}
      </aside>

      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="mobile-menu-card" initial={{ y: 22, scale: 0.96 }} animate={{ y: 0, scale: 1 }} exit={{ y: 22, scale: 0.96 }}>
              <button className="icon-button close" onClick={() => setOpen(false)} aria-label="Close menu">
                <X size={20} />
              </button>
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setRoleIndex((index) => (index + 1) % roles.length), 1800);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <header id="home" className="hero-section section-shell">
      <div className="hero-copy">
        <motion.div className="availability-chip" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
          <span /> Incoming 4th Year CS Student · Saint Louis University Baguio
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
          <span>Angelika</span>
          <span className="outlined">Kyle</span>
          <span>Dela Cruz</span>
        </motion.h1>

        <motion.p className="hero-text" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>
          I build sharp, intelligent, and workflow-centered software as a{" "}
          <AnimatePresence mode="wait">
            <motion.strong key={roles[roleIndex]} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              {roles[roleIndex]}
            </motion.strong>
          </AnimatePresence>
          — from full-stack platforms and mobile apps to AI pipelines, forecasting systems, and real-time model integration.
        </motion.p>

        <motion.div className="hero-actions" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }}>
          <a className="primary-action" href="#work">
            Explore the work <ArrowRight size={18} />
          </a>
          <a className="secondary-action" href="mailto:2241338@slu.edu.ph">
            <Mail size={18} /> Contact me
          </a>
        </motion.div>
      </div>

      <TiltCard className="hero-visual">
        <div className="portrait-frame">
          <img src={profilePic} alt="Angelika Kyle Dela Cruz" />
        </div>
        <div className="orbit-ring ring-one" />
        <div className="orbit-ring ring-two" />
        <div className="floating-badge badge-one">AI Engineer</div>
        <div className="floating-badge badge-two">Full Stack</div>
        <div className="floating-badge badge-three">Software Systems</div>
        <div className="mini-terminal">
          <div className="terminal-dots"><span /><span /><span /></div>
          <p>$ currently_building</p>
          <strong>real-world AI + software products</strong>
        </div>
      </TiltCard>
    </header>
  );
}

function MetricsStrip() {
  const metrics = [
    { value: "95.33%", label: "Top-1 accuracy in CoreSet recognition model" },
    { value: "1,863", label: "province-year observations modeled in Datubase-PH" },
    { value: "6+", label: "end-to-end software and AI projects highlighted" },
    { value: "Dean’s", label: "consistent academic standing at SLU" },
  ];

  return (
    <section className="metrics-strip" aria-label="Career highlights">
      {metrics.map((metric) => (
        <motion.article
          key={metric.value}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
        </motion.article>
      ))}
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-shell about-section">
      <motion.div className="section-heading" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p>About</p>
        <h2>Developer taste with engineer discipline.</h2>
      </motion.div>

      <div className="about-grid">
        <motion.article className="about-story" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="story-index">01</span>
          <p>
            I’m Angelika Kyle Dela Cruz, a Computer Science student at Saint Louis University in Baguio. My work focuses on building complete systems: polished interfaces, reliable backend logic, structured databases, and AI components that actually fit into product workflows.
          </p>
          <p>
            I like projects where engineering depth and user experience meet — AI fitness tracking, healthcare systems, transportation platforms, volunteer tools, multiplayer systems, and interpretable forecasting dashboards.
          </p>
        </motion.article>

        <motion.div className="identity-stack" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          {[
            ["Education", "B.S. Computer Science · Saint Louis University"],
            ["Direction", "Full-stack development, software engineering, and AI engineering"],
            ["Style", "Clean systems, strong databases, useful interfaces, measurable results"],
          ].map(([label, text]) => (
            <article key={label}>
              <span>{label}</span>
              <strong>{text}</strong>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Work() {
  const categories = ["All", "AI", "Full Stack", "Mobile", "Systems", "Research"] as const;
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");
  const [selected, setSelected] = useState<Project>(projects[0]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.categories.includes(activeCategory));
  }, [activeCategory]);

  useEffect(() => {
    if (!filteredProjects.some((project) => project.id === selected.id)) {
      setSelected(filteredProjects[0] ?? projects[0]);
    }
  }, [filteredProjects, selected.id]);

  return (
    <section id="work" className="section-shell work-section">
      <motion.div className="section-heading" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p>Selected Work</p>
        <h2>Interactive project lab — filter, hover, open, explore.</h2>
      </motion.div>

      <div className="work-console">
        <div className="filter-bar" aria-label="Filter projects by category">
          {categories.map((category) => (
            <button key={category} className={activeCategory === category ? "active" : ""} onClick={() => setActiveCategory(category)}>
              {category}
            </button>
          ))}
        </div>

        <div className="project-stage">
          <div className="project-list">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.button
                  layout
                  key={project.id}
                  className={`project-row ${selected.id === project.id ? "active" : ""}`}
                  onClick={() => setSelected(project)}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  style={{ "--accent": project.accent } as React.CSSProperties}
                >
                  <span>{project.index}</span>
                  <strong>{project.title}</strong>
                  <small>{project.categories.join(" · ")}</small>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              key={selected.id}
              className="project-feature"
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -18 }}
              transition={{ duration: 0.25 }}
              style={{ "--accent": selected.accent } as React.CSSProperties}
            >
              <div className="project-preview">
                {selected.image ? (
                  <img src={selected.image} alt={`${selected.title} preview`} />
                ) : (
                  <div className="generated-preview">
                    <div className="preview-grid" />
                    <BrainCircuit size={76} />
                    <span>{selected.title}</span>
                  </div>
                )}
              </div>

              <div className="project-info">
                <div className="project-meta">
                  <span>{selected.role}</span>
                  <span>{selected.timeline}</span>
                </div>
                <h3>{selected.title}</h3>
                <p className="project-subtitle">{selected.subtitle}</p>
                <p className="project-story">{selected.story}</p>

                <div className="metric-pills">
                  {selected.metrics.map((metric) => (
                    <span key={metric}>{metric}</span>
                  ))}
                </div>

                <div className="stack-cloud">
                  {selected.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <a className="project-link" href={selected.link ?? "https://github.com/gelikadlcrz"} target="_blank" rel="noreferrer">
                  View source <ExternalLink size={16} />
                </a>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Stack() {
  const [active, setActive] = useState(skillClusters[0]);

  return (
    <section id="stack" className="section-shell stack-section">
      <motion.div className="section-heading" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p>Stack</p>
        <h2>A technical toolkit for product-minded engineering.</h2>
      </motion.div>

      <div className="stack-grid">
        <div className="skill-orbit" style={{ "--accent": active.label === "AI / Data" ? "#dfff45" : "#93a4ff" } as React.CSSProperties}>
          <div className="orbit-core">
            <active.icon size={42} />
            <strong>{active.label}</strong>
          </div>
          {active.items.slice(0, 7).map((item, index) => (
            <span key={item} className={`orbit-tech orbit-${index + 1}`}>
              {item}
            </span>
          ))}
        </div>

        <div className="skill-panels">
          {skillClusters.map((cluster) => (
            <button key={cluster.label} className={active.label === cluster.label ? "active" : ""} onClick={() => setActive(cluster)}>
              <cluster.icon size={24} />
              <span>
                <strong>{cluster.label}</strong>
                <small>{cluster.note}</small>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommandPalette({ open, setOpen }: { open: boolean; setOpen: (value: boolean) => void }) {
  const commands = [
    { label: "View projects", href: "#work", icon: Rocket },
    { label: "Open resume", href: resumeFile, icon: GraduationCap, external: true },
    { label: "Email Angelika", href: "mailto:2241338@slu.edu.ph", icon: Mail },
    { label: "GitHub profile", href: "https://github.com/gelikadlcrz", icon: Github, external: true },
    { label: "LinkedIn profile", href: "https://linkedin.com/in/gelikadlcrz", icon: Linkedin, external: true },
  ];

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(!open);
      }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, setOpen]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="command-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}>
          <motion.div className="command-card" initial={{ opacity: 0, y: 24, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 24, scale: 0.96 }} onClick={(event) => event.stopPropagation()}>
            <div className="command-header">
              <Command size={18} />
              <span>Command Palette</span>
              <kbd>Esc</kbd>
            </div>
            {commands.map((item) => (
              <a key={item.label} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined} onClick={() => setOpen(false)}>
                <item.icon size={20} />
                <span>{item.label}</span>
                <ArrowRight size={16} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const encode = (data: Record<string, string>) => Object.keys(data).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`).join("&");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("sending");

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(() => {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        window.location.href = "mailto:2241338@slu.edu.ph";
      })
      .finally(() => {
        window.setTimeout(() => setStatus("idle"), 2200);
      });
  };

  return (
    <section id="contact" className="section-shell contact-section">
      <motion.div className="contact-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="contact-copy">
          <p>Contact</p>
          <h2>Let’s build something smart, useful, and hard to ignore.</h2>
          <span>
            Open to internships, software engineering roles, AI engineering opportunities, and product-focused collaborations.
          </span>
          <div className="social-row">
            <a href="https://github.com/gelikadlcrz" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
            <a href="https://linkedin.com/in/gelikadlcrz" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
            <a href="mailto:2241338@slu.edu.ph"><Mail size={18} /> Email</a>
          </div>
        </div>

        <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="contact-form">
          <input type="hidden" name="form-name" value="contact" />
          <label>
            Name
            <input name="name" value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} required />
          </label>
          <label>
            Email
            <input type="email" name="email" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} required />
          </label>
          <label>
            Message
            <textarea name="message" rows={5} value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} required />
          </label>
          <button type="submit" disabled={status === "sending"}>
            {status === "sent" ? "Message sent" : status === "sending" ? "Sending..." : "Send message"} <Send size={16} />
          </button>
        </form>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} Angelika Kyle Dela Cruz</span>
      <span>Full-stack · Software · AI Engineering</span>
    </footer>
  );
}

export default function App() {
  const active = useActiveSection();
  const [palette, setPalette] = useState<"light" | "dark">("light");
  const [commandOpen, setCommandOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.palette = palette;
  }, [palette]);

  return (
    <div className="portfolio-app">
      <CursorAura />
      <div className="grain" aria-hidden="true" />
      <button className="command-fab" onClick={() => setCommandOpen(true)} aria-label="Open command palette">
        <Command size={18} /> <span>Ctrl K</span>
      </button>
      <Navigation active={active} palette={palette} setPalette={setPalette} />
      <Hero />
      <MetricsStrip />
      <About />
      <Work />
      <Stack />
      <Contact />
      <Footer />
      <CommandPalette open={commandOpen} setOpen={setCommandOpen} />
    </div>
  );
}
