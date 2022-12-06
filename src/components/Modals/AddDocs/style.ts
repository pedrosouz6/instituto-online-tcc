import styled from "styled-components";

interface ModalModalAddDocs {
    isOpenModalAddDocs: boolean
}

export const ContainerModalAddDocs = styled.div `
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

export const ModalModalAddDocs = styled.div `
    flex: 1;
    max-width: 800px;
    height: auto;
    max-height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: ${props => props.theme.colors.background};
    border-radius: 5px;

    &::-webkit-scrollbar-thumb {
        background: #777;
    }

    &::-webkit-scrollbar {
        width: 7px;
        height: 8px;
        background-color: #aaa;
    }
`

export const HeaderModalAddDocs = styled.div `
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

export const FormModalAddDocs = styled.form `
    width: 100%;
    padding: 10px;

    legend {
        display: block;
        margin-left: 10px;
        padding: 0 5px;
    }

    fieldset {
        padding: 10px;
        margin-bottom: 1rem;
    }
`

export const ContainerButtonSendFormModalAddDocs = styled.div `
    display: flex;
    width: 100%;
    justify-content: end;
`

export const FormContainerInputModalAddDocs = styled.div `
    label {
        margin-bottom: 5px;
        display: block;
    }
`

export const FormInputModalAddDocs = styled.div `
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

export const FormContainerInputsModalAddDocs = styled.div `
    display: grid;
    grid-gap: 1rem 20px;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const ErrorMessageModalAddDocs = styled.p `
    text-align: center;
    margin-top: 1rem;
`
