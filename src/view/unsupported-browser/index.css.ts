import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const pageStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "2.1rem",

  width: "100%",

  padding: "12.6rem",
});

export const mainSectionStyle = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  padding: "4.8rem",

  borderRadius: "24px",
  backgroundColor: theme.color.purple2,
});

export const textSectionStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
});

export const subSectionStyle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  width: "100%",
  minHeight: "19.3rem",

  padding: "3.2rem 4.8rem",

  backgroundColor: theme.color.mg5,
  borderRadius: "24px",
});

export const bottomContainerStyle = style({
  display: "flex",
  width: "100%",
  gap: "2.1rem",
});

export const h1Style = style({
  fontSize: "3rem",
  lineHeight: "4.2rem",
  fontWeight: 700,
  color: theme.color.white,
});

export const mainTextStyle = style({
  ...theme.font.Title2_M_16,
  color: theme.color.lg2,
});

export const inquireBtnStyle = style({
  marginTop: "2.7rem",
});

export const h2Style = style({
  ...theme.font.Head1_M_20,
  color: theme.color.white,
});

export const browserItemStyle = style({
  ...theme.font.Body1_M_14,
  color: theme.color.mg1,
});

export const iconWrapperStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "4.2rem",
  height: "4.2rem",

  borderRadius: "7px",
  backgroundColor: theme.color.wg,

  cursor: "pointer",
});

export const updateSectionBottomStyle = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
});

export const updateTextStyle = style({
  display: "flex",
  alignItems: "center",
  gap: "0.4rem",

  ...theme.font.Body1_M_14,
  color: theme.color.mg1,
});
