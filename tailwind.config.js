/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    // Example content paths...
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};
