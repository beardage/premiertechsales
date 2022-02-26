const colors = require('tailwindcss/colors');

module.exports = {
  content: [],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.gray,
      green: colors.green,
      cyan: colors.cyan,
      primary: colors.green,
      secondary: colors.cyan 
    },
    extend: {
      fontFamily: {
        'headline': ['Roboto Condensed', 'sans-serif'],
        'body': ['Cabin', 'sans-serif']
      }
    },
  },
  mode: 'jit',
  plugins: [],
  content: [
    "./src/**/*.svelte",
    "/.src/**/*.html"
  ],
}
