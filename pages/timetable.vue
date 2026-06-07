<template>
  <div>
    <!-- Hero -->
    <section class="relative py-28 overflow-hidden">
      <img src="/images/577562443_818263040962429_8703738815204600603_n.jpg" alt="Zelha Fitness Timetable" class="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div class="absolute inset-0 bg-gradient-to-b from-black/80 to-secondary"></div>
      <div class="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <p class="text-primary text-xs font-black uppercase tracking-[0.3em] mb-4">Plan Your Week</p>
        <h1 class="text-white uppercase mb-6" style="font-family: 'Bebas Neue', Impact, sans-serif; font-size: clamp(3rem, 8vw, 6rem); line-height: 0.95;">Class <span class="text-primary">Schedule</span></h1>
        <p class="text-gray-300 text-lg max-w-2xl mx-auto">
          Find the perfect time to sweat. Our weekly schedule features Spin, HIIT, Zumba and more — all led by expert coaches at our Juja studio.
        </p>
      </div>
    </section>

    <!-- Timetable Grid -->
    <section class="bg-secondary">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-16">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 border-l-4 border-primary pl-6">
          <div>
            <h2 class="text-white font-black uppercase tracking-wide text-2xl">Weekly Highlights</h2>
            <p class="text-gray-400 text-sm mt-1">Sessions run Monday through Saturday. M-Pesa accepted for all classes.</p>
          </div>
          <div class="flex gap-4">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 bg-primary rounded-full"></span>
              <span class="text-gray-300 text-[10px] font-black uppercase tracking-widest">Morning & Evening Sessions</span>
            </div>
          </div>
        </div>
      </div>
      <TimetableGrid />
    </section>

    <!-- Class Types Legend -->
    <section class="py-16 bg-secondary-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div class="text-center mb-12">
          <h2 class="section-heading">Our Sessions</h2>
          <p class="section-sub mt-2">What to expect in each class.</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="type in classTypes" :key="type.name" class="p-6 border border-gray-800 bg-secondary/50 rounded-sm">
            <h3 class="text-primary font-black uppercase tracking-wide mb-3">{{ type.name }}</h3>
            <p class="text-gray-400 text-xs leading-relaxed">{{ type.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-primary">
      <div class="max-w-3xl mx-auto px-4 text-center">
        <h2 class="text-black uppercase mb-4" style="font-family: 'Bebas Neue', Impact, sans-serif; font-size: clamp(2rem, 6vw, 4rem);">
          Book Your Spot
        </h2>
        <p class="text-black/70 text-lg mb-8">Some classes fill up fast! WhatsApp us to book your spot in advance or to enquire about specific sessions.</p>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="https://wa.me/254702836266?text=Hi!%20I'd%20like%20to%20book%20a%20spot%20for%20a%20class%20at%20Zelha%20Fitness." target="_blank" class="bg-black text-primary px-10 py-4 font-black uppercase tracking-wide text-sm hover:bg-gray-900 transition-colors shadow-xl">Book via WhatsApp</a>
          <NuxtLink to="/join" class="border-2 border-black text-black px-10 py-4 font-black uppercase tracking-wide text-sm hover:bg-black hover:text-primary transition-colors">Join as Member</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import TimetableGrid from '~/components/TimetableGrid.vue'

useHead({ title: 'Class Schedule — Zelha Spin and Fitness Gym' })

const classTypes = [
  { name: 'Spin Cycling', desc: 'High-intensity indoor cycling that builds endurance and burns serious calories.' },
  { name: 'HIIT', desc: 'Fast-paced interval training designed for maximum fat burn and metabolic boost.' },
  { name: 'Strength Training', desc: 'Focused workouts using free weights to build lean muscle and power.' },
  { name: 'Zumba & Aerobics', desc: 'Fun, energetic dance fitness and rhythmic movements for full-body conditioning.' },
]
</script>