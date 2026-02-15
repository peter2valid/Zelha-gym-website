<template>
  <div v-if="timetable" class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div v-for="day in timetable.schedule.slice(0, 3)" :key="day.day" class="bg-secondary-light p-4 shadow">
      <h3 class="text-lg font-semibold text-primary mb-2">{{ day.day }}</h3>
      <ul v-if="day.sessions.length > 0" class="space-y-1">
        <li v-for="(session, i) in day.sessions.slice(0, 2)" :key="i" class="text-gray-200">
          <span class="text-primary font-semibold">{{ session.time }}</span> – {{ session.class }}
        </li>
      </ul>
      <p v-else class="text-gray-400">No classes.</p>
    </div>
  </div>
  <p v-else class="text-center text-gray-300">Loading…</p>
</template>

<script setup lang="ts">
import { useAsyncData } from '#app'


const { data: timetable } = await useAsyncData('timetable-preview', () =>
  queryContent('/timetable').findOne()
)
</script>