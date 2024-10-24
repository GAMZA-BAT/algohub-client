import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const noticeModalWrapper = style({
  display: "flex",
  flexDirection: "column",

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
