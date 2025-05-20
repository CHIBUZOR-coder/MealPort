/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      animation: {
        spinRight: "spinRight 1s linear infinite",
        spinLeft: "spinLeft 6s linear infinite",
      },

      keyframes: {
        bounceCustom: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        bounceFast: "bounceCustom 0.5s infinite", // Custom keyframes with a faster duration
      },

      fontSize: {
        h1: "2.6rem",
      },
      colors: {
        use: "rgba(251, 249, 255, 1)",
        use2: "rgba(237, 242, 239, 1)",
        mainTrans: "rgb(8,8,8, 0.7)",
        blacktrans: "rgba(0, 0, 0, 0.6)",
        blueBtn: "rgb(11,109,255, .7)",
        blueBtnH: "rgb(11,109,255, 1)",
        faintWhite: "rgb(246,246,246)",

        subMain: "rgba(242, 0, 0, 1)",
        subMain2: "rgba(242, 0, 0, 0.5)",
        dry: "rgba(11, 15, 41, 1)",
        star: "rgba(255, 176, 0, 1)",
        text: "rgba(192, 192, 192, 1)",
        textt: "rgba(192, 192, 192, 0.3)",
        border: "rgba(75, 85, 99, 1)",
        placeHolder: "rgba(107, 114, 128, 0.6)",
        radio: "rgba(107, 114, 128, 0.4)",
        dryGray: "rgba(224, 213, 213, 1)",
        drkb: "rgba(27, 30, 50, 0.8)",
        drkb2: "rgba(27, 30, 50, 1)",

        // darkb:"rgba(27, 30, 50, 0.8)"
        dash: "rgba(243,244,249)",
        person: "rgba(213,217,220)",
        activ: "rgb(251,146,60)",

        // **************
        primary: "rgb(229,231,235)",
        primary2: "rgba(255,255,255,0.5)",
        primaryActive: "rgb(251,146,60)",
        primaryLight: "rgb(251,146,60, 0.4)",
        orderprep: "rgba(255, 202, 233, 1)",
        trans: "rgba(30, 26, 26, 0.6)",
        transb: "rgba(30, 26, 26, 0.8)",
        trans2: "rgb(0,0,0,0.5)",
        trans2: "rgb(0,0,0,0.6)",
        btn: "rgba(229,231,235,0.6)",
      },
      fontFamily: {
        primaryT: ["Roboto", "sans-serif", "Avro"],
      },
      height: {
        ppic2: "800px",
        head: "60vh",
        rate: "400px",
        // Cus: "",
      },
      right: {
        primary: "30px",
      },
      top: {
        minus: "-30px",
      },
      left: {
        primary: "30px",
      },
      width: {
        our: "500px",
      },
      maxHeight: {
        first: "440px",
      },
      minHeight: {
        primary: "620px",
      },
    },
  },
  plugins: [],
};
