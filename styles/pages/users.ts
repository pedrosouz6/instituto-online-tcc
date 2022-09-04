import styled from "styled-components";

export const ContainerUsers = styled.section `
    max-width: 950px;
    margin: 2rem auto;

    border: 1px solid black;
    border-radius: 2px;

`

export const HeaderUsers = styled.div `
    max-width: 950px;
    height: 50px;
    background: ${props => props.theme.colors.primary};

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    overflow-x: hidden;

    h3 {
        color: #f5f5f5;
    }
`

export const HeaderButtonsUsers = styled.div `
    display: flex;
    gap: 1rem;

    button {
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

        i {
            display: block;
            padding-top: 3px;
            font-size: 11pt;
        }
    }
`

export const ContainerFilterSearchUsers = styled.div `
    padding: 10px 20px;

    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
`

export const FilterUsers = styled.div `
    display: flex;
    gap: 6px;

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

    input {
        width: 180px;
        border: 1px solid ${props => props.theme.colors.border};
        outline: none;
        padding: 5px;
        border-radius: 3px;
    }
`

export const ContainerTableUsers = styled.div `
    width: 100%;
    padding: 0 20px;
    overflow: auto;
`

export const TableUsers = styled.table `
    width: 100%;
    border-collapse: collapse;

    thead {
        td {
            text-align: center;
            padding: 8px 3px;
        }
    }

    tbody {
        td {
            padding: 5px;
        }

        button {
            border: none;
            outline: none;
            cursor: pointer;
            padding: 4px 7px 1px 7px;
            border-radius: 3px;

            transition: ${props => props.theme.animation.main};

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
    display: flex;
    gap: .2rem;
`

export const ButtonDeleteUsers = styled.button `
    background-color: red;
`

export const ButtonEditUsers = styled.button `
    background-color: green;
`

export const ButtonLockUsers = styled.button `
    background-color: blue;
`