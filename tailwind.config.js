/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
      heading: ["Batangas", "serif"],
      "body": ['"DM Sans"', "sans-serif"],
    },
      padding: {
        gutter: "5%",
        "section-default": "2.5rem",
      },
      maxWidth: {
        "container-default": "1024px",
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
