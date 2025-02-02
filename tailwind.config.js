/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Ensure this is correct
  theme: {
    extend: {
      fontFamily:{
        Montserrat: ["Montserrat","sans-serif"],
      },
    },
  },
  plugins: [],
};
