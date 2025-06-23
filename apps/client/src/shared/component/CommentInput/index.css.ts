import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  position: "relative",

  display: "flex",
  alignItems: "center",
  gap: "1.6rem",

  width: "100%",

  padding: "0.8rem 0",
});

export const inputStyle = style({
  paddingRight: "4rem",
});

export const sendIconStyle = style({
  position: "absolute",

  top: 0,
  bottom: 0,
  right: 8,

  margin: "auto 0",

  cursor: "pointer",
});
