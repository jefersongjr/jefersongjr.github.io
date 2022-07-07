/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'gloria-hallelujah': ['"Gloria Hallelujah"', 'cursive']
      },

      colors: {
        'custom-dark-gray': '#262221',
        'custom-light-blue': '#BED9E0',
      }
    },
  },
  plugins: [],
}
