<template>
  <div>
    <Hero />
    <!-- Overview section -->
    <section class="py-12 bg-secondary-light">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-primary mb-6">Why Choose Zelha?</h2>
        <p class="max-w-3xl mx-auto text-gray-200 mb-8">
          At Zelha Spin &amp; Fitness, we focus on community-driven workouts that challenge and inspire you. Whether you're a student, a busy professional, or a cardio enthusiast, our classes are designed to help you achieve your fitness goals in a supportive environment.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="group p-6 bg-secondary shadow-lg border border-transparent hover:border-primary transition duration-300 overflow-hidden">
            <img
              src="/images/577562443_818263040962429_8703738815204600603_n.jpg"
              alt="Spin Classes at Zelha"
              class="w-full h-48 object-cover mb-4 group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <h3 class="text-xl font-semibold text-primary mb-4">Spin Classes</h3>
            <p>High-energy cycling sessions that torch calories and improve endurance.</p>
          </div>
          <div class="group p-6 bg-secondary shadow-lg border border-transparent hover:border-primary transition duration-300 overflow-hidden">
            <img
              src="/images/574572522_812280874893979_1305975096083296830_n.jpg"
              alt="Group HIIT Session"
              class="w-full h-48 object-cover mb-4 group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <h3 class="text-xl font-semibold text-primary mb-4">HIIT &amp; Functional Training</h3>
            <p>Dynamic workouts combining strength and cardio for all-round fitness.</p>
          </div>
          <div class="group p-6 bg-secondary shadow-lg border border-transparent hover:border-primary transition duration-300 overflow-hidden">
            <img
              src="/images/483933409_632196279569107_5415312179917941573_n.jpg"
              alt="Personal Coaching"
              class="w-full h-48 object-cover mb-4 group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <h3 class="text-xl font-semibold text-primary mb-4">Personal Coaching</h3>
            <p>One-on-one sessions tailored to your unique fitness goals.</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Quick timetable preview (first three days) -->
    <section class="py-12 bg-secondary">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-primary mb-6 text-center">This Week's Highlights</h2>
        <TimetablePreview />
        <div class="text-center mt-6">
          <NuxtLink to="/timetable" class="inline-block bg-primary text-secondary px-6 py-3 font-semibold hover:bg-primary-dark transition">
            Full Timetable
          </NuxtLink>
        </div>
      </div>
    </section>
    <!-- Pricing summary -->
    <PricingCards />
  </div>
</template>

<script setup lang="ts">
import Hero from '~/components/Hero.vue'
import PricingCards from '~/components/PricingCards.vue'
import TimetablePreview from '~/components/TimetablePreview.vue'
</script>