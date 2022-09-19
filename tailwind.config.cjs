/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}", "./components/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#fdfcf7",
        "secondary-color": "#777ADF",
        "gray-variant": "#101A1F",
        "gray-variant-2": "#BDBDBD",
        "white-variant": "#FDFEF9",
        "red-variant": "#FF5016",
        "yellow-variant": "#F8BB2D",
        "green-variant": "#95DCB9",
      },
      fontSize: {
        content: "13px",
        "content-title": "20px",
        "card-text": "15px",
        "spam-title": "40px",
      },
    },
  },
  plugins: [],
};
