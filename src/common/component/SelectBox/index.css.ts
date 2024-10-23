import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const selectStyle = style({
  display: "flex",
  justifyContent: "space-between",
  position: "relative",
  gap: "1.6rem",

  padding: "0.8rem 1.6rem",
  width: "100%",

  borderRadius: "4px",
  background: theme.color.mg5,

  cursor: "pointer",
});

export const optionWrapper = recipe({
  base: {
    position: "absolute",
    zIndex: theme.zIndex.bottom,
    top: "100%",
    left: "0",

    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",

    width: "100%",
    padding: "1.6rem 1rem",

    borderRadius: "8px",
    background: theme.color.mg6,
  },
  variants: {
    isActive: {
      false: {
        display: "none",
      },
    },
    align: {
      left: {
        left: "-2rem",
      },
      right: {
        right: "-2rem",
      },
      center: {},
    },
  },
});

export const textStyle = recipe({
  base: {
    ...theme.font.Caption3_M_12,
  },
  variants: {
    isActive: {
      true: {
        color: theme.color.white,
      },
      false: {
        color: theme.color.mg2,
      },
    },
  },
});
export const optionStyle = style({
  display: "flex",
  justifyContent: "flex-start",
  padding: "0.85rem",

  borderRadius: "4px",
  cursor: "pointer",

  ":hover": {
    background: theme.color.mg5,
  },
});

export const icnStyle = style({ transform: "scaleY(-1)" });
