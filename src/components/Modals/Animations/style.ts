import styled from "styled-components";

interface AnimationModalProps {
    isAnimation: boolean
}

export const AnimationModal = styled.div `
    width: 100%;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;
    
    z-index: 3;

    visibility: hidden;
    transition: ${props => props.theme.animation.main};
    visibility: ${(props: AnimationModalProps) => props.isAnimation && "visible"};

    opacity: 0;
    opacity: ${(props: AnimationModalProps) => props.isAnimation && "1"};
    transform: translateY(${(props: AnimationModalProps) => props.isAnimation ? "0%" : "-200px"});
`

export const ContainerAnimationModal = styled.div `
    width: 100%;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 3;

    opacity: 0;
    opacity: ${(props: AnimationModalProps) => props.isAnimation && "1"};
    visibility: hidden;
    transition: ${props => props.theme.animation.main};
    visibility: ${(props: AnimationModalProps) => props.isAnimation && "visible"};
    background-color: rgba(0, 0, 0, .4);
`