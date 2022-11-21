import Head from "next/head";
import { useState, useEffect } from 'react'; 

import { Container } from "../src/components/Container";
import { Header } from "../src/components/Header";
import { Navbar } from "../src/components/Navbar";
import { Title } from "../src/components/Title";

import { ModalAddDocs } from "../src/components/Modals/AddDocs";

import { 
    ContainerDocs,
    HeaderDocs,
    HeaderProjectDocs,
    HeaderButtonAddDocs,
    ContainerTableDocs,
    TableDocs
} from "../styles/docs";
import { AnimationModal, ContainerAnimationModal } from "../src/components/Modals/Animations/style";
import { parseCookies } from "nookies";
import { axios, ErrorAxiosType } from "../src/axios";
import { ContainerPaginationUsers, InfoPaginationUsers, PaginationButtonActiveUsers, PaginationButtonArrowUsers, PaginationUsers } from "../styles/pages/users";
import { User } from "../src/contexts/Users";
import { useMessageModal } from "../src/hooks/ModalMessage";
import { AxiosError } from "axios";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

interface GetUsersResults {
    message: string,
    error: boolean,
    totalPages: number,
    totalUsers: number,
    results: Array<User>
}

export interface ValidateTokenResults {
    error: boolean,
    message: string,
    results: Array<User>
}

type UsersType = GetUsersResults | undefined;

export default function Docs() {

    const { ErrorModalMessage, TextModalMessage, ShowModalMessage } = useMessageModal();


    const [ openModalAddDocs, setOpenModalAddDocs ] = useState<boolean>(false);

    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    const [ pageNumber, setPageNumber ] = useState<number>(1);
    const [ totalPages, setTotalPages ] = useState<number | null>(null);
    const [ searchUser, setSearchUser ] = useState<string>('');

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

    useEffect(() => {
        const getUser = async (): Promise<void> => {
            setIsLoading(true);

            try {
                const response = await axios.get(`/get-docs/10/${pageNumber}/${searchUser ? searchUser : 'null'}`);
                const respost: GetUsersResults = await response.data;

                if(respost.error) {
                    ErrorModalMessage(respost.error);
                    TextModalMessage(respost.message);
                    ShowModalMessage(respost.error);
                    return setIsLoading(false);
                }

                setTotalPages(respost.totalPages);
                setAllUsers(respost);
                console.log(respost)
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
    }, [pageNumber, searchUser]);

    return (
        <>

            <ContainerAnimationModal isAnimation={openModalAddDocs}>
                <AnimationModal isAnimation={openModalAddDocs}>
                    { openModalAddDocs && <ModalAddDocs toggleModalCloseDocs={toggleModalCloseDocs} /> }
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
                            <select name="project" id="project">
                                <option value="ballet">Balé</option>
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
                                    <td>Projeto Participantes</td>
                                    <td colSpan={2}>Data de criação</td>
                                </tr>
                            </thead>
                            <tbody>
                                { allUsers &&
                                    allUsers.results.map((item, key) => {
                                        const date: any = item.date.split('T')[0];
                                        const dateArray = date.split('-');
                                        
                                        return <tr key={key}>
                                            <td>{ item.name }</td>
                                            <td>{ item.office }</td>
                                            <td>{ dateArray[2] + ' de ' + dateArray[1] + ', ' + dateArray[0] }</td>  
                                            <td><button>Ver perfil</button></td>
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