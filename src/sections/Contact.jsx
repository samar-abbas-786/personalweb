import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import SectionReveal from "../components/SectionReveal";
import MagneticButton from "../components/MagneticButton";
import { personal, socials } from "../data/socials";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <p className="font-mono text-xs text-signal mb-3">$ ./send-message.sh</p>
          <h2 className="font-display text-3xl md:text-4xl text-paper mb-4">
            Let's build something.
          </h2>
          <p className="text-muted max-w-lg mb-16">
            Have a role, a project, or just a good backend problem? My inbox is
            open — I read everything myself.
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12">
          <SectionReveal delay={0.1}>
            <div className="space-y-6">
              <div>
                <p className="font-mono text-xs text-muted mb-1">Email</p>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-paper text-lg hover:text-signal transition-colors"
                  data-cursor-hover
                >
                  {personal.email}
                </a>
              </div>
              <div>
                <p className="font-mono text-xs text-muted mb-1">Location</p>
                <p className="text-paper text-lg">{personal.location}</p>
              </div>
              <div>
                <p className="font-mono text-xs text-muted mb-3">Elsewhere</p>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor-hover
                      aria-label={s.name}
                      className="w-11 h-11 flex items-center justify-center rounded-xl border border-line text-muted hover:text-signal hover:border-signal/40 transition-colors"
                    >
                      <s.icon size={17} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-mono text-xs text-muted block mb-2">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-surface/50 border border-line rounded-lg px-4 py-3 text-paper text-sm focus:outline-none focus:border-signal/60 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-muted block mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-surface/50 border border-line rounded-lg px-4 py-3 text-paper text-sm focus:outline-none focus:border-signal/60 transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div>
                <label className="font-mono text-xs text-muted block mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-surface/50 border border-line rounded-lg px-4 py-3 text-paper text-sm focus:outline-none focus:border-signal/60 transition-colors resize-none"
                  placeholder="What are we building?"
                />
              </div>
              <MagneticButton
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-signal text-ink font-mono text-sm font-medium"
              >
                Send message <Send size={14} />
              </MagneticButton>
            </form>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
