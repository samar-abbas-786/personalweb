import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, MapPin } from "lucide-react";
import SectionReveal from "../components/SectionReveal";
import { experiences } from "../data/experience";

const ExperienceCard = ({ exp, index }) => {
  const isEven = index % 2 === 0;
  return (
    <div className="relative pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-10 mb-14 last:mb-0">
      {/* timeline node */}
      <span className="absolute left-[13px] md:left-1/2 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-signal ring-4 ring-signal/15 z-10" />

      <div className={`hidden md:block ${isEven ? "" : "order-2"}`} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`rounded-2xl border border-line bg-surface/40 p-6 hover:border-signal/40 transition-colors group ${
          isEven ? "md:pr-4" : "md:pl-4 order-1"
        }`}
      >
        {exp.duration && (
          <p className="font-mono text-xs text-copper mb-2">{exp.duration}</p>
        )}
        <h3 className="font-display text-xl text-paper mb-1">{exp.title}</h3>
        <p className="text-signal text-sm mb-1">{exp.company}</p>
        {exp.location && (
          <p className="flex items-center gap-1.5 text-xs text-muted mb-4">
            <MapPin size={12} /> {exp.location}
          </p>
        )}
        <p className="text-muted text-sm leading-relaxed mb-3">{exp.description}</p>
        <p className="text-paper/70 text-sm leading-relaxed mb-4 italic">
          {exp.learnings}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {exp.techStack.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-surface-2 text-muted border border-line"
            >
              {t}
            </span>
          ))}
        </div>
        {(exp.projectLink || exp.mentorLink) && (
          <a
            href={exp.projectLink || exp.mentorLink}
            target="_blank"
            rel="noreferrer"
            data-cursor-hover
            className="inline-flex items-center gap-1.5 text-signal text-xs font-mono group-hover:gap-2.5 transition-all"
          >
            {exp.projectLink ? "View project" : "Mentor profile"} <ExternalLink size={12} />
          </a>
        )}
      </motion.div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="relative py-28 md:py-36 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <p className="font-mono text-xs text-signal mb-3">$ ls experience/</p>
          <h2 className="font-display text-3xl md:text-4xl text-paper mb-16">
            Where the work happened.
          </h2>
        </SectionReveal>

        <div className="relative">
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-line md:-translate-x-1/2" />
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
