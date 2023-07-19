/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-shade": "#9333ea",
        "primary-shade-v2": "#a855f7",
        "seconday-shade": "rgb(31 41 55)",
        "tertiary-shade": "rgb(156 163 175)",
        "quaternary-shade": "rgb(107 114 128)",
      },
      backgroundImage: {
        "my-image": "url('./src/assets/Login-Sign-BackgroundImage.avif')",
      },
    },
  },
  plugins: [],
};
