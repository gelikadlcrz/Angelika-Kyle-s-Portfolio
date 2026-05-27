import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';
import type { CSSProperties, FormEvent, ReactNode, PointerEvent } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  Braces,
  BriefcaseBusiness,
  Code2,
  Command,
  Copy,
  Cpu,
  Database,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Home,
  Images,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Moon,
  MousePointerClick,
  Palette,
  Rocket,
  Search,
  Send,
  Sparkles,
  Sun,
  UserRound,
  WandSparkles,
  Wrench,
  X,
  Zap,
} from 'lucide-react';

import profilePic from '../assets/images/profile.jpg';
import resumeFile from '../assets/pdfs/Angelika_Kyle_Resume.pdf';
import { processSteps, type ProcessStepIconKey } from './data/experience';
import { projects, skillClusters, type Project, type ProjectCategory, type ProjectTab } from './data/portfolio';

type Palette = 'light' | 'dark';
type NavItem = { href: string; label: string; icon: LucideIcon };
type SkillIconMap = Record<string, LucideIcon>;

const navItems: NavItem[] = [
  { href: '#home', label: 'Home', icon: Home },
  { href: '#about', label: 'About', icon: UserRound },
  { href: '#work', label: 'Work', icon: BriefcaseBusiness },
  { href: '#stack', label: 'Stack', icon: Wrench },
  { href: '#contact', label: 'Contact', icon: Mail },
];

const roles = ['Full-Stack Developer', 'Software Engineer', 'AI Engineer', 'Systems Builder', 'Interface Tinkerer'];
const categories = ['All', 'AI', 'Full Stack', 'Mobile', 'Systems', 'Research', 'NLP'] as const;
const projectTabs: ProjectTab[] = ['Overview', 'Build', 'Tech', 'Outcome'];

const focusCards = [
  {
    icon: Rocket,
    title: 'Product-minded builds',
    text: 'I turn project ideas into working flows, not just screens.',
  },
  {
    icon: BrainCircuit,
    title: 'AI that reaches users',
    text: 'Models, pipelines, and inference connected to real app experiences.',
  },
  {
    icon: Database,
    title: 'Database-first logic',
    text: 'ERDs, SQL schemas, CRUD workflows, and role-aware systems.',
  },
  {
    icon: Palette,
    title: 'Interfaces with taste',
    text: 'Clean layouts, microinteractions, and recruiter-friendly storytelling.',
  },
];

const processStepIcons: Record<ProcessStepIconKey, LucideIcon> = {
  map: MousePointerClick,
  build: Code2,
  model: BrainCircuit,
  polish: WandSparkles,
};

const skillIcons: SkillIconMap = {
  Frontend: Layers3,
  Backend: Braces,
  'AI / Data': BrainCircuit,
  Database: Database,
};

function useActiveSection() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0.01 }
    );

    document.querySelectorAll('section[id], header[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />;
}

function CursorAura() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const smoothX = useSpring(x, { stiffness: 90, damping: 18, mass: 0.2 });
  const smoothY = useSpring(y, { stiffness: 90, damping: 18, mass: 0.2 });

  useEffect(() => {
    const move = (event: PointerEvent) => {
      x.set(event.clientX - 190);
      y.set(event.clientY - 190);
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, [x, y]);

  return (
    <>
      <motion.div className="cursor-aura" style={{ x: smoothX, y: smoothY }} aria-hidden="true" />
      <motion.div className="cursor-dot" style={{ x: smoothX, y: smoothY }} aria-hidden="true" />
    </>
  );
}

function BackgroundPlayground() {
  return (
    <div className="background-playground" aria-hidden="true">
      <span className="blob blob-one" />
      <span className="blob blob-two" />
      <span className="blob blob-three" />
      <div className="constellation">
        {Array.from({ length: 18 }).map((_, index) => (
          <i key={index} style={{ '--i': index } as CSSProperties} />
        ))}
      </div>
    </div>
  );
}

function TiltCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-9, 9]);

  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
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

function Navigation({ active, palette, setPalette }: { active: string; palette: Palette; setPalette: (theme: Palette) => void }) {
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
            <a key={item.href} href={item.href} className={active === item.href.slice(1) ? 'active' : ''}>
              <item.icon size={16} />
              <span>{item.label}</span>
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button className="icon-button" onClick={() => setPalette(palette === 'light' ? 'dark' : 'light')} aria-label="Toggle color mode">
            {palette === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button className="menu-button" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu size={20} />
          </button>
          <a className="nav-cta" href={resumeFile} target="_blank" rel="noreferrer">
            <FileText size={16} /> Resume <ArrowRight size={16} />
          </a>
        </div>
      </nav>

      <aside className="rail-nav" aria-label="Section shortcuts">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className={active === item.href.slice(1) ? 'active' : ''} aria-label={item.label}>
            <item.icon size={18} />
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
                  <item.icon size={20} /> {item.label}
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
  const [activeFocus, setActiveFocus] = useState(0);
  const ActiveIcon = focusCards[activeFocus].icon;

  useEffect(() => {
    const timer = window.setInterval(() => setRoleIndex((index) => (index + 1) % roles.length), 1700);
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
          I build sharp, intelligent, and workflow-centered software as a{' '}
          <AnimatePresence mode="wait">
            <motion.strong key={roles[roleIndex]} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              {roles[roleIndex]}
            </motion.strong>
          </AnimatePresence>
          — from full-stack platforms and mobile apps to AI pipelines, forecasting systems, and real-time model integration.
        </motion.p>

        <motion.div className="hero-actions" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }}>
          <a className="primary-action magnetic-action" href="#work">
            Explore the work <ArrowRight size={18} />
          </a>
          <a className="secondary-action magnetic-action" href="mailto:2241338@slu.edu.ph">
            <Mail size={18} /> Contact me
          </a>
        </motion.div>

        <motion.div className="hero-command-strip" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32 }}>
          <span><Search size={15} /> ⌘ K / Ctrl K for quick actions</span>
          <span><MousePointerClick size={15} /> Click the floating badges</span>
          <span><Zap size={15} /> Hover cards for motion</span>
        </motion.div>
      </div>

      <TiltCard className="hero-visual">
        <div className="portrait-frame">
          <img src={profilePic} alt="Angelika Kyle Dela Cruz" />
        </div>
        <div className="hero-orbit orbit-a" />
        <div className="hero-orbit orbit-b" />
        <span className="signal-node signal-one"><Cpu size={18} /></span>
        <span className="signal-node signal-two"><Database size={18} /></span>
        <span className="signal-node signal-three"><BadgeCheck size={18} /></span>
        <button className="floating-badge badge-one" onClick={() => setActiveFocus(1)}>AI Engineer</button>
        <button className="floating-badge badge-two" onClick={() => setActiveFocus(0)}>Full Stack</button>
        <button className="floating-badge badge-three" onClick={() => setActiveFocus(2)}>Software Systems</button>
        <div className="focus-console">
          <div className="terminal-dots"><span /><span /><span /></div>
          <div className="focus-console-main">
            <ActiveIcon size={30} />
            <div>
              <p>currently_building</p>
              <strong>{focusCards[activeFocus].title}</strong>
              <span>{focusCards[activeFocus].text}</span>
            </div>
          </div>
        </div>
      </TiltCard>
    </header>
  );
}

function FocusStrip() {
  return (
    <section className="focus-strip" aria-label="Portfolio focus areas">
      {focusCards.map((card, index) => (
        <motion.article
          key={card.title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: index * 0.04 }}
        >
          <card.icon size={24} />
          <strong>{card.title}</strong>
          <span>{card.text}</span>
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
            I like projects where engineering depth and user experience meet — AI fitness tracking, healthcare systems, transportation platforms, volunteer tools, multiplayer systems, logic engines, and interpretable forecasting dashboards.
          </p>
        </motion.article>

        <motion.div className="identity-stack" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          {[
            ['Education', 'B.S. Computer Science · Saint Louis University'],
            ['Direction', 'Full-stack development, software engineering, and AI engineering'],
            ['Style', 'Clean systems, strong databases, useful interfaces, measurable results'],
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


function ProcessStudio() {
  const [activeStep, setActiveStep] = useState(0);
  const step = processSteps[activeStep];
  const StepIcon = processStepIcons[step.iconKey];

  return (
    <section className="section-shell process-section" aria-label="Interactive build process">
      <motion.div className="section-heading" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p>Build Loop</p>
        <h2>Not just visuals — every project is treated like a small product system.</h2>
      </motion.div>

      <div className="process-studio">
        <div className="process-steps" role="tablist" aria-label="Build process steps">
          {processSteps.map((item, index) => {
            const Icon = processStepIcons[item.iconKey];
            return (
              <button
                key={item.label}
                className={activeStep === index ? 'active' : ''}
                onClick={() => setActiveStep(index)}
                onMouseEnter={() => setActiveStep(index)}
                role="tab"
                aria-selected={activeStep === index}
              >
                <Icon size={22} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            key={step.label}
            className="process-feature"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -18, scale: 0.98 }}
            transition={{ duration: 0.24 }}
          >
            <div className="process-icon"><StepIcon size={38} /></div>
            <span className="process-kicker">Step 0{activeStep + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
            <div className="process-artifacts">
              {step.artifacts.map((artifact) => <span key={artifact}>{artifact}</span>)}
            </div>
          </motion.article>
        </AnimatePresence>

        <div className="process-board" aria-hidden="true">
          {processSteps.map((item, index) => (
            <span key={item.label} className={activeStep === index ? 'active' : ''} style={{ '--i': index } as CSSProperties}>
              {item.label}
            </span>
          ))}
          <div className="process-board-core">ship</div>
        </div>
      </div>
    </section>
  );
}

function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className="project-preview-wrap">
      <div className="preview-toolbar">
        <div className="preview-dots"><span /><span /><span /></div>
        <span>{project.shortTitle.toLowerCase().replaceAll(' ', '-')}.app</span>
        <Images size={16} />
      </div>
      <div className="project-preview">
        {project.image ? (
          <img src={project.image} alt={`${project.title} preview`} />
        ) : (
          <div className="generated-preview">
            <div className="preview-grid" />
            <div className="preview-circuit">
              <Cpu size={80} />
              <span>{project.shortTitle}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectTabContent({ selected, activeTab }: { selected: Project; activeTab: ProjectTab }) {
  if (activeTab === 'Overview') {
    return <p className="tab-copy">{selected.overview}</p>;
  }

  const list = activeTab === 'Build' ? selected.build : activeTab === 'Tech' ? selected.tech : selected.outcomes;

  return (
    <ul className="tab-list">
      {list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Work() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('All');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Project>(projects[0]);
  const [activeTab, setActiveTab] = useState<ProjectTab>('Overview');

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesCategory = activeCategory === 'All' || project.categories.includes(activeCategory as ProjectCategory);
      const searchable = [project.title, project.subtitle, project.role, project.stack.join(' '), project.categories.join(' ')].join(' ').toLowerCase();
      const matchesQuery = !normalizedQuery || searchable.includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  useEffect(() => {
    if (!filteredProjects.some((project) => project.id === selected.id)) {
      setSelected(filteredProjects[0] ?? projects[0]);
      setActiveTab('Overview');
    }
  }, [filteredProjects, selected.id]);

  const moveSpotlight = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`);
  };

  return (
    <section id="work" className="section-shell work-section">
      <motion.div className="section-heading" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p>Selected Work</p>
        <h2>Project lab — search, filter, switch tabs, and inspect each build.</h2>
      </motion.div>

      <div className="work-console">
        <div className="work-controls">
          <div className="filter-bar" aria-label="Filter projects by category">
            {categories.map((category) => (
              <button key={category} className={activeCategory === category ? 'active' : ''} onClick={() => setActiveCategory(category)}>
                {category}
              </button>
            ))}
          </div>
          <label className="project-search">
            <Search size={17} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects, stack, category..." />
          </label>
        </div>

        <div className="project-stage">
          <div className="project-list">
            <div className="project-count">
              <Sparkles size={17} /> Showing {filteredProjects.length} / {projects.length}
            </div>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.button
                  layout
                  key={project.id}
                  className={`project-row ${selected.id === project.id ? 'active' : ''}`}
                  onClick={() => {
                    setSelected(project);
                    setActiveTab('Overview');
                  }}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  style={{ '--accent': project.accent } as CSSProperties}
                >
                  <span>{project.index}</span>
                  <strong>{project.shortTitle}</strong>
                  <small>{project.categories.join(' · ')}</small>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              key={selected.id}
              className="project-feature"
              onPointerMove={moveSpotlight}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -18 }}
              transition={{ duration: 0.25 }}
              style={{ '--accent': selected.accent, '--image-fit': selected.imageMode ?? 'contain' } as CSSProperties}
            >
              <ProjectPreview project={selected} />

              <div className="project-info">
                <div className="project-meta">
                  <span>{selected.role}</span>
                  <span>{selected.timeline}</span>
                </div>
                <h3>{selected.title}</h3>
                <p className="project-subtitle">{selected.subtitle}</p>

                <div className="metric-pills">
                  {selected.highlights.map((metric) => (
                    <span key={metric}>{metric}</span>
                  ))}
                </div>

                <div className="project-tabs">
                  {projectTabs.map((tab) => (
                    <button key={tab} className={activeTab === tab ? 'active' : ''} onClick={() => setActiveTab(tab)}>
                      {tab}
                    </button>
                  ))}
                </div>

                <ProjectTabContent selected={selected} activeTab={activeTab} />

                <div className="stack-cloud">
                  {selected.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <a className="project-link" href={selected.link} target="_blank" rel="noreferrer">
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
  const ActiveIcon = skillIcons[active.label] ?? Code2;

  return (
    <section id="stack" className="section-shell stack-section">
      <motion.div className="section-heading" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p>Stack</p>
        <h2>A technical toolkit for product-minded engineering.</h2>
      </motion.div>

      <div className="stack-grid">
        <div className="skill-orbit" style={{ '--accent': active.label === 'AI / Data' ? '#dfff45' : '#93a4ff' } as CSSProperties}>
          <div className="orbit-core">
            <ActiveIcon size={42} />
            <strong>{active.label}</strong>
          </div>
          {active.items.slice(0, 7).map((item, index) => (
            <span key={item} className={`orbit-tech orbit-${index + 1}`}>
              {item}
            </span>
          ))}
        </div>

        <div className="skill-panels">
          {skillClusters.map((cluster) => {
            const Icon = skillIcons[cluster.label] ?? Code2;
            return (
              <button key={cluster.label} className={active.label === cluster.label ? 'active' : ''} onClick={() => setActive(cluster)}>
                <Icon size={24} />
                <span>
                  <strong>{cluster.label}</strong>
                  <small>{cluster.note}</small>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CommandPalette({ open, setOpen }: { open: boolean; setOpen: (value: boolean) => void }) {
  const [query, setQuery] = useState('');
  const commands = useMemo(() => [
    { label: 'Go to Home', href: '#home', icon: Home },
    { label: 'View Work', href: '#work', icon: Rocket },
    { label: 'View Stack', href: '#stack', icon: Wrench },
    { label: 'Open Resume', href: resumeFile, icon: GraduationCap, external: true },
    { label: 'Email Angelika', href: 'mailto:2241338@slu.edu.ph', icon: Mail },
    { label: 'GitHub Profile', href: 'https://github.com/gelikadlcrz', icon: Github, external: true },
    { label: 'LinkedIn Profile', href: 'https://linkedin.com/in/gelikadlcrz', icon: Linkedin, external: true },
  ], []);

  const filteredCommands = commands.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen(!open);
      }
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, setOpen]);

  useEffect(() => {
    if (!open) setQuery('');
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="command-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}>
          <motion.div className="command-card" initial={{ opacity: 0, y: 24, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 24, scale: 0.96 }} onClick={(event) => event.stopPropagation()}>
            <div className="command-header">
              <Command size={18} />
              <span>Command Palette</span>
              <div className="command-shortcuts" aria-label="Keyboard shortcuts">
                <kbd>⌘ K</kbd>
                <kbd>Ctrl K</kbd>
                <kbd>Esc</kbd>
              </div>
            </div>
            <label className="command-search">
              <Search size={17} />
              <input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search quick actions..." />
            </label>
            <div className="command-list">
              {filteredCommands.length ? filteredCommands.map((item) => (
                <a key={item.label} href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noreferrer' : undefined} onClick={() => setOpen(false)}>
                  <item.icon size={20} />
                  <span>{item.label}</span>
                  <ArrowRight size={16} />
                </a>
              )) : <p className="command-empty">No quick action found.</p>}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const encode = (data: Record<string, string>) => Object.keys(data).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`).join('&');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setStatus('sending');

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formData }),
    })
      .then(() => {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        window.location.href = 'mailto:2241338@slu.edu.ph';
      })
      .finally(() => {
        window.setTimeout(() => setStatus('idle'), 2200);
      });
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText('2241338@slu.edu.ph');
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section id="contact" className="section-shell contact-section">
      <motion.div className="contact-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="contact-copy">
          <p>Contact</p>
          <h2>Let’s build something smart, useful, and hard to ignore.</h2>
          <span>Open to internships, software engineering roles, AI engineering opportunities, and product-focused collaborations.</span>
          <div className="social-row">
            <a href="https://github.com/gelikadlcrz" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
            <a href="https://linkedin.com/in/gelikadlcrz" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
            <button type="button" onClick={copyEmail}><Copy size={18} /> {copied ? 'Copied!' : 'Copy email'}</button>
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
          <button type="submit" disabled={status === 'sending'}>
            {status === 'sent' ? 'Message sent' : status === 'sending' ? 'Sending...' : 'Send message'} <Send size={16} />
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
  const [palette, setPalette] = useState<Palette>('light');
  const [commandOpen, setCommandOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.palette = palette;
  }, [palette]);

  return (
    <div className="portfolio-app">
      <ScrollProgress />
      <CursorAura />
      <BackgroundPlayground />
      <div className="grain" aria-hidden="true" />
      <button className="command-fab" onClick={() => setCommandOpen(true)} aria-label="Open command palette">
        <Search size={18} /> <span>⌘ K / Ctrl K</span>
      </button>
      <Navigation active={active} palette={palette} setPalette={setPalette} />
      <Hero />
      <FocusStrip />
      <About />
      <ProcessStudio />
      <Work />
      <Stack />
      <Contact />
      <Footer />
      <CommandPalette open={commandOpen} setOpen={setCommandOpen} />
    </div>
  );
}
