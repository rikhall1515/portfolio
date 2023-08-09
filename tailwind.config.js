/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      atkinson: ["Atkinson Hyperlegible", "sans-serif"],
    },
    colors: {
      primary: "#1BF3D9", //button top gradient stop
      primaryDarker: "#0BD0B9", //button bottom gradient stop
      secondary_200: "#6A3AC9", //skill pills
      secondary_400: "#4410BF", //main bg
      secondary_350: "#330D8F", //the color at the bottom of the contact section, aka the top of the footer section
      secondary_800: "#14092A", //card bg
      secondary_900: "#090413", //secondary bg
      white: "#EEEAF9", //text
    },
    boxShadow: ({ theme }) => ({
      button: "0px 4px 4px 0px rgba(27, 243, 215, 0.3)", //primary color used as shadow
    }),
    extend: {
      screens: {
        sm: "320px",
        m: "440px",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
