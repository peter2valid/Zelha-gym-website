<template>
  <div>
    <section class="py-12 bg-secondary-light text-center">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-primary mb-4 animate-fade-in-up">Gallery</h1>
        <p class="text-gray-200 max-w-2xl mx-auto animate-fade-in-up delay-100">
          A glimpse into our studio and community. See the energy, dedication and fun that make Zelha Spin &amp; Fitness special.
        </p>
      </div>
    </section>
    <section class="py-12 bg-secondary">
      <div class="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="(image, i) in images" :key="i" class="relative overflow-hidden shadow-lg group gallery-item opacity-0">
          <img :src="image.src" :alt="image.alt" class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy" />
          <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end">
            <p class="text-white text-sm p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">{{ image.alt }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const images = [
  { src: '/images/7600786.jpg', alt: 'Zelha Fitness Team' },
  { src: '/images/577562443_818263040962429_8703738815204600603_n.jpg', alt: 'Spin Bikes Studio' },
  { src: '/images/483066964_632006999588035_23325673919236385_n.jpg', alt: 'Strength Training' },
  { src: '/images/574572522_812280874893979_1305975096083296830_n.jpg', alt: 'Group HIIT Session' },
  { src: '/images/equipmeents.jpg', alt: 'Spin Room with Blue Lights' },
  { src: '/images/484517462_632196166235785_8102135649951883908_n.jpg', alt: 'Pushups & Core Training' },
  { src: '/images/483933409_632196279569107_5415312179917941573_n.jpg', alt: 'Our Trainers' },
  { src: '/images/images (2).jpeg', alt: 'Box Jumps HIIT' },
  { src: '/images/images (1).jpeg', alt: 'Working Out' },
  { src: '/images/images.jpeg', alt: 'Student Offer' },
  { src: '/images/membeship1.jpg', alt: 'Membership Training' },
  { src: '/images/membership2.webp', alt: 'Gym Workout' },
  { src: '/images/membership3.jpg', alt: 'Fitness Session' },
  { src: '/images/membersp4.jpeg', alt: 'Group Training' },
  { src: '/images/zelha banner.png', alt: 'Zelha Banner' }
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

  document.querySelectorAll('.gallery-item').forEach((el) => {
    observer.observe(el)
  })
})
</script>