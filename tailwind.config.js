/** @type {import('tailwindcss').Config} */
const Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1216px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)"],
        work: ["var(--font-work-sans)"],
        serif: ["var(--font-source-serif-pro)"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        light: {
          ...require("daisyui")["[data-theme=light]"],
          primary: "#4B6BFB",
          "primary-content": "#FFFFFF",
          "primary-focus": "#405BD5",
          secondary: "#696A75",
          "secondary-focus": "#3B3C4A",
          "secondary-content": "#FFFFFF",
          accent: "#3CC288",
          "accent-focus": "#33A574",
          "accent-content": "#FFFFFF",
          neutral: "#181A2A",
          "neutral-focus": "#141624",
          "neutral-content": "#FFFFFF",
          "base-100": "#FFFFFF",
          "base-200": "#F6F6F7",
          "base-300": "#E8E8EA",
          "base-content": "#181A2A",
          info: "#181454",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",
        },
      },
      {
        dark: {
          ...require("daisyui")["[data-theme=dark]"],
          primary: "#4B6BFB",
          "primary-content": "#FFFFFF",
          "primary-focus": "#405BD5",
          secondary: "#696A75",
          "secondary-focus": "#3B3C4A",
          "secondary-content": "#FFFFFF",
          accent: "#3CC288",
          "accent-focus": "#33A574",
          "accent-content": "#FFFFFF",
          neutral: "#181A2A",
          "neutral-focus": "#141624",
          "neutral-content": "#FFFFFF",
          "base-100": "#181A2A",
          "base-200": "#141624",
          "base-300": "#E8E8EA",
          "base-content": "#DCDDDF",
          info: "#FFFFFF",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",
        },
      },
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
    ],
    base: true,
    utils: true,
    logs: false,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
};

export default Config;
