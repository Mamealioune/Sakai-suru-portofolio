/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
        noto: ['Noto Sans JP', 'sans-serif'],
        lora :['Lora']
      },
    },
  },
  plugins: [],
};
