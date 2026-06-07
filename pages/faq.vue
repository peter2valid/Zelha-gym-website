<template>
  <div>
    <!-- Hero -->
    <section class="py-20 bg-secondary-light text-center">
      <div class="max-w-3xl mx-auto px-4">
        <p class="text-primary text-xs font-black uppercase tracking-[0.3em] mb-4">Got Questions?</p>
        <h1 class="text-white uppercase mb-4" style="font-family: 'Bebas Neue', Impact, sans-serif; font-size: clamp(2.5rem, 7vw, 5rem); line-height: 1;">Frequently Asked <span class="text-primary">Questions</span></h1>
        <p class="text-gray-400 text-lg">Everything you need to know about joining and training at Zelha Spin and Fitness Gym.</p>
      </div>
    </section>

    <!-- FAQs -->
    <section class="py-16 bg-secondary">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <div class="space-y-3">
          <div v-for="(faq, i) in faqs" :key="i" class="border border-gray-800 overflow-hidden">
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
import { ref, h } from 'vue'

useHead({ title: 'FAQs — Zelha Spin and Fitness Gym' })

const openIndex = ref<number | null>(0)

function toggle(i: number) {
  openIndex.value = openIndex.value === i ? null : i
}

// Icons
const PlusIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '3', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M12 4.5v15m7.5-7.5h-15' })])
const MinusIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '3', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M19.5 12h-15' })])

const faqs = [
  {
    question: 'Do I need experience to join Zelha Gym?',
    answer: 'Absolutely not! We welcome complete beginners. Our trainers Levis and Martin will guide you through everything — from how to use equipment safely to choosing the right classes for your fitness level. You don\'t need any prior gym experience.',
  },
  {
    question: 'Do you offer personal training?',
    answer: 'Yes! Personal training is available as an add-on at KSh 1,500 per month. You\'ll work one-on-one with a certified trainer who creates a plan tailored to your specific goals. It\'s the fastest way to see real results.',
  },
  {
    question: 'Can I pay on a daily basis?',
    answer: 'Yes! We offer a daily drop-in rate of KSh 400 for regular members and KSh 300 for students. This gives you full access to all classes and facilities for that day. Great if you want to try us out before committing to a monthly plan.',
  },
  {
    question: 'Do you accept M-Pesa payments?',
    answer: 'Yes, we accept M-Pesa! We also accept cash. Payments can be made at the gym reception. For monthly memberships, we can arrange a convenient payment schedule. WhatsApp us for more details on payment options.',
  },
  {
    question: 'What should I bring on my first day?',
    answer: 'Bring comfortable workout clothes, proper gym shoes, a water bottle, a towel and your phone. If joining for a spin class, padded shorts are helpful but not required. Lockers are available for your valuables.',
  },
  {
    question: 'Are trainers available every day?',
    answer: 'Yes! Our certified trainers are present during all sessions, Monday through Saturday. They\'ll help with form, motivation and your workout plan. If you want dedicated 1-on-1 time, book a personal training session.',
  },
  {
    question: 'Can women join Zelha Gym?',
    answer: 'Absolutely! We have many female members across all our programs — spin, Zumba, HIIT, strength training and more. Zelha is a welcoming, zero-judgment environment for everyone. Our trainers are experienced working with all genders.',
  },
  {
    question: 'Do you offer weight loss programs?',
    answer: 'Yes! HIIT, spin and boot camp classes are especially effective for weight loss. Combined with personal training and nutritional guidance from our trainers, you can achieve significant results. WhatsApp us to discuss a custom weight loss plan.',
  },
  {
    question: 'What are your opening hours?',
    answer: 'We are open Monday to Saturday, 6:00 AM to 9:00 PM. We\'re closed on Sundays. Classes are scheduled throughout the week — check our Timetable page for the latest schedule.',
  },
  {
    question: 'Do you offer student discounts?',
    answer: 'Yes! Students pay KSh 2,500 per month (a KSh 500 discount off the regular rate of KSh 3,000). You\'ll need a valid student ID when signing up. Daily drop-in for students is KSh 300.',
  },
  {
    question: 'Where exactly are you located?',
    answer: 'We\'re at Kalimoni Highway View Plaza (Former Uchumi Building), Juja, Kenya — near Juja Farm and the Juja Town CBD. WhatsApp us at 0702 836 266 and we\'ll send you directions or a location pin.',
  },
  {
    question: 'What classes do you offer?',
    answer: 'We offer Spin/Cycling, HIIT, Strength Training, Personal Training, Boot Camp, Zumba Dance, Group Fitness Classes and Hikes. Check our Timetable page for when each class runs during the week.',
  },
]
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