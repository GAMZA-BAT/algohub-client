import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const userDashboardWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "3rem",

  padding: "4.8rem 5rem 1.4rem 4.2rem",
  width: "80%",
});

export const groupLabelStyle = style({
  paddingBottom: "2rem",
  color: theme.color.white,
  ...theme.font.Title1_SB_16,
});
