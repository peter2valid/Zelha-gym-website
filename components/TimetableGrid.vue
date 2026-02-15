<template>
  <section class="py-12 bg-secondary-light">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-primary mb-8 text-center animate-on-scroll opacity-0">Weekly Class Timetable</h2>
      <div v-if="timetable" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(day, index) in timetable.schedule" 
          :key="day.day" 
          class="bg-secondary p-6 shadow-lg border border-secondary-light timetable-card opacity-0 transform transition duration-300 hover:scale-105"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <h3 class="text-xl font-semibold text-primary mb-4">{{ day.day }}</h3>
          <ul v-if="day.sessions.length > 0" class="space-y-2">
            <li v-for="(session, index) in day.sessions" :key="index" class="flex flex-col">
              <span class="text-sm text-primary font-semibold">{{ session.time }}</span>
              <span class="text-gray-100">{{ session.class }} with {{ session.coach }}</span>
            </li>
          </ul>
          <p v-else class="text-gray-400">No classes scheduled.</p>
        </div>
      </div>
      <p v-else class="text-center text-gray-300">Loading timetable…</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAsyncData } from '#app'
import { onMounted } from 'vue'


const { data: timetable } = await useAsyncData('timetable', () =>
  queryContent('/timetable').findOne()
)

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

  document.querySelectorAll('.animate-on-scroll, .timetable-card').forEach((el) => {
    observer.observe(el)
  })
})
</script>