import { useState, createContext, ReactNode } from 'react';

interface ContextMessageModalType {
    messageModal: string | undefined,
    isMessageModal: boolean,
    toggleMessageModal: (message: string | undefined) => void,
    toggleIsMessageModal: () => void,
    toggleErroMessageModal: (erro: boolean | undefined) => void,
    erroMessageModal: boolean | undefined
}

interface ProviderMessageModalProps {
    children: ReactNode
}

export const ContextMessageModal = createContext({} as ContextMessageModalType);

export default function ProviderMessageModal({ children }: ProviderMessageModalProps) {

    const [ messageModal, setMessageModal ] = useState<string | undefined>(undefined);
    const [ isMessageModal, setIsMessageModal ] = useState<boolean>(false);
    const [ erroMessageModal, setErroMessageModal ] = useState<boolean | undefined>(false);

    function toggleErroMessageModal(erro: boolean | undefined) {
        setErroMessageModal(erro);
    }

    function toggleMessageModal(message: string | undefined) {
        setMessageModal(message);
    }

    function toggleIsMessageModal() {
        setIsMessageModal(!isMessageModal)
    }

    return (
        <ContextMessageModal.Provider value={{
            messageModal,
            isMessageModal,
            toggleMessageModal,
            toggleIsMessageModal,
            toggleErroMessageModal,
            erroMessageModal
        }}>

            { children }

        </ContextMessageModal.Provider>
    )
}