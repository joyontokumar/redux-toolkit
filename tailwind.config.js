/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000",
      horizontal: "#ddd",
      metal: "#565584",
      container: {
        padding: {
          DEFAULT: "15px",
          sm: "30px",
          lg: "30px",
          xl: "15px",
          "2xl": "15px",
        },
      },
      primary: {
        dark: "#000",
        gray: "#ddd",
        normal: "#777",
      },
      secondary: {
        dark: "#111",
        gray: "#999",
        normal: "#444",
      },
    },
    margin: {
      12.2: "20px",
    },
    borderRadius: {
      cardM: "6px",
      cardL: "8px",
      cardX: "10px",
      card2XL: "14px",
    },

    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        red: "#FF0000",
      },
      spacing: {
        "mt-11.5": "10px",
      },
      screens: {
        lg: "992px",
      },
    },
  },
  plugins: [],
};
