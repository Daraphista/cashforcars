/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    fontFamily: {
      heading: ["Batangas", "serif"],
      body: ["DM Sans", "sans-serif"],
    },
    extend: {
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
