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
import {
  SITE_URL, SITE_NAME, PHONE_TEL, EMAIL, ADDRESS, GEO, SOCIAL_LINKS, OPENING_HOURS_SCHEMA,
} from '~/utils/contact'

// Site-wide structured data: the website and the gym as a local business.
// Pages reference these by @id (#website, #gym) from usePageSeo.
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            url: `${SITE_URL}/`,
            name: SITE_NAME,
            alternateName: ['Zelha Fitness', 'Zelha Spin & Fitness', 'Zelha Gym Juja'],
            inLanguage: 'en-KE',
            publisher: { '@id': `${SITE_URL}/#gym` },
          },
          {
            '@type': 'ExerciseGym',
            '@id': `${SITE_URL}/#gym`,
            name: SITE_NAME,
            alternateName: 'Zelha Fitness',
            description: 'Spin, HIIT, strength training, step aerobics, Zumba, swimming and personal training gym in Juja, along Thika Road, Kenya.',
            url: `${SITE_URL}/`,
            logo: `${SITE_URL}/images/headericon.png`,
            image: [`${SITE_URL}/images/og-image.jpg`, `${SITE_URL}/images/team/whole-team.jpg`],
            telephone: PHONE_TEL,
            email: EMAIL,
            priceRange: 'KSh 400 – KSh 28,000',
            currenciesAccepted: 'KES',
            paymentAccepted: 'Cash, M-Pesa',
            address: {
              '@type': 'PostalAddress',
              streetAddress: ADDRESS.street,
              addressLocality: ADDRESS.locality,
              addressRegion: ADDRESS.region,
              addressCountry: ADDRESS.country,
            },
            geo: { '@type': 'GeoCoordinates', latitude: GEO.latitude, longitude: GEO.longitude },
            hasMap: 'https://www.google.com/maps?cid=14366994318247281695',
            openingHoursSpecification: OPENING_HOURS_SCHEMA,
            areaServed: ['Juja', 'Kalimoni', 'Gachororo', 'JKUAT', 'Ruiru', 'Thika', 'Nairobi'],
            sameAs: SOCIAL_LINKS,
          },
        ],
      }),
    },
  ],
})
</script>
