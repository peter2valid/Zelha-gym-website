module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue',
    './layouts/**/*.{vue,js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F5C400',
          dark: '#D7A800',
          light: '#FFE566'
        },
        secondary: {
          DEFAULT: '#080808',
          light: '#111111'
        }
      },
      fontFamily: {
        heading: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        body: ['Outfit', 'sans-serif']
      }
    }
  },
  plugins: []
}
