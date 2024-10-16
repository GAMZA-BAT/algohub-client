import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  position: "relative",
  display: "flex",
  paddingTop: "10rem",
  paddingLeft: "4.2rem",

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
