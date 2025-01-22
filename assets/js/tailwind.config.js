/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", //All html files
    "./assets/**/*.js", //All JS files
    "./assets/**/*.css", //All CSS files
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

