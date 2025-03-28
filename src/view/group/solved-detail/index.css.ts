import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const modalWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",

  width: "109.2rem",
  height: "60.7rem",
  padding: "5.7rem 5.6rem 2.5rem 7rem",

  borderRadius: "20px",
  background: theme.color.bg,
});

export const solvedListStyle = style({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

export const modalContainer = style({
  display: "flex",
  gap: "1rem",

  width: "100%",
});
