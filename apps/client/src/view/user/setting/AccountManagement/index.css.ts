import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",

  padding: "10rem 0 0 4.2rem",

  width: "80%",
  backgroundColor: theme.color.bg,
});

export const footerStyle = style({
  padding: "0 .4rem",

  ...theme.font.Body1_M_14,
  color: theme.color.mg2,
  textDecoration: "underline",
  cursor: "pointer",
  ":hover": {
    backgroundColor: theme.color.mg5,
  },
});

export const emailStyle = style({
  display: "flex",
  alignItems: "center",

  width: "33.5rem",
  height: "5rem",
  padding: "1rem 1.6rem",
  marginBottom: "2rem",

  background: theme.color.mg5,
  borderRadius: "5px",

  color: theme.color.mg3,
  ...theme.font.Title2_M_16,
});
