/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primaryColor : '#010a5e' ,
        primaryColorLight :'#010d78' ,
        secondaryColor : '#FFCC00' ,
        navySecColor : '1C0C5B',
        navyPurple : '3D2C8D',
        paragraphColor : '#c0c0c0' ,
        darkColor : '#000' ,
        redColor : '#cc3433' ,
        darkColorLight : '#171717' ,
        springWood :'#e5dbd2' ,
        corduroyBrownColor :'#AA875C' ,
        processCyanColor:'#01BAEF',
        processCyanRedColor :'#B80C09',
        indigoDyeColor :'#0B4F6C',
        processCyan : '#01BAEF',
        richBlack : '#040F16',
        babyPowderWhite : '#FDFFFC',
        pompPowerColor:'#966B9D',
      },
      keyframes : {
        move : {
          "50%" : {transform: 'translateY(-1rem)'}
        }
      },
      animation :{
        'movingY': 'move 2s liner infinite'
      }
    },
    container : {
      center : 'true',
      padding : {
      DEFAULT : '1rem',
        sm : '1.5rem'
      }
    },

    fontFamily:{
      Oswald : ['Oswald' , 'sans-serif'],
      DMSans :['DM Sans','sans-serif'],
    }
  },
  plugins: [],
}