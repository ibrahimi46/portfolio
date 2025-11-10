// app/projects/page.tsx
"use client";

import { useState } from "react";
import { projects } from "@/lib/data/projects";
import { ProjectCard } from "./components/ProjectCard";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const ProjectsPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <Link
          href="/"
          className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-white/70 max-w-2xl mb-12">
          A selection of my recent work...
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
