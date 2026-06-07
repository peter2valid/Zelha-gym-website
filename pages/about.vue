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
            <div class="text-4xl mb-3">{{ value.icon }}</div>
            <h3 class="text-primary font-black uppercase tracking-wide text-sm">{{ value.title }}</h3>
            <p class="text-gray-500 text-xs mt-2">{{ value.desc }}</p>
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
            <img src="/images/7600786.jpg" alt="Zelha Fitness community" class="w-full h-80 object-cover" loading="lazy" />
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
          <div v-for="facility in facilities" :key="facility.name" class="card-dark p-5 flex gap-4">
            <span class="text-primary text-2xl flex-shrink-0">{{ facility.icon }}</span>
            <div>
              <h3 class="text-white font-bold text-sm uppercase tracking-wide">{{ facility.name }}</h3>
              <p class="text-gray-500 text-sm mt-1">{{ facility.desc }}</p>
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
useHead({ title: 'About Us — Zelha Spin and Fitness Gym' })

const coreValues = [
  { icon: '🏋️', title: 'Discipline', desc: 'Showing up consistently and pushing through challenges.' },
  { icon: '🤝', title: 'Community', desc: 'Supporting and uplifting every member of the gym.' },
  { icon: '📈', title: 'Progress', desc: 'Celebrating every step forward, big or small.' },
  { icon: '🛡️', title: 'Safety', desc: 'Proper form, clean equipment and guided training.' },
  { icon: '🌟', title: 'Respect', desc: 'For every person, at every fitness level.' },
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
  { icon: '🚴', name: 'Spin Studio', desc: 'Dedicated spin bikes with energetic music and lighting.' },
  { icon: '🏋️', name: 'Free Weights Area', desc: 'Dumbbells, barbells and weight benches for all levels.' },
  { icon: '❤️', name: 'Cardio Zone', desc: 'Treadmills and cardio equipment for endurance training.' },
  { icon: '⚡', name: 'Functional Training', desc: 'Open floor for HIIT, boot camp and bodyweight training.' },
  { icon: '🧹', name: 'Clean Environment', desc: 'Regularly cleaned and sanitized equipment and spaces.' },
  { icon: '🔒', name: 'Safe Space', desc: 'Secure, well-lit facility monitored for member safety.' },
]
</script>
