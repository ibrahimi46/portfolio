"use client";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDownCircle } from "lucide-react";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import SkillCard from "@/components/ui/SkillCard";
import { SiteFooter } from "@/components/ui/SiteFooter";

const skills = [
  {
    title: "Frontend Development",
    desc: "React, Next.js, TypeScript, Tailwind CSS",
  },
  {
    title: "Backend Development",
    desc: "Node.js, Express, MongoDB, PostgreSQL",
  },
  {
    title: "Machine Learning",
    desc: "Scikit Learn, Seaborn, Pandas, Numpy, Matplotlib",
  },
];

const Gui = () => {
  return (
    <div className="relative min-h-screen text-white bg-black font-sans">
      <Navbar />
      <main>
        {/** Herro part */}
        <section className="min-h-screen flex flex-col justify-center relative z-10 px-6 md:px-12">
          <motion.div className="max-w-4xl mx-auto">
            <motion.div>
              <motion.p
                className="text-xl md:text-2xl font-medium text-white/80"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                data-cursor-text
              >
                Hi, I am
              </motion.p>
              <motion.h1
                className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                data-cursor-text
              >
                Anas Ibrahimi
              </motion.h1>

              <div className="h-2 md:h-4"></div>

              <motion.div
                className="inline-block relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-1 h-20 bg-purple-500"></span>
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-purple-300 pl-2 mb-8 uppercase"
                  data-cursor-text
                >
                  Full Stack Developer
                  <br />& AI Enthusiast
                </h2>
              </motion.div>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-white/70 max-w-2xl mb-8 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              data-cursor-text
            >
              I specialise in full-stack development and passionate about AI
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href={""}
                className="border border-white/20 w-fit rounded-full flex items-center px-6 py-2 text-white bg-black font-semibold text-sm hover:bg-white hover:text-black transition-all duration-300"
              >
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <ArrowDownCircle className="h-6 w-6 animate-bounce cursor-pointer hover:opacity-80" />
          </motion.div>
        </section>

        {/** Featured section */}
        <section className="min-h-[calc(100vh-12px)] bg-gray-600 flex flex-col justify-center px-6 md:px-12 bg-gradient-to-b from-black to-purple-500">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 md:gap-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              data-cursor-text
            >
              Featured Skills
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {skills.map((skill, index) => (
                <SkillCard
                  key={index}
                  title={skill.title}
                  description={skill.desc}
                />
              ))}
            </div>

            <motion.div
              className="flex justify-center items-center mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link
                href="/resume"
                className="border border-white/20 w-fit rounded-full flex items-center px-6 py-2 text-white bg-black font-semibold text-sm hover:bg-white hover:text-black transition-all duration-300"
              >
                View Full Resume <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/** Footer */}

        <SiteFooter />
      </main>
    </div>
  );
};

export default Gui;
