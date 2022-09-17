import styled from "styled-components";

interface ContainerMessageModalProps {
    isMessageModal: boolean,
    erroMessageModal: boolean | undefined
}

export const ContainerMessageModal = styled.div `
    width: 200px;
    height: auto;
    position: fixed;
    top: 20px;
    z-index: 4;

    border-radius: 3px;
    padding: 10px;
    color: white;
    font-size: 11pt;
    background-color: ${(props: ContainerMessageModalProps) => props.erroMessageModal ? 'rgb(215, 0, 0)' : 'rgb(50,205,50)'};
    right: ${(props: ContainerMessageModalProps) => props.isMessageModal ? "50px" : "0"};
    opacity: ${(props: ContainerMessageModalProps) => props.isMessageModal ? "1" : "0"};
    visibility: ${(props: ContainerMessageModalProps) => props.isMessageModal ? "visible" : "hidden"};
    transition: ${props => props.theme.animation.main};

    span {
        display: block;
        text-align: center;
    }
`