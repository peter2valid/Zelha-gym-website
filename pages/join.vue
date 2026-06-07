<template>
  <div>
    <!-- Hero -->
    <section class="relative py-28 overflow-hidden">
      <img src="/images/483066964_632006999588035_23325673919236385_n.jpg" alt="Join Zelha Fitness" class="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div class="absolute inset-0 bg-gradient-to-b from-black/80 to-secondary"></div>
      <div class="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <p class="text-primary text-xs font-black uppercase tracking-[0.3em] mb-4">Start Your Journey</p>
        <h1 class="text-white uppercase mb-6" style="font-family: 'Bebas Neue', Impact, sans-serif; font-size: clamp(3rem, 8vw, 6rem); line-height: 0.95;">Become a <span class="text-primary">Member</span></h1>
        <p class="text-gray-300 text-lg max-w-2xl mx-auto">
          Ready to commit to your fitness? Fill out the inquiry form below and our team will get back to you within 24 hours to finalize your membership.
        </p>
      </div>
    </section>

    <section class="py-16 bg-secondary">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div class="grid lg:grid-cols-2 gap-12 items-start">
          <!-- Sign-up Form -->
          <div class="card-dark p-8 sm:p-10 border-primary/20">
            <h2 class="text-white font-black uppercase tracking-wide text-2xl mb-6">Membership Inquiry</h2>
            <form @submit.prevent="submitForm" class="space-y-5">
              <div class="grid sm:grid-cols-2 gap-5">
                <div>
                  <label class="block text-gray-400 text-xs font-black uppercase tracking-widest mb-2">Full Name</label>
                  <input type="text" v-model="form.name" class="w-full px-4 py-3 bg-secondary text-gray-100 border border-gray-800 focus:border-primary focus:outline-none transition-colors" placeholder="e.g. John Doe" required />
                </div>
                <div>
                  <label class="block text-gray-400 text-xs font-black uppercase tracking-widest mb-2">Phone Number</label>
                  <input type="tel" v-model="form.phone" class="w-full px-4 py-3 bg-secondary text-gray-100 border border-gray-800 focus:border-primary focus:outline-none transition-colors" placeholder="e.g. 0712 345 678" required />
                </div>
              </div>
              <div>
                <label class="block text-gray-400 text-xs font-black uppercase tracking-widest mb-2">Email Address</label>
                <input type="email" v-model="form.email" class="w-full px-4 py-3 bg-secondary text-gray-100 border border-gray-800 focus:border-primary focus:outline-none transition-colors" placeholder="john @example.com" required />
              </div>
              <div>
                <label class="block text-gray-400 text-xs font-black uppercase tracking-widest mb-2">Select a Program</label>
                <select v-model="form.package" class="w-full px-4 py-3 bg-secondary text-gray-100 border border-gray-800 focus:border-primary focus:outline-none transition-colors appearance-none" required>
                  <option value="" disabled selected>Choose your primary goal</option>
                  <option value="Regular Membership">Regular Membership (KSh 3,000)</option>
                  <option value="Student Membership">Student Membership (KSh 2,500)</option>
                  <option value="Spin Cycling">Spin / Cycling Only</option>
                  <option value="Personal Training">Personal Training Add-on</option>
                  <option value="Daily Drop-In">Daily Drop-In (KSh 400)</option>
                </select>
              </div>
              <div>
                <label class="block text-gray-400 text-xs font-black uppercase tracking-widest mb-2">Additional Notes (Optional)</label>
                <textarea v-model="form.notes" rows="3" class="w-full px-4 py-3 bg-secondary text-gray-100 border border-gray-800 focus:border-primary focus:outline-none transition-colors" placeholder="Tell us about your fitness goals..."></textarea>
              </div>
              <button type="submit" class="btn-primary w-full py-4 text-sm mt-4 shadow-lg shadow-primary/10">Submit Inquiry</button>
            </form>
            <p class="text-gray-500 text-[10px] mt-6 text-center uppercase tracking-widest">By submitting, you agree to be contacted by Zelha Fitness via phone/WhatsApp.</p>
          </div>

          <!-- Benefits/CTA -->
          <div class="lg:sticky lg:top-32">
            <h2 class="section-heading mb-6">Why Join Us?</h2>
            <div class="space-y-6 mb-10">
              <div v-for="benefit in joinBenefits" :key="benefit.title" class="flex gap-4">
                <span class="text-primary text-xl flex-shrink-0 mt-1">✓</span>
                <div>
                  <h3 class="text-white font-bold text-sm uppercase tracking-wide">{{ benefit.title }}</h3>
                  <p class="text-gray-400 text-sm mt-1">{{ benefit.desc }}</p>
                </div>
              </div>
            </div>

            <div class="p-8 bg-secondary-light border border-gray-800 rounded-sm">
              <h3 class="text-white font-black uppercase tracking-wide text-lg mb-2">Need a Faster Response?</h3>
              <p class="text-gray-400 text-sm mb-6">Join our WhatsApp community directly for instant membership details and class bookings.</p>
              <a :href="whatsAppLink()" target="_blank" class="btn-outline w-full py-4 text-sm">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat with us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

useHead({ title: 'Join Now — Zelha Spin and Fitness Gym' })

const form = reactive({
  name: '',
  email: '',
  phone: '',
  package: '',
  notes: ''
})

function submitForm() {
  const message = encodeURIComponent(
    `Hi Zelha Fitness! I'd like to join. My name is ${form.name}. I'm interested in the ${form.package}. ${form.notes ? '\nNotes: ' + form.notes : ''}`
  )
  const url = `https://wa.me/254702836266?text=${message}`
  window.open(url, '_blank')
}

function whatsAppLink() {
  const message = encodeURIComponent('Hi Zelha Spin and Fitness Gym, I would like to join your gym. Please provide membership details.')
  return `https://wa.me/254702836266?text=${message}`
}

const joinBenefits = [
  { title: 'Safe & Motivating Space', desc: 'A judgment-free zone where you feel inspired to train.' },
  { title: 'Expert Guidance', desc: 'Levis and Martin are here to help you with form and motivation.' },
  { title: 'Flexible Payments', desc: 'Pay via M-Pesa with daily, monthly and student options.' },
  { title: 'Community Atmosphere', desc: 'Join a family of fitness enthusiasts in Juja.' },
]
</script>