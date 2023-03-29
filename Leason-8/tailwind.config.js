/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Example content paths...
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#3fbaeb",
          DEFAULT: "#0fa9e6",
          dark: "#0c87b8",
        }
        // brand: "#0fa9e6",
        // "brand-light":"#3fbaeb",
        // "brand-dark":"#0c87b8",
      },
      fontFamily:{
        headline:" Poppins,sans-serif" //font-headline
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
}