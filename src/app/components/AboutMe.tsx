import { motion } from "motion/react";
import {
  Code2,
  Database,
  Palette,
  Server,
  BookOpen,
  TrendingUp,
  Layout,
  Binary,
} from "lucide-react";

const profileCards = [
  {
    title: "Education",
    description: "Bachelor's in Computer Science",
    details: "University Name, 2018-2022",
  },
  {
    title: "Experience",
    description: "5+ Years in Web Development",
    details: "Full-Stack & Frontend Specialist",
  },
  {
    title: "Projects",
    description: "50+ Completed Projects",
    details: "Web Apps, Mobile & Enterprise",
  },
  {
    title: "Certifications",
    description: "AWS Certified Developer",
    details: "Multiple Industry Certifications",
  },
];

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building responsive web interfaces and MVC-compliant desktop toolkits without over-relying on heavy frameworks.",
    icon: Code2,
    color: "#7ee787",
    technologies: ["JavaScript", "HTML5/CSS3", "React", "JavaFX & FXML"],
  },
  {
    title: "Backend Development",
    description: "Developing robust server-side logic, modular APIs, and distributed client-server architectures.",
    icon: Server,
    color: "#79c0ff",
    technologies: ["Node.js & Express", "PHP", "Java (RMI & Sockets)"],
  },
  {
    title: "Programming Languages",
    description: "Proficient across multiple paradigms, enabling effective algorithmic implementation and data manipulation.",
    icon: Binary,
    color: "#d2a8ff",
    technologies: ["Java", "JavaScript", "PHP", "Python"],
  },
  {
    title: "Core Computer Science",
    description: "Strong foundation in software architecture, concurrency, relational modeling, and object-oriented principles.",
    icon: BookOpen,
    color: "#ffa657",
    technologies: ["System Design", "Multithreading", "OOP & MVC", "UML & ERD"],
  },
  {
    title: "Natural Language Processing",
    description: "Engineering specialized syntax parsers, morphological analysis, and rule-based translation systems.",
    icon: BookOpen,
    color: "#f778ba",
    technologies: ["NLP", "CFG Parsing", "POS Tagging", "RBMT"],
  },
  {
    title: "Database Management",
    description: "Designing complex relational schemas and managing both local and cloud-hosted database environments.",
    icon: Database,
    color: "#56d364",
    technologies: ["MySQL", "MariaDB", "Aiven Cloud SQL"],
  },
  {
    title: "Tools & Leadership",
    description: "Leading Agile teams, managing CI/CD pipelines, and authoring formal technical and academic documentation.",
    icon: Layout,
    color: "#ff7b72",
    technologies: ["GitLab/Git", "Maven/Gradle", "Project Lead", "Tech Writing"],
  },
   {
    title: "UI/UX Design",
    description: "Designing user-centric interfaces that are intuitive, visually appealing, and easy to navigate.",
    icon: Layout,
    color: "#f778ba",
    technologies: ["Figma", "Prototyping", "User Research"],
  },
   {
    title: "Personal Development",
    description: "Committed to continuous learning and personal growth to excel in both professional and collaborative environments.",
    icon: TrendingUp,
    color: "#ff7b72",
    technologies: ["Leadership", "Communication", "Adaptability", "Problem-Solving"],
  },
];
 

export function AboutMe() {
  return (
    <div className="pt-32 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl lg:text-6xl mb-4">
            <span className="text-[#7ee787]">/</span>about-me
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            Hello, I'm a passionate developer dedicated to creating innovative digital
            experiences. I specialize in full-stack development with a focus on building
            scalable, user-friendly applications.
          </p>
        </motion.div>

        {/* Profile Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl mb-8">Short Profile</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {profileCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-[#1a1a24] to-[#0f0f16] p-6 rounded-xl border border-white/10 hover:border-[#7ee787]/30 transition-colors"
              >
                <h3 className="text-[#7ee787] text-lg mb-2">{card.title}</h3>
                <p className="text-white mb-1">{card.description}</p>
                <p className="text-gray-500 text-sm">{card.details}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl mb-8">
            <span className="text-[#7ee787]">#</span>skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-[#1a1a24] p-6 rounded-xl border border-white/5 hover:border-white/20 transition-all group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="p-3 rounded-lg shrink-0"
                      style={{ backgroundColor: `${skill.color}20` }}
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{ color: skill.color }}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg mb-1">{skill.title}</h3>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {skill.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/5 text-gray-300 text-xs rounded-md border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
