<template>
  <div>
    <!-- Hero -->
    <section class="relative py-28 overflow-hidden">
      <img src="/images/574572522_812280874893979_1305975096083296830_n.jpg" alt="Zelha Spin and Fitness Gym" class="absolute inset-0 w-full h-full object-cover opacity-25" />
      <div class="absolute inset-0 bg-gradient-to-b from-black/80 to-secondary"></div>
      <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <p class="text-primary text-xs font-black uppercase tracking-[0.3em] mb-4">Our Story</p>
        <h1 class="text-white uppercase mb-6" style="font-family: 'Bebas Neue', Impact, sans-serif; font-size: clamp(3rem, 8vw, 6rem); line-height: 0.95;">About <span class="text-primary">Zelha</span> Fitness</h1>
        <p class="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          A safe, motivating fitness community in the heart of Juja, Kenya — built for people who want real results.
        </p>
      </div>
    </section>

    <!-- Gym Story -->
    <section class="py-16 bg-secondary">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="section-heading mb-6">Our Story</h2>
            <p class="text-gray-300 leading-relaxed mb-4">
              Zelha Spin and Fitness Gym was founded with a simple but powerful vision: to create a fitness space in Juja where everyone — regardless of fitness level, age or background — feels welcome and motivated to train.
            </p>
            <p class="text-gray-400 leading-relaxed mb-4">
              Located at Kalimoni Highway View Plaza (Former Uchumi), we've grown into a vibrant community of members who train together, support each other, and celebrate each other's wins.
            </p>
            <p class="text-gray-400 leading-relaxed">
              From energetic spin classes and HIIT sessions to strength training and personal coaching, everything we offer is designed to help you enjoy your fitness journey and achieve lasting results.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <img src="/images/577562443_818263040962429_8703738815204600603_n.jpg" alt="Spin classes at Zelha" class="w-full h-52 object-cover" loading="lazy" />
            <img src="/images/483066964_632006999588035_23325673919236385_n.jpg" alt="Strength training" class="w-full h-52 object-cover mt-8" loading="lazy" />
            <img src="/images/484517462_632196166235785_8102135649951883908_n.jpg" alt="Core training" class="w-full h-52 object-cover" loading="lazy" />
            <img src="/images/483933409_632196279569107_5415312179917941573_n.jpg" alt="Our community" class="w-full h-52 object-cover mt-8" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- Mission + Vision -->
    <section class="py-16 bg-secondary-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid md:grid-cols-2 gap-6">
        <div class="border-l-4 border-primary pl-6 py-4">
          <h2 class="text-primary font-black uppercase tracking-widest text-xs mb-3">Our Mission</h2>
          <p class="text-white text-xl font-semibold leading-relaxed">
            To provide a safe, motivating space that makes you want to work out — ensuring your fitness journey is enjoyable and successful.
          </p>
        </div>
        <div class="border-l-4 border-gray-700 pl-6 py-4">
          <h2 class="text-primary font-black uppercase tracking-widest text-xs mb-3">Our Vision</h2>
          <p class="text-white text-xl font-semibold leading-relaxed">
            To become Juja's most trusted fitness community — where every member thrives, every goal is achieved, and no one trains alone.
          </p>
        </div>
      </div>
    </section>

    <!-- Core Values -->
    <section class="py-16 bg-secondary">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div class="text-center mb-10">
          <h2 class="section-heading">Our Core Values</h2>
          <p class="section-sub mt-2 mx-auto">The principles that guide everything we do at Zelha.</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div v-for="value in coreValues" :key="value.title" class="card-dark p-6 text-center">
            <div class="flex justify-center mb-3">
              <component :is="value.icon" class="w-10 h-10 text-primary" />
            </div>
            <h3 class="text-primary font-black uppercase tracking-wide text-sm">{{ value.title }}</h3>
            <p class="text-gray-500 text-xs mt-2 uppercase font-black leading-tight">{{ value.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Who We're For -->
    <section class="py-16 bg-secondary-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="section-heading mb-6">Who Zelha Is For</h2>
            <p class="text-gray-400 mb-6 leading-relaxed">Whether you're a total beginner or a seasoned athlete, Zelha has a program and a trainer for you.</p>
            <ul class="space-y-4">
              <li v-for="who in whoForList" :key="who" class="flex items-center gap-3 text-gray-300">
                <span class="text-primary font-black flex-shrink-0">→</span>
                {{ who }}
              </li>
            </ul>
          </div>
          <div>
            <img src="/images/7600786.jpg" alt="Zelha Fitness community" class="w-full h-80 object-cover rounded-sm shadow-2xl" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- Facilities -->
    <section class="py-16 bg-secondary">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div class="text-center mb-10">
          <h2 class="section-heading">Our Facilities</h2>
          <p class="section-sub mt-2 mx-auto">Everything you need for a complete workout — clean, modern and well-maintained.</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div v-for="facility in facilities" :key="facility.name" class="card-dark p-6 flex gap-5 group">
            <div class="flex-shrink-0">
              <component :is="facility.icon" class="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h3 class="text-white font-black text-sm uppercase tracking-wide mb-1 leading-none">{{ facility.name }}</h3>
              <p class="text-gray-500 text-xs leading-relaxed mt-2">{{ facility.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Virtual Tour -->
    <StudioTour />

    <!-- CTA -->
    <section class="py-16 bg-primary">
      <div class="max-w-3xl mx-auto px-4 text-center">
        <h2 class="text-black uppercase mb-4" style="font-family: 'Bebas Neue', Impact, sans-serif; font-size: clamp(2rem, 6vw, 4rem);">
          Come See It for Yourself
        </h2>
        <p class="text-black/70 text-lg mb-8">Book a free gym tour — no pressure, no commitment. Just come in and meet the team.</p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink to="/join" class="bg-black text-primary px-8 py-4 font-black uppercase tracking-wide text-sm hover:bg-gray-900 transition-colors">Join Now</NuxtLink>
          <a href="https://wa.me/254702836266?text=Hi!%20I'd%20like%20to%20book%20a%20free%20tour%20of%20Zelha%20Fitness%20Gym." target="_blank" class="border-2 border-black text-black px-8 py-4 font-black uppercase tracking-wide text-sm hover:bg-black hover:text-primary transition-colors">Book Free Tour</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import StudioTour from '~/components/StudioTour.vue'

useHead({ title: 'About Us — Zelha Spin and Fitness Gym' })

// Icon Components
const TrophyIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2.5', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' })])
const UsersIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2.5', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' })])
const ChartBarIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2.5', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' })])
const ShieldCheckIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2.5', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' })])
const HeartIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2.5', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' })])

const BikeIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2.5', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M5 16a3 3 0 100-6 3 3 0 000 6zM15 16a3 3 0 100-6 3 3 0 000 6zM15 13l-3-4-2 2-3-3M12 18V9' })])
const DumbbellIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2.5', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M6.75 6.75h10.5M6.75 17.25h10.5M2.25 12h19.5M4.5 6.75v10.5M19.5 6.75v10.5' })])
const ZapIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2.5', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M13 10V3L4 14h7v7l9-11h-7z' })])
const SparklesIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2.5', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z' })])
const LockClosedIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2.5', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' })])

const coreValues = [
  { icon: TrophyIcon, title: 'Discipline', desc: 'Showing up consistently and pushing through challenges.' },
  { icon: UsersIcon, title: 'Community', desc: 'Supporting and uplifting every member of the gym.' },
  { icon: ChartBarIcon, title: 'Progress', desc: 'Celebrating every step forward, big or small.' },
  { icon: ShieldCheckIcon, title: 'Safety', desc: 'Proper form, clean equipment and guided training.' },
  { icon: HeartIcon, title: 'Respect', desc: 'For every person, at every fitness level.' },
]

const whoForList = [
  'Beginners who have never set foot in a gym',
  'People wanting to lose weight and tone up',
  'Those looking to build muscle and strength',
  'Busy professionals who need efficient workouts',
  'Students looking for affordable fitness options',
  'Anyone who wants to feel good and stay healthy',
]

const facilities = [
  { icon: BikeIcon, name: 'Spin Studio', desc: 'Dedicated spin bikes with energetic music and lighting.' },
  { icon: DumbbellIcon, name: 'Free Weights Area', desc: 'Dumbbells, barbells and weight benches for all levels.' },
  { icon: HeartIcon, name: 'Cardio Zone', desc: 'Treadmills and cardio equipment for endurance training.' },
  { icon: ZapIcon, name: 'Functional Training', desc: 'Open floor for HIIT, boot camp and bodyweight training.' },
  { icon: SparklesIcon, name: 'Clean Environment', desc: 'Regularly cleaned and sanitized equipment and spaces.' },
  { icon: LockClosedIcon, name: 'Safe Space', desc: 'Secure, well-lit facility monitored for member safety.' },
]
</script>