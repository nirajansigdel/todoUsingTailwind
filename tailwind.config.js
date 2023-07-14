/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color:{
        background:"#F2F6FE",
        cardcolor:"#F2F6FE",
        textcolor:"#75747A"
      }
    },
  },
  plugins: [],
}

