<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 md:py-16">
    <div v-if="timetable" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
      <div 
        v-for="(day, index) in timetable.schedule" 
        :key="day.day" 
        class="card-dark p-5 md:p-6 group transition-all duration-300 hover:bg-secondary-light/80"
        :class="{ 'opacity-60 md:opacity-50 grayscale-[0.5]': day.sessions.length === 0 }"
      >
        <div class="flex items-center justify-between mb-4 md:mb-5 border-b border-gray-800 pb-3">
          <h3 class="text-primary font-black uppercase tracking-widest text-base md:text-lg" style="font-family: 'Bebas Neue', Impact, sans-serif;">{{ day.day }}</h3>
          <span class="text-[9px] md:text-[10px] text-gray-500 font-black uppercase tracking-widest">{{ day.sessions.length }} {{ day.sessions.length === 1 ? 'Session' : 'Sessions' }}</span>
        </div>
        
        <ul v-if="day.sessions.length > 0" class="space-y-3 md:space-y-4">
          <li v-for="(session, i) in day.sessions" :key="i" class="flex flex-col gap-0.5 border-l-2 border-primary/20 hover:border-primary pl-4 transition-colors">
            <span class="text-primary font-black uppercase tracking-widest text-[9px] md:text-[10px]">{{ session.time }}</span>
            <span class="text-white font-bold text-sm md:text-base leading-tight">{{ session.class }}</span>
          </li>
        </ul>
        <div v-else class="flex flex-col items-center justify-center py-6 md:py-8 text-center">
          <span class="text-2xl md:text-3xl mb-2 opacity-20">🧘</span>
          <p class="text-gray-500 text-[10px] md:text-xs font-black uppercase tracking-widest">Rest Day</p>
          <p class="text-gray-600 text-[9px] md:text-[10px] mt-1 italic">No classes scheduled</p>
        </div>
      </div>
    </div>
    <div v-else class="flex justify-center py-20">
      <div class="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: timetable } = await useAsyncData('timetable-grid', () =>
  queryContent('/timetable').findOne()
)
</script>