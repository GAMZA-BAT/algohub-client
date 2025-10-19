import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flexShrink: "0",

  position: "relative",

  width: "54rem",
  height: "65.6rem",
  padding: "8.4rem 2.2rem 2.6rem",

  borderRadius: "16px",
  backgroundColor: theme.color.bg,
});
