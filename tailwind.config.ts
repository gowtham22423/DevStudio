import type { Config } from "tailwindcss";

/**
 * DevStudio design system.
 * Near-monochrome cool-neutral base + ONE deep emerald accent.
 * Deliberately avoids: AI purple/blue gradients, and the warm
 * bone+clay+espresso "craft" palette that every AI site defaults to.
 * Type: Geist Sans (display + body) + Geist Mono (sparing labels). No serif.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // surfaces — cool neutral, a whisper of green-grey (ties to accent), never warm bone
        paper: "#F2F3F1",
        sand: "#E8EAE5", // alternating sections / quiet cards
        sanddeep: "#DBDED7", // insets, tracks, hairline fills
        // ink — cool near-black scale (primary text + the single dark zone)
        ink: {
          DEFAULT: "#15181A",
          800: "#202527",
          700: "#2B3133",
          600: "#444B4D",
          500: "#5A6164", // muted body text — passes AA on paper
          400: "#7B8285", // secondary / large text only
        },
        // accent — a single deep emerald. Confident, trustworthy, uncommon for dev studios.
        accent: {
          DEFAULT: "#0F7A55",
          deep: "#0B5C40", // hover / small text on light (AA-safe)
          soft: "#CBDFD6", // tints on paper
          tint: "#E5EFEA", // faint wash
        },
        rust: "#B23A2E", // semantic danger only
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-sm": ["clamp(2rem, 4.5vw, 3.1rem)", { lineHeight: "1.04", letterSpacing: "-0.025em" }],
        "display": ["clamp(2.6rem, 6.2vw, 4.6rem)", { lineHeight: "1.0", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(3rem, 8vw, 6.2rem)", { lineHeight: "0.96", letterSpacing: "-0.035em" }],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tight2: "-0.02em",
        kicker: "0.2em",
      },
      borderRadius: {
        xs: "4px",
        sm: "8px",
        md: "10px",
        card: "14px",
        panel: "20px",
      },
      maxWidth: {
        shell: "1240px",
        prose2: "62ch",
      },
      boxShadow: {
        // ultra-diffuse, tinted to the cool ink — never heavy black
        soft: "0 1px 2px rgba(21,24,26,0.04), 0 14px 36px -22px rgba(21,24,26,0.24)",
        lift: "0 32px 70px -34px rgba(21,24,26,0.34)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
        pop: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
