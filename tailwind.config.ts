module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Add this line if you are using files in the 'app' directory
  ],
  theme: {
    extend: {
      colors: {
        "colors-primary": "#fff",
        darkgray: "#9d9d9d",
        gray: {
          100: "#fffdfd",
          200: "#8f8f8f",
          300: "#74787b",
          400: "#74757c",
          500: "#1e1e1e",
        },
        silver: "#c7c3c3",
        gainsboro: "#d9d9d9",
        lavenderblush: "#ffeded",
        mediumseagreen: "#25a25a",
        black: "#000",
        slategray: "#636d86",
        snow: "#fffafa",
        tomato: "#e74c3c",
        brown: "#a22525",
      },
      fontFamily: {
        montserrat: "Montserrat",
        kanit: "Kanit",
      },
      borderRadius: {
        "8xs": "5px",
        "3xs": "10px",
      },
    },
    fontSize: {
      mini: "15px",
      sm: "14px",
      xl: "20px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      xs: "12px",
      inherit: "inherit",
    },
    screens: {
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq650: {
        raw: "screen and (max-width: 650px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
