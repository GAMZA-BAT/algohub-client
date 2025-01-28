import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const triggerButtonStyle = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "0.4rem",

  width: "100%",
  borderRadius: "0.4rem",
});

export const arrowDownStyle = style({
  width: "1.2rem",
  height: "1.2rem",
});

export const dropdownStyle = recipe({
  base: {
    position: "absolute",
    zIndex: theme.zIndex.top,
    paddingTop: "1.6rem",
    paddingBottom: "1.6rem",
    ":hover": {
      opacity: 0.9,
    },
  },
  variants: {
    direction: {
      down: {
        transform: "translate(0, .8rem)",
      },
      up: {
        transform: "translate(0, -14.2rem)",
      },
    },
  },
  defaultVariants: {
    direction: "down",
  },
});

export const textStyle = style({
  ...theme.font.Caption3_M_12,
  color: theme.color.mg2,
});

export const activeStyle = style({
  backgroundColor: theme.color.mg5,
});
