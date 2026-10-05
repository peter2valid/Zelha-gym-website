<template>
  <div class="relative overflow-hidden border border-primary/40 bg-primary/5 p-6 md:p-8">
    <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
      <div class="max-w-xl">
        <div class="flex items-center gap-3 mb-3">
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          <span class="text-primary text-[10px] md:text-xs font-black uppercase tracking-[0.25em]">Morning Classes Available On Demand</span>
        </div>
        <h3 class="text-white font-black uppercase tracking-wide text-xl md:text-2xl leading-tight mb-2">Early bird? Train 6:00 – 7:00 AM</h3>
        <p class="text-gray-400 text-sm leading-relaxed">
          Morning sessions run Monday to Friday on request. Pick your day and send us a quick WhatsApp — we'll confirm your class.
        </p>
      </div>

      <div class="flex flex-col gap-4 lg:items-end">
        <div class="flex flex-wrap gap-2" role="group" aria-label="Choose a day">
          <button
            v-for="day in weekdays"
            :key="day"
            type="button"
            @click="selected = day"
            class="px-3 py-2 text-[10px] font-black uppercase tracking-widest border transition-colors"
            :class="selected === day ? 'bg-primary text-black border-primary' : 'border-gray-700 text-gray-400 hover:border-primary hover:text-primary'"
            :aria-pressed="selected === day"
          >
            {{ day.slice(0, 3) }}<span v-if="day === today" class="ml-1 normal-case">(today)</span>
          </button>
        </div>
        <a
          :href="requestUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary text-xs px-8 py-4 font-black uppercase shadow-xl shadow-primary/10"
        >
          Request {{ selected }} 6–7 AM
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { whatsAppUrl } from '~/utils/contact'

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
const allDays = ['Sunday', ...weekdays, 'Saturday']

// Default to Monday for SSR; switch to the visitor's actual day once mounted.
const selected = ref('Monday')
const today = ref('')

onMounted(() => {
  const name = allDays[new Date().getDay()]
  if (weekdays.includes(name)) {
    today.value = name
    selected.value = name
  }
})

const requestUrl = computed(() => {
  const when = selected.value === today.value ? `today (${selected.value})` : `on ${selected.value}`
  return whatsAppUrl(`Hi Zelha! I'm interested in the 6:00 – 7:00 AM morning class ${when}.`)
})
</script>
