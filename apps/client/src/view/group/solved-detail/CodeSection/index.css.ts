import { scrollTheme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const sectionWrapper = style({
  flex: 1,

  width: "50rem",
  height: "45rem",
});

export const codeStyle = style({
  display: "block",
  overflowY: "scroll",

  height: "45rem",

  borderRadius: "0.8rem",

  ...scrollTheme.scrollbar,
  "::-webkit-scrollbar": {
    width: "0.35rem",
    height: "0.45rem",
  },
});

export const lineStyle = style({
  fontSize: "100%",
});
