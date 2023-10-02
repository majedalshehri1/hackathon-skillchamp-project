tailwind.config = {
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      body: ["Roboto", "sans-serif"],
      mono: ["ui-monospace", "monospace"],
    },
  },
  corePlugins: {
    preflight: false,
  },
};

var splide = new Splide(".splide", {
  type: "loop",
  autoplay: true,
});

splide.mount();
