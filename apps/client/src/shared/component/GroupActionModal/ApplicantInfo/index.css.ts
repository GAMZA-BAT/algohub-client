import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const applicantInfoWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1.6rem",
  marginBottom: "2.4rem",
});

export const nameStyle = style({
  ...theme.font.Title1_SB_16,
  color: theme.color.white,
});
