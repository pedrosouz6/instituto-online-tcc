import styled from "styled-components";

interface Props {
    isMenuResponsive: boolean
    isMiniNavbar: boolean
}

interface MiniNavbarProps {
    isMiniNavbar: boolean
}

interface ContainerMiniNavbarProps {
    isMenuResponsive: boolean
}

export const ContainerNavbar = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: ${(props: Props) => props.isMiniNavbar ? "50px" : "230px"};
    height: 100vh;
    padding: 10px;

    transition: ${props => props.theme.animation.main};

    background: ${props => props.theme.colors.background};
    border-right: 1px solid ${props => props.theme.colors.border};

    @media (max-width: 1100px) {
        left: ${(props: Props) => props.isMenuResponsive ? '0' : '-231px'};
    }
`

export const ContainerLogo = styled.div `
    height: 70px;
`

export const MenuNavbar = styled.div `
    margin: 20px;
    position: absolute;
    z-index: 2;

    opacity: 0;
    visibility: hidden;
    transition: ${props => props.theme.animation.main};

    button {
        background: none;
        outline: none;
        border: none;
        padding: 4px 3px 0 3px;
        cursor: pointer;
        
        i {
            color: ${props => props.theme.colors.text};
            display: block;
            font-size: 15pt;
        }
    }

    @media (max-width: 1100px) {
        visibility: visible;
        opacity: 1;
        left: ${(props: Props) => props.isMenuResponsive ? '170px' : '0'};
    }
`

export const ItemsNavbar = styled.nav `
    margin-bottom: 1rem;

    ul {
        li {
            list-style: none;
            margin-bottom: .4rem;
            letter-spacing: .3px;

            span {
                display: ${(props: MiniNavbarProps) => props.isMiniNavbar ? "none" : "inline-block"};
            }
            
            a {
                text-decoration: none;
                display: flex;
                font-size: 10pt;
                gap: .5rem;
                padding-left: ${(props: MiniNavbarProps) => props.isMiniNavbar ? "5px" : "15px"};
                color: ${props => props.theme.colors.text};

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
    transition: ${props => props.theme.animation.main};

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
            color: ${props => props.theme.colors.text};
        }
    }

    @media (max-width: 1100px) {
        display: ${(props: ContainerMiniNavbarProps) => props.isMenuResponsive && 'none'};
    }
`