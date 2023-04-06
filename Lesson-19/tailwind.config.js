const defaultTheme =require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      screens: {
        xs: "540px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
