import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const memberListWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",

  width: "80%",
  padding: "4.8rem 4.2rem",
});

export const labelStyle = style({
  color: theme.color.white,
  ...theme.font.Title1_SB_16,
});

export const textStyle = style({
  color: theme.color.mg2,
  ...theme.font.Caption3_M_12,
});

export const removeBtnStyle = style({
  padding: "0.4rem",
  borderRadius: "4px",
  cursor: "pointer",
  ":hover": {
    backgroundColor: theme.color.mg5,
  },
});

export const tableStyle = style({
  width: "100%",
});

export const theadStyle = style({
  height: "4rem",
});

export const trStyle = style({
  height: "4.8rem",
  ":hover": {
    backgroundColor: "unset",
  },
});
