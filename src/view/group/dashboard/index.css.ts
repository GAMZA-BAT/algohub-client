import { theme } from "@/styles/themes.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const groupDashboardWrapper = style({
  width: "80%",
  padding: "2.4rem 10.1rem 2.4rem 4.2rem",
  borderTop: `1px solid ${theme.color.mg5}`,
});

export const overlayStyle = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "transparent",
  border: "none",
});

export const textStyle = styleVariants({
  head: {
    ...theme.font.Title1_SB_16,
    color: theme.color.wg,
  },
  notification: {
    ...theme.font.Body3_SB_14,
    color: theme.color.wg,
    whiteSpace: "nowrap",
  },
  category: {
    ...theme.font.Body3_SB_14,
    color: theme.color.purple2,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  bannerTitle: {
    ...theme.font.Body2_R_14,
    color: theme.color.purple3,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  modalTitle: {
    ...theme.font.Body2_R_14,
    color: theme.color.lg2,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  time: {
    ...theme.font.Caption1_R_12,
    color: theme.color.mg4,
    whiteSpace: "nowrap",
  },
  author: {
    ...theme.font.Caption1_R_12,
    color: theme.color.mg1,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});
