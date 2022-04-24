const colors = require('tailwindcss/colors');

module.exports = {
  content: [],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.gray,
      green: colors.teal,
      cyan: colors.cyan,
      primary: colors.slate,
      secondary: colors.cyan,
      light: colors.white,
      dark: colors.black,
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
