// Tailwind chi setting: amche colours ani fonts ithe define kele ahet
module.exports = {
  // Tailwind kuthe-kuthe classes shodhto
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#e9ecf5",     // page background (light)
        road: "#14153b",   // dark road band
        navy: "#14153b",
        ink: "#f4efe4",    // headline colour (on the dark road)
        accent: "#c2410c", // stat numbers + borders
        muted: "#3b3d6b",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
