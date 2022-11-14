import styled from 'styled-components';

export const ContainerHeader = styled.header `
    width: calc(100%);
    height: 70px;
    padding: 0 25px;
    border-bottom: 1px solid ${props => props.theme.colors.border};

    display: flex;
    gap: 1rem;
    justify-content: end;
    align-items: center;

    position: absolute;

    @media (max-width: 1100px) {
        left: 0;
        width: 100%;
    }
`

export const UserHeader = styled.div `
    display: flex;
    align-items: center;
    gap: .3rem;
    position: relative;
`


export const UserHeaderButton = styled.button `
    background: none;
    color: ${props => props.theme.colors.text};
    border: none;
    cursor: pointer;
    padding-top: 3px;
    font-size: 12pt;
`

export const ImageUserHeader = styled.div `
    width: 30px;
    height: 30px;
    cursor: pointer;
    border-radius: 50%;
    background: ${props => props.theme.colors.text};
`

export const InfoUserHeader = styled.div `
    p {
        font-size: 10pt;
    }
`