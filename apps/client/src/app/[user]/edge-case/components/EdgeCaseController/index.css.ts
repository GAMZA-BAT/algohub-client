import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const edgeCaseControllerWrapper = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  margin: "2rem 4rem 0 2rem",
});

export const addEdgeCaseButtonWrapper = style({
  width: "10rem",
});

export const edgeCaseSearchInputWrapper = style({
  width: "32rem",
  height: "4rem",
});

export const edgeCaseSearchInputStyle = style({
  width: "32rem",

  border: "none",
  outline: "none",
  backgroundColor: theme.color.mg5,

  color: theme.color.white,
  ...theme.font.Caption3_M_12,

  appearance: "none",

  "::placeholder": {
    color: theme.color.mg2,
  },
});
