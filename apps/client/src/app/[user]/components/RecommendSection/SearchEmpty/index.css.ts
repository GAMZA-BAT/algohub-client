import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const emptyWrapper = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  width: "100%",
});

export const emptyGuideStyle = style({
  position: "absolute",
  top: "70%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  ...theme.font.Body2_R_14,
  color: theme.color.mg4,

  zIndex: 1,
});
