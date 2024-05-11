/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Manrope', 'sans-serif'],

      },

      colors: {

        primary: "hsl(193, 38%, 86%)",
        secondary: "hsl(150, 100%, 66%)",
        neutral: {
          100: "hsl(217, 19%, 38%)",
          200: "hsl(217, 19%, 24%)",
          300: "hsl(218, 23%, 16%)",
        }


        //         ### Primary

        // - Light Cyan: hsl(193, 38%, 86%)
        // - Neon Green: hsl(150, 100%, 66%)

        // ### Neutral

        // - Grayish Blue: hsl(217, 19%, 38%)
        // - Dark Grayish Blue: hsl(217, 19%, 24%)
        // - Dark Blue: hsl(218, 23%, 16%)

      }
    },
  },
  plugins: [],
}