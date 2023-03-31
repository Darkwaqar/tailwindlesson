const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        lora: "'Lora', serif",
        // dm: "'DM Mono', monospace",
        mono: ["'DM Mono'", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
