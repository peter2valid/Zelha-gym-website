<template>
  <div>
    <!-- Hero -->
    <section class="py-20 bg-secondary-light text-center">
      <div class="max-w-3xl mx-auto px-4">
        <p class="text-primary text-xs font-black uppercase tracking-[0.3em] mb-4">The Fine Print</p>
        <h1 class="text-white uppercase mb-4" style="font-family: 'Bebas Neue', Impact, sans-serif; font-size: clamp(2.5rem, 7vw, 5rem); line-height: 1;">Terms &amp; <span class="text-primary">Conditions</span></h1>
        <p class="text-gray-400 text-lg">Please read these terms before joining or using Zelha Spin and Fitness Gym. By paying for any membership, walk-in or service, you agree to them.</p>
      </div>
    </section>

    <section class="py-16 bg-secondary">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[220px_1fr] gap-10">
        <!-- Table of contents -->
        <nav class="hidden lg:block" aria-label="Terms sections">
          <div class="sticky top-32 space-y-2">
            <a v-for="(sec, i) in sections" :key="sec.id" :href="`#${sec.id}`" class="block text-gray-500 hover:text-primary text-xs font-black uppercase tracking-widest transition-colors">
              {{ i + 1 }}. {{ sec.title }}
            </a>
          </div>
        </nav>

        <div class="space-y-12">
          <div v-for="(sec, i) in sections" :id="sec.id" :key="sec.id" class="scroll-mt-32">
            <h2 class="text-primary font-black uppercase tracking-widest text-sm mb-4">{{ i + 1 }}. {{ sec.title }}</h2>
            <ul class="space-y-3">
              <li v-for="item in sec.items" :key="item" class="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                <span class="text-primary font-black flex-shrink-0">→</span>
                {{ item }}
              </li>
            </ul>
          </div>

          <div class="card-dark p-8 border-primary/20">
            <h2 class="text-white font-black uppercase tracking-widest text-sm mb-3">Questions or Complaints?</h2>
            <p class="text-gray-400 text-sm mb-6">If anything here is unclear, or you'd like to raise a complaint, we want to hear from you.</p>
            <div class="flex flex-wrap gap-4">
              <NuxtLink to="/contact#complaints" class="btn-primary text-xs px-8 py-3 font-black uppercase">Raise a Complaint</NuxtLink>
              <a :href="`mailto:${EMAIL}`" class="btn-outline text-xs px-8 py-3 font-black uppercase">{{ EMAIL }}</a>
            </div>
            <p class="text-gray-600 text-[10px] uppercase tracking-widest mt-6">Last updated: {{ lastUpdated }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { EMAIL } from '~/utils/contact'


usePageSeo({
  title: "Terms and Conditions | Zelha Spin and Fitness Gym",
  description: "Zelha Spin and Fitness Gym terms: membership plans, student and individual terms, freezing, cancellation, personal training, facility use and photography.",
  path: '/terms',
  breadcrumb: 'Terms and Conditions',
  image: '/images/og-image.jpg',
})

const lastUpdated = 'October 2026'

const sections = [
  {
    id: 'agreement',
    title: 'Membership Agreement',
    items: [
      'By signing up for a membership at Zelha, you agree to abide by the terms and conditions outlined herein.',
      'The gym provides three membership plan options: Individual Regular Membership, Group/Corporate Membership and Student Membership. See the plan terms below and the Pricing page for the benefits of each plan.',
      'Membership is available to individuals aged 18 years and above, or with legal guardian consent for those under 18.',
      'Membership fees are non-transferable. There are no joining fees.',
      'Our gym provides a resident trainer who can offer guidance on your general fitness routine and safety, and help you navigate your fitness goals, at no additional charge. For customised training plans or specific requirements, see the Personal Training section below.',
    ],
  },
  {
    id: 'plans',
    title: 'Plans & Pricing',
    items: [
      'The day (walk-in) rate is KSh 400 for everyone, students included, and is valid for that day only.',
      'Individual Regular plans: Week KSh 1,000 · 1 Month KSh 3,000 · 3 Months KSh 8,000 · 6 Months KSh 15,000 · 1 Year KSh 28,000.',
      'Student plans: 1 Month KSh 2,000 (weekdays 5:15 AM – 5:00 PM, unlimited weekends) · 1 Month Advanced KSh 2,500 (unlimited gym and group fitness classes).',
      'Group/Corporate plans are available monthly, quarterly, bi-annually and annually. Prices depend on group size.',
      'Overnight locker storage is KSh 500 per month.',
      'Payments are made in advance via M-Pesa or at reception.',
    ],
  },
  {
    id: 'individual',
    title: 'Individual Regular Membership',
    items: [
      'The individual gym membership is valid for the named member only and is non-transferable.',
      "Members have the option to freeze their membership for a specified period, subject to the gym's freeze policy.",
      'Members who refer a friend to join the gym may be eligible for a 10% discount on their next membership renewal fee.',
      'Members are eligible for a 10% discount on their membership renewal fee during their birthday month.',
    ],
  },
  {
    id: 'student',
    title: 'Student Membership',
    items: [
      'The student gym membership is available to currently enrolled students at an accredited educational institution.',
      'Only valid for certificate, diploma, post-diploma and undergraduate students.',
      'Proof of current enrolment, such as a valid student ID or enrolment verification, may be required during registration. Please provide a copy or scan of your student ID or enrolment verification.',
      'Student members are NOT eligible for the refer-a-friend discount, birthday discount or gym freeze policy.',
      'Student members on the standard monthly plan have gym access on weekdays from 5:15 AM to 5:00 PM and unlimited access on weekends.',
      'Student members enrolled in the Advanced monthly package have unlimited access to both the group fitness classes and the gym facilities.',
    ],
  },
  {
    id: 'facility',
    title: 'Facility Usage',
    items: [
      'Gym facilities and equipment must be used responsibly and in accordance with the provided instructions and guidelines. Please follow the gym rules and guidelines displayed on the wall.',
      'The gym reserves the right to temporarily close certain areas or equipment for maintenance or safety reasons.',
    ],
  },
  {
    id: 'health',
    title: 'Health & Safety',
    items: [
      'Members must assess their physical condition and consult a healthcare professional before engaging in any physical activities.',
      "It is the member's responsibility to inform the gym staff of any pre-existing medical conditions, injuries or limitations.",
      'Members are expected to follow all safety guidelines, including proper attire, using towels, and wiping down equipment after use.',
    ],
  },
  {
    id: 'freezing',
    title: 'Freezing Policy',
    items: [
      'Members may request to freeze their membership for a minimum of 7 days and a maximum of 21 consecutive days per monthly subscription. During the freeze period, members will not have access to gym facilities or services.',
      "To freeze a membership, members must give the gym at least 12 hours' notice of the desired start date of the freeze. Late notices will not be taken into consideration.",
      'Membership freezing is only available for Individual Regular membership plans. Student and Group memberships are not eligible for freezing.',
    ],
  },
  {
    id: 'cancellation',
    title: 'Cancellation & Termination',
    items: [
      'The gym reserves the right to terminate a membership in cases of non-compliance with the terms and conditions.',
      'In the event of membership termination by the gym, no refunds or credits will be issued.',
      'If a member terminates a membership that has been active for more than 7 days, it is not eligible for refunds or transfers.',
      'For memberships terminated within 7 days, a cancellation fee of KSh 1,500 will be deducted.',
    ],
  },
  {
    id: 'personal-training',
    title: 'Personal Training',
    items: [
      'Personal training sessions are available at our gym to provide individualised fitness guidance and support, starting from KSh 1,500. Ask at reception about available trainers, schedules and pricing.',
      'Members may bring their own personal trainers; however, external trainers must first comply with the gym rules and regulations on External Personal Training. Alternatively, members can request to be allocated one of the gym trainers.',
      'Personal training sessions are charged in addition to regular membership fees. Final charges are agreed between the client and the trainer. Trainers pay a monthly commission to the gym for using the facility, and the gym is not liable for any disputes about fees or financial arrangements between client and trainer.',
      'All personal training sessions must be recorded at the reception, so sessions are tracked accurately for both trainers and clients.',
      'Clients are required to sign a personal training agreement covering fees, session duration, cancellation policies and any liability waivers.',
      'The gym reserves the right to monitor and assess the quality of personal training, especially by internal trainers. Feedback about trainers or sessions is encouraged and should be directed to gym management.',
      "Personal training sessions should not interfere with other members' regular use of gym equipment.",
      'The gym may periodically review and update its personal training policies, fees and charges.',
    ],
  },
  {
    id: 'photography',
    title: 'Commercial Use & Photography',
    items: [
      'The gym premises are primarily intended for personal use by our members. Commercial activities — such as conducting paid classes or workshops, promoting products or services, or using the gym as a professional training space — require prior authorisation from gym management.',
      'Unauthorised commercial use may result in membership termination and legal action.',
      'Photography and videography for personal use, such as capturing workout progress or sharing fitness experiences on social media, are generally permitted.',
      'Explicit permission from gym management is required for commercial photography, professional shoots or media activities on the premises. Additional fees may apply depending on the nature and duration of the activity.',
      'Anyone taking photos or videos must respect the privacy and comfort of others and must not disrupt the gym. Management may restrict or prohibit photography that interferes with member safety, privacy or gym operations.',
    ],
  },
  {
    id: 'hours',
    title: 'Opening Hours',
    items: [
      'Monday to Friday: the gym opens at 5:15 AM.',
      'Saturday: the gym opens at 6:30 AM.',
      'Sunday: closed (rest day).',
      'Hours may change on public holidays. Notice will be given on WhatsApp and social media.',
    ],
  },
  {
    id: 'complaints',
    title: 'Complaints & Feedback',
    items: [
      'You can raise a complaint through the complaints form on our Contact page, by email or at reception.',
      'Complaints and feedback are directed to gym management, handled confidentially and followed up with you directly.',
    ],
  },
  {
    id: 'amendments',
    title: 'Amendments',
    items: [
      'The gym reserves the right to modify or update these terms and conditions. Any changes will be communicated to members in advance.',
    ],
  },
]
</script>
