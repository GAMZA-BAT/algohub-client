import { theme } from "@/styles/themes.css";
import { recipe } from "@vanilla-extract/recipes";

export const inputStyle = recipe({
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

    color: theme.color.white,
    "::placeholder": {
      color: theme.color.mg4,
    },
  },

  variants: {
    size: {
      medium: {
        height: "4.4rem",
        padding: "0rem 0.8rem",
        ":focus": {
          border: `1px solid ${theme.color.purple2}`,
        },
        ...theme.font.Body1_M_14,
      },

      large: {
        height: "5.1rem",
        padding: "1rem 1.6rem",
        ...theme.font.Title2_M_16,
      },
    },

    isError: {
      true: {
        border: `1px solid ${theme.color.red}`,
      },
    },
  },
});
