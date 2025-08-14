import { colorToRgba } from "@/common/util/string";
import { theme } from "@/styles/themes.css";
import { style, recipe } from "@vanilla-extract/css";

export const cardStyle = style({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "1rem",

    width: "772px",
    height: "64px",
    padding: "2rem",

    border: `1px solid ${theme.color.mg5}`,
    borderRadius: "1rem",
});

export const descriptionWrapper = style({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "1.2rem",

    padding: 0,
    margin: "0 auto",
});

export const studyNameStyle = style({
    color: theme.color.white,
    ...theme.font.Body3_SB_14,
});

export const studyDescriptionStyle = style({
    color: theme.color.mg2,
    ...theme.font.Body1_M_14,
});

export const tagWrapper = recipe({
    base: {
        display: "flex",
        alignItems: "center",
        gap: "1rem",

        padding: "2px 5px",
        borderRadius: "4px",
    },
    variants: {
        color: {
            blue: {
                backgroundColor: colorToRgba("#3b73fa", 0.1),
            },
            mint: {
                backgroundColor: colorToRgba("#35bcb3", 0.1),
            },
            yellow: {
                backgroundColor: colorToRgba("#d2f35c", 0.1),
            }
        }
    }
});

export const tagStyle = recipe({
    base: {
        ...theme.font.Caption3_M_12,
    },
    variants: {
        color: {
            blue: {
                color: theme.color.blue,
            },
            mint: {
                color: theme.color.mint,
            },
            yellow: {
                color: theme.color.yellow,
            },
        },
    },
    defaultVariants: {
        color: "blue",
    },
});