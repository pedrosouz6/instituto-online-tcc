import Head from 'next/head';
import { useEffect, useState } from 'react';
import { parseCookies } from 'nookies';

import { ValidateTokenResults } from './users';
import { axios } from '../src/axios';
import { useUsers } from '../src/hooks/Users';
import { User } from '../src/contexts/Users';

import { Header } from '../src/components/Header';
import { Navbar } from '../src/components/Navbar';
import { Title } from '../src/components/Title';
import { Container } from '../src/components/Container'; 

import { ModalNewCalled } from '../src/components/Modals/NewCalled';
import { ModalDeleteUser } from '../src/components/Modals/SeeCalled';

import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

import { ContainerAnimationModal, AnimationModal } from '../src/components/Modals/Animations/style';

import { 
  ContainerButtonNewCalledHelp,
  ContainerTableHelp,
  ContainerHeaderTableHelp,
  TableHelp,
  ToViewTableHelp,
  StatusTableHelp,
  DescriptionTableHelp
} from '../styles/pages/help';

interface HelpProps {
  results: User
}

interface HelpType {
  id: string,
  title: string,
  description: string,
  status: string,
  date: string
}

interface HelpApiRespost {
  error: boolean,
  message: string,
  results: HelpType[]
}

export default function Help({ results }: HelpProps) {
  
  const { setUser, setUserType, user } = useUsers();

  setUser(results);
  setUserType(results.office);

  const [ showUpCalled, setShowUpCalled ] = useState(true);
  const [ showModalNewCalled, setShowModalNewCalled ] = useState(false);
  const [ isSeeCalled, setIsSeeCalled ] = useState(false);
  const [ description, setDescription ] = useState<null | string>(null);

  const [ isRespostCalled ,setIsRespostCalled ] = useState<boolean>(false);
  const [ idCalled, setIdCalled ] = useState<string | null>(null);

  const [ help, setHelp ] = useState<HelpType[]>([]);

  async function getHelp() {

    if(results.office === 'administrador') {
      const response = await axios.get("/get-called");
      const respost: HelpApiRespost = await response.data;

      return setHelp(respost.results);
    }
    const response = await axios.get(`/getOne-called/${user.id}`);
    const respost: HelpApiRespost = await response.data;

    setHelp(respost.results);
  }

  if(user.id) {
    getHelp();
  }

  function toggleRepeatCallApi() {
    getHelp();
  }

  function openModalNewCalled() {
    setShowModalNewCalled(true);
  }

  function closeModalNewCalled() {
    setShowModalNewCalled(false);
  }

  function closeModalSeeCalled() {
    setIsSeeCalled(false);
  }

  function openModalSeeCalled(description: string) {
    setIsSeeCalled(true);
    setDescription(description);
  }

  function openModalRespostCalled(id: string) {
    setIsRespostCalled(true);
    setIdCalled(id);
  }

  function closeModalRespostCalled() {
    setIsRespostCalled(false);
  }

    return (
        <>
            <Head>
                <title>Ajuda</title>
            </Head>

            <Header />
            <Navbar />

            <ContainerAnimationModal isAnimation={showModalNewCalled}>
              <AnimationModal isAnimation={showModalNewCalled}>
                { showModalNewCalled && <ModalNewCalled closeModalNewCalled={closeModalNewCalled} toggleRepeatCallApi={toggleRepeatCallApi} /> }
              </AnimationModal>
            </ContainerAnimationModal>

            <ContainerAnimationModal isAnimation={isSeeCalled}>
              <AnimationModal isAnimation={isSeeCalled}>
                { isSeeCalled && <ModalDeleteUser description={description} closeModalSeeCalled={closeModalSeeCalled} /> }
              </AnimationModal>
            </ContainerAnimationModal>

            <Container>

              <Title text='Suporte' />
              
              <ContainerButtonNewCalledHelp>
                <button onClick={() => openModalNewCalled()}>Novo chamado</button>
              </ContainerButtonNewCalledHelp>

              <ContainerTableHelp>

                <ContainerHeaderTableHelp>
                    <span>Meus chamados</span>
                    <button onClick={() => setShowUpCalled(!showUpCalled)}>
                      <i>{ showUpCalled ? <IoIosArrowUp /> : <IoIosArrowDown /> }</i>
                    </button>
                </ContainerHeaderTableHelp>
                  
                <TableHelp>
                  <thead>
                    <tr>
                      <td>Nº PROTOCOLO</td>
                      <td colSpan={3}>TíTULO</td>
                    </tr>
                  </thead>
                  { showUpCalled &&
                    <tbody>
                      {
                        help.map((item, key) => {
                          const date = item.date.split('T')[0];
                          const dateArray = date.split('-');

                          return <tr key={key}>
                            <td>{ item.id }</td>
                            <DescriptionTableHelp>
                              <span>{ item.title }</span>
                              <span>Data da solitação - { dateArray[2] + '/' + dateArray[1] + '/' + dateArray[0] }</span>
                            </DescriptionTableHelp>
                            <StatusTableHelp></StatusTableHelp>
                            <ToViewTableHelp onClick={() => openModalSeeCalled(item.description)}><p>visualizar</p></ToViewTableHelp>
                          </tr>
                        })
                      }
                    </tbody> 
                  }
                </TableHelp>
              </ContainerTableHelp>
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

        const respost: ValidateTokenResults = response.data;

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