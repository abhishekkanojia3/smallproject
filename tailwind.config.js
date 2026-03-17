module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2d3e50',        // Medium-dark gray (matches logo background)
        accent: '#ff9500',         // Vibrant orange (matches logo icon)
        gold: '#fbbf24',           // Light gold
      },
    },
  },
  plugins: [],
};
