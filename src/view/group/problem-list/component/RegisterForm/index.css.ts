import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const registerWrapper = style({
  display: "flex",
  flexDirection: "column",

  padding: "6rem 3rem 4.6rem",
  width: "39.5rem",

  background: theme.color.mg6,
  color: theme.color.white,
  borderRadius: "16px",
});

export const titleStyle = style({
  paddingBottom: "2.4rem",
  color: theme.color.wg,
  ...theme.font.Head1_SB_20,
});

export const formStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
  paddingBottom: "4.1rem",
});

export const labelStyle = style({
  paddingBottom: "0.8rem",
  ...theme.font.Head2_SB_18,
});

export const grayTextStyle = style({
  color: theme.color.mg3,
  ...theme.font.Title2_M_16,
});

export const dateFormWrapper = style({
  display: "flex",
  gap: "2.6rem",
});