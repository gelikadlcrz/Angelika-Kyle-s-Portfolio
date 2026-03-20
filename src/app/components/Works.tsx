import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { projects } from "../data/projects";

export function Works() {
  return (
    <div className="pt-32 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl lg:text-6xl mb-4">
            <span className="text-[#7ee787]">/</span>projects
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Showcasing my latest projects and creative solutions. Click on any project to learn more about the technical details and challenges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link key={index} to={`/works/${project.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div className="bg-[#1a1a24] rounded-xl overflow-hidden border border-white/5 hover:border-[#7ee787]/30 transition-colors h-full">
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a24] to-transparent opacity-60" />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#7ee787]/0 group-hover:bg-[#7ee787]/10 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white font-medium">
                        View Details →
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl mb-2 group-hover:text-[#7ee787] transition-colors">
                      {project.title}
                    </h3>
                    {project.timeline && (
                      <p className="text-[#7ee787]/80 text-xs mb-3 font-mono">
                        {project.timeline}
                      </p>
                    )}
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
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
      </div>
    </div>
  );
}
