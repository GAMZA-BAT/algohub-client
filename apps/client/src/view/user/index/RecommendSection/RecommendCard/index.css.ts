import { colorToRgba } from "@/common/util/string";
import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const cardStyle = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1rem",

  width: "100%",
  height: "64px",
  padding: "2rem",
  marginBottom: "2.6rem",

  border: `1px solid ${theme.color.mg5}`,
  borderRadius: "1rem",

  transition: "box-shadow 0.2s, border-color 0.2s",
  cursor: "pointer",
  selectors: {
    "&:hover": {
      boxShadow: "0 4px 16px 0 rgba(0,0,0,0.08)",
      borderColor: theme.color.mg3,
    },
  },
});

export const iconStyle = style({
  width: "24px",
  height: "24px",
});

export const descriptionWrapper = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "1.2rem",
});

export const studyNameStyle = style({
  color: theme.color.white,
  ...theme.font.Body3_SB_14,
  whiteSpace: "nowrap",
});

export const studyDescriptionStyle = style({
  color: theme.color.mg2,
  ...theme.font.Body1_M_14,
  whiteSpace: "nowrap",
});

export const tagWrapper = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",

    padding: "2px 5px",
    borderRadius: "4px",
  },
  variants: {
    color: {
      blue: {
        backgroundColor: colorToRgba("#3b73fa", 0.1),
      },
      mint: {
        backgroundColor: colorToRgba("#35bcb3", 0.1),
      },
      yellow: {
        backgroundColor: colorToRgba("#d2f35c", 0.1),
      },
    },
  },
});

export const tagStyle = recipe({
  base: {
    ...theme.font.Caption3_M_12,
  },
  variants: {
    color: {
      blue: {
        color: theme.color.blue,
      },
      mint: {
        color: theme.color.mint,
      },
      yellow: {
        color: theme.color.yellow,
      },
    },
  },
  defaultVariants: {
    color: "blue",
  },
});
