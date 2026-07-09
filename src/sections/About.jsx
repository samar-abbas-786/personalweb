import React from "react";
import { motion } from "framer-motion";
import SectionReveal from "../components/SectionReveal";
import { personal } from "../data/socials";

const STATS = [
  { value: "12+", label: "Projects shipped" },
  { value: "280+", label: "DSA Problems Solved" },
  { value: "4", label: "internships" },
  { value: "20+", label: "Tools in the stack" },
];

const About = () => {
  return (
    <section id="about" className="relative py-28 md:py-36 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <p className="font-mono text-xs text-signal mb-3">$ cat about.md</p>
        </SectionReveal>

        <div className="grid md:grid-cols-[1.3fr_1fr] gap-14 md:gap-20">
          <div>
            <SectionReveal>
              <h2 className="font-display text-3xl md:text-4xl text-paper mb-8 leading-snug">
                Engineer first, designer of{" "}
                <span className="text-gradient">good systems</span> always.
              </h2>
            </SectionReveal>

            {personal.bio.map((para, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <p className="text-muted leading-relaxed mb-5 text-[15px] md:text-base">
                  {para}
                </p>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={0.15}>
            <div className="rounded-2xl border border-line bg-surface/40 p-7 h-fit">
              <p className="font-mono text-xs text-muted mb-6">
                // quick stats
              </p>
              <div className="space-y-6">
                {STATS.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                    className="flex items-baseline justify-between border-b border-line/60 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="font-display text-3xl text-signal">
                      {s.value}
                    </span>
                    <span className="font-mono text-xs text-muted text-right">
                      {s.label}
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="h-px bg-line my-6" />
              <p className="font-mono text-xs text-muted">
                {personal.location}
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
