/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        53: "53px",
        150: "150px",
      },
      colors: {
        bg: "#F6F5F5",
        item1: "#E4C988",
        item2: "#84D2C5",
        item3: "#C27664",
        item4: "#B05A7A",
      },
      fontFamily: {
        nunito: ["Nunito Sans"],
      },
      spacing: {
        fulscreen: "700px",
        "20%": "20%",
        "30%": "30%",
        "35%": "35%",
        "50%": "50%",
        "60%": "60%",
        "70%": "70%",
        "85%": "85%",
        440: "440px",
        500: "500px",
        600: "600px",
        700: "700px",
        800: "800px",
      },
      keyframes: {
        zeroToFull: {
          "0%": { opacity: "0" },
          "100% ": { opacity: "1" },
        },
        fullToZero: {
          "100%": { opacity: "0" },
          "0% ": { opacity: "1" },
        },
      },
      animation: {
        onloadHalf: "zeroToFull 0.5s cubic-bezier(0.4, 0, 0.6, 1)",
        onloadOne: "zeroToFull 1s cubic-bezier(0.4, 0, 0.6, 1)",
        onloadOneHalf: "zeroToFull 1.5s cubic-bezier(0.4, 0, 0.6, 1)",
        onScrollOneHalf: "fullToZero 1.5s cubic-bezier(0.4, 0, 0.6, 1)",
      },
    },
  },
  plugins: [],
};
