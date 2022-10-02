import styled from "styled-components";

export const ContainerSendEmail = styled.section `
    max-width: 600px;
    margin: 0 auto;

    padding: 25px 0;
` 

export const FormSendEmail = styled.form `
    width: 100%;

    label {
        display: block;
        margin: 2rem 0 .3rem 0;
    }

    input, textarea {
        border: 1px solid ${props => props.theme.colors.border};
        background-color: ${props => props.theme.colors.background};
        
        width: 100%;
        padding: 5px;
        border-radius: 3px;

        outline: none;

        :hover, :focus {
            box-shadow: 0 0 5px rgba(0, 0, 0, .1);
        }
    }

    input {
        height: 40px;
    }

    textarea {
        resize: none;
        height: 100px;
    }
`

export const FormButtonSendEmail = styled.div `
    width: 100%;
    display: flex;
    justify-content: end;
`