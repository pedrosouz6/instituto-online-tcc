import { AxiosError } from "axios";
import { axios } from "../../../axios";
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
} from "./style"

interface ModalDeleteUserProps {
    id: number | null,
    closeModalDeleteUser: () => void;
}

interface RespostDeleteUser {
    error: boolean,
    message: string
}

export function ModalDeleteUser({ id, closeModalDeleteUser }: ModalDeleteUserProps) {

    const { ErrorModalMessage, ShowModalMessage, TextModalMessage,  } = useMessageModal();
    const { toggleUpdatedUsers } = useUsers();

    async function DeleteUser() {
        try {
            const response = await axios.get(`/delete-user/${id}`);
            const respost: RespostDeleteUser = await response.data;
            ShowModalMessage(true);
            ErrorModalMessage(respost.error);
            TextModalMessage(respost.message);
        } catch(err) {
            const error = err as AxiosError<RespostDeleteUser>;
            const datas = error.response?.data;
            ShowModalMessage(true);
            ErrorModalMessage(datas?.error);
            TextModalMessage(datas?.message);
        }

        closeModalDeleteUser();
        toggleUpdatedUsers();
    }

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
                    <ButtonDeleteModalDeleteUser onClick={() => DeleteUser()}>Apagar</ButtonDeleteModalDeleteUser>
                </FooterModalDeleteUser>
            </ModalModalDeleteUser>
        </ContainerModalDeleteUser>
    )
}