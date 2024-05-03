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
        lightalt: '#c9c9c9',
        // lightbg: 'linear-gradient(145deg, rgba(246,245,255,1) 0%, rgba(217,217,217,1) 73%, rgba(95,101,102,1) 100%)',
        lightprimary: '#dbd9dc',
        lightsecondary: '#e5ebeb',
        lighttertiary: '#CECECA',
      },
      fontFamily: {
        header: ["Montserrat", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
