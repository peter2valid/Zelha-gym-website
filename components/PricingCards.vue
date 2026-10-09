<template>
  <section class="py-16 md:py-24 bg-secondary">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <div class="text-center mb-12 md:mb-16">
        <h2 class="section-heading">Flexible Membership Plans</h2>
        <p class="section-sub mt-4 max-w-2xl mx-auto">No joining fees. Pick your category, then the plan that fits. M-Pesa accepted!</p>
      </div>

      <div v-if="pricing">
        <!-- Walk-in highlight -->
        <div class="card-dark border-primary/40 p-6 md:p-8 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p class="text-primary text-[10px] font-black uppercase tracking-[0.25em] mb-2">Walk-In · Everyone</p>
            <div class="flex items-baseline gap-3">
              <span class="text-primary font-black text-5xl md:text-6xl leading-none" style="font-family: 'Bebas Neue', Impact, sans-serif;">KSh {{ formatPrice(pricing.walkIn.price) }}</span>
              <span class="text-gray-500 text-xs font-black uppercase tracking-widest">per day</span>
            </div>
            <p class="text-gray-400 text-sm mt-2">{{ pricing.walkIn.note }}</p>
          </div>
          <a :href="whatsAppLink(`Walk-In (KSh ${pricing.walkIn.price})`)" target="_blank" rel="noopener noreferrer" class="btn-primary text-xs px-8 py-4 font-black uppercase whitespace-nowrap">Plan a Visit</a>
        </div>

        <!-- Category tabs -->
        <div class="flex justify-center mb-8">
          <div class="inline-flex border border-gray-800 bg-secondary-light p-1" role="tablist" aria-label="Membership category">
            <button
              v-for="m in pricing.memberships"
              :key="m.category"
              type="button"
              role="tab"
              :aria-selected="active === m.category"
              @click="active = m.category"
              class="px-5 md:px-8 py-3 text-[11px] font-black uppercase tracking-widest transition-colors"
              :class="active === m.category ? 'bg-primary text-black' : 'text-gray-400 hover:text-primary'"
            >
              {{ m.category }}
            </button>
          </div>
        </div>

        <div v-if="current">
          <div class="text-center mb-8">
            <h3 class="text-white font-black uppercase tracking-widest text-lg">{{ current.title }}</h3>
            <p class="text-gray-500 text-sm mt-1">{{ current.tagline }}</p>
          </div>

          <!-- Plan cards -->
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto">
            <div
              v-for="plan in current.plans"
              :key="plan.label"
              :class="[
                'card-dark p-6 md:p-8 flex flex-col relative overflow-hidden text-center',
                plan.popular ? 'border-primary ring-2 ring-primary/10' : 'hover:border-primary/40'
              ]"
            >
              <div v-if="plan.popular" class="absolute top-0 right-0 bg-primary text-black text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-bl-sm">Popular</div>
              <p class="text-white font-black uppercase tracking-[0.2em] text-xs">{{ plan.label }}</p>
              <div class="my-4">
                <span v-if="plan.price != null" class="text-primary font-black text-3xl md:text-5xl leading-none" style="font-family: 'Bebas Neue', Impact, sans-serif;">KSh {{ formatPrice(plan.price) }}</span>
                <span v-else class="text-gray-300 font-black text-3xl md:text-4xl leading-none" style="font-family: 'Bebas Neue', Impact, sans-serif;">Ask Us</span>
              </div>
              <p class="text-gray-500 text-[10px] font-black uppercase tracking-widest leading-relaxed flex-1 mb-5">{{ plan.note || (plan.price != null ? '' : 'Quote by group size') }}</p>
              <a
                :href="whatsAppLink(`${current.title} — ${plan.label}`)"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-primary text-[10px] md:text-xs py-3 w-full text-center justify-center uppercase font-black active:scale-95"
              >
                Enquire
              </a>
            </div>
          </div>

          <!-- Perks + plan terms -->
          <div class="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto mt-8">
            <div class="card-dark p-6 md:p-8">
              <h4 class="text-primary font-black uppercase tracking-widest text-xs mb-4">What's Included</h4>
              <ul class="space-y-3">
                <li v-for="perk in [...current.perks, ...pricing.included]" :key="perk" class="flex items-start gap-3 text-gray-300 text-sm">
                  <span class="text-primary mt-0.5 flex-shrink-0"><CheckIcon class="w-4 h-4" /></span>
                  <span class="leading-tight">{{ perk }}</span>
                </li>
                <li class="flex items-start gap-3 text-gray-500 text-xs">
                  <span class="text-primary mt-0.5 flex-shrink-0">+</span>
                  <span class="leading-tight">Locker subscription: KSh {{ formatPrice(pricing.lockers.subscription) }} per month · Overnight storage: KSh {{ formatPrice(pricing.lockers.overnight) }} per month (paid with your membership)</span>
                </li>
              </ul>
            </div>
            <div class="card-dark p-6 md:p-8">
              <h4 class="text-primary font-black uppercase tracking-widest text-xs mb-4">Plan Terms</h4>
              <ul class="space-y-3">
                <li v-for="term in current.terms" :key="term" class="flex items-start gap-3 text-gray-400 text-sm">
                  <span class="text-primary font-black flex-shrink-0">→</span>
                  <span class="leading-snug">{{ term }}</span>
                </li>
              </ul>
              <NuxtLink to="/terms" class="inline-block mt-5 text-primary text-[10px] font-black uppercase tracking-widest hover:underline">Full Terms &amp; Conditions →</NuxtLink>
            </div>
          </div>

          <!-- How to pay -->
          <div class="max-w-5xl mx-auto mt-8 card-dark border-primary/40 p-6 md:p-8">
            <h4 class="text-primary font-black uppercase tracking-widest text-xs mb-5">How to Pay · Lipa na M-Pesa</h4>
            <div class="grid sm:grid-cols-2 gap-6">
              <div>
                <p class="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">Paybill (Preferred)</p>
                <p class="text-white text-sm">Business No: <span class="text-primary font-black text-xl">{{ MPESA.paybill }}</span></p>
                <p class="text-white text-sm">Account No: <span class="text-primary font-black text-xl">{{ MPESA.account }}</span></p>
                <p class="text-gray-500 text-xs mt-1">Name: {{ MPESA.accountName }}</p>
              </div>
              <div>
                <p class="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">Send Money</p>
                <p class="text-white text-sm">Number: <span class="text-primary font-black text-xl">{{ MPESA.sendMoneyNumber }}</span></p>
                <p class="text-gray-500 text-xs mt-1">Name: {{ MPESA.sendMoneyName }}</p>
              </div>
            </div>
            <p class="text-gray-500 text-xs mt-5">Keep your M-Pesa confirmation message as proof of payment.</p>
          </div>
        </div>

        <!-- Other services -->
        <div class="mt-20">
          <div class="text-center mb-10">
            <h2 class="section-heading">Other Services</h2>
            <p class="section-sub mt-3 max-w-2xl mx-auto">Add these to any membership, or book them on their own.</p>
          </div>
          <div class="grid md:grid-cols-3 gap-5">
            <div v-for="svc in pricing.services" :key="svc.title" class="card-dark p-8 flex flex-col">
              <h3 class="text-white font-black uppercase tracking-[0.2em] text-xs">{{ svc.title }}</h3>
              <div class="my-5">
                <template v-if="svc.price != null">
                  <span v-if="svc.priceFrom" class="text-gray-500 text-xs font-black uppercase tracking-widest mr-2">From</span>
                  <span class="text-primary font-black text-4xl" style="font-family: 'Bebas Neue', Impact, sans-serif;">KSh {{ formatPrice(svc.price) }}</span>
                  <span v-if="svc.per" class="text-gray-500 text-[10px] font-black uppercase tracking-widest ml-2">{{ svc.per }}</span>
                </template>
                <span v-else class="text-gray-300 font-black text-3xl" style="font-family: 'Bebas Neue', Impact, sans-serif;">Ask Us</span>
              </div>
              <p class="text-gray-400 text-sm leading-relaxed flex-1 mb-6">{{ svc.description }}</p>
              <a :href="whatsAppLink(svc.title)" target="_blank" rel="noopener noreferrer" class="btn-outline text-xs py-3 w-full font-black uppercase">Enquire</a>
            </div>
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
import { ref, computed, h } from 'vue'
import { whatsAppUrl, MPESA } from '~/utils/contact'

const { data: pricing } = await useAsyncData('pricing', () =>
  queryContent('/pricing').findOne()
)

const active = ref('Regular')
const current = computed(() => pricing.value?.memberships.find((m: any) => m.category === active.value))

// Manual thousands separator so server and browser render identically.
const formatPrice = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',')

// Icon
const CheckIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '3', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M5 13l4 4L19 7' })])

function whatsAppLink(pkgTitle: string) {
  return whatsAppUrl(`Hi Zelha Spin and Fitness Gym, I am interested in the ${pkgTitle} package. Please provide more details.`)
}
</script>
