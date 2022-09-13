import Head from "next/head";
import { useState } from "react";

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
    respost: {
        error: boolean,
        results: Array<UsersResultsProps>
    }
}

export default function Users({ respost }: UsersProps) {

    const [ isOpenModalAddUser, setIsOpenModalAddUser ] = useState<boolean>(false);
    const [ isOpenModalDeleteUser, setIsOpenModalDeleteUser ] = useState<boolean>(false);
    const [ userId, setUserId ] = useState<number | null>(null);

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
 
    return (
        <>
            <Head>
                <title>Usuários</title>
            </Head>

            <Header />
            <Navbar />

            <ContainerAnimationModal isAnimation={isOpenModalAddUser}>
                <AnimationModal isAnimation={isOpenModalAddUser}>
                    { <ModalAddUser toggleModalAddUser={toggleModalAddUser} /> }
                </AnimationModal>
            </ContainerAnimationModal>

            <ContainerAnimationModal isAnimation={isOpenModalDeleteUser}>
                <AnimationModal isAnimation={isOpenModalDeleteUser}>
                    { <ModalDeleteUser closeModalDeleteUser={closeModalDeleteUser} id={userId} /> }
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
                            <select>
                                <option value="2">2</option>
                                <option value="4">4</option>
                                <option value="6">6</option>
                                <option value="8">8</option>
                                <option value="10">10</option>
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
                                { 
                                    respost.results.map((item) => (
                                        <tr>
                                            <td>{ item.id }</td>
                                            <td>{ item.name }</td>
                                            <td>{ item.email }</td>
                                            <td>{ item.password }</td>
                                            <td>{ item.telephone }</td>
                                            <td>{ item.date }</td>
                                            <td>{ item.cpf }</td>
                                            <ButtonActions>
                                                <ButtonDeleteUsers onClick={() => openModalDeleteUser(item.id)}><i><AiOutlineClose /></i></ButtonDeleteUsers>
                                                <ButtonEditUsers><i><AiTwotoneEdit /></i></ButtonEditUsers>
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
                            <span>Mostrando de 1 até 8 de 8 registros</span>
                        </InfoPaginationUsers>
                        <PaginationUsers>
                            <PaginationButtonArrowUsers><MdOutlineKeyboardArrowLeft /></PaginationButtonArrowUsers>
                            <PaginationButtonActiveUsers>1</PaginationButtonActiveUsers>
                            <PaginationButtonArrowUsers><MdOutlineKeyboardArrowRight /></PaginationButtonArrowUsers>
                        </PaginationUsers>
                    </ContainerPaginationUsers>
                </ContainerUsers>
            </Container>
        </>
    )
}

export async function getServerSideProps() {
    const response = await axios.get('/get-users');
    const respost = await response.data;
    return {
        props: {
            respost
        }
    }
}