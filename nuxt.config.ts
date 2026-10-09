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
  // Fully static build (`npm run generate`) served from the CDN edge on
  // Vercel or Cloudflare Pages. Pages are written as /pricing.html (not
  // /pricing/index.html) so /pricing is served without a trailing-slash
  // redirect, matching the canonical URLs.
  // Browser/CDN caching for static files. Photos and icons keep their names
  // when replaced, so they get 30 days rather than "immutable".
  routeRules: {
    '/images/**': { headers: { 'cache-control': 'public, max-age=2592000' } },
    '/fonts/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
  },
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
      crawlLinks: true,
      routes: ['/'],
    },
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
        { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preload', href: '/fonts/bebas-neue-400.woff2', as: 'font', type: 'font/woff2', crossorigin: '' }
      ]
    }
  }
})