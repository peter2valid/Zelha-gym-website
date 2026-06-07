<template>
  <div>
    <!-- Hero -->
    <section class="relative py-28 overflow-hidden">
      <img src="/images/483933409_632196279569107_5415312179917941573_n.jpg" alt="Zelha Fitness Trainers" class="absolute inset-0 w-full h-full object-cover opacity-25" loading="eager" decoding="async" />
      <div class="absolute inset-0 bg-gradient-to-b from-black/80 to-secondary"></div>
      <div class="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <p class="text-primary text-xs font-black uppercase tracking-[0.3em] mb-4">The Experts</p>
        <h1 class="text-white uppercase mb-6" style="font-family: 'Bebas Neue', Impact, sans-serif; font-size: clamp(3rem, 8vw, 6rem); line-height: 0.95;">Meet Your <span class="text-primary">Coaches</span></h1>
        <p class="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Certified, passionate and dedicated to your success. Our trainers are here to push you, guide you and help you achieve your best self.
        </p>
      </div>
    </section>

    <!-- Trainers Grid -->
    <section class="py-16 bg-secondary">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div v-for="trainer in trainers" :key="trainer.name" class="card-dark p-8 flex flex-col sm:flex-row gap-8 items-start sm:items-center group">
            <div class="relative flex-shrink-0">
              <div class="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-colors duration-300 shadow-xl bg-black">
                <img :src="trainer.image" :alt="trainer.name" class="w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>
              <div class="absolute -bottom-2 -right-2 bg-primary text-black p-2 rounded-full shadow-lg">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>
            <div>
              <div class="mb-4">
                <h2 class="text-primary font-black text-2xl uppercase tracking-wide leading-none mb-1">{{ trainer.name }}</h2>
                <p class="text-gray-500 text-xs font-black uppercase tracking-widest">Certified Fitness Coach</p>
              </div>
              <p class="text-gray-300 text-sm leading-relaxed mb-6">{{ trainer.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="spec in trainer.specialties" :key="spec" class="bg-secondary text-primary border border-primary/20 text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-sm">
                  {{ spec }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Training Philosophy -->
    <section class="py-16 bg-secondary-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="section-heading mb-6">Our Training Philosophy</h2>
          <p class="text-gray-300 text-lg leading-relaxed italic mb-8">
            "We believe that fitness should be enjoyable, sustainable and accessible to everyone. Our goal isn't just to make you sweat, but to build your confidence, strength and community in a safe environment."
          </p>
          <div class="flex justify-center gap-12 text-center">
            <div>
              <div class="text-primary text-3xl font-black mb-1" style="font-family: 'Bebas Neue', Impact, sans-serif;">10+</div>
              <div class="text-gray-500 text-[10px] font-black uppercase tracking-widest">Years Combined Exp.</div>
            </div>
            <div>
              <div class="text-primary text-3xl font-black mb-1" style="font-family: 'Bebas Neue', Impact, sans-serif;">500+</div>
              <div class="text-gray-500 text-[10px] font-black uppercase tracking-widest">Members Transformed</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-primary">
      <div class="max-w-3xl mx-auto px-4 text-center">
        <h2 class="text-black uppercase mb-4" style="font-family: 'Bebas Neue', Impact, sans-serif; font-size: clamp(2rem, 6vw, 4rem);">
          Train With the Best
        </h2>
        <p class="text-black/70 text-lg mb-8">Ready to start? Book a personal training session or join one of our group classes led by Levis and Martin.</p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink to="/join" class="bg-black text-primary px-8 py-4 font-black uppercase tracking-wide text-sm hover:bg-gray-900 transition-colors uppercase">Join Today</NuxtLink>
          <a href="https://wa.me/254702836266?text=Hi!%20I'd%20like%20to%20train%20with%20Levis%20or%20Martin%20at%20Zelha%20Fitness." target="_blank" class="border-2 border-black text-black px-8 py-4 font-black uppercase tracking-wide text-sm hover:bg-black hover:text-primary transition-colors uppercase">Book a Session</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// NEXT-LEVEL SEO INJECTION
const siteTitle = 'Certified Fitness Coaches in Juja — Meet Our Trainers'
const siteDesc = 'Meet Levis Alozio and Martin Muturi, our expert certified fitness coaches at Zelha Fitness. Specializing in Strength Training, Spin, HIIT, Kickboxing and more to help you reach your goals.'
const siteUrl = 'https://zelhafitness.com/trainers'

useHead({
  title: siteTitle,
  meta: [
    { name: 'description', content: siteDesc },
    { property: 'og:title', content: siteTitle },
    { property: 'og:description', content: siteDesc },
    { property: 'og:url', content: siteUrl },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:title', content: siteTitle },
    { name: 'twitter:description', content: siteDesc },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'itemListElement': [
          { '@type': 'Person', 'name': 'Levis Alozio', 'jobTitle': 'Lead Fitness Coach' },
          { '@type': 'Person', 'name': 'Martin Muturi', 'jobTitle': 'Lead Fitness Coach' },
        ]
      })
    }
  ]
})

const trainers = [
  {
    name: 'Levis Alozio',
    description: 'Levis specializes in high-performance conditioning and functional movement. He is passionate about helping members build a solid foundation of strength while keeping sessions energetic and challenging.',
    specialties: ['Strength Training', 'Aerobics', 'Spinning', 'HIIT', 'Kickboxing', 'Calisthenics'],
    image: '/images/coach/1.jpg'
  },
  {
    name: 'Martin Muturi',
    description: 'Martin focuses on holistic fitness and endurance. With extensive experience in cardio-based training and aerobics, he helps members improve their stamina and overall well-being in a supportive environment.',
    specialties: ['Strength Training', 'Aerobics', 'Spinning', 'HIIT', 'Swimming'],
    image: '/images/coach/2.png'
  },
]
</script>