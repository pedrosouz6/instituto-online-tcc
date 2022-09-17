import { useState, createContext, ReactNode } from 'react';

interface ContextModalMessageType {
    textModalMessage: string | undefined,
    isShowModalMessage: boolean,
    TextModalMessage: (message: string | undefined) => void,
    ShowModalMessage: (isModalMessage: boolean) => void,
    ErrorModalMessage: (erro: boolean | undefined) => void,
    isErrorModalMessage: boolean | undefined
}

interface ProviderModalMessageProps {
    children: ReactNode
}

export const ContextModalMessage = createContext({} as ContextModalMessageType);

export default function ProviderModalMessage({ children }: ProviderModalMessageProps) {

    const [ textModalMessage, setTextModalMessage ] = useState<string | undefined>(undefined);
    const [ isShowModalMessage, setIsShowModalMessage ] = useState<boolean>(false);
    const [ isErrorModalMessage, setIsErrorModalMessage ] = useState<boolean | undefined>(false);

    function ErrorModalMessage(error: boolean | undefined) {
        setIsErrorModalMessage(error);
    }

    function TextModalMessage(message: string | undefined) {
        setTextModalMessage(message);
    }

    function ShowModalMessage(show: boolean) {
        setIsShowModalMessage(show);
    }

    return (
        <ContextModalMessage.Provider value={{
            textModalMessage,
            isShowModalMessage,
            isErrorModalMessage,
            TextModalMessage,
            ShowModalMessage,
            ErrorModalMessage
        }}>

            { children }

        </ContextModalMessage.Provider>
    )
}