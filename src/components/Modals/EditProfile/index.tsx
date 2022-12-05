import InputMask from 'react-input-mask';
import { useState, useEffect } from 'react';

import { useUsers } from '../../../hooks/Users';

import { 
    ContainerModalEditProfile,
    ModalModalEditProfile,
    LeftModalEditProfile,
    RightModalEditProfile,
    ImageLeftModalEditProfile,
    NameLeftModalEditProfile,
    OfficeLeftModalEditProfile,
    ButtonChangePhotoLeftModalEditProfile,
    ButtonCloseModalEditProfile,
    RightHeaderModalEditProfile,
    RightInfoModalEditProfile,
    RightFormModalEditProfile,
    RightFormContainerInputModalEditProfile,
    FormInputModalEditProfile,
    RightFormButtonModalEditProfile
} from "./style";

interface ModalEditProfileProps {
    closeModalEditProfile: () => void
}

export function ModalEditProfile({ closeModalEditProfile }: ModalEditProfileProps) {

    const { user } = useUsers();

    const [ name, setName ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const [ tel, setTel ] = useState<string>('');

    useEffect(() => {
        setName(user.name);
        setPassword(user.password);
        setTel(user.telephone);
    }, [])

    return (
        <ContainerModalEditProfile>
            <ModalModalEditProfile>
                    <RightHeaderModalEditProfile>
                        <h2>Minha conta</h2>
                        <p>Visualize as suas informações pessoais abaixo</p>
                    </RightHeaderModalEditProfile>

                    <RightInfoModalEditProfile>

                        <label><strong>Nome</strong></label>
                        <span>{ user.name }</span>

                        <label><strong>Email</strong></label>
                        <span>{ user.email }</span>

                        <label><strong>Telefone</strong></label>
                        <span>{ user.telephone }</span>

                        <label><strong>CPF</strong></label>
                        <span>{ user.cpf }</span>

                        <label><strong>Cargo</strong></label>
                        <span>{ user.office }</span>

                    </RightInfoModalEditProfile>

                <ButtonCloseModalEditProfile onClick={() => closeModalEditProfile()}>
                    x
                </ButtonCloseModalEditProfile>
            </ModalModalEditProfile>
        </ContainerModalEditProfile>
    )
}   