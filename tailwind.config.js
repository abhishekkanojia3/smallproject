module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A3C6E', // CloudForce Primary Blue
        accent: '#00AEEF', // Accent Cyan
        gold: '#D4AF37', // Brand Gold
        surface: '#FFFFFF', // Surface White
        tint: '#EBF4FB', // Light Blue Tint
        ink: '#1A1A2E', // Dark Text
        slate: '#5A6A7A', // Mid Gray
        navy: '#0F2747', // Header/Footer Navy
        midnight: '#0B1B2E', // Deep Navy
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['"Poppins"', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
