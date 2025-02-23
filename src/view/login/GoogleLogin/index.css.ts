import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const buttonStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1.2rem",

  width: "33.5rem",
  height: "5.5rem",

  background: theme.color.white,
  borderRadius: "5px",
});

export const githubTextStyle = style({
  color: "#24292F",
  ...theme.font.Head2_SB_18,
});
