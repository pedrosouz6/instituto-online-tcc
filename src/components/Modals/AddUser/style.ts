import styled from "styled-components";

interface ModalModalAddUser {
    isOpenModalAddUser: boolean
}

export const ContainerModalAddUser = styled.div `
    width: 100%;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;
    
    z-index: 3;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`

export const ModalModalAddUser = styled.div `
    flex: 1;
    max-width: 800px;
    height: auto;
    max-height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: ${props => props.theme.colors.background};
    border-radius: 5px;
`

export const HeaderModalAddUser = styled.div `
    width: 100%;
    height: 50px;
    padding: 0 20px;

    border-bottom: 1px solid ${props => props.theme.colors.border};

    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        width: 26px;
        height: 26px;
        
        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 25px;
        border: none;
        outline: none;
        cursor: pointer;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, .2);

        i {
            display: block;
            font-weight: 600;
            padding-top: 4px;
        }
    }
`

export const FormModalAddUser = styled.form `
    width: 100%;
    padding: 20px;
`

export const ContainerButtonSendFormModalAddUser = styled.div `
    display: flex;
    width: 100%;
    justify-content: end;
`

export const FormContainerInputModalAddUser = styled.div `
    label {
        margin-bottom: 5px;
        display: block;
    }
`

export const FormInputModalAddUser = styled.div `
    width: 100%;
    height: 40px;
    position: relative;

    input, select {
        width: 100%;
        height: 100%;
        padding: 0 35px 0 5px;
        outline: none;
        border: none;
        border-radius: 3px;
    }
`

export const FormContainerInputsModalAddUser = styled.div `
    display: grid;
    grid-gap: 1rem 20px;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const ErrorMessageModalAddUser = styled.p `
    text-align: center;
    margin-top: 1rem;
`
