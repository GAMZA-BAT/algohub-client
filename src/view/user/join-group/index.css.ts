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
  padding: "7.4rem 2.2rem 2.6rem",

  borderRadius: "16px",
  backgroundColor: theme.color.bg,
});

export const btnWrapper = style({
  display: "flex",
  gap: "1.6rem",

  width: "100%",
  paddingTop: "2.4rem",
});
