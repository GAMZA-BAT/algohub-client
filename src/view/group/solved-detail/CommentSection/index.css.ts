import { scrollTheme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const commentInputStyle = style({
  position: "relative",
  bottom: 0,
});

export const sectionWrapper = style({
  flex: 1,
  height: "40.5rem",
});

export const ulStyle = style({
  height: "100%",

  overflowY: "scroll",
  ...scrollTheme.scrollbar,
});
