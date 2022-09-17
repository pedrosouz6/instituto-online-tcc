import { createContext, useState, useEffect, ReactNode } from "react";
import { axios } from "../../axios";

interface ContextUserType {
    toggleUpdatedUsers: () => void,
    updatedUsers: boolean
}

interface ProviderUsersProps {
    children: ReactNode
}

export const ContextUsers = createContext({} as ContextUserType);

export default function ProviderUsers({ children }: ProviderUsersProps) {

    const [ updatedUsers, setUpdatedUsers ] = useState<boolean>(false);

    function toggleUpdatedUsers() {
        setUpdatedUsers(!updatedUsers);
    }
    
    return (
        <ContextUsers.Provider value={{
            toggleUpdatedUsers,
            updatedUsers
        }}>

            { children }

        </ContextUsers.Provider>
    )
}