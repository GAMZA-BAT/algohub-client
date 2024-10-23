import { style } from "@vanilla-extract/css";

export const formStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});

export const contentStyle = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",

  width: "34rem",

  color: "white",
});

export const formContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  width: "100%",
});

export const descriptionStyle = style({
  paddingBottom: "0.5rem",
});
