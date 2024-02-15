/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-shade": "#00BFFF ",
        "seconday-shade": "rgb(31 41 55)",
        "main-shade": "#1E152A",
        "text-color": "#E7E7E7",
        "borders-color": "#9ca3af",
        "contact-shade": "#231830",
      },
      backgroundImage: {
        "auth-bg-image": "url('./src/assets/Login-Sign-BackgroundImage.png')",
      },
    },
  },
  plugins: [],
};
