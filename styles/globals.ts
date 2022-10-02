import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Poppins;
    }
    
    body {
        transition: ${props => props.theme.animation.main};
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
    }
`