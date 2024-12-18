import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const noticeModalWrapper = style({
  display: "flex",
  flexDirection: "column",
  position: "relative",

  width: "100rem",
  height: "66rem",
  padding: "3.6rem 2.4rem",

  backgroundColor: theme.color.bg,
  borderRadius: "2rem",
});

export const noticeHeaderStyle = style({
  display: "flex",
  justifyContent: "space-between",
});

export const buttonStyle = style({
  position: "absolute",
  right: "4.3rem",
  bottom: "6.7rem",

  width: "8.4rem",
  height: "4rem",

  ...theme.font.Body3_SB_14,
  color: theme.color.lg2,
});
