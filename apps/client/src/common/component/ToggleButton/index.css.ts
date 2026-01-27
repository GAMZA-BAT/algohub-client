import { recipe } from "@vanilla-extract/recipes";

export const buttonStyle = recipe({
  base: {
    position: "relative",

    appearance: "none",

    width: "40px",
    height: "24px",

    padding: "2px",

    borderRadius: "16px",
    backgroundColor: "rgba(121, 130, 154, 1)",

    cursor: "pointer",

    ":before": {
      content: "",

      position: "absolute",
      top: 0,
      bottom: 0,

      zIndex: 1,

      width: "20px",
      height: "20px",
      margin: "auto 0",

      backgroundColor: "rgba(188, 192, 205, 1)",
      borderRadius: "50%",

      transition: "all .3s ease-out",
    },
  },
  variants: {
    active: {
      true: {
        backgroundColor: "rgba(102, 89, 255, 1)",

        ":before": {
          backgroundColor: "rgba(255, 255, 255, 1)",

          transform: "translateX(16px)",
        },
      },
    },
  },
});
