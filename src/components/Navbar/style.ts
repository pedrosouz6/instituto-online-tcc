import styled from "styled-components";

export const ContainerNavbar = styled.div `
    width: 230px;
    min-height: 100vh;
    max-height: auto;
    background: linear-gradient(0deg, teal 60%, rgba(0, 128, 128, .3));
    padding: 10px;
    color: white;
`

export const MenuNavbar = styled.div `
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;

    h4 {
        font-weight: 400;
    }

    button {
        background: none;
        outline: none;
        border: none;
        padding: 4px 3px 0 3px;
        cursor: pointer;
        
        i {
            display: block;
            color: white;
            font-size: 13pt;
        }
    }
`

export const ItemsNavbar = styled.nav `
    margin-bottom: 1rem;
    
    ul {
        li {
            margin-bottom: .3rem;
            
            a {
                display: flex;
                gap: .5rem;
                padding-left: 15px;
            }
        }
    }
`