import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const cardStyle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "2rem",

  width: "40rem",
  height: "31rem",
  padding: "0 3rem 3rem",

  borderRadius: "2.4rem",
  backgroundColor: theme.color.mg6,
});
