import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionReveal from "../components/SectionReveal";
import { educationData } from "../data/education";

const Education = () => {
  return (
    <section id="education" className="relative py-28 md:py-36 px-6 md:px-10 bg-surface/20">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <p className="font-mono text-xs text-signal mb-3">$ curl education.json</p>
          <h2 className="font-display text-3xl md:text-4xl text-paper mb-16">
            Formal training.
          </h2>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {educationData.map((edu, i) => (
            <motion.div
              key={edu.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-line bg-surface/40 p-7 hover:border-copper/40 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-copper/10 border border-copper/30 flex items-center justify-center mb-5 text-copper">
                <GraduationCap size={20} />
              </div>
              <p className="font-mono text-xs text-copper mb-2">{edu.duration}</p>
              <h3 className="font-display text-xl text-paper mb-1">{edu.title}</h3>
              <p className="text-signal text-sm mb-1">{edu.field}</p>
              <p className="text-paper/70 text-sm mb-4">{edu.college}</p>
              <p className="text-muted text-sm leading-relaxed">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
