/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,vue}",
    "./public/**/*.html",
    "./*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["var(--manrope)"],
        "ibm-plex-mono": ["var(--ibm-plex-mono)"],
      },
    },
  },
  plugins: [],
};
