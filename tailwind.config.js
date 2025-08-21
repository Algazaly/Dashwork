/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        lightpink: '#FFE2E5',
        lightpeach: '#FFF4DE',
        
      }
    },
  },
  plugins: [],
}