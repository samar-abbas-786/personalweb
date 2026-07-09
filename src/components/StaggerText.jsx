import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: (stagger = 0.035) => ({
    transition: { staggerChildren: stagger },
  }),
};

const word = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const StaggerText = ({ text, className = "", as: Tag = "span", stagger }) => {
  const words = text.split(" ");
  return (
    <motion.span
      variants={container}
      custom={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`inline-block ${className}`}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-top mr-[0.28em]">
          <motion.span variants={word} className="inline-block">
            {w}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

export default StaggerText;
