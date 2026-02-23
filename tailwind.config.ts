import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#F27D26", // Electric Orange
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#D4AF37", // Subtle Gold
          foreground: "#141414",
        },
        charcoal: {
          DEFAULT: "#141414",
          light: "#1F1F1F",
          dark: "#0A0A0A",
        },
        offwhite: "#F5F5F0",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.02em",
        widest: "0.2em",
      },
      animation: {
        "scroll-down": "scroll-down 2s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        "scroll-down": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.3" },
          "50%": { transform: "translateY(10px)", opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
