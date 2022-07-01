// styled.d.ts
import "styled-components";

// type definition of theme
declare module "styled-components" {
    export interface DefaultTheme {
        borderRadius: {
            panel: string;
        };
        boxShadow: {
            light: string;
        };
        colors: {
            white: string;
            black: string;
            purple100: string;
            purple200: string;
            purple300: string;
            purple400: string;
            background: string;
        };
    }
}
