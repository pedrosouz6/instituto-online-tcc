import Head from "next/head";
import { useState } from "react";

import { HiOutlineArrowLeft } from 'react-icons/hi';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { AiTwotoneEdit } from 'react-icons/ai';
import { AiFillLock } from 'react-icons/ai';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'

import { Header } from "../src/components/Header";
import { Navbar } from "../src/components/Navbar";
import { ModalAddUser } from '../src/components/Modals/AddUser';

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

import { Container } from "../src/components/Container"; 
import { AnimationModal, ContainerAnimationModal } from "../src/components/Modals/Animations/style";

export default function Users() {

    const [ isOpenModalAddUser, setIsOpenModalAddUser ] = useState<boolean>(false);

    function toggleModalAddUser() {
        setIsOpenModalAddUser(!isOpenModalAddUser);
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
                                    <td>Nome</td>
                                    <td>Telefone</td>
                                    <td>Cargo/Função</td>
                                    <td>Email</td>
                                    <td>Senha</td>
                                    <td>CPF</td>
                                    <td>Ações</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Pedro Souza</td>
                                    <td>(11) 958832414</td>
                                    <td>Administrador</td>
                                    <td>pedro@gmail.com</td>
                                    <td>123321123321</td>
                                    <td>1021340193</td>
                                    <ButtonActions>
                                        <ButtonDeleteUsers><i><AiOutlineClose /></i></ButtonDeleteUsers>
                                        <ButtonEditUsers><i><AiTwotoneEdit /></i></ButtonEditUsers>
                                        <ButtonLockUsers><i><AiFillLock /></i></ButtonLockUsers>
                                    </ButtonActions>
                                </tr>
                                <tr>
                                    <td>Pedro Souza</td>
                                    <td>(11) 958832414</td>
                                    <td>Administrador</td>
                                    <td>pedro@gmail.com</td>
                                    <td>123321123321</td>
                                    <td>1021340193</td>
                                    <ButtonActions>
                                        <ButtonDeleteUsers><i><AiOutlineClose /></i></ButtonDeleteUsers>
                                        <ButtonEditUsers><i><AiTwotoneEdit /></i></ButtonEditUsers>
                                        <ButtonLockUsers><i><AiFillLock /></i></ButtonLockUsers>
                                    </ButtonActions>
                                </tr>
                                <tr>
                                    <td>Pedro Souza</td>
                                    <td>(11) 958832414</td>
                                    <td>Administrador</td>
                                    <td>pedro@gmail.com</td>
                                    <td>123321123321</td>
                                    <td>1021340193</td>
                                    <ButtonActions>
                                        <ButtonDeleteUsers><i><AiOutlineClose /></i></ButtonDeleteUsers>
                                        <ButtonEditUsers><i><AiTwotoneEdit /></i></ButtonEditUsers>
                                        <ButtonLockUsers><i><AiFillLock /></i></ButtonLockUsers>
                                    </ButtonActions>
                                </tr>
                                <tr>
                                    <td>Pedro Souza</td>
                                    <td>(11) 958832414</td>
                                    <td>Administrador</td>
                                    <td>pedro@gmail.com</td>
                                    <td>123321123321</td>
                                    <td>1021340193</td>
                                    <ButtonActions>
                                        <ButtonDeleteUsers><i><AiOutlineClose /></i></ButtonDeleteUsers>
                                        <ButtonEditUsers><i><AiTwotoneEdit /></i></ButtonEditUsers>
                                        <ButtonLockUsers><i><AiFillLock /></i></ButtonLockUsers>
                                    </ButtonActions>
                                </tr>
                                <tr>
                                    <td>Pedro Souza</td>
                                    <td>(11) 958832414</td>
                                    <td>Administrador</td>
                                    <td>pedro@gmail.com</td>
                                    <td>123321123321</td>
                                    <td>1021340193</td>
                                    <ButtonActions>
                                        <ButtonDeleteUsers><i><AiOutlineClose /></i></ButtonDeleteUsers>
                                        <ButtonEditUsers><i><AiTwotoneEdit /></i></ButtonEditUsers>
                                        <ButtonLockUsers><i><AiFillLock /></i></ButtonLockUsers>
                                    </ButtonActions>
                                </tr>
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