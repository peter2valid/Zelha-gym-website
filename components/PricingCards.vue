<template>
  <section class="py-16 md:py-24 bg-secondary">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <div class="text-center mb-12 md:mb-16">
        <h2 class="section-heading">Flexible Membership Plans</h2>
        <p class="section-sub mt-4 max-w-2xl mx-auto">Options for every budget — from daily drop-ins to monthly memberships. M-Pesa accepted!</p>
      </div>

      <div v-if="pricing" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-5">
        <div
          v-for="(pkg, index) in pricing.packages"
          :key="index"
          :class="[
            'card-dark p-8 md:p-10 flex flex-col group transition-all duration-500 relative overflow-hidden',
            pkg.title === 'Regular Membership' ? 'border-primary bg-secondary-light/80 ring-4 ring-primary/5 lg:scale-105 z-10' : 'hover:border-primary/40'
          ]"
        >
          <div v-if="pkg.title === 'Regular Membership'" class="absolute top-0 right-0 bg-primary text-black text-[10px] font-black uppercase tracking-widest px-4 py-2 transform rotate-0 rounded-bl-sm">Popular</div>
          
          <h3 class="text-white font-black uppercase tracking-[0.2em] text-xs mb-1">{{ pkg.title }}</h3>
          
          <div class="flex items-baseline gap-1 my-6">
            <span class="text-primary font-black text-4xl md:text-5xl" style="font-family: 'Bebas Neue', Impact, sans-serif;">
              {{ pkg.priceLabel.split(' ')[0] }} {{ pkg.priceLabel.split(' ')[1] }}
            </span>
          </div>
          
          <p class="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-8 border-b border-gray-800 pb-6">{{ pkg.priceLabel.split(' ').slice(2).join(' ') }}</p>

          <ul class="space-y-4 mb-10 flex-1">
            <li v-for="(item, i) in pkg.includes" :key="i" class="flex items-start gap-3 text-gray-300 text-sm">
              <span class="text-primary mt-1 flex-shrink-0">
                <CheckIcon class="w-4 h-4" />
              </span>
              <span class="leading-tight">{{ item }}</span>
            </li>
          </ul>

          <div class="mt-auto">
            <p class="text-[10px] text-gray-600 uppercase tracking-widest mb-6 font-black italic">Best for: {{ pkg.bestFor }}</p>
            <a
              :href="whatsAppLink(pkg.title)"
              target="_blank"
              class="btn-primary text-xs py-4 w-full text-center justify-center shadow-xl shadow-primary/10 group-hover:bg-primary-dark transition-all active:scale-95 uppercase font-black"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </div>
      <div v-else class="flex justify-center py-20">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h } from 'vue'

const { data: pricing } = await useAsyncData('pricing', () =>
  queryContent('/pricing').findOne()
)

// Icon
const CheckIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '3', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M5 13l4 4L19 7' })])

function whatsAppLink(pkgTitle: string) {
  const message = encodeURIComponent(
    `Hi Zelha Spin and Fitness Gym, I am interested in the ${pkgTitle} package. Please provide more details.`
  )
  return `https://wa.me/254702836266?text=${message}`
}
</script>