/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        semibold: 600,
        bold: 700,
      },
      colors: {
        "custom-blue": "#05267B",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "70%": { opacity: "0.7" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        body: { fontFamily: "Poppins", fontWeight: "400" },
      });
    },
  ],
};
