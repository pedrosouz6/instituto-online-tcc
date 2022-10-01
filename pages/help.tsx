import Head from 'next/head';

import { Button } from '../src/components/Button';
import { Header } from '../src/components/Header';
import { Navbar } from '../src/components/Navbar';
import { Title } from '../src/components/Title';
import { Container } from '../src/components/Container'; 

import { 
    ContainerHelp,
    FormButtonSendComment,
    FormHelp
} from '../styles/pages/help';
import { ValidateTokenResults } from './users';
import { axios } from '../src/axios';
import { parseCookies } from 'nookies';

export default function Help() {
    return (
        <>
            <Head>
                <title>Ajuda</title>
            </Head>

            <Header />
            <Navbar />

            <Container>
                <ContainerHelp>
                    <Title text='Tire suas Dúvidas' />

                    <FormHelp>
                        <label htmlFor='problemTitle'>Títuto do problema</label>
                        <input type='text' id='problemTitle' />

                        <label htmlFor='comment'>Faça um Breve Comentário Sobre Seu Problema</label>
                        <textarea id='comment' />

                        <FormButtonSendComment>
                            <Button>
                                Enviar
                            </Button>
                        </FormButtonSendComment>
                    </FormHelp>
                </ContainerHelp>
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