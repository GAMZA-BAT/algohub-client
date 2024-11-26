import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const containerStyle = recipe({
  base: {
    position: "relative",

    display: "flex",
    alignItems: "flex-start",
    gap: "0.8rem",

    width: "100%",

    padding: "1.6rem 0.4rem",

    border: "none",
    borderRadius: "8px",

    transition: "all 0.3s ease",
  },
  variants: {
    isActive: {
      true: {
        backgroundColor: "rgba(34, 39, 52, 1)",
      },
      false: {
        backgroundColor: "rgba(0, 0, 0, 0)",
      },
    },
  },
});

export const writerStyle = style({
  ...theme.font.Caption2_SB_12,
  color: theme.color.white,
});

export const contentStyle = style({
  ...theme.font.Caption1_R_12,
  color: theme.color.white,

  whiteSpace: "pre-line",
});

export const contentWrapperStyle = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  variants: {
    variant: {
      notice: {
        gap: "0.8rem",
      },
      detail: {
        gap: "1.6rem",
      },
    },
  },
});

export const topContentStyle = style({
  display: "flex",
  alignItems: "center",
  gap: "2rem",
});

export const createAtStyle = style({
  ...theme.font.Caption1_R_12,
  color: theme.color.mg3,
});

export const iconContainerStyle = style({
  position: "absolute",

  display: "flex",

  top: 5,
  right: 5,
});

export const iconStyle = recipe({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "3.2rem",
    height: "3.2rem",

    borderRadius: "4px",

    cursor: "pointer",

    opacity: 0,

    transition: "all 0.3s ease",
  },
  variants: {
    variant: {
      edit: {
        backgroundColor: theme.color.mg3,
      },
      close: {
        backgroundColor: theme.color.mg4,
      },
    },
    isActive: {
      true: {
        opacity: 1,
      },
    },
  },
});

export const editInputWrapperStyle = style({
  position: "relative",

  display: "flex",
  gap: "0.4rem",

  width: "100%",
});

export const editSumbitButtonStyle = style({
  position: "absolute",
  top: 5,
  right: 5,
});
