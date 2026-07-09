import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileDown } from "lucide-react";
import HeroScene from "../three/HeroScene";
import StaggerText from "../components/StaggerText";
import MagneticButton from "../components/MagneticButton";
import { personal } from "../data/socials";

const CONSOLE_LINES = [
  { prompt: "whoami", output: "samar-abbas — software engineer" },
  {
    prompt: "cat focus.txt",
    output: "backend systems · full stack · applied AI",
  },
  { prompt: "status --build", output: "✓ passing · open to opportunities" },
];

const TerminalPanel = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timers = CONSOLE_LINES.map((_, i) =>
      setTimeout(
        () => setVisibleLines((v) => Math.max(v, i + 1)),
        900 + i * 650,
      ),
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full rounded-xl border border-line bg-surface/70 backdrop-blur-sm shadow-2xl overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-line bg-surface-2">
        <span className="w-2.5 h-2.5 rounded-full bg-danger/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-copper/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-signal/70" />
        <span className="ml-2 text-[11px] font-mono text-muted">
          console — zsh
        </span>
      </div>
      <div className="p-5 font-mono text-[13px] min-h-[150px]">
        {CONSOLE_LINES.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="mb-2.5">
            <p className="text-signal">
              <span className="text-muted">➜ ~ </span>
              {line.prompt}
            </p>
            <p className="text-paper/80 pl-4">{line.output}</p>
          </div>
        ))}
        {visibleLines < CONSOLE_LINES.length && (
          <span className="inline-block w-2 h-3.5 bg-signal animate-blink" />
        )}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-grid-pattern"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/95 to-ink pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-signal/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 w-full grid md:grid-cols-2 gap-14 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-mono text-xs md:text-sm text-signal mb-5 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
            $ available for Summer/Full-time 2026
          </motion.p>

          <h1 className="font-display font-medium text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-paper mb-6">
            <StaggerText text="Building software" />
            <br />
            <StaggerText
              text="that makes"
              className="text-gradient"
              stagger={0.04}
            />
            <br />
            <StaggerText text="an impact." stagger={0.05} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-muted text-base md:text-lg max-w-md mb-9 leading-relaxed"
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
            className="flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              as="a"
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-signal text-ink font-mono text-sm font-medium"
            >
              View projects
            </MagneticButton>
            <MagneticButton
              as="a"
              href={personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-line text-paper font-mono text-sm hover:border-copper/50 hover:text-copper transition-colors"
            >
              <FileDown size={15} /> Resume
            </MagneticButton>
          </motion.div>
        </div>

        <div className="relative">
          <div className="relative h-[280px] sm:h-[340px] mb-6 rounded-2xl border border-line/60 bg-surface/20">
            <HeroScene />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
          >
            <TerminalPanel />
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={() =>
          document
            .querySelector("#about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-signal transition-colors"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  );
};

export default Hero;
