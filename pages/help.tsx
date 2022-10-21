import Head from 'next/head';
import { useState } from 'react';
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

export default function Help({ results }: HelpProps) {
  
  const { setUser, setUserType } = useUsers();

  setUser(results);
  setUserType(results.office);

  const [ showUpCalled, setShowUpCalled ] = useState(true);
  const [ showModalNewCalled, setShowModalNewCalled ] = useState(false);

  function openModalNewCalled() {
    setShowModalNewCalled(true);
  }

  function closeModalNewCalled() {
    setShowModalNewCalled(false);
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
                { showModalNewCalled && <ModalNewCalled closeModalNewCalled={closeModalNewCalled} /> }
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
                      <td colSpan={3}>DESCRIÇÃO</td>
                    </tr>
                  </thead>
                  { showUpCalled &&
                    <tbody>
                      <tr>
                        <td>3213213</td>
                        <DescriptionTableHelp>
                          <span>Bug</span>
                          <span>Data de solitação</span>
                        </DescriptionTableHelp>
                        <StatusTableHelp><span>em andamento</span></StatusTableHelp>
                        <ToViewTableHelp><p>visualizado</p></ToViewTableHelp>
                      </tr>

                      <tr>
                        <td>3213213</td>
                        <DescriptionTableHelp>
                          <span>Bug</span>
                          <span>Data de solitação</span>
                        </DescriptionTableHelp>
                        <StatusTableHelp><span>em</span></StatusTableHelp>
                        <ToViewTableHelp><p>visualizado</p></ToViewTableHelp>
                      </tr>
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