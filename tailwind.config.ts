import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Instrument Serif'", "serif"],
        body: ["'Barlow'", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
      },
      letterSpacing: {
        hero: "-4px",
      },
      lineHeight: {
        hero: "0.8",
        display: "0.9",
        cta: "0.85",
      },
      fontSize: {
        "display-hero": ["clamp(3.5rem, 8vw, 5.5rem)", { lineHeight: "0.8" }],
      },
      backdropBlur: {
        glass: "4px",
        "glass-strong": "50px",
        text: "10px",
      },
      boxShadow: {
        glass: "inset 0 1px 1px rgba(255,255,255,0.1)",
        "glass-strong": "4px 4px 4px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,0.15)",
        "glass-ambient": "0 4px 30px rgba(0,0,0,0.08)",
      },
      height: {
        hero: "1000px",
      },
      minHeight: {
        section: "500px",
      },
      keyframes: {
        "blur-in": {
          "0%":   { filter: "blur(10px)", opacity: "0", transform: "translateY(20px)" },
          "100%": { filter: "blur(0px)",  opacity: "1", transform: "translateY(0px)" },
        },
      },
      animation: {
        "blur-in": "blur-in 0.6s ease forwards",
      },
      transitionDuration: {
        "2000": "2000ms",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};

export default config;
