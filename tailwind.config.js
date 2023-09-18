module.exports = {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "dark-purple": "#081A51",
        "light-white" : "rgba(255,255,255,0,0.18)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}