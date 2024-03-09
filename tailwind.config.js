/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kausan: [ "Kaushan Script", 'serif'],
        courgette: [ "Courgette", 'serif'],
      }
    },
  },
  plugins: ["require(flowbite/plugin)"],
};
