module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A192F', // Dark Navy
        secondary: '#1E293B', // Lighter Navy
        accent: '#64FFDA', // Bright Mint
        light: '#CCD6F6', // Light Slate
        dark: '#8892B0', // Slate
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
