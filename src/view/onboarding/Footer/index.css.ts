import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const footerStyle = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",

  scrollSnapAlign: "end",

  height: "10rem",
  padding: "0 15rem",
  borderTop: `1px solid ${theme.color.mg5}`,

  backgroundColor: theme.color.bg,
});

export const buttonContainer = style({
  display: "flex",
  gap: "1.6rem",
});

export const iconContainer = style({
  display: "flex",
  gap: "0.8rem",
});

export const logoStyle = style({
  width: "11.1rem",
  height: "2.8rem",
});

export const iconStyle = style({
  width: "3.6rem",
  height: "3.6rem",
  cursor: "pointer",
});

export const textStyle = style({
  ...theme.font.Body1_M_14,
  color: theme.color.mg4,
});
