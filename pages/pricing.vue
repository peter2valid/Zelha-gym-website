<template>
  <div>
    <!-- Hero -->
    <section class="relative py-28 overflow-hidden">
      <img src="/images/group-class-3.webp" alt="Zelha Fitness Pricing" class="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div class="absolute inset-0 bg-gradient-to-b from-black/80 to-secondary"></div>
      <div class="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <p class="text-primary text-xs font-black uppercase tracking-[0.3em] mb-4">Affordable Fitness</p>
        <h1 class="text-white uppercase mb-6" style="font-family: 'Bebas Neue', Impact, sans-serif; font-size: clamp(3rem, 8vw, 6rem); line-height: 0.95;">Membership <span class="text-primary">Plans</span></h1>
        <p class="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          No joining fees. KSh 400 walk-in for everyone, individual plans from KSh 1,000 a week to KSh 28,000 a year, student plans from KSh 1,000 a week, group packages and personal training from KSh 1,500.
        </p>
      </div>
    </section>

    <!-- Pricing Cards Component -->
    <PricingCards />

    <!-- Payment Info -->
    <section class="py-16 bg-secondary-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="section-heading mb-6">Easy Payment via M-Pesa</h2>
            <p class="text-gray-400 mb-6 leading-relaxed">
              We make it easy for you to focus on your workout. Pay for any membership, walk-in or personal training via M-Pesa Paybill, or at reception.
            </p>
            <div class="flex items-center gap-6 mb-8">
              <div class="flex flex-col">
                <span class="text-gray-500 text-[10px] font-black uppercase tracking-widest">Paybill</span>
                <span class="text-primary font-black text-2xl">{{ MPESA.paybill }}</span>
              </div>
              <div class="h-12 w-px bg-gray-800"></div>
              <div class="flex flex-col">
                <span class="text-gray-500 text-[10px] font-black uppercase tracking-widest">Account No</span>
                <span class="text-primary font-black text-2xl">{{ MPESA.account }}</span>
              </div>
            </div>
            <NuxtLink to="/join" class="btn-primary px-8 py-3 text-sm">Sign Up Now</NuxtLink>
          </div>
          <div class="card-dark p-8 border-primary/10">
            <h3 class="text-white font-black uppercase tracking-wide text-lg mb-4">Membership Policies</h3>
            <ul class="space-y-4">
              <li v-for="policy in policies" :key="policy" class="flex items-start gap-3 text-gray-400 text-sm">
                <span class="text-primary font-black mt-0.5">✓</span>
                {{ policy }}
              </li>
            </ul>
            <NuxtLink to="/terms" class="inline-block mt-6 text-primary text-xs font-black uppercase tracking-widest hover:underline">Read full Terms &amp; Conditions →</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-16 bg-primary">
      <div class="max-w-3xl mx-auto px-4 text-center">
        <h2 class="text-black uppercase mb-4" style="font-family: 'Bebas Neue', Impact, sans-serif; font-size: clamp(2rem, 6vw, 4rem);">
          Still have Questions?
        </h2>
        <p class="text-black/70 text-lg mb-8">Not sure which plan is right for you? WhatsApp us and we'll help you decide based on your fitness goals.</p>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="https://wa.me/254702836266?text=Hi!%20I'd%20like%20to%20know%20more%20about%20your%20membership%20plans." target="_blank" class="bg-black text-primary px-10 py-4 font-black uppercase tracking-wide text-sm hover:bg-gray-900 transition-colors">Chat on WhatsApp</a>
          <NuxtLink to="/faq" class="border-2 border-black text-black px-10 py-4 font-black uppercase tracking-wide text-sm hover:bg-black hover:text-primary transition-colors">Read FAQs</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { SITE_URL, MPESA } from '~/utils/contact'
import PricingCards from '~/components/PricingCards.vue'


usePageSeo({
  title: "Gym Membership Prices in Juja | From KSh 400 | Zelha",
  description: "Zelha gym prices in Juja: KSh 400 walk-in, KSh 1,000 a week, KSh 3,000 a month, KSh 28,000 a year. Students from KSh 1,000. No joining fees. M-Pesa accepted.",
  path: '/pricing',
  breadcrumb: 'Pricing',
  image: '/images/group-class-3.webp',
  schema: [
      {
        '@type': 'OfferCatalog',
        name: 'Zelha Spin and Fitness Gym membership plans',
        offeredBy: { '@id': `${SITE_URL}/#gym` },
        itemListElement: [
          ['Walk-in (day pass, everyone)', 400],
          ['Individual membership — 1 week', 1000],
          ['Individual membership — 1 month', 3000],
          ['Individual membership — 3 months', 8000],
          ['Individual membership — 6 months', 15000],
          ['Individual membership — 1 year', 28000],
          ['Student membership — 1 week', 1000],
          ['Student membership — 1 month', 2000],
          ['Student membership — 1 month (Advanced)', 2500],
        ].map(([name, price]) => ({
          '@type': 'Offer',
          name,
          price,
          priceCurrency: 'KES',
          availability: 'https://schema.org/InStock',
          seller: { '@id': `${SITE_URL}/#gym` },
        })).concat([{
          '@type': 'Offer',
          name: 'Personal training',
          priceSpecification: { '@type': 'PriceSpecification', minPrice: 1500, priceCurrency: 'KES' },
          seller: { '@id': `${SITE_URL}/#gym` },
        }]),
      },
    ],
})

const policies = [
  'No joining fees on any membership plan.',
  'Memberships are for the named member only and are non-transferable.',
  'The KSh 400 walk-in rate is the same for everyone, students included, and is valid for that day only.',
  'Individual regular members can freeze for 7–21 days per monthly subscription with 12 hours notice.',
  'Cancelling within 7 days attracts a KSh 1,500 fee. After 7 days, memberships are not refundable or transferable.',
  'Student rates require proof of current enrolment.',
]
</script>