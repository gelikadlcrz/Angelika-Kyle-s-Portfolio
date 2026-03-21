import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ArrowRight, Instagram } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router";
import {
  Code2,
  Database,
  Server,
  BookOpen,
  TrendingUp,
  Layout,
  Binary,
} from "lucide-react";
import { projects } from "../data/projects";
import profilePic from '../../assets/images/profile.jpg';
import resumeFile from '../../assets/pdfs/Angelika_Kyle_Resume.pdf'; 
const titles = [
  "Software Engineer",
  "Full-Stack Developer",
  "Creative Problem Solver",
];

const profileCards = [
  {
    title: "Education",
    description: "Bachelor of Science in Computer Science",
    details: "Saint Louis University, 2024-Present",
  },
  {
    title: "Experience",
    description: "6+ Years Coding Experience",
    details: "Full-Stack & System Design Specialist",
  },
  {
    title: "Projects",
    description: "30+ Completed Projects",
    details: "Web and Mobile Apps, IoT Solutions",
  },
  {
    title: "Core Stack",
    description: "Driving high-performance applications",
    details: "Java, MySQL, HTML, CSS, JavaScript",
  },
];

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    color: "#7ee787",
    technologies: ["JavaScript", "HTML5/CSS3", "React", "JavaFX & FXML"],
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "#79c0ff",
    technologies: ["Node.js & Express", "PHP", "Java (RMI & Sockets)"],
  },
  {
    title: "Programming Languages",
    icon: Binary,
    color: "#d2a8ff",
    technologies: ["Java", "JavaScript", "PHP", "Python"],
  },
  {
    title: "Core Computer Science",
    icon: BookOpen,
    color: "#ffa657",
    technologies: ["System Design", "Multithreading", "OOP & MVC", "UML & ERD"],
  },
  {
    title: "Natural Language Processing",
    icon: BookOpen,
    color: "#f778ba",
    technologies: ["NLP", "CFG Parsing", "POS Tagging", "RBMT"],
  },
  {
    title: "Database Management",
    icon: Database,
    color: "#56d364",
    technologies: ["MySQL", "MariaDB", "Aiven Cloud SQL"],
  },
  {
    title: "Tools & Leadership",
    icon: Layout,
    color: "#ff7b72",
    technologies: ["GitLab/Git", "Maven/Gradle", "Project Lead", "Tech Writing"],
  },
   {
    title: "UI/UX Design",
    icon: Layout,
    color: "#f778ba",
    technologies: ["Figma", "Prototyping"],
  },
   {
    title: "Personal Development",
    icon: TrendingUp,
    color: "#ff7b72",
    technologies: ["Leadership", "Communication", "Adaptability", "Problem-Solving"],
  },
];
 
export function Home() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Typing animation effect
  useEffect(() => {
    const currentText = titles[currentTitle];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentTitle((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText(currentText.substring(0, charIndex));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentTitle]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="pt-16 pb-16">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="text-[#7ee787] mb-6 text-2xl lg:text-3xl font-mono h-12 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {displayedText}
                <span className="animate-pulse ml-1">|</span>
              </motion.div>

            <h1 className="text-5xl lg:text-7xl mb-6">
            <span className="text-white">Hello I'm</span>
            <br />
            <motion.span
              className="relative inline-block cursor-pointer px-[10px] -ml-[10px] rounded-[4px] transition-colors duration-300"
              onMouseEnter={() => setIsHighlighted(true)}
              onMouseLeave={() => setIsHighlighted(false)}
            >
              <span
                className={`relative z-10 transition-colors duration-300 ${
                  isHighlighted ? "text-[#0d1117]" : "text-[#7ee787]" 
                }`}
              >
                Angelika Kyle
              </span>
              
              {/* The Background Highlight */}
              <motion.span
                className="absolute inset-0 bg-[#7ee787] rounded-[4px] z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHighlighted ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.span>
          </h1>

              <p className="text-gray-400 text-lg mb-8 max-w-xl">
                Full Stack Developer specializing in end-to-end system architecture and efficient problem-solving. Actively looking for a software engineering internship to build high-performance digital solutions.
              </p>

              <div className="flex items-center gap-4 mb-12">
                <motion.a
                href={resumeFile} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#7ee787] text-black font-medium rounded-lg hover:bg-[#6dd777] transition-colors flex items-center gap-2 w-fit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View CV
                <ArrowRight className="w-4 h-4" />
              </motion.a>

                <div className="flex items-center gap-3">
                  {[
                    { Icon: Github, href: "https://github.com/gelikadlcrz" },
                    { Icon: Linkedin, href: "https://linkedin.com/in/angelika-kyle-dela-cruz-57a720384/" },
                    { Icon: Mail, href: "mailto:2241338@slu.edu.ph" },
                  ].map(({ Icon, href }, index) => (
                    <motion.a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-[#7ee787] flex items-center justify-center hover:bg-[#7ee787] hover:text-black transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { number: "6+", label: "Years of Coding" },
                  { number: "30+", label: "Projects Completed" },
                  // { number: "5", label: "Projects Deployed" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className="text-4xl font-bold text-[#7ee787]">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Profile Image */}
            <motion.div
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative">
                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #7ee787, transparent, #7ee787)",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Inner circle with image */}
                <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden m-2 bg-gray-800">
                  <ImageWithFallback
                    src={profilePic}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative dots */}
                <div className="absolute -top-4 -right-4 w-24 h-24 grid grid-cols-5 gap-2 opacity-50">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 rounded-full bg-[#7ee787]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Works Preview Section */}
      <section id="works" className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl lg:text-6xl mb-4">
              <span className="text-[#7ee787]">#</span>projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Showcasing my latest projects and creative solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.slice(0, 3).map((project, index) => (
              <Link key={index} to={`/works/${project.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-[#1a1a24] rounded-xl overflow-hidden border border-white/5 hover:border-[#7ee787]/30 transition-colors">
                    <div className="relative h-56 overflow-hidden">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a24] to-transparent opacity-60" />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl mb-2">{project.title}</h3>
                      {project.timeline && (
                        <p className="text-[#7ee787]/80 text-xs mb-3 font-mono">
                          {project.timeline}
                        </p>
                      )}
                      <p className="text-gray-400 text-sm mb-4">
                        {project.shortDescription}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-[#7ee787]/10 text-[#7ee787] text-xs rounded-full border border-[#7ee787]/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center">
            <Link to="/works">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-[#7ee787] text-[#7ee787] rounded-lg hover:bg-[#7ee787] hover:text-black transition-colors flex items-center gap-2"
              >
                View All Projects
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl lg:text-6xl mb-4">
              <span className="text-[#7ee787]">#</span>about-me
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl">
              Hello, I'm a passionate developer dedicated to creating innovative
              digital experiences. I specialize in full-stack development with a
              focus on building scalable, user-friendly applications.
            </p>
          </motion.div>

          {/* Profile Cards */}
          <div className="mb-16">
            <h3 className="text-3xl mb-8">Short Profile</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {profileCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-[#1a1a24] to-[#0f0f16] p-6 rounded-xl border border-white/10 hover:border-[#7ee787]/30 transition-colors"
                >
                  <h4 className="text-[#7ee787] text-lg mb-2">{card.title}</h4>
                  <p className="text-white mb-1">{card.description}</p>
                  <p className="text-gray-500 text-sm">{card.details}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills Preview */}
          <div className="mb-12">
            <h3 className="text-3xl mb-8">
              <span className="text-[#7ee787]">#</span>skills
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    className="bg-[#1a1a24] p-6 rounded-xl border border-white/5 hover:border-white/20 transition-all"
                  >
                    <div
                      className="p-3 rounded-lg w-fit mb-4"
                      style={{ backgroundColor: `${skill.color}20` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: skill.color }} />
                    </div>
                    <h4 className="text-lg mb-3">{skill.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center">
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-[#7ee787] text-[#7ee787] rounded-lg hover:bg-[#7ee787] hover:text-black transition-colors flex items-center gap-2"
              >
                Learn More About Me
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl lg:text-6xl mb-4">
              <span className="text-[#7ee787]">#</span>contacts
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              I'm interested in freelance opportunities. However, if you have other
              request or question, don't hesitate to contact me
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Quick Contact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl mb-8">Get in Touch</h3>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "2241338@slu.edu.ph", href: "mailto:2241338@slu.edu.ph" },
                  { icon: Github, label: "GitHub", value: "github.com/gelikadlcrz", href: "https://github.com/gelikadlcrz" },
                  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/angelika-kyle-dela-cruz-57a720384", href: "https://linkedin.com/in/angelika-kyle-dela-cruz-57a720384/" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-4 p-4 bg-[#1a1a24] rounded-xl border border-white/5 hover:border-[#7ee787]/30 transition-all cursor-pointer"
                    >
                      <div className="p-3 bg-[#7ee787]/10 rounded-lg">
                        <Icon className="w-5 h-5 text-[#7ee787]" />
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">{item.label}</div>
                        <div className="text-white break-all">{item.value}</div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#1a1a24] p-8 rounded-xl border border-white/5">
                <h3 className="text-2xl mb-6">Message me here</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/10 rounded-lg focus:border-[#7ee787] focus:outline-none transition-colors text-white"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/10 rounded-lg focus:border-[#7ee787] focus:outline-none transition-colors text-white"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                      className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/10 rounded-lg focus:border-[#7ee787] focus:outline-none transition-colors text-white resize-none"
                      placeholder="Your message..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-3 bg-[#7ee787] text-black font-medium rounded-lg hover:bg-[#6dd777] transition-colors"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center mt-12">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-[#7ee787] text-[#7ee787] rounded-lg hover:bg-[#7ee787] hover:text-black transition-colors flex items-center gap-2"
              >
                View Full Contact Page
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}