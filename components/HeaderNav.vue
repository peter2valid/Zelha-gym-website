<template>
  <div class="sticky top-0 z-50">
    <header 
      :class="[
        'transition-all duration-300 border-b',
        scrolled ? 'bg-black/95 backdrop-blur-md border-gray-800 shadow-xl shadow-black/40 py-2' : 'bg-black border-transparent py-4'
      ]"
    >
      <nav class="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 max-w-7xl">
        <!-- Logo: Auto-adjusting size -->
        <NuxtLink to="/" class="flex-shrink-0 transition-transform active:scale-95">
          <img 
            src="/images/headericon.png" 
            alt="Zelha Spin and Fitness Gym" 
            class="h-12 sm:h-14 lg:h-16 w-auto transition-all duration-300" 
            :class="{ 'lg:h-14': scrolled }"
          />
        </NuxtLink>

        <!-- Desktop Nav: Hidden on mobile/tablet -->
        <ul class="hidden lg:flex items-center gap-1 uppercase text-[11px] font-black tracking-[0.15em] text-gray-400">
          <li v-for="link in navLinks" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="px-3 py-2 hover:text-primary transition-colors duration-200 relative group"
              :class="{ 'text-primary': isActive(link.to) }"
            >
              {{ link.label }}
              <span 
                class="absolute bottom-0 left-3 right-3 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                :class="{ 'scale-x-100': isActive(link.to) }"
              ></span>
            </NuxtLink>
          </li>
        </ul>

        <!-- Action Area -->
        <div class="flex items-center gap-4">
          <NuxtLink
            to="/join"
            class="hidden md:inline-flex bg-primary text-black px-6 py-2.5 text-[11px] font-black uppercase tracking-widest hover:bg-primary-dark transition-all duration-200 shadow-lg shadow-primary/10 active:scale-95"
          >
            Join Now
          </NuxtLink>
          
          <!-- Mobile Toggle: Large touch target -->
          <button
            @click="showMenu = !showMenu"
            class="lg:hidden text-primary focus:outline-none p-2 -mr-2 transition-transform active:scale-90"
            aria-label="Toggle Menu"
          >
            <div class="relative w-6 h-5">
              <span 
                class="absolute h-0.5 bg-current transition-all duration-300 left-0 right-0"
                :class="showMenu ? 'rotate-45 top-2' : 'top-0'"
              ></span>
              <span 
                class="absolute h-0.5 bg-current transition-all duration-300 left-0 right-0 top-2"
                :class="showMenu ? 'opacity-0' : 'opacity-100'"
              ></span>
              <span 
                class="absolute h-0.5 bg-current transition-all duration-300 left-0 right-0"
                :class="showMenu ? '-rotate-45 top-2' : 'top-4'"
              ></span>
            </div>
          </button>
        </div>
      </nav>
    </header>

    <!-- Mobile Menu Overlay -->
    <transition name="mobile-menu">
      <div 
        v-if="showMenu" 
        :class="[
          'lg:hidden fixed inset-x-0 bottom-0 z-40 bg-black/98 backdrop-blur-xl overflow-y-auto',
          scrolled ? 'top-[65px] sm:top-[73px]' : 'top-[81px] sm:top-[89px]'
        ]"
      >
        <div class="flex flex-col p-6 min-h-full">
          <ul class="flex flex-col gap-1 mb-8">
            <li v-for="link in navLinks" :key="link.to" class="border-b border-gray-900 last:border-0">
              <NuxtLink
                :to="link.to"
                class="flex items-center justify-between py-5 text-sm font-black uppercase tracking-widest text-gray-300 active:text-primary transition-colors"
                :class="{ 'text-primary': isActive(link.to) }"
                @click="showMenu = false"
              >
                {{ link.label }}
                <span class="text-primary opacity-30">→</span>
              </NuxtLink>
            </li>
          </ul>
          
          <div class="mt-auto pt-6 space-y-4">
            <NuxtLink
              to="/join"
              class="block text-center bg-primary text-black py-4 font-black text-xs uppercase tracking-widest active:bg-primary-dark transition-colors shadow-xl shadow-primary/5"
              @click="showMenu = false"
            >
              Join Zelha Now
            </NuxtLink>
            <p class="text-center text-gray-600 text-[10px] uppercase tracking-widest font-bold">
              Juja's Premier Fitness Studio
            </p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showMenu = ref(false)
const scrolled = ref(false)

// Prevent scroll when mobile menu is open
watch(showMenu, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

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
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
