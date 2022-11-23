import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { axios, ErrorAxiosType } from "../../../axios";
import { 
    ContainerModalDeleteUser,
    ModalModalDeleteUser,
    HeaderModalDeleteUser,
    MainModalDeleteUser,
    FooterModalDeleteUser,
    ButtonCancelModalDeleteUser,
} from "./style";

interface ModalDeleteUserProps {
    id: number | null,
    closeModalViewProfile: () => void;
}

interface ProjectUser {
    id: number,
    name: string,
    name_projects: string,
    id_project_user: string
}

interface GetUsersResults {
    message: string,
    error: boolean,
    results: Array<ProjectUser>
}

type UsersType = GetUsersResults | undefined;

export function ModalViewProfile({ id, closeModalViewProfile }: ModalDeleteUserProps) {

    const [ user, setUser ] = useState<UsersType | undefined>(undefined);

    useEffect(() => {
        async function getOneUser() {
            const response = await axios.get(`/getOne-projectUser/${id}`);
            const respost: GetUsersResults = await response.data;

            console.log(respost);

            setUser(respost);

        }

        getOneUser();
    }, [])

    return (
        <ContainerModalDeleteUser>
            <ModalModalDeleteUser>
                <HeaderModalDeleteUser>
                    <h3>Dados do usuário</h3>
                </HeaderModalDeleteUser>
                <MainModalDeleteUser>
                    <span>Nome: { user?.results[0].name }</span>
                    <span>Projetos participante: { user?.results.map((item, key) => (
                        <p key={key}>{item.name_projects}</p>   
                    )) }</span>
                </MainModalDeleteUser>

                <FooterModalDeleteUser>
                    <ButtonCancelModalDeleteUser onClick={() => closeModalViewProfile()}>Fechar</ButtonCancelModalDeleteUser>
                </FooterModalDeleteUser>
            </ModalModalDeleteUser>
        </ContainerModalDeleteUser>
    )
}