<template>
  <div>
    <!-- Hero -->
    <section class="relative py-28 overflow-hidden">
      <img src="/images/strength-training-juja.jpg" alt="Zelha Fitness Programs" class="absolute inset-0 w-full h-full object-cover opacity-25" loading="eager" decoding="async" />
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
    <section v-for="group in programGroups" :key="group.title" class="py-16" :class="group.bg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div class="text-center mb-12">
          <h2 class="section-heading">{{ group.title }}</h2>
          <p class="section-sub mt-3 max-w-2xl mx-auto">{{ group.sub }}</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="prog in group.items" :key="prog.name" class="card-dark overflow-hidden group flex flex-col">
            <div class="relative overflow-hidden h-56">
              <img :src="prog.image" :alt="prog.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div class="absolute bottom-4 left-4">
                <span class="text-primary font-black uppercase tracking-widest text-xs">{{ prog.category }}</span>
              </div>
            </div>
            <div class="p-6 flex flex-col flex-1">
              <h3 class="text-white font-black text-xl uppercase tracking-wide mb-2">{{ prog.name }}</h3>
              <p v-if="prog.price" class="text-primary text-xs font-black uppercase tracking-widest mb-3">{{ prog.price }}</p>
              <p class="text-gray-400 text-sm leading-relaxed mb-4">{{ prog.description }}</p>

              <div class="mb-4 flex-1">
                <h4 class="text-primary text-xs font-black uppercase tracking-widest mb-3">Key Benefits</h4>
                <ul class="space-y-2">
                  <li v-for="benefit in prog.benefits" :key="benefit" class="flex items-center gap-2 text-gray-300 text-sm">
                    <span class="text-primary flex-shrink-0">
                      <CheckIcon class="w-4 h-4" />
                    </span>
                    {{ benefit }}
                  </li>
                </ul>
              </div>

              <div class="flex items-center justify-between gap-4 pt-4 border-t border-gray-800">
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


const programGroups = [
  {
    title: 'Group Classes',
    sub: 'Coach-led sessions on our weekly timetable — all included in your membership.',
    bg: 'bg-secondary',
    items: [
      {
        name: 'Spin / Cycling',
        category: 'Cardio',
        image: '/images/spin-class-juja.jpg',
        description: 'High-energy indoor cycling sessions set to pumping music. Build cardiovascular endurance, burn calories and strengthen your legs — all without the weather.',
        benefits: ['Burns 400–600 calories per session', 'Low-impact on joints', 'Great for all fitness levels', 'Improves heart health and stamina'],
        bestFor: 'Cardio fans, weight loss, beginners',
      },
      {
        name: 'HIIT Training',
        category: 'High Intensity',
        image: '/images/hiit-class-juja.jpg',
        description: 'High-Intensity Interval Training that alternates between intense bursts of activity and short recovery periods. Maximum results in minimum time.',
        benefits: ['Burns fat long after the session', 'Boosts metabolism', 'Improves speed and endurance', 'No equipment needed for some sessions'],
        bestFor: 'Everyone wanting fast results',
      },
      {
        name: 'Strength Training',
        category: 'Strength',
        image: '/images/strength-training-juja.jpg',
        description: 'Progressive weight training using free weights, barbells and resistance equipment. Build lean muscle, increase bone density and improve posture.',
        benefits: ['Build lean muscle mass', 'Increase metabolic rate', 'Improve bone health', 'Better daily functional strength'],
        bestFor: 'Muscle gain, body recomposition',
      },
      {
        name: 'Step Aerobics',
        category: 'Cardio',
        image: '/images/group-class-4.jpeg',
        description: 'Rhythmic, music-driven routines on a step platform. A classic cardio workout that builds stamina, coordination and leg strength — every Friday evening.',
        benefits: ['Great cardio conditioning', 'Tones legs and glutes', 'Improves coordination and balance', 'Fun, upbeat group energy'],
        bestFor: 'Cardio lovers, all fitness levels',
      },
      {
        name: 'Zumba (Cardio)',
        category: 'Dance Cardio',
        image: '/images/group-class-1.jpg',
        description: "Latin-inspired dance cardio that doesn't feel like exercise. Zumba combines fun choreography with heart-pumping cardio for a workout you'll actually look forward to.",
        benefits: ['Fun and energetic sessions', 'Burns 300–500 calories', 'Improves coordination', 'Great for stress relief'],
        bestFor: 'Anyone who loves music and dancing',
      },
      {
        name: 'Boot Camp',
        category: 'Group Training',
        image: '/images/functional-training-juja.jpg',
        description: 'Military-inspired group training that combines strength, cardio and conditioning. Push your limits alongside motivated classmates with trainer guidance.',
        benefits: ['Full-body conditioning', 'Team motivation and energy', 'Improves overall fitness', 'Burns serious calories'],
        bestFor: 'Those who love group energy',
      },
      {
        name: 'Aerobics & Group Fitness',
        category: 'Group',
        image: '/images/group-class-2.webp',
        description: 'Instructor-led aerobics, power training, circuits and core workouts. Train with others, stay motivated, get results.',
        benefits: ['Social, motivating environment', 'Structured workouts', 'Variety keeps it fresh', 'Suitable for all levels'],
        bestFor: 'All fitness levels',
      },
    ],
  },
  {
    title: 'Other Services',
    sub: 'Go further with one-on-one coaching, outdoor adventures and swimming.',
    bg: 'bg-secondary-light',
    items: [
      {
        name: 'Personal Training',
        category: '1-on-1 Coaching',
        price: 'From KSh 1,500',
        image: '/images/personal-training-juja.jpg',
        description: 'Work one-on-one with a certified trainer who creates a plan tailored specifically to your body, goals and schedule. The fastest way to get results.',
        benefits: ['Custom workout plan', 'Correct form and technique', 'Accountability and motivation', 'Faster, tracked progress'],
        bestFor: 'Beginners, injury recovery, fast results',
      },
      {
        name: 'Outdoors',
        category: 'Outdoor Fitness',
        image: '/images/zelha-gym-community-juja.jpg',
        description: 'Hikes, outdoor boot camps and open-air sessions around Juja and beyond. Breathe fresh air, build endurance and connect with fellow members.',
        benefits: ['Low-impact cardio', 'Mental health benefits', 'Community bonding', 'Explore beautiful Juja'],
        bestFor: 'Nature lovers, stress relief, endurance',
      },
      {
        name: 'Swimming',
        category: 'Aquatics',
        image: '/images/gym-equipment-juja.jpg',
        description: 'Swimming classes with Coach Martin, our swimming coach — learn to swim, improve your technique or use the pool as low-impact, full-body training.',
        benefits: ['Full-body, low-impact workout', 'Learn or improve technique', 'Builds lung capacity', 'Great for recovery days'],
        bestFor: 'Beginners and improvers',
      },
    ],
  },
]

usePageSeo({
  title: "Gym Classes in Juja | Spin, HIIT, Zumba and Swimming",
  description: "Spin, HIIT, strength training, step aerobics, Zumba (cardio) and boot camp classes in Juja, plus personal training from KSh 1,500, outdoors and swimming.",
  path: '/programs',
  breadcrumb: 'Programs',
  image: '/images/spin-class-juja.jpg',
  schema: [
      {
        '@type': 'ItemList',
        name: 'Fitness programs at Zelha Spin and Fitness Gym',
        itemListElement: programGroups
          .flatMap(g => g.items)
          .map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.name, description: p.description })),
      },
    ],
})

// Icon
const CheckIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '3', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M5 13l4 4L19 7' })])
</script>
