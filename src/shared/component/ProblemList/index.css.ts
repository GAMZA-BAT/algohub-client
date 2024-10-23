import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
export const itemStyle = recipe({
  base: {
    position: "relative",

    display: "grid",
    gridTemplateColumns: "0.6fr 2.7fr 2fr 2fr 2fr 2fr",
    alignItems: "center",
    gap: "2.4rem",

    width: "100%",

    padding: "0.8rem 1.6rem",

    transition: "all 0.3s ease",
  },
  variants: {
    isActive: {
      true: {
        backgroundColor: "rgba(34, 39, 52, 1)",
      },
    },
  },
});

export const textStyle = style({
  textAlign: "center",
});

export const commonTextStyle = style({
  ...theme.font.Caption3_M_12,
  color: theme.color.white,

  overflow: "hidden",
  textOverflow: "ellipsis",
  textAlign: "center",
});

export const commonStyle = style([textStyle, commonTextStyle]);

export const titleStyle = style({
  textAlign: "start",

  whiteSpace: "nowrap",
});

export const iconStyle = style({
  display: "flex",
  justifyContent: "center",
});

export const wrongCheckBoxStyle = style({
  appearance: "none",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  border: "none",
  borderRadius: "1px",

  backgroundColor: theme.color.red,

  "::before": {
    content: "Ｘ",

    color: theme.color.white,
  },
});
export const checkboxStyle = style({
  width: "1.4rem",
  height: "1.4rem",

  justifySelf: "start",

  cursor: "pointer",
});
export const editIconStyle = recipe({
  base: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 20,

    margin: "auto 0",

    opacity: 0,

    cursor: "pointer",

    transition: "all 0.3s ease",
  },
  variants: {
    isActive: {
      true: {
        opacity: 1,
      },
    },
  },
});
