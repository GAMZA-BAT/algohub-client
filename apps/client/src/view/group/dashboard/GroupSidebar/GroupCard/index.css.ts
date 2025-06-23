import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  padding: "2.4rem",
  marginBottom: "0.6rem",
  width: "100%",

  borderRadius: "8px",
  background: theme.color.mg5,
});

export const nameStyle = style({
  paddingTop: "2rem",
  color: theme.color.purple,
  ...theme.font.Title1_SB_16,
});

export const dateStyle = style({
  display: "flex",
  alignItems: "center",
  gap: "0.4rem",
});

export const dateTextStyle = style({
  color: theme.color.mg1,
  ...theme.font.Caption1_R_12,
});

export const descStyle = style({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  textOverflow: "ellipsis",
  overflow: "hidden",

  maxWidth: "17.4rem",
  paddingTop: "0.8rem",

  color: theme.color.mg3,
  ...theme.font.Caption1_R_12,
});

export const chipWrapper = style({
  display: "flex",
  alignItems: "center",
  alignSelf: "flex-start",
  justifyContent: "center",
  gap: "0.4rem",

  marginTop: "2rem",
  padding: "0.4rem 0.8rem",

  borderRadius: "24px",
  backgroundColor: theme.color.white,

  // TODO: 타이포그래피 시스템 추가
  fontSize: "10px",
  fontWeight: "500",
  lineHeight: "normal",
  letterSpacing: "-0.25px",
});

export const calandarIconStyle = style({
  color: theme.color.mg1,
});
