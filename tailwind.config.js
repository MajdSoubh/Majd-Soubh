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
        slate: {
          primary: "#A1A1A1",
        },
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
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
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
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
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
      },
      animation: {
        blink: "blink 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "top-down": "moveTopDown 5s ease-in-out infinite alternate",
        "down-top": "moveDownTop 5s ease-in-out infinite alternate",
        "fade-in-down": "fade-in-down 0.2s ease-in-out both",
        second: "moveInCircle 20s reverse infinite",
        "gradient-text": "gradient-text 3s ease infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [require("@xpd/tailwind-3dtransforms")],
};
