import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const foldableTextBoxWrapper = style({
  position: "relative",

  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  padding: "2rem",
  width: "100%",
  minHeight: "5.2rem",

  background: theme.color.black,
  border: `1px solid ${theme.color.mg5}`,
  borderRadius: "10px",
});

export const textCopyButtonStyle = style({
  position: "absolute",
  top: "1.4rem",
  right: "1.4rem",
});

export const foldableTextStyle = style({
  fontSize: "12px",
  lineHeight: "16px",
  whiteSpace: "pre-line",

  color: theme.color.yellow,
});

export const foldButtonStyle = style({
  display: "flex",
  alignItems: "center",
  gap: "0.4rem",

  padding: "0.2rem 0.6rem",
  margin: "0 auto",

  color: theme.color.mg2,
  ...theme.font.Caption1_R_12,

  borderRadius: "4px",
  background: theme.color.mg5,
});
