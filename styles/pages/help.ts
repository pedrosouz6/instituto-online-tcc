import styled from "styled-components";

export const ContainerButtonNewCalledHelp = styled.div `
    width: 100%;
    display: flex;
    justify-content: end;

    button {
        background-color: ${props => props.theme.colors.primary};
        color: white;
        border: none;
        border-radius: 3px;
        outline: none;
        padding: 5px 15px;
        text-transform: uppercase;
        cursor: pointer;

        transition: ${props => props.theme.animation.main};


        &:hover {
            opacity: .9;
        }
    }
`

export const ContainerHeaderTableHelp = styled.div `
    display: flex;
    justify-content: space-between;

    button {
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
        
        i {
            display: block;
            padding-top: 3px;
            font-size: 18pt;
            color: ${props => props.theme.colors.primary};
        }
    }
`

export const TableHelp = styled.table `
    width: 100%;
    border-collapse: collapse;

    thead {
        background-color: ${props => props.theme.colors.backgroundTable};
        border: 1px solid ${props => props.theme.colors.border};
    }

    td {
        padding: 5px 15px;
    }

    tbody tr {
        border-bottom: 1px solid ${props => props.theme.colors.border};
    }
`

export const ToViewTableHelp = styled.td `
    width: 100px;
    
    p {
        background-color: ${props => props.theme.colors.primary};
        color: white;
        border-radius: 5px;
        padding: 3px;
        font-size: 9pt;
        text-transform: uppercase;
        cursor: pointer;
        text-align: center;
    }
`

export const ContainerTableHelp = styled.div `
    margin-top: 2rem;
    width: 100%;
    padding: 0 15px;
    overflow: auto;

    &::-webkit-scrollbar-thumb {
        background: #777;
    }

    &::-webkit-scrollbar {
        width: 5px;
        height: 8px;
        background-color: #aaa;
    }
`

export const StatusTableHelp = styled.td `
    margin: 0 auto;

    button {
        background-color: ${props => props.theme.colors.primary};
        color: white;
        cursor: pointer;
        padding: 3px;
        border: none;
        outline: none;
        border-radius: 5px;
    }

`

export const DescriptionTableHelp = styled.td `
    width: 400px;
    span {
        display: block;
        font-size: 10pt;
    }
`