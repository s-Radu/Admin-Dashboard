/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/app.js"],
  theme: {
    extend: {},
    textShadow: {
      sm: "0 0  4px var(--tw-shadow-color)",
      md: "0 0  8px var(--tw-shadow-color)",
      lg: "0 0  12px var(--tw-shadow-color)",
      xl: "0 0  16px var(--tw-shadow-color)",
    },
    fontFamily: {
      josefin: ["Josefin Sans", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      nunito: ["Nunito Sans", "sans-serif"],
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],

  purge: {
    cotent: ["./index.html", "./src/app.js"],
  },
};

//* ussage command for --watch mode : npx tailwindcss -i ./src/input.css -o ./src/output.css -w

//! ADD PURGE AS YOU FORGOT
