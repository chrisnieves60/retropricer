/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navBlue: "#000080",
        offWhite: "#D9D9D9", 
        cardBG1: "#F3F0E6", 
        cardBG2: "#F7F7F7", 
        cardBG3: "#EBF1FA", 
        cardBG4: "#D7E8FA", 
        cardBG5: "#EBF1FA", 
        cardBG6: "#E3F2FD", 
      },
    },
  },
  plugins: [],
};
