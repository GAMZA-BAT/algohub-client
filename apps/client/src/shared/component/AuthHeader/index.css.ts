import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const headerStyle = recipe({
  base: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    width: "100vw",
    height: "7.2rem",
    padding: "0 3.2rem 0 6.4rem",

    backgroundColor: theme.color.bg,
    borderBottom: `1px solid ${theme.color.mg5}`,
  },
  variants: {
    showLogo: {
      false: {
        flexDirection: "row-reverse",
      },
    },
  },
});

export const iconStyle = style({
  position: "fixed",
  right: "2.5rem",
  top: "2.2rem",

  cursor: "pointer",
  ":hover": {
    backgroundColor: theme.color.mg4,
    borderRadius: ".4rem",
  },
});
