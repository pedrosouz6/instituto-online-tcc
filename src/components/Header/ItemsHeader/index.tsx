import { useRouter } from "next/router";

import { useUsers } from "../../../hooks/Users";
import { IoMdArrowDropup } from 'react-icons/io';

import { 
    ContainerItemsHeader, 
    InfoUserItemsHeader, 
    ItemsItemsHeader 
} from "./style";
import { destroyCookie } from "nookies";
import { useState } from "react";

export function ItemsHeader() {

    const router = useRouter();

    const [ isGoingOut, setIsGoingOut ] = useState<boolean>(false);

    const { user } = useUsers();

    function SignOut() {
        setIsGoingOut(true);
        destroyCookie(null, 'token_user');
        
        setTimeout(() => {
            setIsGoingOut(false);
            router.push('/');
        }, 400)
    }

    return (
        <ContainerItemsHeader>
            <InfoUserItemsHeader>
                <span>Logado com { user.email }</span>
            </InfoUserItemsHeader>
            <ItemsItemsHeader>
                <button>Editar perfil</button>
                <button onClick={() => SignOut()}>{ isGoingOut ? 'Saindo...' : 'Sair' }</button>
            </ItemsItemsHeader>
            <i><IoMdArrowDropup /></i>
        </ContainerItemsHeader>
    )
}