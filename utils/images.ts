// Responsive variants for the larger photos: a 640px WebP for phones plus the
// full-size original. Images not listed here are already small enough.
const VARIANTS: Record<string, { small: string; width: number }> = {
  '/images/zelha-gym-community-juja.jpg': { small: '/images/zelha-gym-community-juja-640.webp', width: 1280 },
  '/images/spin-class-juja.jpg': { small: '/images/spin-class-juja-640.webp', width: 1369 },
  '/images/hiit-class-juja.webp': { small: '/images/hiit-class-juja-640.webp', width: 1280 },
  '/images/strength-training-juja.webp': { small: '/images/strength-training-juja-640.webp', width: 1000 },
  '/images/personal-training-juja.webp': { small: '/images/personal-training-juja-640.webp', width: 1000 },
  '/images/functional-training-juja.webp': { small: '/images/functional-training-juja-640.webp', width: 900 },
}

// srcset for an image path, or undefined (attribute omitted) if it has no variants.
export const srcsetFor = (src: string) => {
  const v = VARIANTS[src]
  return v ? `${v.small} 640w, ${src} ${v.width}w` : undefined
}
