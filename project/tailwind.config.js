/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'black',
        primary: '#00bfff',
        secondary: '#1a1a1a',
        accent: '#0099cc',
        lightText: '#e0e0e0',
        fadedText: '#cccccc',
      },
      boxShadow: {
        'blue-glow': '0 0 6px #00bfff',
        'blue-line': '0 0 8px #00bfff',
      },
      textShadow: {
        blue: '0 0 6px #00bfff',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow') // ⬅️ Add this plugin for text-shadow support
  ],
};
