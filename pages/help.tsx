import Head from 'next/head';

import { Button } from '../src/components/Button';
import { Header } from '../src/components/Header';
import { Navbar } from '../src/components/Navbar';
import { Title } from '../src/components/Title';
import { Container } from '../styles/style';
import { 
    ContainerHelp,
    FormButtonSendComment  ,
    FormHelp
} from '../styles/pages/help';

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