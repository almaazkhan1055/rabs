/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "pulse-gray": {
          "0%": { boxShadow: "0 0 0 0 rgba(128, 128, 128, 0.7)" },
          "70%": { boxShadow: "0 0 0 10px rgba(128, 128, 128, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(128, 128, 128, 0)" },
        },
      },
      animation: {
        "pulse-gray": "pulse-gray 2s infinite",
      },
    },
  },
  plugins: [],
};
