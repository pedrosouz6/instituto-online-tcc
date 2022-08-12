import { createGlobalStyle } from "styled-components";

import { Themes } from "../themes";

const {
    white
} = Themes.light;

export default createGlobalStyle `
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Poppins;
        color: ${white};
    }
`