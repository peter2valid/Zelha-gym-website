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
      title: 'Zelha Spin & Fitness',
      meta: [
        { name: 'charset', content: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Zelha Spin & Fitness in Juja, Kenya – boutique spin classes, HIIT and personal training.' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@400;600;700&display=swap' }
      ]
    }
  }
})