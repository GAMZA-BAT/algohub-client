import { style } from "@vanilla-extract/css";

export const leaveCommentWrapper = style({
  display: "flex",
  alignItems: "center",

  padding: "0.8rem 2rem",
});

export const enterSvgStyle = style({
  marginRight: "0.4rem",
});

export const commentFormStyle = style({ width: "100%", marginLeft: "1.2rem" });
