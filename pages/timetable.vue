<template>
  <div class="bg-secondary min-h-screen">

    <!-- Schedule Section -->
    <section class="py-12 bg-secondary">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row gap-10 items-start">

          <!-- Left Column: Description + Image -->
          <div class="lg:w-5/12 schedule-left opacity-0">
            <h2 class="text-3xl font-bold text-white mb-4">Train With Us</h2>
            <p class="text-gray-300 mb-6 leading-relaxed">
              At Zelha Spin &amp; Fitness, we focus on community‑driven workouts that challenge and inspire you.
              Whether you're an early bird or an evening warrior, our coaches have sessions tailored for every
              fitness level. Join us in Juja for the ultimate workout experience.
            </p>
            <img
              src="/images/7600786.jpg"
              alt="Zelha Fitness Training"
              class="shadow-xl w-full object-cover max-h-96"
            />
          </div>

          <!-- Right Column: Schedule -->
          <div class="lg:w-7/12 w-full schedule-table opacity-0">
            <div v-if="timetable">

              <!-- Mobile: Card layout -->
              <div class="md:hidden space-y-4">
                <div
                  v-for="day in timetable.schedule"
                  :key="day.day"
                  class="bg-secondary border border-gray-800 p-4"
                >
                  <h3 class="text-primary font-bold text-lg mb-3 uppercase tracking-wide">{{ day.day }}</h3>
                  <div v-if="day.sessions.length > 0" class="space-y-3">
                    <div
                      v-for="(session, sIdx) in day.sessions"
                      :key="sIdx"
                      class="flex justify-between items-start border-b border-gray-800 pb-2 last:border-0 last:pb-0"
                    >
                      <div>
                        <span class="text-white font-semibold block">{{ session.class }}</span>
                        <span class="text-gray-400 text-sm">{{ session.coach }}</span>
                      </div>
                      <span class="text-primary font-bold text-sm whitespace-nowrap ml-4">{{ session.time }}</span>
                    </div>
                  </div>
                  <p v-else class="text-gray-500 italic">Rest Day</p>
                </div>
              </div>

              <!-- Desktop: Table layout -->
              <div class="hidden md:block overflow-x-auto">
                <table class="w-full border-collapse">
                  <thead>
                    <tr class="border-b-2 border-primary">
                      <th class="text-left text-primary font-bold py-3 px-4 text-sm uppercase tracking-wider">Day</th>
                      <th class="text-left text-primary font-bold py-3 px-4 text-sm uppercase tracking-wider">Time</th>
                      <th class="text-left text-primary font-bold py-3 px-4 text-sm uppercase tracking-wider">Class</th>
                      <th class="text-left text-primary font-bold py-3 px-4 text-sm uppercase tracking-wider">Coach</th>
                    </tr>
                  </thead>
                  <tbody>
                    <template v-for="day in timetable.schedule" :key="day.day">
                      <tr
                        v-for="(session, sIdx) in day.sessions"
                        :key="`${day.day}-${sIdx}`"
                        class="border-b border-gray-800 hover:bg-secondary-light transition-colors duration-200"
                      >
                        <td
                          v-if="sIdx === 0"
                          :rowspan="day.sessions.length"
                          class="py-3 px-4 align-top"
                        >
                          <span class="inline-block bg-primary text-secondary font-bold text-sm py-1.5 px-4 whitespace-nowrap">
                            {{ day.day }}
                          </span>
                        </td>
                        <td class="py-3 px-4 text-white font-semibold text-sm whitespace-nowrap">{{ session.time }}</td>
                        <td class="py-3 px-4">
                          <span class="text-white font-medium">{{ session.class }}</span>
                        </td>
                        <td class="py-3 px-4 text-gray-400 text-sm whitespace-nowrap">{{ session.coach }}</td>
                      </tr>
                      <tr
                        v-if="day.sessions.length === 0"
                        class="border-b border-gray-800"
                      >
                        <td class="py-3 px-4">
                          <span class="inline-block bg-gray-700 text-gray-300 font-bold text-sm py-1.5 px-4">
                            {{ day.day }}
                          </span>
                        </td>
                        <td colspan="3" class="py-3 px-4 text-gray-500 italic">Rest Day</td>
                      </tr>
                    </template>
                  </tbody>
                </table>
              </div>

            </div>
            <p v-else class="text-center text-gray-300">Loading timetable…</p>
          </div>

        </div>
      </div>
    </section>
  </div>
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

  document.querySelectorAll('.schedule-left, .schedule-table').forEach((el) => {
    observer.observe(el)
  })
})
</script>