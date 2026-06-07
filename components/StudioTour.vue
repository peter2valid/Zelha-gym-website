<template>
  <section class="py-16 md:py-24 bg-secondary-light">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <div class="text-center mb-12 md:mb-16">
        <h2 class="section-heading">Step Inside Zelha</h2>
        <p class="section-sub mt-4 max-w-2xl mx-auto">
          Explore our professional facilities from the comfort of your screen. Our 360° virtual tour lets you walk through the spin studio, weight area, and functional training zone.
        </p>
      </div>

      <div class="relative overflow-hidden rounded-sm shadow-2xl border border-gray-800 bg-black">
        <!-- Virtual Tour Iframe with responsive height -->
        <iframe 
          src="https://app.viewora.software/embed/tour-18aca03c" 
          width="100%" 
          class="w-full h-[400px] md:h-[600px]" 
          frameborder="0" 
          allowfullscreen 
          style="border:none;"
          title="Zelha Spin and Fitness Gym Virtual Tour"
        ></iframe>
        
        <!-- Branding credit as requested -->
        <div class="py-3 px-4 bg-black/50 backdrop-blur-sm flex justify-center border-t border-gray-800">
          <p class="text-[10px] text-gray-500 font-black uppercase tracking-widest">
            Created with <a href="https://viewora.software/?utm_source=embed&utm_medium=virtual_tour&utm_campaign=platform_branding" target="_blank" rel="noopener" class="text-primary hover:underline">Viewora Virtual Tour Software</a>
          </p>
        </div>
      </div>
      
      <div class="mt-8 flex justify-center">
        <a href="https://wa.me/254702836266?text=Hi!%20I%20just%20took%20the%20virtual%20tour%20and%20would%20like%20to%20visit%20in%20person." target="_blank" class="btn-outline text-xs px-8 py-4">Book In-Person Tour</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component for the Studio Virtual Tour
</script>