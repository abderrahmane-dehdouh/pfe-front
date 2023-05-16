/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#532AFF',
        secondary: '#D6CCFF',
        
      },
      fontFamily: {
        ralewey: ['Raleway']
      } 
    },
  },
  plugins: [],
}

