/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        primary: '#121212',
        bitcoin: "#FF9900",
        secondary: "#1E1E1E",
        highlight: "#1E204b",
        low: "#7EFF00",
        medium: "#FFC21B",
        high: "#EC0B43",
        copycolor: "#FFFFFF",
        offwhite: '#D1D5DB',
      },
      fontFamily: {
        header: ["Montserrat", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
