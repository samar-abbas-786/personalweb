/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0D14",
        surface: "#10141F",
        "surface-2": "#161B29",
        line: "#232938",
        paper: "#E7E9F0",
        muted: "#7B8399",
        signal: "#4FD1C5",
        "signal-dim": "#2E6B65",
        copper: "#F2A65A",
        "copper-dim": "#8A5F2E",
        danger: "#F2685A",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, #1a2030 1px, transparent 1px), linear-gradient(to bottom, #1a2030 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        blink: "blink 1s steps(1) infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
