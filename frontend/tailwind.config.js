/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-shade": "#4D46B5",
      },
      backgroundImage: {
        "my-image": "url('./src/assets/Login-Sign-BackgroundImage.avif')",
      },
    },
  },
  plugins: [],
};
