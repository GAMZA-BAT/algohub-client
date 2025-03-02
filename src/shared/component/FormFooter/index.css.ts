import { theme } from "@/styles/themes.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const labelContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "6rem",

  width: "100%",
});

export const labelStyle = styleVariants({
  guide: {
    ...theme.font.Body2_R_14,
    textAlign: "left",
    color: theme.color.mg2,
    letterSpacing: "-1.5px",
  },
  link: {
    ...theme.font.Body1_M_14,
    color: theme.color.purple,
    padding: "0 .4rem",
    ":hover": {
      backgroundColor: theme.color.mg5,
      borderRadius: ".4rem",
    },
  },
});

export const githubButtonStyle = style({
  width: "100%",

  ...theme.font.Head2_SB_18,
});
