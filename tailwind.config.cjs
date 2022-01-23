module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['serif'],
        'sans': ['Open Sans', 'sans-serif']
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
