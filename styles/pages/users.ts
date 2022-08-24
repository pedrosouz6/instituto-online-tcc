import styled from "styled-components";

import { shade } from 'polished';

export const ContainerUsers = styled.section `
    max-width: 950px;
    margin: 2rem auto;

    border: 1px solid black;

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
`

export const HeaderButtonsUsers = styled.div `
    
`

export const ContainerFilterSearchUsers = styled.div `

`

export const FilterUsers = styled.div `

`

export const SearchUsers = styled.div `

`

export const ContainerTableUsers = styled.div `
    width: 100%;
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