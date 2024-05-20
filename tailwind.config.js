/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      'quicksand': ['Quicksand']
    }, colors: {
      'game-blue': '#13446A',
      'game-light-blue': '#014E99',
      'game-yellow': '#FFD900',
      'game-white': '#ffffff',
      'game-grey': '#E8E6E6',
      'game-black': '#000000',
      
    }, boxShadow: {
      'box-sm-light': '13px 13px 0px 0px #014E99',
      'box-lg-light': '22px 22px 0px 0px #014E99',
    }
  },
  plugins: [],
};
