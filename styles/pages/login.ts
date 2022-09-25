import styled from "styled-components";

interface FormEyeLoginProps {
    isPasswordCorrect: boolean
}

export const Containerlogin = styled.main `
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 20px;
`

export const FormLogin = styled.form `
    flex: 1;
    max-width: 400px;
    height: auto;

    a {
        display: block;
        color: #333;
        text-decoration: none;
        margin-bottom: 1rem;
        font-size: 11pt;
    }

    h1 {
        text-align: center;
    }
`

export const FormContainerLogin = styled.div `
    width: 100%;
    background-color: white;
    height: 100%;
    padding: 20px;

    margin-top: 1rem;
`

export const FormContainerInputLogin = styled.div `
    margin-bottom: 1rem;

    label {
        margin-bottom: 5px;
        display: block;
    }
`

export const FormInputLogin = styled.div `
    width: 100%;
    height: 40px;
    position: relative;

    input {
        background: rgba(245, 245, 245);
        width: 100%;
        height: 100%;
        padding: 0 65px 0 35px;
        outline: none;
        border: none;
        border-radius: 3px;
    }
`

export const FormInputIconLogin = styled.div `
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 30px;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    i {
        padding-top: 3px;
        color: #333;
    }
`

export const FormButtonLogin = styled.input `
    width: 100%;
    height: 40px;
    background-color: #FBC000;
    text-transform: uppercase;
    cursor: pointer;
    border: none;
    border-radius: 3px;

    transition: ${props => props.theme.animation.main};

    &:hover {
        opacity: .9;
    }
`

export const FormEyeLogin = styled.div `
    position: absolute;
    right: ${(props: FormEyeLoginProps) => !props.isPasswordCorrect ? '30px' : '0'};
    top: 50%;

    transform: translateY(-50%);
    width: 30px;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: ${props => props.theme.animation.main};

    i {
        display: block;
        padding: 0 2px;
        padding-top: 5px;
        font-size: 13pt;
        cursor: pointer;
    }
`

export const MessageIsInputEmpty = styled.p `
    text-align: center;
    margin-bottom: 1rem;
    font-size: 11pt;
`