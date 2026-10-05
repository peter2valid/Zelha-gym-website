<template>
  <div>
    <!-- Hero -->
    <section class="py-20 bg-secondary-light text-center">
      <div class="max-w-3xl mx-auto px-4">
        <p class="text-primary text-xs font-black uppercase tracking-[0.3em] mb-4">Got Questions?</p>
        <h1 class="text-white uppercase mb-4" style="font-family: 'Bebas Neue', Impact, sans-serif; font-size: clamp(2.5rem, 7vw, 5rem); line-height: 1;">Frequently Asked <span class="text-primary">Questions</span></h1>
        <p class="text-gray-400 text-lg">Everything you need to know about joining and training at Zelha Spin and Fitness Gym — Juja's gym on Thika Road.</p>
      </div>
    </section>

    <!-- FAQs -->
    <section class="py-16 bg-secondary">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <!-- Category filter -->
        <div class="flex flex-wrap justify-center gap-2 mb-10">
          <button
            v-for="cat in ['All', ...categories]"
            :key="cat"
            type="button"
            @click="activeCategory = cat; openIndex = null"
            class="px-4 py-2 text-[10px] font-black uppercase tracking-widest border transition-colors"
            :class="activeCategory === cat ? 'bg-primary text-black border-primary' : 'border-gray-800 text-gray-400 hover:border-primary hover:text-primary'"
          >
            {{ cat }}
          </button>
        </div>

        <div class="space-y-3">
          <div v-for="(faq, i) in visibleFaqs" :key="faq.question" class="border border-gray-800 overflow-hidden">
            <button
              @click="toggle(i)"
              class="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-secondary-light transition-colors duration-200 group"
              :aria-expanded="openIndex === i"
            >
              <span class="text-white font-semibold text-sm pr-4 group-hover:text-primary transition-colors">{{ faq.question }}</span>
              <span class="text-primary flex-shrink-0 transition-transform duration-300">
                <component :is="openIndex === i ? MinusIcon : PlusIcon" class="w-5 h-5" />
              </span>
            </button>
            <transition name="faq-body">
              <div v-if="openIndex === i" class="px-6 pb-5">
                <p class="text-gray-400 text-sm leading-relaxed">{{ faq.answer }}</p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- Still Have Questions CTA -->
    <section class="py-16 bg-secondary-light">
      <div class="max-w-2xl mx-auto px-4 text-center">
        <h2 class="section-heading mb-4">Still Have Questions?</h2>
        <p class="text-gray-400 mb-8">Our team is available on WhatsApp for quick answers. We respond fast!</p>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="https://wa.me/254702836266?text=Hi!%20I%20have%20a%20question%20about%20Zelha%20Spin%20and%20Fitness%20Gym." target="_blank" class="btn-primary px-8 py-4 text-sm font-black uppercase">Chat on WhatsApp</a>
          <NuxtLink to="/contact" class="btn-outline px-8 py-4 text-sm font-black uppercase">Contact Us</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, h } from 'vue'

const siteTitle = 'Gym FAQs — Zelha Fitness Juja | Prices, Hours, Classes'
const siteDesc = 'Answers about Zelha Spin and Fitness Gym in Juja, Thika Road: membership prices, KSh 400 walk-in, personal training from KSh 1,500, opening hours, morning classes, swimming, location near JKUAT and Kalimoni.'

const openIndex = ref<number | null>(0)
const activeCategory = ref('All')

function toggle(i: number) {
  openIndex.value = openIndex.value === i ? null : i
}

// Icons
const PlusIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '3', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M12 4.5v15m7.5-7.5h-15' })])
const MinusIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '3', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M19.5 12h-15' })])

const faqs = [
  // Getting started
  {
    category: 'Getting Started',
    question: 'What is the best gym in Juja?',
    answer: 'Zelha Spin and Fitness Gym at Kalimoni Highway View Plaza (Former Uchumi) is one of the best-equipped gyms in Juja — with a dedicated spin studio, free weights, cardio zone, certified coaches and group classes six days a week. Come for a KSh 400 walk-in and see for yourself.',
  },
  {
    category: 'Getting Started',
    question: 'Do I need experience to join Zelha Gym?',
    answer: "Absolutely not! We welcome complete beginners. Our coaches will guide you through everything — from how to use equipment safely to choosing the right classes for your fitness level. You don't need any prior gym experience.",
  },
  {
    category: 'Getting Started',
    question: 'What should I bring on my first day?',
    answer: 'Bring comfortable workout clothes, proper gym shoes, a water bottle, a towel and your phone. If joining for a spin class, padded shorts are helpful but not required. Lockers are available for your valuables.',
  },
  {
    category: 'Getting Started',
    question: 'Can kids join Zelha Gym?',
    answer: 'Yes. We believe fitness and mental wellness matter for kids as much as adults — exercise builds confidence, focus and healthy habits. Membership is for ages 18 and above, or under 18 with a legal guardian’s consent. WhatsApp us to ask about sessions suitable for children.',
  },
  {
    category: 'Getting Started',
    question: 'Can women join Zelha Gym?',
    answer: 'Absolutely! We have many female members across all our programs — spin, Zumba, step aerobics, HIIT, strength training and more. Zelha is a welcoming, zero-judgment environment for everyone.',
  },
  // Pricing
  {
    category: 'Pricing',
    question: 'How much is a gym walk-in in Juja?',
    answer: 'A walk-in at Zelha is KSh 400 per visit — the same price for everyone, students included. There are no other charges. It gives you access to the gym and that day’s classes.',
  },
  {
    category: 'Pricing',
    question: 'How much is gym membership at Zelha?',
    answer: 'There are no joining fees. Individual Regular membership is KSh 400 a day, KSh 1,000 a week, KSh 3,000 a month, KSh 8,000 for 3 months, KSh 15,000 for 6 months and KSh 28,000 for a year. Student and Group/Corporate plans are also available — see the Pricing page.',
  },
  {
    category: 'Pricing',
    question: 'Do you offer student discounts?',
    answer: 'Yes. Students pay KSh 2,000 a month (weekdays 5:15 AM – 5:00 PM, unlimited weekends) or KSh 2,500 a month for the Advanced plan (unlimited gym and group classes). Student plans are for certificate, diploma, post-diploma and undergraduate students with proof of enrolment. The KSh 400 day rate is the same for everyone.',
  },
  {
    category: 'Pricing',
    question: 'Do you have group packages?',
    answer: 'Yes! Group packages are available for friends, couples, families, teams and workplaces. WhatsApp us with the size of your group and we’ll share the best rate.',
  },
  {
    category: 'Pricing',
    question: 'How much is personal training?',
    answer: 'Personal training starts from KSh 1,500. You’ll work one-on-one with a coach who builds a plan around your goals — weight loss, muscle gain, functional strength or recovery. You can also bring your own trainer, subject to our external trainer rules.',
  },
  {
    category: 'Pricing',
    question: 'Do you accept M-Pesa payments?',
    answer: 'Yes, we accept M-Pesa as well as cash at reception. WhatsApp us for more details on payment options.',
  },
  {
    category: 'Pricing',
    question: 'Are there any joining fees or discounts?',
    answer: 'No joining fees on any plan. Individual Regular members get 10% off their renewal in their birthday month, and 10% off when they refer a friend who joins. (Student members are not eligible for these discounts.)',
  },
  {
    category: 'Pricing',
    question: 'Can I freeze my membership?',
    answer: 'Yes — Individual Regular members can freeze for 7 to 21 consecutive days per monthly subscription, with at least 12 hours’ notice. Student and Group memberships cannot be frozen.',
  },
  {
    category: 'Pricing',
    question: 'Can I cancel and get a refund?',
    answer: 'If you cancel within 7 days, a KSh 1,500 cancellation fee is deducted. Memberships active for more than 7 days are not refundable or transferable.',
  },
  {
    category: 'Pricing',
    question: 'Do you have lockers and showers?',
    answer: 'Yes, lockers and showers are included with every membership. Overnight locker storage is KSh 500 per month.',
  },
  // Classes
  {
    category: 'Classes',
    question: 'Do I get help from a trainer without paying extra?',
    answer: 'Yes. Our resident trainer gives every member free guidance on general fitness routines, safety and goals. Personal training (from KSh 1,500) is for a fully customised plan.',
  },
  {
    category: 'Classes',
    question: 'What classes do you offer?',
    answer: 'We offer Spin/Cycling, HIIT, Strength Training, Step Aerobics, Zumba (Cardio), Aerobics & Power Training and Boot Camp, plus Personal Training, Outdoors (hikes and outdoor sessions) and Swimming. Check the Timetable page for weekly times.',
  },
  {
    category: 'Classes',
    question: 'Do you have early morning classes?',
    answer: 'Yes! Morning classes from 6:00 to 7:00 AM run on demand, Monday to Friday. Just tap “Request” on our Timetable page or WhatsApp us with the day you want, and we’ll confirm your class.',
  },
  {
    category: 'Classes',
    question: 'Do you offer spin classes in Juja?',
    answer: 'Yes — Zelha has a dedicated spin studio. Spin classes run on Monday evening, Wednesday morning and Thursday evening. See the Timetable page for exact times.',
  },
  {
    category: 'Classes',
    question: 'What happens on Saturdays?',
    answer: 'Saturday morning (8:00 – 9:00 AM) is our high-energy session that rotates between HIIT, Boot Camp and Outdoor training. The gym opens at 6:30 AM on Saturdays.',
  },
  {
    category: 'Classes',
    question: 'Do you offer swimming classes?',
    answer: 'Yes, we offer swimming classes with a qualified coach for beginners and improvers. WhatsApp us for times, venue and pricing.',
  },
  {
    category: 'Classes',
    question: 'Do you offer weight loss programs?',
    answer: 'Yes! HIIT, spin, step aerobics, Zumba and boot camp classes are especially effective for weight loss. Combined with personal training and guidance from our coaches, you can achieve significant results.',
  },
  {
    category: 'Classes',
    question: 'Are trainers available every day?',
    answer: 'Yes! Our certified coaches are present during sessions Monday through Saturday to help with form, motivation and your workout plan. For dedicated one-on-one time, book personal training.',
  },
  // Location & hours
  {
    category: 'Location & Hours',
    question: 'What are your opening hours?',
    answer: 'Monday to Friday the gym opens at 5:15 AM. On Saturday we open at 6:30 AM. We are closed on Sundays.',
  },
  {
    category: 'Location & Hours',
    question: 'Where exactly is Zelha Gym located?',
    answer: 'We’re at Kalimoni Highway View Plaza (Former Uchumi Building), Juja, along Thika Road (Thika Superhighway) in Kiambu County — close to Juja town and JKUAT. WhatsApp us at 0702 836 266 and we’ll send a location pin.',
  },
  {
    category: 'Location & Hours',
    question: 'Is there a good gym near JKUAT?',
    answer: 'Yes — Zelha Spin and Fitness Gym in Juja is a short trip from JKUAT, with student plans from KSh 2,000 per month and a KSh 400 walk-in rate.',
  },
  {
    category: 'Location & Hours',
    question: 'Is Zelha convenient for people commuting from Nairobi or Thika?',
    answer: 'Yes. We’re right on Thika Road in Juja, making us easy to reach for residents of Juja, Kalimoni, Gachororo, Ruiru, Thika and commuters to and from Nairobi. Early opening at 5:15 AM means you can train before work.',
  },
  // Policies
  {
    category: 'Policies',
    question: 'How do I raise a complaint?',
    answer: 'Use the complaints form on our Contact page, email us, or speak to reception. Every complaint goes to management and we aim to respond within 48 hours.',
  },
  {
    category: 'Policies',
    question: 'Where can I read your terms and conditions?',
    answer: 'Our full Terms & Conditions — covering membership, payments, refunds, gym rules and safety — are on the Terms page, linked at the bottom of every page.',
  },
]

const categories = [...new Set(faqs.map(f => f.category))]

const visibleFaqs = computed(() =>
  activeCategory.value === 'All' ? faqs : faqs.filter(f => f.category === activeCategory.value)
)

useHead({
  title: siteTitle,
  meta: [
    { name: 'description', content: siteDesc },
    { property: 'og:title', content: siteTitle },
    { property: 'og:description', content: siteDesc },
    { property: 'og:url', content: 'https://zelhafitness.com/faq' },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqs.map(f => ({
          '@type': 'Question',
          'name': f.question,
          'acceptedAnswer': { '@type': 'Answer', 'text': f.answer },
        })),
      }),
    },
  ],
})
</script>

<style scoped>
.faq-body-enter-active,
.faq-body-leave-active {
  transition: all 0.25s ease;
  overflow: hidden;
}
.faq-body-enter-from,
.faq-body-leave-to {
  opacity: 0;
  max-height: 0;
  padding-bottom: 0;
}
.faq-body-enter-to,
.faq-body-leave-from {
  opacity: 1;
  max-height: 300px;
}
</style>
