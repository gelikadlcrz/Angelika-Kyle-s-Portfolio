import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  Code2,
  Database,
  Monitor,
  Lightbulb,
  Calendar,
} from "lucide-react";
import { getProjectById } from "../data/projects";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProjectDetail() {
  const { id } = useParams();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Project Not Found</h1>
          <Link to="/works">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#7ee787] text-black rounded-lg hover:bg-[#6dd777] transition-colors"
            >
              Back to Projects
            </motion.button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/works"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#7ee787] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <h1 className="text-4xl lg:text-5xl mb-4">{project.title}</h1>
              
              {/* Grouping Role and Timeline together */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-2">
                {project.role && (
                  <p className="text-xl text-[#7ee787]">{project.role}</p>
                )}
                
                {/* Added Timeline rendering here */}
                {project.timeline && (
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-5 h-5" />
                    <span className="font-medium">{project.timeline}</span>
                  </div>
                )}
              </div>
            </div>
            {project.repository && (
              <motion.a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[#7ee787] text-black rounded-lg hover:bg-[#6dd777] transition-colors flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                View Repository
              </motion.a>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#7ee787]/10 text-[#7ee787] rounded-full border border-[#7ee787]/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Hero Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden border border-white/10">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Project Description */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-3xl mb-6 flex items-center gap-3">
            <span className="text-[#7ee787]">#</span>
            Project Description
          </h2>
          <div className="bg-[#1a1a24] p-8 rounded-xl border border-white/5">
            <p className="text-gray-300 text-lg leading-relaxed">
              {project.fullDescription}
            </p>
          </div>
        </motion.section>

        {/* My Role & Contributions */}
        {project.contributions && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl mb-6 flex items-center gap-3">
              <span className="text-[#7ee787]">#</span>
              My Role & Contributions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.contributions.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  className="bg-gradient-to-br from-[#1a1a24] to-[#0f0f16] p-6 rounded-xl border border-white/5 hover:border-[#7ee787]/30 transition-colors"
                >
                  <h3 className="text-xl text-[#7ee787] mb-4 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-[#7ee787] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Technical Details */}
        {project.technicalDetails && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-3xl mb-6 flex items-center gap-3">
              <span className="text-[#7ee787]">#</span>
              Technical Details & Architecture
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.technicalDetails.frontend && (
                <div className="bg-[#1a1a24] p-6 rounded-xl border border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-[#7ee787]/10 rounded-lg">
                      <Monitor className="w-6 h-6 text-[#7ee787]" />
                    </div>
                    <h3 className="text-xl">Frontend</h3>
                  </div>
                  <p className="text-gray-300">{project.technicalDetails.frontend}</p>
                </div>
              )}

              {project.technicalDetails.backend && (
                <div className="bg-[#1a1a24] p-6 rounded-xl border border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-[#79c0ff]/10 rounded-lg">
                      <Code2 className="w-6 h-6 text-[#79c0ff]" />
                    </div>
                    <h3 className="text-xl">Backend</h3>
                  </div>
                  <p className="text-gray-300">{project.technicalDetails.backend}</p>
                </div>
              )}

              {project.technicalDetails.database && (
                <div className="bg-[#1a1a24] p-6 rounded-xl border border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-[#56d364]/10 rounded-lg">
                      <Database className="w-6 h-6 text-[#56d364]" />
                    </div>
                    <h3 className="text-xl">Database</h3>
                  </div>
                  <p className="text-gray-300">{project.technicalDetails.database}</p>
                </div>
              )}

              {project.technicalDetails.additional &&
                project.technicalDetails.additional.length > 0 && (
                  <div className="bg-[#1a1a24] p-6 rounded-xl border border-white/5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-[#d2a8ff]/10 rounded-lg">
                        <ExternalLink className="w-6 h-6 text-[#d2a8ff]" />
                      </div>
                      <h3 className="text-xl">Additional Tools</h3>
                    </div>
                    <ul className="space-y-2">
                      {project.technicalDetails.additional.map((tool, i) => (
                        <li key={i} className="text-gray-300 flex items-start gap-2">
                          <span className="text-[#7ee787]">•</span>
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
          </motion.section>
        )}

        {/* Outcomes */}
        {project.outcomes && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl mb-6 flex items-center gap-3">
              <span className="text-[#7ee787]">#</span>
              Outcomes
            </h2>
            <div className="bg-gradient-to-br from-[#1a1a24] to-[#0f0f16] p-8 rounded-xl border border-white/5">
              <ul className="grid md:grid-cols-2 gap-4">
                {project.outcomes.map((outcome, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#7ee787] flex-shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.section>
        )}

        {/* Skills Highlighted */}
        {project.skills && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl mb-6 flex items-center gap-3">
              <span className="text-[#7ee787]">#</span>
              Skills Highlighted
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.skills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-[#7ee787]/10 text-[#7ee787] rounded-lg border border-[#7ee787]/20 hover:bg-[#7ee787]/20 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.section>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-[#7ee787]/10 to-[#79c0ff]/10 p-8 rounded-xl border border-[#7ee787]/20 text-center"
        >
          <h3 className="text-2xl mb-4">Interested in this project?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            I'd love to discuss the technical details and challenges I faced while
            building this project. Feel free to reach out!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {project.repository && (
              <motion.a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[#7ee787] text-black rounded-lg hover:bg-[#6dd777] transition-colors flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                View Code
              </motion.a>
            )}
            
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-[#7ee787] text-[#7ee787] rounded-lg hover:bg-[#7ee787] hover:text-black transition-colors"
              >
                Get in Touch
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
