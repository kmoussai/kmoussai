const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  mode: "jit",
  theme: {
    colors: {
      ...colors,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
