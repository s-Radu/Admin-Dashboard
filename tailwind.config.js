/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/app.js"],
  theme: {
    fontFamily: {
      josefin: ["Josefin Sans", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      nunito: ["Nunito Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};

//* ussage command for --watch mode : npx tailwindcss -i ./src/input.css -o ./src/output.css -w
