import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import MagneticButton from "./MagneticButton";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href) => {
    setOpen(false);

    setTimeout(() => {
      const element = document.querySelector(href);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 150); // same as AnimatePresence duration
  };
  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-ink/80 backdrop-blur-md border-b border-line"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleClick("#home");
            }}
            className="font-mono text-sm text-paper tracking-tight"
            data-cursor-hover
          >
            <span className="text-signal">~/</span>samar-abbas
          </a>

          <ul className="hidden md:flex items-center gap-8 font-mono text-[13px]">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleClick(item.href)}
                  className="relative text-muted hover:text-paper transition-colors group"
                  data-cursor-hover
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-signal group-hover:w-full transition-all duration-300" />
                </button>
              </li>
            ))}
          </ul>

          <MagneticButton
            onClick={() => handleClick("#contact")}
            className="hidden md:inline-flex items-center gap-2 font-mono text-[13px] px-4 py-2 rounded-full border border-signal/40 text-signal hover:bg-signal/10 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
            Let's talk
          </MagneticButton>

          <button
            className="md:hidden text-paper"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed top-16 inset-x-0 z-40 bg-ink border-b border-line md:hidden overflow-hidden"
          >
            <ul className="flex flex-col p-6 gap-5 font-mono text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleClick(item.href)}
                    className="text-muted hover:text-signal transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
