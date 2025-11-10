/** @type {import('tailwindcss').Config} */

import scrollbarHide from "tailwind-scrollbar-hide";
import tailwindCssAnimate from "tailwindcss-animate";

module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js,jsx,ts,tsx,vue}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
    "./*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        roboto: ["var(--font-roboto)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        light: "#f1f0ea",
        dark: "#252422",
        terminal: {
          bg: "#000000",
          text: "#e6edf3",
          prompt: "#79c0ff",
          input: "#d2a8ff",
          valid: "#a6e3a1",
          invalid: "#f28fad",
          accent: "#ffd5a1",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
    },
  },
  plugins: [scrollbarHide, tailwindCssAnimate],
};
