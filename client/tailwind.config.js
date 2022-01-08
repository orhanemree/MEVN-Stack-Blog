module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "gray": "#C5C6C7",
      "black": "#0B0C10",
      "blue": "#45A29E",
      "light-blue": "#66FCF1",
      "dark-blue": "#1F2834",
      "red": "rgb(234 88 12)",
    },
    extend: {
      fontFamily: {
        'nunito': ['"Nunito"', 'sans-serif']
      }
    },
    screens: {
      "xs": "480px"
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}