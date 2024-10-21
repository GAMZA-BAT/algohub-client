import { theme } from "@/styles/themes.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const groupDashboardWrapper = style({
  width: "80%",
  padding: "2.4rem 10.1rem 2.4rem 4.2rem",
  borderTop: `1px solid ${theme.color.mg5}`,
});

export const textStyle = styleVariants({
  title: {
    ...theme.font.Title1_SB_16,
    color: theme.color.wg,
  },
  header: {
    ...theme.font.Body3_SB_14,
    color: theme.color.wg,
    whiteSpace: "nowrap",
  },
  head: {
    ...theme.font.Body3_SB_14,
    color: theme.color.purple2,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  bannerContent: {
    ...theme.font.Body2_R_14,
    color: theme.color.purple3,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  modalContent: {
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
