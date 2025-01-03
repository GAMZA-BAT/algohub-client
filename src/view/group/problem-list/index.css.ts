import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const contentWrapper = style({
  display: "flex",
  flexDirection: "column",

  width: "80%",
  padding: "4.8rem 4.2rem",
});

export const pageStyle = style({
  position: "relative",

  width: "80%",

  padding: "4.8rem 4.1rem",
});

export const sidebarBtnWrapperStyle = style({
  padding: "4.8rem 1.5rem",
});

export const titleStyle = style({
  ...theme.font.Title1_SB_16,
  color: theme.color.white,

  paddingBottom: "1.6rem",
});

export const firstPanelStyle = style({
  padding: "4.8rem 4.1rem",
});

export const unSolvedFilterTextStyle = style({
  ...theme.font.Caption3_M_12,
  color: theme.color.mg2,
});

export const checkBoxStyle = style({
  position: "absolute",
  right: 70,

  display: "flex",
  alignItems: "center",
  gap: "4px",
});
