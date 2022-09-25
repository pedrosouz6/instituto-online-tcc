import { useMessageModal } from "../../hooks/ModalMessage";

import { ContainerMessageModal } from "./style";

export function ModalMessage() {

    const { textModalMessage, isShowModalMessage, ShowModalMessage, isErrorModalMessage } = useMessageModal();

    if(isShowModalMessage) {
        setTimeout(() => {
            ShowModalMessage(false);
        }, 5000);
    }

    return (
        <ContainerMessageModal erroMessageModal={isErrorModalMessage} isMessageModal={isShowModalMessage}>
            <span>{ textModalMessage }</span>
            <button onClick={() => ShowModalMessage(false)}>x</button>
        </ContainerMessageModal>
    )
}