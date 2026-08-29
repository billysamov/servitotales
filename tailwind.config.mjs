/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        industrial: {
          red: '#DC2626',
          'red-dark': '#B91C1C',
          'red-light': '#EF4444',
          navy: '#0B2545',
          'navy-dark': '#050B16',
          'navy-light': '#133E6D',
          amber: '#F59E0B',
          slate: '#0F172A'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif']
      }
    }
  },
  plugins: []
};
