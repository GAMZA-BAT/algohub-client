import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const promptWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",

  alignSelf: "flex-start",
  paddingTop: "5rem",
});

export const metaStyle = style({
  color: theme.color.white,
  ...theme.font.Head1_SB_20,
});

export const textStyle = style({
  color: theme.color.mg3,
  ...theme.font.Head1_SB_20,
});

export const descStyle = style({
  color: theme.color.mg1,
  whiteSpace: "pre-wrap",
  ...theme.font.Body2_R_14,
});
