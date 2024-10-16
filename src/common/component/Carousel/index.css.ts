import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const carouselStyle = recipe({
  base: {
    position: "relative",

    width: "100%",
    height: "30rem",

    "::before": {
      content: "",

      position: "absolute",
      top: 0,
      left: 0,

      width: "10rem",
      height: "100%",

      zIndex: theme.zIndex.middle,

      opacity: 0,

      background: "linear-gradient(to left, transparent, rgba(0,0,0,0.3))",

      transition: "opacity 0.3s ease-in",
    },

    "::after": {
      content: "",

      position: "absolute",
      top: 0,
      right: 0,

      width: "10rem",
      height: "100%",

      zIndex: theme.zIndex.middle,

      opacity: 0,

      background: "linear-gradient(to right, transparent, rgba(0,0,0,0.3))",

      transition: "opacity 0.3s ease-in",
    },
  },
  variants: {
    hasRight: {
      true: {
        "::after": {
          opacity: 1,
        },
      },
    },
    hasLeft: {
      true: {
        "::before": {
          opacity: 1,
        },
      },
    },
  },
});

export const sliderWrapperStyle = style({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,

  display: "flex",
  justifyContent: "space-between",
  gap: "2rem",

  width: "100%",
  height: "100%",

  margin: "auto auto",

  overflowX: "scroll",
  scrollBehavior: "smooth",
  scrollSnapType: "x mandatory",

  "::-webkit-scrollbar": {
    display: "none",
  },
});

export const itemStyle = style({
  display: "flex",
  justifyContent: "center",

  width: "calc(25% - 1.5rem)",
  minWidth: "23.6rem",
  maxWidth: "30rem",
  height: "100%",

  overflow: "hidden",

  scrollSnapAlign: "start",

  flexShrink: 0,
});

export const arrowStyle = recipe({
  base: {
    position: "absolute",
    top: 0,
    bottom: 0,

    width: "3.2rem",
    height: "3.2rem",

    margin: "auto 0",

    zIndex: theme.zIndex.high,

    border: "none",
    borderRadius: "16px",

    cursor: "pointer",
  },
  variants: {
    position: {
      left: {
        left: "-1.6rem",
      },
      right: {
        right: "-1.6rem",
      },
    },
  },
});
