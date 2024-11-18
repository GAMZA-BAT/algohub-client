import IcnRankingCard from "@/asset/svg/icn_ranking_card.svg?url";
import IcnRankingCardHover from "@/asset/svg/icn_ranking_card_hover.svg?url";
import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const topRankingWrapper = style({
  display: "flex",
  gap: "2rem",
  paddingTop: "2.4rem",
});

export const rankingCardWrapper = style({
  position: "relative",
  backgroundImage: `url(${IcnRankingCard.src})`,
  width: "146px",
  height: "197px",
  ":hover": {
    backgroundImage: `url(${IcnRankingCardHover.src})`,
  },
});

export const rankingCardStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",

  position: "absolute",
  top: "0",

  width: "14.6rem",
  padding: "1.6rem",
});

export const avatarStyle = style({
  alignSelf: "center",
});

export const infoStyle = style({
  display: "flex",
  alignItems: "center",
  paddingTop: "1.5rem",
  gap: "0.4rem",
});

export const infoTextStyle = recipe({
  base: {
    ...theme.font.Caption1_R_12,
  },
  variants: {
    highlight: {
      true: {
        color: theme.color.purple2,
      },
      false: {
        color: theme.color.wg,
      },
    },
  },
});

export const nicknameStyle = style({
  color: theme.color.purple2,
  ...theme.font.Title1_SB_16,
});

export const allRankingWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",

  padding: "2.4rem 0 1.6rem",
});

export const listWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: "1.6rem",

  width: "100%",

  ":hover": {
    backgroundColor: theme.color.mg5,
  },
});

export const listContainer = style({
  display: "flex",
  justifyContent: "space-between",

  width: "100%",
});

export const rankWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
});

export const infoWrapper = style({
  display: "flex",
  gap: "0.5rem",
});

export const rankTextStyle = style({
  color: theme.color.purple,
  ...theme.font.Caption3_M_12,
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const allNicknameStyle = style({
  color: theme.color.white,
  ...theme.font.Caption2_SB_12,
});

export const solvedTextStyle = style({
  color: theme.color.purple2,
  ...theme.font.Body3_SB_14,
});

export const changeStyle = recipe({
  base: {
    ...theme.font.Caption1_R_12,
  },
  variants: {
    change: {
      up: {
        color: theme.color.red,
      },
      down: {
        color: theme.color.blue,
      },
      unChanged: {
        color: theme.color.mg4,
      },
    },
  },
});

export const emptyRankingWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "3rem",

  width: "100%",
  padding: "5.3rem 0 5.2rem",
});

export const emptyGuideStyle = style({
  color: theme.color.mg4,
  ...theme.font.Head2_SB_18,
});
