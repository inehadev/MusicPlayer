/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 
    theme: {
      extend: {
        backgroundImage: {
          'custom-gradient':"  linear-gradient(180deg, #4C0000 0%, #0A0A0A 100%),linear-gradient(90deg, rgba(0, 0, 0, 0) 73.01%, rgba(15, 15, 15, 0.6) 73.01%)"
         
    
        },
        colors:{
          'custon1':"#6B0000",
          'custom2':"#0E0E0E",
          'custom3':"#2C0000"
        },
        backgroundOpacity: {
          '40':'0.3'
        }
       
      
      },
    },
  
  plugins: [],
}

