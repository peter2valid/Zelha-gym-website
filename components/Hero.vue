<template>
  <section class="relative min-h-[90vh] flex items-center overflow-hidden">
    <img
      src="/images/7600786.jpg"
      alt="Zelha Spin and Fitness Gym team training"
      class="absolute inset-0 object-cover w-full h-full"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>

    <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
      <!-- Eyebrow -->
      <p class="text-primary text-xs sm:text-sm font-black uppercase tracking-[0.3em] mb-4 animate-fade-in-up">
        Juja's Premier Fitness Studio
      </p>

      <!-- Headline -->
      <h1 class="hero-heading text-white mb-2 animate-fade-in-up delay-100">
        <span class="text-primary block leading-none">Zelha</span>
        <span class="block leading-none">Spin &amp; Fitness</span>
      </h1>

      <!-- Tagline -->
      <p class="text-gray-200 text-lg sm:text-xl md:text-2xl font-light mb-8 max-w-xl animate-fade-in-up delay-200">
        Your Premier Fitness Companion — join the gym that <em class="text-primary not-italic font-semibold">makes you want to work out.</em>
      </p>

      <!-- CTAs -->
      <div class="flex flex-wrap gap-3 animate-fade-in-up delay-300">
        <NuxtLink to="/join" class="btn-primary text-sm px-7 py-3.5 shadow-lg shadow-primary/20">
          Join Now
        </NuxtLink>
        <NuxtLink to="/pricing" class="btn-outline text-sm px-7 py-3.5">
          View Memberships
        </NuxtLink>
        <a
          href="https://wa.me/254702836266?text=Hi%21%20I%27d%20like%20to%20book%20a%20free%20gym%20tour%20at%20Zelha%20Fitness."
          target="_blank"
          rel="noopener noreferrer"
          class="btn-ghost text-sm px-7 py-3.5"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Book Free Tour
        </a>
      </div>

      <!-- Trust badges -->
      <div class="mt-10 flex flex-wrap gap-x-6 gap-y-2 animate-fade-in-up delay-400">
        <span v-for="badge in badges" :key="badge" class="flex items-center gap-1.5 text-xs text-gray-300 uppercase tracking-wide font-semibold">
          <span class="text-primary font-black">✓</span> {{ badge }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const badges = [
  'Certified Trainers',
  'M-Pesa Accepted',
  'Beginner Friendly',
  'Modern Equipment',
  'Flexible Plans',
]
</script>

<style scoped>
.hero-heading {
  font-family: 'Bebas Neue', 'Impact', sans-serif;
  font-size: clamp(3.5rem, 10vw, 8rem);
  line-height: 0.92;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  text-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
}
</style>
