// Single source of truth for contact details and opening hours.
// Update values here and every page picks them up.

export const PHONE_DISPLAY = '0702 836 266'
export const PHONE_TEL = '+254702836266'
export const WHATSAPP_NUMBER = '254702836266'

export const EMAIL = 'zelhafitness@gmail.com'
// TODO: replace with the dedicated complaints email once provided.
export const COMPLAINTS_EMAIL = 'zelhafitness@gmail.com'

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
