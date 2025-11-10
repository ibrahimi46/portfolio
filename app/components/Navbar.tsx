"use client";

import { Terminal } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between items-center h-20 px-8 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="text-4xl font-bold cursor-pointer hover:opacity-80 transition-all duration-300">
        Anas
      </div>
      <div className="flex gap-4">
        <Link href="/" className="hover:opacity-80 transition-all duration-300">
          Projects
        </Link>
        <Link
          href="/projects"
          className="hover:opacity-80 transition-all duration-300"
        >
          Resume
        </Link>
        <Link
          href="/resume"
          className="hover:opacity-80 transition-all duration-300"
        >
          Contact
        </Link>
        <Link
          href="/"
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
