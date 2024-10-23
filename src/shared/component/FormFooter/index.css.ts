import { theme } from "@/styles/themes.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const labelContainer = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.4rem",
});

export const labelStyle = styleVariants({
  guide: {
    ...theme.font.Body2_R_14,
    textAlign: "left",
    color: theme.color.mg2,
    letterSpacing: "-1.5px",
    borderBottom: `1px solid ${theme.color.mg2}`,
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
