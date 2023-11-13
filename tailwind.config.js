/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    screens: {
      mobile: '414px',
      tablet: '800px',
      dekstop: '1440px'
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

