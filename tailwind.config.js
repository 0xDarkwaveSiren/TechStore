/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cyberpunk Neon Palette
        'neon-cyan': '#00f3ff',
        'neon-purple': '#bc13fe',
        'neon-pink': '#ff00ff',
        'void-black': '#050505',
        'glass-white': 'rgba(255, 255, 255, 0.05)',
        'glass-border': 'rgba(255, 255, 255, 0.2)',
        // Legacy colors for compatibility
        primary: '#00f3ff',
        'primary-dark': '#00d4e6',
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(135deg, #00f3ff 0%, #bc13fe 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0.4) 100%)',
        'cyber-mesh': 'radial-gradient(circle at 20% 50%, rgba(0, 243, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(188, 19, 254, 0.15) 0%, transparent 50%)',
      },
      backdropBlur: {
        'glass': '20px',
        'glass-heavy': '40px',
      },
      borderRadius: {
        'glass': '30px',
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 243, 255, 0.5), 0 0 60px rgba(0, 243, 255, 0.2)',
        'neon-purple': '0 0 20px rgba(188, 19, 254, 0.5), 0 0 60px rgba(188, 19, 254, 0.2)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
    },
  },
  plugins: [],
}
