/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  prefix: "",
  theme: {
    extend: {
      colors: {
        primary : "#F9A51A" ,
        secondery : "#09396F",
        secondery2 : "#1e1f4b"
      }
    },
    container: {
      center: true,      
      screens: { },
      extend: {
        colors : {
          primary : ""
        }
      }
    },
  },
  

  mode: 'jit',
}