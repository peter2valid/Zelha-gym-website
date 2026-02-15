<template>
  <footer class="bg-secondary text-gray-300 py-8">
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Contact info -->
      <div>
        <h3 class="text-primary text-lg font-semibold mb-4">Contact Us</h3>
        <p>Kalimoni Highway View Plaza, Juja</p>
        <p>Thika Superhighway exit</p>
        <p class="mt-2">Phone: <a href="tel:+254110719277" class="text-primary hover:underline">+254 110 719 277</a></p>
        <p>Email: <a href="mailto:info@zelhafinness.com" class="text-primary hover:underline">info@zelhafitness.com</a></p>
      </div>
      <!-- Quick links -->
      <div>
        <h3 class="text-primary text-lg font-semibold mb-4">Quick Links</h3>
        <ul class="space-y-2">
          <li><NuxtLink to="/timetable" class="hover:text-primary">Timetable</NuxtLink></li>
          <li><NuxtLink to="/pricing" class="hover:text-primary">Pricing</NuxtLink></li>
          <li><NuxtLink to="/classes/spin" class="hover:text-primary">Classes</NuxtLink></li>
          <li><NuxtLink to="/contact" class="hover:text-primary">Contact</NuxtLink></li>
        </ul>
      </div>
      <!-- Social -->
      <div>
        <h3 class="text-primary text-lg font-semibold mb-4">Follow Us</h3>
        <p class="mb-4">Stay connected for updates and motivation.</p>
        <div class="flex space-x-4">
          <a href="https://www.instagram.com" target="_blank" aria-label="Instagram" class="text-primary hover:text-primary-dark">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10A5 5 0 0 1 12 7zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.5-2.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
          </a>
          <a href="https://www.facebook.com" target="_blank" aria-label="Facebook" class="text-primary hover:text-primary-dark">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.5 7.5V5.625c0-.621.012-1.406.218-1.875.206-.468.548-.973 1.066-1.286C15.3 2.1 15.975 2 17 2h2v3h-1.5c-.55 0-.84.3-.97.52-.13.22-.28.54-.28 1.25v2.23h2.75l-.5 3.5h-2.25V22H13.5V12.5H11V9h2.5z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="text-center text-sm text-gray-500 mt-8">
      © {{ new Date().getFullYear() }} Zelha Spin &amp; Fitness. All rights reserved.
    </div>
  </footer>
</template>

<script setup lang="ts">
// no script needed for static footer
</script>