import { useState, useEffect } from "react";

import { ItemsHeader } from "./ItemsHeader";
import { ItemsThemeHeader } from "./ItemsThemeHeader";
import { useButtonNavbar } from "../../hooks/ButtonNavbar";

import { BsSunFill } from 'react-icons/bs';
import { FaUserCog } from 'react-icons/fa';

import { 
    ContainerHeader,
    UserHeader,
    UserButtonHeader,
} from "./style";
import { useUsers } from "../../hooks/Users";

export function Header() {

    const { isMiniNavbar } = useButtonNavbar(); 
    const { user } = useUsers();

    const [ isItemsHeader, setisItemsHeader ] = useState<boolean>(false);
    const [ isItemsThemeHeader, setisItemsThemeHeader ] = useState<boolean>(false);

    const [ greetingMessage, setGreetingMessage ] = useState<string | null>(null);

    useEffect(() => {
        const hours = new Date().getHours();

        if(hours > -1) {
            setGreetingMessage('Bom dia');
        } 

        if(hours > 11) {
            setGreetingMessage('Boa tarde');
        }

        if(hours > 17) {
            setGreetingMessage('Boa noite');
        }
    }, [])

    return (
        <ContainerHeader isMiniNavbar={isMiniNavbar}>
            <UserHeader>
                <UserButtonHeader>
                    <button onClick={() => setisItemsThemeHeader(!isItemsThemeHeader)}>
                        <i><BsSunFill /></i>
                    </button>

                    <button onClick={() => setisItemsHeader(!isItemsHeader)}>
                        <i><FaUserCog /></i>
                    </button>
                </UserButtonHeader>
                { isItemsHeader && <ItemsHeader /> }
                { isItemsThemeHeader && <ItemsThemeHeader /> }
            </UserHeader>
            
        </ContainerHeader>
    )
}