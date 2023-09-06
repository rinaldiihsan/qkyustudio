/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        bebasneue: ['Bebas Neue'],
      },
      screens: {
        handphone: '300px',
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px',
      },
      colors: {
        myYellow: '#EAA229',
        mySmoke: '#3D3C3A',
        myBlack: '#1F1F1E',
      },
    },
  },
  plugins: [],
};
