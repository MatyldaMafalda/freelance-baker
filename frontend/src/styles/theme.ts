import { DefaultTheme } from "styled-components";

const BOX_SHADOW_COLOR = "hsla(0, 0%, 20%, 0.1)";

export const theme: DefaultTheme = {
    borderRadius: {
        panel: "1rem",
    },
    boxShadow: {
        light: "0px 0px 9px 1px " + BOX_SHADOW_COLOR,
    },
    colors: {
        white: "hsl(0, 0%, 99%)",
        black: "hsl(0, 0%, 0%)",
        purple100: "hsl(340, 33%, 49%)",
        purple200: "hsl(324, 17%, 47%)",
        purple300: "hsl(326, 35%, 22%)",
        purple400: "hsl(325, 62%, 10%)",
        background: "hsl(23, 33%, 95%)",
    },
};
