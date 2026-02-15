<template>
  <header class="bg-secondary text-primary-dark shadow-md relative z-50">
    <nav class="mx-auto flex items-center justify-between py-4 px-6 sm:px-10 lg:px-16">
      <NuxtLink to="/">
        <img src="/images/headericon.png" alt="Zelha Spin & Fitness" class="h-20" />
      </NuxtLink>
      <ul class="hidden md:flex space-x-6 uppercase text-base font-bold">
        <li>
          <NuxtLink to="/" class="hover:text-primary">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/timetable" class="hover:text-primary">Timetable</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/pricing" class="hover:text-primary">Pricing</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/trainers" class="hover:text-primary">Trainers</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/gallery" class="hover:text-primary">Gallery</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="hover:text-primary">Contact</NuxtLink>
        </li>
      </ul>
      <!-- Mobile menu toggle -->
      <button @click="showMenu = !showMenu" class="md:hidden focus:outline-none text-primary" aria-label="Toggle Menu">
        <svg v-if="!showMenu" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>
    <!-- Mobile menu fullscreen overlay -->
    <transition name="mobile-menu">
      <div
        v-if="showMenu"
        class="fixed inset-0 w-full h-full bg-secondary md:hidden flex flex-col items-center justify-center z-40"
      >
        <!-- Close button -->
        <button @click="showMenu = false" class="absolute top-6 right-6 text-primary focus:outline-none" aria-label="Close Menu">
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <!-- Logo -->
        <img src="/images/headericon.png" alt="Zelha" class="h-16 mb-10" />
        <!-- Nav links -->
        <ul class="flex flex-col items-center space-y-6 uppercase text-lg font-semibold tracking-wider">
          <li>
            <NuxtLink to="/" class="text-gray-200 hover:text-primary border-b-2 border-transparent hover:border-primary pb-1 transition" @click="showMenu = false">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/timetable" class="text-gray-200 hover:text-primary border-b-2 border-transparent hover:border-primary pb-1 transition" @click="showMenu = false">Timetable</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/pricing" class="text-gray-200 hover:text-primary border-b-2 border-transparent hover:border-primary pb-1 transition" @click="showMenu = false">Pricing</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/trainers" class="text-gray-200 hover:text-primary border-b-2 border-transparent hover:border-primary pb-1 transition" @click="showMenu = false">Trainers</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/gallery" class="text-gray-200 hover:text-primary border-b-2 border-transparent hover:border-primary pb-1 transition" @click="showMenu = false">Gallery</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="text-gray-200 hover:text-primary border-b-2 border-transparent hover:border-primary pb-1 transition" @click="showMenu = false">Contact</NuxtLink>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const showMenu = ref(false)
</script>

<style scoped>
.mobile-menu-enter-active, .mobile-menu-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.mobile-menu-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>