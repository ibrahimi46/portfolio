/** @type {import('tailwindcss').Config} */

import scrollbarHide from "tailwind-scrollbar-hide";
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js,jsx,ts,tsx,vue}",
    "./public/**/*.html",
    "./*.html",
  ],
  theme: {
    extend: {
      colors: {
        light: "#f1f0ea",
        dark: "#252422",
      },
    },
  },
  plugins: [scrollbarHide],
};
