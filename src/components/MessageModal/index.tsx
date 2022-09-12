import { useMessageModal } from "../../hooks/MessageModal";

import { ContainerMessageModal } from "./style";

export function MessageModal() {

    const { messageModal, isMessageModal, setIsMessageModal, erroMessageModal } = useMessageModal();

    if(isMessageModal) {
        setTimeout(() => {
            setIsMessageModal(false);
        }, 5000);
    }

    return (
        <ContainerMessageModal erroMessageModal={erroMessageModal} isMessageModal={isMessageModal}>
            <span>{messageModal}</span>
        </ContainerMessageModal>
    )
}