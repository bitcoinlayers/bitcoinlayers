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

        
        lprimaryfade: "#f6f5ff",
        lightsecondary: "#e5ebeb",
        lighttertiary: "#CECECA",
        lighttableheader: "#736F72",

        lprimary: "#FDFDFD",
        text_secondary: "#767B8F",
        main: "#FE4F18"
      },
      fontFamily: {
        header: ["Montserrat", "sans-serif"],
        body: ["Public Sans", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      fontSize: {
        'hero': '14vw',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
