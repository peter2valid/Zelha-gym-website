<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <img
      src="/images/7600786.jpg"
      alt="Zelha Fitness Team"
      class="absolute inset-0 object-cover w-full h-full opacity-70"
    />
    <!-- Gradient overlay: transparent top, dark bottom for text readability -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

    <div class="relative z-10 w-full px-6 sm:px-10 lg:px-16 max-w-5xl">
      <h1 class="hero-heading text-primary mb-3 animate-fade-in-up">
        <span class="block">ZELHA</span>
        <span class="block text-white" style="font-size: 0.4em; letter-spacing: 0.3em; font-weight: 400;">spin &amp; fitness</span>
      </h1>
      <p class="hero-subtitle text-gray-200 mb-8 max-w-2xl animate-fade-in-up delay-100">
        Join Zelha Spin &amp; Fitness for energising spin classes, HIIT sessions and strength training in the heart of Juja.
      </p>
      <div class="flex flex-wrap gap-4 animate-fade-in-up delay-200">
        <NuxtLink to="/contact" class="bg-primary text-secondary px-8 py-3 font-semibold shadow-lg hover:bg-primary-dark hover:scale-105 active:scale-95 transition transform duration-200">
          Join Now
        </NuxtLink>
        <NuxtLink to="/timetable" class="bg-transparent border-2 border-primary text-primary px-8 py-3 font-semibold hover:bg-primary hover:text-secondary hover:scale-105 active:scale-95 transition transform duration-200">
          View Timetable
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// no script logic required for hero
</script>

<style scoped>
.hero-heading {
  font-family: 'Bebas Neue', 'Impact', sans-serif;
  font-size: clamp(3rem, 8vw, 7rem);
  line-height: 0.95;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-shadow: 0 2px 20px rgba(245, 196, 0, 0.3);
}

.hero-subtitle {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  font-weight: 400;
  line-height: 1.6;
}
</style>