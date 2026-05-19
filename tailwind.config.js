/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f0f2f5',
        primary: '#6366f1', // Vibrant indigo/purple
        primaryHover: '#4f46e5',
        surface: '#ffffff',
      },
      boxShadow: {
        neu: '8px 8px 16px #d1d5db, -8px -8px 16px #ffffff',
        neuPressed: 'inset 4px 4px 8px #d1d5db, inset -4px -4px 8px #ffffff',
        neuSm: '4px 4px 8px #d1d5db, -4px -4px 8px #ffffff',
      }
    },
  },
  plugins: [],
}
