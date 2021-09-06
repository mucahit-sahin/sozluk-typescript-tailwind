const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      mantis: {
        50: "#f9fcf6",
        100: "#f2f9ed",
        200: "#e0f0d2",
        300: "#cde6b7",
        400: "#a7d481",
        500: "#81c14b",
        600: "#74ae44",
        700: "#619138",
        800: "#4d742d",
        900: "#3f5f25",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
