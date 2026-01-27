import { style } from "@vanilla-extract/css";

export const sidebarWrapper = style({
  display: "flex",
  alignItems: "stretch",

  minHeight: "calc(100vh - 14.4rem)",
});

export const fullWidthStyle = style({
  width: "100%",
});

export const topBottomMarginStyle = style({
  margin: "1.6rem 0",
});

export const notFoundPaddingStyle = style({
  padding: "13.7rem 12.5rem",
});

export const solvedSectionStyle = style({
  width: "80%",
  marginTop: "4.8rem",
});

export const alignCenterStyle = style({
  margin: "0 auto",
});
