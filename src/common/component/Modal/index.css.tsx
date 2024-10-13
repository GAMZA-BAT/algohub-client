import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

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

  margin: "auto auto",

  backgroundColor: "transparent",

  border: "none",

  overflow: "hidden",
});

export const dialogContentStyle = style({
  position: "relative",
});

export const exitStyle = style({
  zIndex: theme.zIndex.middle,
  position: "absolute",
  top: "1.6rem",
  right: "1.6rem",

  padding: "0.9rem",

  borderRadius: "4px",
  cursor: "pointer",

  ":hover": {
    background: theme.color.mg4,
  },
});
