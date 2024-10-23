import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const iconWrapper = style({
  zIndex: theme.zIndex.high,
  position: "absolute",
  right: "0",
  bottom: 0,

  width: "2.5rem",
  height: "2.5rem",
});

export const iconStyle = style({
  position: "absolute",
  bottom: 0,
  right: 0,

  width: "2.5rem",
  height: "2.5rem",

  borderRadius: "50%",
  opacity: 0.9,

  cursor: "pointer",
});

export const inputStyle = style({
  display: "none",
});
