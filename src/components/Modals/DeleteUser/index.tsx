import { 
    ContainerModalDeleteUser,
    ModalModalDeleteUser,
    HeaderModalDeleteUser,
    MainModalDeleteUser,
    FooterModalDeleteUser,
    ButtonCancelModalDeleteUser,
    ButtonDeleteModalDeleteUser
} from "./style"

interface ModalDeleteUserProps {
    id: number | null,
    closeModalDeleteUser: () => void;
}

export function ModalDeleteUser({ id, closeModalDeleteUser }: ModalDeleteUserProps) {
    return (
        <ContainerModalDeleteUser>
            <ModalModalDeleteUser>
                <HeaderModalDeleteUser>
                    <h3>Deletar um usuario</h3>
                </HeaderModalDeleteUser>
                <MainModalDeleteUser>
                    <span>Você tem certeza que deseja deletar o usuário #{id}?</span>
                </MainModalDeleteUser>

                <FooterModalDeleteUser>
                    <ButtonCancelModalDeleteUser onClick={() => closeModalDeleteUser()}>Cancelar</ButtonCancelModalDeleteUser>
                    <ButtonDeleteModalDeleteUser>Apagar</ButtonDeleteModalDeleteUser>
                </FooterModalDeleteUser>
            </ModalModalDeleteUser>
        </ContainerModalDeleteUser>
    )
}