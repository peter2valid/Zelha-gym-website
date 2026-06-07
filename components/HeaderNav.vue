<template>
  <header :class="['sticky top-0 z-50 transition-all duration-300', scrolled ? 'bg-black/98 shadow-xl shadow-black/60 backdrop-blur-sm' : 'bg-black']">
    <nav class="mx-auto flex items-center justify-between py-3 px-4 sm:px-6 lg:px-10 max-w-7xl">
      <!-- Logo -->
      <NuxtLink to="/" class="flex-shrink-0">
        <img src="/images/headericon.png" alt="Zelha Spin and Fitness Gym" class="h-14 sm:h-16" />
      </NuxtLink>

      <!-- Desktop Nav -->
      <ul class="hidden lg:flex items-center gap-0.5 uppercase text-xs font-bold tracking-widest text-gray-300">
        <li v-for="link in navLinks" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="px-3 py-2 hover:text-primary transition-colors duration-200"
            :class="{ 'text-primary': isActive(link.to) }"
          >{{ link.label }}</NuxtLink>
        </li>
      </ul>

      <!-- Join Now CTA + Mobile Toggle -->
      <div class="flex items-center gap-3">
        <NuxtLink
          to="/join"
          class="hidden sm:inline-flex bg-primary text-black px-5 py-2.5 text-xs font-black uppercase tracking-widest hover:bg-primary-dark transition-colors duration-200"
        >
          Join Now
        </NuxtLink>
        <button
          @click="showMenu = !showMenu"
          class="lg:hidden text-primary focus:outline-none p-1"
          aria-label="Toggle Menu"
        >
          <svg v-if="!showMenu" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <transition name="mobile-menu">
      <div v-if="showMenu" class="lg:hidden bg-black border-t border-gray-800">
        <ul class="flex flex-col py-2">
          <li v-for="link in navLinks" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="block px-6 py-3 text-xs font-black uppercase tracking-widest text-gray-300 hover:text-primary hover:bg-gray-900/60 transition-colors"
              :class="{ 'text-primary': isActive(link.to) }"
              @click="showMenu = false"
            >{{ link.label }}</NuxtLink>
          </li>
          <li class="px-6 pt-3 pb-5">
            <NuxtLink
              to="/join"
              class="block text-center bg-primary text-black px-5 py-3 font-black text-xs uppercase tracking-widest hover:bg-primary-dark transition-colors"
              @click="showMenu = false"
            >
              Join Now — Start Today
            </NuxtLink>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showMenu = ref(false)
const scrolled = ref(false)

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/timetable', label: 'Timetable' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/trainers', label: 'Trainers' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

function isActive(path: string) {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

function handleScroll() {
  scrolled.value = window.scrollY > 60
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.25s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
