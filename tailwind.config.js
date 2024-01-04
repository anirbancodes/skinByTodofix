/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    // colors: {
    //   primary: {
    //     50: "#fff1f2",
    //     100: "#ffe4e6",
    //     200: "#fecdd3",
    //     300: "#fda4af",
    //     400: "#fb7185",
    //     500: "#f43f5e",
    //     600: "#e11d48",
    //     700: "#be123c",
    //     800: "#9f1239",
    //     900: "#881337",
    //   },
    //   secondary: {
    //     50: "#f5f3ff",
    //     100: "#ede9fe",
    //     200: "#ddd6fe",
    //     300: "#c4b5fd",
    //     400: "#a78bfa",
    //     500: "#8b5cf6",
    //     600: "#7c3aed",
    //     700: "#6d28d9",
    //     800: "#5b21b6",
    //     900: "#4c1d95",
    //   },
    // },
  },
  plugins: [],
};
