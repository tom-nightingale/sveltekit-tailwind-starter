export default {
  content: ["./index.html", "./src/**/*.{html,js,svelte,ts}"],
  theme: {
    screens: {
      "2xs": "375px",
      xs: "480px",
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "1600px",
      "4xl": "2000px",
    },
    fontFamily: {
      sans: ["Montserrat", "arial", "sans-serif"],
      serif: ["Palatino Linotype", "serif"],
    },
    extend: {
      colors: {
        background: {
          DEFAULT: "#ffffff",
        },
        "on-background": {
          DEFAULT: "#FF0000",
        },
        surface: {
          DEFAULT: "#ffffff",
        },
        "on-surface": {
          DEFAULT: "#FF0000",
        },
        "inverse-surface": {
          DEFAULT: "#fff",
        },
        "surface-variant": {
          DEFAULT: "#f2f0e8",
        },
      },
      maxWidth: (theme) => ({
        ...theme("spacing"),
      }),
      screens: {
        landscape: { raw: "(orientation: landscape)" },
      },
    },
  },
  plugins: [],
  corePlugins: {
    container: false,
  },
};
