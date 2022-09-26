import { createContext, useState, ReactNode } from "react";

export interface User {
    id: number,
    name: string,
    email: string,
    password: string,
    telephone: string,
    cpf: string,
    date: string,
    office: string,
}

interface ContextUserType {
    toggleUpdatedUsers: () => void,
    updatedUsers: boolean,
    setUser: (user: User) => void,
    user: User
}

interface ProviderUsersProps {
    children: ReactNode
}

export const ContextUsers = createContext({} as ContextUserType);

export default function ProviderUsers({ children }: ProviderUsersProps) {

    const [ updatedUsers, setUpdatedUsers ] = useState<boolean>(false);
    const [ user, setUser ] = useState<User>({} as User);

    function toggleUpdatedUsers() {
        setUpdatedUsers(!updatedUsers);
    }
    
    return (
        <ContextUsers.Provider value={{
            toggleUpdatedUsers,
            updatedUsers,
            setUser,
            user
        }}>

            { children }

        </ContextUsers.Provider>
    )
}