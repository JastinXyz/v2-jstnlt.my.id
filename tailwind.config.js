/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        wave: "wave 2s linear infinite",
      },
    },
  },
  daisyui: {
    themes: [
      "light",
      {
        dark: {
          primary: "#1d4ed8",
          secondary: "#7c3aed",
          accent: "#14b8a6",
          neutral: "#1f2937",
          "base-100": "#0F1117",
          info: "#0ea5e9",
          success: "#4ade80",
          warning: "#facc15",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  darkMode: ["class", '[data-theme="dark"]'],
};
