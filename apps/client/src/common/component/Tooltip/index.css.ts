import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const container = style({
  position: "relative",
  display: "inline-block",
});

export const tooltipWrapper = style({
  position: "relative",
  width: "fit-content",
  height: "fit-content",
});

export const triggerWrapper = style({
  width: "fit-content",
  height: "fit-content",
});

export const tooltipContainer = recipe({
  base: {
    position: "absolute",
    zIndex: theme.zIndex.high,

    padding: "20px 16px",
    borderRadius: "10px",
    backgroundColor: theme.color.mg5,
  },
  variants: {
    placement: {
      "top-center": {
        top: "0",
        left: "50%",
        transform: "translateX(-50%) translateY(calc(-100% - 2rem))",
      },
      "top-left": {
        top: "0",
        left: "0",
        transform: "translateY(calc(-100% - 2rem))",
      },
      "top-right": {
        top: "0",
        right: "0",
        transform: "translateY(calc(-100% - 2rem))",
      },
      "bottom-center": {
        bottom: "0",
        left: "50%",
        transform: "translateX(-50%) translateY(calc(100% + 2rem))",
      },
      "bottom-left": {
        bottom: "0",
        left: "0",
        transform: "translateY(calc(100% + 2rem))",
      },
      "bottom-right": {
        bottom: "0",
        right: "0",
        transform: "translateY(calc(100% + 2rem))",
      },
      "left-center": {
        top: "50%",
        left: "0",
        transform: "translateX(calc(-100% - 2rem)) translateY(-50%)",
      },
      "left-top": {
        top: "0",
        left: "0",
        transform: "translateX(calc(-100% - 2rem))",
      },
      "left-bottom": {
        bottom: "0",
        left: "0",
        transform: "translateX(calc(-100% - 2rem))",
      },
      "right-center": {
        top: "50%",
        right: "0",
        transform: "translateX(calc(100% + 2rem)) translateY(-50%)",
      },
      "right-top": {
        top: "0",
        right: "0",
        transform: "translateX(calc(100% + 2rem))",
      },
      "right-bottom": {
        bottom: "0",
        right: "0",
        transform: "translateX(calc(100% + 2rem))",
      },
    },
  },
});

export const tooltipArrow = recipe({
  base: {
    position: "absolute",
    borderLeft: "10px solid transparent",
    borderRight: "10px solid transparent",
    borderBottom: `15px solid ${theme.color.mg5}`,
  },
  variants: {
    placement: {
      "top-center": {
        bottom: "0",
        left: "50%",
        transform: "translateY(-100%)",
        rotate: "180deg",
      },
      "top-left": {
        bottom: "0",
        left: "2rem",
        transform: "translateY(-100%)",
        rotate: "180deg",
      },
      "top-right": {
        bottom: "0",
        right: "2rem",
        transform: "translateY(-100%)",
        rotate: "180deg",
      },
      "bottom-center": {
        top: "0",
        left: "50%",
        transform: "translateX(-50%) translateY(-100%)",
      },
      "bottom-left": {
        top: "0",
        left: "2rem",
        transform: "translateY(-100%)",
      },
      "bottom-right": {
        top: "0",
        right: "2rem",
        transform: "translateY(-100%)",
      },
      "left-center": {
        bottom: "50%",
        right: "-1rem",
        transform: "translateY(-50%)",
        rotate: "90deg",
      },
      "left-top": {
        top: "2rem",
        right: "-1rem",
        transform: "translateY(-50%)",
        rotate: "90deg",
      },
      "left-bottom": {
        bottom: "2rem",
        right: "-1rem",
        transform: "translateY(-50%)",
        rotate: "90deg",
      },
      "right-center": {
        bottom: "50%",
        left: "-1rem",
        transform: "translateY(-50%)",
        rotate: "270deg",
      },
      "right-top": {
        top: "2rem",
        left: "-1rem",
        transform: "translateY(-50%)",
        rotate: "270deg",
      },
      "right-bottom": {
        bottom: "2rem",
        left: "-1rem",
        transform: "translateY(-50%)",
        rotate: "270deg",
      },
    },
  },
});
