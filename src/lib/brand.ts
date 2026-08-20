// Arole Adjo — Brand Tokens
export const brand = {
  colors: {
    gold: '#D4A017',
    goldDark: '#B8860B',
    goldLight: '#F3D07A',
    ink: '#2B1B12',
    canvas: '#FDFCF8',
    canvasDark: '#F5F0E8',
  },
  fonts: {
    display: "'Cormorant Garamond', serif",
    serif: "'Playfair Display', serif",
    sans: "'Inter', sans-serif",
  },
  nav: [
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Groups', href: '/groups' },
    { label: 'Trust', href: '/trust-security' },
    { label: 'For Leaders', href: '/for-leaders' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Our Story', href: '/our-story' },
  ],
  social: {
    whatsapp: 'https://wa.me/447000000000',
    instagram: 'https://instagram.com/aroleadjo',
    twitter: 'https://twitter.com/aroleadjo',
  },
  stats: [
    { value: '£42k', label: 'Rotated in Manchester' },
    { value: '128+', label: 'Trusted Members' },
    { value: '0', label: 'Defaults to Date' },
    { value: '4.8★', label: 'Trust Rating' },
  ],
} as const;
