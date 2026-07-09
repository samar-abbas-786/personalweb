import React, { useMemo, useState } from "react";
import SectionReveal from "../components/SectionReveal";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const FILTERS = ["All", "Featured", "AI", "Full Stack"];

const matchesFilter = (project, filter) => {
  if (filter === "All") return true;
  if (filter === "Featured") return !!project.featured;
  if (filter === "AI")
    return project.techStack.some((t) => /gemini|ai|claude/i.test(t));
  if (filter === "Full Stack")
    return (
      project.techStack.some((t) => /react|next/i.test(t)) &&
      project.techStack.some((t) => /node|express|spring|java/i.test(t))
    );
  return true;
};

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const filtered = useMemo(
    () => projects.filter((p) => matchesFilter(p, filter)),
    [filter]
  );

  return (
    <section id="projects" className="relative py-28 md:py-36 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <p className="font-mono text-xs text-signal mb-3">$ git log --projects</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-paper">
              Things I've shipped.
            </h2>
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  data-cursor-hover
                  className={`font-mono text-xs px-3.5 py-2 rounded-full border transition-colors ${
                    filter === f
                      ? "border-signal text-signal bg-signal/10"
                      : "border-line text-muted hover:text-paper"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
