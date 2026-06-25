import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#19171c",
        paper: "#ffffff",
        card: "#f2f1f3",
        purple: { DEFAULT: "#7a40ed", dark: "#6a2fe0" },
        brand: { blue: "#29a9ff", pink: "#fd3456" },
        muted: { DEFAULT: "#6e6e73", soft: "#97979b" },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      borderRadius: {
        "4xl": "32px",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
        pop: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      maxWidth: {
        shell: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
