import { parseCookies, setCookie } from 'nookies';
import { useState, useEffect, ReactNode, createContext } from 'react';


interface ProviderButtonNavbarProps {
    children: ReactNode
}

interface ContextButtonNavbarType {
    isMiniNavbar: boolean;
    savePreferenceUser: () => void,
    setIsMiniNavbar: (isMiniNavbar: boolean) => void
}

export const ContextButtonNavbar = createContext({} as ContextButtonNavbarType);

export default function ProviderButtonNavbar({ children }: ProviderButtonNavbarProps) {

    const [ isMiniNavbar, setIsMiniNavbar ] = useState<boolean>(false);
    const [ toggleMiniNavbar, setToggleMiniNavbar ] = useState<boolean>(false);

    useEffect(() => {
        const { ["preference_user"]: preference } = parseCookies(null);

        if(preference) {
            setIsMiniNavbar(preference === '1' ? true : false);
        }

    }, [toggleMiniNavbar])

    function savePreferenceUser() {
        setToggleMiniNavbar(!toggleMiniNavbar);
        setCookie(null, 'preference_user', !isMiniNavbar ? '1' : '2');
    }

    return (
        <ContextButtonNavbar.Provider value={{
            isMiniNavbar,
            savePreferenceUser,
            setIsMiniNavbar
        }}>
            { children }
        </ContextButtonNavbar.Provider>
    )
} 