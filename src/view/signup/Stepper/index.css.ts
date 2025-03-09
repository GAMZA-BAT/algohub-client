import { theme } from "@/styles/themes.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const stepperWrapper = style({
  display: "flex",
});

export const stepperSectionStyle = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  gap: "1.6rem",
});

export const stepperTextStyle = styleVariants({
  title: theme.font.Caption3_M_12,
  desc: {
    marginTop: "-1rem",

    fontSize: "8px",
    fontWeight: "500",
    lineHeight: "11.2px",
    letterSpacing: "-0.2px",
  },
});

export const stepperTextColor = styleVariants({
  active: {
    color: theme.color.mg2,
  },
  inactive: {
    color: theme.color.mg4,
  },
});

export const stepperLine = style({
  width: "8.85rem",
  height: "1.4px",
  marginTop: "1rem",

  backgroundColor: theme.color.mg4,
});
