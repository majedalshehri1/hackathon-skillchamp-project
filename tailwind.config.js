/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        animation: {
          blob: "blob 4s infinite"
        },
        Keyframe: {
          blob: {
            "0%": {
              transform: "scale(1)"
            },
            "33%": {
              transform: "scale(1.1)"
            },
            "66%": {
              transform: "scale(0.9)"
            },
            "100%": {
              transform: "scale(1)"
            }
          }
        }
      },
    },
    plugins: [],
  }
  