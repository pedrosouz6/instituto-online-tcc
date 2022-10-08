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
    user: User,
    userType: string | null,
    setUserType: (userType: string | null) => void
}

interface ProviderUsersProps {
    children: ReactNode
}

export const ContextUsers = createContext({} as ContextUserType);

export default function ProviderUsers({ children }: ProviderUsersProps) {

    const [ updatedUsers, setUpdatedUsers ] = useState<boolean>(false);
    const [ user, setUser ] = useState<User>({} as User);
    const [ userType, setUserType ] = useState<string | null>(null);

    function toggleUpdatedUsers() {
        setUpdatedUsers(!updatedUsers);
    }
    
    return (
        <ContextUsers.Provider value={{
            toggleUpdatedUsers,
            updatedUsers,
            setUser,
            user,
            setUserType,
            userType
        }}>

            { children }

        </ContextUsers.Provider>
    )
}