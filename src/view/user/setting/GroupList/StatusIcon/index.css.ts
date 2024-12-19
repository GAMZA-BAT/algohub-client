import { theme } from "@/styles/themes.css";
import { recipe } from "@vanilla-extract/recipes";

export const statusChipStyle = recipe({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    padding: "0.2rem 0.5rem",
    width: "fit-content",
    height: "21px",

    borderRadius: "4px",

    ...theme.font.Caption3_M_12,
  },
  variants: {
    status: {
      bookmarked: {
        backgroundColor: theme.color.yellow,
      },
      inProgress: {
        backgroundColor: theme.color.purple,
      },
      queued: {
        backgroundColor: theme.color.mint,
      },
      done: {
        backgroundColor: theme.color.mg4,
      },
    },
  },
});
