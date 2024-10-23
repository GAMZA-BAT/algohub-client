import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const ulStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",

  height: "43.5rem",
  padding: "6rem 2rem 0",
});

export const liStyle = style({
  position: "relative",
  ":hover": {
    backgroundColor: theme.color.mg5,
  },
});

export const itemStyle = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  height: "4rem",
  borderRadius: "0.4rem",
});

export const contentWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  maxWidth: "62.5%",
});

export const contentStyle = style([
  contentWrapper,
  {
    maxWidth: "100%",
  },
]);

export const noticeInfoStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "4rem",
});

export const infoWrapper = style({
  display: "flex",
  gap: "3rem",

  width: "76.5%",
});

export const avatarStyle = style({
  width: "4rem",
  height: "4rem",
});

export const buttonStyle = style({
  float: "right",
  transform: "translate(-2rem, 0)",
  width: "8.4rem",
  height: "4rem",

  ...theme.font.Body3_SB_14,
  color: theme.color.lg2,
});

export const paginationStyle = style({
  paddingTop: "1rem",
});
