"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export function ResumeHeader() {
  return (
    <div className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-2">Anas Ibrahimi</h2>
        <h3 className="text-xl text-white/70 mb-4">
          Full Stack Developer & AI Enthusiast
        </h3>
        <p className="text-white/70 mb-6 max-w-2xl">
          A passionate Full Stack Developer with hands-on experience in building
          modern web applications. Skilled in React, Next.js, and TypeScript,
          with additional exposure to Machine Learning and AI. Focused on
          writing clean, maintainable code and creating responsive,
          user-friendly interfaces. Eager to contribute and grow in dynamic,
          collaborative environments.
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center">
            <span className="text-white/50 mr-2">Email:</span>
            <a
              href="mailto:anasibrahimi4664@gmail.com"
              className="hover:text-white/90 transition-colors"
            >
              anasibrahimi4664@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <span className="text-white/50 mr-2">Location:</span>
            <span>Jeddah, Saudi Arabia</span>
          </div>
          <div className="flex items-center">
            <span className="text-white/50 mr-2">LinkedIn:</span>
            <a
              href="https://linkedin.com/inadsf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/90 transition-colors inline-flex items-center"
            >
              LinkedIn
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
