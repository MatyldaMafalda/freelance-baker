import { DefaultTheme } from "styled-components";

const BOX_SHADOW_COLOR = "hsla(0, 0%, 20%, 0.1)";
const WIDGET_BOX_SHADOW_COLOR = "hsla(0, 0%, 20%, 0.1)";

export const theme: DefaultTheme = {
    borderRadius: {
        panel: "1rem",
    },
    boxShadow: {
        panel: "0 0 32px " + BOX_SHADOW_COLOR,
        widget: "0px 0px 9px 1px " + WIDGET_BOX_SHADOW_COLOR,
    },
    colors: {
        white: "hsl(0, 0%, 99%)",
        black: "hsl(0, 0%, 0%)",
        purple: "hsl(324, 17%, 47%)",
        purple200: "hsl(326, 35%, 22%)",
        purple300: "hsl(325, 62%, 10%)",
        pink: "hsl(324, 17%, 47%)",
        background: "hsl(23, 33%, 95%)",
        backgroundMask: "hsla(0, 0%, 0%, 0.5)",
        primary: "hsl(26, 31%, 52%)",
        primaryLight: "hsl(27, 31%, 81%)",
        primaryDark: "hsl(30, 31%, 5%)",
        primaryDarkShade: "hsl(30, 5%, 31%)",
        fontLight: "hsl(23, 33%, 95%)",
        fontDark: "hsl(30, 31%, 5%)",
        fontDisabled: "hsl(30, 5%, 66%)",
        redAlert: "hsla(0, 91%, 38%, 1)",
    },
};
