/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        feminine: {
          pink: "#923094",
          lightPink: "#e44697",
          purple: "#4c3094",
          lavender: "#372773",
          lightPink2: "#3392d0",
        },
      },
      fontFamily: {
        feminine: ["Poppins", "sans-serif"], // Reemplaza "Poppins" con tu fuente preferida
      },
      animation: {
        "text-reveal":
          "text-reveal 2.5s cubic-bezier(0.77, 0, 0.175, 1) forwards",
        "text-rebound":
          "text-rebound 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
      },
      keyframes: {
        "text-reveal": {
          "0%": {
            transform: "translateY(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "text-rebound": {
          "0%": {
            transform: "scale(0)",
            opacity: "0",
          },
          "60%": {
            transform: "scale(1.1)",
          },
          "80%": {
            transform: "scale(0.95)",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
