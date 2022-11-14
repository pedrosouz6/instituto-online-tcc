import styled from "styled-components";

interface ContainerCenterProps {
    isMiniNavbar: boolean
}

export const ContainerCenter = styled.div `
    width: calc(100% - ${(props: ContainerCenterProps) => props.isMiniNavbar ? "50px" : "230px"});
    
    position: absolute;
    left: ${(props: ContainerCenterProps) => props.isMiniNavbar ? "50px" : "230px"};
    transition: ${props => props.theme.animation.main};
    top: 70px;
    padding: 0 25px;

    @media (max-width: 1100px) {
        left: 0;
        width: 100%;
    }
`

export const DesignerContainer = styled.div `
    position: fixed;
    top: 0;
    left: ${(props: ContainerCenterProps) => props.isMiniNavbar ? "50px" : "230px"};
    width: calc(100% - ${(props: ContainerCenterProps) => props.isMiniNavbar ? "50px" : "230px"});
    height: 65vh;
    background-color: ${props => props.theme.colors.backgroundDesigner};
    clip-path: polygon(0 0, 100% 0, 100% 70%, 0% 100%);
    z-index: -1;

    @media (max-width: 1100px) {
        left: 0;
        width: 100%;
    }
`