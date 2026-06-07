<template>
  <div>
    <!-- Hero -->
    <section class="relative py-28 overflow-hidden">
      <img src="/images/7600786.jpg" alt="Zelha Fitness Gallery" class="absolute inset-0 w-full h-full object-cover opacity-20" loading="eager" decoding="async" />
      <div class="absolute inset-0 bg-gradient-to-b from-black/80 to-secondary"></div>
      <div class="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <p class="text-primary text-xs font-black uppercase tracking-[0.3em] mb-4">Inside the Studio</p>
        <h1 class="text-white uppercase mb-6" style="font-family: 'Bebas Neue', Impact, sans-serif; font-size: clamp(3rem, 8vw, 6rem); line-height: 0.95;">Our <span class="text-primary">Gallery</span></h1>
        <p class="text-gray-300 text-lg max-w-2xl mx-auto">
          A glimpse into the energy, dedication and community at Zelha Spin and Fitness Gym. See our facilities and members in action.
        </p>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section class="py-16 bg-secondary">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div v-for="(img, i) in images" :key="i" class="group relative overflow-hidden aspect-square card-dark border-transparent">
            <img :src="img.src" :alt="img.alt" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" decoding="async" />
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-end p-5">
              <div class="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p class="text-primary font-black uppercase tracking-widest text-[10px] mb-1">Zelha Fitness</p>
                <p class="text-white font-bold text-sm">{{ img.alt }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Instagram CTA -->
    <section class="py-16 bg-secondary-light border-y border-gray-800">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
          <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </div>
        <h2 class="section-heading mb-4">Follow Us for Daily Motivation</h2>
        <p class="text-gray-400 mb-8 max-w-2xl mx-auto">Get a daily dose of fitness tips, member highlights and class updates on our Instagram page.</p>
        <a href="https://www.instagram.com/zelhafitness" target="_blank" rel="noopener noreferrer" class="btn-primary px-10 py-4 text-sm">@zelhafitness on Instagram</a>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-secondary">
      <div class="max-w-3xl mx-auto px-4 text-center">
        <h2 class="text-white uppercase mb-4" style="font-family: 'Bebas Neue', Impact, sans-serif; font-size: clamp(2rem, 6vw, 4rem);">
          Ready to be in the <span class="text-primary">Frame?</span>
        </h2>
        <p class="text-gray-400 text-lg mb-8">Join the Zelha family today and start your own fitness story.</p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink to="/join" class="btn-primary px-10 py-4 text-sm">Join Now</NuxtLink>
          <NuxtLink to="/pricing" class="btn-outline px-10 py-4 text-sm">View Pricing</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Gallery — Zelha Spin and Fitness Gym' })

const images = [
  { src: '/images/7600786.jpg', alt: 'Zelha Fitness Team' },
  { src: '/images/577562443_818263040962429_8703738815204600603_n.jpg', alt: 'Spin Studio' },
  { src: '/images/483066964_632006999588035_23325673919236385_n.jpg', alt: 'Strength Training' },
  { src: '/images/574572522_812280874893979_1305975096083296830_n.jpg', alt: 'HIIT Session' },
  { src: '/images/equipmeents.jpg', alt: 'Modern Equipment' },
  { src: '/images/484517462_632196166235785_8102135649951883908_n.jpg', alt: 'Functional Training' },
  { src: '/images/483933409_632196279569107_5415312179917941573_n.jpg', alt: 'Personal Coaching' },
  { src: '/images/images (2).jpeg', alt: 'Core Workout' },
  { src: '/images/images (1).jpeg', alt: 'Members in Action' },
  { src: '/images/membeship1.jpg', alt: 'Group Energy' },
  { src: '/images/membership2.webp', alt: 'Training Session' },
  { src: '/images/membership3.jpg', alt: 'Zumba Class' },
  { src: '/images/membersp4.jpeg', alt: 'Boot Camp' },
  { src: '/images/zelha banner.png', alt: 'Zelha Brand' },
  { src: '/images/483066964_632006999588035_23325673919236385_n.jpg', alt: 'Gym Interior' },
  { src: '/images/484517462_632196166235785_8102135649951883908_n.jpg', alt: 'Morning Session' },
]
</script>