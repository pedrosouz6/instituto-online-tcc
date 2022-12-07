import { AxiosError } from "axios";
import { axios, ErrorAxiosType } from "../../../axios";
import { useMessageModal } from "../../../hooks/ModalMessage";
import { useUsers } from "../../../hooks/Users";
import { 
    ContainerModalDeleteUser,
    ModalModalDeleteUser,
    HeaderModalDeleteUser,
    MainModalDeleteUser,
    FooterModalDeleteUser,
    ButtonCancelModalDeleteUser,
    ButtonDeleteModalDeleteUser
} from "../DeleteUser/style";

interface ModalDeleteUserProps {
    description: string | null,
    closeModalSeeCalled: () => void;
}

interface RespostDeleteUser {
    error: boolean,
    message: string
}

export function ModalDeleteUser({ description, closeModalSeeCalled }: ModalDeleteUserProps) {

    return (
        <ContainerModalDeleteUser>
            <ModalModalDeleteUser>
                <HeaderModalDeleteUser>
                    <h3>Ver o chamado</h3>
                </HeaderModalDeleteUser>
                <MainModalDeleteUser>
                    <span>{ description }</span>
                </MainModalDeleteUser>

                <FooterModalDeleteUser>
                    <ButtonCancelModalDeleteUser onClick={() => closeModalSeeCalled()}>Fechar</ButtonCancelModalDeleteUser>
                </FooterModalDeleteUser>
            </ModalModalDeleteUser>
        </ContainerModalDeleteUser>
    )
}