import styled from "styled-components";

interface Props {
    isResponsive: boolean
    isMiniNavbar: boolean
}

interface MiniNavbarProps {
    isMiniNavbar: boolean
}

export const ContainerNavbar = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;

    width: ${(props: Props) => props.isMiniNavbar ? "50px" : "230px"};
    height: 100vh;
    padding: 10px;

    background: ${props => props.theme.colors.background};
    border-right: 1px solid ${props => props.theme.colors.border};
    transition: ${props => props.theme.animation.main};

    @media (max-width: 1100px) {
        left: ${(props: Props) => props.isResponsive ? '0' : '-231px'};
    }
`

export const ContainerLogo = styled.div `
    height: 70px;
`

export const MenuNavbar = styled.div `
    margin: 20px;
    position: absolute;
    z-index: 3;

    transition: ${props => props.theme.animation.main};

    display: ${(props: Props) => props.isMiniNavbar ? 'none' : 'inline-block'};

    opacity: 0;
    visibility: hidden;

    button {
        background: none;
        outline: none;
        border: none;
        padding: 4px 3px 0 3px;
        cursor: pointer;
        
        i {
            display: block;
            font-size: 15pt;
            color: ${props => props.theme.colors.text};
        }
    }

    @media (max-width: 1100px) {
        visibility: visible;
        opacity: 1;
        left: ${(props: Props) => props.isResponsive ? '170px' : '0'};
    }
`

export const ItemsNavbar = styled.nav `
    margin-bottom: 1rem;
    
    ul {
        li {
            list-style: none;
            margin-bottom: .4rem;
            transition: ${props => props.theme.animation.main};
            color: ${props => props.theme.colors.text};
            letter-spacing: .3px;

            span {
                display: ${(props: MiniNavbarProps) => props.isMiniNavbar ? "none" : "inline-block"};
            }
            
            a {
                text-decoration: none;
                transition: ${props => props.theme.animation.main};
                color: ${props => props.theme.colors.text};
                display: flex;
                font-size: 10pt;
                gap: .5rem;
                padding-left: ${(props: MiniNavbarProps) => props.isMiniNavbar ? "5px" : "15px"};

                i {
                    font-size: 12pt;
                }
            }

            .active {
                color: ${props => props.theme.colors.primary};
            }
        }
    }
`

export const ContainerMiniNavbar = styled.div `
    display: flex;
    justify-content: end;

    button {
        border: none;
        outline: none;
        background: none;
        padding: 0 5px;
        cursor: pointer;

        i {
            display: block;
            font-size: 13pt;
            padding-top: 3px;
        }
    }
`