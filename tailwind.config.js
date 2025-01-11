/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0052FE",
        secondary: "#1B1B1B",
        success: "#14B079",
        danger: "#DC2626",
      },
    },
  },
  plugins: [],
}