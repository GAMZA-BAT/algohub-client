import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flexShrink: "0",
  gap: "1.6rem",

  position: "relative",

  width: "39.5rem",
  padding: "3.6rem 3rem 3.1rem",

  borderRadius: "16px",
  backgroundColor: theme.color.mg6,
});

export const exitStyle = style({
  position: "absolute",
  top: "3.3rem",
  right: "4.5rem",
});
