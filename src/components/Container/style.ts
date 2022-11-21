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