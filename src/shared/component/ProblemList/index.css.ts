import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const itemStyle = style({
  display: "grid",
  gridTemplateColumns: "0.6fr 2.7fr 2fr 2fr 2fr 2fr",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "2.4rem",

  width: "100%",

  padding: "0.8rem 1.6rem",
});

export const textStyle = style({
  textAlign: "center",
});

export const commonTextStyle = style({
  ...theme.font.Caption3_M_12,
  color: theme.color.white,

  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const titleStyle = style({
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

  width: "14px",
  height: "14px",

  border: "none",
  borderRadius: "1px",

  backgroundColor: theme.color.red,

  "::before": {
    content: "Ｘ",

    color: theme.color.white,
  },
});
