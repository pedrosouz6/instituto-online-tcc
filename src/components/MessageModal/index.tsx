import { useMessageModal } from "../../hooks/MessageModal";

import { ContainerMessageModal } from "./style";

export function MessageModal() {

    const { messageModal, isMessageModal, toggleIsMessageModal, erroMessageModal } = useMessageModal();

    if(isMessageModal) {
        setTimeout(() => {
            toggleIsMessageModal();
        }, 5000);
    }

    return (
        <ContainerMessageModal erroMessageModal={erroMessageModal} isMessageModal={isMessageModal}>
            <span>{messageModal}</span>
        </ContainerMessageModal>
    )
}