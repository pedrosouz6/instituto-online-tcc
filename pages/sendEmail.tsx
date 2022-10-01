import Head from "next/head"

import { Header } from "../src/components/Header";
import { Navbar } from "../src/components/Navbar";
import { Container } from "../src/components/Container"; 
import { Title } from "../src/components/Title";
import { Button } from "../src/components/Button";
import { 
    ContainerSendEmail,
    FormSendEmail,
    FormButtonSendEmail
} from '../styles/pages/sendEmail';
import { ValidateTokenResults } from "./users";
import { axios } from "../src/axios";
import { parseCookies } from "nookies";

export default function sendEmail() {
    return (
        <>
            <Head>
                <title>Enviar Email</title>
            </Head>

            <Navbar />
            <Header />

            <Container>
                <ContainerSendEmail>
                    <Title text="Disparo de E-mail" />
                    <FormSendEmail>
                        <label htmlFor="subject">Assunto</label>
                        <input type="text" id="subject" />

                        <label htmlFor="body">Corpo do E-mail</label>
                        <textarea id="body" />

                        <FormButtonSendEmail>
                            <Button>
                                Enviar
                            </Button>
                        </FormButtonSendEmail>
                    </FormSendEmail>
                </ContainerSendEmail>
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