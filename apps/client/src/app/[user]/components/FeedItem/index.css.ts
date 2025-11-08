import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const feedItemContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "2.4rem",

  padding: "2rem",
});

export const infoWrapper = style({
  display: "flex",
  gap: "1.2rem",

  width: "100%",
});

export const infoTextWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
});

export const descriptionStyle = style({
  ...theme.font.Body1_M_14,
  color: theme.color.mg2,
});

export const nameStyle = style({
  ...theme.font.Body1_M_14,
  color: theme.color.white,
});

export const studyNameStyle = style({
  marginRight: "0.6rem",

  ...theme.font.Caption1_R_12,
  color: theme.color.purple,
});

export const agoMinuteStyle = style({
  ...theme.font.Caption1_R_12,
  color: theme.color.mg2,
});

export const commentListStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "2.4rem",
});

export const commentItemStyle = style({
  display: "flex",
  gap: "1.2rem",

  paddingLeft: "2rem",
});

export const commentWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.6rem",
});

export const commentNameStyle = style({
  ...theme.font.Body1_M_14,
  color: theme.color.white,
});

export const commentStyle = style({
  marginBottom: "0.25rem",

  ...theme.font.Caption1_R_12,
  color: theme.color.mg1,
});


