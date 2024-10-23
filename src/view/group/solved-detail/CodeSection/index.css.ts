import { scrollTheme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const sectionWrapper = style({
  flex: 1,
  height: "45rem",
  width: "50rem",
});

export const codeStyle = style({
  display: "block",
  overflowY: "scroll",
  height: "45rem",

  ...scrollTheme.scrollbar,
  "::-webkit-scrollbar": {
    width: "0.35rem",
    height: "0.45rem",
  },
});

export const lineStyle = style({
  fontSize: "100%",
});
