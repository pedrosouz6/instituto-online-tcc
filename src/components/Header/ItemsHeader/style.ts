import styled from "styled-components"

export const ContainerItemsHeader = styled.div `
    width: 200px;
    background-color: ${props => props.theme.colors.backgroundTable};
    border-radius: 3px;
    position: absolute;
    top: 40px;
    right: 0;
    z-index: 3;

    i {
        display: block;

        position: absolute;
        top: -12px;
        right: 9px;
        color: ${props => props.theme.colors.backgroundTable};

        font-size: 14pt;
    }
`

export const InfoUserItemsHeader = styled.div `
    padding: 5px;
    border-bottom: 1px solid;

    span {
        font-size: 10pt;
    }
`

export const ItemsItemsHeader = styled.div `
    padding: 5px;
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 5px;

    button {
        display: block;
        border: none;
        outline: none;
        background: none;
        width: 100%;
        text-align: left;
        padding: 2px 0;
        cursor: pointer;
        color: ${props => props.theme.colors.text};
    }
`