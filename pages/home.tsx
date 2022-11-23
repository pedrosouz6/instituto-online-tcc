import { Navbar } from "../src/components/Navbar"
import { Header } from "../src/components/Header"
import Head from "next/head"
import { parseCookies } from "nookies";
import { axios } from "../src/axios";
import { ValidateTokenResults } from "./docs";
import { useUsers } from "../src/hooks/Users";
import { User } from "../src/contexts/Users";
import { useEffect, useState } from "react";
import { Container } from "../src/components/Container";
import { Card, ContainerCards, GreetingMessageHeader, CardHeader, CardBody } from "../styles/pages/home";

interface UsersProps {
    results: User
}

interface GetUsersResults {
  message: string,
  error: boolean,
  totalPages: number,
  totalUsers: number,
  results: Array<User>
}

export default function Home({ results }: UsersProps) {

    const { updatedUsers, setUser, setUserType, user } = useUsers();

    setUser(results);
    setUserType(results.office);

    const [ greetingMessage, setGreetingMessage ] = useState<string | null>(null);
    const [ allUsers, setAllUsers ] = useState<null | number>(null);

    useEffect(() => {
      const hours = new Date().getHours();

      if(hours > -1) {
          setGreetingMessage('Bom dia');
      } 

      if(hours > 11) {
          setGreetingMessage('Boa tarde');
      }

      if(hours > 17) {
          setGreetingMessage('Boa noite');
      }
  }, [])

  useEffect(() => {
    const getUser = async (): Promise<void> => {

        try {
            const response = await axios.get(`/get-users/2/1/null`);
            const respost: GetUsersResults = await response.data;

            setAllUsers(respost.totalUsers);

        } catch(err) {
        }
    }

    getUser();
}, [updatedUsers]);

    return (
        <>
            <Head>
                <title>Home</title>
            </Head>

            <Navbar />
            <Header />

            <Container>
              <GreetingMessageHeader>{ greetingMessage }, <span>{ user.name }</span>! <br /> Seja bem-vindo ao Instituto Online.</GreetingMessageHeader>

              <ContainerCards>
                <Card>
                  <CardHeader>
                    <span>Usuários cadastrados</span>
                  </CardHeader>
                  <CardBody>
                    <p><strong>{ allUsers }</strong> <span>usuários</span></p>
                  </CardBody>
                </Card>

                <Card>
                <CardHeader>
                    <span>Balé</span>
                  </CardHeader>

                  <CardBody>
                    <span>Balé é um estilo de dança oferecida pelo instituto manasses.</span>
                  </CardBody>
                </Card>

                <Card>
                <CardHeader>
                    <span>Creches comunitárias</span>
                  </CardHeader>

                  <CardBody>
                    <span>As creches comunitárias são creches que não possuem ajuda do governo.</span>
                  </CardBody>
                </Card>

                <Card>
                <CardHeader>
                    <span>Judô</span>
                  </CardHeader>

                  <CardBody>
                    <span>Judô é uma arte marcial japonesa, praticada como esporte de combate.</span>
                  </CardBody>
                </Card>

                <Card>
                <CardHeader>
                    <span>Horta</span>
                  </CardHeader>

                  <CardBody>
                    <span>As Hortas Comunitárias se desenvolvem através do trabalho voluntário da comunidade.</span>
                  </CardBody>
                </Card>
              </ContainerCards>
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