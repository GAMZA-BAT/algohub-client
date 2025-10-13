import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const emptyWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "3rem",

  width: "100%",
});

export const emptyGuideStyle = style({
  ...theme.font.Body2_R_14,
  color: theme.color.mg4,
});
