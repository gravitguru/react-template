/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily : {
      pop : ['Poppins',' sans-serif'],
      tit : ['Podkova',' serif'],
      num : ['Mochiy Pop P One', 'sans-serif']
    },
    extend: {
      colors : {
        'primary' : '#006666',
        'secondary' : '#EFC368',
        'dark' : '#263238',
        'lite' : '#607D8B',
        'lite_pro' : '#455A64',
        'gradient_lite' :' linear-gradient(310.06deg, #99D5D5 -4.46%, #FFFFFF 78.12%)',
       
      },
    },
  },
  plugins: [],
}
