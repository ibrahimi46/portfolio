"use client";
import { motion } from "framer-motion";

import { Mail, MapPin } from "lucide-react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
      <p className="text-white/70 mb-8 max-w-md">
        I&apos;m always open to discussing new projects, creative ideas or
        opportunities to be part of your vision.
      </p>

      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="bg-white/10 p-3 rounded-full mr-4">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-medium">Email</h3>
            <a
              href="mailto:anasibrahimi4664@gmail.com"
              className="text-white/70 hover:text-white transition-colors"
            >
              anasibrahimi4664@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-white/10 p-3 rounded-full mr-4">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-medium">Location</h3>
            <p className="text-white/70">Jeddah, Saudi Arabia</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Connect with me</h3>
        <div className="flex space-x-4">
          <a
            href="https://github.asdfsfd"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
          >
            <FaGithub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="httpsdasfasdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
          >
            <FaLinkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="mailto:anasibrahimi4664@gmail.com"
            className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
          >
            <FaEnvelope className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
