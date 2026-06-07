<template>
  <div>
    <section class="py-12 bg-secondary-light text-center">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-primary mb-4">Join Zelha Spin and Fitness Gym</h1>
        <p class="text-gray-200 max-w-2xl mx-auto">
          Ready to start your fitness journey? Fill out the form below or contact us on WhatsApp to sign up for membership.
        </p>
      </div>
    </section>
    <section class="py-12 bg-secondary">
      <div class="container mx-auto px-4 grid md:grid-cols-2 gap-8">
        <!-- Sign-up Form (non-functional, demonstration only) -->
        <div>
          <h2 class="text-2xl font-semibold text-primary mb-4">Sign-Up Form</h2>
          <form @submit.prevent="submitForm" class="space-y-4">
            <div>
              <label class="block text-gray-200 mb-1">Full Name</label>
              <input type="text" v-model="form.name" class="w-full px-4 py-2 bg-secondary-light text-gray-100 border border-secondary focus:border-primary focus:outline-none" required />
            </div>
            <div>
              <label class="block text-gray-200 mb-1">Email Address</label>
              <input type="email" v-model="form.email" class="w-full px-4 py-2 bg-secondary-light text-gray-100 border border-secondary focus:border-primary focus:outline-none" required />
            </div>
            <div>
              <label class="block text-gray-200 mb-1">Phone Number</label>
              <input type="tel" v-model="form.phone" class="w-full px-4 py-2 bg-secondary-light text-gray-100 border border-secondary focus:border-primary focus:outline-none" required />
            </div>
            <div>
              <label class="block text-gray-200 mb-1">Package of Interest</label>
              <select v-model="form.package" class="w-full px-4 py-2 bg-secondary-light text-gray-100 border border-secondary focus:border-primary focus:outline-none" required>
                <option value="" disabled>Select a package</option>
                <option value="Gym Membership">Gym Membership</option>
                <option value="Spin Class Package">Spin Class Package</option>
                <option value="Drop-In Class">Drop-In Class</option>
                <option value="Personal Training">Personal Training</option>
              </select>
            </div>
            <button type="submit" class="bg-primary text-secondary px-6 py-3 font-semibold hover:bg-primary-dark transition w-full">Submit</button>
          </form>
        </div>
        <!-- WhatsApp CTA -->
        <div class="flex flex-col justify-center items-center">
          <img
            src="/images/images (1).jpeg"
            alt="Working Out at Zelha"
            class="w-full h-48 object-cover mb-6 shadow-lg"
          />
          <h2 class="text-2xl font-semibold text-primary mb-4">Prefer WhatsApp?</h2>
          <p class="text-gray-200 mb-6 text-center">If you’d rather chat with us directly, tap the button below to open WhatsApp and we’ll help you get started.</p>
          <a :href="whatsAppLink()" target="_blank" class="bg-primary text-secondary px-8 py-4 font-semibold hover:bg-primary-dark transition">Chat on WhatsApp</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

// Simple form state (no backend integration). In a real site, you would submit this to a server.
const form = reactive({
  name: '',
  email: '',
  phone: '',
  package: ''
})

function submitForm() {
  // For demonstration, redirect to WhatsApp prefilled message
  const message = encodeURIComponent(
    `Hi Zelha Spin and Fitness Gym, my name is ${form.name}. I am interested in the ${form.package} package. Please provide more details.`
  )
  const url = `https://wa.me/254702836266?text=${message}`
  // navigateTo is used to navigate within the Nuxt app, but since this is an external URL we set window.location
  window.open(url, '_blank')
}

function whatsAppLink() {
  const message = encodeURIComponent('Hi Zelha Spin and Fitness Gym, I would like to join your gym. Please provide membership details.')
  return `https://wa.me/254702836266?text=${message}`
}
</script>