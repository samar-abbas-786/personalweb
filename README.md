# Samar Abbas — Portfolio

A from-scratch, premium portfolio built with React 19, Vite, Tailwind CSS, Framer Motion, and React Three Fiber.

## Design direction

The visual identity is a "systems engineer's terminal," not a generic gradient hero:
- **Palette**: deep graphite-navy (`#0A0D14`) background, teal-cyan signal accent (`#4FD1C5`), copper accent (`#F2A65A`) — chosen to read like a build console at dusk, not the default black+neon or cream+serif looks.
- **Type**: Space Grotesk (display), Inter (body), JetBrains Mono (labels, eyebrows, code chips) — mono is used functionally for section eyebrows like `$ ls experience/`, `$ ps skills --active`, mirroring how a backend engineer actually works.
- **Signature element**: the hero's "build console" terminal panel (typed boot lines) + a 3D dependency-graph scene (`src/three/BuildGraph.jsx`) representing services (`api`, `db`, `auth`, `ai`, `ui`, `core`) connected by edges — a stand-in for his actual stack, not decorative particles.

## Getting started

```bash
npm install --legacy-peer-deps   # react-helmet-async's peer-dep metadata lags React 19; the package itself works fine
npm run dev                      # start local dev server
npm run build                    # production build
```

## Things to personalize before shipping

1. **`src/data/socials.js`** — swap in your real LinkedIn, X/Twitter, and email. GitHub is already filled from your provided links.
2. **`public/resume.pdf`** — drop your resume PDF here; the hero's "Resume" button already links to `/resume.pdf`.
3. **Project screenshots** — no image assets were provided with this build, so project cards use a generated code-pattern header instead of screenshots (see `src/data/projects.js` top comment and `src/components/ProjectCard.jsx`). Drop real images into `src/assets/images` and swap in an `<img>` if you want thumbnails back.
4. **Contact form** — currently opens the visitor's email client via `mailto:` (no backend). Wire it to a form service (Formspree, Resend, etc.) if you want submissions to land somewhere without opening Mail.

## Architecture

```
src/
  components/    # Navbar, Footer, Loader, CustomCursor, MagneticButton, SectionReveal, StaggerText, ProjectCard
  sections/      # Hero, About, Experience, Skills, Projects, Education, Contact
  three/         # HeroScene (Canvas) + BuildGraph (the 3D signature element)
  data/          # experience.js, skills.js, projects.js, education.js, socials.js
  pages/         # Home.jsx, NotFound.jsx
  context/       # ScrollContext.jsx
```

## Performance notes

- The 3D scene is capped at 6 nodes / 7 edges with `dpr={[1, 1.6]}` — tasteful, not GPU-heavy.
- Lenis smooth scroll runs on a single `requestAnimationFrame` loop.
- `prefers-reduced-motion` is respected globally via `index.css`.
- Custom cursor auto-disables on touch/coarse-pointer devices.
