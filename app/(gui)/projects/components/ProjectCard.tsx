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
      className="group relative h-full overflow-hidden"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      whileHover={{
        scale: 1.05,
        y: -8,
        transition: { duration: 0.3 },
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="relative h-full overflow-hidden bg-zinc-900 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex flex-col">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="relative p-6 flex flex-col flex-grow z-10">
          <div className="absolute top-6 right-4">
            {project.featured && (
              <motion.span
                className="inline-block px-2.5 py-0.5 text-xs font-medium bg-blue-500/10 text-blue-400 rounded border border-blue-500/20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
              >
                Featured
              </motion.span>
            )}
          </div>

          <motion.h3
            className="text-xl font-semibold text-white mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
          >
            {project.title}
          </motion.h3>

          <motion.p
            className="text-zinc-400 text-sm mb-4 leading-relaxed h-20 line-clamp-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
          >
            {project.description}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-2 mb-5"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 + 0.4 }}
          >
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
          </motion.div>

          <motion.div
            className="flex gap-2 mt-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 + 0.5 }}
          >
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
          </motion.div>
        </div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
          initial={false}
        />
      </div>
    </motion.div>
  );
}
