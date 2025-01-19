/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./components/**/*.jsx"],

  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom right, #00c8969e 11% 11%, 23%, #0b0b0b 35% 66%, #ff00ff9c 92% 92%)",
      },
      height: {
        screen: "var(--real-vh)",
      },
      colors: {
        purple: "#FF00FF",
        violet: "#DB02DB",
        turquoise: "#00C896",
        glassy: "#ffffff0d",
        slate: {
          primary: "#A1A1A1",
        },
      },
      transform: {
        "3d": "translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z))",
      },

      keyframes: {
        "gradient-text": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "fade-in-down": {
          from: {
            transform: "translateY(-0.75rem)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveTopDown: {
          "0%": {
            transform: "translateY(0vh)",
          },
          "100%": {
            transform: "translateY(100vh)",
          },
        },
        moveDownTop: {
          "0%": {
            transform: "translateY(0vh)",
          },
          "100%": {
            transform: "translateY(-100vh)",
          },
        },
        blink: {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        delay: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "intro-text": {
          from: {
            color: "#00c896",
          },
          to: {
            color: "#ff00ff",
          },
        },
      },
      animation: {
        delay: "delay 0.6s cubic-bezier(0.4, 0, 0.6, 1)",
        blink: "blink 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "top-down": "moveTopDown 5s ease-in-out infinite alternate",
        "down-top": "moveDownTop 5s ease-in-out infinite alternate",
        "fade-in-down": "fade-in-down 0.2s ease-in-out both",
        "move-circle": "moveInCircle 20s reverse infinite",
        "gradient-text": "gradient-text 3s ease infinite",
        "intro-text": "intro-text 2.380s linear infinite alternate",
      },
    },
  },
  plugins: [require("@xpd/tailwind-3dtransforms")],
};
