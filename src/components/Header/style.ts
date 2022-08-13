import styled from 'styled-components';

export const ContainerHeader = styled.header `
    width: 100%;
    height: 70px;
    padding: 0 20px;
    border-bottom: 1px solid ${props => props.theme.colors.border};

    display: flex;
    gap: 1rem;
    justify-content: end;
    align-items: center;
`

export const UserHeader = styled.div `
    display: flex;
    align-items: center;
    gap: .5rem;
`

export const ImageUserHeader = styled.div `
    width: 40px;
    height: 40px;
    border-radius: 5px;
    background: ${props => props.theme.colors.text}
`
export const InfoUserHeader = styled.div `
    p {
        font-size: 10pt;
    }
`