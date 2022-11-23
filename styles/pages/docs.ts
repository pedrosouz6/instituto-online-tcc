import styled from "styled-components";

export const ContainerUsers = styled.section `
    max-width: 1200px;
    margin: 2rem auto;

    box-shadow: 1px 1px 5px rgba(0, 0, 0, .2);
    padding-bottom: 15px;
    border-radius: 2px;
`

export const HeaderUsers = styled.div `
    height: 50px;
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    overflow-x: hidden;

    h3 {
        font-size: 17pt;
    }
`

export const HeaderButtonsUsers = styled.div `
    display: flex;
    gap: 1rem;

    button {
        background: ${props => props.theme.colors.primary};
        height: 30px;
        width: 80px;
        padding: 2px 7px;
        
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;

        border-radius: 5px;
        border: none;
        cursor: pointer;
        color: white;

        i {
            color: white;
            display: block;
            padding-top: 3px;
            font-size: 11pt;
        }
    }
`

export const ContainerFilterSearchUsers = styled.div `
    padding: 20px 15px;

    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
`

export const FilterUsers = styled.div `
    display: flex;
    gap: 6px;

    label {
        font-size: 10pt;
    }

    select {
        width: 50px;
        border: none;
        outline: none;
    }

`

export const SearchUsers = styled.div `
    display: flex;
    align-items: center;
    gap: .5rem;

    label {
        font-size: 10pt;
    }

    input {
        width: 170px;
        border: 1px solid rgba(0, 0, 0, .2);
        outline: none;
        padding: 4px 5px;
    }
`

export const ContainerTableUsers = styled.div `
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

export const TableUsers = styled.table `
    width: 100%;
    border-collapse: collapse;

    thead {
        td {
            text-align: center;
            padding: 10px 3px;
            background-color: ${props => props.theme.colors.backgroundTable};
            font-weight: 500;
            border-left: 1px solid ${props => props.theme.colors.backgroundTable};
        }
    }
    
    td {
        font-size: 10pt;
    }

    tbody {
        tr:nth-child(odd) {
            background-color: ${props => props.theme.colors.backgroundTableTd};
        }

        tr:nth-child(even) {
            background-color: ${props => props.theme.colors.background};
        }
        
        td {
            padding: 8px 5px;
            text-align: center;
        }

        button {
            border: none;
            outline: none;
            cursor: pointer;
            padding: 4px 7px 1px 7px;
            border-radius: 3px;

            &:hover {
                opacity: .9;
            }

            i {
                color: white;
            }
        }
    }

`  

export const ButtonActions = styled.td `
`

export const ButtonDeleteUsers = styled.button `
    background-color: red;
    margin: 2px;
`

export const ButtonEditUsers = styled.button `
    background-color: green;
    margin: 2px;
`

export const ContainerPaginationUsers = styled.div `
    padding: 0 15px;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
    margin-top: 10px;

`

export const InfoPaginationUsers = styled.div `
    span {
        font-size: 10pt;
    }
`

export const PaginationUsers = styled.div `
    display: flex;

    button {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
`

export const PaginationButtonActiveUsers = styled.button `
    background-color: royalblue;
    border: none;
`

export const PaginationButtonArrowUsers = styled.button `
    border: 1px solid rgba(0, 0, 0, .2);
    background: none;
`