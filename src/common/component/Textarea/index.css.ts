import { theme } from "@/styles/themes.css";
import { recipe } from "@vanilla-extract/recipes";

export const textareaStyle = recipe({
  base: {
    display: "flex",
    gap: "1rem",
    alignItems: "flex-start",
    justifyContent: "center",

    width: "100%",
    height: "7.4rem",
    padding: "1rem 1.6rem",
    border: "1px solid transparent",
    borderRadius: "5px",
    outline: "none",

    backgroundColor: theme.color.mg5,

    ":focus": {
      border: `1px solid ${theme.color.purple}`,
    },

    ...theme.font.Caption3_M_12,
    color: theme.color.white,
    "::placeholder": {
      color: theme.color.mg4,
    },
  },

  variants: {
    isError: {
      true: {
        border: `1px solid ${theme.color.red}`,
      },
    },
  },
});
