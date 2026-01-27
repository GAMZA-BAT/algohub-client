import { theme } from "@/styles/themes.css";
import { recipe } from "@vanilla-extract/recipes";

export const inputWrapper = recipe({
  base: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    border: "1px solid transparent",
    borderRadius: "5px",
    outline: "none",

    backgroundColor: theme.color.mg5,

    ":hover": {
      border: `1px solid ${theme.color.transparent_purple2_50}`,
    },
    ":focus": {
      border: `1px solid ${theme.color.purple}`,
    },
  },

  variants: {
    size: {
      small: {
        height: "4rem",
        padding: "0.8rem 1.6rem",
      },
      medium: {
        height: "4.4rem",
        padding: "0rem 0.8rem",
        ":focus": {
          border: `1px solid ${theme.color.purple2}`,
        },
      },

      large: {
        height: "5.1rem",
        padding: "1rem 1.6rem",
      },
    },

    isError: {
      true: {
        border: `1px solid ${theme.color.red}`,
      },
    },
    disabled: {
      true: {
        border: "1px solid transparent",
        pointerEvents: "none",
      },
    },
  },
});

export const inputStyle = recipe({
  base: {
    width: "100%",

    backgroundColor: "transparent",
    border: "none",
    outline: "none",

    color: theme.color.white,
    "::placeholder": {
      color: theme.color.mg4,
    },
  },

  variants: {
    size: {
      small: {
        ...theme.font.Caption3_M_12,
      },
      medium: {
        ...theme.font.Body1_M_14,
      },
      large: {
        ...theme.font.Title2_M_16,
      },
    },
  },
});
