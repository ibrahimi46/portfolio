"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { ProjectCardProps } from "@/lib/types";

export function ProjectCard({
  project,
  index,
  onHover,
  onLeave,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group"
    >
      <div className="relative h-full overflow-hidden bg-zinc-900 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="relative p-6 flex flex-col flex-grow">
          <div className="absolute top-6 right-4">
            {project.featured && (
              <span className="inline-block px-2.5 py-0.5 text-xs font-medium bg-blue-500/10 text-blue-400 rounded border border-blue-500/20">
                Featured
              </span>
            )}
          </div>

          <h3 className="text-xl font-semibold text-white mb-4">
            {project.title}
          </h3>

          <p className="text-zinc-400 text-sm mb-4 leading-relaxed h-20 line-clamp-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs text-zinc-400 bg-zinc-800 rounded"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2 py-1 text-xs text-zinc-500 bg-zinc-800 rounded">
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          <div className="flex gap-2 mt-auto">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-zinc-300 border border-zinc-700 rounded hover:bg-zinc-800 transition-colors"
              >
                <FaGithub size={14} />
                Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm bg-white text-black rounded hover:bg-zinc-200 transition-colors font-medium"
              >
                <ExternalLink size={14} />
                Live
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
