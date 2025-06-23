import { scrollTheme, theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const selectStyle = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",

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
    top: "calc(100% + 0.8rem)",
    left: "0",
    right: "0",

    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",

    width: "100%",
    maxHeight: "40rem",
    overflowY: "scroll",
    ...scrollTheme.scrollbar,

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
    whiteSpace: "nowrap",
    ...theme.font.Caption3_M_12,
    textOverflow: "ellipsis",
    overflow: "hidden",
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

export const icnStyle = recipe({
  base: { flexShrink: 0 },
  variants: {
    clicked: {
      false: {
        transform: "scaleY(-1)",
      },
    },
  },
});
