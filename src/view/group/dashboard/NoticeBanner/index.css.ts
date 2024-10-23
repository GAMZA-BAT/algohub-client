import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const bannerWrapper = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: "1.6rem",

  width: "100%",
  padding: "1rem 0.8rem",
  marginBottom: "2.4rem",

  backgroundColor: theme.color.mg6,
  borderRadius: "1rem",
  cursor: "pointer",
  ":hover": {
    backgroundColor: theme.color.mg5,
  },
});

export const headerWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",

  maxWidth: "30%",
});

export const notifyWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: "0.2rem",
});

export const contentWrapper = style([
  headerWrapper,
  {
    maxWidth: "65%",
  },
]);

export const avatarStyle = style({
  width: "2rem",
  height: "2rem",
});
