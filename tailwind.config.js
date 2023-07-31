module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#f000b8",
          "secondary": "#ff99cc",
          "accent": "#ff6600",
          "neutral": "#e0e0e0",
          "base-100": "#0f172a",
          "info": "#00a5e0",
          "success": "#72c176",
          "warning": "#ffcc00",
          "error": "#ff0000",
        },
      },
    ],
  },
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'pink-glow': '0 0 20px #F000b8, 0 0 5px #F000b8'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        mont: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}
