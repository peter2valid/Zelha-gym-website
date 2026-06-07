<template>
  <div>
    <section class="py-12 bg-secondary-light text-center">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-primary mb-4">Contact Us</h1>
        <p class="text-gray-200 max-w-2xl mx-auto">
          We’d love to hear from you. Reach out for membership inquiries, class bookings or general questions.
        </p>
      </div>
    </section>
    <section class="py-12 bg-secondary">
      <div class="container mx-auto px-4 grid md:grid-cols-2 gap-8">
        <!-- Contact Details -->
        <div>
          <h2 class="text-2xl font-semibold text-primary mb-4">Get in Touch</h2>
          <p class="text-gray-200 mb-2">Kalimoni Highway View Plaza (Former Uchumi), Juja, Kenya</p>
          <p class="text-gray-200 mb-2">Phone: <a href="tel:+254702836266" class="text-primary hover:underline">0702836266</a> / <a href="tel:+254110719277" class="text-primary hover:underline">0110719277</a></p>
          <p class="text-gray-200 mb-2">Email: <a href="mailto:zelhafitness@gmail.com" class="text-primary hover:underline">zelhafitness@gmail.com</a></p>
          <h3 class="text-xl font-semibold text-primary mb-2">WhatsApp</h3>
          <p class="text-gray-200 mb-4">Chat with us directly on WhatsApp for quick responses.</p>
          <a href="https://wa.me/254702836266" target="_blank" class="inline-block bg-primary text-secondary px-6 py-3 font-semibold hover:bg-primary-dark transition">Message Us</a>

          <div class="mt-8">
            <h3 class="text-xl font-semibold text-primary mb-3">Social Media</h3>
            <ul class="space-y-2 text-gray-200">
              <li><a href="https://www.instagram.com/zelhafitness" target="_blank" class="hover:text-primary">@zelhafitness on Instagram</a></li>
              <li><a href="https://www.tiktok.com/@zelhafitness" target="_blank" class="hover:text-primary">@zelhafitness on TikTok</a></li>
              <li><a href="https://www.facebook.com/zelhaaFitness" target="_blank" class="hover:text-primary">@zelhaaFitness on Facebook</a></li>
            </ul>
          </div>

          <div class="mt-10 border-t border-gray-800 pt-8">
            <h3 class="text-2xl font-semibold text-primary mb-3">Prefer WhatsApp?</h3>
            <p class="text-gray-200 mb-6">If you'd rather chat with us directly, tap the button below to open WhatsApp and we'll help you get started.</p>
            <a
              href="https://wa.me/254702836266?text=Hi%2C%20I'd%20like%20to%20join%20Zelha%20Spin%20and%20Fitness%20Gym.%20I%20found%20you%20through%20your%20website!"
              target="_blank"
              class="inline-flex items-center gap-3 bg-primary text-secondary px-8 py-4 font-bold text-lg hover:bg-primary-dark hover:scale-105 active:scale-95 transition transform duration-200 shadow-lg"
            >
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
        <!-- Map Embed -->
        <div class="overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="350"
            style="border:0;"
            referrerpolicy="no-referrer-when-downgrade"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.072240219272!2d37.01383810000001!3d-1.1080531000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f472cf7d49123%3A0xc761d1367d2f441f!2sZelha%20Spin%20and%20Fitness%20Gym!5e0!3m2!1sen!2ske!4v1771178201794!5m2!1sen!2ske"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Note: Replace the Google Maps API key with a valid one before deployment. The embed will not work with the placeholder key.
</script>