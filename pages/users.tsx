import Head from "next/head";
import { useEffect, useState } from "react";

import { HiOutlineArrowLeft } from 'react-icons/hi';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { AiTwotoneEdit } from 'react-icons/ai';
import { AiFillLock } from 'react-icons/ai';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

import { axios } from "../src/axios";

import { Container } from "../src/components/Container"; 
import { Header } from "../src/components/Header";
import { Navbar } from "../src/components/Navbar";

import { ModalAddUser } from '../src/components/Modals/AddUser';
import { ModalDeleteUser } from "../src/components/Modals/DeleteUser";
import { ModalUpdateUser } from "../src/components/Modals/UpdateUser";

import { AnimationModal, ContainerAnimationModal } from "../src/components/Modals/Animations/style";

import { 
    ContainerUsers, 
    HeaderUsers,
    HeaderButtonsUsers,
    ContainerFilterSearchUsers,
    TableUsers,
    FilterUsers,
    SearchUsers,
    ButtonLockUsers,
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
import { useUsers } from "../src/hooks/Users";

interface UsersResultsProps {
    id: number,
    name: string,
    email: string,
    password: string,
    telephone: string,
    cpf: string,
    date: string
}

interface UsersProps {
    error: boolean,
    totalPages: number,
    totalUsers: number,
    results: Array<UsersResultsProps>
}

type UsersType = UsersProps | undefined;

export default function Users() {

    const { updatedUsers } = useUsers();

    const [ displayingUser, setDisplayingUser ] = useState<string>("10");
    const [ pageNumber, setPageNumber ] = useState<number>(1);
    const [ totalPages, setTotalPages ] = useState<number | null>(null);

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

    useEffect(() => {
        const getUser = async (): Promise<void> => {
            const response = await axios.get(`/get-users/${displayingUser}/${pageNumber}`);
            const respost: UsersProps = await response.data;
            setTotalPages(respost.totalPages);
            setAllUsers(respost);
        }

        getUser();
    }, [updatedUsers, displayingUser, pageNumber]);

    return (
        <>
            <Head>
                <title>Usuários</title>
            </Head>

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
                            <button><i><HiOutlineArrowLeft /></i> Voltar</button>
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
                            <input type="text" id="searchUser" placeholder="Pesquisar..." />
                        </SearchUsers>
                    </ContainerFilterSearchUsers>

                    <ContainerTableUsers>

                        <TableUsers>
                            <thead>
                                <tr>
                                    <td>ID</td>
                                    <td>Nome</td>
                                    <td>Email</td>
                                    <td>Senha</td>
                                    <td>Telefone</td>
                                    <td>Nascimento</td>
                                    <td>CPF</td>
                                    <td>Ações</td>
                                </tr>
                            </thead>
                            <tbody>
                                { allUsers &&
                                    allUsers.results.map((item, key) => (
                                        <tr key={key}>
                                            <td>{ item.id }</td>
                                            <td>{ item.name }</td>
                                            <td>{ item.email }</td>
                                            <td>{ item.password }</td>
                                            <td>{ item.telephone }</td>
                                            <td>{ item.date }</td>  
                                            <td>{ item.cpf }</td>
                                            <ButtonActions>
                                                <ButtonDeleteUsers onClick={() => openModalDeleteUser(item.id)}><i><AiOutlineClose /></i></ButtonDeleteUsers>
                                                <ButtonEditUsers onClick={() => openModalUpdateUser(item.id)}><i><AiTwotoneEdit /></i></ButtonEditUsers>
                                                <ButtonLockUsers><i><AiFillLock /></i></ButtonLockUsers>
                                            </ButtonActions>
                                        </tr>
                                    ))
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