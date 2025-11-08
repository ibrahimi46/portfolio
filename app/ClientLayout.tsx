"use client";
import { motion } from "framer-motion";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{ height: "100%" }}
    >
      {children}
    </motion.div>
  );
};

export default ClientLayout;
