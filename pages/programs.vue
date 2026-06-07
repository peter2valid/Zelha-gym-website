<template>
  <div>
    <!-- Hero -->
    <section class="relative py-28 overflow-hidden">
      <img src="/images/483066964_632006999588035_23325673919236385_n.jpg" alt="Zelha Fitness Programs" class="absolute inset-0 w-full h-full object-cover opacity-25" />
      <div class="absolute inset-0 bg-gradient-to-b from-black/80 to-secondary"></div>
      <div class="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <p class="text-primary text-xs font-black uppercase tracking-[0.3em] mb-4">What We Offer</p>
        <h1 class="text-white uppercase mb-6" style="font-family: 'Bebas Neue', Impact, sans-serif; font-size: clamp(3rem, 8vw, 6rem); line-height: 0.95;">Our <span class="text-primary">Programs</span></h1>
        <p class="text-gray-300 text-lg max-w-2xl mx-auto">
          From spin cycling to strength training — certified coaches, real results. Find the program that matches your goal.
        </p>
      </div>
    </section>

    <!-- Programs Grid -->
    <section class="py-16 bg-secondary">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div class="grid md:grid-cols-2 gap-6">
          <div v-for="prog in programs" :key="prog.name" class="card-dark overflow-hidden group">
            <div class="relative overflow-hidden h-56">
              <img :src="prog.image" :alt="prog.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div class="absolute bottom-4 left-4">
                <span class="text-primary font-black uppercase tracking-widest text-xs">{{ prog.category }}</span>
              </div>
            </div>
            <div class="p-6">
              <h2 class="text-white font-black text-xl uppercase tracking-wide mb-2">{{ prog.name }}</h2>
              <p class="text-gray-400 text-sm leading-relaxed mb-4">{{ prog.description }}</p>

              <div class="mb-4">
                <h3 class="text-primary text-xs font-black uppercase tracking-widest mb-3">Key Benefits</h3>
                <ul class="space-y-2">
                  <li v-for="benefit in prog.benefits" :key="benefit" class="flex items-center gap-2 text-gray-300 text-sm">
                    <span class="text-primary flex-shrink-0">
                      <CheckIcon class="w-4 h-4" />
                    </span>
                    {{ benefit }}
                  </li>
                </ul>
              </div>

              <div class="flex items-center justify-between pt-4 border-t border-gray-800">
                <div>
                  <span class="text-gray-500 text-xs uppercase tracking-wide">Best for: </span>
                  <span class="text-gray-300 text-xs">{{ prog.bestFor }}</span>
                </div>
                <a
                  :href="`https://wa.me/254702836266?text=Hi!%20I'm%20interested%20in%20the%20${encodeURIComponent(prog.name)}%20program%20at%20Zelha%20Fitness.`"
                  target="_blank"
                  class="btn-primary text-xs px-4 py-2 uppercase font-black"
                >Enquire</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-primary">
      <div class="max-w-3xl mx-auto px-4 text-center">
        <h2 class="text-black uppercase mb-4" style="font-family: 'Bebas Neue', Impact, sans-serif; font-size: clamp(2rem, 6vw, 4rem);">
          Not Sure Which Program Is Right for You?
        </h2>
        <p class="text-black/70 text-lg mb-8">WhatsApp us and our trainers will help you pick the best program for your goals and fitness level.</p>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="https://wa.me/254702836266?text=Hi!%20I%20need%20help%20choosing%20the%20right%20fitness%20program%20at%20Zelha." target="_blank" class="bg-black text-primary px-8 py-4 font-black uppercase tracking-wide text-sm hover:bg-gray-900 transition-colors uppercase font-black">Chat on WhatsApp</a>
          <NuxtLink to="/timetable" class="border-2 border-black text-black px-8 py-4 font-black uppercase tracking-wide text-sm hover:bg-black hover:text-primary transition-colors uppercase font-black">View Schedule</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'

useHead({ title: 'Programs — Zelha Spin and Fitness Gym' })

// Icon
const CheckIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '3', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M5 13l4 4L19 7' })])

const programs = [
  {
    name: 'Spin / Cycling',
    category: 'Cardio',
    image: '/images/577562443_818263040962429_8703738815204600603_n.jpg',
    description: 'High-energy indoor cycling sessions set to pumping music. Build cardiovascular endurance, burn calories and strengthen your legs — all without the weather.',
    benefits: ['Burns 400–600 calories per session', 'Low-impact on joints', 'Great for all fitness levels', 'Improves heart health and stamina'],
    bestFor: 'Cardio fans, weight loss, beginners',
  },
  {
    name: 'HIIT Training',
    category: 'High Intensity',
    image: '/images/574572522_812280874893979_1305975096083296830_n.jpg',
    description: 'High-Intensity Interval Training that alternates between intense bursts of activity and short recovery periods. Maximum results in minimum time.',
    benefits: ['Burns fat long after the session', 'Boosts metabolism', 'Improves speed and endurance', 'No equipment needed for some sessions'],
    bestFor: 'Everyone wanting fast results',
  },
  {
    name: 'Strength Training',
    category: 'Strength',
    image: '/images/483066964_632006999588035_23325673919236385_n.jpg',
    description: 'Progressive weight training using free weights, barbells and resistance equipment. Build lean muscle, increase bone density and improve posture.',
    benefits: ['Build lean muscle mass', 'Increase metabolic rate', 'Improve bone health', 'Better daily functional strength'],
    bestFor: 'Muscle gain, body recomposition',
  },
  {
    name: 'Personal Training',
    category: '1-on-1 Coaching',
    image: '/images/483933409_632196279569107_5415312179917941573_n.jpg',
    description: 'Work one-on-one with a certified trainer who creates a plan tailored specifically to your body, goals and schedule. The fastest way to get results.',
    benefits: ['Custom workout plan', 'Correct form and technique', 'Accountability and motivation', 'Faster, tracked progress'],
    bestFor: 'Beginners, injury recovery, fast results',
  },
  {
    name: 'Boot Camp',
    category: 'Group Training',
    image: '/images/484517462_632196166235785_8102135649951883908_n.jpg',
    description: 'Military-inspired group training that combines strength, cardio and conditioning. Push your limits alongside motivated classmates with trainer guidance.',
    benefits: ['Full-body conditioning', 'Team motivation and energy', 'Improves overall fitness', 'Burns serious calories'],
    bestFor: 'Those who love group energy',
  },
  {
    name: 'Zumba Dance',
    category: 'Dance Fitness',
    image: '/images/membeship1.jpg',
    description: 'Latin-inspired dance fitness that doesn\'t feel like exercise. Zumba combines fun choreography with cardio for a workout that you\'ll actually look forward to.',
    benefits: ['Fun and energetic sessions', 'Burns 300–500 calories', 'Improves coordination', 'Great for stress relief'],
    bestFor: 'Anyone who loves music and dancing',
  },
  {
    name: 'Group Fitness Classes',
    category: 'Group',
    image: '/images/membership2.webp',
    description: 'A variety of instructor-led group sessions including aerobics, circuit training and core workouts. Train with others, stay motivated, get results.',
    benefits: ['Social, motivating environment', 'Structured workouts', 'Variety keeps it fresh', 'Suitable for all levels'],
    bestFor: 'All fitness levels',
  },
  {
    name: 'Hikes',
    category: 'Outdoor Fitness',
    image: '/images/7600786.jpg',
    description: 'Organized outdoor hikes around Juja and the surrounding areas. Breathe fresh air, build endurance and connect with fellow members in nature.',
    benefits: ['Low-impact cardio', 'Mental health benefits', 'Community bonding', 'Explore beautiful Juja'],
    bestFor: 'Nature lovers, stress relief, endurance',
  },
]
</script>