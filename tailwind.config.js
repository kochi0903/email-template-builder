/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  safelist: [
    "bg-gray-800",
    "bg-blue-600",
    "bg-green-600",
    "bg-red-600",
    "bg-teal-500",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
