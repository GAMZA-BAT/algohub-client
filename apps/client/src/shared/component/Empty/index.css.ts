import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const emptyWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "3rem",
  width: "100%",
  height: "100%",
});

export const emptyGuideStyle = style({
  color: theme.color.mg4,
  ...theme.font.Head2_SB_18,
});
