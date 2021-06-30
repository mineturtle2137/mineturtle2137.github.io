import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            main: string;
            accent: string;
            secondary: string;
            white: string;
            util: string;
            lightGrey: string;
            disabled: string;
        };
        arrow: {
            borderRadius: string;
            size: string;
            shift: string;
            marginShift: string;
        };
        cardBorderRadius: string;
        font: {
            large: string;
            default: string;
            subtitle: string;
            small: string;
        };
        popover: {
            size: string;
            minSize: string;
        };
    }
}
