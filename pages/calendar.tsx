import Head from "next/head";
import { parseCookies } from "nookies";
import { axios } from "../src/axios";
import { Container } from "../src/components/Container";
import { Header } from "../src/components/Header";
import { Navbar } from "../src/components/Navbar";
import { User } from "../src/contexts/Users";
import { useUsers } from "../src/hooks/Users";
import { ValidateTokenResults } from "./users";

interface HelpCalender {
    results: User
  }

export default function Calender({ results }: HelpCalender) {

    const { setUser, setUserType } = useUsers();

    setUser(results);
    setUserType(results.office);

    return (
        <>
            <Head>
                <title>Calendário</title>
            </Head>

            <Navbar />
            <Header />


            <Container>
            <h1>Calendário</h1> 
                
                <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FSao_Paulo&showTitle=0&showNav=1&showDate=1&showPrint=0&title=Instituto%20Manasses&showTabs=0&showCalendars=0&showTz=0&src=YjhhYWIxNjZhZjIwNGExNzFhNzBlOTQyYzg4MmE0MWQwMzAzMTk3NjNiYzVmNTQyOGZjZmIzODEyMzE4NTQyMkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%234285F4" style={{border: 'none', background: 'none'}} width="100%" height="600" scrolling="no"></iframe>
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