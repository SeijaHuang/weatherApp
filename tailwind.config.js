/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alimama: ["AlimamaFangYuanTiVF-Square", "helvetica"],
      },
      color: {
        transparent: "transparent",
        white: "#ffffff",
        skyBlue: "#8caaf2",
        purple: "#6354de",
      },
    },
  },
  plugins: [],
};
