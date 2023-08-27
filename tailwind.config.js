/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      width: {
        550: '550px',
      }
    },
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    }
  ]
}

