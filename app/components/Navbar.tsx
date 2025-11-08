"use client";
import { Monitor } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="flex  justify-center fixed top-6 left-1/2 -translate-x-1/2 w-[90vw] lg:w-[80vw] max-w-4xl">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex justify-between items-center max-w-5xl
     w-full rounded-full px-3 py-2
     border-[0.5px] border-light/20 bg-black/50 backdrop-blur-sm
     text-light backdrop-filter z-50
     "
      >
        <motion.div
          className="font-mono text-md cursor-pointer
      hover:text-[17px] transition-all duration-500 ease-in-out
      "
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, ease: "easeOut" }}
        >
          $ibrahimi@portfolio
        </motion.div>
        <div>
          <motion.div
            className="flex items-center gap-2 px-4 py-[2px] rounded-full border-[0.5px] border-light/20 cursor-pointer
        hover:border-light/30 transition-all duration-300 ease-in-out
        "
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, ease: "easeOut" }}
          >
            {/* <Terminal /> */}
            <Monitor className="h-4 w-4" />
            <span>GUI</span>
          </motion.div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
