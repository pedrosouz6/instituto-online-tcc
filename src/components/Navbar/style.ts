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

    transition: ${props => props.theme.animation.main};

    background: #555;
    color: #cbd2d6;

    @media (max-width: 1100px) {
        left: ${(props: Props) => props.isMenuResponsive ? '0' : '-230px'};
        border-right: ${(props: Props) => props.isMenuResponsive && '1px solid rgb(0, 92, 92)'};
    }
`

export const ContainerLogo = styled.div `
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
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

        button {
            i {
                color: ${(props: Props) => props.isMenuResponsive && '#cbd2d6'};
            }
        }
    }
`

export const ItemTitleNavbar = styled.li `
    padding: 0 10px;
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
                width: 100%;
                border-radius: 25px 0 0 25px;
                display: flex;
                font-size: 10pt;
                padding-top: 5px;
                gap: .5rem;
                padding-left: ${(props: MiniNavbarProps) => props.isMiniNavbar ? "15px" : "20px"};
                color: #cbd2d6;

                i {
                    font-size: 12pt;
                }
            }

            .active {
                background-color: #666;
                color: #cbd2d6;
            }
        }
    }
`

export const ContainerMiniNavbar = styled.div `
    display: flex;
    justify-content: end;
    transition: ${props => props.theme.animation.main};
    padding: 0 5px 0 2px;

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
            color: #cbd2d6;
        }
    }

    @media (max-width: 1100px) {
        display: ${(props: ContainerMiniNavbarProps) => props.isMenuResponsive && 'none'};
    }
`

export const FeitoPorNavbar = styled.p `
    position: fixed;
    bottom: 20px;
    left: 115px;
    transform: translateX(-50%);
    font-size: 10pt;

    a {
        color: white;
    }
`