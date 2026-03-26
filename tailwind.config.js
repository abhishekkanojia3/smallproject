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
    },
  },
  plugins: [],
};
