<template>
  <div>
    <!-- Hero -->
    <Hero />

    <!-- Stats Bar -->
    <section class="bg-primary py-6">
      <div class="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div v-for="stat in stats" :key="stat.label">
          <div class="text-3xl md:text-4xl font-black text-black" style="font-family: 'Bebas Neue', Impact, sans-serif;">{{ stat.value }}</div>
          <div class="text-black/60 text-xs font-bold uppercase tracking-wider mt-0.5">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <!-- Who We Help -->
    <section class="py-16 bg-secondary">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div class="text-center mb-10">
          <h2 class="section-heading">Who We Help</h2>
          <p class="section-sub mt-3 mx-auto">Whether you're stepping into a gym for the first time or training for your next goal — Zelha is your home.</p>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div v-for="group in whoWeHelp" :key="group.title" class="card-dark p-5 text-center rounded-sm">
            <div class="text-4xl mb-3">{{ group.icon }}</div>
            <h3 class="text-primary font-bold text-sm uppercase tracking-wide">{{ group.title }}</h3>
            <p class="text-gray-500 text-xs mt-2 leading-relaxed">{{ group.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Programs Preview -->
    <section class="py-16 bg-secondary-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 class="section-heading">Our Programs</h2>
            <p class="section-sub mt-2">Something for every fitness goal. Taught by certified coaches.</p>
          </div>
          <NuxtLink to="/programs" class="btn-outline text-xs px-5 py-2.5 whitespace-nowrap self-start md:self-auto">See All Programs</NuxtLink>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div
            v-for="prog in programs"
            :key="prog.name"
            class="group relative overflow-hidden bg-secondary border border-gray-800 hover:border-primary transition-colors duration-300"
          >
            <img :src="prog.image" :alt="prog.name" class="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h3 class="text-primary font-black text-sm uppercase tracking-wide">{{ prog.name }}</h3>
              <p class="text-gray-300 text-xs mt-1">{{ prog.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-16 bg-secondary">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="section-heading mb-4">Why Choose Zelha?</h2>
            <p class="text-gray-400 mb-8 leading-relaxed">
              We're more than a gym. We're a community of motivated people in Juja committed to helping you reach your goals in a safe, supportive environment.
            </p>
            <div class="space-y-5">
              <div v-for="benefit in benefits" :key="benefit.title" class="flex gap-4">
                <span class="text-primary text-2xl flex-shrink-0 mt-0.5">{{ benefit.icon }}</span>
                <div>
                  <h3 class="text-white font-bold text-sm uppercase tracking-wide">{{ benefit.title }}</h3>
                  <p class="text-gray-400 text-sm mt-1">{{ benefit.desc }}</p>
                </div>
              </div>
            </div>
            <div class="mt-8 flex flex-wrap gap-3">
              <NuxtLink to="/join" class="btn-primary text-xs px-6 py-3">Join Now</NuxtLink>
              <NuxtLink to="/about" class="btn-ghost text-xs px-6 py-3">About Zelha</NuxtLink>
            </div>
          </div>
          <div class="relative">
            <img src="/images/574572522_812280874893979_1305975096083296830_n.jpg" alt="Group training at Zelha Fitness" class="w-full h-80 lg:h-[480px] object-cover" loading="lazy" />
            <div class="absolute -bottom-4 -left-4 bg-primary text-black p-5 hidden md:block">
              <div class="text-4xl font-black" style="font-family: 'Bebas Neue', Impact, sans-serif;">100%</div>
              <div class="text-xs font-bold uppercase tracking-wide">Dedicated to You</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Schedule Preview -->
    <section class="py-16 bg-secondary-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div class="text-center mb-10">
          <h2 class="section-heading">This Week's Classes</h2>
          <p class="section-sub mt-2 mx-auto">New sessions every week. Find what fits your schedule.</p>
        </div>
        <TimetablePreview />
        <div class="text-center mt-8">
          <NuxtLink to="/timetable" class="btn-primary text-xs px-8 py-3">View Full Schedule</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Pricing Preview -->
    <section class="py-16 bg-secondary">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div class="text-center mb-10">
          <h2 class="section-heading">Flexible Membership Plans</h2>
          <p class="section-sub mt-2 mx-auto">Options for every budget — from daily drop-ins to monthly memberships. M-Pesa accepted!</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div v-for="plan in pricingPlans" :key="plan.name" :class="['card-dark p-6 flex flex-col', plan.featured ? 'border-primary bg-secondary-light/80' : '']">
            <div v-if="plan.featured" class="inline-block bg-primary text-black text-xs font-black uppercase tracking-widest px-3 py-1 mb-4 self-start">Most Popular</div>
            <h3 class="text-white font-bold uppercase tracking-wide text-sm mb-1">{{ plan.name }}</h3>
            <div class="text-primary font-black text-3xl my-3" style="font-family: 'Bebas Neue', Impact, sans-serif;">{{ plan.price }}</div>
            <p class="text-gray-500 text-xs mb-4">{{ plan.period }}</p>
            <ul class="space-y-2 mb-6 flex-1">
              <li v-for="feature in plan.features" :key="feature" class="flex items-start gap-2 text-gray-300 text-sm">
                <span class="text-primary font-black text-xs mt-0.5 flex-shrink-0">✓</span>
                {{ feature }}
              </li>
            </ul>
            <a :href="`https://wa.me/254702836266?text=Hi!%20I'm%20interested%20in%20the%20${encodeURIComponent(plan.name)}%20plan.`" target="_blank" class="btn-primary text-xs py-2.5 w-full text-center justify-center">
              Enquire Now
            </a>
          </div>
        </div>

        <div class="text-center mt-8">
          <NuxtLink to="/pricing" class="btn-outline text-xs px-8 py-3">Full Pricing Details</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Trainers Preview -->
    <section class="py-16 bg-secondary-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div class="text-center mb-10">
          <h2 class="section-heading">Meet Your Coaches</h2>
          <p class="section-sub mt-2 mx-auto">Certified trainers who are passionate about your success.</p>
        </div>
        <div class="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div v-for="trainer in trainers" :key="trainer.name" class="card-dark p-6 flex gap-5 items-start">
            <img src="/assets/images/coach/1.jpg" :alt="trainer.name" class="w-20 h-20 object-cover rounded-full border-2 border-primary flex-shrink-0" loading="lazy" />
            <div>
              <h3 class="text-primary font-bold text-lg">{{ trainer.name }}</h3>
              <p class="text-gray-300 text-xs font-semibold uppercase tracking-wide mb-2">Certified Trainer</p>
              <p class="text-gray-400 text-sm leading-relaxed">{{ trainer.specialties }}</p>
            </div>
          </div>
        </div>
        <div class="text-center mt-8">
          <NuxtLink to="/trainers" class="btn-outline text-xs px-8 py-3">Meet All Trainers</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-16 bg-secondary">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div class="text-center mb-10">
          <h2 class="section-heading">What Our Members Say</h2>
          <p class="section-sub mt-2 mx-auto">Real stories from real members at Zelha Fitness.</p>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="testi in testimonials" :key="testi.name" class="card-dark p-6">
            <div class="flex gap-0.5 mb-4">
              <span v-for="n in 5" :key="n" class="text-primary text-lg">★</span>
            </div>
            <p class="text-gray-300 text-sm leading-relaxed mb-5 italic">"{{ testi.text }}"</p>
            <div class="flex items-center gap-3 border-t border-gray-800 pt-4">
              <div class="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                <span class="text-primary font-black text-sm">{{ testi.name.charAt(0) }}</span>
              </div>
              <div>
                <p class="text-white font-bold text-sm">{{ testi.name }}</p>
                <p class="text-gray-500 text-xs">{{ testi.type }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Preview -->
    <section class="py-16 bg-secondary-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div class="text-center mb-10">
          <h2 class="section-heading">Inside Zelha</h2>
          <p class="section-sub mt-2 mx-auto">See our facilities, classes and community in action.</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <div v-for="(img, i) in galleryPreview" :key="i" class="relative overflow-hidden group aspect-square">
            <img :src="img.src" :alt="img.alt" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <span class="text-white text-xs font-bold uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">{{ img.alt }}</span>
            </div>
          </div>
        </div>
        <div class="text-center mt-8">
          <NuxtLink to="/gallery" class="btn-outline text-xs px-8 py-3">View Full Gallery</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Location -->
    <section class="py-16 bg-secondary">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div class="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 class="section-heading mb-6">Find Us in Juja</h2>
            <div class="space-y-5">
              <div class="flex gap-4">
                <span class="text-primary text-xl flex-shrink-0">📍</span>
                <div>
                  <h3 class="text-white font-bold text-sm uppercase tracking-wide">Location</h3>
                  <p class="text-gray-400 text-sm mt-1">Kalimoni Highway View Plaza (Former Uchumi), Juja, Kenya<br/>Near Juja Farm & Juja Town CBD</p>
                </div>
              </div>
              <div class="flex gap-4">
                <span class="text-primary text-xl flex-shrink-0">🕐</span>
                <div>
                  <h3 class="text-white font-bold text-sm uppercase tracking-wide">Opening Hours</h3>
                  <p class="text-gray-400 text-sm mt-1">Monday – Saturday: 6:00 AM – 9:00 PM<br/>Sunday: Rest Day (Closed)</p>
                </div>
              </div>
              <div class="flex gap-4">
                <span class="text-primary text-xl flex-shrink-0">📞</span>
                <div>
                  <h3 class="text-white font-bold text-sm uppercase tracking-wide">Call / WhatsApp</h3>
                  <p class="text-gray-400 text-sm mt-1">
                    <a href="tel:+254702836266" class="hover:text-primary transition-colors">0702 836 266</a>
                    &nbsp;/&nbsp;
                    <a href="tel:+254110719277" class="hover:text-primary transition-colors">0110 719 277</a>
                  </p>
                </div>
              </div>
              <div class="flex gap-4">
                <span class="text-primary text-xl flex-shrink-0">✉️</span>
                <div>
                  <h3 class="text-white font-bold text-sm uppercase tracking-wide">Email</h3>
                  <p class="text-gray-400 text-sm mt-1">
                    <a href="mailto:zelhafitness@gmail.com" class="hover:text-primary transition-colors">zelhafitness@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-8 flex flex-wrap gap-3">
              <a href="https://wa.me/254702836266?text=Hi!%20I'd%20like%20to%20visit%20Zelha%20Fitness%20Gym.%20Can%20you%20share%20directions?" target="_blank" class="btn-primary text-xs px-6 py-3">Get Directions on WhatsApp</a>
              <NuxtLink to="/contact" class="btn-ghost text-xs px-6 py-3">Contact Page</NuxtLink>
            </div>
          </div>
          <div class="overflow-hidden shadow-2xl border border-gray-800">
            <iframe
              width="100%"
              height="400"
              style="border:0;"
              referrerpolicy="no-referrer-when-downgrade"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.072240219272!2d37.01383810000001!3d-1.1080531000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f472cf7d49123%3A0xc761d1367d2f441f!2sZelha%20Spin%20and%20Fitness%20Gym!5e0!3m2!1sen!2ske!4v1771178201794!5m2!1sen!2ske"
              allowfullscreen
              title="Zelha Spin and Fitness Gym on Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="relative py-20 overflow-hidden">
      <img src="/images/483066964_632006999588035_23325673919236385_n.jpg" alt="Start your fitness journey" class="absolute inset-0 w-full h-full object-cover opacity-30" />
      <div class="absolute inset-0 bg-black/70"></div>
      <div class="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <h2 class="text-white uppercase tracking-wide mb-4" style="font-family: 'Bebas Neue', Impact, sans-serif; font-size: clamp(2.5rem, 7vw, 5rem); line-height: 1;">
          Ready to <span class="text-primary">Start?</span>
        </h2>
        <p class="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
          Join hundreds of members who train, sweat and grow at Zelha Spin and Fitness Gym. First class is on us.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink to="/join" class="btn-primary px-10 py-4 text-sm shadow-lg shadow-primary/20">Join Today</NuxtLink>
          <a href="https://wa.me/254702836266?text=Hi!%20I'd%20like%20to%20book%20a%20free%20trial%20at%20Zelha%20Fitness." target="_blank" class="btn-outline px-10 py-4 text-sm">Book Free Trial</a>
        </div>
        <p class="text-gray-500 text-xs mt-6">No commitment required. M-Pesa accepted. Available Mon–Sat.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Hero from '~/components/Hero.vue'
import TimetablePreview from '~/components/TimetablePreview.vue'

const stats = [
  { value: '200+', label: 'Active Members' },
  { value: '2', label: 'Expert Trainers' },
  { value: '8+', label: 'Programs Offered' },
  { value: '6', label: 'Days a Week' },
]

const whoWeHelp = [
  { icon: '🏃', title: 'Beginners', desc: 'First time at a gym? We guide you every step.' },
  { icon: '🔥', title: 'Weight Loss', desc: 'Science-backed fat loss programs that work.' },
  { icon: '💪', title: 'Muscle Gain', desc: 'Build strength with our coaching and weights.' },
  { icon: '⏱️', title: 'Busy Professionals', desc: 'Efficient sessions that fit your schedule.' },
  { icon: '🏆', title: 'Athletes', desc: 'High-performance conditioning and training.' },
]

const programs = [
  { name: 'Spin / Cycling', desc: 'Cardio-driven rides for endurance', image: '/images/577562443_818263040962429_8703738815204600603_n.jpg' },
  { name: 'HIIT', desc: 'Burn fat fast with high intensity intervals', image: '/images/574572522_812280874893979_1305975096083296830_n.jpg' },
  { name: 'Strength Training', desc: 'Build muscle and power', image: '/images/483066964_632006999588035_23325673919236385_n.jpg' },
  { name: 'Personal Training', desc: 'One-on-one focused coaching', image: '/images/483933409_632196279569107_5415312179917941573_n.jpg' },
  { name: 'Boot Camp', desc: 'Group intensity training sessions', image: '/images/484517462_632196166235785_8102135649951883908_n.jpg' },
  { name: 'Zumba', desc: 'Dance your way to fitness', image: '/images/membeship1.jpg' },
  { name: 'Group Fitness', desc: 'Motivating classes for all levels', image: '/images/membership2.webp' },
  { name: 'Hikes', desc: 'Outdoor fitness adventures around Juja', image: '/images/7600786.jpg' },
]

const benefits = [
  { icon: '🎓', title: 'Certified Expert Trainers', desc: 'Levis and Martin are qualified coaches with years of experience in strength, cardio and nutrition.' },
  { icon: '🤝', title: 'Supportive Community', desc: 'Our members motivate each other. You\'ll never feel alone on your fitness journey.' },
  { icon: '⚡', title: 'Modern Equipment', desc: 'Spin bikes, free weights, cardio machines and functional training gear — all maintained and clean.' },
  { icon: '🌱', title: 'Beginner Friendly', desc: 'Zero judgment. We welcome first-timers and help you build confidence from day one.' },
  { icon: '💳', title: 'Flexible Plans + M-Pesa', desc: 'Daily drop-in, monthly membership, student discounts — and pay easily via M-Pesa.' },
]

const pricingPlans = [
  {
    name: 'Drop-In',
    price: 'KSh 400',
    period: 'Per day · Students KSh 300',
    features: ['Access to all classes', 'Use of all equipment', 'No commitment', 'Same-day booking'],
    featured: false,
  },
  {
    name: 'Student Membership',
    price: 'KSh 2,500',
    period: 'Per month · Valid student ID required',
    features: ['Full gym access', 'All group classes', 'Spin & HIIT sessions', 'KSh 500 discount applied'],
    featured: false,
  },
  {
    name: 'Regular Membership',
    price: 'KSh 3,000',
    period: 'Per month',
    features: ['Full gym access', 'All group classes', 'Spin, HIIT & Zumba', 'Boot camp included'],
    featured: true,
  },
  {
    name: 'Personal Training',
    price: 'KSh 1,500',
    period: 'Per month (add-on)',
    features: ['1-on-1 coaching sessions', 'Custom workout plan', 'Form correction', 'Progress tracking'],
    featured: false,
  },
]

const trainers = [
  {
    name: 'Levis Alozio',
    specialties: 'Strength training, aerobics, spinning, HIIT, kickboxing and calisthenics. Levis specializes in performance conditioning.',
  },
  {
    name: 'Martin Muturi',
    specialties: 'Strength training, aerobics, spinning, HIIT and swimming classes. Martin focuses on holistic fitness.',
  },
]

const testimonials = [
  {
    text: "I've been a member for 6 months and the results are incredible. The trainers are patient and the spin classes are my favourite. Best gym in Juja without a doubt!",
    name: 'Sarah M.',
    type: 'Monthly Member',
  },
  {
    text: "As a busy professional I love the flexible class times. Lost 8kg in 3 months with the HIIT and strength sessions. The coaches really push you in the best way.",
    name: 'James K.',
    type: 'Regular Member · Juja Farm',
  },
  {
    text: "I was so nervous going to a gym for the first time. Zelha was so welcoming and beginner-friendly. I'm now 4 months in and I feel like a completely new person!",
    name: 'Faith W.',
    type: 'Student Member',
  },
]

const galleryPreview = [
  { src: '/images/577562443_818263040962429_8703738815204600603_n.jpg', alt: 'Spin Studio' },
  { src: '/images/574572522_812280874893979_1305975096083296830_n.jpg', alt: 'HIIT Session' },
  { src: '/images/483066964_632006999588035_23325673919236385_n.jpg', alt: 'Strength Training' },
  { src: '/images/484517462_632196166235785_8102135649951883908_n.jpg', alt: 'Core Training' },
  { src: '/images/483933409_632196279569107_5415312179917941573_n.jpg', alt: 'Our Trainers' },
  { src: '/images/equipmeents.jpg', alt: 'Gym Equipment' },
  { src: '/images/membership2.webp', alt: 'Workout Session' },
  { src: '/images/7600786.jpg', alt: 'Zelha Community' },
]
</script>
