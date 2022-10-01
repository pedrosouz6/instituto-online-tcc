import styled from "styled-components";

export const ContainerLoading = styled.div `
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: inline-block;
    border-top: 3px solid ${props => props.theme.colors.text};
    border-right: 3px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    } 
`