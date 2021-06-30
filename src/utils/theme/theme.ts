import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
    arrow: {
        borderRadius: '50%',
        size: '30px',
        shift: '12px',
        marginShift: '2px',
    },
    colors: {
        white: '#fff',
        util: '#495057',
        lightGrey: '#adb5bd',
        disabled: '#e9ecef',
        main: '#34435E',
        accent: '#648DE5',
        secondary: '#304C89',
    },
    font: {
        default: '1rem',
        large: '1.82rem',
        subtitle: '1.1rem',
        small: '0.92rem',
    },
    popover: {
        size: '32vmin',
        minSize: '32vmin',
    },
    cardBorderRadius: '22px',
};

export { theme };
