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
    },
  },
  plugins: [],
};
