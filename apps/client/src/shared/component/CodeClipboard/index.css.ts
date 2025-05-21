import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const wrapperStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",

  width: "100%",
});

export const labelStyle = style({
  ...theme.font.Caption2_SB_12,
  color: theme.color.white,
});

export const codeStyle = style({
  ...theme.font.Body1_M_14,
  color: theme.color.mg4,

  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
});

export const iconStyle = style({
  width: 24,
  height: 24,

  position: "absolute",
  right: 16,

  cursor: "pointer",
});

export const boxStyle = style({
  position: "relative",

  display: "flex",
  alignItems: "center",

  width: "100%",

  padding: "1.3rem 0.8rem",
  paddingRight: "6rem",

  borderRadius: "5px",
  backgroundColor: theme.color.mg5,
});
