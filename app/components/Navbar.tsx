"use client";

import { Terminal } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between items-center h-20 px-8 z-50 backdrop-blur-sm">
      <div className="text-4xl font-bold cursor-pointer hover:opacity-80 transition-all duration-300">
        Anas
      </div>
      <div className="flex gap-4">
        <Link
          href="/projects"
          className="hover:opacity-80 transition-all duration-300"
        >
          Projects
        </Link>
        <Link
          href="/resume"
          className="hover:opacity-80 transition-all duration-300"
        >
          Resume
        </Link>
        <Link
          href="/contact"
          className="hover:opacity-80 transition-all duration-300"
        >
          Contact
        </Link>
        <Link
          href="/terminal"
          className="flex items-center gap-2 hover:opacity-80 transition-all duration-300"
        >
          <Terminal />
          Terminal
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
