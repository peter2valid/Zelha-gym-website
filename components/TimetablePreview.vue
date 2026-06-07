<template>
  <div v-if="timetable" class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div v-for="day in timetable.schedule.slice(0, 3)" :key="day.day" class="card-dark p-6 transition-all duration-300 hover:bg-secondary-light/80">
      <h3 class="text-primary font-black uppercase tracking-widest text-lg mb-4" style="font-family: 'Bebas Neue', Impact, sans-serif;">{{ day.day }}</h3>
      <ul v-if="day.sessions.length > 0" class="space-y-3">
        <li v-for="(session, i) in day.sessions.slice(0, 2)" :key="i" class="flex flex-col border-l-2 border-primary/20 pl-3">
          <span class="text-primary font-black uppercase tracking-widest text-[10px]">{{ session.time }}</span>
          <span class="text-white font-bold text-sm">{{ session.class }}</span>
        </li>
      </ul>
      <p v-else class="text-gray-500 text-xs italic">No classes scheduled.</p>
    </div>
  </div>
  <div v-else class="flex justify-center py-10">
    <div class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
  </div>
</template>

<script setup lang="ts">
const { data: timetable } = await useAsyncData('timetable-preview', () =>
  queryContent('/timetable').findOne()
)
</script>