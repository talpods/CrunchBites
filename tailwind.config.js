module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {


     

      colors:{
    
        orangishred:{
          200:'#D16161',
          DEFAULT:'#BE3737',
          800:'#7E2525',
        },

browngray:{
        200:'#5F5C58',
        DEFAULT:'#353331',
        800:'#0B0A0A',
      },


      beigeorange:{
        200:'#F8E3C9',
        DEFAULT:'#EDB672',
        800:'#E59738',
      },

      beigeyellow:{
     
        DEFAULT:'#F1DE95',
    
      }

      },

      
  




    
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
