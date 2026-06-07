<template>
  <section class="py-16 bg-secondary">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <div class="text-center mb-10">
        <h2 class="section-heading">Flexible Membership Plans</h2>
        <p class="section-sub mt-2 mx-auto">Options for every budget — from daily drop-ins to monthly memberships. M-Pesa accepted!</p>
      </div>

      <div v-if="pricing" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          v-for="(pkg, index) in pricing.packages"
          :key="index"
          :class="[
            'card-dark p-6 flex flex-col group transition-all duration-300',
            pkg.title === 'Regular Membership' ? 'border-primary bg-secondary-light/80 scale-105 z-10' : ''
          ]"
        >
          <div v-if="pkg.title === 'Regular Membership'" class="inline-block bg-primary text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 mb-4 self-start">Most Popular</div>
          <h3 class="text-white font-bold uppercase tracking-wide text-sm mb-1">{{ pkg.title }}</h3>
          <div class="text-primary font-black text-3xl my-3" style="font-family: 'Bebas Neue', Impact, sans-serif;">
            {{ pkg.priceLabel.split(' ')[0] }} {{ pkg.priceLabel.split(' ')[1] }}
          </div>
          <p class="text-gray-500 text-xs mb-4">{{ pkg.priceLabel.split(' ').slice(2).join(' ') }}</p>

          <ul class="space-y-2.5 mb-8 flex-1">
            <li v-for="(item, i) in pkg.includes" :key="i" class="flex items-start gap-2 text-gray-300 text-sm">
              <span class="text-primary font-black text-xs mt-0.5 flex-shrink-0">✓</span>
              {{ item }}
            </li>
          </ul>

          <div class="mt-auto">
            <p class="text-[10px] text-gray-500 uppercase tracking-wider mb-4 font-bold">Best for: {{ pkg.bestFor }}</p>
            <a
              :href="whatsAppLink(pkg.title)"
              target="_blank"
              class="btn-primary text-xs py-3 w-full text-center justify-center shadow-lg shadow-primary/10"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </div>
      <div v-else class="flex justify-center py-20">
        <div class="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: pricing } = await useAsyncData('pricing', () =>
  queryContent('/pricing').findOne()
)

function whatsAppLink(pkgTitle: string) {
  const message = encodeURIComponent(
    `Hi Zelha Spin and Fitness Gym, I am interested in the ${pkgTitle} package. Please provide more details.`
  )
  return `https://wa.me/254702836266?text=${message}`
}
</script>