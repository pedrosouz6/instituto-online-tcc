import styled from "styled-components";


export const ContainerErrorIndicator = styled.div `
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    z-index: 4;
    
    i {
        padding-top: 5px;
        display: block;
        color: red;
    }

    span {
        width: 130px;
        display: block;
        
        position: absolute;
        top: 27px;
        right: -4px;
        
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.background};
        box-shadow: 1px 1px 5px rgba(255, 255, 255, .2);
        
        text-align: center;
        padding: 5px;
        border-radius: 5px;
        font-size: 10pt;

        opacity: 0;
        visibility: hidden;
        transition: ${props => props.theme.animation.main};

        i {
            padding: 0 0 0 0;
            display: block;
            font-size: 18pt;
            position: absolute;
            top: -15px;
            right: 0;
            color: teal;
        }
    }

    &:hover span {
        opacity: 1;
        visibility: visible;
    }
`