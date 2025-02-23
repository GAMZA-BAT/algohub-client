import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const headingStyle = style({
  color: theme.color.white,
  fontSize: "3rem",
  fontWeight: "700",
  lineHeight: "4.2rem",
  letterSpacing: "-0.35rem",
  textAlign: "center",
});

export const containerStyle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "2rem",

  position: "relative",
  zIndex: 0,

  width: "100vw",
  height: "calc(100vh - 7.2rem)",
  paddingTop: "8.6vh",

  overflow: "hidden",

  backgroundColor: theme.color.bg,
  "::before": {
    content: "",
    position: "fixed",
    zIndex: -1,
    top: "-50vh",

    width: "110vw",
    height: "110vh",
    background:
      "radial-gradient(87.98% 87.98% at 50% 3.15%, rgba(163, 156, 255, 0.5) 0%, rgba(16, 18, 23, 0) 100%)",

    pointerEvents: "none",
  },
});

export const wrapper = style({
  position: "fixed",
  top: 0,
});

export const cardStyle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "2.1rem",

  padding: "3rem",

  background: theme.color.mg6,
  borderRadius: "24px",
});

export const dividerWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.3rem",
});

export const dividerTextStyle = style({
  color: theme.color.mg2,
  ...theme.font.Body2_R_14,
});

export const divider = style({
  width: "13.05rem",
  height: "0.1rem",
  margin: "2rem 0",

  background: theme.color.mg4,
});
