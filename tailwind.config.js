/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('/public/imgs/hedmark-fylke-norway-khedmark-norvegiia-zima-sneg-sugroby-le.jpg')",
      },
    },
  },
  plugins: [],
};
