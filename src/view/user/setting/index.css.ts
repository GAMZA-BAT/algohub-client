import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const headingStyle = style({
  position: "absolute",
  top: "4.8rem",
  left: "4.2rem",

  ...theme.font.Title1_SB_16,
  color: theme.color.white,
});
