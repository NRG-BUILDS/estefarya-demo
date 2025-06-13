/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "!./node_modules/**/*"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        serif: ["Instrument Serif", "serif"],
      },
      colors: {
        midnight: "#0C2A44",
        gold: "#AEA797",
        cream: "#F1EAE0",
        dark: "#2A2927",
        navy: "#0C2A44",
      },
    },
  },
  plugins: [],
};
