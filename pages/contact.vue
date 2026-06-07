<template>
  <div>
    <!-- Hero -->
    <section class="relative py-28 overflow-hidden">
      <img src="/images/zelha banner.png" alt="Zelha Fitness Gym" class="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div class="absolute inset-0 bg-gradient-to-b from-black/80 to-secondary"></div>
      <div class="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <p class="text-primary text-xs font-black uppercase tracking-[0.3em] mb-4">Get in Touch</p>
        <h1 class="text-white uppercase mb-6" style="font-family: 'Bebas Neue', Impact, sans-serif; font-size: clamp(3rem, 8vw, 6rem); line-height: 0.95;">Contact <span class="text-primary">Us</span></h1>
        <p class="text-gray-300 text-lg max-w-2xl mx-auto">
          Have a question about memberships, classes or personal training? We're here to help. Reach out to us via any of the channels below.
        </p>
      </div>
    </section>

    <!-- Contact Info & Map -->
    <section class="py-16 bg-secondary">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Contact Details -->
          <div>
            <h2 class="section-heading mb-8">Contact Information</h2>
            <div class="space-y-8">
              <div v-for="info in contactInfo" :key="info.title" class="flex gap-5">
                <span class="text-primary text-2xl flex-shrink-0 mt-1">{{ info.icon }}</span>
                <div>
                  <h3 class="text-white font-black uppercase tracking-widest text-xs mb-2">{{ info.title }}</h3>
                  <div v-if="info.link">
                    <a :href="info.link" class="text-gray-400 hover:text-primary transition-colors text-lg leading-relaxed" v-html="info.content"></a>
                  </div>
                  <div v-else class="text-gray-400 text-lg leading-relaxed" v-html="info.content"></div>
                </div>
              </div>
            </div>

            <div class="mt-12">
              <h3 class="text-primary font-black uppercase tracking-widest text-xs mb-6">Follow Our Journey</h3>
              <div class="flex gap-4">
                <a v-for="social in socials" :key="social.label" :href="social.link" target="_blank" rel="noopener noreferrer" class="bg-secondary-light border border-gray-800 p-4 hover:border-primary hover:text-primary transition-all duration-300 group">
                  <span class="sr-only">{{ social.label }}</span>
                  <component :is="social.icon" class="w-6 h-6 fill-current" />
                </a>
              </div>
            </div>

            <div class="mt-12 p-8 card-dark bg-primary/5 border-primary/20">
              <h3 class="text-white font-black uppercase tracking-widest text-sm mb-4">Quick WhatsApp Support</h3>
              <p class="text-gray-400 text-sm mb-6">The fastest way to get an answer. Our team is online and ready to help with your inquiries.</p>
              <a href="https://wa.me/254702836266?text=Hi!%20I'd%20like%20to%20know%20more%20about%20Zelha%20Spin%20and%20Fitness%20Gym." target="_blank" class="btn-primary w-full py-4 text-sm shadow-lg shadow-primary/10">
                Start Chat Now
              </a>
            </div>
          </div>

          <!-- Map -->
          <div class="relative h-full min-h-[450px] lg:min-h-full overflow-hidden shadow-2xl border border-gray-800">
            <iframe
              width="100%"
              height="100%"
              style="border:0; min-height: 450px;"
              referrerpolicy="no-referrer-when-downgrade"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.072240219272!2d37.01383810000001!3d-1.1080531000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f472cf7d49123%3A0xc761d1367d2f441f!2sZelha%20Spin%20and%20Fitness%20Gym!5e0!3m2!1sen!2ske!4v1771178201794!5m2!1sen!2ske"
              allowfullscreen
              title="Zelha Spin and Fitness Gym on Google Maps"
            ></iframe>
            <div class="absolute bottom-6 left-6 right-6 bg-black/90 p-5 backdrop-blur-md border border-gray-800">
              <p class="text-primary font-black uppercase tracking-widest text-[10px] mb-1">Our Location</p>
              <p class="text-white text-sm font-bold">Kalimoni Highway View Plaza, Juja, Kenya</p>
              <p class="text-gray-400 text-xs mt-1">Former Uchumi Building, near Juja Town CBD</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Preview CTA -->
    <section class="py-16 bg-secondary-light">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="section-heading mb-4">Have More Questions?</h2>
        <p class="text-gray-400 mb-8 max-w-2xl mx-auto">Check out our frequently asked questions for quick answers about membership, pricing and classes.</p>
        <NuxtLink to="/faq" class="btn-outline px-10 py-4 text-sm">View All FAQs</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'

useHead({ title: 'Contact Us — Zelha Spin and Fitness Gym' })

const contactInfo = [
  {
    icon: '📍',
    title: 'Visit Us',
    content: 'Kalimoni Highway View Plaza (Former Uchumi),<br/>Juja, Kenya',
    link: 'https://maps.app.goo.gl/4XW9pX8W5Q3J7Q6W9', // Add actual map link if possible
  },
  {
    icon: '📞',
    title: 'Call Us',
    content: '0702 836 266 / 0110 719 277',
    link: 'tel:+254702836266',
  },
  {
    icon: '✉️',
    title: 'Email Us',
    content: 'zelhafitness@gmail.com',
    link: 'mailto:zelhafitness@gmail.com',
  },
  {
    icon: '🕐',
    title: 'Opening Hours',
    content: 'Mon – Sat: 6:00 AM – 9:00 PM<br/>Sunday: Rest Day',
  },
]

// Simple functional components for icons to avoid extra SVG files or large strings
const InstagramIcon = () => h('svg', { viewBox: '0 0 24 24' }, [h('path', { d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' })])
const TikTokIcon = () => h('svg', { viewBox: '0 0 24 24' }, [h('path', { d: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.9-.23-2.71.21-.72.38-1.24 1.03-1.51 1.8-.29.8-.3 1.67-.02 2.47.21.9.76 1.72 1.53 2.25.75.51 1.68.71 2.58.55 1.02-.19 1.93-.82 2.45-1.71.4-.7.58-1.5.57-2.3-.01-4.33-.01-8.66-.01-12.99z' })])
const FacebookIcon = () => h('svg', { viewBox: '0 0 24 24' }, [h('path', { d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' })])

const socials = [
  { label: 'Instagram', link: 'https://www.instagram.com/zelhafitness', icon: InstagramIcon },
  { label: 'TikTok', link: 'https://www.tiktok.com/@zelhafitness', icon: TikTokIcon },
  { label: 'Facebook', link: 'https://www.facebook.com/zelhaaFitness', icon: FacebookIcon },
]
</script>