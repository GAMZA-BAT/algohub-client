import { fadeIn, fadeOut, moveUp } from "@/styles/animation.css";
import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const containerStyle = style({
  position: "fixed",
  bottom: "60px",
  left: 0,

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",

  width: "100vw",

  zIndex: theme.zIndex.top,
});

export const toastStyle = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "6px",

    maxWidth: "400px",

    padding: "16.5px 66px 16.5px 46px",

    backgroundColor: theme.color.mg4,

    borderRadius: "8px",
    border: "none",
  },
  variants: {
    animation: {
      show: {
        animation: `${fadeIn} .3s ease-in, ${moveUp} .2s ease-out`,
      },
      hide: {
        animation: `${fadeOut} .2s ease-in forwards`,
      },
    },
  },
});

export const textStyle = style({
  ...theme.font.Title1_SB_16,
  color: theme.color.white,
});
