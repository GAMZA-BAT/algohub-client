import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const wrapperStyle = style({
  width: "39.5rem",
  height: "30.4rem",
});

export const titleTextStyle = style({
  ...theme.font.Head1_SB_20,
  color: theme.color.wg,
});
