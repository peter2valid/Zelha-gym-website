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
        },
        // Lighter than Tailwind's defaults so small grey text meets WCAG AA
        // (4.5:1) contrast on the near-black backgrounds.
        gray: {
          500: '#868d99',
          600: '#7f8796'
        }
      },
      fontFamily: {
        heading: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        body: ['sans-serif']
      }
    }
  },
  plugins: []
}
