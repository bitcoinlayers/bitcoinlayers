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
        primary: "#121212",
        primaryfade: "#1E1E1E",
        bitcoin: "#FF9900",
        secondary: "#1E1E1E",
        highlight: "#1E204b",
        low: "#7EFF00",
        medium: "#FFC21B",
        high: "#EC0B43",
        copycolor: "#FFFFFF",
        offwhite: "#D1D5DB",

        lprimary: "#FDFDFD",
        lprimaryfade: "#f6f5ff",
        lightsecondary: "#e5ebeb",
        lighttertiary: "#CECECA",
        lighttableheader: "#736F72",

        text_secondary: "#767B8F"
      },
      fontFamily: {
        header: ["Montserrat", "sans-serif"],
        body: ["Public Sans", "sans-serif"],
        script: ["Playfair Display", "serif"]
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
