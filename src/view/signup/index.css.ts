import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "4rem",

  width: "33.5rem",
  paddingTop: "7.4rem",
});

export const formContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  width: "100%",
});

export const controllerStyle = style({
  display: "flex",
  justifyContent: "center",
  marginBottom: "4rem",
});
