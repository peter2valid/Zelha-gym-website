import { defineNuxtConfig } from 'nuxt/config'

// Nuxt configuration for Zelha Spin & Fitness website.
// This config includes TailwindCSS for styling and @nuxt/content
// to manage markdown/yaml data for timetables and pricing.
export default defineNuxtConfig({
  srcDir: '.',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content'
  ],
  // Extend the default Tailwind config with brand colours from the provided theme.
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css'
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Zelha Spin and Fitness Gym',
      meta: [
        { name: 'description', content: 'Zelha Spin and Fitness Gym in Juja, Thika Road, Kenya – spin, HIIT, strength, step aerobics, Zumba, swimming and personal training. KSh 400 walk-in for everyone.' },
        { name: 'robots', content: 'index, follow, max-image-preview:large' },
        { name: 'theme-color', content: '#080808' },
        { name: 'geo.region', content: 'KE-13' },
        { name: 'geo.placename', content: 'Juja' },
        { name: 'geo.position', content: '-1.108053;37.013838' },
        { name: 'ICBM', content: '-1.108053, 37.013838' },
        { property: 'og:site_name', content: 'Zelha Spin and Fitness Gym' },
        { property: 'og:locale', content: 'en_KE' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@400;600;700&display=swap' }
      ]
    }
  }
})