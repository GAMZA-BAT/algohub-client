import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const backgroundStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  position: "fixed",
  top: 0,
  left: 0,

  zIndex: theme.zIndex.middle,

  width: "100%",
  height: "100%",

  backgroundColor: theme.color.transparent_black_50,
});

export const dialogStyle = style({
  zIndex: theme.zIndex.high,

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,

  margin: "auto",

  backgroundColor: "transparent",

  border: "none",

  overflow: "hidden",
});

export const dialogContentStyle = style({
  position: "relative",
});

export const exitStyle = recipe({
  base: {
    zIndex: theme.zIndex.middle,
    position: "absolute",

    borderRadius: "4px",
    cursor: "pointer",

    ":hover": {
      background: theme.color.mg4,
    },
  },
  variants: {
    variant: {
      default: {
        top: "1.6rem",
        right: "1.6rem",

        width: "2.8rem",
        height: "2.8rem",
        padding: "0.9rem",
      },
      secondary: {
        top: "3.6rem",
        right: "2.4rem",
      },
    },
  },
});
