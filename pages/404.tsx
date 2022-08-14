import Head from "next/head";
import Link from 'next/link';

import { 
    Container404,
    Section404
} from "../styles/pages/404";

export default function NotFound404() {
    return (
        <Container404>
            <Head>
                <title>404 - Página não encontrada</title>
            </Head>

            <Section404>
                <p>OOPS!</p>
                <h1>Erro 4<span>0</span>4: Pagina não encontrada</h1>

                <Link href="/">Retorna à home</Link>
            </Section404>
        </Container404>
    )
}