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
          <div
            v-for="(trainer, idx) in trainers"
            :key="trainer.name"
            class="card-dark p-8 flex flex-col sm:flex-row gap-8 items-start sm:items-center group"
            :class="{ 'md:col-span-2 md:w-1/2 md:mx-auto': trainers.length % 2 === 1 && idx === trainers.length - 1 }"
          >
            <div class="relative flex-shrink-0">
              <div class="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-colors duration-300 shadow-xl bg-black flex items-center justify-center">
                <img v-if="trainer.image" :src="trainer.image" :alt="`${trainer.name}, fitness coach at Zelha Fitness Juja`" class="w-full h-full object-cover object-top" loading="lazy" decoding="async" />
                <span v-else class="text-primary text-5xl" style="font-family: 'Bebas Neue', Impact, sans-serif;">{{ initials(trainer.name) }}</span>
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
                <p class="text-gray-500 text-xs font-black uppercase tracking-widest">{{ trainer.role }}</p>
              </div>
              <p class="text-gray-300 text-sm leading-relaxed mb-6">{{ trainer.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="spec in trainer.specialties" :key="spec" class="bg-secondary text-primary border border-primary/20 text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-sm">
                  {{ spec }}
                </span>
              </div>
              <a v-if="trainer.instagram" :href="`https://www.instagram.com/${trainer.instagram}`" target="_blank" rel="noopener noreferrer" class="inline-block mt-4 text-gray-500 hover:text-primary text-xs font-black uppercase tracking-widest transition-colors">@{{ trainer.instagram }} on Instagram →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- The Team -->
    <section class="py-16 bg-secondary-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div class="text-center mb-12">
          <h2 class="section-heading">Meet the Team</h2>
          <p class="section-sub mt-3 max-w-2xl mx-auto">The people behind the front desk and the scenes who keep Zelha running smoothly every day.</p>
        </div>

        <!-- Whole-team photo -->
        <div class="relative overflow-hidden border border-gray-800 mb-12 aspect-[4/3] md:aspect-[16/9] max-w-5xl mx-auto bg-black">
          <img :src="teamPhoto" alt="The Zelha Spin and Fitness Gym team in Juja" class="w-full h-full object-cover" loading="lazy" decoding="async" />
          <div class="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/90 to-transparent"></div>
          <p class="absolute bottom-5 left-6 text-white font-black uppercase tracking-widest text-sm">The Zelha Family</p>
        </div>

        <div class="flex flex-wrap justify-center gap-5">
          <div v-for="member in team" :key="member.name" class="card-dark p-6 text-center w-full sm:w-64">
            <div class="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-primary/20 bg-black flex items-center justify-center mb-4">
              <img v-if="member.image" :src="member.image" :alt="`${member.name}, ${member.role} at Zelha Fitness`" class="w-full h-full object-cover object-top"loading="lazy" decoding="async" />
              <span v-else class="text-primary text-3xl" style="font-family: 'Bebas Neue', Impact, sans-serif;">{{ initials(member.name) }}</span>
            </div>
            <h3 class="text-white font-black uppercase tracking-wide">{{ member.name }}</h3>
            <p class="text-primary text-[10px] font-black uppercase tracking-widest mt-1">{{ member.role }}</p>
            <p class="text-gray-500 text-xs leading-relaxed mt-3">{{ member.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Training Philosophy -->
    <section class="py-16 bg-secondary">
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
        <p class="text-black/70 text-lg mb-8">Ready to start? Book a personal training session or join one of our group classes led by Martin, Brian and Abby.</p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink to="/join" class="bg-black text-primary px-8 py-4 font-black uppercase tracking-wide text-sm hover:bg-gray-900 transition-colors uppercase">Join Today</NuxtLink>
          <a href="https://wa.me/254702836266?text=Hi!%20I'd%20like%20to%20book%20a%20session%20with%20one%20of%20your%20coaches%20at%20Zelha%20Fitness." target="_blank" class="border-2 border-black text-black px-8 py-4 font-black uppercase tracking-wide text-sm hover:bg-black hover:text-primary transition-colors uppercase">Book a Session</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// NEXT-LEVEL SEO INJECTION
const siteTitle = 'Certified Fitness Coaches in Juja — Meet Our Trainers'
const siteDesc = 'Meet the Zelha Fitness team in Juja: Martin Muturi (fitness coach, physiotherapist, swimming coach), Brian Kamau (functional strength) and Coach Abby (strength training). Personal training from KSh 1,500.'
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
          { '@type': 'ListItem', 'position': 1, 'item': { '@type': 'Person', 'name': 'Martin Muturi', 'jobTitle': 'Fitness Coach, Physiotherapist and Swimming Coach', 'worksFor': { '@type': 'Gym', 'name': 'Zelha Spin and Fitness Gym' } } },
          { '@type': 'ListItem', 'position': 2, 'item': { '@type': 'Person', 'name': 'Brian Kamau', 'jobTitle': 'Fitness Trainer', 'worksFor': { '@type': 'Gym', 'name': 'Zelha Spin and Fitness Gym' } } },
          { '@type': 'ListItem', 'position': 3, 'item': { '@type': 'Person', 'name': 'Abby', 'jobTitle': 'Fitness Coach', 'worksFor': { '@type': 'Gym', 'name': 'Zelha Spin and Fitness Gym' } } },
        ]
      })
    }
  ]
})

const initials = (name: string) => name.split(' ').map(n => n[0]).join('').slice(0, 2)

const teamPhoto = '/images/team/whole-team.jpg'

const trainers = [
  {
    name: 'Martin Muturi',
    role: 'Fitness Coach · Physiotherapist · Swimming Coach',
    description: 'Martin combines fitness coaching with a physiotherapy background, so every programme is built around safe, effective movement. He focuses on weight loss, bodybuilding and body recomposition, and also coaches swimming.',
    specialties: ['Weight Loss', 'Bodybuilding', 'Body Recomposition', 'Physiotherapy', 'Swimming'],
    image: '/images/team/martin-muturi.jpg',
    instagram: '',
  },
  {
    name: 'Brian Kamau',
    role: 'Fitness Trainer',
    description: 'Brian specialises in athletic performance and functional strength — building strong bodies that move well. He offers one-on-one personal training for members who want focused, results-driven coaching.',
    specialties: ['Athletic Performance', 'Functional Strength', 'Personal Training'],
    image: '/images/team/brian-kamau.jpg',
    instagram: 'kamau.fit',
  },
  {
    name: 'Abby',
    role: 'Fitness Coach',
    description: 'Coach Abby specialises in strength training and helps members build real, lasting strength. Her motto: programmes take time — but time passes anyway, so start today.',
    specialties: ['Strength Training'],
    image: '/images/team/abby.jpg',
    instagram: '',
  },
]

// TODO: add Brad and any other team members once their photos and profiles arrive.
const team = [
  {
    name: 'Sarah',
    role: 'Receptionist',
    description: 'The first friendly face you meet at Zelha. Sarah handles registrations, payments, bookings and any questions you have.',
    image: '/images/team/sarah.jpg',
  },
]
</script>
