"use client";

import { motion } from "framer-motion";

interface SkillCardProps {
  title: string;
  description: string;
  index?: number;
}

const SkillCard = ({ title, description, index = 0 }: SkillCardProps) => {
  return (
    <motion.div
      className="p-4 rounded-xl border border-white/10 backdrop-blur-sm hover:border-white/30 transition-all cursor-pointer group relative overflow-hidden"
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
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />

      <div className="relative z-10">
        <motion.h1
          className="text-md sm:text-lg md:text-xl font-semibold mb-2 text-white"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-white/70 text-sm"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
        >
          {description}
        </motion.p>
      </div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
        initial={false}
      />
    </motion.div>
  );
};

export default SkillCard;
