<template>
  <footer class="bg-secondary-light border-t border-gray-800">
    <!-- Main footer content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

      <!-- Brand column -->
      <div class="lg:col-span-1">
        <img src="/images/headericon.png" alt="Zelha Spin and Fitness Gym" class="h-16 mb-4" />
        <p class="text-gray-400 text-sm leading-relaxed mb-5">
          Your Premier Fitness Companion in Juja, Kenya. A safe, motivating space for spin, HIIT, strength training and group classes for every fitness level.
        </p>
        <div class="flex gap-4">
          <a href="https://www.instagram.com/zelhafitness" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="text-gray-500 hover:text-primary transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10A5 5 0 0 1 12 7zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.5-2.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
          </a>
          <a href="https://www.tiktok.com/@zelhafitness" target="_blank" rel="noopener noreferrer" aria-label="TikTok" class="text-gray-500 hover:text-primary transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.5 3a5.5 5.5 0 0 0 4.5 4.5v3.1a8.7 8.7 0 0 1-4.5-1.2V15a6.5 6.5 0 1 1-6.5-6.5c.3 0 .6 0 .9.1v3.4a3.1 3.1 0 1 0 2.5 3V3h3.1z"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/zelhaaFitness" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="text-gray-500 hover:text-primary transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.5 7.5V5.625c0-.621.012-1.406.218-1.875.206-.468.548-.973 1.066-1.286C15.3 2.1 15.975 2 17 2h2v3h-1.5c-.55 0-.84.3-.97.52-.13.22-.28.54-.28 1.25v2.23h2.75l-.5 3.5h-2.25V22H13.5V12.5H11V9h2.5z"/>
            </svg>
          </a>
          <a href="https://wa.me/254702836266" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" class="text-gray-500 hover:text-primary transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="text-primary font-black uppercase tracking-widest text-xs mb-5">Quick Links</h3>
        <ul class="space-y-2.5">
          <li v-for="link in quickLinks" :key="link.to">
            <NuxtLink :to="link.to" class="text-gray-400 hover:text-primary text-sm transition-colors">{{ link.label }}</NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Programs -->
      <div>
        <h3 class="text-primary font-black uppercase tracking-widest text-xs mb-5">Programs</h3>
        <ul class="space-y-2.5">
          <li v-for="prog in programs" :key="prog">
            <NuxtLink to="/programs" class="text-gray-400 hover:text-primary text-sm transition-colors">{{ prog }}</NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Contact + Hours -->
      <div>
        <h3 class="text-primary font-black uppercase tracking-widest text-xs mb-5">Visit Us</h3>
        <address class="not-italic space-y-3 text-sm">
          <p class="text-gray-400 leading-relaxed">
            Kalimoni Highway View Plaza<br />
            (Former Uchumi), Juja, Kenya
          </p>
          <p>
            <a href="tel:+254702836266" class="text-gray-400 hover:text-primary transition-colors">0702 836 266</a>
            <span class="text-gray-700 mx-1">/</span>
            <a href="tel:+254110719277" class="text-gray-400 hover:text-primary transition-colors">0110 719 277</a>
          </p>
          <p>
            <a href="mailto:zelhafitness@gmail.com" class="text-gray-400 hover:text-primary transition-colors break-all">zelhafitness@gmail.com</a>
          </p>
          <div>
            <p class="text-gray-400 font-semibold mb-1">Opening Hours</p>
            <p class="text-gray-500">Mon – Sat: 6:00 AM – 9:00 PM</p>
            <p class="text-gray-500">Sunday: Rest Day</p>
          </div>
        </address>
        <a
          href="https://wa.me/254702836266?text=Hi%21%20I%20found%20Zelha%20Fitness%20through%20your%20website%20and%20would%20like%20to%20enquire%20about%20membership."
          target="_blank"
          rel="noopener noreferrer"
          class="mt-4 inline-flex items-center gap-2 bg-primary text-black px-4 py-2.5 text-xs font-black uppercase tracking-widest hover:bg-primary-dark transition-colors"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          WhatsApp Us
        </a>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-gray-800/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p class="text-gray-600 text-xs">© {{ new Date().getFullYear() }} Zelha Spin and Fitness Gym. All rights reserved.</p>
        <p class="text-gray-600 text-xs">Juja, Kiambu County, Kenya 🇰🇪</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/timetable', label: 'Class Schedule' },
  { to: '/pricing', label: 'Membership Pricing' },
  { to: '/trainers', label: 'Our Trainers' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/join', label: 'Join Now' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/faq', label: 'FAQs' },
]

const programs = [
  'Spin / Cycling',
  'HIIT Training',
  'Strength Training',
  'Personal Training',
  'Boot Camp',
  'Zumba Dance',
  'Group Fitness',
  'Hikes',
]
</script>
