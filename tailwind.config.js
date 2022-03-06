const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        amber: colors.amber,
        navColor: '#039BE5',
        lightblue: '#03A9F4',
      },
    },
  },
  plugins: [],
}
