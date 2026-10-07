<template>
  <div>
    <!-- Hero -->
    <section class="relative py-28 overflow-hidden">
      <img src="/images/spin-class-juja.jpg" alt="Zelha Fitness Timetable" class="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div class="absolute inset-0 bg-gradient-to-b from-black/80 to-secondary"></div>
      <div class="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <p class="text-primary text-xs font-black uppercase tracking-[0.3em] mb-4">Plan Your Week</p>
        <h1 class="text-white uppercase mb-6" style="font-family: 'Bebas Neue', Impact, sans-serif; font-size: clamp(3rem, 8vw, 6rem); line-height: 0.95;">Class <span class="text-primary">Schedule</span></h1>
        <p class="text-gray-300 text-lg max-w-2xl mx-auto">
          Find the perfect time to sweat. Our weekly schedule features Spin, HIIT, Step Aerobics, Zumba (Cardio), Boot Camp and more — plus on-demand 6 AM morning classes, Monday to Friday.
        </p>
      </div>
    </section>

    <!-- Timetable Grid -->
    <section class="bg-secondary">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-16">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 border-l-4 border-primary pl-6">
          <div>
            <h2 class="text-white font-black uppercase tracking-wide text-2xl">Weekly Highlights</h2>
            <p class="text-gray-400 text-sm mt-1">Sessions run Monday through Saturday. Gym opens 5:15 AM weekdays and 6:30 AM on Saturday.</p>
          </div>
          <div class="flex gap-4">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 bg-primary rounded-full"></span>
              <span class="text-gray-300 text-[10px] font-black uppercase tracking-widest">Scheduled</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 border-2 border-dashed border-primary rounded-full"></span>
              <span class="text-gray-300 text-[10px] font-black uppercase tracking-widest">On Demand</span>
            </div>
          </div>
        </div>
        <MorningOnDemand />
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
import MorningOnDemand from '~/components/MorningOnDemand.vue'


usePageSeo({
  title: "Gym Class Timetable in Juja | Zelha Spin and Fitness",
  description: "Weekly class times at Zelha Fitness, Juja: Spin, HIIT, Step Aerobics, Zumba (Cardio), Boot Camp and outdoor sessions, plus on-demand 6 AM classes Mon to Fri.",
  path: '/timetable',
  breadcrumb: 'Timetable',
  image: '/images/spin-class-juja.jpg',
})

const classTypes = [
  { name: 'Spin Cycling', desc: 'High-intensity indoor cycling that builds endurance and burns serious calories.' },
  { name: 'HIIT', desc: 'Fast-paced interval training designed for maximum fat burn and metabolic boost.' },
  { name: 'Strength Training', desc: 'Focused workouts using free weights to build lean muscle and power.' },
  { name: 'Zumba (Cardio)', desc: 'Fun, energetic dance cardio that gets your heart rate up without feeling like a workout.' },
  { name: 'Step Aerobics', desc: 'Rhythmic step-platform routines that build stamina, coordination and leg strength.' },
  { name: 'Aerobics & Power', desc: 'Mid-week aerobics paired with power moves for full-body conditioning.' },
  { name: 'HIIT / Boot Camp / Outdoors', desc: 'Saturday morning session — rotating between HIIT, boot camp and outdoor training.' },
  { name: 'Morning On Demand', desc: '6:00 – 7:00 AM, Monday to Friday. Request your day on WhatsApp and we will confirm the class.' },
]
</script>