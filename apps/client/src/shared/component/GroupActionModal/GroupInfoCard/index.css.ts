import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const infoCardWrapper = style({
  position: "relative",
});

export const infoWrapper = style({
  position: "absolute",
  top: "4.403rem",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  width: "24.6rem",
});

export const groupNameStyle = style({
  padding: "2rem 0 0.2rem",
  color: theme.color.purple,
  ...theme.font.Title1_SB_16,
});

export const descStyle = style({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical", // 수직으로 박스를 나누는 방식
  WebkitLineClamp: 2, // 최대 두 줄까지만 표시

  width: "17.4rem",

  overflow: "hidden",
  textOverflow: "ellipsis",

  color: theme.color.mg3,
  ...theme.font.Caption1_R_12,
});
