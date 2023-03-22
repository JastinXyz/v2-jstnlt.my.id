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
      {
        dark: {
          'color-scheme': 'dark',
          primary: "#10F5CC",
          neutral: "#3A4F52",
          "base-100": "#1B2326",
          "white2": "#F5FEFD",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  darkMode: ["class", '[data-theme="dark"]'],
};
