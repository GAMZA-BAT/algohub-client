import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const containerStyle = style({
  position: "relative",

  display: "flex",
  alignItems: "center",
  gap: "1.6rem",

  width: "100%",

  padding: "0.8rem 0",
});

export const profileStyle = style({
  width: "3.9rem",
  height: "3.9rem",

  borderRadius: "50%",

  objectFit: "cover",

  cursor: "pointer",
});

export const inputStyle = recipe({
  variants: {
    variant: {
      notice: {
        paddingRight: "4rem !important",
      },
      detail: {},
    },
  },
});

export const sendIconStyle = style({
  position: "absolute",

  top: 0,
  bottom: 0,
  right: 8,

  margin: "auto 0",

  cursor: "pointer",
});
