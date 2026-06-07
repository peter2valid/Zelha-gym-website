<template>
  <div>
    <!-- Hero -->
    <Hero />

    <!-- Stats Bar: Fluid grid for all screens -->
    <section class="bg-primary py-8 md:py-10">
      <div class="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 text-center">
        <div v-for="stat in stats" :key="stat.label" class="flex flex-col">
          <div class="text-3xl md:text-5xl font-black text-black leading-none mb-1" style="font-family: 'Bebas Neue', Impact, sans-serif;">{{ stat.value }}</div>
          <div class="text-black/60 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <!-- Who We Help -->
    <section class="py-16 md:py-24 bg-secondary">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div class="text-center mb-12 md:mb-16">
          <h2 class="section-heading">Who We Help</h2>
          <p class="section-sub mt-4 max-w-2xl mx-auto">Whether you're stepping into a gym for the first time or training for your next goal — Zelha is your home.</p>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5">
          <div v-for="group in whoWeHelp" :key="group.title" class="card-dark p-6 md:p-8 text-center rounded-sm group hover:-translate-y-1 transition-all duration-300">
            <div class="flex justify-center mb-4">
              <component :is="group.icon" class="w-10 h-10 md:w-12 md:h-12 text-primary transform group-hover:scale-110 transition-transform" />
            </div>
            <h3 class="text-primary font-black text-xs md:text-sm uppercase tracking-widest leading-tight mb-2">{{ group.title }}</h3>
            <p class="text-gray-500 text-[10px] md:text-xs leading-relaxed">{{ group.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Programs Preview -->
    <section class="py-16 md:py-24 bg-secondary-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div class="max-w-xl">
            <h2 class="section-heading">Our Programs</h2>
            <p class="section-sub mt-4">Something for every fitness goal. Taught by certified coaches who care about your form and results.</p>
          </div>
          <NuxtLink to="/programs" class="btn-outline text-xs px-8 py-4 whitespace-nowrap self-start md:self-auto w-full md:w-auto text-center font-black uppercase">See All Programs</NuxtLink>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div
            v-for="prog in programs.slice(0, 4)"
            :key="prog.name"
            class="group relative overflow-hidden bg-secondary border border-gray-800 hover:border-primary transition-all duration-500"
          >
            <div class="aspect-[4/3] md:aspect-[3/4] lg:aspect-square overflow-hidden">
              <img :src="prog.image" :alt="prog.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 md:opacity-90"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h3 class="text-primary font-black text-xl md:text-2xl uppercase tracking-wide leading-none mb-2">{{ prog.name }}</h3>
              <p class="text-gray-300 text-xs md:text-sm line-clamp-2 md:line-clamp-none">{{ prog.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-16 md:py-24 bg-secondary overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div class="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div class="order-2 lg:order-1">
            <h2 class="section-heading mb-6 md:mb-8 text-left">Why Choose Zelha?</h2>
            <p class="text-gray-400 mb-10 leading-relaxed text-base md:text-lg">
              We're more than a gym. We're a community of motivated people in Juja committed to helping you reach your goals in a safe, supportive environment.
            </p>
            <div class="grid sm:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-8">
              <div v-for="benefit in benefits" :key="benefit.title" class="flex gap-5">
                <div class="w-12 h-12 md:w-14 md:h-14 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <component :is="benefit.icon" class="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <div>
                  <h3 class="text-white font-black text-sm uppercase tracking-widest mb-1">{{ benefit.title }}</h3>
                  <p class="text-gray-500 text-xs md:text-sm leading-relaxed">{{ benefit.desc }}</p>
                </div>
              </div>
            </div>
            <div class="mt-12 flex flex-col sm:flex-row gap-4">
              <NuxtLink to="/join" class="btn-primary px-10 py-4 text-xs font-black uppercase">Join Today</NuxtLink>
              <NuxtLink to="/about" class="btn-ghost px-10 py-4 text-xs font-black uppercase">Our Full Story</NuxtLink>
            </div>
          </div>
          <div class="order-1 lg:order-2 relative">
            <div class="absolute -top-6 -right-6 w-full h-full border-2 border-primary/20 translate-x-4 translate-y-4 -z-10 hidden md:block"></div>
            <div class="aspect-square sm:aspect-video lg:aspect-square overflow-hidden rounded-sm shadow-2xl">
              <img src="/images/574572522_812280874893979_1305975096083296830_n.jpg" alt="Group training at Zelha Fitness" class="w-full h-full object-cover" loading="lazy" />
            </div>
            <div class="absolute -bottom-6 -left-6 bg-primary text-black p-6 md:p-8 shadow-2xl">
              <div class="text-5xl md:text-6xl font-black leading-none" style="font-family: 'Bebas Neue', Impact, sans-serif;">100%</div>
              <div class="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mt-1">Dedicated to You</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Schedule Preview -->
    <section class="py-16 md:py-24 bg-secondary-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div class="text-center mb-12 md:mb-16">
          <h2 class="section-heading">Class Schedule</h2>
          <p class="section-sub mt-4 max-w-xl mx-auto">New sessions every week. Find a time that fits your busy life in Juja.</p>
        </div>
        <TimetablePreview />
        <div class="text-center mt-12">
          <NuxtLink to="/timetable" class="btn-primary text-xs px-10 py-4 w-full md:w-auto shadow-xl shadow-primary/10 font-black uppercase">View Full Weekly Schedule</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Pricing Preview -->
    <section class="py-16 md:py-24 bg-secondary">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div class="text-center mb-12 md:mb-16">
          <h2 class="section-heading">Membership Plans</h2>
          <p class="section-sub mt-4 max-w-2xl mx-auto">Options for every budget — from daily drop-ins to monthly memberships. Student discounts available!</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          <div v-for="plan in pricingPlans" :key="plan.name" :class="['card-dark p-8 md:p-10 flex flex-col relative overflow-hidden group', plan.featured ? 'border-primary bg-secondary-light ring-2 ring-primary/20 scale-[1.02] z-10' : '']">
            <div v-if="plan.featured" class="absolute top-0 right-0 bg-primary text-black text-[9px] font-black uppercase tracking-widest px-4 py-1.5 transform rotate-0 rounded-bl-sm">Popular</div>
            <h3 class="text-white font-black uppercase tracking-widest text-xs mb-1">{{ plan.name }}</h3>
            <div class="text-primary font-black text-4xl md:text-5xl my-4 leading-none" style="font-family: 'Bebas Neue', Impact, sans-serif;">{{ plan.price }}</div>
            <p class="text-gray-500 text-[10px] uppercase font-black tracking-widest mb-6">{{ plan.period }}</p>
            <ul class="space-y-3 mb-10 flex-1">
              <li v-for="feature in plan.features" :key="feature" class="flex items-start gap-3 text-gray-300 text-sm">
                <span class="text-primary mt-0.5 flex-shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                </span>
                {{ feature }}
              </li>
            </ul>
            <a :href="`https://wa.me/254702836266?text=Hi!%20I'm%20interested%20in%20the%20${encodeURIComponent(plan.name)}%20plan.`" target="_blank" class="btn-primary text-xs py-4 w-full text-center justify-center font-black active:scale-95 transition-transform uppercase">
              Join Now
            </a>
          </div>
        </div>
        <div class="text-center mt-12 md:mt-16">
          <NuxtLink to="/pricing" class="btn-outline text-xs px-10 py-4 w-full md:w-auto font-black uppercase">View All Details & Policies</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Trainers & Testimonials combined for energy -->
    <section class="py-16 md:py-24 bg-secondary-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div class="grid lg:grid-cols-2 gap-16 md:gap-24">
          <!-- Coaches -->
          <div>
            <h2 class="section-heading mb-8 md:mb-12 text-left">Meet Your Coaches</h2>
            <div class="space-y-6">
              <div v-for="trainer in trainers" :key="trainer.name" class="card-dark p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center group border-transparent hover:border-primary/20">
                <div class="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors flex-shrink-0 bg-black">
                  <img :src="trainer.image" :alt="trainer.name" class="w-full h-full object-cover" loading="lazy" />
                </div>
                <div>
                  <h3 class="text-primary font-black text-lg md:text-xl uppercase tracking-wide leading-none mb-1">{{ trainer.name }}</h3>
                  <p class="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-3">Certified Lead Coach</p>
                  <p class="text-gray-400 text-xs md:text-sm leading-relaxed">{{ trainer.specialties }}</p>
                </div>
              </div>
            </div>
            <div class="mt-10">
              <NuxtLink to="/trainers" class="btn-ghost text-xs px-8 py-4 w-full sm:w-auto text-center font-black uppercase">Meet the Full Team</NuxtLink>
            </div>
          </div>
          <!-- Testimonials -->
          <div>
            <h2 class="section-heading mb-8 md:mb-12 text-left">Member Stories</h2>
            <div class="space-y-4 md:space-y-6">
              <div v-for="testi in testimonials" :key="testi.name" class="bg-black/40 border border-gray-800 p-8 md:p-10 rounded-sm relative italic">
                <span class="absolute top-4 left-4 text-6xl text-primary/10 not-italic leading-none font-serif">"</span>
                <p class="text-gray-300 text-sm md:text-base leading-relaxed mb-6 relative z-10">{{ testi.text }}</p>
                <div class="flex items-center gap-4 border-t border-gray-800/50 pt-6">
                  <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black text-sm not-italic">{{ testi.name.charAt(0) }}</div>
                  <div>
                    <p class="text-white font-black text-xs uppercase tracking-widest not-italic leading-none">{{ testi.name }}</p>
                    <p class="text-gray-600 text-[10px] uppercase tracking-widest mt-1 not-italic">{{ testi.type }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience the Studio: Virtual Tour -->
    <StudioTour />

    <!-- Location -->
    <section class="py-16 md:py-24 bg-secondary">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div class="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
          <div class="order-2 lg:order-1">
            <h2 class="section-heading mb-10 text-left">Visit the Studio</h2>
            <div class="grid sm:grid-cols-2 lg:grid-cols-1 gap-10">
              <div v-for="loc in locationDetails" :key="loc.title" class="flex gap-5">
                <div class="w-12 h-12 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <component :is="loc.icon" class="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 class="text-white font-black uppercase tracking-widest text-xs mb-2">{{ loc.title }}</h3>
                  <p class="text-gray-400 text-sm leading-relaxed" v-html="loc.content"></p>
                </div>
              </div>
            </div>
            <div class="mt-12 flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/254702836266?text=Hi!%20I'd%20like%20directions%20to%20Zelha%20Fitness." target="_blank" class="btn-primary text-xs px-10 py-4 shadow-xl shadow-primary/10 text-center uppercase font-black">Get Directions</a>
              <NuxtLink to="/contact" class="btn-ghost text-xs px-10 py-4 text-center uppercase font-black">Full Contact Info</NuxtLink>
            </div>
          </div>
          <div class="order-1 lg:order-2 rounded-sm overflow-hidden border border-gray-800 shadow-2xl h-[350px] md:h-[500px]">
            <iframe
              width="100%"
              height="100%"
              style="border:0;"
              referrerpolicy="no-referrer-when-downgrade"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.072240219272!2d37.01383810000001!3d-1.1080531000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f472cf7d49123%3A0xc761d1367d2f441f!2sZelha%20Spin%20and%20Fitness%20Gym!5e0!3m2!1sen!2ske!4v1771178201794!5m2!1sen!2ske"
              allowfullscreen
              title="Zelha Spin and Fitness Gym on Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="relative py-24 md:py-32 overflow-hidden text-center">
      <img src="/images/483066964_632006999588035_23325673919236385_n.jpg" alt="Start your fitness journey" class="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div class="absolute inset-0 bg-black/80 backdrop-blur-sm lg:backdrop-blur-none"></div>
      <div class="relative z-10 max-w-3xl mx-auto px-4">
        <h2 class="text-white uppercase mb-6" style="font-family: 'Bebas Neue', Impact, sans-serif; font-size: clamp(3rem, 10vw, 6rem); line-height: 0.9;">
          Your <span class="text-primary">Best Self</span> Starts Here.
        </h2>
        <p class="text-gray-300 text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed font-light">
          Join hundreds of members who train, sweat and grow at Juja's premier studio. First class is on us!
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <NuxtLink to="/join" class="btn-primary px-12 py-5 text-sm shadow-2xl shadow-primary/20 active:scale-95 transition-transform uppercase font-black">Join Zelha Today</NuxtLink>
          <a href="https://wa.me/254702836266?text=Hi!%20I'd%20like%20to%20book%20a%20free%20trial%20at%20Zelha%20Fitness." target="_blank" class="btn-outline px-12 py-5 text-sm active:scale-95 transition-transform font-black uppercase">Book Free Trial</a>
        </div>
        <p class="text-gray-600 text-[10px] md:text-xs mt-8 uppercase tracking-[0.3em] font-black">No commitment required • M-Pesa accepted</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import Hero from '~/components/Hero.vue'
import TimetablePreview from '~/components/TimetablePreview.vue'
import StudioTour from '~/components/StudioTour.vue'

// SUPER SEO INJECTION
const siteTitle = 'Zelha Spin and Fitness Gym — Juja\'s Premier Studio'
const siteDesc = 'The best gym in Juja, Kenya. Safe and motivating space for Spin, HIIT, Strength Training, and Zumba. Join Zelha Fitness at Kalimoni Highway View Plaza. M-Pesa accepted!'
const siteUrl = 'https://zelhafitness.com' // Replace with actual domain

useHead({
  title: siteTitle,
  meta: [
    { name: 'description', content: siteDesc },
    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: siteUrl },
    { property: 'og:title', content: siteTitle },
    { property: 'og:description', content: siteDesc },
    { property: 'og:image', content: `${siteUrl}/images/7600786.jpg` },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:url', content: siteUrl },
    { name: 'twitter:title', content: siteTitle },
    { name: 'twitter:description', content: siteDesc },
    { name: 'twitter:image', content: `${siteUrl}/images/7600786.jpg` },
    // Keywords
    { name: 'keywords', content: 'gym in juja, fitness center juja, spin classes juja, hiit training juja, zumba juja, strength training juja, affordable gym kiambu, zelha fitness, juja farm gym' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Gym',
        'name': 'Zelha Spin and Fitness Gym',
        'image': [`${siteUrl}/images/7600786.jpg`, `${siteUrl}/images/zelha%20banner.png`],
        'description': siteDesc,
        '@id': siteUrl,
        'url': siteUrl,
        'telephone': '+254702836266',
        'priceRange': 'KSh 400 - KSh 3000',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Kalimoni Highway View Plaza (Former Uchumi)',
          'addressLocality': 'Juja',
          'addressRegion': 'Kiambu',
          'addressCountry': 'KE'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': -1.108053,
          'longitude': 37.013838
        },
        'openingHoursSpecification': {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          'opens': '06:00',
          'closes': '21:00'
        },
        'sameAs': [
          'https://www.instagram.com/zelhafitness',
          'https://www.facebook.com/zelhaaFitness',
          'https://www.tiktok.com/@zelhafitness'
        ]
      })
    }
  ]
})

// Icon Components (Surgical SVG Icons)
const UserIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2.5', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' })])
const FlameIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2.5', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.99 7.99 0 0120 13a7.99 7.99 0 01-2.343 5.657z' })])
const DumbbellIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2.5', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M6.75 6.75h10.5M6.75 17.25h10.5M2.25 12h19.5M4.5 6.75v10.5M19.5 6.75v10.5M12 2.25v3.75M12 18v3.75' })])
const ClockIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2.5', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z' })])
const TrophyIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2.5', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' })])
const AwardIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2.5', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' })])
const UsersIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2.5', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' })])
const ZapIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2.5', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M13 10V3L4 14h7v7l9-11h-7z' })])
const HeartIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2.5', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' })])
const MapPinIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2.5', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' }), h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M15 11a3 3 0 11-6 0 3 3 0 016 0z' })])
const PhoneIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2.5', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M3 5a2 2 0 012-2h3.28a1 1 0 011.94.484l-1.1 3.5a1 1 0 01-1.23.696l-1.57-.393a11 11 0 007.879 7.879l.393-1.57a1 1 0 01.696-1.23l3.5-1.1a1 1 0 011.085.39l2.1 3.1a1 1 0 01-.137 1.34l-3.3 2.5a1 1 0 01-1.077.127 15.006 15.006 0 01-9.9-9.9 1 1 0 01.127-1.077l2.5-3.3z' })])

const stats = [
  { value: '200+', label: 'Active Members' },
  { value: '2', label: 'Lead Trainers' },
  { value: '8+', label: 'Programs' },
  { value: '6', label: 'Days a Week' },
]

const whoWeHelp = [
  { icon: UserIcon, title: 'Beginners', desc: 'First time at a gym? We guide you every step.' },
  { icon: FlameIcon, title: 'Weight Loss', desc: 'Science-backed fat loss programs that work.' },
  { icon: DumbbellIcon, title: 'Muscle Gain', desc: 'Build strength with our coaching and weights.' },
  { icon: ClockIcon, title: 'Busy Pros', desc: 'Efficient sessions that fit your schedule.' },
  { icon: TrophyIcon, title: 'Athletes', desc: 'High-performance conditioning and training.' },
]

const programs = [
  { name: 'Spin Cycling', desc: 'High-intensity rides to energetic music', image: '/images/577562443_818263040962429_8703738815204600603_n.jpg' },
  { name: 'HIIT Training', desc: 'Burn fat fast with intense intervals', image: '/images/574572522_812280874893979_1305975096083296830_n.jpg' },
  { name: 'Strength', desc: 'Build lean muscle and core power', image: '/images/483066964_632006999588035_23325673919236385_n.jpg' },
  { name: 'Coaching', desc: '1-on-1 focus for maximum results', image: '/images/483933409_632196279569107_5415312179917941573_n.jpg' },
]

const benefits = [
  { icon: AwardIcon, title: 'Certified Coaches', desc: 'Levis and Martin are qualified experts in strength and cardio.' },
  { icon: UsersIcon, title: 'Supportive Tribe', desc: 'Our members motivate each other. No one trains alone.' },
  { icon: ZapIcon, title: 'Modern Gear', desc: 'Spin bikes, free weights and HIIT tools — all well maintained.' },
  { icon: HeartIcon, title: 'Zero Judgment', desc: 'A welcoming space for every body type and fitness level.' },
]

const pricingPlans = [
  {
    name: 'Drop-In',
    price: 'KSh 400',
    period: 'Per day · Students KSh 300',
    features: ['Access to all classes', 'No commitment', 'Same-day booking'],
    featured: false,
  },
  {
    name: 'Students',
    price: 'KSh 2,500',
    period: 'Per month · ID required',
    features: ['Full gym access', 'All group classes', 'KSh 500 discount'],
    featured: false,
  },
  {
    name: 'Regular',
    price: 'KSh 3,000',
    period: 'Per month · Most popular',
    features: ['Full gym access', 'Spin & HIIT', 'Zumba included'],
    featured: true,
  },
  {
    name: 'Personal',
    price: '+1,500',
    period: 'Monthly Add-on',
    features: ['1-on-1 coaching', 'Custom meal plan', 'Weekly check-ins'],
    featured: false,
  },
]

const trainers = [
  {
    name: 'Levis Alozio',
    specialties: 'Strength training, spin, kickboxing and calisthenics.',
    image: '/images/coach/1.jpg'
  },
  {
    name: 'Martin Muturi',
    specialties: 'Strength training, HIIT and swimming classes.',
    image: '/images/coach/2.png'
  },
]

const testimonials = [
  {
    text: "I've been a member for 6 months and the results are incredible. The trainers are patient and the spin classes are my favourite.",
    name: 'Sarah M.',
    type: 'Monthly Member',
  },
  {
    text: "Lost 8kg in 3 months with the HIIT sessions. The coaches really push you in the best way possible. Best gym in Juja!",
    name: 'James K.',
    type: 'Regular Member',
  },
]

const locationDetails = [
  { icon: MapPinIcon, title: 'Find Us', content: 'Kalimoni Highway View Plaza (Former Uchumi),<br/>Juja, Kenya (Near Juja Farm & Town CBD)' },
  { icon: ClockIcon, title: 'Open Hours', content: 'Mon – Sat: 6:00 AM – 9:00 PM<br/>Sunday: Rest Day (Closed)' },
  { icon: PhoneIcon, title: 'Contact', content: '0702 836 266 / 0110 719 277' },
]
</script>