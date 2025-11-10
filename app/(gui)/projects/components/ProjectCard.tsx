"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { ProjectCardProps } from "@/lib/types";

export function ProjectCard({
  project,
  index,
  isHovered,
  onHover,
  onLeave,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="relative overflow-hidden rounded-lg aspect-[4/3] border-[0.05px] border-white/20">
        <motion.div
          className="absolute inset-0"
          initial={{}}
          transition={
            isHovered
              ? {
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }
              : { duration: 0.3 }
          }
        />

        <div className="absolute  inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {project.featured && (
          <span className="absolute cursor-pointer top-4 left-4 px-3 py-1 text-xs font-medium bg-white text-black rounded-full">
            Featured
          </span>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-white/80 text-sm line-clamp-2 mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs cursor-pointer border border-white/20 rounded-full bg-white/10 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2 py-1 text-xs border border-white/20 rounded-full bg-white/10 backdrop-blur-sm">
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-2 text-sm  rounded-md hover:opacity-80 transition-colors"
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
                className="flex items-center gap-1 px-3 py-2 text-sm bg-white text-black rounded-md hover:opacity-80 font-medium transition-colors"
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
