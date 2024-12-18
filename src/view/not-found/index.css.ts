import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const pageStyle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "calc(100vh - 7.2rem)",
});

export const sectionStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  padding: "4.8rem 6rem",

  backgroundColor: theme.color.mg5,
  borderRadius: "24px",
});

export const textWrapperStyle = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1.6rem",
});

export const headingStyle = style({
  fontSize: "3rem",
  lineHeight: "4.2rem",
  letterSpacing: "-1%",
  color: theme.color.white,
});

export const textStyle = style({
  ...theme.font.Title2_M_16,
  color: theme.color.mg3,
});

export const backBtnStyle = style({
  marginTop: "5.5rem",

  ...theme.font.Title2_M_16,

  textDecoration: "underline",
  color: theme.color.purple2,
});
