import { theme } from "@/styles/themes.css";
import { recipe } from "@vanilla-extract/recipes";

export const chipStyle = recipe({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "fit-content",
    padding: "0.2rem 0.5rem",

    borderRadius: "4px",

    color: theme.color.white,
    ...theme.font.Caption3_M_12,

    cursor: "pointer",
  },
  variants: {
    role: {
      OWNER: {
        background: theme.color.purple,
      },
      ADMIN: {
        background: theme.color.mint,
      },
      PARTICIPANT: {
        background: theme.color.mg4,
      },
    },
  },
});
