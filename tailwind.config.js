/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kabir-dark': '#0a0a0a',
        'kabir-darker': '#1a1a1a',
        'kabir-gray': '#2a2a2a',
        'kabir-light-gray': '#3a3a3a',
        'kabir-green': '#00ff88',
        'kabir-green-dark': '#00cc6a',
        'kabir-green-light': '#33ffaa',
        'kabir-text': '#ffffff',
        'kabir-text-muted': '#a0a0a0',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-kabir': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2a2a2a 100%)',
        'gradient-kabir-light': 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
        'gradient-green': 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)',
        'gradient-green-dark': 'linear-gradient(135deg, #00cc6a 0%, #009955 100%)',
      }
    },
  },
  plugins: [],
}
