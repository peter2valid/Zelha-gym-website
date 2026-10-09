// Single source of truth for contact details and opening hours.
// Update values here and every page picks them up.

export const SITE_URL = 'https://zelhaspinfitness.com'
export const SITE_NAME = 'Zelha Spin and Fitness Gym'
export const DEFAULT_OG_IMAGE = '/images/og-image.jpg'

export const ADDRESS = {
  street: 'Kalimoni Highway View Plaza (Former Uchumi), Thika Road',
  locality: 'Juja',
  region: 'Kiambu County',
  country: 'KE',
}
export const GEO = { latitude: -1.108053, longitude: 37.013838 }
export const SOCIAL_LINKS = [
  'https://www.instagram.com/zelhafitness',
  'https://www.facebook.com/zelhaaFitness',
  'https://www.tiktok.com/@zelhafitness',
]

export const PHONE_DISPLAY = '0702 836 266'
export const PHONE_TEL = '+254702836266'
export const WHATSAPP_NUMBER = '254702836266'

export const EMAIL = 'zelhafitness@gmail.com'
export const COMPLAINTS_EMAIL = 'zelhafitness@gmail.com'

// M-Pesa payment details, as displayed at the gym reception.
export const MPESA = {
  paybill: '522533',
  account: '7838190',
  accountName: 'Zelha Fitness',
  sendMoneyNumber: '0702 836 266',
  sendMoneyName: 'Matabel Odiaga',
}

export const OPENING_HOURS = [
  { days: 'Mon – Fri', hours: '5:15 AM – 9:00 PM' },
  { days: 'Saturday', hours: '6:30 AM – 9:00 PM' },
  { days: 'Sunday', hours: 'Rest Day (Closed)' },
]

// Schema.org openingHoursSpecification, kept in sync with OPENING_HOURS.
export const OPENING_HOURS_SCHEMA = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '05:15',
    closes: '21:00',
  },
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Saturday'],
    opens: '06:30',
    closes: '21:00',
  },
]

export const whatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
