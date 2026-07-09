import React from "react";
import { ArrowUp } from "lucide-react";
import { socials, personal } from "../data/socials";
import MagneticButton from "./MagneticButton";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line bg-surface/40">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="font-mono text-xs text-signal mb-2">$ echo $STATUS</p>
            <h3 className="font-display text-2xl md:text-3xl text-paper">
              Open to frontend, backend & full-stack roles.
            </h3>
          </div>
          <MagneticButton
            as="a"
            href={`mailto:${personal.email}`}
            className="inline-flex w-fit items-center gap-2 font-mono text-sm px-5 py-3 rounded-full bg-signal text-ink font-medium"
          >
            Say hello →
          </MagneticButton>
        </div>

        <div className="h-px bg-line my-10" />

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6">
          <p className="font-mono text-xs text-muted">
            Made with ❤️ by {personal.name} © {year} .
          </p>

          <div className="flex items-center gap-5">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                data-cursor-hover
                className="text-muted hover:text-signal transition-colors text-lg"
              >
                <s.icon />
              </a>
            ))}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              data-cursor-hover
              className="ml-2 p-2.5 rounded-full border border-line text-muted hover:text-signal hover:border-signal/50 transition-colors"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
