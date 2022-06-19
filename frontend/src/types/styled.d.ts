// styled.d.ts
import "styled-components";

// type definition of theme
declare module "styled-components" {
    export interface DefaultTheme {
        borderRadius: {
            panel: string;
        };
        boxShadow: {
            panel: string;
            widget: string;
        };
        colors: {
            white: string;
            black: string;
            purple: string;
            purple200: string;
            purple300: string;
            pink: string;
            background: string;
            backgroundMask: string;
            primary: string;
            primaryLight: string;
            primaryDark: string;
            primaryDarkShade: string;
            fontLight: string;
            fontDark: string;
            fontDisabled: string;
            redAlert: string;
        };
    }
}
