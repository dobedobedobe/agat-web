module.exports = {
  content: [
    "./src/**/*.njk",
    "./src/**/*.md",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      mono: ["Space Mono", "monospace"],
      groto: ["Space Grotesk", "sans-serif"],
      dink: ['Courier Prime', "monospace"],
      work: ['Work Sans', 'sans-serif']
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      "extra-bold": "800",
      black: "900",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
