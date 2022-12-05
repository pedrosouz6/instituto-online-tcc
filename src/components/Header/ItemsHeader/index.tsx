import { useRouter } from "next/router";

import { destroyCookie } from "nookies";
import { useState } from "react";

import { IoMdArrowDropup } from 'react-icons/io';

import { useUsers } from "../../../hooks/Users";

import { ModalEditProfile } from "../../Modals/EditProfile";
import { AnimationModal, ContainerAnimationModal } from "../../Modals/Animations/style";

import { 
    ContainerItemsHeader, 
    InfoUserItemsHeader, 
    ItemsItemsHeader 
} from "./style";

export function ItemsHeader() {

    const router = useRouter();

    const [ isGoingOut, setIsGoingOut ] = useState<boolean>(false);

    const [ isShowModalEditProfile, setIsShowModalEditProfile ] = useState<boolean>(false);

    const { user } = useUsers();

    function SignOut() {
        setIsGoingOut(true);
        destroyCookie(null, 'token_user');
        
        setTimeout(() => {
            setIsGoingOut(false);
            router.push('/');
        }, 400)
    }

    function closeModalEditProfile() {
        setIsShowModalEditProfile(false);
    }

    return (
        <ContainerItemsHeader>

            <ContainerAnimationModal isAnimation={isShowModalEditProfile}>
                <AnimationModal isAnimation={isShowModalEditProfile}>
                    { isShowModalEditProfile && <ModalEditProfile closeModalEditProfile={closeModalEditProfile}></ModalEditProfile> }
                </AnimationModal>
            </ContainerAnimationModal>

            <InfoUserItemsHeader>
                <span>Logado com { user.email }</span>
            </InfoUserItemsHeader>
            <ItemsItemsHeader>
                <button onClick={() => setIsShowModalEditProfile(true)}>Ver meus dados</button>
                <button onClick={() => SignOut()}>{ isGoingOut ? 'Saindo...' : 'Sair' }</button>
            </ItemsItemsHeader>
            <i><IoMdArrowDropup /></i>
        </ContainerItemsHeader>
    )
}