<template>
  <section class="py-12 bg-secondary">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-primary mb-8 text-center animate-on-scroll opacity-0">Membership Packages</h2>
      <div v-if="pricing" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(pkg, index) in pricing.packages"
          :key="index"
          class="bg-secondary-light shadow-lg border border-secondary pricing-card opacity-0 transform transition duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <img
            :src="cardImages[index]"
            :alt="pkg.title"
            class="w-full h-40 object-cover"
            loading="lazy"
          />
          <div class="p-6">
          <h3 class="text-xl font-semibold text-primary mb-4">{{ pkg.title }}</h3>
          <p class="text-2xl font-bold text-primary mb-2">
            {{ currencySymbol(pkg.currency) }}{{ pkg.price }}
            <span class="text-sm text-gray-400">/{{ pkg.duration }}</span>
          </p>
          <ul class="mb-4 space-y-1">
            <li v-for="(item, i) in pkg.includes" :key="i" class="text-gray-200 flex items-start">
              <span class="mr-2">•</span>{{ item }}
            </li>
          </ul>
          <p class="text-sm text-gray-400 mb-4">Best for: {{ pkg.bestFor }}</p>
          <a
            :href="whatsAppLink(pkg.title)"
            target="_blank"
            class="block text-center bg-primary text-secondary py-2 font-semibold hover:bg-primary-dark transition"
          >
            Book Now
          </a>
          </div>
        </div>
      </div>
      <p v-else class="text-center text-gray-300">Loading pricing…</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAsyncData } from '#app'
import { onMounted } from 'vue'

const cardImages = [
  '/images/membeship1.jpg',
  '/images/membership2.webp',
  '/images/membership3.jpg',
  '/images/membersp4.jpeg'
]

const { data: pricing } = await useAsyncData('pricing', () =>
  queryContent('/pricing').findOne()
)

function currencySymbol(currency: string) {
  switch (currency) {
    case 'KES':
      return 'KSh '
    case 'USD':
      return '$'
    default:
      return ''
  }
}

// Build a WhatsApp deep link prefilled with the package name.
function whatsAppLink(pkgTitle: string) {
  const message = encodeURIComponent(
    `Hi Zelha Fitness, I am interested in the ${pkgTitle} package. Please provide more details.`
  )
  return `https://wa.me/254110719277?text=${message}`
}

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

  document.querySelectorAll('.animate-on-scroll, .pricing-card').forEach((el) => {
    observer.observe(el)
  })
})
</script>