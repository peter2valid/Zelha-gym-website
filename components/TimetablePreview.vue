<template>
  <div v-if="timetable" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
    <div v-for="day in timetable.schedule.slice(0, 3)" :key="day.day" class="card-dark p-6 md:p-8 transition-all duration-300 hover:bg-secondary-light/80 group">
      <h3 class="text-primary font-black uppercase tracking-widest text-lg md:text-xl mb-6 border-b border-gray-800 pb-3" style="font-family: 'Bebas Neue', Impact, sans-serif;">{{ day.day }}</h3>
      <ul v-if="day.sessions.length > 0" class="space-y-4 md:space-y-5">
        <li v-for="(session, i) in day.sessions.slice(0, 2)" :key="i" class="flex flex-col border-l-2 border-primary/20 group-hover:border-primary pl-4 transition-colors">
          <span class="text-primary font-black uppercase tracking-widest text-[9px] md:text-[10px]">{{ session.time }}</span>
          <span class="text-white font-bold text-sm md:text-base leading-tight">{{ session.class }}</span>
        </li>
      </ul>
      <div v-else class="flex flex-col items-center justify-center py-6 text-center opacity-40">
        <span class="text-2xl mb-1">🧘</span>
        <p class="text-gray-500 text-[10px] font-black uppercase tracking-widest">Rest Day</p>
      </div>
    </div>
  </div>
  <div v-else class="flex justify-center py-10">
    <div class="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>
  </div>
</template>

<script setup lang="ts">
const { data: timetable } = await useAsyncData('timetable-preview', () =>
  queryContent('/timetable').findOne()
)
</script>