import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";

const accentMap = {
  signal: {
    text: "text-signal",
    border: "hover:border-signal/50",
    bg: "bg-signal",
  },
  copper: {
    text: "text-copper",
    border: "hover:border-copper/50",
    bg: "bg-copper",
  },
};

const ProjectCard = ({ project }) => {
  const ref = useRef(null);
  const accent = accentMap[project.accent] || accentMap.signal;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`relative rounded-2xl border border-line bg-surface/40 overflow-hidden group transition-colors ${accent.border} h-full flex flex-col`}
      >
        {/* generated header pattern standing in for a screenshot */}
        {project.img ? (
          <div className="relative h-56 border-b border-line overflow-hidden">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Title */}
            <div className="absolute bottom-4 left-5">
              <h3 className="font-display text-2xl text-white">
                {project.title}
              </h3>
            </div>

            {project.featured && (
              <span className="absolute top-3 right-3 flex items-center gap-1 font-mono text-[10px] text-copper bg-ink/70 px-2 py-1 rounded-full border border-copper/30">
                <Star size={10} fill="currentColor" />
                featured
              </span>
            )}
          </div>
        ) : (
          <div className="relative h-36 border-b border-line bg-surface-2 overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-40" />

            <div
              className={`absolute -right-8 -top-8 w-32 h-32 rounded-full blur-2xl opacity-30 ${accent.bg}`}
            />

            <div className="relative h-full flex items-center px-6">
              <span className="font-display text-2xl text-paper/90">
                {project.title}
              </span>
            </div>

            {project.featured && (
              <span className="absolute top-3 right-3 flex items-center gap-1 font-mono text-[10px] text-copper bg-ink/60 px-2 py-1 rounded-full border border-copper/30">
                <Star size={10} fill="currentColor" />
                featured
              </span>
            )}
          </div>
        )}

        <div
          className="p-6 flex flex-col flex-1"
          style={{ transform: "translateZ(30px)" }}
        >
          <p className={`font-mono text-xs mb-2 ${accent.text}`}>
            {project.tagline}
          </p>
          <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.techStack.slice(0, 5).map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] px-2 py-1 rounded bg-surface-2 text-muted border border-line"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-line">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                className={`inline-flex items-center gap-1.5 text-xs font-mono ${accent.text} hover:gap-2.5 transition-all`}
              >
                Live <ExternalLink size={12} />
              </a>
            )}
            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                className="inline-flex items-center gap-1.5 text-xs font-mono text-muted hover:text-paper transition-colors"
              >
                Code <Github size={12} />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
