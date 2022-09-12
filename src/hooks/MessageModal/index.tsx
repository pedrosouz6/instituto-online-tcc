import { useContext } from "react"
import { ContextMessageModal } from "../../contexts/MessageModal"

export function useMessageModal() {
    return useContext(ContextMessageModal);
}