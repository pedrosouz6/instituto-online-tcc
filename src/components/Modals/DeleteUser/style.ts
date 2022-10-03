import styled from "styled-components";

export const ContainerModalDeleteUser = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px;
`

export const ModalModalDeleteUser = styled.div `
    flex: 1;
    max-width: 350px;
    height: auto;
    background-color: white;
    border-radius: 3px;
`

export const HeaderModalDeleteUser = styled.div `
    width: 100%;
    height: 40px;
    padding: 0 10px;
    line-height: 40px;
    border-bottom: 1px solid silver;
    
    h3 {
        color: #333;
    }
`

export const MainModalDeleteUser = styled.div `
    padding: 10px;

    span {
        color: #333;
    }
`

export const FooterModalDeleteUser = styled.div `
    padding: 10px;
    display: flex;
    gap: .5rem;
    justify-content: end;

    button {
        padding: 4px 8px;
        border-radius: 3px;
        cursor: pointer;

        &:hover {
            opacity: .9;
        }
    }
`

export const ButtonCancelModalDeleteUser = styled.button `
    background-color: teal;
    color: white;
    border: 1px solid teal;
`

export const ButtonDeleteModalDeleteUser = styled.button `
    border: 1px solid teal;
    color: teal;
    background: none;
`