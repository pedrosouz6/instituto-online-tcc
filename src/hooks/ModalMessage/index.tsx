import { useContext } from "react"
import { ContextModalMessage } from "../../contexts/ModalMessage"

export function useMessageModal() {
    return useContext(ContextModalMessage);
}