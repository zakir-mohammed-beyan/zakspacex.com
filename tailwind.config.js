/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        indigo: "#6610f2",
        purple: "#6f42c1",
        orange: "#fd7e14",
        green: "#198754",
        background: "#081b29",
        yellowgreen: "#9ACD32",
      },
      animation: {
        showRightBlack: "showRightBlack 4s ease forwards",
        showRightBlue: "showRightBlue 4s ease forwards",
        showRightWhite: "showRightWhite 4s ease forwards",
      },
      keyframes: {
        showRightBlack: {
          "0%": { width: "100%" },
          "100%": { width: "0" },
        },
        showRightBlue: {
          "0%": { width: "100%" },
          "100%": { width: "0" },
        },
        showRightWhite: {
          "0%": { width: "100%" },
          "100%": { width: "0" },
        },
      },
    },
  },
  plugins: [],
};

// Export the configuration using ES module syntax
export default config;
