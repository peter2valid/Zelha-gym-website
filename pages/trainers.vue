<template>
  <div>
    <section class="py-12 bg-secondary-light text-center">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-primary mb-4 animate-fade-in-up">Meet Our Trainers</h1>
        <p class="text-gray-200 max-w-2xl mx-auto animate-fade-in-up delay-100">
          Meet the coaches behind our strength, spinning, aerobics and HIIT sessions.
        </p>
      </div>
    </section>
    <section class="py-12 bg-secondary">
      <div class="container mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="(trainer, i) in trainers" :key="i" class="bg-secondary-light p-6 shadow-lg text-center trainer-card opacity-0 hover:scale-105 transition transform duration-300">
          <img :src="coachPhoto" :alt="trainer.name" class="w-40 h-40 mx-auto mb-4 object-cover border-4 border-primary" />
          <h3 class="text-xl font-semibold text-primary mb-2">{{ trainer.name }}</h3>
          <p class="text-gray-200 mb-2 font-medium">{{ trainer.specialties }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import coachPhoto from '~/assets/images/coach/1.jpg'

const trainers = [
  {
    name: 'Levis Alozio',
    specialties: 'Strength training, aerobics, spinning, HIIT, kickboxing and calisthenics.'
  },
  {
    name: 'Martin Muturi',
    specialties: 'Strength training, aerobics, spinning, HIIT and swimming classes.'
  }
]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up')
        entry.target.classList.remove('opacity-0')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.trainer-card').forEach((el) => {
    observer.observe(el)
  })
})
</script>