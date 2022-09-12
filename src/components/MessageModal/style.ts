import styled from "styled-components";

interface ContainerMessageModalProps {
    isMessageModal: boolean,
    erroMessageModal: boolean | undefined
}

export const ContainerMessageModal = styled.div `
    width: 200px;
    height: auto;
    position: absolute;
    right: 20px;
    z-index: 4;

    border-radius: 3px;
    padding: 5px;
    
    background-color: ${(props: ContainerMessageModalProps) => props.erroMessageModal ? 'red' : 'green'};
    top: ${(props: ContainerMessageModalProps) => props.isMessageModal ? "20px" : "0"};
    opacity: ${(props: ContainerMessageModalProps) => props.isMessageModal ? "1" : "0"};
    visibility: ${(props: ContainerMessageModalProps) => props.isMessageModal ? "visible" : "hidden"};
    transition: ${props => props.theme.animation.main};

    span {
        display: block;
        text-align: center;
    }
`