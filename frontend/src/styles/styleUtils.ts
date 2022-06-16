import { DefaultTheme } from "styled-components";

export const pxToREM = (pixels: number) => `${pixels / 16}rem`;

type Color = keyof DefaultTheme["colors"];

type ThemeColorFn = (color: Color) => (props: { theme: DefaultTheme }) => string;

export const themeColor: ThemeColorFn = (color: Color) => {
    return ({ theme }) => theme.colors[color];
};

const SCREEN_SIZE = {
    phone: "576px",
    tablet: "768px",
    laptop: "992px",
};

export const MEDIA_QUERY = {
    phone: `@media (max-width: ${SCREEN_SIZE.phone})`,
    tabletAndSmaller: `@media (max-width: ${SCREEN_SIZE.tablet})`,
    laptopAndSmaller: `@media (max-width: ${SCREEN_SIZE.laptop})`,
};
