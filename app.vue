<template>
  <div class="font-sans min-h-screen flex flex-col bg-secondary text-gray-100">
    <HeaderNav />
    <main class="flex-1">
      <NuxtPage />
    </main>
    <Footer />
    <WhatsAppFloat />
  </div>
</template>

<script setup lang="ts">
import HeaderNav from '~/components/HeaderNav.vue'
import Footer from '~/components/Footer.vue'
import WhatsAppFloat from '~/components/WhatsAppFloat.vue'
</script>