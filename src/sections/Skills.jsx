import React from "react";
import { motion } from "framer-motion";
import SectionReveal from "../components/SectionReveal";
import { skillsData } from "../data/skills";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045 } },
};

const item = {
  hidden: { opacity: 0, y: 18, scale: 0.94 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-28 md:py-36 px-6 md:px-10 bg-surface/20">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <p className="font-mono text-xs text-signal mb-3">$ ps skills --active</p>
          <h2 className="font-display text-3xl md:text-4xl text-paper mb-16">
            The stack, running in production.
          </h2>
        </SectionReveal>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4"
        >
          {skillsData.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{ y: -6, borderColor: skill.color }}
              className="group relative flex flex-col items-center justify-center gap-3 rounded-xl border border-line bg-surface/50 py-6 px-3 transition-colors"
              data-cursor-hover
            >
              <skill.icon
                className="text-3xl transition-transform duration-300 group-hover:scale-110"
                style={{ color: skill.color }}
              />
              <span className="font-mono text-[11px] text-muted text-center leading-tight">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
