import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const createFormWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "3.6rem",

  width: "109rem",
  height: "50rem",
  padding: "2.6rem 3rem 2.3rem",

  background: theme.color.mg6,
  borderRadius: "16px",
});

export const createTitleStyle = style({
  color: theme.color.wg,
  ...theme.font.Head1_SB_20,
});

export const createFormContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
});

export const labelStyle = style({
  color: theme.color.white,
  ...theme.font.Head2_SB_18,
});

export const textAreaStyle = style({
  height: "7.4rem",
});

export const buttonWrapper = style({
  width: "9.6rem",
  marginLeft: "auto",
});
