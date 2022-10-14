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
                <LeftModalEditProfile>
                    <ImageLeftModalEditProfile>

                    </ImageLeftModalEditProfile>
                    <NameLeftModalEditProfile>
                        { user.name }
                    </NameLeftModalEditProfile>
                    <OfficeLeftModalEditProfile>
                        { user.office }
                    </OfficeLeftModalEditProfile>
                    <label htmlFor="editPhoto">Mudar foto</label>
                    <ButtonChangePhotoLeftModalEditProfile id="editPhoto" type="file" />
                </LeftModalEditProfile> 
                <RightModalEditProfile>
                    <RightHeaderModalEditProfile>
                        <h2>Minha conta</h2>
                        <p>Visualize e edite as suas informações pessoais abaixo</p>
                    </RightHeaderModalEditProfile>

                    <RightInfoModalEditProfile>
                        <label>Email</label>
                        <span>{ user.email }</span>

                        <label>CPF</label>
                        <span>{ user.cpf }</span>

                    </RightInfoModalEditProfile>

                    <RightFormModalEditProfile>
                        <RightFormContainerInputModalEditProfile>
                            <label htmlFor="name">Nome</label>
                            <FormInputModalEditProfile>
                                <input 
                                    type="text" 
                                    id="name" 
                                    value={name}
                                    placeholder='Nome'
                                />

                            </FormInputModalEditProfile>
                        </RightFormContainerInputModalEditProfile>

                        <RightFormContainerInputModalEditProfile>
                            <label htmlFor="password">Senha</label>
                            <FormInputModalEditProfile>
                                <input 
                                    type="password" 
                                    id="password" 
                                    value={password}
                                    placeholder='Senha'
                                />

                            </FormInputModalEditProfile>
                        </RightFormContainerInputModalEditProfile>

                        <RightFormContainerInputModalEditProfile>
                            <label htmlFor="tel">Telefone</label>
                            <FormInputModalEditProfile>
                                <InputMask
                                    id='tel'
                                    placeholder='Telefone'
                                    value={tel}
                                    mask="(99) 99999-9999"
                                />

                            </FormInputModalEditProfile>
                        </RightFormContainerInputModalEditProfile>

                        <RightFormButtonModalEditProfile type="submit">
                            Editar
                        </RightFormButtonModalEditProfile>

                    </RightFormModalEditProfile>
                </RightModalEditProfile>

                <ButtonCloseModalEditProfile onClick={() => closeModalEditProfile()}>
                    x
                </ButtonCloseModalEditProfile>
            </ModalModalEditProfile>
        </ContainerModalEditProfile>
    )
}   