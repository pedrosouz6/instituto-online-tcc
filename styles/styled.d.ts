import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            primary: string,
            background: string,
            backgroundDesigner: string,
            text: string,
            backgroundTableTd: string,
            backgroundTable: string,
            border: string
        },
        animation: {
            main: string
        }
    }
} 