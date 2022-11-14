import styled from "styled-components"

export const ContainerItemsThemeHeader = styled.div `
    width: 150px;
    background-color: ${props => props.theme.colors.backgroundTable};
    border-radius: 3px;
    position: absolute;
    top: 40px;
    right: 48px;
    z-index: 3;
`

export const ButtonIndicatorHeader = styled.i `
    display: block;
    position: absolute;
    top: -12px;
    font-size: 14pt;
    right: 9px;
    color: ${props => props.theme.colors.backgroundTable};
`

export const ItemsItemsThemeHeader = styled.div `
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 5px;
    padding: 3px 0;

    button {
        display: flex;
        align-items: center;
        gap: .5rem;
        border: none;
        outline: none;
        background: none;
        width: 100%;
        text-align: left;
        padding: 0 5px;
        cursor: pointer;
        color: ${props => props.theme.colors.text};

        &:hover {
            background-color: ${props => props.theme.colors.background};
        }

        i {
            display: block;
            padding-top: 5px;
        }
    }
`