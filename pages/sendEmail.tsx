import Head from "next/head"

import { Header } from "../src/components/Header";
import { Navbar } from "../src/components/Navbar";
import { Container } from "../styles/style";
import { Title } from "../src/components/Title";
import { Button } from "../src/components/Button";
import { 
    ContainerSendEmail,
    FormSendEmail,
    FormButtonSendEmail
} from '../styles/pages/sendEmail';

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