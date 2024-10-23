import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "1.5rem",

  position: "relative",
  zIndex: 0,

  width: "100vw",
  height: "calc(100vh - 7.2rem)",
  paddingTop: "3rem",

  overflow: "hidden",

  backgroundColor: theme.color.bg,
});
