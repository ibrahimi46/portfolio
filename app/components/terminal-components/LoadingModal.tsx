"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingModalProps {
  onComplete: () => void;
}

export default function LoadingModal({ onComplete }: LoadingModalProps) {
  const [progress, setProgress] = useState(0);
  const duration = 2500;

  useEffect(() => {
    const start = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const percent = Math.min((elapsed / duration) * 100, 100);
      setProgress(percent);

      if (percent >= 100) {
        clearInterval(interval);
        setTimeout(onComplete, 200);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-md"
      >
        <div className="relative h-full overflow-hidden bg-zinc-900 rounded-lg border border-zinc-800">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="relative p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-terminal-text mb-6 text-center">
              Loading<span className="animate-pulse">...</span>
            </h3>

            <div className="relative h-2 bg-zinc-800 rounded-full overflow-hidden border border-zinc-700">
              <motion.div
                className="absolute inset-y-0 left-0 bg-blue-500"
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.1 }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
