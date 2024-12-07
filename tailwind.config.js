/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
      heading: ["sans-serif"],
      "body": ["sans-serif"],
    },
      colors: {
      primary: "#1B6634",
      primaryLight: "#ddf6f0",
      secondary: "#001c3c",
      secondaryLight: "#e7f1f8",
      dark: "#000000",
      light: "#ffffff"
      },
    },
  },
  plugins: [],
};
