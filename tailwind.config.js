/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      blue: {
        "50": "#9BB9FF",
        "100": "#3772FF"
      },
      black: {
        "50": "#181818",
        "100": "#020003",
      },
      white: {
        "50": "#B1B5C3",
        "100": "#fff",
        "200": "#636770"
      }
    },
    fontFamily: {
      'vinque': ["vinque"],
      'montserat': ["'Montserrat', sans-serif"]
    }
  },
  plugins: [],
}
