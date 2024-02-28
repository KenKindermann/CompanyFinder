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
