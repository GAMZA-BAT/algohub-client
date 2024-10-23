import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const userCardWrapper = style({
  width: "100%",
  padding: "4.4rem 2.4rem",
});

export const userCardContainer = style({
  display: "flex",
  flexDirection: "column",

  width: "100%",
  padding: "4.45rem 2.4rem",

  borderRadius: "8px",
  backgroundColor: theme.color.mg5,
});

export const avatarStyle = style({
  alignSelf: "center",
});

export const nicknameStyle = style({
  paddingTop: "2rem",

  color: theme.color.purple,
  ...theme.font.Head1_SB_20,
});

export const bojNickStyle = style({
  paddingTop: "0.2rem",

  color: theme.color.lg2,
  ...theme.font.Caption3_M_12,
});

export const descStyle = style({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  textOverflow: "ellipsis",
  overflow: "hidden",

  paddingTop: "0.8rem",

  color: theme.color.mg3,
  ...theme.font.Caption1_R_12,
});
