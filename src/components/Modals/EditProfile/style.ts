import styled from "styled-components";

export const ContainerModalEditProfile = styled.div `
    width: 100%;
    min-height: 100vh;
    max-height: auto;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`

export const ModalModalEditProfile = styled.div `
    flex: 1;

    position: relative;

    max-width: 600px;
    height: auto;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    background-color: ${props => props.theme.colors.background};
    overflow-y: auto;
    overflow-x: hidden;

`

export const ButtonCloseModalEditProfile = styled.button `
    position: absolute;
    top: -5px;
    right: -5px;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    cursor: pointer;
    opacity: .9;
    border: none;
    border-radius: 50%;
    width: 27px;
    height: 27px;
    font-size: 12pt;
`

export const LeftModalEditProfile = styled.div `
    flex: 1 1 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;

    label {
        background-color: ${props => props.theme.colors.primary};
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
        margin: 10px;
        padding: 6px 20px;
    }
`

export const RightModalEditProfile = styled.div `
    flex: 2 1 300px;
`

export const ImageLeftModalEditProfile = styled.div `
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: white;
`

export const NameLeftModalEditProfile = styled.span `
    display: block;
`

export const OfficeLeftModalEditProfile = styled.span `
    display: block;
`

export const ButtonChangePhotoLeftModalEditProfile = styled.input `
    display: none;
`

export const RightHeaderModalEditProfile = styled.div `
    width: 100%;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${props => props.theme.colors.border};
`

export const RightInfoModalEditProfile = styled.div `
    margin-top: 1rem;

    label {
        display: block;
    }

    span {
        display: block;
        margin-bottom: 1rem;
    }
`

export const RightFormModalEditProfile = styled.form `
    
`

export const RightFormContainerInputModalEditProfile = styled.div `
    display: flex;
    align-items: center;
    margin-bottom: .5rem;

    label {
        flex: 1;
    }
`

export const FormInputModalEditProfile = styled.div `
    width: 100%;
    height: 35px;
    position: relative;
    flex: 4;

    input, select {
        width: 100%;
        height: 100%;
        padding: 0 35px 0 5px;
        outline: none;
        border: none;
        color: ${props => props.theme.colors.text};
        border-bottom: 1px dashed ${props => props.theme.colors.border};
        background: none;
    }
`

export const RightFormButtonModalEditProfile = styled.button `
    padding: 7px 20px;
    margin-top: 1rem;
    border-radius: 3px;
    cursor: pointer;
    border: none;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.background};
` 