import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const wrapperStyle = style({
  position: "relative",
  display: "flex",

  width: "80%",
  height: "62.4rem",
  paddingTop: "9rem",
});

export const backPanelStyle = style({
  position: "absolute",
  zIndex: 1,
  top: "rem",
  left: "4vw",
  display: "block",

  width: "90%",
  height: "11rem",

  background: theme.color.bg,
});
