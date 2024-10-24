import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const pageStyle = style({
  padding: "4.8rem 4.1rem",
  width: "80%",
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
