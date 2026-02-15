/**
 * TailwindCSS configuration for Zelha Spin & Fitness.
 *
 * This setup defines custom colours inspired by the black and yellow
 * theme provided by the user. It extends the default palette with
 * `primary` and `secondary` colours that can be used throughout
 * components and pages for consistent styling.
 */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F5C400', // bright yellow for accents and call-to-action
          dark: '#D7A800'
        },
        secondary: {
          DEFAULT: '#000000', // deep black background
          light: '#000000'
        }
      }
    }
  },
  plugins: []
}