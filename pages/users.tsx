import Head from "next/head";
import { useEffect, useState } from "react";

import { BsFillPersonPlusFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { AiTwotoneEdit } from 'react-icons/ai';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { BsCalendarEvent } from 'react-icons/bs';

import { axios, ErrorAxiosType } from "../src/axios";

import { Container } from "../src/components/Container"; 
import { Header } from "../src/components/Header";
import { Navbar } from "../src/components/Navbar";

import { ModalAddUser } from '../src/components/Modals/AddUser';
import { ModalDeleteUser } from "../src/components/Modals/DeleteUser";
import { ModalUpdateUser } from "../src/components/Modals/UpdateUser";

import { useUsers } from "../src/hooks/Users";
import { parseCookies } from "nookies";

import { User } from '../src/contexts/Users';
import { AnimationModal, ContainerAnimationModal } from "../src/components/Modals/Animations/style";

import { 
    ContainerUsers, 
    HeaderUsers,
    HeaderButtonsUsers,
    ContainerFilterSearchUsers,
    TableUsers,
    FilterUsers,
    SearchUsers,
    ButtonDeleteUsers,
    ButtonEditUsers,
    ButtonActions,
    ContainerTableUsers,
    ContainerPaginationUsers,
    PaginationUsers,
    PaginationButtonActiveUsers,
    PaginationButtonArrowUsers,
    InfoPaginationUsers
} from "../styles/pages/users";
import { useMessageModal } from "../src/hooks/ModalMessage";
import { AxiosError } from "axios";
import { Loading } from "../src/components/Loading";

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

interface UsersProps {
    results: User
}

type UsersType = GetUsersResults | undefined;

export default function Users({ results }: UsersProps) {
    
    const { updatedUsers, setUser, setUserType } = useUsers();
    const { ErrorModalMessage, TextModalMessage, ShowModalMessage } = useMessageModal();

    setUser(results);
    setUserType(results.office);

    const [ displayingUser, setDisplayingUser ] = useState<string>("10");
    const [ pageNumber, setPageNumber ] = useState<number>(1);
    const [ totalPages, setTotalPages ] = useState<number | null>(null);
    const [ searchUser, setSearchUser ] = useState<string>('');

    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    const [ isOpenModalAddUser, setIsOpenModalAddUser ] = useState<boolean>(false);
    const [ isOpenModalDeleteUser, setIsOpenModalDeleteUser ] = useState<boolean>(false);
    const [ isOpenModalUpdateUser, setIsOpenModalUpdateUser ] = useState<boolean>(false);
    const [ userId, setUserId ] = useState<number | null>(null);

    const [ allUsers, setAllUsers ] = useState<UsersType | undefined>(undefined);

    function toggleModalAddUser() {
        setIsOpenModalAddUser(!isOpenModalAddUser);
    }

    function openModalDeleteUser(id: number | null) {
        setIsOpenModalDeleteUser(true);
        setUserId(id);
    }

    function closeModalDeleteUser() {
        setIsOpenModalDeleteUser(false);
    }

    function openModalUpdateUser(id: number | null) {
        setIsOpenModalUpdateUser(true);
        setUserId(id);
    }

    function closeModalUpdateUser() {
        setIsOpenModalUpdateUser(false);
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

    function monthName(month: string) {
        let name = '';
        switch (month) {
            case '01':
                return name = "Janeiro";
            case '02':
                return name = "Fevereiro";
            case '03':
                return name = "Março";
            case '04':
                return name = "Abril";
            case '05':
                return name = "Maio";
            case '06':
                return name = "Junho";
            case '07':
                return name = "Julho";
            case '08':
                return name = "Agosto";
            case '09':
                return name = "Setembro";
            case '10':
                return name = "Outubro";
            case '11':
                return name = "Novembro";
            case '12':
                return name = "Dezembro";
            default:
                return name = "Mês inexistente";
        }
    }

    useEffect(() => {
        const getUser = async (): Promise<void> => {
            setIsLoading(true);

            try {
                const response = await axios.get(`/get-users/${displayingUser}/${pageNumber}/${searchUser ? searchUser : 'null'}`);
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
    }, [updatedUsers, displayingUser, pageNumber, searchUser]);

    return (
        <>
            <Head>
                <title>Usuários</title>
            </Head>

            { isLoading && <Loading /> }

            <Header />
            <Navbar />

            <ContainerAnimationModal isAnimation={isOpenModalAddUser}>
                <AnimationModal isAnimation={isOpenModalAddUser}>
                    { isOpenModalAddUser && <ModalAddUser toggleModalAddUser={toggleModalAddUser} /> }
                </AnimationModal>
            </ContainerAnimationModal>

            <ContainerAnimationModal isAnimation={isOpenModalDeleteUser}>
                <AnimationModal isAnimation={isOpenModalDeleteUser}>
                    { isOpenModalDeleteUser && <ModalDeleteUser closeModalDeleteUser={closeModalDeleteUser} id={userId} /> }
                </AnimationModal>
            </ContainerAnimationModal>

            <ContainerAnimationModal isAnimation={isOpenModalUpdateUser}>
                <AnimationModal isAnimation={isOpenModalUpdateUser}>
                    { isOpenModalUpdateUser && <ModalUpdateUser closeModalUpdateUser={closeModalUpdateUser} id={userId} /> }
                </AnimationModal>
            </ContainerAnimationModal>

            <Container>
                <ContainerUsers>
                    <HeaderUsers>
                        <h3>Usuários</h3>

                        <HeaderButtonsUsers>
                            <button onClick={() => toggleModalAddUser()}><i><BsFillPersonPlusFill /></i> Novo</button>
                        </HeaderButtonsUsers>
                    </HeaderUsers>

                    <ContainerFilterSearchUsers>
                        <FilterUsers>
                            <label>Exibindo</label>
                            <select onChange={e => setDisplayingUser(e.target.value)}>
                                <option value="2">2</option>
                                <option value="4">4</option>
                                <option value="6">6</option>
                                <option value="8">8</option>
                                <option value="10" selected>10</option>
                            </select>
                            <label>por página</label>
                        </FilterUsers>
                        <SearchUsers>
                            <label htmlFor="searchUser">Pesquisar</label>
                            <input 
                            type="text" 
                            id="searchUser" 
                            value={searchUser}
                            placeholder="Pesquisar..."
                            onChange={e => setSearchUser(e.target.value)}
                            />
                        </SearchUsers>
                    </ContainerFilterSearchUsers>

                    <ContainerTableUsers>

                        <TableUsers>
                            <thead>
                                <tr>
                                    <td>ID</td>
                                    <td>Nome</td>
                                    <td>Email</td>
                                    <td>Função</td>
                                    <td>Telefone</td>
                                    <td>Nascimento</td>
                                    <td>CPF</td>
                                    <td>Ações</td>
                                </tr>
                            </thead>
                            <tbody>
                                { allUsers &&
                                    allUsers.results.map((item, key) => {
                                        const date: any = item.date.split('T')[0];
                                        const dateArray = date.split('-');
                                        const month = monthName(dateArray[1]);
                                        
                                        return <tr key={key}>
                                            <td>{ item.id }</td>
                                            <td>{ item.name }</td>
                                            <td>{ item.email }</td>
                                            <td>{ item.office }</td>
                                            <td>{ item.telephone }</td>
                                            <td> <i><BsCalendarEvent /></i> { dateArray[2] + ' de ' + month + ', ' + dateArray[0] }</td>  
                                            <td>{ item.cpf }</td>
                                            <ButtonActions>
                                                <ButtonDeleteUsers onClick={() => openModalDeleteUser(item.id)}><i><AiOutlineClose /></i></ButtonDeleteUsers>
                                                <ButtonEditUsers onClick={() => openModalUpdateUser(item.id)}><i><AiTwotoneEdit /></i></ButtonEditUsers>
                                            </ButtonActions>
                                        </tr>
                                    })
                                }   
                            </tbody>
                        </TableUsers>
                    </ContainerTableUsers>
                    <ContainerPaginationUsers>
                        <InfoPaginationUsers>
                            <span>Mostrando { displayingUser } de { allUsers?.totalUsers } registros</span>
                        </InfoPaginationUsers>
                        <PaginationUsers>
                            <PaginationButtonArrowUsers onClick={() => prevPage()}><MdOutlineKeyboardArrowLeft /></PaginationButtonArrowUsers>
                            <PaginationButtonActiveUsers>{ pageNumber }</PaginationButtonActiveUsers>
                            <PaginationButtonArrowUsers onClick={() => nextPage()}><MdOutlineKeyboardArrowRight /></PaginationButtonArrowUsers>
                        </PaginationUsers>
                    </ContainerPaginationUsers>
                </ContainerUsers>
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