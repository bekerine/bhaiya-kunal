/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mediumturquoise: "#68bfbf",
        silver: "#b7b7b7",
        white: "#fff",
        darkslategray: "#3b3b3b",
        whitesmoke: {
          "100": "#f4f4f4",
          "200": "#f1f1f1",
        },
        gray: {
          "100": "#8e8989",
          "200": "#1d1d1f",
          "300": "#0b0b11",
        },
        dimgray: {
          "100": "#747272",
          "200": "rgba(82, 96, 113, 0.2)",
        },
        gainsboro: "#e0e0e0",
        steelblue: "#75a0d2",
        teal: "#008080",
        "color-text-black": "#2d2d2d",
        lavender: "#eef0fe",
        purple: "rgba(159, 57, 154, 0.2)",
        slategray: "#48708b",
        red: "#ff0000",
        darkslateblue: "#4a5083",
        lightcyan: "#d7ffff",
        cornflowerblue: "rgba(117, 159, 239, 0.1)",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "open-sans": "'Open Sans'",
        "open-sans-hebrew": "'Open Sans Hebrew'",
      },
      borderRadius: {
        mini: "15px",
        "28xl": "47px",
        "9xl": "28px",
        "54xl": "73px",
        "61xl": "80px",
      },
    },
    fontSize: {
      "13xl": "32px",
      xl: "20px",
      "5xl": "24px",
      "21xl": "40px",
      lg: "18px",
      "9xl": "28px",
      sm: "14px",
      base: "16px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
