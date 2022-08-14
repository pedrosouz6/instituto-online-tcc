import styled from "styled-components";

export const ComponentButton = styled.button `
    padding: 8px 35px;
    background-color: ${props => props.theme.colors.primary};
    color: white;
    
    border-radius: 25px;
    margin-top: 1rem;

    cursor: pointer;
    border: none;
    outline: none;

    transition: ${props => props.theme.animation.main};

    &:hover {
        opacity: .9;
    }
`