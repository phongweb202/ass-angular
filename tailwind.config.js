module.exports = { 
    prefix: 'tw-',
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        doiMau: {
          "0%,100%": { color: "yellow" },
          "50%": { color: "red" },
      },
      },
    },
    plugins: []
 
  }