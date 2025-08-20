import { theme } from '@/styles/themes.css';
import { keyframes, style, styleVariants } from '@vanilla-extract/css';

export const sidebarWrapper = style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "4.8rem",
});

export const titleWrapper = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.8rem",

    borderBottom: `1px solid ${theme.color.mg5}`,
});

export const titleStyle = style({
    ...theme.font.Caption2_SB_12,
    color: theme.color.lg2,
});

export const countWrapper = style({
    width: "2rem",
    height: "2rem",
    borderRadius: "5rem",
    backgroundColor: theme.color.mg5,
});

export const countTextStyle = style({
    ...theme.font.Caption3_M_12,
    color: theme.color.mg2,
});

export const chipContainerStyle = style({
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    gap: "0.6rem",
});

const chipBaseStyle = style({
    display: "flex",
    alignItems: "center",
    padding: "0.4rem 1.2rem",
    borderRadius: "1.7rem",
    transition: 'background-color 0.2s ease-in-out',
});

export const chipWrapperVariants = styleVariants({
    default: [chipBaseStyle, {
        backgroundColor: theme.color.mg4,
    }],
    selected: [chipBaseStyle, {
        backgroundColor: theme.color.mg5,
    }]
});

const chipTextBaseStyle = style({
    ...theme.font.Body1_M_14,
    transition: 'color 0.2s ease-in-out',
});

export const chipTextStyleVariants = styleVariants({
    default: [chipTextBaseStyle, {
        color: theme.color.mg3,
    }],
    selected: [chipTextBaseStyle, {
        color: theme.color.mg2,
    }]
});

export const studyListContainerStyle = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
    width: '100%',
    padding: '0 1.2rem',
});

export const studyListItemStyle = style({
    ...theme.font.Body1_R_14,
    color: theme.color.white,
    padding: '0.8rem',
});
