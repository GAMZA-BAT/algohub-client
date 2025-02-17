import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const ulStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",

  flex: 1,

  padding: "0 2rem",
  marginTop: "6rem",
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

  width: "77%",
});

export const avatarStyle = style({
  width: "4rem",
  height: "4rem",
});

export const paginationStyle = style({
  paddingTop: "1rem",
});

export const wrapperStyle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "1.4rem",

  height: "52.6rem",
});

export const noNoticeGuideTextStyle = style({
  padding: "1rem 0",

  ...theme.font.Caption3_M_12,
  color: theme.color.white,
});
