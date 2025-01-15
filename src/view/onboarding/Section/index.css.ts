import { theme } from "@/styles/themes.css";
import { keyframes, style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const breakpoints = {
  lg: "1366px",
};

export const mainStyle = style({
  paddingBottom: "12rem",
});

export const onboardingStyle = style({
  overflowY: "scroll",
  scrollBehavior: "smooth",
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  scrollSnapType: "y mandatory",

  height: "calc(100vh - 7.2rem)",
});

export const sectionStyle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  scrollSnapAlign: "start",

  height: "calc(100vh - 7.2rem)",

  backgroundColor: theme.color.bg,
});

export const contentsContainer = recipe({
  base: {
    display: "grid",
    justifyContent: "center",

    height: "100%",
    padding: "0 7rem",
  },
  variants: {
    section: {
      intro: {
        gridTemplateColumns: "55rem 45rem",
        alignItems: "center",
      },
      feature1: {
        gridTemplateColumns: "47.5rem 72.5rem",
        gridTemplateRows: "25rem 65rem",
        alignItems: "start",

        "@media": {
          [`screen and (max-width: ${breakpoints.lg})`]: {
            gridTemplateColumns: "40rem 60rem",
            gridTemplateRows: "20rem auto",
          },
        },
      },
      feature2: {
        gridTemplateColumns: "47.5rem 72.5rem",
        gridTemplateRows: "30rem auto",
        gridAutoFlow: "column",
        "@media": {
          [`screen and (max-width: ${breakpoints.lg})`]: {
            gridTemplateColumns: "40rem 60rem",
            gridTemplateRows: "22.5rem auto",
          },
        },
      },
    },
  },
});

export const introContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "6.4rem",
});

export const introTextContainer = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "0.4rem",

    alignSelf: "stretch",
  },
  variants: {
    section: {
      feature2: {
        gap: "1.6rem",
      },
    },
  },
});

export const introTextStyle = recipe({
  base: {
    color: theme.color.wg,
    fontStyle: "normal",
    fontSize: "48px",
    fontWeight: "600",
    lineHeight: "67.2px",
    letterSpacing: "-0.72px",
    textWrap: "nowrap",
  },
  variants: {
    type: {
      em: {
        color: theme.color.purple2,
      },
      alphabet: {
        letterSpacing: "-0.015em",
      },
      small: {
        color: theme.color.mg2,
        fontSize: "24px",
        fontWeight: "500",
        letterSpacing: "-0.1em",
        lineHeight: "33.6px",
      },
    },
  },
});

export const introButtonContainer = style({
  display: "flex",
  gap: "1.8rem",

  width: "49.8rem",
  height: "5.3rem",
});

export const introButtonStyle = style({
  width: "24rem",
});

export const buttonTextStyle = style({
  ...theme.font.Title1_SB_16,
});

export const imageContainer = styleVariants({
  intro: {
    gridColumn: 2,
    gridRow: 2,
  },
  feature2: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    gridColumn: "1 / span 2",
    gridRow: 2,

    width: "100%",
    height: "fit-content",
  },
});

export const imageStyle = recipe({
  base: {
    objectFit: "cover",
    objectPosition: "center",
  },
  variants: {
    section: {
      intro: {
        width: "58.4rem",
        height: "54.1rem",
      },
      feature1: {
        width: "70rem",
        height: "40rem",
      },
      feature2: {
        width: "85.6rem",
        height: "48rem",
        borderRadius: "1.6rem",
      },
    },
  },
});

const fadeInKeyframes = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(2rem)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

export const fadeInStyle = style({
  animation: `${fadeInKeyframes} 1s ease-out forwards`,
});

export const arrowContainer = style({
  display: "flex",
  justifyContent: "center",

  height: "12.8rem",
});

export const arrowStyle = style({
  cursor: "pointer",
});

export const gradientStyle = style({
  position: "absolute",
  bottom: 0,

  width: "100%",
  height: "17.3rem",

  background: "linear-gradient(180deg, rgba(16, 18, 23, 0) 0%, #101217 100%)",
});
