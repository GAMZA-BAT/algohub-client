import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const promptWrapper = style({
  alignSelf: "flex-start",
  paddingTop: "6.2rem",
});

export const metaStyle = style({
  color: theme.color.white,
  ...theme.font.Head1_SB_20,
});

export const descStyle = style({
  color: theme.color.mg1,
  ...theme.font.Body2_R_14,
});
