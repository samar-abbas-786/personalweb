import React from "react";
import { motion } from "framer-motion";

const SectionReveal = ({
  children,
  className = "",
  delay = 0,
  y = 28,
  once = true,
  amount = 0.2,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SectionReveal;
