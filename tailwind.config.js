/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
      heading: ["Batangas", "serif"],
      "body": ['"DM Sans"', "sans-serif"],
    },
      colors: {
      primary: "#D62727",
      dark: "#003049",
      light: "#FDF0D5"
      },
    },
  },
  plugins: [],
};
