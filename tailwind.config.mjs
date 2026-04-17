/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        leao: {
          blue: '#1A2B3C',
          orange: '#E67E22',
          silver: '#BDC3C7',
          white: '#F4F4F4',
        },
      },
      fontFamily: {
        // Títulos — Serif clássico e refinado
        display: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        // Corpo — Sans moderno e legível
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        // Sombras suaves para aspecto "Premium Vintage"
        premium: '0 10px 30px -10px rgba(0, 0, 0, 0.45)',
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'orange-glow': '0 0 40px -10px rgba(230, 126, 34, 0.55)',
      },
      backgroundImage: {
        'grain':
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        'radial-leao':
          'radial-gradient(ellipse at top, rgba(230,126,34,0.12), transparent 60%), radial-gradient(ellipse at bottom, rgba(26,43,60,0.9), #1A2B3C 70%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out both',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
