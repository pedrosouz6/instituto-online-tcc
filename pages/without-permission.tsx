import Head from "next/head";
import { parseCookies } from "nookies";

import { User } from '../src/contexts/Users';
import { axios } from '../src/axios/';
import { useUsers } from "../src/hooks/Users";

import { ContainerWithoutPermission } from "../styles/pages/withoutPermission";

import { Container } from "../src/components/Container";
import { Header } from "../src/components/Header";
import { Navbar } from "../src/components/Navbar";

import { ValidateTokenResults } from "./users";

interface WithoutPermissionProps {
    results: User
}

export default function WithoutPermission({ results }: WithoutPermissionProps) {
    const { user, setUser, setUserType} = useUsers();
    
    setUserType(results.office);
    setUser(results);

    return (
        <>
            <Head>
                <title>Without Permission</title>
            </Head>

            <Navbar />
            <Header />

            <Container>
                <ContainerWithoutPermission>
                    <h1>{ user.name }, somente administradores podem acessar essa página.</h1>
                </ContainerWithoutPermission>
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
        
        if(respost.results[0].office === 'administrador') {
            return {    
                redirect: {
                    destination: '/users',
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