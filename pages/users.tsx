import Head from "next/head";

import { IoIosArrowBack } from 'react-icons/io';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { AiTwotoneEdit } from 'react-icons/ai';
import { AiFillLock } from 'react-icons/ai';

import { Header } from "../src/components/Header";
import { Navbar } from "../src/components/Navbar";

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
    ContainerTableUsers
} from "../styles/pages/users";
import { Container } from "../styles/style";

export default function Users() {
    return (
        <>
            <Head>
                <title>Usuários</title>
            </Head>

            <Header />
            <Navbar />

            <Container>
                <ContainerUsers>
                    <HeaderUsers>
                        <h3>Usuários</h3>

                        <HeaderButtonsUsers>
                            <button><i><IoIosArrowBack /></i> Voltar</button>
                            <button><i><BsFillPersonPlusFill /></i> Novo</button>
                        </HeaderButtonsUsers>
                    </HeaderUsers>

                    <ContainerFilterSearchUsers>
                        <FilterUsers>

                        </FilterUsers>
                        <SearchUsers>

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
                            </tbody>
                        </TableUsers>
                    </ContainerTableUsers>

                </ContainerUsers>
            </Container>
        </>
    )
}