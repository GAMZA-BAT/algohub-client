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

export const emptyWrapper = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "100%",
  height: "19.2rem",
});

export const userHomeWrapper = style({
  width: "60%",
  padding: "2rem",
});

export const leftSidebarStyle = style({
  display: "flex",
  justifyContent: "center",
  padding: "4rem 0.4rem 4rem 2.4rem",
});
