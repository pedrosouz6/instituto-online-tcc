import styled from 'styled-components';

interface ContainerHeaderProps {
    isMiniNavbar: boolean
}

export const ContainerHeader = styled.header `
    width: ${(props: ContainerHeaderProps) => props.isMiniNavbar ? 'calc(100% - 50px)' : 'calc(100% - 230px)'};
    height: 70px;
    padding: 0 25px;
    border-bottom: 1px solid ${props => props.theme.colors.border};

    display: flex;
    gap: 1rem;
    justify-content: end;
    align-items: center;

    position: absolute;
    right: 0;

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

    button {
        border: none;
        outline: none;

        i {
            font-size: 14pt;
            display: block;
            color: ${props => props.theme.colors.text};
        }
    }
`

export const UserButtonHeader = styled.div `
    display: flex;
    gap: .7rem;

    button {
        border: none;
        outline: none;
        background-color: ${props => props.theme.colors.background};
        cursor: pointer;
        width: 37px;
        height: 37px;
        border-radius: 50%;


        i {
            font-size: 14pt;
            display: block;
            color: ${props => props.theme.colors.text};
            padding-top: 3px;   
        }
    }
`

export const InfoUserHeader = styled.div `
    p {
        font-size: 10pt;
    }
`