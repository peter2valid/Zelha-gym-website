<template>
  <div>
    <section class="py-12 bg-secondary-light text-center">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-primary mb-4 animate-fade-in-up">Meet Our Trainers</h1>
        <p class="text-gray-200 max-w-2xl mx-auto animate-fade-in-up delay-100">
          Our certified trainers are passionate about helping you achieve your fitness goals. Get to know the faces behind our motivating workouts.
        </p>
      </div>
    </section>
    <section class="py-12 bg-secondary">
      <div class="container mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="(trainer, i) in trainers" :key="i" class="bg-secondary-light p-6 shadow-lg text-center trainer-card opacity-0 hover:scale-105 transition transform duration-300">
          <img :src="trainer.photo" :alt="trainer.name" class="w-40 h-40 mx-auto mb-4 object-cover border-4 border-primary" />
          <h3 class="text-xl font-semibold text-primary mb-2">{{ trainer.name }}</h3>
          <p class="text-gray-200 mb-2 font-medium">{{ trainer.role }}</p>
          <p class="text-gray-400 text-sm">{{ trainer.bio }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const trainers = [
  {
    name: 'James Mwangi',
    role: 'Spin Instructor',
    bio: 'With over 5 years of experience, James brings energy and motivation to every spin class.',
    photo: '/images/483066964_632006999588035_23325673919236385_n.jpg'
  },
  {
    name: 'Mary Wambui',
    role: 'HIIT Coach',
    bio: 'Mary specialises in functional training and HIIT, ensuring workouts are effective and fun.',
    photo: '/images/483933409_632196279569107_5415312179917941573_n.jpg'
  },
  {
    name: 'Sarah Njoroge',
    role: 'Strength Trainer',
    bio: 'Sarah focuses on strength conditioning and mobility, helping clients build a strong foundation.',
    photo: '/images/484517462_632196166235785_8102135649951883908_n.jpg'
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