import styled from "styled-components";

export const ContainerDocs = styled.div `
    
`

export const HeaderDocs = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
`   

export const HeaderProjectDocs = styled.div `

`

export const HeaderButtonAddDocs = styled.div `
    button {
        border: none;
        outline: none;
        background: ${props => props.theme.colors.primary};
        color: white;
        padding: 7px 25px;
        border-radius: 5px;
        text-transform: uppercase;
        cursor: pointer;
        transition: .3s ease-in-out;

        &:hover {
            opacity: .8;
        }
    }
` 

export const ContainerTableDocs = styled.div `
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

export const TableDocs = styled.table `
    width: 100%;
    border-collapse: collapse;

    thead {
        background-color: ${props => props.theme.colors.backgroundTable};
        border: 1px solid ${props => props.theme.colors.border};
    }

    td {
        padding: 5px 15px;
        font-size: 10pt;

        button {
        border: none;
        outline: none;
        background: ${props => props.theme.colors.primary};
        color: white;
        font-size: 8pt;

        padding: 5px 30px;
        border-radius: 5px;
        text-transform: uppercase;
        cursor: pointer;
        transition: .3s ease-in-out;

        &:hover {
            opacity: .8;
        }
    }
    }

    tbody tr {
        border-bottom: 1px solid ${props => props.theme.colors.border};
    }
`