import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  width: "100%",
  marginTop: "1.6rem",
  padding: "1.3rem 1.6rem 1.3rem 0.8rem",

  borderRadius: "5px",
  backgroundColor: theme.color.mg5,
});

export const linkStyle = style({
  color: theme.color.mg4,
  ...theme.font.Body1_M_14,
});

export const icnCopyStyle = style({
  cursor: "pointer",
});
