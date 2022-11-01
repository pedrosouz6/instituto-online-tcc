import styled from "styled-components";

interface FormModalNewCalledProps {
    wrongDescription: string | null,
    wrongTitle: string | null
}

export const ContainerModalNewCalled = styled.div `
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`

export const ModalModalNewCalled = styled.div `
    flex: 1;

    max-width: 700px;
    height: auto;
    background-color: ${props => props.theme.colors.background};
    position: relative;
    padding: 20px 20px 30px 20px;
`

export const HeaderModalNewCalled = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    h3 {
        font-weight: 500;
        font-size: 16pt;
    }

    button {
        font-size: 14pt;
        color: ${props => props.theme.colors.text};
        padding: 0 5px;
        
        background: none;
        outline: none;
        border: none;
        cursor: pointer;
    }
`

export const FormModalNewCalled = styled.form `
    width: 100%;

    label {
        display: block;
        margin: 2rem 0 .3rem 0;
    }

    p {
        font-size: 10pt;
        color: red;
    }

    input, textarea {
        border: 1px solid ${props => props.theme.colors.border};
        color: ${props => props.theme.colors.text};
        background-color: ${props => props.theme.colors.background};

        border: ${(props: FormModalNewCalledProps) => props.wrongTitle && '1px solid red' };
        
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
        border: ${(props: FormModalNewCalledProps) => props.wrongDescription && '1px solid red' };
        resize: none;
        height: 100px;
    }
`

export const FormButtonModalNewCalled = styled.button `
    padding: 6px 25px;
    border: none;
    border-radius: 25px;
    background-color: ${props => props.theme.colors.primary};
    color: white;
    margin-top: 1rem;
    cursor: pointer;
`