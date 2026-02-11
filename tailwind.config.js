/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.njk", "./src/**/*.html", "./src/**/*.md"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Staatliches"', 'sans-serif'],
        display: ['"Retro Team"', 'cursive'],
        sans: ['"Roboto"', 'sans-serif'],
      },
      colors: {
        primary: {
          50: "#fef2f2",
          100: "#fde3e3",
          200: "#fbc4c4",
          300: "#f7a0a0",
          400: "#ef6b6b",
          500: "#e23c3c",
          600: "#d42020",
          700: "#c2102d",
          800: "#9a0f25",
          900: "#7f1022",
        },
      },
    },
  },
  plugins: [],
};
