import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const submitBtnStyle = style({
  marginTop: "0.8rem",
});

export const plusIconStyle = style({
  ["& path" as string]: {
    stroke: theme.color.white,
  },
});
