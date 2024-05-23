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
//new UI
        lprimary: "#FDFDFD",
        text_secondary: "#767B8F",
        main: "#FE4F18",

        text_table_row: "#363534",
        text_table_header: "#0A0D12",
        table_header: "#F5F8FD",

        
      },
      fontFamily: {
        header: ['Montserrat', 'sans-serif'],
        body: ['Public Sans', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        public: ['Public Sans', 'sans-serif'],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
