module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'headline': ['Roboto Condensed', 'sans-serif'],
        'body': ['Cabin', 'sans-serif']
      }
    },
  },
  mode: 'jit',
  plugins: [],
  purge: [
    "./src/**/*.svelte",
    "/.src/**/*.html"
  ],
}
