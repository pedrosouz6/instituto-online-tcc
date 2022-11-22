import Head from "next/head";
import { useState, useEffect } from 'react'; 

import { Container } from "../src/components/Container";
import { Header } from "../src/components/Header";
import { Navbar } from "../src/components/Navbar";
import { Title } from "../src/components/Title";

import { ModalViewProfile } from "../src/components/Modals/ViewProfile";
import { ModalAddDocs } from "../src/components/Modals/AddDocs";

import { 
    ContainerDocs,
    HeaderDocs,
    HeaderProjectDocs,
    HeaderButtonAddDocs,
    ContainerTableDocs,
    TableDocs,
    TdButtonAddDocs
} from "../styles/docs";

import { AnimationModal, ContainerAnimationModal } from "../src/components/Modals/Animations/style";
import { parseCookies } from "nookies";
import { axios, ErrorAxiosType } from "../src/axios";
import { ContainerPaginationUsers, InfoPaginationUsers, PaginationButtonActiveUsers, PaginationButtonArrowUsers, PaginationUsers } from "../styles/pages/users";
import { User } from "../src/contexts/Users";
import { useMessageModal } from "../src/hooks/ModalMessage";
import { AxiosError } from "axios";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

interface ProjectUser {
    id: number,
    name: string,
    name_projects: string,
    id_project_user: string
}

interface GetUsersResults {
    message: string,
    error: boolean,
    totalPages: number,
    totalUsers: number,
    results: Array<ProjectUser>
}

export interface ValidateTokenResults {
    error: boolean,
    message: string,
    results: Array<User>
}

interface AddProjectUserResponse {
    error: boolean,
    message: string
}

type UsersType = GetUsersResults | undefined;

export default function Docs() {

    const { ErrorModalMessage, TextModalMessage, ShowModalMessage } = useMessageModal();

    const [ isModalViewProfile, setIsModalViewProfile ] = useState<boolean>(false);
    const [ filterProject, setFilterProject ] = useState<string | null>(null);

    const [ openModalAddDocs, setOpenModalAddDocs ] = useState<boolean>(false);
    const [ id, setId ] = useState<number | null>(null); 

    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    const [ pageNumber, setPageNumber ] = useState<number>(1);
    const [ totalPages, setTotalPages ] = useState<number | null>(null);

    const [ allUsers, setAllUsers ] = useState<UsersType | undefined>(undefined);


    function toggleModalCloseDocs() {
        setOpenModalAddDocs(false);
    }

    function nextPage() {
        if(pageNumber >= Number(totalPages)) {
            return setPageNumber(pageNumber);
        }

        return setPageNumber(pageNumber + 1);
    }

    function prevPage() {
        if(pageNumber <= 1) {
            return setPageNumber(pageNumber);
        }

        return setPageNumber(pageNumber - 1);
    }

    function openModalViewProfile(id: number | null) {
        setIsModalViewProfile(true);
        setId(id);
    }

    function closeModalViewProfile() {
        setIsModalViewProfile(false);
    }

    async function addProjectUser(idProject: number, idUser: number) {
        setIsLoading(true);
        const response = await axios.post(`/add-projectUser`, {
            id_user: idUser,
            id_project: idProject
        });

        const respost: AddProjectUserResponse = await response.data;
        ErrorModalMessage(respost.error);
        TextModalMessage(respost.message);
        ShowModalMessage(true);
        return setIsLoading(false);
    }

    useEffect(() => {
        const getUser = async (): Promise<void> => {
            setIsLoading(true);

            try {
                const response = await axios.get(`/get-projectUser/${filterProject ? filterProject : 'null'}/${pageNumber}`);
                const respost: GetUsersResults = await response.data;

                if(respost.error) {
                    ErrorModalMessage(respost.error);
                    TextModalMessage(respost.message);
                    ShowModalMessage(respost.error);
                    return setIsLoading(false);
                }

                setTotalPages(respost.totalPages);
                setAllUsers(respost);
                return setIsLoading(false);

            } catch(err) {
                const error = err as AxiosError<ErrorAxiosType>;
                const datas = error.response?.data;
                ShowModalMessage(true);
                ErrorModalMessage(datas?.error);
                TextModalMessage(datas?.message);
                setIsLoading(false);
            }
        }

        getUser();
    }, [pageNumber, filterProject]);

    return (
        <>

            <ContainerAnimationModal isAnimation={openModalAddDocs}>
                <AnimationModal isAnimation={openModalAddDocs}>
                    { openModalAddDocs && <ModalAddDocs toggleModalCloseDocs={toggleModalCloseDocs} /> }
                </AnimationModal>
            </ContainerAnimationModal>

            <ContainerAnimationModal isAnimation={isModalViewProfile}>
                <AnimationModal isAnimation={isModalViewProfile}>
                    { isModalViewProfile && <ModalViewProfile closeModalViewProfile={closeModalViewProfile} id={id} /> }
                </AnimationModal>
            </ContainerAnimationModal>

            <Head>
                <title>Documentos</title>
            </Head>
            <Navbar />
            <Header />
            <Container>
                <ContainerDocs>
                    <Title text='Documentos' />
                    
                    <HeaderDocs>
                        <HeaderProjectDocs>
                            <label htmlFor="project">Projetos</label>
                            <select name="project" id="project" onChange={e => setFilterProject(e.target.value)}>
                                <option selected disabled>Escolha o projeto</option>
                                <option value="Balé">Balé</option>
                                <option value="Judô">Judô</option>
                                <option value="Creches comunitárias">Creches comunitárias</option>
                                <option value="Horta">Horta</option>
                            </select>
                        </HeaderProjectDocs>

                        <HeaderButtonAddDocs>
                            <button onClick={() => setOpenModalAddDocs(true)}>Adicionar</button>
                        </HeaderButtonAddDocs>
                    </HeaderDocs>

                    <ContainerTableDocs>

                        <TableDocs>
                            <thead>
                                <tr>
                                    <td>Nome</td>
                                    <td colSpan={3}>Projeto Participantes</td>
                                </tr>
                            </thead>
                            <tbody>
                                { allUsers &&
                                    allUsers.results.map((item, key) => {
                                        return <tr key={key}>
                                            <td>{ item.name }</td>
                                            <td>{ item.name_projects }</td>
                                            <td><button onClick={() => openModalViewProfile(item.id)}>Ver perfil</button></td>
                                            <TdButtonAddDocs>
                                                <span>Adicionar projeto</span>
                                                <div>
                                                    <button onClick={() => addProjectUser(1, item.id)}>Balé</button>
                                                    <button onClick={() => addProjectUser(2, item.id)}>Judô</button>
                                                    <button onClick={() => addProjectUser(3, item.id)}>Creches</button>
                                                    <button onClick={() => addProjectUser(4, item.id)}>Horta</button>
                                                </div>
                                            </TdButtonAddDocs>
                                        </tr>
                                    })
                                }   
                            </tbody> 
                        </TableDocs>
                    </ContainerTableDocs>
                    <ContainerPaginationUsers>
                        <InfoPaginationUsers>
                            <span>Mostrando 10 de { allUsers?.totalUsers } registros</span>
                        </InfoPaginationUsers>
                        <PaginationUsers>
                            <PaginationButtonArrowUsers onClick={() => prevPage()}><MdOutlineKeyboardArrowLeft /></PaginationButtonArrowUsers>
                            <PaginationButtonActiveUsers>{ pageNumber }</PaginationButtonActiveUsers>
                            <PaginationButtonArrowUsers onClick={() => nextPage()}><MdOutlineKeyboardArrowRight /></PaginationButtonArrowUsers>
                        </PaginationUsers>
                    </ContainerPaginationUsers>
                </ContainerDocs>
            </Container>
        </>
    )
}

export async function getServerSideProps(ctx: any) {

    const { ['token_user']: token } = parseCookies(ctx);
  
    if(token) {
      try {
        const response = await axios.post('/validate-token', {
            token
        });

        const respost: ValidateTokenResults = await response.data;

        if(respost.results[0].office !== 'administrador') {
            return {    
                redirect: {
                    destination: '/without-permission',
                    permanent: false
                }
            }
        }

        if(!respost.error) {
            return {
                props: {
                    results: respost.results[0]
                }
            }
        }

    
        if(respost.error) {
            return {
                redirect: {
                  destination: '/',
                  permanent: false
                }
            }
        }
        
      } catch(error) {
        return {
          redirect: {
            destination: '/',
            permanent: false
          }
        }
      }
    }
  
    if(!token) {
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }
  
    return {
      props: {}
    }
}