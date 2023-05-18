/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        Rubik : ["Rubik", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"]
      },
      colors : {
        primary: "#6936F5",
      }
    },
  },
  plugins: [
  
  ],
}

