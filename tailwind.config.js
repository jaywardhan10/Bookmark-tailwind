module.exports = {
  content: ['./*.html'],
  theme: {
    screen:{
      sm:'480px',
      md:'768px',
      lg:'1024px',
      xl:'1440px'
    },
    extend: {
      colors:{
        softBlue:'hsl(231 69% 60%)',
        softRed:'hsl(0 94% 66%)',
        grayiesBlue:'hsl(229 8% 60%)',
        veryDarkBlue:'hsl(229 31% 21%)'
      },
      fontFamily:{
        sans:['Rubik', 'sans-serif']
      },
      backgroundImage: ()=>({
        //'dots': "url('images/bg-dots.svg')"
      })
    },
  },
  plugins: [],
}
